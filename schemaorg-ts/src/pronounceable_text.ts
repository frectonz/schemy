import type * as all from "./index";

/**
 * <https://schema.org/PronounceableText>
 **/
export interface PronounceableText {
  "@context": string;
  "@type": "PronounceableText";

  /**
   * <https://schema.org/phoneticText>
   **/
  phoneticText: all.OneOrMany<string>;

  /**
   * <https://schema.org/inLanguage>
   **/
  inLanguage: all.OneOrMany<all.PronounceableTextInLanguageFieldEnum>;

  /**
   * <https://schema.org/speechToTextMarkup>
   **/
  speechToTextMarkup: all.OneOrMany<string>;

  /**
   * <https://schema.org/textValue>
   **/
  textValue: all.OneOrMany<string>;
}
