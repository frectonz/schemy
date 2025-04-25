import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MonetaryGrantAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MonetaryGrant>
 **/
export interface MonetaryGrant {
  "@context": string;
  "@type": "MonetaryGrant";

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.MonetaryGrantAmountFieldEnum>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.MonetaryGrantFunderFieldEnum>;

  /**
   * <https://schema.org/fundedItem>
   **/
  fundedItem: all.OneOrMany<all.MonetaryGrantFundedItemFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.MonetaryGrantSponsorFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MonetaryGrantMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MonetaryGrantIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MonetaryGrantDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MonetaryGrantSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MonetaryGrantAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MonetaryGrantImageFieldEnum>;
}
