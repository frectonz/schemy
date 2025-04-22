use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type DefinedRegionAdditionalTypeFieldEnum = String;
///https://schema.org/DefinedRegion
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct DefinedRegion {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<DefinedRegionDescriptionFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<DefinedRegionSubjectOfFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/postalCodePrefix
    #[serde(rename = "postalCodePrefix")]
    #[serde_as(as = "OneOrMany<_>")]
    pub postal_code_prefix: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<DefinedRegionAdditionalTypeFieldEnum>,
    ///https://schema.org/postalCode
    #[serde(rename = "postalCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub postal_code: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<DefinedRegionImageFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<DefinedRegionIdentifierFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/postalCodeRange
    #[serde(rename = "postalCodeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub postal_code_range: Vec<PostalCodeRangeSpecification>,
    ///https://schema.org/addressCountry
    #[serde(rename = "addressCountry")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address_country: Vec<DefinedRegionAddressCountryFieldEnum>,
    ///https://schema.org/addressRegion
    #[serde(rename = "addressRegion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address_region: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<DefinedRegionMainEntityOfPageFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
}
