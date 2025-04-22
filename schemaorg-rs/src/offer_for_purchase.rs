use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/availabilityStarts
///https://schema.org/Date
///https://schema.org/DateTime
///https://schema.org/Time
pub type OfferForPurchaseAvailabilityStartsFieldEnum = String;
///https://schema.org/asin
///https://schema.org/Text
///https://schema.org/URL
pub type OfferForPurchaseAsinFieldEnum = String;
///https://schema.org/validThrough
///https://schema.org/Date
///https://schema.org/DateTime
pub type OfferForPurchaseValidThroughFieldEnum = String;
///https://schema.org/validFrom
///https://schema.org/Date
///https://schema.org/DateTime
pub type OfferForPurchaseValidFromFieldEnum = String;
///https://schema.org/gtin
///https://schema.org/Text
///https://schema.org/URL
pub type OfferForPurchaseGtinFieldEnum = String;
///https://schema.org/availabilityEnds
///https://schema.org/Date
///https://schema.org/DateTime
///https://schema.org/Time
pub type OfferForPurchaseAvailabilityEndsFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type OfferForPurchaseAdditionalTypeFieldEnum = String;
///https://schema.org/OfferForPurchase
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct OfferForPurchase {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/priceValidUntil
    #[serde(rename = "priceValidUntil")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_valid_until: Vec<String>,
    ///https://schema.org/availabilityStarts
    #[serde(rename = "availabilityStarts")]
    #[serde_as(as = "OneOrMany<_>")]
    pub availability_starts: Vec<OfferForPurchaseAvailabilityStartsFieldEnum>,
    ///https://schema.org/asin
    #[serde(rename = "asin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub asin: Vec<OfferForPurchaseAsinFieldEnum>,
    ///https://schema.org/serialNumber
    #[serde(rename = "serialNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub serial_number: Vec<String>,
    ///https://schema.org/isFamilyFriendly
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///https://schema.org/priceCurrency
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<OfferForPurchaseIdentifierFieldEnum>,
    ///https://schema.org/itemOffered
    #[serde(rename = "itemOffered")]
    #[serde_as(as = "OneOrMany<_>")]
    pub item_offered: Vec<OfferForPurchaseItemOfferedFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/availableDeliveryMethod
    #[serde(rename = "availableDeliveryMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub available_delivery_method: Vec<DeliveryMethodEnum>,
    ///https://schema.org/eligibleCustomerType
    #[serde(rename = "eligibleCustomerType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_customer_type: Vec<BusinessEntityType>,
    ///https://schema.org/checkoutPageURLTemplate
    #[serde(rename = "checkoutPageURLTemplate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub checkout_page_url_template: Vec<String>,
    ///https://schema.org/hasAdultConsideration
    #[serde(rename = "hasAdultConsideration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_adult_consideration: Vec<AdultOrientedEnumerationEnum>,
    ///https://schema.org/price
    #[serde(rename = "price")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price: Vec<OfferForPurchasePriceFieldEnum>,
    ///https://schema.org/gtin13
    #[serde(rename = "gtin13")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin13: Vec<String>,
    ///https://schema.org/validThrough
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<OfferForPurchaseValidThroughFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/validForMemberTier
    #[serde(rename = "validForMemberTier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_for_member_tier: Vec<MemberProgramTier>,
    ///https://schema.org/eligibleRegion
    #[serde(rename = "eligibleRegion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_region: Vec<OfferForPurchaseEligibleRegionFieldEnum>,
    ///https://schema.org/hasMeasurement
    #[serde(rename = "hasMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_measurement: Vec<QuantitativeValue>,
    ///https://schema.org/deliveryLeadTime
    #[serde(rename = "deliveryLeadTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub delivery_lead_time: Vec<QuantitativeValue>,
    ///https://schema.org/mobileUrl
    #[serde(rename = "mobileUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mobile_url: Vec<String>,
    ///https://schema.org/includesObject
    #[serde(rename = "includesObject")]
    #[serde_as(as = "OneOrMany<_>")]
    pub includes_object: Vec<TypeAndQuantityNode>,
    ///https://schema.org/advanceBookingRequirement
    #[serde(rename = "advanceBookingRequirement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub advance_booking_requirement: Vec<QuantitativeValue>,
    ///https://schema.org/ineligibleRegion
    #[serde(rename = "ineligibleRegion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ineligible_region: Vec<OfferForPurchaseIneligibleRegionFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/offeredBy
    #[serde(rename = "offeredBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offered_by: Vec<OfferForPurchaseOfferedByFieldEnum>,
    ///https://schema.org/inventoryLevel
    #[serde(rename = "inventoryLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub inventory_level: Vec<QuantitativeValue>,
    ///https://schema.org/validFrom
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<OfferForPurchaseValidFromFieldEnum>,
    ///https://schema.org/gtin
    #[serde(rename = "gtin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin: Vec<OfferForPurchaseGtinFieldEnum>,
    ///https://schema.org/category
    #[serde(rename = "category")]
    #[serde_as(as = "OneOrMany<_>")]
    pub category: Vec<OfferForPurchaseCategoryFieldEnum>,
    ///https://schema.org/hasGS1DigitalLink
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///https://schema.org/priceSpecification
    #[serde(rename = "priceSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_specification: Vec<PriceSpecification>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/itemCondition
    #[serde(rename = "itemCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub item_condition: Vec<OfferItemConditionEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<OfferForPurchaseSubjectOfFieldEnum>,
    ///https://schema.org/warranty
    #[serde(rename = "warranty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub warranty: Vec<WarrantyPromise>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/shippingDetails
    #[serde(rename = "shippingDetails")]
    #[serde_as(as = "OneOrMany<_>")]
    pub shipping_details: Vec<OfferShippingDetails>,
    ///https://schema.org/areaServed
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<OfferForPurchaseAreaServedFieldEnum>,
    ///https://schema.org/availability
    #[serde(rename = "availability")]
    #[serde_as(as = "OneOrMany<_>")]
    pub availability: Vec<ItemAvailabilityEnum>,
    ///https://schema.org/gtin12
    #[serde(rename = "gtin12")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin12: Vec<String>,
    ///https://schema.org/seller
    #[serde(rename = "seller")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seller: Vec<OfferForPurchaseSellerFieldEnum>,
    ///https://schema.org/gtin14
    #[serde(rename = "gtin14")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin14: Vec<String>,
    ///https://schema.org/acceptedPaymentMethod
    #[serde(rename = "acceptedPaymentMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accepted_payment_method: Vec<OfferForPurchaseAcceptedPaymentMethodFieldEnum>,
    ///https://schema.org/leaseLength
    #[serde(rename = "leaseLength")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lease_length: Vec<OfferForPurchaseLeaseLengthFieldEnum>,
    ///https://schema.org/eligibleTransactionVolume
    #[serde(rename = "eligibleTransactionVolume")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_transaction_volume: Vec<PriceSpecification>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<OfferForPurchaseDescriptionFieldEnum>,
    ///https://schema.org/eligibleDuration
    #[serde(rename = "eligibleDuration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_duration: Vec<QuantitativeValue>,
    ///https://schema.org/availabilityEnds
    #[serde(rename = "availabilityEnds")]
    #[serde_as(as = "OneOrMany<_>")]
    pub availability_ends: Vec<OfferForPurchaseAvailabilityEndsFieldEnum>,
    ///https://schema.org/mpn
    #[serde(rename = "mpn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mpn: Vec<String>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/sku
    #[serde(rename = "sku")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sku: Vec<String>,
    ///https://schema.org/hasMerchantReturnPolicy
    #[serde(rename = "hasMerchantReturnPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_merchant_return_policy: Vec<MerchantReturnPolicy>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<OfferForPurchaseAdditionalTypeFieldEnum>,
    ///https://schema.org/businessFunction
    #[serde(rename = "businessFunction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub business_function: Vec<BusinessFunction>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<OfferForPurchaseMainEntityOfPageFieldEnum>,
    ///https://schema.org/gtin8
    #[serde(rename = "gtin8")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin8: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<OfferForPurchaseImageFieldEnum>,
    ///https://schema.org/eligibleQuantity
    #[serde(rename = "eligibleQuantity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_quantity: Vec<QuantitativeValue>,
    ///https://schema.org/addOn
    #[serde(rename = "addOn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub add_on: Vec<Offer>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/availableAtOrFrom
    #[serde(rename = "availableAtOrFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub available_at_or_from: Vec<Place>,
    ///https://schema.org/additionalProperty
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
}
