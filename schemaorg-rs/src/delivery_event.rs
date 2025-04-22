use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/doorTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type DeliveryEventDoorTimeFieldEnum = String;
///<https://schema.org/endDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DeliveryEventEndDateFieldEnum = String;
///<https://schema.org/startDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DeliveryEventStartDateFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DeliveryEventAdditionalTypeFieldEnum = String;
///<https://schema.org/DeliveryEvent>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct DeliveryEvent {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/availableFrom>
    #[serde(rename = "availableFrom")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub available_from: Vec<String>,
    ///<https://schema.org/hasDeliveryMethod>
    #[serde(rename = "hasDeliveryMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub has_delivery_method: Vec<DeliveryMethodEnum>,
    ///<https://schema.org/accessCode>
    #[serde(rename = "accessCode")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub access_code: Vec<String>,
    ///<https://schema.org/availableThrough>
    #[serde(rename = "availableThrough")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub available_through: Vec<String>,
    ///<https://schema.org/doorTime>
    #[serde(rename = "doorTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub door_time: Vec<DeliveryEventDoorTimeFieldEnum>,
    ///<https://schema.org/endDate>
    #[serde(rename = "endDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub end_date: Vec<DeliveryEventEndDateFieldEnum>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/inLanguage>
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_language: Vec<DeliveryEventInLanguageFieldEnum>,
    ///<https://schema.org/eventSchedule>
    #[serde(rename = "eventSchedule")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub event_schedule: Vec<Schedule>,
    ///<https://schema.org/attendees>
    #[serde(rename = "attendees")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub attendees: Vec<DeliveryEventAttendeesFieldEnum>,
    ///<https://schema.org/eventStatus>
    #[serde(rename = "eventStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub event_status: Vec<EventStatusTypeEnum>,
    ///<https://schema.org/maximumPhysicalAttendeeCapacity>
    #[serde(rename = "maximumPhysicalAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub maximum_physical_attendee_capacity: Vec<i32>,
    ///<https://schema.org/composer>
    #[serde(rename = "composer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub composer: Vec<DeliveryEventComposerFieldEnum>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub offers: Vec<DeliveryEventOffersFieldEnum>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub keywords: Vec<DeliveryEventKeywordsFieldEnum>,
    ///<https://schema.org/maximumAttendeeCapacity>
    #[serde(rename = "maximumAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub maximum_attendee_capacity: Vec<i32>,
    ///<https://schema.org/about>
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub about: Vec<Thing>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub location: Vec<DeliveryEventLocationFieldEnum>,
    ///<https://schema.org/remainingAttendeeCapacity>
    #[serde(rename = "remainingAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub remaining_attendee_capacity: Vec<i32>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funding: Vec<Grant>,
    ///<https://schema.org/attendee>
    #[serde(rename = "attendee")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub attendee: Vec<DeliveryEventAttendeeFieldEnum>,
    ///<https://schema.org/workFeatured>
    #[serde(rename = "workFeatured")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub work_featured: Vec<CreativeWork>,
    ///<https://schema.org/performer>
    #[serde(rename = "performer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub performer: Vec<DeliveryEventPerformerFieldEnum>,
    ///<https://schema.org/subEvents>
    #[serde(rename = "subEvents")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sub_events: Vec<Event>,
    ///<https://schema.org/workPerformed>
    #[serde(rename = "workPerformed")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub work_performed: Vec<CreativeWork>,
    ///<https://schema.org/duration>
    #[serde(rename = "duration")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub duration: Vec<DeliveryEventDurationFieldEnum>,
    ///<https://schema.org/organizer>
    #[serde(rename = "organizer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub organizer: Vec<DeliveryEventOrganizerFieldEnum>,
    ///<https://schema.org/actor>
    #[serde(rename = "actor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub actor: Vec<DeliveryEventActorFieldEnum>,
    ///<https://schema.org/performers>
    #[serde(rename = "performers")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub performers: Vec<DeliveryEventPerformersFieldEnum>,
    ///<https://schema.org/startDate>
    #[serde(rename = "startDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub start_date: Vec<DeliveryEventStartDateFieldEnum>,
    ///<https://schema.org/subEvent>
    #[serde(rename = "subEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sub_event: Vec<Event>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub audience: Vec<Audience>,
    ///<https://schema.org/translator>
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub translator: Vec<DeliveryEventTranslatorFieldEnum>,
    ///<https://schema.org/recordedIn>
    #[serde(rename = "recordedIn")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub recorded_in: Vec<CreativeWork>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funder: Vec<DeliveryEventFunderFieldEnum>,
    ///<https://schema.org/previousStartDate>
    #[serde(rename = "previousStartDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub previous_start_date: Vec<String>,
    ///<https://schema.org/contributor>
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub contributor: Vec<DeliveryEventContributorFieldEnum>,
    ///<https://schema.org/maximumVirtualAttendeeCapacity>
    #[serde(rename = "maximumVirtualAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub maximum_virtual_attendee_capacity: Vec<i32>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub review: Vec<Review>,
    ///<https://schema.org/eventAttendanceMode>
    #[serde(rename = "eventAttendanceMode")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub event_attendance_mode: Vec<EventAttendanceModeEnumerationEnum>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sponsor: Vec<DeliveryEventSponsorFieldEnum>,
    ///<https://schema.org/typicalAgeRange>
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub typical_age_range: Vec<String>,
    ///<https://schema.org/superEvent>
    #[serde(rename = "superEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub super_event: Vec<Event>,
    ///<https://schema.org/isAccessibleForFree>
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_accessible_for_free: Vec<String>,
    ///<https://schema.org/director>
    #[serde(rename = "director")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub director: Vec<Person>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<DeliveryEventMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<DeliveryEventIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<DeliveryEventDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<DeliveryEventSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<DeliveryEventAdditionalTypeFieldEnum>,
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
    pub image: Vec<DeliveryEventImageFieldEnum>,
}
