import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type SizeSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SizeSpecification>
 **/
export interface SizeSpecification {
  "@context": string;
  "@type": "SizeSpecification";

  /**
   * <https://schema.org/suggestedAge>
   **/
  suggestedAge: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/suggestedGender>
   **/
  suggestedGender: all.OneOrMany<all.SizeSpecificationSuggestedGenderFieldEnum>;

  /**
   * <https://schema.org/suggestedMeasurement>
   **/
  suggestedMeasurement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/hasMeasurement>
   **/
  hasMeasurement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/sizeSystem>
   **/
  sizeSystem: all.OneOrMany<all.SizeSpecificationSizeSystemFieldEnum>;

  /**
   * <https://schema.org/sizeGroup>
   **/
  sizeGroup: all.OneOrMany<all.SizeSpecificationSizeGroupFieldEnum>;

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.SizeSpecificationValueReferenceFieldEnum>;

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
  supersededBy: all.OneOrMany<all.SizeSpecificationSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SizeSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SizeSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SizeSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SizeSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SizeSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SizeSpecificationImageFieldEnum>;
}
