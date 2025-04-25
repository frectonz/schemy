import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HowToToolAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HowToTool>
 **/
export interface HowToTool {
  "@context": string;
  "@type": "HowToTool";

  /**
   * <https://schema.org/requiredQuantity>
   **/
  requiredQuantity: all.OneOrMany<all.HowToToolRequiredQuantityFieldEnum>;

  /**
   * <https://schema.org/nextItem>
   **/
  nextItem: all.OneOrMany<all.ListItem>;

  /**
   * <https://schema.org/item>
   **/
  item: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.HowToToolPositionFieldEnum>;

  /**
   * <https://schema.org/previousItem>
   **/
  previousItem: all.OneOrMany<all.ListItem>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HowToToolMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HowToToolIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HowToToolDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HowToToolSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HowToToolAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HowToToolImageFieldEnum>;
}
