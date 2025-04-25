import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type FlightDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type FlightArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type FlightAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Flight>
 **/
export interface Flight {
  "@context": string;
  "@type": "Flight";

  /**
   * <https://schema.org/departureAirport>
   **/
  departureAirport: all.OneOrMany<all.Airport>;

  /**
   * <https://schema.org/flightDistance>
   **/
  flightDistance: all.OneOrMany<all.FlightFlightDistanceFieldEnum>;

  /**
   * <https://schema.org/estimatedFlightDuration>
   **/
  estimatedFlightDuration: all.OneOrMany<all.FlightEstimatedFlightDurationFieldEnum>;

  /**
   * <https://schema.org/mealService>
   **/
  mealService: all.OneOrMany<string>;

  /**
   * <https://schema.org/arrivalGate>
   **/
  arrivalGate: all.OneOrMany<string>;

  /**
   * <https://schema.org/webCheckinTime>
   **/
  webCheckinTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/seller>
   **/
  seller: all.OneOrMany<all.FlightSellerFieldEnum>;

  /**
   * <https://schema.org/departureTerminal>
   **/
  departureTerminal: all.OneOrMany<string>;

  /**
   * <https://schema.org/flightNumber>
   **/
  flightNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/departureGate>
   **/
  departureGate: all.OneOrMany<string>;

  /**
   * <https://schema.org/arrivalTerminal>
   **/
  arrivalTerminal: all.OneOrMany<string>;

  /**
   * <https://schema.org/arrivalAirport>
   **/
  arrivalAirport: all.OneOrMany<all.Airport>;

  /**
   * <https://schema.org/carrier>
   **/
  carrier: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/aircraft>
   **/
  aircraft: all.OneOrMany<all.FlightAircraftFieldEnum>;

  /**
   * <https://schema.org/boardingPolicy>
   **/
  boardingPolicy: all.OneOrMany<all.BoardingPolicyTypeEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.FlightProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.FlightDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.FlightOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.FlightItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.FlightArrivalTimeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.FlightMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.FlightIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.FlightDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.FlightSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.FlightAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.FlightImageFieldEnum>;
}
