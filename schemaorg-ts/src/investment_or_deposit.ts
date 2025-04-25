import type * as all from "./index";

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type InvestmentOrDepositFeesAndCommissionsSpecificationFieldEnum =
  string;

/**
 * <https://schema.org/termsOfService>
 **/
export type InvestmentOrDepositTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type InvestmentOrDepositAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/InvestmentOrDeposit>
 **/
export interface InvestmentOrDeposit {
  "@context": string;
  "@type": "InvestmentOrDeposit";

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.InvestmentOrDepositAmountFieldEnum>;

  /**
   * <https://schema.org/feesAndCommissionsSpecification>
   **/
  feesAndCommissionsSpecification: all.OneOrMany<all.InvestmentOrDepositFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.InvestmentOrDepositInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.InvestmentOrDepositAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.InvestmentOrDepositProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.InvestmentOrDepositIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.InvestmentOrDepositBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.InvestmentOrDepositServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.InvestmentOrDepositIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.InvestmentOrDepositOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.InvestmentOrDepositTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.InvestmentOrDepositCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.InvestmentOrDepositLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.InvestmentOrDepositBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.InvestmentOrDepositAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.InvestmentOrDepositServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.InvestmentOrDepositMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.InvestmentOrDepositIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.InvestmentOrDepositDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.InvestmentOrDepositSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.InvestmentOrDepositAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.InvestmentOrDepositImageFieldEnum>;
}
