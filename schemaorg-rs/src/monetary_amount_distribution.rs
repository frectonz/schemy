use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type MonetaryAmountDistributionAdditionalTypeFieldEnum = String;
///<https://schema.org/MonetaryAmountDistribution>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MonetaryAmountDistribution {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/percentile25>
    #[serde(rename = "percentile25")]
    #[serde_as(as = "OneOrMany<_>")]
    pub percentile25: Vec<f32>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MonetaryAmountDistributionAdditionalTypeFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/percentile90>
    #[serde(rename = "percentile90")]
    #[serde_as(as = "OneOrMany<_>")]
    pub percentile90: Vec<f32>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MonetaryAmountDistributionImageFieldEnum>,
    ///<https://schema.org/currency>
    #[serde(rename = "currency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub currency: Vec<String>,
    ///<https://schema.org/duration>
    #[serde(rename = "duration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duration: Vec<MonetaryAmountDistributionDurationFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MonetaryAmountDistributionMainEntityOfPageFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MonetaryAmountDistributionSubjectOfFieldEnum>,
    ///<https://schema.org/percentile10>
    #[serde(rename = "percentile10")]
    #[serde_as(as = "OneOrMany<_>")]
    pub percentile10: Vec<f32>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MonetaryAmountDistributionDescriptionFieldEnum>,
    ///<https://schema.org/median>
    #[serde(rename = "median")]
    #[serde_as(as = "OneOrMany<_>")]
    pub median: Vec<f32>,
    ///<https://schema.org/percentile75>
    #[serde(rename = "percentile75")]
    #[serde_as(as = "OneOrMany<_>")]
    pub percentile75: Vec<f32>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MonetaryAmountDistributionIdentifierFieldEnum>,
}
