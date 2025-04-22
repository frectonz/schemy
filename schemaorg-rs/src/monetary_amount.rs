use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/validThrough
///https://schema.org/Date
///https://schema.org/DateTime
pub type MonetaryAmountValidThroughFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MonetaryAmountAdditionalTypeFieldEnum = String;
///https://schema.org/validFrom
///https://schema.org/Date
///https://schema.org/DateTime
pub type MonetaryAmountValidFromFieldEnum = String;
///https://schema.org/MonetaryAmount
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MonetaryAmount {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MonetaryAmountImageFieldEnum>,
    ///https://schema.org/maxValue
    #[serde(rename = "maxValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub max_value: Vec<f32>,
    ///https://schema.org/validThrough
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<MonetaryAmountValidThroughFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MonetaryAmountSubjectOfFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/minValue
    #[serde(rename = "minValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub min_value: Vec<f32>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MonetaryAmountAdditionalTypeFieldEnum>,
    ///https://schema.org/value
    #[serde(rename = "value")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value: Vec<MonetaryAmountValueFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/currency
    #[serde(rename = "currency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub currency: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MonetaryAmountMainEntityOfPageFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/validFrom
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<MonetaryAmountValidFromFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MonetaryAmountIdentifierFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MonetaryAmountDescriptionFieldEnum>,
}
