import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MemberProgramAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MemberProgram>
 **/
export interface MemberProgram {
  "@context": string;
  "@type": "MemberProgram";

  /**
   * <https://schema.org/hasTiers>
   **/
  hasTiers: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/hostingOrganization>
   **/
  hostingOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MemberProgramMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MemberProgramIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MemberProgramDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MemberProgramSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MemberProgramAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MemberProgramImageFieldEnum>;
}
