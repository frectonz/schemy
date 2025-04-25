import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HowToSupplyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HowToSupply>
 **/
export interface HowToSupply {
  "@context": string;
  "@type": "HowToSupply";

  /**
   * <https://schema.org/estimatedCost>
   **/
  estimatedCost: all.OneOrMany<all.HowToSupplyEstimatedCostFieldEnum>;

  /**
   * <https://schema.org/requiredQuantity>
   **/
  requiredQuantity: all.OneOrMany<all.HowToSupplyRequiredQuantityFieldEnum>;

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
  position: all.OneOrMany<all.HowToSupplyPositionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.HowToSupplyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HowToSupplyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HowToSupplyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HowToSupplySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HowToSupplyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HowToSupplyImageFieldEnum>;
}
