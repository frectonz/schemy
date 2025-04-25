import type * as all from "./index";

/**
 * <https://schema.org/dateModified>
 **/
export type DataFeedItemDateModifiedFieldEnum = string;

/**
 * <https://schema.org/dateDeleted>
 **/
export type DataFeedItemDateDeletedFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type DataFeedItemDateCreatedFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DataFeedItemAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DataFeedItem>
 **/
export interface DataFeedItem {
  "@context": string;
  "@type": "DataFeedItem";

  /**
   * <https://schema.org/dateModified>
   **/
  dateModified: all.OneOrMany<all.DataFeedItemDateModifiedFieldEnum>;

  /**
   * <https://schema.org/dateDeleted>
   **/
  dateDeleted: all.OneOrMany<all.DataFeedItemDateDeletedFieldEnum>;

  /**
   * <https://schema.org/dateCreated>
   **/
  dateCreated: all.OneOrMany<all.DataFeedItemDateCreatedFieldEnum>;

  /**
   * <https://schema.org/item>
   **/
  item: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DataFeedItemMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DataFeedItemIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DataFeedItemDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DataFeedItemSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DataFeedItemAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DataFeedItemImageFieldEnum>;
}
