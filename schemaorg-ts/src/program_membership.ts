import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ProgramMembershipAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ProgramMembership>
 **/
export interface ProgramMembership {
  "@context": string;
  "@type": "ProgramMembership";

  /**
   * <https://schema.org/membershipPointsEarned>
   **/
  membershipPointsEarned: all.OneOrMany<all.ProgramMembershipMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/hostingOrganization>
   **/
  hostingOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/membershipNumber>
   **/
  membershipNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/programName>
   **/
  programName: all.OneOrMany<string>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.ProgramMembershipMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.ProgramMembershipMemberFieldEnum>;

  /**
   * <https://schema.org/program>
   **/
  program: all.OneOrMany<all.MemberProgram>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ProgramMembershipMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ProgramMembershipIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ProgramMembershipDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ProgramMembershipSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ProgramMembershipAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ProgramMembershipImageFieldEnum>;
}
