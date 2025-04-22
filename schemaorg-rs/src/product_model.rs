use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type ProductModelAdditionalTypeFieldEnum = String;
///https://schema.org/asin
///https://schema.org/Text
///https://schema.org/URL
pub type ProductModelAsinFieldEnum = String;
///https://schema.org/gtin
///https://schema.org/Text
///https://schema.org/URL
pub type ProductModelGtinFieldEnum = String;
///https://schema.org/ProductModel
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ProductModel {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/purchaseDate
    #[serde(rename = "purchaseDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub purchase_date: Vec<String>,
    ///https://schema.org/logo
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<ProductModelLogoFieldEnum>,
    ///https://schema.org/manufacturer
    #[serde(rename = "manufacturer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub manufacturer: Vec<Organization>,
    ///https://schema.org/audience
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///https://schema.org/hasMerchantReturnPolicy
    #[serde(rename = "hasMerchantReturnPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_merchant_return_policy: Vec<MerchantReturnPolicy>,
    ///https://schema.org/isVariantOf
    #[serde(rename = "isVariantOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_variant_of: Vec<ProductModelIsVariantOfFieldEnum>,
    ///https://schema.org/color
    #[serde(rename = "color")]
    #[serde_as(as = "OneOrMany<_>")]
    pub color: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ProductModelImageFieldEnum>,
    ///https://schema.org/successorOf
    #[serde(rename = "successorOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub successor_of: Vec<ProductModel>,
    ///https://schema.org/weight
    #[serde(rename = "weight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub weight: Vec<ProductModelWeightFieldEnum>,
    ///https://schema.org/sku
    #[serde(rename = "sku")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sku: Vec<String>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/gtin14
    #[serde(rename = "gtin14")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin14: Vec<String>,
    ///https://schema.org/gtin8
    #[serde(rename = "gtin8")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin8: Vec<String>,
    ///https://schema.org/hasCertification
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///https://schema.org/countryOfAssembly
    #[serde(rename = "countryOfAssembly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_assembly: Vec<String>,
    ///https://schema.org/countryOfLastProcessing
    #[serde(rename = "countryOfLastProcessing")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_last_processing: Vec<String>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ProductModelSubjectOfFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ProductModelAdditionalTypeFieldEnum>,
    ///https://schema.org/brand
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<ProductModelBrandFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/negativeNotes
    #[serde(rename = "negativeNotes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub negative_notes: Vec<ProductModelNegativeNotesFieldEnum>,
    ///https://schema.org/hasEnergyConsumptionDetails
    #[serde(rename = "hasEnergyConsumptionDetails")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_energy_consumption_details: Vec<EnergyConsumptionDetails>,
    ///https://schema.org/isRelatedTo
    #[serde(rename = "isRelatedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_related_to: Vec<ProductModelIsRelatedToFieldEnum>,
    ///https://schema.org/gtin13
    #[serde(rename = "gtin13")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin13: Vec<String>,
    ///https://schema.org/slogan
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///https://schema.org/productID
    #[serde(rename = "productID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub product_id: Vec<String>,
    ///https://schema.org/releaseDate
    #[serde(rename = "releaseDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub release_date: Vec<String>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<ProductModelKeywordsFieldEnum>,
    ///https://schema.org/model
    #[serde(rename = "model")]
    #[serde_as(as = "OneOrMany<_>")]
    pub model: Vec<ProductModelModelFieldEnum>,
    ///https://schema.org/pattern
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<ProductModelPatternFieldEnum>,
    ///https://schema.org/asin
    #[serde(rename = "asin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub asin: Vec<ProductModelAsinFieldEnum>,
    ///https://schema.org/mpn
    #[serde(rename = "mpn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mpn: Vec<String>,
    ///https://schema.org/gtin12
    #[serde(rename = "gtin12")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin12: Vec<String>,
    ///https://schema.org/size
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<ProductModelSizeFieldEnum>,
    ///https://schema.org/productionDate
    #[serde(rename = "productionDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub production_date: Vec<String>,
    ///https://schema.org/awards
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ProductModelIdentifierFieldEnum>,
    ///https://schema.org/isAccessoryOrSparePartFor
    #[serde(rename = "isAccessoryOrSparePartFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessory_or_spare_part_for: Vec<Product>,
    ///https://schema.org/hasAdultConsideration
    #[serde(rename = "hasAdultConsideration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_adult_consideration: Vec<AdultOrientedEnumerationEnum>,
    ///https://schema.org/countryOfOrigin
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<ProductModelOffersFieldEnum>,
    ///https://schema.org/category
    #[serde(rename = "category")]
    #[serde_as(as = "OneOrMany<_>")]
    pub category: Vec<ProductModelCategoryFieldEnum>,
    ///https://schema.org/height
    #[serde(rename = "height")]
    #[serde_as(as = "OneOrMany<_>")]
    pub height: Vec<ProductModelHeightFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/colorSwatch
    #[serde(rename = "colorSwatch")]
    #[serde_as(as = "OneOrMany<_>")]
    pub color_swatch: Vec<ProductModelColorSwatchFieldEnum>,
    ///https://schema.org/isConsumableFor
    #[serde(rename = "isConsumableFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_consumable_for: Vec<Product>,
    ///https://schema.org/itemCondition
    #[serde(rename = "itemCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub item_condition: Vec<OfferItemConditionEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ProductModelMainEntityOfPageFieldEnum>,
    ///https://schema.org/width
    #[serde(rename = "width")]
    #[serde_as(as = "OneOrMany<_>")]
    pub width: Vec<ProductModelWidthFieldEnum>,
    ///https://schema.org/nsn
    #[serde(rename = "nsn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub nsn: Vec<String>,
    ///https://schema.org/additionalProperty
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/hasMeasurement
    #[serde(rename = "hasMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_measurement: Vec<QuantitativeValue>,
    ///https://schema.org/gtin
    #[serde(rename = "gtin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gtin: Vec<ProductModelGtinFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ProductModelDescriptionFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/inProductGroupWithID
    #[serde(rename = "inProductGroupWithID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_product_group_with_id: Vec<String>,
    ///https://schema.org/mobileUrl
    #[serde(rename = "mobileUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mobile_url: Vec<String>,
    ///https://schema.org/isSimilarTo
    #[serde(rename = "isSimilarTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_similar_to: Vec<ProductModelIsSimilarToFieldEnum>,
    ///https://schema.org/depth
    #[serde(rename = "depth")]
    #[serde_as(as = "OneOrMany<_>")]
    pub depth: Vec<ProductModelDepthFieldEnum>,
    ///https://schema.org/positiveNotes
    #[serde(rename = "positiveNotes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub positive_notes: Vec<ProductModelPositiveNotesFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/predecessorOf
    #[serde(rename = "predecessorOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub predecessor_of: Vec<ProductModel>,
    ///https://schema.org/isFamilyFriendly
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///https://schema.org/hasGS1DigitalLink
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///https://schema.org/material
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<ProductModelMaterialFieldEnum>,
}
