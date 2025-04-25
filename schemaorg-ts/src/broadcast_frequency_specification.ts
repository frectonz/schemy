import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BroadcastFrequencySpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BroadcastFrequencySpecification>
 **/
export interface BroadcastFrequencySpecification {
  "@context": string;
  "@type": "BroadcastFrequencySpecification";

  /**
   * <https://schema.org/broadcastSignalModulation>
   **/
  broadcastSignalModulation: all.OneOrMany<all.BroadcastFrequencySpecificationBroadcastSignalModulationFieldEnum>;

  /**
   * <https://schema.org/broadcastSubChannel>
   **/
  broadcastSubChannel: all.OneOrMany<string>;

  /**
   * <https://schema.org/broadcastFrequencyValue>
   **/
  broadcastFrequencyValue: all.OneOrMany<all.BroadcastFrequencySpecificationBroadcastFrequencyValueFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.BroadcastFrequencySpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BroadcastFrequencySpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BroadcastFrequencySpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BroadcastFrequencySpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BroadcastFrequencySpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BroadcastFrequencySpecificationImageFieldEnum>;
}
