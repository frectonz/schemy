import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type StatisticalVariableAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/StatisticalVariable>
 **/
export interface StatisticalVariable {
  "@context": string;
  "@type": "StatisticalVariable";

  /**
   * <https://schema.org/measurementDenominator>
   **/
  measurementDenominator: all.OneOrMany<all.StatisticalVariable>;

  /**
   * <https://schema.org/populationType>
   **/
  populationType: all.OneOrMany<all.Class>;

  /**
   * <https://schema.org/measurementQualifier>
   **/
  measurementQualifier: all.OneOrMany<all.Enumeration>;

  /**
   * <https://schema.org/statType>
   **/
  statType: all.OneOrMany<all.StatisticalVariableStatTypeFieldEnum>;

  /**
   * <https://schema.org/measuredProperty>
   **/
  measuredProperty: all.OneOrMany<all.Property>;

  /**
   * <https://schema.org/measurementTechnique>
   **/
  measurementTechnique: all.OneOrMany<all.StatisticalVariableMeasurementTechniqueFieldEnum>;

  /**
   * <https://schema.org/measurementMethod>
   **/
  measurementMethod: all.OneOrMany<all.StatisticalVariableMeasurementMethodFieldEnum>;

  /**
   * <https://schema.org/numConstraints>
   **/
  numConstraints: all.OneOrMany<number>;

  /**
   * <https://schema.org/constraintProperty>
   **/
  constraintProperty: all.OneOrMany<all.StatisticalVariableConstraintPropertyFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.StatisticalVariableMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.StatisticalVariableIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.StatisticalVariableDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.StatisticalVariableSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.StatisticalVariableAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.StatisticalVariableImageFieldEnum>;
}
