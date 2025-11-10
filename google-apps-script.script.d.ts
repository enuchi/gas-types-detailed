// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.document.d.ts" />
/// <reference path="google-apps-script.forms.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />

declare namespace GoogleAppsScript {
  namespace Script {
    /**
     * An enumeration that identifies which categories of authorized services Apps Script is able to
     * execute through a triggered function. These values are exposed in triggered functions as the authMode
     * property of the event parameter, e. For
     * more information, see the guide to the
     * authorization lifecycle for add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ScriptApp.AuthMode.CUSTOM_FUNCTION.
     *
     *     function onOpen(e) {
     *       const menu = SpreadsheetApp.getUi().createAddonMenu();
     *       if (e && e.authMode === ScriptApp.AuthMode.NONE) {
     *         // Add a normal menu item (works in all authorization modes).
     *         menu.addItem('Start workflow', 'startWorkflow');
     *       } else {
     *         // Add a menu item based on properties (doesn't work in AuthMode.NONE).
     *         const properties = PropertiesService.getDocumentProperties();
     *         const workflowStarted = properties.getProperty('workflowStarted');
     *         if (workflowStarted) {
     *           menu.addItem('Check workflow status', 'checkWorkflow');
     *         } else {
     *           menu.addItem('Start workflow', 'startWorkflow');
     *         }
     *         // Record analytics.
     *         UrlFetchApp.fetch('http://www.example.com/analytics?event=open');
     *       }
     *       menu.addToUi();
     *     }
     */
    enum AuthMode { NONE, CUSTOM_FUNCTION, LIMITED, FULL }
    /**
     * An object that checks if the user has granted authorization for the required scopes of the
     * script. The object also provides an authorization URL for users to grant those permissions.
     *
     * Some script executions can start without a user's consent to all required scopes used by the
     * script. The information in this object lets you control access to sections of code that require
     * certain scopes and request authorization of those scopes for subsequent executions.
     *
     * This object is returned by ScriptApp.getAuthorizationInfo(authMode). In almost
     * all cases, scripts should call ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL),
     * since no other authorization mode requires that users grant authorization.
     */
    interface AuthorizationInfo {

      /**
       * Gets a value that indicates whether the user needs to authorize this script to use one or more services (for example, ScriptApp.AuthorizationStatus.REQUIRED).
       *
       *     // Log the authorization status (REQUIRED or NOT_REQUIRED).
       *     const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
       *     Logger.log(authInfo.getAuthorizationStatus());
       *
       * Return:
       * - AuthorizationStatus — the authorization status
       *
       * https://developers.google.com/apps-script/reference/script/authorization-info#getAuthorizationStatus()
       */
      getAuthorizationStatus(): AuthorizationStatus;

      /**
       * Gets the authorization URL that can be used to grant access to the script. This method returns null if no authorization is required. The page at the URL will close automatically if it is accessed and the script does not require any authorization.
       *
       *     // Log the URL used to grant access to the script.
       *     const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
       *     Logger.log(authInfo.getAuthorizationUrl());
       *
       * Return:
       * - String — a URL that can be used to authorize the script
       *
       * https://developers.google.com/apps-script/reference/script/authorization-info#getAuthorizationUrl()
       */
      getAuthorizationUrl(): string;

      /**
       * Gets a list of authorized scopes for the script. If authorization information is requested for a specified list of scopes, returns the authorized scopes from the specified list.
       *
       *     // Logs which scopes in the specified list have been authorized for the script.
       *     const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL, [
       *       'https: //www.googleapis.com/auth/documents',
       *       'https: //www.googleapis.com/auth/spreadsheets',
       *     ]);
       *     Logger.log(authInfo.getAuthorizedScopes());
       *
       * Return:
       * - String[] — The list of authorized scopes.
       *
       * https://developers.google.com/apps-script/reference/script/authorization-info#getAuthorizedScopes()
       */
      getAuthorizedScopes(): string[];
    }
    /**
     * An enumeration denoting the authorization status of a script.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ScriptApp.AuthorizationStatus.REQUIRED.
     */
    enum AuthorizationStatus { REQUIRED, NOT_REQUIRED }
    /**
     * Builder for calendar triggers.
     */
    interface CalendarTriggerBuilder {

      /**
       * Creates the trigger and returns it.
       *
       * Return:
       * - Trigger — The new trigger.
       *
       * https://developers.google.com/apps-script/reference/script/calendar-trigger-builder#create()
       */
      create(): Trigger;

      /**
       * Specifies a trigger that fires when a calendar entry is created, updated, or deleted.
       *
       * Return:
       * - CalendarTriggerBuilder — This CalendarTriggerBuilder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/calendar-trigger-builder#onEventUpdated()
       */
      onEventUpdated(): CalendarTriggerBuilder;
    }
    /**
     * A builder for clock triggers.
     */
    interface ClockTriggerBuilder {

