use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/endTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ArriveActionEndTimeFieldEnum = String;
///<https://schema.org/startTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ArriveActionStartTimeFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ArriveActionAdditionalTypeFieldEnum = String;
///<https://schema.org/ArriveAction>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ArriveAction {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/agent>
    #[serde(rename = "agent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent: Vec<ArriveActionAgentFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ArriveActionSubjectOfFieldEnum>,
    ///<https://schema.org/object>
    #[serde(rename = "object")]
    #[serde_as(as = "OneOrMany<_>")]
    pub object: Vec<Thing>,
    ///<https://schema.org/endTime>
    #[serde(rename = "endTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_time: Vec<ArriveActionEndTimeFieldEnum>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<ArriveActionLocationFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ArriveActionMainEntityOfPageFieldEnum>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<ArriveActionProviderFieldEnum>,
    ///<https://schema.org/actionProcess>
    #[serde(rename = "actionProcess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_process: Vec<HowTo>,
    ///<https://schema.org/toLocation>
    #[serde(rename = "toLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub to_location: Vec<Place>,
    ///<https://schema.org/startTime>
    #[serde(rename = "startTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_time: Vec<ArriveActionStartTimeFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/instrument>
    #[serde(rename = "instrument")]
    #[serde_as(as = "OneOrMany<_>")]
    pub instrument: Vec<Thing>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/error>
    #[serde(rename = "error")]
    #[serde_as(as = "OneOrMany<_>")]
    pub error: Vec<Thing>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ArriveActionDescriptionFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/target>
    #[serde(rename = "target")]
    #[serde_as(as = "OneOrMany<_>")]
    pub target: Vec<ArriveActionTargetFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/fromLocation>
    #[serde(rename = "fromLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub from_location: Vec<Place>,
    ///<https://schema.org/actionStatus>
    #[serde(rename = "actionStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_status: Vec<ActionStatusTypeEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ArriveActionImageFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ArriveActionIdentifierFieldEnum>,
    ///<https://schema.org/participant>
    #[serde(rename = "participant")]
    #[serde_as(as = "OneOrMany<_>")]
    pub participant: Vec<ArriveActionParticipantFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ArriveActionAdditionalTypeFieldEnum>,
    ///<https://schema.org/result>
    #[serde(rename = "result")]
    #[serde_as(as = "OneOrMany<_>")]
    pub result: Vec<Thing>,
}
