import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type HospitalAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Hospital>
 **/
export interface Hospital {
  "@context": string;
  "@type": "Hospital";

  /**
   * <https://schema.org/availableService>
   **/
  availableService: all.OneOrMany<all.HospitalAvailableServiceFieldEnum>;

  /**
   * <https://schema.org/healthcareReportingData>
   **/
  healthcareReportingData: all.OneOrMany<all.HospitalHealthcareReportingDataFieldEnum>;

  /**
   * <https://schema.org/medicalSpecialty>
   **/
  medicalSpecialty: all.OneOrMany<all.MedicalSpecialtyEnum>;

  /**
   * <https://schema.org/openingHours>
   **/
  openingHours: all.OneOrMany<string>;

  /**
   * <https://schema.org/event>
   **/
  event: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/isicV4>
   **/
  isicV4: all.OneOrMany<string>;

  /**
   * <https://schema.org/photos>
   **/
  photos: all.OneOrMany<all.HospitalPhotosFieldEnum>;

  /**
   * <https://schema.org/aggregateRating>
   **/
  aggregateRating: all.OneOrMany<all.AggregateRating>;

  /**
   * <https://schema.org/tourBookingPage>
   **/
  tourBookingPage: all.OneOrMany<string>;

  /**
   * <https://schema.org/containedInPlace>
   **/
  containedInPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/hasCertification>
   **/
  hasCertification: all.OneOrMany<all.Certification>;

  /**
   * <https://schema.org/geoIntersects>
   **/
  geoIntersects: all.OneOrMany<all.HospitalGeoIntersectsFieldEnum>;

  /**
   * <https://schema.org/containsPlace>
   **/
  containsPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/telephone>
   **/
  telephone: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoOverlaps>
   **/
  geoOverlaps: all.OneOrMany<all.HospitalGeoOverlapsFieldEnum>;

  /**
   * <https://schema.org/hasGS1DigitalLink>
   **/
  hasGS1DigitalLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/reviews>
   **/
  reviews: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/geoCrosses>
   **/
  geoCrosses: all.OneOrMany<all.HospitalGeoCrossesFieldEnum>;

  /**
   * <https://schema.org/keywords>
   **/
  keywords: all.OneOrMany<all.HospitalKeywordsFieldEnum>;

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
  geoCoveredBy: all.OneOrMany<all.HospitalGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/maps>
   **/
  maps: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.HospitalLogoFieldEnum>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.HospitalGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geo>
   **/
  geo: all.OneOrMany<all.HospitalGeoFieldEnum>;

  /**
   * <https://schema.org/publicAccess>
   **/
  publicAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.HospitalLatitudeFieldEnum>;

  /**
   * <https://schema.org/map>
   **/
  map: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMap>
   **/
  hasMap: all.OneOrMany<all.HospitalHasMapFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.HospitalGeoTouchesFieldEnum>;

  /**
   * <https://schema.org/amenityFeature>
   **/
  amenityFeature: all.OneOrMany<all.LocationFeatureSpecification>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.HospitalAddressFieldEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/slogan>
   **/
  slogan: all.OneOrMany<string>;

  /**
   * <https://schema.org/review>
   **/
  review: all.OneOrMany<all.Review>;

  /**
   * <https://schema.org/globalLocationNumber>
   **/
  globalLocationNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoWithin>
   **/
  geoWithin: all.OneOrMany<all.HospitalGeoWithinFieldEnum>;

  /**
   * <https://schema.org/smokingAllowed>
   **/
  smokingAllowed: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.HospitalLongitudeFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.HospitalGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.HospitalGeoCoversFieldEnum>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/photo>
   **/
  photo: all.OneOrMany<all.HospitalPhotoFieldEnum>;

  /**
   * <https://schema.org/faxNumber>
   **/
  faxNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/branchCode>
   **/
  branchCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/openingHoursSpecification>
   **/
  openingHoursSpecification: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/events>
   **/
  events: all.OneOrMany<all.Event>;

  /**
   * <https://schema.org/geoEquals>
   **/
  geoEquals: all.OneOrMany<all.HospitalGeoEqualsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.HospitalMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.HospitalIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.HospitalDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.HospitalSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.HospitalAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.HospitalImageFieldEnum>;

  /**
   * <https://schema.org/isAcceptingNewPatients>
   **/
  isAcceptingNewPatients: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanNetworkId>
   **/
  healthPlanNetworkId: all.OneOrMany<string>;

  /**
   * <https://schema.org/unnamedSourcesPolicy>
   **/
  unnamedSourcesPolicy: all.OneOrMany<all.HospitalUnnamedSourcesPolicyFieldEnum>;

  /**
   * <https://schema.org/skills>
   **/
  skills: all.OneOrMany<all.HospitalSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.HospitalPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.HospitalKnowsAboutFieldEnum>;

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
   * <https://schema.org/ownershipFundingInfo>
   **/
  ownershipFundingInfo: all.OneOrMany<all.HospitalOwnershipFundingInfoFieldEnum>;

  /**
   * <https://schema.org/foundingLocation>
   **/
  foundingLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.HospitalServiceAreaFieldEnum>;

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
  location: all.OneOrMany<all.HospitalLocationFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/diversityPolicy>
   **/
  diversityPolicy: all.OneOrMany<all.HospitalDiversityPolicyFieldEnum>;

  /**
   * <https://schema.org/foundingDate>
   **/
  foundingDate: all.OneOrMany<string>;

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
  owns: all.OneOrMany<all.HospitalOwnsFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.HospitalBrandFieldEnum>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.HospitalKnowsLanguageFieldEnum>;

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
  funder: all.OneOrMany<all.HospitalFunderFieldEnum>;

  /**
   * <https://schema.org/hasMemberProgram>
   **/
  hasMemberProgram: all.OneOrMany<all.MemberProgram>;

  /**
   * <https://schema.org/correctionsPolicy>
   **/
  correctionsPolicy: all.OneOrMany<all.HospitalCorrectionsPolicyFieldEnum>;

  /**
   * <https://schema.org/interactionStatistic>
   **/
  interactionStatistic: all.OneOrMany<all.InteractionCounter>;

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
  sponsor: all.OneOrMany<all.HospitalSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.HospitalMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/diversityStaffingReport>
   **/
  diversityStaffingReport: all.OneOrMany<all.HospitalDiversityStaffingReportFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/ethicsPolicy>
   **/
  ethicsPolicy: all.OneOrMany<all.HospitalEthicsPolicyFieldEnum>;

  /**
   * <https://schema.org/actionableFeedbackPolicy>
   **/
  actionableFeedbackPolicy: all.OneOrMany<all.HospitalActionableFeedbackPolicyFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.HospitalAreaServedFieldEnum>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.HospitalMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.HospitalMemberFieldEnum>;

  /**
   * <https://schema.org/dissolutionDate>
   **/
  dissolutionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.HospitalAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/founder>
   **/
  founder: all.OneOrMany<all.HospitalFounderFieldEnum>;

  /**
   * <https://schema.org/contactPoint>
   **/
  contactPoint: all.OneOrMany<all.ContactPoint>;

  /**
   * <https://schema.org/subOrganization>
   **/
  subOrganization: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/hasShippingService>
   **/
  hasShippingService: all.OneOrMany<all.ShippingService>;

  /**
   * <https://schema.org/email>
   **/
  email: all.OneOrMany<string>;

  /**
   * <https://schema.org/branchOf>
   **/
  branchOf: all.OneOrMany<all.Organization>;

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
}
