import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type SpeakableSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SpeakableSpecification>
 **/
export interface SpeakableSpecification {
  "@context": string;
  "@type": "SpeakableSpecification";

  /**
   * <https://schema.org/xpath>
   **/
  xpath: all.OneOrMany<string>;

  /**
   * <https://schema.org/cssSelector>
   **/
  cssSelector: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SpeakableSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SpeakableSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SpeakableSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SpeakableSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SpeakableSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SpeakableSpecificationImageFieldEnum>;
}
