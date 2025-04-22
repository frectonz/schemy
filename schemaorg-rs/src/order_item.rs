use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type OrderItemAdditionalTypeFieldEnum = String;
///https://schema.org/OrderItem
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct OrderItem {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<OrderItemAdditionalTypeFieldEnum>,
    ///https://schema.org/orderItemNumber
    #[serde(rename = "orderItemNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_item_number: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<OrderItemMainEntityOfPageFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<OrderItemDescriptionFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<OrderItemIdentifierFieldEnum>,
    ///https://schema.org/orderedItem
    #[serde(rename = "orderedItem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ordered_item: Vec<OrderItemOrderedItemFieldEnum>,
    ///https://schema.org/orderQuantity
    #[serde(rename = "orderQuantity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_quantity: Vec<OrderItemOrderQuantityFieldEnum>,
    ///https://schema.org/orderDelivery
    #[serde(rename = "orderDelivery")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_delivery: Vec<ParcelDelivery>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<OrderItemImageFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<OrderItemSubjectOfFieldEnum>,
    ///https://schema.org/orderItemStatus
    #[serde(rename = "orderItemStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_item_status: Vec<OrderStatusEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
}
