// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Base {
    /**
     * A data interchange object for Apps Script services.
     */
    interface Blob {

      /**
       * Returns a copy of this blob.
       * https://developers.google.com/apps-script/reference/base/blob#copyBlob()
       */
      copyBlob(): Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/base/blob#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Blob;

      /**
       * Gets the data stored in this blob.
       * https://developers.google.com/apps-script/reference/base/blob#getBytes()
       */
      getBytes(): Byte[];

      /**
       * Gets the content type of the bytes in this blob.
       * https://developers.google.com/apps-script/reference/base/blob#getContentType()
       */
      getContentType(): string;

      /**
       * Gets the data of this blob as a String with UTF-8 encoding.
       * https://developers.google.com/apps-script/reference/base/blob#getDataAsString()
       */
      getDataAsString(): string;

      /**
       * Gets the data of this blob as a string with the specified encoding.
       * https://developers.google.com/apps-script/reference/base/blob#getDataAsString(String)
       * @param charset The charset to use in encoding the data in this blob as a string.
       */
      getDataAsString(charset: string): string;

      /**
       * Gets the name of this blob.
       * https://developers.google.com/apps-script/reference/base/blob#getName()
       */
      getName(): string;

      /**
       * Returns whether this blob is a G Suite file (Sheets, Docs, etc.).
       * https://developers.google.com/apps-script/reference/base/blob#isGoogleType()
       */
      isGoogleType(): boolean;

      /**
       * Sets the data stored in this blob.
       * https://developers.google.com/apps-script/reference/base/blob#setBytes(Byte)
       * @param data The new data.
       */
      setBytes(data: Byte[]): Blob;

      /**
       * Sets the content type of the bytes in this blob.
       * https://developers.google.com/apps-script/reference/base/blob#setContentType(String)
       * @param contentType The new contentType.
       */
      setContentType(contentType: string): Blob;

      /**
       * Sets the content type of the bytes in this blob based on the file extension. The contentType is
       * null if it cannot be guessed from its extension.
       * https://developers.google.com/apps-script/reference/base/blob#setContentTypeFromExtension()
       */
      setContentTypeFromExtension(): Blob;

      /**
       * Sets the data of this blob from a string with UTF-8 encoding.
       * https://developers.google.com/apps-script/reference/base/blob#setDataFromString(String)
       * @param string The string data.
       */
      setDataFromString(string: string): Blob;

      /**
       * Sets the data of this blob from a string with the specified encoding.
       * https://developers.google.com/apps-script/reference/base/blob#setDataFromString(String,String)
       * @param string The string data.
       * @param charset The charset to use in interpreting the string as bytes.
       */
      setDataFromString(string: string, charset: string): Blob;

      /**
       * Sets the name of this blob.
       * https://developers.google.com/apps-script/reference/base/blob#setName(String)
       * @param name The new name.
       */
      setName(name: string): Blob;
      /** @deprecated DO NOT USE */ getAllBlobs(): Blob[];
    }
    /**
     * Interface for objects that can export their data as a Blob.
     * Implementing classes
     *
     * NameBrief description
     *
     * AttachmentA Sites Attachment such as a file attached to a page.
     *
     * BlobA data interchange object for Apps Script services.
     *
     * ChartA Chart object, which can be converted to a static image.
     *
     * DocumentA document, containing rich text and elements such as tables and lists.
     *
     * EmbeddedChartRepresents a chart that has been embedded into a spreadsheet.
     *
     * FileA file in Google Drive.
     *
     * GmailAttachmentAn attachment from Gmail.
     *
     * HTTPResponseThis class allows users to access specific information on HTTP responses.
     *
     * HtmlOutputAn HtmlOutput object that can be served from a script.
     *
     * ImageA PageElement representing an image.
     *
     * InlineImageAn element representing an embedded image.
     *
     * JdbcBlobA JDBC Blob.
     *
     * JdbcClobA JDBC Clob.
     *
     * PictureFillA fill that renders an image that's stretched to the dimensions of its container.
     *
     * PositionedImageFixed position image anchored to a Paragraph.
     *
     * SpreadsheetAccess and modify Google Sheets files.
     *
     * StaticMapAllows for the creation and decoration of static map images.
     */
    interface BlobSource {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/base/blob-source#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/base/blob-source#getBlob()
       */
      getBlob(): Blob;
    }
    /**
     * This class provides access to dialog boxes specific to Google Sheets.
     *
     * The methods in this class are only available for use in the context of a Google Spreadsheet.
     * Please use G Suite dialogs instead.
     * See also
     *
     * ButtonSet
     */
    interface Browser {
      Buttons: typeof ButtonSet;

      /**
       * Pops up a dialog box with a text input box in the user's browser.
       *
       *
       * The inputBox method raises a client-side input box that displays the given prompt to the
       * user. Note that this function causes the server-side script to be suspended. It resumes
       * automatically after the user clears the dialog, but JDBC connections don't persist across the
       * suspension.
       *
       *
       *     // The code below sets the value of name to the name input by the user, or 'cancel'.
       *     var name = Browser.inputBox('Enter your name');
       * https://developers.google.com/apps-script/reference/base/browser#inputBox(String)
       * @param prompt The text to be displayed in the dialog box.
       */
      inputBox(prompt: string): string;

      /**
       * Pops up a dialog box with a text input box in the user's browser.
       *
       *
       * The inputBox method raises a client-side input box that displays the given prompt to the
       * user, and offers a choice of buttons to be displayed. Note that this function causes the
       * server-side script to be suspended. It resumes automatically after the user clears the dialog,
       * but JDBC connections don't persist across the suspension.
       *
       *
       *     // The code below sets the value of name to the name input by the user, or 'cancel'.
       *     var name = Browser.inputBox('Enter your name', Browser.Buttons.OK_CANCEL);
       * https://developers.google.com/apps-script/reference/base/browser#inputBox(String,ButtonSet)
       * @param prompt The text to be displayed in the dialog box.
       * @param buttons The type of button set to use.
       */
      inputBox(prompt: string, buttons: ButtonSet): string;

      /**
       * Pops up a dialog box with a text input box in the user's browser.
       *
       *
       * The inputBox method raises a client side input box with the given title, that displays the
       * given prompt to the user, and offers a choice of buttons to be displayed. Note that this
       * function causes the server-side script to be suspended. It resumes automatically after the user
       * clears the dialog, but JDBC connections don't persist across the suspension.
       *
       *
       *     // The code below sets the value of name to the name input by the user, or 'cancel'.
       *     var name = Browser.inputBox('ID Check', 'Enter your name', Browser.Buttons.OK_CANCEL);
       * https://developers.google.com/apps-script/reference/base/browser#inputBox(String,String,ButtonSet)
       * @param title The title for the dialog box.
       * @param prompt The text to be displayed in the dialog box.
       * @param buttons The type of button set to use.
       */
      inputBox(title: string, prompt: string, buttons: ButtonSet): string;

      /**
       * Pops up a dialog box with the given message and an OK button in the user's browser.
       *
       *
       * The msgBox method raises a client-side message box that displays the given message to the
       * user. Note that this method causes the server-side script to be suspended. It resumes
       * automatically after the user clears the dialog, but JDBC connections don't persist across the
       * suspension.
       *
       *
       *     // The code below displays "hello world" in a dialog box with an OK button
       *     Browser.msgBox('hello world');
       * https://developers.google.com/apps-script/reference/base/browser#msgBox(String)
       * @param prompt The text to be displayed in the dialog box.
       */
      msgBox(prompt: string): string;

      /**
       * Pops up a dialog box with the given message and specified buttons in the user's browser.
       *
       *
       * The msgBox method raises a client-side message box that displays the given message to the
       * user, and offers a choice of buttons to be displayed. Note that this method causes the
       * server-side script to be suspended. It resumes automatically after the user clears the dialog,
       * but JDBC connections don't persist across the suspension.
       *
       *
       *     // The code below displays "hello world" in a dialog box with OK and Cancel buttons.
       *     Browser.msgBox('hello world', Browser.Buttons.OK_CANCEL);
       * https://developers.google.com/apps-script/reference/base/browser#msgBox(String,ButtonSet)
       * @param prompt The text to be displayed in the dialog box.
       * @param buttons The type of button set to use.
       */
      msgBox(prompt: string, buttons: ButtonSet): string;

      /**
       * Pops up a dialog box with the given title, message and specified buttons in the user's browser.
       *
       *
       * The msgBox method raises a client-side message box with the given title, that displays the
       * given message to the user, and offers a choice of buttons to be displayed. Note that this
       * method causes the server-side script to be suspended. It resumes automatically after the user
       * clears the dialog, but JDBC connections don't persist across the suspension.
       *
       *
       *     // The code below displays "hello world" in a dialog box with a custom title and Yes and
       *     // No buttons
       *     Browser.msgBox('Greetings', 'hello world', Browser.Buttons.YES_NO);
       * https://developers.google.com/apps-script/reference/base/browser#msgBox(String,String,ButtonSet)
       * @param title The title of the dialog box.
       * @param prompt The text to be displayed in the dialog box.
       * @param buttons The type of button set to use.
       */
      msgBox(title: string, prompt: string, buttons: ButtonSet): string;
    }
    /**
     * An enum representing predetermined, localized dialog buttons returned by an alert or PromptResponse.getSelectedButton() to indicate
     * which button in a dialog the user clicked. These values cannot be set; to add buttons to an
     * alert or prompt, use ButtonSet instead.
     *
     *     // Display a dialog box with a message and "Yes" and "No" buttons.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response == ui.Button.YES) {
     *       Logger.log('The user clicked "Yes."');
     *     } else {
     *       Logger.log('The user clicked "No" or the dialog\'s close button.');
     *     }
     */
    enum Button { CLOSE, OK, CANCEL, YES, NO }
    /**
     * An enum representing predetermined, localized sets of one or more dialog buttons that can be
     * added to an alert or a prompt. To determine which button the user clicked,
     * use Button.
     *
     *     // Display a dialog box with a message and "Yes" and "No" buttons.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response == ui.Button.YES) {
     *       Logger.log('The user clicked "Yes."');
     *     } else {
     *       Logger.log('The user clicked "No" or the dialog\'s close button.');
     *     }
     */
    enum ButtonSet { OK, OK_CANCEL, YES_NO, YES_NO_CANCEL }
    /**
     * The types of Colors
     */
    enum ColorType { UNSUPPORTED, RGB, THEME }
    /**
     * This class allows the developer to write out text to the debugging logs.
     */
    interface Logger {

      /**
       * Clears the log.
       * https://developers.google.com/apps-script/reference/base/logger#clear()
       */
      clear(): void;

      /**
       * Returns a complete list of messages in the current log. This method can be used to save or
       * email the entire log output generated during script execution.
       *
       *
       *     // Generate a log, then email it to the person who ran the script.
       *     var files = DriveApp.getFiles();
       *     while (files.hasNext()) {
       *       Logger.log(files.next().getName());
       *     }
       *     var recipient = Session.getActiveUser().getEmail();
       *     var subject = 'A list of files in your Google Drive';
       *     var body = Logger.getLog();
       *     MailApp.sendEmail(recipient, subject, body);
       * https://developers.google.com/apps-script/reference/base/logger#getLog()
       */
      getLog(): string;

      /**
       * Writes the string to the logging console. To view the logged output, select View > Show
       * logs. This can be very useful for debugging scripts.
       * https://developers.google.com/apps-script/reference/base/logger#log(Object)
       * @param data the message to log
       */
      log(data: object): Logger;

      /**
       * Writes a formatted string to the logging console, using the format and values provided. The
       * string can include multiple %s placeholders, which are replaced with corresponding
       * values from the list of arguments, converted to strings.
       *
       *
       *     // Log the number of Google Groups you belong to.
       *     var groups = GroupsApp.getGroups();
       *     Logger.log('You are a member of %s Google Groups.', groups.length);
       * https://developers.google.com/apps-script/reference/base/logger#log(String,Object...)
       * @param format a format string that contains as many instances of %s as the number of values arguments
       * @param values a variable number of values to insert into the format string
       */
      log(format: string, ...values: object[]): Logger;
    }
    /**
     * A custom menu in an instance of the user interface for a Google App. A script can only interact
     * with the UI for the current instance of an open document or form, and only if the script is container-bound to the document or form. For more
     * information, see the guide to menus.
     *
     *     // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
     *     function onOpen(e) {
     *       SpreadsheetApp.getUi()
     *           .createMenu('My Menu')
     *           .addItem('My Menu Item', 'myFunction')
     *           .addSeparator()
     *           .addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
     *               .addItem('One Submenu Item', 'mySecondFunction')
     *               .addItem('Another Submenu Item', 'myThirdFunction'))
     *           .addToUi();
     *     }
     */
    interface Menu {

      /**
       * Adds an item to the menu. The label for a menu item should be in sentence case (only the first
       * word capitalized).
       * https://developers.google.com/apps-script/reference/base/menu#addItem(String,String)
       * @param caption The label for the menu item, with only the first word capitalized.
       * @param functionName The name of the function to invoke when the user selects the item. You can use functions from included libraries, such as Library.libFunction1.
       */
      addItem(caption: string, functionName: string): Menu;

      /**
       * Adds a visual separator to the menu.
       * https://developers.google.com/apps-script/reference/base/menu#addSeparator()
       */
      addSeparator(): Menu;

      /**
       * Adds a sub-menu to the menu.
       * https://developers.google.com/apps-script/reference/base/menu#addSubMenu(Menu)
       * @param menu The sub-menu, constructed like a top-level menu.
       */
      addSubMenu(menu: Menu): Menu;

      /**
       * Inserts the menu into the instance of the editor's user interface.
       * https://developers.google.com/apps-script/reference/base/menu#addToUi()
       */
      addToUi(): void;
    }
    /**
     * An enumeration that provides access to MIME-type declarations without typing the strings
     * explicitly. Methods that expect a MIME type rendered as a string (for example,
     * 'image/png') also accept any of the values below, so long as the method supports the
     * underlying MIME type.
     *
     *     // Use MimeType enum to log the name of every Google Doc in the user's Drive.
     *     var docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
     *     while (docs.hasNext()) {
     *      var doc = docs.next();
     *      Logger.log(doc.getName())
     *     }
     *
     *     // Use plain string to log the size of every PNG in the user's Drive.
     *     var pngs = DriveApp.getFilesByType('image/png');
     *     while (pngs.hasNext()) {
     *      var png = pngs.next();
     *      Logger.log(png.getSize());
     *     }
     */
    enum MimeType { GOOGLE_APPS_SCRIPT, GOOGLE_DRAWINGS, GOOGLE_DOCS, GOOGLE_FORMS, GOOGLE_SHEETS, GOOGLE_SITES, GOOGLE_SLIDES, FOLDER, BMP, GIF, JPEG, PNG, SVG, PDF, CSS, CSV, HTML, JAVASCRIPT, PLAIN_TEXT, RTF, OPENDOCUMENT_GRAPHICS, OPENDOCUMENT_PRESENTATION, OPENDOCUMENT_SPREADSHEET, OPENDOCUMENT_TEXT, MICROSOFT_EXCEL, MICROSOFT_EXCEL_LEGACY, MICROSOFT_POWERPOINT, MICROSOFT_POWERPOINT_LEGACY, MICROSOFT_WORD, MICROSOFT_WORD_LEGACY, ZIP }
    /**
     * An enum representing the months of the year.
     */
    enum Month { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER }
    /**
     * A response to a prompt dialog displayed in the
     * user-interface environment for a Google App. The response contains any text the user entered in
     * the dialog's input field and indicates which button the user clicked to dismiss the dialog.
     *
     *     // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *     // user can also close the dialog by clicking the close button in its title bar.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response.getSelectedButton() == ui.Button.YES) {
     *       Logger.log('The user\'s name is %s.', response.getResponseText());
     *     } else if (response.getSelectedButton() == ui.Button.NO) {
     *       Logger.log('The user didn\'t want to provide a name.');
     *     } else {
     *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *     }
     */
    interface PromptResponse {

      /**
       * Gets the text that the user entered in the dialog's input field. The text is available even if
       * the user closed the dialog by clicking a button with a negative connotation, like "Cancel" or
       * the close button in the dialog's title bar. getSelectedButton() can help to determine
       * whether the user intended the response text to be valid.
       * https://developers.google.com/apps-script/reference/base/prompt-response#getResponseText()
       */
      getResponseText(): string;

      /**
       * Gets the button that the user clicked to dismiss the dialog. If the user clicked the close
       * button that is included in every dialog's title bar, this method returns Button.CLOSE.
       * https://developers.google.com/apps-script/reference/base/prompt-response#getSelectedButton()
       */
      getSelectedButton(): Button;
    }
    /**
     * A color defined by red, green, blue color channels.
     */
    interface RgbColor {

      /**
       * Returns the color as a CSS-style 7 character hexadecimal string, #rrggbb.
       * https://developers.google.com/apps-script/reference/base/rgb-color#asHexString()
       */
      asHexString(): string;

      /**
       * The blue channel of this color, as a number from 0 to 255.
       * https://developers.google.com/apps-script/reference/base/rgb-color#getBlue()
       */
      getBlue(): Integer;

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/base/rgb-color#getColorType()
       */
      getColorType(): ColorType;

      /**
       * The green channel of this color, as a number from 0 to 255.
       * https://developers.google.com/apps-script/reference/base/rgb-color#getGreen()
       */
      getGreen(): Integer;

      /**
       * The red channel of this color, as a number from 0 to 255.
       * https://developers.google.com/apps-script/reference/base/rgb-color#getRed()
       */
      getRed(): Integer;
    }
    /**
     * The Session class provides access to session information, such as the user's email address (in
     * some circumstances) and language setting.
     */
    interface Session {

      /**
       * Gets information about the current user. If security policies do not allow access to the user's
       * identity, User.getEmail() returns a blank string. The circumstances in which the
       * email address is available vary: for example, the user's email address is not available in any
       * context that allows a script to run without that user's authorization, like a simple onOpen(e) or onEdit(e) trigger, a custom function in Google Sheets, or a web app
       * deployed to "execute as me" (that is, authorized by the developer instead of the user).
       * However, these restrictions generally do not apply if the developer runs the script themselves
       * or belongs to the same G Suite domain as the user.
       *
       *
       *     // Log the email address of the person running the script.
       *     var email = Session.getActiveUser().getEmail();
       *     Logger.log(email);
       * https://developers.google.com/apps-script/reference/base/session#getActiveUser()
       */
      getActiveUser(): User;

      /**
       * Gets the language setting of the current user as a string—for example, en for English.
       *
       *
       *     // Log the language setting of the person running the script.
       *     Logger.log(Session.getActiveUserLocale());
       * https://developers.google.com/apps-script/reference/base/session#getActiveUserLocale()
       */
      getActiveUserLocale(): string;

      /**
       * Gets information about the user under whose authority the script is running. If the script is a
       * web app set to "execute as me" (the developer), this returns the developer's user account. If
       * the script is running under an installable
       * trigger, this returns the account of the user who created the trigger. In most other
       * scenarios, this returns the same account as getActiveUser().
       *
       *
       *     // Log the email address of the user under whose authority the script is running.
       *     var email = Session.getEffectiveUser().getEmail();
       *     Logger.log(email);
       * https://developers.google.com/apps-script/reference/base/session#getEffectiveUser()
       */
      getEffectiveUser(): User;

      /**
       * Gets the time zone of the script. New scripts default to the owner's time zone, but the
       * script's time zone can be changed by clicking File > Project properties in the script
       * editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
       * File > Spreadsheet settings in Google Sheets. Spreadsheet time zones that differ from
       * the script time zone are a frequent source of scripting bugs.
       *
       *
       *     // Log the time zone of the script.
       *     var timeZone = Session.getScriptTimeZone();
       *     Logger.log(timeZone);
       * https://developers.google.com/apps-script/reference/base/session#getScriptTimeZone()
       */
      getScriptTimeZone(): string;

      /**
       * Gets a temporary key that is unique to the active user but does not reveal the user identity.
       * The temporary key rotates every 30 days and is unique to the script.
       *
       *
       *     // Log the temporary key of the person running the script.
       *     Logger.log(Session.getTemporaryActiveUserKey());
       * https://developers.google.com/apps-script/reference/base/session#getTemporaryActiveUserKey()
       */
      getTemporaryActiveUserKey(): string;
      /** @deprecated DO NOT USE */ getTimeZone(): string;
      /** @deprecated DO NOT USE */ getUser(): User;
    }
    /**
     * An instance of the user-interface environment for a Google App that allows the script to add
     * features like menus, dialogs, and sidebars. A script can only interact with the UI for the
     * current instance of an open editor, and only if the script is container-bound to the editor.
     *
     *     // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *     // user can also close the dialog by clicking the close button in its title bar.
     *     var ui = SpreadsheetApp.getUi();
     *     var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response.getSelectedButton() == ui.Button.YES) {
     *       Logger.log('The user\'s name is %s.', response.getResponseText());
     *     } else if (response.getSelectedButton() == ui.Button.NO) {
     *       Logger.log('The user didn\'t want to provide a name.');
     *     } else {
     *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *     }
     */
    interface Ui {
      Button: typeof Button;
      ButtonSet: typeof ButtonSet;

      /**
       * Opens a dialog box in the user's editor with the given message and an "OK" button. This method
       * suspends the server-side script while the dialog is open. The script resumes after the user
       * dismisses the dialog, but Jdbc
       * connections and LockService locks don't
       * persist across the suspension. For more information, see the guide to dialogs and sidebars.
       *
       *
       *     // Display "Hello, world" in a dialog box with an "OK" button. The user can also close the
       *     // dialog by clicking the close button in its title bar.
       *     SpreadsheetApp.getUi().alert('Hello, world');
       * https://developers.google.com/apps-script/reference/base/ui#alert(String)
       * @param prompt The message to display in the dialog box.
       */
      alert(prompt: string): Button;

      /**
       * Opens a dialog box in the user's editor with the given message and set of buttons. This method
       * suspends the server-side script while the dialog is open. The script resumes after the user
       * dismisses the dialog, but Jdbc
       * connections and LockService locks don't
       * persist across the suspension. For more information, see the guide to dialogs and sidebars.
       *
       *
       *     // Display a dialog box with a message and "Yes" and "No" buttons. The user can also close the
       *     // dialog by clicking the close button in its title bar.
       *     var ui = SpreadsheetApp.getUi();
       *     var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
       *
       *     // Process the user's response.
       *     if (response == ui.Button.YES) {
       *       Logger.log('The user clicked "Yes."');
       *     } else {
       *       Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#alert(String,ButtonSet)
       * @param prompt The message to display in the dialog box.
       * @param buttons The button set to display in the dialog box.
       */
      alert(prompt: string, buttons: ButtonSet): Button;

      /**
       * Opens a dialog box in the user's editor with the given title, message, and set of buttons. This
       * method suspends the server-side script while the dialog is open. The script resumes after the
       * user dismisses the dialog, but Jdbc
       * connections and LockService locks don't
       * persist across the suspension. For more information, see the guide to dialogs and sidebars.
       *
       *
       *     // Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
       *     // close the dialog by clicking the close button in its title bar.
       *     var ui = SpreadsheetApp.getUi();
       *     var response = ui.alert('Confirm', 'Are you sure you want to continue?', ui.ButtonSet.YES_NO);
       *
       *     // Process the user's response.
       *     if (response == ui.Button.YES) {
       *       Logger.log('The user clicked "Yes."');
       *     } else {
       *       Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#alert(String,String,ButtonSet)
       * @param title The title to display above the dialog box.
       * @param prompt The message to display in the dialog box.
       * @param buttons The button set to display in the dialog box.
       */
      alert(title: string, prompt: string, buttons: ButtonSet): Button;

      /**
       * Creates a builder that can be used to insert a sub-menu into the editor's Add-on menu. The menu
       * isn't actually be updated until Menu.addToUi() is called. If the script is running as
       * an add-on, the sub-menu name matches the add-on's name in the web store; if the script is bound to the document directly, the sub-menu name
       * matches the script's name. For more information, see the guide to menus.
       *
       *
       *     // Add an item to the Add-on menu, under a sub-menu whose name is set automatically.
       *     function onOpen(e) {
       *       SpreadsheetApp.getUi()
       *           .createAddonMenu()
       *           .addItem('Show', 'showSidebar')
       *           .addToUi();
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#createAddonMenu()
       */
      createAddonMenu(): Menu;

      /**
       * Creates a builder that can be used to add a menu to the editor's user interface. The menu isn't
       * actually be added until Menu.addToUi() is called. For more information, see the guide to menus. The label for a top-level menu should be
       * in headline case (all major words capitalized), although the label for a sub-menu should be in
       * sentence case (only the first word capitalized). If the script is published as an add-on, the caption parameter is ignored and the
       * menu is added as a sub-menu of the Add-ons menu, equivalent to createAddonMenu().
       *
       *
       *     // Add a custom menu to the active document, including a separator and a sub-menu.
       *     function onOpen(e) {
       *       SpreadsheetApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
       *               .addItem('One sub-menu item', 'mySecondFunction')
       *               .addItem('Another sub-menu item', 'myThirdFunction'))
       *           .addToUi();
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#createMenu(String)
       * @param caption The label for the menu, with all major words capitalized for a top-level menu, or only the first word capitalized for a sub-menu.
       */
      createMenu(caption: string): Menu;

      /**
       * Opens an input dialog box in the user's editor with the given message and an "OK" button. This
       * method suspends the server-side script while the dialog is open. The script resumes after the
       * user dismisses the dialog, but Jdbc
       * connections and LockService locks don't
       * persist across the suspension. For more information, see the guide to dialogs and sidebars.
       *
       *
       *     // Display a dialog box with a message, input field, and an "OK" button. The user can also
       *     // close the dialog by clicking the close button in its title bar.
       *     var ui = SpreadsheetApp.getUi();
       *     var response = ui.prompt('Enter your name:');
       *
       *     // Process the user's response.
       *     if (response.getSelectedButton() == ui.Button.OK) {
       *       Logger.log('The user\'s name is %s.', response.getResponseText());
       *     } else {
       *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#prompt(String)
       * @param prompt The message to display in the dialog box.
       */
      prompt(prompt: string): PromptResponse;

      /**
       * Opens an input dialog box in the user's editor with the given message and set of buttons. This
       * method suspends the server-side script while the dialog is open. The script resumes after the
       * user dismisses the dialog, but Jdbc
       * connections and LockService locks don't
       * persist across the suspension. For more information, see the guide to dialogs and sidebars.
       *
       *
       *     // Display a dialog box with a message, input field, and "Yes" and "No" buttons. The user can
       *     // also close the dialog by clicking the close button in its title bar.
       *     var ui = SpreadsheetApp.getUi();
       *     var response = ui.prompt('May I know your name?', ui.ButtonSet.YES_NO);
       *
       *     // Process the user's response.
       *     if (response.getSelectedButton() == ui.Button.YES) {
       *       Logger.log('The user\'s name is %s.', response.getResponseText());
       *     } else if (response.getSelectedButton() == ui.Button.NO) {
       *       Logger.log('The user didn\'t want to provide a name.');
       *     } else {
       *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#prompt(String,ButtonSet)
       * @param prompt The message to display in the dialog box.
       * @param buttons The button set to display in the dialog box.
       */
      prompt(prompt: string, buttons: ButtonSet): PromptResponse;

      /**
       * Opens an input dialog box in the user's editor with the given title, message, and set of
       * buttons. This method suspends the server-side script while the dialog is open. The script
       * resumes after the user dismisses the dialog, but Jdbc connections and LockService locks don't persist across the
       * suspension. For more information, see the guide to
       * dialogs and sidebars.
       *
       *
       *     // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
       *     // user can also close the dialog by clicking the close button in its title bar.
       *     var ui = SpreadsheetApp.getUi();
       *     var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
       *
       *     // Process the user's response.
       *     if (response.getSelectedButton() == ui.Button.YES) {
       *       Logger.log('The user\'s name is %s.', response.getResponseText());
       *     } else if (response.getSelectedButton() == ui.Button.NO) {
       *       Logger.log('The user didn\'t want to provide a name.');
       *     } else {
       *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
       *     }
       * https://developers.google.com/apps-script/reference/base/ui#prompt(String,String,ButtonSet)
       * @param title The title to display above the dialog box.
       * @param prompt The message to display in the dialog box.
       * @param buttons The button set to display in the dialog box.
       */
      prompt(title: string, prompt: string, buttons: ButtonSet): PromptResponse;

      /**
       * Opens a modal dialog box in the user's editor with custom client-side content. This method does
       * not suspend the server-side script while the dialog is open. To communicate with the
       * server-side script, the client-side component must make asynchronous callbacks using the google.script API for HtmlService. To close the dialog
       * programmatically, call
       * google.script.host.close() on the client side of an HtmlService web
       * app. For more information, see the guide to dialogs and
       * sidebars.
       *
       *
       * Modal dialogs prevent the user from interacting with anything other than the dialog. By
       * contrast, modeless dialogs and sidebars let the user interact with the editor. In almost all cases, a
       * modal dialog or sidebar is a better choice than a modeless dialog.
       *
       *
       *     // Display a modal dialog box with custom HtmlService content.
       *     var htmlOutput = HtmlService
       *         .createHtmlOutput('<p>A change of speed, a change of style...</p>')
       *         .setWidth(250)
       *         .setHeight(300);
       *     SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on');
       * https://developers.google.com/apps-script/reference/base/ui#showModalDialog(Object,String)
       * @param userInterface An HtmlOutput representing the interface to display.
       * @param title The title of the dialog; overrides any title set by calling setTitle() on the userInterface object.
       */
      showModalDialog(userInterface: object, title: string): void;

      /**
       * Opens a modeless dialog box in the user's editor with custom client-side content. This method
       * does not suspend the server-side script while the dialog is open. To communicate with
       * the server-side script, the client-side component must make asynchronous callbacks using the google.script API for HtmlService. To close the dialog
       * programmatically, call
       * google.script.host.close() on the client side of an HtmlService web
       * app. For more information, see the guide to dialogs and
       * sidebars.
       *
       *
       * Modeless dialogs let the user interact with the editor behind the dialog. By contrast,
       * modal dialogs do not. In almost all cases, a modal
       * dialog or sidebar is a better choice than a modeless dialog.
       *
       *
       *     // Display a modeless dialog box with custom HtmlService content.
       *     var htmlOutput = HtmlService
       *         .createHtmlOutput('<p>A change of speed, a change of style...</p>')
       *         .setWidth(250)
       *         .setHeight(300);
       *     SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'My add-on');
       * https://developers.google.com/apps-script/reference/base/ui#showModelessDialog(Object,String)
       * @param userInterface An HtmlOutput representing the interface to display.
       * @param title The title of the dialog; overrides any title set by calling setTitle() on the userInterface object.
       */
      showModelessDialog(userInterface: object, title: string): void;

      /**
       * Opens a sidebar in the user's editor with custom client-side content. This method does
       * not suspend the server-side script while the sidebar is open. To communicate with the
       * server-side script, the client-side component must make asynchronous callbacks using the google.script API for HtmlService. To close the sidebar
       * programmatically, call
       * google.script.host.close() on the client side of an HtmlService web
       * app. For more information, see the guide to dialogs and
       * sidebars.
       *
       *
       * The sidebar displays on the right side of the editor for users whose environments use a
       * left-to-right language and on the left side of the editor for right-to-left languages. All
       * sidebars shown by scripts are 300 pixels wide.
       *
       *
       *     // Display a sidebar with custom HtmlService content.
       *     var htmlOutput = HtmlService
       *         .createHtmlOutput('<p>A change of speed, a change of style...</p>')
       *         .setTitle('My add-on');
       *     SpreadsheetApp.getUi().showSidebar(htmlOutput);
       * https://developers.google.com/apps-script/reference/base/ui#showSidebar(Object)
       * @param userInterface An HtmlOutput representing the interface to display.
       */
      showSidebar(userInterface: object): void;
      /** @deprecated DO NOT USE */ showDialog(userInterface: object): void;
    }
    /**
     * Representation of a user, suitable for scripting.
     */
    interface User {

      /**
       * Gets the user's email address, if available. If security policies do not allow access to the
       * user's email address, this method returns a blank string. The circumstances in which the email
       * address is available vary: for example, the user's email address is not available in any
       * context that allows a script to run without that user's authorization, like a simple onOpen(e) or onEdit(e) trigger, a custom function in Google Sheets, or a web app
       * deployed to "execute as me" (that is, authorized by the developer instead of the user).
       * However, these restrictions generally do not apply if the developer runs the script themselves
       * or belongs to the same G Suite domain as the user.
       *
       *
       *     // Log the email address of the person running the script.
       *     Logger.log(Session.getActiveUser().getEmail());
       * https://developers.google.com/apps-script/reference/base/user#getEmail()
       */
      getEmail(): string;
      /** @deprecated DO NOT USE */ getUserLoginId(): string;
    }
    /**
     * An enum representing the days of the week.
     */
    enum Weekday { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }
    /**
     * This class allows the developer to write logs to the Google Cloud Platform's Stackdriver Logging service. The following
     * shows some logging examples:
     *
     *     function measuringExecutionTime() {
     *       // A simple INFO log message, using sprintf() formatting.
     *       console.info('Timing the %s function (%d arguments)', 'myFunction', 1);
     *
     *       // Log a JSON object at a DEBUG level. If the object contains a property called "message",
     *       // that is used as the summary in the log viewer, otherwise a stringified version of
     *       // the object is used as the summary.
     *       var parameters = {
     *         isValid: true,
     *         content: 'some string',
     *         timestamp: new Date()
     *       };
     *       console.log(parameters);
     *
     *       var label = 'myFunction() time';  // Labels the timing log entry.
     *       console.time(label);              // Starts the timer.
     *       try {
     *         myFunction(parameters);         // Function to time.
     *       } catch (e) {
     *         // Logs an ERROR message.
     *         console.error('myFunction() yielded an error: ' + e);
     *       }
     *       console.timeEnd(label);      // Stops the timer, logs execution duration.
     *     }
     */
    interface console {

      /**
       * Outputs a blank ERROR level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#error()
       */
      error(): void;

      /**
       * Outputs an ERROR level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#error(Object,Object...)
       * @param formatOrObject a string containing zero or more substitution strings, or a JavaScript object to be logged as a JavaScript object if no other parameters.
       * @param values objects with which to replace substitution strings within the message. This gives you additional control over the format of the output.
       */
      error(formatOrObject: object, ...values: object[]): void;

      /**
       * Outputs blank INFO level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#info()
       */
      info(): void;

      /**
       * Outputs an INFO level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#info(Object,Object...)
       * @param formatOrObject a string containing zero or more substitution strings, or a JavaScript object to be logged as a JavaScript object if no other parameters.
       * @param values objects with which to replace substitution strings within the message. This gives you additional control over the format of the output.
       */
      info(formatOrObject: object, ...values: object[]): void;

      /**
       * Outputs a blank DEBUG level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#log()
       */
      log(): void;

      /**
       * Outputs a DEBUG level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#log(Object,Object...)
       * @param formatOrObject a string containing zero or more substitution strings, or a JavaScript object to be logged as a JavaScript object if no other parameters.
       * @param values objects with which to replace substitution strings within the message. This gives you additional control over the format of the output.
       */
      log(formatOrObject: object, ...values: object[]): void;

      /**
       * Starts a timer you can use to track how long an operation takes.
       * https://developers.google.com/apps-script/reference/base/console#time(String)
       * @param label The name to give the new timer.
       */
      time(label: string): void;

      /**
       * Stops a timer that was previously started by calling console.time(). The time duration
       * is logged in Stackdriver.
       * https://developers.google.com/apps-script/reference/base/console#timeEnd(String)
       * @param label the name of the timer to stop.
       */
      timeEnd(label: string): void;

      /**
       * Outputs a blank WARNING level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#warn()
       */
      warn(): void;

      /**
       * Outputs a WARNING level message to Stackdriver Logging.
       * https://developers.google.com/apps-script/reference/base/console#warn(Object,Object...)
       * @param formatOrObject a string containing zero or more substitution strings, or a JavaScript object to be logged as a JavaScript object if no other parameters.
       * @param values objects with which to replace substitution strings within the message. This gives you additional control over the format of the output.
       */
      warn(formatOrObject: object, ...values: object[]): void;
    }
  }
}

declare var Browser: GoogleAppsScript.Base.Browser;
declare var Logger: GoogleAppsScript.Base.Logger;
// conflicts with MimeType in lib.d.ts
// declare var MimeType: GoogleAppsScript.Base.MimeType;
declare var Session: GoogleAppsScript.Base.Session;
declare var console: GoogleAppsScript.Base.console;
