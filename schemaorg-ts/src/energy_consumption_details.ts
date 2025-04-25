import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EnergyConsumptionDetailsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EnergyConsumptionDetails>
 **/
export interface EnergyConsumptionDetails {
  "@context": string;
  "@type": "EnergyConsumptionDetails";

  /**
   * <https://schema.org/hasEnergyEfficiencyCategory>
   **/
  hasEnergyEfficiencyCategory: all.OneOrMany<all.EnergyEfficiencyEnumeration>;

  /**
   * <https://schema.org/energyEfficiencyScaleMin>
   **/
  energyEfficiencyScaleMin: all.OneOrMany<all.EUEnergyEfficiencyEnumerationEnum>;

  /**
   * <https://schema.org/energyEfficiencyScaleMax>
   **/
  energyEfficiencyScaleMax: all.OneOrMany<all.EUEnergyEfficiencyEnumerationEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EnergyConsumptionDetailsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EnergyConsumptionDetailsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EnergyConsumptionDetailsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EnergyConsumptionDetailsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EnergyConsumptionDetailsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EnergyConsumptionDetailsImageFieldEnum>;
}
