import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GeoShapeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GeoShape>
 **/
export interface GeoShape {
  "@context": string;
  "@type": "GeoShape";

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
  addressCountry: all.OneOrMany<all.GeoShapeAddressCountryFieldEnum>;

  /**
   * <https://schema.org/box>
   **/
  box: all.OneOrMany<string>;

  /**
   * <https://schema.org/elevation>
   **/
  elevation: all.OneOrMany<all.GeoShapeElevationFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.GeoShapeAddressFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.GeoShapeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GeoShapeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GeoShapeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GeoShapeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GeoShapeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GeoShapeImageFieldEnum>;
}
