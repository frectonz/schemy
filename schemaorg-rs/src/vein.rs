use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type VeinAdditionalTypeFieldEnum = String;
///<https://schema.org/Vein>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Vein {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/regionDrained>
    #[serde(rename = "regionDrained")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub region_drained: Vec<VeinRegionDrainedFieldEnum>,
    ///<https://schema.org/drainsTo>
    #[serde(rename = "drainsTo")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub drains_to: Vec<Vessel>,
    ///<https://schema.org/tributary>
    #[serde(rename = "tributary")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub tributary: Vec<AnatomicalStructure>,
    ///<https://schema.org/diagram>
    #[serde(rename = "diagram")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub diagram: Vec<ImageObject>,
    ///<https://schema.org/partOfSystem>
    #[serde(rename = "partOfSystem")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub part_of_system: Vec<AnatomicalSystem>,
    ///<https://schema.org/connectedTo>
    #[serde(rename = "connectedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub connected_to: Vec<AnatomicalStructure>,
    ///<https://schema.org/associatedPathophysiology>
    #[serde(rename = "associatedPathophysiology")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub associated_pathophysiology: Vec<String>,
    ///<https://schema.org/relatedCondition>
    #[serde(rename = "relatedCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub related_condition: Vec<MedicalCondition>,
    ///<https://schema.org/relatedTherapy>
    #[serde(rename = "relatedTherapy")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub related_therapy: Vec<MedicalTherapy>,
    ///<https://schema.org/subStructure>
    #[serde(rename = "subStructure")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sub_structure: Vec<AnatomicalStructure>,
    ///<https://schema.org/bodyLocation>
    #[serde(rename = "bodyLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub body_location: Vec<String>,
    ///<https://schema.org/legalStatus>
    #[serde(rename = "legalStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub legal_status: Vec<VeinLegalStatusFieldEnum>,
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
    pub main_entity_of_page: Vec<VeinMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<VeinIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<VeinDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<VeinSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<VeinAdditionalTypeFieldEnum>,
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
    pub image: Vec<VeinImageFieldEnum>,
}
