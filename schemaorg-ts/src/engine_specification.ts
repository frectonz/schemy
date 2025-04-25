import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EngineSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EngineSpecification>
 **/
export interface EngineSpecification {
  "@context": string;
  "@type": "EngineSpecification";

  /**
   * <https://schema.org/engineDisplacement>
   **/
  engineDisplacement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/engineType>
   **/
  engineType: all.OneOrMany<all.EngineSpecificationEngineTypeFieldEnum>;

  /**
   * <https://schema.org/torque>
   **/
  torque: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/fuelType>
   **/
  fuelType: all.OneOrMany<all.EngineSpecificationFuelTypeFieldEnum>;

  /**
   * <https://schema.org/enginePower>
   **/
  enginePower: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EngineSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EngineSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EngineSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EngineSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EngineSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EngineSpecificationImageFieldEnum>;
}
