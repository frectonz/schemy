import type * as all from "./index";

/**
 * <https://schema.org/unitCode>
 **/
export type QuantitativeValueUnitCodeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type QuantitativeValueAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/QuantitativeValue>
 **/
export interface QuantitativeValue {
  "@context": string;
  "@type": "QuantitativeValue";

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.QuantitativeValueValueReferenceFieldEnum>;

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/value>
   **/
  value: all.OneOrMany<all.QuantitativeValueValueFieldEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.QuantitativeValueUnitCodeFieldEnum>;

  /**
   * <https://schema.org/minValue>
   **/
  minValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.QuantitativeValueMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.QuantitativeValueIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.QuantitativeValueDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.QuantitativeValueSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.QuantitativeValueAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.QuantitativeValueImageFieldEnum>;
}
