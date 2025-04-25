import type * as all from "./index";

/**
 * <https://schema.org/dateModified>
 **/
export type MusicCompositionDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type MusicCompositionEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type MusicCompositionEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type MusicCompositionDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type MusicCompositionTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type MusicCompositionDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type MusicCompositionFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type MusicCompositionExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type MusicCompositionTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type MusicCompositionSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type MusicCompositionGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type MusicCompositionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MusicComposition>
 **/
export interface MusicComposition {
  "@context": string;
  "@type": "MusicComposition";

  /**
   * <https://schema.org/firstPerformance>
   **/
  firstPerformance: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/iswcCode>
   **/
  iswcCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/composer>
   **/
  composer: all.OneOrMany<all.MusicCompositionComposerFieldEnum>;

  /**
   * <https://schema.org/recordedAs>
   **/
  recordedAs: all.OneOrMany<all.MusicRecording>;

  /**
   * <https://schema.org/lyricist>
   **/
  lyricist: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/musicArrangement>
   **/
  musicArrangement: all.OneOrMany<all.MusicComposition>;

  /**
   * <https://schema.org/lyrics>
   **/
  lyrics: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/includedComposition>
   **/
  includedComposition: all.OneOrMany<all.MusicComposition>;

  /**
   * <https://schema.org/musicalKey>
   **/
  musicalKey: all.OneOrMany<string>;

  /**
   * <https://schema.org/musicCompositionForm>
   **/
  musicCompositionForm: all.OneOrMany<string>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.MusicCompositionProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.MusicCompositionCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.MusicCompositionSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.MusicCompositionPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.MusicCompositionInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.MusicCompositionDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.MusicCompositionUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.MusicCompositionArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.MusicCompositionSdLicenseFieldEnum>;

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
  license: all.OneOrMany<all.MusicCompositionLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.MusicCompositionMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.MusicCompositionPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.MusicCompositionOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.MusicCompositionKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.MusicCompositionEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.MusicCompositionEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.MusicCompositionDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.MusicCompositionEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.MusicCompositionMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.MusicCompositionVideoFieldEnum>;

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
  learningResourceType: all.OneOrMany<all.MusicCompositionLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.MusicCompositionTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.MusicCompositionIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.MusicCompositionDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.MusicCompositionFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.MusicCompositionTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.MusicCompositionIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.MusicCompositionIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.MusicCompositionCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.MusicCompositionEducationalUseFieldEnum>;

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
  version: all.OneOrMany<all.MusicCompositionVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.MusicCompositionExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.MusicCompositionProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.MusicCompositionCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.MusicCompositionMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.MusicCompositionTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.MusicCompositionFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.MusicCompositionContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.MusicCompositionPositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.MusicCompositionTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.MusicCompositionSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.MusicCompositionAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.MusicCompositionSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.MusicCompositionPublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.MusicCompositionAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.MusicCompositionSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.MusicCompositionContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.MusicCompositionCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.MusicCompositionAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.MusicCompositionCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.MusicCompositionAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.MusicCompositionGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MusicCompositionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MusicCompositionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MusicCompositionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MusicCompositionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MusicCompositionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MusicCompositionImageFieldEnum>;
}
