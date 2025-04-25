import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OwnershipInfoAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OwnershipInfo>
 **/
export interface OwnershipInfo {
  "@context": string;
  "@type": "OwnershipInfo";

  /**
   * <https://schema.org/ownedFrom>
   **/
  ownedFrom: all.OneOrMany<string>;

  /**
   * <https://schema.org/acquiredFrom>
   **/
  acquiredFrom: all.OneOrMany<all.OwnershipInfoAcquiredFromFieldEnum>;

  /**
   * <https://schema.org/typeOfGood>
   **/
  typeOfGood: all.OneOrMany<all.OwnershipInfoTypeOfGoodFieldEnum>;

  /**
   * <https://schema.org/ownedThrough>
   **/
  ownedThrough: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OwnershipInfoMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OwnershipInfoIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OwnershipInfoDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OwnershipInfoSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OwnershipInfoAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OwnershipInfoImageFieldEnum>;
}
