import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OrderItemAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OrderItem>
 **/
export interface OrderItem {
  "@context": string;
  "@type": "OrderItem";

  /**
   * <https://schema.org/orderQuantity>
   **/
  orderQuantity: all.OneOrMany<all.OrderItemOrderQuantityFieldEnum>;

  /**
   * <https://schema.org/orderItemNumber>
   **/
  orderItemNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/orderDelivery>
   **/
  orderDelivery: all.OneOrMany<all.ParcelDelivery>;

  /**
   * <https://schema.org/orderItemStatus>
   **/
  orderItemStatus: all.OneOrMany<all.OrderStatusEnum>;

  /**
   * <https://schema.org/orderedItem>
   **/
  orderedItem: all.OneOrMany<all.OrderItemOrderedItemFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OrderItemMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OrderItemIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OrderItemDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OrderItemSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OrderItemAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OrderItemImageFieldEnum>;
}