      /**
       * Specifies the minimum duration (in milliseconds) after the current time that the trigger runs. The actual duration might vary, but won't be less than your specified minimum.
       *
       *     // Creates a trigger that runs 10 minutes later
       *     ScriptApp.newTrigger('myFunction').timeBased().after(10 * 60 * 1000).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#after(Integer)
       * @param durationMilliseconds The minimum duration (in milliseconds) after the current time when the trigger should run.
       */
      after(durationMilliseconds: Integer): ClockTriggerBuilder;

      /**
       * Specifies when the trigger runs.
       *
       *     // Creates a trigger for December 1, 2012
       *     const triggerDay = new Date(2012, 11, 1);
       *     ScriptApp.newTrigger('myFunction').timeBased().at(triggerDay).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#at(Date)
       * @param date A Date object representing when the trigger should run.
       */
      at(date: Date): ClockTriggerBuilder;

      /**
       * Specifies that the trigger fires on the given date, by default near midnight (+/- 15 minutes).
       *
       *     // Schedules for January 1st, 2013
       *     ScriptApp.newTrigger('myFunction').timeBased().atDate(2013, 1, 1).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#atDate(Integer,Integer,Integer)
       * @param year The calendar year to schedule the trigger.
       * @param month The calendar month to schedule the trigger (should be a number between 1 and 12, inclusive).
       * @param day The calendar day to schedule the trigger (should be a number between 1 and 31, inclusive).
       */
      atDate(year: Integer, month: Integer, day: Integer): ClockTriggerBuilder;

      /**
       * Specifies the hour the trigger at which the trigger runs.
       *
       *     // Runs between 5am-6am in the timezone of the script
       *     ScriptApp.newTrigger('myFunction')
       *         .timeBased()
       *         .atHour(5)
       *         .everyDays(
       *             1)  // Frequency is required if you are using atHour() or nearMinute()
       *         .create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#atHour(Integer)
       * @param hour The hour at which to fire.
       */
      atHour(hour: Integer): ClockTriggerBuilder;

      /**
       * Creates the trigger.
       *
       * Return:
       * - Trigger — The newly created, scheduled trigger.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#create()
       */
      create(): Trigger;

      /**
       * Specifies to run the trigger every n days.
       *
       *     ScriptApp.newTrigger('myFunction').timeBased().everyDays(3).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#everyDays(Integer)
       * @param n The number of days between executions.
       */
      everyDays(n: Integer): ClockTriggerBuilder;

      /**
       * Specifies to run the trigger every n hours.
       *
       *     ScriptApp.newTrigger('myFunction').timeBased().everyHours(12).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#everyHours(Integer)
       * @param n The number of hours between executions.
       */
      everyHours(n: Integer): ClockTriggerBuilder;

      /**
       * Specifies to run the trigger every n minutes. n must be 1, 5, 10, 15 or 30.
       *
       *     ScriptApp.newTrigger('myFunction').timeBased().everyMinutes(10).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#everyMinutes(Integer)
       * @param n The number of minutes between executions.
       */
      everyMinutes(n: Integer): ClockTriggerBuilder;

      /**
       * Specifies to run the trigger every n weeks.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .timeBased()
       *         .everyWeeks(2)
       *         .onWeekDay(ScriptApp.WeekDay.FRIDAY)
       *         .create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#everyWeeks(Integer)
       * @param n The number of weeks between executions.
       */
      everyWeeks(n: Integer): ClockTriggerBuilder;

      /**
       * Specifies the timezone for the specified dates/time when the trigger runs. By default, the timezone is that of the script.
       * The list of valid timezone strings corresponds with the valid timezone strings listed by Joda.org. An invalid timezone string causes the script to throw an error.
       *
       *     // Schedule the trigger to execute at noon every day in the US/Pacific time zone
       *     ScriptApp.newTrigger('myFunction')
       *         .timeBased()
       *         .atHour(12)
       *         .everyDays(1)
       *         .inTimezone('America/Los_Angeles')
       *         .create();
       *
       * Return:
       * - ClockTriggerBuilder — This ClockTriggerBuilder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#inTimezone(String)
       * @param timezone The timezone with which to treat time information in the event.
       */
      inTimezone(timezone: string): ClockTriggerBuilder;

      /**
       * Specifies the minute at which the trigger runs (plus or minus 15 minutes). If nearMinute() is not called, a random minute value is used.
       *
       *     // Runs at approximately 5:30am in the timezone of the script
       *     ScriptApp.newTrigger('myFunction')
       *         .timeBased()
       *         .atHour(5)
       *         .nearMinute(30)
       *         .everyDays(
       *             1)  // Frequency is required if you are using atHour() or nearMinute()
       *         .create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#nearMinute(Integer)
       * @param minute The minute at which to fire.
       */
      nearMinute(minute: Integer): ClockTriggerBuilder;

