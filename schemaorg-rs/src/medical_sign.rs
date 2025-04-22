use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type MedicalSignAdditionalTypeFieldEnum = String;
///<https://schema.org/MedicalSign>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MedicalSign {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/identifyingExam>
    #[serde(rename = "identifyingExam")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifying_exam: Vec<PhysicalExamEnum>,
    ///<https://schema.org/identifyingTest>
    #[serde(rename = "identifyingTest")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifying_test: Vec<MedicalTest>,
    ///<https://schema.org/possibleTreatment>
    #[serde(rename = "possibleTreatment")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub possible_treatment: Vec<MedicalTherapy>,
    ///<https://schema.org/expectedPrognosis>
    #[serde(rename = "expectedPrognosis")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub expected_prognosis: Vec<String>,
    ///<https://schema.org/associatedAnatomy>
    #[serde(rename = "associatedAnatomy")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub associated_anatomy: Vec<MedicalSignAssociatedAnatomyFieldEnum>,
    ///<https://schema.org/possibleComplication>
    #[serde(rename = "possibleComplication")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub possible_complication: Vec<String>,
    ///<https://schema.org/signOrSymptom>
    #[serde(rename = "signOrSymptom")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sign_or_symptom: Vec<MedicalSignOrSymptom>,
    ///<https://schema.org/primaryPrevention>
    #[serde(rename = "primaryPrevention")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub primary_prevention: Vec<MedicalTherapy>,
    ///<https://schema.org/riskFactor>
    #[serde(rename = "riskFactor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub risk_factor: Vec<MedicalRiskFactor>,
    ///<https://schema.org/secondaryPrevention>
    #[serde(rename = "secondaryPrevention")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub secondary_prevention: Vec<MedicalTherapy>,
    ///<https://schema.org/drug>
    #[serde(rename = "drug")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub drug: Vec<Drug>,
    ///<https://schema.org/naturalProgression>
    #[serde(rename = "naturalProgression")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub natural_progression: Vec<String>,
    ///<https://schema.org/status>
    #[serde(rename = "status")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub status: Vec<MedicalSignStatusFieldEnum>,
    ///<https://schema.org/differentialDiagnosis>
    #[serde(rename = "differentialDiagnosis")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub differential_diagnosis: Vec<DDxElement>,
    ///<https://schema.org/epidemiology>
    #[serde(rename = "epidemiology")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub epidemiology: Vec<String>,
    ///<https://schema.org/stage>
    #[serde(rename = "stage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub stage: Vec<MedicalConditionStage>,
    ///<https://schema.org/typicalTest>
    #[serde(rename = "typicalTest")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub typical_test: Vec<MedicalTest>,
    ///<https://schema.org/pathophysiology>
    #[serde(rename = "pathophysiology")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub pathophysiology: Vec<String>,
    ///<https://schema.org/legalStatus>
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub legal_status: Vec<MedicalSignLegalStatusFieldEnum>,
    ///<https://schema.org/relevantSpecialty>
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funding: Vec<Grant>,
    ///<https://schema.org/recognizingAuthority>
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub recognizing_authority: Vec<Organization>,
    ///<https://schema.org/medicineSystem>
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///<https://schema.org/guideline>
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub guideline: Vec<MedicalGuideline>,
    ///<https://schema.org/study>
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub study: Vec<MedicalStudy>,
    ///<https://schema.org/code>
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub code: Vec<MedicalCode>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<MedicalSignMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifier: Vec<MedicalSignIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<MedicalSignDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<MedicalSignSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<MedicalSignAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub image: Vec<MedicalSignImageFieldEnum>,
}
