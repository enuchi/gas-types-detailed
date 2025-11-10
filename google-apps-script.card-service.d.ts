// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.conference-data.d.ts" />
/// <reference path="google-apps-script.gmail.d.ts" />

declare namespace GoogleAppsScript {
  namespace Card {
    /**
     * An action that enables interactivity within UI elements. The action does not happen directly on
     * the client but rather invokes an Apps Script callback function
     * with optional parameters.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const image = CardService.newImage().setOnClickAction(
     *         CardService.newAction().setFunctionName('handleImageClick').setParameters({
     *           imageSrc: 'carImage'
     *         }),
     *     );
     */
    interface Action {

      /**
       * Adds the names of the widgets that this Action needs for a valid submission. If the widgets in this list don't have a value when this Action is invoked, the form submission is aborted.
       * Available for Google Workspace add-ons and Google Chat apps.
       *
       *     const textInput = CardService.newTextInput()
       *                           .setFieldName('text_input_1')
       *                           .setTitle('Text input title');
       *
       *     // Creates a footer button that requires an input from the above TextInput
       *     // Widget.
       *     const action = CardService.newAction()
       *                        .setFunctionName('notificationCallback')
       *                        .addRequiredWidget('text_input_1');
       *     const fixedFooter = CardService.newFixedFooter().setPrimaryButton(
       *         CardService.newTextButton().setText('help').setOnClickAction(action),
       *     );
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#addRequiredWidget(String)
       * @param requiredWidget The name of the widget required by this Action.
       */
      addRequiredWidget(requiredWidget: string): Action;

      /**
       * Indicates whether this Action requires inputs from all widgets.
       * Available for Google Workspace add-ons and Google Chat apps.
       *
       *     // Creates a button with an action that requires inputs from all widgets.
       *     const button = CardService.newTextButton()
       *                        .setText('Create notification')
       *                        .setOnClickAction(
       *                            CardService.newAction().setAllWidgetsAreRequired(true));
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setAllWidgetsAreRequired(Boolean)
       * @param allWidgetsAreRequired Whether the action requires inputs from all widgets. Defaults to false.
       */
      setAllWidgetsAreRequired(allWidgetsAreRequired: boolean): Action;

      /**
       * Sets the name of the callback function to be called. Required.
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setFunctionName(String)
       * @param functionName The name of the function. You can use functions from included libraries, such as Library.libFunction1.
       */
      setFunctionName(functionName: string): Action;

      /**
       * Sets the interaction with a user, only required when opening a dialog. If unspecified, the app responds by executing an Action like opening a link or running a function—as normal.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const action = CardService.newAction()
       *                        .setFunctionName('handleDialog')
       *                        .setInteraction(CardService.Interaction.OPEN_DIALOG);
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setInteraction(Interaction)
       * @param interaction The interaction to specify.
       */
      setInteraction(interaction: Interaction): Action;

      /**
       * Sets the loading indicator that displays while the action is in progress.
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setLoadIndicator(LoadIndicator)
       * @param loadIndicator The indicator to display.
       */
      setLoadIndicator(loadIndicator: LoadIndicator): Action;

      /**
       * Allows custom parameters to be passed to the callback function. Optional.
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setParameters(Object)
       * @param parameters Both keys and values must be strings.
       */
      setParameters(parameters: any): Action;

      /**
       * Indicates whether form values are determined by the client's values or the server's values after an action response updates the form's Card. When set to true, the client's values persist after the server response. When set to false, the server's values overwrite the form values. Defaults to false.
       * Persisting the client values helps prevent situations where a form changes unexpectedly after a user makes an edit. For example, if a user makes an edit to a TextInput after submitting a form, but before the server responds. If the values are persisted, the edit the user made remains after the server response updates the Card; otherwise the form value returns to the value that the user originally submitted to the form.
       * Persisting client values can interfere with your script's ability to clear form fields or override form values, so avoid turning on persistence for that type of functionality. Without persistence, it's recommended that you use the LoadIndicator.SPINNER for events, because this locks the UI and prevents user edits before the server responds. Alternatively, you can use LoadIndicator.NONE and make sure every element in the form has an onChange action.
       *
       *     // Creates a button with an action that persists the client's values as the
       *     // on-click action.
       *     const button =
       *         CardService.newTextButton()
       *             .setText('Create notification')
       *             .setOnClickAction(
       *                 CardService.newAction().setPersistValues(true).setFunctionName(
       *                     'functionName'),
       *             );
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action#setPersistValues(Boolean)
       * @param persistValues Whether to persist values. Defaults to false.
       */
      setPersistValues(persistValues: boolean): Action;
      /** @deprecated DO NOT USE */ setMethodName(functionName: string): Action;
    }
    /**
     * The response object that may be returned from a callback function (e.g., a form response handler)
     * to perform one or more actions on the client. Some combinations of actions are not supported.
     *
     *     // An action that opens a link
     *     const actionResponse =
     *         CardService.newActionResponseBuilder()
     *             .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
     *             .build();
     *
     *     // An action that shows a notification.
     *     const notificationActionResponse = CardService.newActionResponseBuilder()
     *                                .setNotification(
     *                                    CardService.newNotification().setText(
     *                                        'Some info to display to user'),
     *                                    )
     *                                .build();
     *
     *     // An action that shows an additional card. It also sets a flag to indicate that
     *     // the original state data has changed.
     *
     *     const cardBuilder = CardService.newCardBuilder();
     *     // Build card ...
     *     const navigationActionResponse = CardService.newActionResponseBuilder()
     *                                .setNavigation(CardService.newNavigation().pushCard(
     *                                    cardBuilder.build()))
     *                                .setStateChanged(true)
     *                                .build();
     */
    interface ActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for ActionResponse objects.
     */
    interface ActionResponseBuilder {

      /**
       * Builds the current action response and validates it.
       *
       * Return:
       * - ActionResponse — A validated ActionResponse.
       *
       * Throws:
       * - Error — if the constructed action response isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#build()
       */
      build(): ActionResponse;

      /**
       * Sets the response to a Navigation action.
       *
       * Return:
       * - ActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNavigation(Navigation)
       * @param navigation The Navigation to use.
       */
      setNavigation(navigation: Navigation): ActionResponseBuilder;

      /**
       * Sets the notification to display when the action is activated.
       *
       * Return:
       * - ActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNotification(Notification)
       * @param notification The Notification to use.
       */
      setNotification(notification: Notification): ActionResponseBuilder;

      /**
       * Sets the URL to navigate to when the action is activated.
       *
       * Return:
       * - ActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setOpenLink(OpenLink)
       * @param openLink The OpenLink to use.
       */
      setOpenLink(openLink: OpenLink): ActionResponseBuilder;

      /**
       * Sets a flag to indicate that this action changed the existing data state. For example, if the action created a task or updated contact information. When this flag is set to true, services such as Gmail can attempt to clear any cached state data associated with this action.
       *
       * Return:
       * - ActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setStateChanged(Boolean)
       * @param stateChanged Whether this action has changed the existing state data. Defaults to false.
       */
      setStateChanged(stateChanged: boolean): ActionResponseBuilder;
    }
    /**
     * A class that represents the status for a request to either invoke or submit a dialog.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const actionStatus = CardService.newActionStatus()
     *                              .setStatusCode(CardService.Status.OK)
     *                              .setUserFacingMessage('Success');
     */
    interface ActionStatus {

      /**
       * Represents the status for a request to either open or submit a dialog.
       *
       *     const actionStatus = CardService.newActionStatus().setStatusCode(
       *         CardService.Status.OK,
       *     );
       *
       * Return:
       * - ActionStatus — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-status#setStatusCode(Status)
       * @param statusCode The status code.
       */
      setStatusCode(statusCode: Status): ActionStatus;

      /**
       * The message to send users about the status of their request. If unset, a generic message based on the Status is sent.
       *
       *     const actionStatus =
       *         CardService.newActionStatus().setUserFacingMessage('Success');
       *
       * Return:
       * - ActionStatus — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/action-status#setUserFacingMessage(String)
       * @param message The message to send.
       */
      setUserFacingMessage(message: string): ActionStatus;
    }
    /**
     * Represents an attachment created by an add-on. This can be used within the context of different
     * Google extensibility products to generate new attachments, such as for Calendar events.
     *
     *     const attachment = CardService.newAttachment()
     *                            .setResourceUrl('https://fakeresourceurl.com')
     *                            .setTitle('Attachment title')
     *                            .setMimeType('text/html')
     *                            .setIconUrl('https://fakeresourceurl.com/iconurl.png');
     */
    interface Attachment {

      /**
       * Sets the icon URL for the attachment.
       *
       * Return:
       * - Attachment — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/attachment#setIconUrl(String)
       * @param iconUrl The URL address of the attachment icon.
       */
      setIconUrl(iconUrl: string): Attachment;

      /**
       * Sets the MIME type for the attachment.
       *
       * Return:
       * - Attachment — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/attachment#setMimeType(String)
       * @param mimeType The MIME type of the content in the attachment resource.
       */
      setMimeType(mimeType: string): Attachment;

      /**
       * Sets the resource URL for the attachment.
       *
       * Return:
       * - Attachment — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/attachment#setResourceUrl(String)
       * @param resourceUrl The URL address of a resource.
       */
      setResourceUrl(resourceUrl: string): Attachment;

      /**
       * Sets the title for the attachment.
       *
       * Return:
       * - Attachment — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/attachment#setTitle(String)
       * @param title The title of the attachment.
       */
      setTitle(title: string): Attachment;
    }
    /**
     * An authorization action that will send the user to the AuthorizationUrl when clicked.
     *
     *     CardService.newAuthorizationAction().setAuthorizationUrl('http://google.com/');
     */
    interface AuthorizationAction {

      /**
       * Sets the authorization URL that user is taken to from the authorization prompt. Required.
       *
       * Return:
       * - AuthorizationAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-action#setAuthorizationUrl(String)
       * @param authorizationUrl The authorization URL to set.
       */
      setAuthorizationUrl(authorizationUrl: string): AuthorizationAction;
    }
    /**
     * An error that can be returned to trigger an authorization card to be shown to the user.
     *
     *     CardService.newAuthorizationException()
     *         .setAuthorizationUrl('http://auth.com/')
     *         .setResourceDisplayName('Example Resource')
     *         .throwException();
     */
    interface AuthorizationException {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#printJson()
       */
      printJson(): string;

      /**
       * Sets the authorization URL that user is taken to from the authorization prompt. Required.
       *
       * Return:
       * - AuthorizationException — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setAuthorizationUrl(String)
       * @param authUrl The authorization URL to set.
       */
      setAuthorizationUrl(authUrl: string): AuthorizationException;

      /**
       * The name of a function to call to generate a custom authorization prompt. Optional.
       *
       * Return:
       * - AuthorizationException — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setCustomUiCallback(String)
       * @param callback The name of the function that generates a custom authorization prompt.
       */
      setCustomUiCallback(callback: string): AuthorizationException;

      /**
       * Sets the name that is displayed to the user when asking for authorization. Required.
       *
       * Return:
       * - AuthorizationException — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setResourceDisplayName(String)
       * @param name The display name.
       */
      setResourceDisplayName(name: string): AuthorizationException;

      /**
       * Triggers this exception to be thrown.
       *
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#throwException()
       */
      throwException(): void;
    }
    /**
     * A class that represents a complete border style that can be applied to widgets.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.BorderStyle.NO_BORDER.
     */
    interface BorderStyle {

      /**
       * Sets the corner radius of the border, for example 8.
       *
       * Return:
       * - BorderStyle — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/border-style#setCornerRadius(Integer)
       * @param radius The corner radius to be applied to the border.
       */
      setCornerRadius(radius: Integer): BorderStyle;

      /**
       * Sets the color of the border.
       *
       * Return:
       * - BorderStyle — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/border-style#setStrokeColor(String)
       * @param color The color in #RGB format to be applied to the border.
       */
      setStrokeColor(color: string): BorderStyle;

      /**
       * Sets the type of the border.
       *
       * Return:
       * - BorderStyle — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/border-style#setType(BorderType)
       * @param type The border type.
       */
      setType(type: BorderType): BorderStyle;
    }
    /**
     * An enum that represents the border types that can be applied to widgets.
     */
    enum BorderType { NO_BORDER, STROKE }
    /**
     * A base class for all buttons.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     */
    interface Button {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Button;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Button;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Button;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Button;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Button;

      /**
       * Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify an action to be triggered when clicked. Nested menus are not supported, actions for menu items should not specify an overflow menu.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const overflowMenuItem =
       *         CardService.newOverflowMenuItem()
       *             .setStartIcon(
       *                 CardService.newIconImage().setIconUrl(
       *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
       *                     ),
       *                 )
       *             .setText('Open Link')
       *             .setOpenLink(
       *                 CardService.newOpenLink().setUrl('https://www.google.com'));
       *
       *     const overflowMenu =
       *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem).build();
       *
       * Return:
       * - Button — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setOverflowMenu(OverflowMenu)
       * @param menu The object that specifies the overflow menu to display when this element is clicked.
       */
      setOverflowMenu(menu: OverflowMenu): Button;
    }
    /**
     * Holds a set of Button objects that are displayed in a row.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const textButton = CardService.newTextButton();
     *     // Finish building the text button...
     *
     *     const imageButton = CardService.newImageButton();
     *     // Finish building the image button...
     *
     *     const buttonSet =
     *         CardService.newButtonSet().addButton(textButton).addButton(imageButton);
     */
    interface ButtonSet {

      /**
       * Adds a button.
       *
       * Return:
       * - ButtonSet — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/button-set#addButton(Button)
       * @param button The button to add.
       */
      addButton(button: Button): ButtonSet;
    }
    /**
     * Represents a response that makes changes to the calendar event that the user is currently editing
     * in reaction to an action taken in the UI, such as a button click.
     *
     *     // A CalendarEventActionResponse that adds two attendees to an event.
     *     const calendarEventActionResponse =
     *         CardService.newCalendarEventActionResponseBuilder()
     *             .addAttendees(['user1@example.com', 'user2@example.com'])
     *             .build();
     */
    interface CalendarEventActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for CalendarEventActionResponse objects.
     */
    interface CalendarEventActionResponseBuilder {

      /**
       * Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken.
       *
       * Return:
       * - CalendarEventActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#addAttachments(Attachment)
       * @param attachments An array of Attachments to add.
       */
      addAttachments(attachments: Attachment[]): CalendarEventActionResponseBuilder;

      /**
       * Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken.
       *
       * Return:
       * - CalendarEventActionResponseBuilder — This object, for chaining.
       *
       * Throws:
       * - Error — If too many attendees have been added.
       *
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#addAttendees(String)
       * @param emails An array of email addresses to add to the event.
       */
      addAttendees(emails: string[]): CalendarEventActionResponseBuilder;

      /**
       * Builds the current Calendar event action response and validates it.
       *
       * Return:
       * - CalendarEventActionResponse — A validated CalendarEventActionResponse.
       *
       * Throws:
       * - Error — If the constructed Calendar event action response isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#build()
       */
      build(): CalendarEventActionResponse;

