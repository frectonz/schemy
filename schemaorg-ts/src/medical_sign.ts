import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalSignAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalSign>
 **/
export interface MedicalSign {
  "@context": string;
  "@type": "MedicalSign";

  /**
   * <https://schema.org/identifyingExam>
   **/
  identifyingExam: all.OneOrMany<all.PhysicalExamEnum>;

  /**
   * <https://schema.org/identifyingTest>
   **/
  identifyingTest: all.OneOrMany<all.MedicalTest>;

  /**
   * <https://schema.org/possibleTreatment>
   **/
  possibleTreatment: all.OneOrMany<all.MedicalTherapy>;

  /**
   * <https://schema.org/expectedPrognosis>
   **/
  expectedPrognosis: all.OneOrMany<string>;

  /**
   * <https://schema.org/associatedAnatomy>
   **/
  associatedAnatomy: all.OneOrMany<all.MedicalSignAssociatedAnatomyFieldEnum>;

  /**
   * <https://schema.org/possibleComplication>
   **/
  possibleComplication: all.OneOrMany<string>;

  /**
   * <https://schema.org/signOrSymptom>
   **/
  signOrSymptom: all.OneOrMany<all.MedicalSignOrSymptom>;

  /**
   * <https://schema.org/primaryPrevention>
   **/
  primaryPrevention: all.OneOrMany<all.MedicalTherapy>;

  /**
   * <https://schema.org/riskFactor>
   **/
  riskFactor: all.OneOrMany<all.MedicalRiskFactor>;

  /**
   * <https://schema.org/secondaryPrevention>
   **/
  secondaryPrevention: all.OneOrMany<all.MedicalTherapy>;

  /**
   * <https://schema.org/drug>
   **/
  drug: all.OneOrMany<all.Drug>;

  /**
   * <https://schema.org/naturalProgression>
   **/
  naturalProgression: all.OneOrMany<string>;

  /**
   * <https://schema.org/status>
   **/
  status: all.OneOrMany<all.MedicalSignStatusFieldEnum>;

  /**
   * <https://schema.org/differentialDiagnosis>
   **/
  differentialDiagnosis: all.OneOrMany<all.DDxElement>;

  /**
   * <https://schema.org/epidemiology>
   **/
  epidemiology: all.OneOrMany<string>;

  /**
   * <https://schema.org/stage>
   **/
  stage: all.OneOrMany<all.MedicalConditionStage>;

  /**
   * <https://schema.org/typicalTest>
   **/
  typicalTest: all.OneOrMany<all.MedicalTest>;

  /**
   * <https://schema.org/pathophysiology>
   **/
  pathophysiology: all.OneOrMany<string>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalSignLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MedicalSignMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalSignIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalSignDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalSignSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalSignAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalSignImageFieldEnum>;
}
