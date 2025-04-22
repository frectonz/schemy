use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type BusTripAdditionalTypeFieldEnum = String;
///https://schema.org/departureTime
///https://schema.org/DateTime
///https://schema.org/Time
pub type BusTripDepartureTimeFieldEnum = String;
///https://schema.org/arrivalTime
///https://schema.org/DateTime
///https://schema.org/Time
pub type BusTripArrivalTimeFieldEnum = String;
///https://schema.org/BusTrip
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct BusTrip {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/tripOrigin
    #[serde(rename = "tripOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub trip_origin: Vec<Place>,
    ///https://schema.org/departureBusStop
    #[serde(rename = "departureBusStop")]
    #[serde_as(as = "OneOrMany<_>")]
    pub departure_bus_stop: Vec<BusTripDepartureBusStopFieldEnum>,
    ///https://schema.org/provider
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<BusTripProviderFieldEnum>,
    ///https://schema.org/partOfTrip
    #[serde(rename = "partOfTrip")]
    #[serde_as(as = "OneOrMany<_>")]
    pub part_of_trip: Vec<Trip>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<BusTripOffersFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/busNumber
    #[serde(rename = "busNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub bus_number: Vec<String>,
    ///https://schema.org/arrivalBusStop
    #[serde(rename = "arrivalBusStop")]
    #[serde_as(as = "OneOrMany<_>")]
    pub arrival_bus_stop: Vec<BusTripArrivalBusStopFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<BusTripAdditionalTypeFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<BusTripImageFieldEnum>,
    ///https://schema.org/itinerary
    #[serde(rename = "itinerary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub itinerary: Vec<BusTripItineraryFieldEnum>,
    ///https://schema.org/subTrip
    #[serde(rename = "subTrip")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_trip: Vec<Trip>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<BusTripMainEntityOfPageFieldEnum>,
    ///https://schema.org/busName
    #[serde(rename = "busName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub bus_name: Vec<String>,
    ///https://schema.org/departureTime
    #[serde(rename = "departureTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub departure_time: Vec<BusTripDepartureTimeFieldEnum>,
    ///https://schema.org/arrivalTime
    #[serde(rename = "arrivalTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub arrival_time: Vec<BusTripArrivalTimeFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<BusTripIdentifierFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<BusTripDescriptionFieldEnum>,
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
    pub subject_of: Vec<BusTripSubjectOfFieldEnum>,
}
