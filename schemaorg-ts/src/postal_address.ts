import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type PostalAddressAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/PostalAddress>
 **/
export interface PostalAddress {
  "@context": string;
  "@type": "PostalAddress";

  /**
   * <https://schema.org/addressRegion>
   **/
  addressRegion: all.OneOrMany<string>;

  /**
   * <https://schema.org/streetAddress>
   **/
  streetAddress: all.OneOrMany<string>;

  /**
   * <https://schema.org/addressCountry>
   **/
  addressCountry: all.OneOrMany<all.PostalAddressAddressCountryFieldEnum>;

  /**
   * <https://schema.org/addressLocality>
   **/
  addressLocality: all.OneOrMany<string>;

  /**
   * <https://schema.org/postOfficeBoxNumber>
   **/
  postOfficeBoxNumber: all.OneOrMany<string>;

  /**
   * <https://schema.org/postalCode>
   **/
  postalCode: all.OneOrMany<string>;

  /**
   * <https://schema.org/telephone>
   **/
  telephone: all.OneOrMany<string>;

  /**
   * <https://schema.org/availableLanguage>
   **/
  availableLanguage: all.OneOrMany<all.PostalAddressAvailableLanguageFieldEnum>;

  /**
   * <https://schema.org/hoursAvailable>
   **/
  hoursAvailable: all.OneOrMany<all.OpeningHoursSpecification>;

  /**
   * <https://schema.org/contactType>
   **/
  contactType: all.OneOrMany<string>;

  /**
   * <https://schema.org/serviceArea>
   **/
  serviceArea: all.OneOrMany<all.PostalAddressServiceAreaFieldEnum>;

  /**
   * <https://schema.org/contactOption>
   **/
  contactOption: all.OneOrMany<all.ContactPointOptionEnum>;

  /**
   * <https://schema.org/productSupported>
   **/
  productSupported: all.OneOrMany<all.PostalAddressProductSupportedFieldEnum>;

  /**
   * <https://schema.org/areaServed>
   **/
  areaServed: all.OneOrMany<all.PostalAddressAreaServedFieldEnum>;

  /**
   * <https://schema.org/faxNumber>
   **/
  faxNumber: all.OneOrMany<string>;

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
  mainEntityOfPage: all.OneOrMany<all.PostalAddressMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.PostalAddressIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.PostalAddressDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.PostalAddressSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.PostalAddressAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.PostalAddressImageFieldEnum>;
}
