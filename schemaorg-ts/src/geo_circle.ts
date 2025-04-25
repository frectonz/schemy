import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GeoCircleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GeoCircle>
 **/
export interface GeoCircle {
  "@context": string;
  "@type": "GeoCircle";

  /**
   * <https://schema.org/geoMidpoint>
   **/
  geoMidpoint: all.OneOrMany<all.GeoCoordinates>;

  /**
   * <https://schema.org/geoRadius>
   **/
  geoRadius: all.OneOrMany<all.GeoCircleGeoRadiusFieldEnum>;

  /**
   * <https://schema.org/circle>
   **/
  circle: all.OneOrMany<string>;

  /**
   * <https://schema.org/polygon>
   **/
  polygon: all.OneOrMany<string>;

  /**
   * <https://schema.org/line>
   **/
  line: all.OneOrMany<string>;

  /**
   * <https://schema.org/addressCountry>
   **/
  addressCountry: all.OneOrMany<all.GeoCircleAddressCountryFieldEnum>;

  /**
   * <https://schema.org/box>
   **/
  box: all.OneOrMany<string>;

  /**
   * <https://schema.org/elevation>
   **/
  elevation: all.OneOrMany<all.GeoCircleElevationFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.GeoCircleAddressFieldEnum>;

  /**
   * <https://schema.org/postalCode>
   **/
  postalCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.GeoCircleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GeoCircleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GeoCircleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GeoCircleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GeoCircleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GeoCircleImageFieldEnum>;
}
