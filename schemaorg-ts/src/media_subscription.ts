import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MediaSubscriptionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MediaSubscription>
 **/
export interface MediaSubscription {
  "@context": string;
  "@type": "MediaSubscription";

  /**
   * <https://schema.org/expectsAcceptanceOf>
   **/
  expectsAcceptanceOf: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/authenticator>
   **/
  authenticator: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MediaSubscriptionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MediaSubscriptionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MediaSubscriptionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MediaSubscriptionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MediaSubscriptionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MediaSubscriptionImageFieldEnum>;
}
