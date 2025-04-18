use indexmap::IndexMap;
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
    pub item_id: String,
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

#[derive(Deserialize, Debug)]
#[serde(untagged)]
pub enum Text {
    Simple(Str),
    Tagged(LanguageText),
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

fn main() -> color_eyre::Result<()> {
    let file = std::fs::read_to_string("schema/schemaorg-current-https.jsonld")?;
    let schema: SchemaOrgDefinition = serde_json::from_str(&file)?;
    dbg!(schema);

    Ok(())
}
