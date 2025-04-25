import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type NerveAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Nerve>
 **/
export interface Nerve {
  "@context": string;
  "@type": "Nerve";

  /**
   * <https://schema.org/branch>
   **/
  branch: all.OneOrMany<all.AnatomicalStructure>;

  /**
   * <https://schema.org/nerveMotor>
   **/
  nerveMotor: all.OneOrMany<all.Muscle>;

  /**
   * <https://schema.org/sensoryUnit>
   **/
  sensoryUnit: all.OneOrMany<all.NerveSensoryUnitFieldEnum>;

  /**
   * <https://schema.org/sourcedFrom>
   **/
  sourcedFrom: all.OneOrMany<all.BrainStructure>;

  /**
   * <https://schema.org/diagram>
   **/
  diagram: all.OneOrMany<all.ImageObject>;

  /**
   * <https://schema.org/partOfSystem>
   **/
  partOfSystem: all.OneOrMany<all.AnatomicalSystem>;

  /**
   * <https://schema.org/connectedTo>
   **/
  connectedTo: all.OneOrMany<all.AnatomicalStructure>;

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
   * <https://schema.org/subStructure>
   **/
  subStructure: all.OneOrMany<all.AnatomicalStructure>;

  /**
   * <https://schema.org/bodyLocation>
   **/
  bodyLocation: all.OneOrMany<string>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.NerveLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.NerveMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.NerveIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.NerveDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.NerveSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.NerveAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.NerveImageFieldEnum>;
}
