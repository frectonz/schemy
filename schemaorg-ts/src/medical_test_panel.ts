import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalTestPanelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalTestPanel>
 **/
export interface MedicalTestPanel {
  "@context": string;
  "@type": "MedicalTestPanel";

  /**
   * <https://schema.org/subTest>
   **/
  subTest: all.OneOrMany<all.MedicalTest>;

  /**
   * <https://schema.org/usesDevice>
   **/
  usesDevice: all.OneOrMany<all.MedicalDevice>;

  /**
   * <https://schema.org/affectedBy>
   **/
  affectedBy: all.OneOrMany<all.Drug>;

  /**
   * <https://schema.org/signDetected>
   **/
  signDetected: all.OneOrMany<all.MedicalSign>;

  /**
   * <https://schema.org/usedToDiagnose>
   **/
  usedToDiagnose: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/normalRange>
   **/
  normalRange: all.OneOrMany<all.MedicalTestPanelNormalRangeFieldEnum>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalTestPanelLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MedicalTestPanelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalTestPanelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalTestPanelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalTestPanelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalTestPanelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalTestPanelImageFieldEnum>;
}
