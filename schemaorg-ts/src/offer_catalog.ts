import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OfferCatalogAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OfferCatalog>
 **/
export interface OfferCatalog {
  "@context": string;
  "@type": "OfferCatalog";

  /**
   * <https://schema.org/itemListElement>
   **/
  itemListElement: all.OneOrMany<all.OfferCatalogItemListElementFieldEnum>;

  /**
   * <https://schema.org/aggregateElement>
   **/
  aggregateElement: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/itemListOrder>
   **/
  itemListOrder: all.OneOrMany<all.OfferCatalogItemListOrderFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.OfferCatalogMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OfferCatalogIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OfferCatalogDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OfferCatalogSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OfferCatalogAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OfferCatalogImageFieldEnum>;
}
