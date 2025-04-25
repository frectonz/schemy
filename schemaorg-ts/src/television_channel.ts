import type * as all from "./index";

/**
 * <https://schema.org/genre>
 **/
export type TelevisionChannelGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type TelevisionChannelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/TelevisionChannel>
 **/
export interface TelevisionChannel {
  "@context": string;
  "@type": "TelevisionChannel";

  /**
   * <https://schema.org/broadcastFrequency>
   **/
  broadcastFrequency: all.OneOrMany<all.TelevisionChannelBroadcastFrequencyFieldEnum>;

  /**
   * <https://schema.org/inBroadcastLineup>
   **/
  inBroadcastLineup: all.OneOrMany<all.CableOrSatelliteService>;

  /**
   * <https://schema.org/broadcastChannelId>
   **/
  broadcastChannelId: all.OneOrMany<string>;

  /**
   * <https://schema.org/broadcastServiceTier>
   **/
  broadcastServiceTier: all.OneOrMany<string>;

  /**
   * <https://schema.org/providesBroadcastService>
   **/
  providesBroadcastService: all.OneOrMany<all.BroadcastService>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.TelevisionChannelGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.TelevisionChannelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.TelevisionChannelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.TelevisionChannelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.TelevisionChannelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.TelevisionChannelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.TelevisionChannelImageFieldEnum>;
}
