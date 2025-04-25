import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type RatingAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Rating>
 **/
export interface Rating {
  "@context": string;
  "@type": "Rating";

  /**
   * <https://schema.org/ratingValue>
   **/
  ratingValue: all.OneOrMany<all.RatingRatingValueFieldEnum>;

  /**
   * <https://schema.org/ratingExplanation>
   **/
  ratingExplanation: all.OneOrMany<string>;

  /**
   * <https://schema.org/worstRating>
   **/
  worstRating: all.OneOrMany<all.RatingWorstRatingFieldEnum>;

  /**
   * <https://schema.org/reviewAspect>
   **/
  reviewAspect: all.OneOrMany<string>;

  /**
   * <https://schema.org/bestRating>
   **/
  bestRating: all.OneOrMany<all.RatingBestRatingFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.RatingAuthorFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RatingMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RatingIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RatingDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RatingSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RatingAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RatingImageFieldEnum>;
}
