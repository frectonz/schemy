use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type PeopleAudienceAdditionalTypeFieldEnum = String;
///https://schema.org/PeopleAudience
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct PeopleAudience {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/requiredMaxAge
    #[serde(rename = "requiredMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_max_age: Vec<i32>,
    ///https://schema.org/suggestedMeasurement
    #[serde(rename = "suggestedMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_measurement: Vec<QuantitativeValue>,
    ///https://schema.org/requiredMinAge
    #[serde(rename = "requiredMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_min_age: Vec<i32>,
    ///https://schema.org/requiredGender
    #[serde(rename = "requiredGender")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_gender: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/healthCondition
    #[serde(rename = "healthCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_condition: Vec<MedicalCondition>,
    ///https://schema.org/suggestedGender
    #[serde(rename = "suggestedGender")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_gender: Vec<PeopleAudienceSuggestedGenderFieldEnum>,
    ///https://schema.org/suggestedMaxAge
    #[serde(rename = "suggestedMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_max_age: Vec<f32>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/suggestedAge
    #[serde(rename = "suggestedAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_age: Vec<QuantitativeValue>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<PeopleAudienceSubjectOfFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<PeopleAudienceImageFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<PeopleAudienceAdditionalTypeFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<PeopleAudienceDescriptionFieldEnum>,
    ///https://schema.org/geographicArea
    #[serde(rename = "geographicArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geographic_area: Vec<AdministrativeArea>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<PeopleAudienceIdentifierFieldEnum>,
    ///https://schema.org/suggestedMinAge
    #[serde(rename = "suggestedMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_min_age: Vec<f32>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/audienceType
    #[serde(rename = "audienceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience_type: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<PeopleAudienceMainEntityOfPageFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
}
