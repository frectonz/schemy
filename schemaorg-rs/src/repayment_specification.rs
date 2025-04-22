use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type RepaymentSpecificationAdditionalTypeFieldEnum = String;
///https://schema.org/RepaymentSpecification
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct RepaymentSpecification {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/downPayment
    #[serde(rename = "downPayment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub down_payment: Vec<RepaymentSpecificationDownPaymentFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<RepaymentSpecificationDescriptionFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<RepaymentSpecificationMainEntityOfPageFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/earlyPrepaymentPenalty
    #[serde(rename = "earlyPrepaymentPenalty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub early_prepayment_penalty: Vec<MonetaryAmount>,
    ///https://schema.org/loanPaymentAmount
    #[serde(rename = "loanPaymentAmount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub loan_payment_amount: Vec<MonetaryAmount>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<RepaymentSpecificationAdditionalTypeFieldEnum>,
    ///https://schema.org/numberOfLoanPayments
    #[serde(rename = "numberOfLoanPayments")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_loan_payments: Vec<f32>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<RepaymentSpecificationSubjectOfFieldEnum>,
    ///https://schema.org/loanPaymentFrequency
    #[serde(rename = "loanPaymentFrequency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub loan_payment_frequency: Vec<f32>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<RepaymentSpecificationImageFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<RepaymentSpecificationIdentifierFieldEnum>,
}
