import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HealthPlanFormularyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HealthPlanFormulary>
 **/
export interface HealthPlanFormulary {
  "@context": string;
  "@type": "HealthPlanFormulary";

  /**
   * <https://schema.org/offersPrescriptionByMail>
   **/
  offersPrescriptionByMail: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanCostSharing>
   **/
  healthPlanCostSharing: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanDrugTier>
   **/
  healthPlanDrugTier: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HealthPlanFormularyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HealthPlanFormularyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HealthPlanFormularyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HealthPlanFormularySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HealthPlanFormularyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HealthPlanFormularyImageFieldEnum>;
}
