use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type DataFeedItemAdditionalTypeFieldEnum = String;
///<https://schema.org/dateDeleted>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DataFeedItemDateDeletedFieldEnum = String;
///<https://schema.org/dateCreated>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DataFeedItemDateCreatedFieldEnum = String;
///<https://schema.org/dateModified>
///<https://schema.org/Date>
///<https://schema.org/DateTime>
pub type DataFeedItemDateModifiedFieldEnum = String;
///<https://schema.org/DataFeedItem>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct DataFeedItem {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<DataFeedItemDescriptionFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<DataFeedItemAdditionalTypeFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<DataFeedItemSubjectOfFieldEnum>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/dateDeleted>
    #[serde(rename = "dateDeleted")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_deleted: Vec<DataFeedItemDateDeletedFieldEnum>,
    ///<https://schema.org/item>
    #[serde(rename = "item")]
    #[serde_as(as = "OneOrMany<_>")]
    pub item: Vec<Thing>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<DataFeedItemImageFieldEnum>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<DataFeedItemIdentifierFieldEnum>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<DataFeedItemMainEntityOfPageFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/dateCreated>
    #[serde(rename = "dateCreated")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_created: Vec<DataFeedItemDateCreatedFieldEnum>,
    ///<https://schema.org/dateModified>
    #[serde(rename = "dateModified")]
    #[serde_as(as = "OneOrMany<_>")]
    pub date_modified: Vec<DataFeedItemDateModifiedFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
}
