import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ChemicalSubstanceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ChemicalSubstance>
 **/
export interface ChemicalSubstance {
  "@context": string;
  "@type": "ChemicalSubstance";

  /**
   * <https://schema.org/potentialUse>
   **/
  potentialUse: all.OneOrMany<all.DefinedTerm>;

  /**
   * <https://schema.org/chemicalComposition>
   **/
  chemicalComposition: all.OneOrMany<string>;

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
  hasRepresentation: all.OneOrMany<all.ChemicalSubstanceHasRepresentationFieldEnum>;

  /**
   * <https://schema.org/hasBioChemEntityPart>
   **/
  hasBioChemEntityPart: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/taxonomicRange>
   **/
  taxonomicRange: all.OneOrMany<all.ChemicalSubstanceTaxonomicRangeFieldEnum>;

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
  isInvolvedInBiologicalProcess: all.OneOrMany<all.ChemicalSubstanceIsInvolvedInBiologicalProcessFieldEnum>;

  /**
   * <https://schema.org/associatedDisease>
   **/
  associatedDisease: all.OneOrMany<all.ChemicalSubstanceAssociatedDiseaseFieldEnum>;

  /**
   * <https://schema.org/bioChemInteraction>
   **/
  bioChemInteraction: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/isLocatedInSubcellularLocation>
   **/
  isLocatedInSubcellularLocation: all.OneOrMany<all.ChemicalSubstanceIsLocatedInSubcellularLocationFieldEnum>;

  /**
   * <https://schema.org/hasMolecularFunction>
   **/
  hasMolecularFunction: all.OneOrMany<all.ChemicalSubstanceHasMolecularFunctionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.ChemicalSubstanceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ChemicalSubstanceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ChemicalSubstanceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ChemicalSubstanceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ChemicalSubstanceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ChemicalSubstanceImageFieldEnum>;
}