      /**
       * Specifies the date in the month that the trigger runs.
       *
       *     // Schedules for the first of every month
       *     ScriptApp.newTrigger('myFunction').timeBased().onMonthDay(1).create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#onMonthDay(Integer)
       * @param day The day of the month the trigger should be scheduled for.
       */
      onMonthDay(day: Integer): ClockTriggerBuilder;

      /**
       * Specifies the day of the week that the trigger runs.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .timeBased()
       *         .onWeekDay(ScriptApp.WeekDay.FRIDAY)
       *         .create();
       *
       * Return:
       * - ClockTriggerBuilder — The builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/clock-trigger-builder#onWeekDay(Weekday)
       * @param day The day of the week to fire.
       */
      onWeekDay(day: Base.Weekday): ClockTriggerBuilder;
    }
    /**
     * A builder for document triggers.
     */
    interface DocumentTriggerBuilder {

      /**
       * Creates and returns the new trigger.
       *
       * Return:
       * - Trigger — The new trigger.
       *
       * https://developers.google.com/apps-script/reference/script/document-trigger-builder#create()
       */
      create(): Trigger;

      /**
       * Specifies a trigger that will fire when the document is opened.
       *
       *     const document = DocumentApp.getActiveDocument();
       *     ScriptApp.newTrigger('myFunction').forDocument(document).onOpen().create();
       *
       * Return:
       * - DocumentTriggerBuilder — This DocumentTriggerBuilder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/document-trigger-builder#onOpen()
       */
      onOpen(): DocumentTriggerBuilder;
    }
    /**
     * An enumeration denoting the type of triggered event.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ScriptApp.EventType.CLOCK.
     */
    enum EventType { CLOCK, ON_OPEN, ON_EDIT, ON_FORM_SUBMIT, ON_CHANGE, ON_EVENT_UPDATED }
    /**
     * A builder for form triggers.
     */
    interface FormTriggerBuilder {

      /**
       * Creates and returns the new trigger.
       *
       * Return:
       * - Trigger — The new trigger.
       *
       * https://developers.google.com/apps-script/reference/script/form-trigger-builder#create()
       */
      create(): Trigger;

      /**
       * Specifies a trigger that will fire when a response is submitted to the form.
       *
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     ScriptApp.newTrigger('myFunction').forForm(form).onFormSubmit().create();
       *
       * Return:
       * - FormTriggerBuilder — this FormTriggerBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/script/form-trigger-builder#onFormSubmit()
       */
      onFormSubmit(): FormTriggerBuilder;

      /**
       * Specifies a trigger that will fire when the form's edit view is opened.
       *
       *     const form = FormApp.getActiveForm();
       *     ScriptApp.newTrigger('myFunction').forForm(form).onOpen().create();
       *
       * Return:
       * - FormTriggerBuilder — This FormTriggerBuilder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/form-trigger-builder#onOpen()
       */
      onOpen(): FormTriggerBuilder;
    }
    /**
     * An enumeration that indicates how the script came to be installed as an add-on for the current
     * user.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ScriptApp.InstallationSource.APPS_MARKETPLACE_DOMAIN_ADD_ON.
     */
    enum InstallationSource { APPS_MARKETPLACE_DOMAIN_ADD_ON, NONE, WEB_STORE_ADD_ON }
    /**
     * Access and manipulate script publishing and triggers. This class allows users to create script
     * triggers and control publishing the script as a service.
     */
    interface ScriptApp {
      AuthMode: typeof AuthMode;
      AuthorizationStatus: typeof AuthorizationStatus;
      EventType: typeof EventType;
      InstallationSource: typeof InstallationSource;
      TriggerSource: typeof TriggerSource;
      WeekDay: typeof Base.Weekday;

      /**
       * Removes the given trigger so it no longer runs.
       *
       *     // Deletes all triggers in the current project.
       *     const triggers = ScriptApp.getProjectTriggers();
       *     for (let i = 0; i < triggers.length; i++) {
       *       ScriptApp.deleteTrigger(triggers[i]);
       *     }
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#deleteTrigger(Trigger)
       * @param trigger The trigger to delete.
       */
      deleteTrigger(trigger: Trigger): any;

      /**
       * Gets an object that checks if the user has granted authorization for all the script requirements. The object also provides an authorization URL for users to grant those permissions, in case any of the script requirements are not authorized.
       * Some script executions can start without a user's consent for all required scopes used by the script. The information in this object lets you control access to sections of code that require certain scopes and request authorization of those scopes for subsequent executions.
       *
       *     const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
       *     const status = authInfo.getAuthorizationStatus();
       *     const url = authInfo.getAuthorizationUrl();
       *
       * Return:
       * - AuthorizationInfo — An object that can provide information about the user's authorization status.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getAuthorizationInfo(AuthMode)
       * @param authMode The authorization mode for which authorization information is requested; in almost all cases, the value for authMode should be ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL), since no other authorization mode requires that users grant authorization.
       */
      getAuthorizationInfo(authMode: AuthMode): AuthorizationInfo;

