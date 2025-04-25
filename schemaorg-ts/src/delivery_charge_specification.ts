import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type DeliveryChargeSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type DeliveryChargeSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DeliveryChargeSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DeliveryChargeSpecification>
 **/
export interface DeliveryChargeSpecification {
  "@context": string;
  "@type": "DeliveryChargeSpecification";

  /**
   * <https://schema.org/eligibleRegion>
   **/
  eligibleRegion: all.OneOrMany<all.DeliveryChargeSpecificationEligibleRegionFieldEnum>;

  /**
   * <https://schema.org/appliesToDeliveryMethod>
   **/
  appliesToDeliveryMethod: all.OneOrMany<all.DeliveryMethodEnum>;

  /**
   * <https://schema.org/ineligibleRegion>
   **/
  ineligibleRegion: all.OneOrMany<all.DeliveryChargeSpecificationIneligibleRegionFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.DeliveryChargeSpecificationAreaServedFieldEnum>;

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
  membershipPointsEarned: all.OneOrMany<all.DeliveryChargeSpecificationMembershipPointsEarnedFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.DeliveryChargeSpecificationPriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.DeliveryChargeSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.DeliveryChargeSpecificationValidThroughFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.DeliveryChargeSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DeliveryChargeSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DeliveryChargeSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DeliveryChargeSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DeliveryChargeSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DeliveryChargeSpecificationImageFieldEnum>;
}
