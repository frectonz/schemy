import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ListItemAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ListItem>
 **/
export interface ListItem {
  "@context": string;
  "@type": "ListItem";

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
  position: all.OneOrMany<all.ListItemPositionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.ListItemMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ListItemIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ListItemDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ListItemSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ListItemAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ListItemImageFieldEnum>;
}
