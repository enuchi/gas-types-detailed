// Type definitions for Google Apps Script 2023-10-28
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
     *     var image = CardService.newImage()
     *         .setOnClickAction(CardService.newAction()
     *             .setFunctionName("handleImageClick")
     *             .setParameters({imageSrc: 'carImage'}));
     */
    interface Action {

      /**
       * Sets the name of the callback function to be called. Required.
       * https://developers.google.com/apps-script/reference/card-service/action#setFunctionName(String)
       * @param functionName The name of the function. You can use functions from included libraries, such as Library.libFunction1.
       */
      setFunctionName(functionName: string): Action;

      /**
       * Sets the loading indicator that displays while the action is in progress.
       * https://developers.google.com/apps-script/reference/card-service/action#setLoadIndicator(LoadIndicator)
       * @param loadIndicator The indicator to display.
       */
      setLoadIndicator(loadIndicator: LoadIndicator): Action;

      /**
       * Allows custom parameters to be passed to the callback function. Optional.
       * https://developers.google.com/apps-script/reference/card-service/action#setParameters(Object)
       * @param parameters Both keys and values must be strings.
       */
      setParameters(parameters: any): Action;
      /** @deprecated DO NOT USE */ setMethodName(functionName: string): Action;
    }
    /**
     * The response object that may be returned from a callback function (e.g., a form response handler)
     * to perform one or more actions on the client. Some combinations of actions are not supported.
     *
     *     // An action that opens a link
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"))
     *         .build();
     *
     *     // An action that shows a notification.
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setNotification(CardService.newNotification()
     *             .setText("Some info to display to user"))
     *         .build();
     *
     *     // An action that shows an additional card. It also sets a flag to indicate that the original
     *     // state data has changed.
     *
     *     var cardBuilder = CardService.newCardBuilder();
     *     // Build card ...
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setNavigation(CardService.newNavigation()
     *             .pushCard(cardBuilder.build()))
     *         .setStateChanged(true)
     *         .build();
     */
    interface ActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
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
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#build()
       */
      build(): ActionResponse;

      /**
       * Sets the response to a Navigation action.
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNavigation(Navigation)
       * @param navigation The Navigation to use.
       */
      setNavigation(navigation: Navigation): ActionResponseBuilder;

      /**
       * Sets the notification to display when the action is activated.
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setNotification(Notification)
       * @param notification The Notification to use.
       */
      setNotification(notification: Notification): ActionResponseBuilder;

      /**
       * Sets the URL to navigate to when the action is activated.
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setOpenLink(OpenLink)
       * @param openLink The OpenLink to use.
       */
      setOpenLink(openLink: OpenLink): ActionResponseBuilder;

      /**
       * Sets a flag to indicate that this action changed the existing data state. For example, if the
       * action created a task or updated contact information. When this flag is set to true, services
       * such as Gmail can attempt to clear any cached state data associated with this action.
       * https://developers.google.com/apps-script/reference/card-service/action-response-builder#setStateChanged(Boolean)
       * @param stateChanged Whether this action has changed the existing state data. Defaults to false.
       */
      setStateChanged(stateChanged: boolean): ActionResponseBuilder;
    }
    /**
     * Represents an attachment created by an add-on. This can be used within the context of different
     * Google extensibility products to generate new attachments, such as for Calendar events.
     *
     *     var attachment = CardService.newAttachment()
     *         .setResourceUrl("https://fakeresourceurl.com")
     *         .setTitle("Attachment title")
     *         .setMimeType("text/html")
     *         .setIconUrl("https://fakeresourceurl.com/iconurl.png");
     */
    interface Attachment {

      /**
       * Sets the icon URL for the attachment.
       * https://developers.google.com/apps-script/reference/card-service/attachment#setIconUrl(String)
       * @param iconUrl The URL address of the attachment icon.
       */
      setIconUrl(iconUrl: string): Attachment;

      /**
       * Sets the MIME type for the attachment.
       * https://developers.google.com/apps-script/reference/card-service/attachment#setMimeType(String)
       * @param mimeType The MIME type of the content in the attachment resource.
       */
      setMimeType(mimeType: string): Attachment;

      /**
       * Sets the resource URL for the attachment.
       * https://developers.google.com/apps-script/reference/card-service/attachment#setResourceUrl(String)
       * @param resourceUrl The URL address of a resource.
       */
      setResourceUrl(resourceUrl: string): Attachment;

      /**
       * Sets the title for the attachment.
       * https://developers.google.com/apps-script/reference/card-service/attachment#setTitle(String)
       * @param title The title of the attachment.
       */
      setTitle(title: string): Attachment;
    }
    /**
     * An authorization action that will send the user to the AuthorizationUrl when clicked.
     *
     *     CardService.newAuthorizationAction()
     *       .setAuthorizationUrl("http://google.com/");
     */
    interface AuthorizationAction {

      /**
       * Sets the authorization URL that user is taken to from the authorization prompt. Required.
       * https://developers.google.com/apps-script/reference/card-service/authorization-action#setAuthorizationUrl(String)
       * @param authorizationUrl The authorization URL to set.
       */
      setAuthorizationUrl(authorizationUrl: string): AuthorizationAction;
    }
    /**
     * An error that can be returned to trigger an authorization card to be shown to the user.
     *
     *     CardService.newAuthorizationException()
     *       .setAuthorizationUrl("http://auth.com/")
     *       .setResourceDisplayName("Example Resource")
     *       .throwException();
     */
    interface AuthorizationException {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#printJson()
       */
      printJson(): string;

      /**
       * Sets the authorization URL that user is taken to from the authorization prompt. Required.
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setAuthorizationUrl(String)
       * @param authUrl The authorization URL to set.
       */
      setAuthorizationUrl(authUrl: string): AuthorizationException;

      /**
       * The name of a function to call to generate a custom authorization prompt. Optional.
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setCustomUiCallback(String)
       * @param callback The name of the function that generates a custom authorization prompt.
       */
      setCustomUiCallback(callback: string): AuthorizationException;

      /**
       * Sets the name that is displayed to the user when asking for authorization. Required.
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#setResourceDisplayName(String)
       * @param name The display name.
       */
      setResourceDisplayName(name: string): AuthorizationException;

      /**
       * Triggers this exception to be thrown.
       * https://developers.google.com/apps-script/reference/card-service/authorization-exception#throwException()
       */
      throwException(): void;
    }
    /**
     * A class that represents a complete border style that can be applied to widgets.
     */
    interface BorderStyle {

      /**
       * Sets the corner radius of the border, for example 8.
       * https://developers.google.com/apps-script/reference/card-service/border-style#setCornerRadius(Integer)
       * @param radius The corner radius to be applied to the border.
       */
      setCornerRadius(radius: Integer): BorderStyle;

      /**
       * Sets the color of the border.
       * https://developers.google.com/apps-script/reference/card-service/border-style#setStrokeColor(String)
       * @param color The color in #RGB format to be applied to the border.
       */
      setStrokeColor(color: string): BorderStyle;

      /**
       * Sets the type of the border.
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
     */
    interface Button {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Button;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Button;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Button;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Button;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Button;
    }
    /**
     * Holds a set of Button objects that are displayed in a row.
     *
     *     var textButton = CardService.newTextButton();
     *     // Finish building the text button...
     *
     *     var imageButton = CardService.newImageButton();
     *     // Finish building the image button...
     *
     *     var buttonSet = CardService.newButtonSet()
     *         .addButton(textButton)
     *         .addButton(imageButton);
     */
    interface ButtonSet {

      /**
       * Adds a button.
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
     *     var calendarEventActionResponse = CardService.newCalendarEventActionResponseBuilder()
     *         .addAttendees(["user1@example.com", "user2@example.com"])
     *         .build();
     */
    interface CalendarEventActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for CalendarEventActionResponse objects.
     */
    interface CalendarEventActionResponseBuilder {

      /**
       * Specifies that the response should add the attachments to the Calendar event when the
       * associated UI action is taken.
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#addAttachments(Attachment)
       * @param attachments An array of Attachments to add.
       */
      addAttachments(attachments: Attachment[]): CalendarEventActionResponseBuilder;

      /**
       * Specifies that the response should add the indicated attendees to the Calendar event when the
       * associated UI action is taken.
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#addAttendees(String)
       * @param emails An array of email addresses to add to the event.
       */
      addAttendees(emails: string[]): CalendarEventActionResponseBuilder;

      /**
       * Builds the current Calendar event action response and validates it.
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#build()
       */
      build(): CalendarEventActionResponse;

      /**
       * Specifies that the response should set the indicated conference data to the Calendar event when
       * the associated UI action is taken.
       * https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder#setConferenceData(ConferenceData)
       * @param conferenceData Conference data to set to the event, created by an add on.
       */
      setConferenceData(conferenceData: Conference_Data.ConferenceData): CalendarEventActionResponseBuilder;
    }
    /**
     * A context card that represents a single view in the
     * UI.
     *
     *     var cardSection = CardService.newCardSection();
     *     // Finish building the card section ...
     *
     *     var card = CardService.newCardBuilder()
     *         .setName("Card name")
     *         .setHeader(CardService.newCardHeader().setTitle("Card title"))
     *         .addSection(cardSection)
     *         .build();
     */
    interface Card {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       * https://developers.google.com/apps-script/reference/card-service/card#printJson()
       */
      printJson(): string;
    }
    /**
     * A clickable menu item that is added to the card header menu.
     *
     *     var action = CardService.newAction();
     *     // Finish building the action...
     *
     *     var cardAction = CardService.newCardAction()
     *         .setText("Card action")
     *         .setOnClickAction(action);
     */
    interface CardAction {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/card-action#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): CardAction;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/card-action#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): CardAction;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): CardAction;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): CardAction;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/card-action#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): CardAction;

      /**
       * Sets the menu text for this action.
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
       * https://developers.google.com/apps-script/reference/card-service/card-builder#addCardAction(CardAction)
       * @param cardAction The CardAction to use.
       */
      addCardAction(cardAction: CardAction): CardBuilder;

      /**
       * Adds a section to this card. You can't add more than 100 sections to a card.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#addSection(CardSection)
       * @param section The CardSection to use.
       */
      addSection(section: CardSection): CardBuilder;

      /**
       * Builds the current card and validates it.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#build()
       */
      build(): Card;

      /**
       * Sets the display style for this card.
       *
       *
       * If the display style is set to DisplayStyle.REPLACE, the card is shown by replacing
       * the view of top card in the card stack.
       *
       *
       * If the display style is set to DisplayStyle.PEEK, the header of the card appears at
       * the bottom of the sidebar, partially covering the current top card of the stack. Clicking the
       * header pops the card into the card stack. If the card has no header, a generated header is used
       * instead.
       *
       *
       *
       * DisplayStyle only works for card returned from contextual trigger function.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setDisplayStyle(DisplayStyle)
       * @param displayStyle The DisplayStyle to set.
       */
      setDisplayStyle(displayStyle: DisplayStyle): CardBuilder;

      /**
       * Sets a fixed footer for this card.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setFixedFooter(FixedFooter)
       * @param fixedFooter The FixedFooter to use.
       */
      setFixedFooter(fixedFooter: FixedFooter): CardBuilder;

      /**
       * Sets the header for this card.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setHeader(CardHeader)
       * @param cardHeader The CardHeader to use.
       */
      setHeader(cardHeader: CardHeader): CardBuilder;

      /**
       * Sets the name for this card. The name can be used for navigation.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setName(String)
       * @param name The name.
       */
      setName(name: string): CardBuilder;

      /**
       * Sets the peek card header.
       *
       *
       * The peek card is set on the first card returned from a contextual trigger function. It is
       * used as a descriptive placeholder widget so that users can navigate from a homepage stack to
       * the contextual stack.
       * https://developers.google.com/apps-script/reference/card-service/card-builder#setPeekCardHeader(CardHeader)
       * @param peekCardHeader The CardHeader to set.
       */
      setPeekCardHeader(peekCardHeader: CardHeader): CardBuilder;
    }
    /**
     * The header of a Card.
     *
     *     var cardHeader = CardService.newCardHeader()
     *         .setTitle("Card header title")
     *         .setSubtitle("Card header subtitle")
     *         .setImageStyle(CardService.ImageStyle.CIRCLE)
     *         .setImageUrl("https://image.png");
     */
    interface CardHeader {

      /**
       * Sets the alternative text for the header image.
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageAltText(String)
       * @param imageAltText The alternative text for the header image.
       */
      setImageAltText(imageAltText: string): CardHeader;

      /**
       * Sets the cropping of the icon in the card header. Defaults to no crop. Optional.
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageStyle(ImageStyle)
       * @param imageStyle The style setting.
       */
      setImageStyle(imageStyle: ImageStyle): CardHeader;

      /**
       * Sets the image to use in the header by providing its URL or data string.
       *
       *
       * The provided URL can either be a publicly accessible URL or a base64 encoded image string.
       * To obtain the latter, you can use the following code to create an encoded image string from an
       * image in your Google Drive, then store that string for later use with setImageUrl(imageUrl). This method prevents the need for your add-on to access a publicly
       * available image URL:
       *
       *
       *     // The following assumes you have the image to use in Google Drive and have its ID.
       *     var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
       *     var encodedImageURL = "data:image/jpeg;base64," + Utilities.base64Encode(imageBytes);
       *
       *     // You can store encodeImageURL and use it as a parameter to CardHeader.setImageUrl(imageUrl).
       * https://developers.google.com/apps-script/reference/card-service/card-header#setImageUrl(String)
       * @param imageUrl The URL address of a hosted image to use, or an encoded image string.
       */
      setImageUrl(imageUrl: string): CardHeader;

      /**
       * Sets the subtitle of the card header. Optional.
       * https://developers.google.com/apps-script/reference/card-service/card-header#setSubtitle(String)
       * @param subtitle The header subtitle text.
       */
      setSubtitle(subtitle: string): CardHeader;

      /**
       * Sets the title of the card header. Required.
       * https://developers.google.com/apps-script/reference/card-service/card-header#setTitle(String)
       * @param title The header text.
       */
      setTitle(title: string): CardHeader;
    }
    /**
     * A card section holds groups of widgets and provides visual separation between them.
     *
     *     var image = CardService.newImage();
     *     // Build image ...
     *     var textParagraph = CardService.newTextParagraph();
     *     // Build text paragraph ...
     *
     *     var cardSection = CardService.newCardSection()
     *         .setHeader("Section header")
     *         .addWidget(image)
     *         .addWidget(textParagraph);
     */
    interface CardSection {

      /**
       * Adds the given widget to this section. Widgets are shown in the order they were added. You
       * can't add more than 100 widgets to a card section.
       * https://developers.google.com/apps-script/reference/card-service/card-section#addWidget(Widget)
       * @param widget A widget to add to the section.
       */
      addWidget(widget: Widget): CardSection;

      /**
       * Sets whether the section can be collapsed.
       * https://developers.google.com/apps-script/reference/card-service/card-section#setCollapsible(Boolean)
       * @param collapsible The collapsible setting.
       */
      setCollapsible(collapsible: boolean): CardSection;

      /**
       * Sets the header of the section. Optional.
       * https://developers.google.com/apps-script/reference/card-service/card-section#setHeader(String)
       * @param header The header text.
       */
      setHeader(header: string): CardSection;

      /**
       * Sets the number of widgets that are still shown when this section is collapsed. The widgets
       * shown are always the first ones that were added.
       * https://developers.google.com/apps-script/reference/card-service/card-section#setNumUncollapsibleWidgets(Integer)
       * @param numUncollapsibleWidgets The number of widgets to show.
       */
      setNumUncollapsibleWidgets(numUncollapsibleWidgets: Integer): CardSection;
    }
    /**
     * CardService provides the ability to create generic cards used across different Google
     * extensibility products, such as Google Workspace Add-ons.
     *
     *     return CardService.newCardBuilder()
     *              .setHeader(CardService.newCardHeader().setTitle("CardTitle"))
     *              .build();
     *
     * Or you can return multiple Cards like so:
     *
     *     return [
     *       CardService.newCardBuilder().build(),
     *       CardService.newCardBuilder().build(),
     *       CardService.newCardBuilder().build()
     *     ]
     *
     * The following shows how you could define a card with a header, text, an image and a menu item:
     *
     *     function createWidgetDemoCard() {
     *       return CardService
     *          .newCardBuilder()
     *          .setHeader(
     *              CardService.newCardHeader()
     *                  .setTitle('Widget demonstration')
     *                  .setSubtitle('Check out these widgets')
     *                  .setImageStyle(CardService.ImageStyle.SQUARE)
     *                  .setImageUrl(
     *                      'https://www.example.com/images/headerImage.png'))
     *          .addSection(
     *               CardService.newCardSection()
     *                   .setHeader('Simple widgets')  // optional
     *                   .addWidget(CardService.newTextParagraph().setText(
     *                       'These widgets are display-only. ' +
     *                       'A text paragraph can have multiple lines and ' +
     *                       'formatting.'))
     *                   .addWidget(CardService.newImage().setImageUrl(
     *                       'https://www.example.com/images/mapsImage.png')))
     *          .addCardAction(CardService.newCardAction().setText('Gmail').setOpenLink(
     *              CardService.newOpenLink().setUrl('https://mail.google.com/mail')))
     *          .build();
     *     }
     */
    interface CardService {
      BorderType: typeof BorderType;
      ComposedEmailType: typeof ComposedEmailType;
      ContentType: typeof ContentType;
      GridItemLayout: typeof GridItemLayout;
      HorizontalAlignment: typeof HorizontalAlignment;
      Icon: typeof Icon;
      ImageCropType: typeof ImageCropType;
      ImageStyle: typeof ImageStyle;
      LoadIndicator: typeof LoadIndicator;
      OnClose: typeof OnClose;
      OpenAs: typeof OpenAs;
      SelectionInputType: typeof SelectionInputType;
      TextButtonStyle: typeof TextButtonStyle;
      UpdateDraftBodyType: typeof UpdateDraftBodyType;

      /**
       * Creates a new Action.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAction()
       */
      newAction(): Action;

      /**
       * Creates a new ActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newActionResponseBuilder()
       */
      newActionResponseBuilder(): ActionResponseBuilder;

      /**
       * Creates a new Attachment.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAttachment()
       */
      newAttachment(): Attachment;

      /**
       * Creates a new AuthorizationAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAuthorizationAction()
       */
      newAuthorizationAction(): AuthorizationAction;

      /**
       * Creates a new AuthorizationException.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newAuthorizationException()
       */
      newAuthorizationException(): AuthorizationException;

      /**
       * Creates a new BorderStyle.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newBorderStyle()
       */
      newBorderStyle(): BorderStyle;

      /**
       * Creates a new ButtonSet.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newButtonSet()
       */
      newButtonSet(): ButtonSet;

      /**
       * Creates a new CalendarEventActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCalendarEventActionResponseBuilder()
       */
      newCalendarEventActionResponseBuilder(): CalendarEventActionResponseBuilder;

      /**
       * Creates a new CardAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardAction()
       */
      newCardAction(): CardAction;

      /**
       * Creates a new CardBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardBuilder()
       */
      newCardBuilder(): CardBuilder;

      /**
       * Creates a new CardHeader.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardHeader()
       */
      newCardHeader(): CardHeader;

      /**
       * Creates a new CardSection.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newCardSection()
       */
      newCardSection(): CardSection;

      /**
       * Creates a new ComposeActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newComposeActionResponseBuilder()
       */
      newComposeActionResponseBuilder(): ComposeActionResponseBuilder;

      /**
       * Creates a new DatePicker.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDatePicker()
       */
      newDatePicker(): DatePicker;

      /**
       * Creates a new DateTimePicker.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDateTimePicker()
       */
      newDateTimePicker(): DateTimePicker;

      /**
       * Creates a new DecoratedText.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDecoratedText()
       */
      newDecoratedText(): DecoratedText;

      /**
       * Creates a new Divider. The following sample builds a simple card with 2 paragraphs
       * separated by a divider.
       *
       *
       *     function buildCard() {
       *         let cardSection1TextParagraph1 = CardService.newTextParagraph()
       *             .setText('Hello world!');
       *
       *         let cardSection1Divider1 = CardService.newDivider();
       *
       *         let cardSection1TextParagraph2 = CardService.newTextParagraph()
       *             .setText('Hello world!');
       *
       *         let cardSection1 = CardService.newCardSection()
       *             .addWidget(cardSection1TextParagraph1)
       *             .addWidget(cardSection1Divider1)
       *             .addWidget(cardSection1TextParagraph2);
       *
       *         let card = CardService.newCardBuilder()
       *             .addSection(cardSection1)
       *             .build();
       *
       *        return card;
       *     }
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDivider()
       */
      newDivider(): Divider;

      /**
       * Creates a new DriveItemsSelectedActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newDriveItemsSelectedActionResponseBuilder()
       */
      newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;

      /**
       * Creates a new EditorFileScopeActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newEditorFileScopeActionResponseBuilder()
       */
      newEditorFileScopeActionResponseBuilder(): EditorFileScopeActionResponseBuilder;

      /**
       * Creates a new FixedFooter.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newFixedFooter()
       */
      newFixedFooter(): FixedFooter;

      /**
       * Creates a new Grid.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newGrid()
       */
      newGrid(): Grid;

      /**
       * Creates a new GridItem.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newGridItem()
       */
      newGridItem(): GridItem;

      /**
       * Creates a new IconImage.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newIconImage()
       */
      newIconImage(): IconImage;

      /**
       * Creates a new Image.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImage()
       */
      newImage(): Image;

      /**
       * Creates a new ImageButton.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageButton()
       */
      newImageButton(): ImageButton;

      /**
       * Creates a new ImageComponent.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageComponent()
       */
      newImageComponent(): ImageComponent;

      /**
       * Creates a new ImageCropStyle.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newImageCropStyle()
       */
      newImageCropStyle(): ImageCropStyle;

      /**
       * Creates a new KeyValue.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newKeyValue()
       */
      newKeyValue(): KeyValue;

      /**
       * Creates a new Navigation.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newNavigation()
       */
      newNavigation(): Navigation;

      /**
       * Creates a new Notification.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newNotification()
       */
      newNotification(): Notification;

      /**
       * Creates a new OpenLink.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newOpenLink()
       */
      newOpenLink(): OpenLink;

      /**
       * Creates a new SelectionInput.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSelectionInput()
       */
      newSelectionInput(): SelectionInput;

      /**
       * Creates a new Suggestions.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSuggestions()
       */
      newSuggestions(): Suggestions;

      /**
       * Creates a new SuggestionsResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSuggestionsResponseBuilder()
       */
      newSuggestionsResponseBuilder(): SuggestionsResponseBuilder;

      /**
       * Creates a new Switch.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newSwitch()
       */
      newSwitch(): Switch;

      /**
       * Creates a new TextButton.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextButton()
       */
      newTextButton(): TextButton;

      /**
       * Creates a new TextInput.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextInput()
       */
      newTextInput(): TextInput;

      /**
       * Creates a new TextParagraph.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTextParagraph()
       */
      newTextParagraph(): TextParagraph;

      /**
       * Creates a new TimePicker.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newTimePicker()
       */
      newTimePicker(): TimePicker;

      /**
       * Creates a new UniversalActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUniversalActionResponseBuilder()
       */
      newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;

      /**
       * Creates a new UpdateDraftActionResponseBuilder.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftActionResponseBuilder()
       */
      newUpdateDraftActionResponseBuilder(): UpdateDraftActionResponseBuilder;

      /**
       * Creates a new UpdateDraftBccRecipientsAction;
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftBccRecipientsAction()
       */
      newUpdateDraftBccRecipientsAction(): UpdateDraftBccRecipientsAction;

      /**
       * Creates a new UpdateDraftBodyAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftBodyAction()
       */
      newUpdateDraftBodyAction(): UpdateDraftBodyAction;

      /**
       * Creates a new UpdateDraftCcRecipientsAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftCcRecipientsAction()
       */
      newUpdateDraftCcRecipientsAction(): UpdateDraftCcRecipientsAction;

      /**
       * Creates a new UpdateDraftSubjectAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftSubjectAction()
       */
      newUpdateDraftSubjectAction(): UpdateDraftSubjectAction;

      /**
       * Creates a new UpdateDraftToRecipientsAction.
       * https://developers.google.com/apps-script/reference/card-service/card-service#newUpdateDraftToRecipientsAction()
       */
      newUpdateDraftToRecipientsAction(): UpdateDraftToRecipientsAction;
    }
    /**
     * The response object that may be returned from a callback method for compose action in a Gmail add-on.
     *
     * Note: This object isn't related to compose actions that are
     * used to extend the compose UI. Rather,
     * this object is a response to an Action that composes draft messages when a specific UI element is
     * selected.
     *
     *     var composeActionResponse = CardService.newComposeActionResponseBuilder()
     *         .setGmailDraft(GmailApp.createDraft("recipient", "subject", "body"))
     *         .build();
     */
    interface ComposeActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
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
       * https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#build()
       */
      build(): ComposeActionResponse;

      /**
       * Sets the draft GmailMessage created
       * using GmailMessage.createDraftReply(body) or
       * similar functions.
       * https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder#setGmailDraft(GmailDraft)
       * @param draft The GmailDraft to use.
       */
      setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
    }
    /**
     * An enum value that specifies whether the composed email is a standalone or reply draft.
     */
    enum ComposedEmailType { REPLY_AS_DRAFT, STANDALONE_DRAFT }
    /**
     * An enum value that specifies the content type of the content generated by a UpdateDraftActionResponse.
     */
    enum ContentType { TEXT, MUTABLE_HTML, IMMUTABLE_HTML }
    /**
     * An input field that allows inputing a date.
     *
     *     var dateTimePicker = CardService.newDatePicker()
     *         .setTitle("Enter the date.")
     *         .setFieldName("date_field")
     *         // Set default value as Jan 1, 2018 UTC. Either a number or string is acceptable.
     *         .setValueInMsSinceEpoch(1514775600)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    interface DatePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when
       * there is a UI interaction. The field name is visible to the user. Required; the specified field
       * name must be unique.
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): DatePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): DatePicker;

      /**
       * Sets the title displayed above the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): DatePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setValueInMsSinceEpoch(Number)
       * @param valueMsEpoch The default value placed in the input as a number, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: number): DatePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-picker#setValueInMsSinceEpoch(String)
       * @param valueMsEpoch The default value placed in the input as a string, in milliseconds since the epoch. Only the date of the epoch time is used, and the time of the epoch time is discarded. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: string): DatePicker;
    }
    /**
     * An input field that allows users to input a date and time.
     *
     *     var dateTimePicker = CardService.newDateTimePicker()
     *         .setTitle("Enter the date and time.")
     *         .setFieldName("date_time_field")
     *         // Set default value as Jan 1, 2018, 3:00 AM UTC. Either a number or string is acceptable.
     *         .setValueInMsSinceEpoch(1514775600)
     *         // EDT time is 5 hours behind UTC.
     *         .setTimeZoneOffsetInMins(-5 * 60)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    interface DateTimePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when
       * there is a UI interaction. The field name is visible to the user. Required; the specified field
       * name must be unique.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): DateTimePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): DateTimePicker;

      /**
       * Sets the number of minutes that the time zone should be offset from UTC. If set, the date and
       * time is displayed in the specified time zone. If not set, the time is displayed in the user's
       * time zone.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setTimeZoneOffsetInMins(Integer)
       * @param timeZoneOffsetMins The number of minutes that the time zone is offset from UTC.
       */
      setTimeZoneOffsetInMins(timeZoneOffsetMins: Integer): DateTimePicker;

      /**
       * Sets the title displayed above the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): DateTimePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setValueInMsSinceEpoch(Number)
       * @param valueMsEpoch The default value placed in the input as a number, in milliseconds since the epoch. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: number): DateTimePicker;

      /**
       * Sets the prefilled value to be set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/date-time-picker#setValueInMsSinceEpoch(String)
       * @param valueMsEpoch The default value placed in the input as a string, in milliseconds since the epoch. It is always represented as a string in the form callback parameters.
       */
      setValueInMsSinceEpoch(valueMsEpoch: string): DateTimePicker;
    }
    /**
     * A widget that displays text with optional decorations. Possible keys include an icon, a label
     * above and a label below. Setting the text content and one of the keys is required using setText(text) and one of DecoratedText, DecoratedText, setTopLabel(text), or setBottomLabel(text). This class is intended to replace KeyValue.
     *
     *     var decoratedText = CardService.newDecoratedText()
     *         .setText("Text")
     *         .setTopLabel("TopLabel");
     *
     *     var multilineDecoratedText = CardService.newDecoratedText()
     *         .setText("Text")
     *         .setTopLabel("TopLabel")
     *         .setWrapText(true)
     *         .setBottomLabel("BottomLabel");
     */
    interface DecoratedText {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): DecoratedText;

      /**
       * Sets the label text to be used as the key and is displayed below the text content.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setBottomLabel(String)
       * @param text The label text.
       */
      setBottomLabel(text: string): DecoratedText;

      /**
       * Sets the Button that is displayed to the right of the text. A DecoratedText can
       * only support one button or one switch.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setButton(Button)
       * @param button The button to add.
       */
      setButton(button: Button): DecoratedText;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): DecoratedText;

      /**
       * Sets the optional IconImage that is displayed to the right of the content. A DecoratedText can only support one button, one switch or one icon.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setEndIcon(IconImage)
       * @param endIcon The icon to add.
       */
      setEndIcon(endIcon: IconImage): DecoratedText;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): DecoratedText;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): DecoratedText;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): DecoratedText;

      /**
       * Sets the optional IconImage to display before the text content.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setStartIcon(IconImage)
       * @param startIcon The icon to display.
       */
      setStartIcon(startIcon: IconImage): DecoratedText;

      /**
       * Sets the Switch that is displayed to the right of the content. A DecoratedText
       * can only support one button or one switch.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setSwitchControl(Switch)
       * @param switchToSet The switch to add.
       */
      setSwitchControl(switchToSet: Switch): DecoratedText;

      /**
       * Sets the text to be used as the value. Supports basic HTML formatting. Required.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setText(String)
       * @param text The text content for this widget.
       */
      setText(text: string): DecoratedText;

      /**
       * Sets the label text to be used as the key and is displayed above the text content.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setTopLabel(String)
       * @param text The label text.
       */
      setTopLabel(text: string): DecoratedText;

      /**
       * Sets whether the value text should be displayed on a single line or multiple lines.
       * https://developers.google.com/apps-script/reference/card-service/decorated-text#setWrapText(Boolean)
       * @param wrapText If true, the text is wrapped and displayed on multiple lines. Otherwise the text is truncated.
       */
      setWrapText(wrapText: boolean): DecoratedText;
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
     */
    enum DisplayStyle { PEEK, REPLACE }
    /**
     * A horizontal divider. To add a divider to your add-on card, use the newDivider()
     * method within CardService. For example, the following sample builds a simple card with 2
     * paragraphs separated by a divider.
     *
     *     function buildCard() {
     *         let cardSection1TextParagraph1 = CardService.newTextParagraph()
     *             .setText('Hello world!');
     *
     *         let cardSection1Divider1 = CardService.newDivider();
     *
     *         let cardSection1TextParagraph2 = CardService.newTextParagraph()
     *             .setText('Hello world!');
     *
     *         let cardSection1 = CardService.newCardSection()
     *             .addWidget(cardSection1TextParagraph1)
     *             .addWidget(cardSection1Divider1)
     *             .addWidget(cardSection1TextParagraph2);
     *
     *         let card = CardService.newCardBuilder()
     *             .addSection(cardSection1)
     *             .build();
     *
     *        return card;
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
       * https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder#build()
       */
      build(): DriveItemsSelectedActionResponse;

      /**
       * Specifies that the response requests file scope for the contextually-relevant item in Drive.
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
       * https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder#build()
       */
      build(): EditorFileScopeActionResponse;

      /**
       * Requests the drive.file scope for the current active Editor document.
       *
       *
       *     // Display a permissions dialog to the user, requesting `drive.file` scope for the current
       *     // document on behalf of this add-on.
       *     CardService.newEditorFileScopeActionResponseBuilder()
       *         .requestFileScopeForActiveDocument()
       *         .build();
       * Note: To call this method, you must add the drive.file scope to the add-on's
       * manifest.
       * https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder#requestFileScopeForActiveDocument()
       */
      requestFileScopeForActiveDocument(): EditorFileScopeActionResponseBuilder;
    }
    /**
     * The fixed footer shown at the bottom of an add-on Card.
     *
     *     var fixedFooter =
     *           CardService
     *               .newFixedFooter()
     *               .setPrimaryButton(
     *                   CardService
     *                       .newTextButton()
     *                       .setText("help")
     *                       .setOpenLink(CardService.newOpenLink().setUrl("http://www.google.com")));
     */
    interface FixedFooter {

      /**
       * Set the primary button in the fixed footer. The primary button must be a TextButtonStyle.FILLED button. If the background color is unset for the primary button, the
       * button uses the primary color defined in the add-on manifest.
       * https://developers.google.com/apps-script/reference/card-service/fixed-footer#setPrimaryButton(TextButton)
       * @param button The button to add.
       */
      setPrimaryButton(button: TextButton): FixedFooter;

      /**
       * Set the secondary button in the fixed footer. The secondary button must be a TextButtonStyle.TEXT button. This method does nothing if setPrimaryButton(button) isn't called to set the primary button.
       * https://developers.google.com/apps-script/reference/card-service/fixed-footer#setSecondaryButton(TextButton)
       * @param button The button to add.
       */
      setSecondaryButton(button: TextButton): FixedFooter;
    }
    /**
     * An organized grid to display a collection of grid items.
     *
     *     var grid = CardService.newGrid()
     *         .setTitle("My Grid")
     *         .setNumColumns(2)
     *         .addItem(CardService.newGridItem()
     *             .setTitle("My item"));
     */
    interface Grid {

      /**
       * Adds a new grid item to the grid.
       * https://developers.google.com/apps-script/reference/card-service/grid#addItem(GridItem)
       * @param gridItem The grid item to add.
       */
      addItem(gridItem: GridItem): Grid;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/grid#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Grid;

      /**
       * Sets the border style applied to each grid item. Default is NO_BORDER.
       * https://developers.google.com/apps-script/reference/card-service/grid#setBorderStyle(BorderStyle)
       * @param borderStyle The border style to apply.
       */
      setBorderStyle(borderStyle: BorderStyle): Grid;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/grid#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Grid;

      /**
       * The number of columns to display in the grid. If shown in the right side panel, you can display
       * 1-2 columns and the default value is 1. If shown in a dialog, you can display 2-3 columns and
       * the default value is 2.
       * https://developers.google.com/apps-script/reference/card-service/grid#setNumColumns(Integer)
       * @param numColumns The number of columns.
       */
      setNumColumns(numColumns: Integer): Grid;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/grid#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Grid;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/grid#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Grid;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/grid#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Grid;

      /**
       * Sets the title text of the grid. The text must be a plain string with no formatting.
       * https://developers.google.com/apps-script/reference/card-service/grid#setTitle(String)
       * @param title The title text.
       */
      setTitle(title: string): Grid;
    }
    /**
     * The items users interact with within a grid widget.
     *
     *     var gridItem = CardService.newGridItem()
     *         .setIdentifier("itemA")
     *         .setTitle("This is a cat")
     *         .setImage(CardService.newImageComponent())
     *         .setLayout(CardService.GridItemLayout.TEXT_BELOW);
     */
    interface GridItem {

      /**
       * Sets the identifier for the grid item. When a user clicks this grid item, this ID is returned
       * in the parent grid's on_click call back parameters.
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setIdentifier(String)
       * @param id The ID.
       */
      setIdentifier(id: string): GridItem;

      /**
       * Sets the image for this grid item.
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setImage(ImageComponent)
       * @param image The ImageComponent object.
       */
      setImage(image: ImageComponent): GridItem;

      /**
       * Sets the layout of text and image for the grid item. Default is TEXT_BELOW
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setLayout(GridItemLayout)
       * @param layout The layout setting.
       */
      setLayout(layout: GridItemLayout): GridItem;

      /**
       * Sets the subtitle of the grid item.
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setSubtitle(String)
       * @param subtitle The subtitle text.
       */
      setSubtitle(subtitle: string): GridItem;

      /**
       * Sets the horizontal alignment of the grid item. Default is START.
       * https://developers.google.com/apps-script/reference/card-service/grid-item#setTextAlignment(HorizontalAlignment)
       * @param alignment The alignment setting.
       */
      setTextAlignment(alignment: HorizontalAlignment): GridItem;

      /**
       * Sets the title text of the grid item.
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
     */
    enum HorizontalAlignment { START, CENTER, END }
    /**
     * Predefined icons that can be used in various UI objects, such as ImageButton or DecoratedText widgets.
     */
    enum Icon { NONE, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY }
    /**
     * A predefined icon or an icon from a URL with a customizable crop style.
     */
    interface IconImage {

      /**
       * Sets the alternative text of the URL which is used for accessibility.
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setAltText(String)
       * @param altText The alternative text.
       */
      setAltText(altText: string): IconImage;

      /**
       * Sets the predefined icon if the URL is not set. Default is NONE.
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setIcon(Icon)
       * @param icon One of the predefined Icon values.
       */
      setIcon(icon: Icon): IconImage;

      /**
       * Sets the URL of the icon if the icon is not set.
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setIconUrl(String)
       * @param url The URL address of a hosted image to use as an icon.
       */
      setIconUrl(url: string): IconImage;

      /**
       * Sets the crop style for the image. The crop type options you can use for icons are SQUARE
       *  and CIRCLE. Default is SQUARE.
       * https://developers.google.com/apps-script/reference/card-service/icon-image#setImageCropType(ImageCropType)
       * @param imageCropType The ImageCropType option to apply.
       */
      setImageCropType(imageCropType: ImageCropType): IconImage;
    }
    /**
     * A widget that shows a single image. For information about cropping images, see ImageCropStyle.
     *
     *     var image = CardService.newImage().setAltText("A nice image").setImageUrl("https://image.png");
     */
    interface Image {

      /**
       * Sets the alternative text of the image for accessibility. Required.
       * https://developers.google.com/apps-script/reference/card-service/image#setAltText(String)
       * @param altText The alternative text to assign to this image.
       */
      setAltText(altText: string): Image;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/image#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Image;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/image#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Image;

      /**
       * Sets the image to use by providing its URL or data string. Required.
       *
       *
       * The provided URL can either be a publicly accessible URL or a base64 encoded image string.
       * To obtain the latter, you can use the following code to create an encoded image string from an
       * image in your Google Drive, then store that string for later use with setImageUrl(url). This method prevents the need for your add-on to access a publicly
       * available image URL:
       *
       *
       *     // The following assumes you have the image to use in Google Drive and have its ID.
       *     var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
       *     var encodedImageURL = "data:image/jpeg;base64," + Utilities.base64Encode(imageBytes);
       *
       *     // You can store encodeImageURL and use it as a parameter to Image.setImageUrl(url).
       * https://developers.google.com/apps-script/reference/card-service/image#setImageUrl(String)
       * @param url The URL address of a hosted image to use, or an encoded image string.
       */
      setImageUrl(url: string): Image;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/image#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): Image;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/image#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Image;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/image#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): Image;
    }
    /**
     * A ImageButton with an image displayed on it.
     *
     *     var imageButton = CardService.newImageButton()
     *         .setAltText("An image button with an airplane icon.")
     *         .setIcon(CardService.Icon.AIRPLANE)
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://airplane.com"));
     */
    interface ImageButton {

      /**
       * Sets the alternative text of the button for accessibility. Required.
       * https://developers.google.com/apps-script/reference/card-service/image-button#setAltText(String)
       * @param altText The alternative text to assign to this button.
       */
      setAltText(altText: string): ImageButton;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/image-button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): ImageButton;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/image-button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): ImageButton;

      /**
       * Sets a predefined Icon to display on the button. Either this or setIconUrl(url)
       * must be used to define the button image.
       * https://developers.google.com/apps-script/reference/card-service/image-button#setIcon(Icon)
       * @param icon One of the predefined Icon values.
       */
      setIcon(icon: Icon): ImageButton;

      /**
       * Sets the URL of an image to use as this button's icon. Either this or setIcon(icon) must be
       * used to define the button image.
       * https://developers.google.com/apps-script/reference/card-service/image-button#setIconUrl(String)
       * @param url The URL address of a hosted image to use as this button's icon.
       */
      setIconUrl(url: string): ImageButton;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): ImageButton;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): ImageButton;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/image-button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): ImageButton;
    }
    /**
     * An image component that can be added to grid items.
     *
     *     var ImageComponent = CardService.newImageComponent()
     *         .setImageUrl("http://imageurl.ca")
     *         .setAltText(altText)
     *         .setCropStyle(CARD_SERVICE.newImageCropStyle())
     *         .setBorderStyle(CARD_SERVICE.newBorderStyle());
     */
    interface ImageComponent {

      /**
       * Sets the alternative text of the image.
       * https://developers.google.com/apps-script/reference/card-service/image-component#setAltText(String)
       * @param altText The alt_text to set for the image.
       */
      setAltText(altText: string): ImageComponent;

      /**
       * Sets the border style applied to the image.
       * https://developers.google.com/apps-script/reference/card-service/image-component#setBorderStyle(BorderStyle)
       * @param borderStyle The BorderStyle object to apply.
       */
      setBorderStyle(borderStyle: BorderStyle): ImageComponent;

      /**
       * Sets the crop style for the image.
       * https://developers.google.com/apps-script/reference/card-service/image-component#setCropStyle(ImageCropStyle)
       * @param imageCropStyle The ImageCropStyle object to apply.
       */
      setCropStyle(imageCropStyle: ImageCropStyle): ImageComponent;

      /**
       * Sets the URL of the image.
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
       * Sets the aspect ratio to use if the crop type is RECTANGLE_CUSTOM. The ratio must
       * be a positive value.
       * https://developers.google.com/apps-script/reference/card-service/image-crop-style#setAspectRatio(Number)
       * @param ratio The ratio to apply.
       */
      setAspectRatio(ratio: number): ImageCropStyle;

      /**
       * Sets the crop type for the image. Default is SQUARE.
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
     */
    enum ImageCropType { SQUARE, CIRCLE, RECTANGLE_CUSTOM, RECTANGLE_4_3 }
    /**
     * An enum that defines an image cropping style.
     */
    enum ImageStyle { SQUARE, CIRCLE }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * This class is deprecated. Instead, use DecoratedText.
     */
    interface KeyValue {

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/key-value#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): KeyValue;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/key-value#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): KeyValue;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): KeyValue;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/key-value#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): KeyValue;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
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
     * An enum type that specifies the type of loading or progress indicator to display while an Action is being processed.
     */
    enum LoadIndicator { SPINNER, NONE }
    /**
     * A helper object that controls card navigation. See the card navigation guide for more details.
     */
    interface Navigation {

      /**
       * Pops a card from the navigation stack. Can be chained with other card navigation actions.
       * https://developers.google.com/apps-script/reference/card-service/navigation#popCard()
       */
      popCard(): Navigation;

      /**
       * Pops to the specified card by its card name. Can be chained with other card navigation actions.
       * https://developers.google.com/apps-script/reference/card-service/navigation#popToNamedCard(String)
       * @param cardName The name of the card to navigate to.
       */
      popToNamedCard(cardName: string): Navigation;

      /**
       * Pops the card stack to the root card. Can be chained with other card navigation actions.
       * https://developers.google.com/apps-script/reference/card-service/navigation#popToRoot()
       */
      popToRoot(): Navigation;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       * https://developers.google.com/apps-script/reference/card-service/navigation#printJson()
       */
      printJson(): string;

      /**
       * Pushes the given card onto the stack. Can be chained with other card navigation actions.
       * https://developers.google.com/apps-script/reference/card-service/navigation#pushCard(Card)
       * @param card A card to add to the stack.
       */
      pushCard(card: Card): Navigation;

      /**
       * Does an in-place replacement of the current card. Can be chained with other card navigation
       * actions.
       * https://developers.google.com/apps-script/reference/card-service/navigation#updateCard(Card)
       * @param card A card to replace the current card with.
       */
      updateCard(card: Card): Navigation;
    }
    /**
     * A notification shown to the user as a response to interacting with a UI element.
     *
     *     var action = CardService.newAction().setFunctionName("notificationCallback");
     *     CardService.newTextButton().setText('Save').setOnClickAction(action);
     *
     *     // ...
     *
     *     function notificationCallback() {
     *       return CardService.newActionResponseBuilder()
     *           .setNotification(CardService.newNotification()
     *               .setText("Some info to display to user"))
     *           .build();
     *     }
     */
    interface Notification {

      /**
       * Sets the text to show in the notification. Required.
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
     */
    enum OpenAs { FULL_SIZE, OVERLAY }
    /**
     * Represents an action to open a link with some options.
     *
     *     // A button that opens as a link in an overlay and
     *     // requires a reload when closed.
     *     var button = CardService.newTextButton()
     *         .setText("This button opens a link in an overlay window")
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com")
     *             .setOpenAs(CardService.OpenAs.OVERLAY)
     *             .setOnClose(CardService.OnClose.RELOAD_ADD_ON));
     *
     *     // An action response that opens a link in full screen and
     *     // requires no action when closed.
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com")
     *             .setOpenAs(CardService.OpenAs.FULL_SIZE)
     *             .setOnClose(CardService.OnClose.NOTHING))
     *         .build();
     *
     * Note: To reload add-ons after closing a link, don't use a link with
     * Cross-Origin-Opener-Policy (COOP) header enabled. If COOP is enabled in a link, add-ons can't
     * detect the window state, and the add-on card doesn't update.
     */
    interface OpenLink {

      /**
       * Sets the behavior of the URL action when the URL window or tab is closed.
       * https://developers.google.com/apps-script/reference/card-service/open-link#setOnClose(OnClose)
       * @param onClose The closing setting.
       */
      setOnClose(onClose: OnClose): OpenLink;

      /**
       * Sets the behavior of URL when it is opened.
       * https://developers.google.com/apps-script/reference/card-service/open-link#setOpenAs(OpenAs)
       * @param openAs The opening setting.
       */
      setOpenAs(openAs: OpenAs): OpenLink;

      /**
       * Sets the URL to be opened. The URL must match a prefix whitelisted in
       * the manifest.
       * https://developers.google.com/apps-script/reference/card-service/open-link#setUrl(String)
       * @param url The URL to open.
       */
      setUrl(url: string): OpenLink;
    }
    /**
     * An input field that allows choosing between a set of predefined options.
     *
     *     var checkboxGroup = CardService.newSelectionInput()
     *         .setType(CardService.SelectionInputType.CHECK_BOX)
     *         .setTitle("A group of checkboxes. Multiple selections are allowed.")
     *         .setFieldName("checkbox_field")
     *         .addItem("checkbox one title", "checkbox_one_value", false)
     *         .addItem("checkbox two title", "checkbox_two_value", true)
     *         .addItem("checkbox three title", "checkbox_three_value", true)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleCheckboxChange"));
     *
     *     var radioGroup = CardService.newSelectionInput()
     *         .setType(CardService.SelectionInputType.RADIO_BUTTON)
     *         .setTitle("A group of radio buttons. Only a single selection is allowed.")
     *         .setFieldName("checkbox_field")
     *         .addItem("radio button one title", "radio_one_value", true)
     *         .addItem("radio button two title", "radio_two_value", false)
     *         .addItem("radio button three title", "radio_three_value", false);
     */
    interface SelectionInput {

      /**
       * Adds a new item that can be selected.
       * https://developers.google.com/apps-script/reference/card-service/selection-input#addItem(Object,Object,Boolean)
       * @param text The text to be shown for this item. Non-string primitive arguments are converted to strings automatically.
       * @param value The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically.
       * @param selected Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
       */
      addItem(text: any, value: any, selected: boolean): SelectionInput;

      /**
       * Sets the key that identifies this selection input in the event object that is generated when
       * there is a UI interaction. Not visible to the user. Required, must be unique.
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): SelectionInput;

      /**
       * Sets an Action to be performed whenever the selection input changes.
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): SelectionInput;

      /**
       * Sets the title to be shown ahead of the input field.
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): SelectionInput;

      /**
       * Sets the type of this input. Defaults to CHECKBOX.
       * https://developers.google.com/apps-script/reference/card-service/selection-input#setType(SelectionInputType)
       * @param type The selection type.
       */
      setType(type: SelectionInputType): SelectionInput;
    }
    /**
     * Type of selection input.
     */
    enum SelectionInputType { CHECK_BOX, RADIO_BUTTON, DROPDOWN }
    /**
     * Autocomplete suggestions to supplement a TextInput widget.
     *
     *     var textInput = CardService.newTextInput()
     *         .setSuggestions(CardService.newSuggestions()
     *             .addSuggestion("First suggestion")
     *             .addSuggestion("Second suggestion"))
     */
    interface Suggestions {

      /**
       * Add a text suggestion.
       * https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestion(String)
       * @param suggestion The suggestion text.
       */
      addSuggestion(suggestion: string): Suggestions;

      /**
       * Add a list of text suggestions.
       * https://developers.google.com/apps-script/reference/card-service/suggestions#addSuggestions(Object)
       * @param suggestions An array of string suggestions.
       */
      addSuggestions(suggestions: any[]): Suggestions;
    }
    /**
     * A response object that can be returned from a suggestions callback function. This is used with
     * TextInput widgets that implement autocomplete.
     *
     *     var suggestionsResponse = CardService.newSuggestionsResponseBuilder()
     *         .setSuggestions(CardService.newSuggestions()
     *             .addSuggestion("First suggestion")
     *             .addSuggestion("Second suggestion"))
     *             .build();
     */
    interface SuggestionsResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for SuggestionsResponse objects.
     */
    interface SuggestionsResponseBuilder {

      /**
       * Builds the current suggestions response and validates it.
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#build()
       */
      build(): SuggestionsResponse;

      /**
       * Sets the suggestions used in auto complete in text fields.
       * https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder#setSuggestions(Suggestions)
       * @param suggestions The Suggestions to use.
       */
      setSuggestions(suggestions: Suggestions): SuggestionsResponseBuilder;
    }
    /**
     * A UI element that supports being toggled on or off. This can only be used within a DecoratedText widget.
     *
     *     var switchDecoratedText  = CardService.newDecoratedText()
     *       .setTopLabel("Switch decorated text widget label")
     *       .setText("This is a decorated text widget with a switch on the right")
     *       .setWrapText(true)
     *       .setSwitchControl(CardService.newSwitch()
     *           .setFieldName("form_input_switch_key")
     *           .setValue("form_input_switch_value")
     *           .setOnChangeAction(CardService.newAction()
     *               .setFunctionName("handleSwitchChange")));
     */
    interface Switch {

      /**
       * Sets the control type of the switch. Defaults to SWITCH.
       * https://developers.google.com/apps-script/reference/card-service/switch#setControlType(SwitchControlType)
       * @param controlType The switch control type.
       */
      setControlType(controlType: SwitchControlType): Switch;

      /**
       * Sets the key that identifies this switch in the event object that is generated when there is a
       * UI interaction. Not visible to the user. Required.
       *
       *
       * Unlike other form fields, this field name does not need to be unique. The form input values
       * for switches using the same field name are returned as an array. The array consists of the
       * values for all enabled switches with that field name.
       * https://developers.google.com/apps-script/reference/card-service/switch#setFieldName(String)
       * @param fieldName The key that is used to identify this switch.
       */
      setFieldName(fieldName: string): Switch;

      /**
       * Sets the action to take when the switch is toggled.
       * https://developers.google.com/apps-script/reference/card-service/switch#setOnChangeAction(Action)
       * @param action The action to take when the switch is toggled.
       */
      setOnChangeAction(action: Action): Switch;

      /**
       * Sets whether this switch should start as selected or unselected.
       * https://developers.google.com/apps-script/reference/card-service/switch#setSelected(Boolean)
       * @param selected The starting switch state setting.
       */
      setSelected(selected: boolean): Switch;

      /**
       * Sets the value that is sent as the form input when this switch is toggled on.
       * https://developers.google.com/apps-script/reference/card-service/switch#setValue(String)
       * @param value The value associated with the name when the switch is on. When this is sent to the form callback, it is always represented as a string.
       */
      setValue(value: string): Switch;
    }
    /**
     * Type of a Switch widget control.
     */
    enum SwitchControlType { SWITCH, CHECK_BOX }
    /**
     * A TextButton with a text label. You can set the background color and deactivate the button
     * when needed.
     *
     *     var textButton = CardService.newTextButton()
     *         .setText("Open Link")
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"));
     */
    interface TextButton {

      /**
       * Sets the alternative text of the button for accessibility. If unset, defaults to the text that
       * displays on the button.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setAltText(String)
       * @param altText The alternative text to assign to this button.
       */
      setAltText(altText: string): TextButton;

      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is
       * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
       * returns to the application, the add-on reloads.
       *
       *
       * A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
       *     CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);
       * https://developers.google.com/apps-script/reference/card-service/text-button#setAuthorizationAction(AuthorizationAction)
       * @param action The object that specifies the authorization action to take when this element is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): TextButton;

      /**
       * Sets the background color for TextButtonStyle.FILLED button. If unset for a TextButtonStyle.FILLED button, the button uses the secondary color defined in the add-on manifest.
       * This method is a no-op for TextButtonStyle.TEXT buttons.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setBackgroundColor(String)
       * @param backgroundColor The color in #rgb format.
       */
      setBackgroundColor(backgroundColor: string): TextButton;

      /**
       * Sets an action that composes a draft email when the object is clicked. A UI object can only
       * have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action),
       * setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ComposeActionResponse object configured using ComposeActionResponseBuilder.setGmailDraft(draft).
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/card-service/text-button#setComposeAction(Action,ComposedEmailType)
       * @param action The object that specifies the compose action to take when this element is clicked.
       * @param composedEmailType An enum value that specifies whether the composed draft is a standalone or reply draft.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): TextButton;

      /**
       * Sets whether the button is disabled. A disabled button is greyed out and cannot be clicked.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setDisabled(Boolean)
       * @param disabled The disabled state.
       */
      setDisabled(disabled: boolean): TextButton;

      /**
       * Sets an action that executes when the object is clicked. A UI object can only have one of
       * setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object.
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('notificationCallback');
       *     CardService.newTextButton().setText('Create notification').setOnClickAction(action);
       *
       *     // ...
       *
       *     function notificationCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setNotification(CardService.newNotification()
       *               .setText("Some info to display to user"))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickAction(Action)
       * @param action The action to take when this element is clicked.
       */
      setOnClickAction(action: Action): TextButton;

      /**
       * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
       * URL needs to be built or when you need to take other actions in additon to creating the OpenLink object. A UI object can only have one of setOpenLink(openLink), setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action), or
       * setComposeAction(action, composedEmailType) set.
       *
       *
       * The Action parameter must specify a callback function that returns a ActionResponse object configured using ActionResponseBuilder.setOpenLink(openLink).
       *
       *
       *     // ...
       *
       *     var action = CardService.newAction().setFunctionName('openLinkCallback');
       *     CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);
       *
       *     // ...
       *
       *     function openLinkCallback() {
       *       return CardService.newActionResponseBuilder()
       *           .setOpenLink(CardService.newOpenLink()
       *               .setUrl('https://www.google.com'))
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOnClickOpenLinkAction(Action)
       * @param action The object that specifies the open link action to take when this element is clicked.
       */
      setOnClickOpenLinkAction(action: Action): TextButton;

      /**
       * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
       * known and only needs to be opened. A UI object can only have one of setOpenLink(openLink),
       * setOnClickAction(action), setOnClickOpenLinkAction(action), setAuthorizationAction(action),
       * or setComposeAction(action, composedEmailType) set.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setOpenLink(OpenLink)
       * @param openLink An OpenLink object describing the URL to open.
       */
      setOpenLink(openLink: OpenLink): TextButton;

      /**
       * Sets the text that displays on the button.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setText(String)
       * @param text The text that appears on the button.
       */
      setText(text: string): TextButton;

      /**
       * Sets the button style. If unset, it defaults to TextButtonStyle.TEXT button.
       * https://developers.google.com/apps-script/reference/card-service/text-button#setTextButtonStyle(TextButtonStyle)
       * @param textButtonStyle The button style.
       */
      setTextButtonStyle(textButtonStyle: TextButtonStyle): TextButton;
    }
    /**
     * An enum that specifies the style for TextButton.
     *
     * TEXT is the default; it renders a simple text button with clear background.
     * FILLED buttons have a background color you can set with
     * TextButton.setBackgroundColor(backgroundColor).
     */
    enum TextButtonStyle { TEXT, FILLED }
    /**
     * A input field widget that accepts text input.
     *
     *     var textInput = CardService.newTextInput()
     *         .setFieldName("text_input_form_input_key")
     *         .setTitle("Text input title")
     *         .setHint("Text input hint");
     */
    interface TextInput {

      /**
       * Sets the key that identifies this text input in the event object that is generated when there
       * is a UI interaction. Not visible to the user. Required, must be unique.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setFieldName(String)
       * @param fieldName The key that is used to identify this input.
       */
      setFieldName(fieldName: string): TextInput;

      /**
       * Sets a hint for the text input. Used to give the user extra guidance on what to input. For
       * example, a hint could describe formatting ("xxx-xxx-xxxx") for a phone number field.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setHint(String)
       * @param hint The text hint to display below the input field. This text is always visible.
       */
      setHint(hint: string): TextInput;

      /**
       * Sets whether the input text shows on one line or multiple lines.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setMultiline(Boolean)
       * @param multiline The multiline setting.
       */
      setMultiline(multiline: boolean): TextInput;

      /**
       * Sets an action to be performed whenever the text input changes.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): TextInput;

      /**
       * Sets the suggestions for autocompletion in the text field.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setSuggestions(Suggestions)
       * @param suggestions The collection of suggestions to use.
       */
      setSuggestions(suggestions: Suggestions): TextInput;

      /**
       * Sets the callback action to fetch suggestions based on user input for autocompletion. The
       * Action parameter must specify a callback function that returns a SuggestionsResponse object.
       *
       *
       *     var action = CardService.newAction()
       *         .setFunctionName('suggestionCallback')
       *         .setParameters({'numSuggestions': 3});
       *
       *     CardService.newTextInput()
       *         .setFieldName('option-field')
       *         .setTitle('Option Selected')
       *         .setSuggestionsAction(action);
       *
       *     // ...
       *
       *     function suggestionCallback(e) {
       *       var suggestions = CardService.newSuggestions();
       *       var numSuggestions = parseInt(e.parameter['numSuggestions']);
       *       for(var i = 1; i <= numSuggestions; i++) {
       *         suggestions.addSuggestion('Suggestion ' + i);
       *       }
       *       return CardService.newSuggestionsResponseBuilder()
       *           .setSuggestions(suggestions)
       *           .build();
       *     }
       * https://developers.google.com/apps-script/reference/card-service/text-input#setSuggestionsAction(Action)
       * @param suggestionsAction The action that fetches suggestions for this input.
       */
      setSuggestionsAction(suggestionsAction: Action): TextInput;

      /**
       * Sets the title to be shown above the input field. Required.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setTitle(String)
       * @param title The text label for this input.
       */
      setTitle(title: string): TextInput;

      /**
       * Sets the pre-filled value to be set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/text-input#setValue(String)
       * @param value The default value placed in the input. It is always represented as a string in the form callback parameters.
       */
      setValue(value: string): TextInput;
    }
    /**
     * A widget that displays text and supports basic HTML formatting.
     *
     *     var textParagraph = CardService.newTextParagraph()
     *         .setText("This is a text paragraph widget. Multiple lines are allowed if needed.");
     */
    interface TextParagraph {

      /**
       * Sets the text of the paragraph. Required.
       * https://developers.google.com/apps-script/reference/card-service/text-paragraph#setText(String)
       * @param text The text to display.
       */
      setText(text: string): TextParagraph;
    }
    /**
     * An input field that allows users to input a time.
     *
     *     var dateTimePicker = CardService.newTimePicker()
     *         .setTitle("Enter the time.")
     *         .setFieldName("time_field")
     *         // Set default value as 3:30 AM.
     *         .setHours(3)
     *         .setMinutes(30)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    interface TimePicker {

      /**
       * Sets the field name that identifies this picker in the event object that is generated when
       * there is a UI interaction. The field name is visible to the user. Required; the specified field
       * name must be unique.
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setFieldName(String)
       * @param fieldName The name to assign to this input.
       */
      setFieldName(fieldName: string): TimePicker;

      /**
       * Sets the prefilled hours value to set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setHours(Integer)
       * @param hours The default hour value placed in the input, range from 0 to 23. It is always represented as a string in the form callback parameters.
       */
      setHours(hours: Integer): TimePicker;

      /**
       * Sets the prefilled minutes value to set in the input field.
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setMinutes(Integer)
       * @param minutes The default minutes value placed in the input, range from 0 to 59. It is always represented as a string in the form callback parameters.
       */
      setMinutes(minutes: Integer): TimePicker;

      /**
       * Sets an Action that the script performs whenever the picker input changes.
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setOnChangeAction(Action)
       * @param action The action to take.
       */
      setOnChangeAction(action: Action): TimePicker;

      /**
       * Sets the title displayed above the input field.
       * https://developers.google.com/apps-script/reference/card-service/time-picker#setTitle(String)
       * @param title The input field title.
       */
      setTitle(title: string): TimePicker;
    }
    /**
     * The response object that may be returned from a method that creates universal action.
     *
     *     // A universal action that opens a link.
     *     var openLinkUniversalAction = CardService.newUniversalActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"))
     *             .build();
     *
     *     var cardBuilder1 = CardService.newCardBuilder();
     *     var cardBuilder2 = CardService.newCardBuilder();
     *     // Finish building the cards ...
     *
     *     // A universal action that shows two static cards.
     *     var cardsUniversalAction = CardService.newUniversalActionResponseBuilder()
     *         .displayAddOnCards([
     *             cardBuilder1.build();
     *             cardBuilder2.build();
     *         ]).build();
     */
    interface UniversalActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
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
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#build()
       */
      build(): UniversalActionResponse;

      /**
       * Displays the add-on with the specified cards.
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#displayAddOnCards(Object)
       * @param cardObjects An array of Cards to display.
       */
      displayAddOnCards(cardObjects: any[]): UniversalActionResponseBuilder;

      /**
       * Sets the URL to open when the universal action is selected.
       * https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder#setOpenLink(OpenLink)
       * @param openLink The link object to use.
       */
      setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
    }
    /**
     * Represents an action that updates the email draft that the user is currently editing.
     *
     *     // An UpdateDraftActionResponse that inserts a list of To recipients into an email draft
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateToRecipientsAction(CardService.newUpdateToRecipientsAction()
     *            .addUpdateToRecipients(["joe@example.com", "wen@example.com"]))
     *         .build()
     *
     *     // An UpdateDraftActionResponse that inserts a list of Cc recipients into an email draft
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateCcRecipientsAction(CardService.newUpdateCcRecipientsAction()
     *            .addUpdateCcRecipients(["joe@example.com", "wen@example.com"]))
     *         .build()
     *
     *     // An UpdateDraftActionResponse that inserts a list of Bcc recipients into an email draft
     *         .setUpdateCcRecipientsAction(CardService.newUpdateBccRecipientsAction()
     *            .addUpdateBccRecipients(["joe@example.com", "wen@example.com"]))
     *
     *     // An UpdateDraftActionResponse that inserts a subject line into an email draft
     *     var updateDraftActionResponse = CARD_SERVICE.newUpdateDraftActionResponseBuilder()
     *     .setUpdateDraftSubjectAction(CARD_SERVICE.newUpdateDraftSubjectAction()
     *     .addUpdateSubject("example subject"))
     *     .build();
     *
     *     // An UpdateDraftActionResponse that inserts non-editable content (a link in this case) into an
     *     // email draft.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.IMMUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // An UpdateDraftActionResponse that inserts a link into an email draft. The added content can be
     *     // edited further.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.MUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // An UpdateDraftActionResponse that inserts multiple values of different types.
     *     // The example action response inserts two lines next to each other in the email
     *     // draft, at the cursor position. Each line contains the content added by
     *     // {@link UpdateDraftActionResponseBuilder#addUpdateContent}.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.MUTABLE_HTML)
     *             .addUpdateContent("Above is a google link.", ContentType.PLAIN_TEXT)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     */
    interface UpdateDraftActionResponse {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
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
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#build()
       */
      build(): UpdateDraftActionResponse;

      /**
       * Sets an action that updates the email Bcc recipients of a draft.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftBccRecipientsAction(UpdateDraftBccRecipientsAction)
       * @param updateDraftBccRecipientsAction The action that updates the draft Bcc recipients.
       */
      setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction: UpdateDraftBccRecipientsAction): UpdateDraftActionResponseBuilder;

      /**
       * Set an action that updates the email body of a draft.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftBodyAction(UpdateDraftBodyAction)
       * @param updateDraftBodyAction The action that updates the draft body.
       */
      setUpdateDraftBodyAction(updateDraftBodyAction: UpdateDraftBodyAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the Cc recipients of a draft.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftCcRecipientsAction(UpdateDraftCcRecipientsAction)
       * @param updateDraftCcRecipientsAction The action that updates the draft Cc recipients.
       */
      setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction: UpdateDraftCcRecipientsAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the subject line of a draft.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder#setUpdateDraftSubjectAction(UpdateDraftSubjectAction)
       * @param updateDraftSubjectAction The action that updates the subject line.
       */
      setUpdateDraftSubjectAction(updateDraftSubjectAction: UpdateDraftSubjectAction): UpdateDraftActionResponseBuilder;

      /**
       * Sets an action that updates the To recipients of a draft.
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
       * Adds the specified content to the draft body. The type of the content is specified by
       * ContentType.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-body-action#addUpdateContent(String,ContentType)
       * @param content The content to insert to the email draft.
       * @param contentType The content type of the content to be inserted.
       */
      addUpdateContent(content: string, contentType: ContentType): UpdateDraftBodyAction;

      /**
       * Sets the UpdateDraftBodyType of this update action on the draft body. For example,
       * inserting content at the start, end, or cursor position of the draft body.
       * https://developers.google.com/apps-script/reference/card-service/update-draft-body-action#setUpdateType(UpdateDraftBodyType)
       * @param updateType The type of update to be performed on an email draft.
       */
      setUpdateType(updateType: UpdateDraftBodyType): UpdateDraftBodyAction;
    }
    /**
     * An enum value that specifies the type of an UpdateDraftBodyAction.
     */
    enum UpdateDraftBodyType { IN_PLACE_INSERT, INSERT_AT_START, INSERT_AT_END }
    /**
     * Updates the Cc recipients of an email draft.
     */
    interface UpdateDraftCcRecipientsAction {

      /**
       * Updates the Cc recipients of an email draft.
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
       * https://developers.google.com/apps-script/reference/card-service/update-draft-to-recipients-action#addUpdateToRecipients(String)
       * @param toRecipientEmails The To recipients to insert to the email draft.
       */
      addUpdateToRecipients(toRecipientEmails: string[]): UpdateDraftToRecipientsAction;
    }
    /**
     * Base class for all widgets that can be added to a Card.
     */
    interface Widget {
    }
  }
}

declare var CardService: GoogleAppsScript.Card.CardService;
