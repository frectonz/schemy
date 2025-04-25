import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type InteractionCounterStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type InteractionCounterEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type InteractionCounterAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/InteractionCounter>
 **/
export interface InteractionCounter {
  "@context": string;
  "@type": "InteractionCounter";

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.InteractionCounterStartTimeFieldEnum>;

  /**
   * <https://schema.org/interactionType>
   **/
  interactionType: all.OneOrMany<all.Action>;

  /**
   * <https://schema.org/location>
   **/
  location: all.OneOrMany<all.InteractionCounterLocationFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.InteractionCounterEndTimeFieldEnum>;

  /**
   * <https://schema.org/interactionService>
   **/
  interactionService: all.OneOrMany<all.InteractionCounterInteractionServiceFieldEnum>;

  /**
   * <https://schema.org/userInteractionCount>
   **/
  userInteractionCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.InteractionCounterMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.InteractionCounterIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.InteractionCounterDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.InteractionCounterSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.InteractionCounterAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.InteractionCounterImageFieldEnum>;
}
