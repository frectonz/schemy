import type * as all from "./index";

/**
 * <https://schema.org/datePosted>
 **/
export type JobPostingDatePostedFieldEnum = string;

/**
 * <https://schema.org/securityClearanceRequirement>
 **/
export type JobPostingSecurityClearanceRequirementFieldEnum = string;

/**
 * <https://schema.org/jobStartDate>
 **/
export type JobPostingJobStartDateFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type JobPostingValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type JobPostingAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/JobPosting>
 **/
export interface JobPosting {
  "@context": string;
  "@type": "JobPosting";

  /**
   * <https://schema.org/physicalRequirement>
   **/
  physicalRequirement: all.OneOrMany<all.JobPostingPhysicalRequirementFieldEnum>;

  /**
   * <https://schema.org/applicationContact>
   **/
  applicationContact: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/responsibilities>
   **/
  responsibilities: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationRequirements>
   **/
  educationRequirements: all.OneOrMany<all.JobPostingEducationRequirementsFieldEnum>;

  /**
   * <https://schema.org/benefits>
   **/
  benefits: all.OneOrMany<string>;

  /**
   * <https://schema.org/skills>
   **/
  skills: all.OneOrMany<all.JobPostingSkillsFieldEnum>;

  /**
   * <https://schema.org/employmentType>
   **/
  employmentType: all.OneOrMany<string>;

  /**
   * <https://schema.org/experienceInPlaceOfEducation>
   **/
  experienceInPlaceOfEducation: all.OneOrMany<string>;

  /**
   * <https://schema.org/workHours>
   **/
  workHours: all.OneOrMany<string>;

  /**
   * <https://schema.org/datePosted>
   **/
  datePosted: all.OneOrMany<all.JobPostingDatePostedFieldEnum>;

  /**
   * <https://schema.org/applicantLocationRequirements>
   **/
  applicantLocationRequirements: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/securityClearanceRequirement>
   **/
  securityClearanceRequirement: all.OneOrMany<all.JobPostingSecurityClearanceRequirementFieldEnum>;

  /**
   * <https://schema.org/occupationalCategory>
   **/
  occupationalCategory: all.OneOrMany<all.JobPostingOccupationalCategoryFieldEnum>;

  /**
   * <https://schema.org/employmentUnit>
   **/
  employmentUnit: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/jobImmediateStart>
   **/
  jobImmediateStart: all.OneOrMany<string>;

  /**
   * <https://schema.org/directApply>
   **/
  directApply: all.OneOrMany<string>;

  /**
   * <https://schema.org/jobStartDate>
   **/
  jobStartDate: all.OneOrMany<all.JobPostingJobStartDateFieldEnum>;

  /**
   * <https://schema.org/qualifications>
   **/
  qualifications: all.OneOrMany<all.JobPostingQualificationsFieldEnum>;

  /**
   * <https://schema.org/specialCommitments>
   **/
  specialCommitments: all.OneOrMany<string>;

  /**
   * <https://schema.org/incentiveCompensation>
   **/
  incentiveCompensation: all.OneOrMany<string>;

  /**
   * <https://schema.org/baseSalary>
   **/
  baseSalary: all.OneOrMany<all.JobPostingBaseSalaryFieldEnum>;

  /**
   * <https://schema.org/jobBenefits>
   **/
  jobBenefits: all.OneOrMany<string>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.JobPostingValidThroughFieldEnum>;

  /**
   * <https://schema.org/estimatedSalary>
   **/
  estimatedSalary: all.OneOrMany<all.JobPostingEstimatedSalaryFieldEnum>;

  /**
   * <https://schema.org/totalJobOpenings>
   **/
  totalJobOpenings: all.OneOrMany<number>;

  /**
   * <https://schema.org/hiringOrganization>
   **/
  hiringOrganization: all.OneOrMany<all.JobPostingHiringOrganizationFieldEnum>;

  /**
   * <https://schema.org/relevantOccupation>
   **/
  relevantOccupation: all.OneOrMany<all.Occupation>;

  /**
   * <https://schema.org/experienceRequirements>
   **/
  experienceRequirements: all.OneOrMany<all.JobPostingExperienceRequirementsFieldEnum>;

  /**
   * <https://schema.org/jobLocationType>
   **/
  jobLocationType: all.OneOrMany<string>;

  /**
   * <https://schema.org/eligibilityToWorkRequirement>
   **/
  eligibilityToWorkRequirement: all.OneOrMany<string>;

  /**
   * <https://schema.org/jobLocation>
   **/
  jobLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sensoryRequirement>
   **/
  sensoryRequirement: all.OneOrMany<all.JobPostingSensoryRequirementFieldEnum>;

  /**
   * <https://schema.org/employerOverview>
   **/
  employerOverview: all.OneOrMany<string>;

  /**
   * <https://schema.org/incentives>
   **/
  incentives: all.OneOrMany<string>;

  /**
   * <https://schema.org/title>
   **/
  title: all.OneOrMany<string>;

  /**
   * <https://schema.org/industry>
   **/
  industry: all.OneOrMany<all.JobPostingIndustryFieldEnum>;

  /**
   * <https://schema.org/salaryCurrency>
   **/
  salaryCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.JobPostingMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.JobPostingIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.JobPostingDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.JobPostingSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.JobPostingAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.JobPostingImageFieldEnum>;
}
