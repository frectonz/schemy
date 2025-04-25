import type * as all from "./index";

/**
 * <https://schema.org/validFrom>
 **/
export type PermitValidFromFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type PermitAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/Permit>
 **/
export interface Permit {
  "@context": string;
  "@type": "Permit";

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
  validFrom: all.OneOrMany<all.PermitValidFromFieldEnum>;

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
  mainEntityOfPage: all.OneOrMany<all.PermitMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PermitIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PermitDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PermitSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PermitAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PermitImageFieldEnum>;
}
