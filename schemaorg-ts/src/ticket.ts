import type * as all from "./index";

/**
 * <https://schema.org/ticketToken>
 **/
export type TicketTicketTokenFieldEnum = string;

/**
 * <https://schema.org/dateIssued>
 **/
export type TicketDateIssuedFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TicketAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Ticket>
 **/
export interface Ticket {
  "@context": string;
  "@type": "Ticket";

  /**
   * <https://schema.org/totalPrice>
   **/
  totalPrice: all.OneOrMany<all.TicketTotalPriceFieldEnum>;

  /**
   * <https://schema.org/ticketToken>
   **/
  ticketToken: all.OneOrMany<all.TicketTicketTokenFieldEnum>;

  /**
   * <https://schema.org/issuedBy>
   **/
  issuedBy: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/dateIssued>
   **/
  dateIssued: all.OneOrMany<all.TicketDateIssuedFieldEnum>;

  /**
   * <https://schema.org/ticketedSeat>
   **/
  ticketedSeat: all.OneOrMany<all.Seat>;

  /**
   * <https://schema.org/ticketNumber>
   **/
  ticketNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/priceCurrency>
   **/
  priceCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/underName>
   **/
  underName: all.OneOrMany<all.TicketUnderNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TicketMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TicketIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TicketDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TicketSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TicketAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TicketImageFieldEnum>;
}
