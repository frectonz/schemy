use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type BedTypeAdditionalTypeFieldEnum = String;
///<https://schema.org/BedType>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct BedType {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<BedTypeAdditionalTypeFieldEnum>,
    ///<https://schema.org/valueReference>
    #[serde(rename = "valueReference")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value_reference: Vec<BedTypeValueReferenceFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/nonEqual>
    #[serde(rename = "nonEqual")]
    #[serde_as(as = "OneOrMany<_>")]
    pub non_equal: Vec<QualitativeValue>,
    ///<https://schema.org/lesser>
    #[serde(rename = "lesser")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lesser: Vec<QualitativeValue>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/greaterOrEqual>
    #[serde(rename = "greaterOrEqual")]
    #[serde_as(as = "OneOrMany<_>")]
    pub greater_or_equal: Vec<QualitativeValue>,
    ///<https://schema.org/equal>
    #[serde(rename = "equal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub equal: Vec<QualitativeValue>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<BedTypeSubjectOfFieldEnum>,
    ///<https://schema.org/additionalProperty>
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<BedTypeIdentifierFieldEnum>,
    ///<https://schema.org/greater>
    #[serde(rename = "greater")]
    #[serde_as(as = "OneOrMany<_>")]
    pub greater: Vec<QualitativeValue>,
    ///<https://schema.org/supersededBy>
    #[serde(rename = "supersededBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub superseded_by: Vec<BedTypeSupersededByFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<BedTypeMainEntityOfPageFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<BedTypeDescriptionFieldEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<BedTypeImageFieldEnum>,
    ///<https://schema.org/lesserOrEqual>
    #[serde(rename = "lesserOrEqual")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lesser_or_equal: Vec<QualitativeValue>,
}
