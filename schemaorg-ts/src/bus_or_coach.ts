import type * as all from "./index";

/**
 * <https://schema.org/gtin>
 **/
export type BusOrCoachGtinFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type BusOrCoachAsinFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BusOrCoachAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BusOrCoach>
 **/
export interface BusOrCoach {
  "@context": string;
  "@type": "BusOrCoach";

  /**
   * <https://schema.org/acrissCode>
   **/
  acrissCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/roofLoad>
   **/
  roofLoad: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/mileageFromOdometer>
   **/
  mileageFromOdometer: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/fuelCapacity>
   **/
  fuelCapacity: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/vehicleTransmission>
   **/
  vehicleTransmission: all.OneOrMany<all.BusOrCoachVehicleTransmissionFieldEnum>;

  /**
   * <https://schema.org/bodyType>
   **/
  bodyType: all.OneOrMany<all.BusOrCoachBodyTypeFieldEnum>;

  /**
   * <https://schema.org/vehicleInteriorColor>
   **/
  vehicleInteriorColor: all.OneOrMany<string>;

  /**
   * <https://schema.org/fuelConsumption>
   **/
  fuelConsumption: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/productionDate>
   **/
  productionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/vehicleSpecialUsage>
   **/
  vehicleSpecialUsage: all.OneOrMany<all.BusOrCoachVehicleSpecialUsageFieldEnum>;

  /**
   * <https://schema.org/numberOfForwardGears>
   **/
  numberOfForwardGears: all.OneOrMany<all.BusOrCoachNumberOfForwardGearsFieldEnum>;

  /**
   * <https://schema.org/fuelEfficiency>
   **/
  fuelEfficiency: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/vehicleModelDate>
   **/
  vehicleModelDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/vehicleEngine>
   **/
  vehicleEngine: all.OneOrMany<all.EngineSpecification>;

  /**
   * <https://schema.org/numberOfDoors>
   **/
  numberOfDoors: all.OneOrMany<all.BusOrCoachNumberOfDoorsFieldEnum>;

  /**
   * <https://schema.org/numberOfPreviousOwners>
   **/
  numberOfPreviousOwners: all.OneOrMany<all.BusOrCoachNumberOfPreviousOwnersFieldEnum>;

  /**
   * <https://schema.org/weightTotal>
   **/
  weightTotal: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/numberOfAxles>
   **/
  numberOfAxles: all.OneOrMany<all.BusOrCoachNumberOfAxlesFieldEnum>;

  /**
   * <https://schema.org/payload>
   **/
  payload: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/cargoVolume>
   **/
  cargoVolume: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/meetsEmissionStandard>
   **/
  meetsEmissionStandard: all.OneOrMany<all.BusOrCoachMeetsEmissionStandardFieldEnum>;

  /**
   * <https://schema.org/wheelbase>
   **/
  wheelbase: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/speed>
   **/
  speed: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/modelDate>
   **/
  modelDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/numberOfAirbags>
   **/
  numberOfAirbags: all.OneOrMany<all.BusOrCoachNumberOfAirbagsFieldEnum>;

  /**
   * <https://schema.org/accelerationTime>
   **/
  accelerationTime: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/callSign>
   **/
  callSign: all.OneOrMany<string>;

  /**
   * <https://schema.org/tongueWeight>
   **/
  tongueWeight: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/seatingCapacity>
   **/
  seatingCapacity: all.OneOrMany<all.BusOrCoachSeatingCapacityFieldEnum>;

  /**
   * <https://schema.org/driveWheelConfiguration>
   **/
  driveWheelConfiguration: all.OneOrMany<all.BusOrCoachDriveWheelConfigurationFieldEnum>;

  /**
   * <https://schema.org/fuelType>
   **/
  fuelType: all.OneOrMany<all.BusOrCoachFuelTypeFieldEnum>;

  /**
   * <https://schema.org/vehicleInteriorType>
   **/
  vehicleInteriorType: all.OneOrMany<string>;

  /**
   * <https://schema.org/vehicleConfiguration>
   **/
  vehicleConfiguration: all.OneOrMany<string>;

  /**
   * <https://schema.org/dateVehicleFirstRegistered>
   **/
  dateVehicleFirstRegistered: all.OneOrMany<string>;

  /**
   * <https://schema.org/vehicleIdentificationNumber>
   **/
  vehicleIdentificationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/emissionsCO2>
   **/
  emissionsCO2: all.OneOrMany<number>;

  /**
   * <https://schema.org/knownVehicleDamages>
   **/
  knownVehicleDamages: all.OneOrMany<string>;

  /**
   * <https://schema.org/vehicleSeatingCapacity>
   **/
  vehicleSeatingCapacity: all.OneOrMany<all.BusOrCoachVehicleSeatingCapacityFieldEnum>;

  /**
   * <https://schema.org/trailerWeight>
   **/
  trailerWeight: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/purchaseDate>
   **/
  purchaseDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/steeringPosition>
   **/
  steeringPosition: all.OneOrMany<all.SteeringPositionValueEnum>;

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
  isSimilarTo: all.OneOrMany<all.BusOrCoachIsSimilarToFieldEnum>;

  /**
   * <https://schema.org/colorSwatch>
   **/
  colorSwatch: all.OneOrMany<all.BusOrCoachColorSwatchFieldEnum>;

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
  weight: all.OneOrMany<all.BusOrCoachWeightFieldEnum>;

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
  model: all.OneOrMany<all.BusOrCoachModelFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.BusOrCoachIsRelatedToFieldEnum>;

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
  pattern: all.OneOrMany<all.BusOrCoachPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.BusOrCoachOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.BusOrCoachKeywordsFieldEnum>;

  /**
   * <https://schema.org/negativeNotes>
   **/
  negativeNotes: all.OneOrMany<all.BusOrCoachNegativeNotesFieldEnum>;

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
  gtin: all.OneOrMany<all.BusOrCoachGtinFieldEnum>;

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
  category: all.OneOrMany<all.BusOrCoachCategoryFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.BusOrCoachAsinFieldEnum>;

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
  logo: all.OneOrMany<all.BusOrCoachLogoFieldEnum>;

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
  brand: all.OneOrMany<all.BusOrCoachBrandFieldEnum>;

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
  width: all.OneOrMany<all.BusOrCoachWidthFieldEnum>;

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
  material: all.OneOrMany<all.BusOrCoachMaterialFieldEnum>;

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
  depth: all.OneOrMany<all.BusOrCoachDepthFieldEnum>;

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
  positiveNotes: all.OneOrMany<all.BusOrCoachPositiveNotesFieldEnum>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.BusOrCoachSizeFieldEnum>;

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
  height: all.OneOrMany<all.BusOrCoachHeightFieldEnum>;

  /**
   * <https://schema.org/isVariantOf>
   **/
  isVariantOf: all.OneOrMany<all.BusOrCoachIsVariantOfFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BusOrCoachMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BusOrCoachIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BusOrCoachDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BusOrCoachSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BusOrCoachAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BusOrCoachImageFieldEnum>;
}
