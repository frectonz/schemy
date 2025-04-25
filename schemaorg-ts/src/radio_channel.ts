import type * as all from "./index";

/**
 * <https://schema.org/genre>
 **/
export type RadioChannelGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type RadioChannelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/RadioChannel>
 **/
export interface RadioChannel {
  "@context": string;
  "@type": "RadioChannel";

  /**
   * <https://schema.org/broadcastFrequency>
   **/
  broadcastFrequency: all.OneOrMany<all.RadioChannelBroadcastFrequencyFieldEnum>;

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
  genre: all.OneOrMany<all.RadioChannelGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RadioChannelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RadioChannelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RadioChannelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RadioChannelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RadioChannelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RadioChannelImageFieldEnum>;
}
