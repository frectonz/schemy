use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type FundingSchemeAdditionalTypeFieldEnum = String;
///https://schema.org/FundingScheme
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct FundingScheme {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/hasGS1DigitalLink
    #[serde(rename = "hasGS1DigitalLink")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_gs1_digital_link: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<FundingSchemeDescriptionFieldEnum>,
    ///https://schema.org/legalName
    #[serde(rename = "legalName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub legal_name: Vec<String>,
    ///https://schema.org/acceptedPaymentMethod
    #[serde(rename = "acceptedPaymentMethod")]
    #[serde_as(as = "OneOrMany<_>")]
    pub accepted_payment_method: Vec<FundingSchemeAcceptedPaymentMethodFieldEnum>,
    ///https://schema.org/globalLocationNumber
    #[serde(rename = "globalLocationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub global_location_number: Vec<String>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/hasPOS
    #[serde(rename = "hasPOS")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_pos: Vec<Place>,
    ///https://schema.org/ownershipFundingInfo
    #[serde(rename = "ownershipFundingInfo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ownership_funding_info: Vec<FundingSchemeOwnershipFundingInfoFieldEnum>,
    ///https://schema.org/memberOf
    #[serde(rename = "memberOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub member_of: Vec<FundingSchemeMemberOfFieldEnum>,
    ///https://schema.org/funder
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<FundingSchemeFunderFieldEnum>,
    ///https://schema.org/funding
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///https://schema.org/alumni
    #[serde(rename = "alumni")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alumni: Vec<Person>,
    ///https://schema.org/actionableFeedbackPolicy
    #[serde(rename = "actionableFeedbackPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub actionable_feedback_policy: Vec<FundingSchemeActionableFeedbackPolicyFieldEnum>,
    ///https://schema.org/contactPoint
    #[serde(rename = "contactPoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_point: Vec<ContactPoint>,
    ///https://schema.org/founder
    #[serde(rename = "founder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founder: Vec<FundingSchemeFounderFieldEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/diversityStaffingReport
    #[serde(rename = "diversityStaffingReport")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diversity_staffing_report: Vec<FundingSchemeDiversityStaffingReportFieldEnum>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<FundingSchemeIdentifierFieldEnum>,
    ///https://schema.org/taxID
    #[serde(rename = "taxID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tax_id: Vec<String>,
    ///https://schema.org/slogan
    #[serde(rename = "slogan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub slogan: Vec<String>,
    ///https://schema.org/telephone
    #[serde(rename = "telephone")]
    #[serde_as(as = "OneOrMany<_>")]
    pub telephone: Vec<String>,
    ///https://schema.org/foundingLocation
    #[serde(rename = "foundingLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founding_location: Vec<Place>,
    ///https://schema.org/isicV4
    #[serde(rename = "isicV4")]
    #[serde_as(as = "OneOrMany<_>")]
    pub isic_v4: Vec<String>,
    ///https://schema.org/skills
    #[serde(rename = "skills")]
    #[serde_as(as = "OneOrMany<_>")]
    pub skills: Vec<FundingSchemeSkillsFieldEnum>,
    ///https://schema.org/reviews
    #[serde(rename = "reviews")]
    #[serde_as(as = "OneOrMany<_>")]
    pub reviews: Vec<Review>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<FundingSchemeMainEntityOfPageFieldEnum>,
    ///https://schema.org/aggregateRating
    #[serde(rename = "aggregateRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub aggregate_rating: Vec<AggregateRating>,
    ///https://schema.org/logo
    #[serde(rename = "logo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub logo: Vec<FundingSchemeLogoFieldEnum>,
    ///https://schema.org/interactionStatistic
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///https://schema.org/founders
    #[serde(rename = "founders")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founders: Vec<Person>,
    ///https://schema.org/parentOrganization
    #[serde(rename = "parentOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parent_organization: Vec<Organization>,
    ///https://schema.org/employee
    #[serde(rename = "employee")]
    #[serde_as(as = "OneOrMany<_>")]
    pub employee: Vec<Person>,
    ///https://schema.org/naics
    #[serde(rename = "naics")]
    #[serde_as(as = "OneOrMany<_>")]
    pub naics: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<FundingSchemeImageFieldEnum>,
    ///https://schema.org/department
    #[serde(rename = "department")]
    #[serde_as(as = "OneOrMany<_>")]
    pub department: Vec<Organization>,
    ///https://schema.org/hasCredential
    #[serde(rename = "hasCredential")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_credential: Vec<EducationalOccupationalCredential>,
    ///https://schema.org/hasShippingService
    #[serde(rename = "hasShippingService")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_shipping_service: Vec<ShippingService>,
    ///https://schema.org/address
    #[serde(rename = "address")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address: Vec<FundingSchemeAddressFieldEnum>,
    ///https://schema.org/knowsAbout
    #[serde(rename = "knowsAbout")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_about: Vec<FundingSchemeKnowsAboutFieldEnum>,
    ///https://schema.org/member
    #[serde(rename = "member")]
    #[serde_as(as = "OneOrMany<_>")]
    pub member: Vec<FundingSchemeMemberFieldEnum>,
    ///https://schema.org/unnamedSourcesPolicy
    #[serde(rename = "unnamedSourcesPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub unnamed_sources_policy: Vec<FundingSchemeUnnamedSourcesPolicyFieldEnum>,
    ///https://schema.org/foundingDate
    #[serde(rename = "foundingDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub founding_date: Vec<String>,
    ///https://schema.org/email
    #[serde(rename = "email")]
    #[serde_as(as = "OneOrMany<_>")]
    pub email: Vec<String>,
    ///https://schema.org/owns
    #[serde(rename = "owns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub owns: Vec<FundingSchemeOwnsFieldEnum>,
    ///https://schema.org/iso6523Code
    #[serde(rename = "iso6523Code")]
    #[serde_as(as = "OneOrMany<_>")]
    pub iso6523_code: Vec<String>,
    ///https://schema.org/duns
    #[serde(rename = "duns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duns: Vec<String>,
    ///https://schema.org/publishingPrinciples
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<FundingSchemePublishingPrinciplesFieldEnum>,
    ///https://schema.org/serviceArea
    #[serde(rename = "serviceArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub service_area: Vec<FundingSchemeServiceAreaFieldEnum>,
    ///https://schema.org/location
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<FundingSchemeLocationFieldEnum>,
    ///https://schema.org/vatID
    #[serde(rename = "vatID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vat_id: Vec<String>,
    ///https://schema.org/knowsLanguage
    #[serde(rename = "knowsLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_language: Vec<FundingSchemeKnowsLanguageFieldEnum>,
    ///https://schema.org/contactPoints
    #[serde(rename = "contactPoints")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_points: Vec<ContactPoint>,
    ///https://schema.org/review
    #[serde(rename = "review")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review: Vec<Review>,
    ///https://schema.org/areaServed
    #[serde(rename = "areaServed")]
    #[serde_as(as = "OneOrMany<_>")]
    pub area_served: Vec<FundingSchemeAreaServedFieldEnum>,
    ///https://schema.org/seeks
    #[serde(rename = "seeks")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seeks: Vec<Demand>,
    ///https://schema.org/leiCode
    #[serde(rename = "leiCode")]
    #[serde_as(as = "OneOrMany<_>")]
    pub lei_code: Vec<String>,
    ///https://schema.org/members
    #[serde(rename = "members")]
    #[serde_as(as = "OneOrMany<_>")]
    pub members: Vec<FundingSchemeMembersFieldEnum>,
    ///https://schema.org/faxNumber
    #[serde(rename = "faxNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fax_number: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<FundingSchemeSubjectOfFieldEnum>,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/award
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///https://schema.org/correctionsPolicy
    #[serde(rename = "correctionsPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub corrections_policy: Vec<FundingSchemeCorrectionsPolicyFieldEnum>,
    ///https://schema.org/hasMerchantReturnPolicy
    #[serde(rename = "hasMerchantReturnPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_merchant_return_policy: Vec<MerchantReturnPolicy>,
    ///https://schema.org/sponsor
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<FundingSchemeSponsorFieldEnum>,
    ///https://schema.org/diversityPolicy
    #[serde(rename = "diversityPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diversity_policy: Vec<FundingSchemeDiversityPolicyFieldEnum>,
    ///https://schema.org/agentInteractionStatistic
    #[serde(rename = "agentInteractionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent_interaction_statistic: Vec<InteractionCounter>,
    ///https://schema.org/events
    #[serde(rename = "events")]
    #[serde_as(as = "OneOrMany<_>")]
    pub events: Vec<Event>,
    ///https://schema.org/hasOfferCatalog
    #[serde(rename = "hasOfferCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_offer_catalog: Vec<OfferCatalog>,
    ///https://schema.org/subOrganization
    #[serde(rename = "subOrganization")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sub_organization: Vec<Organization>,
    ///https://schema.org/employees
    #[serde(rename = "employees")]
    #[serde_as(as = "OneOrMany<_>")]
    pub employees: Vec<Person>,
    ///https://schema.org/event
    #[serde(rename = "event")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event: Vec<Event>,
    ///https://schema.org/hasMemberProgram
    #[serde(rename = "hasMemberProgram")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_member_program: Vec<MemberProgram>,
    ///https://schema.org/numberOfEmployees
    #[serde(rename = "numberOfEmployees")]
    #[serde_as(as = "OneOrMany<_>")]
    pub number_of_employees: Vec<QuantitativeValue>,
    ///https://schema.org/nonprofitStatus
    #[serde(rename = "nonprofitStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub nonprofit_status: Vec<NonprofitType>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/brand
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<FundingSchemeBrandFieldEnum>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/dissolutionDate
    #[serde(rename = "dissolutionDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub dissolution_date: Vec<String>,
    ///https://schema.org/hasCertification
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///https://schema.org/keywords
    #[serde(rename = "keywords")]
    #[serde_as(as = "OneOrMany<_>")]
    pub keywords: Vec<FundingSchemeKeywordsFieldEnum>,
    ///https://schema.org/makesOffer
    #[serde(rename = "makesOffer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub makes_offer: Vec<Offer>,
    ///https://schema.org/ethicsPolicy
    #[serde(rename = "ethicsPolicy")]
    #[serde_as(as = "OneOrMany<_>")]
    pub ethics_policy: Vec<FundingSchemeEthicsPolicyFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<FundingSchemeAdditionalTypeFieldEnum>,
    ///https://schema.org/awards
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
}
