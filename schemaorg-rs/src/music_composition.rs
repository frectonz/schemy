use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/datePublished
///https://schema.org/Date
///https://schema.org/DateTime
pub type MusicCompositionDatePublishedFieldEnum = String;
///https://schema.org/temporal
///https://schema.org/DateTime
///https://schema.org/Text
pub type MusicCompositionTemporalFieldEnum = String;
///https://schema.org/schemaVersion
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionSchemaVersionFieldEnum = String;
///https://schema.org/temporalCoverage
///https://schema.org/DateTime
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionTemporalCoverageFieldEnum = String;
///https://schema.org/fileFormat
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionFileFormatFieldEnum = String;
///https://schema.org/dateCreated
///https://schema.org/Date
///https://schema.org/DateTime
pub type MusicCompositionDateCreatedFieldEnum = String;
///https://schema.org/editEIDR
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionEditEIDRFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionAdditionalTypeFieldEnum = String;
///https://schema.org/expires
///https://schema.org/Date
///https://schema.org/DateTime
pub type MusicCompositionExpiresFieldEnum = String;
///https://schema.org/genre
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionGenreFieldEnum = String;
///https://schema.org/dateModified
///https://schema.org/Date
///https://schema.org/DateTime
pub type MusicCompositionDateModifiedFieldEnum = String;
///https://schema.org/encodingFormat
///https://schema.org/Text
///https://schema.org/URL
pub type MusicCompositionEncodingFormatFieldEnum = String;
///https://schema.org/MusicComposition
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MusicComposition {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/publisherImprint
    #[serde(rename = "publisherImprint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher_imprint: Vec<Organization>,
    ///https://schema.org/timeRequired
    #[serde(rename = "timeRequired")]
    #[serde_as(as = "OneOrMany<_>")]
    pub time_required: Vec<Duration>,
    ///https://schema.org/alternativeHeadline
    #[serde(rename = "alternativeHeadline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternative_headline: Vec<String>,
    ///https://schema.org/discussionUrl
    #[serde(rename = "discussionUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discussion_url: Vec<String>,
    ///https://schema.org/associatedMedia
    #[serde(rename = "associatedMedia")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_media: Vec<MediaObject>,
    ///https://schema.org/size
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<MusicCompositionSizeFieldEnum>,
    ///https://schema.org/musicCompositionForm
    #[serde(rename = "musicCompositionForm")]
    #[serde_as(as = "OneOrMany<_>")]
    pub music_composition_form: Vec<String>,
    ///https://schema.org/inLanguage
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<MusicCompositionInLanguageFieldEnum>,
    ///https://schema.org/commentCount
    #[serde(rename = "commentCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment_count: Vec<i32>,
    ///https://schema.org/datePublished
    #[serde(rename = "datePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_published: Vec<MusicCompositionDatePublishedFieldEnum>,
    ///https://schema.org/abstract
    #[serde(rename = "abstract")]
    #[serde_as(as = "OneOrMany<_>")]
    pub _abstract: Vec<String>,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<MusicCompositionOffersFieldEnum>,
    ///https://schema.org/hasPart
    #[serde(rename = "hasPart")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_part: Vec<CreativeWork>,
    ///https://schema.org/material
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<MusicCompositionMaterialFieldEnum>,
    ///https://schema.org/spatial
    #[serde(rename = "spatial")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial: Vec<Place>,
    ///https://schema.org/headline
    #[serde(rename = "headline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub headline: Vec<String>,
    ///https://schema.org/creditText
    #[serde(rename = "creditText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub credit_text: Vec<String>,
    ///https://schema.org/typicalAgeRange
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_age_range: Vec<String>,
    ///https://schema.org/version
    #[serde(rename = "version")]
    #[serde_as(as = "OneOrMany<_>")]
    pub version: Vec<MusicCompositionVersionFieldEnum>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<MusicCompositionKeywordsFieldEnum>,
    ///https://schema.org/materialExtent
    #[serde(rename = "materialExtent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material_extent: Vec<MusicCompositionMaterialExtentFieldEnum>,
    ///https://schema.org/accessibilityHazard
    #[serde(rename = "accessibilityHazard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_hazard: Vec<String>,
    ///https://schema.org/accessibilityControl
    #[serde(rename = "accessibilityControl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_control: Vec<String>,
    ///https://schema.org/temporal
    #[serde(rename = "temporal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal: Vec<MusicCompositionTemporalFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/translationOfWork
    #[serde(rename = "translationOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translation_of_work: Vec<CreativeWork>,
    ///https://schema.org/spatialCoverage
    #[serde(rename = "spatialCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial_coverage: Vec<Place>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/producer
    #[serde(rename = "producer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub producer: Vec<MusicCompositionProducerFieldEnum>,
    ///https://schema.org/mentions
    #[serde(rename = "mentions")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mentions: Vec<Thing>,
    ///https://schema.org/audio
    #[serde(rename = "audio")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audio: Vec<MusicCompositionAudioFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MusicCompositionSubjectOfFieldEnum>,
    ///https://schema.org/isBasedOnUrl
    #[serde(rename = "isBasedOnUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on_url: Vec<MusicCompositionIsBasedOnUrlFieldEnum>,
    ///https://schema.org/contentLocation
    #[serde(rename = "contentLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_location: Vec<Place>,
    ///https://schema.org/composer
    #[serde(rename = "composer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub composer: Vec<MusicCompositionComposerFieldEnum>,
    ///https://schema.org/usageInfo
    #[serde(rename = "usageInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub usage_info: Vec<MusicCompositionUsageInfoFieldEnum>,
    ///https://schema.org/exampleOfWork
    #[serde(rename = "exampleOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub example_of_work: Vec<CreativeWork>,
    ///https://schema.org/teaches
    #[serde(rename = "teaches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub teaches: Vec<MusicCompositionTeachesFieldEnum>,
    ///https://schema.org/isBasedOn
    #[serde(rename = "isBasedOn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on: Vec<MusicCompositionIsBasedOnFieldEnum>,
    ///https://schema.org/schemaVersion
    #[serde(rename = "schemaVersion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub schema_version: Vec<MusicCompositionSchemaVersionFieldEnum>,
    ///https://schema.org/publisher
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher: Vec<MusicCompositionPublisherFieldEnum>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MusicCompositionDescriptionFieldEnum>,
    ///https://schema.org/includedComposition
    #[serde(rename = "includedComposition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub included_composition: Vec<MusicComposition>,
    ///https://schema.org/copyrightHolder
    #[serde(rename = "copyrightHolder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_holder: Vec<MusicCompositionCopyrightHolderFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MusicCompositionIdentifierFieldEnum>,
    ///https://schema.org/sdDatePublished
    #[serde(rename = "sdDatePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_date_published: Vec<String>,
    ///https://schema.org/lyricist
    #[serde(rename = "lyricist")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lyricist: Vec<Person>,
    ///https://schema.org/interactivityType
    #[serde(rename = "interactivityType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interactivity_type: Vec<String>,
    ///https://schema.org/funder
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<MusicCompositionFunderFieldEnum>,
    ///https://schema.org/musicalKey
    #[serde(rename = "musicalKey")]
    #[serde_as(as = "OneOrMany<_>")]
    pub musical_key: Vec<String>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/temporalCoverage
    #[serde(rename = "temporalCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal_coverage: Vec<MusicCompositionTemporalCoverageFieldEnum>,
    ///https://schema.org/firstPerformance
    #[serde(rename = "firstPerformance")]
    #[serde_as(as = "OneOrMany<_>")]
    pub first_performance: Vec<Event>,
    ///https://schema.org/learningResourceType
    #[serde(rename = "learningResourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub learning_resource_type: Vec<MusicCompositionLearningResourceTypeFieldEnum>,
    ///https://schema.org/copyrightYear
    #[serde(rename = "copyrightYear")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_year: Vec<f32>,
    ///https://schema.org/countryOfOrigin
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///https://schema.org/translator
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translator: Vec<MusicCompositionTranslatorFieldEnum>,
    ///https://schema.org/isPartOf
    #[serde(rename = "isPartOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_part_of: Vec<MusicCompositionIsPartOfFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MusicCompositionMainEntityOfPageFieldEnum>,
    ///https://schema.org/fileFormat
    #[serde(rename = "fileFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub file_format: Vec<MusicCompositionFileFormatFieldEnum>,
    ///https://schema.org/character
    #[serde(rename = "character")]
    #[serde_as(as = "OneOrMany<_>")]
    pub character: Vec<Person>,
    ///https://schema.org/comment
    #[serde(rename = "comment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment: Vec<Comment>,
    ///https://schema.org/text
    #[serde(rename = "text")]
    #[serde_as(as = "OneOrMany<_>")]
    pub text: Vec<String>,
    ///https://schema.org/correction
    #[serde(rename = "correction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub correction: Vec<MusicCompositionCorrectionFieldEnum>,
    ///https://schema.org/workTranslation
    #[serde(rename = "workTranslation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_translation: Vec<CreativeWork>,
    ///https://schema.org/maintainer
    #[serde(rename = "maintainer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maintainer: Vec<MusicCompositionMaintainerFieldEnum>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/recordedAt
    #[serde(rename = "recordedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_at: Vec<Event>,
    ///https://schema.org/educationalUse
    #[serde(rename = "educationalUse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_use: Vec<MusicCompositionEducationalUseFieldEnum>,
    ///https://schema.org/accountablePerson
    #[serde(rename = "accountablePerson")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accountable_person: Vec<Person>,
    ///https://schema.org/isAccessibleForFree
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///https://schema.org/dateCreated
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_created: Vec<MusicCompositionDateCreatedFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/accessibilitySummary
    #[serde(rename = "accessibilitySummary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_summary: Vec<String>,
    ///https://schema.org/citation
    #[serde(rename = "citation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub citation: Vec<MusicCompositionCitationFieldEnum>,
    ///https://schema.org/thumbnail
    #[serde(rename = "thumbnail")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail: Vec<ImageObject>,
    ///https://schema.org/educationalAlignment
    #[serde(rename = "educationalAlignment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_alignment: Vec<AlignmentObject>,
    ///https://schema.org/interpretedAsClaim
    #[serde(rename = "interpretedAsClaim")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interpreted_as_claim: Vec<Claim>,
    ///https://schema.org/editEIDR
    #[serde(rename = "editEIDR")]
    #[serde_as(as = "OneOrMany<_>")]
    pub edit_eidr: Vec<MusicCompositionEditEIDRFieldEnum>,
    ///https://schema.org/releasedEvent
    #[serde(rename = "releasedEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub released_event: Vec<PublicationEvent>,
    ///https://schema.org/lyrics
    #[serde(rename = "lyrics")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lyrics: Vec<CreativeWork>,
    ///https://schema.org/assesses
    #[serde(rename = "assesses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub assesses: Vec<MusicCompositionAssessesFieldEnum>,
    ///https://schema.org/contentRating
    #[serde(rename = "contentRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_rating: Vec<MusicCompositionContentRatingFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/publishingPrinciples
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<MusicCompositionPublishingPrinciplesFieldEnum>,
    ///https://schema.org/audience
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///https://schema.org/archivedAt
    #[serde(rename = "archivedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub archived_at: Vec<MusicCompositionArchivedAtFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MusicCompositionAdditionalTypeFieldEnum>,
    ///https://schema.org/publication
    #[serde(rename = "publication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publication: Vec<PublicationEvent>,
    ///https://schema.org/video
    #[serde(rename = "video")]
    #[serde_as(as = "OneOrMany<_>")]
    pub video: Vec<MusicCompositionVideoFieldEnum>,
    ///https://schema.org/acquireLicensePage
    #[serde(rename = "acquireLicensePage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub acquire_license_page: Vec<MusicCompositionAcquireLicensePageFieldEnum>,
    ///https://schema.org/sponsor
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<MusicCompositionSponsorFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/conditionsOfAccess
    #[serde(rename = "conditionsOfAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub conditions_of_access: Vec<String>,
    ///https://schema.org/workExample
    #[serde(rename = "workExample")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_example: Vec<CreativeWork>,
    ///https://schema.org/creator
    #[serde(rename = "creator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creator: Vec<MusicCompositionCreatorFieldEnum>,
    ///https://schema.org/isFamilyFriendly
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///https://schema.org/sdLicense
    #[serde(rename = "sdLicense")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_license: Vec<MusicCompositionSdLicenseFieldEnum>,
    ///https://schema.org/encoding
    #[serde(rename = "encoding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding: Vec<MediaObject>,
    ///https://schema.org/accessMode
    #[serde(rename = "accessMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode: Vec<String>,
    ///https://schema.org/creativeWorkStatus
    #[serde(rename = "creativeWorkStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creative_work_status: Vec<MusicCompositionCreativeWorkStatusFieldEnum>,
    ///https://schema.org/expires
    #[serde(rename = "expires")]
    #[serde_as(as = "OneOrMany<_>")]
    pub expires: Vec<MusicCompositionExpiresFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/author
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    pub author: Vec<MusicCompositionAuthorFieldEnum>,
    ///https://schema.org/musicArrangement
    #[serde(rename = "musicArrangement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub music_arrangement: Vec<MusicComposition>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/wordCount
    #[serde(rename = "wordCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub word_count: Vec<i32>,
    ///https://schema.org/sourceOrganization
    #[serde(rename = "sourceOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub source_organization: Vec<Organization>,
    ///https://schema.org/genre
    #[serde(rename = "genre")]
    #[serde_as(as = "OneOrMany<_>")]
    pub genre: Vec<MusicCompositionGenreFieldEnum>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/recordedAs
    #[serde(rename = "recordedAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_as: Vec<MusicRecording>,
    ///https://schema.org/iswcCode
    #[serde(rename = "iswcCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub iswc_code: Vec<String>,
    ///https://schema.org/dateModified
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_modified: Vec<MusicCompositionDateModifiedFieldEnum>,
    ///https://schema.org/pattern
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<MusicCompositionPatternFieldEnum>,
    ///https://schema.org/sdPublisher
    #[serde(rename = "sdPublisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_publisher: Vec<MusicCompositionSdPublisherFieldEnum>,
    ///https://schema.org/accessModeSufficient
    #[serde(rename = "accessModeSufficient")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode_sufficient: Vec<ItemList>,
    ///https://schema.org/contributor
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contributor: Vec<MusicCompositionContributorFieldEnum>,
    ///https://schema.org/locationCreated
    #[serde(rename = "locationCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location_created: Vec<Place>,
    ///https://schema.org/digitalSourceType
    #[serde(rename = "digitalSourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub digital_source_type: Vec<IPTCDigitalSourceEnumerationEnum>,
    ///https://schema.org/encodingFormat
    #[serde(rename = "encodingFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding_format: Vec<MusicCompositionEncodingFormatFieldEnum>,
    ///https://schema.org/awards
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///https://schema.org/license
    #[serde(rename = "license")]
    #[serde_as(as = "OneOrMany<_>")]
    pub license: Vec<MusicCompositionLicenseFieldEnum>,
    ///https://schema.org/contentReferenceTime
    #[serde(rename = "contentReferenceTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_reference_time: Vec<String>,
    ///https://schema.org/provider
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<MusicCompositionProviderFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/accessibilityAPI
    #[serde(rename = "accessibilityAPI")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_api: Vec<String>,
    ///https://schema.org/encodings
    #[serde(rename = "encodings")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encodings: Vec<MediaObject>,
    ///https://schema.org/about
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    pub about: Vec<Thing>,
    ///https://schema.org/position
    #[serde(rename = "position")]
    #[serde_as(as = "OneOrMany<_>")]
    pub position: Vec<MusicCompositionPositionFieldEnum>,
    ///https://schema.org/mainEntity
    #[serde(rename = "mainEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity: Vec<Thing>,
    ///https://schema.org/thumbnailUrl
    #[serde(rename = "thumbnailUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail_url: Vec<String>,
    ///https://schema.org/accessibilityFeature
    #[serde(rename = "accessibilityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_feature: Vec<String>,
    ///https://schema.org/interactionStatistic
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///https://schema.org/editor
    #[serde(rename = "editor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub editor: Vec<Person>,
    ///https://schema.org/educationalLevel
    #[serde(rename = "educationalLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_level: Vec<MusicCompositionEducationalLevelFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MusicCompositionImageFieldEnum>,
    ///https://schema.org/copyrightNotice
    #[serde(rename = "copyrightNotice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_notice: Vec<String>,
}
