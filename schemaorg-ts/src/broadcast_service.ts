import type * as all from "./index";

/**
 * <https://schema.org/termsOfService>
 **/
export type BroadcastServiceTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BroadcastServiceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BroadcastService>
 **/
export interface BroadcastService {
  "@context": string;
  "@type": "BroadcastService";

  /**
   * <https://schema.org/parentService>
   **/
  parentService: all.OneOrMany<all.BroadcastService>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.BroadcastServiceInLanguageFieldEnum>;

  /**
   * <https://schema.org/broadcastFrequency>
   **/
  broadcastFrequency: all.OneOrMany<all.BroadcastServiceBroadcastFrequencyFieldEnum>;

  /**
   * <https://schema.org/broadcastTimezone>
   **/
  broadcastTimezone: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasBroadcastChannel>
   **/
  hasBroadcastChannel: all.OneOrMany<all.BroadcastChannel>;

  /**
   * <https://schema.org/broadcaster>
   **/
  broadcaster: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/callSign>
   **/
  callSign: all.OneOrMany<string>;

  /**
   * <https://schema.org/broadcastAffiliateOf>
   **/
  broadcastAffiliateOf: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/area>
   **/
  area: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/videoFormat>
   **/
  videoFormat: all.OneOrMany<string>;

  /**
   * <https://schema.org/broadcastDisplayName>
   **/
  broadcastDisplayName: all.OneOrMany<string>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.BroadcastServiceProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.BroadcastServiceIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.BroadcastServiceBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.BroadcastServiceServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.BroadcastServiceIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.BroadcastServiceOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.BroadcastServiceTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.BroadcastServiceCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.BroadcastServiceLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.BroadcastServiceBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.BroadcastServiceAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.BroadcastServiceServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BroadcastServiceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BroadcastServiceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BroadcastServiceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BroadcastServiceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BroadcastServiceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BroadcastServiceImageFieldEnum>;
}