      /**
       * Gets an object that checks if the user has granted authorization for the requested scopes. The object also provides an authorization URL for users to grant those permissions, in case any of the requested scopes are not authorized.
       * Some script executions can start without a user's consent for all required scopes used by the script. The information in this object lets you control access to sections of code that require certain scopes and request authorization of those scopes for subsequent executions. Scopes that are invalid or not required by the script lead to an error.
       *
       *     const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL, [
       *       'https://www.googleapis.com/auth/documents',
       *       'https://www.googleapis.com/auth/presentations',
       *     ]);
       *     const status = authInfo.getAuthorizationStatus();
       *     const url = authInfo.getAuthorizationUrl();
       *
       * Return:
       * - AuthorizationInfo — An object that provides information about the user's authorization status and an authorization URL in case some consents are missing.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getAuthorizationInfo(AuthMode,String)
       * @param authMode The authorization mode for which authorization information is requested; in almost all cases, the value for authMode should be ScriptApp.AuthMode.FULL, since no other authorization mode requires that users grant authorization.
       * @param oAuthScopes The OAuth scopes for which authorization information is requested.
       */
      getAuthorizationInfo(authMode: AuthMode, oAuthScopes: string[]): AuthorizationInfo;

      /**
       * Gets an OpenID Connect identity token for the effective user, if the openid scope has been granted. This scope is not included by default, and you must add it as an explicit scope in the manifest file to request it. Include the scopes https://www.googleapis.com/auth/userinfo.email or https://www.googleapis.com/auth/userinfo.profile to return additional user information in the token.
       * The returned ID token is an encoded JSON Web Token (JWT), and it must be decoded to extract information from it. The following examples shows how to decode the token and extract the effective user's Google profile ID.
       *
       *     const idToken = ScriptApp.getIdentityToken();
       *     const body = idToken.split('.')[1];
       *     const decoded = Utilities
       *                         .newBlob(
       *                             Utilities.base64Decode(body),
       *                             )
       *                         .getDataAsString();
       *     const payload = JSON.parse(decoded);
       *
       *     Logger.log(`Profile ID: ${payload.sub}`);
       *
       * Return:
       * - String — The identity token if available; otherwise null.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getIdentityToken()
       */
      getIdentityToken(): string;

      /**
       * Returns an enum value that indicates how the script came to be installed as an add-on for the current user (for example, whether the user installed it personally through the Chrome Web Store, or whether a domain administrator installed it for all users).
       *
       * Return:
       * - InstallationSource — The source of installation.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getInstallationSource()
       */
      getInstallationSource(): InstallationSource;

      /**
       * Gets the OAuth 2.0 access token for the effective user. If the script's OAuth scopes are sufficient to authorize another Google API that normally requires its own OAuth flow (like Google Picker), scripts can bypass the second authorization prompt by passing this token instead. The token expires after a time (a few minutes at minimum); scripts should handle authorization failures and call this method to obtain a fresh token when needed.
       * The token returned by this method only includes scopes that the script currently needs. Scopes that were previously authorized but are no longer used by the script are not included in the returned token. If additional OAuth scopes are needed beyond what the script itself requires, they can be specified in the script's manifest file.
       * You can use this method to call Google APIs that Apps Script doesn't directly support. Pass the returned token in the `Authorization` header of an HTTP request using UrlFetchApp.fetch(url, params).
       *
       *     const url = 'https://www.googleapis.com/drive/v3/files';
       *     const method = 'GET';
       *     const headers = {
       *       Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
       *     };
       *     const response = UrlFetchApp.fetch(url, {
       *       method,
       *       headers,
       *     });
       *
       * Return:
       * - String — A string representation of the OAuth 2.0 token.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getOAuthToken()
       */
      getOAuthToken(): string;

      /**
       * Gets all installable triggers associated with the current project and current user.
       *
       *     Logger.log(
       *         `Current project has ${ScriptApp.getProjectTriggers().length} triggers.`,
       *     );
       *
       * Return:
       * - Trigger[] — An array of the current user's triggers associated with this project.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getProjectTriggers()
       */
      getProjectTriggers(): Trigger[];

      /**
       * Gets the script project's unique ID. This is the preferred method to get the unique identifier for the script project as opposed to getProjectKey(). This ID can be used in all places where project key was previously provided.
       *
       * Return:
       * - String — The script project's ID.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getScriptId()
       */
      getScriptId(): string;

      /**
       * Gets an object used to control publishing the script as a web app.
       *
       *     // Get the URL of the published web app.
       *     const url = ScriptApp.getService().getUrl();
       *
       * Return:
       * - Service — An object used to observe and control publishing the script as a web app.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getService()
       */
      getService(): Service;

