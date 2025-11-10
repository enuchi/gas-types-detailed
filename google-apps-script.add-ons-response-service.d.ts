// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.card-service.d.ts" />

declare namespace GoogleAppsScript {
  namespace AddOns_Response {
    /**
     * An action that Google Workspace add-ons that extend Google Workspace Flows can use to render a
     * new card.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     *     const link = AddOnsResponseService.newLink().setUrl('https://www.google.com');
     *     const action =
     *         AddOnsResponseService.newAction()
     *             .setLink(link);
     *
     *     const renderAction = AddOnsResponseService.newRenderActionBuilder().setAction(action).build();
     */
    interface Action {

      /**
       * Add card navigation to the action.
       *
       * Return:
       * - Action — This object, for chaining.
       *
       * Throws:
       * - Error — if the navigation argument is invalid.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/action#addNavigation(Navigation)
       * @param navigation The Navigation to use.
       */
      addNavigation(navigation: Navigation): Action;
    }
    /**
     * AddOnsResponseService provides the ability to create responses for Google Workspace add-ons that
     * extend Google Workspace Flows.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     * Sample usage:
     *
     *     function myFunction() {
     *       return AddOnsResponseService.newChatDataActionBuilder();
     *     }
     */
    interface AddOnsResponseService {

      /**
       * Creates a new Action.
       *
       * Return:
       * - Action — An empty Action.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service#newAction()
       */
      newAction(): Action;

      /**
       * Creates a new Navigation.
       *
       * Return:
       * - Navigation — An empty Navigation.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service#newNavigation()
       */
      newNavigation(): Navigation;

      /**
       * Creates a new RenderActionBuilder.
       *
       * Return:
       * - RenderActionBuilder — An empty RenderActionBuilder.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service#newRenderActionBuilder()
       */
      newRenderActionBuilder(): RenderActionBuilder;
    }
    /**
     * A builder for ModifyCard objects that changes and updates an existing card's
     * interface by passing the ModifyCard object to a Action. For usage, see Update configuration cards.
     *
     * Sample usage:
     *
     *     const insertSection = AddOnsResponseService.newInsertSection().insertBelowSection('sample_id')
     *     .setSection(CardService.newCardSection().setHeader('New Section'));
     *
     *     const modifyCard = AddOnsResponseService.newModifyCard().setInsertSection(insertSection);
     *
     *     const navigation = AddOnsResponseService.newNavigation().addModifyCard(modifyCard);
     */
    interface ModifyCard {

      /**
       * Sets the insert section for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setInsertSection(InsertSection)
       * @param insertSection The insert section to create.
       */
      setInsertSection(insertSection: any): ModifyCard;

      /**
       * Sets the insert widget for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setInsertWidget(InsertWidget)
       * @param insertWidget The insert widget to create.
       */
      setInsertWidget(insertWidget: any): ModifyCard;

      /**
       * Sets the remove section for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setRemoveSection(RemoveSection)
       * @param removeSection The remove section to create.
       */
      setRemoveSection(removeSection: any): ModifyCard;

      /**
       * Sets the remove widget for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setRemoveWidget(RemoveWidget)
       * @param removeWidget The remove widget to create.
       */
      setRemoveWidget(removeWidget: any): ModifyCard;

      /**
       * Sets the replace section for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setReplaceSection(CardSection)
       * @param replaceSection The replace section to create.
       */
      setReplaceSection(replaceSection: Card.CardSection): ModifyCard;

      /**
       * Sets the replace widget for this action.
       *
       * Return:
       * - ModifyCard — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card#setReplaceWidget(Widget)
       * @param replaceWidget The replace widget to create.
       */
      setReplaceWidget(replaceWidget: Card.Widget): ModifyCard;
    }
    /**
     * A helper object that controls card navigation. See the card navigation guide for more details.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     */
    interface Navigation {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/navigation#printJson()
       */
      printJson(): string;

      /**
       * Pushes the given card onto the stack. Can be chained with other card navigation actions.
       *
       * Return:
       * - Navigation — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/navigation#pushCard(Card)
       * @param card A card to add to the stack.
       */
      pushCard(card: Card.Card): Navigation;
    }
    /**
     * Renders or updates a card by performing an Action in response to a user interaction.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     *
     * Sample usage:
     *
     *     const renderAction = AddOnsResponseService.newRenderActionBuilder()
     *     .setAction(AddOnsResponseService.newAction().setLink(AddOnsResponseService.newLink().setUrl('https://www.google.com')))
     *     .build();
     */
    interface RenderAction {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/render-action#printJson()
       */
      printJson(): string;
    }
    /**
     * A builder for RenderAction objects.
     *
     * Only available through the Gemini Alpha
     * program for Google Workspace add-ons that extend Google Workspace Flows.
     */
    interface RenderActionBuilder {

      /**
       * Builds the current render action and validates it.
       *
       * Return:
       * - RenderAction — A validated render action.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/render-action-builder#build()
       */
      build(): RenderAction;

      /**
       * Sets the action that add-ons can use to update the UI to the render action.
       *
       * Return:
       * - RenderActionBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/render-action-builder#setAction(Action)
       * @param action The action to use.
       */
      setAction(action: Action): RenderActionBuilder;

      /**
       * Sets the host app action handled by individual host apps to the render action.
       *
       * Return:
       * - RenderActionBuilder — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/add-ons-response-service/render-action-builder#setHostAppAction(HostAppAction)
       * @param hostAppAction The host app action to use.
       */
      setHostAppAction(hostAppAction: any): RenderActionBuilder;
    }
  }
}

declare var AddOnsResponseService: GoogleAppsScript.AddOns_Response.AddOnsResponseService;
