import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HealthPlanNetworkAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/HealthPlanNetwork>
 **/
export interface HealthPlanNetwork {
  "@context": string;
  "@type": "HealthPlanNetwork";

  /**
   * <https://schema.org/healthPlanCostSharing>
   **/
  healthPlanCostSharing: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanNetworkId>
   **/
  healthPlanNetworkId: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanNetworkTier>
   **/
  healthPlanNetworkTier: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HealthPlanNetworkMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HealthPlanNetworkIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HealthPlanNetworkDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HealthPlanNetworkSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HealthPlanNetworkAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HealthPlanNetworkImageFieldEnum>;
}
