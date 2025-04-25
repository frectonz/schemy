import type * as all from "./index";

/**
 * <https://schema.org/dateModified>
 **/
export type PublicationVolumeDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type PublicationVolumeEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type PublicationVolumeEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type PublicationVolumeDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type PublicationVolumeTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type PublicationVolumeDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type PublicationVolumeFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type PublicationVolumeExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type PublicationVolumeTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type PublicationVolumeSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type PublicationVolumeGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PublicationVolumeAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PublicationVolume>
 **/
export interface PublicationVolume {
  "@context": string;
  "@type": "PublicationVolume";

  /**
   * <https://schema.org/pageEnd>
   **/
  pageEnd: all.OneOrMany<all.PublicationVolumePageEndFieldEnum>;

  /**
   * <https://schema.org/pagination>
   **/
  pagination: all.OneOrMany<string>;

  /**
   * <https://schema.org/volumeNumber>
   **/
  volumeNumber: all.OneOrMany<all.PublicationVolumeVolumeNumberFieldEnum>;

  /**
   * <https://schema.org/pageStart>
   **/
  pageStart: all.OneOrMany<all.PublicationVolumePageStartFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.PublicationVolumeProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.PublicationVolumeCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.PublicationVolumeSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.PublicationVolumePublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.PublicationVolumeInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.PublicationVolumeDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.PublicationVolumeUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.PublicationVolumeArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.PublicationVolumeSdLicenseFieldEnum>;

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
  license: all.OneOrMany<all.PublicationVolumeLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.PublicationVolumeMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.PublicationVolumePatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.PublicationVolumeOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.PublicationVolumeKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.PublicationVolumeEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.PublicationVolumeEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.PublicationVolumeDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.PublicationVolumeEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.PublicationVolumeMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.PublicationVolumeVideoFieldEnum>;

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
  learningResourceType: all.OneOrMany<all.PublicationVolumeLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.PublicationVolumeTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.PublicationVolumeIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.PublicationVolumeDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.PublicationVolumeFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.PublicationVolumeTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.PublicationVolumeIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.PublicationVolumeIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.PublicationVolumeCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.PublicationVolumeEducationalUseFieldEnum>;

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
  version: all.OneOrMany<all.PublicationVolumeVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.PublicationVolumeExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.PublicationVolumeProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.PublicationVolumeCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.PublicationVolumeMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.PublicationVolumeTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.PublicationVolumeFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.PublicationVolumeContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.PublicationVolumePositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.PublicationVolumeTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.PublicationVolumeSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.PublicationVolumeAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.PublicationVolumeSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.PublicationVolumePublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.PublicationVolumeAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.PublicationVolumeSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.PublicationVolumeContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.PublicationVolumeCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.PublicationVolumeAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.PublicationVolumeCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.PublicationVolumeAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.PublicationVolumeGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PublicationVolumeMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PublicationVolumeIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PublicationVolumeDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PublicationVolumeSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PublicationVolumeAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PublicationVolumeImageFieldEnum>;
}
