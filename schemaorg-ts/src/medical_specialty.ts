import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalSpecialtyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalSpecialty>
 **/
export interface MedicalSpecialty {
  "@context": string;
  "@type": "MedicalSpecialty";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.MedicalSpecialtySupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MedicalSpecialtyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalSpecialtyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalSpecialtyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalSpecialtySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalSpecialtyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalSpecialtyImageFieldEnum>;
}
