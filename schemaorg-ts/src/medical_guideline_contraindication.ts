import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalGuidelineContraindicationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalGuidelineContraindication>
 **/
export interface MedicalGuidelineContraindication {
  "@context": string;
  "@type": "MedicalGuidelineContraindication";

  /**
   * <https://schema.org/evidenceOrigin>
   **/
  evidenceOrigin: all.OneOrMany<string>;

  /**
   * <https://schema.org/evidenceLevel>
   **/
  evidenceLevel: all.OneOrMany<all.MedicalEvidenceLevelEnum>;

  /**
   * <https://schema.org/guidelineSubject>
   **/
  guidelineSubject: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/guidelineDate>
   **/
  guidelineDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalGuidelineContraindicationLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MedicalGuidelineContraindicationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalGuidelineContraindicationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalGuidelineContraindicationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalGuidelineContraindicationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalGuidelineContraindicationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalGuidelineContraindicationImageFieldEnum>;
}
