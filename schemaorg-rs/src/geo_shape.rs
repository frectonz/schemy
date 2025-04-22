use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type GeoShapeAdditionalTypeFieldEnum = String;
///<https://schema.org/GeoShape>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct GeoShape {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/elevation>
    #[serde(rename = "elevation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub elevation: Vec<GeoShapeElevationFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<GeoShapeDescriptionFieldEnum>,
    ///<https://schema.org/address>
    #[serde(rename = "address")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address: Vec<GeoShapeAddressFieldEnum>,
    ///<https://schema.org/line>
    #[serde(rename = "line")]
    #[serde_as(as = "OneOrMany<_>")]
    pub line: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<GeoShapeIdentifierFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<GeoShapeSubjectOfFieldEnum>,
    ///<https://schema.org/circle>
    #[serde(rename = "circle")]
    #[serde_as(as = "OneOrMany<_>")]
    pub circle: Vec<String>,
    ///<https://schema.org/addressCountry>
    #[serde(rename = "addressCountry")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address_country: Vec<GeoShapeAddressCountryFieldEnum>,
    ///<https://schema.org/polygon>
    #[serde(rename = "polygon")]
    #[serde_as(as = "OneOrMany<_>")]
    pub polygon: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/postalCode>
    #[serde(rename = "postalCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub postal_code: Vec<String>,
    ///<https://schema.org/box>
    #[serde(rename = "box")]
    #[serde_as(as = "OneOrMany<_>")]
    pub _box: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<GeoShapeAdditionalTypeFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<GeoShapeImageFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<GeoShapeMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
}