      /**
       * Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
       *
       * Return:
       * - CalendarEventActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#setConferenceData(ConferenceData)
       * @param conferenceData Conference data to set to the event, created by an add on.
       */
      setConferenceData(conferenceData: Conference_Data.ConferenceData): CalendarEventActionResponseBuilder;
    }
    /**
     * A context card that represents a single view in the
     * UI.
     *
     *     const cardSection = CardService.newCardSection();
     *     // Finish building the card section ...
     *
     *     const card = CardService.newCardBuilder()
     *                      .setName('Card name')
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .addSection(cardSection)
     *                      .build();
     */
    interface Card {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/card#printJson()
       */
      printJson(): string;
    }
    /**
     * A clickable menu item that is added to the card header menu.
     *
     *     const action = CardService.newAction();
     *     // Finish building the action...
     *
     *     const cardAction =
     *         CardService.newCardAction().setText('Card action').setOnClickAction(action);
     */
    interface CardAction {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): CardAction;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): CardAction;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): CardAction;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): CardAction;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): CardAction;

      /**
       * Sets the menu text for this action.
       *
       * Return:
       * - CardAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setText(String)
       * @param text The menu item text.
       */
      setText(text: string): CardAction;
    }
    /**
     * A builder for Card objects.
     */
    interface CardBuilder {

      /**
       * Adds a CardAction to this Card.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#addCardAction(CardAction)
       * @param cardAction The CardAction to use.
       */
      addCardAction(cardAction: CardAction): CardBuilder;

      /**
       * Adds a section to this card. You can't add more than 100 sections to a card.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#addSection(CardSection)
       * @param section The CardSection to use.
       */
      addSection(section: CardSection): CardBuilder;

      /**
       * Builds the current card and validates it.
       *
       * Return:
       * - Card — A validated card.
       *
       * Throws:
       * - Error — if the constructed card isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#build()
       */
      build(): Card;

      /**
       * Sets the display style for this card.
       * If the display style is set to DisplayStyle.REPLACE, the card is shown by replacing the view of top card in the card stack.
       * If the display style is set to DisplayStyle.PEEK, the header of the card appears at the bottom of the sidebar, partially covering the current top card of the stack. Clicking the header pops the card into the card stack. If the card has no header, a generated header is used instead.
       * DisplayStyle only works for card returned from contextual trigger function.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setDisplayStyle(DisplayStyle)
       * @param displayStyle The DisplayStyle to set.
       */
      setDisplayStyle(displayStyle: DisplayStyle): CardBuilder;

      /**
       * Sets a fixed footer for this card.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setFixedFooter(FixedFooter)
       * @param fixedFooter The FixedFooter to use.
       */
      setFixedFooter(fixedFooter: FixedFooter): CardBuilder;

      /**
       * Sets the header for this card.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setHeader(CardHeader)
       * @param cardHeader The CardHeader to use.
       */
      setHeader(cardHeader: CardHeader): CardBuilder;

      /**
       * Sets the name for this card. The name can be used for navigation.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setName(String)
       * @param name The name.
       */
      setName(name: string): CardBuilder;

      /**
       * Sets the peek card header.
       * The peek card is set on the first card returned from a contextual trigger function. It is used as a descriptive placeholder widget so that users can navigate from a homepage stack to the contextual stack.
       *
       * Return:
       * - CardBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setPeekCardHeader(CardHeader)
       * @param peekCardHeader The CardHeader to set.
       */
      setPeekCardHeader(peekCardHeader: CardHeader): CardBuilder;
    }
    /**
     * The header of a Card.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const cardHeader = CardService.newCardHeader()
     *                            .setTitle('Card header title')
     *                            .setSubtitle('Card header subtitle')
     *                            .setImageStyle(CardService.ImageStyle.CIRCLE)
     *                            .setImageUrl('https://image.png');
     */
    interface CardHeader {

      /**
       * Sets the alternative text for the header image.
       *
       * Return:
       * - CardHeader — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageAltText(String)
       * @param imageAltText The alternative text for the header image.
       */
      setImageAltText(imageAltText: string): CardHeader;

      /**
       * Sets the cropping of the icon in the card header. Defaults to no crop. Optional.
       *
       * Return:
       * - CardHeader — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageStyle(ImageStyle)
       * @param imageStyle The style setting.
       */
      setImageStyle(imageStyle: ImageStyle): CardHeader;

      /**
       * Sets the image to use in the header by providing its URL or data string.
       * The provided URL can either be a publicly accessible URL or a base64 encoded image string. To obtain the latter, you can use the following code to create an encoded image string from an image in your Google Drive, then store that string for later use with setImageUrl(imageUrl). This method prevents the need for your add-on to access a publicly available image URL:
       *
       *     // The following assumes you have the image to use in Google Drive and have its
       *     // ID.
       *     const imageBytes = DriveApp.getFileById('123abc').getBlob().getBytes();
       *     const encodedImageURL =
       *         `data:image/jpeg;base64,${Utilities.base64Encode(imageBytes)}`;
       *
       *     // You can store encodeImageURL and use it as a parameter to
       *     // CardHeader.setImageUrl(imageUrl).
       *
       * Return:
       * - CardHeader — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageUrl(String)
       * @param imageUrl The URL address of a hosted image to use, or an encoded image string.
       */
      setImageUrl(imageUrl: string): CardHeader;

      /**
       * Sets the subtitle of the card header. Optional.
       *
       * Return:
       * - CardHeader — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-header#setSubtitle(String)
       * @param subtitle The header subtitle text.
       */
      setSubtitle(subtitle: string): CardHeader;

      /**
       * Sets the title of the card header. Required.
       *
       * Return:
       * - CardHeader — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-header#setTitle(String)
       * @param title The header text.
       */
      setTitle(title: string): CardHeader;
    }
    /**
     * A card section holds groups of widgets and provides visual separation between them.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const image = CardService.newImage();
     *     // Build image ...
     *     const textParagraph = CardService.newTextParagraph();
     *     // Build text paragraph ...
     *
     *     const cardSection = CardService.newCardSection()
     *                             .setHeader('Section header')
     *                             .addWidget(image)
     *                             .addWidget(textParagraph);
     */
    interface CardSection {

      /**
       * Adds the given widget to this section. Widgets are shown in the order they were added. You can't add more than 100 widgets to a card section.
       *
       * Return:
       * - CardSection — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-section#addWidget(Widget)
       * @param widget A widget to add to the section.
       */
      addWidget(widget: Widget): CardSection;

      /**
       * Sets the customizable expand and collapse buttons of the section. These buttons are shown only if the section is collapsible. If this field isn't set, default buttons are used.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const collapseButton =
       *         CardService.newTextButton()
       *             .setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS)
       *             .setText('show less');
       *
       *     const expandButton =
       *         CardService.newImageButton()
       *             .setImageButtonStyle(CardService.ImageButtonStyle.FILLED)
       *             .setMaterialIcon(CardService.newMaterialIcon().setName('bug_report'));
       *
       *     const collapsibleSection =
       *         CardService.newCardSection()
       *             .setCollapsible(true)
       *             .setNumUncollapsibleWidgets(1)
       *             .setCollapseControl(
       *                 CardService.newCollapseControl()
       *                     .setHorizontalAlign(CardService.HorizontalAlignment.CENTER)
       *                     .setCollapseButton(collapseButton)
       *                     .setExpandButton(expandButton),
       *             );
       *
       * Return:
       * - CardSection — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-section#setCollapseControl(CollapseControl)
       * @param collapseControl The collapse control setting.
       */
      setCollapseControl(collapseControl: CollapseControl): CardSection;

      /**
       * Sets whether the section can be collapsed.
       *
       * Return:
       * - CardSection — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-section#setCollapsible(Boolean)
       * @param collapsible The collapsible setting.
       */
      setCollapsible(collapsible: boolean): CardSection;

      /**
       * Sets the header of the section. Optional.
       *
       * Return:
       * - CardSection — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-section#setHeader(String)
       * @param header The header text.
       */
      setHeader(header: string): CardSection;

      /**
       * Sets the number of widgets that are still shown when this section is collapsed. The widgets shown are always the first ones that were added.
       *
       * Return:
       * - CardSection — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-section#setNumUncollapsibleWidgets(Integer)
       * @param numUncollapsibleWidgets The number of widgets to show.
       */
      setNumUncollapsibleWidgets(numUncollapsibleWidgets: Integer): CardSection;
    }
    /**
     * CardService provides the ability to create generic cards used across different Google
     * extensibility products, such as Google Workspace add-ons.
     *
     * Below is a sample for an add-ons card.
     *
     *     function createCard() {
     *       return CardService.newCardBuilder()
     *           .setHeader(CardService.newCardHeader().setTitle('CardTitle'))
     *           .build();
     *     }
     *
     * Or you can return multiple Cards like so:
     *
     *     function createCards() {
     *       return [
     *         CardService.newCardBuilder().build(),
     *         CardService.newCardBuilder().build(),
     *         CardService.newCardBuilder().build(),
     *       ];
     *     }
     *
     * The following shows how you could define a card with a header, text, an image and a menu item:
     *
     *     function createWidgetDemoCard() {
     *       return CardService.newCardBuilder()
     *           .setHeader(
     *               CardService.newCardHeader()
     *                   .setTitle('Widget demonstration')
     *                   .setSubtitle('Check out these widgets')
     *                   .setImageStyle(CardService.ImageStyle.SQUARE)
     *                   .setImageUrl('https://www.example.com/images/headerImage.png'),
     *               )
     *           .addSection(
     *               CardService.newCardSection()
     *                   .setHeader('Simple widgets')  // optional
     *                   .addWidget(
     *                       CardService.newTextParagraph().setText(
     *                           'These widgets are display-only. ' +
     *                               'A text paragraph can have multiple lines and ' +
     *                               'formatting.',
     *                           ),
     *                       )
     *                   .addWidget(
     *                       CardService.newImage().setImageUrl(
     *                           'https://www.example.com/images/mapsImage.png',
     *                           ),
     *                       ),
     *               )
     *           .addCardAction(
     *               CardService.newCardAction().setText('Gmail').setOpenLink(
     *                   CardService.newOpenLink().setUrl('https://mail.google.com/mail'),
     *                   ),
     *               )
     *           .build();
     *     }
     *
     * Sample for a Chat Apps card.
     *
     *     const cardHeader =
     *         CardService.newCardHeader()
     *             .setTitle('Sasha')
     *             .setSubtitle('Software Engineer')
     *             .setImageUrl(
     *                 'https://developers.google.com/chat/images/quickstart-app-avatar.png',
     *                 )
     *             .setImageStyle(CardService.ImageStyle.CIRCLE)
     *             .setImageAltText('Avatar for Sasha');
     *
     *     const cardSection =
     *         CardService.newCardSection()
     *             .setHeader('Contact Info')
     *             .setCollapsible(true)
     *             .setNumUncollapsibleWidgets(1)
     *             .addWidget(
     *                 CardService.newDecoratedText()
     *                     .setStartIcon(
     *                         CardService.newIconImage().setIcon(CardService.Icon.EMAIL))
     *                     .setText('sasha@example.com'),
     *                 )
     *             .addWidget(
     *                 CardService.newDecoratedText()
     *                     .setStartIcon(
     *                         CardService.newIconImage().setIcon(CardService.Icon.PERSON))
     *                     .setText('<font color="#80e27e">Online</font>'),
     *                 )
     *             .addWidget(
     *                 CardService.newDecoratedText()
     *                     .setStartIcon(
     *                         CardService.newIconImage().setIcon(CardService.Icon.PHONE))
     *                     .setText('+1 (555) 555-1234'),
     *                 )
     *             .addWidget(
     *                 CardService.newButtonSet()
     *                     .addButton(
     *                         CardService.newTextButton().setText('Share').setOpenLink(
     *                             CardService.newOpenLink().setUrl(
     *                                 'https://example.com/share'),
     *                             ),
     *                         )
     *                     .addButton(
     *                         CardService.newTextButton()
     *                             .setText('Edit')
     *                             .setOnClickAction(
     *                                 CardService.newAction()
     *                                     .setFunctionName('goToView')
     *                                     .setParameters({viewType: 'EDIT'}),
     *                                 ),
     *                         ),
     *             );
     *
     *     const card = CardService.newCardBuilder()
     *                      .setHeader(cardHeader)
     *                      .addSection(cardSection)
     *                      .build();
     */
    interface CardService {
      BorderType: typeof BorderType;
      ChipListLayout: typeof ChipListLayout;
      ComposedEmailType: typeof ComposedEmailType;
      ContentType: typeof ContentType;
      ExpressionDataActionType: typeof ExpressionDataActionType;
      ExpressionDataConditionType: typeof ExpressionDataConditionType;
      GridItemLayout: typeof GridItemLayout;
      HorizontalAlignment: typeof HorizontalAlignment;
      Icon: typeof Icon;
      ImageButtonStyle: typeof ImageButtonStyle;
      ImageCropType: typeof ImageCropType;
      ImageStyle: typeof ImageStyle;
      InputType: typeof InputType;
      LoadIndicator: typeof LoadIndicator;
      OnClose: typeof OnClose;
      OpenAs: typeof OpenAs;
      SelectionInputType: typeof SelectionInputType;
      TextButtonStyle: typeof TextButtonStyle;
      UpdateDraftBodyType: typeof UpdateDraftBodyType;
      Visibility: typeof Visibility;
      WorkflowDataSourceType: typeof WorkflowDataSourceType;

      /**
       * Creates a new Action.
       *
       * Return:
       * - Action — An empty Action.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAction()
       */
      newAction(): Action;

      /**
       * Creates a new ActionResponseBuilder.
       *
       * Return:
       * - ActionResponseBuilder — An empty ActionResponse builder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newActionResponseBuilder()
       */
      newActionResponseBuilder(): ActionResponseBuilder;

      /**
       * Creates a new ActionStatus.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const actionStatus = CardService.newActionStatus()
       *                              .setStatusCode(CardService.Status.OK)
       *                              .setUserFacingMessage('Success');
       *
       * Return:
       * - ActionStatus — An empty ActionStatus.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newActionStatus()
       */
      newActionStatus(): ActionStatus;

      /**
       * Creates a new Attachment.
       *
       * Return:
       * - Attachment — An empty attachment.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAttachment()
       */
      newAttachment(): Attachment;

      /**
       * Creates a new AuthorizationAction.
       *
       * Return:
       * - AuthorizationAction — An empty AuthorizationAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAuthorizationAction()
       */
      newAuthorizationAction(): AuthorizationAction;

      /**
       * Creates a new AuthorizationException.
       *
       * Return:
       * - AuthorizationException — An empty AuthorizationException.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAuthorizationException()
       */
      newAuthorizationException(): AuthorizationException;

      /**
       * Creates a new BorderStyle.
       *
       * Return:
       * - BorderStyle — An empty BorderStyle.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newBorderStyle()
       */
      newBorderStyle(): BorderStyle;

      /**
       * Creates a new ButtonSet.
       *
       * Return:
       * - ButtonSet — An empty ButtonSet.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newButtonSet()
       */
      newButtonSet(): ButtonSet;

      /**
       * Creates a new CalendarEventActionResponseBuilder.
       *
       * Return:
       * - CalendarEventActionResponseBuilder — An empty CalendarEventActionResponseBuilder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCalendarEventActionResponseBuilder()
       */
      newCalendarEventActionResponseBuilder(): CalendarEventActionResponseBuilder;

      /**
       * Creates a new CardAction.
       *
       * Return:
       * - CardAction — An empty CardAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardAction()
       */
      newCardAction(): CardAction;

      /**
       * Creates a new Card builder.
       *
       * Return:
       * - CardBuilder — An empty Card builder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardBuilder()
       */
      newCardBuilder(): CardBuilder;

      /**
       * Creates a new CardHeader.
       *
       * Return:
       * - CardHeader — An empty CardHeader.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardHeader()
       */
      newCardHeader(): CardHeader;

      /**
       * Creates a new CardSection.
       *
       * Return:
       * - CardSection — An empty CardSection.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardSection()
       */
      newCardSection(): CardSection;

      /**
       * Creates a new CardWithId. This is used to send a card in a Google Chat message. card ID is a unique identifier for a card in a message when sending multiple cards.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const cardSection = CardService.newCardSection();
       *     cardSection.addWidget(
       *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
       *     );
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .addSection(cardSection)
       *                      .build();
       *
       *     const cardWithId =
       *         CardService.newCardWithId().setCardId('card_id').setCard(card);
       *
       * Return:
       * - CardWithId — An empty CardWithId.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardWithId()
       */
      newCardWithId(): CardWithId;

      /**
       * Creates a Carousel.
       *
       *     const carousel =
       *         CardService.newCarousel()
       *             .addCarouselCard(CardService.newCarouselCard().addWidget(
       *                 CardService.newTextParagraph().setText('The first text paragraph in carousel')))
       *             .addCarouselCard(CardService.newCarouselCard().addWidget(
       *                 CardService.newTextParagraph().setText('The second text paragraph in carousel')))
       *             .addCarouselCard(CardService.newCarouselCard().addWidget(
       *                 CardService.newTextParagraph().setText('The third text paragraph in carousel')))
       *
       * Return:
       * - Carousel — An empty Carousel.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCarousel()
       */
      newCarousel(): Carousel;

      /**
       * Creates a new CarouselCard.
       *
       *     const carouselCard = CardService.newCarouselCard().addWidget(
       *         CardService.newTextParagraph().setText('Text paragraph in carousel'));
       *
       * Return:
       * - CarouselCard — An empty Chip.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCarouselCard()
       */
      newCarouselCard(): CarouselCard;

      /**
       * Creates a new ChatActionResponse.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .build();
       *     const dialog = CardService.newDialog().setBody(card);
       *
       *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
       *
       *     const chatActionResponse = CardService.newChatActionResponse()
       *                                    .setResponseType(CardService.ResponseType.DIALOG)
       *                                    .setDialogAction(dialogAction);
       *
       * Return:
       * - ChatActionResponse — An empty ChatActionResponse.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newChatActionResponse()
       */
      newChatActionResponse(): ChatActionResponse;

      /**
       * Creates a new ChatResponseBuilder.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const cardSection = CardService.newCardSection();
       *     cardSection.addWidget(
       *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
       *     );
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .addSection(cardSection)
       *                      .build();
       *
       *     const cardWithId =
       *         CardService.newCardWithId().setCardId('card_id').setCard(card);
       *
       *     const chatResponse =
       *         CardService.newChatResponseBuilder().addCardsV2(cardWithId).build();
       *
       * Return:
       * - ChatResponseBuilder — An empty ChatResponseBuilder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newChatResponseBuilder()
       */
      newChatResponseBuilder(): ChatResponseBuilder;

      /**
       * Creates a new Chip.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const chip = CardService.newChip()
       *                      .setLabel('Open Link')
       *                      .setOpenLink(CardService.newOpenLink().setUrl(
       *                          'https://www.google.com'));
       *
       * Return:
       * - Chip — An empty Chip.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newChip()
       */
      newChip(): Chip;

      /**
       * Creates a new ChipList.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const chip = CardService.newChip();
       *     // Finish building the text chip...
       *
       *     const chipList = CardService.newChipList()
       *                          .setLayout(CardService.ChipListLayout.WRAPPED)
       *                          .addChip(chip);
       *
       * Return:
       * - ChipList — An empty ChipList.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newChipList()
       */
      newChipList(): ChipList;

      /**
       * Creates a new CollapseControl.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const collapseControl =
       *         CardService.newCollapseControl()
       *             .setHorizontalAlign(CardService.HorizontalAlignment.START)
       *             .setExpandButton(CardService.newTextButton().setText('Expand'))
       *             .setCollapseButton(CardService.newTextButton().setText('Collapse'));
       *
       * Return:
       * - CollapseControl — An empty CollapseControl.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCollapseControl()
       */
      newCollapseControl(): CollapseControl;

      /**
       * Creates a new Column.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       *     const columnWidget = CardService.newTextParagraph();
       *     const column =
       *         CardService.newColumn()
       *             .setHorizontalSizeStyle(
       *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
       *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
       *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
       *             .addWidget(columnWidget);
       *
       * Return:
       * - Column — An empty Column.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newColumn()
       */
      newColumn(): Column;

      /**
       * Creates a new set of Columns.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       *     const firstColumn =
       *         CardService.newColumn()
       *             .setHorizontalSizeStyle(
       *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
       *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
       *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
       *     const secondColumn =
       *         CardService.newColumn()
       *             .setHorizontalSizeStyle(
       *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
       *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
       *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
       *     const columns = CardService.newColumns()
       *                         .addColumn(firstColumn)
       *                         .addColumn(secondColumn)
       *                         .setWrapStyle(CardService.WrapStyle.WRAP);
       *
       * Return:
       * - Columns — An empty set of Columns.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newColumns()
       */
      newColumns(): Columns;

      /**
       * Creates a new ComposeActionResponseBuilder.
       *
       * Return:
       * - ComposeActionResponseBuilder — An empty ComposeActionResponse builder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newComposeActionResponseBuilder()
       */
      newComposeActionResponseBuilder(): ComposeActionResponseBuilder;

      /**
       * Creates a new DatePicker.
       *
       * Return:
       * - DatePicker — An empty DatePicker.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDatePicker()
       */
      newDatePicker(): DatePicker;

      /**
       * Creates a new DateTimePicker.
       *
       * Return:
       * - DateTimePicker — An empty DateTimePicker.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDateTimePicker()
       */
      newDateTimePicker(): DateTimePicker;

      /**
       * Creates a new DecoratedText.
       *
       * Return:
       * - DecoratedText — An empty DecoratedText.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDecoratedText()
       */
      newDecoratedText(): DecoratedText;

      /**
       * Creates a new Dialog.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .build();
       *
       *     // Sets the card of the dialog.
       *     const dialog = CardService.newDialog().setBody(card);
       *
       * Return:
       * - Dialog — An empty Dialog.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDialog()
       */
      newDialog(): Dialog;

      /**
       * Creates a new DialogAction.
       * Only available for Google Chat apps. Not available for Google Workspace add-ons.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .build();
       *     const dialog = CardService.newDialog().setBody(card);
       *
       *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
       *
       * Return:
       * - DialogAction — An empty DialogAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDialogAction()
       */
      newDialogAction(): DialogAction;

      /**
       * Creates a new Divider. The following sample builds a simple card with 2 paragraphs separated by a divider.
       *
       *     function buildCard() {
       *       const cardSection1TextParagraph1 =
       *           CardService.newTextParagraph().setText('Hello world!');
       *
       *       const cardSection1Divider1 = CardService.newDivider();
       *
       *       const cardSection1TextParagraph2 =
       *           CardService.newTextParagraph().setText('Hello world!');
       *
       *       const cardSection1 = CardService.newCardSection()
       *                                .addWidget(cardSection1TextParagraph1)
       *                                .addWidget(cardSection1Divider1)
       *                                .addWidget(cardSection1TextParagraph2);
       *
       *       const card = CardService.newCardBuilder().addSection(cardSection1).build();
       *
       *       return card;
       *     }
       *
       * Return:
       * - Divider — A divider.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDivider()
       */
      newDivider(): Divider;

      /**
       * Creates a new DriveItemsSelectedActionResponseBuilder.
       *
       * Return:
       * - DriveItemsSelectedActionResponseBuilder — An empty DriveItemsSelectedActionResponseBuilder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDriveItemsSelectedActionResponseBuilder()
       */
      newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;

      /**
       * Creates a new EditorFileScopeActionResponseBuilder.
       *
       * Return:
       * - EditorFileScopeActionResponseBuilder — An empty EditorFileScopeActionResponseBuilder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newEditorFileScopeActionResponseBuilder()
       */
      newEditorFileScopeActionResponseBuilder(): EditorFileScopeActionResponseBuilder;

      /**
       * Creates a new FixedFooter.
       *
       * Return:
       * - FixedFooter — An empty FixedFooter.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newFixedFooter()
       */
      newFixedFooter(): FixedFooter;

      /**
       * Creates a new Grid.
       *
       * Return:
       * - Grid — An empty Grid.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newGrid()
       */
      newGrid(): Grid;

      /**
       * Creates a new GridItem.
       *
       * Return:
       * - GridItem — An empty GridItem.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newGridItem()
       */
      newGridItem(): GridItem;

      /**
       * Creates a new HostAppDataSource and return an empty HostAppDataSource.
       *
       * Return:
       * - HostAppDataSource
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newHostAppDataSource()
       */
      newHostAppDataSource(): HostAppDataSource;

      /**
       * Creates a new IconImage.
       *
       * Return:
       * - IconImage — An empty icon image.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newIconImage()
       */
      newIconImage(): IconImage;

      /**
       * Creates a new Image.
       *
       * Return:
       * - Image — An empty Image.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImage()
       */
      newImage(): Image;

      /**
       * Creates a new ImageButton.
       *
       * Return:
       * - ImageButton — An empty ImageButton.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageButton()
       */
      newImageButton(): ImageButton;

      /**
       * Creates a new ImageComponent.
       *
       * Return:
       * - ImageComponent — An empty ImageComponent.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageComponent()
       */
      newImageComponent(): ImageComponent;

      /**
       * Creates a new ImageCropStyle.
       *
       * Return:
       * - ImageCropStyle — An empty ImageCropStyle.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageCropStyle()
       */
      newImageCropStyle(): ImageCropStyle;

      /**
       * Creates a new KeyValue.
       *
       * Return:
       * - KeyValue — An empty KeyValue.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newKeyValue()
       */
      newKeyValue(): KeyValue;

      /**
       * Creates a new LinkPreview.
       *
       *     const decoratedText =
       *         CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');
       *
       *     const cardSection = CardService.newCardSection().addWidget(decoratedText);
       *
       *     const card = CardService.newCardBuilder().addSection(cardSection).build();
       *
       *     const linkPreview = CardService.newLinkPreview().setPreviewCard(card).setTitle(
       *         'Smart chip title');
       *
       * Return:
       * - LinkPreview — An empty LinkPreview.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newLinkPreview()
       */
      newLinkPreview(): LinkPreview;

      /**
       * Creates a new MaterialIcon.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       *     const materialIcon =
       *         CardService.newMaterialIcon().setName('check_box').setFill(true);
       *
       *     const cardSection = CardService.newCardSection();
       *     cardSection.addWidget(
       *         CardService.newDecoratedText()
       *             .setStartIcon(CardService.newIconImage().setMaterialIcon(materialIcon))
       *             .setText('sasha@example.com'),
       *     );
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card Title'))
       *                      .addSection(cardSection)
       *                      .build();
       *
       * Return:
       * - MaterialIcon — An empty MaterialIcon.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newMaterialIcon()
       */
      newMaterialIcon(): MaterialIcon;

      /**
       * Creates a new Navigation.
       *
       * Return:
       * - Navigation — An empty Navigation.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newNavigation()
       */
      newNavigation(): Navigation;

      /**
       * Creates a new Notification.
       *
       * Return:
       * - Notification — An empty Notification.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newNotification()
       */
      newNotification(): Notification;

      /**
       * Creates a new OpenLink.
       *
       * Return:
       * - OpenLink — An empty OpenLink.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newOpenLink()
       */
      newOpenLink(): OpenLink;

      /**
       * Creates a new OverflowMenu.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const overflowMenuItem = CardService.newOverflowMenuItem();
       *     // Finish building the overflow menu item...
       *
       *     const overflowMenu =
       *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem);
       *
       * Return:
       * - OverflowMenu — An empty OverflowMenu.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newOverflowMenu()
       */
      newOverflowMenu(): OverflowMenu;

      /**
       * Creates a new OverflowMenuItem.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const overflowMenuItem =
       *         CardService.newOverflowMenuItem()
       *             .setStartIcon(
       *                 CardService.newIconImage().setIconUrl(
       *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
       *                     ),
       *                 )
       *             .setText('Open Link')
       *             .setOpenLink(
       *                 CardService.newOpenLink().setUrl('https://www.google.com'));
       *
       * Return:
       * - OverflowMenuItem — An empty OverflowMenuItem.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newOverflowMenuItem()
       */
      newOverflowMenuItem(): OverflowMenuItem;

      /**
       * Creates a new SelectionInput.
       *
       * Return:
       * - SelectionInput — An empty SelectionInput.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSelectionInput()
       */
      newSelectionInput(): SelectionInput;

      /**
       * Creates a new Suggestions.
       *
       * Return:
       * - Suggestions — An empty Suggestions.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSuggestions()
       */
      newSuggestions(): Suggestions;

      /**
       * Creates a new SuggestionsResponseBuilder.
       *
       * Return:
       * - SuggestionsResponseBuilder — An empty SuggestionsResponse builder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSuggestionsResponseBuilder()
       */
      newSuggestionsResponseBuilder(): SuggestionsResponseBuilder;

      /**
       * Creates a new Switch.
       *
       * Return:
       * - Switch — An empty Switch.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSwitch()
       */
      newSwitch(): Switch;

      /**
       * Creates a new TextButton.
       *
       * Return:
       * - TextButton — An empty TextButton.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextButton()
       */
      newTextButton(): TextButton;

      /**
       * Creates a new TextInput.
       *
       * Return:
       * - TextInput — An empty TextInput.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextInput()
       */
      newTextInput(): TextInput;

      /**
       * Creates a new TextParagraph.
       *
       * Return:
       * - TextParagraph — An empty TextParagraph.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextParagraph()
       */
      newTextParagraph(): TextParagraph;

      /**
       * Creates a new TimePicker.
       *
       * Return:
       * - TimePicker — An empty TimePicker.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTimePicker()
       */
      newTimePicker(): TimePicker;

      /**
       * Creates a new UniversalActionResponseBuilder.
       *
       * Return:
       * - UniversalActionResponseBuilder — An empty UniversalActionResponse builder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUniversalActionResponseBuilder()
       */
      newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;

      /**
       * Creates a new UpdateDraftActionResponseBuilder.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — An empty UpdateDraftActionResponseBuilder.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftActionResponseBuilder()
       */
      newUpdateDraftActionResponseBuilder(): UpdateDraftActionResponseBuilder;

      /**
       * Creates a new UpdateDraftBccRecipientsAction;
       *
       * Return:
       * - UpdateDraftBccRecipientsAction — An empty UpdateDraftBccRecipientsAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftBccRecipientsAction()
       */
      newUpdateDraftBccRecipientsAction(): UpdateDraftBccRecipientsAction;

      /**
       * Creates a new UpdateDraftBodyAction.
       *
       * Return:
       * - UpdateDraftBodyAction — An empty UpdateDraftBodyAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftBodyAction()
       */
      newUpdateDraftBodyAction(): UpdateDraftBodyAction;

      /**
       * Creates a new UpdateDraftCcRecipientsAction.
       *
       * Return:
       * - UpdateDraftCcRecipientsAction — An Empty UpdateDraftCcRecipientsAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftCcRecipientsAction()
       */
      newUpdateDraftCcRecipientsAction(): UpdateDraftCcRecipientsAction;

      /**
       * Creates a new UpdateDraftSubjectAction.
       *
       * Return:
       * - UpdateDraftSubjectAction — An empty UpdateDraftSubjectAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftSubjectAction()
       */
      newUpdateDraftSubjectAction(): UpdateDraftSubjectAction;

      /**
       * Creates a new UpdateDraftToRecipientsAction.
       *
       * Return:
       * - UpdateDraftToRecipientsAction — An empty UpdateDraftToRecipientsAction.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftToRecipientsAction()
       */
      newUpdateDraftToRecipientsAction(): UpdateDraftToRecipientsAction;

      /**
       * Creates a new Validation.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       *     const validation =
       *         CardService.newValidation().setCharacterLimit(5).setInputType(
       *             CardService.InputType.EMAIL);
       *
       * Return:
       * - Validation — An empty validation.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-service#newValidation()
       */
      newValidation(): Validation;
    }
    /**
     * A builder for CardWithId objects. This class is a unique identifier for a card in a
     * message when sending multiple cards.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const cardSection = CardService.newCardSection();
     *     cardSection.addWidget(
     *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
     *     );
     *
     *     const card = CardService.newCardBuilder()
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .addSection(cardSection)
     *                      .build();
     *
     *     const cardWithId =
     *         CardService.newCardWithId().setCardId('card_id').setCard(card);
     */
    interface CardWithId {

      /**
       * Sets the card of the cardWithId.
       *
       *     const cardHeader = CardService.newCardHeader()
       *                            .setTitle('Card Header Title')
       *                            .setSubtitle('Card Header Subtitle');
       *
       *     const card = CardService.newCardBuilder().setHeader(cardHeader).build();
       *
       *     const cardWithId = CardService.newCardWithId().setCard(card);
       *
       * Return:
       * - CardWithId — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-with-id#setCard(Card)
       * @param card The Card to use.
       */
      setCard(card: Card): CardWithId;

      /**
       * Sets the unique card ID of the cardWithId.
       *
       *     const cardWithId = CardService.newCardWithId();
       *
       *     // Sets the card ID of the cardWithId.
       *     cardWithId.setCardId('card_id');
       *
       * Return:
       * - CardWithId — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/card-with-id#setCardId(String)
       * @param id The text to use.
       */
      setCardId(id: string): CardWithId;
    }
    /**
     * Carousel, also known as slider, rotates and displays a list of widgets in a slideshow format,
     * with buttons navigating to the previous or next widget.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const carousel =
     *         CardService.newCarousel()
     *             .addCarouselCard(CardService.newCarouselCard().addWidget(
     *                 CardService.newTextParagraph().setText('The first text paragraph in carousel')))
     *             .addCarouselCard(CardService.newCarouselCard().addWidget(
     *                 CardService.newTextParagraph().setText('The second text paragraph in carousel')))
     *             .addCarouselCard(CardService.newCarouselCard().addWidget(
     *                 CardService.newTextParagraph().setText('The third text paragraph in carousel')))
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     */
    interface Carousel {

      /**
       * Adds a carousel card.
       *
       *     const carousel =
       *         CardService.newCarousel()
       *             .addCarouselCard(CardService.newCarouselCard().addWidget(
       *                 CardService.newTextParagraph().setText('The first text paragraph in carousel')));
       *
       * Return:
       * - Carousel — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/carousel#addCarouselCard(CarouselCard)
       * @param card The carousel card to add.
       */
      addCarouselCard(card: CarouselCard): Carousel;
    }
    /**
     * A card that can be displayed as a carousel item.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const carouselCard = CardService.newCarouselCard()
     *         .addWidget(
     *             CardService.newTextParagraph().setText('a text paragraph in the carousel card'))
     *         .addFooterWidget(
     *             CardService.newTextParagraph().setText('a text paragraph in the carousel card footer'));
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     */
    interface CarouselCard {

      /**
       * Adds the given widget to the footer of this carousel card. Widgets are shown in the order they were added.
       *
       *     const carouselCard = CardService.newCarouselCard()
       *         .addFooterWidget(
       *             CardService.newTextParagraph().setText('a text paragraph in the carousel card footer'));
       *
       * Return:
       * - CarouselCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/carousel-card#addFooterWidget(Widget)
       * @param widget A widget to add to the footer of the carousel card.
       */
      addFooterWidget(widget: Widget): CarouselCard;

      /**
       * Adds the given widget to this carousel card. Widgets are shown in the order they were added.
       *
       *     const carouselCard = CardService.newCarouselCard()
       *         .addWidget(
       *             CardService.newTextParagraph().setText('a text paragraph in the carousel card'));
       *
       * Return:
       * - CarouselCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/carousel-card#addWidget(Widget)
       * @param widget A widget to add to the carousel card.
       */
      addWidget(widget: Widget): CarouselCard;
    }
    /**
     * A class that represents the parameters that a Chat app can use to configure how its response is
     * posted.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const card = CardService.newCardBuilder()
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .build();
     *     const dialog = CardService.newDialog().setBody(card);
     *
     *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
     *
     *     const chatActionResponse = CardService.newChatActionResponse()
     *                                    .setResponseType(CardService.Type.DIALOG)
     *                                    .setDialogAction(dialogAction);
     */
    interface ChatActionResponse {

      /**
       * Sets the dialog action to an event related to a dialog.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .build();
       *     const dialog = CardService.newDialog().setBody(card);
       *
       *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
       *
       *     const chatActionResponse = CardService.newChatActionResponse()
       *                                    .setResponseType(CardService.Type.DIALOG)
       *                                    .setDialogAction(dialogAction);
       *
       * Return:
       * - ChatActionResponse — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-action-response#setDialogAction(DialogAction)
       * @param dialogAction The dialog action to set.
       */
      setDialogAction(dialogAction: DialogAction): ChatActionResponse;

      /**
       * The type of Chat app response.
       *
       *     const chatActionResponse = CardService.newChatActionResponse().setResponseType(
       *         CardService.Type.DIALOG,
       *     );
       *
       * Return:
       * - ChatActionResponse — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-action-response#setResponseType(ResponseType)
       * @param responseType The response type.
       */
      setResponseType(responseType: ResponseType): ChatActionResponse;

      /**
       * Sets the updated widget, used to provide autocomplete options for a widget.
       *
       *     const updatedWidget =
       *         CardService.newUpdatedWidget()
       *             .addItem(
       *                 'Contact 1',
       *                 'contact-1',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact one description',
       *                 )
       *             .addItem(
       *                 'Contact 2',
       *                 'contact-2',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact two description',
       *                 )
       *             .addItem(
       *                 'Contact 3',
       *                 'contact-3',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact three description',
       *                 )
       *             .addItem(
       *                 'Contact 4',
       *                 'contact-4',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact four description',
       *                 )
       *             .addItem(
       *                 'Contact 5',
       *                 'contact-5',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact five description',
       *             );
       *
       *     const actionResponse =
       *         CardService.newChatActionResponse()
       *             .setUpdatedWidget(updatedWidget)
       *             .setResponseType(CardService.ResponseType.UPDATE_WIDGET);
       *
       * Return:
       * - ChatActionResponse — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-action-response#setUpdatedWidget(UpdatedWidget)
       * @param updatedWidget The updated widget to be set.
       */
      setUpdatedWidget(updatedWidget: UpdatedWidget): ChatActionResponse;

      /**
       * The URL for users to authenticate or configure. Only for the REQUEST_CONFIG response type.
       *
       *     const chatActionResponse = CardService.newChatActionResponse()
       *                                    .setResponseType(CardService.Type.REQUEST_CONFIG)
       *                                    .setUrl('https://www.google.com');
       *
       * Return:
       * - ChatActionResponse — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-action-response#setUrl(String)
       * @param url The URL to send.
       */
      setUrl(url: string): ChatActionResponse;
    }
    /**
     * For a SelectionInput widget that uses a multiselect menu, a data source from Google Chat.
     * The data source populates selection items for the multiselect menu. For example, a user can
     * select Google Chat spaces that they're a member of.
     *
     *     const chatSpaceDataSource =
     *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
     *
     *     const chatClientDataSource =
     *         CardService.newChatClientDataSource().setSpaceDataSource(
     *             chatSpaceDataSource);
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     */
    interface ChatClientDataSource {

      /**
       * A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.
       *
       *     const chatSpaceDataSource =
       *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
       *
       *     const chatClientDataSource =
       *         CardService.newChatClientDataSource().setSpaceDataSource(
       *             chatSpaceDataSource);
       *
       * Return:
       * - ChatClientDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-client-data-source#setSpaceDataSource(ChatSpaceDataSource)
       * @param spaceDataSource The data source to be set.
       */
      setSpaceDataSource(spaceDataSource: ChatSpaceDataSource): ChatClientDataSource;
    }
    /**
     * The response object for a card message in Google Chat.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     // Creates a card message in Chat.
     *     const cardHeader = CardService.newCardHeader()
     *                            .setTitle('Card Header Title')
     *                            .setSubtitle('Card Header Subtitle');
     *
     *     const card = CardService.newCardBuilder().setHeader(cardHeader).build();
     *
     *     const chatResponse =
     *         CardService.newChatResponseBuilder()
     *             .setText('Example text')
     *             .addCardsV2(
     *                 CardService.newCardWithId().setCardId('card_id').setCard(card))
     *             .build();
     *
     *     console.log(chatResponse.printJson());
     */
    interface ChatResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for ChatResponse objects.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const cardSection = CardService.newCardSection();
     *     cardSection.addWidget(
     *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
     *     );
     *
     *     const card = CardService.newCardBuilder()
     *                      .setName('Card name')
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .addSection(cardSection)
     *                      .build();
     *
     *     const cardWithId =
     *         CardService.newCardWithId().setCardId('card_id').setCard(card);
     *
     *     const chatResponse = CardService.newChatResponseBuilder()
     *                              .addCardsV2(cardWithId)
     *                              .setText('Example text')
     *                              .build();
     */
    interface ChatResponseBuilder {

      /**
       * Sets the card field of the message. This is used to send a card in a Google Chat message. Each card is associated with a unique id, CardWithId object should be built and be used with this method.
       *
       *     const cardSection = CardService.newCardSection();
       *     cardSection.addWidget(
       *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
       *     );
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .addSection(cardSection)
       *                      .build();
       *
       *     const cardWithId =
       *         CardService.newCardWithId().setCardId('card_id').setCard(card);
       *
       *     const chatResponse =
       *         CardService.newChatResponseBuilder().addCardsV2(cardWithId).build();
       *
       * Return:
       * - ChatResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-response-builder#addCardsV2(CardWithId)
       * @param cardWithId The CardWithId to use.
       */
      addCardsV2(cardWithId: CardWithId): ChatResponseBuilder;

      /**
       * Builds the current action response and validates it.
       *
       * Return:
       * - ChatResponse — A validated ChatResponse.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-response-builder#build()
       */
      build(): ChatResponse;

      /**
       * Sets the action response field of the message.
       *
       *     // Build the card.
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('card title'))
       *                      .build();
       *
       *     // Creates the dialog.
       *     const dialog = CardService.newDialog().setBody(card);
       *
       *     // Creates the dialog action.
       *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
       *
       *     // Creates the action response and sets the type to DIALOG.
       *     const actionResponse = CardService.newChatActionResponse()
       *                                .setDialogAction(dialogAction)
       *                                .setResponseType(CardService.Type.DIALOG);
       *
       *     // Creates the Chat response and sets the action response.
       *     const chatResponse = CardService.newChatResponseBuilder()
       *                              .setActionResponse(actionResponse)
       *                              .build();
       *
       * Return:
       * - ChatResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-response-builder#setActionResponse(ChatActionResponse)
       * @param actionResponse The ChatActionResponse to use.
       */
      setActionResponse(actionResponse: ChatActionResponse): ChatResponseBuilder;

      /**
       * Sets the text of the Chat message.
       *
       *     const chatResponse =
       *         CardService.newChatResponseBuilder().setText('Example text').build();
       *
       * Return:
       * - ChatResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-response-builder#setText(String)
       * @param text The text to use.
       */
      setText(text: string): ChatResponseBuilder;
    }
    /**
     * A data source that populates Google Chat spaces as selection items for a multiselect menu. Only
     * populates spaces that the user is a member of.
     *
     *     const chatSpaceDataSource =
     *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     */
    interface ChatSpaceDataSource {

      /**
       * If set to true, the multi select menu selects the current Google Chat space as an item by default.
       *
       *     const chatSpaceDataSource =
       *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
       *
       * Return:
       * - ChatSpaceDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chat-space-data-source#setDefaultToCurrentSpace(Boolean)
       * @param defaultToCurrentSpace The boolean to be set.
       */
      setDefaultToCurrentSpace(defaultToCurrentSpace: boolean): ChatSpaceDataSource;
    }
    /**
     * A Chip with an icon and text label. You can deactivate the chip when needed.
     *
     * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     *
     *     const chip = CardService.newChip()
     *                      .setLabel('Open Link')
     *                      .setOpenLink(CardService.newOpenLink().setUrl(
     *                          'https://www.google.com'));
     */
    interface Chip {

      /**
       * Sets the alternative text of the chip for accessibility. If unset, defaults to the text that displays on the chip.
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setAltText(String)
       * @param altText The alternative text to assign to this chip.
       */
      setAltText(altText: string): Chip;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Chip;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Chip;

      /**
       * Sets whether the chip is disabled. A disabled chip is greyed out and cannot be clicked.
       *
       *     const chip = CardService.newChip().setLabel('bug Report').setDisabled(true);
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setDisabled(Boolean)
       * @param disabled The disabled state.
       */
      setDisabled(disabled: boolean): Chip;

      /**
       * Sets the icon to be used as the chip.
       *
       *     const chip = CardService.newChip().setIcon(
       *         CardService.newIconImage().setMaterialIcon(
       *             CardService.newMaterialIcon().setName('bug_report'),
       *             ),
       *     );
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setIcon(IconImage)
       * @param icon One of the predefined IconImage values.
       */
      setIcon(icon: IconImage): Chip;

      /**
       * Sets the title of the chip. Required.
       *
       *     const chip = CardService.newChip().setLabel('bug Report');
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setLabel(String)
       * @param label The text to display.
       */
      setLabel(label: string): Chip;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Chip;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Chip;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - Chip — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Chip;
    }
    /**
     * Holds a set of Chip objects that are displayed in a row, wrapping to the next line to
     * horizontal scrollable.
     *
     * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     *
     *     const chip = CardService.newChip();
     *     // Finish building the text chip...
     *
     *     const chipList = CardService.newChipList()
     *                          .setLayout(CardService.ChipListLayout.WRAPPED)
     *                          .addChip(chip);
     */
    interface ChipList {

      /**
       * Adds a chip.
       *
       * Return:
       * - ChipList — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip-list#addChip(Chip)
       * @param chip The chip to add.
       */
      addChip(chip: Chip): ChipList;

      /**
       * Sets the chip list layout. If unset, it defaults to ChipListLayout.WRAPPED layout.
       *
       *     const chip = CardService.newChip();
       *     // Finish building the text chip...
       *
       *     const chipList =
       *         CardService.newChipList()
       *             .setLayout(CardService.ChipListLayout.HORIZONTAL_SCROLLABLE)
       *             .addChip(chip);
       *
       * Return:
       * - ChipList — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/chip-list#setLayout(ChipListLayout)
       * @param layout The chip list layout.
       */
      setLayout(layout: ChipListLayout): ChipList;
    }
    /**
     * An enum that specifies the layout for ChipList.
     *
     * WRAPPED is the default; chips wrap to the next line if there isn't enough
     * horizontal space. HORIZONTAL_SCROLLABLE chips scroll horizontally if they don't fit
     * in the available space.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ChipListLayout.WRAPPED.
     */
    enum ChipListLayout { WRAPPED, HORIZONTAL_SCROLLABLE }
    /**
     * A customizable collapse and expand control.
     *
     * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     *
     *     const collapseButton =
     *         CardService.newTextButton()
     *             .setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS)
     *             .setText('Collapse');
     *
     *     const expandButton =
     *         CardService.newImageButton()
     *             .setImageButtonStyle(CardService.ImageButtonStyle.FILLED);
     *
     *     const collapseControl =
     *         CardService.newCollapseControl()
     *             .setHorizontalAlign(CardService.HorizontalAlignment.END)
     *             .setExpandButton(expandButton)
     *             .setCollapseButton(collapseButton);
     */
    interface CollapseControl {

      /**
       * Sets the Button that is displayed for "show less" button. Optional. Must be set together with collapse button.
       *
       *     const collapseButton =
       *         CardService.newTextButton().setText('Collapse');
       *
       *     const collapseControl =
       *         CardService.newCollapseControl()
       *             .setCollapseButton(collapseButton);
       *
       * Return:
       * - CollapseControl — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/collapse-control#setCollapseButton(Button)
       * @param button The collapse button to set.
       */
      setCollapseButton(button: Button): CollapseControl;

      /**
       * Sets the Button that is displayed for "show more" button. Optional. Must be set together with collapse button.
       *
       *     const expandButton =
       *         CardService.newTextButton().setText('Expand');
       *
       *     const collapseControl =
       *         CardService.newCollapseControl()
       *             .setExpandButton(expandButton);
       *
       * Return:
       * - CollapseControl — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/collapse-control#setExpandButton(Button)
       * @param button The expand button to set.
       */
      setExpandButton(button: Button): CollapseControl;

      /**
       * Sets the HorizontalAlignment of the CollapseControl. Optional. *
       *
       *     const collapseControl = CardService.newCollapseControl().setHorizontalAlign(
       *         CardService.HorizontalAlignment.START,
       *     );
       *
       * Return:
       * - CollapseControl — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/collapse-control#setHorizontalAlign(HorizontalAlignment)
       * @param horizontalAlignment The horizontal alignment of the CollapseControl widget.
       */
      setHorizontalAlign(horizontalAlignment: HorizontalAlignment): CollapseControl;
    }
    /**
     * A column.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     *     const columnWidget = CardService.newTextParagraph();
     *     const column =
     *         CardService.newColumn()
     *             .setHorizontalSizeStyle(
     *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
     *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
     *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
     *             .addWidget(columnWidget);
     */
    interface Column {

      /**
       * Adds a widget to the column.
       * Widgets are displayed in the order they are added. You can add the following widgets to a column:
       * - TextParagraph
       * - Image
       * - DecoratedText
       * - ButtonSet
       * - TextInput
       * - SelectionInput
       * - DateTimePicker
       *
       *     const column = CardService.newColumn().addWidget(
       *         CardService.newTextParagraph().setText('This is a text paragraph widget'),
       *     );
       *
       * Return:
       * - Column — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/column#addWidget(Widget)
       * @param widget The widget to add to the column.
       */
      addWidget(widget: Widget): Column;

      /**
       * Sets the HorizontalAlignment of the Column. Optional.
       *
       *     const column = CardService.newColumn().setHorizontalAlignment(
       *         CardService.HorizontalAlignment.CENTER,
       *     );
       *
       * Return:
       * - Column — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/column#setHorizontalAlignment(HorizontalAlignment)
       * @param horizontalAlignment The horizontal alignment of the column.
       */
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Column;

      /**
       * Sets the HorizontalSizeStyle of the Column. Optional.
       *
       *     const column = CardService.newColumn().setHorizontalSizeStyle(
       *         CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE,
       *     );
       *
       * Return:
       * - Column — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/column#setHorizontalSizeStyle(HorizontalSizeStyle)
       * @param horizontalSizeStyle The horizontal size of the column.
       */
      setHorizontalSizeStyle(horizontalSizeStyle: HorizontalSizeStyle): Column;

      /**
       * Sets the VerticalAlignment of the Column. Optional.
       *
       *     const column = CardService.newColumn().setVerticalAlignment(
       *         CardService.VerticalAlignment.CENTER,
       *     );
       *
       * Return:
       * - Column — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/column#setVerticalAlignment(VerticalAlignment)
       * @param verticalAlignment The vertical alignment of the column.
       */
      setVerticalAlignment(verticalAlignment: VerticalAlignment): Column;
    }
    /**
     * The Columns widget displays up to 2 columns in a card or dialog. You can add widgets to
     * each Column; the widgets appear in the order that they are specified. For an example in
     * Google Chat apps, see Columns.
     *
     * The height of each column is determined by the taller column. For example, if the first column
     * is taller than the second column, both columns have the height of the first column. Because each
     * column can contain a different number of widgets, you can't define rows or align widgets between
     * the columns.
     *
     * Columns are displayed side-by-side. You can customize the width of each column using the
     * HorizontalSizeStyle field. If the user's screen width is too narrow, the second column
     * wraps below the first:
     *
     * On web, the second column wraps if the screen width is less than or equal to 480 pixels.
     *
     * On iOS devices, the second column wraps if the screen width is less than or equal to 300
     *       pt.
     *
     * On Android devices, the second column wraps if the screen width is less than or equal to
     *       320 dp.
     *
     * Available for Google Chat apps and Google Workspace add-ons. The add-on UIs that support
     * columns include:
     *
     *     // Build a column that is aligned in the center and fills the space:
     *     const column =
     *         CardService.newColumn()
     *             .setHorizontalSizeStyle(
     *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
     *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
     *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
     *     const columns = CardService.newColumns().addColumn(column).setWrapStyle(
     *         CardService.WrapStyle.WRAP);
     */
    interface Columns {

      /**
       * Adds a Column to the Columns widget. Columns are displayed in the order in which they're added. You can add up to two columns.
       *
       *     const columns = CardService.newColumns().addColumn(CardService.newColumn());
       *
       * Return:
       * - Columns — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/columns#addColumn(Column)
       * @param column A child column to add to the Columns widget.
       */
      addColumn(column: Column): Columns;

      /**
       * Sets the wrap style of the columns, controls how the column resizes based on screen width.
       *
       *     const columns = CardService.newColumns()
       *                         .addColumn(CardService.newColumn())
       *                         .setWrapStyle(CardService.WrapStyle.WRAP);
       *
       * Return:
       * - Columns — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/columns#setWrapStyle(WrapStyle)
       * @param wrapStyle The wrap style to set for the columns.
       */
      setWrapStyle(wrapStyle: WrapStyle): Columns;
    }
    /**
     * A data source shared by all Google Workspace applications.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     */
    enum CommonDataSource { UNKNOWN, USER }
    /**
     * Defines actions that don't involve evaluations, such as updating widget visibility. For example,
     * can reveal or hide widgets based on the value of an input as part of CEL
     * validation.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const commonWidgetAction = CardService.newCommonWidgetAction()
     *     .setUpdateVisibilityAction(CardService.Visibility.VISIBLE);
     */
    interface CommonWidgetAction {

      /**
       * Sets the update visibility action for widgets.
       *
       * Return:
       * - CommonWidgetAction — The CommonWidgetAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/common-widget-action#setUpdateVisibilityAction(UpdateVisibilityAction)
       * @param updateVisibilityAction The update visibility action.
       */
      setUpdateVisibilityAction(updateVisibilityAction: UpdateVisibilityAction): CommonWidgetAction;
    }
    /**
     * The response object that may be returned from a callback method for compose action in a Gmail add-on.
     *
     * Note: This object isn't related to compose actions that are
     * used to extend the compose UI. Rather,
     * this object is a response to an Action that composes draft messages when a specific UI element is
     * selected.
     *
     *     const composeActionResponse =
     *         CardService.newComposeActionResponseBuilder()
     *             .setGmailDraft(GmailApp.createDraft('recipient', 'subject', 'body'))
     *             .build();
     */
    interface ComposeActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/compose-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for ComposeActionResponse objects.
     *
     * Note: This object isn't related to compose actions that are
     * used to extend the compose UI. Rather,
     * this builder creates responses to an Action that composes draft messages when a specific
     * UI element is selected.
     */
    interface ComposeActionResponseBuilder {

      /**
       * Builds the current compose action response and validates it.
       *
       * Return:
       * - ComposeActionResponse — A validated ComposeActionResponse.
       *
       * Throws:
       * - Error — if the constructed compose action response isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#build()
       */
      build(): ComposeActionResponse;

      /**
       * Sets the draft GmailMessage created using GmailMessage.createDraftReply(body) or similar functions.
       *
       * Return:
       * - ComposeActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#setGmailDraft(GmailDraft)
       * @param draft The GmailDraft to use.
       */
      setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
    }
    /**
     * An enum value that specifies whether the composed email is a standalone or reply draft.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ComposedEmailType.REPLY_AS_DRAFT.
     */
    enum ComposedEmailType { REPLY_AS_DRAFT, STANDALONE_DRAFT }
    /**
     * A condition used to run an event action as part of CEL
     * expression validation.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const condition = CardService.newCondition().setActionRuleId("CEL_TEXTBOX_SUCCESS_RULE_ID")
     *     .setExpressionDataCondition(CardService.newExpressionDataCondition()
     *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS));
     */
    interface Condition {

      /**
       * The unique ID of the action rule to run in response to the condition.
       *
       * Return:
       * - Condition — This Condition object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/condition#setActionRuleId(String)
       * @param actionRuleId The ID that uniquely identifies an event action.
       */
      setActionRuleId(actionRuleId: string): Condition;

      /**
       * Sets the CEL expression validation condition used to determine whether the event action should run.
       *
       * Return:
       * - Condition — The Condition object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/condition#setExpressionDataCondition(ExpressionDataCondition)
       * @param expressionDataCondition A expression data condition.
       */
      setExpressionDataCondition(expressionDataCondition: ExpressionDataCondition): Condition;
    }
    /**
     * An enum value that specifies the content type of the content generated by a UpdateDraftActionResponse.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ContentType.TEXT.
     */
    enum ContentType { TEXT, MUTABLE_HTML, IMMUTABLE_HTML }
    /**
     * An input field that allows inputing a date.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const dateTimePicker =
     *         CardService.newDatePicker()
     *             .setTitle('Enter the date.')
     *             .setFieldName('date_field')
     *             // Set default value as Jan 1, 2018 UTC. Either a number or string is
     *             // acceptable.
     *             .setValueInMsSinceEpoch(1514775600)
     *             .setOnChangeAction(
     *                 CardService.newAction().setFunctionName('handleDateTimeChange'),
     *             );
     */
    interface DatePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when there is a UI interaction. The field name is visible to the user. Required; the specified field name must be unique.
       *
       * Return:
       * - DatePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): DatePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       *
       * Return:
       * - DatePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): DatePicker;

      /**
       * Sets the title displayed above the input field.
       *
       * Return:
       * - DatePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): DatePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       *
       * Return:
       * - DatePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setValueInMsSinceEpoch(Number)
       * @param valueMsEpoch The default value placed in the input as a number, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: number): DatePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       *
       * Return:
       * - DatePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setValueInMsSinceEpoch(String)
       * @param valueMsEpoch The default value placed in the input as a string, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: string): DatePicker;
    }
    /**
     * An input field that allows users to input a date and time.
     *
     * Supports form submission validation. When Action.setAllWidgetsAreRequired(allWidgetsAreRequired) is set to
     * true or this widget is specified through Action.addRequiredWidget(requiredWidget), the submission
     * action is blocked unless a value is selected.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const dateTimePicker =
     *         CardService.newDateTimePicker()
     *             .setTitle('Enter the date and time.')
     *             .setFieldName('date_time_field')
     *             // Set default value as Jan 1, 2018, 3:00 AM UTC. Either a number or
     *             // string is acceptable.
     *             .setValueInMsSinceEpoch(1514775600)
     *             // EDT time is 5 hours behind UTC.
     *             .setTimeZoneOffsetInMins(-5 * 60)
     *             .setOnChangeAction(
     *                 CardService.newAction().setFunctionName('handleDateTimeChange'),
     *             );
     */
    interface DateTimePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when there is a UI interaction. The field name is visible to the user. Required; the specified field name must be unique.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): DateTimePicker;

      /**
       * In a Google Workspace flow, lets input variables accept datetime outputs from other steps in the flow. For example, receive the time a gmail message was sent or the date on which a calendar event is scheduled.
       * Only available through the Gemini Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
       *
       *     const workflowDataSource =
       *         CardService.newWorkflowDataSource().setIncludeVariables(true);
       *
       *     const hostAppDataSource =
       *         CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);
       *
       *     const dateTimePicker = CardService.newDateTimePicker()
       *                               .setTitle('Enter the date and time.')
       *                               .setFieldName('date_time_field')
       *                               .setHostAppDataSource(hostAppDataSource);
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setHostAppDataSource(HostAppDataSource)
       * @param hostAppDataSource The data source.
       */
      setHostAppDataSource(hostAppDataSource: HostAppDataSource): DateTimePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): DateTimePicker;

      /**
       * Sets the number of minutes that the time zone should be offset from UTC. If set, the date and time is displayed in the specified time zone. If not set, the time is displayed in the user's time zone.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setTimeZoneOffsetInMins(Integer)
       * @param timeZoneOffsetMins The number of minutes that the time zone is offset from UTC.
       */
      setTimeZoneOffsetInMins(timeZoneOffsetMins: Integer): DateTimePicker;

      /**
       * Sets the title displayed above the input field.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): DateTimePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setValueInMsSinceEpoch(Number)
       * @param valueMsEpoch The default value placed in the input as a number, in milliseconds since the epoch. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: number): DateTimePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       *
       * Return:
       * - DateTimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setValueInMsSinceEpoch(String)
       * @param valueMsEpoch The default value placed in the input as a string, in milliseconds since the epoch. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: string): DateTimePicker;
    }
    /**
     * A widget that displays text with optional decorations. Possible keys include an icon, a label
     * above and a label below. Setting the text content and one of the keys is required using setText(text) and one of DecoratedText, DecoratedText, setTopLabel(text), or setBottomLabel(text). This class is intended to replace KeyValue.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const decoratedText =
     *         CardService.newDecoratedText().setText('Text').setTopLabel('TopLabel');
     *
     *     const multilineDecoratedText = CardService.newDecoratedText()
     *                                        .setText('Text')
     *                                        .setTopLabel('TopLabel')
     *                                        .setWrapText(true)
     *                                        .setBottomLabel('BottomLabel');
     */
    interface DecoratedText {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): DecoratedText;

      /**
       * Sets the label text to be used as the key and is displayed below the text content.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setBottomLabel(String)
       * @param text The label text.
       */
      setBottomLabel(text: string): DecoratedText;

      /**
       * Sets the Button that is displayed to the right of the text. A DecoratedText can only support one button or one switch.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setButton(Button)
       * @param button The button to add.
       */
      setButton(button: Button): DecoratedText;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): DecoratedText;

      /**
       * Sets the optional IconImage that is displayed to the right of the content. A DecoratedText can only support one button, one switch or one icon.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setEndIcon(IconImage)
       * @param endIcon The icon to add.
       */
      setEndIcon(endIcon: IconImage): DecoratedText;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): DecoratedText;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): DecoratedText;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): DecoratedText;

      /**
       * Sets the optional IconImage to display before the text content.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setStartIcon(IconImage)
       * @param startIcon The icon to display.
       */
      setStartIcon(startIcon: IconImage): DecoratedText;

      /**
       * Sets the Switch that is displayed to the right of the content. A DecoratedText can only support one button or one switch.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setSwitchControl(Switch)
       * @param switchToSet The switch to add.
       */
      setSwitchControl(switchToSet: Switch): DecoratedText;

      /**
       * Sets the text to be used as the value. Supports basic HTML formatting. Required.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setText(String)
       * @param text The text content for this widget.
       */
      setText(text: string): DecoratedText;

      /**
       * Sets the label text to be used as the key and is displayed above the text content.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setTopLabel(String)
       * @param text The label text.
       */
      setTopLabel(text: string): DecoratedText;

      /**
       * Sets whether the value text should be displayed on a single line or multiple lines.
       *
       * Return:
       * - DecoratedText — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setWrapText(Boolean)
       * @param wrapText If true, the text is wrapped and displayed on multiple lines. Otherwise the text is truncated.
       */
      setWrapText(wrapText: boolean): DecoratedText;
    }
    /**
     * For details, see Open interactive
     * dialogs in the Google Chat documentation.
     *
     * A builder for Dialog objects.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const card = CardService.newCardBuilder()
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .build();
     *
     *     // Sets the card of the dialog.
     *     const dialog = CardService.newDialog().setBody(card);
     */
    interface Dialog {

      /**
       * Sets the card of the Dialog.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
       *                      .build();
       *
       *     // Sets the card of the dialog.
       *     const dialog = CardService.newDialog().setBody(card);
       *
       * Return:
       * - Dialog — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/dialog#setBody(Card)
       * @param card The Card to use.
       */
      setBody(card: Card): Dialog;
    }
    /**
     * A builder for DialogAction objects.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     *     const card = CardService.newCardBuilder()
     *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
     *                      .build();
     *     const dialog = CardService.newDialog().setBody(card);
     *
     *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
     */
    interface DialogAction {

      /**
       * Sets the action status of DialogAction.
       *
       *     const actionStatus = CardService.newActionStatus().setStatusCode(
       *         CardService.Status.OK,
       *     );
       *
       *     const dialogAction =
       *         CardService.newDialogAction().setActionStatus(actionStatus);
       *
       * Return:
       * - DialogAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/dialog-action#setActionStatus(ActionStatus)
       * @param actionStatus The ActionStatus to use.
       */
      setActionStatus(actionStatus: ActionStatus): DialogAction;

      /**
       * Sets the dialog of the DialogAction.
       *
       *     const card = CardService.newCardBuilder()
       *                      .setHeader(CardService.newCardHeader().setTitle('card title'))
       *                      .build();
       *
       *     // Sets the card of the dialog.
       *     const dialog = CardService.newDialog().setBody(card);
       *
       *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
       *
       * Return:
       * - DialogAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/dialog-action#setDialog(Dialog)
       * @param dialog The Dialog to use.
       */
      setDialog(dialog: Dialog): DialogAction;
    }
    /**
     * An enum that defines the display style of card.
     *
     * DisplayStyle.REPLACE means that the card is shown by replacing the view of top card in
     * the card stack.
     *
     * DisplayStyle.PEEK mean that the header of the card appears at the bottom of the
     * sidebar, partially covering the current top card of the stack. Clicking the header pops the card
     * into the card stack. If the card has no header, a generated header is used instead.
     *
     * DisplayStyle only works for card returned from contextual trigger function.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.DisplayStyle.PEEK.
     */
    enum DisplayStyle { PEEK, REPLACE }
    /**
     * A horizontal divider. To add a divider to your add-on card, use the newDivider()
     * method within CardService. For example, the following sample builds a simple card with 2
     * paragraphs separated by a divider.
     *
     *     function buildCard() {
     *       const cardSection1TextParagraph1 =
     *           CardService.newTextParagraph().setText('Hello world!');
     *
     *       const cardSection1Divider1 = CardService.newDivider();
     *
     *       const cardSection1TextParagraph2 =
     *           CardService.newTextParagraph().setText('Hello world!');
     *
     *       const cardSection1 = CardService.newCardSection()
     *                                .addWidget(cardSection1TextParagraph1)
     *                                .addWidget(cardSection1Divider1)
     *                                .addWidget(cardSection1TextParagraph2);
     *
     *       const card = CardService.newCardBuilder().addSection(cardSection1).build();
     *
     *       return card;
     *     }
     */
    interface Divider {
    }
    /**
     * Represents a response that makes changes to Drive while Drive items are selected and in reaction
     * to an action taken in the UI, such as a button click.
     */
    interface DriveItemsSelectedActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for DriveItemsSelectedActionResponse objects.
     */
    interface DriveItemsSelectedActionResponseBuilder {

      /**
       * Builds the current Drive action response.
       *
       * Return:
       * - DriveItemsSelectedActionResponse — A validated DriveItemsSelectedActionResponse.
       *
       * https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder#build()
       */
      build(): DriveItemsSelectedActionResponse;

      /**
       * Specifies that the response requests file scope for the contextually-relevant item in Drive.
       *
       * Return:
       * - DriveItemsSelectedActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder#requestFileScope(String)
       * @param itemId ID of the Drive item to request file scope for.
       */
      requestFileScope(itemId: string): DriveItemsSelectedActionResponseBuilder;
    }
    /**
     * Makes changes to an Editor, such as Google Docs, Sheets, or Slides in reaction to an action taken
     * in the UI. For example a request for drive.file scope for the current active
     * document.
     */
    interface EditorFileScopeActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for EditorFileScopeActionResponse objects.
     */
    interface EditorFileScopeActionResponseBuilder {

      /**
       * Builds the current Editor action response.
       *
       * Return:
       * - EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse.
       *
       * https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder#build()
       */
      build(): EditorFileScopeActionResponse;

      /**
       * Requests the drive.file scope for the current active Editor document.
       *
       *     // Display a permissions dialog to the user, requesting `drive.file` scope for
       *     // the current document on behalf of this add-on.
       *     CardService.newEditorFileScopeActionResponseBuilder()
       *         .requestFileScopeForActiveDocument()
       *         .build();
       *
       * Note: To call this method, you must add the drive.file scope to the add-on's manifest.
       *
       * Return:
       * - EditorFileScopeActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder#requestFileScopeForActiveDocument()
       */
      requestFileScopeForActiveDocument(): EditorFileScopeActionResponseBuilder;
    }
    /**
     * An EventAction to run when a CEL
     * expression validation condition is met.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const eventAction = CardService.newEventAction().setActionRuleId("CEL_TEXTBOX_EVALUATION_RULE_ID")
     *     .setExpressionDataAction(expressionDataAction)
     *     .addPostEventTrigger(trigger_success)
     *     .addPostEventTrigger(trigger_failure);
     */
    interface EventAction {

      /**
       * Adds a CEL expression validation condition to evaluate after the event action runs.
       *
       * Return:
       * - EventAction — The EventAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/event-action#addPostEventTrigger(Trigger)
       * @param trigger The CEL expression validation trigger to add.
       */
      addPostEventTrigger(trigger: Trigger): EventAction;

      /**
       * Sets a unique identifier for the event action.
       *
       * Return:
       * - EventAction — The EventAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/event-action#setActionRuleId(String)
       * @param actionRuleId The unique identifier for the action rule.
       */
      setActionRuleId(actionRuleId: string): EventAction;

      /**
       * Set the common widget action for widgets.
       *
       * Return:
       * - EventAction — The EventAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/event-action#setCommonWidgetAction(CommonWidgetAction)
       * @param commonWidgetAction The common widget action.
       */
      setCommonWidgetAction(commonWidgetAction: CommonWidgetAction): EventAction;

      /**
       * Sets the CEL expression validation data action for widgets.
       *
       * Return:
       * - EventAction — The EventAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/event-action#setExpressionDataAction(ExpressionDataAction)
       * @param expressionDataAction The expression data action.
       */
      setExpressionDataAction(expressionDataAction: ExpressionDataAction): EventAction;
    }
    /**
     * The expression data that is used to evaluate an expression
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const expressionData = CardService.newExpressionData();
     */
    interface ExpressionData {

      /**
       * Adds a condition to the current expression data.
       *
       * Return:
       * - ExpressionData — This ExpressionData, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data#addCondition(Condition)
       * @param condition The Condition to add.
       */
      addCondition(condition: Condition): ExpressionData;

      /**
       * Adds an event action to the current expression data.
       *
       * Return:
       * - ExpressionData — This ExpressionData, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data#addEventAction(EventAction)
       * @param eventAction The EventAction to add.
       */
      addEventAction(eventAction: EventAction): ExpressionData;

      /**
       * Sets the expression data value.
       *
       * Return:
       * - ExpressionData — This ExpressionData, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data#setExpression(String)
       * @param expression The uncompiled CEL expression.
       */
      setExpression(expression: string): ExpressionData;

      /**
       * Sets the expression data id.
       *
       * Return:
       * - ExpressionData — This ExpressionData, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data#setId(String)
       * @param id The unique identifier of the ExpressionData.
       */
      setId(id: string): ExpressionData;
    }
    /**
     * Actions for CEL
     * expression validation . Use START_EXPRESSION_EVALUATION for CEL validation.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const expressionDataAction = CardService.newExpressionDataAction()
     *     .setActionType(CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
     */
    interface ExpressionDataAction {

      /**
       * Sets the type of the expression data action.
       *
       * Return:
       * - ExpressionDataAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data-action#setActionType(ExpressionDataActionType)
       * @param type The type of the expression data action.
       */
      setActionType(type: ExpressionDataActionType): ExpressionDataAction;
    }
    /**
     * An enum that represents the type of the expression
     * data action.
     *
     * Only available through the Gemini
     * Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const expressionDataAction = CardService.newExpressionDataAction()
     *     .setActionType(CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
     */
    enum ExpressionDataActionType { ACTION_TYPE_UNSPECIFIED, START_EXPRESSION_EVALUATION }
    /**
     * Represents a CEL
     * expression validation result.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const expressionDataCondition = CardService.newExpressionDataCondition()
     *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
     */
    interface ExpressionDataCondition {

      /**
       * Sets condition type for a CEL expression validation to indicate whether the expression evaluated successfully.
       *
       * Return:
       * - ExpressionDataCondition — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/expression-data-condition#setConditionType(ExpressionDataConditionType)
       * @param type The type of the expression data condition.
       */
      setConditionType(type: ExpressionDataConditionType): ExpressionDataCondition;
    }
    /**
     * Represents whether the CEL
     * expression evaluated successfully.
     *
     * Only available through the Gemini
     * Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const expressionDataCondition = CardService.newExpressionDataCondition()
     *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
     */
    enum ExpressionDataConditionType { CONDITION_TYPE_UNSPECIFIED, EXPRESSION_EVALUATION_SUCCESS, EXPRESSION_EVALUATION_FAILURE }
    /**
     * The fixed footer shown at the bottom of a Card.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const fixedFooter = CardService.newFixedFooter().setPrimaryButton(
     *         CardService.newTextButton().setText('help').setOpenLink(
     *             CardService.newOpenLink().setUrl('http://www.google.com')),
     *     );
     */
    interface FixedFooter {

      /**
       * Set the primary button in the fixed footer. The primary button must be a TextButtonStyle.FILLED button. If the background color is unset for the primary button, the button uses the primary color defined in the add-on manifest.
       *
       * Return:
       * - FixedFooter — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/fixed-footer#setPrimaryButton(TextButton)
       * @param button The button to add.
       */
      setPrimaryButton(button: TextButton): FixedFooter;

      /**
       * Set the secondary button in the fixed footer. The secondary button must be a TextButtonStyle.OUTLINED button. This method does nothing if setPrimaryButton(button) isn't called to set the primary button.
       *
       * Return:
       * - FixedFooter — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/fixed-footer#setSecondaryButton(TextButton)
       * @param button The button to add.
       */
      setSecondaryButton(button: TextButton): FixedFooter;
    }
    /**
     * An organized grid to display a collection of grid items.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const grid = CardService.newGrid().setTitle('My Grid').setNumColumns(2).addItem(
     *         CardService.newGridItem().setTitle('My item'));
     */
    interface Grid {

      /**
       * Adds a new grid item to the grid.
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#addItem(GridItem)
       * @param gridItem The grid item to add.
       */
      addItem(gridItem: GridItem): Grid;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Grid;

      /**
       * Sets the border style applied to each grid item. Default is NO_BORDER.
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setBorderStyle(BorderStyle)
       * @param borderStyle The border style to apply.
       */
      setBorderStyle(borderStyle: BorderStyle): Grid;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Grid;

      /**
       * The number of columns to display in the grid. If shown in the right side panel, you can display 1-2 columns and the default value is 1. If shown in a dialog, you can display 2-3 columns and the default value is 2.
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setNumColumns(Integer)
       * @param numColumns The number of columns.
       */
      setNumColumns(numColumns: Integer): Grid;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Grid;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Grid;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Grid;

      /**
       * Sets the title text of the grid. The text must be a plain string with no formatting.
       *
       * Return:
       * - Grid — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setTitle(String)
       * @param title The title text.
       */
      setTitle(title: string): Grid;
    }
    /**
     * The items users interact with within a grid widget.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.GridItemLayout.TEXT_BELOW.
     *
     *     const gridItem = CardService.newGridItem()
     *                          .setIdentifier('itemA')
     *                          .setTitle('This is a cat')
     *                          .setImage(CardService.newImageComponent())
     *                          .setLayout(CardService.GridItemLayout.TEXT_BELOW);
     */
    interface GridItem {

      /**
       * Sets the identifier for the grid item. When a user clicks this grid item, this ID is returned in the parent grid's on_click call back parameters.
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setIdentifier(String)
       * @param id The ID.
       */
      setIdentifier(id: string): GridItem;

      /**
       * Sets the image for this grid item.
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setImage(ImageComponent)
       * @param image The ImageComponent object.
       */
      setImage(image: ImageComponent): GridItem;

      /**
       * Sets the layout of text and image for the grid item. Default is TEXT_BELOW
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setLayout(GridItemLayout)
       * @param layout The layout setting.
       */
      setLayout(layout: GridItemLayout): GridItem;

      /**
       * Sets the subtitle of the grid item.
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setSubtitle(String)
       * @param subtitle The subtitle text.
       */
      setSubtitle(subtitle: string): GridItem;

      /**
       * Sets the horizontal alignment of the grid item. Default is START.
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setTextAlignment(HorizontalAlignment)
       * @param alignment The alignment setting.
       */
      setTextAlignment(alignment: HorizontalAlignment): GridItem;

      /**
       * Sets the title text of the grid item.
       *
       * Return:
       * - GridItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setTitle(String)
       * @param title The title text.
       */
      setTitle(title: string): GridItem;
    }
    /**
     * An enum that defines the image and text style of a GridItem.
     */
    enum GridItemLayout { TEXT_BELOW, TEXT_ABOVE }
    /**
     * An enum that specifies the horizontal alignment of a widget.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.HorizontalAlignment.START.
     */
    enum HorizontalAlignment { START, CENTER, END }
    /**
     * An enum that sets how widgets fill the space of a column.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE.
     */
    enum HorizontalSizeStyle { FILL_AVAILABLE_SPACE, FILL_MINIMUM_SPACE }
    /**
     * For a SelectionInput widget that uses a multiselect menu, a data source from a Google
     * Workspace application. The data source populates selection items for the multiselect menu.
     *
     *     const chatSpaceDataSource =
     *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
     *
     *     const chatClientDataSource =
     *         CardService.newChatClientDataSource().setSpaceDataSource(
     *             chatSpaceDataSource);
     *
     *     const hostAppDataSource =
     *         CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
     *
     * Only available for Google Chat apps and Google Workspace add-ons that extend flows. Not
     * available for other Google Workspace add-ons.
     */
    interface HostAppDataSource {

      /**
       * Sets the data source from Google Chat.
       *
       *     const chatSpaceDataSource =
       *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
       *
       *     const chatClientDataSource =
       *         CardService.newChatClientDataSource().setSpaceDataSource(
       *             chatSpaceDataSource);
       *
       *     const hostAppDataSource =
       *         CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
       *
       * Return:
       * - HostAppDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/host-app-data-source#setChatDataSource(ChatClientDataSource)
       * @param chatClientDataSource The data source to be set.
       */
      setChatDataSource(chatClientDataSource: ChatClientDataSource): HostAppDataSource;

      /**
       * Sets the data source from Google Workspace Flows.
       * Only available through the Gemini Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
       *
       *     const workflowDataSource =
       *         CardService.newWorkflowDataSource().setIncludeVariables(true);
       *
       *     const hostAppDataSource =
       *         CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);
       *
       * Return:
       * - HostAppDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/host-app-data-source#setWorkflowDataSource(WorkflowDataSource)
       * @param workflowDataSource The data source to be set.
       */
      setWorkflowDataSource(workflowDataSource: WorkflowDataSource): HostAppDataSource;
    }
    /**
     * Predefined icons that can be used in various UI objects, such as ImageButton or DecoratedText widgets.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.Icon.BOOKMARK.
     */
    enum Icon { NONE, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY }
    /**
     * A predefined icon, a material design icon, or an icon from a URL with a customizable crop style.
     */
    interface IconImage {

      /**
       * Sets the alternative text of the URL which is used for accessibility.
       *
       * Return:
       * - IconImage — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setAltText(String)
       * @param altText The alternative text.
       */
      setAltText(altText: string): IconImage;

      /**
       * Sets the predefined icon if the URL is not set. Default is NONE.
       *
       * Return:
       * - IconImage — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setIcon(Icon)
       * @param icon One of the predefined Icon values.
       */
      setIcon(icon: Icon): IconImage;

      /**
       * Sets the URL of the icon if the icon is not set.
       *
       * Return:
       * - IconImage — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setIconUrl(String)
       * @param url The URL address of a hosted image to use as an icon.
       */
      setIconUrl(url: string): IconImage;

      /**
       * Sets the crop style for the image. The crop type options you can use for icons are SQUARE and CIRCLE. Default is SQUARE.
       *
       * Return:
       * - IconImage — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setImageCropType(ImageCropType)
       * @param imageCropType The ImageCropType option to apply.
       */
      setImageCropType(imageCropType: ImageCropType): IconImage;

      /**
       * Sets the material design icon.
       *
       *     const iconImage = CardService.newIconImage().setMaterialIcon(
       *         CardService.newMaterialIcon().setName('search'),
       *     );
       *
       * Return:
       * - IconImage — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setMaterialIcon(MaterialIcon)
       * @param icon The material icon.
       */
      setMaterialIcon(icon: MaterialIcon): IconImage;
    }
    /**
     * A widget that shows a single image. For information about cropping images, see ImageCropStyle.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const image = CardService.newImage()
     *                       .setAltText('A nice image')
     *                       .setImageUrl('https://image.png');
     */
    interface Image {

      /**
       * Sets the alternative text of the image for accessibility. Required.
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setAltText(String)
       * @param altText The alternative text to assign to this image.
       */
      setAltText(altText: string): Image;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Image;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Image;

      /**
       * Sets the image to use by providing its URL or data string. Required.
       * The provided URL can either be a publicly accessible URL or a base64 encoded image string. To obtain the latter, you can use the following code to create an encoded image string from an image in your Google Drive, then store that string for later use with setImageUrl(url). This method prevents the need for your add-on to access a publicly available image URL:
       *
       *     // The following assumes you have the image to use in Google Drive and have its
       *     // ID.
       *     const imageBytes = DriveApp.getFileById('123abc').getBlob().getBytes();
       *     const encodedImageURL =
       *         `data:image/jpeg;base64,${Utilities.base64Encode(imageBytes)}`;
       *
       *     // You can store encodeImageURL and use it as a parameter to
       *     // Image.setImageUrl(url).
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setImageUrl(String)
       * @param url The URL address of a hosted image to use, or an encoded image string.
       */
      setImageUrl(url: string): Image;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Image;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Image;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - Image — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Image;
    }
    /**
     * A ImageButton with an image displayed on it.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const imageButton =
     *         CardService.newImageButton()
     *             .setAltText('An image button with an airplane icon.')
     *             .setIcon(CardService.Icon.AIRPLANE)
     *             .setOpenLink(CardService.newOpenLink().setUrl('https://airplane.com'));
     */
    interface ImageButton {

      /**
       * Sets the alternative text of the button for accessibility. Required.
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setAltText(String)
       * @param altText The alternative text to assign to this button.
       */
      setAltText(altText: string): ImageButton;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): ImageButton;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): ImageButton;

      /**
       * Sets a predefined Icon to display on the button. Either this or setIconUrl(url) must be used to define the button image.
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setIcon(Icon)
       * @param icon One of the predefined Icon values.
       */
      setIcon(icon: Icon): ImageButton;

      /**
       * Sets the URL of an image to use as this button's icon. Either this or setIcon(icon) must be used to define the button image.
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setIconUrl(String)
       * @param url The URL address of a hosted image to use as this button's icon.
       */
      setIconUrl(url: string): ImageButton;

      /**
       * Sets the button style. If unset, it defaults to ImageButtonStyle.BORDERLESS button.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const imageButton = CardService.newImageButton().setImageButtonStyle(
       *         CardService.ImageButtonStyle.BORDERLESS,
       *     );
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setImageButtonStyle(ImageButtonStyle)
       * @param imageButtonStyle The button style.
       */
      setImageButtonStyle(imageButtonStyle: ImageButtonStyle): ImageButton;

      /**
       * Sets the material design icon.
       *
       *     const imageButton = CardService.newImageButton().setMaterialIcon(
       *         CardService.newMaterialIcon().setName('search'),
       *     );
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setMaterialIcon(MaterialIcon)
       * @param icon The material design icon.
       */
      setMaterialIcon(icon: MaterialIcon): ImageButton;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): ImageButton;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): ImageButton;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): ImageButton;

      /**
       * Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify an action to be triggered when clicked. Nested menus are not supported, actions for menu items should not specify an overflow menu.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const overflowMenuItem =
       *         CardService.newOverflowMenuItem()
       *             .setStartIcon(
       *                 CardService.newIconImage().setIconUrl(
       *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
       *                     ),
       *                 )
       *             .setText('Open Link')
       *             .setOpenLink(
       *                 CardService.newOpenLink().setUrl('https://www.google.com'));
       *
       *     const overflowMenu =
       *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem).build();
       *
       * Return:
       * - ImageButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOverflowMenu(OverflowMenu)
       * @param menu The object that specifies the overflow menu to display when this element is clicked.
       */
      setOverflowMenu(menu: OverflowMenu): ImageButton;
    }
    /**
     * An enum that specifies the style for ImageButton.
     *
     * BORDERLESS is the default; it renders a simple image button with no border.
     * FILLED buttons have a background color you can set with ImageButton.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ImageButtonStyle.BORDERLESS.
     */
    enum ImageButtonStyle { BORDERLESS, OUTLINED, FILLED, FILLED_TONAL }
    /**
     * An image component that can be added to grid items.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const ImageComponent = CardService.newImageComponent()
     *                                .setImageUrl('http://imageurl.ca')
     *                                .setAltText('YOUR ALT TEXT')
     *                                .setCropStyle(CardService.newImageCropStyle())
     *                                .setBorderStyle(CardService.newBorderStyle());
     */
    interface ImageComponent {

      /**
       * Sets the alternative text of the image.
       *
       * Return:
       * - ImageComponent — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-component#setAltText(String)
       * @param altText The alt_text to set for the image.
       */
      setAltText(altText: string): ImageComponent;

      /**
       * Sets the border style applied to the image.
       *
       * Return:
       * - ImageComponent — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-component#setBorderStyle(BorderStyle)
       * @param borderStyle The BorderStyle object to apply.
       */
      setBorderStyle(borderStyle: BorderStyle): ImageComponent;

      /**
       * Sets the crop style for the image.
       *
       * Return:
       * - ImageComponent — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-component#setCropStyle(ImageCropStyle)
       * @param imageCropStyle The ImageCropStyle object to apply.
       */
      setCropStyle(imageCropStyle: ImageCropStyle): ImageComponent;

      /**
       * Sets the URL of the image.
       *
       * Return:
       * - ImageComponent — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-component#setImageUrl(String)
       * @param url The URL.
       */
      setImageUrl(url: string): ImageComponent;
    }
    /**
     * A class that represents a crop style that can be applied to image components. You can't set the
     * size of an image or resize it, but you can crop the image.
     */
    interface ImageCropStyle {

      /**
       * Sets the aspect ratio to use if the crop type is RECTANGLE_CUSTOM. The ratio must be a positive value.
       *
       * Return:
       * - ImageCropStyle — This object, for chaining.
       *
       * Throws:
       * - Error — if the input is negative or zero.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-crop-style#setAspectRatio(Number)
       * @param ratio The ratio to apply.
       */
      setAspectRatio(ratio: number): ImageCropStyle;

      /**
       * Sets the crop type for the image. Default is SQUARE.
       *
       * Return:
       * - ImageCropStyle — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/image-crop-style#setImageCropType(ImageCropType)
       * @param type The crop type.
       */
      setImageCropType(type: ImageCropType): ImageCropStyle;
    }
    /**
     * An enum that represents the crop styles applied to image components.
     *
     * If you want to apply a crop style to an IconImage, you can only use SQUARE
     *  or CIRCLE.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ImageCropType.SQUARE.
     */
    enum ImageCropType { SQUARE, CIRCLE, RECTANGLE_CUSTOM, RECTANGLE_4_3 }
    /**
     * An enum that defines an image cropping style.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.ImageStyle.SQUARE.
     */
    enum ImageStyle { SQUARE, CIRCLE }
    /**
     * An enum that defines the input type of the widget.
     *
     * InputType.TEXT means that the input accepts regular text including all characters.
     *
     * InputType.INTEGER means that the input accepts an integer.
     *
     * InputType.FLOAT means that the input accepts a floating-point number.
     *
     * InputType.EMAIL means that the input accepts an email address.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.InputType.INTEGER.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     */
    enum InputType { TEXT, INTEGER, FLOAT, EMAIL }
    /**
     * An enum type that specifies what to do in response to an interaction with a user, such as a user
     * clicking a button in a card message.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.Interaction.OPEN_DIALOG.
     */
    enum Interaction { INTERACTION_UNSPECIFIED, OPEN_DIALOG }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * This class is deprecated. Instead, use DecoratedText.
     */
    interface KeyValue {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - KeyValue — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): KeyValue;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - KeyValue — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): KeyValue;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - KeyValue — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): KeyValue;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - KeyValue — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): KeyValue;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - KeyValue — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): KeyValue;
      /** @deprecated DO NOT USE */ setBottomLabel(text: string): KeyValue;
      /** @deprecated DO NOT USE */ setButton(button: Button): KeyValue;
      /** @deprecated DO NOT USE */ setContent(text: string): KeyValue;
      /** @deprecated DO NOT USE */ setIcon(icon: Icon): KeyValue;
      /** @deprecated DO NOT USE */ setIconAltText(altText: string): KeyValue;
      /** @deprecated DO NOT USE */ setIconUrl(url: string): KeyValue;
      /** @deprecated DO NOT USE */ setMultiline(multiline: boolean): KeyValue;
      /** @deprecated DO NOT USE */ setSwitch(switchToSet: Switch): KeyValue;
      /** @deprecated DO NOT USE */ setTopLabel(text: string): KeyValue;
    }
    /**
     * Card action that displays a link preview card and smart chip in the host app. For more
     * information, refer to Preview links
     * with smart chips.
     *
     *     const decoratedText =
     *         CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');
     *
     *     const cardSection = CardService.newCardSection().addWidget(decoratedText);
     *
     *     const card = CardService.newCardBuilder().addSection(cardSection).build();
     *
     *     const linkPreview = CardService.newLinkPreview().setPreviewCard(card).setTitle(
     *         'Smart chip title');
     */
    interface LinkPreview {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/link-preview#printJson()
       */
      printJson(): string;

      /**
       * Sets the title that displays in the link preview above the preview card. If unset, the link preview displays the header of the PreviewCard.
       *
       *     const linkPreview =
       *         CardService.newLinkPreview().setLinkPreviewTitle('Link preview title');
       *
       * Return:
       * - LinkPreview — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/link-preview#setLinkPreviewTitle(String)
       * @param title The title of the link preview.
       */
      setLinkPreviewTitle(title: string): LinkPreview;

      /**
       * Sets the card that displays information about a link from a third-party or non-Google service.
       *
       *     const decoratedText =
       *         CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');
       *
       *     const cardSection = CardService.newCardSection().addWidget(decoratedText);
       *
       *     const card = CardService.newCardBuilder().addSection(cardSection).build();
       *
       *     const linkPreview = CardService.newLinkPreview().setPreviewCard(card).setTitle(
       *         'Smart chip title');
       *
       * Return:
       * - LinkPreview — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/link-preview#setPreviewCard(Card)
       * @param previewCard The preview card.
       */
      setPreviewCard(previewCard: Card): LinkPreview;

      /**
       * Sets the title that displays in the smart chip for the link preview. If unset, the smart chip displays the header of the PreviewCard.
       *
       *     const linkPreview = CardService.newLinkPreview().setTitle('Smart chip title');
       *
       * Return:
       * - LinkPreview — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/link-preview#setTitle(String)
       * @param title The title of the smart chip.
       */
      setTitle(title: string): LinkPreview;
    }
    /**
     * An enum type that specifies the type of loading or progress indicator to display while an Action is being processed.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.LoadIndicator.SPINNER.
     */
    enum LoadIndicator { SPINNER, NONE }
    /**
     * An object that supports all Google Font Icons.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const materialIcon = CardService.newMaterialIcon()
     *                              .setName('search')
     *                              .setFill(true)
     *                              .setWeight(400)
     *                              .setGrade(0);
     */
    interface MaterialIcon {

      /**
       * Whether the icon renders as filled. Default value is false.
       * To preview different icon settings, go to Google Font Icons and adjust the settings under Customize.
       *
       *     const materialIcon =
       *         CardService.newMaterialIcon().setName('search').setFill(true);
       *
       * Return:
       * - MaterialIcon — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/material-icon#setFill(Boolean)
       * @param fill Whether the icon is filled.
       */
      setFill(fill: boolean): MaterialIcon;

      /**
       * Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, the default value is used.
       * To preview different icon settings, go to Google Font Icons and adjust the settings under Customize.
       *
       *     const materialIcon =
       *         CardService.newMaterialIcon().setName('search').setGrade(200);
       *
       * Return:
       * - MaterialIcon — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/material-icon#setGrade(Integer)
       * @param grade The icon's grade.
       */
      setGrade(grade: Integer): MaterialIcon;

      /**
       * Sets the name of the icon. Required.
       * The icon name defined in Google Font Icon, For example, check_box.
       * Any invalid names are abandoned and replaced with an empty string and results in the icon failing to render.
       *
       *     const materialIcon = CardService.newMaterialIcon().setName('search');
       *
       * Return:
       * - MaterialIcon — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/material-icon#setName(String)
       * @param name The name of the icon.
       */
      setName(name: string): MaterialIcon;

      /**
       * The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, the default value is used.
       * To preview different icon settings, go to Google Font Icons and adjust the settings under Customize.
       *
       *     const materialIcon =
       *         CardService.newMaterialIcon().setName('search').setWeight(700);
       *
       * Return:
       * - MaterialIcon — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/material-icon#setWeight(Integer)
       * @param weight The stroke weight of the icon.
       */
      setWeight(weight: Integer): MaterialIcon;
    }
    /**
     * A helper object that controls card navigation. See the card navigation guide for more details.
     */
    interface Navigation {

      /**
       * Pops a card from the navigation stack. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#popCard()
       */
      popCard(): Navigation;

      /**
       * Pops to the specified card by its card name. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#popToNamedCard(String)
       * @param cardName The name of the card to navigate to.
       */
      popToNamedCard(cardName: string): Navigation;

      /**
       * Pops the card stack to the root card. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#popToRoot()
       */
      popToRoot(): Navigation;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#printJson()
       */
      printJson(): string;

      /**
       * Pushes the given card onto the stack. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#pushCard(Card)
       * @param card A card to add to the stack.
       */
      pushCard(card: Card): Navigation;

      /**
       * Does an in-place replacement of the current card. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/navigation#updateCard(Card)
       * @param card A card to replace the current card with.
       */
      updateCard(card: Card): Navigation;
    }
    /**
     * A notification shown to the user as a response to interacting with a UI element.
     *
     *     const action = CardService.newAction().setFunctionName('notificationCallback');
     *     CardService.newTextButton().setText('Save').setOnClickAction(action);
     *
     *     // ...
     *
     *     function notificationCallback() {
     *       return CardService.newActionResponseBuilder()
     *           .setNotification(
     *               CardService.newNotification().setText('Some info to display to user'),
     *               )
     *           .build();
     *     }
     */
    interface Notification {

      /**
       * Sets the text to show in the notification. Required.
       *
       * Return:
       * - Notification — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/notification#setText(String)
       * @param text The notification text.
       */
      setText(text: string): Notification;
    }
    /**
     * An enum that specifies what to do when a URL opened through an OpenLink is closed.
     *
     * When a link is opened, the client either forgets about it or waits until the window is closed.
     * The implementation depends on the client platform capabilities. OnClose may cause OpenAs to be ignored; if the client platform cannot support both selected values together,
     * OnClose takes precedence.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.OnClose.RELOAD.
     */
    enum OnClose { NOTHING, RELOAD, RELOAD_ADD_ON }
    /**
     * An enum that specifies how to open a URL.
     *
     * The client can open a URL as either a full size window (if that is the frame used by the
     * client), or an overlay (such as a pop-up). The implementation depends on the client platform
     * capabilities, and the value selected may be ignored if the client does not support it. FULL_SIZE is supported by all clients.
     *
     * Using OnClose may cause OpenAs to be ignored; if the client platform cannot
     * support both selected values together, OnClose takes precedence.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.OpenAs.FULL_SIZE.
     */
    enum OpenAs { FULL_SIZE, OVERLAY }
    /**
     * Represents an action to open a link with some options.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     // A button that opens as a link in an overlay and
     *     // requires a reload when closed.
     *     const button = CardService.newTextButton()
     *                        .setText('This button opens a link in an overlay window')
     *                        .setOpenLink(
     *                            CardService.newOpenLink()
     *                                .setUrl('https://www.google.com')
     *                                .setOpenAs(CardService.OpenAs.OVERLAY)
     *                                .setOnClose(CardService.OnClose.RELOAD_ADD_ON),
     *                        );
     *
     *     // An action response that opens a link in full screen and
     *     // requires no action when closed.
     *     const actionResponse = CardService.newActionResponseBuilder()
     *                                .setOpenLink(
     *                                    CardService.newOpenLink()
     *                                        .setUrl('https://www.google.com')
     *                                        .setOpenAs(CardService.OpenAs.FULL_SIZE)
     *                                        .setOnClose(CardService.OnClose.NOTHING),
     *                                    )
     *                                .build();
     *
     * Note: To reload add-ons after closing a link, don't use a link with
     * Cross-Origin-Opener-Policy (COOP) header enabled. If COOP is enabled in a link, add-ons can't
     * detect the window state, and the add-on card doesn't update.
     */
    interface OpenLink {

      /**
       * Sets the behavior of the URL action when the URL window or tab is closed.
       *
       * Return:
       * - OpenLink — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/open-link#setOnClose(OnClose)
       * @param onClose The closing setting.
       */
      setOnClose(onClose: OnClose): OpenLink;

      /**
       * Sets the behavior of URL when it is opened.
       *
       * Return:
       * - OpenLink — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/open-link#setOpenAs(OpenAs)
       * @param openAs The opening setting.
       */
      setOpenAs(openAs: OpenAs): OpenLink;

      /**
       * Sets the URL to be opened. The URL must match a prefix whitelisted in the manifest.
       *
       * Return:
       * - OpenLink — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/open-link#setUrl(String)
       * @param url The URL to open.
       */
      setUrl(url: string): OpenLink;
    }
    /**
     * Holds a list of OverflowMenuItem objects that are displayed in a pop-up menu.
     *
     * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     *
     *     const overflowMenuItem = CardService.newOverflowMenuItem();
     *     // Finish building the overflow menu item...
     *
     *     const overflowMenu =
     *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem);
     */
    interface OverflowMenu {

      /**
       * Adds a menu item.
       *
       * Return:
       * - OverflowMenu — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu#addMenuItem(OverflowMenuItem)
       * @param menuItem The menu item to add.
       */
      addMenuItem(menuItem: OverflowMenuItem): OverflowMenu;
    }
    /**
     * An OverflowMenuItem with an icon and text label. You can deactivate the menu item when
     * needed.
     *
     * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
     *
     * Developer Preview: Available as part of the Google Workspace Developer Preview Program, which grants early access to certain features.
     *
     *     const overflowMenuItem =
     *         CardService.newOverflowMenuItem()
     *             .setStartIcon(
     *                 CardService.newIconImage().setIconUrl(
     *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
     *                     ),
     *                 )
     *             .setText('Open Link')
     *             .setOpenLink(
     *                 CardService.newOpenLink().setUrl('https://www.google.com'));
     */
    interface OverflowMenuItem {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): OverflowMenuItem;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): OverflowMenuItem;

      /**
       * Sets whether the menu item is disabled. A disabled item is greyed out and cannot be clicked.
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setDisabled(Boolean)
       * @param disabled The disabled state.
       */
      setDisabled(disabled: boolean): OverflowMenuItem;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): OverflowMenuItem;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): OverflowMenuItem;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): OverflowMenuItem;

      /**
       * Sets the menu item's leading icon.
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setStartIcon(IconImage)
       * @param icon The icon to display.
       */
      setStartIcon(icon: IconImage): OverflowMenuItem;

      /**
       * Sets the title of the menu item. Required.
       *
       * Return:
       * - OverflowMenuItem — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/overflow-menu-item#setText(String)
       * @param text The text to display.
       */
      setText(text: string): OverflowMenuItem;
    }
    /**
     * For a SelectionInput widget that uses a multiselect menu, a data source from Google
     * Workspace. Used to populate items in a multiselect menu.
     *
     *     const platformDataSource =
     *         CardService.newPlatformDataSource().setCommonDataSource(
     *             CardService.CommonDataSource.USER,
     *         );
     *
     *     const multiSelect = CardService.newSelectionInput()
     *                             .setType(CardService.SelectionInputType.MULTI_SELECT)
     *                             .setFieldName('contacts')
     *                             .setTitle('Selected contacts')
     *                             .setMultiSelectMaxSelectedItems(5)
     *                             .setMultiSelectMinQueryLength(1)
     *                             .setPlatformDataSource(platformDataSource);
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     */
    interface PlatformDataSource {

      /**
       * Sets the data source from Google Workspace.
       *
       *     const platformDataSource =
       *         CardService.newPlatformDataSource().setCommonDataSource(
       *             CardService.CommonDataSource.USER,
       *         );
       *
       *     const multiSelect = CardService.newSelectionInput()
       *                             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *                             .setFieldName('contacts')
       *                             .setTitle('Selected contacts')
       *                             .setMultiSelectMaxSelectedItems(5)
       *                             .setMultiSelectMinQueryLength(1)
       *                             .setPlatformDataSource(platformDataSource);
       *
       * Return:
       * - PlatformDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/platform-data-source#setCommonDataSource(CommonDataSource)
       * @param commonDataSource The data source to be set.
       */
      setCommonDataSource(commonDataSource: CommonDataSource): PlatformDataSource;

      /**
       * Used to populate spaces in multiselect menu.
       *
       *     const chatSpaceDataSource =
       *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
       *
       *     const chatClientDataSource =
       *         CardService.newChatClientDataSource().setSpaceDataSource(
       *             chatSpaceDataSource);
       *
       *     const hostAppDataSource =
       *         CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
       *
       *     const platformDataSource =
       *         CardService.newPlatformDataSource().setHostAppDataSource(hostAppDataSource);
       *
       *     const multiSelect = CardService.newSelectionInput()
       *                             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *                             .setFieldName('contacts')
       *                             .setTitle('Selected contacts')
       *                             .setMultiSelectMaxSelectedItems(5)
       *                             .setMultiSelectMinQueryLength(1)
       *                             .setPlatformDataSource(platformDataSource);
       *
       * Return:
       * - PlatformDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/platform-data-source#setHostAppDataSource(HostAppDataSource)
       * @param hostAppDataSource The data source to be set.
       */
      setHostAppDataSource(hostAppDataSource: HostAppDataSource): PlatformDataSource;
    }
    /**
     * An enum that represents the type of Chat app response.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.Type.DIALOG.
     */
    enum ResponseType { TYPE_UNSPECIFIED, NEW_MESSAGE, UPDATE_MESSAGE, UPDATE_USER_MESSAGE_CARDS, REQUEST_CONFIG, DIALOG, UPDATE_WIDGET }
    /**
     * An input field that allows choosing between a set of predefined options.
     *
     * Supports form submission validation for SelectionInputType.DROP_DOWN and SelectionInputType.MULTI_SELECT menus only. When Action.setAllWidgetsAreRequired(allWidgetsAreRequired) is set
     * to true or this widget is specified through Action.addRequiredWidget(requiredWidget), the
     * submission action is blocked unless a value is selected.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const checkboxGroup =
     *         CardService.newSelectionInput()
     *             .setType(CardService.SelectionInputType.CHECK_BOX)
     *             .setTitle('A group of checkboxes. Multiple selections are allowed.')
     *             .setFieldName('checkbox_field')
     *             .addItem('checkbox one title', 'checkbox_one_value', false)
     *             .addItem('checkbox two title', 'checkbox_two_value', true)
     *             .addItem('checkbox three title', 'checkbox_three_value', true)
     *             .setOnChangeAction(
     *                 CardService.newAction().setFunctionName('handleCheckboxChange'),
     *             );
     *
     *     const radioGroup =
     *         CardService.newSelectionInput()
     *             .setType(CardService.SelectionInputType.RADIO_BUTTON)
     *             .setTitle(
     *                 'A group of radio buttons. Only a single selection is allowed.')
     *             .setFieldName('checkbox_field')
     *             .addItem('radio button one title', 'radio_one_value', true)
     *             .addItem('radio button two title', 'radio_two_value', false)
     *             .addItem('radio button three title', 'radio_three_value', false);
     *
     *     const multiSelect =
     *         CardService.newSelectionInput()
     *             .setType(CardService.SelectionInputType.MULTI_SELECT)
     *             .setFieldName('multiselect')
     *             .setTitle('A multi select input example.')
     *             .addMultiSelectItem(
     *                 'Contact 1',
     *                 'contact-1',
     *                 false,
     *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
     *                 'Contact one description',
     *                 )
     *             .addMultiSelectItem(
     *                 'Contact 2',
     *                 'contact-2',
     *                 false,
     *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
     *                 'Contact two description',
     *                 )
     *             .addMultiSelectItem(
     *                 'Contact 3',
     *                 'contact-3',
     *                 false,
     *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
     *                 'Contact three description',
     *                 )
     *             .addMultiSelectItem(
     *                 'Contact 4',
     *                 'contact-4',
     *                 false,
     *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
     *                 'Contact four description',
     *                 )
     *             .addMultiSelectItem(
     *                 'Contact 5',
     *                 'contact-5',
     *                 false,
     *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
     *                 'Contact five description',
     *                 )
     *             .setMultiSelectMaxSelectedItems(3)
     *             .setMultiSelectMinQueryLength(1);
     */
    interface SelectionInput {

      /**
       * Adds a new item that can be selected.
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#addItem(Object,Object,Boolean)
       * @param text The text to be shown for this item. Non-string primitive arguments are converted to strings automatically.
       * @param value The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically.
       * @param selected Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
       */
      addItem(text: any, value: any, selected: boolean): SelectionInput;

      /**
       * Adds a new item that can be selected, for multi-select menus.
       *
       *     const multiSelect =
       *         CardService.newSelectionInput()
       *             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *             .setFieldName('multiselect')
       *             .setTitle('A multi select input example.')
       *             .addMultiSelectItem(
       *                 'Contact 1',
       *                 'contact-1',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact one description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 2',
       *                 'contact-2',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact two description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 3',
       *                 'contact-3',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact three description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 4',
       *                 'contact-4',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact four description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 5',
       *                 'contact-5',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact five description',
       *             );
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#addMultiSelectItem(Object,Object,Boolean,Object,Object)
       * @param text The text to be shown for this item. Non-string primitive arguments are converted to strings automatically.
       * @param value The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically.
       * @param selected Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
       * @param startIconUri For multiselect menus, the URL for the icon displayed next to the item's text field. Supports PNG and JPEG files.
       * @param bottomText For multiselect menus, a text description or label that's displayed below the item's text field.
       */
      addMultiSelectItem(text: any, value: any, selected: boolean, startIconUri: any, bottomText: any): SelectionInput;

      /**
       * Sets external data source, such as a relational data base.
       *
       *     const multiSelect =
       *         CardService.newSelectionInput()
       *             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *             .setFieldName('contacts')
       *             .setTitle('Selected contacts')
       *             .addMultiSelectItem(
       *                 'Contact 3',
       *                 'contact-3',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact three description',
       *                 )
       *             .setMultiSelectMaxSelectedItems(5)
       *             .setMultiSelectMinQueryLength(2)
       *             .setExternalDataSource(
       *                 CardService.newAction().setFunctionName('getContacts'),
       *             );
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setExternalDataSource(Action)
       * @param action The external data source.
       */
      setExternalDataSource(action: Action): SelectionInput;

      /**
       * Sets the key that identifies this selection input in the event object that is generated when there is a UI interaction. Not visible to the user. Required, must be unique.
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): SelectionInput;

      /**
       * Sets the maximum number of items that a user can select.
       *
       *     const multiSelect =
       *         CardService.newSelectionInput()
       *             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *             .setFieldName('multiselect')
       *             .setTitle('A multi select input example.')
       *             .setMultiSelectMaxSelectedItems(3)
       *             .addMultiSelectItem(
       *                 'Contact 1',
       *                 'contact-1',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact one description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 2',
       *                 'contact-2',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact two description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 3',
       *                 'contact-3',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact three description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 4',
       *                 'contact-4',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact four description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 5',
       *                 'contact-5',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact five description',
       *             );
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setMultiSelectMaxSelectedItems(Integer)
       * @param maxSelectedItems The maximum number of items.
       */
      setMultiSelectMaxSelectedItems(maxSelectedItems: Integer): SelectionInput;

      /**
       * Sets the number of text characters that a user inputs before the app queries autocomplete and displays suggested items on the card.
       *
       *     const multiSelect =
       *         CardService.newSelectionInput()
       *             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *             .setFieldName('multiselect')
       *             .setTitle('A multi select input example.')
       *             .setMultiSelectMinQueryLength(1)
       *             .addMultiSelectItem(
       *                 'Contact 1',
       *                 'contact-1',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact one description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 2',
       *                 'contact-2',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact two description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 3',
       *                 'contact-3',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact three description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 4',
       *                 'contact-4',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact four description',
       *                 )
       *             .addMultiSelectItem(
       *                 'Contact 5',
       *                 'contact-5',
       *                 false,
       *                 'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
       *                 'Contact five description',
       *             );
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setMultiSelectMinQueryLength(Integer)
       * @param queryLength The number of text characters.
       */
      setMultiSelectMinQueryLength(queryLength: Integer): SelectionInput;

      /**
       * Sets an Action to be performed whenever the selection input changes.
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): SelectionInput;

      /**
       * Sets a data source from Google Workspace. Used to populate items in a multiselect menu.
       *
       *     const multiSelect =
       *         CardService.newSelectionInput()
       *             .setType(CardService.SelectionInputType.MULTI_SELECT)
       *             .setFieldName('contacts')
       *             .setTitle('Selected contacts')
       *             .setPlatformDataSource(
       *                 CardService.newPlatformDataSource().setCommonDataSource(
       *                     CardService.CommonDataSource.USER,
       *                     ),
       *             );
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setPlatformDataSource(PlatformDataSource)
       * @param platformDataSource The data source.
       */
      setPlatformDataSource(platformDataSource: PlatformDataSource): SelectionInput;

      /**
       * Sets the title to be shown ahead of the input field.
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): SelectionInput;

      /**
       * Sets the type of this input. Defaults to CHECKBOX.
       *
       * Return:
       * - SelectionInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setType(SelectionInputType)
       * @param type The selection type.
       */
      setType(type: SelectionInputType): SelectionInput;
    }
    /**
     * The format of the items that users can select. Different options support different types of
     * interactions. For example, users can select multiple checkboxes, but can only select one item
     * from a dropdown menu.
     *
     * Each selection input supports one type of selection. Mixing checkboxes and switches, for
     * example, isn't supported.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.SelectionInput.CHECK_BOX.
     */
    enum SelectionInputType { CHECK_BOX, RADIO_BUTTON, DROPDOWN, SWITCH, MULTI_SELECT }
    /**
     * An enum that represents the status code.
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.Status.OK.
     */
    enum Status { OK, CANCELLED, UNKNOWN, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, OUT_OF_RANGE, UNIMPLEMENTED, INTERNAL, UNAVAILABLE, DATA_LOSS }
    /**
     * Autocomplete suggestions to supplement a TextInput widget.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const textInput = CardService.newTextInput().setSuggestions(
     *         CardService.newSuggestions()
     *             .addSuggestion('First suggestion')
     *             .addSuggestion('Second suggestion'),
     *     );
     */
    interface Suggestions {

      /**
       * Add a text suggestion.
       *
       * Return:
       * - Suggestions — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestion(String)
       * @param suggestion The suggestion text.
       */
      addSuggestion(suggestion: string): Suggestions;

      /**
       * Add a list of text suggestions.
       *
       * Return:
       * - Suggestions — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestions(Object)
       * @param suggestions An array of string suggestions.
       */
      addSuggestions(suggestions: any[]): Suggestions;
    }
    /**
     * A response object that can be returned from a suggestions callback function. This is used with
     * TextInput widgets that implement autocomplete.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const suggestionsResponse = CardService.newSuggestionsResponseBuilder()
     *                                     .setSuggestions(
     *                                         CardService.newSuggestions()
     *                                             .addSuggestion('First suggestion')
     *                                             .addSuggestion('Second suggestion'),
     *                                         )
     *                                     .build();
     */
    interface SuggestionsResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for SuggestionsResponse objects.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     */
    interface SuggestionsResponseBuilder {

      /**
       * Builds the current suggestions response and validates it.
       *
       * Return:
       * - SuggestionsResponse — A validated SuggestionsResponse.
       *
       * Throws:
       * - Error — if the constructed suggestions response isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#build()
       */
      build(): SuggestionsResponse;

      /**
       * Sets the suggestions used in auto complete in text fields.
       *
       * Return:
       * - SuggestionsResponseBuilder — This object.
       *
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#setSuggestions(Suggestions)
       * @param suggestions The Suggestions to use.
       */
      setSuggestions(suggestions: Suggestions): SuggestionsResponseBuilder;
    }
    /**
     * A UI element that supports being toggled on or off. This can only be used within a DecoratedText widget.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const switchDecoratedText =
     *         CardService.newDecoratedText()
     *             .setTopLabel('Switch decorated text widget label')
     *             .setText('This is a decorated text widget with a switch on the right')
     *             .setWrapText(true)
     *             .setSwitchControl(
     *                 CardService.newSwitch()
     *                     .setFieldName('form_input_switch_key')
     *                     .setValue('form_input_switch_value')
     *                     .setOnChangeAction(
     *                         CardService.newAction().setFunctionName(
     *                             'handleSwitchChange'),
     *                         ),
     *             );
     */
    interface Switch {

      /**
       * Sets the control type of the switch. Defaults to SWITCH.
       *
       * Return:
       * - Switch — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/switch#setControlType(SwitchControlType)
       * @param controlType The switch control type.
       */
      setControlType(controlType: SwitchControlType): Switch;

      /**
       * Sets the key that identifies this switch in the event object that is generated when there is a UI interaction. Not visible to the user. Required.
       * Unlike other form fields, this field name does not need to be unique. The form input values for switches using the same field name are returned as an array. The array consists of the values for all enabled switches with that field name.
       *
       * Return:
       * - Switch — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/switch#setFieldName(String)
       * @param fieldName The key that is used to identify this switch.
       */
      setFieldName(fieldName: string): Switch;

      /**
       * Sets the action to take when the switch is toggled.
       *
       * Return:
       * - Switch — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/switch#setOnChangeAction(Action)
       * @param action The action to take when the switch is toggled.
       */
      setOnChangeAction(action: Action): Switch;

      /**
       * Sets whether this switch should start as selected or unselected.
       *
       * Return:
       * - Switch — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/switch#setSelected(Boolean)
       * @param selected The starting switch state setting.
       */
      setSelected(selected: boolean): Switch;

      /**
       * Sets the value that is sent as the form input when this switch is toggled on.
       *
       * Return:
       * - Switch — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/switch#setValue(String)
       * @param value The value associated with the name when the switch is on. When this is sent to the form callback, it is always represented as a string.
       */
      setValue(value: string): Switch;
    }
    /**
     * Type of a Switch widget control.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.SwitchControlType.SWITCH.
     */
    enum SwitchControlType { SWITCH, CHECK_BOX }
    /**
     * A TextButton with a text label. You can set the background color and deactivate the button
     * when needed.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const textButton = CardService.newTextButton()
     *                            .setText('Open Link')
     *                            .setOpenLink(CardService.newOpenLink().setUrl(
     *                                'https://www.google.com'));
     */
    interface TextButton {

      /**
       * Sets the alternative text of the button for accessibility. If unset, defaults to the text that displays on the button.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setAltText(String)
       * @param altText The alternative text to assign to this button.
       */
      setAltText(altText: string): TextButton;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked. This opens the URL in a new window. When the user finishes the authorization flow and returns to the application, the add-on reloads.
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *     // ...
       *
       *     const action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): TextButton;

      /**
       * Sets the background color for TextButtonStyle.FILLED button. If unset for a TextButtonStyle.FILLED button, the button uses the secondary color defined in the add-on manifest. This method is a no-op for TextButtonStyle.OUTLINED buttons.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setBackgroundColor(String)
       * @param backgroundColor The color in #rgb format.
       */
      setBackgroundColor(backgroundColor: string): TextButton;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('composeEmailCallback');
       *     CardService.newTextButton()
       *         .setText('Compose Email')
       *         .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
       *
       *     // ...
       *
       *     function composeEmailCallback(e) {
       *       const thread = GmailApp.getThreadById(e.threadId);
       *       const draft = thread.createDraftReply('This is a reply');
       *       return CardService.newComposeActionResponseBuilder()
       *           .setGmailDraft(draft)
       *           .build();
       *     }
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): TextButton;

      /**
       * Sets whether the button is disabled. A disabled button is greyed out and cannot be clicked.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setDisabled(Boolean)
       * @param disabled The disabled state.
       */
      setDisabled(disabled: boolean): TextButton;

      /**
       * Sets a predefined Icon to display on the button. Either this or setIconUrl(url) must be used to define the button image.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setIcon(Icon)
       * @param icon One of the predefined Icon values.
       */
      setIcon(icon: Icon): TextButton;

      /**
       * Sets the URL of an image to use as this button's icon. Either this or setIcon(icon) must be used to define the button image.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setIconUrl(String)
       * @param url The URL address of a hosted image to use as this button's icon.
       */
      setIconUrl(url: string): TextButton;

      /**
       * Sets the material design icon.
       *
       *     const textButton = CardService.newTextButton().setMaterialIcon(
       *         CardService.newMaterialIcon().setName('search'),
       *     );
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setMaterialIcon(MaterialIcon)
       * @param icon The material design icon.
       */
      setMaterialIcon(icon: MaterialIcon): TextButton;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton()
       *         .setText('Create notification')
       *         .setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(
       *               CardService.newNotification().setText('Some info to display to user'),
       *               )
       *           .build();
       *     }
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): TextButton;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the URL needs to be built or when you need to take other actions in addition to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *     // ...
       *
       *     const action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton()
       *         .setText('Open Link')
       *         .setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
       *           .build();
       *     }
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): TextButton;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already known and only needs to be opened. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): TextButton;

      /**
       * Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify an action to be triggered when clicked. Nested menus are not supported, actions for menu items should not specify an overflow menu.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const overflowMenuItem =
       *         CardService.newOverflowMenuItem()
       *             .setStartIcon(
       *                 CardService.newIconImage().setIconUrl(
       *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
       *                     ),
       *                 )
       *             .setText('Open Link')
       *             .setOpenLink(
       *                 CardService.newOpenLink().setUrl('https://www.google.com'));
       *
       *     const overflowMenu =
       *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem).build();
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOverflowMenu(OverflowMenu)
       * @param menu The object that specifies the overflow menu to display when this element is clicked.
       */
      setOverflowMenu(menu: OverflowMenu): TextButton;

      /**
       * Sets the text that displays on the button.
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setText(String)
       * @param text The text that appears on the button.
       */
      setText(text: string): TextButton;

      /**
       * Sets the button style. If unset, it defaults to TextButtonStyle.OUTLINED button.
       *
       *     const button =
       *         CardService.newTextButton()
       *             .setText('Filled')
       *             .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
       *             .setOpenLink(CardService.newOpenLink().setUrl('www.google.com'));
       *
       * Return:
       * - TextButton — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setTextButtonStyle(TextButtonStyle)
       * @param textButtonStyle The button style.
       */
      setTextButtonStyle(textButtonStyle: TextButtonStyle): TextButton;
    }
    /**
     * An enum that specifies the style for TextButton.
     *
     * OUTLINED is the default; it renders a simple text button with clear background.
     * FILLED buttons have a background color you can set with TextButton.setBackgroundColor(backgroundColor).
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.TextButtonStyle.OUTLINED.
     */
    enum TextButtonStyle { OUTLINED, TEXT, FILLED, FILLED_TONAL, BORDERLESS }
    /**
     * A input field widget that accepts text input.
     *
     * Supports form submission validation. When Action.setAllWidgetsAreRequired(allWidgetsAreRequired) is set to
     * true or this widget is specified through Action.addRequiredWidget(requiredWidget), the submission
     * action is blocked unless a value is entered.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const textInput = CardService.newTextInput()
     *                           .setFieldName('text_input_form_input_key')
     *                           .setTitle('Text input title')
     *                           .setHint('Text input hint');
     */
    interface TextInput {

      /**
       * Sets the key that identifies this text input in the event object that is generated when there is a UI interaction. Not visible to the user. Required, must be unique.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setFieldName(String)
       * @param fieldName The key that is used to identify this input.
       */
      setFieldName(fieldName: string): TextInput;

      /**
       * Sets a hint for the text input. Used to give the user extra guidance on what to input. For example, a hint could describe formatting ("xxx-xxx-xxxx") for a phone number field.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setHint(String)
       * @param hint The text hint to display below the input field. This text is always visible.
       */
      setHint(hint: string): TextInput;

      /**
       * Sets a data source from Google Workspace applications. Currently supports users and Chat spaces.
       * Only available through the Gemini Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
       *
       *     const workflowDataSource =
       *         CardService.newWorkflowDataSource().setIncludeVariables(true);
       *
       *     const hostAppDataSource =
       *         CardService.newHostAppDataSource().setWorkflowDataSource(workflowDataSource);
       *
       *     const textInput = CardService.newTextInput()
       *                           .setFieldName('text_input_form_input_key')
       *                           .setTitle('Text input title')
       *                           .setHint('Text input hint')
       *                           .setHostAppDataSource(hostAppDataSource);
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setHostAppDataSource(HostAppDataSource)
       * @param hostAppDataSource The data source.
       */
      setHostAppDataSource(hostAppDataSource: HostAppDataSource): TextInput;

      /**
       * Sets whether the input text shows on one line or multiple lines.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setMultiline(Boolean)
       * @param multiline The multiline setting.
       */
      setMultiline(multiline: boolean): TextInput;

      /**
       * Sets an action to be performed whenever the text input changes.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): TextInput;

      /**
       * Sets the suggestions for autocompletion in the text field.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setSuggestions(Suggestions)
       * @param suggestions The collection of suggestions to use.
       */
      setSuggestions(suggestions: Suggestions): TextInput;

      /**
       * Sets the callback action to fetch suggestions based on user input for autocompletion. The Action parameter must specify a callback function that returns a SuggestionsResponse object.
       *
       *     const action = CardService.newAction()
       *                        .setFunctionName('suggestionCallback')
       *                        .setParameters({numSuggestions: 3});
       *
       *     CardService.newTextInput()
       *         .setFieldName('option-field')
       *         .setTitle('Option Selected')
       *         .setSuggestionsAction(action);
       *
       *     // ...
       *
       *     function suggestionCallback(e) {
       *       const suggestions = CardService.newSuggestions();
       *       const numSuggestions = Number.parseInt(e.parameter.numSuggestions);
       *       for (let i = 1; i <= numSuggestions; i++) {
       *         suggestions.addSuggestion(`Suggestion ${i}`);
       *       }
       *       return CardService.newSuggestionsResponseBuilder()
       *           .setSuggestions(suggestions)
       *           .build();
       *     }
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setSuggestionsAction(Action)
       * @param suggestionsAction The action that fetches suggestions for this input.
       */
      setSuggestionsAction(suggestionsAction: Action): TextInput;

      /**
       * Sets the title to be shown above the input field. Required.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setTitle(String)
       * @param title The text label for this input.
       */
      setTitle(title: string): TextInput;

      /**
       * Sets the validation rule for this widget.
       *
       *     const validation = CardService.newValidation().setCharacterLimit('10').setType(
       *         CardService.InputType.TEXT);
       *
       *     const input = CardService.newTextInput()
       *                       .setFieldName('text_name_xxx1')
       *                       .setTitle('Max 10 characters')
       *                       .setValidation(validation);
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setValidation(Validation)
       * @param validation The validation rule for this TextInput widget.
       */
      setValidation(validation: Validation): TextInput;

      /**
       * Sets the pre-filled value to be set in the input field.
       *
       * Return:
       * - TextInput — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-input#setValue(String)
       * @param value The default value placed in the input. It is always represented as a string in the form callback parameters.
       */
      setValue(value: string): TextInput;
    }
    /**
     * A widget that displays text and supports basic HTML formatting.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const textParagraph = CardService.newTextParagraph().setText(
     *         'This is a text paragraph widget. Multiple lines are allowed if needed.',
     *     );
     */
    interface TextParagraph {

      /**
       * Sets the maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a "show more" button. If the text is equal or shorter than the specified maximum number of lines, a "show more" button isn't displayed.
       * Available for Google Chat apps. In developer preview for Google Workspace add-ons.
       *
       *     const textParagraph =
       *         CardService.newTextParagraph()
       *             .setText(
       *                 'This is a text paragraph widget. Multiple lines are allowed if needed.',
       *                 )
       *             .setMaxLines(1);
       *
       * Return:
       * - TextParagraph — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-paragraph#setMaxLines(Integer)
       * @param maxLines The maximum number of lines of text that are displayed.
       */
      setMaxLines(maxLines: Integer): TextParagraph;

      /**
       * Sets the text of the paragraph. Required.
       *
       * Return:
       * - TextParagraph — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/text-paragraph#setText(String)
       * @param text The text to display.
       */
      setText(text: string): TextParagraph;
    }
    /**
     * An input field that allows users to input a time.
     *
     * Available for Google Workspace add-ons and Google Chat apps.
     *
     *     const dateTimePicker =
     *         CardService.newTimePicker()
     *             .setTitle('Enter the time.')
     *             .setFieldName('time_field')
     *             // Set default value as 3:30 AM.
     *             .setHours(3)
     *             .setMinutes(30)
     *             .setOnChangeAction(
     *                 CardService.newAction().setFunctionName('handleDateTimeChange'),
     *             );
     */
    interface TimePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when there is a UI interaction. The field name is visible to the user. Required; the specified field name must be unique.
       *
       * Return:
       * - TimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): TimePicker;

      /**
       * Sets the prefilled hours value to set in the input field.
       *
       * Return:
       * - TimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setHours(Integer)
       * @param hours The default hour value placed in the input, range from 0 to 23. It is always represented as a string in the form callback parameters.
       */
      setHours(hours: Integer): TimePicker;

      /**
       * Sets the prefilled minutes value to set in the input field.
       *
       * Return:
       * - TimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setMinutes(Integer)
       * @param minutes The default minutes value placed in the input, range from 0 to 59. It is always represented as a string in the form callback parameters.
       */
      setMinutes(minutes: Integer): TimePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       *
       * Return:
       * - TimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): TimePicker;

      /**
       * Sets the title displayed above the input field.
       *
       * Return:
       * - TimePicker — This picker, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): TimePicker;
    }
    /**
     * A trigger that runs CEL
     * expression validation widget event actions according to the action rule ID.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const trigger = CardService.newTrigger().setActionRuleId("my_action_rule_id");
     */
    interface Trigger {

      /**
       * Sets the action rule id for the trigger.
       *
       * Return:
       * - Trigger — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/trigger#setActionRuleId(String)
       * @param actionRuleId The uuid that uniquely identifies an action.
       */
      setActionRuleId(actionRuleId: string): Trigger;
    }
    /**
     * The response object that may be returned from a method that creates universal action.
     *
     *     // A universal action that opens a link.
     *     const openLinkUniversalAction =
     *         CardService.newUniversalActionResponseBuilder()
     *             .setOpenLink(CardService.newOpenLink().setUrl('https://www.google.com'))
     *             .build();
     *
     *     const cardBuilder1 = CardService.newCardBuilder();
     *     const cardBuilder2 = CardService.newCardBuilder();
     *     // Finish building the cards ...
     *
     *     // A universal action that shows two static cards.
     *     const cardsUniversalAction =
     *         CardService.newUniversalActionResponseBuilder()
     *             .displayAddOnCards([cardBuilder1.build(), cardBuilder2.build()])
     *             .build();
     */
    interface UniversalActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for the UniversalActionResponse objects.
     */
    interface UniversalActionResponseBuilder {

      /**
       * Builds the current universal action response and validates it.
       *
       * Return:
       * - UniversalActionResponse — A validated UniversalActionResponse.
       *
       * Throws:
       * - Error — if the constructed universal action response isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#build()
       */
      build(): UniversalActionResponse;

      /**
       * Displays the add-on with the specified cards.
       *
       * Return:
       * - UniversalActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#displayAddOnCards(Object)
       * @param cardObjects An array of Cards to display.
       */
      displayAddOnCards(cardObjects: any[]): UniversalActionResponseBuilder;

      /**
       * Sets the URL to open when the universal action is selected.
       *
       * Return:
       * - UniversalActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#setOpenLink(OpenLink)
       * @param openLink The link object to use.
       */
      setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
    }
    /**
     * Represents an action that updates the email draft that the user is currently editing.
     *
     *     // An UpdateDraftActionResponse that inserts a list of To recipients into an
     *     // email draft
     *     let updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateToRecipientsAction(
     *                 CardService.newUpdateToRecipientsAction().addUpdateToRecipients([
     *                   'joe@example.com',
     *                   'wen@example.com',
     *                 ]),
     *                 )
     *             .build();
     *
     *     // An UpdateDraftActionResponse that inserts a list of Cc recipients into an
     *     // email draft
     *     updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateCcRecipientsAction(
     *                 CardService.newUpdateCcRecipientsAction().addUpdateCcRecipients([
     *                   'joe@example.com',
     *                   'wen@example.com',
     *                 ]),
     *                 )
     *             .build()
     *
     *             // An UpdateDraftActionResponse that inserts a list of Bcc recipients
     *             // into an email draft
     *             .setUpdateCcRecipientsAction(
     *                 CardService.newUpdateBccRecipientsAction().addUpdateBccRecipients([
     *                   'joe@example.com',
     *                   'wen@example.com',
     *                 ]),
     *             );
     *
     *     // An UpdateDraftActionResponse that inserts a subject line into an email draft
     *     updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateDraftSubjectAction(
     *                 CardService.newUpdateDraftSubjectAction().addUpdateSubject(
     *                     'example subject',
     *                     ),
     *                 )
     *             .build();
     *
     *     // An UpdateDraftActionResponse that inserts non-editable content (a link in
     *     // this case) into an email draft.
     *     updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateDraftBodyAction(
     *                 CardService.newUpdateDraftBodyAction()
     *                     .addUpdateContent(
     *                         '<a href="https://www.google.com">Google</a>',
     *                         CardService.ContentType.IMMUTABLE_HTML,
     *                         )
     *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
     *                 )
     *             .build();
     *
     *     // An UpdateDraftActionResponse that inserts a link into an email draft. The
     *     // added content can be edited further.
     *     updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateDraftBodyAction(
     *                 CardService.newUpdateDraftBodyAction()
     *                     .addUpdateContent(
     *                         '<a href="https://www.google.com">Google</a>',
     *                         CardService.ContentType.MUTABLE_HTML,
     *                         )
     *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
     *                 )
     *             .build();
     *
     *     // An UpdateDraftActionResponse that inserts multiple values of different types.
     *     // The example action response inserts two lines next to each other in the email
     *     // draft, at the cursor position. Each line contains the content added by
     *     // {@link UpdateDraftActionResponseBuilder#addUpdateContent}.
     *     updateDraftActionResponse =
     *         CardService.newUpdateDraftActionResponseBuilder()
     *             .setUpdateDraftBodyAction(
     *                 CardService.newUpdateDraftBodyAction()
     *                     .addUpdateContent(
     *                         '<a href="https://www.google.com">Google</a>',
     *                         CardService.ContentType.MUTABLE_HTML,
     *                         )
     *                     .addUpdateContent(
     *                         'Above is a google link.', CardService.ContentType.PLAIN_TEXT)
     *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
     *                 )
     *             .build();
     */
    interface UpdateDraftActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for UpdateDraftActionResponse objects.
     */
    interface UpdateDraftActionResponseBuilder {

      /**
       * Builds the current update draft action response and validates it.
       *
       * Return:
       * - UpdateDraftActionResponse — A validated draft action response.
       *
       * Throws:
       * - Error — if the constructed UpdateDraftActionResponse isn't valid.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#build()
       */
      build(): UpdateDraftActionResponse;

      /**
       * Sets an action that updates the email Bcc recipients of a draft.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftBccRecipientsAction(UpdateDraftBccRecipientsAction)
       * @param updateDraftBccRecipientsAction The action that updates the draft Bcc recipients.
       */
      setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction: UpdateDraftBccRecipientsAction): UpdateDraftActionResponseBuilder;

      /**
       * Set an action that updates the email body of a draft.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftBodyAction(UpdateDraftBodyAction)
       * @param updateDraftBodyAction The action that updates the draft body.
       */
      setUpdateDraftBodyAction(updateDraftBodyAction: UpdateDraftBodyAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the Cc recipients of a draft.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftCcRecipientsAction(UpdateDraftCcRecipientsAction)
       * @param updateDraftCcRecipientsAction The action that updates the draft Cc recipients.
       */
      setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction: UpdateDraftCcRecipientsAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the subject line of a draft.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftSubjectAction(UpdateDraftSubjectAction)
       * @param updateDraftSubjectAction The action that updates the subject line.
       */
      setUpdateDraftSubjectAction(updateDraftSubjectAction: UpdateDraftSubjectAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the To recipients of a draft.
       *
       * Return:
       * - UpdateDraftActionResponseBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftToRecipientsAction(UpdateDraftToRecipientsAction)
       * @param updateDraftToRecipientsAction The action that updates the To recipients.
       */
      setUpdateDraftToRecipientsAction(updateDraftToRecipientsAction: UpdateDraftToRecipientsAction): UpdateDraftActionResponseBuilder;
    }
    /**
     * Updates the Bcc recipients of an email draft.
     */
    interface UpdateDraftBccRecipientsAction {

      /**
       * Updates the Bcc recipients of an email draft.
       *
       * Return:
       * - UpdateDraftBccRecipientsAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-bcc-recipients-action#addUpdateBccRecipients(String)
       * @param bccRecipientEmails The Bcc recipients to insert to the email draft.
       */
      addUpdateBccRecipients(bccRecipientEmails: string[]): UpdateDraftBccRecipientsAction;
    }
    /**
     * Updates the email draft body.
     */
    interface UpdateDraftBodyAction {

      /**
       * Adds the specified content to the draft body. The type of the content is specified by ContentType.
       *
       * Return:
       * - UpdateDraftBodyAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-body-action#addUpdateContent(String,ContentType)
       * @param content The content to insert to the email draft.
       * @param contentType The content type of the content to be inserted.
       */
      addUpdateContent(content: string, contentType: ContentType): UpdateDraftBodyAction;

      /**
       * Sets the UpdateDraftBodyType of this update action on the draft body. For example, inserting content at the start, end, or cursor position of the draft body.
       *
       * Return:
       * - UpdateDraftBodyAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-body-action#setUpdateType(UpdateDraftBodyType)
       * @param updateType The type of update to be performed on an email draft.
       */
      setUpdateType(updateType: UpdateDraftBodyType): UpdateDraftBodyAction;
    }
    /**
     * An enum value that specifies the type of an UpdateDraftBodyAction.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.UpdateDraftBodyType.IN_PLACE_INSERT.
     */
    enum UpdateDraftBodyType { IN_PLACE_INSERT, INSERT_AT_START, INSERT_AT_END }
    /**
     * Updates the Cc recipients of an email draft.
     */
    interface UpdateDraftCcRecipientsAction {

      /**
       * Updates the Cc recipients of an email draft.
       *
       * Return:
       * - UpdateDraftCcRecipientsAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-cc-recipients-action#addUpdateCcRecipients(String)
       * @param ccRecipientEmails The Cc recipients to insert to the email draft.
       */
      addUpdateCcRecipients(ccRecipientEmails: string[]): UpdateDraftCcRecipientsAction;
    }
    /**
     * Updates the subject line of an email draft.
     */
    interface UpdateDraftSubjectAction {

      /**
       * Updates the subject line of an email draft.
       *
       * Return:
       * - UpdateDraftSubjectAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-subject-action#addUpdateSubject(String)
       * @param subject The subject line to insert to the email draft.
       */
      addUpdateSubject(subject: string): UpdateDraftSubjectAction;
    }
    /**
     * Updates the To recipients of an email draft.
     */
    interface UpdateDraftToRecipientsAction {

      /**
       * Updates the To recipients of an email draft.
       *
       * Return:
       * - UpdateDraftToRecipientsAction — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-draft-to-recipients-action#addUpdateToRecipients(String)
       * @param toRecipientEmails The To recipients to insert to the email draft.
       */
      addUpdateToRecipients(toRecipientEmails: string[]): UpdateDraftToRecipientsAction;
    }
    /**
     * Updates the visibility of a card widget to make it display or to hide it.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const updateVisibilityAction = CardService.newUpdateVisibilityAction()
     *     .setVisibility(CardService.Visibility.VISIBLE);
     */
    interface UpdateVisibilityAction {

      /**
       * Sets the visibility of widgets to visible or hidden.
       *
       * Return:
       * - UpdateVisibilityAction — The UpdateVisibilityAction, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/update-visibility-action#setVisibility(Visibility)
       * @param visibility The visibility of the widgets.
       */
      setVisibility(visibility: Visibility): UpdateVisibilityAction;
    }
    /**
     * The response of the updated widget. Used to provide autocomplete options for multiselect menu in
     * SelectionInput.
     *
     *     const updatedWidget = CardService.newUpdatedWidget()
     *                               .addItem(
     *                                   'item_one_title',
     *                                   'item_one_value',
     *                                   false,
     *                                   'item_one_uri',
     *                                   'item_one_bottom_text',
     *                                   )
     *                               .addItem(
     *                                   'item_two_title',
     *                                   'item_two_value',
     *                                   false,
     *                                   'item_two_uri',
     *                                   'item_two_bottom_text',
     *                               );
     *
     * Only available for Google Chat apps. Not available for Google Workspace add-ons.
     */
    interface UpdatedWidget {

      /**
       * Adds a new item that can be selected.
       *
       *     const updatedWidget = CardService.newUpdatedWidget()
       *                               .addItem(
       *                                   'item_one_title',
       *                                   'item_one_value',
       *                                   false,
       *                                   'item_one_uri',
       *                                   'item_one_bottom_text',
       *                                   )
       *                               .addItem(
       *                                   'item_two_title',
       *                                   'item_two_value',
       *                                   false,
       *                                   'item_two_uri',
       *                                   'item_two_bottom_text',
       *                               );
       *
       * Return:
       * - UpdatedWidget — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/updated-widget#addItem(Object,Object,Boolean,Object,Object)
       * @param text The text to be shown for this item. Non-string primitive arguments are converted to strings automatically.
       * @param value The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically.
       * @param selected Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
       * @param startIconUri For multiselect menus, the URL for the icon displayed next to the item's text field. Supports PNG and JPEG files.
       * @param bottomText For multiselect menus, a text description or label that's displayed below the item's text field.
       */
      addItem(text: any, value: any, selected: boolean, startIconUri: any, bottomText: any): UpdatedWidget;
    }
    /**
     * An object that defines the validation rule for the widget that it is attached to.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     *     const validation = CardService.newValidation().setCharacterLimit('10').setInputType(
     *         CardService.InputType.TEXT);
     */
    interface Validation {

      /**
       * Sets the character limit of the widget.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       * Return:
       * - Validation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/validation#setCharacterLimit(Integer)
       * @param characterLimit The character limit to set. Note that this restriction is only effective for TextInput and is ignored for other widgets.
       */
      setCharacterLimit(characterLimit: Integer): Validation;

      /**
       * Sets the input type of the widget.
       * Available for Google Chat apps and Google Workspace add-ons.
       *
       * Return:
       * - Validation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/validation#setInputType(InputType)
       * @param inputType The InputType to set.
       */
      setInputType(inputType: InputType): Validation;
    }
    /**
     * An enum that sets the vertical alignment of widgets in a column.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.VerticleAlignment.TOP.
     */
    enum VerticalAlignment { CENTER, TOP, BOTTOM }
    /**
     * An enum that represents the visibility state of the widgets.
     *
     * Visibility.VISIBLE means that the widget is being displayed and is visible.
     *
     * Visibility.HIDDEN means that the widget is not displayed and is invisible.
     *
     * To call an enum, call its parent class, name, and property. For example,
     * CardService.Visibility.VISIBLE.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     */
    enum Visibility { VISIBLE, HIDDEN, VISIBILITY_UNSPECIFIED }
    /**
     * Base class for all widgets that can be added to a Card.
     */
    interface Widget {
    }
    /**
     * For a SelectionInput,DateTimePicker` or TextInput widget, a data source
     * from a Google Workspace flow. The data source populates available options for a widget.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
     *     .setType(CardService.WorkflowDataSourceType.USER);
     */
    interface WorkflowDataSource {

      /**
       * Whether to include variables from the previous step in the data source.
       *
       * Return:
       * - WorkflowDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/workflow-data-source#setIncludeVariables(Boolean)
       * @param includeVariables Whether to include variables in the data source.
       */
      setIncludeVariables(includeVariables: boolean): WorkflowDataSource;

      /**
       * Sets the type of the workflow data source.
       *
       * Return:
       * - WorkflowDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/workflow-data-source#setType(WorkflowDataSourceType)
       * @param type The type of the workflow data source.
       */
      setType(type: WorkflowDataSourceType): WorkflowDataSource;

      /**
       * Sets the label of the variable picker button, which will be displayed after the `+` sign in FULL_SIZE button size.
       *
       * Return:
       * - WorkflowDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/workflow-data-source#setVariableButtonLabel(String)
       * @param variableButtonLabel The label of the variable picker button.
       */
      setVariableButtonLabel(variableButtonLabel: string): WorkflowDataSource;

      /**
       * Sets the size of the variable picker button, Workflow will automatically using COMPACT in side panel and FULL_SIZE in other cases if UNSPECIFIED is selected. A COMPACT button will only display the `+` sign.
       *
       * Return:
       * - WorkflowDataSource — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/card-service/workflow-data-source#setVariableButtonSize(VariableButtonSize)
       * @param variableButtonSize The size of the variable picker button.
       */
      setVariableButtonSize(variableButtonSize: any): WorkflowDataSource;
    }
    /**
     * An enum that represents the type of the workflow data source.
     *
     * Only available through the Gemini
     * Alpha program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
     *     .setType(CardService.WorkflowDataSourceType.USER);
     */
    enum WorkflowDataSourceType { UNKNOWN, USER, SPACE, USER_WITH_FREE_FORM }
    /**
     * An enum that sets the wrapping style for content within a column.
     *
     * Available for Google Chat apps and Google Workspace add-ons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CardService.WrapStyle.WRAP.
     */
    enum WrapStyle { NOWRAP, WRAP }
  }
}

declare var CardService: GoogleAppsScript.Card.CardService;
