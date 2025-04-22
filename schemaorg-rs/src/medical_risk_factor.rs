use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MedicalRiskFactorAdditionalTypeFieldEnum = String;
///https://schema.org/MedicalRiskFactor
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MedicalRiskFactor {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MedicalRiskFactorDescriptionFieldEnum>,
    ///https://schema.org/study
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study: Vec<MedicalStudy>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/recognizingAuthority
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recognizing_authority: Vec<Organization>,
    ///https://schema.org/increasesRiskOf
    #[serde(rename = "increasesRiskOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub increases_risk_of: Vec<MedicalEntity>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MedicalRiskFactorAdditionalTypeFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MedicalRiskFactorImageFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/relevantSpecialty
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///https://schema.org/guideline
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub guideline: Vec<MedicalGuideline>,
    ///https://schema.org/code
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code: Vec<MedicalCode>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MedicalRiskFactorIdentifierFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MedicalRiskFactorSubjectOfFieldEnum>,
    ///https://schema.org/medicineSystem
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MedicalRiskFactorMainEntityOfPageFieldEnum>,
    ///https://schema.org/legalStatus
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_status: Vec<MedicalRiskFactorLegalStatusFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
}
