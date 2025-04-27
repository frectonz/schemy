use std::{borrow::Cow, path::PathBuf, sync::Arc};

use clap::Parser;
use color_eyre::{Result, eyre::Context};
use heck::ToSnakeCase;
use indexmap::{IndexMap, IndexSet};
use itertools::Itertools;
use log::{info, trace};
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
        trace!("Checking if ItemRef {self:?} includes {item_ref}");
        match self {
            ItemRef::Single(item) => item.item_id.as_ref() == item_ref,
            ItemRef::List(items) => items.iter().any(|item| item.item_id.as_ref() == item_ref),
        }
    }

    pub fn variants(&self, schema: &SchemaDefinitions) -> Option<Vec<Variant>> {
        let ItemRef::List(item_ids) = self else {
            return None;
        };

        let variants: Vec<Variant> = item_ids
            .into_iter()
            .sorted_by_key(|item| &item.item_id)
            .map(|item| {
                let item = schema.types.get(&item.item_id).unwrap();

                let variant_name = schema.name_ident(&item.id).unwrap();
                let variant_comment = item.doc_comment();
                let variant_type = match basic_type_to_rust(&item.id.item_id) {
                    Some(basic_type) => basic_type,
                    None => quote! { #variant_name },
                };

                Variant {
                    name: variant_name,
                    comment: variant_comment,
                    typ: variant_type,
                }
            })
            .collect();

        Some(variants)
    }
}

pub struct Variant {
    name: TokenStream,
    comment: TokenStream,
    typ: TokenStream,
}

impl PartialEq for Variant {
    fn eq(&self, other: &Self) -> bool {
        self.typ.to_string() == other.typ.to_string()
    }
}

fn group_variant_by_type(variant_defs: Vec<Variant>) -> IndexMap<String, Vec<Variant>> {
    let mut type_to_variants: IndexMap<String, Vec<Variant>> = IndexMap::new();

    for variant in variant_defs {
        let typ = variant.typ.to_string();
        if let Some(vec) = type_to_variants.get_mut(&typ) {
            vec.push(variant);
        } else {
            type_to_variants.insert(typ, vec![variant]);
        }
    }

    type_to_variants
}

pub struct Enum {
    name: TokenStream,
    comment: TokenStream,
    variants: Vec<TokenStream>,
}

struct FieldEnums {
    map: IndexMap<String, Vec<Enum>>,
}

impl FieldEnums {
    fn new() -> Self {
        Self {
            map: IndexMap::new(),
        }
    }

    fn add_enum(&mut self, e: Enum) {
        let key = e.variants.iter().map(|x| x.to_string()).join(",");

        if let Some(enums) = self.map.get_mut(&key) {
            enums.push(e);
        } else {
            self.map.insert(key, vec![e]);
        }
    }

    fn render(self) -> TokenStream {
        let all_field_enums = self.map.into_values().enumerate().map(|(i, enums)| {
            let field_name = format_ident!("FieldEnum{i}");
            let variants = enums.first().unwrap().variants.as_slice();

            let enum_types = enums.iter().map(|e| {
                let enum_comment = &e.comment;
                let enum_name = &e.name;

                quote! {
                    #enum_comment
                    pub type #enum_name = #field_name;
                }
            });

            quote! {
                #[derive(Debug, serde::Deserialize)]
                #[cfg_attr(feature = "uniffi", derive(uniffi::Enum))]
                #[serde(untagged)]
                pub enum #field_name {
                    #(#variants),*
                }

                #(#enum_types)*
            }
        });

        let all_field_enums = quote! {
            #(#all_field_enums)*
        };

        all_field_enums
    }
}

