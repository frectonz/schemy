use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/gtin>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type VehicleGtinFieldEnum = String;
///<https://schema.org/asin>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type VehicleAsinFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type VehicleAdditionalTypeFieldEnum = String;
///<https://schema.org/Vehicle>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Vehicle {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/mileageFromOdometer>
    #[serde(rename = "mileageFromOdometer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mileage_from_odometer: Vec<QuantitativeValue>,
    ///<https://schema.org/fuelCapacity>
    #[serde(rename = "fuelCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fuel_capacity: Vec<QuantitativeValue>,
    ///<https://schema.org/vehicleTransmission>
    #[serde(rename = "vehicleTransmission")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_transmission: Vec<VehicleVehicleTransmissionFieldEnum>,
    ///<https://schema.org/bodyType>
    #[serde(rename = "bodyType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub body_type: Vec<VehicleBodyTypeFieldEnum>,
    ///<https://schema.org/vehicleInteriorColor>
    #[serde(rename = "vehicleInteriorColor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_interior_color: Vec<String>,
    ///<https://schema.org/fuelConsumption>
    #[serde(rename = "fuelConsumption")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fuel_consumption: Vec<QuantitativeValue>,
    ///<https://schema.org/productionDate>
    #[serde(rename = "productionDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub production_date: Vec<String>,
    ///<https://schema.org/vehicleSpecialUsage>
    #[serde(rename = "vehicleSpecialUsage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_special_usage: Vec<VehicleVehicleSpecialUsageFieldEnum>,
    ///<https://schema.org/numberOfForwardGears>
    #[serde(rename = "numberOfForwardGears")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_forward_gears: Vec<VehicleNumberOfForwardGearsFieldEnum>,
    ///<https://schema.org/fuelEfficiency>
    #[serde(rename = "fuelEfficiency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fuel_efficiency: Vec<QuantitativeValue>,
    ///<https://schema.org/vehicleModelDate>
    #[serde(rename = "vehicleModelDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_model_date: Vec<String>,
    ///<https://schema.org/vehicleEngine>
    #[serde(rename = "vehicleEngine")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_engine: Vec<EngineSpecification>,
    ///<https://schema.org/numberOfDoors>
    #[serde(rename = "numberOfDoors")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_doors: Vec<VehicleNumberOfDoorsFieldEnum>,
    ///<https://schema.org/numberOfPreviousOwners>
    #[serde(rename = "numberOfPreviousOwners")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_previous_owners: Vec<VehicleNumberOfPreviousOwnersFieldEnum>,
    ///<https://schema.org/weightTotal>
    #[serde(rename = "weightTotal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub weight_total: Vec<QuantitativeValue>,
    ///<https://schema.org/numberOfAxles>
    #[serde(rename = "numberOfAxles")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_axles: Vec<VehicleNumberOfAxlesFieldEnum>,
    ///<https://schema.org/payload>
    #[serde(rename = "payload")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payload: Vec<QuantitativeValue>,
    ///<https://schema.org/cargoVolume>
    #[serde(rename = "cargoVolume")]
    #[serde_as(as = "OneOrMany<_>")]
    pub cargo_volume: Vec<QuantitativeValue>,
    ///<https://schema.org/meetsEmissionStandard>
    #[serde(rename = "meetsEmissionStandard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub meets_emission_standard: Vec<VehicleMeetsEmissionStandardFieldEnum>,
    ///<https://schema.org/wheelbase>
    #[serde(rename = "wheelbase")]
    #[serde_as(as = "OneOrMany<_>")]
    pub wheelbase: Vec<QuantitativeValue>,
    ///<https://schema.org/speed>
    #[serde(rename = "speed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub speed: Vec<QuantitativeValue>,
    ///<https://schema.org/modelDate>
    #[serde(rename = "modelDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub model_date: Vec<String>,
    ///<https://schema.org/numberOfAirbags>
    #[serde(rename = "numberOfAirbags")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_airbags: Vec<VehicleNumberOfAirbagsFieldEnum>,
    ///<https://schema.org/accelerationTime>
    #[serde(rename = "accelerationTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub acceleration_time: Vec<QuantitativeValue>,
    ///<https://schema.org/callSign>
    #[serde(rename = "callSign")]
    #[serde_as(as = "OneOrMany<_>")]
    pub call_sign: Vec<String>,
    ///<https://schema.org/tongueWeight>
    #[serde(rename = "tongueWeight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tongue_weight: Vec<QuantitativeValue>,
    ///<https://schema.org/seatingCapacity>
    #[serde(rename = "seatingCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seating_capacity: Vec<VehicleSeatingCapacityFieldEnum>,
    ///<https://schema.org/driveWheelConfiguration>
    #[serde(rename = "driveWheelConfiguration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub drive_wheel_configuration: Vec<VehicleDriveWheelConfigurationFieldEnum>,
    ///<https://schema.org/fuelType>
    #[serde(rename = "fuelType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fuel_type: Vec<VehicleFuelTypeFieldEnum>,
    ///<https://schema.org/vehicleInteriorType>
    #[serde(rename = "vehicleInteriorType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_interior_type: Vec<String>,
    ///<https://schema.org/vehicleConfiguration>
    #[serde(rename = "vehicleConfiguration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_configuration: Vec<String>,
    ///<https://schema.org/dateVehicleFirstRegistered>
    #[serde(rename = "dateVehicleFirstRegistered")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_vehicle_first_registered: Vec<String>,
    ///<https://schema.org/vehicleIdentificationNumber>
    #[serde(rename = "vehicleIdentificationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_identification_number: Vec<String>,
    ///<https://schema.org/emissionsCO2>
    #[serde(rename = "emissionsCO2")]
    #[serde_as(as = "OneOrMany<_>")]
    pub emissions_co2: Vec<f32>,
    ///<https://schema.org/knownVehicleDamages>
    #[serde(rename = "knownVehicleDamages")]
    #[serde_as(as = "OneOrMany<_>")]
    pub known_vehicle_damages: Vec<String>,
    ///<https://schema.org/vehicleSeatingCapacity>
    #[serde(rename = "vehicleSeatingCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vehicle_seating_capacity: Vec<VehicleVehicleSeatingCapacityFieldEnum>,
    ///<https://schema.org/trailerWeight>
    #[serde(rename = "trailerWeight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub trailer_weight: Vec<QuantitativeValue>,
    ///<https://schema.org/purchaseDate>
    #[serde(rename = "purchaseDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub purchase_date: Vec<String>,
    ///<https://schema.org/steeringPosition>
    #[serde(rename = "steeringPosition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub steering_position: Vec<SteeringPositionValueEnum>,
    ///<https://schema.org/productID>
    #[serde(rename = "productID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub product_id: Vec<String>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/hasCertification>
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///<https://schema.org/isSimilarTo>
    #[serde(rename = "isSimilarTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_similar_to: Vec<VehicleIsSimilarToFieldEnum>,
    ///<https://schema.org/colorSwatch>
    #[serde(rename = "colorSwatch")]
    #[serde_as(as = "OneOrMany<_>")]
    pub color_swatch: Vec<VehicleColorSwatchFieldEnum>,
    ///<https://schema.org/countryOfAssembly>
    #[serde(rename = "countryOfAssembly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_assembly: Vec<String>,
    ///<https://schema.org/countryOfOrigin>
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///<https://schema.org/sku>
    #[serde(rename = "sku")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sku: Vec<String>,
    ///<https://schema.org/hasMerchantReturnPolicy>
    #[serde(rename = "hasMerchantReturnPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_merchant_return_policy: Vec<MerchantReturnPolicy>,
    ///<https://schema.org/weight>
    #[serde(rename = "weight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub weight: Vec<VehicleWeightFieldEnum>,
    ///<https://schema.org/mpn>
    #[serde(rename = "mpn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mpn: Vec<String>,
    ///<https://schema.org/hasGS1DigitalLink>
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///<https://schema.org/model>
    #[serde(rename = "model")]
    #[serde_as(as = "OneOrMany<_>")]
    pub model: Vec<VehicleModelFieldEnum>,
    ///<https://schema.org/isRelatedTo>
    #[serde(rename = "isRelatedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_related_to: Vec<VehicleIsRelatedToFieldEnum>,
    ///<https://schema.org/reviews>
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///<https://schema.org/gtin12>
    #[serde(rename = "gtin12")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin12: Vec<String>,
    ///<https://schema.org/pattern>
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<VehiclePatternFieldEnum>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<VehicleOffersFieldEnum>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<VehicleKeywordsFieldEnum>,
    ///<https://schema.org/negativeNotes>
    #[serde(rename = "negativeNotes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub negative_notes: Vec<VehicleNegativeNotesFieldEnum>,
    ///<https://schema.org/gtin13>
    #[serde(rename = "gtin13")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin13: Vec<String>,
    ///<https://schema.org/hasMeasurement>
    #[serde(rename = "hasMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_measurement: Vec<QuantitativeValue>,
    ///<https://schema.org/gtin>
    #[serde(rename = "gtin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin: Vec<VehicleGtinFieldEnum>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///<https://schema.org/isConsumableFor>
    #[serde(rename = "isConsumableFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_consumable_for: Vec<Product>,
    ///<https://schema.org/mobileUrl>
    #[serde(rename = "mobileUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mobile_url: Vec<String>,
    ///<https://schema.org/category>
    #[serde(rename = "category")]
    #[serde_as(as = "OneOrMany<_>")]
    pub category: Vec<VehicleCategoryFieldEnum>,
    ///<https://schema.org/asin>
    #[serde(rename = "asin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub asin: Vec<VehicleAsinFieldEnum>,
    ///<https://schema.org/color>
    #[serde(rename = "color")]
    #[serde_as(as = "OneOrMany<_>")]
    pub color: Vec<String>,
    ///<https://schema.org/countryOfLastProcessing>
    #[serde(rename = "countryOfLastProcessing")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_last_processing: Vec<String>,
    ///<https://schema.org/logo>
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<VehicleLogoFieldEnum>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///<https://schema.org/isFamilyFriendly>
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///<https://schema.org/releaseDate>
    #[serde(rename = "releaseDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub release_date: Vec<String>,
    ///<https://schema.org/brand>
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<VehicleBrandFieldEnum>,
    ///<https://schema.org/inProductGroupWithID>
    #[serde(rename = "inProductGroupWithID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_product_group_with_id: Vec<String>,
    ///<https://schema.org/manufacturer>
    #[serde(rename = "manufacturer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub manufacturer: Vec<Organization>,
    ///<https://schema.org/awards>
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///<https://schema.org/width>
    #[serde(rename = "width")]
    #[serde_as(as = "OneOrMany<_>")]
    pub width: Vec<VehicleWidthFieldEnum>,
    ///<https://schema.org/hasAdultConsideration>
    #[serde(rename = "hasAdultConsideration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_adult_consideration: Vec<AdultOrientedEnumerationEnum>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///<https://schema.org/material>
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<VehicleMaterialFieldEnum>,
    ///<https://schema.org/additionalProperty>
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
    ///<https://schema.org/slogan>
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///<https://schema.org/depth>
    #[serde(rename = "depth")]
    #[serde_as(as = "OneOrMany<_>")]
    pub depth: Vec<VehicleDepthFieldEnum>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///<https://schema.org/itemCondition>
    #[serde(rename = "itemCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub item_condition: Vec<OfferItemConditionEnum>,
    ///<https://schema.org/nsn>
    #[serde(rename = "nsn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub nsn: Vec<String>,
    ///<https://schema.org/positiveNotes>
    #[serde(rename = "positiveNotes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub positive_notes: Vec<VehiclePositiveNotesFieldEnum>,
    ///<https://schema.org/size>
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<VehicleSizeFieldEnum>,
    ///<https://schema.org/hasEnergyConsumptionDetails>
    #[serde(rename = "hasEnergyConsumptionDetails")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_energy_consumption_details: Vec<EnergyConsumptionDetails>,
    ///<https://schema.org/gtin14>
    #[serde(rename = "gtin14")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin14: Vec<String>,
    ///<https://schema.org/height>
    #[serde(rename = "height")]
    #[serde_as(as = "OneOrMany<_>")]
    pub height: Vec<VehicleHeightFieldEnum>,
    ///<https://schema.org/isVariantOf>
    #[serde(rename = "isVariantOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_variant_of: Vec<VehicleIsVariantOfFieldEnum>,
    ///<https://schema.org/gtin8>
    #[serde(rename = "gtin8")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin8: Vec<String>,
    ///<https://schema.org/isAccessoryOrSparePartFor>
    #[serde(rename = "isAccessoryOrSparePartFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessory_or_spare_part_for: Vec<Product>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<VehicleMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<VehicleIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<VehicleDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<VehicleSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<VehicleAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<VehicleImageFieldEnum>,
}
