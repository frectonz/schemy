use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type RatingAdditionalTypeFieldEnum = String;
///<https://schema.org/Rating>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct Rating {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<RatingAdditionalTypeFieldEnum>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/ratingExplanation>
    #[serde(rename = "ratingExplanation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub rating_explanation: Vec<String>,
    ///<https://schema.org/ratingValue>
    #[serde(rename = "ratingValue")]
    #[serde_as(as = "OneOrMany<_>")]
    pub rating_value: Vec<RatingRatingValueFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<RatingDescriptionFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<RatingMainEntityOfPageFieldEnum>,
    ///<https://schema.org/worstRating>
    #[serde(rename = "worstRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub worst_rating: Vec<RatingWorstRatingFieldEnum>,
    ///<https://schema.org/bestRating>
    #[serde(rename = "bestRating")]
    #[serde_as(as = "OneOrMany<_>")]
    pub best_rating: Vec<RatingBestRatingFieldEnum>,
    ///<https://schema.org/author>
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    pub author: Vec<RatingAuthorFieldEnum>,
    ///<https://schema.org/reviewAspect>
    #[serde(rename = "reviewAspect")]
    #[serde_as(as = "OneOrMany<_>")]
    pub review_aspect: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<RatingImageFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<RatingSubjectOfFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<RatingIdentifierFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
}
