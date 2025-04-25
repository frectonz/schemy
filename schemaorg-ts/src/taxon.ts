import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type TaxonAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Taxon>
 **/
export interface Taxon {
  "@context": string;
  "@type": "Taxon";

  /**
   * <https://schema.org/parentTaxon>
   **/
  parentTaxon: all.OneOrMany<all.TaxonParentTaxonFieldEnum>;

  /**
   * <https://schema.org/hasDefinedTerm>
   **/
  hasDefinedTerm: all.OneOrMany<all.DefinedTerm>;

  /**
   * <https://schema.org/childTaxon>
   **/
  childTaxon: all.OneOrMany<all.TaxonChildTaxonFieldEnum>;

  /**
   * <https://schema.org/taxonRank>
   **/
  taxonRank: all.OneOrMany<all.TaxonTaxonRankFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TaxonMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TaxonIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TaxonDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TaxonSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TaxonAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TaxonImageFieldEnum>;
}
