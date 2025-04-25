import type * as all from "./index";

/**
 * <https://schema.org/dateModified>
 **/
export type RecommendationDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type RecommendationEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type RecommendationEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type RecommendationDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type RecommendationTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type RecommendationDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type RecommendationFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type RecommendationExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type RecommendationTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type RecommendationSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type RecommendationGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type RecommendationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Recommendation>
 **/
export interface Recommendation {
  "@context": string;
  "@type": "Recommendation";

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.RecommendationCategoryFieldEnum>;

  /**
   * <https://schema.org/reviewRating>
   **/
  reviewRating: all.OneOrMany<all.Rating>;

  /**
   * <https://schema.org/associatedMediaReview>
   **/
  associatedMediaReview: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/associatedReview>
   **/
  associatedReview: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/negativeNotes>
   **/
  negativeNotes: all.OneOrMany<all.RecommendationNegativeNotesFieldEnum>;

  /**
   * <https://schema.org/itemReviewed>
   **/
  itemReviewed: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/reviewBody>
   **/
  reviewBody: all.OneOrMany<string>;

  /**
   * <https://schema.org/positiveNotes>
   **/
  positiveNotes: all.OneOrMany<all.RecommendationPositiveNotesFieldEnum>;

  /**
   * <https://schema.org/reviewAspect>
   **/
  reviewAspect: all.OneOrMany<string>;

  /**
   * <https://schema.org/associatedClaimReview>
   **/
  associatedClaimReview: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.RecommendationProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.RecommendationCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.RecommendationSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.RecommendationPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.RecommendationInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.RecommendationDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.RecommendationUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.RecommendationArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.RecommendationSdLicenseFieldEnum>;

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
  license: all.OneOrMany<all.RecommendationLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.RecommendationMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.RecommendationPatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.RecommendationOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.RecommendationKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.RecommendationEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.RecommendationEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.RecommendationDatePublishedFieldEnum>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.RecommendationEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.RecommendationMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.RecommendationVideoFieldEnum>;

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
  learningResourceType: all.OneOrMany<all.RecommendationLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.RecommendationTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.RecommendationIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.RecommendationDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.RecommendationFileFormatFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.RecommendationTeachesFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.RecommendationIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.RecommendationIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.RecommendationCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.RecommendationEducationalUseFieldEnum>;

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
  version: all.OneOrMany<all.RecommendationVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.RecommendationExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.RecommendationProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.RecommendationCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.RecommendationMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.RecommendationTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.RecommendationFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.RecommendationContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.RecommendationPositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.RecommendationTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.RecommendationSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.RecommendationAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.RecommendationSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.RecommendationPublisherFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.RecommendationAssessesFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.RecommendationSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.RecommendationContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.RecommendationCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.RecommendationAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.RecommendationCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.RecommendationAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.RecommendationGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.RecommendationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.RecommendationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.RecommendationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.RecommendationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.RecommendationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.RecommendationImageFieldEnum>;
}
