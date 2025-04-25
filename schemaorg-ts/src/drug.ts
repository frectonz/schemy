import type * as all from "./index";

/**
 * <https://schema.org/warning>
 **/
export type DrugWarningFieldEnum = string;

/**
 * <https://schema.org/gtin>
 **/
export type DrugGtinFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type DrugAsinFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type DrugAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Drug>
 **/
export interface Drug {
  "@context": string;
  "@type": "Drug";

  /**
   * <https://schema.org/drugClass>
   **/
  drugClass: all.OneOrMany<all.DrugClass>;

  /**
   * <https://schema.org/relatedDrug>
   **/
  relatedDrug: all.OneOrMany<all.Drug>;

  /**
   * <https://schema.org/alcoholWarning>
   **/
  alcoholWarning: all.OneOrMany<string>;

  /**
   * <https://schema.org/breastfeedingWarning>
   **/
  breastfeedingWarning: all.OneOrMany<string>;

  /**
   * <https://schema.org/dosageForm>
   **/
  dosageForm: all.OneOrMany<string>;

  /**
   * <https://schema.org/isAvailableGenerically>
   **/
  isAvailableGenerically: all.OneOrMany<string>;

  /**
   * <https://schema.org/includedInHealthInsurancePlan>
   **/
  includedInHealthInsurancePlan: all.OneOrMany<all.HealthInsurancePlan>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.DrugLegalStatusFieldEnum>;

  /**
   * <https://schema.org/drugUnit>
   **/
  drugUnit: all.OneOrMany<string>;

  /**
   * <https://schema.org/overdosage>
   **/
  overdosage: all.OneOrMany<string>;

  /**
   * <https://schema.org/prescriptionStatus>
   **/
  prescriptionStatus: all.OneOrMany<all.DrugPrescriptionStatusFieldEnum>;

  /**
   * <https://schema.org/nonProprietaryName>
   **/
  nonProprietaryName: all.OneOrMany<string>;

  /**
   * <https://schema.org/isProprietary>
   **/
  isProprietary: all.OneOrMany<string>;

  /**
   * <https://schema.org/labelDetails>
   **/
  labelDetails: all.OneOrMany<string>;

  /**
   * <https://schema.org/mechanismOfAction>
   **/
  mechanismOfAction: all.OneOrMany<string>;

  /**
   * <https://schema.org/rxcui>
   **/
  rxcui: all.OneOrMany<string>;

  /**
   * <https://schema.org/activeIngredient>
   **/
  activeIngredient: all.OneOrMany<string>;

  /**
   * <https://schema.org/doseSchedule>
   **/
  doseSchedule: all.OneOrMany<all.DoseSchedule>;

  /**
   * <https://schema.org/pregnancyWarning>
   **/
  pregnancyWarning: all.OneOrMany<string>;

  /**
   * <https://schema.org/warning>
   **/
  warning: all.OneOrMany<all.DrugWarningFieldEnum>;

  /**
   * <https://schema.org/proprietaryName>
   **/
  proprietaryName: all.OneOrMany<string>;

  /**
   * <https://schema.org/maximumIntake>
   **/
  maximumIntake: all.OneOrMany<all.MaximumDoseSchedule>;

  /**
   * <https://schema.org/administrationRoute>
   **/
  administrationRoute: all.OneOrMany<string>;

  /**
   * <https://schema.org/pregnancyCategory>
   **/
  pregnancyCategory: all.OneOrMany<all.DrugPregnancyCategoryEnum>;

  /**
   * <https://schema.org/availableStrength>
   **/
  availableStrength: all.OneOrMany<all.DrugStrength>;

  /**
   * <https://schema.org/clincalPharmacology>
   **/
  clincalPharmacology: all.OneOrMany<string>;

  /**
   * <https://schema.org/foodWarning>
   **/
  foodWarning: all.OneOrMany<string>;

  /**
   * <https://schema.org/prescribingInfo>
   **/
  prescribingInfo: all.OneOrMany<string>;

  /**
   * <https://schema.org/clinicalPharmacology>
   **/
  clinicalPharmacology: all.OneOrMany<string>;

  /**
   * <https://schema.org/interactingDrug>
   **/
  interactingDrug: all.OneOrMany<all.Drug>;

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
  isSimilarTo: all.OneOrMany<all.DrugIsSimilarToFieldEnum>;

  /**
   * <https://schema.org/colorSwatch>
   **/
  colorSwatch: all.OneOrMany<all.DrugColorSwatchFieldEnum>;

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
  weight: all.OneOrMany<all.DrugWeightFieldEnum>;

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
  model: all.OneOrMany<all.DrugModelFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.DrugIsRelatedToFieldEnum>;

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
  pattern: all.OneOrMany<all.DrugPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.DrugOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.DrugKeywordsFieldEnum>;

  /**
   * <https://schema.org/negativeNotes>
   **/
  negativeNotes: all.OneOrMany<all.DrugNegativeNotesFieldEnum>;

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
  gtin: all.OneOrMany<all.DrugGtinFieldEnum>;

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
  category: all.OneOrMany<all.DrugCategoryFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.DrugAsinFieldEnum>;

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
  logo: all.OneOrMany<all.DrugLogoFieldEnum>;

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
  brand: all.OneOrMany<all.DrugBrandFieldEnum>;

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
  width: all.OneOrMany<all.DrugWidthFieldEnum>;

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
  material: all.OneOrMany<all.DrugMaterialFieldEnum>;

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
  depth: all.OneOrMany<all.DrugDepthFieldEnum>;

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
  positiveNotes: all.OneOrMany<all.DrugPositiveNotesFieldEnum>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.DrugSizeFieldEnum>;

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
  height: all.OneOrMany<all.DrugHeightFieldEnum>;

  /**
   * <https://schema.org/purchaseDate>
   **/
  purchaseDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/isVariantOf>
   **/
  isVariantOf: all.OneOrMany<all.DrugIsVariantOfFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.DrugMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DrugIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DrugDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DrugSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DrugAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DrugImageFieldEnum>;

  /**
   * <https://schema.org/relevantSpecialty>
   **/
  relevantSpecialty: all.OneOrMany<all.MedicalSpecialtyEnum>;

  /**
   * <https://schema.org/recognizingAuthority>
   **/
  recognizingAuthority: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/medicineSystem>
   **/
  medicineSystem: all.OneOrMany<all.MedicineSystemEnum>;

  /**
   * <https://schema.org/guideline>
   **/
  guideline: all.OneOrMany<all.MedicalGuideline>;

  /**
   * <https://schema.org/study>
   **/
  study: all.OneOrMany<all.MedicalStudy>;

  /**
   * <https://schema.org/code>
   **/
  code: all.OneOrMany<all.MedicalCode>;
}
