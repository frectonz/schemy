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

fn replace_leading_digit_with_word(s: &str) -> String {
    let mut chars = s.chars();
    match chars.next() {
        Some(c) if c.is_ascii_digit() => {
            let word = match c {
                '0' => "Zero",
                '1' => "One",
                '2' => "Two",
                '3' => "Three",
                '4' => "Four",
                '5' => "Five",
                '6' => "Six",
                '7' => "Seven",
                '8' => "Eight",
                '9' => "Nine",
                _ => unreachable!(),
            };
            format!("{}{}", word, chars.collect::<String>())
        }
        _ => s.to_string(),
    }
}

fn escape_if_keyword(s: &str) -> String {
    const KEYWORDS: &[&str] = &[
        "as", "break", "const", "continue", "crate", "else", "enum", "extern", "false", "fn",
        "for", "if", "impl", "in", "let", "loop", "match", "mod", "move", "mut", "pub", "ref",
        "return", "self", "Self", "static", "struct", "super", "trait", "true", "type", "unsafe",
        "use", "where", "while", "async", "await", "dyn", "abstract", "become", "box", "do",
        "final", "macro", "override", "priv", "try", "typeof", "unsized", "virtual", "yield",
    ];

    if KEYWORDS.contains(&s) {
        format!("_{}", s)
    } else {
        s.to_string()
    }
}

impl Item {
    fn ident(&self) -> proc_macro2::TokenStream {
        let name = self.label.value();
        let name = replace_leading_digit_with_word(name);
        let name = escape_if_keyword(&name);
        let name = syn::Ident::new(&name, proc_macro2::Span::call_site());

        quote! {
            #name
        }
    }

    fn enum_ident(&self) -> proc_macro2::TokenStream {
        let name = self.label.value();
        let name = replace_leading_digit_with_word(name);
        let name = escape_if_keyword(&name);
        let name = format!("{name}Enum");
        let name = syn::Ident::new(&name, proc_macro2::Span::call_site());

        quote! {
            #name
        }
    }

    fn doc_comment(&self) -> proc_macro2::TokenStream {
        let comment = self.comment.value();

        let comments: Vec<_> = comment
            .trim()
            .lines()
            .map(|line| {
                let padded = format!(" {}", line.trim());
                quote! {
                    #[doc = #padded]
                }
            })
            .collect();

        quote! {
            #(#comments)*
        }
    }
}

mod constants {
    pub const RDF_CLASS: &str = "rdfs:Class";
    pub const RDF_PROPERTY: &str = "rdf:Property";
}

struct SchemaDefinitions {
    types: IndexMap<Str, Item>,
    properties: IndexMap<Str, Item>,
    enumerations: IndexMap<Str, Vec<Arc<Item>>>,
}

type ResolvedTypes = Vec<ResolvedType>;

#[derive(Debug)]
struct ResolvedType {
    type_id: Str,
    properties: HashSet<ResolvedPropertyType>,
}

#[derive(Debug, Eq, Hash, PartialEq)]
enum ResolvedPropertyType {
    Single(Str),
    Aliased(List<Str>),
}

impl ResolvedPropertyType {
    fn first(&self) -> &str {
        match self {
            ResolvedPropertyType::Single(field) => field,
            ResolvedPropertyType::Aliased(items) => items.first().unwrap(),
        }
    }
}

impl SchemaDefinitions {
    fn read() -> Result<SchemaDefinitions> {
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

    fn resolve_properties(&self) -> ResolvedTypes {
        let mut resolved_props: IndexMap<Str, HashSet<ResolvedPropertyType>> = IndexMap::new();

        for (type_id, _type_item) in &self.types {
            let mut all_props_set = HashSet::new();
            let mut types_to_visit = vec![type_id.clone()];
            let mut visited_types = HashSet::new();

            while let Some(current_type_id) = types_to_visit.pop() {
                // Avoid cycles
                if !visited_types.insert(current_type_id.clone()) {
                    continue;
                }

                // Find properties directly associated with the current type
                for (prop_id, prop_item) in &self.properties {
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
                if let Some(current_type_item) = self.types.get(&current_type_id) {
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

            resolved_props.insert(type_id.clone(), all_props_set);
        }

        let types: Vec<_> = resolved_props
            .into_iter()
            .map(|(key, value)| ResolvedType {
                type_id: key,
                properties: value,
            })
            .collect();

        types
    }

    fn enumerations_module(&self) -> proc_macro2::TokenStream {
        let enumeration_types = self.enumerations.iter().map(|(typ, variants)| {
            let enum_type = self.types.get(typ).unwrap();

            let enum_name = enum_type.enum_ident();
            let enum_comment = enum_type.doc_comment();

            let variant_defs = variants.iter().map(|item| {
                let variant_name = item.ident();
                let variant_comment = item.doc_comment();

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

        quote! {
            #(#enumeration_types)*
        }
    }

    fn types_module(&self) -> proc_macro2::TokenStream {
        let resolved = self.resolve_properties();
        let enumeration_types = resolved.into_iter().map(|class| {
            let class_item = self.types.get(&class.type_id).unwrap();

            let class_name = class_item.ident();
            let class_comments = class_item.doc_comment();

            let field_defs = class.properties.iter().map(|item| {
                let property = self.properties.get(item.first()).unwrap();

                let property_name = property.ident();
                let property_comment = property.doc_comment();

                let range_includes = property.range_includes.as_ref().unwrap();

                let property_type = match range_includes {
                    ItemRef::Single(item_id) => {
                        let class_name = self.types.get(&item_id.item_id).map(|class| {
                            if self.enumerations.get(&class.id.item_id).is_some() {
                                class.enum_ident()
                            } else {
                                class.ident()
                            }
                        });

                        class_name
                    }
                    ItemRef::List(item_ids) => None,
                }
                .unwrap_or(quote! { usize });

                quote! {
                    #property_comment
                    #property_name: SingleOrList<#property_type>
                }
            });

            quote! {
                #class_comments
                pub struct #class_name {
                    #(#field_defs),*
                }
            }
        });

        quote! {
            #(#enumeration_types)*
        }
    }
}

fn main() -> color_eyre::Result<()> {
    let definitions = SchemaDefinitions::read()?;

    let enumerations = definitions.enumerations_module();
    let types = definitions.types_module();

    let file = quote! {
        enum SingleOrList<T> {
            Single(T),
            List(Box<[T]>),
        }

        #enumerations
        #types
    };

    let syntax_tree: syn::File = syn::parse2(file).expect("Failed to parse tokens");
    let file = prettyplease::unparse(&syntax_tree);

    println!("{file}");

    Ok(())
}
