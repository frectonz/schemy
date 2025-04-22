use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/validThrough
///https://schema.org/Date
///https://schema.org/DateTime
pub type LocationFeatureSpecificationValidThroughFieldEnum = String;
///https://schema.org/validFrom
///https://schema.org/Date
///https://schema.org/DateTime
pub type LocationFeatureSpecificationValidFromFieldEnum = String;
///https://schema.org/propertyID
///https://schema.org/Text
///https://schema.org/URL
pub type LocationFeatureSpecificationPropertyIDFieldEnum = String;
///https://schema.org/unitCode
///https://schema.org/Text
///https://schema.org/URL
pub type LocationFeatureSpecificationUnitCodeFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type LocationFeatureSpecificationAdditionalTypeFieldEnum = String;
///https://schema.org/LocationFeatureSpecification
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct LocationFeatureSpecification {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/validThrough
    #[serde(rename = "validThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_through: Vec<LocationFeatureSpecificationValidThroughFieldEnum>,
    ///https://schema.org/maxValue
    #[serde(rename = "maxValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub max_value: Vec<f32>,
    ///https://schema.org/valueReference
    #[serde(rename = "valueReference")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value_reference: Vec<LocationFeatureSpecificationValueReferenceFieldEnum>,
    ///https://schema.org/measurementMethod
    #[serde(rename = "measurementMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_method: Vec<LocationFeatureSpecificationMeasurementMethodFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/minValue
    #[serde(rename = "minValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub min_value: Vec<f32>,
    ///https://schema.org/validFrom
    #[serde(rename = "validFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    pub valid_from: Vec<LocationFeatureSpecificationValidFromFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<LocationFeatureSpecificationDescriptionFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/unitText
    #[serde(rename = "unitText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unit_text: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<LocationFeatureSpecificationImageFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/value
    #[serde(rename = "value")]
    #[serde_as(as = "OneOrMany<_>")]
    pub value: Vec<LocationFeatureSpecificationValueFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<LocationFeatureSpecificationSubjectOfFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<LocationFeatureSpecificationMainEntityOfPageFieldEnum>,
    ///https://schema.org/hoursAvailable
    #[serde(rename = "hoursAvailable")]
    #[serde_as(as = "OneOrMany<_>")]
    pub hours_available: Vec<OpeningHoursSpecification>,
    ///https://schema.org/propertyID
    #[serde(rename = "propertyID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub property_id: Vec<LocationFeatureSpecificationPropertyIDFieldEnum>,
    ///https://schema.org/unitCode
    #[serde(rename = "unitCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unit_code: Vec<LocationFeatureSpecificationUnitCodeFieldEnum>,
    ///https://schema.org/measurementTechnique
    #[serde(rename = "measurementTechnique")]
    #[serde_as(as = "OneOrMany<_>")]
    pub measurement_technique: Vec<
        LocationFeatureSpecificationMeasurementTechniqueFieldEnum,
    >,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<LocationFeatureSpecificationAdditionalTypeFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<LocationFeatureSpecificationIdentifierFieldEnum>,
}
