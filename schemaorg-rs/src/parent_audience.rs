use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ParentAudienceAdditionalTypeFieldEnum = String;
///<https://schema.org/ParentAudience>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ParentAudience {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/childMinAge>
    #[serde(rename = "childMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub child_min_age: Vec<f32>,
    ///<https://schema.org/childMaxAge>
    #[serde(rename = "childMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub child_max_age: Vec<f32>,
    ///<https://schema.org/suggestedAge>
    #[serde(rename = "suggestedAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub suggested_age: Vec<QuantitativeValue>,
    ///<https://schema.org/suggestedMinAge>
    #[serde(rename = "suggestedMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub suggested_min_age: Vec<f32>,
    ///<https://schema.org/suggestedGender>
    #[serde(rename = "suggestedGender")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub suggested_gender: Vec<ParentAudienceSuggestedGenderFieldEnum>,
    ///<https://schema.org/requiredMinAge>
    #[serde(rename = "requiredMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub required_min_age: Vec<i32>,
    ///<https://schema.org/suggestedMeasurement>
    #[serde(rename = "suggestedMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub suggested_measurement: Vec<QuantitativeValue>,
    ///<https://schema.org/healthCondition>
    #[serde(rename = "healthCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub health_condition: Vec<MedicalCondition>,
    ///<https://schema.org/requiredGender>
    #[serde(rename = "requiredGender")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub required_gender: Vec<String>,
    ///<https://schema.org/requiredMaxAge>
    #[serde(rename = "requiredMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub required_max_age: Vec<i32>,
    ///<https://schema.org/suggestedMaxAge>
    #[serde(rename = "suggestedMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub suggested_max_age: Vec<f32>,
    ///<https://schema.org/audienceType>
    #[serde(rename = "audienceType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub audience_type: Vec<String>,
    ///<https://schema.org/geographicArea>
    #[serde(rename = "geographicArea")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub geographic_area: Vec<AdministrativeArea>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<ParentAudienceMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifier: Vec<ParentAudienceIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<ParentAudienceDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<ParentAudienceSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<ParentAudienceAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub image: Vec<ParentAudienceImageFieldEnum>,
}
