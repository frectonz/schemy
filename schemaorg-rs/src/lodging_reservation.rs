use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type LodgingReservationAdditionalTypeFieldEnum = String;
///<https://schema.org/checkoutTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type LodgingReservationCheckoutTimeFieldEnum = String;
///<https://schema.org/checkinTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type LodgingReservationCheckinTimeFieldEnum = String;
///<https://schema.org/LodgingReservation>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct LodgingReservation {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/lodgingUnitType>
    #[serde(rename = "lodgingUnitType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lodging_unit_type: Vec<LodgingReservationLodgingUnitTypeFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/reservationStatus>
    #[serde(rename = "reservationStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reservation_status: Vec<ReservationStatusTypeEnum>,
    ///<https://schema.org/reservationFor>
    #[serde(rename = "reservationFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reservation_for: Vec<Thing>,
    ///<https://schema.org/underName>
    #[serde(rename = "underName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub under_name: Vec<LodgingReservationUnderNameFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<LodgingReservationSubjectOfFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<LodgingReservationMainEntityOfPageFieldEnum>,
    ///<https://schema.org/numAdults>
    #[serde(rename = "numAdults")]
    #[serde_as(as = "OneOrMany<_>")]
    pub num_adults: Vec<LodgingReservationNumAdultsFieldEnum>,
    ///<https://schema.org/bookingTime>
    #[serde(rename = "bookingTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub booking_time: Vec<String>,
    ///<https://schema.org/lodgingUnitDescription>
    #[serde(rename = "lodgingUnitDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lodging_unit_description: Vec<String>,
    ///<https://schema.org/broker>
    #[serde(rename = "broker")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broker: Vec<LodgingReservationBrokerFieldEnum>,
    ///<https://schema.org/totalPrice>
    #[serde(rename = "totalPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub total_price: Vec<LodgingReservationTotalPriceFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<LodgingReservationAdditionalTypeFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<LodgingReservationIdentifierFieldEnum>,
    ///<https://schema.org/bookingAgent>
    #[serde(rename = "bookingAgent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub booking_agent: Vec<LodgingReservationBookingAgentFieldEnum>,
    ///<https://schema.org/checkoutTime>
    #[serde(rename = "checkoutTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub checkout_time: Vec<LodgingReservationCheckoutTimeFieldEnum>,
    ///<https://schema.org/numChildren>
    #[serde(rename = "numChildren")]
    #[serde_as(as = "OneOrMany<_>")]
    pub num_children: Vec<LodgingReservationNumChildrenFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<LodgingReservationProviderFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/priceCurrency>
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<LodgingReservationImageFieldEnum>,
    ///<https://schema.org/checkinTime>
    #[serde(rename = "checkinTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub checkin_time: Vec<LodgingReservationCheckinTimeFieldEnum>,
    ///<https://schema.org/reservationId>
    #[serde(rename = "reservationId")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reservation_id: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/programMembershipUsed>
    #[serde(rename = "programMembershipUsed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub program_membership_used: Vec<ProgramMembership>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/reservedTicket>
    #[serde(rename = "reservedTicket")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reserved_ticket: Vec<Ticket>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<LodgingReservationDescriptionFieldEnum>,
    ///<https://schema.org/modifiedTime>
    #[serde(rename = "modifiedTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub modified_time: Vec<String>,
}
