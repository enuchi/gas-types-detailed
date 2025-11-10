// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Forms {
    /**
     * An enum representing the supported types of image alignment. Alignment types can be accessed from
     * FormApp.Alignment.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.Alignment.LEFT.
     *
     *     // Open a form by ID and add a new image item with alignment
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem().setImage(img).setAlignment(FormApp.Alignment.CENTER);
     */
    enum Alignment { LEFT, CENTER, RIGHT }
    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     * multiple choices per row from a sequence of checkboxes. Items can be accessed or created from a
     * Form.
     *
     *     // Open a form by ID and add a new checkbox grid item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addCheckboxGridItem();
     *     item.setTitle('Where did you celebrate New Years?')
     *         .setRows(['New York', 'San Francisco', 'London'])
     *         .setColumns(['2014', '2015', '2016', '2017']);
     */
    interface CheckboxGridItem {

      /**
       * Removes any data validation for this grid item.
       *
       * Return:
       * - CheckboxGridItem — this item, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#clearValidation()
       */
      clearValidation(): CheckboxGridItem;

      /**
       * Creates a new ItemResponse for this checkbox grid item. The argument responses must be a String[][] array of arrays containing as many values as the number of inputs in the checkbox grid. A null element for a non-required checkbox grid question indicates no response to that row. Throws an exception if any of the values does not match a valid choice.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#createResponse(String)
       * @param responses an array of arrays of valid answers for this checkbox grid item
       */
      createResponse(responses: string[][]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - CheckboxGridItem — a duplicate of this CheckboxGridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#duplicate()
       */
      duplicate(): CheckboxGridItem;

      /**
       * Gets the values for every column in the grid.
       *
       * Return:
       * - String[] — an array of column values, which respondents see as labels when viewing the form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getColumns()
       */
      getColumns(): string[];

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the values for every row in the grid.
       *
       * Return:
       * - String[] — an array of row values, which respondents see as labels when viewing the form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getRows()
       */
      getRows(): string[];

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the columns of the grid based on an array of values. Throws an exception if the given array is empty.
       *
       * Return:
       * - CheckboxGridItem — this item, for chaining
       *
       * Throws:
       * - Error — if the given array is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setColumns(String)
       * @param columns an array of column values, which respondents see as labels when viewing the form
       */
      setColumns(columns: string[]): CheckboxGridItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - CheckboxGridItem — this CheckboxGridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): CheckboxGridItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - CheckboxGridItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): CheckboxGridItem;

      /**
       * Sets the rows of the grid based on an array of values. Throws an exception if the given array is empty.
       *
       * Return:
       * - CheckboxGridItem — this item, for chaining
       *
       * Throws:
       * - Error — if the given array is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setRows(String)
       * @param rows an array of row values, which respondents see as labels when viewing the form
       */
      setRows(rows: string[]): CheckboxGridItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - CheckboxGridItem — this CheckboxGridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): CheckboxGridItem;

      /**
       * Sets the data validation for this checkbox grid item. Passing in null or a validation without any require functions called will remove any prior validation.
       *
       * Return:
       * - CheckboxGridItem — this CheckboxGridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setValidation(CheckboxGridValidation)
       * @param validation a CheckboxGridValidation to apply to this item.
       */
      setValidation(validation: CheckboxGridValidation): CheckboxGridItem;
    }
    /**
     * A DataValidation for a CheckboxGridItem.
     *
     *     // Add a checkbox grid item to a form and require one response per column.
     *     const form = FormApp.openById('123abc');
     *     const checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *         .setRows(['New York', 'San Francisco', 'London'])
     *         .setColumns(['2014', '2015', '2016', '2017']);
     *     const checkboxGridValidation = FormApp.createCheckboxGridValidation()
     *                                        .setHelpText('Select one item per column.')
     *                                        .requireLimitOneResponsePerColumn()
     *                                        .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    interface CheckboxGridValidation {
    }
    /**
     * A DataValidationBuilder for a CheckboxGridValidation.
     *
     *     // Add a checkbox grid item to a form and restrict it to one response per
     *     // column.
     *     const form = FormApp.openById('123abc');
     *     const checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *         .setRows(['New York', 'San Francisco', 'London'])
     *         .setColumns(['2014', '2015', '2016', '2017']);
     *     const checkboxGridValidation = FormApp.createcheckboxGridValidation()
     *                                        .setHelpText('Select one item per column.')
     *                                        .requireLimitOneResponsePerColumn()
     *                                        .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    interface CheckboxGridValidationBuilder {

      /**
       * Requires limit of one response per column for a grid item.
       *
       * Return:
       * - CheckboxGridValidationBuilder — this validation builder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-validation-builder#requireLimitOneResponsePerColumn()
       */
      requireLimitOneResponsePerColumn(): CheckboxGridValidationBuilder;
    }
    /**
     * A question item that allows the respondent to select one or more checkboxes, as well as an
     * optional "other" field. Items can be accessed or created from a Form. When used in a
     * quiz, these items are autograded.
     *
     *     // Open a form by ID and add a new checkbox item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addCheckboxItem();
     *     item.setTitle('What condiments would you like on your hot dog?')
     *         .setChoices([
     *           item.createChoice('Ketchup'),
     *           item.createChoice('Mustard'),
     *           item.createChoice('Relish'),
     *         ])
     *         .showOtherOption(true);
     */
    interface CheckboxItem {

      /**
       * Removes any data validation for this checkbox item.
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#clearValidation()
       */
      clearValidation(): CheckboxItem;

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new ItemResponse for this checkbox item. The argument responses is a String[] array containing values that need to be checked. Throws an exception if any value does not match a valid choice for this item, unless showOtherOption(enabled) is set to true.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createResponse(String)
       * @param responses an array of valid answers for this multiple-choice item
       */
      createResponse(responses: string[]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - CheckboxItem — a duplicate of this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#duplicate()
       */
      duplicate(): CheckboxItem;

      /**
       * Gets all choices for an item.
       *
       * Return:
       * - Choice[] — an array of choices
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the item has an "other" option.
       *
       * Return:
       * - Boolean — true if the item has an "other" option; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#hasOtherOption()
       */
      hasOtherOption(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array is empty.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): CheckboxItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or contains a null element.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoices([item.createChoice('Cats'), item.createChoice('Dogs')]);
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Throws:
       * - Error — if the given array is null, empty, or contains a null element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): CheckboxItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false),
       *     ]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText('Dogs rule, cats drool.').build(),
       *     );
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): CheckboxItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): CheckboxItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): CheckboxItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): CheckboxItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - CheckboxItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): CheckboxItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): CheckboxItem;

      /**
       * Sets the data validation for this checkbox item. Passing in null or a validation without any require functions called will remove any prior validation.
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setValidation(CheckboxValidation)
       * @param validation a CheckboxValidation to apply to this item.
       */
      setValidation(validation: CheckboxValidation): CheckboxItem;

      /**
       * Sets whether the item has an "other" option. The default for a new CheckboxItem or MultipleChoiceItem is false.
       *
       * Return:
       * - CheckboxItem — this CheckboxItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#showOtherOption(Boolean)
       * @param enabled true if the item has an "other" option; false if not
       */
      showOtherOption(enabled: boolean): CheckboxItem;
    }
    /**
     * A DataValidation for a CheckboxItem.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     const form = FormApp.create('My Form');
     *     const checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish'),
     *     ]);
     *     const checkBoxValidation = FormApp.createCheckboxValidation()
     *                                    .setHelpText('Select two condiments.')
     *                                    .requireSelectExactly(2)
     *                                    .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidation {
    }
    /**
     * A DataValidationBuilder for a CheckboxValidation.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     const form = FormApp.create('My Form');
     *     const checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish'),
     *     ]);
     *     const checkBoxValidation = FormApp.createCheckboxValidation()
     *                                    .setHelpText('Select two condiments.')
     *                                    .requireSelectExactly(2)
     *                                    .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidationBuilder {

      /**
       * Require at least this many choices to be selected.
       *
       * Return:
       * - CheckboxValidationBuilder — this CheckboxValidationBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectAtLeast(Integer)
       * @param number
       */
      requireSelectAtLeast(number: Integer): CheckboxValidationBuilder;

      /**
       * Require at most this many choices to be selected.
       *
       * Return:
       * - CheckboxValidationBuilder — this CheckboxValidationBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectAtMost(Integer)
       * @param number
       */
      requireSelectAtMost(number: Integer): CheckboxValidationBuilder;

      /**
       * Require exactly this many choices to be selected.
       *
       * Return:
       * - CheckboxValidationBuilder — this CheckboxValidationBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectExactly(Integer)
       * @param number
       */
      requireSelectExactly(number: Integer): CheckboxValidationBuilder;
    }
    /**
     * A single choice associated with a type of Item that supports choices, like CheckboxItem, ListItem, or MultipleChoiceItem.
     *
     *     // Create a new form and add a multiple-choice item.
     *     const form = FormApp.create('Form Name');
     *     const item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?').setChoices([
     *       item.createChoice('Cats', FormApp.PageNavigationType.CONTINUE),
     *       item.createChoice('Dogs', FormApp.PageNavigationType.RESTART),
     *     ]);
     *
     *     // Add another page because navigation has no effect on the last page.
     *     form.addPageBreakItem().setTitle('You chose well!');
     *
     *     // Log the navigation types that each choice results in.
     *     const choices = item.getChoices();
     *     for (let i = 0; i < choices.length; i++) {
     *       Logger.log(
     *           'If the respondent chooses "%s", the form will %s.',
     *           choices[i].getValue(),
     *           choices[i].getPageNavigationType(),
     *       );
     *     }
     */
    interface Choice {

      /**
       * Gets the PageBreakItem set as a GO_TO_PAGE destination if the responder selects this choice and completes the current page. This method applies only to choices associated with MultipleChoiceItems; for other choices, it returns null.
       *
       * Return:
       * - PageBreakItem — the GO_TO_PAGE destination for this choice, or null if there is none
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/choice#getGotoPage()
       */
      getGotoPage(): PageBreakItem;

      /**
       * Gets the PageNavigationType that occurs if the responder selects this choice and completes the current page. This method applies only to choices associated with MultipleChoiceItems; for other choices, it returns null.
       *
       * Return:
       * - PageNavigationType — the navigation action for this choice, or null if there is none
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/choice#getPageNavigationType()
       */
      getPageNavigationType(): PageNavigationType;

      /**
       * Gets the choice's value, which respondents see as a label when viewing the form.
       *
       * Return:
       * - String — the choice's value
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/choice#getValue()
       */
      getValue(): string;

      /**
       * Gets whether the choice is a correct answer for the question. This method only applies to questions that are part of a quiz; for non-quiz forms, it returns false.
       *
       * Return:
       * - Boolean — Whether the choice is a correct answer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/choice#isCorrectAnswer()
       */
      isCorrectAnswer(): boolean;
    }
    /**
     * A question item that allows the respondent to indicate a date. Items can be accessed or created
     * from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new date item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addDateItem();
     *     item.setTitle('When were you born?');
     */
    interface DateItem {

      /**
       * Creates a new ItemResponse for this date item. The time fields of the Date object are ignored; by default, only the year, month, and day fields are used. If setIncludesYear(enabled) is set to false, the year is ignored as well.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#createResponse(Date)
       * @param response a Date object that represents a month, day, and possibly year
       */
      createResponse(response: Date): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - DateItem — a duplicate of this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#duplicate()
       */
      duplicate(): DateItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the date item includes a year option.
       *
       * Return:
       * - Boolean — true if the date includes a year setting; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#includesYear()
       */
      includesYear(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - DateItem — this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DateItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - DateItem — this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DateItem;

      /**
       * Sets whether the date item includes a year setting. The default for new date items is true.
       *
       * Return:
       * - DateItem — this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setIncludesYear(Boolean)
       * @param enableYear true if the date includes a year setting; false if not
       */
      setIncludesYear(enableYear: boolean): DateItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - DateItem — this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DateItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - DateItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DateItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - DateItem — this DateItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): DateItem;
    }
    /**
     * A question item that allows the respondent to indicate a date and time. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new date-time item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addDateTimeItem();
     *     item.setTitle('When do you want to meet?');
     */
    interface DateTimeItem {

      /**
       * Creates a new ItemResponse for this date-time item. The seconds field of the Date object is ignored; by default, the year, month, day, hour, and minute fields are used. If setIncludesYear(enabled) is set to false, the year is ignored as well.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#createResponse(Date)
       * @param response a Date object that represents a month, day, hour, minute, and possibly year
       */
      createResponse(response: Date): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - DateTimeItem — a duplicate of this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#duplicate()
       */
      duplicate(): DateTimeItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the date item includes a year option.
       *
       * Return:
       * - Boolean — true if the date includes a year setting; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#includesYear()
       */
      includesYear(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - DateTimeItem — this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DateTimeItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - DateTimeItem — this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DateTimeItem;

      /**
       * Sets whether the date item includes a year setting. The default for new date items is true.
       *
       * Return:
       * - DateTimeItem — this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setIncludesYear(Boolean)
       * @param enableYear true if the date includes a year setting; false if not
       */
      setIncludesYear(enableYear: boolean): DateTimeItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - DateTimeItem — this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DateTimeItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - DateTimeItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DateTimeItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - DateTimeItem — this DateTimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): DateTimeItem;
    }
    /**
     * An enum representing the supported types of form-response destinations. All forms, including
     * those that do not have a destination set explicitly, save a copy of responses in the form's
     * response store. Destination types can be accessed from FormApp.DestinationType.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.DestinationType.SPREADSHEET.
     *
     *     // Open a form by ID and create a new spreadsheet.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *     // Update the form's response destination.
     *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    enum DestinationType { SPREADSHEET }
    /**
     * A question item that allows the respondent to indicate a length of time. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new duration item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addDurationItem();
     *     item.setTitle('How long can you hold your breath?');
     */
    interface DurationItem {

      /**
       * Creates a new ItemResponse for this date item. The arguments hours, minutes, and seconds are best represented as integers from 0 to 72 for hours and 0 to 59 for minutes and seconds. Values that exceed those bounds are clamped: for example, 24, 60, 90 is interpreted as 24:59:59.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#createResponse(Integer,Integer,Integer)
       * @param hours the hours, represented as an integer from 0 to 72
       * @param minutes the minutes, represented as an integer from 0 to 59
       * @param seconds the seconds, represented as an integer from 0 to 59
       */
      createResponse(hours: Integer, minutes: Integer, seconds: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - DurationItem — a duplicate of this DurationItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#duplicate()
       */
      duplicate(): DurationItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - DurationItem — this DurationItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DurationItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - DurationItem — this DurationItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DurationItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - DurationItem — this DurationItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DurationItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - DurationItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DurationItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - DurationItem — this DurationItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/duration-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): DurationItem;
    }
    /**
     * An enum representing the supported types of feedback. Feedback types can be accessed from FormApp.FeedbackType.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.FeedbackType.CORRECT.
     *
     *     // Open a form by ID and add a new list item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     // Set "Dogs" as the correct answer to this question.
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false),
     *     ]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(
     *         FormApp.createFeedback().setDisplayText('Dogs rule, cats drool.').build(),
     *     );
     */
    enum FeedbackType { CORRECT, INCORRECT, GENERAL }
    /**
     * A form that contains overall properties and items. Properties include title, settings, and where
     * responses are stored. Items include question items like checkboxes or radio items, while layout
     * items refer to things like page breaks. Forms can be accessed or created from FormApp.
     *
     *     // Open a form by ID and create a new spreadsheet.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *     // Update form properties via chaining.
     *     form.setTitle('Form Name')
     *         .setDescription('Description of form')
     *         .setConfirmationMessage('Thanks for responding!')
     *         .setAllowResponseEdits(true)
     *         .setAcceptingResponses(false);
     *
     *     // Update the form's response destination.
     *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    interface Form {

      /**
       * Appends a new question item, presented as a grid of columns and rows, that allows the respondent to select multiple choices per row from a sequence of checkboxes.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a checkbox grid item.
       *     const item = form.addCheckboxGridItem();
       *
       *     item.setTitle('Where did you celebrate New Year\'s?');
       *
       *     // Sets the grid's rows and columns.
       *     item.setRows(['New York', 'San Francisco', 'London']).setColumns([
       *       '2014', '2015', '2016', '2017'
       *     ]);
       *
       * Return:
       * - CheckboxGridItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addCheckboxGridItem()
       */
      addCheckboxGridItem(): CheckboxGridItem;

      /**
       * Appends a new question item that allows the respondent to select one or more checkboxes, as well as an optional "other" field.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a checkbox item.
       *     const item = form.addCheckboxItem();
       *
       *     // Sets the title of the checkbox item to 'Do you prefer cats or dogs?'
       *     item.setTitle('Do you prefer cats or dogs?');
       *
       *     // Sets the choices.
       *     item.setChoiceValues(['Cats', 'Dogs']);
       *
       * Return:
       * - CheckboxItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addCheckboxItem()
       */
      addCheckboxItem(): CheckboxItem;

      /**
       * Appends a new question item that allows the respondent to indicate a date.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a date item.
       *     const item = form.addDateItem();
       *
       *     // Sets the title to 'When were you born?'
       *     item.setTitle('When were you born?');
       *
       *     // Sets the description for the date item.
       *     item.setHelpText('Some helper text.');
       *
       * Return:
       * - DateItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addDateItem()
       */
      addDateItem(): DateItem;

      /**
       * Appends a new question item that allows the respondent to indicate a date and time.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a question with date and time inputs.
       *     const item = form.addDateTimeItem();
       *
       *     // Sets the title to 'When were you born?'
       *     item.setTitle('When were you born?');
       *
       *     // Sets the question as required.
       *     item.setRequired(true);
       *
       * Return:
       * - DateTimeItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addDateTimeItem()
       */
      addDateTimeItem(): DateTimeItem;

      /**
       * Appends a new question item that allows the respondent to indicate a length of time.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a question with a duration input.
       *     const item = form.addDurationItem();
       *
       *     // Sets the title to 'How long can you hold your breath?'
       *     item.setTitle('How long can you hold your breath?');
       *
       *     // Sets the question as required.
       *     item.setRequired(true);
       *
       * Return:
       * - DurationItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addDurationItem()
       */
      addDurationItem(): DurationItem;

      /**
       * Adds the given user to the list of editors for the Form. If the user was already on the list of viewers or responders, this method promotes the user out of the list.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Adds editor to the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.addEditor('editor@uni.edu');
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Form;

      /**
       * Adds the given user to the list of editors for the Form. If the user was already on the list of viewers or responders, this method promotes the user out of the list.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const oldForm = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Gets the editors from the old form.
       *     const users = oldForm.getEditors();
       *
       *     // Creates a new form.
       *     const newForm = FormApp.create('New form');
       *
       *     // Adds the editors to a new form.
       *     users.forEach(user => newForm.addEditor(user));
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Form;

      /**
       * Adds the given array of users to the list of editors for the Form. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Adds editors to the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.addPublishedReaders(['editor1@uni.edu', 'editor2@uni.edu']);
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Form;

      /**
       * Appends a new question item, presented as a grid of columns and rows, that allows the respondent to select one choice per row from a sequence of radio buttons.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a multiple choice grid.
       *     const item = form.addGridItem();
       *
       *     // Sets the title to 'Rate your interests.'
       *     item.setTitle('Rate your interests');
       *
       *     // Sets the grid's rows and columns.
       *     item.setRows(['Cars', 'Computers', 'Celebrities']).setColumns([
       *       'Boring', 'So-so', 'Interesting'
       *     ]);
       *
       * Return:
       * - GridItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addGridItem()
       */
      addGridItem(): GridItem;

      /**
       * Appends a new layout item that displays an image.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds an image item.
       *     const item = form.addImageItem();
       *
       *     // Gets the Google icon to use as the image.
       *     const img = UrlFetchApp.fetch(
       *         'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/web-24dp/logo_googleg_color_1x_web_24dp.png',
       *     );
       *
       *     // Sets the image, title, and description for the item.
       *     item.setTitle('Google icon').setHelpText('Google icon').setImage(img);
       *
       * Return:
       * - ImageItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addImageItem()
       */
      addImageItem(): ImageItem;

      /**
       * Appends a new question item that allows the respondent to select one choice from a dropdown list.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a dropdown list to the form.
       *     const item = form.addListItem();
       *
       *     // Sets the title to 'Do you prefer cats or dogs?'
       *     item.setTitle('Do you prefer cats or dogs?');
       *
       *     // Sets the description to 'This is description text...'
       *     item.setHelpText('This is description text...');
       *
       *     // Creates and adds choices to the dropdown list.
       *     item.setChoices([item.createChoice('dog'), item.createChoice('cat')]);
       *
       * Return:
       * - ListItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addListItem()
       */
      addListItem(): ListItem;

      /**
       * Adds a new question item that allows the respondent to select one choice from a list of radio buttons or an optional "other" field.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a multiple choice item to the form.
       *     const item = form.addMultipleChoiceItem();
       *
       *     // Sets the title.
       *     item.setTitle('What is your favorite ice cream flavor?');
       *
       *     // Creates some choice items.
       *     const vanilla = item.createChoice('vanilla');
       *     const chocolate = item.createChoice('chocolate');
       *     const strawberry = item.createChoice('strawberry');
       *
       *     // Sets the choices.
       *     item.setChoices([vanilla, chocolate, strawberry]);
       *
       * Return:
       * - MultipleChoiceItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addMultipleChoiceItem()
       */
      addMultipleChoiceItem(): MultipleChoiceItem;

      /**
       * Adds a new layout item that marks the start of a page.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds page break items to create a second and third page for the form.
       *     const pageTwo = form.addPageBreakItem();
       *     const pageThree = form.addPageBreakItem();
       *
       *     // Sets the titles for the pages.
       *     pageTwo.setTitle('Page two');
       *     pageThree.setTitle('Page three');
       *
       *     // Upon completion of the first page, sets the form to navigate to the third
       *     // page.
       *     pageTwo.setGoToPage(pageThree);
       *
       *     // Upon completion of the second page, sets the form to navigate back to the
       *     // first page.
       *     pageThree.setGoToPage(FormApp.PageNavigationType.RESTART);
       *
       * Return:
       * - PageBreakItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addPageBreakItem()
       */
      addPageBreakItem(): PageBreakItem;

      /**
       * Adds a new question item that allows the respondent to enter a block of text.
       *
       *     // Opens the form by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds the paragraph text item.
       *     const item = form.addParagraphTextItem();
       *
       *     // Sets the title to 'What is your address?'
       *     item.setTitle('What is your address?');
       *
       * Return:
       * - ParagraphTextItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addParagraphTextItem()
       */
      addParagraphTextItem(): ParagraphTextItem;

      /**
       * Adds the given user to the list of responders for the Form. If the user was already on the list of editors or viewers, this method has no effect.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Adds responder to the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.addPublishedReader('responder@uni.edu');
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addPublishedReader(String)
       * @param emailAddress The email address of the user to add.
       */
      addPublishedReader(emailAddress: string): Form;

      /**
       * Adds the given user to the list of responders for the Form. If the user was already on the list of editors or viewers, this method has no effect.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const oldForm = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Gets the responders from the old form.
       *     const users = oldForm.getPublishedReaders();
       *
       *     // Creates a new form.
       *     const newForm = FormApp.create('New form');
       *
       *     // Adds the responders to a new form.
       *     users.forEach(user => newForm.addPublishedReader(user));
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addPublishedReader(User)
       * @param user A representation of the user to add.
       */
      addPublishedReader(user: Base.User): Form;

      /**
       * Adds the given array of users to the list of responders for the Form. If the user was already on the list of editors or viewers, this method has no effect.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Adds responders to the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.addPublishedReaders(['responder1@uni.edu', 'responder2@uni.edu']);
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addPublishedReaders(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addPublishedReaders(emailAddresses: string[]): Form;

      /**
       * Appends a new question item that allows the respondent to give a rating.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds the rating item.
       *     const item = form.addRatingItem();
       *
       * Return:
       * - RatingItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addRatingItem()
       */
      addRatingItem(): RatingItem;

      /**
       * Appends a new question item that allows the respondent to choose one option from a numbered sequence of radio buttons.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds the scale item.
       *     const item = form.addScaleItem();
       *
       *     // Sets the title of the scale item to 'Choose a number.'
       *     item.setTitle('Choose a number');
       *
       *     // Sets the scale to 1-5.
       *     item.setBounds(1, 5);
       *
       *     // Sets the label for the lower and upper bounds.
       *     item.setLabels('Lowest', 'Highest');
       *
       * Return:
       * - ScaleItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addScaleItem()
       */
      addScaleItem(): ScaleItem;

      /**
       * Appends a new layout item that visually indicates the start of a section.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds the section heading item.
       *     const item = form.addSectionHeaderItem();
       *
       *     // Sets the title to 'Title of new section.'
       *     item.setTitle('Title of new section');
       *
       *     // Sets the description.
       *     item.setHelpText('Description of new section');
       *
       * Return:
       * - SectionHeaderItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addSectionHeaderItem()
       */
      addSectionHeaderItem(): SectionHeaderItem;

      /**
       * Appends a new question item that allows the respondent to enter a single line of text.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a single-line text item.
       *     const item = form.addTextItem();
       *
       *     // Sets the title to 'What is your name?'
       *     item.setTitle('What is your name?');
       *
       * Return:
       * - TextItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addTextItem()
       */
      addTextItem(): TextItem;

      /**
       * Appends a new question item that allows the respondent to indicate a time of day.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a question with a time input.
       *     const item = form.addTimeItem();
       *
       *     // Sets the title to 'What time do you usually wake up in the morning?'
       *     item.setTitle('What time do you usually wake up in the morning?');
       *
       * Return:
       * - TimeItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addTimeItem()
       */
      addTimeItem(): TimeItem;

      /**
       * Appends a new layout item that displays a video.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Adds a video item.
       *     const item = form.addVideoItem();
       *
       *     // Sets the title, description, and video.
       *     item.setTitle('YouTube video')
       *         .setHelpText('Send content automatically via Google Sheets and Apps Script')
       *         .setVideoUrl('https://youtu.be/xxgQr-jSu9o');
       *
       *     // Sets the alignment to the center.
       *     item.setAlignment(FormApp.Alignment.CENTER);
       *
       * Return:
       * - VideoItem — The newly created item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#addVideoItem()
       */
      addVideoItem(): VideoItem;

      /**
       * Determines whether the form displays a link to edit a response after submitting it.
       * Regardless of this setting, the method FormResponse.getEditResponseUrl() allows a script author who has edit access to the form to generate a URL that can be used to edit a response.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Checks if the form displays a link to edit a response after submitting it.
       *     // The default is false. To let people edit their responses, use
       *     // form.setAllowResponseEdits(true).
       *     const edit = form.canEditResponse();
       *
       *     // If the form doesn't let people edit responses, logs false to the console.
       *     console.log(edit);
       *
       * Return:
       * - Boolean — true if the form displays an "Edit your response" link; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#canEditResponse()
       */
      canEditResponse(): boolean;

      /**
       * Determines whether the form collects respondents' email addresses.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to not collect respondents' email addresses.
       *     form.setCollectEmail(false);
       *
       *     // Checks whether the form collects respondents' email addresses and logs it to
       *     // the console.
       *     const bool = form.collectsEmail();
       *
       *     console.log(bool);
       *
       * Return:
       * - Boolean — true if the form collects email addresses; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#collectsEmail()
       */
      collectsEmail(): boolean;

      /**
       * Creates a new response to the form. To answer a question item, create an ItemResponse from the item, then attach it to this form response by calling FormResponse.withItemResponse(response). To save the assembled response, call FormResponse.submit().
       *
       * Return:
       * - FormResponse — The newly created form response.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#createResponse()
       */
      createResponse(): FormResponse;

      /**
       * Deletes all submitted responses from the form's response store. This method does not delete copies of responses stored in an external response destination (like a spreadsheet), but does clear the form's summary view.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteAllResponses()
       */
      deleteAllResponses(): Form;

      /**
       * Deletes the item at a given index among all the items in the form. Throws a scripting exception if no item exists at the given index.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets all the items from the form.
       *     const items = form.getItems();
       *
       *     // Finds the index of a paragraph text item and deletes it by the item's index.
       *     const index = items.findIndex(
       *         (item) => item.getType() === FormApp.ItemType.PARAGRAPH_TEXT,
       *     );
       *     if (index !== -1) {
       *       form.deleteItem(index);
       *     }
       *
       * Throws:
       * - Error — if no item exists at the given index
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteItem(Integer)
       * @param index The index of the item among all the items in the form.
       */
      deleteItem(index: Integer): void;

      /**
       * Deletes the given item. Throws a scripting exception if the item has already been deleted.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets all of the items from the form.
       *     const items = form.getItems();
       *
       *     // Finds a paragraph text item and deletes it.
       *     const item = items.find(
       *         (item) => item.getType() === FormApp.ItemType.PARAGRAPH_TEXT,
       *     );
       *     if (item) {
       *       form.deleteItem(item);
       *     }
       *
       * Throws:
       * - Error — if the item does not exist in the form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteItem(Item)
       * @param item The item to be deleted.
       */
      deleteItem(item: Item): void;

      /**
       * Deletes a single response from the form's response store. This method does not delete copies of responses stored in an external response destination (like a spreadsheet), but does remove the response from the form's summary view. The response ID can be retrieved with FormResponse.getId().
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteResponse(String)
       * @param responseId The ID of the form response to delete.
       */
      deleteResponse(responseId: string): Form;

      /**
       * Gets the form's confirmation message.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the confirmation message to display after someone submits the form.
       *     form.setConfirmationMessage('You successfully submitted the form.');
       *
       *     // Gets the confirmation message and logs it to the console.
       *     const message = form.getConfirmationMessage();
       *
       *     console.log(message);
       *
       * Return:
       * - String — The form's confirmation message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getConfirmationMessage()
       */
      getConfirmationMessage(): string;

      /**
       * Gets the custom message that is displayed if the form is not accepting responses, or an empty string if no custom message is set.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets a custom closed form message to display to the user when the form
       *     // no longer accepts responses.
       *     form.setCustomClosedFormMessage('The form is no longer accepting responses.');
       *
       *     // Gets the custom message set for the form and logs it to the console.
       *     const message = form.getCustomClosedFormMessage();
       *
       *     console.log(message);
       *
       * Return:
       * - String — The custom message to display if the form is not accepting responses, or an empty string if no custom message is set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getCustomClosedFormMessage()
       */
      getCustomClosedFormMessage(): string;

      /**
       * Gets the form's description.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form description.
       *     form.setDescription('This is the form description.');
       *
       *     // Gets the form description and logs it to the console.
       *     const description = form.getDescription();
       *
       *     console.log(description);
       *
       * Return:
       * - String — The form's description.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the ID of the form's response destination.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Creates a spreadsheet to use as the response destination.
       *     const ss = SpreadsheetApp.create('Test_Spreadsheet');
       *
       *     // Updates the form's response destination.
       *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
       *
       *     // Gets the ID of the form's response destination and logs it to the console.
       *     const destinationId = form.getDestinationId();
       *
       *     console.log(destinationId);
       *
       * Return:
       * - String — The ID of the form's response destination.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getDestinationId()
       */
      getDestinationId(): string;

      /**
       * Gets the type of the form's response destination.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc1234556/edit',
       *     );
       *
       *     // Gets the type of the form's response destination and logs it to the console.
       *     const destinationType = form.getDestinationType().name();
       *
       *     console.log(destinationType);
       *
       * Return:
       * - DestinationType — The type of the form's response destination.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getDestinationType()
       */
      getDestinationType(): DestinationType;

      /**
       * Gets the URL that can be used to access the form's edit mode.
       *
       *     // Opens the form by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the URL that accesses the form's edit mode and logs it to the console.
       *     const url = form.getEditUrl();
       *
       *     console.log(url);
       *
       * Return:
       * - String — The URL to edit the form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getEditUrl()
       */
      getEditUrl(): string;

      /**
       * Gets the list of editors for this Form.
       *
       * Return:
       * - User[] — An array of users with edit permission.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Gets the ID of the form.
       *
       *     // Opens the form by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the ID of the form and logs it to the console.
       *     const id = form.getId();
       *
       *     console.log(id);
       *
       * Return:
       * - String — The ID of the form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getId()
       */
      getId(): string;

      /**
       * Gets the item with a given ID. Returns null if the ID does not correspond to an item in the form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the ID of the first item on the form.
       *     const itemId = form.getItems()[0].getId();
       *
       *     // Gets the item from the ID.
       *     const item = form.getItemById(itemId);
       *
       *     // Gets the name of the item type and logs it to the console.
       *     const type = item.getType().name();
       *
       *     console.log(type);
       *
       * Return:
       * - Item — The item with the given ID, or null if the item does not exist in the form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getItemById(Integer)
       * @param id The item's ID.
       */
      getItemById(id: Integer): Item;

      /**
       * Gets an array of all items in the form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the list of items in the form.
       *     const items = form.getItems();
       *
       *     // Gets the type for each item and logs them to the console.
       *     const types = items.map((item) => item.getType().name());
       *
       *     console.log(types);
       *
       * Return:
       * - Item[] — An array of all items in the form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getItems()
       */
      getItems(): Item[];

      /**
       * Gets an array of all items of a given type.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets a list of all checkbox items on the form.
       *     const items = form.getItems(FormApp.ItemType.CHECKBOX);
       *
       *     // Gets the title of each checkbox item and logs them to the console.
       *     const checkboxItemsTitle = items.map(
       *         (item) => item.asCheckboxItem().getTitle(),
       *     );
       *     console.log(checkboxItemsTitle);
       *
       * Return:
       * - Item[] — An array of all items of that type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getItems(ItemType)
       * @param itemType The type of items to retrieve.
       */
      getItems(itemType: ItemType): Item[];

      /**
       * Gets the list of responders for this Form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Gets the responders for the form.
       *     const users = form.getPublishedReaders();
       *     users.forEach(user => console.log(user.getEmail()));
       *
       * Return:
       * - User[] — An array of users with responder permission.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getPublishedReaders()
       */
      getPublishedReaders(): Base.User[];

      /**
       * Gets the URL that can be used to respond to the form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the URL to respond to the form and logs it to the console.
       *     const url = form.getPublishedUrl();
       *     console.log(url);
       *
       * Return:
       * - String — The URL to respond to the form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getPublishedUrl()
       */
      getPublishedUrl(): string;

      /**
       * Gets a single form response based on its response ID. Response IDs can be retrieved from FormResponse.getId().
       *
       * Return:
       * - FormResponse — The form response.
       *
       * Throws:
       * - Error — if the response does not exist
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getResponse(String)
       * @param responseId The ID for the form response.
       */
      getResponse(responseId: string): FormResponse;

      /**
       * Gets an array of all of the form's responses.
       *
       * Return:
       * - FormResponse[] — An array of all of the form's responses.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getResponses()
       */
      getResponses(): FormResponse[];

      /**
       * Gets an array of all of the form's responses after a given date and time.
       *
       * Return:
       * - FormResponse[] — The list of form responses.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getResponses(Date)
       * @param timestamp The earliest date and time for which form responses should be returned.
       */
      getResponses(timestamp: Date): FormResponse[];

      /**
       * Determines whether the order of the questions on each page of the form is randomized.
       *
       * Return:
       * - Boolean — true if the order of the questions on each page of the form is randomized; false if not.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getShuffleQuestions()
       */
      getShuffleQuestions(): boolean;

      /**
       * Gets the URL that can be used to view a summary of the form's responses. Unless setPublishingSummary(enabled) is set to true, only the users with edit permission to the form is able to access the URL.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // Opens the form by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the URL to view a summary of the form's responses and logs it to the
       *     // console.
       *     const url = form.getSummaryUrl();
       *     console.log(url);
       *
       * Return:
       * - String — The URL to view a summary of responses.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getSummaryUrl()
       */
      getSummaryUrl(): string;

      /**
       * Gets the form's title.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the title of the form to 'For_Testing.'
       *     form.setTitle('For_Testing');
       *
       *     // Gets the title of the form and logs it to the console.
       *     const title = form.getTitle();
       *     console.log(title);
       *
       * Return:
       * - String — The form's title.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#getTitle()
       */
      getTitle(): string;

      /**
       * Determines whether the form allows only one response per respondent. If the value is true, the script cannot submit form responses at all.
       *
       * Return:
       * - Boolean — true if the form allows only one response per respondent; false if not.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#hasLimitOneResponsePerUser()
       */
      hasLimitOneResponsePerUser(): boolean;

      /**
       * Determines whether the form displays a progress bar.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // Opens the form by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Displays the progress bar on the form.
       *     form.setProgressBar(true);
       *
       *     // Checks if the form displays a progress bar and logs it to the console.
       *     console.log(form.hasProgressBar());
       *
       * Return:
       * - Boolean — true if the form displays a progress bar; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#hasProgressBar()
       */
      hasProgressBar(): boolean;

      /**
       * Determines whether the form displays a link to submit another response after a respondent completes the form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to display a link to submit another
       *     // response after someone submits the form.
       *     form.setShowLinkToRespondAgain(true);
       *
       *     // Checks if the form displays a 'Submit another response' link and logs it to
       *     // the console.
       *     console.log(form.hasRespondAgainLink());
       *
       * Return:
       * - Boolean — true if the form displays a "Submit another response" link; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#hasRespondAgainLink()
       */
      hasRespondAgainLink(): boolean;

      /**
       * Determines whether the form is currently accepting responses. This is overwritten when the form's publishing state is changed.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to accept responses.
       *     form.setAcceptingResponses(true);
       *
       *     // Checks if the form is accepting responses or not and logs it to the console.
       *     const accepting = form.isAcceptingResponses();
       *     console.log(accepting);
       *
       * Return:
       * - Boolean — true if the form is accepting responses; false if it isn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#isAcceptingResponses()
       */
      isAcceptingResponses(): boolean;

      /**
       * Determines whether the form is published.
       * This feature is only available for forms that support publishing. Use supportsAdvancedResponderPermissions() to check if the form supports publishing.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Checks whether the form is published or not and logs it to the console.
       *     console.log(form.isPublished());
       *
       * Return:
       * - Boolean — true if the form is published; false if it isn't.
       *
       * Throws:
       * - Error — if called on unsupported forms.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#isPublished()
       */
      isPublished(): boolean;

      /**
       * Determines whether the form displays a link to view a summary of responses after a respondent completes the form.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to display a link to a summary of
       *     // the responses after someone submits the form.
       *     form.setPublishingSummary(true);
       *
       *     // Checks if the form displays a "See previous responses" link and logs it to
       *     // the console.
       *     const publishingLink = form.isPublishingSummary();
       *     console.log(publishingLink);
       *
       * Return:
       * - Boolean — true if the form displays a "See previous responses" link; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#isPublishingSummary()
       */
      isPublishingSummary(): boolean;

      /**
       * Determines whether the form is a quiz.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form as a quiz.
       *     form.setIsQuiz(true);
       *
       *     // Checks if the form is a quiz or not and logs it to the console.
       *     console.log(form.isQuiz());
       *
       * Return:
       * - Boolean — true if the form is accepting responses; false if it isn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#isQuiz()
       */
      isQuiz(): boolean;

      /**
       * Moves an item at a given index among all the items in the form to another given index. Throws a scripting exception if the to index is out of bounds.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Moves the first item to be the last item.
       *     form.moveItem(0, form.getItems().length - 1);
       *
       * Return:
       * - Item — The item that was moved.
       *
       * Throws:
       * - Error — if either index is out of bounds.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#moveItem(Integer,Integer)
       * @param from The current index of the item among all the items in the form.
       * @param to The new index for the item among all the items in the form.
       */
      moveItem(from: Integer, to: Integer): Item;

      /**
       * Moves a given item to a given index among all the items in the form. Throws a scripting exception if the given index is out of bounds.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Gets the first item.
       *     const item = form.getItems()[0];
       *
       *     // Moves the item to be the last item.
       *     form.moveItem(item, form.getItems().length - 1);
       *
       * Return:
       * - Item — The item that was moved.
       *
       * Throws:
       * - Error — if the index is out of bounds.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#moveItem(Item,Integer)
       * @param item The item to move.
       * @param toIndex The new index for the item among all the items in the form.
       */
      moveItem(item: Item, toIndex: Integer): Item;

      /**
       * Unlinks the form from its current response destination. The unlinked former destination still retains a copy of all previous responses. All forms, including those that do not have a destination set explicitly, save a copy of responses in the form's response store. If the form does not currently have a response destination, this method has no effect.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Opens a spreadsheet to use for the response destination.
       *     // TODO(developer): Replace the URL with your own.
       *     const ss = SpreadsheetApp.openByUrl(
       *         'https://docs.google.com/spreadsheets/d/abc123456/edit',
       *     );
       *
       *     // Updates the form's response destination to the spreadsheet.
       *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
       *
       *     // Unlinks the form from the spreadsheet.
       *     form.removeDestination();
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#removeDestination()
       */
      removeDestination(): Form;

      /**
       * Removes the given user from the list of editors for the Form. This method doesn't block users from accessing the Form if they belong to a class of users who have general access—for example, if the Form is shared with the user's entire domain, or if the Form is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers and responders.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Removes the editor from the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.removeEditor('editor@uni.edu');
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Form;

      /**
       * Removes the given user from the list of editors for the Form. This method doesn't block users from accessing the Form if they belong to a class of users who have general access—for example, if the Form is shared with the user's entire domain, or if the Form is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form1 = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Gets the editors from the form.
       *     const users = form1.getEditors();
       *
       *     // Opens another form.
       *     // TODO(developer): Replace the URL with your own.
       *     const form2 = FormApp.openByUrl('https://docs.google.com/forms/d/efg123456/edit');
       *
       *     // Removes editors from the form.
       *     users.forEach(user => form2.removeEditor(user));
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Form;

      /**
       * Removes the given user from the list of responders for the Form. This method doesn't block users from accessing the Form if they belong to a class of users who have general access—for example, if the Form is shared with the user's entire domain, or if the Form is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers and editors.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Removes the responders from the form.
       *     // TODO(developer): replace the emailAddress.
       *     form.removePublishedReader('responder1@uni.edu');
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#removePublishedReader(String)
       * @param emailAddress The email address of the user to remove.
       */
      removePublishedReader(emailAddress: string): Form;

      /**
       * Removes the given user from the list of responders for the Form. This method doesn't block users from accessing the Form if they belong to a class of users who have general access—for example, if the Form is shared with the user's entire domain, or if the Form is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers and editors.
       *
       *     // Opens the Forms file by its URL.
       *     // TODO(developer): Replace the URL with your own.
       *     const form1 = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Gets the responders from the form.
       *     const users = form1.getPublishedReaders();
       *
       *     // Opens another form.
       *     // TODO(developer): Replace the URL with your own.
       *     const form2 = FormApp.openByUrl('https://docs.google.com/forms/d/efg123456/edit');
       *
       *     // Removes responders from the form.
       *     users.forEach(user => form2.removePublishedReader(user));
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#removePublishedReader(User)
       * @param user A representation of the user to remove.
       */
      removePublishedReader(user: Base.User): Form;

      /**
       * Sets whether the form is currently accepting responses. The default for new forms is true. The state is overwritten when the publish state of the form is changed.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to accept responses.
       *     form.setAcceptingResponses(true);
       *
       *     // Checks whether the form is accepting responses or not and logs it to the
       *     // console.
       *     console.log(form.isAcceptingResponses());
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Throws:
       * - Error — if enabled on an unpublished form.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setAcceptingResponses(Boolean)
       * @param enabled true if the form should accept responses; false if it shouldn't.
       */
      setAcceptingResponses(enabled: boolean): Form;

      /**
       * Sets whether the form displays a link to edit a response after submitting it. The default for new forms is false.
       * Regardless of this setting, the method FormResponse.getEditResponseUrl() allows a script author who has edit permission to the form to generate a URL that can be used to edit a response.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Shows "Edit your response" link after someone submits the form.
       *     form.setAllowResponseEdits(true);
       *
       *     // Checks whether the option to edit the form after a user submits it is set to
       *     // true or not and logs it to the console.
       *     console.log(form.canEditResponse());
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setAllowResponseEdits(Boolean)
       * @param enabled true if the form should display an "Edit your response" link; false if not.
       */
      setAllowResponseEdits(enabled: boolean): Form;

      /**
       * Sets whether the form collects respondents' email addresses. The default for new forms is false.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to collect respondents' email addresses.
       *     form.setCollectEmail(true);
       *
       *     // Checks whether the value is set to true or false and logs it to the console.
       *     const collect = form.collectsEmail();
       *     console.log(collect);
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setCollectEmail(Boolean)
       * @param collect true if the form should collect email addresses; false if it doesn't.
       */
      setCollectEmail(collect: boolean): Form;

      /**
       * Sets the form's confirmation message.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets a custom confirmation message to display after someone submits the form.
       *     form.setConfirmationMessage('Your form has been successfully submitted.');
       *
       *     // Gets the confirmation message set for the form and logs it to the console.
       *     const message = form.getConfirmationMessage();
       *     console.log(message);
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setConfirmationMessage(String)
       * @param message The form's new confirmation message.
       */
      setConfirmationMessage(message: string): Form;

      /**
       * Sets the message to display if the form is not accepting responses. If no message is set, the form uses a default message.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Sets the form to not accept responses.
       *     form.setAcceptingResponses(false);
       *
       *     // Sets a custom closed form message to display to the user.
       *     form.setCustomClosedFormMessage('The form is no longer accepting responses.');
       *
       *     // Gets the custom message set for the form and logs it to the console.
       *     const message = form.getCustomClosedFormMessage();
       *     console.log(message);
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setCustomClosedFormMessage(String)
       * @param message The message to display if the form is not accepting responses.
       */
      setCustomClosedFormMessage(message: string): Form;

      /**
       * Sets the form's description.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setDescription(String)
       * @param description The form's new description.
       */
      setDescription(description: string): Form;

      /**
       * Sets the destination where form responses are saved. All forms, including those that do not have a destination set explicitly, save a copy of responses in the form's response store.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Throws:
       * - Error — if the given destination ID is invalid
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setDestination(DestinationType,String)
       * @param type The type of the form's response destination.
       * @param id The ID of the form's response destination.
       */
      setDestination(type: DestinationType, id: string): Form;

      /**
       * Sets whether the form is a quiz. The default for new forms is false.
       * Graded questions are only allowed in Quizzes, so setting this to false causes all grading options to be removed from all questions.
       * Quiz settings are only available in the new Forms UI; making a form a Quiz opts the form into using the new UI.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Makes the form a quiz.
       *     form.setIsQuiz(true);
       *
       *     // Checks whether the form is a quiz or not and logs it to the console.
       *     console.log(form.isQuiz());
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setIsQuiz(Boolean)
       * @param enabled true if quiz features should be enabled for the form; false if not.
       */
      setIsQuiz(enabled: boolean): Form;

      /**
       * Sets whether the form allows only one response per respondent. The default for new forms is false. If the value is set to true, the script cannot submit form responses at all.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setLimitOneResponsePerUser(Boolean)
       * @param enabled true if the form should allow only one response per respondent; false if not.
       */
      setLimitOneResponsePerUser(enabled: boolean): Form;

      /**
       * Sets whether the form has a progress bar. The default for new forms is false.
       *
       *     // Opens the Forms file by its URL. If you created your script from within
       *     // a Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Displays the progress bar on the form.
       *     form.setProgressBar(true);
       *
       *     // Checks whether the form has a progress bar and logs it to the console.
       *     console.log(form.hasProgressBar());
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setProgressBar(Boolean)
       * @param enabled true if the form displays a progress bar; false if it doesn't.
       */
      setProgressBar(enabled: boolean): Form;

      /**
       * Sets whether the form is published. The default for new forms is true.
       * This feature is only available for forms that support publishing. Use supportsAdvancedResponderPermissions() to check if the form supports publishing.
       * A form needs to be published for it to be accessible to responders. This method supersedes calls to setAcceptingResponses(enabled).
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Publishes the form before sharing it.
       *     form.setPublished(true);
       *
       *     // Checks whether the form is published or not and logs it to the console.
       *     console.log(form.isPublished());
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Throws:
       * - Error — if called on unsupported forms.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setPublished(Boolean)
       * @param enabled true if the form should be published, false if not.
       */
      setPublished(enabled: boolean): Form;

      /**
       * Sets whether the form displays a link to view a summary of responses after a respondent submits the form. The default for new forms is false.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setPublishingSummary(Boolean)
       * @param enabled true if the form should display a "See previous responses" link; false if not.
       */
      setPublishingSummary(enabled: boolean): Form;

      /**
       * Sets whether the form displays a link to submit another response after a respondent completes the form. The default for new forms is true.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setShowLinkToRespondAgain(Boolean)
       * @param enabled true if the form should display a "Submit another response" link; false if not.
       */
      setShowLinkToRespondAgain(enabled: boolean): Form;

      /**
       * Sets whether the order of the questions on each page of the form is randomized.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setShuffleQuestions(Boolean)
       * @param shuffle true if the order of the questions on each page of the form should be randomized; false if not.
       */
      setShuffleQuestions(shuffle: boolean): Form;

      /**
       * Sets the form's title.
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#setTitle(String)
       * @param title The form's new title.
       */
      setTitle(title: string): Form;

      /**
       * Converts a long URL for a form to a short URL. Throws an exception if the long URL does not belong to Google Forms.
       *
       * Return:
       * - String — A URL in the form http://goo.gl/forms/1234.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#shortenFormUrl(String)
       * @param url The URL to shorten.
       */
      shortenFormUrl(url: string): string;

      /**
       * Submits grades for the given FormResponses.
       * If your code includes an onFormSubmit trigger, calling submitGrades() triggers the onFormSubmit condition and causes an infinite loop. To prevent the infinite loop, add code that checks whether grades already exist before calling submitGrades().
       *
       * Return:
       * - Form — This Form, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#submitGrades(FormResponse)
       * @param responses An array of all of the form's responses.
       */
      submitGrades(responses: FormResponse[]): Form;

      /**
       * Determines whether the form supports publishing. This method is used to determine whether the setPublished(enabled) and isPublished() methods, and responder permissions, are available.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/abc123456/edit',
       *     );
       *
       *     // Checks whether the form supports publishing or not and logs it to the
       *     // console.
       *     console.log(form.supportsAdvancedResponderPermissions());
       *
       * Return:
       * - Boolean — true if the form supports publishing; false if it doesn't.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form#supportsAdvancedResponderPermissions()
       */
      supportsAdvancedResponderPermissions(): boolean;
      /** @deprecated DO NOT USE */ requiresLogin(): boolean;
      /** @deprecated DO NOT USE */ setRequireLogin(requireLogin: boolean): Form;
    }
    /**
     * Allows a script to open an existing Form or create a new one.
     *
     *     // Open a form by ID.
     *     const existingForm = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *
     *     // Create and open a form.
     *     const newForm = FormApp.create('Form Name');
     */
    interface FormApp {
      Alignment: typeof Alignment;
      DestinationType: typeof DestinationType;
      FeedbackType: typeof FeedbackType;
      ItemType: typeof ItemType;
      PageNavigationType: typeof PageNavigationType;
      RatingIconType: typeof RatingIconType;

      /**
       * Creates and returns a new Form. Throws an exception if the given title is null or empty.
       *
       *     // Create and open a form.
       *     const form = FormApp.create('Form Name');
       *
       * Return:
       * - Form — The new form.
       *
       * Throws:
       * - Error — if the given title is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#create(String)
       * @param title The name of the new form.
       */
      create(title: string): Form;

      /**
       * Creates and returns a new Form in the requested publish state. Throws an exception if the given title is null or empty.
       *
       *     // Create, publish and open a form.
       *     const form = FormApp.create('Form Name', true);
       *
       * Return:
       * - Form — The new form.
       *
       * Throws:
       * - Error — if the given title is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#create(String,Boolean)
       * @param title The name of the new form.
       * @param isPublished Whether the form should be published.
       */
      create(title: string, isPublished: boolean): Form;

      /**
       * Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a CheckboxGridItem.
       *
       * Return:
       * - CheckboxGridValidationBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createCheckboxGridValidation()
       */
      createCheckboxGridValidation(): CheckboxGridValidationBuilder;

      /**
       * Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a CheckboxItem.
       *
       * Return:
       * - CheckboxValidationBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createCheckboxValidation()
       */
      createCheckboxValidation(): CheckboxValidationBuilder;

      /**
       * Returns an instance of a QuizFeedbackBuilder which can be used to set feedback on a gradeable Item.
       *
       * Return:
       * - QuizFeedbackBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createFeedback()
       */
      createFeedback(): QuizFeedbackBuilder;

      /**
       * Returns an instance of a GridValidationBuilder which can be used to set validation on a GridItem.
       *
       * Return:
       * - GridValidationBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createGridValidation()
       */
      createGridValidation(): GridValidationBuilder;

      /**
       * Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on a ParagraphTextItem.
       *
       * Return:
       * - ParagraphTextValidationBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createParagraphTextValidation()
       */
      createParagraphTextValidation(): ParagraphTextValidationBuilder;

      /**
       * Returns an instance of a TextValidationBuilder which can be used to set validation on a TextItem.
       *
       * Return:
       * - TextValidationBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#createTextValidation()
       */
      createTextValidation(): TextValidationBuilder;

      /**
       * Returns the form to which the script is container-bound. To interact with forms to which the script is not container-bound, use openById(id) or openByUrl(url) instead.
       *
       *     // Get the form to which this script is bound.
       *     const form = FormApp.getActiveForm();
       *
       * Return:
       * - Form — the form to which the script is bound, or null if the script is not bound to a form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#getActiveForm()
       */
      getActiveForm(): Form;

      /**
       * Returns an instance of the form editor's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open form editor (not the view that a respondent sees), and only if the script is bound to the form. For more information, see the guides to menus and dialogs and sidebars.
       *
       *     // Add a custom menu to the active form, including a separator and a sub-menu.
       *     function onOpen(e) {
       *       FormApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(
       *               FormApp.getUi()
       *                   .createMenu('My sub-menu')
       *                   .addItem('One sub-menu item', 'mySecondFunction')
       *                   .addItem('Another sub-menu item', 'myThirdFunction'),
       *               )
       *           .addToUi();
       *     }
       *
       * Return:
       * - Ui — an instance of this form's user-interface environment
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Returns the Form with the specified ID. Throws an exception if the ID is invalid or the user does not have permission to open the form.
       *
       *     // Open a form by ID.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       * Return:
       * - Form — the form with the given ID
       *
       * Throws:
       * - Error — if the given ID is invalid or the user does not have sufficient permissions
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#openById(String)
       * @param id the ID of the form to open
       */
      openById(id: string): Form;

      /**
       * Returns the Form with the specified URL. Throws an exception if the URL is invalid or the user does not have permission to open the form.
       *
       *     // Open a form by URL.
       *     const form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit',
       *     );
       *
       * Return:
       * - Form — the form with the given URL
       *
       * Throws:
       * - Error — if the given URL is invalid or the user does not have sufficient permissions
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-app#openByUrl(String)
       * @param url the URL of the form to open
       */
      openByUrl(url: string): Form;
    }
    /**
     * A response to the form as a whole. A FormResponse can be used in three ways: to access
     * the answers submitted by a respondent (see getItemResponses()), to programmatically
     * submit a response to the form (see withItemResponse(response) and submit()), and to generate a URL for the form which pre-fills fields using the provided
     * answers. FormResponses can be created or accessed from a Form.
     *
     *     // Open a form by ID and log the responses to each question.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const formResponses = form.getResponses();
     *     for (let i = 0; i < formResponses.length; i++) {
     *       const formResponse = formResponses[i];
     *       const itemResponses = formResponse.getItemResponses();
     *       for (let j = 0; j < itemResponses.length; j++) {
     *         const itemResponse = itemResponses[j];
     *         Logger.log(
     *             'Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse(),
     *         );
     *       }
     *     }
     */
    interface FormResponse {

      /**
       * Generates a URL that can be used to edit a response that has already been submitted. If the Form.setAllowResponseEdits(enabled) setting is disabled, the link leads to a page that explains that editing form responses is disabled. Anyone who visits the link can edit the response, although they need an account with access to the form if the Form.setRequireLogin(requireLogin) setting is enabled. If the Form.setCollectEmail(collect) setting is enabled, the form records the email address of the user who edited the response instead of the email address of the original respondent.
       * For a form response that the script has created but not yet submitted, this method returns null.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets the first form response.
       *     const formResponse = form.getResponses()[0];
       *
       *     // Gets the edit URL for the first form response and logs it to the console.
       *     const editUrl = formResponse.getEditResponseUrl();
       *     console.log(editUrl);
       *
       * Return:
       * - String — The URL to change a submitted response.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getEditResponseUrl()
       */
      getEditResponseUrl(): string;

      /**
       * Gets all item responses contained in a form response, in the same order that the items appear in the form. This method works similarly to getItemResponses(), but to allow for grading a missing answer, it still returns an ItemResponse if the corresponding Item can be graded (that is, has a point value), even if there isn't an actual response. However, if the Item isn't gradable, this method excludes that item from its returned array.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Gets the item responses contained in each form response.
       *     for (const formResponse of formResponses) {
       *       const gradableItemsResponses = formResponse.getGradableItemResponses();
       *
       *       // Logs the title and score for each item response to the console.
       *       for (const gradableItemsResponse of gradableItemsResponses) {
       *         console.log(`${gradableItemsResponse.getItem().getTitle()}
       *            score ${gradableItemsResponse.getScore()}`);
       *       }
       *     }
       *
       * Return:
       * - ItemResponse[] — An array of responses to every question item within the form for which the respondent could receive a score.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getGradableItemResponses()
       */
      getGradableItemResponses(): ItemResponse[];

      /**
       * Gets the item response contained in a form response for a given item. This method works similarly to getResponseForItem(item), but to allow for grading a missing answer, it still returns an ItemResponse if the corresponding Item can be graded (that is, has a point value), even if there isn't an actual response. However, if the Item isn't gradable, this method returns null.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Gets the item responses contained in a form response.
       *     for (const formResponse of formResponses) {
       *       const formItemResponses = formResponse.getGradableItemResponses();
       *
       *       // Logs the title and score for responses to the first item of the form.
       *       const itemResponse = formResponse.getGradableResponseForItem(
       *           formItemResponses[0].getItem(),
       *       );
       *       console.log(
       *           `${itemResponse.getItem().getTitle()} score ${itemResponse.getScore()}`,
       *       );
       *     }
       *
       * Return:
       * - ItemResponse — The response for a given item, or null if none exists and the item is ungraded.
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getGradableResponseForItem(Item)
       * @param item
       */
      getGradableResponseForItem(item: Item): ItemResponse;

      /**
       * Gets the ID of the form response. This method returns null if the form response has not been submitted.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Loops through the form responses and logs the ID for each form response to
       *     // the console.
       *     for (const formResponse of formResponses) {
       *       console.log(`Response ID: ${formResponse.getId()}`);
       *     }
       *
       * Return:
       * - String — The ID of the form response, or null if the form response has not been submitted.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getId()
       */
      getId(): string;

      /**
       * Gets all item responses contained in a form response, in the same order that the items appear in the form. If the form response does not contain a response for a given TextItem, DateItem, TimeItem, or ParagraphTextItem, the ItemResponse returned for that item will have an empty string as the response. If the form response omits a response for any other item type, this method excludes that item from its returned array.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets the responses to the form.
       *     const formResponses = form.getResponses();
       *
       *     // Iterates over the responses.
       *     for (const formResponse of formResponses) {
       *       // Gets the item responses from each form response.
       *       const itemResponses = formResponse.getItemResponses();
       *
       *       // Iterates over the item responses.
       *       for (const itemResponse of itemResponses) {
       *         // Logs the items' questions and responses to the console.
       *         console.log(
       *             `Response to the question '${itemResponse.getItem().getTitle()}' was
       *           '${itemResponse.getResponse()}'`);
       *       }
       *     }
       *
       * Return:
       * - ItemResponse[] — An array of responses to every question item within the form for which the respondent provided an answer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getItemResponses()
       */
      getItemResponses(): ItemResponse[];

      /**
       * Gets the email address of the person who submitted a response, if the Form.setCollectEmail(collect) setting is enabled.
       * For a form response that the script has created but not yet submitted, this method returns null.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Loops through the responses and logs each respondent's email to the console.
       *     // To collect respondent emails, ensure that Form.setCollectEmail(collect) is
       *     // set to true.
       *     for (const formResponse of formResponses) {
       *       console.log(`Respondent Email: ${formResponse.getRespondentEmail()}`);
       *     }
       *
       * Return:
       * - String — The email address of the person who submitted this response, if available, or null if the script created this response but has not yet submitted it.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getRespondentEmail()
       */
      getRespondentEmail(): string;

      /**
       * Gets the item response contained in this form response for a given item.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets the first item on the form.
       *     const item = form.getItems()[0];
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Loops through the responses and logs each response to the first item to the
       *     // console.
       *     for (const formResponse of formResponses) {
       *       const itemResponse = formResponse.getResponseForItem(item);
       *       console.log(itemResponse.getResponse());
       *     }
       *
       * Return:
       * - ItemResponse — The response for a given item, or null if none exists.
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getResponseForItem(Item)
       * @param item
       */
      getResponseForItem(item: Item): ItemResponse;

      /**
       * Gets the timestamp for a form response submission.
       * For a form response that the script has created but not yet submitted, this method returns null.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets an array of the form's responses.
       *     const formResponses = form.getResponses();
       *
       *     // Loops through the responses and logs the timestamp of each response to the
       *     // console.
       *     for (const formResponse of formResponses) {
       *       console.log(`Timestamp: ${formResponse.getTimestamp()}`);
       *     }
       *
       * Return:
       * - Date — The timestamp at which this response was submitted, or null if the script created this response but has not yet submitted it.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#getTimestamp()
       */
      getTimestamp(): Date;

      /**
       * Submits the response. Throws a scripting exception if the response has already been submitted.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Creates an empty response for the form.
       *     const formResponse = form.createResponse();
       *
       *     // Submits an empty response.
       *     formResponse.submit();
       *
       * Return:
       * - FormResponse — A newly created response saved to the form's response store.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#submit()
       */
      submit(): FormResponse;

      /**
       * Generates a URL for the form in which the answers are pre-filled based on the answers in this form response.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Gets the first form response.
       *     const formResponse = form.getResponses()[0];
       *
       *     // Generates and logs the URL of a pre-filled form response based on the answers
       *     // of the first form response.
       *     const prefilledUrl = formResponse.toPrefilledUrl();
       *     console.log(prefilledUrl);
       *
       * Return:
       * - String — The URL for a form with pre-filled answers.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#toPrefilledUrl()
       */
      toPrefilledUrl(): string;

      /**
       * Adds the given item response's grades to a form response. This method applies only to form responses that have already been submitted, and only affects stored grades once they are submitted. This method also only updates the item response's grades; it does not affect the actual response (since the response has already been submitted). If this method is called multiple times for the same item, only the last grade is retained. If the ItemResponse contains no grades, this method removes grades for the item.
       *
       *     // Programmatically award partial credit for a given response
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const formResponses = form.getResponses();
       *     const formItems = form.getItems();
       *     for (const formResponse of formResponses) {
       *       for (const item of formItems) {
       *         const points = item.asMultipleChoiceItem().getPoints();
       *         const itemResponse = formResponse.getGradableResponseForItem(item);
       *         Logger.log('Award half credit for answers containing the word "Kennedy"');
       *         const answer = itemResponse.getResponse();
       *
       *         if (answer?.includes('Kennedy')) {
       *           itemResponse.setScore(points / 2);
       *           formResponse.withItemGrade(itemResponse);
       *         }
       *       }
       *     }
       *     form.submitGrades(formResponses);
       *
       * Return:
       * - FormResponse — this FormResponse, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#withItemGrade(ItemResponse)
       * @param gradedResponse
       */
      withItemGrade(gradedResponse: ItemResponse): FormResponse;

      /**
       * Adds the given item response to a form response. This method applies only to form responses that the script has created but not yet submitted; it cannot affect stored responses. If this method is called multiple times for the same item, only the last item response is retained.
       *
       *     // Opens the Forms file by its ID.
       *     // If you created your script from within a Google Forms file, you can
       *     // use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const form = FormApp.openById('abc123456');
       *
       *     // Creates a response for the form.
       *     const formResponse = form.createResponse();
       *
       *     // Appends a checkbox item to the form.
       *     const item = form.addCheckboxItem();
       *
       *     // Sets the title of the item to 'Which items are ice cream flavors?'
       *     item.setTitle('Which items are ice cream flavors?');
       *
       *     // Sets choices for the item.
       *     item.setChoices([
       *       item.createChoice('Vanilla'),
       *       item.createChoice('Strawberry'),
       *       item.createChoice('Brick'),
       *     ]);
       *
       *     // Creates a response for the item.
       *     const response = item.createResponse(['Vanilla', 'Strawberry']);
       *
       *     // Adds the item response to the form response.
       *     formResponse.withItemResponse(response);
       *
       *     // Submits the form response.
       *     formResponse.submit();
       *
       * Return:
       * - FormResponse — This FormResponse, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/form-response#withItemResponse(ItemResponse)
       * @param response
       */
      withItemResponse(response: ItemResponse): FormResponse;
    }
    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     * one choice per row from a sequence of radio buttons. Items can be accessed or created from a
     * Form.
     *
     *     // Open a form by ID and add a new grid item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addGridItem();
     *     item.setTitle('Rate your interests')
     *         .setRows(['Cars', 'Computers', 'Celebrities'])
     *         .setColumns(['Boring', 'So-so', 'Interesting']);
     */
    interface GridItem {

      /**
       * Removes any data validation for this grid item.
       *
       * Return:
       * - GridItem — this item, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#clearValidation()
       */
      clearValidation(): GridItem;

      /**
       * Creates a new ItemResponse for this grid item. The argument responses must be a String[] array containing as many values as the number of rows in the grid. A null element for a non-required grid question indicates no response to that row. Throws an exception if any of the values does not match a valid choice.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#createResponse(String)
       * @param responses an array of valid answers for this grid item
       */
      createResponse(responses: string[]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - GridItem — a duplicate of this GridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#duplicate()
       */
      duplicate(): GridItem;

      /**
       * Gets the values for every column in the grid.
       *
       * Return:
       * - String[] — an array of column values, which respondents see as labels when viewing the form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getColumns()
       */
      getColumns(): string[];

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the values for every row in the grid.
       *
       * Return:
       * - String[] — an array of row values, which respondents see as labels when viewing the form
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getRows()
       */
      getRows(): string[];

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the columns of the grid based on an array of values. Throws an exception if the given array is empty.
       *
       * Return:
       * - GridItem — this item, for chaining
       *
       * Throws:
       * - Error — if the given array is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setColumns(String)
       * @param columns an array of column values, which respondents see as labels when viewing the form
       */
      setColumns(columns: string[]): GridItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - GridItem — this GridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): GridItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - GridItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): GridItem;

      /**
       * Sets the rows of the grid based on an array of values. Throws an exception if the given array is empty.
       *
       * Return:
       * - GridItem — this item, for chaining
       *
       * Throws:
       * - Error — if the given array is null or empty
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setRows(String)
       * @param rows an array of row values, which respondents see as labels when viewing the form
       */
      setRows(rows: string[]): GridItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - GridItem — this GridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): GridItem;

      /**
       * Sets the data validation for this grid item. Passing in null or a GridValidation instance on which no require functions have been called removes any prior validation.
       *
       * Return:
       * - GridItem — this GridItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/grid-item#setValidation(GridValidation)
       * @param validation a GridValidation to apply to this item.
       */
      setValidation(validation: GridValidation): GridItem;
    }
    /**
     * A DataValidation for a GridItem.
     *
     *     // Add a grid item to a form and require one response per column.
     *     const form = FormApp.create('My Form');
     *     const gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *         .setRows(['Cars', 'Computers', 'Celebrities'])
     *         .setColumns(['Boring', 'So-so', 'Interesting']);
     *     const gridValidation = FormApp.createGridValidation()
     *                                .setHelpText('Select one item per column.')
     *                                .requireLimitOneResponsePerColumn()
     *                                .build();
     *     gridItem.setValidation(gridValidation);
     */
    interface GridValidation {
    }
    /**
     * A DataValidationBuilder for a GridValidation.
     *
     *     // Add a grid item to a form and require one response per column.
     *     const form = FormApp.create('My Form');
     *     const gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *         .setRows(['Cars', 'Computers', 'Celebrities'])
     *         .setColumns(['Boring', 'So-so', 'Interesting']);
     *     const gridValidation = FormApp.createGridValidation()
     *                                .setHelpText('Select one item per column.')
     *                                .requireLimitOneResponsePerColumn()
     *                                .build();
     *     gridItem.setValidation(gridValidation);
     */
    interface GridValidationBuilder {

      /**
       * Requires limit of one response per column for a grid item.
       *
       * Return:
       * - GridValidationBuilder — this validation builder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/grid-validation-builder#requireLimitOneResponsePerColumn()
       */
      requireLimitOneResponsePerColumn(): GridValidationBuilder;
    }
    /**
     * A layout item that displays an image. Items can be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new image item
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem()
     *         .setTitle('Google')
     *         .setHelpText('Google Logo')  // The help text is the image description
     *         .setImage(img);
     */
    interface ImageItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - ImageItem — a duplicate of this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#duplicate()
       */
      duplicate(): ImageItem;

      /**
       * Gets the image's horizontal alignment.
       *
       * Return:
       * - Alignment — the horizontal alignment
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getAlignment()
       */
      getAlignment(): Alignment;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the image that is currently assigned to the item.
       *
       * Return:
       * - Blob — the image data
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getImage()
       */
      getImage(): Base.Blob;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the image's width in pixels.
       *
       * Return:
       * - Integer — the width in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the image's horizontal alignment.
       *
       * Return:
       * - ImageItem — this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#setAlignment(Alignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: Alignment): ImageItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - ImageItem — this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ImageItem;

      /**
       * Sets the image itself.
       *
       * Return:
       * - ImageItem — this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#setImage(BlobSource)
       * @param image the image data
       */
      setImage(image: Base.BlobSource): ImageItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - ImageItem — this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ImageItem;

      /**
       * Sets the image's width in pixels. Only the image's width can be set. Height is set automatically to maintain the image's proportions.
       *
       * Return:
       * - ImageItem — this ImageItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/image-item#setWidth(Integer)
       * @param width the width in pixels
       */
      setWidth(width: Integer): ImageItem;
    }
    /**
     * A generic form item that contains properties common to all items, such as title and help text.
     * Items can be accessed or created from a Form.
     *
     * To operate on type-specific properties, use getType() to check the item's ItemType, then cast the item to the
     * appropriate class using a method like asCheckboxItem().
     *
     *     // Create a new form and add a text item.
     *     const form = FormApp.create('Form Name');
     *     form.addTextItem();
     *
     *     // Access the text item as a generic item.
     *     const items = form.getItems();
     *     const item = items[0];
     *
     *     // Cast the generic item to the text-item class.
     *     if (item.getType() === 'TEXT') {
     *       const textItem = item.asTextItem();
     *       textItem.setRequired(false);
     *     }
     *
     * Implementing classes
     *
     * NameBrief description
     */
    interface Item {

      /**
       * Returns the item as a checkbox grid item. Throws a scripting exception if the ItemType was not already CHECKBOX_GRID.
       *
       * Return:
       * - CheckboxGridItem — the checkbox grid item
       *
       * Throws:
       * - Error — if the item is not a checkbox grid item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asCheckboxGridItem()
       */
      asCheckboxGridItem(): CheckboxGridItem;

      /**
       * Returns the item as a checkbox item. Throws a scripting exception if the ItemType was not already CHECKBOX.
       *
       * Return:
       * - CheckboxItem — the checkbox item
       *
       * Throws:
       * - Error — if the item is not a checkbox item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asCheckboxItem()
       */
      asCheckboxItem(): CheckboxItem;

      /**
       * Returns the item as a date item. Throws a scripting exception if the ItemType was not already DATE.
       *
       * Return:
       * - DateItem — the date item
       *
       * Throws:
       * - Error — if the item is not a date item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asDateItem()
       */
      asDateItem(): DateItem;

      /**
       * Returns the item as a date-time item. Throws a scripting exception if the ItemType was not already DATETIME.
       *
       * Return:
       * - DateTimeItem — the date-time item
       *
       * Throws:
       * - Error — if the item is not a date-time item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asDateTimeItem()
       */
      asDateTimeItem(): DateTimeItem;

      /**
       * Returns the item as a duration item. Throws a scripting exception if the ItemType was not already DURATION.
       *
       * Return:
       * - DurationItem — the duration item
       *
       * Throws:
       * - Error — if the item is not a duration item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asDurationItem()
       */
      asDurationItem(): DurationItem;

      /**
       * Returns the item as a grid item. Throws a scripting exception if the ItemType was not already GRID.
       *
       * Return:
       * - GridItem — the grid item
       *
       * Throws:
       * - Error — if the item is not a grid item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asGridItem()
       */
      asGridItem(): GridItem;

      /**
       * Returns the item as an image item. Throws a scripting exception if the ItemType was not already IMAGE.
       *
       * Return:
       * - ImageItem — the image item
       *
       * Throws:
       * - Error — if the item is not an image item
       *
       * https://developers.google.com/apps-script/reference/forms/item#asImageItem()
       */
      asImageItem(): ImageItem;

      /**
       * Returns the item as a list item. Throws a scripting exception if the ItemType was not already LIST.
       *
       * Return:
       * - ListItem — the list item
       *
       * Throws:
       * - Error — if the item is not a list item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the item as a multiple-choice item. Throws a scripting exception if the ItemType was not already MULTIPLE_CHOICE.
       *
       * Return:
       * - MultipleChoiceItem — the multiple-choice item
       *
       * Throws:
       * - Error — if the item is not a multiple choice item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asMultipleChoiceItem()
       */
      asMultipleChoiceItem(): MultipleChoiceItem;

      /**
       * Returns the item as a page-break item. Throws a scripting exception if the ItemType was not already PAGE_BREAK.
       *
       * Return:
       * - PageBreakItem — the page-break item
       *
       * Throws:
       * - Error — if the item is not a page break item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asPageBreakItem()
       */
      asPageBreakItem(): PageBreakItem;

      /**
       * Returns the item as a paragraph-text item. Throws a scripting exception if the ItemType was not already PARAGRAPH_TEXT.
       *
       * Return:
       * - ParagraphTextItem — the paragraph-text item
       *
       * Throws:
       * - Error — if the item is not a paragraph text item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asParagraphTextItem()
       */
      asParagraphTextItem(): ParagraphTextItem;

      /**
       * Returns the item as a rating item. Throws a ScriptingException if the ItemType was not already RATING.
       *
       *     // Opens the Forms file by its URL. If you created your script from within a
       *     // Google Forms file, you can use FormApp.getActiveForm() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');
       *
       *     // Fetch any item which is of type rating.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0];
       *
       *     // Convert the item to a rating item.
       *     const ratingItem = item.asRatingItem();
       *
       * Return:
       * - RatingItem — The rating item.
       *
       * Throws:
       * - Error — if the item is not a rating item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asRatingItem()
       */
      asRatingItem(): RatingItem;

      /**
       * Returns the item as a scale item. Throws a scripting exception if the ItemType was not already SCALE.
       *
       * Return:
       * - ScaleItem — the scale item
       *
       * Throws:
       * - Error — if the item is not a scale item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asScaleItem()
       */
      asScaleItem(): ScaleItem;

      /**
       * Returns the item as a section-header item. Throws a scripting exception if the ItemType was not already SECTION_HEADER.
       *
       * Return:
       * - SectionHeaderItem — the section-header item
       *
       * Throws:
       * - Error — if the item is not a section header item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asSectionHeaderItem()
       */
      asSectionHeaderItem(): SectionHeaderItem;

      /**
       * Returns the item as a text item. Throws a scripting exception if the ItemType was not already TEXT.
       *
       * Return:
       * - TextItem — the text item
       *
       * Throws:
       * - Error — if the item is not a text item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asTextItem()
       */
      asTextItem(): TextItem;

      /**
       * Returns the item as a time item. Throws a scripting exception if the ItemType was not already TIME.
       *
       * Return:
       * - TimeItem — the time item
       *
       * Throws:
       * - Error — if the item is not a time item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#asTimeItem()
       */
      asTimeItem(): TimeItem;

      /**
       * Returns the item as a video item. Throws a scripting exception if the ItemType was not already VIDEO.
       *
       * Return:
       * - VideoItem — the video item
       *
       * Throws:
       * - Error — if the item is not a video item
       *
       * https://developers.google.com/apps-script/reference/forms/item#asVideoItem()
       */
      asVideoItem(): VideoItem;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - Item — a duplicate of this Item, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#duplicate()
       */
      duplicate(): Item;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - Item — this Item, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): Item;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - Item — this Item, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): Item;
    }
    /**
     * A response to one question item within a form. Item responses can be accessed from FormResponse and created from any Item that asks the respondent to answer a question.
     *
     *     // Open a form by ID and log the responses to each question.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const formResponses = form.getResponses();
     *     for (let i = 0; i < formResponses.length; i++) {
     *       const formResponse = formResponses[i];
     *       const itemResponses = formResponse.getItemResponses();
     *       for (let j = 0; j < itemResponses.length; j++) {
     *         const itemResponse = itemResponses[j];
     *         Logger.log(
     *             'Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse(),
     *         );
     *       }
     *     }
     */
    interface ItemResponse {

      /**
       * Gets the feedback that was given for the respondent's submitted answer.
       *
       * Return:
       * - Object — a QuizFeedback for the question item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#getFeedback()
       */
      getFeedback(): any;

      /**
       * Gets the question item that this response answers.
       *
       * Return:
       * - Item — the question item that this response answers
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#getItem()
       */
      getItem(): Item;

      /**
       * Gets the answer that the respondent submitted. For most types of question items, this returns a String.
       * For CheckboxItem questions, this returns a String[] array containing the responder's choices. The order of the strings in the array may vary.
       * For GridItem questions, this returns a String[] array in which the answer at index n corresponds to the question at row n + 1 in the grid. If a respondent did not answer a question in the grid, that answer is returned as ''.
       * For CheckboxGridItem questions, this returns a String[][] array in which the answers at row index n corresponds to the question at row n + 1 in the checkbox grid. If a respondent did not answer a question in the grid, that answer is returned as ''.
       *
       * Return:
       * - Object — a String or String[] or String[][] of answers to the question item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#getResponse()
       */
      getResponse(): any;

      /**
       * Gets the score for the respondent's submitted answer.
       *
       * Return:
       * - Object — a Double representing the score for the question item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#getScore()
       */
      getScore(): any;

      /**
       * Sets the feedback that should be displayed for the respondent's submitted answer.
       * This method does not actually save the feedback in Forms until Form.submitGrades(responses) is called with the updated FormResponses. See setScore() for an example.
       *
       * Return:
       * - ItemResponse — a ItemResponse for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#setFeedback(Object)
       * @param feedback
       */
      setFeedback(feedback: any): ItemResponse;

      /**
       * Sets the score for the respondent's submitted answer. A null value will clear the existing score.
       * This method does not actually save the score in Forms until Form.submitGrades(responses) is called with the updated FormResponses.
       *
       *     // For a multiple choice question with options: "Always true", "Sometimes true",
       *     // and "Never", award half credit for responses that answered "Sometimes true".
       *     const formResponses = FormApp.getActiveForm().getResponses();
       *     // Go through each form response
       *     for (let i = 0; i < formResponses.length; i++) {
       *       const response = formResponses[i];
       *       const items = FormApp.getActiveForm().getItems();
       *       // Assume it's the first item
       *       const item = items[0];
       *       const itemResponse = response.getGradableResponseForItem(item);
       *       // Give half credit for "Sometimes true".
       *       if (itemResponse != null && itemResponse.getResponse() === 'Sometimes true') {
       *         const points = item.asMultipleChoiceItem().getPoints();
       *         itemResponse.setScore(points * 0.5);
       *         // This saves the grade, but does not submit to Forms yet.
       *         response.withItemGrade(itemResponse);
       *       }
       *     }
       *     // Grades are actually submitted to Forms here.
       *     FormApp.getActiveForm().submitGrades(formResponses);
       *
       * Return:
       * - ItemResponse — a ItemResponse for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/item-response#setScore(Object)
       * @param score
       */
      setScore(score: any): ItemResponse;
    }
    /**
     * An enum representing the supported types of form items. Item types can be accessed from FormApp.ItemType.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.ItemType.CHECKBOX.
     *
     *     // Open a form by ID and add a new section header.
     *     const form = FormApp.create('Form Name');
     *     const item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     *
     *     // Check the item type.
     *     if (item.getType() === FormApp.ItemType.SECTION_HEADER) {
     *       item.setHelpText('Description of new section.');
     *     }
     */
    enum ItemType { CHECKBOX, CHECKBOX_GRID, DATE, DATETIME, DURATION, GRID, IMAGE, LIST, MULTIPLE_CHOICE, PAGE_BREAK, PARAGRAPH_TEXT, RATING, SCALE, SECTION_HEADER, TEXT, TIME, VIDEO, FILE_UPLOAD, UNSUPPORTED }
    /**
     * A question item that allows the respondent to select one choice from a drop-down list. Items can
     * be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new list item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?').setChoices([
     *       item.createChoice('Cats'), item.createChoice('Dogs')
     *     ]);
     */
    interface ListItem {

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new choice with a page-navigation option that jumps to a given page-break item. This is equivalent to createChoice(value, navigationType) with navigationType set to FormApp.PageNavigationType.GO_TO_PAGE. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.
       * The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,PageBreakItem)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationItem the item to navigate to
       */
      createChoice(value: string, navigationItem: PageBreakItem): Choice;

      /**
       * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.
       * The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,PageNavigationType)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationType the choice's navigation type
       */
      createChoice(value: string, navigationType: PageNavigationType): Choice;

      /**
       * Creates a new ItemResponse for this list item. Throws an exception if the response argument does not match a valid choice for this item.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#createResponse(String)
       * @param response a valid answer for this list item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - ListItem — a duplicate of this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#duplicate()
       */
      duplicate(): ListItem;

      /**
       * Gets all choices for an item.
       *
       * Return:
       * - Choice[] — an array of choices
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array is empty.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): ListItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or contains a null element.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoices([item.createChoice('Cats'), item.createChoice('Dogs')]);
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Throws:
       * - Error — if the given array is null, empty, or contains a null element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): ListItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false),
       *     ]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText('Dogs rule, cats drool.').build(),
       *     );
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): ListItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): ListItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ListItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ListItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - ListItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ListItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - ListItem — this ListItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/list-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ListItem;
    }
    /**
     * A question item that allows the respondent to select one choice from a list of radio buttons or
     * an optional "other" field. Items can be accessed or created from a Form. When used in a
     * quiz, these items are autograded.
     *
     *     // Open a form by ID and add a new multiple choice item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([item.createChoice('Cats'), item.createChoice('Dogs')])
     *         .showOtherOption(true);
     */
    interface MultipleChoiceItem {

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new choice with a page-navigation option that jumps to a given page-break item. This is equivalent to createChoice(value, navigationType) with navigationType set to FormApp.PageNavigationType.GO_TO_PAGE. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.
       * The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,PageBreakItem)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationItem the item to navigate to
       */
      createChoice(value: string, navigationItem: PageBreakItem): Choice;

      /**
       * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be combined in the same item with choices that do not use page navigation.
       * The page navigation occurs after the respondent completes a page that contains the option, and only if the respondent chose that option. If the respondent chose multiple options with page-navigation instructions on the same page, only the last navigation option has any effect. Page navigation also has no effect on the last page of a form.
       *
       * Return:
       * - Choice — the new choice
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,PageNavigationType)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationType the choice's navigation type
       */
      createChoice(value: string, navigationType: PageNavigationType): Choice;

      /**
       * Creates a new ItemResponse for this multiple-choice item. Throws an exception if the response argument does not match a valid choice for this item, unless showOtherOption(enabled) is set to true.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createResponse(String)
       * @param response a valid answer for this multiple-choice item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - MultipleChoiceItem — a duplicate of this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#duplicate()
       */
      duplicate(): MultipleChoiceItem;

      /**
       * Gets all choices for an item.
       *
       * Return:
       * - Choice[] — an array of choices
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the item has an "other" option.
       *
       * Return:
       * - Boolean — true if the item has an "other" option; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#hasOtherOption()
       */
      hasOtherOption(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array is empty.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): MultipleChoiceItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or contains a null element.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoices([item.createChoice('Cats'), item.createChoice('Dogs')]);
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Throws:
       * - Error — if the given array is null, empty, or contains a null element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): MultipleChoiceItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *     // Open a form by ID and add a new list item.
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false),
       *     ]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText('Dogs rule, cats drool.').build(),
       *     );
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): MultipleChoiceItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): MultipleChoiceItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): MultipleChoiceItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): MultipleChoiceItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - MultipleChoiceItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): MultipleChoiceItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): MultipleChoiceItem;

      /**
       * Sets whether the item has an "other" option. The default for a new CheckboxItem or MultipleChoiceItem is false.
       *
       * Return:
       * - MultipleChoiceItem — this MultipleChoiceItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#showOtherOption(Boolean)
       * @param enabled true if the item has an "other" option; false if not
       */
      showOtherOption(enabled: boolean): MultipleChoiceItem;
    }
    /**
     * A layout item that marks the start of a page. Items can be accessed or created from a Form.
     *
     *     // Create a form and add three page-break items.
     *     const form = FormApp.create('Form Name');
     *     const pageTwo = form.addPageBreakItem().setTitle('Page Two');
     *     const pageThree = form.addPageBreakItem().setTitle('Page Three');
     *
     *     // Make the first two pages navigate elsewhere upon completion.
     *     pageTwo.setGoToPage(
     *         pageThree);  // At end of page one (start of page two), jump to page three
     *     pageThree.setGoToPage(
     *         FormApp.PageNavigationType.RESTART);  // At end of page two, restart form
     */
    interface PageBreakItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - PageBreakItem — a duplicate of this PageBreakItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#duplicate()
       */
      duplicate(): PageBreakItem;

      /**
       * Gets the PageBreakItem that the form will jump to after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form).
       *
       * Return:
       * - PageBreakItem — the page break to jump to after completing the page before this page break, or null if none is set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getGoToPage()
       */
      getGoToPage(): PageBreakItem;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the type of page navigation that occurs after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form).
       *
       * Return:
       * - PageNavigationType — the navigation action to take after completing the page before this page break
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getPageNavigationType()
       */
      getPageNavigationType(): PageNavigationType;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the page to jump to after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form). If the previous page contained a MultipleChoiceItem or ListItem with a navigation option, that navigation overrules this navigation.
       *
       * Return:
       * - PageBreakItem — this PageBreakItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setGoToPage(PageBreakItem)
       * @param goToPageItem the page break to jump to after completing the page before this page break
       */
      setGoToPage(goToPageItem: PageBreakItem): PageBreakItem;

      /**
       * Sets the type of page navigation that occurs after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form). If the page contained a MultipleChoiceItem or ListItem with a navigation option, that navigation overrules this navigation.
       *
       * Return:
       * - PageBreakItem — this PageBreakItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setGoToPage(PageNavigationType)
       * @param navigationType the navigation action to take after completing the page before this page break
       */
      setGoToPage(navigationType: PageNavigationType): PageBreakItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - PageBreakItem — this PageBreakItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): PageBreakItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - PageBreakItem — this PageBreakItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): PageBreakItem;
    }
    /**
     * An enum representing the supported types of page navigation. Page navigation types can be
     * accessed from FormApp.PageNavigationType.
     *
     * The page navigation occurs after the respondent completes a page that contains the option, and
     * only if the respondent chose that option. If the respondent chose multiple options with
     * page-navigation instructions on the same page, only the last navigation option has any effect.
     * Page navigation also has no effect on the last page of a form.
     *
     * Choices that use page navigation cannot be combined in the same item with choices that do not
     * use page navigation.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.PageNavigationType.CONTINUE.
     *
     *     // Create a form and add a new multiple-choice item and a page-break item.
     *     const form = FormApp.create('Form Name');
     *     const item = form.addMultipleChoiceItem();
     *     const pageBreak = form.addPageBreakItem();
     *
     *     // Set some choices with go-to-page logic.
     *     const rightChoice = item.createChoice(
     *         'Vanilla',
     *         FormApp.PageNavigationType.SUBMIT,
     *     );
     *     const wrongChoice = item.createChoice(
     *         'Chocolate',
     *         FormApp.PageNavigationType.RESTART,
     *     );
     *
     *     // For GO_TO_PAGE, just pass in the page break item. For CONTINUE (normally the
     *     // default), pass in CONTINUE explicitly because page navigation cannot be mixed
     *     // with non-navigation choices.
     *     const iffyChoice = item.createChoice('Peanut', pageBreak);
     *     const otherChoice = item.createChoice(
     *         'Strawberry',
     *         FormApp.PageNavigationType.CONTINUE,
     *     );
     *     item.setChoices([rightChoice, wrongChoice, iffyChoice, otherChoice]);
     */
    enum PageNavigationType { CONTINUE, GO_TO_PAGE, RESTART, SUBMIT }
    /**
     * A question item that allows the respondent to enter a block of text. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new paragraph text item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addParagraphTextItem();
     *     item.setTitle('What is your address?');
     */
    interface ParagraphTextItem {

      /**
       * Removes any data validation for this paragraph text item.
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#clearValidation()
       */
      clearValidation(): ParagraphTextItem;

      /**
       * Creates a new ItemResponse for this paragraph text item.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#createResponse(String)
       * @param response an answer to the question posed by the item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - ParagraphTextItem — a duplicate of this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#duplicate()
       */
      duplicate(): ParagraphTextItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): ParagraphTextItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ParagraphTextItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ParagraphTextItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - ParagraphTextItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ParagraphTextItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ParagraphTextItem;

      /**
       * Sets the data validation for this paragraph text item. Passing in null or a ParagraphTextValidation instance on which no require functions have been called removes any prior validation.
       *
       * Return:
       * - ParagraphTextItem — this ParagraphTextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setValidation(ParagraphTextValidation)
       * @param validation a ParagraphTextValidation to apply to this item.
       */
      setValidation(validation: ParagraphTextValidation): ParagraphTextItem;
    }
    /**
     * A DataValidation for a ParagraphTextItem.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100
     *     // characters.
     *     const form = FormApp.create('My Form');
     *     const paragraphTextItem =
     *         form.addParagraphTextItem().setTitle('Describe yourself:');
     *     const paragraphtextValidation =
     *         FormApp.createParagraphTextValidation()
     *             .setHelpText('Answer must be more than 100 characters.')
     *             .requireTextLengthGreaterThanOrEqualTo(100)
     *             .build();
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    interface ParagraphTextValidation {
    }
    /**
     * A DataValidationBuilder for a ParagraphTextValidation.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100
     *     // characters.
     *     const form = FormApp.create('My Form');
     *     const paragraphTextItem =
     *         form.addParagraphTextItem().setTitle('Describe yourself:');
     *     const paragraphtextValidation =
     *         FormApp.createParagraphTextValidation()
     *             .setHelpText('Answer must be more than 100 characters.')
     *             .requireTextLengthGreaterThan(100);
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    interface ParagraphTextValidationBuilder {

      /**
       * Requires response to contain pattern.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextContainsPattern(String)
       * @param pattern text must contain pattern
       */
      requireTextContainsPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response to not contain pattern.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextDoesNotContainPattern(String)
       * @param pattern text must not contain pattern
       */
      requireTextDoesNotContainPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response to not match pattern.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextDoesNotMatchPattern(String)
       * @param pattern text must not match pattern
       */
      requireTextDoesNotMatchPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response length to be greater than or equal to value.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextLengthGreaterThanOrEqualTo(Integer)
       * @param number paragraph text length must be greater than this value
       */
      requireTextLengthGreaterThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;

      /**
       * Requires response length to be less than value.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextLengthLessThanOrEqualTo(Integer)
       * @param number paragraph text length must be less than or equal to this value
       */
      requireTextLengthLessThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;

      /**
       * Requires response to match pattern.
       *
       * Return:
       * - ParagraphTextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextMatchesPattern(String)
       * @param pattern text must match pattern
       */
      requireTextMatchesPattern(pattern: string): ParagraphTextValidationBuilder;
    }
    /**
     * The bean implementation of a Feedback, which contains properties common to all feedback, such as
     * display text or links.
     *
     * Feedback can be added to gradeable Form items.
     *
     *     // Setting feedback which should be automatically shown when a user responds to
     *     // a question incorrectly.
     *     const form = FormApp.create('My Form');
     *     const textItem = form.addTextItem().setTitle(
     *         'Re-hydrating dried fruit is an example of what?');
     *     const feedback =
     *         FormApp.createFeedback()
     *             .setDisplayText(
     *                 'Good answer, but not quite right.  Please review chapter 4 before next time.',
     *                 )
     *             .addLink('http://wikipedia.com/osmosis');
     *     textItem.setFeedbackForIncorrect(feedback);
     */
    interface QuizFeedback {

      /**
       * Gets a list of the URLs associated with the Feedback. These are displayed to the user as a list of helpful links.
       *
       * Return:
       * - String[] — a list of the URLs associated with the Feedback
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback#getLinkUrls()
       */
      getLinkUrls(): string[];

      /**
       * Gets the Feedback's display text. This text is shown to the user after they've submitted a response.
       *
       * Return:
       * - String — the Feedback's text
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback#getText()
       */
      getText(): string;
    }
    /**
     * The base FeedbackBuilder that contains setters for properties common to all feedback, such as
     * display text. Used to build Feedback objects.
     *
     *     // Open a form by ID and add a new list item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false),
     *     ]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(
     *         FormApp.createFeedback().setText('Dogs rule, cats drool.').build(),
     *     );
     */
    interface QuizFeedbackBuilder {

      /**
       * Adds a link to the feedback's supplemental material.
       *
       * Return:
       * - QuizFeedbackBuilder — this QuizFeedbackBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#addLink(String)
       * @param url the link to display under the display text
       */
      addLink(url: string): QuizFeedbackBuilder;

      /**
       * Adds a link to the feedback's supplemental material.
       *
       * Return:
       * - QuizFeedbackBuilder — this QuizFeedbackBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#addLink(String,String)
       * @param url the link to display under the display text
       * @param displayText the text to display for the link
       */
      addLink(url: string, displayText: string): QuizFeedbackBuilder;

      /**
       * Builds a Feedback of the corresponding type for this builder.
       *
       * Return:
       * - QuizFeedback — QuizFeedback
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#build()
       */
      build(): QuizFeedback;

      /**
       * Returns a copy of this builder.
       *
       * Return:
       * - QuizFeedbackBuilder — QuizFeedbackBuilder
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#copy()
       */
      copy(): QuizFeedbackBuilder;

      /**
       * Sets the feedback text.
       *
       * Return:
       * - QuizFeedbackBuilder — this QuizFeedbackBuilder, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#setText(String)
       * @param text the new text
       */
      setText(text: string): QuizFeedbackBuilder;
    }
    /**
     * An enum representing the supported types of rating icons.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * FormApp.RatingIconType.STAR.
     */
    enum RatingIconType { STAR, HEART, THUMB_UP }
    /**
     * A question item that allows the respondent to give a rating. Items can be accessed or created
     * from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *
     *     // Get an existing rating item and access its properties.
     *     const existingRatingItem = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
     *     const ratingScaleLevel = existingRatingItem.getRatingScaleLevel();
     *     const ratingIcon = existingRatingItem.getRatingIcon();
     *
     *     // Create a new rating item.
     *     const ratingItem = form.addRatingItem();
     *
     *     // Update the rating item's properties via chaining.
     *     ratingItem.setRatingScaleLevel(7).setRatingIcon(FormApp.RatingIconType.HEART);
     */
    interface RatingItem {

      /**
       * Creates a new ItemResponse for this rating item.
       * Throws a scripting exception if the provided response is less than 1 or greater than the value returned by getRatingScaleLevel().
       *
       *     // Open a form by ID
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Get an existing rating item and create a response for it.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
       *     const response =item.createResponse(5);
       *
       * Return:
       * - ItemResponse — The item response.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#createResponse(Integer)
       * @param response A value answer for this rating item.
       */
      createResponse(response: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - RatingItem — a duplicate of this RatingItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#duplicate()
       */
      duplicate(): RatingItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the icon chosen for the rating.
       *
       *     // Open a form by ID
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Get an existing rating item and get its rating icon.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
       *     const ratingIcon = item.getRatingIcon();
       *
       * Return:
       * - RatingIconType — The rating icon type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getRatingIcon()
       */
      getRatingIcon(): RatingIconType;

      /**
       * Gets the rating's scale level.
       *
       *     // Open a form by ID
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Get an existing rating item and get its rating scale level.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
       *     const ratingScaleLevel = item.getRatingScaleLevel();
       *
       * Return:
       * - Integer — The rating scale level.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getRatingScaleLevel()
       */
      getRatingScaleLevel(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - RatingItem — this RatingItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): RatingItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - RatingItem — this RatingItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): RatingItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - RatingItem — this RatingItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): RatingItem;

      /**
       * Sets the rating's icon.
       * Throws a scripting exception if the rating icon type is invalid.
       *
       *     // Open a form by ID
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Get an existing rating item and set its rating icon.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
       *     item.setRatingIcon(FormApp.RatingIconType.THUMB_UP);
       *
       * Return:
       * - RatingItem — This RatingItem, for chaining.
       *
       * Throws:
       * - Error — if the rating icon type is invalid
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setRatingIcon(RatingIconType)
       * @param ratingIcon The rating icon type.
       */
      setRatingIcon(ratingIcon: RatingIconType): RatingItem;

      /**
       * Sets the rating's maximum scale level. The rating's maximum scale level must be between 3 and 10, inclusive. A new rating defaults to a rating scale level of 3.
       * Throws a scripting exception if the given values are outside the permitted limits.
       *
       *     // Open a form by ID
       *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Get an existing rating item and set its rating scale level.
       *     const item = form.getItems(FormApp.ItemType.RATING)[0].asRatingItem();
       *     item.setRatingScaleLevel(7);
       *
       * Return:
       * - RatingItem — This RatingItem, for chaining.
       *
       * Throws:
       * - Error — if the rating scale level is invalid
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setRatingScaleLevel(Integer)
       * @param ratingScaleLevel The rating scale level.
       */
      setRatingScaleLevel(ratingScaleLevel: Integer): RatingItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - RatingItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): RatingItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - RatingItem — this RatingItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/rating-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): RatingItem;
    }
    /**
     * A question item that allows the respondent to choose one option from a numbered sequence of radio
     * buttons. Items can be accessed or created from a Form. When used in a quiz, these items
     * are graded.
     *
     *     // Open a form by ID and add a new scale item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addScaleItem();
     *     item.setTitle('Pick a number between 1 and 10').setBounds(1, 10);
     */
    interface ScaleItem {

      /**
       * Creates a new ItemResponse for this scale item. Throws an exception if the response argument is outside the bounds set for the item.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#createResponse(Integer)
       * @param response a value answer for this scale item
       */
      createResponse(response: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - ScaleItem — a duplicate of this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#duplicate()
       */
      duplicate(): ScaleItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the label for the scale's lower bound, if any.
       *
       * Return:
       * - String — the label for the scale's lower bound
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getLeftLabel()
       */
      getLeftLabel(): string;

      /**
       * Gets the scale's lower bound.
       *
       * Return:
       * - Integer — the scale's lower bound
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getLowerBound()
       */
      getLowerBound(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the label for the scale's upper bound, if any.
       *
       * Return:
       * - String — the label for the scale's upper bound
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getRightLabel()
       */
      getRightLabel(): string;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the scale's upper bound.
       *
       * Return:
       * - Integer — the scale's upper bound
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#getUpperBound()
       */
      getUpperBound(): Integer;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the scale's lower and upper bounds. The lower bound must be 0 or 1. The upper bound must be between 3 and 10, inclusive. A new scale defaults to a lower bound of 1 and an upper bound of 5.
       * Throws a scripting exception if the given values are outside the permitted limits. Decimals are truncated to the preceding integer.
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Throws:
       * - Error — if the lower or upper bound is invalid
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setBounds(Integer,Integer)
       * @param lower the new lower bound
       * @param upper the new upper bound
       */
      setBounds(lower: Integer, upper: Integer): ScaleItem;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): ScaleItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ScaleItem;

      /**
       * Sets labels for the scale's lower and upper bounds.
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setLabels(String,String)
       * @param lower the new label for the lower bound
       * @param upper the new label for the upper bound
       */
      setLabels(lower: string, upper: string): ScaleItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ScaleItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - ScaleItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ScaleItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - ScaleItem — this ScaleItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/scale-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ScaleItem;
    }
    /**
     * A layout item that visually indicates the start of a section. Items can be accessed or created
     * from a Form.
     *
     *     // Open a form by ID and add a new section header.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     */
    interface SectionHeaderItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - SectionHeaderItem — a duplicate of this SectionHeaderItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#duplicate()
       */
      duplicate(): SectionHeaderItem;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - SectionHeaderItem — this SectionHeaderItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): SectionHeaderItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - SectionHeaderItem — this SectionHeaderItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/section-header-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): SectionHeaderItem;
    }
    /**
     * A question item that allows the respondent to enter a single line of text. Items can be accessed
     * or created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new text item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addTextItem();
     *     item.setTitle('What is your name?');
     */
    interface TextItem {

      /**
       * Removes any data validation for this text item.
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#clearValidation()
       */
      clearValidation(): TextItem;

      /**
       * Creates a new ItemResponse for this text item.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#createResponse(String)
       * @param response an answer to the question posed by the item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - TextItem — a duplicate of this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#duplicate()
       */
      duplicate(): TextItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): TextItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): TextItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): TextItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - TextItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): TextItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): TextItem;

      /**
       * Sets the data validation for this text item. Passing in null or a validation without any require functions called will remove any prior validation.
       *
       * Return:
       * - TextItem — this TextItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/text-item#setValidation(TextValidation)
       * @param validation a TextValidation to apply to this item.
       */
      setValidation(validation: TextValidation): TextItem;
    }
    /**
     * A DataValidation for a TextItem.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     const form = FormApp.create('My form');
     *     const textItem =
     *         form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     const textValidation =
     *         FormApp.createTextValidation()
     *             .setHelpText('Input was not a number between 1 and 100.')
     *             .requireNumberBetween(1, 100)
     *             .build();
     *     textItem.setValidation(textValidation);
     */
    interface TextValidation {
    }
    /**
     * A DataValidationBuilder for a TextValidation.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     const form = FormApp.create('My form');
     *     const textItem =
     *         form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     const textValidation =
     *         FormApp.createTextValidation()
     *             .setHelpText('Input was not a number between 1 and 100.')
     *             .requireNumberBetween(1, 100)
     *             .build();
     *     textItem.setValidation(textValidation);
     */
    interface TextValidationBuilder {

      /**
       * Requires text item to be a number.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumber()
       */
      requireNumber(): TextValidationBuilder;

      /**
       * Requires text item to be a number between start and end, inclusive.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberBetween(Number,Number)
       * @param start the lower bounds of the inclusive range
       * @param end the upper bounds of the inclusive range
       */
      requireNumberBetween(start: number, end: number): TextValidationBuilder;

      /**
       * Requires text item to be a number equal to value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberEqualTo(Number)
       * @param number the value which the item must be equal to.
       */
      requireNumberEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number greater than the value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberGreaterThan(Number)
       * @param number the value which the item must be greater than.
       */
      requireNumberGreaterThan(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number greater than or equal to the value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberGreaterThanOrEqualTo(Number)
       * @param number the value which the item must be greater than or equal to.
       */
      requireNumberGreaterThanOrEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number less than the value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberLessThan(Number)
       * @param number the value which the item must be greater than.
       */
      requireNumberLessThan(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number less than or equal to the value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberLessThanOrEqualTo(Number)
       * @param number the value which the item must be less than or equal to.
       */
      requireNumberLessThanOrEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number not between start and end, inclusive.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberNotBetween(Number,Number)
       * @param start the lower bounds of the inclusive range
       * @param end the upper bounds of the inclusive range
       */
      requireNumberNotBetween(start: number, end: number): TextValidationBuilder;

      /**
       * Requires text item to be a number not equal to the value specified.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberNotEqualTo(Number)
       * @param number the value which the item must not be equal to.
       */
      requireNumberNotEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires response to contain pattern.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextContainsPattern(String)
       * @param pattern text must contain pattern
       */
      requireTextContainsPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires response to not contain pattern.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextDoesNotContainPattern(String)
       * @param pattern text must not contain pattern
       */
      requireTextDoesNotContainPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires response to not match pattern.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextDoesNotMatchPattern(String)
       * @param pattern text must not match pattern
       */
      requireTextDoesNotMatchPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires text item to be an email address.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextIsEmail()
       */
      requireTextIsEmail(): TextValidationBuilder;

      /**
       * Requires text item to be a URL.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextIsUrl()
       */
      requireTextIsUrl(): TextValidationBuilder;

      /**
       * Requires response length to be greater than or equal to value.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextLengthGreaterThanOrEqualTo(Integer)
       * @param number paragraph text length must be greater than this value
       */
      requireTextLengthGreaterThanOrEqualTo(number: Integer): TextValidationBuilder;

      /**
       * Requires response length to be less than value.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextLengthLessThanOrEqualTo(Integer)
       * @param number paragraph text length must be less than or equal to this value
       */
      requireTextLengthLessThanOrEqualTo(number: Integer): TextValidationBuilder;

      /**
       * Requires response to match pattern.
       *
       * Return:
       * - TextValidationBuilder — this for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextMatchesPattern(String)
       * @param pattern text must match pattern
       */
      requireTextMatchesPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires text item to be a whole number.
       *
       * Return:
       * - TextValidationBuilder — this TextValidation, for chaining
       *
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireWholeNumber()
       */
      requireWholeNumber(): TextValidationBuilder;
    }
    /**
     * A question item that allows the respondent to indicate a time of day. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new time item.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const item = form.addTimeItem();
     *     item.setTitle('What time do you usually wake up in the morning?');
     */
    interface TimeItem {

      /**
       * Creates a new ItemResponse for this time item. The arguments hour and minute are best represented as integers from 0 to 23 and from 0 to 59, respectively. If they exceed those bounds, they behave as a clock would: for example, 10, 90 is interpreted as 11:30, and -1, 60 is interpreted as 00:00.
       *
       * Return:
       * - ItemResponse — the item response
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#createResponse(Integer,Integer)
       * @param hour the hour, represented as an integer from 0 to 23
       * @param minute the minute of the hour, represented as an integer from 0 to 59
       */
      createResponse(hour: Integer, minute: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - TimeItem — a duplicate of this TimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#duplicate()
       */
      duplicate(): TimeItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       *
       * Return:
       * - QuizFeedback — the feedback, if any.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       *
       * Return:
       * - Integer — the number of points a question is worth.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       *
       * Return:
       * - Boolean — whether the respondent must answer the question
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that doesn't have a correct or incorrect answer (ie questions that require manual grading).
       *
       * Return:
       * - TimeItem — this TimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): TimeItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - TimeItem — this TimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): TimeItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       *
       * Return:
       * - TimeItem — this TimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): TimeItem;

      /**
       * Sets whether the respondent must answer the question.
       *
       * Return:
       * - TimeItem — the current item (for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): TimeItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - TimeItem — this TimeItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/time-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): TimeItem;
    }
    /**
     * A layout item that displays a video. Items can be accessed or created from a Form.
     *
     *     // Open a form by ID and add three new video items, using a long URL,
     *     // a short URL, and a video ID.
     *     const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('www.youtube.com/watch?v=1234abcdxyz');
     *
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('youtu.be/1234abcdxyz');
     *
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('1234abcdxyz');
     */
    interface VideoItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       *
       * Return:
       * - VideoItem — a duplicate of this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#duplicate()
       */
      duplicate(): VideoItem;

      /**
       * Gets the video's horizontal alignment.
       *
       * Return:
       * - Alignment — the horizontal alignment
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getAlignment()
       */
      getAlignment(): Alignment;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - String — the item's help text or description text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       *
       * Return:
       * - Integer — the item's ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       *
       * Return:
       * - Integer — the index of the item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - String — the item's title or header text
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       *
       * Return:
       * - ItemType — the item's type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the video's width in pixels.
       *
       * Return:
       * - Integer — the width in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the video's horizontal alignment.
       *
       * Return:
       * - VideoItem — this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#setAlignment(Alignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: Alignment): VideoItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       *
       * Return:
       * - VideoItem — this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): VideoItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       *
       * Return:
       * - VideoItem — this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): VideoItem;

      /**
       * Sets the video itself from a given YouTube URL or YouTube video ID.
       *
       * Return:
       * - VideoItem — this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#setVideoUrl(String)
       * @param youtubeUrl the YouTube URL or ID
       */
      setVideoUrl(youtubeUrl: string): VideoItem;

      /**
       * Sets the video's width in pixels. Only the video's width can be set. Height is set automatically to maintain the video's proportions.
       *
       * Return:
       * - VideoItem — this VideoItem, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/forms.currentonly
       * - https://www.googleapis.com/auth/forms
       *
       * https://developers.google.com/apps-script/reference/forms/video-item#setWidth(Integer)
       * @param width the width in pixels
       */
      setWidth(width: Integer): VideoItem;
    }
  }
}

declare var FormApp: GoogleAppsScript.Forms.FormApp;
