import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PostalCodeRangeSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PostalCodeRangeSpecification>
 **/
export interface PostalCodeRangeSpecification {
  "@context": string;
  "@type": "PostalCodeRangeSpecification";

  /**
   * <https://schema.org/postalCodeEnd>
   **/
  postalCodeEnd: all.OneOrMany<string>;

  /**
   * <https://schema.org/postalCodeBegin>
   **/
  postalCodeBegin: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PostalCodeRangeSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PostalCodeRangeSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PostalCodeRangeSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PostalCodeRangeSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PostalCodeRangeSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PostalCodeRangeSpecificationImageFieldEnum>;
}
