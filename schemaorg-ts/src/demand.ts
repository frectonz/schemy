import type * as all from "./index";

/**
 * <https://schema.org/availabilityStarts>
 **/
export type DemandAvailabilityStartsFieldEnum = string;

/**
 * <https://schema.org/gtin>
 **/
export type DemandGtinFieldEnum = string;

/**
 * <https://schema.org/validFrom>
 **/
export type DemandValidFromFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type DemandAsinFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type DemandValidThroughFieldEnum = string;

/**
 * <https://schema.org/availabilityEnds>
 **/
export type DemandAvailabilityEndsFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DemandAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Demand>
 **/
export interface Demand {
  "@context": string;
  "@type": "Demand";

  /**
   * <https://schema.org/eligibleQuantity>
   **/
  eligibleQuantity: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/eligibleRegion>
   **/
  eligibleRegion: all.OneOrMany<all.DemandEligibleRegionFieldEnum>;

  /**
   * <https://schema.org/availabilityStarts>
   **/
  availabilityStarts: all.OneOrMany<all.DemandAvailabilityStartsFieldEnum>;

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
   * <https://schema.org/mpn>
   **/
  mpn: all.OneOrMany<string>;

  /**
   * <https://schema.org/serialNumber>
   **/
  serialNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/gtin12>
   **/
  gtin12: all.OneOrMany<string>;

  /**
   * <https://schema.org/gtin13>
   **/
  gtin13: all.OneOrMany<string>;

  /**
   * <https://schema.org/deliveryLeadTime>
   **/
  deliveryLeadTime: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/seller>
   **/
  seller: all.OneOrMany<all.DemandSellerFieldEnum>;

  /**
   * <https://schema.org/advanceBookingRequirement>
   **/
  advanceBookingRequirement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/gtin>
   **/
  gtin: all.OneOrMany<all.DemandGtinFieldEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.DemandValidFromFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.DemandAsinFieldEnum>;

  /**
   * <https://schema.org/availableDeliveryMethod>
   **/
  availableDeliveryMethod: all.OneOrMany<all.DeliveryMethodEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.DemandValidThroughFieldEnum>;

  /**
   * <https://schema.org/warranty>
   **/
  warranty: all.OneOrMany<all.WarrantyPromise>;

  /**
   * <https://schema.org/businessFunction>
   **/
  businessFunction: all.OneOrMany<all.BusinessFunction>;

  /**
   * <https://schema.org/eligibleTransactionVolume>
   **/
  eligibleTransactionVolume: all.OneOrMany<all.PriceSpecification>;

  /**
   * <https://schema.org/itemCondition>
   **/
  itemCondition: all.OneOrMany<all.OfferItemConditionEnum>;

  /**
   * <https://schema.org/includesObject>
   **/
  includesObject: all.OneOrMany<all.TypeAndQuantityNode>;

  /**
   * <https://schema.org/ineligibleRegion>
   **/
  ineligibleRegion: all.OneOrMany<all.DemandIneligibleRegionFieldEnum>;

  /**
   * <https://schema.org/gtin14>
   **/
  gtin14: all.OneOrMany<string>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.DemandAreaServedFieldEnum>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.DemandAcceptedPaymentMethodFieldEnum>;

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
  itemOffered: all.OneOrMany<all.DemandItemOfferedFieldEnum>;

  /**
   * <https://schema.org/availabilityEnds>
   **/
  availabilityEnds: all.OneOrMany<all.DemandAvailabilityEndsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DemandMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DemandIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DemandDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DemandSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DemandAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DemandImageFieldEnum>;
}
