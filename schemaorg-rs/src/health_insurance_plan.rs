use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type HealthInsurancePlanAdditionalTypeFieldEnum = String;
///https://schema.org/usesHealthPlanIdStandard
///https://schema.org/Text
///https://schema.org/URL
pub type HealthInsurancePlanUsesHealthPlanIdStandardFieldEnum = String;
///https://schema.org/HealthInsurancePlan
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct HealthInsurancePlan {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<HealthInsurancePlanMainEntityOfPageFieldEnum>,
    ///https://schema.org/healthPlanDrugOption
    #[serde(rename = "healthPlanDrugOption")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_plan_drug_option: Vec<String>,
    ///https://schema.org/includesHealthPlanFormulary
    #[serde(rename = "includesHealthPlanFormulary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub includes_health_plan_formulary: Vec<HealthPlanFormulary>,
    ///https://schema.org/includesHealthPlanNetwork
    #[serde(rename = "includesHealthPlanNetwork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub includes_health_plan_network: Vec<HealthPlanNetwork>,
    ///https://schema.org/healthPlanDrugTier
    #[serde(rename = "healthPlanDrugTier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_plan_drug_tier: Vec<String>,
    ///https://schema.org/benefitsSummaryUrl
    #[serde(rename = "benefitsSummaryUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub benefits_summary_url: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<HealthInsurancePlanSubjectOfFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<HealthInsurancePlanAdditionalTypeFieldEnum>,
    ///https://schema.org/healthPlanMarketingUrl
    #[serde(rename = "healthPlanMarketingUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_plan_marketing_url: Vec<String>,
    ///https://schema.org/contactPoint
    #[serde(rename = "contactPoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_point: Vec<ContactPoint>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/usesHealthPlanIdStandard
    #[serde(rename = "usesHealthPlanIdStandard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub uses_health_plan_id_standard: Vec<
        HealthInsurancePlanUsesHealthPlanIdStandardFieldEnum,
    >,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<HealthInsurancePlanDescriptionFieldEnum>,
    ///https://schema.org/healthPlanId
    #[serde(rename = "healthPlanId")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_plan_id: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<HealthInsurancePlanImageFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<HealthInsurancePlanIdentifierFieldEnum>,
}
