import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DrugPrescriptionStatusAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DrugPrescriptionStatus>
 **/
export interface DrugPrescriptionStatus {
  "@context": string;
  "@type": "DrugPrescriptionStatus";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.DrugPrescriptionStatusSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DrugPrescriptionStatusMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DrugPrescriptionStatusIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DrugPrescriptionStatusDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DrugPrescriptionStatusSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DrugPrescriptionStatusAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DrugPrescriptionStatusImageFieldEnum>;
}
