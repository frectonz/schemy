use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type AggregateRatingAdditionalTypeFieldEnum = String;
///<https://schema.org/AggregateRating>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct AggregateRating {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/reviewCount>
    #[serde(rename = "reviewCount")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub review_count: Vec<i32>,
    ///<https://schema.org/itemReviewed>
    #[serde(rename = "itemReviewed")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub item_reviewed: Vec<Thing>,
    ///<https://schema.org/ratingCount>
    #[serde(rename = "ratingCount")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub rating_count: Vec<i32>,
    ///<https://schema.org/ratingValue>
    #[serde(rename = "ratingValue")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub rating_value: Vec<AggregateRatingRatingValueFieldEnum>,
    ///<https://schema.org/ratingExplanation>
    #[serde(rename = "ratingExplanation")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub rating_explanation: Vec<String>,
    ///<https://schema.org/worstRating>
    #[serde(rename = "worstRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub worst_rating: Vec<AggregateRatingWorstRatingFieldEnum>,
    ///<https://schema.org/reviewAspect>
    #[serde(rename = "reviewAspect")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub review_aspect: Vec<String>,
    ///<https://schema.org/bestRating>
    #[serde(rename = "bestRating")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub best_rating: Vec<AggregateRatingBestRatingFieldEnum>,
    ///<https://schema.org/author>
    #[serde(rename = "author")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub author: Vec<AggregateRatingAuthorFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub main_entity_of_page: Vec<AggregateRatingMainEntityOfPageFieldEnum>,
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
    pub identifier: Vec<AggregateRatingIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub description: Vec<AggregateRatingDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub subject_of: Vec<AggregateRatingSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    #[serde(default)]
    pub additional_type: Vec<AggregateRatingAdditionalTypeFieldEnum>,
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
    pub image: Vec<AggregateRatingImageFieldEnum>,
}