      /**
       * Gets all installable triggers owned by this user in the given document, for this script or add-on only. This method cannot be used to see the triggers attached to other scripts.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const triggers = ScriptApp.getUserTriggers(doc);
       *     // Log the handler function for the first trigger in the array.
       *     Logger.log(triggers[0].getHandlerFunction());
       *
       * Return:
       * - Trigger[] — An array of triggers owned by this user in the given document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getUserTriggers(Document)
       * @param document A Google Docs file that may contain installable triggers.
       */
      getUserTriggers(document: Document.Document): Trigger[];

      /**
       * Gets all installable triggers owned by this user in the given form, for this script or add-on only. This method cannot be used to see the triggers attached to other scripts.
       *
       *     const form = FormApp.getActiveForm();
       *     const triggers = ScriptApp.getUserTriggers(form);
       *     // Log the trigger source for the first trigger in the array.
       *     Logger.log(triggers[0].getTriggerSource());
       *
       * Return:
       * - Trigger[] — An array of triggers owned by this user in the given form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getUserTriggers(Form)
       * @param form A Google Forms file that may contain installable triggers.
       */
      getUserTriggers(form: Forms.Form): Trigger[];

      /**
       * Gets all installable triggers owned by this user in the given spreadsheet, for this script or add-on only. This method cannot be used to see the triggers attached to other scripts.
       *
       *     const ss = SpreadsheetApp.getActiveSpreadsheet();
       *     const triggers = ScriptApp.getUserTriggers(ss);
       *     // Log the event type for the first trigger in the array.
       *     Logger.log(triggers[0].getEventType());
       *
       * Return:
       * - Trigger[] — An array of triggers owned by this user in the given spreadsheet.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#getUserTriggers(Spreadsheet)
       * @param spreadsheet A Google Sheets file that may contain installable triggers.
       */
      getUserTriggers(spreadsheet: Spreadsheet.Spreadsheet): Trigger[];

      /**
       * Invalidates the authorization the effective user has to execute the current script. Used to invalidate any permissions for the current script. This is especially useful for functions tagged as one-shot authorization. Since one-shot authorization functions can only be called the first run after the script has acquired authorization, if you wish to perform an action afterwards, you must revoke any authorization the script had, so the user can see the authorization dialog again.
       *
       *     ScriptApp.invalidateAuth();
       *
       * Throws:
       * - Error — when invalidation fails
       *
       * https://developers.google.com/apps-script/reference/script/script-app#invalidateAuth()
       */
      invalidateAuth(): any;

      /**
       * Creates a builder for a state token that can be used in a callback API (like an OAuth flow).
       *
       *     // Generate a callback URL, given the name of a callback function. The script
       *     // does not need to be published as a web app; the /usercallback URL suffix
       *     // replaces /edit in any script's URL.
       *     function getCallbackURL(callbackFunction) {
       *       // IMPORTANT: Replace string below with the URL from your script, minus the
       *       // /edit at the end.
       *       const scriptUrl =
       *           'https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz';
       *       const urlSuffix = '/usercallback?state=';
       *       const stateToken = ScriptApp.newStateToken()
       *                              .withMethod(callbackFunction)
       *                              .withTimeout(120)
       *                              .createToken();
       *       return scriptUrl + urlSuffix + stateToken;
       *     }
       *
       * In most OAuth2 flows, the state token is passed to the authorization endpoint directly (not as part of the callback URL), and the authorization endpoint then passes it as part of the callback URL.
       * For example:
       * - The script redirects the user to OAuth2 authorize URL: https://accounts.google.com/o/oauth2/auth?state=token_generated_with_this_method&callback_uri=https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback&other_oauth2_parameters
       * - The user clicks authorize, and the OAuth2 authorization page redirects the user back to
       *
       *       https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback?state=token_generated_with_this_method&other_params_that_include_tokens_or_grants
       *
       * - The above redirect (back to http://script.google.com/...), causes the browser
       *
       *       request to /usercallback, which invokes the method specified by StateTokenBuilder.withMethod(method).
       *
       * Return:
       * - StateTokenBuilder — An object used to continue the state-token-building process.
       *
       * https://developers.google.com/apps-script/reference/script/script-app#newStateToken()
       */
      newStateToken(): StateTokenBuilder;

      /**
       * Begins the process of creating an installable trigger that, when fired, calls a given function.
       *
       *     // Creates an edit trigger for a spreadsheet identified by ID.
       *     ScriptApp.newTrigger('myFunction')
       *         .forSpreadsheet('1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3')
       *         .onEdit()
       *         .create();
       *
       * Before creating a trigger, verify that the associated function has all the necessary OAuth permissions
       *
       * Return:
       * - TriggerBuilder — An object used to continue the trigger-building process.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/script-app#newTrigger(String)
       * @param functionName The function to call when the trigger fires. You can use functions from included libraries, such as Library.libFunction1.
       */
      newTrigger(functionName: string): TriggerBuilder;

