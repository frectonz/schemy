import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type WorkBasedProgramEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type WorkBasedProgramStartDateFieldEnum = string;

/**
 * <https://schema.org/educationalProgramMode>
 **/
export type WorkBasedProgramEducationalProgramModeFieldEnum = string;

/**
 * <https://schema.org/applicationDeadline>
 **/
export type WorkBasedProgramApplicationDeadlineFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type WorkBasedProgramAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/WorkBasedProgram>
 **/
export interface WorkBasedProgram {
  "@context": string;
  "@type": "WorkBasedProgram";

  /**
   * <https://schema.org/trainingSalary>
   **/
  trainingSalary: all.OneOrMany<all.MonetaryAmountDistribution>;

  /**
   * <https://schema.org/occupationalCategory>
   **/
  occupationalCategory: all.OneOrMany<all.WorkBasedProgramOccupationalCategoryFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.WorkBasedProgramProviderFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.WorkBasedProgramEndDateFieldEnum>;

  /**
   * <https://schema.org/educationalCredentialAwarded>
   **/
  educationalCredentialAwarded: all.OneOrMany<all.WorkBasedProgramEducationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/salaryUponCompletion>
   **/
  salaryUponCompletion: all.OneOrMany<all.MonetaryAmountDistribution>;

  /**
   * <https://schema.org/programPrerequisites>
   **/
  programPrerequisites: all.OneOrMany<all.WorkBasedProgramProgramPrerequisitesFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.WorkBasedProgramOffersFieldEnum>;

  /**
   * <https://schema.org/programType>
   **/
  programType: all.OneOrMany<all.WorkBasedProgramProgramTypeFieldEnum>;

  /**
   * <https://schema.org/timeToComplete>
   **/
  timeToComplete: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/numberOfCredits>
   **/
  numberOfCredits: all.OneOrMany<all.WorkBasedProgramNumberOfCreditsFieldEnum>;

  /**
   * <https://schema.org/timeOfDay>
   **/
  timeOfDay: all.OneOrMany<string>;

  /**
   * <https://schema.org/termsPerYear>
   **/
  termsPerYear: all.OneOrMany<number>;

  /**
   * <https://schema.org/financialAidEligible>
   **/
  financialAidEligible: all.OneOrMany<all.WorkBasedProgramFinancialAidEligibleFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.WorkBasedProgramStartDateFieldEnum>;

  /**
   * <https://schema.org/dayOfWeek>
   **/
  dayOfWeek: all.OneOrMany<all.DayOfWeekEnum>;

  /**
   * <https://schema.org/occupationalCredentialAwarded>
   **/
  occupationalCredentialAwarded: all.OneOrMany<all.WorkBasedProgramOccupationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/educationalProgramMode>
   **/
  educationalProgramMode: all.OneOrMany<all.WorkBasedProgramEducationalProgramModeFieldEnum>;

  /**
   * <https://schema.org/hasCourse>
   **/
  hasCourse: all.OneOrMany<all.Course>;

  /**
   * <https://schema.org/typicalCreditsPerTerm>
   **/
  typicalCreditsPerTerm: all.OneOrMany<all.WorkBasedProgramTypicalCreditsPerTermFieldEnum>;

  /**
   * <https://schema.org/applicationStartDate>
   **/
  applicationStartDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/maximumEnrollment>
   **/
  maximumEnrollment: all.OneOrMany<number>;

  /**
   * <https://schema.org/applicationDeadline>
   **/
  applicationDeadline: all.OneOrMany<all.WorkBasedProgramApplicationDeadlineFieldEnum>;

  /**
   * <https://schema.org/termDuration>
   **/
  termDuration: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.WorkBasedProgramMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.WorkBasedProgramIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.WorkBasedProgramDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.WorkBasedProgramSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.WorkBasedProgramAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.WorkBasedProgramImageFieldEnum>;
}
