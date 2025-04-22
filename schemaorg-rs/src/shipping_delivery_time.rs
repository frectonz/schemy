use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type ShippingDeliveryTimeAdditionalTypeFieldEnum = String;
///https://schema.org/ShippingDeliveryTime
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ShippingDeliveryTime {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ShippingDeliveryTimeAdditionalTypeFieldEnum>,
    ///https://schema.org/transitTime
    #[serde(rename = "transitTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub transit_time: Vec<ShippingDeliveryTimeTransitTimeFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ShippingDeliveryTimeSubjectOfFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ShippingDeliveryTimeIdentifierFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ShippingDeliveryTimeDescriptionFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ShippingDeliveryTimeImageFieldEnum>,
    ///https://schema.org/handlingTime
    #[serde(rename = "handlingTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub handling_time: Vec<ShippingDeliveryTimeHandlingTimeFieldEnum>,
    ///https://schema.org/cutoffTime
    #[serde(rename = "cutoffTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub cutoff_time: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ShippingDeliveryTimeMainEntityOfPageFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/businessDays
    #[serde(rename = "businessDays")]
    #[serde_as(as = "OneOrMany<_>")]
    pub business_days: Vec<ShippingDeliveryTimeBusinessDaysFieldEnum>,
}
