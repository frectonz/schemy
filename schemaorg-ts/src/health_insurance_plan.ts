import type * as all from "./index";

/**
 * <https://schema.org/usesHealthPlanIdStandard>
 **/
export type HealthInsurancePlanUsesHealthPlanIdStandardFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type HealthInsurancePlanAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HealthInsurancePlan>
 **/
export interface HealthInsurancePlan {
  "@context": string;
  "@type": "HealthInsurancePlan";

  /**
   * <https://schema.org/includesHealthPlanNetwork>
   **/
  includesHealthPlanNetwork: all.OneOrMany<all.HealthPlanNetwork>;

  /**
   * <https://schema.org/usesHealthPlanIdStandard>
   **/
  usesHealthPlanIdStandard: all.OneOrMany<all.HealthInsurancePlanUsesHealthPlanIdStandardFieldEnum>;

  /**
   * <https://schema.org/healthPlanDrugOption>
   **/
  healthPlanDrugOption: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanId>
   **/
  healthPlanId: all.OneOrMany<string>;

  /**
   * <https://schema.org/benefitsSummaryUrl>
   **/
  benefitsSummaryUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanMarketingUrl>
   **/
  healthPlanMarketingUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanDrugTier>
   **/
  healthPlanDrugTier: all.OneOrMany<string>;

  /**
   * <https://schema.org/includesHealthPlanFormulary>
   **/
  includesHealthPlanFormulary: all.OneOrMany<all.HealthPlanFormulary>;

  /**
   * <https://schema.org/contactPoint>
   **/
  contactPoint: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HealthInsurancePlanMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HealthInsurancePlanIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HealthInsurancePlanDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HealthInsurancePlanSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HealthInsurancePlanAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HealthInsurancePlanImageFieldEnum>;
}
