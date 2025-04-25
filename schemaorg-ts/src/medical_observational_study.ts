import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MedicalObservationalStudyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MedicalObservationalStudy>
 **/
export interface MedicalObservationalStudy {
  "@context": string;
  "@type": "MedicalObservationalStudy";

  /**
   * <https://schema.org/studyDesign>
   **/
  studyDesign: all.OneOrMany<all.MedicalObservationalStudyDesignEnum>;

  /**
   * <https://schema.org/studySubject>
   **/
  studySubject: all.OneOrMany<all.MedicalEntity>;

  /**
   * <https://schema.org/healthCondition>
   **/
  healthCondition: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/status>
   **/
  status: all.OneOrMany<all.MedicalObservationalStudyStatusFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.MedicalObservationalStudySponsorFieldEnum>;

  /**
   * <https://schema.org/studyLocation>
   **/
  studyLocation: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.MedicalObservationalStudyLegalStatusFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MedicalObservationalStudyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MedicalObservationalStudyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MedicalObservationalStudyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MedicalObservationalStudySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MedicalObservationalStudyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MedicalObservationalStudyImageFieldEnum>;
}
