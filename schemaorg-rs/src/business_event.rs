use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/startDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type BusinessEventStartDateFieldEnum = String;
///<https://schema.org/doorTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type BusinessEventDoorTimeFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type BusinessEventAdditionalTypeFieldEnum = String;
///<https://schema.org/endDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type BusinessEventEndDateFieldEnum = String;
///<https://schema.org/BusinessEvent>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct BusinessEvent {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/typicalAgeRange>
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_age_range: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/performer>
    #[serde(rename = "performer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub performer: Vec<BusinessEventPerformerFieldEnum>,
    ///<https://schema.org/translator>
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translator: Vec<BusinessEventTranslatorFieldEnum>,
    ///<https://schema.org/superEvent>
    #[serde(rename = "superEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub super_event: Vec<Event>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<BusinessEventKeywordsFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/startDate>
    #[serde(rename = "startDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_date: Vec<BusinessEventStartDateFieldEnum>,
    ///<https://schema.org/recordedIn>
    #[serde(rename = "recordedIn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_in: Vec<CreativeWork>,
    ///<https://schema.org/doorTime>
    #[serde(rename = "doorTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub door_time: Vec<BusinessEventDoorTimeFieldEnum>,
    ///<https://schema.org/attendee>
    #[serde(rename = "attendee")]
    #[serde_as(as = "OneOrMany<_>")]
    pub attendee: Vec<BusinessEventAttendeeFieldEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/inLanguage>
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<BusinessEventInLanguageFieldEnum>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<BusinessEventLocationFieldEnum>,
    ///<https://schema.org/actor>
    #[serde(rename = "actor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub actor: Vec<BusinessEventActorFieldEnum>,
    ///<https://schema.org/workPerformed>
    #[serde(rename = "workPerformed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_performed: Vec<CreativeWork>,
    ///<https://schema.org/subEvent>
    #[serde(rename = "subEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_event: Vec<Event>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<BusinessEventFunderFieldEnum>,
    ///<https://schema.org/maximumVirtualAttendeeCapacity>
    #[serde(rename = "maximumVirtualAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maximum_virtual_attendee_capacity: Vec<i32>,
    ///<https://schema.org/remainingAttendeeCapacity>
    #[serde(rename = "remainingAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub remaining_attendee_capacity: Vec<i32>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///<https://schema.org/eventAttendanceMode>
    #[serde(rename = "eventAttendanceMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event_attendance_mode: Vec<EventAttendanceModeEnumerationEnum>,
    ///<https://schema.org/isAccessibleForFree>
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///<https://schema.org/maximumAttendeeCapacity>
    #[serde(rename = "maximumAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maximum_attendee_capacity: Vec<i32>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<BusinessEventOffersFieldEnum>,
    ///<https://schema.org/about>
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    pub about: Vec<Thing>,
    ///<https://schema.org/contributor>
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contributor: Vec<BusinessEventContributorFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<BusinessEventDescriptionFieldEnum>,
    ///<https://schema.org/previousStartDate>
    #[serde(rename = "previousStartDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub previous_start_date: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/organizer>
    #[serde(rename = "organizer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub organizer: Vec<BusinessEventOrganizerFieldEnum>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<BusinessEventSponsorFieldEnum>,
    ///<https://schema.org/director>
    #[serde(rename = "director")]
    #[serde_as(as = "OneOrMany<_>")]
    pub director: Vec<Person>,
    ///<https://schema.org/workFeatured>
    #[serde(rename = "workFeatured")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_featured: Vec<CreativeWork>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/eventStatus>
    #[serde(rename = "eventStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event_status: Vec<EventStatusTypeEnum>,
    ///<https://schema.org/duration>
    #[serde(rename = "duration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duration: Vec<BusinessEventDurationFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<BusinessEventSubjectOfFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<BusinessEventAdditionalTypeFieldEnum>,
    ///<https://schema.org/attendees>
    #[serde(rename = "attendees")]
    #[serde_as(as = "OneOrMany<_>")]
    pub attendees: Vec<BusinessEventAttendeesFieldEnum>,
    ///<https://schema.org/composer>
    #[serde(rename = "composer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub composer: Vec<BusinessEventComposerFieldEnum>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///<https://schema.org/eventSchedule>
    #[serde(rename = "eventSchedule")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event_schedule: Vec<Schedule>,
    ///<https://schema.org/performers>
    #[serde(rename = "performers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub performers: Vec<BusinessEventPerformersFieldEnum>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<BusinessEventMainEntityOfPageFieldEnum>,
    ///<https://schema.org/subEvents>
    #[serde(rename = "subEvents")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_events: Vec<Event>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<BusinessEventIdentifierFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<BusinessEventImageFieldEnum>,
    ///<https://schema.org/endDate>
    #[serde(rename = "endDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_date: Vec<BusinessEventEndDateFieldEnum>,
    ///<https://schema.org/maximumPhysicalAttendeeCapacity>
    #[serde(rename = "maximumPhysicalAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maximum_physical_attendee_capacity: Vec<i32>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
}
