import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MenuItemAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MenuItem>
 **/
export interface MenuItem {
  "@context": string;
  "@type": "MenuItem";

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.MenuItemOffersFieldEnum>;

  /**
   * <https://schema.org/suitableForDiet>
   **/
  suitableForDiet: all.OneOrMany<all.RestrictedDietEnum>;

  /**
   * <https://schema.org/nutrition>
   **/
  nutrition: all.OneOrMany<all.NutritionInformation>;

  /**
   * <https://schema.org/menuAddOn>
   **/
  menuAddOn: all.OneOrMany<all.MenuItemMenuAddOnFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MenuItemMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MenuItemIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MenuItemDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MenuItemSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MenuItemAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MenuItemImageFieldEnum>;
}
