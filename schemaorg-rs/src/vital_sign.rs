use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type VitalSignAdditionalTypeFieldEnum = String;
///https://schema.org/VitalSign
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct VitalSign {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/identifyingTest
    #[serde(rename = "identifyingTest")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifying_test: Vec<MedicalTest>,
    ///https://schema.org/drug
    #[serde(rename = "drug")]
    #[serde_as(as = "OneOrMany<_>")]
    pub drug: Vec<Drug>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<VitalSignMainEntityOfPageFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/code
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code: Vec<MedicalCode>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/stage
    #[serde(rename = "stage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub stage: Vec<MedicalConditionStage>,
    ///https://schema.org/riskFactor
    #[serde(rename = "riskFactor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub risk_factor: Vec<MedicalRiskFactor>,
    ///https://schema.org/medicineSystem
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/signOrSymptom
    #[serde(rename = "signOrSymptom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sign_or_symptom: Vec<MedicalSignOrSymptom>,
    ///https://schema.org/possibleComplication
    #[serde(rename = "possibleComplication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub possible_complication: Vec<String>,
    ///https://schema.org/associatedAnatomy
    #[serde(rename = "associatedAnatomy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_anatomy: Vec<VitalSignAssociatedAnatomyFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<VitalSignIdentifierFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<VitalSignSubjectOfFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<VitalSignAdditionalTypeFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<VitalSignImageFieldEnum>,
    ///https://schema.org/primaryPrevention
    #[serde(rename = "primaryPrevention")]
    #[serde_as(as = "OneOrMany<_>")]
    pub primary_prevention: Vec<MedicalTherapy>,
    ///https://schema.org/relevantSpecialty
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///https://schema.org/guideline
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub guideline: Vec<MedicalGuideline>,
    ///https://schema.org/naturalProgression
    #[serde(rename = "naturalProgression")]
    #[serde_as(as = "OneOrMany<_>")]
    pub natural_progression: Vec<String>,
    ///https://schema.org/epidemiology
    #[serde(rename = "epidemiology")]
    #[serde_as(as = "OneOrMany<_>")]
    pub epidemiology: Vec<String>,
    ///https://schema.org/pathophysiology
    #[serde(rename = "pathophysiology")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pathophysiology: Vec<String>,
    ///https://schema.org/legalStatus
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_status: Vec<VitalSignLegalStatusFieldEnum>,
    ///https://schema.org/secondaryPrevention
    #[serde(rename = "secondaryPrevention")]
    #[serde_as(as = "OneOrMany<_>")]
    pub secondary_prevention: Vec<MedicalTherapy>,
    ///https://schema.org/status
    #[serde(rename = "status")]
    #[serde_as(as = "OneOrMany<_>")]
    pub status: Vec<VitalSignStatusFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/identifyingExam
    #[serde(rename = "identifyingExam")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifying_exam: Vec<PhysicalExamEnum>,
    ///https://schema.org/typicalTest
    #[serde(rename = "typicalTest")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_test: Vec<MedicalTest>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/differentialDiagnosis
    #[serde(rename = "differentialDiagnosis")]
    #[serde_as(as = "OneOrMany<_>")]
    pub differential_diagnosis: Vec<DDxElement>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/study
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study: Vec<MedicalStudy>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<VitalSignDescriptionFieldEnum>,
    ///https://schema.org/expectedPrognosis
    #[serde(rename = "expectedPrognosis")]
    #[serde_as(as = "OneOrMany<_>")]
    pub expected_prognosis: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/recognizingAuthority
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recognizing_authority: Vec<Organization>,
    ///https://schema.org/possibleTreatment
    #[serde(rename = "possibleTreatment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub possible_treatment: Vec<MedicalTherapy>,
}
