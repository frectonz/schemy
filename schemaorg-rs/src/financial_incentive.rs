use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/validThrough>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type FinancialIncentiveValidThroughFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type FinancialIncentiveAdditionalTypeFieldEnum = String;
///<https://schema.org/validFrom>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type FinancialIncentiveValidFromFieldEnum = String;
///<https://schema.org/FinancialIncentive>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct FinancialIncentive {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/publisher>
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher: Vec<FinancialIncentivePublisherFieldEnum>,
    ///<https://schema.org/validThrough>
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<FinancialIncentiveValidThroughFieldEnum>,
    ///<https://schema.org/incentiveType>
    #[serde(rename = "incentiveType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub incentive_type: Vec<IncentiveTypeEnum>,
    ///<https://schema.org/qualifiedExpense>
    #[serde(rename = "qualifiedExpense")]
    #[serde_as(as = "OneOrMany<_>")]
    pub qualified_expense: Vec<IncentiveQualifiedExpenseTypeEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<FinancialIncentiveSubjectOfFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<FinancialIncentiveDescriptionFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<FinancialIncentiveIdentifierFieldEnum>,
    ///<https://schema.org/incomeLimit>
    #[serde(rename = "incomeLimit")]
    #[serde_as(as = "OneOrMany<_>")]
    pub income_limit: Vec<FinancialIncentiveIncomeLimitFieldEnum>,
    ///<https://schema.org/purchaseType>
    #[serde(rename = "purchaseType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub purchase_type: Vec<PurchaseTypeEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<FinancialIncentiveAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/incentiveStatus>
    #[serde(rename = "incentiveStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub incentive_status: Vec<IncentiveStatusEnum>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<FinancialIncentiveProviderFieldEnum>,
    ///<https://schema.org/incentiveAmount>
    #[serde(rename = "incentiveAmount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub incentive_amount: Vec<FinancialIncentiveIncentiveAmountFieldEnum>,
    ///<https://schema.org/purchasePriceLimit>
    #[serde(rename = "purchasePriceLimit")]
    #[serde_as(as = "OneOrMany<_>")]
    pub purchase_price_limit: Vec<MonetaryAmount>,
    ///<https://schema.org/areaServed>
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<FinancialIncentiveAreaServedFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<FinancialIncentiveMainEntityOfPageFieldEnum>,
    ///<https://schema.org/validFrom>
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<FinancialIncentiveValidFromFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<FinancialIncentiveImageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/eligibleWithSupplier>
    #[serde(rename = "eligibleWithSupplier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub eligible_with_supplier: Vec<Organization>,
    ///<https://schema.org/incentivizedItem>
    #[serde(rename = "incentivizedItem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub incentivized_item: Vec<FinancialIncentiveIncentivizedItemFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
}
