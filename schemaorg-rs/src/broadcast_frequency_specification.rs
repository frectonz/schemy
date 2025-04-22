use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type BroadcastFrequencySpecificationAdditionalTypeFieldEnum = String;
///<https://schema.org/BroadcastFrequencySpecification>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct BroadcastFrequencySpecification {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/broadcastSignalModulation>
    #[serde(rename = "broadcastSignalModulation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_signal_modulation: Vec<
        BroadcastFrequencySpecificationBroadcastSignalModulationFieldEnum,
    >,
    ///<https://schema.org/broadcastSubChannel>
    #[serde(rename = "broadcastSubChannel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_sub_channel: Vec<String>,
    ///<https://schema.org/broadcastFrequencyValue>
    #[serde(rename = "broadcastFrequencyValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_frequency_value: Vec<
        BroadcastFrequencySpecificationBroadcastFrequencyValueFieldEnum,
    >,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<
        BroadcastFrequencySpecificationMainEntityOfPageFieldEnum,
    >,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<BroadcastFrequencySpecificationIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<BroadcastFrequencySpecificationDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<BroadcastFrequencySpecificationSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<BroadcastFrequencySpecificationAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<BroadcastFrequencySpecificationImageFieldEnum>,
}
