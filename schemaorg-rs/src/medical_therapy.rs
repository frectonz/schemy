use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MedicalTherapyAdditionalTypeFieldEnum = String;
///https://schema.org/MedicalTherapy
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MedicalTherapy {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/guideline
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub guideline: Vec<MedicalGuideline>,
    ///https://schema.org/adverseOutcome
    #[serde(rename = "adverseOutcome")]
    #[serde_as(as = "OneOrMany<_>")]
    pub adverse_outcome: Vec<MedicalEntity>,
    ///https://schema.org/procedureType
    #[serde(rename = "procedureType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub procedure_type: Vec<MedicalProcedureTypeEnum>,
    ///https://schema.org/study
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study: Vec<MedicalStudy>,
    ///https://schema.org/followup
    #[serde(rename = "followup")]
    #[serde_as(as = "OneOrMany<_>")]
    pub followup: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MedicalTherapyIdentifierFieldEnum>,
    ///https://schema.org/duplicateTherapy
    #[serde(rename = "duplicateTherapy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duplicate_therapy: Vec<MedicalTherapy>,
    ///https://schema.org/doseSchedule
    #[serde(rename = "doseSchedule")]
    #[serde_as(as = "OneOrMany<_>")]
    pub dose_schedule: Vec<DoseSchedule>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MedicalTherapyImageFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MedicalTherapyAdditionalTypeFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MedicalTherapySubjectOfFieldEnum>,
    ///https://schema.org/code
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code: Vec<MedicalCode>,
    ///https://schema.org/drug
    #[serde(rename = "drug")]
    #[serde_as(as = "OneOrMany<_>")]
    pub drug: Vec<Drug>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MedicalTherapyMainEntityOfPageFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/preparation
    #[serde(rename = "preparation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub preparation: Vec<MedicalTherapyPreparationFieldEnum>,
    ///https://schema.org/recognizingAuthority
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recognizing_authority: Vec<Organization>,
    ///https://schema.org/contraindication
    #[serde(rename = "contraindication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contraindication: Vec<MedicalTherapyContraindicationFieldEnum>,
    ///https://schema.org/seriousAdverseOutcome
    #[serde(rename = "seriousAdverseOutcome")]
    #[serde_as(as = "OneOrMany<_>")]
    pub serious_adverse_outcome: Vec<MedicalEntity>,
    ///https://schema.org/status
    #[serde(rename = "status")]
    #[serde_as(as = "OneOrMany<_>")]
    pub status: Vec<MedicalTherapyStatusFieldEnum>,
    ///https://schema.org/bodyLocation
    #[serde(rename = "bodyLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub body_location: Vec<String>,
    ///https://schema.org/howPerformed
    #[serde(rename = "howPerformed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub how_performed: Vec<String>,
    ///https://schema.org/relevantSpecialty
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///https://schema.org/medicineSystem
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/legalStatus
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_status: Vec<MedicalTherapyLegalStatusFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MedicalTherapyDescriptionFieldEnum>,
}
