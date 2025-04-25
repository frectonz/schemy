import type * as all from "./index";

/**
 * <https://schema.org/availabilityStarts>
 **/
export type OfferForLeaseAvailabilityStartsFieldEnum = string;

/**
 * <https://schema.org/gtin>
 **/
export type OfferForLeaseGtinFieldEnum = string;

/**
 * <https://schema.org/validFrom>
 **/
export type OfferForLeaseValidFromFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type OfferForLeaseAsinFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type OfferForLeaseValidThroughFieldEnum = string;

/**
 * <https://schema.org/availabilityEnds>
 **/
export type OfferForLeaseAvailabilityEndsFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type OfferForLeaseAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OfferForLease>
 **/
export interface OfferForLease {
  "@context": string;
  "@type": "OfferForLease";

  /**
   * <https://schema.org/priceValidUntil>
   **/
  priceValidUntil: all.OneOrMany<string>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/eligibleQuantity>
   **/
  eligibleQuantity: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/eligibleRegion>
   **/
  eligibleRegion: all.OneOrMany<all.OfferForLeaseEligibleRegionFieldEnum>;

  /**
   * <https://schema.org/availabilityStarts>
   **/
  availabilityStarts: all.OneOrMany<all.OfferForLeaseAvailabilityStartsFieldEnum>;

  /**
   * <https://schema.org/sku>
   **/
  sku: all.OneOrMany<string>;

  /**
   * <https://schema.org/priceSpecification>
   **/
  priceSpecification: all.OneOrMany<all.PriceSpecification>;

  /**
   * <https://schema.org/eligibleCustomerType>
   **/
  eligibleCustomerType: all.OneOrMany<all.BusinessEntityType>;

  /**
   * <https://schema.org/hasMerchantReturnPolicy>
   **/
  hasMerchantReturnPolicy: all.OneOrMany<all.MerchantReturnPolicy>;

  /**
   * <https://schema.org/validForMemberTier>
   **/
  validForMemberTier: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/availability>
   **/
  availability: all.OneOrMany<all.ItemAvailabilityEnum>;

  /**
   * <https://schema.org/inventoryLevel>
   **/
  inventoryLevel: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/eligibleDuration>
   **/
  eligibleDuration: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/shippingDetails>
   **/
  shippingDetails: all.OneOrMany<all.OfferShippingDetails>;

  /**
   * <https://schema.org/mpn>
   **/
  mpn: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasGS1DigitalLink>
   **/
  hasGS1DigitalLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/serialNumber>
   **/
  serialNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/gtin12>
   **/
  gtin12: all.OneOrMany<string>;

  /**
   * <https://schema.org/leaseLength>
   **/
  leaseLength: all.OneOrMany<all.OfferForLeaseLeaseLengthFieldEnum>;

  /**
   * <https://schema.org/gtin13>
   **/
  gtin13: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMeasurement>
   **/
  hasMeasurement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/deliveryLeadTime>
   **/
  deliveryLeadTime: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/seller>
   **/
  seller: all.OneOrMany<all.OfferForLeaseSellerFieldEnum>;

  /**
   * <https://schema.org/advanceBookingRequirement>
   **/
  advanceBookingRequirement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/gtin>
   **/
  gtin: all.OneOrMany<all.OfferForLeaseGtinFieldEnum>;

  /**
   * <https://schema.org/price>
   **/
  price: all.OneOrMany<all.OfferForLeasePriceFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.OfferForLeaseValidFromFieldEnum>;

  /**
   * <https://schema.org/mobileUrl>
   **/
  mobileUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.OfferForLeaseCategoryFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.OfferForLeaseAsinFieldEnum>;

  /**
   * <https://schema.org/addOn>
   **/
  addOn: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/availableDeliveryMethod>
   **/
  availableDeliveryMethod: all.OneOrMany<all.DeliveryMethodEnum>;

  /**
   * <https://schema.org/offeredBy>
   **/
  offeredBy: all.OneOrMany<all.OfferForLeaseOfferedByFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.OfferForLeaseValidThroughFieldEnum>;

  /**
   * <https://schema.org/isFamilyFriendly>
   **/
  isFamilyFriendly: all.OneOrMany<string>;

  /**
   * <https://schema.org/warranty>
   **/
  warranty: all.OneOrMany<all.WarrantyPromise>;

  /**
   * <https://schema.org/hasAdultConsideration>
   **/
  hasAdultConsideration: all.OneOrMany<all.AdultOrientedEnumerationEnum>;

  /**
   * <https://schema.org/businessFunction>
   **/
  businessFunction: all.OneOrMany<all.BusinessFunction>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/eligibleTransactionVolume>
   **/
  eligibleTransactionVolume: all.OneOrMany<all.PriceSpecification>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/itemCondition>
   **/
  itemCondition: all.OneOrMany<all.OfferItemConditionEnum>;

  /**
   * <https://schema.org/includesObject>
   **/
  includesObject: all.OneOrMany<all.TypeAndQuantityNode>;

  /**
   * <https://schema.org/priceCurrency>
   **/
  priceCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/ineligibleRegion>
   **/
  ineligibleRegion: all.OneOrMany<all.OfferForLeaseIneligibleRegionFieldEnum>;

  /**
   * <https://schema.org/gtin14>
   **/
  gtin14: all.OneOrMany<string>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.OfferForLeaseAreaServedFieldEnum>;

  /**
   * <https://schema.org/checkoutPageURLTemplate>
   **/
  checkoutPageURLTemplate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.OfferForLeaseAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/gtin8>
   **/
  gtin8: all.OneOrMany<string>;

  /**
   * <https://schema.org/availableAtOrFrom>
   **/
  availableAtOrFrom: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/itemOffered>
   **/
  itemOffered: all.OneOrMany<all.OfferForLeaseItemOfferedFieldEnum>;

  /**
   * <https://schema.org/availabilityEnds>
   **/
  availabilityEnds: all.OneOrMany<all.OfferForLeaseAvailabilityEndsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OfferForLeaseMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OfferForLeaseIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OfferForLeaseDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OfferForLeaseSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OfferForLeaseAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OfferForLeaseImageFieldEnum>;
}
