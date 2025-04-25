import type * as all from "./index";

/**
 * <https://schema.org/doorTime>
 **/
export type OnDemandEventDoorTimeFieldEnum = string;

/**
 * <https://schema.org/endDate>
 **/
export type OnDemandEventEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type OnDemandEventStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type OnDemandEventAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OnDemandEvent>
 **/
export interface OnDemandEvent {
  "@context": string;
  "@type": "OnDemandEvent";

  /**
   * <https://schema.org/publishedBy>
   **/
  publishedBy: all.OneOrMany<all.OnDemandEventPublishedByFieldEnum>;

  /**
   * <https://schema.org/free>
   **/
  free: all.OneOrMany<string>;

  /**
   * <https://schema.org/publishedOn>
   **/
  publishedOn: all.OneOrMany<all.BroadcastService>;

  /**
   * <https://schema.org/doorTime>
   **/
  doorTime: all.OneOrMany<all.OnDemandEventDoorTimeFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.OnDemandEventEndDateFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.OnDemandEventInLanguageFieldEnum>;

  /**
   * <https://schema.org/eventSchedule>
   **/
  eventSchedule: all.OneOrMany<all.Schedule>;

  /**
   * <https://schema.org/attendees>
   **/
  attendees: all.OneOrMany<all.OnDemandEventAttendeesFieldEnum>;

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
  composer: all.OneOrMany<all.OnDemandEventComposerFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.OnDemandEventOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.OnDemandEventKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.OnDemandEventLocationFieldEnum>;

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
  attendee: all.OneOrMany<all.OnDemandEventAttendeeFieldEnum>;

  /**
   * <https://schema.org/workFeatured>
   **/
  workFeatured: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/performer>
   **/
  performer: all.OneOrMany<all.OnDemandEventPerformerFieldEnum>;

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
  duration: all.OneOrMany<all.OnDemandEventDurationFieldEnum>;

  /**
   * <https://schema.org/organizer>
   **/
  organizer: all.OneOrMany<all.OnDemandEventOrganizerFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.OnDemandEventActorFieldEnum>;

  /**
   * <https://schema.org/performers>
   **/
  performers: all.OneOrMany<all.OnDemandEventPerformersFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.OnDemandEventStartDateFieldEnum>;

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
  translator: all.OneOrMany<all.OnDemandEventTranslatorFieldEnum>;

  /**
   * <https://schema.org/recordedIn>
   **/
  recordedIn: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.OnDemandEventFunderFieldEnum>;

  /**
   * <https://schema.org/previousStartDate>
   **/
  previousStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.OnDemandEventContributorFieldEnum>;

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
  sponsor: all.OneOrMany<all.OnDemandEventSponsorFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.OnDemandEventMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OnDemandEventIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OnDemandEventDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OnDemandEventSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OnDemandEventAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OnDemandEventImageFieldEnum>;
}
