// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace HTML {
    /**
     * An HtmlOutput object that can be served from a script. Due to security considerations,
     * scripts cannot directly return HTML to a browser. Instead, they must sanitize it so that it
     * cannot perform malicious actions. You can return sanitized HTML like this:
     *
     *     function doGet() {
     *       return HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *     }
     *
     * HtmlOutput
     * iframe
     * sandboxing
     * guide to restrictions in HTML service
     */
    interface HtmlOutput {

      /**
       * Adds a meta tag to the page. Meta tags included directly in an Apps Script HTML file are ignored. Only the following meta tags are allowed:
       *
       *     <meta name="apple-mobile-web-app-capable" content="..."/>
       *     <meta name="google-site-verification" content="..."/>
       *     <meta name="mobile-web-app-capable" content="..."/>
       *     <meta name="viewport" content="..."/>
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#addMetaTag(String,String)
       * @param name The value of the meta tag's name attribute.
       * @param content The value of the meta tag's content attribute.
       */
      addMetaTag(name: string, content: string): HtmlOutput;

      /**
       * Appends new content to the content of this HtmlOutput. Use this only for content from a trusted source, because it is not escaped.
       *
       *     // Log "<b>Hello, world!</b><p>Hello again, world.</p>"
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.append('<p>Hello again, world.</p>');
       *     Logger.log(output.getContent());
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * Throws:
       * - Error — if the HTML is malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-output#append(String)
       * @param addedContent The content to append.
       */
      append(addedContent: string): HtmlOutput;

      /**
       * Appends new content to the content of this HtmlOutput, using contextual escaping.
       * This method correctly escapes content based on the current state of the HtmlOutput, so that the result is a safe string with no markup or side affects. Use this instead of using append whenever you are adding content from an untrusted source, such as from a user, to avoid accidentally allowing a cross site scripting (XSS) bug where content or markup that you append causes unexpected code execution.
       *
       *     // Log "<b>Hello, world!</b>&lt;p&gt;Hello again, world.&lt;/p&gt;"
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.appendUntrusted('<p>Hello again, world.</p>');
       *     Logger.log(output.getContent());
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * Throws:
       * - Error — if the HTML is very malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-output#appendUntrusted(String)
       * @param addedContent The content to append.
       */
      appendUntrusted(addedContent: string): HtmlOutput;

      /**
       * Returns an HtmlTemplate backed by this HtmlOutput. This method can be used to build up a template incrementally. Future changes to HtmlOutput affect the contents of the HtmlTemplate as well.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     const template = output.asTemplate();
       *
       * Return:
       * - HtmlTemplate — The new HtmlTemplate.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#asTemplate()
       */
      asTemplate(): HtmlTemplate;

      /**
       * Clears the current content.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.clear();
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#clear()
       */
      clear(): HtmlOutput;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the content of this HtmlOutput.
       *
       *     // Log "<b>Hello, world!</b>"
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     Logger.log(output.getContent());
       *
       * Return:
       * - String — The content that is served.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getContent()
       */
      getContent(): string;

      /**
       * Gets the URL for a favicon link tag added to the page by calling setFaviconUrl(iconUrl). Favicon link tags included directly in an Apps Script HTML file are ignored.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setFaviconUrl('http://www.example.com/image.png');
       *     Logger.log(output.getFaviconUrl());
       *
       * Return:
       * - String — The URL of the favicon image.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getFaviconUrl()
       */
      getFaviconUrl(): string;

      /**
       * Gets the initial height of the custom dialog in Google Docs, Sheets, or Forms. If the HtmlOutput is published as a web app instead, this method returns null. To resize a dialog that is already open, call google.script.host.setHeight(height) in client-side code.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setHeight(200);
       *     Logger.log(output.getHeight());
       *
       * Return:
       * - Integer — The height, in pixels.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getHeight()
       */
      getHeight(): Integer;

      /**
       * Gets an array of objects that represent meta tags added to the page by calling addMetaTag(name, content). Meta tags included directly in an Apps Script HTML file are ignored.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
       *
       *     const tags = output.getMetaTags();
       *     Logger.log(
       *         '<meta name="%s" content="%s"/>',
       *         tags[0].getName(),
       *         tags[0].getContent(),
       *     );
       *
       * Return:
       * - HtmlOutputMetaTag[] — An array of objects that represent meta tags added to the page by calling addMetaTag(name, content).
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getMetaTags()
       */
      getMetaTags(): HtmlOutputMetaTag[];

      /**
       * Gets the title of the output page. Note that the <title> HTML element is ignored.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     Logger.log(output.getTitle());
       *
       * Return:
       * - String — The title of the page.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the initial width of the custom dialog in Google Docs, Sheets, or Forms. If the HtmlOutput is published as a web app instead, this method returns null. To resize a dialog that is already open, call google.script.host.setWidth(width) in client-side code.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setWidth(200);
       *     Logger.log(output.getWidth());
       *
       * Return:
       * - Integer — The width in pixels.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the content of this HtmlOutput.
       *
       *     const output = HtmlService.createHtmlOutput();
       *     output.setContent('<b>Hello, world!</b>');
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * Throws:
       * - Error — if the HTML is malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setContent(String)
       * @param content The content to serve.
       */
      setContent(content: string): HtmlOutput;

      /**
       * Adds a link tag for a favicon to the page. Favicon link tags included directly in an Apps Script HTML file are ignored.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setFaviconUrl('http://www.example.com/image.png');
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setFaviconUrl(String)
       * @param iconUrl The URL of the favicon image, with the image extension indicating the image type.
       */
      setFaviconUrl(iconUrl: string): HtmlOutput;

      /**
       * Sets the initial height of the custom dialog in Google Docs, Sheets, or Forms. If the HtmlOutput is published as a web app instead, this method has no effect. To resize a dialog that is already open, call google.script.host.setHeight(height) in client-side code.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setHeight(200);
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setHeight(Integer)
       * @param height The new height in pixels; null results in a default value.
       */
      setHeight(height: Integer): HtmlOutput;

      /**
       * This method now has no effect — previously it set the sandbox mode used for client-side scripts. To protect users from being served malicious HTML or JavaScript, client-side code served from HTML service executes in a security sandbox that imposes restrictions on the code. Originally this method allowed script authors to choose between different versions of the sandbox, but now all scripts now use IFRAME mode regardless of what sandbox mode is set. For more information, see the guide to restrictions in HTML service.
       * The IFRAME mode imposes many fewer restrictions than the other sandbox modes and runs fastest, but does not work at all in certain older browsers, including Internet Explorer 9. The sandbox mode can be read in a client-side script by inspecting google.script.sandbox.mode. Note that this property returns the actual mode on the client, which may differ from the mode requested on the server if the requested mode is not supported in the user's browser.
       *
       *     <!-- Read the sandbox mode (in a client-side script). -->
       *     <script>
       *       alert(google.script.sandbox.mode);
       *     </script>
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setSandboxMode(SandboxMode)
       * @param mode The sandbox mode to use.
       */
      setSandboxMode(mode: SandboxMode): HtmlOutput;

      /**
       * Sets the title of the output page. For web apps, this is the title of the entire page, while for HtmlOutput shown in Google Sheets, this is the dialog title.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setTitle('My First Page');
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setTitle(String)
       * @param title The new title.
       */
      setTitle(title: string): HtmlOutput;

      /**
       * Sets the initial width of a custom dialog in Google Docs, Sheets, or Forms. If the HtmlOutput is published as a web app instead, this method has no effect. To resize a dialog that is already open, call google.script.host.setWidth(width) in client-side code.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setWidth(200);
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setWidth(Integer)
       * @param width The new width in pixels; null results in a default value.
       */
      setWidth(width: Integer): HtmlOutput;

      /**
       * Sets the state of the page's X-Frame-Options header, which controls clickjacking prevention.
       * Setting XFrameOptionsMode.ALLOWALL lets any site iframe the page, so the developer should implement their own protection against clickjacking.
       * If a script does not set an X-Frame-Options mode, Apps Script uses XFrameOptionsMode.DEFAULT mode as the default.
       *
       *     // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
       *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
       *     output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
       *
       * Return:
       * - HtmlOutput — This output, for chaining.
       *
       * https://developers.google.com/apps-script/reference/html/html-output#setXFrameOptionsMode(XFrameOptionsMode)
       * @param mode The XFrame options mode to set.
       */
      setXFrameOptionsMode(mode: XFrameOptionsMode): HtmlOutput;
    }
    /**
     * An object that represents a meta tag added to the page by calling HtmlOutput.addMetaTag(name, content).
     *
     *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *     output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
     *
     *     const tags = output.getMetaTags();
     *     Logger.log(
     *         '<meta name="%s" content="%s"/>',
     *         tags[0].getName(),
     *         tags[0].getContent(),
     *     );
     */
    interface HtmlOutputMetaTag {

      /**
       * Gets the content of this meta tag.
       *
       * Return:
       * - String — the content of this meta tag.
       *
       * https://developers.google.com/apps-script/reference/html/html-output-meta-tag#getContent()
       */
      getContent(): string;

      /**
       * Gets the name of this HtmlOutputMetaTag.
       *
       * Return:
       * - String — the name of this meta tag.
       *
       * https://developers.google.com/apps-script/reference/html/html-output-meta-tag#getName()
       */
      getName(): string;
    }
    /**
     * Service for returning HTML and other text content from a script.
     *
     * Due to security considerations, scripts cannot directly return content to a browser. Instead,
     * they must sanitize the HTML so that it cannot perform malicious actions. See the description of
     * HtmlOutput for what limitations this implies on what can be returned.
     */
    interface HtmlService {
      SandboxMode: typeof SandboxMode;
      XFrameOptionsMode: typeof XFrameOptionsMode;

      /**
       * Creates a new HtmlOutput object that can be returned from the script.
       *
       *     const output = HtmlService.createHtmlOutput();
       *
       * Return:
       * - HtmlOutput — the new HtmlOutput object
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createHtmlOutput()
       */
      createHtmlOutput(): HtmlOutput;

      /**
       * Creates a new HtmlOutput object from a BlobSource resource.
       *
       *     function createFromBlob(blob) {
       *       const output = HtmlService.createHtmlOutput(blob);
       *       return output;
       *     }
       *
       * Return:
       * - HtmlOutput — the new HtmlOutput object
       *
       * Throws:
       * - Error — if the blob doesn't contain HTML or the HTML is malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createHtmlOutput(BlobSource)
       * @param blob the object to get HTML out of
       */
      createHtmlOutput(blob: Base.BlobSource): HtmlOutput;

      /**
       * Creates a new HtmlOutput object that can be returned from the script.
       *
       *     const output = HtmlService.createHtmlOutput('<b>Hello world!</b>');
       *
       * Return:
       * - HtmlOutput — the new HtmlOutput object
       *
       * Throws:
       * - Error — if the html is malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createHtmlOutput(String)
       * @param html the content to serve
       */
      createHtmlOutput(html: string): HtmlOutput;

      /**
       * Creates a new HtmlOutput object from a file in the code editor.
       *
       *     const output = HtmlService.createHtmlOutputFromFile('myPage');
       *
       * Return:
       * - HtmlOutput — the new HtmlOutput object
       *
       * Throws:
       * - Error — if the file wasn't found or the HTML in it is malformed
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createHtmlOutputFromFile(String)
       * @param filename the name of the file to use
       */
      createHtmlOutputFromFile(filename: string): HtmlOutput;

      /**
       * Creates a new HtmlTemplate object from a BlobSource resource.
       *
       *     function createFromBlob(blob) {
       *       const template = HtmlService.createTemplate(blob);
       *       const output = template.evaluate();
       *       return output;
       *     }
       *
       * Return:
       * - HtmlTemplate — the new HtmlTemplate object
       *
       * Throws:
       * - Error — if the blob doesn't contain HTML
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createTemplate(BlobSource)
       * @param blob The object to get HTML out of.
       */
      createTemplate(blob: Base.BlobSource): HtmlTemplate;

      /**
       * Creates a new HtmlTemplate object that can be returned from the script.
       *
       *     const template = HtmlService.createTemplate(
       *         '<b>The time is &lt;?= new Date() ?&gt;</b>',
       *     );
       *
       * Return:
       * - HtmlTemplate — the new HtmlTemplate object
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createTemplate(String)
       * @param html the content of the template
       */
      createTemplate(html: string): HtmlTemplate;

      /**
       * Creates a new HtmlTemplate object from a file in the code editor.
       *
       *     const template = HtmlService.createTemplateFromFile('myTemplate');
       *
       * Return:
       * - HtmlTemplate — the new HtmlTemplate object
       *
       * Throws:
       * - Error — if the file wasn't found
       *
       * https://developers.google.com/apps-script/reference/html/html-service#createTemplateFromFile(String)
       * @param filename the name of the file to use
       */
      createTemplateFromFile(filename: string): HtmlTemplate;

      /**
       * Gets the user-agent string for the current browser. Returns null for most script executions if not used in a web app's doGet() or doPost() function.
       *
       * Return:
       * - String — the user-agent string
       *
       * https://developers.google.com/apps-script/reference/html/html-service#getUserAgent()
       */
      getUserAgent(): string;
    }
    /**
     * A template object for dynamically constructing HTML. For more information, see the guide to templates.
     */
    interface HtmlTemplate {

      /**
       * Evaluates this template and returns an HtmlOutput object. Any properties set on this HtmlTemplate object will be in scope when evaluating. To debug errors in a template, examine the code using the getCode() method.
       *
       *     // A template which evaluates to whatever is bound to 'foo'.
       *     const template = HtmlService.createTemplate('<?= foo ?>');
       *     template.foo = 'Hello World!';
       *     Logger.log(template.evaluate().getContent());  // will log 'Hello World!'
       *
       * Return:
       * - HtmlOutput — an HtmlOutput object
       *
       * https://developers.google.com/apps-script/reference/html/html-template#evaluate()
       */
      evaluate(): HtmlOutput;

      /**
       * Generates a string of JavaScript code, based on the template file, that can be evaluated. This method produces a string of JavaScript code based on the template file. Calling eval(<code>) will return a new HtmlOutput object with the content of the template after running all embedded server scripts. The generated code is intended to be human-readable, and so if you need to debug a template you can call Logger.log(<code>) to see what was produced.
       * Evaluating this code will implicitly bind in all variables in the current scope. In general, it's preferable to use the evaluate() method, which takes explicit bindings.
       *
       *     const template = HtmlService.createTemplate(
       *         '<b>The time is &lt;?= new Date() ?&gt;</b>',
       *     );
       *     Logger.log(template.getCode());
       *
       * Return:
       * - String — a string based on the template, which can be evaluated
       *
       * https://developers.google.com/apps-script/reference/html/html-template#getCode()
       */
      getCode(): string;

      /**
       * Generates a string of JavaScript code that can be evaluated, with each line of the code containing the original line from the template as a comment. This method produces a string of JavaScript code based on the template file. Calling eval(<code>) will return a new HtmlOutput object with the content of the template after running all embedded server scripts. The generated code is intended to be human-readable, and so if you need to debug a template you can call Logger.log(<code>) to see what was produced.
       * Evaluating this code will implicitly bind in all variables in the current scope. In general, it's preferable to use the evaluate() method, which takes explicit bindings.
       *
       *     const template = HtmlService.createTemplate(
       *         '<b>The time is &lt;?= new Date() ?&gt;</b>',
       *     );
       *     Logger.log(template.getCodeWithComments());
       *
       * Return:
       * - String — an string based on the template, which can be evaluated
       *
       * https://developers.google.com/apps-script/reference/html/html-template#getCodeWithComments()
       */
      getCodeWithComments(): string;

      /**
       * Returns the unprocessed content of this template.
       *
       *     const template = HtmlService.createTemplate(
       *         '<b>The time is &lt;?= new Date() ?&gt;</b>',
       *     );
       *     Logger.log(template.getRawContent());
       *
       * Return:
       * - String — the template's raw content
       *
       * https://developers.google.com/apps-script/reference/html/html-template#getRawContent()
       */
      getRawContent(): string;
    }
    /**
     * An enum representing the sandbox modes that can be used for client-side HtmlService
     * scripts. These values can be accessed from HtmlService.SandboxMode, and set by calling
     * HtmlOutput.setSandboxMode(mode).
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * HtmlService.SandboxMode.IFRAME.
     *
     * The NATIVE and EMULATED modes were
     * deprecated on October 13, 2015 and both are now sunset. Only IFRAME mode is now
     * supported.
     *
     * To protect users from being served malicious HTML or JavaScript, client-side code served from
     * HTML service executes in a security sandbox that imposes restrictions on the code. The method
     * HtmlOutput.setSandboxMode(mode) previously allowed script authors to choose
     * between different versions of the sandbox, but now has no effect. For more information, see the
     * guide to restrictions in HTML service.
     *
     * The IFRAME mode imposes many fewer restrictions than the other sandbox modes and runs
     * fastest, but does not work at all in certain older browsers, including Internet Explorer 9. The
     * sandbox mode can also be read in a client-side script by inspecting google.script.sandbox.mode. Note that this property returns the actual mode on the client, which
     * may differ from the mode requested on the server if the requested mode is not supported in the
     * user's browser.
     *
     *     <!-- Read the sandbox mode (in a client-side script). -->
     *     <script>
     *       alert(google.script.sandbox.mode);
     *     </script>
     */
    enum SandboxMode { EMULATED, IFRAME, NATIVE }
    /**
     * An enum representing the X-Frame-Options modes that can be used for client-side HtmlService scripts. These values can be accessed from HtmlService.XFrameOptionsMode,
     * and set by calling HtmlOutput.setXFrameOptionsMode(mode).
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * HtmlService.XFrameOptionsMode.ALLOWALL.
     *
     * Setting XFrameOptionsMode.ALLOWALL will let any site iframe the page, so the developer
     * should implement their own protection against clickjacking.
     *
     * If a script does not set an X-Frame-Options mode, Apps Script uses DEFAULT
     * mode as the default.
     *
     *     // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
     *     const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *     output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
     */
    enum XFrameOptionsMode { ALLOWALL, DEFAULT }
  }
}

declare var HtmlService: GoogleAppsScript.HTML.HtmlService;
