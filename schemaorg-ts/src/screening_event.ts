import type * as all from "./index";

/**
 * <https://schema.org/doorTime>
 **/
export type ScreeningEventDoorTimeFieldEnum = string;

/**
 * <https://schema.org/endDate>
 **/
export type ScreeningEventEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type ScreeningEventStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ScreeningEventAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ScreeningEvent>
 **/
export interface ScreeningEvent {
  "@context": string;
  "@type": "ScreeningEvent";

  /**
   * <https://schema.org/subtitleLanguage>
   **/
  subtitleLanguage: all.OneOrMany<all.ScreeningEventSubtitleLanguageFieldEnum>;

  /**
   * <https://schema.org/workPresented>
   **/
  workPresented: all.OneOrMany<all.Movie>;

  /**
   * <https://schema.org/videoFormat>
   **/
  videoFormat: all.OneOrMany<string>;

  /**
   * <https://schema.org/doorTime>
   **/
  doorTime: all.OneOrMany<all.ScreeningEventDoorTimeFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.ScreeningEventEndDateFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.ScreeningEventInLanguageFieldEnum>;

  /**
   * <https://schema.org/eventSchedule>
   **/
  eventSchedule: all.OneOrMany<all.Schedule>;

  /**
   * <https://schema.org/attendees>
   **/
  attendees: all.OneOrMany<all.ScreeningEventAttendeesFieldEnum>;

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
  composer: all.OneOrMany<all.ScreeningEventComposerFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.ScreeningEventOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.ScreeningEventKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.ScreeningEventLocationFieldEnum>;

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
  attendee: all.OneOrMany<all.ScreeningEventAttendeeFieldEnum>;

  /**
   * <https://schema.org/workFeatured>
   **/
  workFeatured: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/performer>
   **/
  performer: all.OneOrMany<all.ScreeningEventPerformerFieldEnum>;

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
  duration: all.OneOrMany<all.ScreeningEventDurationFieldEnum>;

  /**
   * <https://schema.org/organizer>
   **/
  organizer: all.OneOrMany<all.ScreeningEventOrganizerFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.ScreeningEventActorFieldEnum>;

  /**
   * <https://schema.org/performers>
   **/
  performers: all.OneOrMany<all.ScreeningEventPerformersFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.ScreeningEventStartDateFieldEnum>;

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
  translator: all.OneOrMany<all.ScreeningEventTranslatorFieldEnum>;

  /**
   * <https://schema.org/recordedIn>
   **/
  recordedIn: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.ScreeningEventFunderFieldEnum>;

  /**
   * <https://schema.org/previousStartDate>
   **/
  previousStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.ScreeningEventContributorFieldEnum>;

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
  sponsor: all.OneOrMany<all.ScreeningEventSponsorFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.ScreeningEventMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ScreeningEventIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ScreeningEventDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ScreeningEventSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ScreeningEventAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ScreeningEventImageFieldEnum>;
}
