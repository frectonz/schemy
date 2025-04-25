import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EndorsementRatingAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EndorsementRating>
 **/
export interface EndorsementRating {
  "@context": string;
  "@type": "EndorsementRating";

  /**
   * <https://schema.org/ratingValue>
   **/
  ratingValue: all.OneOrMany<all.EndorsementRatingRatingValueFieldEnum>;

  /**
   * <https://schema.org/ratingExplanation>
   **/
  ratingExplanation: all.OneOrMany<string>;

  /**
   * <https://schema.org/worstRating>
   **/
  worstRating: all.OneOrMany<all.EndorsementRatingWorstRatingFieldEnum>;

  /**
   * <https://schema.org/reviewAspect>
   **/
  reviewAspect: all.OneOrMany<string>;

  /**
   * <https://schema.org/bestRating>
   **/
  bestRating: all.OneOrMany<all.EndorsementRatingBestRatingFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.EndorsementRatingAuthorFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EndorsementRatingMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EndorsementRatingIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EndorsementRatingDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EndorsementRatingSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EndorsementRatingAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EndorsementRatingImageFieldEnum>;
}
