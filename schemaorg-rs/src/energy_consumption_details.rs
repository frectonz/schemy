use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type EnergyConsumptionDetailsAdditionalTypeFieldEnum = String;
///<https://schema.org/EnergyConsumptionDetails>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct EnergyConsumptionDetails {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/hasEnergyEfficiencyCategory>
    #[serde(rename = "hasEnergyEfficiencyCategory")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_energy_efficiency_category: Vec<EnergyEfficiencyEnumeration>,
    ///<https://schema.org/energyEfficiencyScaleMin>
    #[serde(rename = "energyEfficiencyScaleMin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub energy_efficiency_scale_min: Vec<EUEnergyEfficiencyEnumerationEnum>,
    ///<https://schema.org/energyEfficiencyScaleMax>
    #[serde(rename = "energyEfficiencyScaleMax")]
    #[serde_as(as = "OneOrMany<_>")]
    pub energy_efficiency_scale_max: Vec<EUEnergyEfficiencyEnumerationEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<EnergyConsumptionDetailsMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<EnergyConsumptionDetailsIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<EnergyConsumptionDetailsDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<EnergyConsumptionDetailsSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<EnergyConsumptionDetailsAdditionalTypeFieldEnum>,
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
    pub image: Vec<EnergyConsumptionDetailsImageFieldEnum>,
}
