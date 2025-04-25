import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type CategoryCodeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/CategoryCode>
 **/
export interface CategoryCode {
  "@context": string;
  "@type": "CategoryCode";

  /**
   * <https://schema.org/inCodeSet>
   **/
  inCodeSet: all.OneOrMany<all.CategoryCodeInCodeSetFieldEnum>;

  /**
   * <https://schema.org/codeValue>
   **/
  codeValue: all.OneOrMany<string>;

  /**
   * <https://schema.org/inDefinedTermSet>
   **/
  inDefinedTermSet: all.OneOrMany<all.CategoryCodeInDefinedTermSetFieldEnum>;

  /**
   * <https://schema.org/termCode>
   **/
  termCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.CategoryCodeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.CategoryCodeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.CategoryCodeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.CategoryCodeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.CategoryCodeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.CategoryCodeImageFieldEnum>;
}
