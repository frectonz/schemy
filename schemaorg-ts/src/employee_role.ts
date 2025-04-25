import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type EmployeeRoleEndDateFieldEnum = string;

/**
 * <https://schema.org/namedPosition>
 **/
export type EmployeeRoleNamedPositionFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type EmployeeRoleStartDateFieldEnum = string;

/**
 * <https://schema.org/roleName>
 **/
export type EmployeeRoleRoleNameFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type EmployeeRoleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EmployeeRole>
 **/
export interface EmployeeRole {
  "@context": string;
  "@type": "EmployeeRole";

  /**
   * <https://schema.org/baseSalary>
   **/
  baseSalary: all.OneOrMany<all.EmployeeRoleBaseSalaryFieldEnum>;

  /**
   * <https://schema.org/salaryCurrency>
   **/
  salaryCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/numberedPosition>
   **/
  numberedPosition: all.OneOrMany<number>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.EmployeeRoleEndDateFieldEnum>;

  /**
   * <https://schema.org/namedPosition>
   **/
  namedPosition: all.OneOrMany<all.EmployeeRoleNamedPositionFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.EmployeeRoleStartDateFieldEnum>;

  /**
   * <https://schema.org/roleName>
   **/
  roleName: all.OneOrMany<all.EmployeeRoleRoleNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EmployeeRoleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EmployeeRoleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EmployeeRoleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EmployeeRoleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EmployeeRoleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EmployeeRoleImageFieldEnum>;
}
