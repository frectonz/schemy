import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PropertyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Property>
 **/
export interface Property {
  "@context": string;
  "@type": "Property";

  /**
   * <https://schema.org/inverseOf>
   **/
  inverseOf: all.OneOrMany<all.Property>;

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.PropertySupersededByFieldEnum>;

  /**
   * <https://schema.org/rangeIncludes>
   **/
  rangeIncludes: all.OneOrMany<all.Class>;

  /**
   * <https://schema.org/domainIncludes>
   **/
  domainIncludes: all.OneOrMany<all.Class>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PropertyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PropertyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PropertyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PropertySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PropertyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PropertyImageFieldEnum>;
}
