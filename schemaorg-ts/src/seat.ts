import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type SeatAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Seat>
 **/
export interface Seat {
  "@context": string;
  "@type": "Seat";

  /**
   * <https://schema.org/seatNumber>
   **/
  seatNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/seatRow>
   **/
  seatRow: all.OneOrMany<string>;

  /**
   * <https://schema.org/seatSection>
   **/
  seatSection: all.OneOrMany<string>;

  /**
   * <https://schema.org/seatingType>
   **/
  seatingType: all.OneOrMany<all.SeatSeatingTypeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SeatMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SeatIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SeatDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SeatSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SeatAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SeatImageFieldEnum>;
}
