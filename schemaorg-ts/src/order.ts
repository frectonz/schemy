import type * as all from "./index";

/**
 * <https://schema.org/paymentDueDate>
 **/
export type OrderPaymentDueDateFieldEnum = string;

/**
 * <https://schema.org/orderDate>
 **/
export type OrderOrderDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type OrderAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Order>
 **/
export interface Order {
  "@context": string;
  "@type": "Order";

  /**
   * <https://schema.org/paymentMethod>
   **/
  paymentMethod: all.OneOrMany<all.OrderPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/billingAddress>
   **/
  billingAddress: all.OneOrMany<all.PostalAddress>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.OrderBrokerFieldEnum>;

  /**
   * <https://schema.org/merchant>
   **/
  merchant: all.OneOrMany<all.OrderMerchantFieldEnum>;

  /**
   * <https://schema.org/paymentDueDate>
   **/
  paymentDueDate: all.OneOrMany<all.OrderPaymentDueDateFieldEnum>;

  /**
   * <https://schema.org/seller>
   **/
  seller: all.OneOrMany<all.OrderSellerFieldEnum>;

  /**
   * <https://schema.org/isGift>
   **/
  isGift: all.OneOrMany<string>;

  /**
   * <https://schema.org/orderStatus>
   **/
  orderStatus: all.OneOrMany<all.OrderStatusEnum>;

  /**
   * <https://schema.org/acceptedOffer>
   **/
  acceptedOffer: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/orderNumber>
   **/
  orderNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/orderDate>
   **/
  orderDate: all.OneOrMany<all.OrderOrderDateFieldEnum>;

  /**
   * <https://schema.org/customer>
   **/
  customer: all.OneOrMany<all.OrderCustomerFieldEnum>;

  /**
   * <https://schema.org/paymentMethodId>
   **/
  paymentMethodId: all.OneOrMany<string>;

  /**
   * <https://schema.org/orderDelivery>
   **/
  orderDelivery: all.OneOrMany<all.ParcelDelivery>;

  /**
   * <https://schema.org/discountCode>
   **/
  discountCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/discountCurrency>
   **/
  discountCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/partOfInvoice>
   **/
  partOfInvoice: all.OneOrMany<all.Invoice>;

  /**
   * <https://schema.org/orderedItem>
   **/
  orderedItem: all.OneOrMany<all.OrderOrderedItemFieldEnum>;

  /**
   * <https://schema.org/paymentDue>
   **/
  paymentDue: all.OneOrMany<string>;

  /**
   * <https://schema.org/discount>
   **/
  discount: all.OneOrMany<all.OrderDiscountFieldEnum>;

  /**
   * <https://schema.org/confirmationNumber>
   **/
  confirmationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/paymentUrl>
   **/
  paymentUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OrderMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OrderIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OrderDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OrderSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OrderAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OrderImageFieldEnum>;
}
