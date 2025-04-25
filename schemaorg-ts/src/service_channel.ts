import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ServiceChannelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ServiceChannel>
 **/
export interface ServiceChannel {
  "@context": string;
  "@type": "ServiceChannel";

  /**
   * <https://schema.org/availableLanguage>
   **/
  availableLanguage: all.OneOrMany<all.ServiceChannelAvailableLanguageFieldEnum>;

  /**
   * <https://schema.org/servicePhone>
   **/
  servicePhone: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/processingTime>
   **/
  processingTime: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/serviceLocation>
   **/
  serviceLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/servicePostalAddress>
   **/
  servicePostalAddress: all.OneOrMany<all.PostalAddress>;

  /**
   * <https://schema.org/serviceUrl>
   **/
  serviceUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/serviceSmsNumber>
   **/
  serviceSmsNumber: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/providesService>
   **/
  providesService: all.OneOrMany<all.Service>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ServiceChannelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ServiceChannelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ServiceChannelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ServiceChannelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ServiceChannelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ServiceChannelImageFieldEnum>;
}
