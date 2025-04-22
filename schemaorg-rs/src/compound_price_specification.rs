use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type CompoundPriceSpecificationAdditionalTypeFieldEnum = String;
///<https://schema.org/validFrom>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type CompoundPriceSpecificationValidFromFieldEnum = String;
///<https://schema.org/validThrough>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type CompoundPriceSpecificationValidThroughFieldEnum = String;
///<https://schema.org/CompoundPriceSpecification>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct CompoundPriceSpecification {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/priceComponent>
    #[serde(rename = "priceComponent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_component: Vec<UnitPriceSpecification>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<CompoundPriceSpecificationSubjectOfFieldEnum>,
    ///<https://schema.org/membershipPointsEarned>
    #[serde(rename = "membershipPointsEarned")]
    #[serde_as(as = "OneOrMany<_>")]
    pub membership_points_earned: Vec<
        CompoundPriceSpecificationMembershipPointsEarnedFieldEnum,
    >,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<CompoundPriceSpecificationAdditionalTypeFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/eligibleTransactionVolume>
    #[serde(rename = "eligibleTransactionVolume")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_transaction_volume: Vec<PriceSpecification>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/validFrom>
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<CompoundPriceSpecificationValidFromFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/valueAddedTaxIncluded>
    #[serde(rename = "valueAddedTaxIncluded")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value_added_tax_included: Vec<String>,
    ///<https://schema.org/price>
    #[serde(rename = "price")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price: Vec<CompoundPriceSpecificationPriceFieldEnum>,
    ///<https://schema.org/validForMemberTier>
    #[serde(rename = "validForMemberTier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_for_member_tier: Vec<MemberProgramTier>,
    ///<https://schema.org/minPrice>
    #[serde(rename = "minPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub min_price: Vec<f32>,
    ///<https://schema.org/priceType>
    #[serde(rename = "priceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_type: Vec<CompoundPriceSpecificationPriceTypeFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<CompoundPriceSpecificationIdentifierFieldEnum>,
    ///<https://schema.org/maxPrice>
    #[serde(rename = "maxPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub max_price: Vec<f32>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/eligibleQuantity>
    #[serde(rename = "eligibleQuantity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_quantity: Vec<QuantitativeValue>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<CompoundPriceSpecificationDescriptionFieldEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/validThrough>
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<CompoundPriceSpecificationValidThroughFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<CompoundPriceSpecificationImageFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<CompoundPriceSpecificationMainEntityOfPageFieldEnum>,
    ///<https://schema.org/priceCurrency>
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
}
