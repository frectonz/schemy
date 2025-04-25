import type * as all from "./index";

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type DepositAccountFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/termsOfService>
 **/
export type DepositAccountTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DepositAccountAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/bankAccountType>
 **/
export type DepositAccountBankAccountTypeFieldEnum = string;

/**
 * <https://schema.org/DepositAccount>
 **/
export interface DepositAccount {
  "@context": string;
  "@type": "DepositAccount";

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.DepositAccountAmountFieldEnum>;

  /**
   * <https://schema.org/feesAndCommissionsSpecification>
   **/
  feesAndCommissionsSpecification: all.OneOrMany<all.DepositAccountFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.DepositAccountInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.DepositAccountAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.DepositAccountProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.DepositAccountIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.DepositAccountBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.DepositAccountServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.DepositAccountIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.DepositAccountOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.DepositAccountTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.DepositAccountCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.DepositAccountLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.DepositAccountBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.DepositAccountAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.DepositAccountServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.DepositAccountMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DepositAccountIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DepositAccountDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DepositAccountSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DepositAccountAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DepositAccountImageFieldEnum>;

  /**
   * <https://schema.org/bankAccountType>
   **/
  bankAccountType: all.OneOrMany<all.DepositAccountBankAccountTypeFieldEnum>;

  /**
   * <https://schema.org/accountOverdraftLimit>
   **/
  accountOverdraftLimit: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/accountMinimumInflow>
   **/
  accountMinimumInflow: all.OneOrMany<all.MonetaryAmount>;
}
