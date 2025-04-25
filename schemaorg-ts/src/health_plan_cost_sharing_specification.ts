import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HealthPlanCostSharingSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HealthPlanCostSharingSpecification>
 **/
export interface HealthPlanCostSharingSpecification {
  "@context": string;
  "@type": "HealthPlanCostSharingSpecification";

  /**
   * <https://schema.org/healthPlanCoinsuranceOption>
   **/
  healthPlanCoinsuranceOption: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanCopay>
   **/
  healthPlanCopay: all.OneOrMany<all.PriceSpecification>;

  /**
   * <https://schema.org/healthPlanCoinsuranceRate>
   **/
  healthPlanCoinsuranceRate: all.OneOrMany<number>;

  /**
   * <https://schema.org/healthPlanCopayOption>
   **/
  healthPlanCopayOption: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanPharmacyCategory>
   **/
  healthPlanPharmacyCategory: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HealthPlanCostSharingSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HealthPlanCostSharingSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HealthPlanCostSharingSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HealthPlanCostSharingSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HealthPlanCostSharingSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HealthPlanCostSharingSpecificationImageFieldEnum>;
}
