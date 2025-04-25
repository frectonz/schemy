import type * as all from "./index";

/**
 * <https://schema.org/availabilityStarts>
 **/
export type ActionAccessSpecificationAvailabilityStartsFieldEnum = string;

/**
 * <https://schema.org/availabilityEnds>
 **/
export type ActionAccessSpecificationAvailabilityEndsFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type ActionAccessSpecificationAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/ActionAccessSpecification>
 **/
export interface ActionAccessSpecification {
  "@context": string;
  "@type": "ActionAccessSpecification";

  /**
   * <https://schema.org/expectsAcceptanceOf>
   **/
  expectsAcceptanceOf: all.OneOrMany<all.Offer>;

  /**
   * <https://schema.org/eligibleRegion>
   **/
  eligibleRegion: all.OneOrMany<all.ActionAccessSpecificationEligibleRegionFieldEnum>;

  /**
   * <https://schema.org/availabilityStarts>
   **/
  availabilityStarts: all.OneOrMany<all.ActionAccessSpecificationAvailabilityStartsFieldEnum>;

  /**
   * <https://schema.org/requiresSubscription>
   **/
  requiresSubscription: all.OneOrMany<all.ActionAccessSpecificationRequiresSubscriptionFieldEnum>;

  /**
   * <https://schema.org/category>
   **/
  category: all.OneOrMany<all.ActionAccessSpecificationCategoryFieldEnum>;

  /**
   * <https://schema.org/ineligibleRegion>
   **/
  ineligibleRegion: all.OneOrMany<all.ActionAccessSpecificationIneligibleRegionFieldEnum>;

  /**
   * <https://schema.org/availabilityEnds>
   **/
  availabilityEnds: all.OneOrMany<all.ActionAccessSpecificationAvailabilityEndsFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.ActionAccessSpecificationMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.ActionAccessSpecificationIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.ActionAccessSpecificationDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.ActionAccessSpecificationSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.ActionAccessSpecificationAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.ActionAccessSpecificationImageFieldEnum>;
}