      /**
       * Validates if the user has granted consent for all of the scopes requested by the script. Use this method if an execution flow relies on all of the scopes that a script requests. If any consents are missing, then this method ends the current execution and renders an authorization prompt to request the missing consents.
       * This method only works when users run the script from a surface that supports granular consent, for example, from within the Apps Script IDE. When the script is run with missing consents from an unsupported surface, such as a Google Workspace add-on, the script renders an authorization prompt at the start of the execution to request all the scopes.
       *
       *     ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
       *
       * https://developers.google.com/apps-script/reference/script/script-app#requireAllScopes(AuthMode)
       * @param authMode The authorization mode for which script scopes needs to be evaluated, in almost all cases, the value for authMode should be ScriptApp.AuthMode.FULL, since no other authorization mode requires that users grant authorization.
       */
      requireAllScopes(authMode: AuthMode): any;

      /**
       * Validates if the user has granted consent for the requested scopes. Use this method if an execution flow relies on one or more services. If any of the specified consents are missing, then this method ends the current execution and renders an authorization prompt to request the missing consents. Scopes that are invalid or not required by the script lead to an error.
       * This method only works when users run the script from a surface that supports granular consent, for example, from within the Apps Script IDE. When the script is run with missing consents from an unsupported surface, such as a Google Workspace add-on, the script renders an authorization prompt at the start of the execution to request all the scopes.
       *
       *     ScriptApp.requireScopes(ScriptApp.AuthMode.FULL, [
       *       'https://www.googleapis.com/auth/documents',
       *       'https://www.googleapis.com/auth/presentations',
       *     ]);
       *
       * https://developers.google.com/apps-script/reference/script/script-app#requireScopes(AuthMode,String)
       * @param authMode The authorization mode for which requested scopes needs to be evaluated, in almost all cases, the value for authMode should be ScriptApp.AuthMode.FULL, since no other authorization mode requires that users grant authorization.
       * @param oAuthScopes The OAuth scopes that are required to complete the given execution flow.
       */
      requireScopes(authMode: AuthMode, oAuthScopes: string[]): any;
      /** @deprecated DO NOT USE */ getProjectKey(): string;
      /** @deprecated DO NOT USE */ getScriptTriggers(): Trigger[];
    }
    /**
     * Access and manipulate script publishing.
     */
    interface Service {

      /**
       * Returns the URL of the web app, if it has been deployed; otherwise returns null. If you are running the development mode web app, this returns the development mode url.
       *
       *     // Mail the URL of the published web app.
       *     MailApp.sendMail(
       *         'myself@example.com',
       *         'My Snazzy App',
       *         `My new app is now available at ${ScriptApp.getService().getUrl()}`,
       *     );
       *
       * Return:
       * - String — the URL of the web app
       *
       * https://developers.google.com/apps-script/reference/script/service#getUrl()
       */
      getUrl(): string;

      /**
       * Returns true if the script is accessible as a web app.
       *
       * Return:
       * - Boolean — true if the script is published as a web app; false if not
       *
       * https://developers.google.com/apps-script/reference/script/service#isEnabled()
       */
      isEnabled(): boolean;
      /** @deprecated DO NOT USE */ disable(): any;
    }
    /**
     * Builder for spreadsheet triggers.
     */
    interface SpreadsheetTriggerBuilder {

      /**
       * Creates the trigger and returns it.
       *
       * Return:
       * - Trigger — The created trigger.
       *
       * https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#create()
       */
      create(): Trigger;

      /**
       * Specifies a trigger that will fire when the spreadsheet's content or structure is changed.
       *
       *     const sheet = SpreadsheetApp.getActive();
       *     ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onChange().create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — a builder for chaining
       *
       * https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onChange()
       */
      onChange(): SpreadsheetTriggerBuilder;

      /**
       * Specifies a trigger that will fire when the spreadsheet is edited.
       *
       *     const sheet = SpreadsheetApp.getActive();
       *     ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onEdit().create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — a builder for chaining
       *
       * https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onEdit()
       */
      onEdit(): SpreadsheetTriggerBuilder;

      /**
       * Specifies a trigger that will fire when the spreadsheet has a form submitted to it.
       *
       *     const sheet = SpreadsheetApp.getActive();
       *     ScriptApp.newTrigger('myFunction')
       *         .forSpreadsheet(sheet)
       *         .onFormSubmit()
       *         .create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — A builder for chaining.
       *
       * https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onFormSubmit()
       */
      onFormSubmit(): SpreadsheetTriggerBuilder;

