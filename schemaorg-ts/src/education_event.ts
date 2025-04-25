import type * as all from "./index";

/**
 * <https://schema.org/doorTime>
 **/
export type EducationEventDoorTimeFieldEnum = string;

/**
 * <https://schema.org/endDate>
 **/
export type EducationEventEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type EducationEventStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type EducationEventAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EducationEvent>
 **/
export interface EducationEvent {
  "@context": string;
  "@type": "EducationEvent";

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.EducationEventEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.EducationEventTeachesFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.EducationEventAssessesFieldEnum>;

  /**
   * <https://schema.org/doorTime>
   **/
  doorTime: all.OneOrMany<all.EducationEventDoorTimeFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.EducationEventEndDateFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.EducationEventInLanguageFieldEnum>;

  /**
   * <https://schema.org/eventSchedule>
   **/
  eventSchedule: all.OneOrMany<all.Schedule>;

  /**
   * <https://schema.org/attendees>
   **/
  attendees: all.OneOrMany<all.EducationEventAttendeesFieldEnum>;

  /**
   * <https://schema.org/eventStatus>
   **/
  eventStatus: all.OneOrMany<all.EventStatusTypeEnum>;

  /**
   * <https://schema.org/maximumPhysicalAttendeeCapacity>
   **/
  maximumPhysicalAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/composer>
   **/
  composer: all.OneOrMany<all.EducationEventComposerFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.EducationEventOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.EducationEventKeywordsFieldEnum>;

  /**
   * <https://schema.org/maximumAttendeeCapacity>
   **/
  maximumAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/about>
   **/
  about: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/location>
   **/
  location: all.OneOrMany<all.EducationEventLocationFieldEnum>;

  /**
   * <https://schema.org/remainingAttendeeCapacity>
   **/
  remainingAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/attendee>
   **/
  attendee: all.OneOrMany<all.EducationEventAttendeeFieldEnum>;

  /**
   * <https://schema.org/workFeatured>
   **/
  workFeatured: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/performer>
   **/
  performer: all.OneOrMany<all.EducationEventPerformerFieldEnum>;

  /**
   * <https://schema.org/subEvents>
   **/
  subEvents: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/workPerformed>
   **/
  workPerformed: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/duration>
   **/
  duration: all.OneOrMany<all.EducationEventDurationFieldEnum>;

  /**
   * <https://schema.org/organizer>
   **/
  organizer: all.OneOrMany<all.EducationEventOrganizerFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.EducationEventActorFieldEnum>;

  /**
   * <https://schema.org/performers>
   **/
  performers: all.OneOrMany<all.EducationEventPerformersFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.EducationEventStartDateFieldEnum>;

  /**
   * <https://schema.org/subEvent>
   **/
  subEvent: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/audience>
   **/
  audience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.EducationEventTranslatorFieldEnum>;

  /**
   * <https://schema.org/recordedIn>
   **/
  recordedIn: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.EducationEventFunderFieldEnum>;

  /**
   * <https://schema.org/previousStartDate>
   **/
  previousStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.EducationEventContributorFieldEnum>;

  /**
   * <https://schema.org/maximumVirtualAttendeeCapacity>
   **/
  maximumVirtualAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/eventAttendanceMode>
   **/
  eventAttendanceMode: all.OneOrMany<all.EventAttendanceModeEnumerationEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.EducationEventSponsorFieldEnum>;

  /**
   * <https://schema.org/typicalAgeRange>
   **/
  typicalAgeRange: all.OneOrMany<string>;

  /**
   * <https://schema.org/superEvent>
   **/
  superEvent: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/director>
   **/
  director: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EducationEventMainEntityOfPageFieldEnum>;

  /**
   * <https://schema.org/url>
   **/
  url: all.OneOrMany<string>;

  /**
   * <https://schema.org/disambiguatingDescription>
   **/
  disambiguatingDescription: all.OneOrMany<string>;

  /**
   * <https://schema.org/identifier>
   **/
  identifier: all.OneOrMany<all.EducationEventIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EducationEventDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EducationEventSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EducationEventAdditionalTypeFieldEnum>;

  /**
   * <https://schema.org/potentialAction>
   **/
  potentialAction: all.OneOrMany<all.Action>;

  /**
   * <https://schema.org/sameAs>
   **/
  sameAs: all.OneOrMany<string>;

  /**
   * <https://schema.org/image>
   **/
  image: all.OneOrMany<all.EducationEventImageFieldEnum>;
}
