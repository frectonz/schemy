import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MemberProgramTierAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MemberProgramTier>
 **/
export interface MemberProgramTier {
  "@context": string;
  "@type": "MemberProgramTier";

  /**
   * <https://schema.org/hasTierBenefit>
   **/
  hasTierBenefit: all.OneOrMany<all.TierBenefitEnumerationEnum>;

  /**
   * <https://schema.org/hasTierRequirement>
   **/
  hasTierRequirement: all.OneOrMany<all.MemberProgramTierHasTierRequirementFieldEnum>;

  /**
   * <https://schema.org/membershipPointsEarned>
   **/
  membershipPointsEarned: all.OneOrMany<all.MemberProgramTierMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/isTierOf>
   **/
  isTierOf: all.OneOrMany<all.MemberProgram>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MemberProgramTierMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MemberProgramTierIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MemberProgramTierDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MemberProgramTierSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MemberProgramTierAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MemberProgramTierImageFieldEnum>;
}
