import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type DatedMoneySpecificationEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type DatedMoneySpecificationStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DatedMoneySpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DatedMoneySpecification>
 **/
export interface DatedMoneySpecification {
  "@context": string;
  "@type": "DatedMoneySpecification";

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.DatedMoneySpecificationEndDateFieldEnum>;

  /**
   * <https://schema.org/amount>
   **/
  amount: all.OneOrMany<all.DatedMoneySpecificationAmountFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.DatedMoneySpecificationStartDateFieldEnum>;

  /**
   * <https://schema.org/currency>
   **/
  currency: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DatedMoneySpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DatedMoneySpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DatedMoneySpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DatedMoneySpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DatedMoneySpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DatedMoneySpecificationImageFieldEnum>;
}
