use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type UnitPriceSpecificationAdditionalTypeFieldEnum = String;
///https://schema.org/unitCode
///https://schema.org/Text
///https://schema.org/URL
pub type UnitPriceSpecificationUnitCodeFieldEnum = String;
///https://schema.org/validFrom
///https://schema.org/Date
///https://schema.org/DateTime
pub type UnitPriceSpecificationValidFromFieldEnum = String;
///https://schema.org/validThrough
///https://schema.org/Date
///https://schema.org/DateTime
pub type UnitPriceSpecificationValidThroughFieldEnum = String;
///https://schema.org/UnitPriceSpecification
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct UnitPriceSpecification {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/price
    #[serde(rename = "price")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price: Vec<UnitPriceSpecificationPriceFieldEnum>,
    ///https://schema.org/minPrice
    #[serde(rename = "minPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub min_price: Vec<f32>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<UnitPriceSpecificationMainEntityOfPageFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<UnitPriceSpecificationSubjectOfFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<UnitPriceSpecificationAdditionalTypeFieldEnum>,
    ///https://schema.org/unitText
    #[serde(rename = "unitText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unit_text: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/unitCode
    #[serde(rename = "unitCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unit_code: Vec<UnitPriceSpecificationUnitCodeFieldEnum>,
    ///https://schema.org/priceCurrency
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
    ///https://schema.org/membershipPointsEarned
    #[serde(rename = "membershipPointsEarned")]
    #[serde_as(as = "OneOrMany<_>")]
    pub membership_points_earned: Vec<
        UnitPriceSpecificationMembershipPointsEarnedFieldEnum,
    >,
    ///https://schema.org/valueAddedTaxIncluded
    #[serde(rename = "valueAddedTaxIncluded")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value_added_tax_included: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<UnitPriceSpecificationIdentifierFieldEnum>,
    ///https://schema.org/maxPrice
    #[serde(rename = "maxPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub max_price: Vec<f32>,
    ///https://schema.org/validFrom
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<UnitPriceSpecificationValidFromFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<UnitPriceSpecificationDescriptionFieldEnum>,
    ///https://schema.org/validForMemberTier
    #[serde(rename = "validForMemberTier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_for_member_tier: Vec<MemberProgramTier>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/eligibleQuantity
    #[serde(rename = "eligibleQuantity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_quantity: Vec<QuantitativeValue>,
    ///https://schema.org/billingDuration
    #[serde(rename = "billingDuration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub billing_duration: Vec<UnitPriceSpecificationBillingDurationFieldEnum>,
    ///https://schema.org/priceComponentType
    #[serde(rename = "priceComponentType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_component_type: Vec<PriceComponentTypeEnumerationEnum>,
    ///https://schema.org/billingIncrement
    #[serde(rename = "billingIncrement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub billing_increment: Vec<f32>,
    ///https://schema.org/validThrough
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<UnitPriceSpecificationValidThroughFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/billingStart
    #[serde(rename = "billingStart")]
    #[serde_as(as = "OneOrMany<_>")]
    pub billing_start: Vec<f32>,
    ///https://schema.org/eligibleTransactionVolume
    #[serde(rename = "eligibleTransactionVolume")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_transaction_volume: Vec<PriceSpecification>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<UnitPriceSpecificationImageFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/referenceQuantity
    #[serde(rename = "referenceQuantity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reference_quantity: Vec<QuantitativeValue>,
    ///https://schema.org/priceType
    #[serde(rename = "priceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_type: Vec<UnitPriceSpecificationPriceTypeFieldEnum>,
}
