import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ServicePeriodAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ServicePeriod>
 **/
export interface ServicePeriod {
  "@context": string;
  "@type": "ServicePeriod";

  /**
   * <https://schema.org/businessDays>
   **/
  businessDays: all.OneOrMany<all.ServicePeriodBusinessDaysFieldEnum>;

  /**
   * <https://schema.org/cutoffTime>
   **/
  cutoffTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/duration>
   **/
  duration: all.OneOrMany<all.ServicePeriodDurationFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ServicePeriodMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ServicePeriodIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ServicePeriodDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ServicePeriodSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ServicePeriodAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ServicePeriodImageFieldEnum>;
}
