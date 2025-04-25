import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type BoatTripDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type BoatTripArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BoatTripAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BoatTrip>
 **/
export interface BoatTrip {
  "@context": string;
  "@type": "BoatTrip";

  /**
   * <https://schema.org/arrivalBoatTerminal>
   **/
  arrivalBoatTerminal: all.OneOrMany<all.BoatTerminal>;

  /**
   * <https://schema.org/departureBoatTerminal>
   **/
  departureBoatTerminal: all.OneOrMany<all.BoatTerminal>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.BoatTripProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.BoatTripDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.BoatTripOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.BoatTripItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.BoatTripArrivalTimeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BoatTripMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BoatTripIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BoatTripDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BoatTripSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BoatTripAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BoatTripImageFieldEnum>;
}
