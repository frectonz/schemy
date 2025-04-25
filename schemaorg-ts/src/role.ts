import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type RoleEndDateFieldEnum = string;

/**
 * <https://schema.org/namedPosition>
 **/
export type RoleNamedPositionFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type RoleStartDateFieldEnum = string;

/**
 * <https://schema.org/roleName>
 **/
export type RoleRoleNameFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type RoleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Role>
 **/
export interface Role {
  "@context": string;
  "@type": "Role";

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.RoleEndDateFieldEnum>;

  /**
   * <https://schema.org/namedPosition>
   **/
  namedPosition: all.OneOrMany<all.RoleNamedPositionFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.RoleStartDateFieldEnum>;

  /**
   * <https://schema.org/roleName>
   **/
  roleName: all.OneOrMany<all.RoleRoleNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RoleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RoleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RoleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RoleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RoleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RoleImageFieldEnum>;
}
