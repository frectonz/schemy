use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/doorTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type UserPlusOnesDoorTimeFieldEnum = String;
///<https://schema.org/endDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type UserPlusOnesEndDateFieldEnum = String;
///<https://schema.org/startDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type UserPlusOnesStartDateFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type UserPlusOnesAdditionalTypeFieldEnum = String;
///<https://schema.org/UserPlusOnes>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct UserPlusOnes {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/doorTime>
    #[serde(rename = "doorTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub door_time: Vec<UserPlusOnesDoorTimeFieldEnum>,
    ///<https://schema.org/endDate>
    #[serde(rename = "endDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub end_date: Vec<UserPlusOnesEndDateFieldEnum>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/inLanguage>
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_language: Vec<UserPlusOnesInLanguageFieldEnum>,
    ///<https://schema.org/eventSchedule>
    #[serde(rename = "eventSchedule")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub event_schedule: Vec<Schedule>,
    ///<https://schema.org/attendees>
    #[serde(rename = "attendees")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub attendees: Vec<UserPlusOnesAttendeesFieldEnum>,
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
    pub composer: Vec<UserPlusOnesComposerFieldEnum>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub offers: Vec<UserPlusOnesOffersFieldEnum>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub keywords: Vec<UserPlusOnesKeywordsFieldEnum>,
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
    pub location: Vec<UserPlusOnesLocationFieldEnum>,
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
    pub attendee: Vec<UserPlusOnesAttendeeFieldEnum>,
    ///<https://schema.org/workFeatured>
    #[serde(rename = "workFeatured")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub work_featured: Vec<CreativeWork>,
    ///<https://schema.org/performer>
    #[serde(rename = "performer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub performer: Vec<UserPlusOnesPerformerFieldEnum>,
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
    pub duration: Vec<UserPlusOnesDurationFieldEnum>,
    ///<https://schema.org/organizer>
    #[serde(rename = "organizer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub organizer: Vec<UserPlusOnesOrganizerFieldEnum>,
    ///<https://schema.org/actor>
    #[serde(rename = "actor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub actor: Vec<UserPlusOnesActorFieldEnum>,
    ///<https://schema.org/performers>
    #[serde(rename = "performers")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub performers: Vec<UserPlusOnesPerformersFieldEnum>,
    ///<https://schema.org/startDate>
    #[serde(rename = "startDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub start_date: Vec<UserPlusOnesStartDateFieldEnum>,
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
    pub translator: Vec<UserPlusOnesTranslatorFieldEnum>,
    ///<https://schema.org/recordedIn>
    #[serde(rename = "recordedIn")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub recorded_in: Vec<CreativeWork>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funder: Vec<UserPlusOnesFunderFieldEnum>,
    ///<https://schema.org/previousStartDate>
    #[serde(rename = "previousStartDate")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub previous_start_date: Vec<String>,
    ///<https://schema.org/contributor>
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub contributor: Vec<UserPlusOnesContributorFieldEnum>,
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
    pub sponsor: Vec<UserPlusOnesSponsorFieldEnum>,
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
    pub main_entity_of_page: Vec<UserPlusOnesMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<UserPlusOnesIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<UserPlusOnesDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<UserPlusOnesSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<UserPlusOnesAdditionalTypeFieldEnum>,
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
    pub image: Vec<UserPlusOnesImageFieldEnum>,
}
