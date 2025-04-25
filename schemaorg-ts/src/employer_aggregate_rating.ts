import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EmployerAggregateRatingAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EmployerAggregateRating>
 **/
export interface EmployerAggregateRating {
  "@context": string;
  "@type": "EmployerAggregateRating";

  /**
   * <https://schema.org/reviewCount>
   **/
  reviewCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/itemReviewed>
   **/
  itemReviewed: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/ratingCount>
   **/
  ratingCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/ratingValue>
   **/
  ratingValue: all.OneOrMany<all.EmployerAggregateRatingRatingValueFieldEnum>;

  /**
   * <https://schema.org/ratingExplanation>
   **/
  ratingExplanation: all.OneOrMany<string>;

  /**
   * <https://schema.org/worstRating>
   **/
  worstRating: all.OneOrMany<all.EmployerAggregateRatingWorstRatingFieldEnum>;

  /**
   * <https://schema.org/reviewAspect>
   **/
  reviewAspect: all.OneOrMany<string>;

  /**
   * <https://schema.org/bestRating>
   **/
  bestRating: all.OneOrMany<all.EmployerAggregateRatingBestRatingFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.EmployerAggregateRatingAuthorFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EmployerAggregateRatingMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EmployerAggregateRatingIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EmployerAggregateRatingDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EmployerAggregateRatingSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EmployerAggregateRatingAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EmployerAggregateRatingImageFieldEnum>;
}
