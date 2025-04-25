import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type AlignmentObjectAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/AlignmentObject>
 **/
export interface AlignmentObject {
  "@context": string;
  "@type": "AlignmentObject";

  /**
   * <https://schema.org/educationalFramework>
   **/
  educationalFramework: all.OneOrMany<string>;

  /**
   * <https://schema.org/targetName>
   **/
  targetName: all.OneOrMany<string>;

  /**
   * <https://schema.org/targetUrl>
   **/
  targetUrl: all.OneOrMany<string>;

  /**
   * <https://schema.org/alignmentType>
   **/
  alignmentType: all.OneOrMany<string>;

  /**
   * <https://schema.org/targetDescription>
   **/
  targetDescription: all.OneOrMany<string>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.AlignmentObjectMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.AlignmentObjectIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.AlignmentObjectDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.AlignmentObjectSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.AlignmentObjectAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.AlignmentObjectImageFieldEnum>;
}
