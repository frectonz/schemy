import type * as all from "./index";

/**
 * <https://schema.org/sport>
 **/
export type SportsOrganizationSportFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type SportsOrganizationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/SportsOrganization>
 **/
export interface SportsOrganization {
  "@context": string;
  "@type": "SportsOrganization";

  /**
   * <https://schema.org/sport>
   **/
  sport: all.OneOrMany<all.SportsOrganizationSportFieldEnum>;

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/unnamedSourcesPolicy>
   **/
  unnamedSourcesPolicy: all.OneOrMany<all.SportsOrganizationUnnamedSourcesPolicyFieldEnum>;

  /**
   * <https://schema.org/isicV4>
   **/
  isicV4: all.OneOrMany<string>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/skills>
   **/
  skills: all.OneOrMany<all.SportsOrganizationSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.SportsOrganizationPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.SportsOrganizationKnowsAboutFieldEnum>;

  /**
   * <https://schema.org/telephone>
   **/
  telephone: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMerchantReturnPolicy>
   **/
  hasMerchantReturnPolicy: all.OneOrMany<all.MerchantReturnPolicy>;

  /**
   * <https://schema.org/numberOfEmployees>
   **/
  numberOfEmployees: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/employees>
   **/
  employees: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/hasGS1DigitalLink>
   **/
  hasGS1DigitalLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/ownershipFundingInfo>
   **/
  ownershipFundingInfo: all.OneOrMany<all.SportsOrganizationOwnershipFundingInfoFieldEnum>;

  /**
   * <https://schema.org/foundingLocation>
   **/
  foundingLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.SportsOrganizationServiceAreaFieldEnum>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/seeks>
   **/
  seeks: all.OneOrMany<all.Demand>;

  /**
   * <https://schema.org/nonprofitStatus>
   **/
  nonprofitStatus: all.OneOrMany<all.NonprofitType>;

  /**
   * <https://schema.org/parentOrganization>
   **/
  parentOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/leiCode>
   **/
  leiCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasCredential>
   **/
  hasCredential: all.OneOrMany<all.EducationalOccupationalCredential>;

  /**
   * <https://schema.org/founders>
   **/
  founders: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.SportsOrganizationKeywordsFieldEnum>;

  /**
   * <https://schema.org/vatID>
   **/
  vatID: all.OneOrMany<string>;

  /**
   * <https://schema.org/taxID>
   **/
  taxID: all.OneOrMany<string>;

  /**
   * <https://schema.org/location>
   **/
  location: all.OneOrMany<all.SportsOrganizationLocationFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/diversityPolicy>
   **/
  diversityPolicy: all.OneOrMany<all.SportsOrganizationDiversityPolicyFieldEnum>;

  /**
   * <https://schema.org/foundingDate>
   **/
  foundingDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.SportsOrganizationLogoFieldEnum>;

  /**
   * <https://schema.org/employee>
   **/
  employee: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/contactPoints>
   **/
  contactPoints: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/legalName>
   **/
  legalName: all.OneOrMany<string>;

  /**
   * <https://schema.org/alumni>
   **/
  alumni: all.OneOrMany<all.Person>;

  /**
   * <https://schema.org/naics>
   **/
  naics: all.OneOrMany<string>;

  /**
   * <https://schema.org/owns>
   **/
  owns: all.OneOrMany<all.SportsOrganizationOwnsFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.SportsOrganizationBrandFieldEnum>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.SportsOrganizationKnowsLanguageFieldEnum>;

  /**
   * <https://schema.org/awards>
   **/
  awards: all.OneOrMany<string>;

  /**
   * <https://schema.org/agentInteractionStatistic>
   **/
  agentInteractionStatistic: all.OneOrMany<all.InteractionCounter>;

  /**
   * <https://schema.org/iso6523Code>
   **/
  iso6523Code: all.OneOrMany<string>;

  /**
   * <https://schema.org/funder>
   **/
  funder: all.OneOrMany<all.SportsOrganizationFunderFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.SportsOrganizationAddressFieldEnum>;

  /**
   * <https://schema.org/slogan>
   **/
  slogan: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMemberProgram>
   **/
  hasMemberProgram: all.OneOrMany<all.MemberProgram>;

  /**
   * <https://schema.org/correctionsPolicy>
   **/
  correctionsPolicy: all.OneOrMany<all.SportsOrganizationCorrectionsPolicyFieldEnum>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/interactionStatistic>
   **/
  interactionStatistic: all.OneOrMany<all.InteractionCounter>;

  /**
   * <https://schema.org/globalLocationNumber>
   **/
  globalLocationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/makesOffer>
   **/
  makesOffer: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/department>
   **/
  department: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/sponsor>
   **/
  sponsor: all.OneOrMany<all.SportsOrganizationSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.SportsOrganizationMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/diversityStaffingReport>
   **/
  diversityStaffingReport: all.OneOrMany<all.SportsOrganizationDiversityStaffingReportFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/ethicsPolicy>
   **/
  ethicsPolicy: all.OneOrMany<all.SportsOrganizationEthicsPolicyFieldEnum>;

  /**
   * <https://schema.org/actionableFeedbackPolicy>
   **/
  actionableFeedbackPolicy: all.OneOrMany<all.SportsOrganizationActionableFeedbackPolicyFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.SportsOrganizationAreaServedFieldEnum>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.SportsOrganizationMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.SportsOrganizationMemberFieldEnum>;

  /**
   * <https://schema.org/dissolutionDate>
   **/
  dissolutionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.SportsOrganizationAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/founder>
   **/
  founder: all.OneOrMany<all.SportsOrganizationFounderFieldEnum>;

  /**
   * <https://schema.org/faxNumber>
   **/
  faxNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/contactPoint>
   **/
  contactPoint: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/subOrganization>
   **/
  subOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/events>
   **/
  events: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/hasShippingService>
   **/
  hasShippingService: all.OneOrMany<all.ShippingService>;

  /**
   * <https://schema.org/email>
   **/
  email: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.SportsOrganizationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.SportsOrganizationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.SportsOrganizationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.SportsOrganizationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.SportsOrganizationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.SportsOrganizationImageFieldEnum>;
}
