// Type definitions for Google Apps Script 2020-01-26
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
     *     // Open a form by ID and add a new image item with alignment
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem()
     *         .setImage(img)
     *         .setAlignment(FormApp.Alignment.CENTER);
     */
    enum Alignment { LEFT, CENTER, RIGHT }
    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     * multiple choices per row from a sequence of checkboxes. Items can be accessed or created from a
     * Form.
     *
     *     // Open a form by ID and add a new checkgox grid item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addCheckboxGridItem();
     *     item.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     */
    interface CheckboxGridItem {

      /**
       * Removes any data validation for this grid item.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#clearValidation()
       */
      clearValidation(): CheckboxGridItem;

      /**
       * Creates a new ItemResponse for this checkbox grid item. The argument responses
       * must be a String[][] array of arrays containing as many values as the number of inputs
       * in the checkbox grid. A null element for a non-required checkbox grid question
       * indicates no response to that row. Throws an exception if any of the values does not match a
       * valid choice.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#createResponse(String)
       * @param responses an array of arrays of valid answers for this checkbox grid item
       */
      createResponse(responses: string[][]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#duplicate()
       */
      duplicate(): CheckboxGridItem;

      /**
       * Gets the values for every column in the grid.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getColumns()
       */
      getColumns(): string[];

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the values for every row in the grid.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getRows()
       */
      getRows(): string[];

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the columns of the grid based on an array of values. Throws an exception if the given
       * array is empty.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setColumns(String)
       * @param columns an array of column values, which respondents see as labels when viewing the form
       */
      setColumns(columns: string[]): CheckboxGridItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): CheckboxGridItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): CheckboxGridItem;

      /**
       * Sets the rows of the grid based on an array of values. Throws an exception if the given array
       * is empty.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setRows(String)
       * @param rows an array of row values, which respondents see as labels when viewing the form
       */
      setRows(rows: string[]): CheckboxGridItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): CheckboxGridItem;

      /**
       * Sets the data validation for this checkbox grid item. Passing in null or a validation without
       * any require functions called will remove any prior validation.
       * https://developers.google.com/apps-script/reference/forms/checkbox-grid-item#setValidation(CheckboxGridValidation)
       * @param validation a CheckboxGridValidation to apply to this item.
       */
      setValidation(validation: CheckboxGridValidation): CheckboxGridItem;
    }
    /**
     * A DataValidation for a CheckboxGridItem.
     *
     *     // Add a checkbox grid item to a form and require one response per column.
     *     var checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     *     var checkboxGridValidation = FormApp.createCheckboxGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    interface CheckboxGridValidation {
    }
    /**
     * A DataValidationBuilder for a CheckboxGridValidation.
     *
     *     // Add a checkbox grid item to a form and restrict it to one response per column.
     *     var checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     *     var checkboxGridValidation = FormApp.createcheckboxGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    interface CheckboxGridValidationBuilder {

      /**
       * Requires limit of one response per column for a grid item.
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addCheckboxItem();
     *     item.setTitle('What condiments would you like on your hot dog?')
     *         .setChoices([
     *               item.createChoice('Ketchup'),
     *               item.createChoice('Mustard'),
     *               item.createChoice('Relish')
     *         ])
     *         .showOtherOption(true);
     */
    interface CheckboxItem {

      /**
       * Removes any data validation for this checkbox item.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#clearValidation()
       */
      clearValidation(): CheckboxItem;

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new ItemResponse for this checkbox item. The argument responses is a
       * String[] array containing values that need to be checked. Throws an exception if any
       * value does not match a valid choice for this item, unless showOtherOption(enabled) is set to true.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#createResponse(String)
       * @param responses an array of valid answers for this multiple-choice item
       */
      createResponse(responses: string[]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#duplicate()
       */
      duplicate(): CheckboxItem;

      /**
       * Gets all choices for an item.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the item has an "other" option.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#hasOtherOption()
       */
      hasOtherOption(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array
       * is empty.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): CheckboxItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or
       * contains a null element.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?')
       *     item.setChoices([
       *         item.createChoice('Cats'),
       *         item.createChoice('Dogs')
       *     ]);
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): CheckboxItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false)]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): CheckboxItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): CheckboxItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): CheckboxItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): CheckboxItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): CheckboxItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): CheckboxItem;

      /**
       * Sets the data validation for this checkbox item. Passing in null or a validation without any
       * require functions called will remove any prior validation.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#setValidation(CheckboxValidation)
       * @param validation a CheckboxValidation to apply to this item.
       */
      setValidation(validation: CheckboxValidation): CheckboxItem;

      /**
       * Sets whether the item has an "other" option. The default for a new CheckboxItem or
       * MultipleChoiceItem is false.
       * https://developers.google.com/apps-script/reference/forms/checkbox-item#showOtherOption(Boolean)
       * @param enabled true if the item has an "other" option; false if not
       */
      showOtherOption(enabled: boolean): CheckboxItem;
    }
    /**
     * A DataValidation for a CheckboxItem.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     var checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish')
     *     ]);
     *     var checkBoxValidation = FormApp.createCheckboxValidation()
     *       .setHelpText(“Select two condiments.”)
     *       .requireSelectExactly(2)
     *       .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidation {
    }
    /**
     * A DataValidationBuilder for a CheckboxValidation.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     var checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish')
     *     ]);
     *     var checkBoxValidation = FormApp.createCheckboxValidation()
     *       .setHelpText(“Select two condiments.”)
     *       .requireSelectExactly(2)
     *       .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidationBuilder {

      /**
       * Require at least this many choices to be selected.
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectAtLeast(Integer)
       * @param number
       */
      requireSelectAtLeast(number: Integer): CheckboxValidationBuilder;

      /**
       * Require at most this many choices to be selected.
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectAtMost(Integer)
       * @param number
       */
      requireSelectAtMost(number: Integer): CheckboxValidationBuilder;

      /**
       * Require exactly this many choices to be selected.
       * https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder#requireSelectExactly(Integer)
       * @param number
       */
      requireSelectExactly(number: Integer): CheckboxValidationBuilder;
    }
    /**
     * A single choice associated with a type of Item that supports choices, like CheckboxItem, ListItem, or MultipleChoiceItem.
     *
     *     // Create a new form and add a multiple-choice item.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats', FormApp.PageNavigationType.CONTINUE),
     *             item.createChoice('Dogs', FormApp.PageNavigationType.RESTART)
     *         ]);
     *
     *     // Add another page because navigation has no effect on the last page.
     *     form.addPageBreakItem().setTitle('You chose well!');
     *
     *     // Log the navigation types that each choice results in.
     *     var choices = item.getChoices();
     *     for (var i = 0; i < choices.length; i++) {
     *     Logger.log('If the respondent chooses "%s", the form will %s.',
     *                choices[i].getValue(),
     *                choices[i].getPageNavigationType());
     *     }
     */
    interface Choice {

      /**
       * Gets the PageBreakItem set as a GO_TO_PAGE destination
       * if the responder selects this choice and completes the current page. This method applies only
       * to choices associated with MultipleChoiceItems; for other choices,
       * it returns null.
       * https://developers.google.com/apps-script/reference/forms/choice#getGotoPage()
       */
      getGotoPage(): PageBreakItem;

      /**
       * Gets the PageNavigationType that occurs if the responder selects this choice and
       * completes the current page. This method applies only to choices associated with MultipleChoiceItems; for other choices, it returns null.
       * https://developers.google.com/apps-script/reference/forms/choice#getPageNavigationType()
       */
      getPageNavigationType(): PageNavigationType;

      /**
       * Gets the choice's value, which respondents see as a label when viewing the form.
       * https://developers.google.com/apps-script/reference/forms/choice#getValue()
       */
      getValue(): string;

      /**
       * Gets whether the choice is a correct answer for the question. This method only applies to
       * questions that are part of a quiz; for non-quiz forms, it returns false.
       * https://developers.google.com/apps-script/reference/forms/choice#isCorrectAnswer()
       */
      isCorrectAnswer(): boolean;
    }
    /**
     * A question item that allows the respondent to indicate a date. Items can be accessed or created
     * from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new date item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDateItem();
     *     item.setTitle('When were you born?');
     */
    interface DateItem {

      /**
       * Creates a new ItemResponse for this date item. The time fields of the Date
       * object are ignored; by default, only the year, month, and day fields are used. If setIncludesYear(enabled) is set to false, the year is
       * ignored as well.
       * https://developers.google.com/apps-script/reference/forms/date-item#createResponse(Date)
       * @param response a Date object that represents a month, day, and possibly year
       */
      createResponse(response: Date): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/date-item#duplicate()
       */
      duplicate(): DateItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/date-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/date-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/date-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/date-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/date-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/date-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/date-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the date item includes a year option.
       * https://developers.google.com/apps-script/reference/forms/date-item#includesYear()
       */
      includesYear(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/date-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/date-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DateItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/date-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DateItem;

      /**
       * Sets whether the date item includes a year setting. The default for new date items is true.
       * https://developers.google.com/apps-script/reference/forms/date-item#setIncludesYear(Boolean)
       * @param enableYear true if the date includes a year setting; false if not
       */
      setIncludesYear(enableYear: boolean): DateItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/date-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DateItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/date-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DateItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDateTimeItem();
     *     item.setTitle('When do you want to meet?');
     */
    interface DateTimeItem {

      /**
       * Creates a new ItemResponse for this date-time item. The seconds field of the Date object is ignored; by default, the year, month, day, hour, and minute fields are used. If
       * setIncludesYear(enabled) is set to false, the year is
       * ignored as well.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#createResponse(Date)
       * @param response a Date object that represents a month, day, hour, minute, and possibly year
       */
      createResponse(response: Date): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#duplicate()
       */
      duplicate(): DateTimeItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the date item includes a year option.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#includesYear()
       */
      includesYear(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DateTimeItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DateTimeItem;

      /**
       * Sets whether the date item includes a year setting. The default for new date items is true.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setIncludesYear(Boolean)
       * @param enableYear true if the date includes a year setting; false if not
       */
      setIncludesYear(enableYear: boolean): DateTimeItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DateTimeItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/date-time-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DateTimeItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     // Open a form by ID and create a new spreadsheet.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var ss = SpreadsheetApp.create('Spreadsheet Name');
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDurationItem();
     *     item.setTitle('How long can you hold your breath?');
     */
    interface DurationItem {

      /**
       * Creates a new ItemResponse for this date item. The arguments hours, minutes, and seconds are best represented as integers from 0 to 72 for
       * hours and 0 to 59 for minutes and seconds. Values that
       * exceed those bounds are clamped: for example, 24, 60, 90 is interpreted as 24:59:59.
       * https://developers.google.com/apps-script/reference/forms/duration-item#createResponse(Integer,Integer,Integer)
       * @param hours the hours, represented as an integer from 0 to 72
       * @param minutes the minutes, represented as an integer from 0 to 59
       * @param seconds the seconds, represented as an integer from 0 to 59
       */
      createResponse(hours: Integer, minutes: Integer, seconds: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/duration-item#duplicate()
       */
      duplicate(): DurationItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/duration-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/duration-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/duration-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/duration-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/duration-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/duration-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/duration-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/duration-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/duration-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): DurationItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/duration-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): DurationItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/duration-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): DurationItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/duration-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): DurationItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/duration-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): DurationItem;
    }
    /**
     * An enum representing the supported types of feedback. Feedback types can be accessed from FormApp.FeedbackType.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     // Set "Dogs" as the correct answer to this question.
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false)]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(
     *         FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
     */
    enum FeedbackType { CORRECT, INCORRECT, GENERAL }
    /**
     * A form that contains overall properties and items. Properties include title, settings, and where
     * responses are stored. Items include question items like checkboxes or radio items, while layout
     * items refer to things like page breaks. Forms can be accessed or created from FormApp.
     *
     *     // Open a form by ID and create a new spreadsheet.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var ss = SpreadsheetApp.create('Spreadsheet Name');
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
       * Appends a new question item, presented as a grid of columns and rows, that allows the
       * respondent to select multiple choices per row from a sequence of checkboxes.
       * https://developers.google.com/apps-script/reference/forms/form#addCheckboxGridItem()
       */
      addCheckboxGridItem(): CheckboxGridItem;

      /**
       * Appends a new question item that allows the respondent to select one or more checkboxes, as
       * well as an optional "other" field.
       * https://developers.google.com/apps-script/reference/forms/form#addCheckboxItem()
       */
      addCheckboxItem(): CheckboxItem;

      /**
       * Appends a new question item that allows the respondent to indicate a date.
       * https://developers.google.com/apps-script/reference/forms/form#addDateItem()
       */
      addDateItem(): DateItem;

      /**
       * Appends a new question item that allows the respondent to indicate a date and time.
       * https://developers.google.com/apps-script/reference/forms/form#addDateTimeItem()
       */
      addDateTimeItem(): DateTimeItem;

      /**
       * Appends a new question item that allows the respondent to indicate a length of time.
       * https://developers.google.com/apps-script/reference/forms/form#addDurationItem()
       */
      addDurationItem(): DurationItem;

      /**
       * Adds the given user to the list of editors for the Form. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/forms/form#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Form;

      /**
       * Adds the given user to the list of editors for the Form. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/forms/form#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Form;

      /**
       * Adds the given array of users to the list of editors for the Form. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/forms/form#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Form;

      /**
       * Appends a new question item, presented as a grid of columns and rows, that allows the
       * respondent to select one choice per row from a sequence of radio buttons.
       * https://developers.google.com/apps-script/reference/forms/form#addGridItem()
       */
      addGridItem(): GridItem;

      /**
       * Appends a new layout item that displays an image.
       * https://developers.google.com/apps-script/reference/forms/form#addImageItem()
       */
      addImageItem(): ImageItem;

      /**
       * Appends a new question item that allows the respondent to select one choice from a drop-down
       * list.
       * https://developers.google.com/apps-script/reference/forms/form#addListItem()
       */
      addListItem(): ListItem;

      /**
       * Appends a new question item that allows the respondent to select one choice from a list of
       * radio buttons or an optional "other" field.
       * https://developers.google.com/apps-script/reference/forms/form#addMultipleChoiceItem()
       */
      addMultipleChoiceItem(): MultipleChoiceItem;

      /**
       * Appends a new layout item that marks the start of a page.
       * https://developers.google.com/apps-script/reference/forms/form#addPageBreakItem()
       */
      addPageBreakItem(): PageBreakItem;

      /**
       * Appends a new question item that allows the respondent to enter a block of text.
       * https://developers.google.com/apps-script/reference/forms/form#addParagraphTextItem()
       */
      addParagraphTextItem(): ParagraphTextItem;

      /**
       * Appends a new question item that allows the respondent to choose one option from a numbered
       * sequence of radio buttons.
       * https://developers.google.com/apps-script/reference/forms/form#addScaleItem()
       */
      addScaleItem(): ScaleItem;

      /**
       * Appends a new layout item that visually indicates the start of a section.
       * https://developers.google.com/apps-script/reference/forms/form#addSectionHeaderItem()
       */
      addSectionHeaderItem(): SectionHeaderItem;

      /**
       * Appends a new question item that allows the respondent to enter a single line of text.
       * https://developers.google.com/apps-script/reference/forms/form#addTextItem()
       */
      addTextItem(): TextItem;

      /**
       * Appends a new question item that allows the respondent to indicate a time of day.
       * https://developers.google.com/apps-script/reference/forms/form#addTimeItem()
       */
      addTimeItem(): TimeItem;

      /**
       * Appends a new layout item that displays a video.
       * https://developers.google.com/apps-script/reference/forms/form#addVideoItem()
       */
      addVideoItem(): VideoItem;

      /**
       * Determines whether the form displays a link to edit a response after submitting it.
       *
       *
       * Regardless of this setting, the method FormResponse.getEditResponseUrl() allows a
       * script author who has edit access to the form to generate a URL that can be used to edit a
       * response.
       * https://developers.google.com/apps-script/reference/forms/form#canEditResponse()
       */
      canEditResponse(): boolean;

      /**
       * Determines whether the form collects respondents' email addresses.
       * https://developers.google.com/apps-script/reference/forms/form#collectsEmail()
       */
      collectsEmail(): boolean;

      /**
       * Creates a new response to the form. To answer a question item, create an ItemResponse
       * from the item, then attach it to this form response by calling FormResponse.withItemResponse(response). To save the assembled response, call FormResponse.submit().
       * https://developers.google.com/apps-script/reference/forms/form#createResponse()
       */
      createResponse(): FormResponse;

      /**
       * Deletes all submitted responses from the form's response store. This method does not delete
       * copies of responses stored in an external response destination (like a spreadsheet), but does
       * clear the form's summary view.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteAllResponses()
       */
      deleteAllResponses(): Form;

      /**
       * Deletes the item at a given index among all the items in the form. Throws a scripting exception
       * if no item exists at the given index.
       * https://developers.google.com/apps-script/reference/forms/form#deleteItem(Integer)
       * @param index the index of the item among all the items in the form
       */
      deleteItem(index: Integer): void;

      /**
       * Deletes the given item. Throws a scripting exception if the item has already been deleted.
       * https://developers.google.com/apps-script/reference/forms/form#deleteItem(Item)
       * @param item the item to be deleted
       */
      deleteItem(item: Item): void;

      /**
       * Deletes a single response from the form's response store. This method does not delete copies of
       * responses stored in an external response destination (like a spreadsheet), but does remove the
       * response from the form's summary view. The response ID can be retrieved with FormResponse.getId().
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/forms/form#deleteResponse(String)
       * @param responseId the ID of the form response to delete
       */
      deleteResponse(responseId: string): Form;

      /**
       * Gets the form's confirmation message.
       * https://developers.google.com/apps-script/reference/forms/form#getConfirmationMessage()
       */
      getConfirmationMessage(): string;

      /**
       * Gets the custom message that will be displayed if the form is not accepting responses, or an
       * empty string if no custom message has been set.
       * https://developers.google.com/apps-script/reference/forms/form#getCustomClosedFormMessage()
       */
      getCustomClosedFormMessage(): string;

      /**
       * Gets the form's description.
       * https://developers.google.com/apps-script/reference/forms/form#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the ID of the form's response destination.
       * https://developers.google.com/apps-script/reference/forms/form#getDestinationId()
       */
      getDestinationId(): string;

      /**
       * Gets the type of the form's response destination.
       * https://developers.google.com/apps-script/reference/forms/form#getDestinationType()
       */
      getDestinationType(): DestinationType;

      /**
       * Gets the URL that can be used to access the form's edit mode.
       * https://developers.google.com/apps-script/reference/forms/form#getEditUrl()
       */
      getEditUrl(): string;

      /**
       * Gets the list of editors for this Form.
       * https://developers.google.com/apps-script/reference/forms/form#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Gets the ID of the form.
       * https://developers.google.com/apps-script/reference/forms/form#getId()
       */
      getId(): string;

      /**
       * Gets the item with a given ID. Returns null if the ID does not correspond to an item in
       * the form.
       * https://developers.google.com/apps-script/reference/forms/form#getItemById(Integer)
       * @param id the item's ID
       */
      getItemById(id: Integer): Item;

      /**
       * Gets an array of all items in the form.
       * https://developers.google.com/apps-script/reference/forms/form#getItems()
       */
      getItems(): Item[];

      /**
       * Gets an array of all items of a given type.
       * https://developers.google.com/apps-script/reference/forms/form#getItems(ItemType)
       * @param itemType the type of items to retrieve
       */
      getItems(itemType: ItemType): Item[];

      /**
       * Gets the URL that can be used to respond to the form.
       * https://developers.google.com/apps-script/reference/forms/form#getPublishedUrl()
       */
      getPublishedUrl(): string;

      /**
       * Gets a single form response based on its response ID. Response IDs can be retrieved from FormResponse.getId().
       * https://developers.google.com/apps-script/reference/forms/form#getResponse(String)
       * @param responseId the ID for the form response
       */
      getResponse(responseId: string): FormResponse;

      /**
       * Gets an array of all of the form's responses.
       * https://developers.google.com/apps-script/reference/forms/form#getResponses()
       */
      getResponses(): FormResponse[];

      /**
       * Gets an array of all of the form's responses after a given date and time.
       * https://developers.google.com/apps-script/reference/forms/form#getResponses(Date)
       * @param timestamp the earliest date and time for which form responses should be returned
       */
      getResponses(timestamp: Date): FormResponse[];

      /**
       * Determines whether the order of the questions on each page of the form is randomized.
       * https://developers.google.com/apps-script/reference/forms/form#getShuffleQuestions()
       */
      getShuffleQuestions(): boolean;

      /**
       * Gets the URL that can be used to view a summary of the form's responses. Unless setPublishingSummary(enabled) is set to true, only users with edit permission to the form
       * will be able to access the URL.
       * https://developers.google.com/apps-script/reference/forms/form#getSummaryUrl()
       */
      getSummaryUrl(): string;

      /**
       * Gets the form's title.
       * https://developers.google.com/apps-script/reference/forms/form#getTitle()
       */
      getTitle(): string;

      /**
       * Determines whether the form allows only one response per respondent. If the value is true, the script cannot submit form responses at all.
       * https://developers.google.com/apps-script/reference/forms/form#hasLimitOneResponsePerUser()
       */
      hasLimitOneResponsePerUser(): boolean;

      /**
       * Determines whether the form displays a progress bar.
       * https://developers.google.com/apps-script/reference/forms/form#hasProgressBar()
       */
      hasProgressBar(): boolean;

      /**
       * Determines whether the form displays a link to submit another response after a respondent
       * completes the form.
       * https://developers.google.com/apps-script/reference/forms/form#hasRespondAgainLink()
       */
      hasRespondAgainLink(): boolean;

      /**
       * Determines whether the form is currently accepting responses.
       * https://developers.google.com/apps-script/reference/forms/form#isAcceptingResponses()
       */
      isAcceptingResponses(): boolean;

      /**
       * Determines whether the form displays a link to view a summary of responses after a respondent
       * completes the form.
       * https://developers.google.com/apps-script/reference/forms/form#isPublishingSummary()
       */
      isPublishingSummary(): boolean;

      /**
       * Determines whether the form is a quiz.
       * https://developers.google.com/apps-script/reference/forms/form#isQuiz()
       */
      isQuiz(): boolean;

      /**
       * Moves an item at a given index among all the items in the form to another given index. Throws a
       * scripting exception if the to index is out of bounds.
       * https://developers.google.com/apps-script/reference/forms/form#moveItem(Integer,Integer)
       * @param from the current index of the item among all the items in the form
       * @param to the new index for the item among all the items in the form
       */
      moveItem(from: Integer, to: Integer): Item;

      /**
       * Moves a given item to an given index among all the items in the form. Throws a scripting
       * exception if the given index is out of bounds.
       * https://developers.google.com/apps-script/reference/forms/form#moveItem(Item,Integer)
       * @param item the item to move
       * @param toIndex the new index for the item among all the items in the form
       */
      moveItem(item: Item, toIndex: Integer): Item;

      /**
       * Unlinks the form from its current response destination. The unlinked former destination still
       * retains a copy of all previous responses. All forms, including those that do not have a
       * destination set explicitly, save a
       * copy of responses in the form's response store. If the form does not currently have a
       * response destination, this method has no effect.
       * https://developers.google.com/apps-script/reference/forms/form#removeDestination()
       */
      removeDestination(): Form;

      /**
       * Removes the given user from the list of editors for the Form. This method doesn't
       * block users from accessing the Form if they belong to a class of users who have
       * general access—for example, if the Form is shared with the user's entire
       * domain, or if the Form is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/forms/form#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Form;

      /**
       * Removes the given user from the list of editors for the Form. This method doesn't
       * block users from accessing the Form if they belong to a class of users who have
       * general access—for example, if the Form is shared with the user's entire
       * domain, or if the Form is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/forms/form#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Form;

      /**
       * Determines whether the form requires respondents to log in to an account in the same domain or
       * a subdomain before responding.
       * https://developers.google.com/apps-script/reference/forms/form#requiresLogin()
       */
      requiresLogin(): boolean;

      /**
       * Sets whether the form is currently accepting responses. The default for new forms is true.
       * https://developers.google.com/apps-script/reference/forms/form#setAcceptingResponses(Boolean)
       * @param enabled true if the form should accept responses; false if not
       */
      setAcceptingResponses(enabled: boolean): Form;

      /**
       * Sets whether the form displays a link to edit a response after submitting it. The default for
       * new forms is false.
       *
       *
       * Regardless of this setting, the method FormResponse.getEditResponseUrl() allows a
       * script author who has edit permission to the form to generate a URL that can be used to edit a
       * response.
       * https://developers.google.com/apps-script/reference/forms/form#setAllowResponseEdits(Boolean)
       * @param enabled true if the form should display an "Edit your response" link; false if not
       */
      setAllowResponseEdits(enabled: boolean): Form;

      /**
       * Sets whether the form collects respondents' email addresses. The default for new forms is
       * false.
       * https://developers.google.com/apps-script/reference/forms/form#setCollectEmail(Boolean)
       * @param collect true if the form should collect email addresses; false if not
       */
      setCollectEmail(collect: boolean): Form;

      /**
       * Sets the form's confirmation message.
       * https://developers.google.com/apps-script/reference/forms/form#setConfirmationMessage(String)
       * @param message the form's new confirmation message
       */
      setConfirmationMessage(message: string): Form;

      /**
       * Sets the message to display if the form is not accepting responses. If no message is set, the
       * form will use a default message.
       * https://developers.google.com/apps-script/reference/forms/form#setCustomClosedFormMessage(String)
       * @param message the message to display if the form is not accepting responses
       */
      setCustomClosedFormMessage(message: string): Form;

      /**
       * Sets the form's description.
       * https://developers.google.com/apps-script/reference/forms/form#setDescription(String)
       * @param description the form's new description
       */
      setDescription(description: string): Form;

      /**
       * Sets the destination where form responses are saved. All forms, including those that do not
       * have a destination set explicitly, save a copy of responses in the form's
       * response store.
       * https://developers.google.com/apps-script/reference/forms/form#setDestination(DestinationType,String)
       * @param type the type of the form's response destination
       * @param id the ID of the form's response destination
       */
      setDestination(type: DestinationType, id: string): Form;

      /**
       * Sets whether the form is a quiz. The default for new forms is false.
       *
       *
       * Graded questions are only allowed in Quizzes, so setting this to false will cause all
       * grading options to be removed from all questions.
       *
       *
       * Quiz settings are only available in the new Forms UI; making a form a Quiz will opt the form
       * into using the new UI.
       * https://developers.google.com/apps-script/reference/forms/form#setIsQuiz(Boolean)
       * @param enabled true if quiz features should be enabled for the form; false if not
       */
      setIsQuiz(enabled: boolean): Form;

      /**
       * Sets whether the form allows only one response per respondent. The default for new forms is
       * false. If the value is set to true, the script cannot submit form responses at
       * all.
       * https://developers.google.com/apps-script/reference/forms/form#setLimitOneResponsePerUser(Boolean)
       * @param enabled true if the form should allow only one response per respondent; false if not
       */
      setLimitOneResponsePerUser(enabled: boolean): Form;

      /**
       * Sets whether the form has a progress bar. The default for new forms is false.
       * https://developers.google.com/apps-script/reference/forms/form#setProgressBar(Boolean)
       * @param enabled true if the form should display a progress bar; false if not
       */
      setProgressBar(enabled: boolean): Form;

      /**
       * Sets whether the form displays a link to view a summary of responses after a respondent submits
       * the form. The default for new forms is false.
       * https://developers.google.com/apps-script/reference/forms/form#setPublishingSummary(Boolean)
       * @param enabled true if the form should display a "See previous responses" link; false if not
       */
      setPublishingSummary(enabled: boolean): Form;

      /**
       * Sets whether the form requires respondents to log in to an account in the same domain or a
       * subdomain before responding. The default for new forms is false unless a domain
       * administrator changes the default.
       *
       *
       * This feature is available only for forms created by G Suite users. Users of other types of
       * Google accounts cannot be required to log in.
       * https://developers.google.com/apps-script/reference/forms/form#setRequireLogin(Boolean)
       * @param requireLogin true if the form requires users to log in; false if not
       */
      setRequireLogin(requireLogin: boolean): Form;

      /**
       * Sets whether the form displays a link to submit another response after a respondent completes
       * the form. The default for new forms is true.
       * https://developers.google.com/apps-script/reference/forms/form#setShowLinkToRespondAgain(Boolean)
       * @param enabled true if the form should display a "Submit another response" link; false if not
       */
      setShowLinkToRespondAgain(enabled: boolean): Form;

      /**
       * Sets whether the order of the questions on each page of the form is randomized.
       * https://developers.google.com/apps-script/reference/forms/form#setShuffleQuestions(Boolean)
       * @param shuffle true if the order of the questions on each page of the form should be randomized; false if not
       */
      setShuffleQuestions(shuffle: boolean): Form;

      /**
       * Sets the form's title.
       * https://developers.google.com/apps-script/reference/forms/form#setTitle(String)
       * @param title the form's new title
       */
      setTitle(title: string): Form;

      /**
       * Converts a long URL for a form to a short URL. Throws an exception if the long URL does not
       * belong to Google Forms.
       * https://developers.google.com/apps-script/reference/forms/form#shortenFormUrl(String)
       * @param url
       */
      shortenFormUrl(url: string): string;

      /**
       * Submits grades for the given FormResponses.
       * https://developers.google.com/apps-script/reference/forms/form#submitGrades(FormResponse)
       * @param responses
       */
      submitGrades(responses: FormResponse[]): Form;
    }
    /**
     * Allows a script to open an existing Form or create a new one.
     *
     *     // Open a form by ID.
     *     var existingForm = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *
     *     // Create and open a form.
     *     var newForm = FormApp.create('Form Name');
     */
    interface FormApp {
      Alignment: typeof Alignment;
      DestinationType: typeof DestinationType;
      FeedbackType: typeof FeedbackType;
      ItemType: typeof ItemType;
      PageNavigationType: typeof PageNavigationType;

      /**
       * Creates and returns a new Form. Throws an exception if the given title is null
       * or empty.
       *
       *
       *     // Create and open a form.
       *     var form = FormApp.create('Form Name');
       * https://developers.google.com/apps-script/reference/forms/form-app#create(String)
       * @param title the name of the new form
       */
      create(title: string): Form;

      /**
       * Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a
       * CheckboxGridItem.
       * https://developers.google.com/apps-script/reference/forms/form-app#createCheckboxGridValidation()
       */
      createCheckboxGridValidation(): CheckboxGridValidationBuilder;

      /**
       * Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a
       * CheckboxItem.
       * https://developers.google.com/apps-script/reference/forms/form-app#createCheckboxValidation()
       */
      createCheckboxValidation(): CheckboxValidationBuilder;

      /**
       * Returns an instance of a QuizFeedbackBuilder which can be used to set feedback on a gradeable
       * Item.
       * https://developers.google.com/apps-script/reference/forms/form-app#createFeedback()
       */
      createFeedback(): QuizFeedbackBuilder;

      /**
       * Returns an instance of a GridValidationBuilder which can be used to set validation on a GridItem.
       * https://developers.google.com/apps-script/reference/forms/form-app#createGridValidation()
       */
      createGridValidation(): GridValidationBuilder;

      /**
       * Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on
       * a ParagraphTextItem.
       * https://developers.google.com/apps-script/reference/forms/form-app#createParagraphTextValidation()
       */
      createParagraphTextValidation(): ParagraphTextValidationBuilder;

      /**
       * Returns an instance of a TextValidationBuilder which can be used to set validation on a TextItem.
       * https://developers.google.com/apps-script/reference/forms/form-app#createTextValidation()
       */
      createTextValidation(): TextValidationBuilder;

      /**
       * Returns the form to which the script is container-bound. To interact with forms to which the
       * script is not container-bound, use openById(id) or openByUrl(url)
       * instead.
       *
       *
       *     // Get the form to which this script is bound.
       *     var form = FormApp.getActiveForm();
       * https://developers.google.com/apps-script/reference/forms/form-app#getActiveForm()
       */
      getActiveForm(): Form;

      /**
       * Returns an instance of the form editor's user-interface environment that allows the script to
       * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
       * current instance of an open form editor (not the view that a respondent sees), and only if the
       * script is bound to the form. For more
       * information, see the guides to menus and dialogs and sidebars.
       *
       *
       *     // Add a custom menu to the active form, including a separator and a sub-menu.
       *     function onOpen(e) {
       *       FormApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(FormApp.getUi().createMenu('My sub-menu')
       *               .addItem('One sub-menu item', 'mySecondFunction')
       *               .addItem('Another sub-menu item', 'myThirdFunction'))
       *           .addToUi();
       *     }
       * https://developers.google.com/apps-script/reference/forms/form-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Returns the Form with the specified ID. Throws an exception if the ID is invalid or the
       * user does not have permission to open the form.
       *
       *
       *     // Open a form by ID.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       * https://developers.google.com/apps-script/reference/forms/form-app#openById(String)
       * @param id the ID of the form to open
       */
      openById(id: string): Form;

      /**
       * Returns the Form with the specified URL. Throws an exception if the URL is invalid or
       * the user does not have permission to open the form.
       *
       *
       *     // Open a form by URL.
       *     var form = FormApp.openByUrl(
       *         'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit'
       *         );
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var formResponses = form.getResponses();
     *     for (var i = 0; i < formResponses.length; i++) {
     *       var formResponse = formResponses[i];
     *       var itemResponses = formResponse.getItemResponses();
     *       for (var j = 0; j < itemResponses.length; j++) {
     *         var itemResponse = itemResponses[j];
     *         Logger.log('Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse());
     *       }
     *     }
     */
    interface FormResponse {

      /**
       * Generates a URL that can be used to edit a response that has already been submitted. If the
       * Form.setAllowResponseEdits(enabled) setting is disabled, the link leads to a page that
       * explains that editing form responses is disabled. Anyone who visits the link can edit the
       * response, although they need an account with access to the form if the Form.setRequireLogin(requireLogin) setting is enabled. If the Form.setCollectEmail(collect)
       * setting is enabled, the form records the email address of the user who edited the response
       * instead of the email address of the original respondent.
       *
       *
       * For a form response that the script has created but not yet submitted, this method returns
       * null.
       * https://developers.google.com/apps-script/reference/forms/form-response#getEditResponseUrl()
       */
      getEditResponseUrl(): string;

      /**
       * Gets all item responses contained in a form response, in the same order that the items appear
       * in the form. This method works similarly to getItemResponses(), but to allow for grading
       * a missing answer, it still returns an ItemResponse if the corresponding Item
       * can be graded (ie has a point value), even if there isn't an actual response. However, if the
       * Item isn't gradable, this method excludes that item from its returned array.
       * https://developers.google.com/apps-script/reference/forms/form-response#getGradableItemResponses()
       */
      getGradableItemResponses(): ItemResponse[];

      /**
       * Gets the item response contained in a form response for a given item. This method works
       * similarly to getResponseForItem(item), but to allow for grading a missing answer, it still
       * returns an ItemResponse if the corresponding Item can be graded (ie has a point
       * value), even if there isn't an actual response. However, if the Item isn't gradable,
       * this method returns null.
       * https://developers.google.com/apps-script/reference/forms/form-response#getGradableResponseForItem(Item)
       * @param item
       */
      getGradableResponseForItem(item: Item): ItemResponse;

      /**
       * Gets the ID of the form response. This method returns null if the form response has not
       * been submitted.
       * https://developers.google.com/apps-script/reference/forms/form-response#getId()
       */
      getId(): string;

      /**
       * Gets all item responses contained in a form response, in the same order that the items appear
       * in the form. If the form response does not contain a response for a given TextItem,
       * DateItem, TimeItem, or ParagraphTextItem, the ItemResponse
       * returned for that item will have an empty string as the response. If the form response omits a
       * response for any other item type, this method excludes that item from its returned array.
       * https://developers.google.com/apps-script/reference/forms/form-response#getItemResponses()
       */
      getItemResponses(): ItemResponse[];

      /**
       * Gets the email address of the person who submitted a response, if the Form.setCollectEmail(collect) setting is enabled.
       *
       *
       * For a form response that the script has created but not yet submitted, this method returns
       * null.
       * https://developers.google.com/apps-script/reference/forms/form-response#getRespondentEmail()
       */
      getRespondentEmail(): string;

      /**
       * Gets the item response contained in this form response for a given item.
       * https://developers.google.com/apps-script/reference/forms/form-response#getResponseForItem(Item)
       * @param item
       */
      getResponseForItem(item: Item): ItemResponse;

      /**
       * Gets the timestamp for a form response submission.
       *
       *
       * For a form response that the script has created but not yet submitted, this method returns
       * null.
       * https://developers.google.com/apps-script/reference/forms/form-response#getTimestamp()
       */
      getTimestamp(): Date;

      /**
       * Submits the response. Throws a scripting exception if the response has already been submitted.
       * https://developers.google.com/apps-script/reference/forms/form-response#submit()
       */
      submit(): FormResponse;

      /**
       * Generates a URL for the form in which the answers are pre-filled based on the answers in this
       * form response.
       * https://developers.google.com/apps-script/reference/forms/form-response#toPrefilledUrl()
       */
      toPrefilledUrl(): string;

      /**
       * Adds the given item response's grades to a form response. This method applies only to form
       * responses that have already been submitted, and only affects stored grades once they are
       * submitted. This method also only updates the item response's grades; it does not affect the
       * actual response (since the response has already been submitted). If this method is called
       * multiple times for the same item, only the last grade is retained. If the ItemResponse contains
       * no grades, this method will remove grades for the item.
       *
       *
       *     // Programmatically award partial credit for a given response
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var formResponses = form.getResponses();
       *     var formItems = form.getItems();
       *     for (var i = 0; i < formResponses.length; i++) {
       *       var formResponse = formResponses[i];
       *       for (var j = 0; j < formItems.length; j++) {
       *         var item = formItems[i];
       *         var points = item.asMultipleChoiceItem().getPoints();
       *         var itemResponse = formResponse.getGradableResponseForItem(item);
       *         Logger.log('Award half credit for answers containing the word "Kennedy"');
       *         var answer = itemResponse.getResponse();
       *         if (answer != null && answer.includes('Kennedy')) {
       *           itemResponse.setScore(points / 2);
       *           formResponse.withItemGrades(itemResponse);
       *         }
       *       }
       *     }
       *     form.submitGrades(formResponses);
       * https://developers.google.com/apps-script/reference/forms/form-response#withItemGrade(ItemResponse)
       * @param gradedResponse
       */
      withItemGrade(gradedResponse: ItemResponse): FormResponse;

      /**
       * Adds the given item response to a form response. This method applies only to form responses
       * that the script has created but not yet submitted; it cannot affect stored responses. If this
       * method is called multiple times for the same item, only the last item response is retained.
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addGridItem();
     *     item.setTitle('Rate your interests')
     *         .setRows(['Cars', 'Computers', 'Celebrities'])
     *         .setColumns(['Boring', 'So-so', 'Interesting']);
     */
    interface GridItem {

      /**
       * Removes any data validation for this grid item.
       * https://developers.google.com/apps-script/reference/forms/grid-item#clearValidation()
       */
      clearValidation(): GridItem;

      /**
       * Creates a new ItemResponse for this grid item. The argument responses must be a
       * String[] array containing as many values as the number of rows in the grid. A null element for a non-required grid question indicates no response to that row. Throws an
       * exception if any of the values does not match a valid choice.
       * https://developers.google.com/apps-script/reference/forms/grid-item#createResponse(String)
       * @param responses an array of valid answers for this grid item
       */
      createResponse(responses: string[]): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/grid-item#duplicate()
       */
      duplicate(): GridItem;

      /**
       * Gets the values for every column in the grid.
       * https://developers.google.com/apps-script/reference/forms/grid-item#getColumns()
       */
      getColumns(): string[];

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/grid-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/grid-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/grid-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the values for every row in the grid.
       * https://developers.google.com/apps-script/reference/forms/grid-item#getRows()
       */
      getRows(): string[];

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/grid-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/grid-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/grid-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the columns of the grid based on an array of values. Throws an exception if the given
       * array is empty.
       * https://developers.google.com/apps-script/reference/forms/grid-item#setColumns(String)
       * @param columns an array of column values, which respondents see as labels when viewing the form
       */
      setColumns(columns: string[]): GridItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/grid-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): GridItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/grid-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): GridItem;

      /**
       * Sets the rows of the grid based on an array of values. Throws an exception if the given array
       * is empty.
       * https://developers.google.com/apps-script/reference/forms/grid-item#setRows(String)
       * @param rows an array of row values, which respondents see as labels when viewing the form
       */
      setRows(rows: string[]): GridItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/grid-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): GridItem;

      /**
       * Sets the data validation for this grid item. Passing in null or a validation without any
       * require functions called will remove any prior validation.
       * https://developers.google.com/apps-script/reference/forms/grid-item#setValidation(GridValidation)
       * @param validation a GridValidation to apply to this item.
       */
      setValidation(validation: GridValidation): GridItem;
    }
    /**
     * A DataValidation for a GridItem.
     *
     *     // Add a grid item to a form and require one response per column.
     *     var gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *       .setRows(['Cars', 'Computers', 'Celebrities'])
     *       .setColumns(['Boring', 'So-so', 'Interesting']);
     *     var gridValidation = FormApp.createGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     gridItem.setValidation(gridValidation);
     */
    interface GridValidation {
    }
    /**
     * A DataValidationBuilder for a GridValidation.
     *
     *     // Add a grid item to a form and require one response per column.
     *     var gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *       .setRows(['Cars', 'Computers', 'Celebrities'])
     *       .setColumns(['Boring', 'So-so', 'Interesting']);
     *     var gridValidation = FormApp.createGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     gridItem.setValidation(gridValidation);
     */
    interface GridValidationBuilder {

      /**
       * Requires limit of one response per column for a grid item.
       * https://developers.google.com/apps-script/reference/forms/grid-validation-builder#requireLimitOneResponsePerColumn()
       */
      requireLimitOneResponsePerColumn(): GridValidationBuilder;
    }
    /**
     * A layout item that displays an image. Items can be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new image item
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem()
     *         .setTitle('Google')
     *         .setHelpText('Google Logo') // The help text is the image description
     *         .setImage(img);
     */
    interface ImageItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/image-item#duplicate()
       */
      duplicate(): ImageItem;

      /**
       * Gets the image's horizontal alignment.
       * https://developers.google.com/apps-script/reference/forms/image-item#getAlignment()
       */
      getAlignment(): Alignment;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/image-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/image-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the image that is currently assigned to the item.
       * https://developers.google.com/apps-script/reference/forms/image-item#getImage()
       */
      getImage(): Base.Blob;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/image-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/image-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/image-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the image's width in pixels.
       * https://developers.google.com/apps-script/reference/forms/image-item#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the image's horizontal alignment.
       * https://developers.google.com/apps-script/reference/forms/image-item#setAlignment(Alignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: Alignment): ImageItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/image-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ImageItem;

      /**
       * Sets the image itself.
       * https://developers.google.com/apps-script/reference/forms/image-item#setImage(BlobSource)
       * @param image the image data
       */
      setImage(image: Base.BlobSource): ImageItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/image-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ImageItem;

      /**
       * Sets the image's width in pixels. Only the image's width can be set. Height is set
       * automatically to maintain the image's proportions.
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
     *     var form = FormApp.create('Form Name');
     *     form.addTextItem();
     *
     *     // Access the text item as a generic item.
     *     var items = form.getItems();
     *     var item = items[0];
     *
     *     // Cast the generic item to the text-item class.
     *     if (item.getType() == 'TEXT') {
     *       var textItem = item.asTextItem();
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
       * https://developers.google.com/apps-script/reference/forms/item#asCheckboxGridItem()
       */
      asCheckboxGridItem(): CheckboxGridItem;

      /**
       * Returns the item as a checkbox item. Throws a scripting exception if the ItemType was not already CHECKBOX.
       * https://developers.google.com/apps-script/reference/forms/item#asCheckboxItem()
       */
      asCheckboxItem(): CheckboxItem;

      /**
       * Returns the item as a date item. Throws a scripting exception if the ItemType was not already DATE.
       * https://developers.google.com/apps-script/reference/forms/item#asDateItem()
       */
      asDateItem(): DateItem;

      /**
       * Returns the item as a date-time item. Throws a scripting exception if the ItemType was not already DATETIME.
       * https://developers.google.com/apps-script/reference/forms/item#asDateTimeItem()
       */
      asDateTimeItem(): DateTimeItem;

      /**
       * Returns the item as a duration item. Throws a scripting exception if the ItemType was not already DURATION.
       * https://developers.google.com/apps-script/reference/forms/item#asDurationItem()
       */
      asDurationItem(): DurationItem;

      /**
       * Returns the item as a grid item. Throws a scripting exception if the ItemType was not already GRID.
       * https://developers.google.com/apps-script/reference/forms/item#asGridItem()
       */
      asGridItem(): GridItem;

      /**
       * Returns the item as an image item. Throws a scripting exception if the ItemType was not already IMAGE.
       * https://developers.google.com/apps-script/reference/forms/item#asImageItem()
       */
      asImageItem(): ImageItem;

      /**
       * Returns the item as a list item. Throws a scripting exception if the ItemType was not already LIST.
       * https://developers.google.com/apps-script/reference/forms/item#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the item as a multiple-choice item. Throws a scripting exception if the ItemType was not already MULTIPLE_CHOICE.
       * https://developers.google.com/apps-script/reference/forms/item#asMultipleChoiceItem()
       */
      asMultipleChoiceItem(): MultipleChoiceItem;

      /**
       * Returns the item as a page-break item. Throws a scripting exception if the ItemType was not already PAGE_BREAK.
       * https://developers.google.com/apps-script/reference/forms/item#asPageBreakItem()
       */
      asPageBreakItem(): PageBreakItem;

      /**
       * Returns the item as a paragraph-text item. Throws a scripting exception if the ItemType was not already PARAGRAPH_TEXT.
       * https://developers.google.com/apps-script/reference/forms/item#asParagraphTextItem()
       */
      asParagraphTextItem(): ParagraphTextItem;

      /**
       * Returns the item as a scale item. Throws a scripting exception if the ItemType was not already SCALE.
       * https://developers.google.com/apps-script/reference/forms/item#asScaleItem()
       */
      asScaleItem(): ScaleItem;

      /**
       * Returns the item as a section-header item. Throws a scripting exception if the ItemType was not already SECTION_HEADER.
       * https://developers.google.com/apps-script/reference/forms/item#asSectionHeaderItem()
       */
      asSectionHeaderItem(): SectionHeaderItem;

      /**
       * Returns the item as a text item. Throws a scripting exception if the ItemType was not already TEXT.
       * https://developers.google.com/apps-script/reference/forms/item#asTextItem()
       */
      asTextItem(): TextItem;

      /**
       * Returns the item as a time item. Throws a scripting exception if the ItemType was not already TIME.
       * https://developers.google.com/apps-script/reference/forms/item#asTimeItem()
       */
      asTimeItem(): TimeItem;

      /**
       * Returns the item as a video item. Throws a scripting exception if the ItemType was not already VIDEO.
       * https://developers.google.com/apps-script/reference/forms/item#asVideoItem()
       */
      asVideoItem(): VideoItem;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/item#duplicate()
       */
      duplicate(): Item;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): Item;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): Item;
    }
    /**
     * A response to one question item within a form. Item responses can be accessed from FormResponse and created from any Item that asks the respondent to answer a question.
     *
     *     // Open a form by ID and log the responses to each question.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var formResponses = form.getResponses();
     *     for (var i = 0; i < formResponses.length; i++) {
     *       var formResponse = formResponses[i];
     *       var itemResponses = formResponse.getItemResponses();
     *       for (var j = 0; j < itemResponses.length; j++) {
     *         var itemResponse = itemResponses[j];
     *         Logger.log('Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse());
     *       }
     *     }
     */
    interface ItemResponse {

      /**
       * Gets the feedback that was given for the respondent's submitted answer.
       * https://developers.google.com/apps-script/reference/forms/item-response#getFeedback()
       */
      getFeedback(): object;

      /**
       * Gets the question item that this response answers.
       * https://developers.google.com/apps-script/reference/forms/item-response#getItem()
       */
      getItem(): Item;

      /**
       * Gets the answer that the respondent submitted. For most types of question items, this returns a
       * String.
       *
       *
       * For CheckboxItem questions, this returns a String[] array containing the
       * responder's choices. The order of the strings in the array may vary.
       *
       *
       * For GridItem questions, this returns a String[] array in which the answer at
       * index n corresponds to the question at row n + 1 in the grid. If a respondent
       * did not answer a question in the grid, that answer is returned as ''.
       *
       *
       * For CheckboxGridItem questions, this returns a String[][] array in which the
       * answers at row index n corresponds to the question at row n + 1 in the checkbox
       * grid. If a respondent did not answer a question in the grid, that answer is returned as ''.
       * https://developers.google.com/apps-script/reference/forms/item-response#getResponse()
       */
      getResponse(): object;

      /**
       * Gets the score for the respondent's submitted answer.
       * https://developers.google.com/apps-script/reference/forms/item-response#getScore()
       */
      getScore(): object;

      /**
       * Sets the feedback that should be displayed for the respondent's submitted answer.
       *
       *
       * This method does not actually save the feedback in Forms until Form.submitGrades(responses) is called with the updated FormResponses. See setScore() for an example.
       * https://developers.google.com/apps-script/reference/forms/item-response#setFeedback(Object)
       * @param feedback
       */
      setFeedback(feedback: object): ItemResponse;

      /**
       * Sets the score for the respondent's submitted answer. A null value will clear the existing
       * score.
       *
       *
       * This method does not actually save the score in Forms until Form.submitGrades(responses) is called with the updated FormResponses.
       *
       *
       *     // For a multiple choice question with options: "Always true", "Sometimes true", and "Never",
       *     // award half credit for responses that answered "Sometimes true".
       *     var formResponses = FormApp.getActiveForm().getResponses();
       *     // Go through each form response
       *     for (var i = 0; i < formResponses.length; i++) {
       *       var response = formResponses[i];
       *       var items = FormApp.getActiveForm().getItems();
       *       // Assume it's the first item
       *       var item = items[0];
       *       var itemResponse = response.getGradableResponseForItem(item);
       *       // Give half credit for "Sometimes true".
       *       if (itemResponse != null && itemResponse.getResponse() == 'Sometimes true') {
       *         var points = item.asMultipleChoiceItem().getPoints();
       *         itemResponse.setScore(points * .5);
       *         // This saves the grade, but does not submit to Forms yet.
       *         response.withItemGrade(itemResponse);
       *       }
       *     }
       *     // Grades are actually submitted to Forms here.
       *     FormApp.getActiveForm().submitGrades(formResponses);
       * https://developers.google.com/apps-script/reference/forms/item-response#setScore(Object)
       * @param score
       */
      setScore(score: object): ItemResponse;
    }
    /**
     * An enum representing the supported types of form items. Item types can be accessed from FormApp.ItemType.
     *
     *     // Open a form by ID and add a new section header.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     *
     *     // Check the item type.
     *     if (item.getType() == FormApp.ItemType.SECTION_HEADER) {
     *       item.setHelpText('Description of new section.');
     *     }
     */
    enum ItemType { CHECKBOX, CHECKBOX_GRID, DATE, DATETIME, DURATION, GRID, IMAGE, LIST, MULTIPLE_CHOICE, PAGE_BREAK, PARAGRAPH_TEXT, SCALE, SECTION_HEADER, TEXT, TIME, VIDEO }
    /**
     * A question item that allows the respondent to select one choice from a drop-down list. Items can
     * be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats'),
     *             item.createChoice('Dogs')
     *         ]);
     */
    interface ListItem {

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
       * is equivalent to createChoice(value, navigationType) with navigationType set to FormApp.PageNavigationType.GO_TO_PAGE. Choices that use page
       * navigation cannot be combined in the same item with choices that do not use page navigation.
       *
       *
       * The page navigation occurs after the respondent completes a page that contains the option,
       * and only if the respondent chose that option. If the respondent chose multiple options with
       * page-navigation instructions on the same page, only the last navigation option has any effect.
       * Page navigation also has no effect on the last page of a form.
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,PageBreakItem)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationItem the item to navigate to
       */
      createChoice(value: string, navigationItem: PageBreakItem): Choice;

      /**
       * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
       * combined in the same item with choices that do not use page navigation.
       *
       *
       * The page navigation occurs after the respondent completes a page that contains the option,
       * and only if the respondent chose that option. If the respondent chose multiple options with
       * page-navigation instructions on the same page, only the last navigation option has any effect.
       * Page navigation also has no effect on the last page of a form.
       * https://developers.google.com/apps-script/reference/forms/list-item#createChoice(String,PageNavigationType)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationType the choice's navigation type
       */
      createChoice(value: string, navigationType: PageNavigationType): Choice;

      /**
       * Creates a new ItemResponse for this list item. Throws an exception if the response argument does not match a valid choice for this item.
       * https://developers.google.com/apps-script/reference/forms/list-item#createResponse(String)
       * @param response a valid answer for this list item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/list-item#duplicate()
       */
      duplicate(): ListItem;

      /**
       * Gets all choices for an item.
       * https://developers.google.com/apps-script/reference/forms/list-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       * https://developers.google.com/apps-script/reference/forms/list-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/list-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/list-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/list-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/list-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/list-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/list-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/list-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/list-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array
       * is empty.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       * https://developers.google.com/apps-script/reference/forms/list-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): ListItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or
       * contains a null element.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?')
       *     item.setChoices([
       *         item.createChoice('Cats'),
       *         item.createChoice('Dogs')
       *     ]);
       * https://developers.google.com/apps-script/reference/forms/list-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): ListItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false)]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
       * https://developers.google.com/apps-script/reference/forms/list-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): ListItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/list-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): ListItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/list-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ListItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/list-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ListItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/list-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ListItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats'),
     *             item.createChoice('Dogs')
     *          ])
     *         .showOtherOption(true);
     */
    interface MultipleChoiceItem {

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String)
       * @param value the choice's value, which respondents see as a label when viewing the form
       */
      createChoice(value: string): Choice;

      /**
       * Creates a new choice.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,Boolean)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param isCorrect whether the choice is a correct answer
       */
      createChoice(value: string, isCorrect: boolean): Choice;

      /**
       * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
       * is equivalent to createChoice(value, navigationType) with navigationType set to FormApp.PageNavigationType.GO_TO_PAGE. Choices that use page
       * navigation cannot be combined in the same item with choices that do not use page navigation.
       *
       *
       * The page navigation occurs after the respondent completes a page that contains the option,
       * and only if the respondent chose that option. If the respondent chose multiple options with
       * page-navigation instructions on the same page, only the last navigation option has any effect.
       * Page navigation also has no effect on the last page of a form.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,PageBreakItem)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationItem the item to navigate to
       */
      createChoice(value: string, navigationItem: PageBreakItem): Choice;

      /**
       * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
       * combined in the same item with choices that do not use page navigation.
       *
       *
       * The page navigation occurs after the respondent completes a page that contains the option,
       * and only if the respondent chose that option. If the respondent chose multiple options with
       * page-navigation instructions on the same page, only the last navigation option has any effect.
       * Page navigation also has no effect on the last page of a form.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createChoice(String,PageNavigationType)
       * @param value the choice's value, which respondents see as a label when viewing the form
       * @param navigationType the choice's navigation type
       */
      createChoice(value: string, navigationType: PageNavigationType): Choice;

      /**
       * Creates a new ItemResponse for this multiple-choice item. Throws an exception if the
       * response argument does not match a valid choice for this item, unless showOtherOption(enabled) is set to true.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createResponse(String)
       * @param response a valid answer for this multiple-choice item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#duplicate()
       */
      duplicate(): MultipleChoiceItem;

      /**
       * Gets all choices for an item.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getChoices()
       */
      getChoices(): Choice[];

      /**
       * Returns the feedback that is shown to respondents when they respond correctly to a question.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getFeedbackForCorrect()
       */
      getFeedbackForCorrect(): QuizFeedback;

      /**
       * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getFeedbackForIncorrect()
       */
      getFeedbackForIncorrect(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the item has an "other" option.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#hasOtherOption()
       */
      hasOtherOption(): boolean;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the choices for an item from an array of strings. Throws an exception if the given array
       * is empty.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     item.setChoiceValues(['Dogs', 'Cats']);
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setChoiceValues(String)
       * @param values the array of choice values, which respondents see as labels when viewing the form
       */
      setChoiceValues(values: string[]): MultipleChoiceItem;

      /**
       * Sets an array of choices for an item. Throws an exception if the given array is empty or
       * contains a null element.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?')
       *     item.setChoices([
       *         item.createChoice('Cats'),
       *         item.createChoice('Dogs')
       *     ]);
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setChoices(Choice)
       * @param choices an array of choices
       */
      setChoices(choices: Choice[]): MultipleChoiceItem;

      /**
       * Sets the feedback to be shown to respondents when they respond correctly to a question.
       *
       *
       *     // Open a form by ID and add a new list item.
       *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var item = form.addListItem();
       *     item.setTitle('Do you prefer cats or dogs?');
       *     // Set "Dogs" as the correct answer to this question.
       *     item.setChoices([
       *       item.createChoice('Dogs', true),
       *       item.createChoice('Cats', false)]);
       *     // Add feedback which will be shown for correct responses; ie "Dogs".
       *     item.setFeedbackForCorrect(
       *         FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setFeedbackForCorrect(QuizFeedback)
       * @param feedback the new feedback. A null value will clear the feedback.
       */
      setFeedbackForCorrect(feedback: QuizFeedback): MultipleChoiceItem;

      /**
       * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setFeedbackForIncorrect(QuizFeedback)
       * @param feedback the new feedback
       */
      setFeedbackForIncorrect(feedback: QuizFeedback): MultipleChoiceItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): MultipleChoiceItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): MultipleChoiceItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): MultipleChoiceItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): MultipleChoiceItem;

      /**
       * Sets whether the item has an "other" option. The default for a new CheckboxItem or
       * MultipleChoiceItem is false.
       * https://developers.google.com/apps-script/reference/forms/multiple-choice-item#showOtherOption(Boolean)
       * @param enabled true if the item has an "other" option; false if not
       */
      showOtherOption(enabled: boolean): MultipleChoiceItem;
    }
    /**
     * A layout item that marks the start of a page. Items can be accessed or created from a Form.
     *
     *     // Create a form and add three page-break items.
     *     var form = FormApp.create('Form Name');
     *     var pageTwo = form.addPageBreakItem().setTitle('Page Two');
     *     var pageThree = form.addPageBreakItem().setTitle('Page Three');
     *
     *     // Make the first two pages navigate elsewhere upon completion.
     *     pageTwo.setGoToPage(pageThree); // At end of page one (start of page two), jump to page three
     *     pageThree.setGoToPage(FormApp.PageNavigationType.RESTART); // At end of page two, restart form
     */
    interface PageBreakItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#duplicate()
       */
      duplicate(): PageBreakItem;

      /**
       * Gets the PageBreakItem that the form will jump to after completing the page before this
       * page break (that is, upon reaching this page break by normal linear progression through the
       * form).
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getGoToPage()
       */
      getGoToPage(): PageBreakItem;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the type of page navigation that occurs after completing the page before this page break
       * (that is, upon reaching this page break by normal linear progression through the form).
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getPageNavigationType()
       */
      getPageNavigationType(): PageNavigationType;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the page to jump to after completing the page before this page break (that is, upon
       * reaching this page break by normal linear progression through the form). If the previous page
       * contained a MultipleChoiceItem or ListItem with a navigation option, that
       * navigation overrules this navigation.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setGoToPage(PageBreakItem)
       * @param goToPageItem the page break to jump to after completing the page before this page break
       */
      setGoToPage(goToPageItem: PageBreakItem): PageBreakItem;

      /**
       * Sets the type of page navigation that occurs after completing the page before this page break
       * (that is, upon reaching this page break by normal linear progression through the form). If the
       * page contained a MultipleChoiceItem or ListItem with a navigation option, that
       * navigation overrules this navigation.
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setGoToPage(PageNavigationType)
       * @param navigationType the navigation action to take after completing the page before this page break
       */
      setGoToPage(navigationType: PageNavigationType): PageBreakItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/page-break-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): PageBreakItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     // Create a form and add a new multiple-choice item and a page-break item.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addMultipleChoiceItem();
     *     var pageBreak = form.addPageBreakItem();
     *
     *     // Set some choices with go-to-page logic.
     *     var rightChoice = item.createChoice('Vanilla', FormApp.PageNavigationType.SUBMIT);
     *     var wrongChoice = item.createChoice('Chocolate', FormApp.PageNavigationType.RESTART);
     *
     *     // For GO_TO_PAGE, just pass in the page break item. For CONTINUE (normally the default), pass in
     *     // CONTINUE explicitly because page navigation cannot be mixed with non-navigation choices.
     *     var iffyChoice = item.createChoice('Peanut', pageBreak);
     *     var otherChoice = item.createChoice('Strawberry', FormApp.PageNavigationType.CONTINUE);
     *     item.setChoices([rightChoice, wrongChoice, iffyChoice, otherChoice]);
     */
    enum PageNavigationType { CONTINUE, GO_TO_PAGE, RESTART, SUBMIT }
    /**
     * A question item that allows the respondent to enter a block of text. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new paragraph text item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addParagraphTextItem();
     *     item.setTitle('What is your address?');
     */
    interface ParagraphTextItem {

      /**
       * Removes any data validation for this paragraph text item.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#clearValidation()
       */
      clearValidation(): ParagraphTextItem;

      /**
       * Creates a new ItemResponse for this paragraph text item.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#createResponse(String)
       * @param response an answer to the question posed by the item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#duplicate()
       */
      duplicate(): ParagraphTextItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): ParagraphTextItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ParagraphTextItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ParagraphTextItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ParagraphTextItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): ParagraphTextItem;

      /**
       * Sets the data validation for this paragraph text item. Passing in null or a validation without
       * any require functions called will remove any prior validation.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-item#setValidation(ParagraphTextValidation)
       * @param validation a ParagraphTextValidation to apply to this item.
       */
      setValidation(validation: ParagraphTextValidation): ParagraphTextItem;
    }
    /**
     * A DataValidation for a ParagraphTextItem.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100 characters.
     *     var paragraphTextItem = form.addParagraphTextItem().setTitle('Describe yourself:');
     *     var paragraphtextValidation = FormApp.createParagraphTextValidation()
     *       .setHelpText(“Answer must be more than 100 characters.”)
     *       .requireTextLengthGreatherThan(100);
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    interface ParagraphTextValidation {
    }
    /**
     * A DataValidationBuilder for a ParagraphTextValidation.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100 characters.
     *     var paragraphTextItem = form.addParagraphTextItem().setTitle('Describe yourself:');
     *     var paragraphtextValidation = FormApp.createParagraphTextValidation()
     *       .setHelpText(“Answer must be more than 100 characters.”)
     *       .requireTextLengthGreatherThan(100);
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    interface ParagraphTextValidationBuilder {

      /**
       * Requires response to contain pattern.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextContainsPattern(String)
       * @param pattern text must contain pattern
       */
      requireTextContainsPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response to not contain pattern.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextDoesNotContainPattern(String)
       * @param pattern text must not contain pattern
       */
      requireTextDoesNotContainPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response to not match pattern.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextDoesNotMatchPattern(String)
       * @param pattern text must not match pattern
       */
      requireTextDoesNotMatchPattern(pattern: string): ParagraphTextValidationBuilder;

      /**
       * Requires response length to be greater than or equal to value.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextLengthGreaterThanOrEqualTo(Integer)
       * @param number paragraph text length must be greater than this value
       */
      requireTextLengthGreaterThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;

      /**
       * Requires response length to be less than value.
       * https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder#requireTextLengthLessThanOrEqualTo(Integer)
       * @param number paragraph text length must be less than or equal to this value
       */
      requireTextLengthLessThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;

      /**
       * Requires response to match pattern.
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
     *     // Setting feedback which should be automatically shown when a user responds to a question
     *     // incorrectly.
     *     var textItem = form.addTextItem().setTitle('Re-hydrating dried fruit is an example of what?');
     *     var feedback = FormApp.createFeedback()
     *       .setDisplayText(
     *           “Good answer, but not quite right.  Please review chapter 4 before next time.”)
     *       .addLink("http://wikipedia.com/osmosis");
     *     textItem.setFeedbackForIncorrect(feedback);
     */
    interface QuizFeedback {

      /**
       * Gets a list of the URLs associated with the Feedback. These are displayed to the user as a list
       * of helpful links.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback#getLinkUrls()
       */
      getLinkUrls(): string[];

      /**
       * Gets the Feedback's display text. This text is shown to the user after they've submitted a
       * response.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback#getText()
       */
      getText(): string;
    }
    /**
     * The base FeedbackBuilder that contains setters for properties common to all feedback, such as
     * display text. Used to build Feedback objects.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false)]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(FormApp.createFeedback().setText("Dogs rule, cats drool.").build());
     */
    interface QuizFeedbackBuilder {

      /**
       * Adds a link to the feedback's supplemental material.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#addLink(String)
       * @param url the link to display under the display text
       */
      addLink(url: string): QuizFeedbackBuilder;

      /**
       * Adds a link to the feedback's supplemental material.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#addLink(String,String)
       * @param url the link to display under the display text
       * @param displayText the text to display for the link
       */
      addLink(url: string, displayText: string): QuizFeedbackBuilder;

      /**
       * Builds a Feedback of the corresponding type for this builder.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#build()
       */
      build(): QuizFeedback;

      /**
       * Returns a copy of this builder.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#copy()
       */
      copy(): QuizFeedbackBuilder;

      /**
       * Sets the feedback text.
       * https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder#setText(String)
       * @param text the new text
       */
      setText(text: string): QuizFeedbackBuilder;
    }
    /**
     * A question item that allows the respondent to choose one option from a numbered sequence of radio
     * buttons. Items can be accessed or created from a Form. When used in a quiz, these items
     * are graded.
     *
     *     // Open a form by ID and add a new scale item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addScaleItem();
     *     item.setTitle('Pick a number between 1 and 10')
     *         .setBounds(1, 10);
     */
    interface ScaleItem {

      /**
       * Creates a new ItemResponse for this scale item. Throws an exception if the response argument is outside the bounds set for the item.
       * https://developers.google.com/apps-script/reference/forms/scale-item#createResponse(Integer)
       * @param response a value answer for this scale item
       */
      createResponse(response: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/scale-item#duplicate()
       */
      duplicate(): ScaleItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/scale-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the label for the scale's lower bound, if any.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getLeftLabel()
       */
      getLeftLabel(): string;

      /**
       * Gets the scale's lower bound.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getLowerBound()
       */
      getLowerBound(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the label for the scale's upper bound, if any.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getRightLabel()
       */
      getRightLabel(): string;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/scale-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the scale's upper bound.
       * https://developers.google.com/apps-script/reference/forms/scale-item#getUpperBound()
       */
      getUpperBound(): Integer;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/scale-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the scale's lower and upper bounds. The lower bound must be 0 or 1. The
       * upper bound must be between 3 and 10, inclusive. A new scale defaults to a
       * lower bound of 1 and an upper bound of 5.
       *
       *
       * Throws a scripting exception if the given values are outside the permitted limits. Decimals
       * are truncated to the preceding integer.
       * https://developers.google.com/apps-script/reference/forms/scale-item#setBounds(Integer,Integer)
       * @param lower the new lower bound
       * @param upper the new upper bound
       */
      setBounds(lower: Integer, upper: Integer): ScaleItem;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/scale-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): ScaleItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/scale-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): ScaleItem;

      /**
       * Sets labels for the scale's lower and upper bounds.
       * https://developers.google.com/apps-script/reference/forms/scale-item#setLabels(String,String)
       * @param lower the new label for the lower bound
       * @param upper the new label for the upper bound
       */
      setLabels(lower: string, upper: string): ScaleItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/scale-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): ScaleItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/scale-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): ScaleItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     */
    interface SectionHeaderItem {

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/section-header-item#duplicate()
       */
      duplicate(): SectionHeaderItem;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/section-header-item#getType()
       */
      getType(): ItemType;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/section-header-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): SectionHeaderItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addTextItem();
     *     item.setTitle('What is your name?');
     */
    interface TextItem {

      /**
       * Removes any data validation for this text item.
       * https://developers.google.com/apps-script/reference/forms/text-item#clearValidation()
       */
      clearValidation(): TextItem;

      /**
       * Creates a new ItemResponse for this text item.
       * https://developers.google.com/apps-script/reference/forms/text-item#createResponse(String)
       * @param response an answer to the question posed by the item
       */
      createResponse(response: string): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/text-item#duplicate()
       */
      duplicate(): TextItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/text-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/text-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/text-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/text-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/text-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/text-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/text-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/text-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/text-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): TextItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/text-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): TextItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/text-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): TextItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/text-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): TextItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/text-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): TextItem;

      /**
       * Sets the data validation for this text item. Passing in null or a validation without any
       * require functions called will remove any prior validation.
       * https://developers.google.com/apps-script/reference/forms/text-item#setValidation(TextValidation)
       * @param validation a TextValidation to apply to this item.
       */
      setValidation(validation: TextValidation): TextItem;
    }
    /**
     * A DataValidation for a TextItem.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     var textValidation = FormApp.createTextValidation()
     *       .setHelpText(“Input was not a number between 1 and 100.”)
     *       .requireNumberBetween(1, 100)
     *       .build();
     *     textItem.setValidation(textValidation);
     */
    interface TextValidation {
    }
    /**
     * A DataValidationBuilder for a TextValidation.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     var textValidation = FormApp.createTextValidation()
     *       .setHelpText(“Input was not a number between 1 and 100.”)
     *       .requireNumberBetween(1, 100);
     *     textItem.setValidation(textValidation);
     */
    interface TextValidationBuilder {

      /**
       * Requires text item to be a number.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumber()
       */
      requireNumber(): TextValidationBuilder;

      /**
       * Requires text item to be a number between start and end, inclusive.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberBetween(Number,Number)
       * @param start the lower bounds of the inclusive range
       * @param end the upper bounds of the inclusive range
       */
      requireNumberBetween(start: number, end: number): TextValidationBuilder;

      /**
       * Requires text item to be a number equal to value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberEqualTo(Number)
       * @param number the value which the item must be equal to.
       */
      requireNumberEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number greater than the value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberGreaterThan(Number)
       * @param number the value which the item must be greater than.
       */
      requireNumberGreaterThan(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number greater than or equal to the value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberGreaterThanOrEqualTo(Number)
       * @param number the value which the item must be greater than or equal to.
       */
      requireNumberGreaterThanOrEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number less than the value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberLessThan(Number)
       * @param number the value which the item must be greater than.
       */
      requireNumberLessThan(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number less than or equal to the value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberLessThanOrEqualTo(Number)
       * @param number the value which the item must be less than or equal to.
       */
      requireNumberLessThanOrEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires text item to be a number not between start and end, inclusive.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberNotBetween(Number,Number)
       * @param start the lower bounds of the inclusive range
       * @param end the upper bounds of the inclusive range
       */
      requireNumberNotBetween(start: number, end: number): TextValidationBuilder;

      /**
       * Requires text item to be a number not equal to the value specified.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireNumberNotEqualTo(Number)
       * @param number the value which the item must not be equal to.
       */
      requireNumberNotEqualTo(number: number): TextValidationBuilder;

      /**
       * Requires response to contain pattern.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextContainsPattern(String)
       * @param pattern text must contain pattern
       */
      requireTextContainsPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires response to not contain pattern.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextDoesNotContainPattern(String)
       * @param pattern text must not contain pattern
       */
      requireTextDoesNotContainPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires response to not match pattern.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextDoesNotMatchPattern(String)
       * @param pattern text must not match pattern
       */
      requireTextDoesNotMatchPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires text item to be an email address.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextIsEmail()
       */
      requireTextIsEmail(): TextValidationBuilder;

      /**
       * Requires text item to be a URL.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextIsUrl()
       */
      requireTextIsUrl(): TextValidationBuilder;

      /**
       * Requires response length to be greater than or equal to value.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextLengthGreaterThanOrEqualTo(Integer)
       * @param number paragraph text length must be greater than this value
       */
      requireTextLengthGreaterThanOrEqualTo(number: Integer): TextValidationBuilder;

      /**
       * Requires response length to be less than value.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextLengthLessThanOrEqualTo(Integer)
       * @param number paragraph text length must be less than or equal to this value
       */
      requireTextLengthLessThanOrEqualTo(number: Integer): TextValidationBuilder;

      /**
       * Requires response to match pattern.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireTextMatchesPattern(String)
       * @param pattern text must match pattern
       */
      requireTextMatchesPattern(pattern: string): TextValidationBuilder;

      /**
       * Requires text item to be a whole number.
       * https://developers.google.com/apps-script/reference/forms/text-validation-builder#requireWholeNumber()
       */
      requireWholeNumber(): TextValidationBuilder;
    }
    /**
     * A question item that allows the respondent to indicate a time of day. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new time item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addTimeItem();
     *     item.setTitle('What time do you usually wake up in the morning?');
     */
    interface TimeItem {

      /**
       * Creates a new ItemResponse for this time item. The arguments hour and minute are best represented as integers from 0 to 23 and from 0 to
       * 59, respectively. If they exceed those bounds, they behave as a clock would: for
       * example, 10, 90 is interpreted as 11:30, and -1, 60 is intepreted as 00:00.
       * https://developers.google.com/apps-script/reference/forms/time-item#createResponse(Integer,Integer)
       * @param hour the hour, represented as an integer from 0 to 23
       * @param minute the minute of the hour, represented as an integer from 0 to 59
       */
      createResponse(hour: Integer, minute: Integer): ItemResponse;

      /**
       * Creates a copy of this item and appends it to the end of the form.
       * https://developers.google.com/apps-script/reference/forms/time-item#duplicate()
       */
      duplicate(): TimeItem;

      /**
       * Returns the feedback that is shown to respondents when they respond to a gradeable question.
       * https://developers.google.com/apps-script/reference/forms/time-item#getGeneralFeedback()
       */
      getGeneralFeedback(): QuizFeedback;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/time-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/time-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/time-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the point value of a gradeable item.
       * https://developers.google.com/apps-script/reference/forms/time-item#getPoints()
       */
      getPoints(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/time-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/time-item#getType()
       */
      getType(): ItemType;

      /**
       * Determines whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/time-item#isRequired()
       */
      isRequired(): boolean;

      /**
       * Sets the feedback to be shown to respondents when they respond to a gradeable question that
       * doesn't have a correct or incorrect answer (ie questions that require manual grading).
       * https://developers.google.com/apps-script/reference/forms/time-item#setGeneralFeedback(QuizFeedback)
       * @param feedback the new feedback
       */
      setGeneralFeedback(feedback: QuizFeedback): TimeItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/time-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): TimeItem;

      /**
       * Sets the number of points a gradeable item is worth. The default for new items is 0.
       * https://developers.google.com/apps-script/reference/forms/time-item#setPoints(Integer)
       * @param points the number of a points a question item is worth
       */
      setPoints(points: Integer): TimeItem;

      /**
       * Sets whether the respondent must answer the question.
       * https://developers.google.com/apps-script/reference/forms/time-item#setRequired(Boolean)
       * @param enabled whether the respondent must answer the question
       */
      setRequired(enabled: boolean): TimeItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
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
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
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
       * https://developers.google.com/apps-script/reference/forms/video-item#duplicate()
       */
      duplicate(): VideoItem;

      /**
       * Gets the video's horizontal alignment.
       * https://developers.google.com/apps-script/reference/forms/video-item#getAlignment()
       */
      getAlignment(): Alignment;

      /**
       * Gets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/video-item#getHelpText()
       */
      getHelpText(): string;

      /**
       * Gets the item's unique identifier.
       * https://developers.google.com/apps-script/reference/forms/video-item#getId()
       */
      getId(): Integer;

      /**
       * Gets the index of the item among all the items in the form.
       * https://developers.google.com/apps-script/reference/forms/video-item#getIndex()
       */
      getIndex(): Integer;

      /**
       * Gets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/video-item#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the item's type, represented as an ItemType.
       * https://developers.google.com/apps-script/reference/forms/video-item#getType()
       */
      getType(): ItemType;

      /**
       * Gets the video's width in pixels.
       * https://developers.google.com/apps-script/reference/forms/video-item#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the video's horizontal alignment.
       * https://developers.google.com/apps-script/reference/forms/video-item#setAlignment(Alignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: Alignment): VideoItem;

      /**
       * Sets the item's help text (sometimes called description text for layout items like ImageItems, PageBreakItems, and SectionHeaderItems).
       * https://developers.google.com/apps-script/reference/forms/video-item#setHelpText(String)
       * @param text the new help text
       */
      setHelpText(text: string): VideoItem;

      /**
       * Sets the item's title (sometimes called header text, in the case of a SectionHeaderItem).
       * https://developers.google.com/apps-script/reference/forms/video-item#setTitle(String)
       * @param title the new title or header text
       */
      setTitle(title: string): VideoItem;

      /**
       * Sets the video itself from a given YouTube URL or YouTube video ID.
       * https://developers.google.com/apps-script/reference/forms/video-item#setVideoUrl(String)
       * @param youtubeUrl the YouTube URL or ID
       */
      setVideoUrl(youtubeUrl: string): VideoItem;

      /**
       * Sets the video's width in pixels. Only the video's width can be set. Height is set
       * automatically to maintain the video's proportions.
       * https://developers.google.com/apps-script/reference/forms/video-item#setWidth(Integer)
       * @param width the width in pixels
       */
      setWidth(width: Integer): VideoItem;
    }
  }
}

declare var FormApp: GoogleAppsScript.Forms.FormApp;
