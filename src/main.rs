use std::{borrow::Cow, collections::HashSet, sync::Arc};

use color_eyre::Result;
use heck::ToSnakeCase;
use indexmap::IndexMap;
use proc_macro2::{Span, TokenStream};
use quote::{format_ident, quote};
use serde::Deserialize;
use syn::Ident;

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
    pub fn get_ids(&self) -> Box<dyn Iterator<Item = Str> + '_> {
        match self {
            ItemRef::Single(item) => Box::new(std::iter::once(item.item_id.clone())),
            ItemRef::List(items) => Box::new(items.iter().map(|item| item.item_id.clone())),
        }
    }

    pub fn includes(&self, item_ref: &str) -> bool {
        match self {
            ItemRef::Single(item) => item.item_id.as_ref() == item_ref,
            ItemRef::List(items) => items.iter().any(|item| item.item_id.as_ref() == item_ref),
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

mod string_helpers {
    use std::{borrow::Cow, collections::HashSet, sync::LazyLock};

    pub fn capitalize(s: Cow<'_, str>) -> Cow<'_, str> {
        let mut chars = s.chars();

        match chars.next() {
            None => Cow::Borrowed(""),

            Some(first) => {
                let mut upper_iter = first.to_uppercase();
                let first_upper_char = upper_iter.next();

                if let Some(first_upper_char) = first_upper_char {
                    // Check if there's a second char (like in 'ß' -> "SS")
                    if upper_iter.next().is_none() && first_upper_char == first {
                        return s;
                    }
                }

                let remainder = chars.as_str();

                // Estimate capacity (allow a bit extra for potential expansion like 'ß'->'SS')
                let mut result = String::with_capacity(s.len() + 3);

                result.extend(first_upper_char);
                result.push_str(remainder);

                Cow::Owned(result)
            }
        }
    }

    pub fn replace_leading_digit_with_word(s: Cow<'_, str>) -> Cow<'_, str> {
        if s.bytes().next().is_none_or(|b| !b.is_ascii_digit()) {
            s
        } else {
            let mut chars = s.chars();
            let first_char = chars.next();

            let word = match first_char {
                Some('0') => "Zero",
                Some('1') => "One",
                Some('2') => "Two",
                Some('3') => "Three",
                Some('4') => "Four",
                Some('5') => "Five",
                Some('6') => "Six",
                Some('7') => "Seven",
                Some('8') => "Eight",
                Some('9') => "Nine",
                _ => return s,
            };

            let remainder = chars.as_str();

            let capacity = word.len() + remainder.len();
            let mut result = String::with_capacity(capacity);
            result.push_str(word);
            result.push_str(remainder);

            Cow::Owned(result)
        }
    }

    static KEYWORD_SET: LazyLock<HashSet<&'static str>> = LazyLock::new(|| {
        [
            "as", "break", "const", "continue", "crate", "else", "enum", "extern", "false", "fn",
            "for", "if", "impl", "in", "let", "loop", "match", "mod", "move", "mut", "pub", "ref",
            "return", "self", "Self", "static", "struct", "super", "trait", "true", "type",
            "unsafe", "use", "where", "while", "async", "await", "dyn", "abstract", "become",
            "box", "do", "final", "macro", "override", "priv", "try", "typeof", "unsized",
            "virtual", "yield",
        ]
        .into_iter()
        .collect()
    });

    pub fn escape_if_keyword(s: Cow<'_, str>) -> Cow<'_, str> {
        if KEYWORD_SET.contains(s.as_ref()) {
            let escaped_string = format!("_{}", s);
            Cow::Owned(escaped_string)
        } else {
            s
        }
    }
}

use string_helpers::*;

impl Item {
    fn ident(&self) -> TokenStream {
        let name = self.label.value();
        let name = Cow::Borrowed(name);
        let name = replace_leading_digit_with_word(name);
        let name = escape_if_keyword(name);
        let name = Ident::new(&name, Span::call_site());

        quote! {
            #name
        }
    }

    fn enum_ident(&self) -> TokenStream {
        let name = self.label.value();
        let name = Cow::Borrowed(name);
        let name = replace_leading_digit_with_word(name);
        let name = escape_if_keyword(name);
        let name = format!("{name}Enum");
        let name = Cow::Owned(name);
        let name = Ident::new(&name, Span::call_site());

        quote! {
            #name
        }
    }

    fn snake_case_ident(&self) -> Ident {
        let name = self.label.value();
        let name = Cow::Borrowed(name);
        let name = replace_leading_digit_with_word(name);
        let name = name.to_snake_case();
        let name = Cow::Owned(name);
        let name = escape_if_keyword(name);

        Ident::new(&name, Span::call_site())
    }

    fn doc_comment(&self) -> TokenStream {
        let comment = self.comment.value();

        let comments = comment.trim().lines().map(|line| line.trim()).map(|line| {
            let padded = format!(" {line}");
            quote! {
                #[doc = #padded]
            }
        });

        quote! {
            #(#comments)*
        }
    }
}

mod constants {
    pub const RDF_CLASS: &str = "rdfs:Class";
    pub const RDF_PROPERTY: &str = "rdf:Property";
}

fn basic_type_to_rust(basic: &str) -> Option<TokenStream> {
    match basic {
        "schema:DataType" => Some(quote! { String }),
        "schema:Boolean" => Some(quote! { String }),
        "schema:Date" => Some(quote! { String }),
        "schema:DateTime" => Some(quote! { String }),
        "schema:Number" => Some(quote! { f32}),
        "schema:Float" => Some(quote! { f32 }),
        "schema:Integer" => Some(quote! { i32 }),
        "schema:Text" => Some(quote! { String }),
        "schema:CssSelectorType" => Some(quote! { String }),
        "schema:XPathType" => Some(quote! { String }),
        "schema:URL" => Some(quote! { String }),
        "schema:Time" => Some(quote! { String }),
        _ => None,
    }
}

fn field_enum_name(type_name: String, property_name: &str) -> Ident {
    let capitalized_field_name = capitalize(Cow::Borrowed(property_name));
    let enum_name = format!("{type_name}{capitalized_field_name}FieldEnum");
    Ident::new(&enum_name, Span::call_site())
}

fn all_equal<T, I>(mut iter: I) -> bool
where
    T: PartialEq,
    I: Iterator<Item = T>,
{
    if let Some(first) = iter.next() {
        iter.all(|x| x == first)
    } else {
        true
    }
}

struct SchemaDefinitions {
    types: IndexMap<Str, Item>,
    properties: IndexMap<Str, Item>,
    enumerations: IndexMap<Str, Vec<Arc<Item>>>,
}

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

    fn resolve_properties(&self) -> impl Iterator<Item = ResolvedType> {
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
                        if domain_ref.includes(current_type_id.as_ref()) {
                            let current_prop = prop_id.clone();

                            match &prop_item.superseded_by {
                                Some(item) => {
                                    let aliased = Box::new([current_prop, item.item_id.clone()]);
                                    all_props_set.insert(ResolvedPropertyType::Aliased(aliased));
                                }
                                None => {
                                    all_props_set
                                        .insert(ResolvedPropertyType::Single(current_prop));
                                }
                            };
                        }
                    }
                }

                // Add parents to the visit list
                let sub_class_of = self
                    .types
                    .get(&current_type_id)
                    .and_then(|typ| typ.sub_class_of.as_ref());
                if let Some(parent_ref) = sub_class_of {
                    types_to_visit.extend(parent_ref.get_ids());
                }
            }

            resolved_props.insert(type_id.clone(), all_props_set);
        }

        resolved_props.into_iter().map(|(key, value)| ResolvedType {
            type_id: key,
            properties: value,
        })
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
                #[derive(Debug, serde::Deserialize, uniffi::Enum)]
                #[serde(untagged)]
                pub enum #enum_name {
                    #(#variant_defs),*
                }
            }
        });

        quote! {
            #(#enumeration_types)*
        }
    }

    fn type_ident(&self, item_id: &ItemId) -> Option<TokenStream> {
        let basic_type = basic_type_to_rust(&item_id.item_id);
        let class_name = self.types.get(&item_id.item_id).map(|class| {
            if self.enumerations.get(&class.id.item_id).is_some() {
                class.enum_ident()
            } else {
                class.ident()
            }
        });

        basic_type.or(class_name)
    }

    fn name_ident(&self, item_id: &ItemId) -> Option<TokenStream> {
        let class_name = self.types.get(&item_id.item_id).map(|class| {
            if self.enumerations.get(&class.id.item_id).is_some() {
                class.enum_ident()
            } else {
                class.ident()
            }
        });

        class_name
    }

    fn types_module(&self) -> impl Iterator<Item = (Ident, TokenStream)> {
        let resolved = self.resolve_properties();

        resolved.into_iter().filter_map(|class| {
            if basic_type_to_rust(&class.type_id).is_some() {
                return None;
            }

            let class_item = self.types.get(&class.type_id).unwrap();

            let class_name = class_item.ident();
            let class_comments = class_item.doc_comment();
            let class_module_name = class_item.snake_case_ident();

            let field_defs = class.properties.iter().map(|item| {
                let property = self.properties.get(item.first()).unwrap();

                let property_name = property.snake_case_ident();
                let property_comment = property.doc_comment();

                let property_rename = property.label.value();
                let property_rename = quote! {
                    #[serde(rename = #property_rename)]
                };

                let range_includes = property.range_includes.as_ref().unwrap();

                let property_type = match range_includes {
                    ItemRef::Single(item_id) => self.type_ident(item_id).unwrap(),
                    ItemRef::List(_) => {
                        let enum_name =
                            field_enum_name(class_name.to_string(), property.label.value());

                        quote! { #enum_name }
                    }
                };

                quote! {
                    #property_comment
                    #property_rename
                    #[serde_as(as = "OneOrMany<_, PreferOne>")]
                    pub #property_name: Vec<#property_type>
                }
            });

            let range_enums = class.properties.iter().filter_map(|item| {
                let property = self.properties.get(item.first()).unwrap();

                let property_comment = property.doc_comment();
                let range_includes = property.range_includes.as_ref().unwrap();

                match range_includes {
                    ItemRef::Single(_) => None,
                    ItemRef::List(item_ids) => {
                        let enum_name =
                            field_enum_name(class_name.to_string(), property.label.value());

                        let variant_defs: Vec<_> = item_ids
                            .into_iter()
                            .map(|item| {
                                let item = self.types.get(&item.item_id).unwrap();

                                let variant_name = self.name_ident(&item.id).unwrap();
                                let variant_type = match basic_type_to_rust(&item.id.item_id) {
                                    Some(basic_type) => basic_type,
                                    None => quote! { #variant_name },
                                };

                                let variant_comment = item.doc_comment();

                                (variant_comment, variant_name, variant_type)
                            })
                            .collect();

                        let all_the_same =
                            all_equal(variant_defs.iter().map(|(_, _, typ)| typ.to_string()));

                        if all_the_same {
                            let (_, _, variant_type) = variant_defs.first().unwrap().clone();

                            let variant_comments = variant_defs
                                .into_iter()
                                .map(|(variant_comment, _, _)| variant_comment);

                            Some(quote! {
                                #property_comment
                                #(#variant_comments)*
                                pub type #enum_name = #variant_type;
                            })
                        } else {
                            let variant_defs = variant_defs.into_iter().map(
                                |(variant_comment, variant_name, variant_type)| {
                                    quote! {
                                        #variant_comment
                                        #variant_name(#variant_type)
                                    }
                                },
                            );

                            Some(quote! {
                                #property_comment
                                #[derive(Debug, serde::Deserialize, uniffi::Enum)]
                                #[serde(untagged)]
                                pub enum #enum_name {
                                    #(#variant_defs),*
                                }
                            })
                        }
                    }
                }
            });

            Some((
                class_module_name,
                quote! {
                    #(#range_enums)*

                    #class_comments
                    #[serde_as]
                    #[derive(Debug, serde::Deserialize, uniffi::Record)]
                    pub struct #class_name {
                        #[serde(rename = "@context")]
                        pub context: String,
                        #(#field_defs),*
                    }
                },
            ))
        })
    }

    fn all_types(&self) -> proc_macro2::TokenStream {
        use itertools::Itertools;

        let groups = self.types.values().chunks(255);

        let group_variant_defs = groups.into_iter().enumerate().map(|(i, group)| {
            let group_name = format_ident!("SchemaOrgGroup{}", i + 1);

            let variant_defs = group.into_iter().map(|enum_type| {
                let variant_name = self.name_ident(&enum_type.id).unwrap();
                let variant_type = match basic_type_to_rust(&enum_type.id.item_id) {
                    Some(basic_type) => basic_type,
                    None => quote! { #variant_name },
                };

                quote! {
                    #variant_name(#variant_type)
                }
            });

            quote! {
                #[derive(Debug, serde::Deserialize, uniffi::Enum)]
                #[serde(tag = "@type")]
                pub enum #group_name {
                    #(#variant_defs),*
                }
            }
        });

        let groups = self.types.values().chunks(255);

        let group_defs = groups.into_iter().enumerate().map(|(i, _)| {
            let group_name = format_ident!("SchemaOrgGroup{}", i + 1);
            quote! {
                #group_name(#group_name)
            }
        });

        quote! {
            #(#group_variant_defs)*

            /// All schema.org types
            #[derive(Debug, serde::Deserialize, uniffi::Enum)]
            #[serde(untagged)]
            pub enum SchemaOrg {
                #(#group_defs),*
            }
        }
    }
}

