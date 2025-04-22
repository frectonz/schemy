use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MedicalObservationalStudyAdditionalTypeFieldEnum = String;
///https://schema.org/MedicalObservationalStudy
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MedicalObservationalStudy {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MedicalObservationalStudyImageFieldEnum>,
    ///https://schema.org/studyDesign
    #[serde(rename = "studyDesign")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study_design: Vec<MedicalObservationalStudyDesignEnum>,
    ///https://schema.org/guideline
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub guideline: Vec<MedicalGuideline>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MedicalObservationalStudyDescriptionFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MedicalObservationalStudyAdditionalTypeFieldEnum>,
    ///https://schema.org/medicineSystem
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///https://schema.org/legalStatus
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_status: Vec<MedicalObservationalStudyLegalStatusFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MedicalObservationalStudyIdentifierFieldEnum>,
    ///https://schema.org/healthCondition
    #[serde(rename = "healthCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_condition: Vec<MedicalCondition>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/code
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code: Vec<MedicalCode>,
    ///https://schema.org/study
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study: Vec<MedicalStudy>,
    ///https://schema.org/studySubject
    #[serde(rename = "studySubject")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study_subject: Vec<MedicalEntity>,
    ///https://schema.org/relevantSpecialty
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///https://schema.org/recognizingAuthority
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recognizing_authority: Vec<Organization>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MedicalObservationalStudySubjectOfFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/status
    #[serde(rename = "status")]
    #[serde_as(as = "OneOrMany<_>")]
    pub status: Vec<MedicalObservationalStudyStatusFieldEnum>,
    ///https://schema.org/sponsor
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<MedicalObservationalStudySponsorFieldEnum>,
    ///https://schema.org/studyLocation
    #[serde(rename = "studyLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study_location: Vec<AdministrativeArea>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MedicalObservationalStudyMainEntityOfPageFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
}
