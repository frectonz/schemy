import type * as all from "./index";

/**
 * <https://schema.org/commentTime>
 **/
export type UserCommentsCommentTimeFieldEnum = string;

/**
 * <https://schema.org/doorTime>
 **/
export type UserCommentsDoorTimeFieldEnum = string;

/**
 * <https://schema.org/endDate>
 **/
export type UserCommentsEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type UserCommentsStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type UserCommentsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/UserComments>
 **/
export interface UserComments {
  "@context": string;
  "@type": "UserComments";

  /**
   * <https://schema.org/commentTime>
   **/
  commentTime: all.OneOrMany<all.UserCommentsCommentTimeFieldEnum>;

  /**
   * <https://schema.org/replyToUrl>
   **/
  replyToUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/commentText>
   **/
  commentText: all.OneOrMany<string>;

  /**
   * <https://schema.org/discusses>
   **/
  discusses: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.UserCommentsCreatorFieldEnum>;

  /**
   * <https://schema.org/doorTime>
   **/
  doorTime: all.OneOrMany<all.UserCommentsDoorTimeFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.UserCommentsEndDateFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.UserCommentsInLanguageFieldEnum>;

  /**
   * <https://schema.org/eventSchedule>
   **/
  eventSchedule: all.OneOrMany<all.Schedule>;

  /**
   * <https://schema.org/attendees>
   **/
  attendees: all.OneOrMany<all.UserCommentsAttendeesFieldEnum>;

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
  composer: all.OneOrMany<all.UserCommentsComposerFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.UserCommentsOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.UserCommentsKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.UserCommentsLocationFieldEnum>;

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
  attendee: all.OneOrMany<all.UserCommentsAttendeeFieldEnum>;

  /**
   * <https://schema.org/workFeatured>
   **/
  workFeatured: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/performer>
   **/
  performer: all.OneOrMany<all.UserCommentsPerformerFieldEnum>;

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
  duration: all.OneOrMany<all.UserCommentsDurationFieldEnum>;

  /**
   * <https://schema.org/organizer>
   **/
  organizer: all.OneOrMany<all.UserCommentsOrganizerFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.UserCommentsActorFieldEnum>;

  /**
   * <https://schema.org/performers>
   **/
  performers: all.OneOrMany<all.UserCommentsPerformersFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.UserCommentsStartDateFieldEnum>;

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
  translator: all.OneOrMany<all.UserCommentsTranslatorFieldEnum>;

  /**
   * <https://schema.org/recordedIn>
   **/
  recordedIn: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.UserCommentsFunderFieldEnum>;

  /**
   * <https://schema.org/previousStartDate>
   **/
  previousStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.UserCommentsContributorFieldEnum>;

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
  sponsor: all.OneOrMany<all.UserCommentsSponsorFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.UserCommentsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.UserCommentsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.UserCommentsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.UserCommentsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.UserCommentsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.UserCommentsImageFieldEnum>;
}
