import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type ScheduleEndDateFieldEnum = string;

/**
 * <https://schema.org/startTime>
 **/
export type ScheduleStartTimeFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type ScheduleStartDateFieldEnum = string;

/**
 * <https://schema.org/endTime>
 **/
export type ScheduleEndTimeFieldEnum = string;

/**
 * <https://schema.org/exceptDate>
 **/
export type ScheduleExceptDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ScheduleAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Schedule>
 **/
export interface Schedule {
  "@context": string;
  "@type": "Schedule";

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.ScheduleEndDateFieldEnum>;

  /**
   * <https://schema.org/startTime>
   **/
  startTime: all.OneOrMany<all.ScheduleStartTimeFieldEnum>;

  /**
   * <https://schema.org/byMonthWeek>
   **/
  byMonthWeek: all.OneOrMany<number>;

  /**
   * <https://schema.org/byDay>
   **/
  byDay: all.OneOrMany<all.ScheduleByDayFieldEnum>;

  /**
   * <https://schema.org/byMonth>
   **/
  byMonth: all.OneOrMany<number>;

  /**
   * <https://schema.org/duration>
   **/
  duration: all.OneOrMany<all.ScheduleDurationFieldEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.ScheduleStartDateFieldEnum>;

  /**
   * <https://schema.org/scheduleTimezone>
   **/
  scheduleTimezone: all.OneOrMany<string>;

  /**
   * <https://schema.org/repeatCount>
   **/
  repeatCount: all.OneOrMany<number>;

  /**
   * <https://schema.org/byMonthDay>
   **/
  byMonthDay: all.OneOrMany<number>;

  /**
   * <https://schema.org/endTime>
   **/
  endTime: all.OneOrMany<all.ScheduleEndTimeFieldEnum>;

  /**
   * <https://schema.org/repeatFrequency>
   **/
  repeatFrequency: all.OneOrMany<all.ScheduleRepeatFrequencyFieldEnum>;

  /**
   * <https://schema.org/exceptDate>
   **/
  exceptDate: all.OneOrMany<all.ScheduleExceptDateFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ScheduleMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ScheduleIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ScheduleDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ScheduleSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ScheduleAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ScheduleImageFieldEnum>;
}
