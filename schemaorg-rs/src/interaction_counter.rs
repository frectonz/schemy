use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/endTime
///https://schema.org/DateTime
///https://schema.org/Time
pub type InteractionCounterEndTimeFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type InteractionCounterAdditionalTypeFieldEnum = String;
///https://schema.org/startTime
///https://schema.org/DateTime
///https://schema.org/Time
pub type InteractionCounterStartTimeFieldEnum = String;
///https://schema.org/InteractionCounter
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct InteractionCounter {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<InteractionCounterMainEntityOfPageFieldEnum>,
    ///https://schema.org/interactionType
    #[serde(rename = "interactionType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_type: Vec<Action>,
    ///https://schema.org/endTime
    #[serde(rename = "endTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_time: Vec<InteractionCounterEndTimeFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/userInteractionCount
    #[serde(rename = "userInteractionCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub user_interaction_count: Vec<i32>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<InteractionCounterIdentifierFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<InteractionCounterAdditionalTypeFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<InteractionCounterImageFieldEnum>,
    ///https://schema.org/startTime
    #[serde(rename = "startTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_time: Vec<InteractionCounterStartTimeFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<InteractionCounterSubjectOfFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<InteractionCounterDescriptionFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/location
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<InteractionCounterLocationFieldEnum>,
    ///https://schema.org/interactionService
    #[serde(rename = "interactionService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_service: Vec<InteractionCounterInteractionServiceFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
}
