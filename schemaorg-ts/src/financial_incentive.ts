import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type FinancialIncentiveValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type FinancialIncentiveValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type FinancialIncentiveAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/FinancialIncentive>
 **/
export interface FinancialIncentive {
  "@context": string;
  "@type": "FinancialIncentive";

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.FinancialIncentiveProviderFieldEnum>;

  /**
   * <https://schema.org/incentiveType>
   **/
  incentiveType: all.OneOrMany<all.IncentiveTypeEnum>;

  /**
   * <https://schema.org/incomeLimit>
   **/
  incomeLimit: all.OneOrMany<all.FinancialIncentiveIncomeLimitFieldEnum>;

  /**
   * <https://schema.org/purchasePriceLimit>
   **/
  purchasePriceLimit: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/incentivizedItem>
   **/
  incentivizedItem: all.OneOrMany<all.FinancialIncentiveIncentivizedItemFieldEnum>;

  /**
   * <https://schema.org/incentiveStatus>
   **/
  incentiveStatus: all.OneOrMany<all.IncentiveStatusEnum>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.FinancialIncentiveValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.FinancialIncentiveValidThroughFieldEnum>;

  /**
   * <https://schema.org/incentiveAmount>
   **/
  incentiveAmount: all.OneOrMany<all.FinancialIncentiveIncentiveAmountFieldEnum>;

  /**
   * <https://schema.org/purchaseType>
   **/
  purchaseType: all.OneOrMany<all.PurchaseTypeEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.FinancialIncentivePublisherFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.FinancialIncentiveAreaServedFieldEnum>;

  /**
   * <https://schema.org/qualifiedExpense>
   **/
  qualifiedExpense: all.OneOrMany<all.IncentiveQualifiedExpenseTypeEnum>;

  /**
   * <https://schema.org/eligibleWithSupplier>
   **/
  eligibleWithSupplier: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.FinancialIncentiveMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.FinancialIncentiveIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.FinancialIncentiveDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.FinancialIncentiveSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.FinancialIncentiveAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.FinancialIncentiveImageFieldEnum>;
}
