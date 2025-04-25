import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type AggregateRatingAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/AggregateRating>
 **/
export interface AggregateRating {
  "@context": string;
  "@type": "AggregateRating";

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
  ratingValue: all.OneOrMany<all.AggregateRatingRatingValueFieldEnum>;

  /**
   * <https://schema.org/ratingExplanation>
   **/
  ratingExplanation: all.OneOrMany<string>;

  /**
   * <https://schema.org/worstRating>
   **/
  worstRating: all.OneOrMany<all.AggregateRatingWorstRatingFieldEnum>;

  /**
   * <https://schema.org/reviewAspect>
   **/
  reviewAspect: all.OneOrMany<string>;

  /**
   * <https://schema.org/bestRating>
   **/
  bestRating: all.OneOrMany<all.AggregateRatingBestRatingFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.AggregateRatingAuthorFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.AggregateRatingMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.AggregateRatingIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.AggregateRatingDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.AggregateRatingSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.AggregateRatingAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.AggregateRatingImageFieldEnum>;
}
