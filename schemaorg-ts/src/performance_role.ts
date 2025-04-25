import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type PerformanceRoleEndDateFieldEnum = string;

/**
 * <https://schema.org/namedPosition>
 **/
export type PerformanceRoleNamedPositionFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type PerformanceRoleStartDateFieldEnum = string;

/**
 * <https://schema.org/roleName>
 **/
export type PerformanceRoleRoleNameFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PerformanceRoleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PerformanceRole>
 **/
export interface PerformanceRole {
  "@context": string;
  "@type": "PerformanceRole";

  /**
   * <https://schema.org/characterName>
   **/
  characterName: all.OneOrMany<string>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.PerformanceRoleEndDateFieldEnum>;

  /**
   * <https://schema.org/namedPosition>
   **/
  namedPosition: all.OneOrMany<all.PerformanceRoleNamedPositionFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.PerformanceRoleStartDateFieldEnum>;

  /**
   * <https://schema.org/roleName>
   **/
  roleName: all.OneOrMany<all.PerformanceRoleRoleNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PerformanceRoleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PerformanceRoleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PerformanceRoleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PerformanceRoleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PerformanceRoleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PerformanceRoleImageFieldEnum>;
}
