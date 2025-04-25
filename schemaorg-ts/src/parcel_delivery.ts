import type * as all from "./index";

/**
 * <https://schema.org/expectedArrivalUntil>
 **/
export type ParcelDeliveryExpectedArrivalUntilFieldEnum = string;

/**
 * <https://schema.org/expectedArrivalFrom>
 **/
export type ParcelDeliveryExpectedArrivalFromFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ParcelDeliveryAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ParcelDelivery>
 **/
export interface ParcelDelivery {
  "@context": string;
  "@type": "ParcelDelivery";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.ParcelDeliveryProviderFieldEnum>;

  /**
   * <https://schema.org/hasDeliveryMethod>
   **/
  hasDeliveryMethod: all.OneOrMany<all.DeliveryMethodEnum>;

  /**
   * <https://schema.org/expectedArrivalUntil>
   **/
  expectedArrivalUntil: all.OneOrMany<all.ParcelDeliveryExpectedArrivalUntilFieldEnum>;

  /**
   * <https://schema.org/partOfOrder>
   **/
  partOfOrder: all.OneOrMany<all.Order>;

  /**
   * <https://schema.org/trackingNumber>
   **/
  trackingNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/itemShipped>
   **/
  itemShipped: all.OneOrMany<all.Product>;

  /**
   * <https://schema.org/deliveryAddress>
   **/
  deliveryAddress: all.OneOrMany<all.PostalAddress>;

  /**
   * <https://schema.org/deliveryStatus>
   **/
  deliveryStatus: all.OneOrMany<all.DeliveryEvent>;

  /**
   * <https://schema.org/originAddress>
   **/
  originAddress: all.OneOrMany<all.PostalAddress>;

  /**
   * <https://schema.org/expectedArrivalFrom>
   **/
  expectedArrivalFrom: all.OneOrMany<all.ParcelDeliveryExpectedArrivalFromFieldEnum>;

  /**
   * <https://schema.org/carrier>
   **/
  carrier: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/trackingUrl>
   **/
  trackingUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ParcelDeliveryMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ParcelDeliveryIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ParcelDeliveryDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ParcelDeliverySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ParcelDeliveryAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ParcelDeliveryImageFieldEnum>;
}
