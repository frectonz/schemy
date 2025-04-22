use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/endDate
///https://schema.org/Date
///https://schema.org/DateTime
pub type OrganizationRoleEndDateFieldEnum = String;
///https://schema.org/startDate
///https://schema.org/Date
///https://schema.org/DateTime
pub type OrganizationRoleStartDateFieldEnum = String;
///https://schema.org/roleName
///https://schema.org/Text
///https://schema.org/URL
pub type OrganizationRoleRoleNameFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type OrganizationRoleAdditionalTypeFieldEnum = String;
///https://schema.org/namedPosition
///https://schema.org/Text
///https://schema.org/URL
pub type OrganizationRoleNamedPositionFieldEnum = String;
///https://schema.org/OrganizationRole
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct OrganizationRole {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<OrganizationRoleDescriptionFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<OrganizationRoleImageFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<OrganizationRoleMainEntityOfPageFieldEnum>,
    ///https://schema.org/endDate
    #[serde(rename = "endDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_date: Vec<OrganizationRoleEndDateFieldEnum>,
    ///https://schema.org/startDate
    #[serde(rename = "startDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_date: Vec<OrganizationRoleStartDateFieldEnum>,
    ///https://schema.org/roleName
    #[serde(rename = "roleName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub role_name: Vec<OrganizationRoleRoleNameFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<OrganizationRoleAdditionalTypeFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<OrganizationRoleIdentifierFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<OrganizationRoleSubjectOfFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/numberedPosition
    #[serde(rename = "numberedPosition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub numbered_position: Vec<f32>,
    ///https://schema.org/namedPosition
    #[serde(rename = "namedPosition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub named_position: Vec<OrganizationRoleNamedPositionFieldEnum>,
}
