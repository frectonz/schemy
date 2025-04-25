import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BoatReservationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BoatReservation>
 **/
export interface BoatReservation {
  "@context": string;
  "@type": "BoatReservation";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.BoatReservationProviderFieldEnum>;

  /**
   * <https://schema.org/programMembershipUsed>
   **/
  programMembershipUsed: all.OneOrMany<all.ProgramMembership>;

  /**
   * <https://schema.org/totalPrice>
   **/
  totalPrice: all.OneOrMany<all.BoatReservationTotalPriceFieldEnum>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.BoatReservationBrokerFieldEnum>;

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
  bookingAgent: all.OneOrMany<all.BoatReservationBookingAgentFieldEnum>;

  /**
   * <https://schema.org/reservationFor>
   **/
  reservationFor: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/underName>
   **/
  underName: all.OneOrMany<all.BoatReservationUnderNameFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BoatReservationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BoatReservationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BoatReservationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BoatReservationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BoatReservationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BoatReservationImageFieldEnum>;
}
