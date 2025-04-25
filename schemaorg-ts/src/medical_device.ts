import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalDeviceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalDevice>
 **/
export interface MedicalDevice {
  "@context": string;
  "@type": "MedicalDevice";

  /**
   * <https://schema.org/procedure>
   **/
  procedure: all.OneOrMany<string>;

  /**
   * <https://schema.org/preOp>
   **/
  preOp: all.OneOrMany<string>;

  /**
   * <https://schema.org/contraindication>
   **/
  contraindication: all.OneOrMany<all.MedicalDeviceContraindicationFieldEnum>;

  /**
   * <https://schema.org/adverseOutcome>
   **/
  adverseOutcome: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/seriousAdverseOutcome>
   **/
  seriousAdverseOutcome: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/postOp>
   **/
  postOp: all.OneOrMany<string>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalDeviceLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MedicalDeviceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalDeviceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalDeviceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalDeviceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalDeviceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalDeviceImageFieldEnum>;
}
