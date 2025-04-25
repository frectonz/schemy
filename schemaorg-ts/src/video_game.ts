import type * as all from "./index";

/**
 * <https://schema.org/applicationSubCategory>
 **/
export type VideoGameApplicationSubCategoryFieldEnum = string;

/**
 * <https://schema.org/featureList>
 **/
export type VideoGameFeatureListFieldEnum = string;

/**
 * <https://schema.org/applicationCategory>
 **/
export type VideoGameApplicationCategoryFieldEnum = string;

/**
 * <https://schema.org/releaseNotes>
 **/
export type VideoGameReleaseNotesFieldEnum = string;

/**
 * <https://schema.org/requirements>
 **/
export type VideoGameRequirementsFieldEnum = string;

/**
 * <https://schema.org/memoryRequirements>
 **/
export type VideoGameMemoryRequirementsFieldEnum = string;

/**
 * <https://schema.org/storageRequirements>
 **/
export type VideoGameStorageRequirementsFieldEnum = string;

/**
 * <https://schema.org/softwareRequirements>
 **/
export type VideoGameSoftwareRequirementsFieldEnum = string;

/**
 * <https://schema.org/dateModified>
 **/
export type VideoGameDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type VideoGameEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type VideoGameEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type VideoGameDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type VideoGameTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type VideoGameDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type VideoGameFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type VideoGameExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type VideoGameTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type VideoGameSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type VideoGameGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type VideoGameAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/VideoGame>
 **/
export interface VideoGame {
  "@context": string;
  "@type": "VideoGame";

  /**
   * <https://schema.org/gameEdition>
   **/
  gameEdition: all.OneOrMany<string>;

  /**
   * <https://schema.org/playMode>
   **/
  playMode: all.OneOrMany<all.GamePlayModeEnum>;

  /**
   * <https://schema.org/actors>
   **/
  actors: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/trailer>
   **/
  trailer: all.OneOrMany<all.VideoObject>;

  /**
   * <https://schema.org/musicBy>
   **/
  musicBy: all.OneOrMany<all.VideoGameMusicByFieldEnum>;

  /**
   * <https://schema.org/gameServer>
   **/
  gameServer: all.OneOrMany<all.GameServer>;

  /**
   * <https://schema.org/cheatCode>
   **/
  cheatCode: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/gamePlatform>
   **/
  gamePlatform: all.OneOrMany<all.VideoGameGamePlatformFieldEnum>;

  /**
   * <https://schema.org/actor>
   **/
  actor: all.OneOrMany<all.VideoGameActorFieldEnum>;

  /**
   * <https://schema.org/directors>
   **/
  directors: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/gameTip>
   **/
  gameTip: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/director>
   **/
  director: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/applicationSubCategory>
   **/
  applicationSubCategory: all.OneOrMany<all.VideoGameApplicationSubCategoryFieldEnum>;

  /**
   * <https://schema.org/countriesNotSupported>
   **/
  countriesNotSupported: all.OneOrMany<string>;

  /**
   * <https://schema.org/downloadUrl>
   **/
  downloadUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/permissions>
   **/
  permissions: all.OneOrMany<string>;

  /**
   * <https://schema.org/featureList>
   **/
  featureList: all.OneOrMany<all.VideoGameFeatureListFieldEnum>;

  /**
   * <https://schema.org/softwareVersion>
   **/
  softwareVersion: all.OneOrMany<string>;

  /**
   * <https://schema.org/fileSize>
   **/
  fileSize: all.OneOrMany<string>;

  /**
   * <https://schema.org/operatingSystem>
   **/
  operatingSystem: all.OneOrMany<string>;

  /**
   * <https://schema.org/applicationCategory>
   **/
  applicationCategory: all.OneOrMany<all.VideoGameApplicationCategoryFieldEnum>;

  /**
   * <https://schema.org/applicationSuite>
   **/
  applicationSuite: all.OneOrMany<string>;

  /**
   * <https://schema.org/countriesSupported>
   **/
  countriesSupported: all.OneOrMany<string>;

  /**
   * <https://schema.org/availableOnDevice>
   **/
  availableOnDevice: all.OneOrMany<string>;

  /**
   * <https://schema.org/device>
   **/
  device: all.OneOrMany<string>;

  /**
   * <https://schema.org/screenshot>
   **/
  screenshot: all.OneOrMany<all.VideoGameScreenshotFieldEnum>;

