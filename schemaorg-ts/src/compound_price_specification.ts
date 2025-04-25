import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type CompoundPriceSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type CompoundPriceSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type CompoundPriceSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/CompoundPriceSpecification>
 **/
export interface CompoundPriceSpecification {
  "@context": string;
  "@type": "CompoundPriceSpecification";

  /**
   * <https://schema.org/priceType>
   **/
  priceType: all.OneOrMany<all.CompoundPriceSpecificationPriceTypeFieldEnum>;

  /**
   * <https://schema.org/priceComponent>
   **/
  priceComponent: all.OneOrMany<all.UnitPriceSpecification>;

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
  membershipPointsEarned: all.OneOrMany<all.CompoundPriceSpecificationMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.CompoundPriceSpecificationPriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.CompoundPriceSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.CompoundPriceSpecificationValidThroughFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.CompoundPriceSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.CompoundPriceSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.CompoundPriceSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.CompoundPriceSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.CompoundPriceSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.CompoundPriceSpecificationImageFieldEnum>;
}
