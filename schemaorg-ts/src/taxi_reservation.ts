import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type TaxiReservationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TaxiReservation>
 **/
export interface TaxiReservation {
  "@context": string;
  "@type": "TaxiReservation";

  /**
   * <https://schema.org/partySize>
   **/
  partySize: all.OneOrMany<all.TaxiReservationPartySizeFieldEnum>;

  /**
   * <https://schema.org/pickupTime>
   **/
  pickupTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/pickupLocation>
   **/
  pickupLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.TaxiReservationProviderFieldEnum>;

  /**
   * <https://schema.org/programMembershipUsed>
   **/
  programMembershipUsed: all.OneOrMany<all.ProgramMembership>;

  /**
   * <https://schema.org/totalPrice>
   **/
  totalPrice: all.OneOrMany<all.TaxiReservationTotalPriceFieldEnum>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.TaxiReservationBrokerFieldEnum>;

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
  bookingAgent: all.OneOrMany<all.TaxiReservationBookingAgentFieldEnum>;

  /**
   * <https://schema.org/reservationFor>
   **/
  reservationFor: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/underName>
   **/
  underName: all.OneOrMany<all.TaxiReservationUnderNameFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.TaxiReservationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TaxiReservationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TaxiReservationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TaxiReservationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TaxiReservationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TaxiReservationImageFieldEnum>;
}
