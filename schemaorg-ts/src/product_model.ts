import type * as all from "./index";

/**
 * <https://schema.org/gtin>
 **/
export type ProductModelGtinFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type ProductModelAsinFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ProductModelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ProductModel>
 **/
export interface ProductModel {
  "@context": string;
  "@type": "ProductModel";

  /**
   * <https://schema.org/successorOf>
   **/
  successorOf: all.OneOrMany<all.ProductModel>;

  /**
   * <https://schema.org/predecessorOf>
   **/
  predecessorOf: all.OneOrMany<all.ProductModel>;

  /**
   * <https://schema.org/isVariantOf>
   **/
  isVariantOf: all.OneOrMany<all.ProductModelIsVariantOfFieldEnum>;

  /**
   * <https://schema.org/productID>
   **/
  productID: all.OneOrMany<string>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/isSimilarTo>
   **/
  isSimilarTo: all.OneOrMany<all.ProductModelIsSimilarToFieldEnum>;

  /**
   * <https://schema.org/colorSwatch>
   **/
  colorSwatch: all.OneOrMany<all.ProductModelColorSwatchFieldEnum>;

  /**
   * <https://schema.org/productionDate>
   **/
  productionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/countryOfAssembly>
   **/
  countryOfAssembly: all.OneOrMany<string>;

  /**
   * <https://schema.org/countryOfOrigin>
   **/
  countryOfOrigin: all.OneOrMany<all.Country>;

  /**
   * <https://schema.org/sku>
   **/
  sku: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMerchantReturnPolicy>
   **/
  hasMerchantReturnPolicy: all.OneOrMany<all.MerchantReturnPolicy>;

  /**
   * <https://schema.org/weight>
   **/
  weight: all.OneOrMany<all.ProductModelWeightFieldEnum>;

  /**
   * <https://schema.org/mpn>
   **/
  mpn: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasGS1DigitalLink>
   **/
  hasGS1DigitalLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/model>
   **/
  model: all.OneOrMany<all.ProductModelModelFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.ProductModelIsRelatedToFieldEnum>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/gtin12>
   **/
  gtin12: all.OneOrMany<string>;

  /**
   * <https://schema.org/pattern>
   **/
  pattern: all.OneOrMany<all.ProductModelPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.ProductModelOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.ProductModelKeywordsFieldEnum>;

  /**
   * <https://schema.org/negativeNotes>
   **/
  negativeNotes: all.OneOrMany<all.ProductModelNegativeNotesFieldEnum>;

  /**
   * <https://schema.org/gtin13>
   **/
  gtin13: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMeasurement>
   **/
  hasMeasurement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/gtin>
   **/
  gtin: all.OneOrMany<all.ProductModelGtinFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/isConsumableFor>
   **/
  isConsumableFor: all.OneOrMany<all.Product>;

  /**
   * <https://schema.org/mobileUrl>
   **/
  mobileUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.ProductModelCategoryFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.ProductModelAsinFieldEnum>;

  /**
   * <https://schema.org/color>
   **/
  color: all.OneOrMany<string>;

  /**
   * <https://schema.org/countryOfLastProcessing>
   **/
  countryOfLastProcessing: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.ProductModelLogoFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/isFamilyFriendly>
   **/
  isFamilyFriendly: all.OneOrMany<string>;

  /**
   * <https://schema.org/releaseDate>
   **/
  releaseDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.ProductModelBrandFieldEnum>;

  /**
   * <https://schema.org/inProductGroupWithID>
   **/
  inProductGroupWithID: all.OneOrMany<string>;

  /**
   * <https://schema.org/manufacturer>
   **/
  manufacturer: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/awards>
   **/
  awards: all.OneOrMany<string>;

  /**
   * <https://schema.org/width>
   **/
  width: all.OneOrMany<all.ProductModelWidthFieldEnum>;

  /**
   * <https://schema.org/hasAdultConsideration>
   **/
  hasAdultConsideration: all.OneOrMany<all.AdultOrientedEnumerationEnum>;

  /**
   * <https://schema.org/audience>
   **/
  audience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/material>
   **/
  material: all.OneOrMany<all.ProductModelMaterialFieldEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/slogan>
   **/
  slogan: all.OneOrMany<string>;

  /**
   * <https://schema.org/depth>
   **/
  depth: all.OneOrMany<all.ProductModelDepthFieldEnum>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/itemCondition>
   **/
  itemCondition: all.OneOrMany<all.OfferItemConditionEnum>;

  /**
   * <https://schema.org/nsn>
   **/
  nsn: all.OneOrMany<string>;

  /**
   * <https://schema.org/positiveNotes>
   **/
  positiveNotes: all.OneOrMany<all.ProductModelPositiveNotesFieldEnum>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.ProductModelSizeFieldEnum>;

  /**
   * <https://schema.org/hasEnergyConsumptionDetails>
   **/
  hasEnergyConsumptionDetails: all.OneOrMany<all.EnergyConsumptionDetails>;

  /**
   * <https://schema.org/gtin14>
   **/
  gtin14: all.OneOrMany<string>;

  /**
   * <https://schema.org/height>
   **/
  height: all.OneOrMany<all.ProductModelHeightFieldEnum>;

  /**
   * <https://schema.org/purchaseDate>
   **/
  purchaseDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/gtin8>
   **/
  gtin8: all.OneOrMany<string>;

  /**
   * <https://schema.org/isAccessoryOrSparePartFor>
   **/
  isAccessoryOrSparePartFor: all.OneOrMany<all.Product>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ProductModelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ProductModelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ProductModelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ProductModelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ProductModelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ProductModelImageFieldEnum>;
}
