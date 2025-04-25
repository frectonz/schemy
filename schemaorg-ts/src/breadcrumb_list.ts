import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BreadcrumbListAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BreadcrumbList>
 **/
export interface BreadcrumbList {
  "@context": string;
  "@type": "BreadcrumbList";

  /**
   * <https://schema.org/itemListElement>
   **/
  itemListElement: all.OneOrMany<all.BreadcrumbListItemListElementFieldEnum>;

  /**
   * <https://schema.org/aggregateElement>
   **/
  aggregateElement: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/itemListOrder>
   **/
  itemListOrder: all.OneOrMany<all.BreadcrumbListItemListOrderFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BreadcrumbListMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BreadcrumbListIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BreadcrumbListDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BreadcrumbListSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BreadcrumbListAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BreadcrumbListImageFieldEnum>;
}
