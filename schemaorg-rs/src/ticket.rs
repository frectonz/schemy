use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/dateIssued
///https://schema.org/Date
///https://schema.org/DateTime
pub type TicketDateIssuedFieldEnum = String;
///https://schema.org/ticketToken
///https://schema.org/Text
///https://schema.org/URL
pub type TicketTicketTokenFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type TicketAdditionalTypeFieldEnum = String;
///https://schema.org/Ticket
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Ticket {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<TicketIdentifierFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<TicketImageFieldEnum>,
    ///https://schema.org/issuedBy
    #[serde(rename = "issuedBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub issued_by: Vec<Organization>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<TicketMainEntityOfPageFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<TicketDescriptionFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/dateIssued
    #[serde(rename = "dateIssued")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_issued: Vec<TicketDateIssuedFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/totalPrice
    #[serde(rename = "totalPrice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub total_price: Vec<TicketTotalPriceFieldEnum>,
    ///https://schema.org/ticketToken
    #[serde(rename = "ticketToken")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ticket_token: Vec<TicketTicketTokenFieldEnum>,
    ///https://schema.org/underName
    #[serde(rename = "underName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub under_name: Vec<TicketUnderNameFieldEnum>,
    ///https://schema.org/priceCurrency
    #[serde(rename = "priceCurrency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_currency: Vec<String>,
    ///https://schema.org/ticketNumber
    #[serde(rename = "ticketNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ticket_number: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/ticketedSeat
    #[serde(rename = "ticketedSeat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ticketed_seat: Vec<Seat>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<TicketSubjectOfFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<TicketAdditionalTypeFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
}
