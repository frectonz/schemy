import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type AgreeActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type AgreeActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type AgreeActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/AgreeAction>
 **/
export interface AgreeAction {
  "@context": string;
  "@type": "AgreeAction";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.AgreeActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.AgreeActionStartTimeFieldEnum>;

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
  location: all.OneOrMany<all.AgreeActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.AgreeActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.AgreeActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.AgreeActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.AgreeActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.AgreeActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.AgreeActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.AgreeActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.AgreeActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.AgreeActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.AgreeActionImageFieldEnum>;
}
