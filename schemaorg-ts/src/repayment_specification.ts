import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type RepaymentSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/RepaymentSpecification>
 **/
export interface RepaymentSpecification {
  "@context": string;
  "@type": "RepaymentSpecification";

  /**
   * <https://schema.org/downPayment>
   **/
  downPayment: all.OneOrMany<all.RepaymentSpecificationDownPaymentFieldEnum>;

  /**
   * <https://schema.org/numberOfLoanPayments>
   **/
  numberOfLoanPayments: all.OneOrMany<number>;

  /**
   * <https://schema.org/loanPaymentFrequency>
   **/
  loanPaymentFrequency: all.OneOrMany<number>;

  /**
   * <https://schema.org/loanPaymentAmount>
   **/
  loanPaymentAmount: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/earlyPrepaymentPenalty>
   **/
  earlyPrepaymentPenalty: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RepaymentSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RepaymentSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RepaymentSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RepaymentSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RepaymentSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RepaymentSpecificationImageFieldEnum>;
}