      /**
       * Specifies a trigger that will fire when the spreadsheet is opened.
       *
       *     const sheet = SpreadsheetApp.getActive();
       *     ScriptApp.newTrigger('myFunction').forSpreadsheet(sheet).onOpen().create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — a builder for chaining
       *
       * https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onOpen()
       */
      onOpen(): SpreadsheetTriggerBuilder;
    }
    /**
     * Allows scripts to create state tokens that can be used in callback APIs (like OAuth flows).
     *
     *     // Reusable function to generate a callback URL, assuming the script has been
     *     // published as a web app (necessary to obtain the URL programmatically). If the
     *     // script has not been published as a web app, set `var url` in the first line
     *     // to the URL of your script project (which cannot be obtained
     *     // programmatically).
     *     function getCallbackURL(callbackFunction) {
     *       let url = ScriptApp.getService().getUrl();  // Ends in /exec (for a web app)
     *       url = `${
     *           url.slice(0, -4)}usercallback?state=`;  // Change /exec to /usercallback
     *       const stateToken = ScriptApp.newStateToken()
     *                              .withMethod(callbackFunction)
     *                              .withTimeout(120)
     *                              .createToken();
     *       return url + stateToken;
     *     }
     */
    interface StateTokenBuilder {

      /**
       * Constructs an encrypted string representation of the state token.
       *
       *     const stateToken = ScriptApp.newStateToken().createToken();
       *
       * Return:
       * - String — an encrypted string representing the token
       *
       * https://developers.google.com/apps-script/reference/script/state-token-builder#createToken()
       */
      createToken(): string;

      /**
       * Adds an argument to the token. This method can be called multiple times.
       *
       *     const stateToken =
       *         ScriptApp.newStateToken().withArgument('myField', 'myValue').createToken();
       *
       * Return:
       * - StateTokenBuilder — the state token builder, for chaining
       *
       * https://developers.google.com/apps-script/reference/script/state-token-builder#withArgument(String,String)
       * @param name the name of the argument
       * @param value the value of the argument
       */
      withArgument(name: string, value: string): StateTokenBuilder;

      /**
       * Sets a callback function. The default is a function named callback().
       *
       *     const stateToken =
       *         ScriptApp.newStateToken().withMethod('myCallback').createToken();
       *
       * Return:
       * - StateTokenBuilder — the state token builder, for chaining
       *
       * https://developers.google.com/apps-script/reference/script/state-token-builder#withMethod(String)
       * @param method The name of the callback function, represented as a string without parentheses or arguments. You can use functions from included libraries, such as  Library.libFunction1.
       */
      withMethod(method: string): StateTokenBuilder;

      /**
       * Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the maximum duration is 3600 seconds (1 hour).
       *
       *     const stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
       *
       * Return:
       * - StateTokenBuilder — the state token builder, for chaining
       *
       * https://developers.google.com/apps-script/reference/script/state-token-builder#withTimeout(Integer)
       * @param seconds the duration for which the token is valid; the maximum value is 3600
       */
      withTimeout(seconds: Integer): StateTokenBuilder;
    }
    /**
     * A script trigger.
     */
    interface Trigger {

      /**
       * Returns the event type that the trigger fires on.
       *
       *     const triggers = ScriptApp.getProjectTriggers();
       *     for (let i = 0; i < triggers.length; i++) {
       *       if (triggers[i].getEventType() === ScriptApp.EventType.CLOCK) {
       *         // Some code here - other options are:
       *         // ScriptApp.EventType.ON_EDIT
       *         // ScriptApp.EventType.ON_FORM_SUBMIT
       *         // ScriptApp.EventType.ON_OPEN
       *       }
       *     }
       *
       * Return:
       * - EventType — the event type that this is a trigger for
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger#getEventType()
       */
      getEventType(): EventType;

      /**
       * Returns the function that will be called when the trigger fires.
       *
       *     // Create a trigger for the script.
       *     ScriptApp.newTrigger('myFunction')
       *         .forSpreadsheet('id of my spreadsheet')
       *         .onEdit()
       *         .create();
       *     Logger.log(ScriptApp.getProjectTriggers()[0]
       *                    .getHandlerFunction());  // logs "myFunction"
       *
       * Return:
       * - String — the method name
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger#getHandlerFunction()
       */
      getHandlerFunction(): string;

      /**
       * Returns the source of events that will cause the trigger to fire.
       * For example, a spreadsheet onEdit trigger would return SPREADSHEETS, or a time based trigger would return CLOCK.
       *
       *     const triggers = ScriptApp.getProjectTriggers();
       *     for (let i = 0; i < triggers.length; i++) {
       *       if (triggers[i].getTriggerSource() === ScriptApp.TriggerSource.CLOCK) {
       *         Logger.log(`${triggers[i].getUniqueId()} source is clock`);
       *       } else if (
       *           triggers[i].getTriggerSource() === ScriptApp.TriggerSource.SPREADSHEETS) {
       *         Logger.log(`${triggers[i].getUniqueId()} source is spreadsheets`);
       *       }
       *     }
       *
       * Return:
       * - TriggerSource — the publisher this is a trigger for
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger#getTriggerSource()
       */
      getTriggerSource(): TriggerSource;

