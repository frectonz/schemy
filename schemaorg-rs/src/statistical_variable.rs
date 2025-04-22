use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type StatisticalVariableAdditionalTypeFieldEnum = String;
///https://schema.org/StatisticalVariable
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct StatisticalVariable {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/measurementMethod
    #[serde(rename = "measurementMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_method: Vec<StatisticalVariableMeasurementMethodFieldEnum>,
    ///https://schema.org/measuredProperty
    #[serde(rename = "measuredProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measured_property: Vec<Property>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<StatisticalVariableImageFieldEnum>,
    ///https://schema.org/constraintProperty
    #[serde(rename = "constraintProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub constraint_property: Vec<StatisticalVariableConstraintPropertyFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<StatisticalVariableSubjectOfFieldEnum>,
    ///https://schema.org/numConstraints
    #[serde(rename = "numConstraints")]
    #[serde_as(as = "OneOrMany<_>")]
    pub num_constraints: Vec<i32>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<StatisticalVariableMainEntityOfPageFieldEnum>,
    ///https://schema.org/measurementDenominator
    #[serde(rename = "measurementDenominator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_denominator: Vec<StatisticalVariable>,
    ///https://schema.org/measurementTechnique
    #[serde(rename = "measurementTechnique")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_technique: Vec<StatisticalVariableMeasurementTechniqueFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<StatisticalVariableAdditionalTypeFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/populationType
    #[serde(rename = "populationType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub population_type: Vec<Class>,
    ///https://schema.org/statType
    #[serde(rename = "statType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub stat_type: Vec<StatisticalVariableStatTypeFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<StatisticalVariableDescriptionFieldEnum>,
    ///https://schema.org/measurementQualifier
    #[serde(rename = "measurementQualifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_qualifier: Vec<Enumeration>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<StatisticalVariableIdentifierFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
}
