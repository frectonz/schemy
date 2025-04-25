import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type OrganizationRoleEndDateFieldEnum = string;

/**
 * <https://schema.org/namedPosition>
 **/
export type OrganizationRoleNamedPositionFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type OrganizationRoleStartDateFieldEnum = string;

/**
 * <https://schema.org/roleName>
 **/
export type OrganizationRoleRoleNameFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type OrganizationRoleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OrganizationRole>
 **/
export interface OrganizationRole {
  "@context": string;
  "@type": "OrganizationRole";

  /**
   * <https://schema.org/numberedPosition>
   **/
  numberedPosition: all.OneOrMany<number>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.OrganizationRoleEndDateFieldEnum>;

  /**
   * <https://schema.org/namedPosition>
   **/
  namedPosition: all.OneOrMany<all.OrganizationRoleNamedPositionFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.OrganizationRoleStartDateFieldEnum>;

  /**
   * <https://schema.org/roleName>
   **/
  roleName: all.OneOrMany<all.OrganizationRoleRoleNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OrganizationRoleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OrganizationRoleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OrganizationRoleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OrganizationRoleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OrganizationRoleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OrganizationRoleImageFieldEnum>;
}
