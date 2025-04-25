import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type EntryPointAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/EntryPoint>
 **/
export interface EntryPoint {
  "@context": string;
  "@type": "EntryPoint";

  /**
   * <https://schema.org/urlTemplate>
   **/
  urlTemplate: all.OneOrMany<string>;

  /**
   * <https://schema.org/application>
   **/
  application: all.OneOrMany<all.SoftwareApplication>;

  /**
   * <https://schema.org/contentType>
   **/
  contentType: all.OneOrMany<string>;

  /**
   * <https://schema.org/encodingType>
   **/
  encodingType: all.OneOrMany<string>;

  /**
   * <https://schema.org/actionPlatform>
   **/
  actionPlatform: all.OneOrMany<all.EntryPointActionPlatformFieldEnum>;

  /**
   * <https://schema.org/actionApplication>
   **/
  actionApplication: all.OneOrMany<all.SoftwareApplication>;

  /**
   * <https://schema.org/httpMethod>
   **/
  httpMethod: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.EntryPointMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.EntryPointIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.EntryPointDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.EntryPointSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.EntryPointAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.EntryPointImageFieldEnum>;
}
