import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type LymphaticVesselAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/LymphaticVessel>
 **/
export interface LymphaticVessel {
  "@context": string;
  "@type": "LymphaticVessel";

  /**
   * <https://schema.org/regionDrained>
   **/
  regionDrained: all.OneOrMany<all.LymphaticVesselRegionDrainedFieldEnum>;

  /**
   * <https://schema.org/originatesFrom>
   **/
  originatesFrom: all.OneOrMany<all.Vessel>;

  /**
   * <https://schema.org/runsTo>
   **/
  runsTo: all.OneOrMany<all.Vessel>;

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
  legalStatus: all.OneOrMany<all.LymphaticVesselLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.LymphaticVesselMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.LymphaticVesselIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.LymphaticVesselDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.LymphaticVesselSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.LymphaticVesselAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.LymphaticVesselImageFieldEnum>;
}
