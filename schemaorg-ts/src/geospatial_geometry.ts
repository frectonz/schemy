import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GeospatialGeometryAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GeospatialGeometry>
 **/
export interface GeospatialGeometry {
  "@context": string;
  "@type": "GeospatialGeometry";

  /**
   * <https://schema.org/geoIntersects>
   **/
  geoIntersects: all.OneOrMany<all.GeospatialGeometryGeoIntersectsFieldEnum>;

  /**
   * <https://schema.org/geoOverlaps>
   **/
  geoOverlaps: all.OneOrMany<all.GeospatialGeometryGeoOverlapsFieldEnum>;

  /**
   * <https://schema.org/geoCrosses>
   **/
  geoCrosses: all.OneOrMany<all.GeospatialGeometryGeoCrossesFieldEnum>;

  /**
   * <https://schema.org/geoCoveredBy>
   **/
  geoCoveredBy: all.OneOrMany<all.GeospatialGeometryGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.GeospatialGeometryGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.GeospatialGeometryGeoTouchesFieldEnum>;

  /**
   * <https://schema.org/geoWithin>
   **/
  geoWithin: all.OneOrMany<all.GeospatialGeometryGeoWithinFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.GeospatialGeometryGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.GeospatialGeometryGeoCoversFieldEnum>;

  /**
   * <https://schema.org/geoEquals>
   **/
  geoEquals: all.OneOrMany<all.GeospatialGeometryGeoEqualsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.GeospatialGeometryMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GeospatialGeometryIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GeospatialGeometryDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GeospatialGeometrySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GeospatialGeometryAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GeospatialGeometryImageFieldEnum>;
}
