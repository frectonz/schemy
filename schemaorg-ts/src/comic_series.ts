import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type ComicSeriesEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type ComicSeriesStartDateFieldEnum = string;

/**
 * <https://schema.org/dateModified>
 **/
export type ComicSeriesDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type ComicSeriesEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type ComicSeriesEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type ComicSeriesDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type ComicSeriesTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type ComicSeriesDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type ComicSeriesFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type ComicSeriesExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type ComicSeriesTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type ComicSeriesSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type ComicSeriesGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ComicSeriesAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ComicSeries>
 **/
export interface ComicSeries {
  "@context": string;
  "@type": "ComicSeries";

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.ComicSeriesEndDateFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.ComicSeriesStartDateFieldEnum>;

  /**
   * <https://schema.org/issn>
   **/
  issn: all.OneOrMany<string>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.ComicSeriesProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.ComicSeriesCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.ComicSeriesSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.ComicSeriesPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.ComicSeriesInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.ComicSeriesDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.ComicSeriesUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.ComicSeriesArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.ComicSeriesSdLicenseFieldEnum>;

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
  license: all.OneOrMany<all.ComicSeriesLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.ComicSeriesMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.ComicSeriesPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.ComicSeriesOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.ComicSeriesKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.ComicSeriesEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.ComicSeriesEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.ComicSeriesDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.ComicSeriesEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.ComicSeriesMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.ComicSeriesVideoFieldEnum>;

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
  learningResourceType: all.OneOrMany<all.ComicSeriesLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.ComicSeriesTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.ComicSeriesIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.ComicSeriesDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.ComicSeriesFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.ComicSeriesTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.ComicSeriesIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.ComicSeriesIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.ComicSeriesCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.ComicSeriesEducationalUseFieldEnum>;

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
  version: all.OneOrMany<all.ComicSeriesVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.ComicSeriesExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.ComicSeriesProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.ComicSeriesCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.ComicSeriesMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.ComicSeriesTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.ComicSeriesFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.ComicSeriesContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.ComicSeriesPositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.ComicSeriesTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.ComicSeriesSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.ComicSeriesAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.ComicSeriesSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.ComicSeriesPublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.ComicSeriesAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.ComicSeriesSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.ComicSeriesContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.ComicSeriesCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.ComicSeriesAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.ComicSeriesCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.ComicSeriesAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.ComicSeriesGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ComicSeriesMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ComicSeriesIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ComicSeriesDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ComicSeriesSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ComicSeriesAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ComicSeriesImageFieldEnum>;
}
