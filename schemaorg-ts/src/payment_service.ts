import type * as all from "./index";

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type PaymentServiceFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/termsOfService>
 **/
export type PaymentServiceTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PaymentServiceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PaymentService>
 **/
export interface PaymentService {
  "@context": string;
  "@type": "PaymentService";

  /**
   * <https://schema.org/feesAndCommissionsSpecification>
   **/
  feesAndCommissionsSpecification: all.OneOrMany<all.PaymentServiceFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.PaymentServiceInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.PaymentServiceAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.PaymentServiceProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/isSimilarTo>
   **/
  isSimilarTo: all.OneOrMany<all.PaymentServiceIsSimilarToFieldEnum>;

  /**
   * <https://schema.org/availableChannel>
   **/
  availableChannel: all.OneOrMany<all.ServiceChannel>;

  /**
   * <https://schema.org/hoursAvailable>
   **/
  hoursAvailable: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/broker>
   **/
  broker: all.OneOrMany<all.PaymentServiceBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.PaymentServiceServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.PaymentServiceIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.PaymentServiceOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.PaymentServiceTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.PaymentServiceCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.PaymentServiceLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.PaymentServiceBrandFieldEnum>;

  /**
   * <https://schema.org/providerMobility>
   **/
  providerMobility: all.OneOrMany<string>;

  /**
   * <https://schema.org/audience>
   **/
  audience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/slogan>
   **/
  slogan: all.OneOrMany<string>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/produces>
   **/
  produces: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.PaymentServiceAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.PaymentServiceServiceTypeFieldEnum>;

  /**
   * <https://schema.org/serviceOutput>
   **/
  serviceOutput: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PaymentServiceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PaymentServiceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PaymentServiceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PaymentServiceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PaymentServiceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PaymentServiceImageFieldEnum>;

  /**
   * <https://schema.org/paymentMethodType>
   **/
  paymentMethodType: all.OneOrMany<all.PaymentMethodTypeEnum>;
}
