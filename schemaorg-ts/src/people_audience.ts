import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PeopleAudienceAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PeopleAudience>
 **/
export interface PeopleAudience {
  "@context": string;
  "@type": "PeopleAudience";

  /**
   * <https://schema.org/suggestedAge>
   **/
  suggestedAge: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/suggestedMinAge>
   **/
  suggestedMinAge: all.OneOrMany<number>;

  /**
   * <https://schema.org/suggestedGender>
   **/
  suggestedGender: all.OneOrMany<all.PeopleAudienceSuggestedGenderFieldEnum>;

  /**
   * <https://schema.org/requiredMinAge>
   **/
  requiredMinAge: all.OneOrMany<number>;

  /**
   * <https://schema.org/suggestedMeasurement>
   **/
  suggestedMeasurement: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/healthCondition>
   **/
  healthCondition: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/requiredGender>
   **/
  requiredGender: all.OneOrMany<string>;

  /**
   * <https://schema.org/requiredMaxAge>
   **/
  requiredMaxAge: all.OneOrMany<number>;

  /**
   * <https://schema.org/suggestedMaxAge>
   **/
  suggestedMaxAge: all.OneOrMany<number>;

  /**
   * <https://schema.org/audienceType>
   **/
  audienceType: all.OneOrMany<string>;

  /**
   * <https://schema.org/geographicArea>
   **/
  geographicArea: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PeopleAudienceMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PeopleAudienceIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PeopleAudienceDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PeopleAudienceSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PeopleAudienceAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PeopleAudienceImageFieldEnum>;
}
