import type * as all from "./index";

/**
 * <https://schema.org/datePosted>
 **/
export type CDCPMDRecordDatePostedFieldEnum = string;

/**
 * <https://schema.org/cvdCollectionDate>
 **/
export type CDCPMDRecordCvdCollectionDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type CDCPMDRecordAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/CDCPMDRecord>
 **/
export interface CDCPMDRecord {
  "@context": string;
  "@type": "CDCPMDRecord";

  /**
   * <https://schema.org/cvdNumTotBeds>
   **/
  cvdNumTotBeds: all.OneOrMany<number>;

  /**
   * <https://schema.org/datePosted>
   **/
  datePosted: all.OneOrMany<all.CDCPMDRecordDatePostedFieldEnum>;

  /**
   * <https://schema.org/cvdFacilityCounty>
   **/
  cvdFacilityCounty: all.OneOrMany<string>;

  /**
   * <https://schema.org/cvdNumICUBedsOcc>
   **/
  cvdNumICUBedsOcc: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdFacilityId>
   **/
  cvdFacilityId: all.OneOrMany<string>;

  /**
   * <https://schema.org/cvdNumC19HospPats>
   **/
  cvdNumC19HospPats: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumBedsOcc>
   **/
  cvdNumBedsOcc: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumVentUse>
   **/
  cvdNumVentUse: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumBeds>
   **/
  cvdNumBeds: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumC19Died>
   **/
  cvdNumC19Died: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumICUBeds>
   **/
  cvdNumICUBeds: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumC19HOPats>
   **/
  cvdNumC19HOPats: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumC19OverflowPats>
   **/
  cvdNumC19OverflowPats: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdCollectionDate>
   **/
  cvdCollectionDate: all.OneOrMany<all.CDCPMDRecordCvdCollectionDateFieldEnum>;

  /**
   * <https://schema.org/cvdNumVent>
   **/
  cvdNumVent: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumC19OFMechVentPats>
   **/
  cvdNumC19OFMechVentPats: all.OneOrMany<number>;

  /**
   * <https://schema.org/cvdNumC19MechVentPats>
   **/
  cvdNumC19MechVentPats: all.OneOrMany<number>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.CDCPMDRecordMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.CDCPMDRecordIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.CDCPMDRecordDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.CDCPMDRecordSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.CDCPMDRecordAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.CDCPMDRecordImageFieldEnum>;
}
