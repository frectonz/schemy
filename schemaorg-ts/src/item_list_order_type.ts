import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ItemListOrderTypeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ItemListOrderType>
 **/
export interface ItemListOrderType {
  "@context": string;
  "@type": "ItemListOrderType";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.ItemListOrderTypeSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ItemListOrderTypeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ItemListOrderTypeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ItemListOrderTypeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ItemListOrderTypeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ItemListOrderTypeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ItemListOrderTypeImageFieldEnum>;
}
