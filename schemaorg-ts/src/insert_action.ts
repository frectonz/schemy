import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type InsertActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type InsertActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type InsertActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/InsertAction>
 **/
export interface InsertAction {
  "@context": string;
  "@type": "InsertAction";

  /**
   * <https://schema.org/toLocation>
   **/
  toLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/collection>
   **/
  collection: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/targetCollection>
   **/
  targetCollection: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.InsertActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.InsertActionStartTimeFieldEnum>;

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
  location: all.OneOrMany<all.InsertActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.InsertActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.InsertActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.InsertActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.InsertActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.InsertActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.InsertActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.InsertActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.InsertActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.InsertActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.InsertActionImageFieldEnum>;
}
