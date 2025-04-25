import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DefinedTermAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DefinedTerm>
 **/
export interface DefinedTerm {
  "@context": string;
  "@type": "DefinedTerm";

  /**
   * <https://schema.org/inDefinedTermSet>
   **/
  inDefinedTermSet: all.OneOrMany<all.DefinedTermInDefinedTermSetFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.DefinedTermMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DefinedTermIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DefinedTermDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DefinedTermSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DefinedTermAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DefinedTermImageFieldEnum>;
}
