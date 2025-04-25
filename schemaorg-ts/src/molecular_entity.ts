import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MolecularEntityAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MolecularEntity>
 **/
export interface MolecularEntity {
  "@context": string;
  "@type": "MolecularEntity";

  /**
   * <https://schema.org/molecularWeight>
   **/
  molecularWeight: all.OneOrMany<all.MolecularEntityMolecularWeightFieldEnum>;

  /**
   * <https://schema.org/monoisotopicMolecularWeight>
   **/
  monoisotopicMolecularWeight: all.OneOrMany<all.MolecularEntityMonoisotopicMolecularWeightFieldEnum>;

  /**
   * <https://schema.org/potentialUse>
   **/
  potentialUse: all.OneOrMany<all.DefinedTerm>;

  /**
   * <https://schema.org/inChI>
   **/
  inChI: all.OneOrMany<string>;

  /**
   * <https://schema.org/iupacName>
   **/
  iupacName: all.OneOrMany<string>;

  /**
   * <https://schema.org/molecularFormula>
   **/
  molecularFormula: all.OneOrMany<string>;

  /**
   * <https://schema.org/inChIKey>
   **/
  inChIKey: all.OneOrMany<string>;

  /**
   * <https://schema.org/smiles>
   **/
  smiles: all.OneOrMany<string>;

  /**
   * <https://schema.org/chemicalRole>
   **/
  chemicalRole: all.OneOrMany<all.DefinedTerm>;

  /**
   * <https://schema.org/bioChemSimilarity>
   **/
  bioChemSimilarity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/hasRepresentation>
   **/
  hasRepresentation: all.OneOrMany<all.MolecularEntityHasRepresentationFieldEnum>;

  /**
   * <https://schema.org/hasBioChemEntityPart>
   **/
  hasBioChemEntityPart: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/taxonomicRange>
   **/
  taxonomicRange: all.OneOrMany<all.MolecularEntityTaxonomicRangeFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/isEncodedByBioChemEntity>
   **/
  isEncodedByBioChemEntity: all.OneOrMany<all.Gene>;

  /**
   * <https://schema.org/isInvolvedInBiologicalProcess>
   **/
  isInvolvedInBiologicalProcess: all.OneOrMany<all.MolecularEntityIsInvolvedInBiologicalProcessFieldEnum>;

  /**
   * <https://schema.org/associatedDisease>
   **/
  associatedDisease: all.OneOrMany<all.MolecularEntityAssociatedDiseaseFieldEnum>;

  /**
   * <https://schema.org/bioChemInteraction>
   **/
  bioChemInteraction: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/isLocatedInSubcellularLocation>
   **/
  isLocatedInSubcellularLocation: all.OneOrMany<all.MolecularEntityIsLocatedInSubcellularLocationFieldEnum>;

  /**
   * <https://schema.org/hasMolecularFunction>
   **/
  hasMolecularFunction: all.OneOrMany<all.MolecularEntityHasMolecularFunctionFieldEnum>;

  /**
   * <https://schema.org/biologicalRole>
   **/
  biologicalRole: all.OneOrMany<all.DefinedTerm>;

  /**
   * <https://schema.org/isPartOfBioChemEntity>
   **/
  isPartOfBioChemEntity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MolecularEntityMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MolecularEntityIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MolecularEntityDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MolecularEntitySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MolecularEntityAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MolecularEntityImageFieldEnum>;
}
