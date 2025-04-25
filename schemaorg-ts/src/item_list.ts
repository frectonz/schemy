import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ItemListAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ItemList>
 **/
export interface ItemList {
  "@context": string;
  "@type": "ItemList";

  /**
   * <https://schema.org/itemListElement>
   **/
  itemListElement: all.OneOrMany<all.ItemListItemListElementFieldEnum>;

  /**
   * <https://schema.org/aggregateElement>
   **/
  aggregateElement: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/itemListOrder>
   **/
  itemListOrder: all.OneOrMany<all.ItemListItemListOrderFieldEnum>;

  /**
   * <https://schema.org/numberOfItems>
   **/
  numberOfItems: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ItemListMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ItemListIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ItemListDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ItemListSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ItemListAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ItemListImageFieldEnum>;
}
