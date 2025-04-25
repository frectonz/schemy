import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type IndividualPhysicianAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/IndividualPhysician>
 **/
export interface IndividualPhysician {
  "@context": string;
  "@type": "IndividualPhysician";

  /**
   * <https://schema.org/practicesAt>
   **/
  practicesAt: all.OneOrMany<all.MedicalOrganization>;

  /**
   * <https://schema.org/availableService>
   **/
  availableService: all.OneOrMany<all.IndividualPhysicianAvailableServiceFieldEnum>;

  /**
   * <https://schema.org/hospitalAffiliation>
   **/
  hospitalAffiliation: all.OneOrMany<all.Hospital>;

  /**
   * <https://schema.org/medicalSpecialty>
   **/
  medicalSpecialty: all.OneOrMany<all.MedicalSpecialtyEnum>;

  /**
   * <https://schema.org/occupationalCategory>
   **/
  occupationalCategory: all.OneOrMany<all.IndividualPhysicianOccupationalCategoryFieldEnum>;

  /**
   * <https://schema.org/usNPI>
   **/
  usNPI: all.OneOrMany<string>;

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
  unnamedSourcesPolicy: all.OneOrMany<all.IndividualPhysicianUnnamedSourcesPolicyFieldEnum>;

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
  skills: all.OneOrMany<all.IndividualPhysicianSkillsFieldEnum>;

  /**
   * <https://schema.org/publishingPrinciples>
   **/
  publishingPrinciples: all.OneOrMany<all.IndividualPhysicianPublishingPrinciplesFieldEnum>;

  /**
   * <https://schema.org/hasPOS>
   **/
  hasPOS: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/knowsAbout>
   **/
  knowsAbout: all.OneOrMany<all.IndividualPhysicianKnowsAboutFieldEnum>;

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
  ownershipFundingInfo: all.OneOrMany<all.IndividualPhysicianOwnershipFundingInfoFieldEnum>;

  /**
   * <https://schema.org/foundingLocation>
   **/
  foundingLocation: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.IndividualPhysicianServiceAreaFieldEnum>;

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
  keywords: all.OneOrMany<all.IndividualPhysicianKeywordsFieldEnum>;

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
  location: all.OneOrMany<all.IndividualPhysicianLocationFieldEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/diversityPolicy>
   **/
  diversityPolicy: all.OneOrMany<all.IndividualPhysicianDiversityPolicyFieldEnum>;

  /**
   * <https://schema.org/foundingDate>
   **/
  foundingDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/logo>
   **/
  logo: all.OneOrMany<all.IndividualPhysicianLogoFieldEnum>;

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
  owns: all.OneOrMany<all.IndividualPhysicianOwnsFieldEnum>;

  /**
   * <https://schema.org/award>
   **/
  award: all.OneOrMany<string>;

  /**
   * <https://schema.org/brand>
   **/
  brand: all.OneOrMany<all.IndividualPhysicianBrandFieldEnum>;

  /**
   * <https://schema.org/knowsLanguage>
   **/
  knowsLanguage: all.OneOrMany<all.IndividualPhysicianKnowsLanguageFieldEnum>;

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
  funder: all.OneOrMany<all.IndividualPhysicianFunderFieldEnum>;

  /**
   * <https://schema.org/address>
   **/
  address: all.OneOrMany<all.IndividualPhysicianAddressFieldEnum>;

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
  correctionsPolicy: all.OneOrMany<all.IndividualPhysicianCorrectionsPolicyFieldEnum>;

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
  sponsor: all.OneOrMany<all.IndividualPhysicianSponsorFieldEnum>;

  /**
   * <https://schema.org/memberOf>
   **/
  memberOf: all.OneOrMany<all.IndividualPhysicianMemberOfFieldEnum>;

  /**
   * <https://schema.org/hasOfferCatalog>
   **/
  hasOfferCatalog: all.OneOrMany<all.OfferCatalog>;

  /**
   * <https://schema.org/diversityStaffingReport>
   **/
  diversityStaffingReport: all.OneOrMany<all.IndividualPhysicianDiversityStaffingReportFieldEnum>;

  /**
   * <https://schema.org/duns>
   **/
  duns: all.OneOrMany<string>;

  /**
   * <https://schema.org/ethicsPolicy>
   **/
  ethicsPolicy: all.OneOrMany<all.IndividualPhysicianEthicsPolicyFieldEnum>;

