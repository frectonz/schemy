import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type MerchantReturnPolicyAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/MerchantReturnPolicy>
 **/
export interface MerchantReturnPolicy {
  "@context": string;
  "@type": "MerchantReturnPolicy";

  /**
   * <https://schema.org/itemDefectReturnLabelSource>
   **/
  itemDefectReturnLabelSource: all.OneOrMany<all.ReturnLabelSourceEnumerationEnum>;

  /**
   * <https://schema.org/returnPolicyCountry>
   **/
  returnPolicyCountry: all.OneOrMany<all.MerchantReturnPolicyReturnPolicyCountryFieldEnum>;

  /**
   * <https://schema.org/customerRemorseReturnLabelSource>
   **/
  customerRemorseReturnLabelSource: all.OneOrMany<all.ReturnLabelSourceEnumerationEnum>;

  /**
   * <https://schema.org/validForMemberTier>
   **/
  validForMemberTier: all.OneOrMany<all.MemberProgramTier>;

  /**
   * <https://schema.org/returnShippingFeesAmount>
   **/
  returnShippingFeesAmount: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/customerRemorseReturnShippingFeesAmount>
   **/
  customerRemorseReturnShippingFeesAmount: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/returnFees>
   **/
  returnFees: all.OneOrMany<all.ReturnFeesEnumerationEnum>;

  /**
   * <https://schema.org/inStoreReturnsOffered>
   **/
  inStoreReturnsOffered: all.OneOrMany<string>;

  /**
   * <https://schema.org/returnLabelSource>
   **/
  returnLabelSource: all.OneOrMany<all.ReturnLabelSourceEnumerationEnum>;

  /**
   * <https://schema.org/merchantReturnDays>
   **/
  merchantReturnDays: all.OneOrMany<all.MerchantReturnPolicyMerchantReturnDaysFieldEnum>;

  /**
   * <https://schema.org/returnMethod>
   **/
  returnMethod: all.OneOrMany<all.ReturnMethodEnumerationEnum>;

  /**
   * <https://schema.org/customerRemorseReturnFees>
   **/
  customerRemorseReturnFees: all.OneOrMany<all.ReturnFeesEnumerationEnum>;

  /**
   * <https://schema.org/returnPolicyCategory>
   **/
  returnPolicyCategory: all.OneOrMany<all.MerchantReturnEnumerationEnum>;

  /**
   * <https://schema.org/merchantReturnLink>
   **/
  merchantReturnLink: all.OneOrMany<string>;

  /**
   * <https://schema.org/itemDefectReturnFees>
   **/
  itemDefectReturnFees: all.OneOrMany<all.ReturnFeesEnumerationEnum>;

  /**
   * <https://schema.org/additionalProperty>
   **/
  additionalProperty: all.OneOrMany<all.PropertyValue>;

  /**
   * <https://schema.org/itemCondition>
   **/
  itemCondition: all.OneOrMany<all.OfferItemConditionEnum>;

  /**
   * <https://schema.org/itemDefectReturnShippingFeesAmount>
   **/
  itemDefectReturnShippingFeesAmount: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/returnPolicySeasonalOverride>
   **/
  returnPolicySeasonalOverride: all.OneOrMany<all.MerchantReturnPolicySeasonalOverride>;

  /**
   * <https://schema.org/refundType>
   **/
  refundType: all.OneOrMany<all.RefundTypeEnumerationEnum>;

  /**
   * <https://schema.org/applicableCountry>
   **/
  applicableCountry: all.OneOrMany<all.MerchantReturnPolicyApplicableCountryFieldEnum>;

  /**
   * <https://schema.org/restockingFee>
   **/
  restockingFee: all.OneOrMany<all.MerchantReturnPolicyRestockingFeeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MerchantReturnPolicyMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MerchantReturnPolicyIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MerchantReturnPolicyDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MerchantReturnPolicySubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MerchantReturnPolicyAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MerchantReturnPolicyImageFieldEnum>;
}
