import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ReservationStatusTypeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ReservationStatusType>
 **/
export interface ReservationStatusType {
  "@context": string;
  "@type": "ReservationStatusType";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.ReservationStatusTypeSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ReservationStatusTypeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ReservationStatusTypeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ReservationStatusTypeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ReservationStatusTypeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ReservationStatusTypeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ReservationStatusTypeImageFieldEnum>;
}
