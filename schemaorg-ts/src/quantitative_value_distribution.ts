import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type QuantitativeValueDistributionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/QuantitativeValueDistribution>
 **/
export interface QuantitativeValueDistribution {
  "@context": string;
  "@type": "QuantitativeValueDistribution";

  /**
   * <https://schema.org/percentile25>
   **/
  percentile25: all.OneOrMany<number>;

  /**
   * <https://schema.org/percentile75>
   **/
  percentile75: all.OneOrMany<number>;

  /**
   * <https://schema.org/median>
   **/
  median: all.OneOrMany<number>;

  /**
   * <https://schema.org/percentile90>
   **/
  percentile90: all.OneOrMany<number>;

  /**
   * <https://schema.org/duration>
   **/
  duration: all.OneOrMany<all.QuantitativeValueDistributionDurationFieldEnum>;

  /**
   * <https://schema.org/percentile10>
   **/
  percentile10: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.QuantitativeValueDistributionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.QuantitativeValueDistributionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.QuantitativeValueDistributionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.QuantitativeValueDistributionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.QuantitativeValueDistributionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.QuantitativeValueDistributionImageFieldEnum>;
}
