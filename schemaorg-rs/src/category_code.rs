use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type CategoryCodeAdditionalTypeFieldEnum = String;
///https://schema.org/CategoryCode
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct CategoryCode {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<CategoryCodeDescriptionFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<CategoryCodeSubjectOfFieldEnum>,
    ///https://schema.org/inCodeSet
    #[serde(rename = "inCodeSet")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_code_set: Vec<CategoryCodeInCodeSetFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<CategoryCodeMainEntityOfPageFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<CategoryCodeAdditionalTypeFieldEnum>,
    ///https://schema.org/codeValue
    #[serde(rename = "codeValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code_value: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<CategoryCodeIdentifierFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/inDefinedTermSet
    #[serde(rename = "inDefinedTermSet")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_defined_term_set: Vec<CategoryCodeInDefinedTermSetFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/termCode
    #[serde(rename = "termCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub term_code: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<CategoryCodeImageFieldEnum>,
}
