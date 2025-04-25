import type * as all from "./index";

/**
 * <https://schema.org/checkoutTime>
 **/
export type LodgingReservationCheckoutTimeFieldEnum = string;

/**
 * <https://schema.org/checkinTime>
 **/
export type LodgingReservationCheckinTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type LodgingReservationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/LodgingReservation>
 **/
export interface LodgingReservation {
  "@context": string;
  "@type": "LodgingReservation";

  /**
   * <https://schema.org/numAdults>
   **/
  numAdults: all.OneOrMany<all.LodgingReservationNumAdultsFieldEnum>;

  /**
   * <https://schema.org/checkoutTime>
   **/
  checkoutTime: all.OneOrMany<all.LodgingReservationCheckoutTimeFieldEnum>;

  /**
   * <https://schema.org/checkinTime>
   **/
  checkinTime: all.OneOrMany<all.LodgingReservationCheckinTimeFieldEnum>;

  /**
   * <https://schema.org/lodgingUnitDescription>
   **/
  lodgingUnitDescription: all.OneOrMany<string>;

  /**
   * <https://schema.org/lodgingUnitType>
   **/
  lodgingUnitType: all.OneOrMany<all.LodgingReservationLodgingUnitTypeFieldEnum>;

  /**
   * <https://schema.org/numChildren>
   **/
  numChildren: all.OneOrMany<all.LodgingReservationNumChildrenFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.LodgingReservationProviderFieldEnum>;

  /**
   * <https://schema.org/programMembershipUsed>
   **/
  programMembershipUsed: all.OneOrMany<all.ProgramMembership>;

  /**
   * <https://schema.org/totalPrice>
   **/
  totalPrice: all.OneOrMany<all.LodgingReservationTotalPriceFieldEnum>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.LodgingReservationBrokerFieldEnum>;

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
  bookingAgent: all.OneOrMany<all.LodgingReservationBookingAgentFieldEnum>;

  /**
   * <https://schema.org/reservationFor>
   **/
  reservationFor: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/underName>
   **/
  underName: all.OneOrMany<all.LodgingReservationUnderNameFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.LodgingReservationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.LodgingReservationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.LodgingReservationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.LodgingReservationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.LodgingReservationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.LodgingReservationImageFieldEnum>;
}
