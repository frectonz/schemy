import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type TripDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type TripArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TripAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Trip>
 **/
export interface Trip {
  "@context": string;
  "@type": "Trip";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.TripProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.TripDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.TripOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.TripItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.TripArrivalTimeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.TripMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TripIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TripDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TripSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TripAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TripImageFieldEnum>;
}
