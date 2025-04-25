import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EnergyStarEnergyEfficiencyEnumerationAdditionalTypeFieldEnum =
  string;

/**
 * <https://schema.org/EnergyStarEnergyEfficiencyEnumeration>
 **/
export interface EnergyStarEnergyEfficiencyEnumeration {
  "@context": string;
  "@type": "EnergyStarEnergyEfficiencyEnumeration";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EnergyStarEnergyEfficiencyEnumerationImageFieldEnum>;
}
