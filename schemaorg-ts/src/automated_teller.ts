import type * as all from "./index";

/**
 * <https://schema.org/feesAndCommissionsSpecification>
 **/
export type AutomatedTellerFeesAndCommissionsSpecificationFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type AutomatedTellerAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/AutomatedTeller>
 **/
export interface AutomatedTeller {
  "@context": string;
  "@type": "AutomatedTeller";

  /**
   * <https://schema.org/feesAndCommissionsSpecification>
   **/
  feesAndCommissionsSpecification: all.OneOrMany<all.AutomatedTellerFeesAndCommissionsSpecificationFieldEnum>;

  /**
   * <https://schema.org/branchOf>
   **/
  branchOf: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/openingHours>
   **/
  openingHours: all.OneOrMany<string>;

  /**
   * <https://schema.org/paymentAccepted>
   **/
  paymentAccepted: all.OneOrMany<string>;

  /**
   * <https://schema.org/priceRange>
   **/
  priceRange: all.OneOrMany<string>;

  /**
   * <https://schema.org/currenciesAccepted>
   **/
  currenciesAccepted: all.OneOrMany<string>;

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/unnamedSourcesPolicy>
   **/
  unnamedSourcesPolicy: all.OneOrMany<all.AutomatedTellerUnnamedSourcesPolicyFieldEnum>;

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
  skills: all.OneOrMany<all.AutomatedTellerSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.AutomatedTellerPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.AutomatedTellerKnowsAboutFieldEnum>;

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
  ownershipFundingInfo: all.OneOrMany<all.AutomatedTellerOwnershipFundingInfoFieldEnum>;

  /**
   * <https://schema.org/foundingLocation>
   **/
  foundingLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.AutomatedTellerServiceAreaFieldEnum>;

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
  keywords: all.OneOrMany<all.AutomatedTellerKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.AutomatedTellerLocationFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/diversityPolicy>
   **/
  diversityPolicy: all.OneOrMany<all.AutomatedTellerDiversityPolicyFieldEnum>;

  /**
   * <https://schema.org/foundingDate>
   **/
  foundingDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.AutomatedTellerLogoFieldEnum>;

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
  owns: all.OneOrMany<all.AutomatedTellerOwnsFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.AutomatedTellerBrandFieldEnum>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.AutomatedTellerKnowsLanguageFieldEnum>;

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
  funder: all.OneOrMany<all.AutomatedTellerFunderFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.AutomatedTellerAddressFieldEnum>;

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
  correctionsPolicy: all.OneOrMany<all.AutomatedTellerCorrectionsPolicyFieldEnum>;

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
  sponsor: all.OneOrMany<all.AutomatedTellerSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.AutomatedTellerMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/diversityStaffingReport>
   **/
  diversityStaffingReport: all.OneOrMany<all.AutomatedTellerDiversityStaffingReportFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/ethicsPolicy>
   **/
  ethicsPolicy: all.OneOrMany<all.AutomatedTellerEthicsPolicyFieldEnum>;

  /**
   * <https://schema.org/actionableFeedbackPolicy>
   **/
  actionableFeedbackPolicy: all.OneOrMany<all.AutomatedTellerActionableFeedbackPolicyFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.AutomatedTellerAreaServedFieldEnum>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.AutomatedTellerMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.AutomatedTellerMemberFieldEnum>;

  /**
   * <https://schema.org/dissolutionDate>
   **/
  dissolutionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.AutomatedTellerAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/founder>
   **/
  founder: all.OneOrMany<all.AutomatedTellerFounderFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.AutomatedTellerMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.AutomatedTellerIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.AutomatedTellerDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.AutomatedTellerSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.AutomatedTellerAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.AutomatedTellerImageFieldEnum>;

  /**
   * <https://schema.org/photos>
   **/
  photos: all.OneOrMany<all.AutomatedTellerPhotosFieldEnum>;

  /**
   * <https://schema.org/tourBookingPage>
   **/
  tourBookingPage: all.OneOrMany<string>;

  /**
   * <https://schema.org/containedInPlace>
   **/
  containedInPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/geoIntersects>
   **/
  geoIntersects: all.OneOrMany<all.AutomatedTellerGeoIntersectsFieldEnum>;

  /**
   * <https://schema.org/containsPlace>
   **/
  containsPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/geoOverlaps>
   **/
  geoOverlaps: all.OneOrMany<all.AutomatedTellerGeoOverlapsFieldEnum>;

  /**
   * <https://schema.org/geoCrosses>
   **/
  geoCrosses: all.OneOrMany<all.AutomatedTellerGeoCrossesFieldEnum>;

  /**
   * <https://schema.org/hasDriveThroughService>
   **/
  hasDriveThroughService: all.OneOrMany<string>;

  /**
   * <https://schema.org/maximumAttendeeCapacity>
   **/
  maximumAttendeeCapacity: all.OneOrMany<number>;

  /**
   * <https://schema.org/specialOpeningHoursSpecification>
   **/
  specialOpeningHoursSpecification: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/containedIn>
   **/
  containedIn: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/geoCoveredBy>
   **/
  geoCoveredBy: all.OneOrMany<all.AutomatedTellerGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/maps>
   **/
  maps: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.AutomatedTellerGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geo>
   **/
  geo: all.OneOrMany<all.AutomatedTellerGeoFieldEnum>;

  /**
   * <https://schema.org/publicAccess>
   **/
  publicAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.AutomatedTellerLatitudeFieldEnum>;

  /**
   * <https://schema.org/map>
   **/
  map: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMap>
   **/
  hasMap: all.OneOrMany<all.AutomatedTellerHasMapFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.AutomatedTellerGeoTouchesFieldEnum>;

  /**
   * <https://schema.org/amenityFeature>
   **/
  amenityFeature: all.OneOrMany<all.LocationFeatureSpecification>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/geoWithin>
   **/
  geoWithin: all.OneOrMany<all.AutomatedTellerGeoWithinFieldEnum>;

  /**
   * <https://schema.org/smokingAllowed>
   **/
  smokingAllowed: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.AutomatedTellerLongitudeFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.AutomatedTellerGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.AutomatedTellerGeoCoversFieldEnum>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/photo>
   **/
  photo: all.OneOrMany<all.AutomatedTellerPhotoFieldEnum>;

  /**
   * <https://schema.org/branchCode>
   **/
  branchCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/openingHoursSpecification>
   **/
  openingHoursSpecification: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/geoEquals>
   **/
  geoEquals: all.OneOrMany<all.AutomatedTellerGeoEqualsFieldEnum>;
}
