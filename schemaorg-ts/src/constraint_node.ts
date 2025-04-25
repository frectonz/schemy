import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ConstraintNodeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ConstraintNode>
 **/
export interface ConstraintNode {
  "@context": string;
  "@type": "ConstraintNode";

  /**
   * <https://schema.org/numConstraints>
   **/
  numConstraints: all.OneOrMany<number>;

  /**
   * <https://schema.org/constraintProperty>
   **/
  constraintProperty: all.OneOrMany<all.ConstraintNodeConstraintPropertyFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ConstraintNodeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ConstraintNodeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ConstraintNodeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ConstraintNodeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ConstraintNodeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ConstraintNodeImageFieldEnum>;
}
