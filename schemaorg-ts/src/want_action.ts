import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type WantActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type WantActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type WantActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/WantAction>
 **/
export interface WantAction {
  "@context": string;
  "@type": "WantAction";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.WantActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.WantActionStartTimeFieldEnum>;

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
  location: all.OneOrMany<all.WantActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.WantActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.WantActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.WantActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.WantActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.WantActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.WantActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.WantActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.WantActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.WantActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.WantActionImageFieldEnum>;
}
