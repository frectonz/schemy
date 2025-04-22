use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/endTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type TipActionEndTimeFieldEnum = String;
///<https://schema.org/startTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type TipActionStartTimeFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type TipActionAdditionalTypeFieldEnum = String;
///<https://schema.org/TipAction>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct TipAction {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/instrument>
    #[serde(rename = "instrument")]
    #[serde_as(as = "OneOrMany<_>")]
    pub instrument: Vec<Thing>,
    ///<https://schema.org/recipient>
    #[serde(rename = "recipient")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recipient: Vec<TipActionRecipientFieldEnum>,
    ///<https://schema.org/price>
    #[serde(rename = "price")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price: Vec<TipActionPriceFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<TipActionProviderFieldEnum>,
    ///<https://schema.org/actionProcess>
    #[serde(rename = "actionProcess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_process: Vec<HowTo>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/priceCurrency>
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<TipActionIdentifierFieldEnum>,
    ///<https://schema.org/participant>
    #[serde(rename = "participant")]
    #[serde_as(as = "OneOrMany<_>")]
    pub participant: Vec<TipActionParticipantFieldEnum>,
    ///<https://schema.org/error>
    #[serde(rename = "error")]
    #[serde_as(as = "OneOrMany<_>")]
    pub error: Vec<Thing>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/agent>
    #[serde(rename = "agent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent: Vec<TipActionAgentFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<TipActionMainEntityOfPageFieldEnum>,
    ///<https://schema.org/result>
    #[serde(rename = "result")]
    #[serde_as(as = "OneOrMany<_>")]
    pub result: Vec<Thing>,
    ///<https://schema.org/endTime>
    #[serde(rename = "endTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_time: Vec<TipActionEndTimeFieldEnum>,
    ///<https://schema.org/target>
    #[serde(rename = "target")]
    #[serde_as(as = "OneOrMany<_>")]
    pub target: Vec<TipActionTargetFieldEnum>,
    ///<https://schema.org/priceSpecification>
    #[serde(rename = "priceSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_specification: Vec<PriceSpecification>,
    ///<https://schema.org/startTime>
    #[serde(rename = "startTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_time: Vec<TipActionStartTimeFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/object>
    #[serde(rename = "object")]
    #[serde_as(as = "OneOrMany<_>")]
    pub object: Vec<Thing>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<TipActionDescriptionFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<TipActionImageFieldEnum>,
    ///<https://schema.org/actionStatus>
    #[serde(rename = "actionStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_status: Vec<ActionStatusTypeEnum>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<TipActionLocationFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<TipActionAdditionalTypeFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<TipActionSubjectOfFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
}
