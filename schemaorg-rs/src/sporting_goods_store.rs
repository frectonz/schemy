use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type SportingGoodsStoreAdditionalTypeFieldEnum = String;
///<https://schema.org/SportingGoodsStore>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct SportingGoodsStore {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/contactPoints>
    #[serde(rename = "contactPoints")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_points: Vec<ContactPoint>,
    ///<https://schema.org/containedIn>
    #[serde(rename = "containedIn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contained_in: Vec<Place>,
    ///<https://schema.org/foundingDate>
    #[serde(rename = "foundingDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founding_date: Vec<String>,
    ///<https://schema.org/review>
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///<https://schema.org/geoOverlaps>
    #[serde(rename = "geoOverlaps")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_overlaps: Vec<SportingGoodsStoreGeoOverlapsFieldEnum>,
    ///<https://schema.org/geoContains>
    #[serde(rename = "geoContains")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_contains: Vec<SportingGoodsStoreGeoContainsFieldEnum>,
    ///<https://schema.org/knowsLanguage>
    #[serde(rename = "knowsLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_language: Vec<SportingGoodsStoreKnowsLanguageFieldEnum>,
    ///<https://schema.org/hasMemberProgram>
    #[serde(rename = "hasMemberProgram")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_member_program: Vec<MemberProgram>,
    ///<https://schema.org/employees>
    #[serde(rename = "employees")]
    #[serde_as(as = "OneOrMany<_>")]
    pub employees: Vec<Person>,
    ///<https://schema.org/map>
    #[serde(rename = "map")]
    #[serde_as(as = "OneOrMany<_>")]
    pub map: Vec<String>,
    ///<https://schema.org/geoIntersects>
    #[serde(rename = "geoIntersects")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_intersects: Vec<SportingGoodsStoreGeoIntersectsFieldEnum>,
    ///<https://schema.org/members>
    #[serde(rename = "members")]
    #[serde_as(as = "OneOrMany<_>")]
    pub members: Vec<SportingGoodsStoreMembersFieldEnum>,
    ///<https://schema.org/geoCoveredBy>
    #[serde(rename = "geoCoveredBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_covered_by: Vec<SportingGoodsStoreGeoCoveredByFieldEnum>,
    ///<https://schema.org/faxNumber>
    #[serde(rename = "faxNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fax_number: Vec<String>,
    ///<https://schema.org/photo>
    #[serde(rename = "photo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub photo: Vec<SportingGoodsStorePhotoFieldEnum>,
    ///<https://schema.org/hasOfferCatalog>
    #[serde(rename = "hasOfferCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_offer_catalog: Vec<OfferCatalog>,
    ///<https://schema.org/leiCode>
    #[serde(rename = "leiCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lei_code: Vec<String>,
    ///<https://schema.org/geoCrosses>
    #[serde(rename = "geoCrosses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_crosses: Vec<SportingGoodsStoreGeoCrossesFieldEnum>,
    ///<https://schema.org/serviceArea>
    #[serde(rename = "serviceArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_area: Vec<SportingGoodsStoreServiceAreaFieldEnum>,
    ///<https://schema.org/branchOf>
    #[serde(rename = "branchOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub branch_of: Vec<Organization>,
    ///<https://schema.org/maximumAttendeeCapacity>
    #[serde(rename = "maximumAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maximum_attendee_capacity: Vec<i32>,
    ///<https://schema.org/additionalProperty>
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
    ///<https://schema.org/interactionStatistic>
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<SportingGoodsStoreSponsorFieldEnum>,
    ///<https://schema.org/geoEquals>
    #[serde(rename = "geoEquals")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_equals: Vec<SportingGoodsStoreGeoEqualsFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/logo>
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<SportingGoodsStoreLogoFieldEnum>,
    ///<https://schema.org/containsPlace>
    #[serde(rename = "containsPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contains_place: Vec<Place>,
    ///<https://schema.org/hasDriveThroughService>
    #[serde(rename = "hasDriveThroughService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_drive_through_service: Vec<String>,
    ///<https://schema.org/branchCode>
    #[serde(rename = "branchCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub branch_code: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<SportingGoodsStoreIdentifierFieldEnum>,
    ///<https://schema.org/taxID>
    #[serde(rename = "taxID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tax_id: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<SportingGoodsStoreSubjectOfFieldEnum>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<SportingGoodsStoreAdditionalTypeFieldEnum>,
    ///<https://schema.org/events>
    #[serde(rename = "events")]
    #[serde_as(as = "OneOrMany<_>")]
    pub events: Vec<Event>,
    ///<https://schema.org/member>
    #[serde(rename = "member")]
    #[serde_as(as = "OneOrMany<_>")]
    pub member: Vec<SportingGoodsStoreMemberFieldEnum>,
    ///<https://schema.org/unnamedSourcesPolicy>
    #[serde(rename = "unnamedSourcesPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unnamed_sources_policy: Vec<SportingGoodsStoreUnnamedSourcesPolicyFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<SportingGoodsStoreDescriptionFieldEnum>,
    ///<https://schema.org/agentInteractionStatistic>
    #[serde(rename = "agentInteractionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent_interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/brand>
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<SportingGoodsStoreBrandFieldEnum>,
    ///<https://schema.org/legalName>
    #[serde(rename = "legalName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<SportingGoodsStoreMainEntityOfPageFieldEnum>,
    ///<https://schema.org/smokingAllowed>
    #[serde(rename = "smokingAllowed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub smoking_allowed: Vec<String>,
    ///<https://schema.org/ownershipFundingInfo>
    #[serde(rename = "ownershipFundingInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ownership_funding_info: Vec<SportingGoodsStoreOwnershipFundingInfoFieldEnum>,
    ///<https://schema.org/numberOfEmployees>
    #[serde(rename = "numberOfEmployees")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_employees: Vec<QuantitativeValue>,
    ///<https://schema.org/hasGS1DigitalLink>
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///<https://schema.org/publicAccess>
    #[serde(rename = "publicAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub public_access: Vec<String>,
    ///<https://schema.org/isAccessibleForFree>
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///<https://schema.org/openingHours>
    #[serde(rename = "openingHours")]
    #[serde_as(as = "OneOrMany<_>")]
    pub opening_hours: Vec<String>,
    ///<https://schema.org/hasShippingService>
    #[serde(rename = "hasShippingService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_shipping_service: Vec<ShippingService>,
    ///<https://schema.org/maps>
    #[serde(rename = "maps")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maps: Vec<String>,
    ///<https://schema.org/latitude>
    #[serde(rename = "latitude")]
    #[serde_as(as = "OneOrMany<_>")]
    pub latitude: Vec<SportingGoodsStoreLatitudeFieldEnum>,
    ///<https://schema.org/diversityPolicy>
    #[serde(rename = "diversityPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diversity_policy: Vec<SportingGoodsStoreDiversityPolicyFieldEnum>,
    ///<https://schema.org/diversityStaffingReport>
    #[serde(rename = "diversityStaffingReport")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diversity_staffing_report: Vec<
        SportingGoodsStoreDiversityStaffingReportFieldEnum,
    >,
    ///<https://schema.org/department>
    #[serde(rename = "department")]
    #[serde_as(as = "OneOrMany<_>")]
    pub department: Vec<Organization>,
    ///<https://schema.org/parentOrganization>
    #[serde(rename = "parentOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parent_organization: Vec<Organization>,
    ///<https://schema.org/duns>
    #[serde(rename = "duns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duns: Vec<String>,
    ///<https://schema.org/keywords>
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<SportingGoodsStoreKeywordsFieldEnum>,
    ///<https://schema.org/slogan>
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///<https://schema.org/photos>
    #[serde(rename = "photos")]
    #[serde_as(as = "OneOrMany<_>")]
    pub photos: Vec<SportingGoodsStorePhotosFieldEnum>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<SportingGoodsStoreFunderFieldEnum>,
    ///<https://schema.org/email>
    #[serde(rename = "email")]
    #[serde_as(as = "OneOrMany<_>")]
    pub email: Vec<String>,
    ///<https://schema.org/founders>
    #[serde(rename = "founders")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founders: Vec<Person>,
    ///<https://schema.org/hasMerchantReturnPolicy>
    #[serde(rename = "hasMerchantReturnPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_merchant_return_policy: Vec<MerchantReturnPolicy>,
    ///<https://schema.org/hasPOS>
    #[serde(rename = "hasPOS")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_pos: Vec<Place>,
    ///<https://schema.org/areaServed>
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<SportingGoodsStoreAreaServedFieldEnum>,
    ///<https://schema.org/contactPoint>
    #[serde(rename = "contactPoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_point: Vec<ContactPoint>,
    ///<https://schema.org/globalLocationNumber>
    #[serde(rename = "globalLocationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub global_location_number: Vec<String>,
    ///<https://schema.org/amenityFeature>
    #[serde(rename = "amenityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub amenity_feature: Vec<LocationFeatureSpecification>,
    ///<https://schema.org/alumni>
    #[serde(rename = "alumni")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alumni: Vec<Person>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<SportingGoodsStoreLocationFieldEnum>,
    ///<https://schema.org/currenciesAccepted>
    #[serde(rename = "currenciesAccepted")]
    #[serde_as(as = "OneOrMany<_>")]
    pub currencies_accepted: Vec<String>,
    ///<https://schema.org/owns>
    #[serde(rename = "owns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub owns: Vec<SportingGoodsStoreOwnsFieldEnum>,
    ///<https://schema.org/paymentAccepted>
    #[serde(rename = "paymentAccepted")]
    #[serde_as(as = "OneOrMany<_>")]
    pub payment_accepted: Vec<String>,
    ///<https://schema.org/hasMap>
    #[serde(rename = "hasMap")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_map: Vec<SportingGoodsStoreHasMapFieldEnum>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<SportingGoodsStoreImageFieldEnum>,
    ///<https://schema.org/actionableFeedbackPolicy>
    #[serde(rename = "actionableFeedbackPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub actionable_feedback_policy: Vec<
        SportingGoodsStoreActionableFeedbackPolicyFieldEnum,
    >,
    ///<https://schema.org/containedInPlace>
    #[serde(rename = "containedInPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contained_in_place: Vec<Place>,
    ///<https://schema.org/aggregateRating>
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///<https://schema.org/skills>
    #[serde(rename = "skills")]
    #[serde_as(as = "OneOrMany<_>")]
    pub skills: Vec<SportingGoodsStoreSkillsFieldEnum>,
    ///<https://schema.org/seeks>
    #[serde(rename = "seeks")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seeks: Vec<Demand>,
    ///<https://schema.org/ethicsPolicy>
    #[serde(rename = "ethicsPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ethics_policy: Vec<SportingGoodsStoreEthicsPolicyFieldEnum>,
    ///<https://schema.org/iso6523Code>
    #[serde(rename = "iso6523Code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub iso6523_code: Vec<String>,
    ///<https://schema.org/memberOf>
    #[serde(rename = "memberOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub member_of: Vec<SportingGoodsStoreMemberOfFieldEnum>,
    ///<https://schema.org/reviews>
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/specialOpeningHoursSpecification>
    #[serde(rename = "specialOpeningHoursSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub special_opening_hours_specification: Vec<OpeningHoursSpecification>,
    ///<https://schema.org/geoTouches>
    #[serde(rename = "geoTouches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_touches: Vec<SportingGoodsStoreGeoTouchesFieldEnum>,
    ///<https://schema.org/geoCovers>
    #[serde(rename = "geoCovers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_covers: Vec<SportingGoodsStoreGeoCoversFieldEnum>,
    ///<https://schema.org/vatID>
    #[serde(rename = "vatID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vat_id: Vec<String>,
    ///<https://schema.org/isicV4>
    #[serde(rename = "isicV4")]
    #[serde_as(as = "OneOrMany<_>")]
    pub isic_v4: Vec<String>,
    ///<https://schema.org/founder>
    #[serde(rename = "founder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founder: Vec<SportingGoodsStoreFounderFieldEnum>,
    ///<https://schema.org/subOrganization>
    #[serde(rename = "subOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_organization: Vec<Organization>,
    ///<https://schema.org/priceRange>
    #[serde(rename = "priceRange")]
    #[serde_as(as = "OneOrMany<_>")]
    pub price_range: Vec<String>,
    ///<https://schema.org/event>
    #[serde(rename = "event")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event: Vec<Event>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/geoWithin>
    #[serde(rename = "geoWithin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_within: Vec<SportingGoodsStoreGeoWithinFieldEnum>,
    ///<https://schema.org/geoDisjoint>
    #[serde(rename = "geoDisjoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_disjoint: Vec<SportingGoodsStoreGeoDisjointFieldEnum>,
    ///<https://schema.org/publishingPrinciples>
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<SportingGoodsStorePublishingPrinciplesFieldEnum>,
    ///<https://schema.org/correctionsPolicy>
    #[serde(rename = "correctionsPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub corrections_policy: Vec<SportingGoodsStoreCorrectionsPolicyFieldEnum>,
    ///<https://schema.org/acceptedPaymentMethod>
    #[serde(rename = "acceptedPaymentMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accepted_payment_method: Vec<SportingGoodsStoreAcceptedPaymentMethodFieldEnum>,
    ///<https://schema.org/employee>
    #[serde(rename = "employee")]
    #[serde_as(as = "OneOrMany<_>")]
    pub employee: Vec<Person>,
    ///<https://schema.org/dissolutionDate>
    #[serde(rename = "dissolutionDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub dissolution_date: Vec<String>,
    ///<https://schema.org/geo>
    #[serde(rename = "geo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo: Vec<SportingGoodsStoreGeoFieldEnum>,
    ///<https://schema.org/telephone>
    #[serde(rename = "telephone")]
    #[serde_as(as = "OneOrMany<_>")]
    pub telephone: Vec<String>,
    ///<https://schema.org/openingHoursSpecification>
    #[serde(rename = "openingHoursSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub opening_hours_specification: Vec<OpeningHoursSpecification>,
    ///<https://schema.org/tourBookingPage>
    #[serde(rename = "tourBookingPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tour_booking_page: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/address>
    #[serde(rename = "address")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address: Vec<SportingGoodsStoreAddressFieldEnum>,
    ///<https://schema.org/longitude>
    #[serde(rename = "longitude")]
    #[serde_as(as = "OneOrMany<_>")]
    pub longitude: Vec<SportingGoodsStoreLongitudeFieldEnum>,
    ///<https://schema.org/awards>
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///<https://schema.org/foundingLocation>
    #[serde(rename = "foundingLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founding_location: Vec<Place>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///<https://schema.org/makesOffer>
    #[serde(rename = "makesOffer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub makes_offer: Vec<Offer>,
    ///<https://schema.org/knowsAbout>
    #[serde(rename = "knowsAbout")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_about: Vec<SportingGoodsStoreKnowsAboutFieldEnum>,
    ///<https://schema.org/hasCertification>
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///<https://schema.org/nonprofitStatus>
    #[serde(rename = "nonprofitStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub nonprofit_status: Vec<NonprofitType>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/naics>
    #[serde(rename = "naics")]
    #[serde_as(as = "OneOrMany<_>")]
    pub naics: Vec<String>,
    ///<https://schema.org/hasCredential>
    #[serde(rename = "hasCredential")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_credential: Vec<EducationalOccupationalCredential>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
}
