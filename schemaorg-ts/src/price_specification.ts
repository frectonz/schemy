import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type PriceSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type PriceSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PriceSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PriceSpecification>
 **/
export interface PriceSpecification {
  "@context": string;
  "@type": "PriceSpecification";

  /**
   * <https://schema.org/minPrice>
   **/
  minPrice: all.OneOrMany<number>;

  /**
   * <https://schema.org/eligibleQuantity>
   **/
  eligibleQuantity: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/maxPrice>
   **/
  maxPrice: all.OneOrMany<number>;

  /**
   * <https://schema.org/validForMemberTier>
   **/
  validForMemberTier: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/membershipPointsEarned>
   **/
  membershipPointsEarned: all.OneOrMany<all.PriceSpecificationMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.PriceSpecificationPriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.PriceSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.PriceSpecificationValidThroughFieldEnum>;

  /**
   * <https://schema.org/valueAddedTaxIncluded>
   **/
  valueAddedTaxIncluded: all.OneOrMany<string>;

  /**
   * <https://schema.org/eligibleTransactionVolume>
   **/
  eligibleTransactionVolume: all.OneOrMany<all.PriceSpecification>;

  /**
   * <https://schema.org/priceCurrency>
   **/
  priceCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PriceSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PriceSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PriceSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PriceSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PriceSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PriceSpecificationImageFieldEnum>;
}
