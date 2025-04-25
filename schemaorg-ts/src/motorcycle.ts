import type * as all from "./index";

/**
 * <https://schema.org/gtin>
 **/
export type MotorcycleGtinFieldEnum = string;

/**
 * <https://schema.org/asin>
 **/
export type MotorcycleAsinFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type MotorcycleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Motorcycle>
 **/
export interface Motorcycle {
  "@context": string;
  "@type": "Motorcycle";

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
  vehicleTransmission: all.OneOrMany<all.MotorcycleVehicleTransmissionFieldEnum>;

  /**
   * <https://schema.org/bodyType>
   **/
  bodyType: all.OneOrMany<all.MotorcycleBodyTypeFieldEnum>;

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
  vehicleSpecialUsage: all.OneOrMany<all.MotorcycleVehicleSpecialUsageFieldEnum>;

  /**
   * <https://schema.org/numberOfForwardGears>
   **/
  numberOfForwardGears: all.OneOrMany<all.MotorcycleNumberOfForwardGearsFieldEnum>;

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
  numberOfDoors: all.OneOrMany<all.MotorcycleNumberOfDoorsFieldEnum>;

  /**
   * <https://schema.org/numberOfPreviousOwners>
   **/
  numberOfPreviousOwners: all.OneOrMany<all.MotorcycleNumberOfPreviousOwnersFieldEnum>;

  /**
   * <https://schema.org/weightTotal>
   **/
  weightTotal: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/numberOfAxles>
   **/
  numberOfAxles: all.OneOrMany<all.MotorcycleNumberOfAxlesFieldEnum>;

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
  meetsEmissionStandard: all.OneOrMany<all.MotorcycleMeetsEmissionStandardFieldEnum>;

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
  numberOfAirbags: all.OneOrMany<all.MotorcycleNumberOfAirbagsFieldEnum>;

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
  seatingCapacity: all.OneOrMany<all.MotorcycleSeatingCapacityFieldEnum>;

  /**
   * <https://schema.org/driveWheelConfiguration>
   **/
  driveWheelConfiguration: all.OneOrMany<all.MotorcycleDriveWheelConfigurationFieldEnum>;

  /**
   * <https://schema.org/fuelType>
   **/
  fuelType: all.OneOrMany<all.MotorcycleFuelTypeFieldEnum>;

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
  vehicleSeatingCapacity: all.OneOrMany<all.MotorcycleVehicleSeatingCapacityFieldEnum>;

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
  isSimilarTo: all.OneOrMany<all.MotorcycleIsSimilarToFieldEnum>;

  /**
   * <https://schema.org/colorSwatch>
   **/
  colorSwatch: all.OneOrMany<all.MotorcycleColorSwatchFieldEnum>;

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
  weight: all.OneOrMany<all.MotorcycleWeightFieldEnum>;

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
  model: all.OneOrMany<all.MotorcycleModelFieldEnum>;

  /**
   * <https://schema.org/isRelatedTo>
   **/
  isRelatedTo: all.OneOrMany<all.MotorcycleIsRelatedToFieldEnum>;

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
  pattern: all.OneOrMany<all.MotorcyclePatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.MotorcycleOffersFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.MotorcycleKeywordsFieldEnum>;

  /**
   * <https://schema.org/negativeNotes>
   **/
  negativeNotes: all.OneOrMany<all.MotorcycleNegativeNotesFieldEnum>;

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
  gtin: all.OneOrMany<all.MotorcycleGtinFieldEnum>;

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
  category: all.OneOrMany<all.MotorcycleCategoryFieldEnum>;

  /**
   * <https://schema.org/asin>
   **/
  asin: all.OneOrMany<all.MotorcycleAsinFieldEnum>;

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
  logo: all.OneOrMany<all.MotorcycleLogoFieldEnum>;

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
  brand: all.OneOrMany<all.MotorcycleBrandFieldEnum>;

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
  width: all.OneOrMany<all.MotorcycleWidthFieldEnum>;

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
  material: all.OneOrMany<all.MotorcycleMaterialFieldEnum>;

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
  depth: all.OneOrMany<all.MotorcycleDepthFieldEnum>;

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
  positiveNotes: all.OneOrMany<all.MotorcyclePositiveNotesFieldEnum>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.MotorcycleSizeFieldEnum>;

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
  height: all.OneOrMany<all.MotorcycleHeightFieldEnum>;

  /**
   * <https://schema.org/isVariantOf>
   **/
  isVariantOf: all.OneOrMany<all.MotorcycleIsVariantOfFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.MotorcycleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MotorcycleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MotorcycleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MotorcycleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MotorcycleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MotorcycleImageFieldEnum>;
}
