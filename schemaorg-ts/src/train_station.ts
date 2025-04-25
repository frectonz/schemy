import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type TrainStationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TrainStation>
 **/
export interface TrainStation {
  "@context": string;
  "@type": "TrainStation";

  /**
   * <https://schema.org/openingHours>
   **/
  openingHours: all.OneOrMany<string>;

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/isicV4>
   **/
  isicV4: all.OneOrMany<string>;

  /**
   * <https://schema.org/photos>
   **/
  photos: all.OneOrMany<all.TrainStationPhotosFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/tourBookingPage>
   **/
  tourBookingPage: all.OneOrMany<string>;

  /**
   * <https://schema.org/containedInPlace>
   **/
  containedInPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/geoIntersects>
   **/
  geoIntersects: all.OneOrMany<all.TrainStationGeoIntersectsFieldEnum>;

  /**
   * <https://schema.org/containsPlace>
   **/
  containsPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/telephone>
   **/
  telephone: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoOverlaps>
   **/
  geoOverlaps: all.OneOrMany<all.TrainStationGeoOverlapsFieldEnum>;

  /**
   * <https://schema.org/hasGS1DigitalLink>
   **/
  hasGS1DigitalLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/geoCrosses>
   **/
  geoCrosses: all.OneOrMany<all.TrainStationGeoCrossesFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.TrainStationKeywordsFieldEnum>;

  /**
   * <https://schema.org/hasDriveThroughService>
   **/
  hasDriveThroughService: all.OneOrMany<string>;

  /**
   * <https://schema.org/maximumAttendeeCapacity>
   **/
  maximumAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/specialOpeningHoursSpecification>
   **/
  specialOpeningHoursSpecification: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/containedIn>
   **/
  containedIn: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/geoCoveredBy>
   **/
  geoCoveredBy: all.OneOrMany<all.TrainStationGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/maps>
   **/
  maps: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.TrainStationLogoFieldEnum>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.TrainStationGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geo>
   **/
  geo: all.OneOrMany<all.TrainStationGeoFieldEnum>;

  /**
   * <https://schema.org/publicAccess>
   **/
  publicAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.TrainStationLatitudeFieldEnum>;

  /**
   * <https://schema.org/map>
   **/
  map: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMap>
   **/
  hasMap: all.OneOrMany<all.TrainStationHasMapFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.TrainStationGeoTouchesFieldEnum>;

  /**
   * <https://schema.org/amenityFeature>
   **/
  amenityFeature: all.OneOrMany<all.LocationFeatureSpecification>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.TrainStationAddressFieldEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/slogan>
   **/
  slogan: all.OneOrMany<string>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/globalLocationNumber>
   **/
  globalLocationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoWithin>
   **/
  geoWithin: all.OneOrMany<all.TrainStationGeoWithinFieldEnum>;

  /**
   * <https://schema.org/smokingAllowed>
   **/
  smokingAllowed: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.TrainStationLongitudeFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.TrainStationGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.TrainStationGeoCoversFieldEnum>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/photo>
   **/
  photo: all.OneOrMany<all.TrainStationPhotoFieldEnum>;

  /**
   * <https://schema.org/faxNumber>
   **/
  faxNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/branchCode>
   **/
  branchCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/openingHoursSpecification>
   **/
  openingHoursSpecification: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/events>
   **/
  events: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/geoEquals>
   **/
  geoEquals: all.OneOrMany<all.TrainStationGeoEqualsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TrainStationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TrainStationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TrainStationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TrainStationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TrainStationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TrainStationImageFieldEnum>;
}
