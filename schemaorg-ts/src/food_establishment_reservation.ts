import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type FoodEstablishmentReservationStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type FoodEstablishmentReservationEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type FoodEstablishmentReservationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/FoodEstablishmentReservation>
 **/
export interface FoodEstablishmentReservation {
  "@context": string;
  "@type": "FoodEstablishmentReservation";

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.FoodEstablishmentReservationStartTimeFieldEnum>;

  /**
   * <https://schema.org/partySize>
   **/
  partySize: all.OneOrMany<all.FoodEstablishmentReservationPartySizeFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.FoodEstablishmentReservationEndTimeFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.FoodEstablishmentReservationProviderFieldEnum>;

  /**
   * <https://schema.org/programMembershipUsed>
   **/
  programMembershipUsed: all.OneOrMany<all.ProgramMembership>;

  /**
   * <https://schema.org/totalPrice>
   **/
  totalPrice: all.OneOrMany<all.FoodEstablishmentReservationTotalPriceFieldEnum>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.FoodEstablishmentReservationBrokerFieldEnum>;

  /**
   * <https://schema.org/reservationStatus>
   **/
  reservationStatus: all.OneOrMany<all.ReservationStatusTypeEnum>;

  /**
   * <https://schema.org/reservationId>
   **/
  reservationId: all.OneOrMany<string>;

  /**
   * <https://schema.org/bookingTime>
   **/
  bookingTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/modifiedTime>
   **/
  modifiedTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/priceCurrency>
   **/
  priceCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/bookingAgent>
   **/
  bookingAgent: all.OneOrMany<all.FoodEstablishmentReservationBookingAgentFieldEnum>;

  /**
   * <https://schema.org/reservationFor>
   **/
  reservationFor: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/underName>
   **/
  underName: all.OneOrMany<all.FoodEstablishmentReservationUnderNameFieldEnum>;

  /**
   * <https://schema.org/reservedTicket>
   **/
  reservedTicket: all.OneOrMany<all.Ticket>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.FoodEstablishmentReservationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.FoodEstablishmentReservationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.FoodEstablishmentReservationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.FoodEstablishmentReservationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.FoodEstablishmentReservationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.FoodEstablishmentReservationImageFieldEnum>;
}
