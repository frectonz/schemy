import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalProcedureTypeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalProcedureType>
 **/
export interface MedicalProcedureType {
  "@context": string;
  "@type": "MedicalProcedureType";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.MedicalProcedureTypeSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MedicalProcedureTypeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalProcedureTypeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalProcedureTypeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalProcedureTypeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalProcedureTypeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalProcedureTypeImageFieldEnum>;
}
