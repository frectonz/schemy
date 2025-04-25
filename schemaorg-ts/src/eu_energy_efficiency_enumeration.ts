import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EUEnergyEfficiencyEnumerationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EUEnergyEfficiencyEnumeration>
 **/
export interface EUEnergyEfficiencyEnumeration {
  "@context": string;
  "@type": "EUEnergyEfficiencyEnumeration";

  /**
   * <https://schema.org/supersededBy>
   **/
  supersededBy: all.OneOrMany<all.EUEnergyEfficiencyEnumerationSupersededByFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EUEnergyEfficiencyEnumerationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EUEnergyEfficiencyEnumerationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EUEnergyEfficiencyEnumerationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EUEnergyEfficiencyEnumerationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EUEnergyEfficiencyEnumerationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EUEnergyEfficiencyEnumerationImageFieldEnum>;
}
