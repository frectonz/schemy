use std::sync::Arc;

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

fn main() -> color_eyre::Result<()> {
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

    let enumeration_types = enumerations.iter().map(|(typ, variants)| {
        let enum_type = types.get(typ).unwrap();
        let enum_name = enum_type.label.value();
        let enum_name = syn::Ident::new(enum_name, proc_macro2::Span::call_site());
        let enum_comment = doc_attrs(enum_type.comment.value());

        let variant_defs = variants.iter().map(|item| {
            let variant_name = item.label.value();
            let variant_name = syn::Ident::new(variant_name, proc_macro2::Span::call_site());
            let variant_comment = doc_attrs(item.comment.value());
            quote! {
                #variant_comment
                #variant_name
            }
        });

        quote! {
            #enum_comment
            pub enum #enum_name {
                #(#variant_defs),*
            }
        }
    });

    let enumerations_module = quote! {
        #(#enumeration_types)*
    };

    let syntax_tree: syn::File = syn::parse2(enumerations_module).expect("Failed to parse tokens");
    let out = prettyplease::unparse(&syntax_tree);

    println!("{out}");

    Ok(())
}