fn write_to_file(path: &str, tokens: TokenStream) -> Result<()> {
    let file: syn::File = syn::parse2(tokens).expect("Failed to parse tokens");
    let file = prettyplease::unparse(&file);

    std::fs::write(path, file)?;

    Ok(())
}

fn main() -> Result<()> {
    let definitions = SchemaDefinitions::read()?;

    let enumerations = definitions.enumerations_module();
    write_to_file("schemy-test/src/enums.rs", enumerations)?;

    let types = definitions.types_module();

    let mut type_module = Vec::new();

    for (typ_name, typ) in types {
        let filename = format!("schemy-test/src/{typ_name}.rs");
        write_to_file(
            &filename,
            quote! {
                use crate::*;
                use serde_with::serde_as;

                #typ
            },
        )?;

        type_module.push(quote! {
            mod #typ_name;
            pub use #typ_name::*;
        });
    }

    let all_types = definitions.all_types();
    write_to_file(
        "schemy-test/src/all.rs",
        quote! {
            use crate::*;

            #all_types
        },
    )?;

    write_to_file(
        "schemy-test/src/lib.rs",
        quote! {
            uniffi::setup_scaffolding!();

            mod enums;
            pub use enums::*;

            mod all;
            pub use all::*;

            #(#type_module)*
        },
    )?;

    Ok(())
}
