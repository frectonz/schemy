use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type PatientAdditionalTypeFieldEnum = String;
///<https://schema.org/Patient>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Patient {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/workLocation>
    #[serde(rename = "workLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub work_location: Vec<PatientWorkLocationFieldEnum>,
    ///<https://schema.org/colleagues>
    #[serde(rename = "colleagues")]
    #[serde_as(as = "OneOrMany<_>")]
    pub colleagues: Vec<Person>,
    ///<https://schema.org/spouse>
    #[serde(rename = "spouse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub spouse: Vec<Person>,
    ///<https://schema.org/honorificSuffix>
    #[serde(rename = "honorificSuffix")]
    #[serde_as(as = "OneOrMany<_>")]
    pub honorific_suffix: Vec<String>,
    ///<https://schema.org/drug>
    #[serde(rename = "drug")]
    #[serde_as(as = "OneOrMany<_>")]
    pub drug: Vec<Drug>,
    ///<https://schema.org/parents>
    #[serde(rename = "parents")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parents: Vec<Person>,
    ///<https://schema.org/hasOccupation>
    #[serde(rename = "hasOccupation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_occupation: Vec<Occupation>,
    ///<https://schema.org/seeks>
    #[serde(rename = "seeks")]
    #[serde_as(as = "OneOrMany<_>")]
    pub seeks: Vec<Demand>,
    ///<https://schema.org/callSign>
    #[serde(rename = "callSign")]
    #[serde_as(as = "OneOrMany<_>")]
    pub call_sign: Vec<String>,
    ///<https://schema.org/interactionStatistic>
    #[serde(rename = "interactionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/deathPlace>
    #[serde(rename = "deathPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub death_place: Vec<Place>,
    ///<https://schema.org/gender>
    #[serde(rename = "gender")]
    #[serde_as(as = "OneOrMany<_>")]
    pub gender: Vec<PatientGenderFieldEnum>,
    ///<https://schema.org/givenName>
    #[serde(rename = "givenName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub given_name: Vec<String>,
    ///<https://schema.org/netWorth>
    #[serde(rename = "netWorth")]
    #[serde_as(as = "OneOrMany<_>")]
    pub net_worth: Vec<PatientNetWorthFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/honorificPrefix>
    #[serde(rename = "honorificPrefix")]
    #[serde_as(as = "OneOrMany<_>")]
    pub honorific_prefix: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/sibling>
    #[serde(rename = "sibling")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sibling: Vec<Person>,
    ///<https://schema.org/homeLocation>
    #[serde(rename = "homeLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub home_location: Vec<PatientHomeLocationFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/requiredMinAge>
    #[serde(rename = "requiredMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_min_age: Vec<i32>,
    ///<https://schema.org/telephone>
    #[serde(rename = "telephone")]
    #[serde_as(as = "OneOrMany<_>")]
    pub telephone: Vec<String>,
    ///<https://schema.org/colleague>
    #[serde(rename = "colleague")]
    #[serde_as(as = "OneOrMany<_>")]
    pub colleague: Vec<PatientColleagueFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<PatientDescriptionFieldEnum>,
    ///<https://schema.org/geographicArea>
    #[serde(rename = "geographicArea")]
    #[serde_as(as = "OneOrMany<_>")]
    pub geographic_area: Vec<AdministrativeArea>,
    ///<https://schema.org/performerIn>
    #[serde(rename = "performerIn")]
    #[serde_as(as = "OneOrMany<_>")]
    pub performer_in: Vec<Event>,
    ///<https://schema.org/isicV4>
    #[serde(rename = "isicV4")]
    #[serde_as(as = "OneOrMany<_>")]
    pub isic_v4: Vec<String>,
    ///<https://schema.org/hasCertification>
    #[serde(rename = "hasCertification")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_certification: Vec<Certification>,
    ///<https://schema.org/awards>
    #[serde(rename = "awards")]
    #[serde_as(as = "OneOrMany<_>")]
    pub awards: Vec<String>,
    ///<https://schema.org/deathDate>
    #[serde(rename = "deathDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub death_date: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<PatientSubjectOfFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<PatientMainEntityOfPageFieldEnum>,
    ///<https://schema.org/weight>
    #[serde(rename = "weight")]
    #[serde_as(as = "OneOrMany<_>")]
    pub weight: Vec<PatientWeightFieldEnum>,
    ///<https://schema.org/memberOf>
    #[serde(rename = "memberOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub member_of: Vec<PatientMemberOfFieldEnum>,
    ///<https://schema.org/jobTitle>
    #[serde(rename = "jobTitle")]
    #[serde_as(as = "OneOrMany<_>")]
    pub job_title: Vec<PatientJobTitleFieldEnum>,
    ///<https://schema.org/additionalName>
    #[serde(rename = "additionalName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_name: Vec<String>,
    ///<https://schema.org/globalLocationNumber>
    #[serde(rename = "globalLocationNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub global_location_number: Vec<String>,
    ///<https://schema.org/hasPOS>
    #[serde(rename = "hasPOS")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_pos: Vec<Place>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/requiredMaxAge>
    #[serde(rename = "requiredMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_max_age: Vec<i32>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/suggestedMeasurement>
    #[serde(rename = "suggestedMeasurement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_measurement: Vec<QuantitativeValue>,
    ///<https://schema.org/parent>
    #[serde(rename = "parent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub parent: Vec<Person>,
    ///<https://schema.org/agentInteractionStatistic>
    #[serde(rename = "agentInteractionStatistic")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent_interaction_statistic: Vec<InteractionCounter>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<PatientImageFieldEnum>,
    ///<https://schema.org/funder>
    #[serde(rename = "funder")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funder: Vec<PatientFunderFieldEnum>,
    ///<https://schema.org/birthDate>
    #[serde(rename = "birthDate")]
    #[serde_as(as = "OneOrMany<_>")]
    pub birth_date: Vec<String>,
    ///<https://schema.org/suggestedAge>
    #[serde(rename = "suggestedAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_age: Vec<QuantitativeValue>,
    ///<https://schema.org/funding>
    #[serde(rename = "funding")]
    #[serde_as(as = "OneOrMany<_>")]
    pub funding: Vec<Grant>,
    ///<https://schema.org/suggestedGender>
    #[serde(rename = "suggestedGender")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_gender: Vec<PatientSuggestedGenderFieldEnum>,
    ///<https://schema.org/sponsor>
    #[serde(rename = "sponsor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sponsor: Vec<PatientSponsorFieldEnum>,
    ///<https://schema.org/affiliation>
    #[serde(rename = "affiliation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub affiliation: Vec<Organization>,
    ///<https://schema.org/children>
    #[serde(rename = "children")]
    #[serde_as(as = "OneOrMany<_>")]
    pub children: Vec<Person>,
    ///<https://schema.org/familyName>
    #[serde(rename = "familyName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub family_name: Vec<String>,
    ///<https://schema.org/hasOfferCatalog>
    #[serde(rename = "hasOfferCatalog")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_offer_catalog: Vec<OfferCatalog>,
    ///<https://schema.org/contactPoints>
    #[serde(rename = "contactPoints")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_points: Vec<ContactPoint>,
    ///<https://schema.org/owns>
    #[serde(rename = "owns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub owns: Vec<PatientOwnsFieldEnum>,
    ///<https://schema.org/faxNumber>
    #[serde(rename = "faxNumber")]
    #[serde_as(as = "OneOrMany<_>")]
    pub fax_number: Vec<String>,
    ///<https://schema.org/nationality>
    #[serde(rename = "nationality")]
    #[serde_as(as = "OneOrMany<_>")]
    pub nationality: Vec<Country>,
    ///<https://schema.org/knowsLanguage>
    #[serde(rename = "knowsLanguage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_language: Vec<PatientKnowsLanguageFieldEnum>,
    ///<https://schema.org/follows>
    #[serde(rename = "follows")]
    #[serde_as(as = "OneOrMany<_>")]
    pub follows: Vec<Person>,
    ///<https://schema.org/award>
    #[serde(rename = "award")]
    #[serde_as(as = "OneOrMany<_>")]
    pub award: Vec<String>,
    ///<https://schema.org/taxID>
    #[serde(rename = "taxID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub tax_id: Vec<String>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<PatientAdditionalTypeFieldEnum>,
    ///<https://schema.org/suggestedMaxAge>
    #[serde(rename = "suggestedMaxAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_max_age: Vec<f32>,
    ///<https://schema.org/diagnosis>
    #[serde(rename = "diagnosis")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diagnosis: Vec<MedicalCondition>,
    ///<https://schema.org/siblings>
    #[serde(rename = "siblings")]
    #[serde_as(as = "OneOrMany<_>")]
    pub siblings: Vec<Person>,
    ///<https://schema.org/height>
    #[serde(rename = "height")]
    #[serde_as(as = "OneOrMany<_>")]
    pub height: Vec<PatientHeightFieldEnum>,
    ///<https://schema.org/alumniOf>
    #[serde(rename = "alumniOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alumni_of: Vec<PatientAlumniOfFieldEnum>,
    ///<https://schema.org/makesOffer>
    #[serde(rename = "makesOffer")]
    #[serde_as(as = "OneOrMany<_>")]
    pub makes_offer: Vec<Offer>,
    ///<https://schema.org/knows>
    #[serde(rename = "knows")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows: Vec<Person>,
    ///<https://schema.org/skills>
    #[serde(rename = "skills")]
    #[serde_as(as = "OneOrMany<_>")]
    pub skills: Vec<PatientSkillsFieldEnum>,
    ///<https://schema.org/contactPoint>
    #[serde(rename = "contactPoint")]
    #[serde_as(as = "OneOrMany<_>")]
    pub contact_point: Vec<ContactPoint>,
    ///<https://schema.org/email>
    #[serde(rename = "email")]
    #[serde_as(as = "OneOrMany<_>")]
    pub email: Vec<String>,
    ///<https://schema.org/publishingPrinciples>
    #[serde(rename = "publishingPrinciples")]
    #[serde_as(as = "OneOrMany<_>")]
    pub publishing_principles: Vec<PatientPublishingPrinciplesFieldEnum>,
    ///<https://schema.org/vatID>
    #[serde(rename = "vatID")]
    #[serde_as(as = "OneOrMany<_>")]
    pub vat_id: Vec<String>,
    ///<https://schema.org/knowsAbout>
    #[serde(rename = "knowsAbout")]
    #[serde_as(as = "OneOrMany<_>")]
    pub knows_about: Vec<PatientKnowsAboutFieldEnum>,
    ///<https://schema.org/relatedTo>
    #[serde(rename = "relatedTo")]
    #[serde_as(as = "OneOrMany<_>")]
    pub related_to: Vec<Person>,
    ///<https://schema.org/suggestedMinAge>
    #[serde(rename = "suggestedMinAge")]
    #[serde_as(as = "OneOrMany<_>")]
    pub suggested_min_age: Vec<f32>,
    ///<https://schema.org/naics>
    #[serde(rename = "naics")]
    #[serde_as(as = "OneOrMany<_>")]
    pub naics: Vec<String>,
    ///<https://schema.org/worksFor>
    #[serde(rename = "worksFor")]
    #[serde_as(as = "OneOrMany<_>")]
    pub works_for: Vec<Organization>,
    ///<https://schema.org/brand>
    #[serde(rename = "brand")]
    #[serde_as(as = "OneOrMany<_>")]
    pub brand: Vec<PatientBrandFieldEnum>,
    ///<https://schema.org/hasCredential>
    #[serde(rename = "hasCredential")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_credential: Vec<EducationalOccupationalCredential>,
    ///<https://schema.org/address>
    #[serde(rename = "address")]
    #[serde_as(as = "OneOrMany<_>")]
    pub address: Vec<PatientAddressFieldEnum>,
    ///<https://schema.org/duns>
    #[serde(rename = "duns")]
    #[serde_as(as = "OneOrMany<_>")]
    pub duns: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<PatientIdentifierFieldEnum>,
    ///<https://schema.org/audienceType>
    #[serde(rename = "audienceType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience_type: Vec<String>,
    ///<https://schema.org/birthPlace>
    #[serde(rename = "birthPlace")]
    #[serde_as(as = "OneOrMany<_>")]
    pub birth_place: Vec<Place>,
    ///<https://schema.org/healthCondition>
    #[serde(rename = "healthCondition")]
    #[serde_as(as = "OneOrMany<_>")]
    pub health_condition: Vec<MedicalCondition>,
    ///<https://schema.org/requiredGender>
    #[serde(rename = "requiredGender")]
    #[serde_as(as = "OneOrMany<_>")]
    pub required_gender: Vec<String>,
}
