use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type TaxonAdditionalTypeFieldEnum = String;
///<https://schema.org/Taxon>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Taxon {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/childTaxon>
    #[serde(rename = "childTaxon")]
    #[serde_as(as = "OneOrMany<_>")]
    pub child_taxon: Vec<TaxonChildTaxonFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<TaxonImageFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<TaxonMainEntityOfPageFieldEnum>,
    ///<https://schema.org/parentTaxon>
    #[serde(rename = "parentTaxon")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parent_taxon: Vec<TaxonParentTaxonFieldEnum>,
    ///<https://schema.org/taxonRank>
    #[serde(rename = "taxonRank")]
    #[serde_as(as = "OneOrMany<_>")]
    pub taxon_rank: Vec<TaxonTaxonRankFieldEnum>,
    ///<https://schema.org/hasDefinedTerm>
    #[serde(rename = "hasDefinedTerm")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_defined_term: Vec<DefinedTerm>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<TaxonAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<TaxonSubjectOfFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<TaxonIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<TaxonDescriptionFieldEnum>,
}
