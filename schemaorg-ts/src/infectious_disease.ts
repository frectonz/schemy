import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type InfectiousDiseaseAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/InfectiousDisease>
 **/
export interface InfectiousDisease {
  "@context": string;
  "@type": "InfectiousDisease";

  /**
   * <https://schema.org/infectiousAgentClass>
   **/
  infectiousAgentClass: all.OneOrMany<all.InfectiousAgentClassEnum>;

  /**
   * <https://schema.org/transmissionMethod>
   **/
  transmissionMethod: all.OneOrMany<string>;

  /**
   * <https://schema.org/infectiousAgent>
   **/
  infectiousAgent: all.OneOrMany<string>;

  /**
   * <https://schema.org/expectedPrognosis>
   **/
  expectedPrognosis: all.OneOrMany<string>;

  /**
   * <https://schema.org/associatedAnatomy>
   **/
  associatedAnatomy: all.OneOrMany<all.InfectiousDiseaseAssociatedAnatomyFieldEnum>;

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
   * <https://schema.org/possibleTreatment>
   **/
  possibleTreatment: all.OneOrMany<all.MedicalTherapy>;

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
  status: all.OneOrMany<all.InfectiousDiseaseStatusFieldEnum>;

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
  legalStatus: all.OneOrMany<all.InfectiousDiseaseLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.InfectiousDiseaseMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.InfectiousDiseaseIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.InfectiousDiseaseDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.InfectiousDiseaseSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.InfectiousDiseaseAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.InfectiousDiseaseImageFieldEnum>;
}
