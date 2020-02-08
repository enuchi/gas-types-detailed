// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Language {
    /**
     * The Language service provides scripts a way to compute automatic translations of text.
     *
     *     // The code below will write "Esta es una prueba" to the log.
     *     var spanish = LanguageApp.translate('This is a test', 'en', 'es');
     *     Logger.log(spanish);
     */
    interface LanguageApp {

      /**
       * Automatically translates some text from a source language to a destination language.
       *
       *
       *     // The code below will write "Esta es una prueba" to the log.
       *       var spanish = LanguageApp.translate('This is a test', 'en', 'es');
       *       Logger.log(spanish);
       * https://developers.google.com/apps-script/reference/language/language-app#translate(String,String,String)
       * @param text the text to translate
       * @param sourceLanguage the language code in which text is written. If it is set to the empty string, the source language code will be auto-detected
       * @param targetLanguage the language code to which the text should be translated
       */
      translate(text: string, sourceLanguage: string, targetLanguage: string): string;

      /**
       * Automatically translates some text from a source language to a destination language.
       *
       *
       *     // The code below will write "Esta es una <strong>prueba</strong>" to the log.
       *       var spanish = LanguageApp.translate('This is a &lt;strong&gt;test&lt;/strong&gt;',
       *                                           'en', 'es', {contentType: 'html'});
       *       Logger.log(spanish);
       * https://developers.google.com/apps-script/reference/language/language-app#translate(String,String,String,Object)
       * @param text the text to translate
       * @param sourceLanguage the language code in which text is written. If it is set to the empty string, the source language code will be auto-detected
       * @param targetLanguage the language code to which the text should be translated
       * @param advancedArgs optional JavaScript object fields
       */
      translate(text: string, sourceLanguage: string, targetLanguage: string, advancedArgs: object): string;
    }
  }
}

declare var LanguageApp: GoogleAppsScript.Language.LanguageApp;
