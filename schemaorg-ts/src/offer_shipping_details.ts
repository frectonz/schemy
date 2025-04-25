import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OfferShippingDetailsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OfferShippingDetails>
 **/
export interface OfferShippingDetails {
  "@context": string;
  "@type": "OfferShippingDetails";

  /**
   * <https://schema.org/shippingRate>
   **/
  shippingRate: all.OneOrMany<all.OfferShippingDetailsShippingRateFieldEnum>;

  /**
   * <https://schema.org/validForMemberTier>
   **/
  validForMemberTier: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/weight>
   **/
  weight: all.OneOrMany<all.OfferShippingDetailsWeightFieldEnum>;

  /**
   * <https://schema.org/deliveryTime>
   **/
  deliveryTime: all.OneOrMany<all.ShippingDeliveryTime>;

  /**
   * <https://schema.org/shippingOrigin>
   **/
  shippingOrigin: all.OneOrMany<all.DefinedRegion>;

  /**
   * <https://schema.org/width>
   **/
  width: all.OneOrMany<all.OfferShippingDetailsWidthFieldEnum>;

  /**
   * <https://schema.org/doesNotShip>
   **/
  doesNotShip: all.OneOrMany<string>;

  /**
   * <https://schema.org/depth>
   **/
  depth: all.OneOrMany<all.OfferShippingDetailsDepthFieldEnum>;

  /**
   * <https://schema.org/height>
   **/
  height: all.OneOrMany<all.OfferShippingDetailsHeightFieldEnum>;

  /**
   * <https://schema.org/shippingDestination>
   **/
  shippingDestination: all.OneOrMany<all.DefinedRegion>;

  /**
   * <https://schema.org/hasShippingService>
   **/
  hasShippingService: all.OneOrMany<all.ShippingService>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OfferShippingDetailsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OfferShippingDetailsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OfferShippingDetailsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OfferShippingDetailsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OfferShippingDetailsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OfferShippingDetailsImageFieldEnum>;
}
