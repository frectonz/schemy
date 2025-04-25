import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type OccupationalExperienceRequirementsAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/OccupationalExperienceRequirements>
 **/
export interface OccupationalExperienceRequirements {
  "@context": string;
  "@type": "OccupationalExperienceRequirements";

  /**
   * <https://schema.org/monthsOfExperience>
   **/
  monthsOfExperience: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.OccupationalExperienceRequirementsMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.OccupationalExperienceRequirementsIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.OccupationalExperienceRequirementsDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.OccupationalExperienceRequirementsSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.OccupationalExperienceRequirementsAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.OccupationalExperienceRequirementsImageFieldEnum>;
}
