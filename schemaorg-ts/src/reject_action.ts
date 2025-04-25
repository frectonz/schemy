import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type RejectActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type RejectActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type RejectActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/RejectAction>
 **/
export interface RejectAction {
  "@context": string;
  "@type": "RejectAction";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.RejectActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.RejectActionStartTimeFieldEnum>;

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
  location: all.OneOrMany<all.RejectActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.RejectActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.RejectActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.RejectActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.RejectActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RejectActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RejectActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RejectActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RejectActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RejectActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RejectActionImageFieldEnum>;
}
