use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type MolecularEntityAdditionalTypeFieldEnum = String;
///<https://schema.org/MolecularEntity>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MolecularEntity {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/molecularWeight>
    #[serde(rename = "molecularWeight")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub molecular_weight: Vec<MolecularEntityMolecularWeightFieldEnum>,
    ///<https://schema.org/monoisotopicMolecularWeight>
    #[serde(rename = "monoisotopicMolecularWeight")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub monoisotopic_molecular_weight: Vec<
        MolecularEntityMonoisotopicMolecularWeightFieldEnum,
    >,
    ///<https://schema.org/potentialUse>
    #[serde(rename = "potentialUse")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub potential_use: Vec<DefinedTerm>,
    ///<https://schema.org/inChI>
    #[serde(rename = "inChI")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_ch_i: Vec<String>,
    ///<https://schema.org/iupacName>
    #[serde(rename = "iupacName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub iupac_name: Vec<String>,
    ///<https://schema.org/molecularFormula>
    #[serde(rename = "molecularFormula")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub molecular_formula: Vec<String>,
    ///<https://schema.org/inChIKey>
    #[serde(rename = "inChIKey")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_ch_i_key: Vec<String>,
    ///<https://schema.org/smiles>
    #[serde(rename = "smiles")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub smiles: Vec<String>,
    ///<https://schema.org/chemicalRole>
    #[serde(rename = "chemicalRole")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub chemical_role: Vec<DefinedTerm>,
    ///<https://schema.org/bioChemSimilarity>
    #[serde(rename = "bioChemSimilarity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub bio_chem_similarity: Vec<BioChemEntity>,
    ///<https://schema.org/hasRepresentation>
    #[serde(rename = "hasRepresentation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub has_representation: Vec<MolecularEntityHasRepresentationFieldEnum>,
    ///<https://schema.org/hasBioChemEntityPart>
    #[serde(rename = "hasBioChemEntityPart")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub has_bio_chem_entity_part: Vec<BioChemEntity>,
    ///<https://schema.org/taxonomicRange>
    #[serde(rename = "taxonomicRange")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub taxonomic_range: Vec<MolecularEntityTaxonomicRangeFieldEnum>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funding: Vec<Grant>,
    ///<https://schema.org/isEncodedByBioChemEntity>
    #[serde(rename = "isEncodedByBioChemEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_encoded_by_bio_chem_entity: Vec<Gene>,
    ///<https://schema.org/isInvolvedInBiologicalProcess>
    #[serde(rename = "isInvolvedInBiologicalProcess")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_involved_in_biological_process: Vec<
        MolecularEntityIsInvolvedInBiologicalProcessFieldEnum,
    >,
    ///<https://schema.org/associatedDisease>
    #[serde(rename = "associatedDisease")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub associated_disease: Vec<MolecularEntityAssociatedDiseaseFieldEnum>,
    ///<https://schema.org/bioChemInteraction>
    #[serde(rename = "bioChemInteraction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub bio_chem_interaction: Vec<BioChemEntity>,
    ///<https://schema.org/isLocatedInSubcellularLocation>
    #[serde(rename = "isLocatedInSubcellularLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_located_in_subcellular_location: Vec<
        MolecularEntityIsLocatedInSubcellularLocationFieldEnum,
    >,
    ///<https://schema.org/hasMolecularFunction>
    #[serde(rename = "hasMolecularFunction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub has_molecular_function: Vec<MolecularEntityHasMolecularFunctionFieldEnum>,
    ///<https://schema.org/biologicalRole>
    #[serde(rename = "biologicalRole")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub biological_role: Vec<DefinedTerm>,
    ///<https://schema.org/isPartOfBioChemEntity>
    #[serde(rename = "isPartOfBioChemEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_part_of_bio_chem_entity: Vec<BioChemEntity>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<MolecularEntityMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifier: Vec<MolecularEntityIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<MolecularEntityDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<MolecularEntitySubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<MolecularEntityAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub image: Vec<MolecularEntityImageFieldEnum>,
}
