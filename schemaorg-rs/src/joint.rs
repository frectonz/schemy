use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type JointAdditionalTypeFieldEnum = String;
///<https://schema.org/Joint>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Joint {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/study>
    #[serde(rename = "study")]
    #[serde_as(as = "OneOrMany<_>")]
    pub study: Vec<MedicalStudy>,
    ///<https://schema.org/code>
    #[serde(rename = "code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub code: Vec<MedicalCode>,
    ///<https://schema.org/associatedPathophysiology>
    #[serde(rename = "associatedPathophysiology")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_pathophysiology: Vec<String>,
    ///<https://schema.org/relevantSpecialty>
    #[serde(rename = "relevantSpecialty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub relevant_specialty: Vec<MedicalSpecialtyEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<JointMainEntityOfPageFieldEnum>,
    ///<https://schema.org/recognizingAuthority>
    #[serde(rename = "recognizingAuthority")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recognizing_authority: Vec<Organization>,
    ///<https://schema.org/connectedTo>
    #[serde(rename = "connectedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub connected_to: Vec<AnatomicalStructure>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<JointAdditionalTypeFieldEnum>,
    ///<https://schema.org/bodyLocation>
    #[serde(rename = "bodyLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub body_location: Vec<String>,
    ///<https://schema.org/functionalClass>
    #[serde(rename = "functionalClass")]
    #[serde_as(as = "OneOrMany<_>")]
    pub functional_class: Vec<JointFunctionalClassFieldEnum>,
    ///<https://schema.org/guideline>
    #[serde(rename = "guideline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub guideline: Vec<MedicalGuideline>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/relatedTherapy>
    #[serde(rename = "relatedTherapy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub related_therapy: Vec<MedicalTherapy>,
    ///<https://schema.org/structuralClass>
    #[serde(rename = "structuralClass")]
    #[serde_as(as = "OneOrMany<_>")]
    pub structural_class: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<JointIdentifierFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/relatedCondition>
    #[serde(rename = "relatedCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub related_condition: Vec<MedicalCondition>,
    ///<https://schema.org/biomechnicalClass>
    #[serde(rename = "biomechnicalClass")]
    #[serde_as(as = "OneOrMany<_>")]
    pub biomechnical_class: Vec<String>,
    ///<https://schema.org/medicineSystem>
    #[serde(rename = "medicineSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub medicine_system: Vec<MedicineSystemEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<JointImageFieldEnum>,
    ///<https://schema.org/legalStatus>
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_status: Vec<JointLegalStatusFieldEnum>,
    ///<https://schema.org/partOfSystem>
    #[serde(rename = "partOfSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub part_of_system: Vec<AnatomicalSystem>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<JointDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<JointSubjectOfFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/diagram>
    #[serde(rename = "diagram")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diagram: Vec<ImageObject>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/subStructure>
    #[serde(rename = "subStructure")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_structure: Vec<AnatomicalStructure>,
}
