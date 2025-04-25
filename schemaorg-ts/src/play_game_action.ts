import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type PlayGameActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type PlayGameActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PlayGameActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PlayGameAction>
 **/
export interface PlayGameAction {
  "@context": string;
  "@type": "PlayGameAction";

  /**
   * <https://schema.org/gameAvailabilityType>
   **/
  gameAvailabilityType: all.OneOrMany<all.PlayGameActionGameAvailabilityTypeFieldEnum>;

  /**
   * <https://schema.org/expectsAcceptanceOf>
   **/
  expectsAcceptanceOf: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/actionAccessibilityRequirement>
   **/
  actionAccessibilityRequirement: all.OneOrMany<all.ActionAccessSpecification>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.PlayGameActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.PlayGameActionStartTimeFieldEnum>;

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
  location: all.OneOrMany<all.PlayGameActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.PlayGameActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.PlayGameActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.PlayGameActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.PlayGameActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PlayGameActionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PlayGameActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PlayGameActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PlayGameActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PlayGameActionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PlayGameActionImageFieldEnum>;
}