  /**
   * <https://schema.org/actionableFeedbackPolicy>
   **/
  actionableFeedbackPolicy: all.OneOrMany<all.IndividualPhysicianActionableFeedbackPolicyFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.IndividualPhysicianAreaServedFieldEnum>;

  /**
   * <https://schema.org/members>
   **/
  members: all.OneOrMany<all.IndividualPhysicianMembersFieldEnum>;

  /**
   * <https://schema.org/member>
   **/
  member: all.OneOrMany<all.IndividualPhysicianMemberFieldEnum>;

  /**
   * <https://schema.org/dissolutionDate>
   **/
  dissolutionDate: all.OneOrMany<string>;

  /**
   * <https://schema.org/acceptedPaymentMethod>
   **/
  acceptedPaymentMethod: all.OneOrMany<all.IndividualPhysicianAcceptedPaymentMethodFieldEnum>;

  /**
   * <https://schema.org/founder>
   **/
  founder: all.OneOrMany<all.IndividualPhysicianFounderFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.IndividualPhysicianMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.IndividualPhysicianIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.IndividualPhysicianDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.IndividualPhysicianSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.IndividualPhysicianAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.IndividualPhysicianImageFieldEnum>;

  /**
   * <https://schema.org/photos>
   **/
  photos: all.OneOrMany<all.IndividualPhysicianPhotosFieldEnum>;

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
  geoIntersects: all.OneOrMany<all.IndividualPhysicianGeoIntersectsFieldEnum>;

  /**
   * <https://schema.org/containsPlace>
   **/
  containsPlace: all.OneOrMany<all.Place>;

  /**
   * <https://schema.org/geoOverlaps>
   **/
  geoOverlaps: all.OneOrMany<all.IndividualPhysicianGeoOverlapsFieldEnum>;

  /**
   * <https://schema.org/geoCrosses>
   **/
  geoCrosses: all.OneOrMany<all.IndividualPhysicianGeoCrossesFieldEnum>;

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
  geoCoveredBy: all.OneOrMany<all.IndividualPhysicianGeoCoveredByFieldEnum>;

  /**
   * <https://schema.org/maps>
   **/
  maps: all.OneOrMany<string>;

  /**
   * <https://schema.org/geoContains>
   **/
  geoContains: all.OneOrMany<all.IndividualPhysicianGeoContainsFieldEnum>;

  /**
   * <https://schema.org/geo>
   **/
  geo: all.OneOrMany<all.IndividualPhysicianGeoFieldEnum>;

  /**
   * <https://schema.org/publicAccess>
   **/
  publicAccess: all.OneOrMany<string>;

  /**
   * <https://schema.org/latitude>
   **/
  latitude: all.OneOrMany<all.IndividualPhysicianLatitudeFieldEnum>;

  /**
   * <https://schema.org/map>
   **/
  map: all.OneOrMany<string>;

  /**
   * <https://schema.org/hasMap>
   **/
  hasMap: all.OneOrMany<all.IndividualPhysicianHasMapFieldEnum>;

  /**
   * <https://schema.org/geoTouches>
   **/
  geoTouches: all.OneOrMany<all.IndividualPhysicianGeoTouchesFieldEnum>;

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
  geoWithin: all.OneOrMany<all.IndividualPhysicianGeoWithinFieldEnum>;

  /**
   * <https://schema.org/smokingAllowed>
   **/
  smokingAllowed: all.OneOrMany<string>;

  /**
   * <https://schema.org/longitude>
   **/
  longitude: all.OneOrMany<all.IndividualPhysicianLongitudeFieldEnum>;

  /**
   * <https://schema.org/geoDisjoint>
   **/
  geoDisjoint: all.OneOrMany<all.IndividualPhysicianGeoDisjointFieldEnum>;

  /**
   * <https://schema.org/geoCovers>
   **/
  geoCovers: all.OneOrMany<all.IndividualPhysicianGeoCoversFieldEnum>;

  /**
   * <https://schema.org/isAccessibleForFree>
   **/
  isAccessibleForFree: all.OneOrMany<string>;

  /**
   * <https://schema.org/photo>
   **/
  photo: all.OneOrMany<all.IndividualPhysicianPhotoFieldEnum>;

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
  geoEquals: all.OneOrMany<all.IndividualPhysicianGeoEqualsFieldEnum>;

  /**
   * <https://schema.org/isAcceptingNewPatients>
   **/
  isAcceptingNewPatients: all.OneOrMany<string>;

  /**
   * <https://schema.org/healthPlanNetworkId>
   **/
  healthPlanNetworkId: all.OneOrMany<string>;
}
