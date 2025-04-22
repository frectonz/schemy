use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/encodingFormat>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectEncodingFormatFieldEnum = String;
///<https://schema.org/expires>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type ImageObjectExpiresFieldEnum = String;
///<https://schema.org/genre>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectGenreFieldEnum = String;
///<https://schema.org/dateCreated>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type ImageObjectDateCreatedFieldEnum = String;
///<https://schema.org/temporalCoverage>
///<https://schema.org/DateTime>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectTemporalCoverageFieldEnum = String;
///<https://schema.org/uploadDate>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type ImageObjectUploadDateFieldEnum = String;
///<https://schema.org/editEIDR>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectEditEIDRFieldEnum = String;
///<https://schema.org/endTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ImageObjectEndTimeFieldEnum = String;
///<https://schema.org/temporal>
///<https://schema.org/DateTime>
///<https://schema.org/Text>
pub type ImageObjectTemporalFieldEnum = String;
///<https://schema.org/dateModified>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type ImageObjectDateModifiedFieldEnum = String;
///<https://schema.org/fileFormat>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectFileFormatFieldEnum = String;
///<https://schema.org/startTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ImageObjectStartTimeFieldEnum = String;
///<https://schema.org/datePublished>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type ImageObjectDatePublishedFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectAdditionalTypeFieldEnum = String;
///<https://schema.org/schemaVersion>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ImageObjectSchemaVersionFieldEnum = String;
///<https://schema.org/ImageObject>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ImageObject {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/height>
    #[serde(rename = "height")]
    #[serde_as(as = "OneOrMany<_>")]
    pub height: Vec<ImageObjectHeightFieldEnum>,
    ///<https://schema.org/translationOfWork>
    #[serde(rename = "translationOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translation_of_work: Vec<CreativeWork>,
    ///<https://schema.org/mainEntity>
    #[serde(rename = "mainEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity: Vec<Thing>,
    ///<https://schema.org/isBasedOn>
    #[serde(rename = "isBasedOn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on: Vec<ImageObjectIsBasedOnFieldEnum>,
    ///<https://schema.org/sha256>
    #[serde(rename = "sha256")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sha256: Vec<String>,
    ///<https://schema.org/contentUrl>
    #[serde(rename = "contentUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_url: Vec<String>,
    ///<https://schema.org/accessModeSufficient>
    #[serde(rename = "accessModeSufficient")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode_sufficient: Vec<ItemList>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///<https://schema.org/copyrightNotice>
    #[serde(rename = "copyrightNotice")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_notice: Vec<String>,
    ///<https://schema.org/encodings>
    #[serde(rename = "encodings")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encodings: Vec<MediaObject>,
    ///<https://schema.org/encodingFormat>
    #[serde(rename = "encodingFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding_format: Vec<ImageObjectEncodingFormatFieldEnum>,
    ///<https://schema.org/countryOfOrigin>
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub country_of_origin: Vec<Country>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ImageObjectMainEntityOfPageFieldEnum>,
    ///<https://schema.org/accessibilityFeature>
    #[serde(rename = "accessibilityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_feature: Vec<String>,
    ///<https://schema.org/ineligibleRegion>
    #[serde(rename = "ineligibleRegion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ineligible_region: Vec<ImageObjectIneligibleRegionFieldEnum>,
    ///<https://schema.org/character>
    #[serde(rename = "character")]
    #[serde_as(as = "OneOrMany<_>")]
    pub character: Vec<Person>,
    ///<https://schema.org/expires>
    #[serde(rename = "expires")]
    #[serde_as(as = "OneOrMany<_>")]
    pub expires: Vec<ImageObjectExpiresFieldEnum>,
    ///<https://schema.org/accessMode>
    #[serde(rename = "accessMode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub access_mode: Vec<String>,
    ///<https://schema.org/encodesCreativeWork>
    #[serde(rename = "encodesCreativeWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encodes_creative_work: Vec<CreativeWork>,
    ///<https://schema.org/text>
    #[serde(rename = "text")]
    #[serde_as(as = "OneOrMany<_>")]
    pub text: Vec<String>,
    ///<https://schema.org/translator>
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub translator: Vec<ImageObjectTranslatorFieldEnum>,
    ///<https://schema.org/correction>
    #[serde(rename = "correction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub correction: Vec<ImageObjectCorrectionFieldEnum>,
    ///<https://schema.org/genre>
    #[serde(rename = "genre")]
    #[serde_as(as = "OneOrMany<_>")]
    pub genre: Vec<ImageObjectGenreFieldEnum>,
    ///<https://schema.org/copyrightYear>
    #[serde(rename = "copyrightYear")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_year: Vec<f32>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<ImageObjectKeywordsFieldEnum>,
    ///<https://schema.org/exifData>
    #[serde(rename = "exifData")]
    #[serde_as(as = "OneOrMany<_>")]
    pub exif_data: Vec<ImageObjectExifDataFieldEnum>,
    ///<https://schema.org/dateCreated>
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_created: Vec<ImageObjectDateCreatedFieldEnum>,
    ///<https://schema.org/spatialCoverage>
    #[serde(rename = "spatialCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial_coverage: Vec<Place>,
    ///<https://schema.org/creditText>
    #[serde(rename = "creditText")]
    #[serde_as(as = "OneOrMany<_>")]
    pub credit_text: Vec<String>,
    ///<https://schema.org/duration>
    #[serde(rename = "duration")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duration: Vec<ImageObjectDurationFieldEnum>,
    ///<https://schema.org/size>
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    pub size: Vec<ImageObjectSizeFieldEnum>,
    ///<https://schema.org/encoding>
    #[serde(rename = "encoding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub encoding: Vec<MediaObject>,
    ///<https://schema.org/author>
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    pub author: Vec<ImageObjectAuthorFieldEnum>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///<https://schema.org/acquireLicensePage>
    #[serde(rename = "acquireLicensePage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub acquire_license_page: Vec<ImageObjectAcquireLicensePageFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/exampleOfWork>
    #[serde(rename = "exampleOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    pub example_of_work: Vec<CreativeWork>,
    ///<https://schema.org/educationalAlignment>
    #[serde(rename = "educationalAlignment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_alignment: Vec<AlignmentObject>,
    ///<https://schema.org/workTranslation>
    #[serde(rename = "workTranslation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_translation: Vec<CreativeWork>,
    ///<https://schema.org/publication>
    #[serde(rename = "publication")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publication: Vec<PublicationEvent>,
    ///<https://schema.org/locationCreated>
    #[serde(rename = "locationCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location_created: Vec<Place>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<ImageObjectProviderFieldEnum>,
    ///<https://schema.org/accessibilityAPI>
    #[serde(rename = "accessibilityAPI")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_api: Vec<String>,
    ///<https://schema.org/sdDatePublished>
    #[serde(rename = "sdDatePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_date_published: Vec<String>,
    ///<https://schema.org/maintainer>
    #[serde(rename = "maintainer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maintainer: Vec<ImageObjectMaintainerFieldEnum>,
    ///<https://schema.org/temporalCoverage>
    #[serde(rename = "temporalCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal_coverage: Vec<ImageObjectTemporalCoverageFieldEnum>,
    ///<https://schema.org/playerType>
    #[serde(rename = "playerType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub player_type: Vec<String>,
    ///<https://schema.org/publisherImprint>
    #[serde(rename = "publisherImprint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher_imprint: Vec<Organization>,
    ///<https://schema.org/position>
    #[serde(rename = "position")]
    #[serde_as(as = "OneOrMany<_>")]
    pub position: Vec<ImageObjectPositionFieldEnum>,
    ///<https://schema.org/accessibilitySummary>
    #[serde(rename = "accessibilitySummary")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_summary: Vec<String>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/contentSize>
    #[serde(rename = "contentSize")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_size: Vec<String>,
    ///<https://schema.org/requiresSubscription>
    #[serde(rename = "requiresSubscription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub requires_subscription: Vec<ImageObjectRequiresSubscriptionFieldEnum>,
    ///<https://schema.org/creativeWorkStatus>
    #[serde(rename = "creativeWorkStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creative_work_status: Vec<ImageObjectCreativeWorkStatusFieldEnum>,
    ///<https://schema.org/materialExtent>
    #[serde(rename = "materialExtent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material_extent: Vec<ImageObjectMaterialExtentFieldEnum>,
    ///<https://schema.org/creator>
    #[serde(rename = "creator")]
    #[serde_as(as = "OneOrMany<_>")]
    pub creator: Vec<ImageObjectCreatorFieldEnum>,
    ///<https://schema.org/recordedAt>
    #[serde(rename = "recordedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub recorded_at: Vec<Event>,
    ///<https://schema.org/mentions>
    #[serde(rename = "mentions")]
    #[serde_as(as = "OneOrMany<_>")]
    pub mentions: Vec<Thing>,
    ///<https://schema.org/interactionStatistic>
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/uploadDate>
    #[serde(rename = "uploadDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub upload_date: Vec<ImageObjectUploadDateFieldEnum>,
    ///<https://schema.org/thumbnail>
    #[serde(rename = "thumbnail")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail: Vec<ImageObject>,
    ///<https://schema.org/contentLocation>
    #[serde(rename = "contentLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_location: Vec<Place>,
    ///<https://schema.org/interpretedAsClaim>
    #[serde(rename = "interpretedAsClaim")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interpreted_as_claim: Vec<Claim>,
    ///<https://schema.org/editEIDR>
    #[serde(rename = "editEIDR")]
    #[serde_as(as = "OneOrMany<_>")]
    pub edit_eidr: Vec<ImageObjectEditEIDRFieldEnum>,
    ///<https://schema.org/accountablePerson>
    #[serde(rename = "accountablePerson")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accountable_person: Vec<Person>,
    ///<https://schema.org/publishingPrinciples>
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<ImageObjectPublishingPrinciplesFieldEnum>,
    ///<https://schema.org/contentReferenceTime>
    #[serde(rename = "contentReferenceTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_reference_time: Vec<String>,
    ///<https://schema.org/endTime>
    #[serde(rename = "endTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_time: Vec<ImageObjectEndTimeFieldEnum>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<ImageObjectOffersFieldEnum>,
    ///<https://schema.org/educationalUse>
    #[serde(rename = "educationalUse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_use: Vec<ImageObjectEducationalUseFieldEnum>,
    ///<https://schema.org/isAccessibleForFree>
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///<https://schema.org/temporal>
    #[serde(rename = "temporal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub temporal: Vec<ImageObjectTemporalFieldEnum>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///<https://schema.org/isBasedOnUrl>
    #[serde(rename = "isBasedOnUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_based_on_url: Vec<ImageObjectIsBasedOnUrlFieldEnum>,
    ///<https://schema.org/comment>
    #[serde(rename = "comment")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment: Vec<Comment>,
    ///<https://schema.org/workExample>
    #[serde(rename = "workExample")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_example: Vec<CreativeWork>,
    ///<https://schema.org/producer>
    #[serde(rename = "producer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub producer: Vec<ImageObjectProducerFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ImageObjectIdentifierFieldEnum>,
    ///<https://schema.org/version>
    #[serde(rename = "version")]
    #[serde_as(as = "OneOrMany<_>")]
    pub version: Vec<ImageObjectVersionFieldEnum>,
    ///<https://schema.org/isFamilyFriendly>
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_family_friendly: Vec<String>,
    ///<https://schema.org/discussionUrl>
    #[serde(rename = "discussionUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub discussion_url: Vec<String>,
    ///<https://schema.org/accessibilityControl>
    #[serde(rename = "accessibilityControl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_control: Vec<String>,
    ///<https://schema.org/associatedMedia>
    #[serde(rename = "associatedMedia")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_media: Vec<MediaObject>,
    ///<https://schema.org/pattern>
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pattern: Vec<ImageObjectPatternFieldEnum>,
    ///<https://schema.org/sdPublisher>
    #[serde(rename = "sdPublisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_publisher: Vec<ImageObjectSdPublisherFieldEnum>,
    ///<https://schema.org/commentCount>
    #[serde(rename = "commentCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub comment_count: Vec<i32>,
    ///<https://schema.org/contentRating>
    #[serde(rename = "contentRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub content_rating: Vec<ImageObjectContentRatingFieldEnum>,
    ///<https://schema.org/releasedEvent>
    #[serde(rename = "releasedEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub released_event: Vec<PublicationEvent>,
    ///<https://schema.org/timeRequired>
    #[serde(rename = "timeRequired")]
    #[serde_as(as = "OneOrMany<_>")]
    pub time_required: Vec<Duration>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/dateModified>
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_modified: Vec<ImageObjectDateModifiedFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ImageObjectSubjectOfFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/teaches>
    #[serde(rename = "teaches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub teaches: Vec<ImageObjectTeachesFieldEnum>,
    ///<https://schema.org/usageInfo>
    #[serde(rename = "usageInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub usage_info: Vec<ImageObjectUsageInfoFieldEnum>,
    ///<https://schema.org/interactivityType>
    #[serde(rename = "interactivityType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interactivity_type: Vec<String>,
    ///<https://schema.org/regionsAllowed>
    #[serde(rename = "regionsAllowed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub regions_allowed: Vec<Place>,
    ///<https://schema.org/material>
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    pub material: Vec<ImageObjectMaterialFieldEnum>,
    ///<https://schema.org/archivedAt>
    #[serde(rename = "archivedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub archived_at: Vec<ImageObjectArchivedAtFieldEnum>,
    ///<https://schema.org/caption>
    #[serde(rename = "caption")]
    #[serde_as(as = "OneOrMany<_>")]
    pub caption: Vec<ImageObjectCaptionFieldEnum>,
    ///<https://schema.org/wordCount>
    #[serde(rename = "wordCount")]
    #[serde_as(as = "OneOrMany<_>")]
    pub word_count: Vec<i32>,
    ///<https://schema.org/sdLicense>
    #[serde(rename = "sdLicense")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sd_license: Vec<ImageObjectSdLicenseFieldEnum>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///<https://schema.org/fileFormat>
    #[serde(rename = "fileFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub file_format: Vec<ImageObjectFileFormatFieldEnum>,
    ///<https://schema.org/inLanguage>
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<ImageObjectInLanguageFieldEnum>,
    ///<https://schema.org/license>
    #[serde(rename = "license")]
    #[serde_as(as = "OneOrMany<_>")]
    pub license: Vec<ImageObjectLicenseFieldEnum>,
    ///<https://schema.org/reviews>
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///<https://schema.org/about>
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    pub about: Vec<Thing>,
    ///<https://schema.org/typicalAgeRange>
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub typical_age_range: Vec<String>,
    ///<https://schema.org/startTime>
    #[serde(rename = "startTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_time: Vec<ImageObjectStartTimeFieldEnum>,
    ///<https://schema.org/editor>
    #[serde(rename = "editor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub editor: Vec<Person>,
    ///<https://schema.org/abstract>
    #[serde(rename = "abstract")]
    #[serde_as(as = "OneOrMany<_>")]
    pub _abstract: Vec<String>,
    ///<https://schema.org/productionCompany>
    #[serde(rename = "productionCompany")]
    #[serde_as(as = "OneOrMany<_>")]
    pub production_company: Vec<Organization>,
    ///<https://schema.org/contributor>
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contributor: Vec<ImageObjectContributorFieldEnum>,
    ///<https://schema.org/accessibilityHazard>
    #[serde(rename = "accessibilityHazard")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accessibility_hazard: Vec<String>,
    ///<https://schema.org/datePublished>
    #[serde(rename = "datePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_published: Vec<ImageObjectDatePublishedFieldEnum>,
    ///<https://schema.org/associatedArticle>
    #[serde(rename = "associatedArticle")]
    #[serde_as(as = "OneOrMany<_>")]
    pub associated_article: Vec<NewsArticle>,
    ///<https://schema.org/sourceOrganization>
    #[serde(rename = "sourceOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub source_organization: Vec<Organization>,
    ///<https://schema.org/digitalSourceType>
    #[serde(rename = "digitalSourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub digital_source_type: Vec<IPTCDigitalSourceEnumerationEnum>,
    ///<https://schema.org/headline>
    #[serde(rename = "headline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub headline: Vec<String>,
    ///<https://schema.org/isPartOf>
    #[serde(rename = "isPartOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_part_of: Vec<ImageObjectIsPartOfFieldEnum>,
    ///<https://schema.org/copyrightHolder>
    #[serde(rename = "copyrightHolder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub copyright_holder: Vec<ImageObjectCopyrightHolderFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ImageObjectDescriptionFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ImageObjectImageFieldEnum>,
    ///<https://schema.org/representativeOfPage>
    #[serde(rename = "representativeOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub representative_of_page: Vec<String>,
    ///<https://schema.org/spatial>
    #[serde(rename = "spatial")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spatial: Vec<Place>,
    ///<https://schema.org/hasPart>
    #[serde(rename = "hasPart")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_part: Vec<CreativeWork>,
    ///<https://schema.org/assesses>
    #[serde(rename = "assesses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub assesses: Vec<ImageObjectAssessesFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ImageObjectAdditionalTypeFieldEnum>,
    ///<https://schema.org/width>
    #[serde(rename = "width")]
    #[serde_as(as = "OneOrMany<_>")]
    pub width: Vec<ImageObjectWidthFieldEnum>,
    ///<https://schema.org/video>
    #[serde(rename = "video")]
    #[serde_as(as = "OneOrMany<_>")]
    pub video: Vec<ImageObjectVideoFieldEnum>,
    ///<https://schema.org/embedUrl>
    #[serde(rename = "embedUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub embed_url: Vec<String>,
    ///<https://schema.org/learningResourceType>
    #[serde(rename = "learningResourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub learning_resource_type: Vec<ImageObjectLearningResourceTypeFieldEnum>,
    ///<https://schema.org/awards>
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///<https://schema.org/bitrate>
    #[serde(rename = "bitrate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub bitrate: Vec<String>,
    ///<https://schema.org/alternativeHeadline>
    #[serde(rename = "alternativeHeadline")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternative_headline: Vec<String>,
    ///<https://schema.org/thumbnailUrl>
    #[serde(rename = "thumbnailUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    pub thumbnail_url: Vec<String>,
    ///<https://schema.org/conditionsOfAccess>
    #[serde(rename = "conditionsOfAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub conditions_of_access: Vec<String>,
    ///<https://schema.org/schemaVersion>
    #[serde(rename = "schemaVersion")]
    #[serde_as(as = "OneOrMany<_>")]
    pub schema_version: Vec<ImageObjectSchemaVersionFieldEnum>,
    ///<https://schema.org/educationalLevel>
    #[serde(rename = "educationalLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub educational_level: Vec<ImageObjectEducationalLevelFieldEnum>,
    ///<https://schema.org/publisher>
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publisher: Vec<ImageObjectPublisherFieldEnum>,
    ///<https://schema.org/audio>
    #[serde(rename = "audio")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audio: Vec<ImageObjectAudioFieldEnum>,
    ///<https://schema.org/citation>
    #[serde(rename = "citation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub citation: Vec<ImageObjectCitationFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<ImageObjectFunderFieldEnum>,
    ///<https://schema.org/embeddedTextCaption>
    #[serde(rename = "embeddedTextCaption")]
    #[serde_as(as = "OneOrMany<_>")]
    pub embedded_text_caption: Vec<String>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<ImageObjectSponsorFieldEnum>,
}
