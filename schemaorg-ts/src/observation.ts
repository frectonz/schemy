import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ObservationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/unitCode>
 **/
export type ObservationUnitCodeFieldEnum = string;

/**
 * <https://schema.org/Observation>
 **/
export interface Observation {
  "@context": string;
  "@type": "Observation";

  /**
   * <https://schema.org/measurementDenominator>
   **/
  measurementDenominator: all.OneOrMany<all.StatisticalVariable>;

  /**
   * <https://schema.org/observationDate>
   **/
  observationDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/marginOfError>
   **/
  marginOfError: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/measurementQualifier>
   **/
  measurementQualifier: all.OneOrMany<all.Enumeration>;

  /**
   * <https://schema.org/measuredProperty>
   **/
  measuredProperty: all.OneOrMany<all.Property>;

  /**
   * <https://schema.org/observationAbout>
   **/
  observationAbout: all.OneOrMany<all.ObservationObservationAboutFieldEnum>;

  /**
   * <https://schema.org/measurementTechnique>
   **/
  measurementTechnique: all.OneOrMany<all.ObservationMeasurementTechniqueFieldEnum>;

  /**
   * <https://schema.org/measurementMethod>
   **/
  measurementMethod: all.OneOrMany<all.ObservationMeasurementMethodFieldEnum>;

  /**
   * <https://schema.org/observationPeriod>
   **/
  observationPeriod: all.OneOrMany<string>;

  /**
   * <https://schema.org/variableMeasured>
   **/
  variableMeasured: all.OneOrMany<all.ObservationVariableMeasuredFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ObservationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ObservationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ObservationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ObservationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ObservationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ObservationImageFieldEnum>;

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.ObservationValueReferenceFieldEnum>;

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/value>
   **/
  value: all.OneOrMany<all.ObservationValueFieldEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.ObservationUnitCodeFieldEnum>;

  /**
   * <https://schema.org/minValue>
   **/
  minValue: all.OneOrMany<number>;
}
