import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type TouristTripDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type TouristTripArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TouristTripAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TouristTrip>
 **/
export interface TouristTrip {
  "@context": string;
  "@type": "TouristTrip";

  /**
   * <https://schema.org/touristType>
   **/
  touristType: all.OneOrMany<all.TouristTripTouristTypeFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.TouristTripProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.TouristTripDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.TouristTripOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.TouristTripItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.TouristTripArrivalTimeFieldEnum>;

  /**
   * <https://schema.org/subTrip>
   **/
  subTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TouristTripMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TouristTripIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TouristTripDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TouristTripSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TouristTripAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TouristTripImageFieldEnum>;
}
