use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type OccupationAdditionalTypeFieldEnum = String;
///https://schema.org/Occupation
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Occupation {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/skills
    #[serde(rename = "skills")]
    #[serde_as(as = "OneOrMany<_>")]
    pub skills: Vec<OccupationSkillsFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<OccupationIdentifierFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<OccupationDescriptionFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<OccupationImageFieldEnum>,
    ///https://schema.org/qualifications
    #[serde(rename = "qualifications")]
    #[serde_as(as = "OneOrMany<_>")]
    pub qualifications: Vec<OccupationQualificationsFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<OccupationSubjectOfFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/educationRequirements
    #[serde(rename = "educationRequirements")]
    #[serde_as(as = "OneOrMany<_>")]
    pub education_requirements: Vec<OccupationEducationRequirementsFieldEnum>,
    ///https://schema.org/occupationLocation
    #[serde(rename = "occupationLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub occupation_location: Vec<AdministrativeArea>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<OccupationAdditionalTypeFieldEnum>,
    ///https://schema.org/responsibilities
    #[serde(rename = "responsibilities")]
    #[serde_as(as = "OneOrMany<_>")]
    pub responsibilities: Vec<String>,
    ///https://schema.org/occupationalCategory
    #[serde(rename = "occupationalCategory")]
    #[serde_as(as = "OneOrMany<_>")]
    pub occupational_category: Vec<OccupationOccupationalCategoryFieldEnum>,
    ///https://schema.org/estimatedSalary
    #[serde(rename = "estimatedSalary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub estimated_salary: Vec<OccupationEstimatedSalaryFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<OccupationMainEntityOfPageFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/experienceRequirements
    #[serde(rename = "experienceRequirements")]
    #[serde_as(as = "OneOrMany<_>")]
    pub experience_requirements: Vec<OccupationExperienceRequirementsFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
}
