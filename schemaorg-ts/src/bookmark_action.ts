import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type BookmarkActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type BookmarkActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BookmarkActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BookmarkAction>
 **/
export interface BookmarkAction {
  "@context": string;
  "@type": "BookmarkAction";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.BookmarkActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.BookmarkActionStartTimeFieldEnum>;

  /**
   * <https://schema.org/actionStatus>
   **/
  actionStatus: all.OneOrMany<all.ActionStatusTypeEnum>;

  /**
   * <https://schema.org/object>
   **/
  object: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/error>
   **/
  error: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/location>
   **/
  location: all.OneOrMany<all.BookmarkActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.BookmarkActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.BookmarkActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.BookmarkActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.BookmarkActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.BookmarkActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BookmarkActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BookmarkActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BookmarkActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BookmarkActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BookmarkActionImageFieldEnum>;
}
