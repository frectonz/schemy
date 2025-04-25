import type * as all from "./index";

/**
 * <https://schema.org/loanType>
 **/
export type CreditCardLoanTypeFieldEnum = string;

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type CreditCardFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/termsOfService>
 **/
export type CreditCardTermsOfServiceFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type CreditCardAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/CreditCard>
 **/
export interface CreditCard {
  "@context": string;
  "@type": "CreditCard";

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
  loanType: all.OneOrMany<all.CreditCardLoanTypeFieldEnum>;

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.CreditCardAmountFieldEnum>;

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
  requiredCollateral: all.OneOrMany<all.CreditCardRequiredCollateralFieldEnum>;

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
  feesAndCommissionsSpecification: all.OneOrMany<all.CreditCardFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/interestRate>
   **/
  interestRate: all.OneOrMany<all.CreditCardInterestRateFieldEnum>;

  /**
   * <https://schema.org/annualPercentageRate>
   **/
  annualPercentageRate: all.OneOrMany<all.CreditCardAnnualPercentageRateFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.CreditCardProviderFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.CreditCardIsSimilarToFieldEnum>;

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
  broker: all.OneOrMany<all.CreditCardBrokerFieldEnum>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.CreditCardServiceAreaFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.CreditCardIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.CreditCardOffersFieldEnum>;

  /**
   * <https://schema.org/termsOfService>
   **/
  termsOfService: all.OneOrMany<all.CreditCardTermsOfServiceFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.CreditCardCategoryFieldEnum>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.CreditCardLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.CreditCardBrandFieldEnum>;

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
  areaServed: all.OneOrMany<all.CreditCardAreaServedFieldEnum>;

  /**
   * <https://schema.org/serviceAudience>
   **/
  serviceAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/serviceType>
   **/
  serviceType: all.OneOrMany<all.CreditCardServiceTypeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.CreditCardMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.CreditCardIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.CreditCardDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.CreditCardSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.CreditCardAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.CreditCardImageFieldEnum>;

  /**
   * <https://schema.org/contactlessPayment>
   **/
  contactlessPayment: all.OneOrMany<string>;

  /**
   * <https://schema.org/floorLimit>
   **/
  floorLimit: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/monthlyMinimumRepaymentAmount>
   **/
  monthlyMinimumRepaymentAmount: all.OneOrMany<all.CreditCardMonthlyMinimumRepaymentAmountFieldEnum>;

  /**
   * <https://schema.org/cashBack>
   **/
  cashBack: all.OneOrMany<all.CreditCardCashBackFieldEnum>;

  /**
   * <https://schema.org/paymentMethodType>
   **/
  paymentMethodType: all.OneOrMany<all.PaymentMethodTypeEnum>;
}
