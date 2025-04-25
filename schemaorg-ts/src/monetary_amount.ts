import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type MonetaryAmountValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type MonetaryAmountValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type MonetaryAmountAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MonetaryAmount>
 **/
export interface MonetaryAmount {
  "@context": string;
  "@type": "MonetaryAmount";

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.MonetaryAmountValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.MonetaryAmountValidThroughFieldEnum>;

  /**
   * <https://schema.org/value>
   **/
  value: all.OneOrMany<all.MonetaryAmountValueFieldEnum>;

  /**
   * <https://schema.org/minValue>
   **/
  minValue: all.OneOrMany<number>;

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
  mainEntityOfPage: all.OneOrMany<all.MonetaryAmountMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MonetaryAmountIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MonetaryAmountDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MonetaryAmountSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MonetaryAmountAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MonetaryAmountImageFieldEnum>;
}
