import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ShippingRateSettingsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ShippingRateSettings>
 **/
export interface ShippingRateSettings {
  "@context": string;
  "@type": "ShippingRateSettings";

  /**
   * <https://schema.org/shippingRate>
   **/
  shippingRate: all.OneOrMany<all.ShippingRateSettingsShippingRateFieldEnum>;

  /**
   * <https://schema.org/orderPercentage>
   **/
  orderPercentage: all.OneOrMany<number>;

  /**
   * <https://schema.org/freeShippingThreshold>
   **/
  freeShippingThreshold: all.OneOrMany<all.ShippingRateSettingsFreeShippingThresholdFieldEnum>;

  /**
   * <https://schema.org/weightPercentage>
   **/
  weightPercentage: all.OneOrMany<number>;

  /**
   * <https://schema.org/doesNotShip>
   **/
  doesNotShip: all.OneOrMany<string>;

  /**
   * <https://schema.org/shippingDestination>
   **/
  shippingDestination: all.OneOrMany<all.DefinedRegion>;

  /**
   * <https://schema.org/isUnlabelledFallback>
   **/
  isUnlabelledFallback: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ShippingRateSettingsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ShippingRateSettingsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ShippingRateSettingsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ShippingRateSettingsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ShippingRateSettingsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ShippingRateSettingsImageFieldEnum>;
}
