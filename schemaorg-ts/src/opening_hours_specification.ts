import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type OpeningHoursSpecificationValidFromFieldEnum = string;

/**
 * <https://schema.org/validThrough>
 **/
export type OpeningHoursSpecificationValidThroughFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type OpeningHoursSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OpeningHoursSpecification>
 **/
export interface OpeningHoursSpecification {
  "@context": string;
  "@type": "OpeningHoursSpecification";

  /**
   * <https://schema.org/closes>
   **/
  closes: all.OneOrMany<string>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.OpeningHoursSpecificationValidFromFieldEnum>;

  /**
   * <https://schema.org/opens>
   **/
  opens: all.OneOrMany<string>;

  /**
   * <https://schema.org/validThrough>
   **/
  validThrough: all.OneOrMany<all.OpeningHoursSpecificationValidThroughFieldEnum>;

  /**
   * <https://schema.org/dayOfWeek>
   **/
  dayOfWeek: all.OneOrMany<all.DayOfWeekEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OpeningHoursSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OpeningHoursSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OpeningHoursSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OpeningHoursSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OpeningHoursSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OpeningHoursSpecificationImageFieldEnum>;
}
