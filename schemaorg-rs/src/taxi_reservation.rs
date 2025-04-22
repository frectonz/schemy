use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type TaxiReservationAdditionalTypeFieldEnum = String;
///<https://schema.org/TaxiReservation>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct TaxiReservation {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/partySize>
    #[serde(rename = "partySize")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub party_size: Vec<TaxiReservationPartySizeFieldEnum>,
    ///<https://schema.org/pickupTime>
    #[serde(rename = "pickupTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub pickup_time: Vec<String>,
    ///<https://schema.org/pickupLocation>
    #[serde(rename = "pickupLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub pickup_location: Vec<Place>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub provider: Vec<TaxiReservationProviderFieldEnum>,
    ///<https://schema.org/programMembershipUsed>
    #[serde(rename = "programMembershipUsed")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub program_membership_used: Vec<ProgramMembership>,
    ///<https://schema.org/totalPrice>
    #[serde(rename = "totalPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub total_price: Vec<TaxiReservationTotalPriceFieldEnum>,
    ///<https://schema.org/broker>
    #[serde(rename = "broker")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub broker: Vec<TaxiReservationBrokerFieldEnum>,
    ///<https://schema.org/reservationStatus>
    #[serde(rename = "reservationStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub reservation_status: Vec<ReservationStatusTypeEnum>,
    ///<https://schema.org/reservationId>
    #[serde(rename = "reservationId")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub reservation_id: Vec<String>,
    ///<https://schema.org/bookingTime>
    #[serde(rename = "bookingTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub booking_time: Vec<String>,
    ///<https://schema.org/modifiedTime>
    #[serde(rename = "modifiedTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub modified_time: Vec<String>,
    ///<https://schema.org/priceCurrency>
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub price_currency: Vec<String>,
    ///<https://schema.org/bookingAgent>
    #[serde(rename = "bookingAgent")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub booking_agent: Vec<TaxiReservationBookingAgentFieldEnum>,
    ///<https://schema.org/reservationFor>
    #[serde(rename = "reservationFor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub reservation_for: Vec<Thing>,
    ///<https://schema.org/underName>
    #[serde(rename = "underName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub under_name: Vec<TaxiReservationUnderNameFieldEnum>,
    ///<https://schema.org/reservedTicket>
    #[serde(rename = "reservedTicket")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub reserved_ticket: Vec<Ticket>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<TaxiReservationMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<TaxiReservationIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<TaxiReservationDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<TaxiReservationSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<TaxiReservationAdditionalTypeFieldEnum>,
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
    pub image: Vec<TaxiReservationImageFieldEnum>,
}
