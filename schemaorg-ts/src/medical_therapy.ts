import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalTherapyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalTherapy>
 **/
export interface MedicalTherapy {
  "@context": string;
  "@type": "MedicalTherapy";

  /**
   * <https://schema.org/contraindication>
   **/
  contraindication: all.OneOrMany<all.MedicalTherapyContraindicationFieldEnum>;

  /**
   * <https://schema.org/seriousAdverseOutcome>
   **/
  seriousAdverseOutcome: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/duplicateTherapy>
   **/
  duplicateTherapy: all.OneOrMany<all.MedicalTherapy>;

  /**
   * <https://schema.org/adverseOutcome>
   **/
  adverseOutcome: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/drug>
   **/
  drug: all.OneOrMany<all.Drug>;

  /**
   * <https://schema.org/doseSchedule>
   **/
  doseSchedule: all.OneOrMany<all.DoseSchedule>;

  /**
   * <https://schema.org/howPerformed>
   **/
  howPerformed: all.OneOrMany<string>;

  /**
   * <https://schema.org/followup>
   **/
  followup: all.OneOrMany<string>;

  /**
   * <https://schema.org/bodyLocation>
   **/
  bodyLocation: all.OneOrMany<string>;

  /**
   * <https://schema.org/preparation>
   **/
  preparation: all.OneOrMany<all.MedicalTherapyPreparationFieldEnum>;

  /**
   * <https://schema.org/status>
   **/
  status: all.OneOrMany<all.MedicalTherapyStatusFieldEnum>;

  /**
   * <https://schema.org/procedureType>
   **/
  procedureType: all.OneOrMany<all.MedicalProcedureTypeEnum>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalTherapyLegalStatusFieldEnum>;

  /**
   * <https://schema.org/relevantSpecialty>
   **/
  relevantSpecialty: all.OneOrMany<all.MedicalSpecialtyEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/recognizingAuthority>
   **/
  recognizingAuthority: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/medicineSystem>
   **/
  medicineSystem: all.OneOrMany<all.MedicineSystemEnum>;

  /**
   * <https://schema.org/guideline>
   **/
  guideline: all.OneOrMany<all.MedicalGuideline>;

  /**
   * <https://schema.org/study>
   **/
  study: all.OneOrMany<all.MedicalStudy>;

  /**
   * <https://schema.org/code>
   **/
  code: all.OneOrMany<all.MedicalCode>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MedicalTherapyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalTherapyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalTherapyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalTherapySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalTherapyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalTherapyImageFieldEnum>;
}
