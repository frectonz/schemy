use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type MedicalCodeAdditionalTypeFieldEnum = String;
///<https://schema.org/MedicalCode>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MedicalCode {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/codeValue>
    #[serde(rename = "codeValue")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub code_value: Vec<String>,
    ///<https://schema.org/codingSystem>
    #[serde(rename = "codingSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub coding_system: Vec<String>,
    ///<https://schema.org/inCodeSet>
    #[serde(rename = "inCodeSet")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_code_set: Vec<MedicalCodeInCodeSetFieldEnum>,
    ///<https://schema.org/inDefinedTermSet>
    #[serde(rename = "inDefinedTermSet")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_defined_term_set: Vec<MedicalCodeInDefinedTermSetFieldEnum>,
    ///<https://schema.org/termCode>
    #[serde(rename = "termCode")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub term_code: Vec<String>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<MedicalCodeMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<MedicalCodeIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<MedicalCodeDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<MedicalCodeSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<MedicalCodeAdditionalTypeFieldEnum>,
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
    pub image: Vec<MedicalCodeImageFieldEnum>,
    ///<https://schema.org/legalStatus>
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub legal_status: Vec<MedicalCodeLegalStatusFieldEnum>,
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
}
