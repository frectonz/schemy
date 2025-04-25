import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ShippingConditionsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ShippingConditions>
 **/
export interface ShippingConditions {
  "@context": string;
  "@type": "ShippingConditions";

  /**
   * <https://schema.org/numItems>
   **/
  numItems: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/shippingRate>
   **/
  shippingRate: all.OneOrMany<all.ShippingConditionsShippingRateFieldEnum>;

  /**
   * <https://schema.org/weight>
   **/
  weight: all.OneOrMany<all.ShippingConditionsWeightFieldEnum>;

  /**
   * <https://schema.org/orderValue>
   **/
  orderValue: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/seasonalOverride>
   **/
  seasonalOverride: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/shippingOrigin>
   **/
  shippingOrigin: all.OneOrMany<all.DefinedRegion>;

  /**
   * <https://schema.org/width>
   **/
  width: all.OneOrMany<all.ShippingConditionsWidthFieldEnum>;

  /**
   * <https://schema.org/doesNotShip>
   **/
  doesNotShip: all.OneOrMany<string>;

  /**
   * <https://schema.org/depth>
   **/
  depth: all.OneOrMany<all.ShippingConditionsDepthFieldEnum>;

  /**
   * <https://schema.org/height>
   **/
  height: all.OneOrMany<all.ShippingConditionsHeightFieldEnum>;

  /**
   * <https://schema.org/shippingDestination>
   **/
  shippingDestination: all.OneOrMany<all.DefinedRegion>;

  /**
   * <https://schema.org/transitTime>
   **/
  transitTime: all.OneOrMany<all.ShippingConditionsTransitTimeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ShippingConditionsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ShippingConditionsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ShippingConditionsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ShippingConditionsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ShippingConditionsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ShippingConditionsImageFieldEnum>;
}
