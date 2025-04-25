import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type ConsortiumAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Consortium>
 **/
export interface Consortium {
  "@context": string;
  "@type": "Consortium";

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/unnamedSourcesPolicy>
   **/
  unnamedSourcesPolicy: all.OneOrMany<all.ConsortiumUnnamedSourcesPolicyFieldEnum>;

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
  skills: all.OneOrMany<all.ConsortiumSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.ConsortiumPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.ConsortiumKnowsAboutFieldEnum>;

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
  ownershipFundingInfo: all.OneOrMany<all.ConsortiumOwnershipFundingInfoFieldEnum>;

  /**
   * <https://schema.org/foundingLocation>
   **/
  foundingLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.ConsortiumServiceAreaFieldEnum>;

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
  keywords: all.OneOrMany<all.ConsortiumKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.ConsortiumLocationFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/diversityPolicy>
   **/
  diversityPolicy: all.OneOrMany<all.ConsortiumDiversityPolicyFieldEnum>;

  /**
   * <https://schema.org/foundingDate>
   **/
  foundingDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.ConsortiumLogoFieldEnum>;

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
  owns: all.OneOrMany<all.ConsortiumOwnsFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.ConsortiumBrandFieldEnum>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.ConsortiumKnowsLanguageFieldEnum>;

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
  funder: all.OneOrMany<all.ConsortiumFunderFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.ConsortiumAddressFieldEnum>;

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
  correctionsPolicy: all.OneOrMany<all.ConsortiumCorrectionsPolicyFieldEnum>;

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
  sponsor: all.OneOrMany<all.ConsortiumSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.ConsortiumMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/diversityStaffingReport>
   **/
  diversityStaffingReport: all.OneOrMany<all.ConsortiumDiversityStaffingReportFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/ethicsPolicy>
   **/
  ethicsPolicy: all.OneOrMany<all.ConsortiumEthicsPolicyFieldEnum>;

  /**
   * <https://schema.org/actionableFeedbackPolicy>
   **/
  actionableFeedbackPolicy: all.OneOrMany<all.ConsortiumActionableFeedbackPolicyFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.ConsortiumAreaServedFieldEnum>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.ConsortiumMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.ConsortiumMemberFieldEnum>;

  /**
   * <https://schema.org/dissolutionDate>
   **/
  dissolutionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.ConsortiumAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/founder>
   **/
  founder: all.OneOrMany<all.ConsortiumFounderFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.ConsortiumMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ConsortiumIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ConsortiumDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ConsortiumSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ConsortiumAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ConsortiumImageFieldEnum>;
}
