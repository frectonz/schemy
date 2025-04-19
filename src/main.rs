use std::{collections::HashSet, sync::Arc};

use color_eyre::Result;
use indexmap::IndexMap;
use quote::quote;
use serde::Deserialize;

type Str = Box<str>;
type List<T> = Box<[T]>;

#[derive(Deserialize, Debug)]
pub struct SchemaOrgDefinition {
    #[serde(rename = "@context")]
    pub context: IndexMap<Str, Str>,
    #[serde(rename = "@graph")]
    pub graph: List<Item>,
}

#[derive(Deserialize, Debug)]
pub struct ItemId {
    #[serde(rename = "@id")]
    pub item_id: Str,
}

#[derive(Deserialize, Debug)]
#[serde(untagged)]
pub enum ItemRef {
    Single(ItemId),
    List(List<ItemId>),
}

impl ItemRef {
    /// Helper to get just the ID strings from an ItemRef
    pub fn get_ids(&self) -> Vec<&str> {
        match self {
            ItemRef::Single(item) => vec![&item.item_id],
            ItemRef::List(items) => items.iter().map(|item| item.item_id.as_ref()).collect(),
        }
    }
}

#[derive(Deserialize, Debug)]
#[serde(untagged)]
pub enum ItemType {
    Single(Str),
    List(List<Str>),
}

impl ItemType {
    pub fn includes(&self, type_id: &str) -> bool {
        match self {
            ItemType::Single(s) => s.as_ref() == type_id,
            ItemType::List(list) => list.iter().any(|s| s.as_ref() == type_id),
        }
    }
}

#[derive(Deserialize, Debug)]
#[serde(untagged)]
pub enum Text {
    Simple(Str),
    Tagged(LanguageText),
}

impl Text {
    pub fn value(&self) -> &str {
        match self {
            Text::Simple(val) => val,
            Text::Tagged(val) => &val.value,
        }
    }
}

#[derive(Deserialize, Debug)]
pub struct LanguageText {
    #[serde(rename = "@language")]
    pub language: Str,
    #[serde(rename = "@value")]
    pub value: Str,
}

#[derive(Deserialize, Debug)]
pub struct Item {
    #[serde(flatten)]
    pub id: ItemId,

    #[serde(rename = "@type")]
    pub item_type: ItemType,
    #[serde(rename = "rdfs:label")]
    pub label: Text,
    #[serde(rename = "rdfs:comment")]
    pub comment: Text,
    #[serde(rename = "rdfs:subClassOf")]
    pub sub_class_of: Option<ItemRef>,
    #[serde(rename = "rdfs:subPropertyOf")]
    pub sub_property_of: Option<ItemRef>,

    #[serde(rename = "schema:rdfs:label")]
    pub rdfs_label: Option<Str>,

    #[serde(rename = "schema:source")]
    pub source: Option<ItemRef>,
    #[serde(rename = "schema:sameAs")]
    pub same_as: Option<ItemRef>,
    #[serde(rename = "schema:isPartOf")]
    pub is_part_of: Option<ItemId>,
    #[serde(rename = "schema:inverseOf")]
    pub inverse_of: Option<ItemId>,
    #[serde(rename = "schema:contributor")]
    pub contributor: Option<ItemRef>,
    #[serde(rename = "schema:supersededBy")]
    pub superseded_by: Option<ItemId>,
    #[serde(rename = "schema:rangeIncludes")]
    pub range_includes: Option<ItemRef>,
    #[serde(rename = "schema:domainIncludes")]
    pub domain_includes: Option<ItemRef>,

    #[serde(rename = "skos:closeMatch")]
    pub close_match: Option<ItemRef>,
    #[serde(rename = "skos:exactMatch")]
    pub exact_match: Option<ItemId>,

    #[serde(rename = "owl:equivalentClass")]
    pub equivalent_class: Option<ItemRef>,
    #[serde(rename = "owl:equivalentProperty")]
    pub equivalent_property: Option<ItemId>,
}

mod constants {
    pub const RDF_CLASS: &str = "rdfs:Class";
    pub const RDF_PROPERTY: &str = "rdf:Property";
}

fn doc_attrs(comment: &str) -> proc_macro2::TokenStream {
    let comments: Vec<_> = comment
        .lines()
        .map(|line| {
            if line.starts_with(' ') {
                quote! {
                    #[doc = #line]
                }
            } else {
                let padded = format!(" {}", line);
                quote! {
                    #[doc = #padded]
                }
            }
        })
        .collect();

    quote! {
        #(#comments)*
    }
}

struct SchemaDefinitions {
    types: IndexMap<Str, Item>,
    properties: IndexMap<Str, Item>,
    enumerations: IndexMap<Str, Vec<Arc<Item>>>,
}

