use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/paymentDueDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type OrderPaymentDueDateFieldEnum = String;
///<https://schema.org/orderDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type OrderOrderDateFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type OrderAdditionalTypeFieldEnum = String;
///<https://schema.org/Order>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Order {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/paymentMethod>
    #[serde(rename = "paymentMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_method: Vec<OrderPaymentMethodFieldEnum>,
    ///<https://schema.org/billingAddress>
    #[serde(rename = "billingAddress")]
    #[serde_as(as = "OneOrMany<_>")]
    pub billing_address: Vec<PostalAddress>,
    ///<https://schema.org/broker>
    #[serde(rename = "broker")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broker: Vec<OrderBrokerFieldEnum>,
    ///<https://schema.org/merchant>
    #[serde(rename = "merchant")]
    #[serde_as(as = "OneOrMany<_>")]
    pub merchant: Vec<OrderMerchantFieldEnum>,
    ///<https://schema.org/paymentDueDate>
    #[serde(rename = "paymentDueDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_due_date: Vec<OrderPaymentDueDateFieldEnum>,
    ///<https://schema.org/seller>
    #[serde(rename = "seller")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seller: Vec<OrderSellerFieldEnum>,
    ///<https://schema.org/isGift>
    #[serde(rename = "isGift")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_gift: Vec<String>,
    ///<https://schema.org/orderStatus>
    #[serde(rename = "orderStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_status: Vec<OrderStatusEnum>,
    ///<https://schema.org/acceptedOffer>
    #[serde(rename = "acceptedOffer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accepted_offer: Vec<Offer>,
    ///<https://schema.org/orderNumber>
    #[serde(rename = "orderNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_number: Vec<String>,
    ///<https://schema.org/orderDate>
    #[serde(rename = "orderDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_date: Vec<OrderOrderDateFieldEnum>,
    ///<https://schema.org/customer>
    #[serde(rename = "customer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub customer: Vec<OrderCustomerFieldEnum>,
    ///<https://schema.org/paymentMethodId>
    #[serde(rename = "paymentMethodId")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_method_id: Vec<String>,
    ///<https://schema.org/orderDelivery>
    #[serde(rename = "orderDelivery")]
    #[serde_as(as = "OneOrMany<_>")]
    pub order_delivery: Vec<ParcelDelivery>,
    ///<https://schema.org/discountCode>
    #[serde(rename = "discountCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discount_code: Vec<String>,
    ///<https://schema.org/discountCurrency>
    #[serde(rename = "discountCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discount_currency: Vec<String>,
    ///<https://schema.org/partOfInvoice>
    #[serde(rename = "partOfInvoice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub part_of_invoice: Vec<Invoice>,
    ///<https://schema.org/orderedItem>
    #[serde(rename = "orderedItem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ordered_item: Vec<OrderOrderedItemFieldEnum>,
    ///<https://schema.org/paymentDue>
    #[serde(rename = "paymentDue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_due: Vec<String>,
    ///<https://schema.org/discount>
    #[serde(rename = "discount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discount: Vec<OrderDiscountFieldEnum>,
    ///<https://schema.org/confirmationNumber>
    #[serde(rename = "confirmationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub confirmation_number: Vec<String>,
    ///<https://schema.org/paymentUrl>
    #[serde(rename = "paymentUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_url: Vec<String>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<OrderMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<OrderIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<OrderDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<OrderSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<OrderAdditionalTypeFieldEnum>,
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
    pub image: Vec<OrderImageFieldEnum>,
}
