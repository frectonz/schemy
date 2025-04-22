use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type ShippingConditionsAdditionalTypeFieldEnum = String;
///https://schema.org/ShippingConditions
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ShippingConditions {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ShippingConditionsIdentifierFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ShippingConditionsSubjectOfFieldEnum>,
    ///https://schema.org/transitTime
    #[serde(rename = "transitTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub transit_time: Vec<ShippingConditionsTransitTimeFieldEnum>,
    ///https://schema.org/shippingOrigin
    #[serde(rename = "shippingOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub shipping_origin: Vec<DefinedRegion>,
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
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ShippingConditionsImageFieldEnum>,
    ///https://schema.org/weight
    #[serde(rename = "weight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub weight: Vec<ShippingConditionsWeightFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ShippingConditionsAdditionalTypeFieldEnum>,
    ///https://schema.org/shippingRate
    #[serde(rename = "shippingRate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub shipping_rate: Vec<ShippingConditionsShippingRateFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/seasonalOverride
    #[serde(rename = "seasonalOverride")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seasonal_override: Vec<OpeningHoursSpecification>,
    ///https://schema.org/doesNotShip
    #[serde(rename = "doesNotShip")]
    #[serde_as(as = "OneOrMany<_>")]
    pub does_not_ship: Vec<String>,
    ///https://schema.org/shippingDestination
    #[serde(rename = "shippingDestination")]
    #[serde_as(as = "OneOrMany<_>")]
    pub shipping_destination: Vec<DefinedRegion>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ShippingConditionsDescriptionFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ShippingConditionsMainEntityOfPageFieldEnum>,
    ///https://schema.org/width
    #[serde(rename = "width")]
    #[serde_as(as = "OneOrMany<_>")]
    pub width: Vec<ShippingConditionsWidthFieldEnum>,
    ///https://schema.org/height
    #[serde(rename = "height")]
    #[serde_as(as = "OneOrMany<_>")]
    pub height: Vec<ShippingConditionsHeightFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/orderValue
    #[serde(rename = "orderValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_value: Vec<MonetaryAmount>,
    ///https://schema.org/depth
    #[serde(rename = "depth")]
    #[serde_as(as = "OneOrMany<_>")]
    pub depth: Vec<ShippingConditionsDepthFieldEnum>,
    ///https://schema.org/numItems
    #[serde(rename = "numItems")]
    #[serde_as(as = "OneOrMany<_>")]
    pub num_items: Vec<QuantitativeValue>,
}
