import type * as all from "./index";

/**
 * <https://schema.org/doorTime>
 **/
export type UserPlusOnesDoorTimeFieldEnum = string;

/**
 * <https://schema.org/endDate>
 **/
export type UserPlusOnesEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type UserPlusOnesStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type UserPlusOnesAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/UserPlusOnes>
 **/
export interface UserPlusOnes {
  "@context": string;
  "@type": "UserPlusOnes";

  /**
   * <https://schema.org/doorTime>
   **/
  doorTime: all.OneOrMany<all.UserPlusOnesDoorTimeFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.UserPlusOnesEndDateFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.UserPlusOnesInLanguageFieldEnum>;

  /**
   * <https://schema.org/eventSchedule>
   **/
  eventSchedule: all.OneOrMany<all.Schedule>;

  /**
   * <https://schema.org/attendees>
   **/
  attendees: all.OneOrMany<all.UserPlusOnesAttendeesFieldEnum>;

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
  composer: all.OneOrMany<all.UserPlusOnesComposerFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.UserPlusOnesOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.UserPlusOnesKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.UserPlusOnesLocationFieldEnum>;

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
  attendee: all.OneOrMany<all.UserPlusOnesAttendeeFieldEnum>;

  /**
   * <https://schema.org/workFeatured>
   **/
  workFeatured: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/performer>
   **/
  performer: all.OneOrMany<all.UserPlusOnesPerformerFieldEnum>;

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
  duration: all.OneOrMany<all.UserPlusOnesDurationFieldEnum>;

  /**
   * <https://schema.org/organizer>
   **/
  organizer: all.OneOrMany<all.UserPlusOnesOrganizerFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.UserPlusOnesActorFieldEnum>;

  /**
   * <https://schema.org/performers>
   **/
  performers: all.OneOrMany<all.UserPlusOnesPerformersFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.UserPlusOnesStartDateFieldEnum>;

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
  translator: all.OneOrMany<all.UserPlusOnesTranslatorFieldEnum>;

  /**
   * <https://schema.org/recordedIn>
   **/
  recordedIn: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.UserPlusOnesFunderFieldEnum>;

  /**
   * <https://schema.org/previousStartDate>
   **/
  previousStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.UserPlusOnesContributorFieldEnum>;

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
  sponsor: all.OneOrMany<all.UserPlusOnesSponsorFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.UserPlusOnesMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.UserPlusOnesIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.UserPlusOnesDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.UserPlusOnesSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.UserPlusOnesAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.UserPlusOnesImageFieldEnum>;
}