  /**
   * <https://schema.org/processorRequirements>
   **/
  processorRequirements: all.OneOrMany<string>;

  /**
   * <https://schema.org/releaseNotes>
   **/
  releaseNotes: all.OneOrMany<all.VideoGameReleaseNotesFieldEnum>;

  /**
   * <https://schema.org/softwareAddOn>
   **/
  softwareAddOn: all.OneOrMany<all.SoftwareApplication>;

  /**
   * <https://schema.org/requirements>
   **/
  requirements: all.OneOrMany<all.VideoGameRequirementsFieldEnum>;

  /**
   * <https://schema.org/installUrl>
   **/
  installUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/supportingData>
   **/
  supportingData: all.OneOrMany<all.DataFeed>;

  /**
   * <https://schema.org/memoryRequirements>
   **/
  memoryRequirements: all.OneOrMany<all.VideoGameMemoryRequirementsFieldEnum>;

  /**
   * <https://schema.org/softwareHelp>
   **/
  softwareHelp: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/storageRequirements>
   **/
  storageRequirements: all.OneOrMany<all.VideoGameStorageRequirementsFieldEnum>;

  /**
   * <https://schema.org/softwareRequirements>
   **/
  softwareRequirements: all.OneOrMany<all.VideoGameSoftwareRequirementsFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.VideoGameProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.VideoGameCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.VideoGameSdPublisherFieldEnum>;

  /**
   * <https://schema.org/thumbnail>
   **/
  thumbnail: all.OneOrMany<all.ImageObject>;

  /**
   * <https://schema.org/accessModeSufficient>
   **/
  accessModeSufficient: all.OneOrMany<all.ItemList>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.VideoGamePublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.VideoGameInLanguageFieldEnum>;

  /**
   * <https://schema.org/abstract>
   **/
  abstract: all.OneOrMany<string>;

  /**
   * <https://schema.org/countryOfOrigin>
   **/
  countryOfOrigin: all.OneOrMany<all.Country>;

  /**
   * <https://schema.org/contentLocation>
   **/
  contentLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/dateModified>
   **/
  dateModified: all.OneOrMany<all.VideoGameDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.VideoGameUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.VideoGameArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.VideoGameSdLicenseFieldEnum>;

  /**
   * <https://schema.org/educationalAlignment>
   **/
  educationalAlignment: all.OneOrMany<all.AlignmentObject>;

  /**
   * <https://schema.org/editor>
   **/
  editor: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/license>
   **/
  license: all.OneOrMany<all.VideoGameLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.VideoGameMaintainerFieldEnum>;

  /**
   * <https://schema.org/sourceOrganization>
   **/
  sourceOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/accessibilityHazard>
   **/
  accessibilityHazard: all.OneOrMany<string>;

  /**
   * <https://schema.org/workExample>
   **/
  workExample: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/pattern>
   **/
  pattern: all.OneOrMany<all.VideoGamePatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.VideoGameOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.VideoGameKeywordsFieldEnum>;

  /**
   * <https://schema.org/exampleOfWork>
   **/
  exampleOfWork: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/copyrightNotice>
   **/
  copyrightNotice: all.OneOrMany<string>;

  /**
   * <https://schema.org/encodingFormat>
   **/
  encodingFormat: all.OneOrMany<all.VideoGameEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.VideoGameEditEIDRFieldEnum>;

  /**
   * <https://schema.org/copyrightYear>
   **/
  copyrightYear: all.OneOrMany<number>;

  /**
   * <https://schema.org/about>
   **/
  about: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/datePublished>
   **/
  datePublished: all.OneOrMany<all.VideoGameDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.VideoGameEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.VideoGameMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.VideoGameVideoFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/headline>
   **/
  headline: all.OneOrMany<string>;

  /**
   * <https://schema.org/digitalSourceType>
   **/
  digitalSourceType: all.OneOrMany<all.IPTCDigitalSourceEnumerationEnum>;

  /**
   * <https://schema.org/learningResourceType>
   **/
  learningResourceType: all.OneOrMany<all.VideoGameLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.VideoGameTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.VideoGameIsBasedOnUrlFieldEnum>;

  /**
   * <https://schema.org/associatedMedia>
   **/
  associatedMedia: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/commentCount>
   **/
  commentCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/dateCreated>
   **/
  dateCreated: all.OneOrMany<all.VideoGameDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.VideoGameFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.VideoGameTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.VideoGameIsPartOfFieldEnum>;

