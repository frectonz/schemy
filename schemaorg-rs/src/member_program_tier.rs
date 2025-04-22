use crate::*;
use serde_with::{serde_as, OneOrMany};
///https://schema.org/additionalType
///https://schema.org/Text
///https://schema.org/URL
pub type MemberProgramTierAdditionalTypeFieldEnum = String;
///https://schema.org/MemberProgramTier
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct MemberProgramTier {
    #[serde(rename = "@context")]
    pub context: String,
    ///https://schema.org/alternateName
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///https://schema.org/image
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<MemberProgramTierImageFieldEnum>,
    ///https://schema.org/additionalType
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<MemberProgramTierAdditionalTypeFieldEnum>,
    ///https://schema.org/hasTierBenefit
    #[serde(rename = "hasTierBenefit")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_tier_benefit: Vec<TierBenefitEnumerationEnum>,
    ///https://schema.org/url
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///https://schema.org/identifier
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<MemberProgramTierIdentifierFieldEnum>,
    ///https://schema.org/membershipPointsEarned
    #[serde(rename = "membershipPointsEarned")]
    #[serde_as(as = "OneOrMany<_>")]
    pub membership_points_earned: Vec<MemberProgramTierMembershipPointsEarnedFieldEnum>,
    ///https://schema.org/disambiguatingDescription
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///https://schema.org/description
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<MemberProgramTierDescriptionFieldEnum>,
    ///https://schema.org/isTierOf
    #[serde(rename = "isTierOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub is_tier_of: Vec<MemberProgram>,
    ///https://schema.org/hasTierRequirement
    #[serde(rename = "hasTierRequirement")]
    #[serde_as(as = "OneOrMany<_>")]
    pub has_tier_requirement: Vec<MemberProgramTierHasTierRequirementFieldEnum>,
    ///https://schema.org/mainEntityOfPage
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<MemberProgramTierMainEntityOfPageFieldEnum>,
    ///https://schema.org/potentialAction
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///https://schema.org/sameAs
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///https://schema.org/name
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///https://schema.org/subjectOf
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<MemberProgramTierSubjectOfFieldEnum>,
}
