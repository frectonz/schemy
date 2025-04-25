import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ExchangeRateSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ExchangeRateSpecification>
 **/
export interface ExchangeRateSpecification {
  "@context": string;
  "@type": "ExchangeRateSpecification";

  /**
   * <https://schema.org/exchangeRateSpread>
   **/
  exchangeRateSpread: all.OneOrMany<all.ExchangeRateSpecificationExchangeRateSpreadFieldEnum>;

  /**
   * <https://schema.org/currentExchangeRate>
   **/
  currentExchangeRate: all.OneOrMany<all.UnitPriceSpecification>;

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
  mainEntityOfPage: all.OneOrMany<all.ExchangeRateSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ExchangeRateSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ExchangeRateSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ExchangeRateSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ExchangeRateSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ExchangeRateSpecificationImageFieldEnum>;
}
