import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type PaymentChargeSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type PaymentChargeSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PaymentChargeSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PaymentChargeSpecification>
 **/
export interface PaymentChargeSpecification {
  "@context": string;
  "@type": "PaymentChargeSpecification";

  /**
   * <https://schema.org/appliesToPaymentMethod>
   **/
  appliesToPaymentMethod: all.OneOrMany<all.PaymentMethod>;

  /**
   * <https://schema.org/appliesToDeliveryMethod>
   **/
  appliesToDeliveryMethod: all.OneOrMany<all.DeliveryMethodEnum>;

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
  membershipPointsEarned: all.OneOrMany<all.PaymentChargeSpecificationMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.PaymentChargeSpecificationPriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.PaymentChargeSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.PaymentChargeSpecificationValidThroughFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.PaymentChargeSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PaymentChargeSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PaymentChargeSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PaymentChargeSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PaymentChargeSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PaymentChargeSpecificationImageFieldEnum>;
}
