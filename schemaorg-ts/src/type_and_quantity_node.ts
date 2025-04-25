import type * as all from "./index";

/**
 * <https://schema.org/unitCode>
 **/
export type TypeAndQuantityNodeUnitCodeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TypeAndQuantityNodeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TypeAndQuantityNode>
 **/
export interface TypeAndQuantityNode {
  "@context": string;
  "@type": "TypeAndQuantityNode";

  /**
   * <https://schema.org/unitText>
   **/
  unitText: all.OneOrMany<string>;

  /**
   * <https://schema.org/amountOfThisGood>
   **/
  amountOfThisGood: all.OneOrMany<number>;

  /**
   * <https://schema.org/businessFunction>
   **/
  businessFunction: all.OneOrMany<all.BusinessFunction>;

  /**
   * <https://schema.org/typeOfGood>
   **/
  typeOfGood: all.OneOrMany<all.TypeAndQuantityNodeTypeOfGoodFieldEnum>;

  /**
   * <https://schema.org/unitCode>
   **/
  unitCode: all.OneOrMany<all.TypeAndQuantityNodeUnitCodeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TypeAndQuantityNodeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TypeAndQuantityNodeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TypeAndQuantityNodeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TypeAndQuantityNodeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TypeAndQuantityNodeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TypeAndQuantityNodeImageFieldEnum>;
}
