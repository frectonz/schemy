import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ShippingServiceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ShippingService>
 **/
export interface ShippingService {
  "@context": string;
  "@type": "ShippingService";

  /**
   * <https://schema.org/validForMemberTier>
   **/
  validForMemberTier: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/shippingConditions>
   **/
  shippingConditions: all.OneOrMany<all.ShippingConditions>;

  /**
   * <https://schema.org/handlingTime>
   **/
  handlingTime: all.OneOrMany<all.ShippingServiceHandlingTimeFieldEnum>;

  /**
   * <https://schema.org/fulfillmentType>
   **/
  fulfillmentType: all.OneOrMany<all.FulfillmentTypeEnumerationEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ShippingServiceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ShippingServiceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ShippingServiceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ShippingServiceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ShippingServiceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ShippingServiceImageFieldEnum>;
}
