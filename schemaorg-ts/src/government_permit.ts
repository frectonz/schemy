import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type GovernmentPermitValidFromFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type GovernmentPermitAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/GovernmentPermit>
 **/
export interface GovernmentPermit {
  "@context": string;
  "@type": "GovernmentPermit";

  /**
   * <https://schema.org/issuedThrough>
   **/
  issuedThrough: all.OneOrMany<all.Service>;

  /**
   * <https://schema.org/validFor>
   **/
  validFor: all.OneOrMany<all.Duration>;

  /**
   * <https://schema.org/validFrom>
   **/
  validFrom: all.OneOrMany<all.GovernmentPermitValidFromFieldEnum>;

  /**
   * <https://schema.org/validIn>
   **/
  validIn: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/validUntil>
   **/
  validUntil: all.OneOrMany<string>;

  /**
   * <https://schema.org/issuedBy>
   **/
  issuedBy: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/permitAudience>
   **/
  permitAudience: all.OneOrMany<all.Audience>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.GovernmentPermitMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.GovernmentPermitIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.GovernmentPermitDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.GovernmentPermitSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.GovernmentPermitAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.GovernmentPermitImageFieldEnum>;
}
