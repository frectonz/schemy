import type * as all from "./index";

/**
 * <https://schema.org/departureTime>
 **/
export type TrainTripDepartureTimeFieldEnum = string;

/**
 * <https://schema.org/arrivalTime>
 **/
export type TrainTripArrivalTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TrainTripAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TrainTrip>
 **/
export interface TrainTrip {
  "@context": string;
  "@type": "TrainTrip";

  /**
   * <https://schema.org/departureStation>
   **/
  departureStation: all.OneOrMany<all.TrainStation>;

  /**
   * <https://schema.org/arrivalPlatform>
   **/
  arrivalPlatform: all.OneOrMany<string>;

  /**
   * <https://schema.org/trainNumber>
   **/
  trainNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/arrivalStation>
   **/
  arrivalStation: all.OneOrMany<all.TrainStation>;

  /**
   * <https://schema.org/departurePlatform>
   **/
  departurePlatform: all.OneOrMany<string>;

  /**
   * <https://schema.org/trainName>
   **/
  trainName: all.OneOrMany<string>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.TrainTripProviderFieldEnum>;

  /**
   * <https://schema.org/tripOrigin>
   **/
  tripOrigin: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/departureTime>
   **/
  departureTime: all.OneOrMany<all.TrainTripDepartureTimeFieldEnum>;

  /**
   * <https://schema.org/partOfTrip>
   **/
  partOfTrip: all.OneOrMany<all.Trip>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.TrainTripOffersFieldEnum>;

  /**
   * <https://schema.org/itinerary>
   **/
  itinerary: all.OneOrMany<all.TrainTripItineraryFieldEnum>;

  /**
   * <https://schema.org/arrivalTime>
   **/
  arrivalTime: all.OneOrMany<all.TrainTripArrivalTimeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.TrainTripMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TrainTripIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TrainTripDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TrainTripSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TrainTripAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TrainTripImageFieldEnum>;
}
