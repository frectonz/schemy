import type * as all from "./index";

/**
 * <https://schema.org/termsOfService>
 **/
export type WebAPITermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type WebAPIAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/WebAPI>
 **/
export interface WebAPI {
  "@context": string;
  "@type": "WebAPI";

  /**
   * <https://schema.org/documentation>
   **/
  documentation: all.OneOrMany<all.WebAPIDocumentationFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.WebAPIProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.WebAPIIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.WebAPIBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.WebAPIServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.WebAPIIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.WebAPIOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.WebAPITermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.WebAPICategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.WebAPILogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.WebAPIBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.WebAPIAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.WebAPIServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.WebAPIMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.WebAPIIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.WebAPIDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.WebAPISubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.WebAPIAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.WebAPIImageFieldEnum>;
}
