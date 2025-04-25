import type * as all from "./index";

/**
 * <https://schema.org/dateModified>
 **/
export type CourseDateModifiedFieldEnum = string;

/**
 * <https://schema.org/encodingFormat>
 **/
export type CourseEncodingFormatFieldEnum = string;

/**
 * <https://schema.org/editEIDR>
 **/
export type CourseEditEIDRFieldEnum = string;

/**
 * <https://schema.org/datePublished>
 **/
export type CourseDatePublishedFieldEnum = string;

/**
 * <https://schema.org/temporal>
 **/
export type CourseTemporalFieldEnum = string;

/**
 * <https://schema.org/dateCreated>
 **/
export type CourseDateCreatedFieldEnum = string;

/**
 * <https://schema.org/fileFormat>
 **/
export type CourseFileFormatFieldEnum = string;

/**
 * <https://schema.org/expires>
 **/
export type CourseExpiresFieldEnum = string;

/**
 * <https://schema.org/temporalCoverage>
 **/
export type CourseTemporalCoverageFieldEnum = string;

/**
 * <https://schema.org/schemaVersion>
 **/
export type CourseSchemaVersionFieldEnum = string;

/**
 * <https://schema.org/genre>
 **/
export type CourseGenreFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type CourseAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Course>
 **/
export interface Course {
  "@context": string;
  "@type": "Course";

  /**
   * <https://schema.org/coursePrerequisites>
   **/
  coursePrerequisites: all.OneOrMany<all.CourseCoursePrerequisitesFieldEnum>;

  /**
   * <https://schema.org/totalHistoricalEnrollment>
   **/
  totalHistoricalEnrollment: all.OneOrMany<number>;

  /**
   * <https://schema.org/educationalCredentialAwarded>
   **/
  educationalCredentialAwarded: all.OneOrMany<all.CourseEducationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/availableLanguage>
   **/
  availableLanguage: all.OneOrMany<all.CourseAvailableLanguageFieldEnum>;

  /**
   * <https://schema.org/numberOfCredits>
   **/
  numberOfCredits: all.OneOrMany<all.CourseNumberOfCreditsFieldEnum>;

  /**
   * <https://schema.org/hasCourseInstance>
   **/
  hasCourseInstance: all.OneOrMany<all.CourseInstance>;

  /**
   * <https://schema.org/syllabusSections>
   **/
  syllabusSections: all.OneOrMany<all.Syllabus>;

  /**
   * <https://schema.org/financialAidEligible>
   **/
  financialAidEligible: all.OneOrMany<all.CourseFinancialAidEligibleFieldEnum>;

  /**
   * <https://schema.org/occupationalCredentialAwarded>
   **/
  occupationalCredentialAwarded: all.OneOrMany<all.CourseOccupationalCredentialAwardedFieldEnum>;

  /**
   * <https://schema.org/courseCode>
   **/
  courseCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/educationalAlignment>
   **/
  educationalAlignment: all.OneOrMany<all.AlignmentObject>;

  /**
   * <https://schema.org/educationalLevel>
   **/
  educationalLevel: all.OneOrMany<all.CourseEducationalLevelFieldEnum>;

  /**
   * <https://schema.org/learningResourceType>
   **/
  learningResourceType: all.OneOrMany<all.CourseLearningResourceTypeFieldEnum>;

  /**
   * <https://schema.org/teaches>
   **/
  teaches: all.OneOrMany<all.CourseTeachesFieldEnum>;

  /**
   * <https://schema.org/educationalUse>
   **/
  educationalUse: all.OneOrMany<all.CourseEducationalUseFieldEnum>;

  /**
   * <https://schema.org/assesses>
   **/
  assesses: all.OneOrMany<all.CourseAssessesFieldEnum>;

  /**
   * <https://schema.org/competencyRequired>
   **/
  competencyRequired: all.OneOrMany<all.CourseCompetencyRequiredFieldEnum>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.CourseProviderFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/citation>
   **/
  citation: all.OneOrMany<all.CourseCitationFieldEnum>;

  /**
   * <https://schema.org/locationCreated>
   **/
  locationCreated: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/sdPublisher>
   **/
  sdPublisher: all.OneOrMany<all.CourseSdPublisherFieldEnum>;

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
  publishingPrinciples: all.OneOrMany<all.CoursePublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.CourseInLanguageFieldEnum>;

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
  dateModified: all.OneOrMany<all.CourseDateModifiedFieldEnum>;

  /**
   * <https://schema.org/usageInfo>
   **/
  usageInfo: all.OneOrMany<all.CourseUsageInfoFieldEnum>;

  /**
   * <https://schema.org/sdDatePublished>
   **/
  sdDatePublished: all.OneOrMany<string>;

  /**
   * <https://schema.org/archivedAt>
   **/
  archivedAt: all.OneOrMany<all.CourseArchivedAtFieldEnum>;

  /**
   * <https://schema.org/workTranslation>
   **/
  workTranslation: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/sdLicense>
   **/
  sdLicense: all.OneOrMany<all.CourseSdLicenseFieldEnum>;

  /**
   * <https://schema.org/editor>
   **/
  editor: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/license>
   **/
  license: all.OneOrMany<all.CourseLicenseFieldEnum>;

  /**
   * <https://schema.org/maintainer>
   **/
  maintainer: all.OneOrMany<all.CourseMaintainerFieldEnum>;

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
  pattern: all.OneOrMany<all.CoursePatternFieldEnum>;

