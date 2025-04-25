import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type BusTripDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type BusTripArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BusTripAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BusTrip>
 **/
export interface BusTrip {
  "@context": string;
  "@type": "BusTrip";

  /**
   * <https://schema.org/departureBusStop>
   **/
  departureBusStop: all.OneOrMany<all.BusTripDepartureBusStopFieldEnum>;

  /**
   * <https://schema.org/arrivalBusStop>
   **/
  arrivalBusStop: all.OneOrMany<all.BusTripArrivalBusStopFieldEnum>;

  /**
   * <https://schema.org/busNumber>
   **/
  busNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/busName>
   **/
  busName: all.OneOrMany<string>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.BusTripProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.BusTripDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.BusTripOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.BusTripItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.BusTripArrivalTimeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BusTripMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BusTripIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BusTripDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BusTripSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BusTripAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BusTripImageFieldEnum>;
}
