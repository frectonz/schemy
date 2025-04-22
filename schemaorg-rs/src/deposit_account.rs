use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/bankAccountType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DepositAccountBankAccountTypeFieldEnum = String;
///<https://schema.org/feesAndCommissionsSpecification>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DepositAccountFeesAndCommissionsSpecificationFieldEnum = String;
///<https://schema.org/termsOfService>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DepositAccountTermsOfServiceFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DepositAccountAdditionalTypeFieldEnum = String;
///<https://schema.org/DepositAccount>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct DepositAccount {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/bankAccountType>
    #[serde(rename = "bankAccountType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub bank_account_type: Vec<DepositAccountBankAccountTypeFieldEnum>,
    ///<https://schema.org/interestRate>
    #[serde(rename = "interestRate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interest_rate: Vec<DepositAccountInterestRateFieldEnum>,
    ///<https://schema.org/isRelatedTo>
    #[serde(rename = "isRelatedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_related_to: Vec<DepositAccountIsRelatedToFieldEnum>,
    ///<https://schema.org/feesAndCommissionsSpecification>
    #[serde(rename = "feesAndCommissionsSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fees_and_commissions_specification: Vec<
        DepositAccountFeesAndCommissionsSpecificationFieldEnum,
    >,
    ///<https://schema.org/hasOfferCatalog>
    #[serde(rename = "hasOfferCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_offer_catalog: Vec<OfferCatalog>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/isSimilarTo>
    #[serde(rename = "isSimilarTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_similar_to: Vec<DepositAccountIsSimilarToFieldEnum>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<DepositAccountProviderFieldEnum>,
    ///<https://schema.org/serviceArea>
    #[serde(rename = "serviceArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_area: Vec<DepositAccountServiceAreaFieldEnum>,
    ///<https://schema.org/slogan>
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<DepositAccountOffersFieldEnum>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///<https://schema.org/availableChannel>
    #[serde(rename = "availableChannel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub available_channel: Vec<ServiceChannel>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///<https://schema.org/annualPercentageRate>
    #[serde(rename = "annualPercentageRate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub annual_percentage_rate: Vec<DepositAccountAnnualPercentageRateFieldEnum>,
    ///<https://schema.org/serviceOutput>
    #[serde(rename = "serviceOutput")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_output: Vec<Thing>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<DepositAccountSubjectOfFieldEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/hoursAvailable>
    #[serde(rename = "hoursAvailable")]
    #[serde_as(as = "OneOrMany<_>")]
    pub hours_available: Vec<OpeningHoursSpecification>,
    ///<https://schema.org/accountOverdraftLimit>
    #[serde(rename = "accountOverdraftLimit")]
    #[serde_as(as = "OneOrMany<_>")]
    pub account_overdraft_limit: Vec<MonetaryAmount>,
    ///<https://schema.org/accountMinimumInflow>
    #[serde(rename = "accountMinimumInflow")]
    #[serde_as(as = "OneOrMany<_>")]
    pub account_minimum_inflow: Vec<MonetaryAmount>,
    ///<https://schema.org/brand>
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<DepositAccountBrandFieldEnum>,
    ///<https://schema.org/areaServed>
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<DepositAccountAreaServedFieldEnum>,
    ///<https://schema.org/amount>
    #[serde(rename = "amount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub amount: Vec<DepositAccountAmountFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/serviceAudience>
    #[serde(rename = "serviceAudience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_audience: Vec<Audience>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<DepositAccountDescriptionFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<DepositAccountImageFieldEnum>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///<https://schema.org/termsOfService>
    #[serde(rename = "termsOfService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub terms_of_service: Vec<DepositAccountTermsOfServiceFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<DepositAccountMainEntityOfPageFieldEnum>,
    ///<https://schema.org/hasCertification>
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///<https://schema.org/broker>
    #[serde(rename = "broker")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broker: Vec<DepositAccountBrokerFieldEnum>,
    ///<https://schema.org/category>
    #[serde(rename = "category")]
    #[serde_as(as = "OneOrMany<_>")]
    pub category: Vec<DepositAccountCategoryFieldEnum>,
    ///<https://schema.org/produces>
    #[serde(rename = "produces")]
    #[serde_as(as = "OneOrMany<_>")]
    pub produces: Vec<Thing>,
    ///<https://schema.org/serviceType>
    #[serde(rename = "serviceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_type: Vec<DepositAccountServiceTypeFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<DepositAccountAdditionalTypeFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/providerMobility>
    #[serde(rename = "providerMobility")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider_mobility: Vec<String>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<DepositAccountIdentifierFieldEnum>,
    ///<https://schema.org/logo>
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<DepositAccountLogoFieldEnum>,
}