  /**
   * <https://schema.org/offers>
   **/
  offers: all.OneOrMany<all.CourseOffersFieldEnum>;

  /**
   * <https://schema.org/hasPart>
   **/
  hasPart: all.OneOrMany<all.CreativeWork>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.CourseKeywordsFieldEnum>;

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
  encodingFormat: all.OneOrMany<all.CourseEncodingFormatFieldEnum>;

  /**
   * <https://schema.org/mainEntity>
   **/
  mainEntity: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/editEIDR>
   **/
  editEIDR: all.OneOrMany<all.CourseEditEIDRFieldEnum>;

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
  datePublished: all.OneOrMany<all.CourseDatePublishedFieldEnum>;

  /**
   * <https://schema.org/accessibilityFeature>
   **/
  accessibilityFeature: all.OneOrMany<string>;

  /**
   * <https://schema.org/materialExtent>
   **/
  materialExtent: all.OneOrMany<all.CourseMaterialExtentFieldEnum>;

  /**
   * <https://schema.org/video>
   **/
  video: all.OneOrMany<all.CourseVideoFieldEnum>;

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
   * <https://schema.org/alternativeHeadline>
   **/
  alternativeHeadline: all.OneOrMany<string>;

  /**
   * <https://schema.org/temporal>
   **/
  temporal: all.OneOrMany<all.CourseTemporalFieldEnum>;

  /**
   * <https://schema.org/isBasedOnUrl>
   **/
  isBasedOnUrl: all.OneOrMany<all.CourseIsBasedOnUrlFieldEnum>;

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
  dateCreated: all.OneOrMany<all.CourseDateCreatedFieldEnum>;

  /**
   * <https://schema.org/fileFormat>
   **/
  fileFormat: all.OneOrMany<all.CourseFileFormatFieldEnum>;

  /**
   * <https://schema.org/accessibilityControl>
   **/
  accessibilityControl: all.OneOrMany<string>;

  /**
   * <https://schema.org/isPartOf>
   **/
  isPartOf: all.OneOrMany<all.CourseIsPartOfFieldEnum>;

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
  isBasedOn: all.OneOrMany<all.CourseIsBasedOnFieldEnum>;

  /**
   * <https://schema.org/creativeWorkStatus>
   **/
  creativeWorkStatus: all.OneOrMany<all.CourseCreativeWorkStatusFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

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
  version: all.OneOrMany<all.CourseVersionFieldEnum>;

  /**
   * <https://schema.org/expires>
   **/
  expires: all.OneOrMany<all.CourseExpiresFieldEnum>;

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
  producer: all.OneOrMany<all.CourseProducerFieldEnum>;

  /**
   * <https://schema.org/thumbnailUrl>
   **/
  thumbnailUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/copyrightHolder>
   **/
  copyrightHolder: all.OneOrMany<all.CourseCopyrightHolderFieldEnum>;

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
  material: all.OneOrMany<all.CourseMaterialFieldEnum>;

  /**
   * <https://schema.org/translator>
   **/
  translator: all.OneOrMany<all.CourseTranslatorFieldEnum>;

  /**
   * <https://schema.org/character>
   **/
  character: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.CourseFunderFieldEnum>;

  /**
   * <https://schema.org/encodings>
   **/
  encodings: all.OneOrMany<all.MediaObject>;

  /**
   * <https://schema.org/contributor>
   **/
  contributor: all.OneOrMany<all.CourseContributorFieldEnum>;

  /**
   * <https://schema.org/position>
   **/
  position: all.OneOrMany<all.CoursePositionFieldEnum>;

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
  temporalCoverage: all.OneOrMany<all.CourseTemporalCoverageFieldEnum>;

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
  schemaVersion: all.OneOrMany<all.CourseSchemaVersionFieldEnum>;

  /**
   * <https://schema.org/acquireLicensePage>
   **/
  acquireLicensePage: all.OneOrMany<all.CourseAcquireLicensePageFieldEnum>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.CourseSponsorFieldEnum>;

  /**
   * <https://schema.org/publisher>
   **/
  publisher: all.OneOrMany<all.CoursePublisherFieldEnum>;

  /**
   * <https://schema.org/spatialCoverage>
   **/
  spatialCoverage: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/size>
   **/
  size: all.OneOrMany<all.CourseSizeFieldEnum>;

  /**
   * <https://schema.org/contentRating>
   **/
  contentRating: all.OneOrMany<all.CourseContentRatingFieldEnum>;

  /**
   * <https://schema.org/accessMode>
   **/
  accessMode: all.OneOrMany<string>;

  /**
   * <https://schema.org/creator>
   **/
  creator: all.OneOrMany<all.CourseCreatorFieldEnum>;

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
  audio: all.OneOrMany<all.CourseAudioFieldEnum>;

  /**
   * <https://schema.org/correction>
   **/
  correction: all.OneOrMany<all.CourseCorrectionFieldEnum>;

  /**
   * <https://schema.org/author>
   **/
  author: all.OneOrMany<all.CourseAuthorFieldEnum>;

  /**
   * <https://schema.org/genre>
   **/
  genre: all.OneOrMany<all.CourseGenreFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.CourseMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.CourseIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.CourseDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.CourseSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.CourseAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.CourseImageFieldEnum>;
}
