import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DigitalDocumentPermissionAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DigitalDocumentPermission>
 **/
export interface DigitalDocumentPermission {
  "@context": string;
  "@type": "DigitalDocumentPermission";

  /**
   * <https://schema.org/grantee>
   **/
  grantee: all.OneOrMany<all.DigitalDocumentPermissionGranteeFieldEnum>;

  /**
   * <https://schema.org/permissionType>
   **/
  permissionType: all.OneOrMany<all.DigitalDocumentPermissionTypeEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DigitalDocumentPermissionMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DigitalDocumentPermissionIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DigitalDocumentPermissionDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DigitalDocumentPermissionSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DigitalDocumentPermissionAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DigitalDocumentPermissionImageFieldEnum>;
}
