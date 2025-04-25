import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ProteinAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Protein>
 **/
export interface Protein {
  "@context": string;
  "@type": "Protein";

  /**
   * <https://schema.org/hasBioPolymerSequence>
   **/
  hasBioPolymerSequence: all.OneOrMany<string>;

  /**
   * <https://schema.org/bioChemSimilarity>
   **/
  bioChemSimilarity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/hasRepresentation>
   **/
  hasRepresentation: all.OneOrMany<all.ProteinHasRepresentationFieldEnum>;

  /**
   * <https://schema.org/hasBioChemEntityPart>
   **/
  hasBioChemEntityPart: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/taxonomicRange>
   **/
  taxonomicRange: all.OneOrMany<all.ProteinTaxonomicRangeFieldEnum>;

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
  isInvolvedInBiologicalProcess: all.OneOrMany<all.ProteinIsInvolvedInBiologicalProcessFieldEnum>;

  /**
   * <https://schema.org/associatedDisease>
   **/
  associatedDisease: all.OneOrMany<all.ProteinAssociatedDiseaseFieldEnum>;

  /**
   * <https://schema.org/bioChemInteraction>
   **/
  bioChemInteraction: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/isLocatedInSubcellularLocation>
   **/
  isLocatedInSubcellularLocation: all.OneOrMany<all.ProteinIsLocatedInSubcellularLocationFieldEnum>;

  /**
   * <https://schema.org/hasMolecularFunction>
   **/
  hasMolecularFunction: all.OneOrMany<all.ProteinHasMolecularFunctionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.ProteinMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ProteinIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ProteinDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ProteinSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ProteinAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ProteinImageFieldEnum>;
}
