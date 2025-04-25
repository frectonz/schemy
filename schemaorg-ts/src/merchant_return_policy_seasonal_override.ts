import type * as all from "./index";

/**
 * <https://schema.org/endDate>
 **/
export type MerchantReturnPolicySeasonalOverrideEndDateFieldEnum = string;

/**
 * <https://schema.org/startDate>
 **/
export type MerchantReturnPolicySeasonalOverrideStartDateFieldEnum = string;

/**
 * <https://schema.org/additionalType>
 **/
export type MerchantReturnPolicySeasonalOverrideAdditionalTypeFieldEnum =
  string;

/**
 * <https://schema.org/MerchantReturnPolicySeasonalOverride>
 **/
export interface MerchantReturnPolicySeasonalOverride {
  "@context": string;
  "@type": "MerchantReturnPolicySeasonalOverride";

  /**
   * <https://schema.org/endDate>
   **/
  endDate: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideEndDateFieldEnum>;

  /**
   * <https://schema.org/returnShippingFeesAmount>
   **/
  returnShippingFeesAmount: all.OneOrMany<all.MonetaryAmount>;

  /**
   * <https://schema.org/returnFees>
   **/
  returnFees: all.OneOrMany<all.ReturnFeesEnumerationEnum>;

  /**
   * <https://schema.org/merchantReturnDays>
   **/
  merchantReturnDays: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideMerchantReturnDaysFieldEnum>;

  /**
   * <https://schema.org/returnMethod>
   **/
  returnMethod: all.OneOrMany<all.ReturnMethodEnumerationEnum>;

  /**
   * <https://schema.org/returnPolicyCategory>
   **/
  returnPolicyCategory: all.OneOrMany<all.MerchantReturnEnumerationEnum>;

  /**
   * <https://schema.org/startDate>
   **/
  startDate: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideStartDateFieldEnum>;

  /**
   * <https://schema.org/refundType>
   **/
  refundType: all.OneOrMany<all.RefundTypeEnumerationEnum>;

  /**
   * <https://schema.org/restockingFee>
   **/
  restockingFee: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideRestockingFeeFieldEnum>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.MerchantReturnPolicySeasonalOverrideImageFieldEnum>;
}
