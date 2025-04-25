import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type SteeringPositionValueAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SteeringPositionValue>
 **/
export interface SteeringPositionValue {
  "@context": string;
  "@type": "SteeringPositionValue";

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.SteeringPositionValueValueReferenceFieldEnum>;

  /**
   * <https://schema.org/lesser>
   **/
  lesser: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/greater>
   **/
  greater: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/equal>
   **/
  equal: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/lesserOrEqual>
   **/
  lesserOrEqual: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/greaterOrEqual>
   **/
  greaterOrEqual: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/nonEqual>
   **/
  nonEqual: all.OneOrMany<all.QualitativeValue>;

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.SteeringPositionValueSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SteeringPositionValueMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SteeringPositionValueIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SteeringPositionValueDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SteeringPositionValueSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SteeringPositionValueAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SteeringPositionValueImageFieldEnum>;
}
