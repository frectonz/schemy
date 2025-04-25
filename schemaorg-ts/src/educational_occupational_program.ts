import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type EducationalOccupationalProgramEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type EducationalOccupationalProgramStartDateFieldEnum = string;

/**
 * <https://schema.org/educationalProgramMode>
 **/
export type EducationalOccupationalProgramEducationalProgramModeFieldEnum =
  string;

/**
 * <https://schema.org/applicationDeadline>
 **/
export type EducationalOccupationalProgramApplicationDeadlineFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type EducationalOccupationalProgramAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EducationalOccupationalProgram>
 **/
export interface EducationalOccupationalProgram {
  "@context": string;
  "@type": "EducationalOccupationalProgram";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.EducationalOccupationalProgramProviderFieldEnum>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.EducationalOccupationalProgramEndDateFieldEnum>;

  /**
   * <https://schema.org/educationalCredentialAwarded>
   **/
  educationalCredentialAwarded: all.OneOrMany<all.EducationalOccupationalProgramEducationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/trainingSalary>
   **/
  trainingSalary: all.OneOrMany<all.MonetaryAmountDistribution>;

  /**
   * <https://schema.org/salaryUponCompletion>
   **/
  salaryUponCompletion: all.OneOrMany<all.MonetaryAmountDistribution>;

  /**
   * <https://schema.org/programPrerequisites>
   **/
  programPrerequisites: all.OneOrMany<all.EducationalOccupationalProgramProgramPrerequisitesFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.EducationalOccupationalProgramOffersFieldEnum>;

  /**
   * <https://schema.org/occupationalCategory>
   **/
  occupationalCategory: all.OneOrMany<all.EducationalOccupationalProgramOccupationalCategoryFieldEnum>;

  /**
   * <https://schema.org/programType>
   **/
  programType: all.OneOrMany<all.EducationalOccupationalProgramProgramTypeFieldEnum>;

  /**
   * <https://schema.org/timeToComplete>
   **/
  timeToComplete: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/numberOfCredits>
   **/
  numberOfCredits: all.OneOrMany<all.EducationalOccupationalProgramNumberOfCreditsFieldEnum>;

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
  financialAidEligible: all.OneOrMany<all.EducationalOccupationalProgramFinancialAidEligibleFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.EducationalOccupationalProgramStartDateFieldEnum>;

  /**
   * <https://schema.org/dayOfWeek>
   **/
  dayOfWeek: all.OneOrMany<all.DayOfWeekEnum>;

  /**
   * <https://schema.org/occupationalCredentialAwarded>
   **/
  occupationalCredentialAwarded: all.OneOrMany<all.EducationalOccupationalProgramOccupationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/educationalProgramMode>
   **/
  educationalProgramMode: all.OneOrMany<all.EducationalOccupationalProgramEducationalProgramModeFieldEnum>;

  /**
   * <https://schema.org/hasCourse>
   **/
  hasCourse: all.OneOrMany<all.Course>;

  /**
   * <https://schema.org/typicalCreditsPerTerm>
   **/
  typicalCreditsPerTerm: all.OneOrMany<all.EducationalOccupationalProgramTypicalCreditsPerTermFieldEnum>;

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
  applicationDeadline: all.OneOrMany<all.EducationalOccupationalProgramApplicationDeadlineFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.EducationalOccupationalProgramMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EducationalOccupationalProgramIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EducationalOccupationalProgramDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EducationalOccupationalProgramSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EducationalOccupationalProgramAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EducationalOccupationalProgramImageFieldEnum>;
}
