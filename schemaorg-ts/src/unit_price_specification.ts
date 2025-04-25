import type * as all from "./index";

/**
 * <https://schema.org/unitCode>
 **/
export type UnitPriceSpecificationUnitCodeFieldEnum = string;

/**
 * <https://schema.org/validFrom>
 **/
export type UnitPriceSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type UnitPriceSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type UnitPriceSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/UnitPriceSpecification>
 **/
export interface UnitPriceSpecification {
  "@context": string;
  "@type": "UnitPriceSpecification";

  /**
   * <https://schema.org/billingIncrement>
   **/
  billingIncrement: all.OneOrMany<number>;

  /**
   * <https://schema.org/billingDuration>
   **/
  billingDuration: all.OneOrMany<all.UnitPriceSpecificationBillingDurationFieldEnum>;

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/priceType>
   **/
  priceType: all.OneOrMany<all.UnitPriceSpecificationPriceTypeFieldEnum>;

  /**
   * <https://schema.org/referenceQuantity>
   **/
  referenceQuantity: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.UnitPriceSpecificationUnitCodeFieldEnum>;

  /**
   * <https://schema.org/priceComponentType>
   **/
  priceComponentType: all.OneOrMany<all.PriceComponentTypeEnumerationEnum>;

  /**
   * <https://schema.org/billingStart>
   **/
  billingStart: all.OneOrMany<number>;

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
  membershipPointsEarned: all.OneOrMany<all.UnitPriceSpecificationMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.UnitPriceSpecificationPriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.UnitPriceSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.UnitPriceSpecificationValidThroughFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.UnitPriceSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.UnitPriceSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.UnitPriceSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.UnitPriceSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.UnitPriceSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.UnitPriceSpecificationImageFieldEnum>;
}
