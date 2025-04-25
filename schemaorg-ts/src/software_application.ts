import type * as all from "./index";

/**
 * <https://schema.org/applicationSubCategory>
 **/
export type SoftwareApplicationApplicationSubCategoryFieldEnum = string;

/**
 * <https://schema.org/featureList>
 **/
export type SoftwareApplicationFeatureListFieldEnum = string;

/**
 * <https://schema.org/applicationCategory>
 **/
export type SoftwareApplicationApplicationCategoryFieldEnum = string;

/**
 * <https://schema.org/releaseNotes>
 **/
export type SoftwareApplicationReleaseNotesFieldEnum = string;

/**
 * <https://schema.org/requirements>
 **/
export type SoftwareApplicationRequirementsFieldEnum = string;

/**
 * <https://schema.org/memoryRequirements>
 **/
export type SoftwareApplicationMemoryRequirementsFieldEnum = string;

/**
 * <https://schema.org/storageRequirements>
 **/
export type SoftwareApplicationStorageRequirementsFieldEnum = string;

/**
 * <https://schema.org/softwareRequirements>
 **/
export type SoftwareApplicationSoftwareRequirementsFieldEnum = string;

/**
 * <https://schema.org/dateModified>
 **/
export type SoftwareApplicationDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type SoftwareApplicationEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type SoftwareApplicationEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type SoftwareApplicationDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type SoftwareApplicationTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type SoftwareApplicationDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type SoftwareApplicationFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type SoftwareApplicationExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type SoftwareApplicationTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type SoftwareApplicationSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type SoftwareApplicationGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type SoftwareApplicationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SoftwareApplication>
 **/
export interface SoftwareApplication {
  "@context": string;
  "@type": "SoftwareApplication";

  /**
   * <https://schema.org/applicationSubCategory>
   **/
  applicationSubCategory: all.OneOrMany<all.SoftwareApplicationApplicationSubCategoryFieldEnum>;

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
  featureList: all.OneOrMany<all.SoftwareApplicationFeatureListFieldEnum>;

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
  applicationCategory: all.OneOrMany<all.SoftwareApplicationApplicationCategoryFieldEnum>;

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
  screenshot: all.OneOrMany<all.SoftwareApplicationScreenshotFieldEnum>;

  /**
   * <https://schema.org/processorRequirements>
   **/
  processorRequirements: all.OneOrMany<string>;

  /**
   * <https://schema.org/releaseNotes>
   **/
  releaseNotes: all.OneOrMany<all.SoftwareApplicationReleaseNotesFieldEnum>;

  /**
   * <https://schema.org/softwareAddOn>
   **/
  softwareAddOn: all.OneOrMany<all.SoftwareApplication>;

  /**
   * <https://schema.org/requirements>
   **/
  requirements: all.OneOrMany<all.SoftwareApplicationRequirementsFieldEnum>;

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
  memoryRequirements: all.OneOrMany<all.SoftwareApplicationMemoryRequirementsFieldEnum>;

  /**
   * <https://schema.org/softwareHelp>
   **/
  softwareHelp: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/storageRequirements>
   **/
  storageRequirements: all.OneOrMany<all.SoftwareApplicationStorageRequirementsFieldEnum>;

  /**
   * <https://schema.org/softwareRequirements>
   **/
  softwareRequirements: all.OneOrMany<all.SoftwareApplicationSoftwareRequirementsFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.SoftwareApplicationProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.SoftwareApplicationCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.SoftwareApplicationSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.SoftwareApplicationPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.SoftwareApplicationInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.SoftwareApplicationDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.SoftwareApplicationUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.SoftwareApplicationArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.SoftwareApplicationSdLicenseFieldEnum>;

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
  license: all.OneOrMany<all.SoftwareApplicationLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.SoftwareApplicationMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.SoftwareApplicationPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.SoftwareApplicationOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.SoftwareApplicationKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.SoftwareApplicationEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.SoftwareApplicationEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.SoftwareApplicationDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.SoftwareApplicationEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.SoftwareApplicationMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.SoftwareApplicationVideoFieldEnum>;

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
  learningResourceType: all.OneOrMany<all.SoftwareApplicationLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.SoftwareApplicationTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.SoftwareApplicationIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.SoftwareApplicationDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.SoftwareApplicationFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.SoftwareApplicationTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.SoftwareApplicationIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.SoftwareApplicationIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.SoftwareApplicationCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.SoftwareApplicationEducationalUseFieldEnum>;

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
  version: all.OneOrMany<all.SoftwareApplicationVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.SoftwareApplicationExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.SoftwareApplicationProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.SoftwareApplicationCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.SoftwareApplicationMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.SoftwareApplicationTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.SoftwareApplicationFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.SoftwareApplicationContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.SoftwareApplicationPositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.SoftwareApplicationTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.SoftwareApplicationSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.SoftwareApplicationAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.SoftwareApplicationSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.SoftwareApplicationPublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.SoftwareApplicationAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.SoftwareApplicationSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.SoftwareApplicationContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.SoftwareApplicationCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.SoftwareApplicationAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.SoftwareApplicationCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.SoftwareApplicationAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.SoftwareApplicationGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SoftwareApplicationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SoftwareApplicationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SoftwareApplicationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SoftwareApplicationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SoftwareApplicationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SoftwareApplicationImageFieldEnum>;
}
