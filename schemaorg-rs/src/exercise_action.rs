use crate::*;
use serde_with::{serde_as, OneOrMany};
///<https://schema.org/startTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ExerciseActionStartTimeFieldEnum = String;
///<https://schema.org/endTime>
///<https://schema.org/DateTime>
///<https://schema.org/Time>
pub type ExerciseActionEndTimeFieldEnum = String;
///<https://schema.org/additionalType>
///<https://schema.org/Text>
///<https://schema.org/URL>
pub type ExerciseActionAdditionalTypeFieldEnum = String;
///<https://schema.org/ExerciseAction>
#[serde_as]
#[derive(Debug, serde::Deserialize)]
#[cfg_attr(feature = "uniffi", derive(uniffi::Record))]
pub struct ExerciseAction {
    #[serde(rename = "@context")]
    pub context: String,
    ///<https://schema.org/opponent>
    #[serde(rename = "opponent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub opponent: Vec<Person>,
    ///<https://schema.org/sportsTeam>
    #[serde(rename = "sportsTeam")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sports_team: Vec<SportsTeam>,
    ///<https://schema.org/distance>
    #[serde(rename = "distance")]
    #[serde_as(as = "OneOrMany<_>")]
    pub distance: Vec<Distance>,
    ///<https://schema.org/sportsEvent>
    #[serde(rename = "sportsEvent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sports_event: Vec<SportsEvent>,
    ///<https://schema.org/sportsActivityLocation>
    #[serde(rename = "sportsActivityLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub sports_activity_location: Vec<SportsActivityLocation>,
    ///<https://schema.org/fromLocation>
    #[serde(rename = "fromLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub from_location: Vec<Place>,
    ///<https://schema.org/exercisePlan>
    #[serde(rename = "exercisePlan")]
    #[serde_as(as = "OneOrMany<_>")]
    pub exercise_plan: Vec<ExercisePlan>,
    ///<https://schema.org/course>
    #[serde(rename = "course")]
    #[serde_as(as = "OneOrMany<_>")]
    pub course: Vec<Place>,
    ///<https://schema.org/exerciseRelatedDiet>
    #[serde(rename = "exerciseRelatedDiet")]
    #[serde_as(as = "OneOrMany<_>")]
    pub exercise_related_diet: Vec<Diet>,
    ///<https://schema.org/diet>
    #[serde(rename = "diet")]
    #[serde_as(as = "OneOrMany<_>")]
    pub diet: Vec<Diet>,
    ///<https://schema.org/exerciseType>
    #[serde(rename = "exerciseType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub exercise_type: Vec<String>,
    ///<https://schema.org/exerciseCourse>
    #[serde(rename = "exerciseCourse")]
    #[serde_as(as = "OneOrMany<_>")]
    pub exercise_course: Vec<Place>,
    ///<https://schema.org/toLocation>
    #[serde(rename = "toLocation")]
    #[serde_as(as = "OneOrMany<_>")]
    pub to_location: Vec<Place>,
    ///<https://schema.org/event>
    #[serde(rename = "event")]
    #[serde_as(as = "OneOrMany<_>")]
    pub event: Vec<Event>,
    ///<https://schema.org/audience>
    #[serde(rename = "audience")]
    #[serde_as(as = "OneOrMany<_>")]
    pub audience: Vec<Audience>,
    ///<https://schema.org/provider>
    #[serde(rename = "provider")]
    #[serde_as(as = "OneOrMany<_>")]
    pub provider: Vec<ExerciseActionProviderFieldEnum>,
    ///<https://schema.org/actionProcess>
    #[serde(rename = "actionProcess")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_process: Vec<HowTo>,
    ///<https://schema.org/startTime>
    #[serde(rename = "startTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub start_time: Vec<ExerciseActionStartTimeFieldEnum>,
    ///<https://schema.org/actionStatus>
    #[serde(rename = "actionStatus")]
    #[serde_as(as = "OneOrMany<_>")]
    pub action_status: Vec<ActionStatusTypeEnum>,
    ///<https://schema.org/object>
    #[serde(rename = "object")]
    #[serde_as(as = "OneOrMany<_>")]
    pub object: Vec<Thing>,
    ///<https://schema.org/error>
    #[serde(rename = "error")]
    #[serde_as(as = "OneOrMany<_>")]
    pub error: Vec<Thing>,
    ///<https://schema.org/location>
    #[serde(rename = "location")]
    #[serde_as(as = "OneOrMany<_>")]
    pub location: Vec<ExerciseActionLocationFieldEnum>,
    ///<https://schema.org/agent>
    #[serde(rename = "agent")]
    #[serde_as(as = "OneOrMany<_>")]
    pub agent: Vec<ExerciseActionAgentFieldEnum>,
    ///<https://schema.org/result>
    #[serde(rename = "result")]
    #[serde_as(as = "OneOrMany<_>")]
    pub result: Vec<Thing>,
    ///<https://schema.org/target>
    #[serde(rename = "target")]
    #[serde_as(as = "OneOrMany<_>")]
    pub target: Vec<ExerciseActionTargetFieldEnum>,
    ///<https://schema.org/endTime>
    #[serde(rename = "endTime")]
    #[serde_as(as = "OneOrMany<_>")]
    pub end_time: Vec<ExerciseActionEndTimeFieldEnum>,
    ///<https://schema.org/instrument>
    #[serde(rename = "instrument")]
    #[serde_as(as = "OneOrMany<_>")]
    pub instrument: Vec<Thing>,
    ///<https://schema.org/participant>
    #[serde(rename = "participant")]
    #[serde_as(as = "OneOrMany<_>")]
    pub participant: Vec<ExerciseActionParticipantFieldEnum>,
    ///<https://schema.org/name>
    #[serde(rename = "name")]
    #[serde_as(as = "OneOrMany<_>")]
    pub name: Vec<String>,
    ///<https://schema.org/mainEntityOfPage>
    #[serde(rename = "mainEntityOfPage")]
    #[serde_as(as = "OneOrMany<_>")]
    pub main_entity_of_page: Vec<ExerciseActionMainEntityOfPageFieldEnum>,
    ///<https://schema.org/url>
    #[serde(rename = "url")]
    #[serde_as(as = "OneOrMany<_>")]
    pub url: Vec<String>,
    ///<https://schema.org/disambiguatingDescription>
    #[serde(rename = "disambiguatingDescription")]
    #[serde_as(as = "OneOrMany<_>")]
    pub disambiguating_description: Vec<String>,
    ///<https://schema.org/identifier>
    #[serde(rename = "identifier")]
    #[serde_as(as = "OneOrMany<_>")]
    pub identifier: Vec<ExerciseActionIdentifierFieldEnum>,
    ///<https://schema.org/description>
    #[serde(rename = "description")]
    #[serde_as(as = "OneOrMany<_>")]
    pub description: Vec<ExerciseActionDescriptionFieldEnum>,
    ///<https://schema.org/subjectOf>
    #[serde(rename = "subjectOf")]
    #[serde_as(as = "OneOrMany<_>")]
    pub subject_of: Vec<ExerciseActionSubjectOfFieldEnum>,
    ///<https://schema.org/alternateName>
    #[serde(rename = "alternateName")]
    #[serde_as(as = "OneOrMany<_>")]
    pub alternate_name: Vec<String>,
    ///<https://schema.org/additionalType>
    #[serde(rename = "additionalType")]
    #[serde_as(as = "OneOrMany<_>")]
    pub additional_type: Vec<ExerciseActionAdditionalTypeFieldEnum>,
    ///<https://schema.org/potentialAction>
    #[serde(rename = "potentialAction")]
    #[serde_as(as = "OneOrMany<_>")]
    pub potential_action: Vec<Action>,
    ///<https://schema.org/sameAs>
    #[serde(rename = "sameAs")]
    #[serde_as(as = "OneOrMany<_>")]
    pub same_as: Vec<String>,
    ///<https://schema.org/image>
    #[serde(rename = "image")]
    #[serde_as(as = "OneOrMany<_>")]
    pub image: Vec<ExerciseActionImageFieldEnum>,
}
