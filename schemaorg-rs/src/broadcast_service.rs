use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/termsOfService
///https://schema.org/Text
///https://schema.org/URL
pub type BroadcastServiceTermsOfServiceFieldEnum = String;
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type BroadcastServiceAdditionalTypeFieldEnum = String;
///https://schema.org/BroadcastService
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct BroadcastService {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/offers
    #[serde(rename = "offers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub offers: Vec<BroadcastServiceOffersFieldEnum>,
    ///https://schema.org/hasBroadcastChannel
    #[serde(rename = "hasBroadcastChannel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_broadcast_channel: Vec<BroadcastChannel>,
    ///https://schema.org/provider
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<BroadcastServiceProviderFieldEnum>,
    ///https://schema.org/isRelatedTo
    #[serde(rename = "isRelatedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_related_to: Vec<BroadcastServiceIsRelatedToFieldEnum>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/serviceAudience
    #[serde(rename = "serviceAudience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_audience: Vec<Audience>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<BroadcastServiceSubjectOfFieldEnum>,
    ///https://schema.org/category
    #[serde(rename = "category")]
    #[serde_as(as = "OneOrMany<_>")]
    pub category: Vec<BroadcastServiceCategoryFieldEnum>,
    ///https://schema.org/hasCertification
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///https://schema.org/broadcaster
    #[serde(rename = "broadcaster")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcaster: Vec<Organization>,
    ///https://schema.org/parentService
    #[serde(rename = "parentService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parent_service: Vec<BroadcastService>,
    ///https://schema.org/broadcastTimezone
    #[serde(rename = "broadcastTimezone")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_timezone: Vec<String>,
    ///https://schema.org/callSign
    #[serde(rename = "callSign")]
    #[serde_as(as = "OneOrMany<_>")]
    pub call_sign: Vec<String>,
    ///https://schema.org/serviceOutput
    #[serde(rename = "serviceOutput")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_output: Vec<Thing>,
    ///https://schema.org/areaServed
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<BroadcastServiceAreaServedFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/broadcastAffiliateOf
    #[serde(rename = "broadcastAffiliateOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_affiliate_of: Vec<Organization>,
    ///https://schema.org/isSimilarTo
    #[serde(rename = "isSimilarTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_similar_to: Vec<BroadcastServiceIsSimilarToFieldEnum>,
    ///https://schema.org/produces
    #[serde(rename = "produces")]
    #[serde_as(as = "OneOrMany<_>")]
    pub produces: Vec<Thing>,
    ///https://schema.org/termsOfService
    #[serde(rename = "termsOfService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub terms_of_service: Vec<BroadcastServiceTermsOfServiceFieldEnum>,
    ///https://schema.org/serviceType
    #[serde(rename = "serviceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_type: Vec<BroadcastServiceServiceTypeFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<BroadcastServiceMainEntityOfPageFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/videoFormat
    #[serde(rename = "videoFormat")]
    #[serde_as(as = "OneOrMany<_>")]
    pub video_format: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<BroadcastServiceDescriptionFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<BroadcastServiceAdditionalTypeFieldEnum>,
    ///https://schema.org/broadcastFrequency
    #[serde(rename = "broadcastFrequency")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_frequency: Vec<BroadcastServiceBroadcastFrequencyFieldEnum>,
    ///https://schema.org/inLanguage
    #[serde(rename = "inLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub in_language: Vec<BroadcastServiceInLanguageFieldEnum>,
    ///https://schema.org/hoursAvailable
    #[serde(rename = "hoursAvailable")]
    #[serde_as(as = "OneOrMany<_>")]
    pub hours_available: Vec<OpeningHoursSpecification>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/providerMobility
    #[serde(rename = "providerMobility")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider_mobility: Vec<String>,
    ///https://schema.org/slogan
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/audience
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///https://schema.org/hasOfferCatalog
    #[serde(rename = "hasOfferCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_offer_catalog: Vec<OfferCatalog>,
    ///https://schema.org/brand
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<BroadcastServiceBrandFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/broadcastDisplayName
    #[serde(rename = "broadcastDisplayName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broadcast_display_name: Vec<String>,
    ///https://schema.org/logo
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<BroadcastServiceLogoFieldEnum>,
    ///https://schema.org/availableChannel
    #[serde(rename = "availableChannel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub available_channel: Vec<ServiceChannel>,
    ///https://schema.org/serviceArea
    #[serde(rename = "serviceArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_area: Vec<BroadcastServiceServiceAreaFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<BroadcastServiceIdentifierFieldEnum>,
    ///https://schema.org/broker
    #[serde(rename = "broker")]
    #[serde_as(as = "OneOrMany<_>")]
    pub broker: Vec<BroadcastServiceBrokerFieldEnum>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<BroadcastServiceImageFieldEnum>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/area
    #[serde(rename = "area")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area: Vec<Place>,
}
