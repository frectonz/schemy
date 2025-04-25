import type * as all from "./index";

/**
 * <https://schema.org/genre>
 **/
export type FMRadioChannelGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type FMRadioChannelAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/FMRadioChannel>
 **/
export interface FMRadioChannel {
  "@context": string;
  "@type": "FMRadioChannel";

  /**
   * <https://schema.org/broadcastFrequency>
   **/
  broadcastFrequency: all.OneOrMany<all.FMRadioChannelBroadcastFrequencyFieldEnum>;

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
  genre: all.OneOrMany<all.FMRadioChannelGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.FMRadioChannelMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.FMRadioChannelIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.FMRadioChannelDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.FMRadioChannelSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.FMRadioChannelAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.FMRadioChannelImageFieldEnum>;
}
