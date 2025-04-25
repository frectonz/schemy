import type * as all from "./index";

/**
 * <https://schema.org/petsAllowed>
 **/
export type FloorPlanPetsAllowedFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type FloorPlanAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/FloorPlan>
 **/
export interface FloorPlan {
  "@context": string;
  "@type": "FloorPlan";

  /**
   * <https://schema.org/petsAllowed>
   **/
  petsAllowed: all.OneOrMany<all.FloorPlanPetsAllowedFieldEnum>;

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
  numberOfBedrooms: all.OneOrMany<all.FloorPlanNumberOfBedroomsFieldEnum>;

  /**
   * <https://schema.org/numberOfFullBathrooms>
   **/
  numberOfFullBathrooms: all.OneOrMany<number>;

  /**
   * <https://schema.org/numberOfAccommodationUnits>
   **/
  numberOfAccommodationUnits: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/numberOfAvailableAccommodationUnits>
   **/
  numberOfAvailableAccommodationUnits: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/numberOfPartialBathrooms>
   **/
  numberOfPartialBathrooms: all.OneOrMany<number>;

  /**
   * <https://schema.org/isPlanForApartment>
   **/
  isPlanForApartment: all.OneOrMany<all.Accommodation>;

  /**
   * <https://schema.org/numberOfRooms>
   **/
  numberOfRooms: all.OneOrMany<all.FloorPlanNumberOfRoomsFieldEnum>;

  /**
   * <https://schema.org/amenityFeature>
   **/
  amenityFeature: all.OneOrMany<all.LocationFeatureSpecification>;

  /**
   * <https://schema.org/layoutImage>
   **/
  layoutImage: all.OneOrMany<all.FloorPlanLayoutImageFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.FloorPlanMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.FloorPlanIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.FloorPlanDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.FloorPlanSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.FloorPlanAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.FloorPlanImageFieldEnum>;
}
