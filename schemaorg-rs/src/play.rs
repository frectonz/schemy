use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/schemaVersion
///https://schema.org/Text
///https://schema.org/URL
pub type PlaySchemaVersionFieldEnum = String;
///https://schema.org/encodingFormat
///https://schema.org/Text
///https://schema.org/URL
pub type PlayEncodingFormatFieldEnum = String;
///https://schema.org/genre
///https://schema.org/Text
///https://schema.org/URL
pub type PlayGenreFieldEnum = String;
///https://schema.org/temporalCoverage
///https://schema.org/DateTime
///https://schema.org/Text
///https://schema.org/URL
pub type PlayTemporalCoverageFieldEnum = String;
///https://schema.org/editEIDR
///https://schema.org/Text
///https://schema.org/URL
pub type PlayEditEIDRFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type PlayAdditionalTypeFieldEnum = String;
///https://schema.org/fileFormat
///https://schema.org/Text
///https://schema.org/URL
pub type PlayFileFormatFieldEnum = String;
///https://schema.org/temporal
///https://schema.org/DateTime
///https://schema.org/Text
pub type PlayTemporalFieldEnum = String;
///https://schema.org/datePublished
///https://schema.org/Date
///https://schema.org/DateTime
pub type PlayDatePublishedFieldEnum = String;
///https://schema.org/dateCreated
///https://schema.org/Date
///https://schema.org/DateTime
pub type PlayDateCreatedFieldEnum = String;
///https://schema.org/dateModified
///https://schema.org/Date
///https://schema.org/DateTime
pub type PlayDateModifiedFieldEnum = String;
///https://schema.org/expires
///https://schema.org/Date
///https://schema.org/DateTime
pub type PlayExpiresFieldEnum = String;
///https://schema.org/Play
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Play {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/accountablePerson
    #[serde(rename = "accountablePerson")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accountable_person: Vec<Person>,
    ///https://schema.org/usageInfo
    #[serde(rename = "usageInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub usage_info: Vec<PlayUsageInfoFieldEnum>,
    ///https://schema.org/translator
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translator: Vec<PlayTranslatorFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<PlayIdentifierFieldEnum>,
    ///https://schema.org/typicalAgeRange
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_age_range: Vec<String>,
    ///https://schema.org/citation
    #[serde(rename = "citation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub citation: Vec<PlayCitationFieldEnum>,
    ///https://schema.org/assesses
    #[serde(rename = "assesses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub assesses: Vec<PlayAssessesFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/inLanguage
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<PlayInLanguageFieldEnum>,
    ///https://schema.org/exampleOfWork
    #[serde(rename = "exampleOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub example_of_work: Vec<CreativeWork>,
    ///https://schema.org/digitalSourceType
    #[serde(rename = "digitalSourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub digital_source_type: Vec<IPTCDigitalSourceEnumerationEnum>,
    ///https://schema.org/commentCount
    #[serde(rename = "commentCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment_count: Vec<i32>,
    ///https://schema.org/material
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<PlayMaterialFieldEnum>,
    ///https://schema.org/accessModeSufficient
    #[serde(rename = "accessModeSufficient")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode_sufficient: Vec<ItemList>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/provider
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<PlayProviderFieldEnum>,
    ///https://schema.org/sourceOrganization
    #[serde(rename = "sourceOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub source_organization: Vec<Organization>,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<PlayOffersFieldEnum>,
    ///https://schema.org/contentRating
    #[serde(rename = "contentRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_rating: Vec<PlayContentRatingFieldEnum>,
    ///https://schema.org/wordCount
    #[serde(rename = "wordCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub word_count: Vec<i32>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/learningResourceType
    #[serde(rename = "learningResourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub learning_resource_type: Vec<PlayLearningResourceTypeFieldEnum>,
    ///https://schema.org/educationalAlignment
    #[serde(rename = "educationalAlignment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_alignment: Vec<AlignmentObject>,
    ///https://schema.org/recordedAt
    #[serde(rename = "recordedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_at: Vec<Event>,
    ///https://schema.org/creativeWorkStatus
    #[serde(rename = "creativeWorkStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creative_work_status: Vec<PlayCreativeWorkStatusFieldEnum>,
    ///https://schema.org/schemaVersion
    #[serde(rename = "schemaVersion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub schema_version: Vec<PlaySchemaVersionFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<PlayDescriptionFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/producer
    #[serde(rename = "producer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub producer: Vec<PlayProducerFieldEnum>,
    ///https://schema.org/conditionsOfAccess
    #[serde(rename = "conditionsOfAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub conditions_of_access: Vec<String>,
    ///https://schema.org/text
    #[serde(rename = "text")]
    #[serde_as(as = "OneOrMany<_>")]
    pub text: Vec<String>,
    ///https://schema.org/encoding
    #[serde(rename = "encoding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding: Vec<MediaObject>,
    ///https://schema.org/encodingFormat
    #[serde(rename = "encodingFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding_format: Vec<PlayEncodingFormatFieldEnum>,
    ///https://schema.org/discussionUrl
    #[serde(rename = "discussionUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discussion_url: Vec<String>,
    ///https://schema.org/mainEntity
    #[serde(rename = "mainEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity: Vec<Thing>,
    ///https://schema.org/timeRequired
    #[serde(rename = "timeRequired")]
    #[serde_as(as = "OneOrMany<_>")]
    pub time_required: Vec<Duration>,
    ///https://schema.org/publishingPrinciples
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<PlayPublishingPrinciplesFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<PlayMainEntityOfPageFieldEnum>,
    ///https://schema.org/position
    #[serde(rename = "position")]
    #[serde_as(as = "OneOrMany<_>")]
    pub position: Vec<PlayPositionFieldEnum>,
    ///https://schema.org/spatial
    #[serde(rename = "spatial")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial: Vec<Place>,
    ///https://schema.org/genre
    #[serde(rename = "genre")]
    #[serde_as(as = "OneOrMany<_>")]
    pub genre: Vec<PlayGenreFieldEnum>,
    ///https://schema.org/copyrightNotice
    #[serde(rename = "copyrightNotice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_notice: Vec<String>,
    ///https://schema.org/correction
    #[serde(rename = "correction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub correction: Vec<PlayCorrectionFieldEnum>,
    ///https://schema.org/sdLicense
    #[serde(rename = "sdLicense")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_license: Vec<PlaySdLicenseFieldEnum>,
    ///https://schema.org/maintainer
    #[serde(rename = "maintainer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maintainer: Vec<PlayMaintainerFieldEnum>,
    ///https://schema.org/sdPublisher
    #[serde(rename = "sdPublisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_publisher: Vec<PlaySdPublisherFieldEnum>,
    ///https://schema.org/accessibilityHazard
    #[serde(rename = "accessibilityHazard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_hazard: Vec<String>,
    ///https://schema.org/materialExtent
    #[serde(rename = "materialExtent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material_extent: Vec<PlayMaterialExtentFieldEnum>,
    ///https://schema.org/temporalCoverage
    #[serde(rename = "temporalCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal_coverage: Vec<PlayTemporalCoverageFieldEnum>,
    ///https://schema.org/interactivityType
    #[serde(rename = "interactivityType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interactivity_type: Vec<String>,
    ///https://schema.org/associatedMedia
    #[serde(rename = "associatedMedia")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_media: Vec<MediaObject>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/accessibilityControl
    #[serde(rename = "accessibilityControl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_control: Vec<String>,
    ///https://schema.org/editEIDR
    #[serde(rename = "editEIDR")]
    #[serde_as(as = "OneOrMany<_>")]
    pub edit_eidr: Vec<PlayEditEIDRFieldEnum>,
    ///https://schema.org/contributor
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contributor: Vec<PlayContributorFieldEnum>,
    ///https://schema.org/spatialCoverage
    #[serde(rename = "spatialCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial_coverage: Vec<Place>,
    ///https://schema.org/locationCreated
    #[serde(rename = "locationCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location_created: Vec<Place>,
    ///https://schema.org/archivedAt
    #[serde(rename = "archivedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub archived_at: Vec<PlayArchivedAtFieldEnum>,
    ///https://schema.org/comment
    #[serde(rename = "comment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment: Vec<Comment>,
    ///https://schema.org/pattern
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<PlayPatternFieldEnum>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/copyrightYear
    #[serde(rename = "copyrightYear")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_year: Vec<f32>,
    ///https://schema.org/isPartOf
    #[serde(rename = "isPartOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_part_of: Vec<PlayIsPartOfFieldEnum>,
    ///https://schema.org/interactionStatistic
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///https://schema.org/workTranslation
    #[serde(rename = "workTranslation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_translation: Vec<CreativeWork>,
    ///https://schema.org/size
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<PlaySizeFieldEnum>,
    ///https://schema.org/license
    #[serde(rename = "license")]
    #[serde_as(as = "OneOrMany<_>")]
    pub license: Vec<PlayLicenseFieldEnum>,
    ///https://schema.org/editor
    #[serde(rename = "editor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub editor: Vec<Person>,
    ///https://schema.org/alternativeHeadline
    #[serde(rename = "alternativeHeadline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternative_headline: Vec<String>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<PlayAdditionalTypeFieldEnum>,
    ///https://schema.org/abstract
    #[serde(rename = "abstract")]
    #[serde_as(as = "OneOrMany<_>")]
    pub _abstract: Vec<String>,
    ///https://schema.org/awards
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<PlayImageFieldEnum>,
    ///https://schema.org/fileFormat
    #[serde(rename = "fileFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub file_format: Vec<PlayFileFormatFieldEnum>,
    ///https://schema.org/accessMode
    #[serde(rename = "accessMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<PlayKeywordsFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/version
    #[serde(rename = "version")]
    #[serde_as(as = "OneOrMany<_>")]
    pub version: Vec<PlayVersionFieldEnum>,
    ///https://schema.org/teaches
    #[serde(rename = "teaches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub teaches: Vec<PlayTeachesFieldEnum>,
    ///https://schema.org/audience
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///https://schema.org/mentions
    #[serde(rename = "mentions")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mentions: Vec<Thing>,
    ///https://schema.org/workExample
    #[serde(rename = "workExample")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_example: Vec<CreativeWork>,
    ///https://schema.org/acquireLicensePage
    #[serde(rename = "acquireLicensePage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub acquire_license_page: Vec<PlayAcquireLicensePageFieldEnum>,
    ///https://schema.org/encodings
    #[serde(rename = "encodings")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encodings: Vec<MediaObject>,
    ///https://schema.org/creator
    #[serde(rename = "creator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creator: Vec<PlayCreatorFieldEnum>,
    ///https://schema.org/accessibilitySummary
    #[serde(rename = "accessibilitySummary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_summary: Vec<String>,
    ///https://schema.org/educationalLevel
    #[serde(rename = "educationalLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_level: Vec<PlayEducationalLevelFieldEnum>,
    ///https://schema.org/isFamilyFriendly
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///https://schema.org/isBasedOn
    #[serde(rename = "isBasedOn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on: Vec<PlayIsBasedOnFieldEnum>,
    ///https://schema.org/thumbnail
    #[serde(rename = "thumbnail")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail: Vec<ImageObject>,
    ///https://schema.org/thumbnailUrl
    #[serde(rename = "thumbnailUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail_url: Vec<String>,
    ///https://schema.org/temporal
    #[serde(rename = "temporal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal: Vec<PlayTemporalFieldEnum>,
    ///https://schema.org/countryOfOrigin
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///https://schema.org/accessibilityFeature
    #[serde(rename = "accessibilityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_feature: Vec<String>,
    ///https://schema.org/headline
    #[serde(rename = "headline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub headline: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/funder
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<PlayFunderFieldEnum>,
    ///https://schema.org/datePublished
    #[serde(rename = "datePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_published: Vec<PlayDatePublishedFieldEnum>,
    ///https://schema.org/video
    #[serde(rename = "video")]
    #[serde_as(as = "OneOrMany<_>")]
    pub video: Vec<PlayVideoFieldEnum>,
    ///https://schema.org/releasedEvent
    #[serde(rename = "releasedEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub released_event: Vec<PublicationEvent>,
    ///https://schema.org/translationOfWork
    #[serde(rename = "translationOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translation_of_work: Vec<CreativeWork>,
    ///https://schema.org/contentLocation
    #[serde(rename = "contentLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_location: Vec<Place>,
    ///https://schema.org/about
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    pub about: Vec<Thing>,
    ///https://schema.org/sdDatePublished
    #[serde(rename = "sdDatePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_date_published: Vec<String>,
    ///https://schema.org/isBasedOnUrl
    #[serde(rename = "isBasedOnUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on_url: Vec<PlayIsBasedOnUrlFieldEnum>,
    ///https://schema.org/isAccessibleForFree
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///https://schema.org/dateCreated
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_created: Vec<PlayDateCreatedFieldEnum>,
    ///https://schema.org/accessibilityAPI
    #[serde(rename = "accessibilityAPI")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_api: Vec<String>,
    ///https://schema.org/sponsor
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<PlaySponsorFieldEnum>,
    ///https://schema.org/publication
    #[serde(rename = "publication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publication: Vec<PublicationEvent>,
    ///https://schema.org/contentReferenceTime
    #[serde(rename = "contentReferenceTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_reference_time: Vec<String>,
    ///https://schema.org/publisher
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher: Vec<PlayPublisherFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<PlaySubjectOfFieldEnum>,
    ///https://schema.org/hasPart
    #[serde(rename = "hasPart")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_part: Vec<CreativeWork>,
    ///https://schema.org/copyrightHolder
    #[serde(rename = "copyrightHolder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_holder: Vec<PlayCopyrightHolderFieldEnum>,
    ///https://schema.org/educationalUse
    #[serde(rename = "educationalUse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_use: Vec<PlayEducationalUseFieldEnum>,
    ///https://schema.org/interpretedAsClaim
    #[serde(rename = "interpretedAsClaim")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interpreted_as_claim: Vec<Claim>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/dateModified
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_modified: Vec<PlayDateModifiedFieldEnum>,
    ///https://schema.org/creditText
    #[serde(rename = "creditText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub credit_text: Vec<String>,
    ///https://schema.org/author
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    pub author: Vec<PlayAuthorFieldEnum>,
    ///https://schema.org/expires
    #[serde(rename = "expires")]
    #[serde_as(as = "OneOrMany<_>")]
    pub expires: Vec<PlayExpiresFieldEnum>,
    ///https://schema.org/audio
    #[serde(rename = "audio")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audio: Vec<PlayAudioFieldEnum>,
    ///https://schema.org/publisherImprint
    #[serde(rename = "publisherImprint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher_imprint: Vec<Organization>,
    ///https://schema.org/character
    #[serde(rename = "character")]
    #[serde_as(as = "OneOrMany<_>")]
    pub character: Vec<Person>,
}
