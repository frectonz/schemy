use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type SeatAdditionalTypeFieldEnum = String;
///https://schema.org/Seat
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Seat {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/seatRow
    #[serde(rename = "seatRow")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seat_row: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<SeatIdentifierFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<SeatSubjectOfFieldEnum>,
    ///https://schema.org/seatNumber
    #[serde(rename = "seatNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seat_number: Vec<String>,
    ///https://schema.org/seatSection
    #[serde(rename = "seatSection")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seat_section: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<SeatAdditionalTypeFieldEnum>,
    ///https://schema.org/seatingType
    #[serde(rename = "seatingType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seating_type: Vec<SeatSeatingTypeFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<SeatImageFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<SeatMainEntityOfPageFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<SeatDescriptionFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
}
