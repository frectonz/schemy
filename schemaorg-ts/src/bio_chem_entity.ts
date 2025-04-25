import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type BioChemEntityAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BioChemEntity>
 **/
export interface BioChemEntity {
  "@context": string;
  "@type": "BioChemEntity";

  /**
   * <https://schema.org/bioChemSimilarity>
   **/
  bioChemSimilarity: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/hasRepresentation>
   **/
  hasRepresentation: all.OneOrMany<all.BioChemEntityHasRepresentationFieldEnum>;

  /**
   * <https://schema.org/hasBioChemEntityPart>
   **/
  hasBioChemEntityPart: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/taxonomicRange>
   **/
  taxonomicRange: all.OneOrMany<all.BioChemEntityTaxonomicRangeFieldEnum>;

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
  isInvolvedInBiologicalProcess: all.OneOrMany<all.BioChemEntityIsInvolvedInBiologicalProcessFieldEnum>;

  /**
   * <https://schema.org/associatedDisease>
   **/
  associatedDisease: all.OneOrMany<all.BioChemEntityAssociatedDiseaseFieldEnum>;

  /**
   * <https://schema.org/bioChemInteraction>
   **/
  bioChemInteraction: all.OneOrMany<all.BioChemEntity>;

  /**
   * <https://schema.org/isLocatedInSubcellularLocation>
   **/
  isLocatedInSubcellularLocation: all.OneOrMany<all.BioChemEntityIsLocatedInSubcellularLocationFieldEnum>;

  /**
   * <https://schema.org/hasMolecularFunction>
   **/
  hasMolecularFunction: all.OneOrMany<all.BioChemEntityHasMolecularFunctionFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.BioChemEntityMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BioChemEntityIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BioChemEntityDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BioChemEntitySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BioChemEntityAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BioChemEntityImageFieldEnum>;
}
