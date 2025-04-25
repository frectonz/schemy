import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PropertyValueSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PropertyValueSpecification>
 **/
export interface PropertyValueSpecification {
  "@context": string;
  "@type": "PropertyValueSpecification";

  /**
   * <https://schema.org/maxValue>
   **/
  maxValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueMinLength>
   **/
  valueMinLength: all.OneOrMany<number>;

  /**
   * <https://schema.org/stepValue>
   **/
  stepValue: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueName>
   **/
  valueName: all.OneOrMany<string>;

  /**
   * <https://schema.org/valuePattern>
   **/
  valuePattern: all.OneOrMany<string>;

  /**
   * <https://schema.org/multipleValues>
   **/
  multipleValues: all.OneOrMany<string>;

  /**
   * <https://schema.org/defaultValue>
   **/
  defaultValue: all.OneOrMany<all.PropertyValueSpecificationDefaultValueFieldEnum>;

  /**
   * <https://schema.org/valueMaxLength>
   **/
  valueMaxLength: all.OneOrMany<number>;

  /**
   * <https://schema.org/valueRequired>
   **/
  valueRequired: all.OneOrMany<string>;

  /**
   * <https://schema.org/readonlyValue>
   **/
  readonlyValue: all.OneOrMany<string>;

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
  mainEntityOfPage: all.OneOrMany<all.PropertyValueSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PropertyValueSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PropertyValueSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PropertyValueSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PropertyValueSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PropertyValueSpecificationImageFieldEnum>;
}
