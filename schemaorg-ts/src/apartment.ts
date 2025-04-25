import type * as all from "./index";

/**
 * <https://schema.org/petsAllowed>
 **/
export type ApartmentPetsAllowedFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ApartmentAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Apartment>
 **/
export interface Apartment {
  "@context": string;
  "@type": "Apartment";

  /**
   * <https://schema.org/numberOfRooms>
   **/
  numberOfRooms: all.OneOrMany<all.ApartmentNumberOfRoomsFieldEnum>;

  /**
   * <https://schema.org/occupancy>
   **/
  occupancy: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/petsAllowed>
   **/
  petsAllowed: all.OneOrMany<all.ApartmentPetsAllowedFieldEnum>;

  /**
   * <https://schema.org/permittedUsage>
   **/
  permittedUsage: all.OneOrMany<string>;

  /**
   * <https://schema.org/tourBookingPage>
   **/
  tourBookingPage: all.OneOrMany<string>;

  /**
   * <https://schema.org/numberOfBathroomsTotal>
   **/
  numberOfBathroomsTotal: all.OneOrMany<number>;

  /**
   * <https://schema.org/floorSize>
   **/
  floorSize: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/numberOfBedrooms>
   **/
  numberOfBedrooms: all.OneOrMany<all.ApartmentNumberOfBedroomsFieldEnum>;

  /**
   * <https://schema.org/numberOfFullBathrooms>
   **/
  numberOfFullBathrooms: all.OneOrMany<number>;

  /**
   * <https://schema.org/accommodationFloorPlan>
   **/
  accommodationFloorPlan: all.OneOrMany<all.FloorPlan>;

  /**
   * <https://schema.org/bed>
   **/
  bed: all.OneOrMany<all.ApartmentBedFieldEnum>;

  /**
   * <https://schema.org/leaseLength>
   **/
  leaseLength: all.OneOrMany<all.ApartmentLeaseLengthFieldEnum>;

  /**
   * <https://schema.org/numberOfPartialBathrooms>
   **/
  numberOfPartialBathrooms: all.OneOrMany<number>;

  /**
   * <https://schema.org/yearBuilt>
   **/
  yearBuilt: all.OneOrMany<number>;

  /**
   * <https://schema.org/amenityFeature>
   **/
  amenityFeature: all.OneOrMany<all.LocationFeatureSpecification>;

  /**
   * <https://schema.org/floorLevel>
   **/
  floorLevel: all.OneOrMany<string>;

  /**
   * <https://schema.org/accommodationCategory>
   **/
  accommodationCategory: all.OneOrMany<string>;

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
  photos: all.OneOrMany<all.ApartmentPhotosFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

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
  geoIntersects: all.OneOrMany<all.ApartmentGeoIntersectsFieldEnum>;

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
  geoOverlaps: all.OneOrMany<all.ApartmentGeoOverlapsFieldEnum>;

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
  geoCrosses: all.OneOrMany<all.ApartmentGeoCrossesFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.ApartmentKeywordsFieldEnum>;

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
  geoCoveredBy: all.OneOrMany<all.ApartmentGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/maps>
   **/
  maps: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.ApartmentLogoFieldEnum>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.ApartmentGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geo>
   **/
  geo: all.OneOrMany<all.ApartmentGeoFieldEnum>;

  /**
   * <https://schema.org/publicAccess>
   **/
  publicAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.ApartmentLatitudeFieldEnum>;

  /**
   * <https://schema.org/map>
   **/
  map: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMap>
   **/
  hasMap: all.OneOrMany<all.ApartmentHasMapFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.ApartmentGeoTouchesFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.ApartmentAddressFieldEnum>;

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
  geoWithin: all.OneOrMany<all.ApartmentGeoWithinFieldEnum>;

  /**
   * <https://schema.org/smokingAllowed>
   **/
  smokingAllowed: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.ApartmentLongitudeFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.ApartmentGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.ApartmentGeoCoversFieldEnum>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/photo>
   **/
  photo: all.OneOrMany<all.ApartmentPhotoFieldEnum>;

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
  geoEquals: all.OneOrMany<all.ApartmentGeoEqualsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ApartmentMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ApartmentIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ApartmentDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ApartmentSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ApartmentAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ApartmentImageFieldEnum>;
}
