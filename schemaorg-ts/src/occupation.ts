import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OccupationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Occupation>
 **/
export interface Occupation {
  "@context": string;
  "@type": "Occupation";

  /**
   * <https://schema.org/responsibilities>
   **/
  responsibilities: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationRequirements>
   **/
  educationRequirements: all.OneOrMany<all.OccupationEducationRequirementsFieldEnum>;

  /**
   * <https://schema.org/skills>
   **/
  skills: all.OneOrMany<all.OccupationSkillsFieldEnum>;

  /**
   * <https://schema.org/occupationLocation>
   **/
  occupationLocation: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/occupationalCategory>
   **/
  occupationalCategory: all.OneOrMany<all.OccupationOccupationalCategoryFieldEnum>;

  /**
   * <https://schema.org/qualifications>
   **/
  qualifications: all.OneOrMany<all.OccupationQualificationsFieldEnum>;

  /**
   * <https://schema.org/estimatedSalary>
   **/
  estimatedSalary: all.OneOrMany<all.OccupationEstimatedSalaryFieldEnum>;

  /**
   * <https://schema.org/experienceRequirements>
   **/
  experienceRequirements: all.OneOrMany<all.OccupationExperienceRequirementsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OccupationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OccupationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OccupationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OccupationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OccupationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OccupationImageFieldEnum>;
}
