import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DefinedRegionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DefinedRegion>
 **/
export interface DefinedRegion {
  "@context": string;
  "@type": "DefinedRegion";

  /**
   * <https://schema.org/addressRegion>
   **/
  addressRegion: all.OneOrMany<string>;

  /**
   * <https://schema.org/postalCodeRange>
   **/
  postalCodeRange: all.OneOrMany<all.PostalCodeRangeSpecification>;

  /**
   * <https://schema.org/addressCountry>
   **/
  addressCountry: all.OneOrMany<all.DefinedRegionAddressCountryFieldEnum>;

  /**
   * <https://schema.org/postalCode>
   **/
  postalCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/postalCodePrefix>
   **/
  postalCodePrefix: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DefinedRegionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DefinedRegionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DefinedRegionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DefinedRegionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DefinedRegionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DefinedRegionImageFieldEnum>;
}
