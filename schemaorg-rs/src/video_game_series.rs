use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesAdditionalTypeFieldEnum = String;
///https://schema.org/dateModified
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesDateModifiedFieldEnum = String;
///https://schema.org/dateCreated
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesDateCreatedFieldEnum = String;
///https://schema.org/startDate
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesStartDateFieldEnum = String;
///https://schema.org/datePublished
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesDatePublishedFieldEnum = String;
///https://schema.org/endDate
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesEndDateFieldEnum = String;
///https://schema.org/genre
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesGenreFieldEnum = String;
///https://schema.org/temporalCoverage
///https://schema.org/DateTime
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesTemporalCoverageFieldEnum = String;
///https://schema.org/schemaVersion
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesSchemaVersionFieldEnum = String;
///https://schema.org/encodingFormat
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesEncodingFormatFieldEnum = String;
///https://schema.org/fileFormat
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesFileFormatFieldEnum = String;
///https://schema.org/editEIDR
///https://schema.org/Text
///https://schema.org/URL
pub type VideoGameSeriesEditEIDRFieldEnum = String;
///https://schema.org/expires
///https://schema.org/Date
///https://schema.org/DateTime
pub type VideoGameSeriesExpiresFieldEnum = String;
///https://schema.org/temporal
///https://schema.org/DateTime
///https://schema.org/Text
pub type VideoGameSeriesTemporalFieldEnum = String;
///https://schema.org/VideoGameSeries
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct VideoGameSeries {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/spatial
    #[serde(rename = "spatial")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial: Vec<Place>,
    ///https://schema.org/interactivityType
    #[serde(rename = "interactivityType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interactivity_type: Vec<String>,
    ///https://schema.org/playMode
    #[serde(rename = "playMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub play_mode: Vec<GamePlayModeEnum>,
    ///https://schema.org/contentReferenceTime
    #[serde(rename = "contentReferenceTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_reference_time: Vec<String>,
    ///https://schema.org/publisherImprint
    #[serde(rename = "publisherImprint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher_imprint: Vec<Organization>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<VideoGameSeriesAdditionalTypeFieldEnum>,
    ///https://schema.org/director
    #[serde(rename = "director")]
    #[serde_as(as = "OneOrMany<_>")]
    pub director: Vec<Person>,
    ///https://schema.org/sourceOrganization
    #[serde(rename = "sourceOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub source_organization: Vec<Organization>,
    ///https://schema.org/cheatCode
    #[serde(rename = "cheatCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub cheat_code: Vec<CreativeWork>,
    ///https://schema.org/archivedAt
    #[serde(rename = "archivedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub archived_at: Vec<VideoGameSeriesArchivedAtFieldEnum>,
    ///https://schema.org/teaches
    #[serde(rename = "teaches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub teaches: Vec<VideoGameSeriesTeachesFieldEnum>,
    ///https://schema.org/audio
    #[serde(rename = "audio")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audio: Vec<VideoGameSeriesAudioFieldEnum>,
    ///https://schema.org/copyrightHolder
    #[serde(rename = "copyrightHolder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_holder: Vec<VideoGameSeriesCopyrightHolderFieldEnum>,
    ///https://schema.org/containsSeason
    #[serde(rename = "containsSeason")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contains_season: Vec<CreativeWorkSeason>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<VideoGameSeriesImageFieldEnum>,
    ///https://schema.org/discussionUrl
    #[serde(rename = "discussionUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discussion_url: Vec<String>,
    ///https://schema.org/dateModified
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_modified: Vec<VideoGameSeriesDateModifiedFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<VideoGameSeriesIdentifierFieldEnum>,
    ///https://schema.org/translationOfWork
    #[serde(rename = "translationOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translation_of_work: Vec<CreativeWork>,
    ///https://schema.org/encoding
    #[serde(rename = "encoding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding: Vec<MediaObject>,
    ///https://schema.org/seasons
    #[serde(rename = "seasons")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seasons: Vec<CreativeWorkSeason>,
    ///https://schema.org/sdPublisher
    #[serde(rename = "sdPublisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_publisher: Vec<VideoGameSeriesSdPublisherFieldEnum>,
    ///https://schema.org/season
    #[serde(rename = "season")]
    #[serde_as(as = "OneOrMany<_>")]
    pub season: Vec<VideoGameSeriesSeasonFieldEnum>,
    ///https://schema.org/usageInfo
    #[serde(rename = "usageInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub usage_info: Vec<VideoGameSeriesUsageInfoFieldEnum>,
    ///https://schema.org/dateCreated
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_created: Vec<VideoGameSeriesDateCreatedFieldEnum>,
    ///https://schema.org/sdDatePublished
    #[serde(rename = "sdDatePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_date_published: Vec<String>,
    ///https://schema.org/publishingPrinciples
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<VideoGameSeriesPublishingPrinciplesFieldEnum>,
    ///https://schema.org/spatialCoverage
    #[serde(rename = "spatialCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial_coverage: Vec<Place>,
    ///https://schema.org/startDate
    #[serde(rename = "startDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_date: Vec<VideoGameSeriesStartDateFieldEnum>,
    ///https://schema.org/educationalUse
    #[serde(rename = "educationalUse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_use: Vec<VideoGameSeriesEducationalUseFieldEnum>,
    ///https://schema.org/citation
    #[serde(rename = "citation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub citation: Vec<VideoGameSeriesCitationFieldEnum>,
    ///https://schema.org/recordedAt
    #[serde(rename = "recordedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_at: Vec<Event>,
    ///https://schema.org/acquireLicensePage
    #[serde(rename = "acquireLicensePage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub acquire_license_page: Vec<VideoGameSeriesAcquireLicensePageFieldEnum>,
    ///https://schema.org/releasedEvent
    #[serde(rename = "releasedEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub released_event: Vec<PublicationEvent>,
    ///https://schema.org/character
    #[serde(rename = "character")]
    #[serde_as(as = "OneOrMany<_>")]
    pub character: Vec<Person>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/sdLicense
    #[serde(rename = "sdLicense")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_license: Vec<VideoGameSeriesSdLicenseFieldEnum>,
    ///https://schema.org/workTranslation
    #[serde(rename = "workTranslation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_translation: Vec<CreativeWork>,
    ///https://schema.org/assesses
    #[serde(rename = "assesses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub assesses: Vec<VideoGameSeriesAssessesFieldEnum>,
    ///https://schema.org/accessibilityHazard
    #[serde(rename = "accessibilityHazard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_hazard: Vec<String>,
    ///https://schema.org/datePublished
    #[serde(rename = "datePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_published: Vec<VideoGameSeriesDatePublishedFieldEnum>,
    ///https://schema.org/isBasedOnUrl
    #[serde(rename = "isBasedOnUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on_url: Vec<VideoGameSeriesIsBasedOnUrlFieldEnum>,
    ///https://schema.org/thumbnailUrl
    #[serde(rename = "thumbnailUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail_url: Vec<String>,
    ///https://schema.org/endDate
    #[serde(rename = "endDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_date: Vec<VideoGameSeriesEndDateFieldEnum>,
    ///https://schema.org/copyrightYear
    #[serde(rename = "copyrightYear")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_year: Vec<f32>,
    ///https://schema.org/learningResourceType
    #[serde(rename = "learningResourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub learning_resource_type: Vec<VideoGameSeriesLearningResourceTypeFieldEnum>,
    ///https://schema.org/accessibilityControl
    #[serde(rename = "accessibilityControl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_control: Vec<String>,
    ///https://schema.org/audience
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///https://schema.org/alternativeHeadline
    #[serde(rename = "alternativeHeadline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternative_headline: Vec<String>,
    ///https://schema.org/productionCompany
    #[serde(rename = "productionCompany")]
    #[serde_as(as = "OneOrMany<_>")]
    pub production_company: Vec<Organization>,
    ///https://schema.org/text
    #[serde(rename = "text")]
    #[serde_as(as = "OneOrMany<_>")]
    pub text: Vec<String>,
    ///https://schema.org/awards
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///https://schema.org/workExample
    #[serde(rename = "workExample")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_example: Vec<CreativeWork>,
    ///https://schema.org/creditText
    #[serde(rename = "creditText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub credit_text: Vec<String>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/interactionStatistic
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///https://schema.org/trailer
    #[serde(rename = "trailer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub trailer: Vec<VideoObject>,
    ///https://schema.org/about
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    pub about: Vec<Thing>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/comment
    #[serde(rename = "comment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment: Vec<Comment>,
    ///https://schema.org/genre
    #[serde(rename = "genre")]
    #[serde_as(as = "OneOrMany<_>")]
    pub genre: Vec<VideoGameSeriesGenreFieldEnum>,
    ///https://schema.org/translator
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translator: Vec<VideoGameSeriesTranslatorFieldEnum>,
    ///https://schema.org/producer
    #[serde(rename = "producer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub producer: Vec<VideoGameSeriesProducerFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/temporalCoverage
    #[serde(rename = "temporalCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal_coverage: Vec<VideoGameSeriesTemporalCoverageFieldEnum>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/accountablePerson
    #[serde(rename = "accountablePerson")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accountable_person: Vec<Person>,
    ///https://schema.org/mentions
    #[serde(rename = "mentions")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mentions: Vec<Thing>,
    ///https://schema.org/countryOfOrigin
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///https://schema.org/author
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    pub author: Vec<VideoGameSeriesAuthorFieldEnum>,
    ///https://schema.org/abstract
    #[serde(rename = "abstract")]
    #[serde_as(as = "OneOrMany<_>")]
    pub _abstract: Vec<String>,
    ///https://schema.org/actor
    #[serde(rename = "actor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub actor: Vec<VideoGameSeriesActorFieldEnum>,
    ///https://schema.org/exampleOfWork
    #[serde(rename = "exampleOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub example_of_work: Vec<CreativeWork>,
    ///https://schema.org/accessibilityAPI
    #[serde(rename = "accessibilityAPI")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_api: Vec<String>,
    ///https://schema.org/maintainer
    #[serde(rename = "maintainer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maintainer: Vec<VideoGameSeriesMaintainerFieldEnum>,
    ///https://schema.org/accessibilitySummary
    #[serde(rename = "accessibilitySummary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_summary: Vec<String>,
    ///https://schema.org/episode
    #[serde(rename = "episode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub episode: Vec<Episode>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/copyrightNotice
    #[serde(rename = "copyrightNotice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_notice: Vec<String>,
    ///https://schema.org/musicBy
    #[serde(rename = "musicBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub music_by: Vec<VideoGameSeriesMusicByFieldEnum>,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<VideoGameSeriesOffersFieldEnum>,
    ///https://schema.org/gameLocation
    #[serde(rename = "gameLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub game_location: Vec<VideoGameSeriesGameLocationFieldEnum>,
    ///https://schema.org/interpretedAsClaim
    #[serde(rename = "interpretedAsClaim")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interpreted_as_claim: Vec<Claim>,
    ///https://schema.org/isFamilyFriendly
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///https://schema.org/numberOfPlayers
    #[serde(rename = "numberOfPlayers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_players: Vec<QuantitativeValue>,
    ///https://schema.org/contributor
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contributor: Vec<VideoGameSeriesContributorFieldEnum>,
    ///https://schema.org/quest
    #[serde(rename = "quest")]
    #[serde_as(as = "OneOrMany<_>")]
    pub quest: Vec<Thing>,
    ///https://schema.org/version
    #[serde(rename = "version")]
    #[serde_as(as = "OneOrMany<_>")]
    pub version: Vec<VideoGameSeriesVersionFieldEnum>,
    ///https://schema.org/schemaVersion
    #[serde(rename = "schemaVersion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub schema_version: Vec<VideoGameSeriesSchemaVersionFieldEnum>,
    ///https://schema.org/associatedMedia
    #[serde(rename = "associatedMedia")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_media: Vec<MediaObject>,
    ///https://schema.org/material
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<VideoGameSeriesMaterialFieldEnum>,
    ///https://schema.org/accessMode
    #[serde(rename = "accessMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode: Vec<String>,
    ///https://schema.org/educationalAlignment
    #[serde(rename = "educationalAlignment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_alignment: Vec<AlignmentObject>,
    ///https://schema.org/accessibilityFeature
    #[serde(rename = "accessibilityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_feature: Vec<String>,
    ///https://schema.org/encodingFormat
    #[serde(rename = "encodingFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding_format: Vec<VideoGameSeriesEncodingFormatFieldEnum>,
    ///https://schema.org/isAccessibleForFree
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///https://schema.org/directors
    #[serde(rename = "directors")]
    #[serde_as(as = "OneOrMany<_>")]
    pub directors: Vec<Person>,
    ///https://schema.org/inLanguage
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<VideoGameSeriesInLanguageFieldEnum>,
    ///https://schema.org/mainEntity
    #[serde(rename = "mainEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity: Vec<Thing>,
    ///https://schema.org/pattern
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<VideoGameSeriesPatternFieldEnum>,
    ///https://schema.org/isPartOf
    #[serde(rename = "isPartOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_part_of: Vec<VideoGameSeriesIsPartOfFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<VideoGameSeriesSubjectOfFieldEnum>,
    ///https://schema.org/position
    #[serde(rename = "position")]
    #[serde_as(as = "OneOrMany<_>")]
    pub position: Vec<VideoGameSeriesPositionFieldEnum>,
    ///https://schema.org/conditionsOfAccess
    #[serde(rename = "conditionsOfAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub conditions_of_access: Vec<String>,
    ///https://schema.org/fileFormat
    #[serde(rename = "fileFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub file_format: Vec<VideoGameSeriesFileFormatFieldEnum>,
    ///https://schema.org/gamePlatform
    #[serde(rename = "gamePlatform")]
    #[serde_as(as = "OneOrMany<_>")]
    pub game_platform: Vec<VideoGameSeriesGamePlatformFieldEnum>,
    ///https://schema.org/hasPart
    #[serde(rename = "hasPart")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_part: Vec<CreativeWork>,
    ///https://schema.org/publisher
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher: Vec<VideoGameSeriesPublisherFieldEnum>,
    ///https://schema.org/digitalSourceType
    #[serde(rename = "digitalSourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub digital_source_type: Vec<IPTCDigitalSourceEnumerationEnum>,
    ///https://schema.org/numberOfEpisodes
    #[serde(rename = "numberOfEpisodes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_episodes: Vec<i32>,
    ///https://schema.org/isBasedOn
    #[serde(rename = "isBasedOn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on: Vec<VideoGameSeriesIsBasedOnFieldEnum>,
    ///https://schema.org/commentCount
    #[serde(rename = "commentCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment_count: Vec<i32>,
    ///https://schema.org/headline
    #[serde(rename = "headline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub headline: Vec<String>,
    ///https://schema.org/characterAttribute
    #[serde(rename = "characterAttribute")]
    #[serde_as(as = "OneOrMany<_>")]
    pub character_attribute: Vec<Thing>,
    ///https://schema.org/editor
    #[serde(rename = "editor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub editor: Vec<Person>,
    ///https://schema.org/license
    #[serde(rename = "license")]
    #[serde_as(as = "OneOrMany<_>")]
    pub license: Vec<VideoGameSeriesLicenseFieldEnum>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<VideoGameSeriesKeywordsFieldEnum>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/gameItem
    #[serde(rename = "gameItem")]
    #[serde_as(as = "OneOrMany<_>")]
    pub game_item: Vec<Thing>,
    ///https://schema.org/correction
    #[serde(rename = "correction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub correction: Vec<VideoGameSeriesCorrectionFieldEnum>,
    ///https://schema.org/editEIDR
    #[serde(rename = "editEIDR")]
    #[serde_as(as = "OneOrMany<_>")]
    pub edit_eidr: Vec<VideoGameSeriesEditEIDRFieldEnum>,
    ///https://schema.org/timeRequired
    #[serde(rename = "timeRequired")]
    #[serde_as(as = "OneOrMany<_>")]
    pub time_required: Vec<Duration>,
    ///https://schema.org/episodes
    #[serde(rename = "episodes")]
    #[serde_as(as = "OneOrMany<_>")]
    pub episodes: Vec<Episode>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/thumbnail
    #[serde(rename = "thumbnail")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail: Vec<ImageObject>,
    ///https://schema.org/expires
    #[serde(rename = "expires")]
    #[serde_as(as = "OneOrMany<_>")]
    pub expires: Vec<VideoGameSeriesExpiresFieldEnum>,
    ///https://schema.org/wordCount
    #[serde(rename = "wordCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub word_count: Vec<i32>,
    ///https://schema.org/educationalLevel
    #[serde(rename = "educationalLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_level: Vec<VideoGameSeriesEducationalLevelFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<VideoGameSeriesDescriptionFieldEnum>,
    ///https://schema.org/encodings
    #[serde(rename = "encodings")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encodings: Vec<MediaObject>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<VideoGameSeriesMainEntityOfPageFieldEnum>,
    ///https://schema.org/creativeWorkStatus
    #[serde(rename = "creativeWorkStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creative_work_status: Vec<VideoGameSeriesCreativeWorkStatusFieldEnum>,
    ///https://schema.org/provider
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<VideoGameSeriesProviderFieldEnum>,
    ///https://schema.org/publication
    #[serde(rename = "publication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publication: Vec<PublicationEvent>,
    ///https://schema.org/actors
    #[serde(rename = "actors")]
    #[serde_as(as = "OneOrMany<_>")]
    pub actors: Vec<Person>,
    ///https://schema.org/size
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<VideoGameSeriesSizeFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/temporal
    #[serde(rename = "temporal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal: Vec<VideoGameSeriesTemporalFieldEnum>,
    ///https://schema.org/typicalAgeRange
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_age_range: Vec<String>,
    ///https://schema.org/locationCreated
    #[serde(rename = "locationCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location_created: Vec<Place>,
    ///https://schema.org/issn
    #[serde(rename = "issn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub issn: Vec<String>,
    ///https://schema.org/materialExtent
    #[serde(rename = "materialExtent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material_extent: Vec<VideoGameSeriesMaterialExtentFieldEnum>,
    ///https://schema.org/accessModeSufficient
    #[serde(rename = "accessModeSufficient")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode_sufficient: Vec<ItemList>,
    ///https://schema.org/sponsor
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<VideoGameSeriesSponsorFieldEnum>,
    ///https://schema.org/creator
    #[serde(rename = "creator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creator: Vec<VideoGameSeriesCreatorFieldEnum>,
    ///https://schema.org/video
    #[serde(rename = "video")]
    #[serde_as(as = "OneOrMany<_>")]
    pub video: Vec<VideoGameSeriesVideoFieldEnum>,
    ///https://schema.org/contentLocation
    #[serde(rename = "contentLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_location: Vec<Place>,
    ///https://schema.org/numberOfSeasons
    #[serde(rename = "numberOfSeasons")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_seasons: Vec<i32>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/contentRating
    #[serde(rename = "contentRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_rating: Vec<VideoGameSeriesContentRatingFieldEnum>,
    ///https://schema.org/funder
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<VideoGameSeriesFunderFieldEnum>,
}
