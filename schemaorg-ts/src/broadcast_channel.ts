import type * as all from "./index";

/**
 * <https://schema.org/genre>
 **/
export type BroadcastChannelGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type BroadcastChannelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/BroadcastChannel>
 **/
export interface BroadcastChannel {
  "@context": string;
  "@type": "BroadcastChannel";

  /**
   * <https://schema.org/broadcastFrequency>
   **/
  broadcastFrequency: all.OneOrMany<all.BroadcastChannelBroadcastFrequencyFieldEnum>;

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
  genre: all.OneOrMany<all.BroadcastChannelGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.BroadcastChannelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.BroadcastChannelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.BroadcastChannelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.BroadcastChannelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.BroadcastChannelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.BroadcastChannelImageFieldEnum>;
}