fn render_variant_group(variants: Vec<Variant>) -> TokenStream {
    let variant_type = &variants.first().unwrap().typ;
    let variant_name = variants.iter().map(|v| v.name.to_string()).join("Or");
    let variant_name = Ident::new(&variant_name, Span::call_site());
    let comments = variants.iter().map(|v| &v.comment);

    quote! {
        #(#comments)*
        #variant_name(#variant_type)
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
        trace!("Checking if ItemType {self:?} includes {type_id}");
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

    use log::{info, trace};

    pub fn capitalize(s: Cow<'_, str>) -> Cow<'_, str> {
        trace!("Capitalizing {s}");

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
        trace!("Replacing leading digit in {s}");

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
        info!("Initializing KEYWORD_SET");
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
        trace!("Checking if {s} is a keyword");
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
        trace!("Getting ident of {:?}", self.id);

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
        trace!("Getting enum ident of {:?}", self.id);

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
        trace!("Getting snake case ident of {:?}", self.id);

        let name = self.label.value();
        let name = Cow::Borrowed(name);
        let name = replace_leading_digit_with_word(name);
        let name = name.to_snake_case();
        let name = Cow::Owned(name);
        let name = escape_if_keyword(name);

        Ident::new(&name, Span::call_site())
    }

    fn doc_comment(&self) -> TokenStream {
        trace!("Getting doc comment of {:?}", self.id);

        let comment = self.label.value();
        let comment = format!("<https://schema.org/{comment}>");
        quote! {
            #[doc = #comment]
        }
    }

    fn rename_annotaion(&self) -> TokenStream {
        let property_rename = self.label.value();
        quote! {
            #[serde(rename = #property_rename)]
        }
    }

    fn property_type(&self, schema: &SchemaDefinitions, class_item: &Item) -> TokenStream {
        let range_includes = self
            .range_includes
            .as_ref()
            .expect("Every property type should have a range includes key.");

        let type_name = class_item.ident().to_string();
        let property_name = self.label.value();

        match range_includes {
            ItemRef::Single(item_id) => schema.type_ident(item_id).unwrap(),
            ItemRef::List(_) => field_enum_name(&type_name, property_name),
        }
    }
}

mod constants {
    pub const RDF_CLASS: &str = "rdfs:Class";
    pub const RDF_PROPERTY: &str = "rdf:Property";
}

fn basic_type_to_rust(basic: &str) -> Option<TokenStream> {
    trace!("Checking basic type mapping for: {basic:?}");

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

fn field_enum_name(type_name: &str, property_name: &str) -> TokenStream {
    trace!("Generating field enum name from {type_name:?} and {property_name:?}");
    let capitalized_field_name = capitalize(Cow::Borrowed(property_name));
    let enum_name = format!("{type_name}{capitalized_field_name}FieldEnum");
    let ident = Ident::new(&enum_name, Span::call_site());

    quote! { #ident }
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

pub struct SchemaDefinitions {
    types: IndexMap<Str, Item>,
    properties: IndexMap<Str, Item>,
    enumerations: IndexMap<Str, Vec<Arc<Item>>>,
}

#[derive(Debug)]
struct ResolvedType {
    type_id: Str,
    properties: IndexSet<ResolvedPropertyType>,
}

impl ResolvedType {
    fn property_defs(&self, schema: &SchemaDefinitions, class_item: &Item) -> TokenStream {
        let field_defs = self.properties.iter().map(|item| {
            let property = schema.properties.get(item.first()).unwrap();

            let property_name = property.snake_case_ident();
            let property_comment = property.doc_comment();
            let property_rename = property.rename_annotaion();
            let property_type = property.property_type(schema, class_item);

            quote! {
                #property_comment
                #property_rename
                #[serde_as(as = "OneOrMany<_>")]
                #[serde(default)]
                pub #property_name: Vec<#property_type>
            }
        });

        quote! {
            #(#field_defs),*
        }
    }
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

struct TypeModule {
    name: Ident,
    content: TokenStream,
}

struct TypesModuleResult {
    type_modules: Vec<TypeModule>,
    field_enums: TokenStream,
}

impl SchemaDefinitions {
    fn read(path: &PathBuf) -> Result<SchemaDefinitions> {
        info!("Reading schema definitions from {path:?}");

        let file = std::fs::read_to_string(path)?;
        let schema: SchemaOrgDefinition = serde_json::from_str(&file)?;
        info!("Parsed schema with {} items", schema.graph.len());

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

        info!("Read {} types", types.len());
        info!("Read {} properties", properties.len());
        info!("Read {} enumerations", enumerations.len());

        Ok(SchemaDefinitions {
            types,
            properties,
            enumerations,
        })
    }

    fn resolve_properties(&self) -> Vec<ResolvedType> {
        info!("Resolving properties for all types by traversing hierarchy...");

        let mut resolved_props: IndexMap<Str, IndexSet<ResolvedPropertyType>> = IndexMap::new();

        for (type_id, _type_item) in &self.types {
            if basic_type_to_rust(type_id).is_some() {
                continue;
            }

            let mut all_props_set = IndexSet::new();
            let mut types_to_visit = vec![type_id.clone()];
            let mut visited_types = IndexSet::new();

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

            info!(
                "Finished resolving for type {type_id}. Found {} unique properties",
                all_props_set.len()
            );

            resolved_props.insert(type_id.clone(), all_props_set);
        }

        info!(
            "Finished resolving properties for {} types.",
            resolved_props.len()
        );

        resolved_props
            .into_iter()
            .map(|(key, value)| ResolvedType {
                type_id: key,
                properties: value,
            })
            .collect()
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
                #[derive(Debug, serde::Deserialize)]
                #[cfg_attr(feature = "uniffi", derive(uniffi::Enum))]
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

    fn types_module(&self) -> TypesModuleResult {
        let resolved = self.resolve_properties();

        let mut field_enums = FieldEnums::new();
        let mut types = Vec::new();

        for class in resolved {
            let class_item = self.types.get(&class.type_id).unwrap();

            let class_name = class_item.ident();
            let class_comments = class_item.doc_comment();
            let class_module_name = class_item.snake_case_ident();

            let field_defs = class.property_defs(self, class_item);

            let range_enums = class
                .properties
                .iter()
                .filter_map(|item| self.range_enum_property(&mut field_enums, &class_name, item));

            let typ = TypeModule {
                name: class_module_name,
                content: quote! {
                    #(#range_enums)*

                    #class_comments
                    #[serde_as]
                    #[derive(Debug, serde::Deserialize)]
                    #[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
                    pub struct #class_name {
                        #[serde(rename = "@context")]
                        pub context: String,
                        #field_defs
                    }
                },
            };

            types.push(typ)
        }

        TypesModuleResult {
            type_modules: types,
            field_enums: field_enums.render(),
        }
    }

    fn range_enum_property(
        &self,
        field_enums: &mut FieldEnums,
        class_name: &TokenStream,
        item: &ResolvedPropertyType,
    ) -> Option<TokenStream> {
        let property = self.properties.get(item.first()).unwrap();
        let property_comment = property.doc_comment();
        let enum_name = field_enum_name(&class_name.to_string(), property.label.value());

        let range_includes = property.range_includes.as_ref().unwrap();
        let variant_defs = range_includes.variants(self)?;
        let all_the_same = all_equal(variant_defs.iter());

        if !all_the_same {
            let type_to_variants = group_variant_by_type(variant_defs);

            let variant_defs = type_to_variants
                .into_values()
                .map(render_variant_group)
                .collect::<Vec<_>>();

            field_enums.add_enum(Enum {
                name: enum_name,
                comment: property_comment,
                variants: variant_defs,
            });

            return None;
        }

        let variant_type = &variant_defs.first().unwrap().typ;
        let variant_comments = variant_defs.iter().map(|v| &v.comment);

        Some(quote! {
            #property_comment
            #(#variant_comments)*
            pub type #enum_name = #variant_type;
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
                #[derive(Debug, serde::Deserialize)]
                #[cfg_attr(feature = "uniffi", derive(uniffi::Enum))]
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
            #[derive(Debug, serde::Deserialize)]
            #[cfg_attr(feature = "uniffi", derive(uniffi::Enum))]
            #[serde(untagged)]
            pub enum SchemaOrg {
                #(#group_defs),*
            }
        }
    }
}

fn write_to_file(path: PathBuf, tokens: TokenStream) -> Result<()> {
    info!("Writing generated code to {}", path.display());

    let file: syn::File = syn::parse2(tokens).expect("Failed to parse tokens");
    let file = prettyplease::unparse(&file);

    std::fs::write(path, file)?;

    Ok(())
}

#[derive(Parser, Debug)]
#[command(
    author,
    version,
    about = "Generates Rust types from Schema.org JSON-LD vocabulary.",
    long_about = None
)]
struct Args {
    /// Path to the Schema.org JSON-LD input file.
    #[arg(
        short,
        long,
        value_name = "SCHEMA_FILE",
        default_value = "schema/schemaorg-current-https.jsonld"
    )]
    input_file: PathBuf,

    /// Path to the output directory for the generated Rust crate source.
    #[arg(
        short,
        long,
        value_name = "OUTPUT_DIR",
        default_value = "schemaorg-rs/src"
    )]
    output_dir: PathBuf,
}

impl Args {
    fn enums_file(&self) -> PathBuf {
        let mut path = self.output_dir.clone();
        path.push("enums.rs");
        path
    }

    fn field_enums_file(&self) -> PathBuf {
        let mut path = self.output_dir.clone();
        path.push("field.rs");
        path
    }

    fn type_file(&self, typ: &str) -> PathBuf {
        let mut path = self.output_dir.clone();
        path.push(format!("{typ}.rs"));
        path
    }

    fn all_file(&self) -> PathBuf {
        let mut path = self.output_dir.clone();
        path.push("all.rs");
        path
    }

    fn lib_file(&self) -> PathBuf {
        let mut path = self.output_dir.clone();
        path.push("lib.rs");
        path
    }
}

fn main() -> Result<()> {
    let mut logger = pretty_env_logger::formatted_timed_builder();
    if let Ok(s) = ::std::env::var("RUST_LOG") {
        logger.parse_filters(&s);
    } else {
        logger.filter_level(log::LevelFilter::Info);
    }
    logger.init();

    let args = Args::parse();

    let definitions = SchemaDefinitions::read(&args.input_file)?;

    let enumerations = definitions.enumerations_module();
    write_to_file(args.enums_file(), enumerations)
        .wrap_err("Failed to write enumerations module")?;

    let TypesModuleResult {
        type_modules,
        field_enums,
    } = definitions.types_module();

    write_to_file(
        args.field_enums_file(),
        quote! {
            use crate::*;

            #field_enums
        },
    )
    .wrap_err("Failed to write field enums module")?;

    let mut type_module = Vec::new();

    for TypeModule { name, content } in type_modules {
        let name_str = name.to_string();

        write_to_file(
            args.type_file(&name_str),
            quote! {
                use crate::*;
                use serde_with::{serde_as, OneOrMany};

                #content
            },
        )
        .wrap_err_with(|| format!("Failed to write {name_str} module"))?;

        type_module.push(quote! {
            mod #name;
            pub use #name::*;
        });
    }

    let all_types = definitions.all_types();
    write_to_file(
        args.all_file(),
        quote! {
            use crate::*;

            #all_types
        },
    )
    .wrap_err("Failed to write all types enum module")?;

    write_to_file(
        args.lib_file(),
        quote! {
            #![recursion_limit = "512"]

            #[cfg(feature = "uniffi")]
            uniffi::setup_scaffolding!();

            mod field;
            pub use field::*;

            mod enums;
            pub use enums::*;

            mod all;
            pub use all::*;

            #(#type_module)*
        },
    )
    .wrap_err("Failed to write library module")?;

    println!("Finished generating files");

    Ok(())
}
