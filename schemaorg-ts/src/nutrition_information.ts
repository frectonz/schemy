import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type NutritionInformationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/NutritionInformation>
 **/
export interface NutritionInformation {
  "@context": string;
  "@type": "NutritionInformation";

  /**
   * <https://schema.org/servingSize>
   **/
  servingSize: all.OneOrMany<string>;

  /**
   * <https://schema.org/unsaturatedFatContent>
   **/
  unsaturatedFatContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/sodiumContent>
   **/
  sodiumContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/cholesterolContent>
   **/
  cholesterolContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/transFatContent>
   **/
  transFatContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/calories>
   **/
  calories: all.OneOrMany<all.Energy>;

  /**
   * <https://schema.org/sugarContent>
   **/
  sugarContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/fiberContent>
   **/
  fiberContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/proteinContent>
   **/
  proteinContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/fatContent>
   **/
  fatContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/carbohydrateContent>
   **/
  carbohydrateContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/saturatedFatContent>
   **/
  saturatedFatContent: all.OneOrMany<all.Mass>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.NutritionInformationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.NutritionInformationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.NutritionInformationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.NutritionInformationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.NutritionInformationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.NutritionInformationImageFieldEnum>;
}
