import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type TherapeuticProcedureAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TherapeuticProcedure>
 **/
export interface TherapeuticProcedure {
  "@context": string;
  "@type": "TherapeuticProcedure";

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
  preparation: all.OneOrMany<all.TherapeuticProcedurePreparationFieldEnum>;

  /**
   * <https://schema.org/status>
   **/
  status: all.OneOrMany<all.TherapeuticProcedureStatusFieldEnum>;

  /**
   * <https://schema.org/procedureType>
   **/
  procedureType: all.OneOrMany<all.MedicalProcedureTypeEnum>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.TherapeuticProcedureLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.TherapeuticProcedureMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TherapeuticProcedureIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TherapeuticProcedureDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TherapeuticProcedureSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TherapeuticProcedureAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TherapeuticProcedureImageFieldEnum>;
}
