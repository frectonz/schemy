import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DoseScheduleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DoseSchedule>
 **/
export interface DoseSchedule {
  "@context": string;
  "@type": "DoseSchedule";

  /**
   * <https://schema.org/frequency>
   **/
  frequency: all.OneOrMany<string>;

  /**
   * <https://schema.org/targetPopulation>
   **/
  targetPopulation: all.OneOrMany<string>;

  /**
   * <https://schema.org/doseValue>
   **/
  doseValue: all.OneOrMany<all.DoseScheduleDoseValueFieldEnum>;

  /**
   * <https://schema.org/doseUnit>
   **/
  doseUnit: all.OneOrMany<string>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.DoseScheduleLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.DoseScheduleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DoseScheduleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DoseScheduleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DoseScheduleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DoseScheduleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DoseScheduleImageFieldEnum>;
}
