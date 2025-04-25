import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type LocationFeatureSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type LocationFeatureSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/propertyID>
 **/
export type LocationFeatureSpecificationPropertyIDFieldEnum = string;

/**
 * <https://schema.org/unitCode>
 **/
export type LocationFeatureSpecificationUnitCodeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type LocationFeatureSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/LocationFeatureSpecification>
 **/
export interface LocationFeatureSpecification {
  "@context": string;
  "@type": "LocationFeatureSpecification";

  /**
   * <https://schema.org/hoursAvailable>
   **/
  hoursAvailable: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.LocationFeatureSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.LocationFeatureSpecificationValidThroughFieldEnum>;

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueReference>
   **/
  valueReference: all.OneOrMany<all.LocationFeatureSpecificationValueReferenceFieldEnum>;

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/propertyID>
   **/
  propertyID: all.OneOrMany<all.LocationFeatureSpecificationPropertyIDFieldEnum>;

  /**
   * <https://schema.org/value>
   **/
  value: all.OneOrMany<all.LocationFeatureSpecificationValueFieldEnum>;

  /**
   * <https://schema.org/measurementTechnique>
   **/
  measurementTechnique: all.OneOrMany<all.LocationFeatureSpecificationMeasurementTechniqueFieldEnum>;

  /**
   * <https://schema.org/measurementMethod>
   **/
  measurementMethod: all.OneOrMany<all.LocationFeatureSpecificationMeasurementMethodFieldEnum>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.LocationFeatureSpecificationUnitCodeFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.LocationFeatureSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.LocationFeatureSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.LocationFeatureSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.LocationFeatureSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.LocationFeatureSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.LocationFeatureSpecificationImageFieldEnum>;
}
