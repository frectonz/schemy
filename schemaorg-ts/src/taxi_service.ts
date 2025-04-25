import type * as all from "./index";

/**
 * <https://schema.org/termsOfService>
 **/
export type TaxiServiceTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TaxiServiceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TaxiService>
 **/
export interface TaxiService {
  "@context": string;
  "@type": "TaxiService";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.TaxiServiceProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.TaxiServiceIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.TaxiServiceBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.TaxiServiceServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.TaxiServiceIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.TaxiServiceOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.TaxiServiceTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.TaxiServiceCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.TaxiServiceLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.TaxiServiceBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.TaxiServiceAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.TaxiServiceServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.TaxiServiceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TaxiServiceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TaxiServiceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TaxiServiceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TaxiServiceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TaxiServiceImageFieldEnum>;
}
