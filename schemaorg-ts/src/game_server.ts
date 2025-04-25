import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type GameServerAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GameServer>
 **/
export interface GameServer {
  "@context": string;
  "@type": "GameServer";

  /**
   * <https://schema.org/game>
   **/
  game: all.OneOrMany<all.VideoGame>;

  /**
   * <https://schema.org/playersOnline>
   **/
  playersOnline: all.OneOrMany<number>;

  /**
   * <https://schema.org/serverStatus>
   **/
  serverStatus: all.OneOrMany<all.GameServerStatusEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.GameServerMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GameServerIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GameServerDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GameServerSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GameServerAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GameServerImageFieldEnum>;
}
