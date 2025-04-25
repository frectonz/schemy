import type * as all from "./index";

/**
 * <https://schema.org/paymentDueDate>
 **/
export type InvoicePaymentDueDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type InvoiceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Invoice>
 **/
export interface Invoice {
  "@context": string;
  "@type": "Invoice";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.InvoiceProviderFieldEnum>;

  /**
   * <https://schema.org/paymentMethod>
   **/
  paymentMethod: all.OneOrMany<all.InvoicePaymentMethodFieldEnum>;

  /**
   * <https://schema.org/scheduledPaymentDate>
   **/
  scheduledPaymentDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/paymentStatus>
   **/
  paymentStatus: all.OneOrMany<all.InvoicePaymentStatusFieldEnum>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.InvoiceBrokerFieldEnum>;

  /**
   * <https://schema.org/paymentDueDate>
   **/
  paymentDueDate: all.OneOrMany<all.InvoicePaymentDueDateFieldEnum>;

  /**
   * <https://schema.org/billingPeriod>
   **/
  billingPeriod: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/referencesOrder>
   **/
  referencesOrder: all.OneOrMany<all.Order>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.InvoiceCategoryFieldEnum>;

  /**
   * <https://schema.org/totalPaymentDue>
   **/
  totalPaymentDue: all.OneOrMany<all.InvoiceTotalPaymentDueFieldEnum>;

  /**
   * <https://schema.org/customer>
   **/
  customer: all.OneOrMany<all.InvoiceCustomerFieldEnum>;

  /**
   * <https://schema.org/paymentMethodId>
   **/
  paymentMethodId: all.OneOrMany<string>;

  /**
   * <https://schema.org/accountId>
   **/
  accountId: all.OneOrMany<string>;

  /**
   * <https://schema.org/paymentDue>
   **/
  paymentDue: all.OneOrMany<string>;

  /**
   * <https://schema.org/minimumPaymentDue>
   **/
  minimumPaymentDue: all.OneOrMany<all.InvoiceMinimumPaymentDueFieldEnum>;

  /**
   * <https://schema.org/confirmationNumber>
   **/
  confirmationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.InvoiceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.InvoiceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.InvoiceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.InvoiceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.InvoiceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.InvoiceImageFieldEnum>;
}
