use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/dateModified>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DatasetDateModifiedFieldEnum = String;
///<https://schema.org/encodingFormat>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetEncodingFormatFieldEnum = String;
///<https://schema.org/editEIDR>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetEditEIDRFieldEnum = String;
///<https://schema.org/datePublished>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DatasetDatePublishedFieldEnum = String;
///<https://schema.org/temporal>
///<https://schema.org/DateTime>
///<https://schema.org/Text>
pub type DatasetTemporalFieldEnum = String;
///<https://schema.org/dateCreated>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DatasetDateCreatedFieldEnum = String;
///<https://schema.org/fileFormat>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetFileFormatFieldEnum = String;
///<https://schema.org/expires>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DatasetExpiresFieldEnum = String;
///<https://schema.org/temporalCoverage>
///<https://schema.org/DateTime>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetTemporalCoverageFieldEnum = String;
///<https://schema.org/schemaVersion>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetSchemaVersionFieldEnum = String;
///<https://schema.org/genre>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetGenreFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DatasetAdditionalTypeFieldEnum = String;
///<https://schema.org/Dataset>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Dataset {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/distribution>
    #[serde(rename = "distribution")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub distribution: Vec<DataDownload>,
    ///<https://schema.org/catalog>
    #[serde(rename = "catalog")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub catalog: Vec<DataCatalog>,
    ///<https://schema.org/includedDataCatalog>
    #[serde(rename = "includedDataCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub included_data_catalog: Vec<DataCatalog>,
    ///<https://schema.org/includedInDataCatalog>
    #[serde(rename = "includedInDataCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub included_in_data_catalog: Vec<DataCatalog>,
    ///<https://schema.org/measurementTechnique>
    #[serde(rename = "measurementTechnique")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub measurement_technique: Vec<DatasetMeasurementTechniqueFieldEnum>,
    ///<https://schema.org/measurementMethod>
    #[serde(rename = "measurementMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub measurement_method: Vec<DatasetMeasurementMethodFieldEnum>,
    ///<https://schema.org/datasetTimeInterval>
    #[serde(rename = "datasetTimeInterval")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub dataset_time_interval: Vec<String>,
    ///<https://schema.org/issn>
    #[serde(rename = "issn")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub issn: Vec<String>,
    ///<https://schema.org/variableMeasured>
    #[serde(rename = "variableMeasured")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub variable_measured: Vec<DatasetVariableMeasuredFieldEnum>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub provider: Vec<DatasetProviderFieldEnum>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/citation>
    #[serde(rename = "citation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub citation: Vec<DatasetCitationFieldEnum>,
    ///<https://schema.org/locationCreated>
    #[serde(rename = "locationCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub location_created: Vec<Place>,
    ///<https://schema.org/sdPublisher>
    #[serde(rename = "sdPublisher")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sd_publisher: Vec<DatasetSdPublisherFieldEnum>,
    ///<https://schema.org/thumbnail>
    #[serde(rename = "thumbnail")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub thumbnail: Vec<ImageObject>,
    ///<https://schema.org/accessModeSufficient>
    #[serde(rename = "accessModeSufficient")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub access_mode_sufficient: Vec<ItemList>,
    ///<https://schema.org/publishingPrinciples>
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub publishing_principles: Vec<DatasetPublishingPrinciplesFieldEnum>,
    ///<https://schema.org/inLanguage>
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub in_language: Vec<DatasetInLanguageFieldEnum>,
    ///<https://schema.org/abstract>
    #[serde(rename = "abstract")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub _abstract: Vec<String>,
    ///<https://schema.org/countryOfOrigin>
    #[serde(rename = "countryOfOrigin")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub country_of_origin: Vec<Country>,
    ///<https://schema.org/contentLocation>
    #[serde(rename = "contentLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub content_location: Vec<Place>,
    ///<https://schema.org/dateModified>
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub date_modified: Vec<DatasetDateModifiedFieldEnum>,
    ///<https://schema.org/usageInfo>
    #[serde(rename = "usageInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub usage_info: Vec<DatasetUsageInfoFieldEnum>,
    ///<https://schema.org/sdDatePublished>
    #[serde(rename = "sdDatePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sd_date_published: Vec<String>,
    ///<https://schema.org/archivedAt>
    #[serde(rename = "archivedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub archived_at: Vec<DatasetArchivedAtFieldEnum>,
    ///<https://schema.org/workTranslation>
    #[serde(rename = "workTranslation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub work_translation: Vec<CreativeWork>,
    ///<https://schema.org/sdLicense>
    #[serde(rename = "sdLicense")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sd_license: Vec<DatasetSdLicenseFieldEnum>,
    ///<https://schema.org/educationalAlignment>
    #[serde(rename = "educationalAlignment")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub educational_alignment: Vec<AlignmentObject>,
    ///<https://schema.org/editor>
    #[serde(rename = "editor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub editor: Vec<Person>,
    ///<https://schema.org/license>
    #[serde(rename = "license")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub license: Vec<DatasetLicenseFieldEnum>,
    ///<https://schema.org/maintainer>
    #[serde(rename = "maintainer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub maintainer: Vec<DatasetMaintainerFieldEnum>,
    ///<https://schema.org/sourceOrganization>
    #[serde(rename = "sourceOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub source_organization: Vec<Organization>,
    ///<https://schema.org/reviews>
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub reviews: Vec<Review>,
    ///<https://schema.org/accessibilityHazard>
    #[serde(rename = "accessibilityHazard")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accessibility_hazard: Vec<String>,
    ///<https://schema.org/workExample>
    #[serde(rename = "workExample")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub work_example: Vec<CreativeWork>,
    ///<https://schema.org/pattern>
    #[serde(rename = "pattern")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub pattern: Vec<DatasetPatternFieldEnum>,
    ///<https://schema.org/offers>
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub offers: Vec<DatasetOffersFieldEnum>,
    ///<https://schema.org/hasPart>
    #[serde(rename = "hasPart")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub has_part: Vec<CreativeWork>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub keywords: Vec<DatasetKeywordsFieldEnum>,
    ///<https://schema.org/exampleOfWork>
    #[serde(rename = "exampleOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub example_of_work: Vec<CreativeWork>,
    ///<https://schema.org/copyrightNotice>
    #[serde(rename = "copyrightNotice")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub copyright_notice: Vec<String>,
    ///<https://schema.org/encodingFormat>
    #[serde(rename = "encodingFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub encoding_format: Vec<DatasetEncodingFormatFieldEnum>,
    ///<https://schema.org/mainEntity>
    #[serde(rename = "mainEntity")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity: Vec<Thing>,
    ///<https://schema.org/editEIDR>
    #[serde(rename = "editEIDR")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub edit_eidr: Vec<DatasetEditEIDRFieldEnum>,
    ///<https://schema.org/copyrightYear>
    #[serde(rename = "copyrightYear")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub copyright_year: Vec<f32>,
    ///<https://schema.org/about>
    #[serde(rename = "about")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub about: Vec<Thing>,
    ///<https://schema.org/datePublished>
    #[serde(rename = "datePublished")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub date_published: Vec<DatasetDatePublishedFieldEnum>,
    ///<https://schema.org/educationalLevel>
    #[serde(rename = "educationalLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub educational_level: Vec<DatasetEducationalLevelFieldEnum>,
    ///<https://schema.org/accessibilityFeature>
    #[serde(rename = "accessibilityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accessibility_feature: Vec<String>,
    ///<https://schema.org/materialExtent>
    #[serde(rename = "materialExtent")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub material_extent: Vec<DatasetMaterialExtentFieldEnum>,
    ///<https://schema.org/video>
    #[serde(rename = "video")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub video: Vec<DatasetVideoFieldEnum>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funding: Vec<Grant>,
    ///<https://schema.org/headline>
    #[serde(rename = "headline")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub headline: Vec<String>,
    ///<https://schema.org/digitalSourceType>
    #[serde(rename = "digitalSourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub digital_source_type: Vec<IPTCDigitalSourceEnumerationEnum>,
    ///<https://schema.org/learningResourceType>
    #[serde(rename = "learningResourceType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub learning_resource_type: Vec<DatasetLearningResourceTypeFieldEnum>,
    ///<https://schema.org/alternativeHeadline>
    #[serde(rename = "alternativeHeadline")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternative_headline: Vec<String>,
    ///<https://schema.org/temporal>
    #[serde(rename = "temporal")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub temporal: Vec<DatasetTemporalFieldEnum>,
    ///<https://schema.org/isBasedOnUrl>
    #[serde(rename = "isBasedOnUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_based_on_url: Vec<DatasetIsBasedOnUrlFieldEnum>,
    ///<https://schema.org/associatedMedia>
    #[serde(rename = "associatedMedia")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub associated_media: Vec<MediaObject>,
    ///<https://schema.org/commentCount>
    #[serde(rename = "commentCount")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub comment_count: Vec<i32>,
    ///<https://schema.org/dateCreated>
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub date_created: Vec<DatasetDateCreatedFieldEnum>,
    ///<https://schema.org/fileFormat>
    #[serde(rename = "fileFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub file_format: Vec<DatasetFileFormatFieldEnum>,
    ///<https://schema.org/teaches>
    #[serde(rename = "teaches")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub teaches: Vec<DatasetTeachesFieldEnum>,
    ///<https://schema.org/accessibilityControl>
    #[serde(rename = "accessibilityControl")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accessibility_control: Vec<String>,
    ///<https://schema.org/isPartOf>
    #[serde(rename = "isPartOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_part_of: Vec<DatasetIsPartOfFieldEnum>,
    ///<https://schema.org/accessibilityAPI>
    #[serde(rename = "accessibilityAPI")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accessibility_api: Vec<String>,
    ///<https://schema.org/contentReferenceTime>
    #[serde(rename = "contentReferenceTime")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub content_reference_time: Vec<String>,
    ///<https://schema.org/isBasedOn>
    #[serde(rename = "isBasedOn")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_based_on: Vec<DatasetIsBasedOnFieldEnum>,
    ///<https://schema.org/creativeWorkStatus>
    #[serde(rename = "creativeWorkStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub creative_work_status: Vec<DatasetCreativeWorkStatusFieldEnum>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub award: Vec<String>,
    ///<https://schema.org/educationalUse>
    #[serde(rename = "educationalUse")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub educational_use: Vec<DatasetEducationalUseFieldEnum>,
    ///<https://schema.org/isFamilyFriendly>
    #[serde(rename = "isFamilyFriendly")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_family_friendly: Vec<String>,
    ///<https://schema.org/interactivityType>
    #[serde(rename = "interactivityType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub interactivity_type: Vec<String>,
    ///<https://schema.org/publication>
    #[serde(rename = "publication")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub publication: Vec<PublicationEvent>,
    ///<https://schema.org/accountablePerson>
    #[serde(rename = "accountablePerson")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accountable_person: Vec<Person>,
    ///<https://schema.org/version>
    #[serde(rename = "version")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub version: Vec<DatasetVersionFieldEnum>,
    ///<https://schema.org/expires>
    #[serde(rename = "expires")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub expires: Vec<DatasetExpiresFieldEnum>,
    ///<https://schema.org/awards>
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub awards: Vec<String>,
    ///<https://schema.org/text>
    #[serde(rename = "text")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub text: Vec<String>,
    ///<https://schema.org/producer>
    #[serde(rename = "producer")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub producer: Vec<DatasetProducerFieldEnum>,
    ///<https://schema.org/thumbnailUrl>
    #[serde(rename = "thumbnailUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub thumbnail_url: Vec<String>,
    ///<https://schema.org/copyrightHolder>
    #[serde(rename = "copyrightHolder")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub copyright_holder: Vec<DatasetCopyrightHolderFieldEnum>,
    ///<https://schema.org/wordCount>
    #[serde(rename = "wordCount")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub word_count: Vec<i32>,
    ///<https://schema.org/recordedAt>
    #[serde(rename = "recordedAt")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub recorded_at: Vec<Event>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub audience: Vec<Audience>,
    ///<https://schema.org/spatial>
    #[serde(rename = "spatial")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub spatial: Vec<Place>,
    ///<https://schema.org/interpretedAsClaim>
    #[serde(rename = "interpretedAsClaim")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub interpreted_as_claim: Vec<Claim>,
    ///<https://schema.org/creditText>
    #[serde(rename = "creditText")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub credit_text: Vec<String>,
    ///<https://schema.org/material>
    #[serde(rename = "material")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub material: Vec<DatasetMaterialFieldEnum>,
    ///<https://schema.org/translator>
    #[serde(rename = "translator")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub translator: Vec<DatasetTranslatorFieldEnum>,
    ///<https://schema.org/character>
    #[serde(rename = "character")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub character: Vec<Person>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub funder: Vec<DatasetFunderFieldEnum>,
    ///<https://schema.org/encodings>
    #[serde(rename = "encodings")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub encodings: Vec<MediaObject>,
    ///<https://schema.org/contributor>
    #[serde(rename = "contributor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub contributor: Vec<DatasetContributorFieldEnum>,
    ///<https://schema.org/position>
    #[serde(rename = "position")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub position: Vec<DatasetPositionFieldEnum>,
    ///<https://schema.org/conditionsOfAccess>
    #[serde(rename = "conditionsOfAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub conditions_of_access: Vec<String>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub review: Vec<Review>,
    ///<https://schema.org/temporalCoverage>
    #[serde(rename = "temporalCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub temporal_coverage: Vec<DatasetTemporalCoverageFieldEnum>,
    ///<https://schema.org/mentions>
    #[serde(rename = "mentions")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub mentions: Vec<Thing>,
    ///<https://schema.org/interactionStatistic>
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/schemaVersion>
    #[serde(rename = "schemaVersion")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub schema_version: Vec<DatasetSchemaVersionFieldEnum>,
    ///<https://schema.org/acquireLicensePage>
    #[serde(rename = "acquireLicensePage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub acquire_license_page: Vec<DatasetAcquireLicensePageFieldEnum>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub sponsor: Vec<DatasetSponsorFieldEnum>,
    ///<https://schema.org/publisher>
    #[serde(rename = "publisher")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub publisher: Vec<DatasetPublisherFieldEnum>,
    ///<https://schema.org/assesses>
    #[serde(rename = "assesses")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub assesses: Vec<DatasetAssessesFieldEnum>,
    ///<https://schema.org/spatialCoverage>
    #[serde(rename = "spatialCoverage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub spatial_coverage: Vec<Place>,
    ///<https://schema.org/size>
    #[serde(rename = "size")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub size: Vec<DatasetSizeFieldEnum>,
    ///<https://schema.org/contentRating>
    #[serde(rename = "contentRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub content_rating: Vec<DatasetContentRatingFieldEnum>,
    ///<https://schema.org/accessMode>
    #[serde(rename = "accessMode")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub access_mode: Vec<String>,
    ///<https://schema.org/creator>
    #[serde(rename = "creator")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub creator: Vec<DatasetCreatorFieldEnum>,
    ///<https://schema.org/releasedEvent>
    #[serde(rename = "releasedEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub released_event: Vec<PublicationEvent>,
    ///<https://schema.org/accessibilitySummary>
    #[serde(rename = "accessibilitySummary")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub accessibility_summary: Vec<String>,
    ///<https://schema.org/translationOfWork>
    #[serde(rename = "translationOfWork")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub translation_of_work: Vec<CreativeWork>,
    ///<https://schema.org/publisherImprint>
    #[serde(rename = "publisherImprint")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub publisher_imprint: Vec<Organization>,
    ///<https://schema.org/typicalAgeRange>
    #[serde(rename = "typicalAgeRange")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub typical_age_range: Vec<String>,
    ///<https://schema.org/comment>
    #[serde(rename = "comment")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub comment: Vec<Comment>,
    ///<https://schema.org/encoding>
    #[serde(rename = "encoding")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub encoding: Vec<MediaObject>,
    ///<https://schema.org/discussionUrl>
    #[serde(rename = "discussionUrl")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub discussion_url: Vec<String>,
    ///<https://schema.org/timeRequired>
    #[serde(rename = "timeRequired")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub time_required: Vec<Duration>,
    ///<https://schema.org/isAccessibleForFree>
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub is_accessible_for_free: Vec<String>,
    ///<https://schema.org/audio>
    #[serde(rename = "audio")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub audio: Vec<DatasetAudioFieldEnum>,
    ///<https://schema.org/correction>
    #[serde(rename = "correction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub correction: Vec<DatasetCorrectionFieldEnum>,
    ///<https://schema.org/author>
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub author: Vec<DatasetAuthorFieldEnum>,
    ///<https://schema.org/genre>
    #[serde(rename = "genre")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub genre: Vec<DatasetGenreFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<DatasetMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub identifier: Vec<DatasetIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<DatasetDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<DatasetSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<DatasetAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub image: Vec<DatasetImageFieldEnum>,
}
