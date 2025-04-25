import type * as all from "./index";

/**
 * <https://schema.org/propertyID>
 **/
export type PropertyValuePropertyIDFieldEnum = string;

/**
 * <https://schema.org/unitCode>
 **/
export type PropertyValueUnitCodeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PropertyValueAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PropertyValue>
 **/
export interface PropertyValue {
  "@context": string;
  "@type": "PropertyValue";

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.PropertyValueValueReferenceFieldEnum>;

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/propertyID>
   **/
  propertyID: all.OneOrMany<all.PropertyValuePropertyIDFieldEnum>;

  /**
   * <https://schema.org/value>
   **/
  value: all.OneOrMany<all.PropertyValueValueFieldEnum>;

  /**
   * <https://schema.org/measurementTechnique>
   **/
  measurementTechnique: all.OneOrMany<all.PropertyValueMeasurementTechniqueFieldEnum>;

  /**
   * <https://schema.org/measurementMethod>
   **/
  measurementMethod: all.OneOrMany<all.PropertyValueMeasurementMethodFieldEnum>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.PropertyValueUnitCodeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.PropertyValueMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PropertyValueIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PropertyValueDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PropertyValueSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PropertyValueAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PropertyValueImageFieldEnum>;
}
