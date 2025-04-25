import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type WarrantyPromiseAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/WarrantyPromise>
 **/
export interface WarrantyPromise {
  "@context": string;
  "@type": "WarrantyPromise";

  /**
   * <https://schema.org/warrantyScope>
   **/
  warrantyScope: all.OneOrMany<all.WarrantyScope>;

  /**
   * <https://schema.org/durationOfWarranty>
   **/
  durationOfWarranty: all.OneOrMany<all.QuantitativeValue>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.WarrantyPromiseMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.WarrantyPromiseIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.WarrantyPromiseDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.WarrantyPromiseSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.WarrantyPromiseAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.WarrantyPromiseImageFieldEnum>;
}
