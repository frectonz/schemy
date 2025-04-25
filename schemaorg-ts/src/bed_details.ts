import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BedDetailsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BedDetails>
 **/
export interface BedDetails {
  "@context": string;
  "@type": "BedDetails";

  /**
   * <https://schema.org/numberOfBeds>
   **/
  numberOfBeds: all.OneOrMany<number>;

  /**
   * <https://schema.org/typeOfBed>
   **/
  typeOfBed: all.OneOrMany<all.BedDetailsTypeOfBedFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.BedDetailsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BedDetailsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BedDetailsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BedDetailsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BedDetailsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BedDetailsImageFieldEnum>;
}