      /**
       * Returns the id specific to the source.
       * For example, if the trigger source is a spreadsheet, this would be the id of the spreadsheet. For clock events this returns null.
       *
       * Return:
       * - String — the id of the entity in the publisher that this is a trigger for
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger#getTriggerSourceId()
       */
      getTriggerSourceId(): string;

      /**
       * Returns a unique identifier that can be used to distinguish triggers from each other.
       *
       * Return:
       * - String — the unique identifier of the trigger
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger#getUniqueId()
       */
      getUniqueId(): string;
    }
    /**
     * A generic builder for script triggers.
     */
    interface TriggerBuilder {

      /**
       * Creates and returns a DocumentTriggerBuilder tied to the given document.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forDocument(DocumentApp.getActiveDocument())
       *         .onOpen()
       *         .create();
       *
       * Return:
       * - DocumentTriggerBuilder — the new DocumentTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forDocument(Document)
       * @param document the document
       */
      forDocument(document: Document.Document): DocumentTriggerBuilder;

      /**
       * Creates and returns a DocumentTriggerBuilder tied to the document with the given ID.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forDocument('1234567890abcdefghijklmnopqrstuvwxyz')
       *         .onOpen()
       *         .create();
       *
       * Return:
       * - DocumentTriggerBuilder — the new DocumentTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forDocument(String)
       * @param key the ID for the document
       */
      forDocument(key: string): DocumentTriggerBuilder;

      /**
       * Creates and returns a FormTriggerBuilder tied to the given form.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forForm(FormApp.getActiveForm())
       *         .onFormSubmit()
       *         .create();
       *
       * Return:
       * - FormTriggerBuilder — the new FormTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forForm(Form)
       * @param form the form
       */
      forForm(form: Forms.Form): FormTriggerBuilder;

      /**
       * Creates and returns a FormTriggerBuilder tied to the form with the given ID.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forForm('1234567890abcdefghijklmnopqrstuvwxyz')
       *         .onFormSubmit()
       *         .create();
       *
       * Return:
       * - FormTriggerBuilder — the new FormTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forForm(String)
       * @param key the ID for the form
       */
      forForm(key: string): FormTriggerBuilder;

      /**
       * Creates and returns a SpreadsheetTriggerBuilder tied to the given spreadsheet.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forSpreadsheet(SpreadsheetApp.getActive())
       *         .onEdit()
       *         .create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — the new SpreadsheetTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/spreadsheets.currentonly
       * - https://www.googleapis.com/auth/spreadsheets
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forSpreadsheet(Spreadsheet)
       * @param sheet the spreadsheet
       */
      forSpreadsheet(sheet: Spreadsheet.Spreadsheet): SpreadsheetTriggerBuilder;

      /**
       * Creates and returns a SpreadsheetTriggerBuilder tied to the spreadsheet with the given ID.
       *
       *     ScriptApp.newTrigger('myFunction')
       *         .forSpreadsheet('1234567890abcdefghijklmnopqrstuvwxyz')
       *         .onEdit()
       *         .create();
       *
       * Return:
       * - SpreadsheetTriggerBuilder — the new SpreadsheetTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/spreadsheets.currentonly
       * - https://www.googleapis.com/auth/spreadsheets
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forSpreadsheet(String)
       * @param key the ID for the spreadsheet
       */
      forSpreadsheet(key: string): SpreadsheetTriggerBuilder;

      /**
       * Returns a builder for building calendar triggers.
       *
       * Return:
       * - CalendarTriggerBuilder — The new CalendarTriggerBuilder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/calendar
       * - https://www.googleapis.com/auth/calendar.readonly
       * - https://www.googleapis.com/auth/calendar.events
       * - https://www.googleapis.com/auth/calendar.events.readonly
       * - https://www.google.com/calendar/feeds
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#forUserCalendar(String)
       * @param emailId email ID of the user calendar the trigger monitors.
       */
      forUserCalendar(emailId: string): CalendarTriggerBuilder;

      /**
       * Creates and returns a ClockTriggerBuilder for building time-based triggers.
       *
       *     ScriptApp.newTrigger('myFunction').timeBased().atDate(2013, 10, 31).create();
       *
       * Return:
       * - ClockTriggerBuilder — the new ClockTriggerBuilder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.scriptapp
       *
       * https://developers.google.com/apps-script/reference/script/trigger-builder#timeBased()
       */
      timeBased(): ClockTriggerBuilder;
    }
    /**
     * An enumeration denoting the source of the event that causes the trigger to fire.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * ScriptApp.TriggerSource.SPREADSHEETS.
     */
    enum TriggerSource { SPREADSHEETS, CLOCK, FORMS, DOCUMENTS, CALENDAR }
  }
}

declare var ScriptApp: GoogleAppsScript.Script.ScriptApp;
