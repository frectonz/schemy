import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ShippingDeliveryTimeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ShippingDeliveryTime>
 **/
export interface ShippingDeliveryTime {
  "@context": string;
  "@type": "ShippingDeliveryTime";

  /**
   * <https://schema.org/businessDays>
   **/
  businessDays: all.OneOrMany<all.ShippingDeliveryTimeBusinessDaysFieldEnum>;

  /**
   * <https://schema.org/cutoffTime>
   **/
  cutoffTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/handlingTime>
   **/
  handlingTime: all.OneOrMany<all.ShippingDeliveryTimeHandlingTimeFieldEnum>;

  /**
   * <https://schema.org/transitTime>
   **/
  transitTime: all.OneOrMany<all.ShippingDeliveryTimeTransitTimeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ShippingDeliveryTimeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ShippingDeliveryTimeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ShippingDeliveryTimeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ShippingDeliveryTimeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ShippingDeliveryTimeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ShippingDeliveryTimeImageFieldEnum>;
}
