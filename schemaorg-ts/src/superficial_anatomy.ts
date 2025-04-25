import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type SuperficialAnatomyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SuperficialAnatomy>
 **/
export interface SuperficialAnatomy {
  "@context": string;
  "@type": "SuperficialAnatomy";

  /**
   * <https://schema.org/associatedPathophysiology>
   **/
  associatedPathophysiology: all.OneOrMany<string>;

  /**
   * <https://schema.org/relatedCondition>
   **/
  relatedCondition: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/relatedTherapy>
   **/
  relatedTherapy: all.OneOrMany<all.MedicalTherapy>;

  /**
   * <https://schema.org/significance>
   **/
  significance: all.OneOrMany<string>;

  /**
   * <https://schema.org/relatedAnatomy>
   **/
  relatedAnatomy: all.OneOrMany<all.SuperficialAnatomyRelatedAnatomyFieldEnum>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.SuperficialAnatomyLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.SuperficialAnatomyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SuperficialAnatomyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SuperficialAnatomyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SuperficialAnatomySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SuperficialAnatomyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SuperficialAnatomyImageFieldEnum>;
}
