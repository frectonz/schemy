import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BrainStructureAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BrainStructure>
 **/
export interface BrainStructure {
  "@context": string;
  "@type": "BrainStructure";

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
  legalStatus: all.OneOrMany<all.BrainStructureLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BrainStructureMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BrainStructureIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BrainStructureDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BrainStructureSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BrainStructureAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BrainStructureImageFieldEnum>;
}
