import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PatientAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Patient>
 **/
export interface Patient {
  "@context": string;
  "@type": "Patient";

  /**
   * <https://schema.org/healthCondition>
   **/
  healthCondition: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/drug>
   **/
  drug: all.OneOrMany<all.Drug>;

  /**
   * <https://schema.org/diagnosis>
   **/
  diagnosis: all.OneOrMany<all.MedicalCondition>;

  /**
   * <https://schema.org/sibling>
   **/
  sibling: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/knows>
   **/
  knows: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/isicV4>
   **/
  isicV4: all.OneOrMany<string>;

  /**
   * <https://schema.org/nationality>
   **/
  nationality: all.OneOrMany<all.Country>;

  /**
   * <https://schema.org/honorificPrefix>
   **/
  honorificPrefix: all.OneOrMany<string>;

  /**
   * <https://schema.org/siblings>
   **/
  siblings: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/colleague>
   **/
  colleague: all.OneOrMany<all.PatientColleagueFieldEnum>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/parent>
   **/
  parent: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/skills>
   **/
  skills: all.OneOrMany<all.PatientSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.PatientPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/birthPlace>
   **/
  birthPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.PatientKnowsAboutFieldEnum>;

  /**
   * <https://schema.org/telephone>
   **/
  telephone: all.OneOrMany<string>;

  /**
   * <https://schema.org/weight>
   **/
  weight: all.OneOrMany<all.PatientWeightFieldEnum>;

  /**
   * <https://schema.org/seeks>
   **/
  seeks: all.OneOrMany<all.Demand>;

  /**
   * <https://schema.org/additionalName>
   **/
  additionalName: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasCredential>
   **/
  hasCredential: all.OneOrMany<all.EducationalOccupationalCredential>;

  /**
   * <https://schema.org/deathDate>
   **/
  deathDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/jobTitle>
   **/
  jobTitle: all.OneOrMany<all.PatientJobTitleFieldEnum>;

  /**
   * <https://schema.org/vatID>
   **/
  vatID: all.OneOrMany<string>;

  /**
   * <https://schema.org/taxID>
   **/
  taxID: all.OneOrMany<string>;

  /**
   * <https://schema.org/colleagues>
   **/
  colleagues: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/givenName>
   **/
  givenName: all.OneOrMany<string>;

  /**
   * <https://schema.org/relatedTo>
   **/
  relatedTo: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/birthDate>
   **/
  birthDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/homeLocation>
   **/
  homeLocation: all.OneOrMany<all.PatientHomeLocationFieldEnum>;

  /**
   * <https://schema.org/alumniOf>
   **/
  alumniOf: all.OneOrMany<all.PatientAlumniOfFieldEnum>;

  /**
   * <https://schema.org/contactPoints>
   **/
  contactPoints: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/naics>
   **/
  naics: all.OneOrMany<string>;

  /**
   * <https://schema.org/owns>
   **/
  owns: all.OneOrMany<all.PatientOwnsFieldEnum>;

  /**
   * <https://schema.org/callSign>
   **/
  callSign: all.OneOrMany<string>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.PatientBrandFieldEnum>;

  /**
   * <https://schema.org/children>
   **/
  children: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.PatientKnowsLanguageFieldEnum>;

  /**
   * <https://schema.org/awards>
   **/
  awards: all.OneOrMany<string>;

  /**
   * <https://schema.org/affiliation>
   **/
  affiliation: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/parents>
   **/
  parents: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/spouse>
   **/
  spouse: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/agentInteractionStatistic>
   **/
  agentInteractionStatistic: all.OneOrMany<all.InteractionCounter>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.PatientFunderFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.PatientAddressFieldEnum>;

  /**
   * <https://schema.org/netWorth>
   **/
  netWorth: all.OneOrMany<all.PatientNetWorthFieldEnum>;

  /**
   * <https://schema.org/interactionStatistic>
   **/
  interactionStatistic: all.OneOrMany<all.InteractionCounter>;

  /**
   * <https://schema.org/globalLocationNumber>
   **/
  globalLocationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasOccupation>
   **/
  hasOccupation: all.OneOrMany<all.Occupation>;

  /**
   * <https://schema.org/deathPlace>
   **/
  deathPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/makesOffer>
   **/
  makesOffer: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.PatientSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.PatientMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/height>
   **/
  height: all.OneOrMany<all.PatientHeightFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/familyName>
   **/
  familyName: all.OneOrMany<string>;

  /**
   * <https://schema.org/worksFor>
   **/
  worksFor: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/follows>
   **/
  follows: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/faxNumber>
   **/
  faxNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/contactPoint>
   **/
  contactPoint: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/honorificSuffix>
   **/
  honorificSuffix: all.OneOrMany<string>;

  /**
   * <https://schema.org/performerIn>
   **/
  performerIn: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/email>
   **/
  email: all.OneOrMany<string>;

  /**
   * <https://schema.org/workLocation>
   **/
  workLocation: all.OneOrMany<all.PatientWorkLocationFieldEnum>;

  /**
   * <https://schema.org/gender>
   **/
  gender: all.OneOrMany<all.PatientGenderFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.PatientMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PatientIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PatientDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PatientSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PatientAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PatientImageFieldEnum>;

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
  suggestedGender: all.OneOrMany<all.PatientSuggestedGenderFieldEnum>;

  /**
   * <https://schema.org/requiredMinAge>
   **/
  requiredMinAge: all.OneOrMany<number>;

  /**
   * <https://schema.org/suggestedMeasurement>
   **/
  suggestedMeasurement: all.OneOrMany<all.QuantitativeValue>;

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
}
