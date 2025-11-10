// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Content {
    /**
     * Service for returning text content from a script.
     *
     * You can serve up text in various forms. For example, publish this script as a web app.
     *
     *     function doGet() {
     *       return ContentService.createTextOutput('Hello World');
     *     }
     */
    interface ContentService {
      MimeType: typeof MimeType;

      /**
       * Create a new TextOutput object.
       *
       *     function doGet() {
       *       const output = ContentService.createTextOutput();
       *       output.append('Hello world!');
       *       return output;
       *     }
       *
       * Return:
       * - TextOutput — the new TextOutput object.
       *
       * https://developers.google.com/apps-script/reference/content/content-service#createTextOutput()
       */
      createTextOutput(): TextOutput;

      /**
       * Create a new TextOutput object that can serve the given content.
       *
       *     function doGet() {
       *       const output = ContentService.createTextOutput('Hello world!');
       *       return output;
       *     }
       *
       * Return:
       * - TextOutput — the new TextOutput object.
       *
       * https://developers.google.com/apps-script/reference/content/content-service#createTextOutput(String)
       * @param content the content to serve.
       */
      createTextOutput(content: string): TextOutput;
    }
    /**
     * An enum for mime types that can be served from a script.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ContentService.MimeType.CSV.
     */
    enum MimeType { CSV, ICAL, JAVASCRIPT, JSON, TEXT, VCARD }
    /**
     * A TextOutput object that can be served from a script.
     *
     * Due to security considerations, scripts cannot directly return text content to a browser.
     * Instead, the browser is redirected to googleusercontent.com, which will display it without any
     * further sanitization or manipulation.
     *
     * You can return text content like this:
     *
     *     function doGet() {
     *       return ContentService.createTextOutput('hello world!');
     *     }
     *
     * ContentService
     */
    interface TextOutput {

      /**
       * Appends new content to the content that will be served.
       *
       * Return:
       * - TextOutput — this TextOutput itself, useful for chaining
       *
       * https://developers.google.com/apps-script/reference/content/text-output#append(String)
       * @param addedContent the content to append
       */
      append(addedContent: string): TextOutput;

      /**
       * Clears the current content.
       *
       * Return:
       * - TextOutput — this TextOutput itself, useful for chaining
       *
       * https://developers.google.com/apps-script/reference/content/text-output#clear()
       */
      clear(): TextOutput;

      /**
       * Tells browsers to download rather than display this content.
       * Some browsers will ignore this setting. Setting this to null will clear it back to the default behavior of displaying rather than downloading.
       *
       * Return:
       * - TextOutput — the TextOutput object, useful for chaining
       *
       * Throws:
       * - Error — if the filename contains illegal characters
       *
       * https://developers.google.com/apps-script/reference/content/text-output#downloadAsFile(String)
       * @param filename the filename to tell the browser to use
       */
      downloadAsFile(filename: string): TextOutput;

      /**
       * Gets the content that will be served.
       *
       * Return:
       * - String — the content that will be served
       *
       * https://developers.google.com/apps-script/reference/content/text-output#getContent()
       */
      getContent(): string;

      /**
       * Returns the file name to download this file as, or null if it should be displayed rather than downloaded.
       *
       * Return:
       * - String — the file name
       *
       * https://developers.google.com/apps-script/reference/content/text-output#getFileName()
       */
      getFileName(): string;

      /**
       * Get the mime type this content will be served with.
       *
       * Return:
       * - MimeType — the mime type this will be served with
       *
       * https://developers.google.com/apps-script/reference/content/text-output#getMimeType()
       */
      getMimeType(): MimeType;

      /**
       * Sets the content that will be served.
       *
       * Return:
       * - TextOutput — this TextOutput itself, useful for chaining
       *
       * https://developers.google.com/apps-script/reference/content/text-output#setContent(String)
       * @param content the content to serve
       */
      setContent(content: string): TextOutput;

      /**
       * Sets the mime type for content that will be served. The default is plain text.
       *
       * Return:
       * - TextOutput — this TextOutput itself, useful for chaining
       *
       * https://developers.google.com/apps-script/reference/content/text-output#setMimeType(MimeType)
       * @param mimeType the mime type
       */
      setMimeType(mimeType: MimeType): TextOutput;
    }
  }
}

declare var ContentService: GoogleAppsScript.Content.ContentService;
