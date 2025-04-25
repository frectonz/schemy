import type * as all from "./index";

/**
 * <https://schema.org/additionalType>
 **/
export type DrugCostAdditionalTypeFieldEnum = string;

/**
 * <https://schema.org/DrugCost>
 **/
export interface DrugCost {
  "@context": string;
  "@type": "DrugCost";

  /**
   * <https://schema.org/drugUnit>
   **/
  drugUnit: all.OneOrMany<string>;

  /**
   * <https://schema.org/costCategory>
   **/
  costCategory: all.OneOrMany<all.DrugCostCategoryEnum>;

  /**
   * <https://schema.org/costOrigin>
   **/
  costOrigin: all.OneOrMany<string>;

  /**
   * <https://schema.org/applicableLocation>
   **/
  applicableLocation: all.OneOrMany<all.AdministrativeArea>;

  /**
   * <https://schema.org/costCurrency>
   **/
  costCurrency: all.OneOrMany<string>;

  /**
   * <https://schema.org/costPerUnit>
   **/
  costPerUnit: all.OneOrMany<all.DrugCostCostPerUnitFieldEnum>;

  /**
   * <https://schema.org/legalStatus>
   **/
  legalStatus: all.OneOrMany<all.DrugCostLegalStatusFieldEnum>;

  /**
   * <https://schema.org/relevantSpecialty>
   **/
  relevantSpecialty: all.OneOrMany<all.MedicalSpecialtyEnum>;

  /**
   * <https://schema.org/funding>
   **/
  funding: all.OneOrMany<all.Grant>;

  /**
   * <https://schema.org/recognizingAuthority>
   **/
  recognizingAuthority: all.OneOrMany<all.Organization>;

  /**
   * <https://schema.org/medicineSystem>
   **/
  medicineSystem: all.OneOrMany<all.MedicineSystemEnum>;

  /**
   * <https://schema.org/guideline>
   **/
  guideline: all.OneOrMany<all.MedicalGuideline>;

  /**
   * <https://schema.org/study>
   **/
  study: all.OneOrMany<all.MedicalStudy>;

  /**
   * <https://schema.org/code>
   **/
  code: all.OneOrMany<all.MedicalCode>;

  /**
   * <https://schema.org/name>
   **/
  name: all.OneOrMany<string>;

  /**
   * <https://schema.org/mainEntityOfPage>
   **/
  mainEntityOfPage: all.OneOrMany<all.DrugCostMainEntityOfPageFieldEnum>;

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
  identifier: all.OneOrMany<all.DrugCostIdentifierFieldEnum>;

  /**
   * <https://schema.org/description>
   **/
  description: all.OneOrMany<all.DrugCostDescriptionFieldEnum>;

  /**
   * <https://schema.org/subjectOf>
   **/
  subjectOf: all.OneOrMany<all.DrugCostSubjectOfFieldEnum>;

  /**
   * <https://schema.org/alternateName>
   **/
  alternateName: all.OneOrMany<string>;

  /**
   * <https://schema.org/additionalType>
   **/
  additionalType: all.OneOrMany<all.DrugCostAdditionalTypeFieldEnum>;

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
  image: all.OneOrMany<all.DrugCostImageFieldEnum>;
}
