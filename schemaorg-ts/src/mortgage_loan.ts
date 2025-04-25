import type * as all from "./index";

/**
 * <https://schema.org/loanType>
 **/
export type MortgageLoanLoanTypeFieldEnum = string;

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type MortgageLoanFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/termsOfService>
 **/
export type MortgageLoanTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type MortgageLoanAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MortgageLoan>
 **/
export interface MortgageLoan {
  "@context": string;
  "@type": "MortgageLoan";

  /**
   * <https://schema.org/domiciledMortgage>
   **/
  domiciledMortgage: all.OneOrMany<string>;

  /**
   * <https://schema.org/loanMortgageMandateAmount>
   **/
  loanMortgageMandateAmount: all.OneOrMany<all.MonetaryAmount>;

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
  loanType: all.OneOrMany<all.MortgageLoanLoanTypeFieldEnum>;

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.MortgageLoanAmountFieldEnum>;

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
  requiredCollateral: all.OneOrMany<all.MortgageLoanRequiredCollateralFieldEnum>;

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
  feesAndCommissionsSpecification: all.OneOrMany<all.MortgageLoanFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.MortgageLoanInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.MortgageLoanAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.MortgageLoanProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.MortgageLoanIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.MortgageLoanBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.MortgageLoanServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.MortgageLoanIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.MortgageLoanOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.MortgageLoanTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.MortgageLoanCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.MortgageLoanLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.MortgageLoanBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.MortgageLoanAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.MortgageLoanServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MortgageLoanMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MortgageLoanIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MortgageLoanDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MortgageLoanSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MortgageLoanAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MortgageLoanImageFieldEnum>;
}
