import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GeoCoordinatesAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GeoCoordinates>
 **/
export interface GeoCoordinates {
  "@context": string;
  "@type": "GeoCoordinates";

  /**
   * <https://schema.org/addressCountry>
   **/
  addressCountry: all.OneOrMany<all.GeoCoordinatesAddressCountryFieldEnum>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.GeoCoordinatesLatitudeFieldEnum>;

  /**
   * <https://schema.org/elevation>
   **/
  elevation: all.OneOrMany<all.GeoCoordinatesElevationFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.GeoCoordinatesAddressFieldEnum>;

  /**
   * <https://schema.org/postalCode>
   **/
  postalCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.GeoCoordinatesLongitudeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.GeoCoordinatesMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GeoCoordinatesIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GeoCoordinatesDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GeoCoordinatesSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GeoCoordinatesAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GeoCoordinatesImageFieldEnum>;
}