  /**
   * <https://schema.org/accessibilityAPI>
   **/
  accessibilityAPI: all.OneOrMany<string>;

  /**
   * <https://schema.org/contentReferenceTime>
   **/
  contentReferenceTime: all.OneOrMany<string>;

  /**
   * <https://schema.org/isBasedOn>
   **/
  isBasedOn: all.OneOrMany<all.VideoGameIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.VideoGameCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.VideoGameEducationalUseFieldEnum>;

  /**
   * <https://schema.org/isFamilyFriendly>
   **/
  isFamilyFriendly: all.OneOrMany<string>;

  /**
   * <https://schema.org/interactivityType>
   **/
  interactivityType: all.OneOrMany<string>;

  /**
   * <https://schema.org/publication>
   **/
  publication: all.OneOrMany<all.PublicationEvent>;

  /**
   * <https://schema.org/accountablePerson>
   **/
  accountablePerson: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/version>
   **/
  version: all.OneOrMany<all.VideoGameVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.VideoGameExpiresFieldEnum>;

  /**
   * <https://schema.org/awards>
   **/
  awards: all.OneOrMany<string>;

  /**
   * <https://schema.org/text>
   **/
  text: all.OneOrMany<string>;

  /**
   * <https://schema.org/producer>
   **/
  producer: all.OneOrMany<all.VideoGameProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.VideoGameCopyrightHolderFieldEnum>;

  /**
   * <https://schema.org/wordCount>
   **/
  wordCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/recordedAt>
   **/
  recordedAt: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/audience>
   **/
  audience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/spatial>
   **/
  spatial: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/interpretedAsClaim>
   **/
  interpretedAsClaim: all.OneOrMany<all.Claim>;

  /**
   * <https://schema.org/creditText>
   **/
  creditText: all.OneOrMany<string>;

  /**
   * <https://schema.org/material>
   **/
  material: all.OneOrMany<all.VideoGameMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.VideoGameTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.VideoGameFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.VideoGameContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.VideoGamePositionFieldEnum>;

  /**
   * <https://schema.org/conditionsOfAccess>
   **/
  conditionsOfAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/temporalCoverage>
   **/
  temporalCoverage: all.OneOrMany<all.VideoGameTemporalCoverageFieldEnum>;

  /**
   * <https://schema.org/mentions>
   **/
  mentions: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/interactionStatistic>
   **/
  interactionStatistic: all.OneOrMany<all.InteractionCounter>;

  /**
   * <https://schema.org/schemaVersion>
   **/
  schemaVersion: all.OneOrMany<all.VideoGameSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.VideoGameAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.VideoGameSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.VideoGamePublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.VideoGameAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.VideoGameSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.VideoGameContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.VideoGameCreatorFieldEnum>;

  /**
   * <https://schema.org/releasedEvent>
   **/
  releasedEvent: all.OneOrMany<all.PublicationEvent>;

  /**
   * <https://schema.org/accessibilitySummary>
   **/
  accessibilitySummary: all.OneOrMany<string>;

  /**
   * <https://schema.org/translationOfWork>
   **/
  translationOfWork: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/publisherImprint>
   **/
  publisherImprint: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/typicalAgeRange>
   **/
  typicalAgeRange: all.OneOrMany<string>;

  /**
   * <https://schema.org/comment>
   **/
  comment: all.OneOrMany<all.Comment>;

  /**
   * <https://schema.org/encoding>
   **/
  encoding: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/discussionUrl>
   **/
  discussionUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/timeRequired>
   **/
  timeRequired: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/audio>
   **/
  audio: all.OneOrMany<all.VideoGameAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.VideoGameCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.VideoGameAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.VideoGameGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.VideoGameMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.VideoGameIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.VideoGameDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.VideoGameSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.VideoGameAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.VideoGameImageFieldEnum>;

  /**
   * <https://schema.org/gameItem>
   **/
  gameItem: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/numberOfPlayers>
   **/
  numberOfPlayers: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/quest>
   **/
  quest: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/gameLocation>
   **/
  gameLocation: all.OneOrMany<all.VideoGameGameLocationFieldEnum>;

  /**
   * <https://schema.org/characterAttribute>
   **/
  characterAttribute: all.OneOrMany<all.Thing>;
}
