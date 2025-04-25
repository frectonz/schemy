import type * as all from "./index";

/**
 * <https://schema.org/startTime>
 **/
export type ExerciseActionStartTimeFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type ExerciseActionEndTimeFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ExerciseActionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ExerciseAction>
 **/
export interface ExerciseAction {
  "@context": string;
  "@type": "ExerciseAction";

  /**
   * <https://schema.org/opponent>
   **/
  opponent: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/sportsTeam>
   **/
  sportsTeam: all.OneOrMany<all.SportsTeam>;

  /**
   * <https://schema.org/distance>
   **/
  distance: all.OneOrMany<all.Distance>;

  /**
   * <https://schema.org/sportsEvent>
   **/
  sportsEvent: all.OneOrMany<all.SportsEvent>;

  /**
   * <https://schema.org/sportsActivityLocation>
   **/
  sportsActivityLocation: all.OneOrMany<all.SportsActivityLocation>;

  /**
   * <https://schema.org/fromLocation>
   **/
  fromLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/exercisePlan>
   **/
  exercisePlan: all.OneOrMany<all.ExercisePlan>;

  /**
   * <https://schema.org/course>
   **/
  course: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/exerciseRelatedDiet>
   **/
  exerciseRelatedDiet: all.OneOrMany<all.Diet>;

  /**
   * <https://schema.org/diet>
   **/
  diet: all.OneOrMany<all.Diet>;

  /**
   * <https://schema.org/exerciseType>
   **/
  exerciseType: all.OneOrMany<string>;

  /**
   * <https://schema.org/exerciseCourse>
   **/
  exerciseCourse: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/toLocation>
   **/
  toLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/audience>
   **/
  audience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/provider>
   **/
  provider: all.OneOrMany<all.ExerciseActionProviderFieldEnum>;

  /**
   * <https://schema.org/actionProcess>
   **/
  actionProcess: all.OneOrMany<all.HowTo>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.ExerciseActionStartTimeFieldEnum>;

  /**
   * <https://schema.org/actionStatus>
   **/
  actionStatus: all.OneOrMany<all.ActionStatusTypeEnum>;

  /**
   * <https://schema.org/object>
   **/
  object: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/error>
   **/
  error: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/location>
   **/
  location: all.OneOrMany<all.ExerciseActionLocationFieldEnum>;

  /**
   * <https://schema.org/agent>
   **/
  agent: all.OneOrMany<all.ExerciseActionAgentFieldEnum>;

  /**
   * <https://schema.org/result>
   **/
  result: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/target>
   **/
  target: all.OneOrMany<all.ExerciseActionTargetFieldEnum>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.ExerciseActionEndTimeFieldEnum>;

  /**
   * <https://schema.org/instrument>
   **/
  instrument: all.OneOrMany<all.Thing>;

  /**
   * <https://schema.org/participant>
   **/
  participant: all.OneOrMany<all.ExerciseActionParticipantFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ExerciseActionMainEntityOfPageFieldEnum>;

  /**
   * <https://schema.org/url>
   **/
  url: all.OneOrMany<string>;

  /**
   * <https://schema.org/disambiguatingDescription>
   **/
  disambiguatingDescription: all.OneOrMany<string>;

  /**
   * <https://schema.org/identifier>
   **/
  identifier: all.OneOrMany<all.ExerciseActionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ExerciseActionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ExerciseActionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ExerciseActionAdditionalTypeFieldEnum>;

  /**
   * <https://schema.org/potentialAction>
   **/
  potentialAction: all.OneOrMany<all.Action>;

  /**
   * <https://schema.org/sameAs>
   **/
  sameAs: all.OneOrMany<string>;

  /**
   * <https://schema.org/image>
   **/
  image: all.OneOrMany<all.ExerciseActionImageFieldEnum>;
}
