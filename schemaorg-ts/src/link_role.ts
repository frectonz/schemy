import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type LinkRoleEndDateFieldEnum = string;

/**
 * <https://schema.org/namedPosition>
 **/
export type LinkRoleNamedPositionFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type LinkRoleStartDateFieldEnum = string;

/**
 * <https://schema.org/roleName>
 **/
export type LinkRoleRoleNameFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type LinkRoleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/LinkRole>
 **/
export interface LinkRole {
  "@context": string;
  "@type": "LinkRole";

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.LinkRoleInLanguageFieldEnum>;

  /**
   * <https://schema.org/linkRelationship>
   **/
  linkRelationship: all.OneOrMany<string>;

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.LinkRoleEndDateFieldEnum>;

  /**
   * <https://schema.org/namedPosition>
   **/
  namedPosition: all.OneOrMany<all.LinkRoleNamedPositionFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.LinkRoleStartDateFieldEnum>;

  /**
   * <https://schema.org/roleName>
   **/
  roleName: all.OneOrMany<all.LinkRoleRoleNameFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.LinkRoleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.LinkRoleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.LinkRoleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.LinkRoleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.LinkRoleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.LinkRoleImageFieldEnum>;
}
