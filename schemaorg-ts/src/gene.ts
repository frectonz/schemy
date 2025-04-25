import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GeneAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Gene>
 **/
export interface Gene {
  "@context": string;
  "@type": "Gene";

  /**
   * <https://schema.org/encodesBioChemEntity>
   **/
  encodesBioChemEntity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/alternativeOf>
   **/
  alternativeOf: all.OneOrMany<all.Gene>;

  /**
   * <https://schema.org/hasBioPolymerSequence>
   **/
  hasBioPolymerSequence: all.OneOrMany<string>;

  /**
   * <https://schema.org/expressedIn>
   **/
  expressedIn: all.OneOrMany<all.GeneExpressedInFieldEnum>;

  /**
   * <https://schema.org/bioChemSimilarity>
   **/
  bioChemSimilarity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/hasRepresentation>
   **/
  hasRepresentation: all.OneOrMany<all.GeneHasRepresentationFieldEnum>;

  /**
   * <https://schema.org/hasBioChemEntityPart>
   **/
  hasBioChemEntityPart: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/taxonomicRange>
   **/
  taxonomicRange: all.OneOrMany<all.GeneTaxonomicRangeFieldEnum>;

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
  isInvolvedInBiologicalProcess: all.OneOrMany<all.GeneIsInvolvedInBiologicalProcessFieldEnum>;

  /**
   * <https://schema.org/associatedDisease>
   **/
  associatedDisease: all.OneOrMany<all.GeneAssociatedDiseaseFieldEnum>;

  /**
   * <https://schema.org/bioChemInteraction>
   **/
  bioChemInteraction: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/isLocatedInSubcellularLocation>
   **/
  isLocatedInSubcellularLocation: all.OneOrMany<all.GeneIsLocatedInSubcellularLocationFieldEnum>;

  /**
   * <https://schema.org/hasMolecularFunction>
   **/
  hasMolecularFunction: all.OneOrMany<all.GeneHasMolecularFunctionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.GeneMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GeneIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GeneDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GeneSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GeneAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GeneImageFieldEnum>;
}
