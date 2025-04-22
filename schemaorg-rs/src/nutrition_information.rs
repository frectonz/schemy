use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type NutritionInformationAdditionalTypeFieldEnum = String;
///<https://schema.org/NutritionInformation>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct NutritionInformation {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/proteinContent>
    #[serde(rename = "proteinContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub protein_content: Vec<Mass>,
    ///<https://schema.org/servingSize>
    #[serde(rename = "servingSize")]
    #[serde_as(as = "OneOrMany<_>")]
    pub serving_size: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<NutritionInformationIdentifierFieldEnum>,
    ///<https://schema.org/transFatContent>
    #[serde(rename = "transFatContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub trans_fat_content: Vec<Mass>,
    ///<https://schema.org/sugarContent>
    #[serde(rename = "sugarContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sugar_content: Vec<Mass>,
    ///<https://schema.org/sodiumContent>
    #[serde(rename = "sodiumContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sodium_content: Vec<Mass>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/unsaturatedFatContent>
    #[serde(rename = "unsaturatedFatContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unsaturated_fat_content: Vec<Mass>,
    ///<https://schema.org/carbohydrateContent>
    #[serde(rename = "carbohydrateContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub carbohydrate_content: Vec<Mass>,
    ///<https://schema.org/fatContent>
    #[serde(rename = "fatContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fat_content: Vec<Mass>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<NutritionInformationSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/cholesterolContent>
    #[serde(rename = "cholesterolContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub cholesterol_content: Vec<Mass>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<NutritionInformationAdditionalTypeFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<NutritionInformationDescriptionFieldEnum>,
    ///<https://schema.org/calories>
    #[serde(rename = "calories")]
    #[serde_as(as = "OneOrMany<_>")]
    pub calories: Vec<Energy>,
    ///<https://schema.org/fiberContent>
    #[serde(rename = "fiberContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fiber_content: Vec<Mass>,
    ///<https://schema.org/saturatedFatContent>
    #[serde(rename = "saturatedFatContent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub saturated_fat_content: Vec<Mass>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<NutritionInformationImageFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<NutritionInformationMainEntityOfPageFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
}
