import type * as all from "./index";

/**
 * <https://schema.org/loanType>
 **/
export type LoanOrCreditLoanTypeFieldEnum = string;

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type LoanOrCreditFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/termsOfService>
 **/
export type LoanOrCreditTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type LoanOrCreditAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/LoanOrCredit>
 **/
export interface LoanOrCredit {
  "@context": string;
  "@type": "LoanOrCredit";

  /**
   * <https://schema.org/loanTerm>
   **/
  loanTerm: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/loanRepaymentForm>
   **/
  loanRepaymentForm: all.OneOrMany<all.RepaymentSpecification>;

  /**
   * <https://schema.org/loanType>
   **/
  loanType: all.OneOrMany<all.LoanOrCreditLoanTypeFieldEnum>;

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.LoanOrCreditAmountFieldEnum>;

  /**
   * <https://schema.org/gracePeriod>
   **/
  gracePeriod: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/recourseLoan>
   **/
  recourseLoan: all.OneOrMany<string>;

  /**
   * <https://schema.org/requiredCollateral>
   **/
  requiredCollateral: all.OneOrMany<all.LoanOrCreditRequiredCollateralFieldEnum>;

  /**
   * <https://schema.org/currency>
   **/
  currency: all.OneOrMany<string>;

  /**
   * <https://schema.org/renegotiableLoan>
   **/
  renegotiableLoan: all.OneOrMany<string>;

  /**
   * <https://schema.org/feesAndCommissionsSpecification>
   **/
  feesAndCommissionsSpecification: all.OneOrMany<all.LoanOrCreditFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.LoanOrCreditInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.LoanOrCreditAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.LoanOrCreditProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.LoanOrCreditIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.LoanOrCreditBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.LoanOrCreditServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.LoanOrCreditIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.LoanOrCreditOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.LoanOrCreditTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.LoanOrCreditCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.LoanOrCreditLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.LoanOrCreditBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.LoanOrCreditAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.LoanOrCreditServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.LoanOrCreditMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.LoanOrCreditIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.LoanOrCreditDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.LoanOrCreditSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.LoanOrCreditAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.LoanOrCreditImageFieldEnum>;
}
