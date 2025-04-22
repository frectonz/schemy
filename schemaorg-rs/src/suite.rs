use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type SuiteAdditionalTypeFieldEnum = String;
///https://schema.org/petsAllowed
///https://schema.org/Boolean
///https://schema.org/Text
pub type SuitePetsAllowedFieldEnum = String;
///https://schema.org/Suite
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Suite {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/openingHoursSpecification
    #[serde(rename = "openingHoursSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub opening_hours_specification: Vec<OpeningHoursSpecification>,
    ///https://schema.org/geoCrosses
    #[serde(rename = "geoCrosses")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_crosses: Vec<SuiteGeoCrossesFieldEnum>,
    ///https://schema.org/geoContains
    #[serde(rename = "geoContains")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_contains: Vec<SuiteGeoContainsFieldEnum>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<SuiteSubjectOfFieldEnum>,
    ///https://schema.org/telephone
    #[serde(rename = "telephone")]
    #[serde_as(as = "OneOrMany<_>")]
    pub telephone: Vec<String>,
    ///https://schema.org/numberOfPartialBathrooms
    #[serde(rename = "numberOfPartialBathrooms")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_partial_bathrooms: Vec<f32>,
    ///https://schema.org/containsPlace
    #[serde(rename = "containsPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contains_place: Vec<Place>,
    ///https://schema.org/isAccessibleForFree
    #[serde(rename = "isAccessibleForFree")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_accessible_for_free: Vec<String>,
    ///https://schema.org/events
    #[serde(rename = "events")]
    #[serde_as(as = "OneOrMany<_>")]
    pub events: Vec<Event>,
    ///https://schema.org/longitude
    #[serde(rename = "longitude")]
    #[serde_as(as = "OneOrMany<_>")]
    pub longitude: Vec<SuiteLongitudeFieldEnum>,
    ///https://schema.org/bed
    #[serde(rename = "bed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub bed: Vec<SuiteBedFieldEnum>,
    ///https://schema.org/photos
    #[serde(rename = "photos")]
    #[serde_as(as = "OneOrMany<_>")]
    pub photos: Vec<SuitePhotosFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<SuiteAdditionalTypeFieldEnum>,
    ///https://schema.org/additionalProperty
    #[serde(rename = "additionalProperty")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_property: Vec<PropertyValue>,
    ///https://schema.org/logo
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<SuiteLogoFieldEnum>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/numberOfRooms
    #[serde(rename = "numberOfRooms")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_rooms: Vec<SuiteNumberOfRoomsFieldEnum>,
    ///https://schema.org/photo
    #[serde(rename = "photo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub photo: Vec<SuitePhotoFieldEnum>,
    ///https://schema.org/geo
    #[serde(rename = "geo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo: Vec<SuiteGeoFieldEnum>,
    ///https://schema.org/numberOfBathroomsTotal
    #[serde(rename = "numberOfBathroomsTotal")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_bathrooms_total: Vec<i32>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<SuiteKeywordsFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/event
    #[serde(rename = "event")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event: Vec<Event>,
    ///https://schema.org/accommodationFloorPlan
    #[serde(rename = "accommodationFloorPlan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accommodation_floor_plan: Vec<FloorPlan>,
    ///https://schema.org/petsAllowed
    #[serde(rename = "petsAllowed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub pets_allowed: Vec<SuitePetsAllowedFieldEnum>,
    ///https://schema.org/geoIntersects
    #[serde(rename = "geoIntersects")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_intersects: Vec<SuiteGeoIntersectsFieldEnum>,
    ///https://schema.org/geoWithin
    #[serde(rename = "geoWithin")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_within: Vec<SuiteGeoWithinFieldEnum>,
    ///https://schema.org/smokingAllowed
    #[serde(rename = "smokingAllowed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub smoking_allowed: Vec<String>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/containedInPlace
    #[serde(rename = "containedInPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contained_in_place: Vec<Place>,
    ///https://schema.org/address
    #[serde(rename = "address")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address: Vec<SuiteAddressFieldEnum>,
    ///https://schema.org/tourBookingPage
    #[serde(rename = "tourBookingPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tour_booking_page: Vec<String>,
    ///https://schema.org/specialOpeningHoursSpecification
    #[serde(rename = "specialOpeningHoursSpecification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub special_opening_hours_specification: Vec<OpeningHoursSpecification>,
    ///https://schema.org/floorSize
    #[serde(rename = "floorSize")]
    #[serde_as(as = "OneOrMany<_>")]
    pub floor_size: Vec<QuantitativeValue>,
    ///https://schema.org/hasCertification
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///https://schema.org/geoDisjoint
    #[serde(rename = "geoDisjoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_disjoint: Vec<SuiteGeoDisjointFieldEnum>,
    ///https://schema.org/amenityFeature
    #[serde(rename = "amenityFeature")]
    #[serde_as(as = "OneOrMany<_>")]
    pub amenity_feature: Vec<LocationFeatureSpecification>,
    ///https://schema.org/faxNumber
    #[serde(rename = "faxNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fax_number: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<SuiteMainEntityOfPageFieldEnum>,
    ///https://schema.org/yearBuilt
    #[serde(rename = "yearBuilt")]
    #[serde_as(as = "OneOrMany<_>")]
    pub year_built: Vec<f32>,
    ///https://schema.org/geoTouches
    #[serde(rename = "geoTouches")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_touches: Vec<SuiteGeoTouchesFieldEnum>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/geoOverlaps
    #[serde(rename = "geoOverlaps")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_overlaps: Vec<SuiteGeoOverlapsFieldEnum>,
    ///https://schema.org/hasMap
    #[serde(rename = "hasMap")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_map: Vec<SuiteHasMapFieldEnum>,
    ///https://schema.org/containedIn
    #[serde(rename = "containedIn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contained_in: Vec<Place>,
    ///https://schema.org/numberOfFullBathrooms
    #[serde(rename = "numberOfFullBathrooms")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_full_bathrooms: Vec<f32>,
    ///https://schema.org/latitude
    #[serde(rename = "latitude")]
    #[serde_as(as = "OneOrMany<_>")]
    pub latitude: Vec<SuiteLatitudeFieldEnum>,
    ///https://schema.org/globalLocationNumber
    #[serde(rename = "globalLocationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub global_location_number: Vec<String>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/branchCode
    #[serde(rename = "branchCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub branch_code: Vec<String>,
    ///https://schema.org/geoCovers
    #[serde(rename = "geoCovers")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_covers: Vec<SuiteGeoCoversFieldEnum>,
    ///https://schema.org/occupancy
    #[serde(rename = "occupancy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub occupancy: Vec<QuantitativeValue>,
    ///https://schema.org/permittedUsage
    #[serde(rename = "permittedUsage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub permitted_usage: Vec<String>,
    ///https://schema.org/map
    #[serde(rename = "map")]
    #[serde_as(as = "OneOrMany<_>")]
    pub map: Vec<String>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/numberOfBedrooms
    #[serde(rename = "numberOfBedrooms")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_bedrooms: Vec<SuiteNumberOfBedroomsFieldEnum>,
    ///https://schema.org/maps
    #[serde(rename = "maps")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maps: Vec<String>,
    ///https://schema.org/hasGS1DigitalLink
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///https://schema.org/isicV4
    #[serde(rename = "isicV4")]
    #[serde_as(as = "OneOrMany<_>")]
    pub isic_v4: Vec<String>,
    ///https://schema.org/leaseLength
    #[serde(rename = "leaseLength")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lease_length: Vec<SuiteLeaseLengthFieldEnum>,
    ///https://schema.org/floorLevel
    #[serde(rename = "floorLevel")]
    #[serde_as(as = "OneOrMany<_>")]
    pub floor_level: Vec<String>,
    ///https://schema.org/hasDriveThroughService
    #[serde(rename = "hasDriveThroughService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_drive_through_service: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<SuiteDescriptionFieldEnum>,
    ///https://schema.org/accommodationCategory
    #[serde(rename = "accommodationCategory")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accommodation_category: Vec<String>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/publicAccess
    #[serde(rename = "publicAccess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub public_access: Vec<String>,
    ///https://schema.org/geoEquals
    #[serde(rename = "geoEquals")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_equals: Vec<SuiteGeoEqualsFieldEnum>,
    ///https://schema.org/slogan
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///https://schema.org/geoCoveredBy
    #[serde(rename = "geoCoveredBy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geo_covered_by: Vec<SuiteGeoCoveredByFieldEnum>,
    ///https://schema.org/maximumAttendeeCapacity
    #[serde(rename = "maximumAttendeeCapacity")]
    #[serde_as(as = "OneOrMany<_>")]
    pub maximum_attendee_capacity: Vec<i32>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<SuiteImageFieldEnum>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<SuiteIdentifierFieldEnum>,
}