fn read_definitions() -> color_eyre::Result<SchemaDefinitions> {
    let file = std::fs::read_to_string("schema/schemaorg-current-https.jsonld")?;
    let schema: SchemaOrgDefinition = serde_json::from_str(&file)?;

    let mut types = IndexMap::new();
    let mut properties = IndexMap::new();
    let mut enumerations = IndexMap::new();

    for item in schema.graph {
        if item.item_type.includes(constants::RDF_CLASS) {
            types.insert(item.id.item_id.clone(), item);
        } else if item.item_type.includes(constants::RDF_PROPERTY) {
            properties.insert(item.id.item_id.clone(), item);
        } else {
            let item = Arc::new(item);
            match &item.item_type {
                ItemType::Single(typ) => {
                    enumerations
                        .entry(typ.clone())
                        .and_modify(|x| Vec::push(x, item.clone()))
                        .or_insert_with(|| vec![item.clone()]);
                }
                ItemType::List(typs) => {
                    let typs = typs.clone();
                    for typ in typs {
                        enumerations
                            .entry(typ)
                            .and_modify(|x| Vec::push(x, item.clone()))
                            .or_insert_with(|| vec![item.clone()]);
                    }
                }
            }
        }
    }

    Ok(SchemaDefinitions {
        types,
        properties,
        enumerations,
    })
}

type ResolvedTypes = Vec<ResolvedType>;

#[derive(Debug)]
struct ResolvedType {
    type_id: Str,
    properties: Vec<ResolvedPropertyType>,
}

#[derive(Debug, Eq, Hash, PartialEq)]
enum ResolvedPropertyType {
    Single(Str),
    Aliased(List<Str>),
}

fn resolve_properties(definitions: &SchemaDefinitions) -> Result<ResolvedTypes> {
    let mut resolved_props: IndexMap<Str, Vec<ResolvedPropertyType>> = IndexMap::new();

    for (type_id, _type_item) in &definitions.types {
        let mut all_props_set = HashSet::new();
        let mut types_to_visit = vec![type_id.clone()];
        let mut visited_types = HashSet::new();

        while let Some(current_type_id) = types_to_visit.pop() {
            // Avoid cycles
            if !visited_types.insert(current_type_id.clone()) {
                continue;
            }

            // Find properties directly associated with the current type
            for (prop_id, prop_item) in &definitions.properties {
                if let Some(domain_ref) = &prop_item.domain_includes {
                    if domain_ref.get_ids().contains(&current_type_id.as_ref()) {
                        let current_prop = prop_id.clone();
                        if let Some(item) = &prop_item.superseded_by {
                            all_props_set.insert(ResolvedPropertyType::Aliased(Box::new([
                                current_prop,
                                item.item_id.clone(),
                            ])));
                        } else {
                            all_props_set.insert(ResolvedPropertyType::Single(current_prop));
                        }
                    }
                }
            }

            // Add parents to the visit list
            if let Some(current_type_item) = definitions.types.get(&current_type_id) {
                if let Some(parent_ref) = &current_type_item.sub_class_of {
                    types_to_visit.extend(
                        parent_ref
                            .get_ids()
                            .into_iter()
                            .map(|id_str| id_str.to_owned().into_boxed_str()),
                    );
                }
            }
        }

        // Convert HashSet to Vec for stable order (optional, could sort later)
        resolved_props.insert(type_id.clone(), all_props_set.into_iter().collect());
    }

    let types: Vec<_> = resolved_props
        .into_iter()
        .map(|(key, value)| ResolvedType {
            type_id: key,
            properties: value,
        })
        .collect();

    Ok(types)
}

fn main() -> color_eyre::Result<()> {
    // let SchemaDefinitions {
    //     types,
    //     properties,
    //     enumerations,
    // } = read_definitions()?;

    let out = resolve_properties(&read_definitions()?)?;
    dbg!(out);

    // let enumeration_types = enumerations.iter().map(|(typ, variants)| {
    //     let enum_type = types.get(typ).unwrap();
    //     let enum_name = enum_type.label.value();
    //     let enum_name = syn::Ident::new(enum_name, proc_macro2::Span::call_site());
    //     let enum_comment = doc_attrs(enum_type.comment.value());

    //     let variant_defs = variants.iter().map(|item| {
    //         let variant_name = item.label.value();
    //         let variant_name = syn::Ident::new(variant_name, proc_macro2::Span::call_site());
    //         let variant_comment = doc_attrs(item.comment.value());
    //         quote! {
    //             #variant_comment
    //             #variant_name
    //         }
    //     });

    //     quote! {
    //         #enum_comment
    //         pub enum #enum_name {
    //             #(#variant_defs),*
    //         }
    //     }
    // });

    // let enumerations_module = quote! {
    //     #(#enumeration_types)*
    // };

    // let syntax_tree: syn::File = syn::parse2(enumerations_module).expect("Failed to parse tokens");
    // let out = prettyplease::unparse(&syntax_tree);

    // println!("{out}");

    Ok(())
}
