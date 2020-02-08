// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.charts.d.ts" />
/// <reference path="google-apps-script.drive.d.ts" />

declare namespace GoogleAppsScript {
  namespace Spreadsheet {
    /**
     * An enumeration of the types of series used to calculate auto-filled values. The manner in which
     * these series affect calculated values differs depending on the type and amount of source data.
     */
    enum AutoFillSeries { DEFAULT_SERIES, ALTERNATE_SERIES }
    /**
     * Access and modify bandings, the color patterns applied to rows or columns of a range. Each
     * banding consists of a range and a set of colors for rows, columns, headers, and footers.
     */
    interface Banding {

      /**
       * Copies this banding to another range.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#copyTo(Range)
       * @param range The range to copy this banding to.
       */
      copyTo(range: Range): Banding;

      /**
       * Returns the first column color that is alternating, or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getFirstColumnColor()
       */
      getFirstColumnColor(): string;

      /**
       * Returns the first row color that is alternating or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getFirstRowColor()
       */
      getFirstRowColor(): string;

      /**
       * Returns the color of the last column, or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getFooterColumnColor()
       */
      getFooterColumnColor(): string;

      /**
       * Returns the color of the last row, or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getFooterRowColor()
       */
      getFooterRowColor(): string;

      /**
       * Returns the color of the header column, or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getHeaderColumnColor()
       */
      getHeaderColumnColor(): string;

      /**
       * Returns the color of the header row or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getHeaderRowColor()
       */
      getHeaderRowColor(): string;

      /**
       * Returns the range for this banding.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getRange()
       */
      getRange(): Range;

      /**
       * Returns the second column color that is alternating, or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getSecondColumnColor()
       */
      getSecondColumnColor(): string;

      /**
       * Returns the second row color that is alternating or null if no color is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#getSecondRowColor()
       */
      getSecondRowColor(): string;

      /**
       * Removes this banding.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#remove()
       */
      remove(): void;

      /**
       * Sets the first column color that is alternating.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setFirstColumnColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setFirstColumnColor(color: string): Banding;

      /**
       * Sets the first row color that is alternating.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setFirstRowColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setFirstRowColor(color: string): Banding;

      /**
       * Sets the color of the last column.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setFooterColumnColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setFooterColumnColor(color: string): Banding;

      /**
       * Sets the color of the last row.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setFooterRowColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setFooterRowColor(color: string): Banding;

      /**
       * Sets the color of the header column.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setHeaderColumnColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setHeaderColumnColor(color: string): Banding;

      /**
       * Sets the color of the header row.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setHeaderRowColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setHeaderRowColor(color: string): Banding;

      /**
       * Sets the range for this banding.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setRange(Range)
       * @param range The new range for this banding.
       */
      setRange(range: Range): Banding;

      /**
       * Sets the second column color that is alternating.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setSecondColumnColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setSecondColumnColor(color: string): Banding;

      /**
       * Sets the second row color that is alternating.
       * https://developers.google.com/apps-script/reference/spreadsheet/banding#setSecondRowColor(String)
       * @param color The color code in CSS notation (such as '#ffffff' or 'white'), or null to clear the color.
       */
      setSecondRowColor(color: string): Banding;
    }
    /**
     * An enumeration of banding themes. Each theme consists of several complementary colors that are
     * applied to different cells based on the banding settings.
     */
    enum BandingTheme { LIGHT_GREY, CYAN, GREEN, YELLOW, ORANGE, BLUE, TEAL, GREY, BROWN, LIGHT_GREEN, INDIGO, PINK }
    /**
     * Access the existing BigQuery data source specification. To create a new data source
     * specification, use SpreadsheetApp.newDataSourceSpec().
     */
    interface BigQueryDataSourceSpec {

      /**
       * Creates a DataSourceSpecBuilder based on this data source's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec#copy()
       */
      copy(): DataSourceSpecBuilder;

      /**
       * Gets the parameters of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec#getParameters()
       */
      getParameters(): DataSourceParameter[];

      /**
       * Gets the billing project ID.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec#getProjectId()
       */
      getProjectId(): string;

      /**
       * Gets the raw query string.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec#getRawQuery()
       */
      getRawQuery(): string;

      /**
       * Gets the type of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec#getType()
       */
      getType(): DataSourceType;
    }
    /**
     * The builder for BigQueryDataSourceSpecBuilder.
     */
    interface BigQueryDataSourceSpecBuilder {

      /**
       * Builds a data source specification from the settings in this builder. Must use as...()
       * to specify a data source type before building.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#build()
       */
      build(): DataSourceSpec;

      /**
       * Creates a DataSourceSpecBuilder based on this data source's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#copy()
       */
      copy(): DataSourceSpecBuilder;

      /**
       * Gets the parameters of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#getParameters()
       */
      getParameters(): DataSourceParameter[];

      /**
       * Gets the billing project ID.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#getProjectId()
       */
      getProjectId(): string;

      /**
       * Gets the raw query string.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#getRawQuery()
       */
      getRawQuery(): string;

      /**
       * Gets the type of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#getType()
       */
      getType(): DataSourceType;

      /**
       * Removes all the parameters.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#removeAllParameters()
       */
      removeAllParameters(): BigQueryDataSourceSpecBuilder;

      /**
       * Removes the specified parameter.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#removeParameter(String)
       * @param parameterName The name of the parameter to remove.
       */
      removeParameter(parameterName: string): BigQueryDataSourceSpecBuilder;

      /**
       * Adds a parameter, or if the parameter with the name exists, updates its source cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#setParameterFromCell(String,String)
       * @param parameterName The parameter name.
       * @param sourceCell The source cell, as specified in A1 notation.
       */
      setParameterFromCell(parameterName: string, sourceCell: string): BigQueryDataSourceSpecBuilder;

      /**
       * Sets the billing BigQuery project ID.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#setProjectId(String)
       * @param projectId The ID of the billing project.
       */
      setProjectId(projectId: string): BigQueryDataSourceSpecBuilder;

      /**
       * Sets the raw query string.
       * https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder#setRawQuery(String)
       * @param rawQuery The raw query string.
       */
      setRawQuery(rawQuery: string): BigQueryDataSourceSpecBuilder;
    }
    /**
     * Access boolean conditions in ConditionalFormatRules. Each
     * conditional format rule may contain a single boolean condition. The boolean condition itself
     * contains a boolean criteria (with values) and formatting settings. The criteria is evaluated
     * against the content of a cell resulting in either a true or false value. If the
     * criteria evaluates to true, the condition's formatting settings are applied to the cell.
     */
    interface BooleanCondition {

      /**
       * Gets the background color string for this boolean condition. Returns null if not set.
       *
       *
       *     // Logs the boolean condition background color for each conditional format rule on a sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var color = rules[i].getBooleanCondition().getBackground();
       *       Logger.log("The background color for rule %s is %s", i, color);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getBackground()
       */
      getBackground(): string;

      /**
       * Returns true if this boolean condition bolds the text and returns false if this
       * boolean condition removes bolding from the text. Returns null if bolding is unaffected.
       *
       *
       *     // Logs the boolean condition font weight for each conditional format rule on a sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var bold = rules[i].getBooleanCondition().getBold();
       *       Logger.log("The font bold setting for rule %s is %b", i, weight);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getBold()
       */
      getBold(): boolean;

      /**
       * Gets the rule's criteria type as defined in the BooleanCriteria enum. To get the
       * arguments for the criteria, use getCriteriaValues(). To use these values to create or
       * modify a conditional formatting rule, see ConditionalFormatRuleBuilder.withCriteria(criteria, args).
       *
       *
       *     // Log information about the conditional formats on the active sheet that use
       *     // boolean conditions.
       *     var sheet = SpreadsheetApp.getActiveSheet;
       *     var formats = sheet.getConditionalFormats();
       *     sheet.getConditionalFormats().forEach(function(format) {
       *       var booleanCondition = format.getBooleanCondition();
       *       if (booleanCondition) {
       *         var criteria = booleanCondition.getCriteriaType();
       *         var args = booleanCondition.getCriteriaValues();
       *         Logger.log('The conditional format rule is %s %s', criteria, args);
       *       }
       *     });
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getCriteriaType()
       */
      getCriteriaType(): BooleanCriteria;

      /**
       * Gets an array of arguments for the rule's criteria. To get the criteria type, use getCriteriaType(). To use these values to create or modify a conditional formatting rule, see
       * ConditionalFormatRuleBuilder.withCriteria(criteria, args).
       *
       *
       *     // Log information about the conditional formats on the active sheet that use
       *     // boolean conditions.
       *     var sheet = SpreadsheetApp.getActiveSheet;
       *     var formats = sheet.getConditionalFormats();
       *     sheet.getConditionalFormats().forEach(function(format) {
       *       var booleanCondition = format.getBooleanCondition();
       *       if (booleanCondition) {
       *         var criteria = booleanCondition.getCriteriaType();
       *         var args = booleanCondition.getCriteriaValues();
       *         Logger.log('The conditional format rule is %s %s', criteria, args);
       *       }
       *     });
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getCriteriaValues()
       */
      getCriteriaValues(): object[];

      /**
       * Gets the font color string for this boolean condition. Returns null if not set.
       *
       *
       *     // Logs the boolean condition font color for each conditional format rule on a sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var color = rules[i].getBooleanCondition().getFontColor();
       *       Logger.log("The font color for rule %s is %s", i, color);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getFontColor()
       */
      getFontColor(): string;

      /**
       * Returns true if this boolean condition italicises the text and returns false if
       * this boolean condition removes italics from the text. Returns null if italics are
       * unaffected.
       *
       *
       *     // Logs the boolean condition font style for each conditional format rule on a sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var italic = rules[i].getBooleanCondition().getItalic();
       *       Logger.log("The font italic setting for rule %s is %b", i, italic);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getItalic()
       */
      getItalic(): boolean;

      /**
       * Returns true if this boolean condition strikes through the text and returns false if this boolean condition removes strikethrough from the text. Returns null if
       * strikethrough is unaffected.
       *
       *
       *     // Logs the boolean condition strikethrough setting for each conditional format rule on a
       *     // sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var strikethrough = rules[i].getBooleanCondition().getStrikethrough();
       *       Logger.log("The font strikethrough setting for rule %s is %b", i, strikethrough);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getStrikethrough()
       */
      getStrikethrough(): boolean;

      /**
       * Returns true if this boolean condition underlines the text and returns false if
       * this boolean condition removes underlining from the text. Returns null if underlining
       * is unaffected.
       *
       *
       *     // Logs the boolean condition underline setting for each conditional format rule on a sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     for (int i = 0; i < rules.length; i++) {
       *       var underline = rules[i].getBooleanCondition().getUnderline();
       *       Logger.log("The font underline setting for rule %s is %b", i, underline);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition#getUnderline()
       */
      getUnderline(): boolean;
    }
    /**
     * An enumeration representing the boolean criteria that can be used in conditional format or
     * filter.
     */
    enum BooleanCriteria { CELL_EMPTY, CELL_NOT_EMPTY, DATE_AFTER, DATE_BEFORE, DATE_EQUAL_TO, DATE_AFTER_RELATIVE, DATE_BEFORE_RELATIVE, DATE_EQUAL_TO_RELATIVE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_STARTS_WITH, TEXT_ENDS_WITH, CUSTOM_FORMULA }
    /**
     * Styles that can be set on a range using Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style).
     */
    enum BorderStyle { DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, DOUBLE }
    /**
     * A representation for a color.
     */
    interface Color {

      /**
       * Converts this color to an RgbColor.
       * https://developers.google.com/apps-script/reference/spreadsheet/color#asRgbColor()
       */
      asRgbColor(): Base.RgbColor;

      /**
       * Converts this color to a ThemeColor.
       * https://developers.google.com/apps-script/reference/spreadsheet/color#asThemeColor()
       */
      asThemeColor(): ThemeColor;

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/spreadsheet/color#getColorType()
       */
      getColorType(): Base.ColorType;
    }
    /**
     * The builder for ColorBuilder. To create a new builder, use SpreadsheetApp.newColor().
     */
    interface ColorBuilder {

      /**
       * Converts this color to an RgbColor.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#asRgbColor()
       */
      asRgbColor(): Base.RgbColor;

      /**
       * Converts this color to a ThemeColor.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#asThemeColor()
       */
      asThemeColor(): ThemeColor;

      /**
       * Creates a color object from the settings supplied to the builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#build()
       */
      build(): Color;

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#getColorType()
       */
      getColorType(): Base.ColorType;

      /**
       * Sets as RGB color.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#setRgbColor(String)
       * @param cssString The RGB color in CSS notation (such as '#ffffff').
       */
      setRgbColor(cssString: string): ColorBuilder;

      /**
       * Sets as theme color.
       * https://developers.google.com/apps-script/reference/spreadsheet/color-builder#setThemeColor(ThemeColorType)
       * @param themeColorType The theme color type.
       */
      setThemeColor(themeColorType: ThemeColorType): ColorBuilder;
    }
    /**
     * Access conditional formatting rules. To create a new rule, use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder.
     * You can use Sheet.setConditionalFormatRules(rules) to set the
     * rules for a given sheet.
     */
    interface ConditionalFormatRule {

      /**
       * Returns a rule builder preset with this rule's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule#copy()
       */
      copy(): ConditionalFormatRuleBuilder;

      /**
       * Retrieves the rule's BooleanCondition information if this rule uses
       * boolean condition criteria. Otherwise returns null.
       *
       *
       *     // Log the boolean criteria type of the first conditional format rules of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var booleanCondition = rule.getBooleanCondition();
       *     if (booleanCondition != null) {
       *       Logger.log(booleanCondition.getCriteriaType());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule#getBooleanCondition()
       */
      getBooleanCondition(): BooleanCondition;

      /**
       * Retrieves the rule's GradientCondition information, if this rule
       * uses gradient condition criteria. Otherwise returns null.
       *
       *
       *     // Log the gradient minimum color of the first conditional format rule of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var gradientCondition = rule.getGradientCondition();
       *     if (gradientCondition != null) {
       *       Logger.log(gradientCondition.getMinColor());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule#getGradientCondition()
       */
      getGradientCondition(): GradientCondition;

      /**
       * Retrieves the ranges to which this conditional format rule is applied.
       *
       *
       *     // Log each range of the first conditional format rule of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var ranges = rule.getRanges();
       *     for (int i = 0; i < ranges.length; i++) {
       *       Logger.log(ranges[i].getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule#getRanges()
       */
      getRanges(): Range[];
    }
    /**
     * Builder for conditional format rules.
     *
     *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
     *     // they contain a number between 1 and 10.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A1:B3");
     *     var rule = SpreadsheetApp.newConditionalFormatRule()
     *         .whenNumberBetween(1, 10)
     *         .setBackground("#FF0000")
     *         .setRanges([range])
     *         .build();
     *     var rules = sheet.getConditionalFormatRules();
     *     rules.push(rule);
     *     sheet.setConditionalFormatRules(rules);
     */
    interface ConditionalFormatRuleBuilder {

      /**
       * Constructs a conditional format rule from the settings applied to the builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#build()
       */
      build(): ConditionalFormatRule;

      /**
       * Returns a rule builder preset with this rule's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#copy()
       */
      copy(): ConditionalFormatRuleBuilder;

      /**
       * Retrieves the rule's BooleanCondition information if this rule uses
       * boolean condition criteria. Otherwise returns null.
       *
       *
       *     // Log the boolean criteria type of the first conditional format rules of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var booleanCondition = rule.getBooleanCondition();
       *     if (booleanCondition != null) {
       *       Logger.log(booleanCondition.getCriteriaType());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#getBooleanCondition()
       */
      getBooleanCondition(): BooleanCondition;

      /**
       * Retrieves the rule's GradientCondition information, if this rule
       * uses gradient condition criteria. Otherwise returns null.
       *
       *
       *     // Log the gradient minimum color of the first conditional format rule of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var gradientCondition = rule.getGradientCondition();
       *     if (gradientCondition != null) {
       *       Logger.log(gradientCondition.getMinColor());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#getGradientCondition()
       */
      getGradientCondition(): GradientCondition;

      /**
       * Retrieves the ranges to which this conditional format rule is applied.
       *
       *
       *     // Log each range of the first conditional format rule of a sheet.
       *     var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
       *     var ranges = rule.getRanges();
       *     for (int i = 0; i < ranges.length; i++) {
       *       Logger.log(ranges[i].getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Sets the background color for the conditional format rule's format. Passing in null
       * removes the background color format setting from the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color to red if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setBackground(String)
       * @param color The desired color or null to clear.
       */
      setBackground(color: string): ConditionalFormatRuleBuilder;

      /**
       * Sets text bolding for the conditional format rule's format. If bold is true,
       * the rule bolds text if the condition is met; if false, the rule removes any existing
       * bolding if the condition is met. Passing in null removes the bold format setting from
       * the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
       *     // text bold if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setBold(true)
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setBold(Boolean)
       * @param bold Whether or not the text should be bolded if the format condition is met; null removes this setting.
       */
      setBold(bold: boolean): ConditionalFormatRuleBuilder;

      /**
       * Sets the font color for the conditional format rule's format. Passing in null removes
       * the font color format setting from the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
       *     // color to red if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setFontColor("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setFontColor(String)
       * @param color The desired color or null to clear.
       */
      setFontColor(color: string): ConditionalFormatRuleBuilder;

      /**
       * Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
       * value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color somewhere between white and red, based on their values in comparison to
       *     // the ranges minimum and maximum values.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .setGradientMaxpoint("#FF0000")
       *         .setGradientMinpoint("#FFFFFF")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setGradientMaxpoint(String)
       * @param color The maxpoint color to set.
       */
      setGradientMaxpoint(color: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule's gradient maxpoint fields.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color somewhere from red green to blue, based on their values in comparison to
       *     // the values 0, 50, and 100.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
       *         .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
       *         .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setGradientMaxpointWithValue(String,InterpolationType,String)
       * @param color The maxpoint color to set.
       * @param type The maxpoint interpolation type to set.
       * @param value The maxpoint value to set.
       */
      setGradientMaxpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
       * if the passed in interpolation type is null.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color somewhere from red green to blue, based on their values in comparison to
       *     // the values 0, 50, and 100.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
       *         .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
       *         .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setGradientMidpointWithValue(String,InterpolationType,String)
       * @param color The midpoint color to set.
       * @param type The midpoint interpolation type to set or null to clear.
       * @param value The midpoint value to set.
       */
      setGradientMidpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;

      /**
       * Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
       * value in the rule's ranges. Also sets the gradient's minpoint color to the input color.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color somewhere between white and red, based on their values in comparison to
       *     // the ranges minimum and maximum values.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .setGradientMaxpoint("#FF0000")
       *         .setGradientMinpoint("#FFFFFF")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setGradientMinpoint(String)
       * @param color The minpoint color to set.
       */
      setGradientMinpoint(color: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule's gradient minpoint fields.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
       *     // background color somewhere from red to green to blue, based on their values in comparison to
       *     // the values 0, 50, and 100.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
       *         .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
       *         .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setGradientMinpointWithValue(String,InterpolationType,String)
       * @param color The minpoint color to set.
       * @param type The minpoint interpolation type to set.
       * @param value The minpoint value to set.
       */
      setGradientMinpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;

      /**
       * Sets text italics for the conditional format rule's format. If italic is true,
       * the rule italicises text if the condition is met; if false, the rule removes any
       * existing italicization if the condition is met. Passing in null removes the italic
       * format setting from the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
       *     // text italic if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setItalic(true)
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setItalic(Boolean)
       * @param italic Whether or not the text should be italicised if the format condition is met; null removes this setting.
       */
      setItalic(italic: boolean): ConditionalFormatRuleBuilder;

      /**
       * Sets one or more ranges to which this conditional format rule is applied. This operation
       * replaces any existing ranges. Setting an empty array clears any existing ranges. A rule must
       * have at least one range.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 and range D4:F6
       *     // to turn red if they contain a number between 1 and 10.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeOne = sheet.getRange("A1:B3");
       *     var rangeTwo = sheet.getRange("D4:F6");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberBetween(1, 10)
       *         .setBackground("#FF0000")
       *         .setRanges([rangeOne, rangeTwo])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setRanges(Range)
       * @param ranges The ranges to which this conditional format rule is applied.
       */
      setRanges(ranges: Range[]): ConditionalFormatRuleBuilder;

      /**
       * Sets text strikethrough for the conditional format rule's format. If strikethrough is
       * true, the rule strikesthrough text if the condition is met; if false, the rule
       * removes any existing strikethrough formatting if the condition is met. Passing in null
       * removes the strikethrough format setting from the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to strikethrough
       *     // their text if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setStrikethrough(true)
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setStrikethrough(Boolean)
       * @param strikethrough Whether or not the text should be struckthrough if the format condition is met; null removes this setting.
       */
      setStrikethrough(strikethrough: boolean): ConditionalFormatRuleBuilder;

      /**
       * Sets text underlining for the conditional format rule's format. If underline is true, the rule underlines text if the condition is met; if false, the rule removes any
       * existing underlines if the condition is met. Passing in null removes the underline
       * format setting from the rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to underline
       *     // their text if the cell has text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setUnderline(true)
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#setUnderline(Boolean)
       * @param underline Whether or not the text should be underlined if the format condition is met; null removes this setting.
       */
      setUnderline(underline: boolean): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when the cell is empty.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they are empty.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenCellEmpty()
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenCellEmpty()
       */
      whenCellEmpty(): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when the cell is not empty.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they are not empty.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenCellNotEmpty()
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenCellNotEmpty()
       */
      whenCellNotEmpty(): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is after the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a date after 11/4/1993.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateAfter(new Date("11/4/1993"))
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateAfter(Date)
       * @param date The latest date.
       */
      whenDateAfter(date: Date): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is after the given relative date.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a date after today.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateAfter(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateAfter(date: RelativeDate): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is before the given date.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a date before 11/4/1993.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateBefore(new Date("11/4/1993"))
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateBefore(Date)
       * @param date The earliest unacceptable date.
       */
      whenDateBefore(date: Date): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is before the given relative date.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a date before today.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateBefore(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateBefore(date: RelativeDate): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is equal to the given date.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain the date 11/4/1993.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateEqualTo(new Date("11/4/1993"))
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateEqualTo(Date)
       * @param date The sole acceptable date.
       */
      whenDateEqualTo(date: Date): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a date is equal to the given relative date.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain todays date.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenDateEqualTo(SpreadsheetApp.RelativeDate.TODAY)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenDateEqualTo(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateEqualTo(date: RelativeDate): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the given formula evaluates to true.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they satisfy the condition "=EQ(B4, C3)".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenFormulaSatisfied("=EQ(B4, C3)")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenFormulaSatisfied(String)
       * @param formula A custom formula that evaluates to true if the input is valid.
       */
      whenFormulaSatisfied(formula: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number falls between, or is either of, two
       * specified values.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a number between 1 and 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberBetween(1, 10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberBetween(Number,Number)
       * @param start The lowest acceptable value.
       * @param end The highest acceptable value.
       */
      whenNumberBetween(start: number, end: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number is equal to the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain the number 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberEqualTo(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberEqualTo(Number)
       * @param number The sole acceptable value.
       */
      whenNumberEqualTo(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number is greater than the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red
       *     // if they contain a number greater than 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberGreaterThan(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberGreaterThan(Number)
       * @param number The highest unacceptable value.
       */
      whenNumberGreaterThan(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number is greater than or equal to the given
       * value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a number greater than or equal to 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberGreaterThanOrEqualTo(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberGreaterThanOrEqualTo(Number)
       * @param number The lowest acceptable value.
       */
      whenNumberGreaterThanOrEqualTo(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional conditional format rule to trigger when a number less than the given
       * value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a number less than 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberLessThan(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberLessThan(Number)
       * @param number The lowest unacceptable value.
       */
      whenNumberLessThan(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number less than or equal to the given
       * value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a number less than or equal to 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberLessThanOrEqualTo(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberLessThanOrEqualTo(Number)
       * @param number The highest acceptable value.
       */
      whenNumberLessThanOrEqualTo(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number does not fall between, and is neither
       * of, two specified values.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain a number not between 1 and 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberNotBetween(1, 10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberNotBetween(Number,Number)
       * @param start The lowest unacceptable value.
       * @param end The highest unacceptable value.
       */
      whenNumberNotBetween(start: number, end: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when a number is not equal to the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they don't contain the number 10.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberNotEqualTo(10)
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenNumberNotEqualTo(Number)
       * @param number The sole unacceptable value.
       */
      whenNumberNotEqualTo(number: number): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the input contains the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they contain the text "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextContains("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenTextContains(String)
       * @param text The value that the input must contain.
       */
      whenTextContains(text: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the input does not contain the given
       * value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they don't contain the text "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextDoesNotContain("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenTextDoesNotContain(String)
       * @param text The value that the input must not contain.
       */
      whenTextDoesNotContain(text: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the input ends with the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they end with the text "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEndsWith("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenTextEndsWith(String)
       * @param text Text to compare against the end of the string.
       */
      whenTextEndsWith(text: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the input is equal to the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they have text equal to "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextEqualTo("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenTextEqualTo(String)
       * @param text The sole acceptable value.
       */
      whenTextEqualTo(text: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to trigger when that the input starts with the given value.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
       *     // they start with the text "hello".
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B3");
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenTextStartsWith("hello")
       *         .setBackground("#FF0000")
       *         .setRanges([range])
       *         .build();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#whenTextStartsWith(String)
       * @param text Text to compare against the beginning of the string.
       */
      whenTextStartsWith(text: string): ConditionalFormatRuleBuilder;

      /**
       * Sets the conditional format rule to criteria defined by BooleanCriteria values,
       * typically taken from the criteria and arguments of an
       * existing rule.
       *
       *
       *     // Adds a new conditional format rule that is a copy of the first active
       *     // conditional format rule, except it instead sets its cells to have a black
       *     // background color.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     var booleanCondition = rules[0].getBooleanCondition();
       *     if (booleanCondition != null) {
       *       var rule = SpreadsheetApp.newConditionalFormatRule()
       *           .withCriteria(booleanCondition.getCriteriaType(),
       *              booleanCondition.getCriteriaValues())
       *           .setBackground("#000000")
       *           .build();
       *       rules.push(rule);
       *     }
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder#withCriteria(BooleanCriteria,Object)
       * @param criteria The type of conditional format criteria.
       * @param args An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding when...() method above.
       */
      withCriteria(criteria: BooleanCriteria, args: object[]): ConditionalFormatRuleBuilder;
    }
    /**
     * Access the chart's position within a sheet. Can be updated using the EmbeddedChart.modify() function.
     *
     *     chart = chart.modify().setPosition(5, 5, 0, 0).build();
     *     sheet.updateChart(chart);
     */
    interface ContainerInfo {

      /**
       * The chart's left side is anchored in this column.
       * https://developers.google.com/apps-script/reference/spreadsheet/container-info#getAnchorColumn()
       */
      getAnchorColumn(): Integer;

      /**
       * The chart's top side is anchored in this row.
       * https://developers.google.com/apps-script/reference/spreadsheet/container-info#getAnchorRow()
       */
      getAnchorRow(): Integer;

      /**
       * The chart's upper left hand corner is offset from the anchor column by this many pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/container-info#getOffsetX()
       */
      getOffsetX(): Integer;

      /**
       * The chart's upper left hand corner is offset from the anchor row by this many pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/container-info#getOffsetY()
       */
      getOffsetY(): Integer;
    }
    /**
     * An enumeration of possible special paste types.
     */
    enum CopyPasteType { PASTE_NORMAL, PASTE_NO_BORDERS, PASTE_FORMAT, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_VALUES, PASTE_CONDITIONAL_FORMATTING, PASTE_COLUMN_WIDTHS }
    /**
     * An enumeration of data execution error codes.
     */
    enum DataExecutionErrorCode { DATA_EXECUTION_ERROR_CODE_UNSUPPORTED, NONE, TIME_OUT, TOO_MANY_ROWS, TOO_MANY_CELLS, ENGINE, PARAMETER_INVALID, UNSUPPORTED_DATA_TYPE, DUPLICATE_COLUMN_NAMES, INTERRUPTED, OTHER, TOO_MANY_CHARS_PER_CELL }
    /**
     * An enumeration of data execution states.
     */
    enum DataExecutionState { DATA_EXECUTION_STATE_UNSUPPORTED, RUNNING, SUCCESS, ERROR, NOT_STARTED }
    /**
     * The data execution status.
     */
    interface DataExecutionStatus {

      /**
       * Gets the error code of the data execution.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status#getErrorCode()
       */
      getErrorCode(): DataExecutionErrorCode;

      /**
       * Gets the error message of the data execution. The message may be empty.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status#getErrorMessage()
       */
      getErrorMessage(): string;

      /**
       * Gets the state of the data execution.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status#getExecutionState()
       */
      getExecutionState(): DataExecutionState;

      /**
       * Gets the time the data last successfully refreshed.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status#getLastRefreshedTime()
       */
      getLastRefreshedTime(): Date;

      /**
       * Returns true if the data from last successful execution is truncated, or false
       * otherwise.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status#isTruncated()
       */
      isTruncated(): boolean;
    }
    /**
     * Access and modify existing data source. To create a data source table with new data source, see
     * DataSourceTable.
     */
    interface DataSource {

      /**
       * Gets the data source specification.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source#getSpec()
       */
      getSpec(): DataSourceSpec;

      /**
       * Updates the data source specification and refreshes the data source objects linked with this
       * data source with the new specification.
       *
       *
       * Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
       * type.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source#updateSpec(DataSourceSpec)
       * @param spec The data source specification to update with.
       */
      updateSpec(spec: DataSourceSpec): DataSource;
    }
    /**
     * Access existing data source parameters.
     */
    interface DataSourceParameter {

      /**
       * Gets the parameter name.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter#getName()
       */
      getName(): string;

      /**
       * Gets the source cell the parameter is valued based on, or null if the parameter type is
       * not DataSourceParameterType.CELL.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter#getSourceCell()
       */
      getSourceCell(): string;

      /**
       * Gets the parameter type.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter#getType()
       */
      getType(): DataSourceParameterType;
    }
    /**
     * An enumeration of data source parameter types.
     */
    enum DataSourceParameterType { DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED, CELL }
    /**
     * Access the general settings of an existing data source spec. To access data source spec for
     * certain type, use as...() method. To create a new data source spec, use SpreadsheetApp.newDataSourceSpec().
     *
     * This example shows how to get information from a BigQuery data source spec.
     *
     *     var dataSourceTable =
     *         SpreadsheetApp.getActive().getSheetByName("Data Sheet 1").getDataSourceTables()[0];
     *     var spec = dataSourceTable.getDataSource().getSpec();
     *     if (spec.getType() == SpreadsheetApp.DataSourceType.BIGQUERY) {
     *       var bqSpec = spec.asBigQuery();
     *       Logger.log("Project ID: %s\n", bqSpec.getProjectId());
     *       Logger.log("Raw query string: %s\n", bqSpec.getRawQuery());
     *     }
     */
    interface DataSourceSpec {

      /**
       * Gets the spec for BigQuery data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec#asBigQuery()
       */
      asBigQuery(): BigQueryDataSourceSpec;

      /**
       * Creates a DataSourceSpecBuilder based on this data source's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec#copy()
       */
      copy(): DataSourceSpecBuilder;

      /**
       * Gets the parameters of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec#getParameters()
       */
      getParameters(): DataSourceParameter[];

      /**
       * Gets the type of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec#getType()
       */
      getType(): DataSourceType;
    }
    /**
     * The builder for DataSourceSpec. To create a specification for certain type, use as...() method. To create a new builder, use SpreadsheetApp.newDataSourceSpec(). To use the specification, see DataSourceTable.
     *
     * This examples show how to build a BigQuery data source specification.
     *
     *     var spec = SpreadsheetApp.newDataSourceSpec()
     *                .asBigQuery()
     *                .setProjectId('big_query_project')
     *                .setRawQuery('select @FIELD from table limit @LIMIT')
     *                .setParameterFromCell('FIELD', 'Sheet1!A1')
     *                .setParameterFromCell('LIMIT', 'namedRangeCell')
     *                .build();
     */
    interface DataSourceSpecBuilder {

      /**
       * Gets the builder for BigQuery data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#asBigQuery()
       */
      asBigQuery(): BigQueryDataSourceSpecBuilder;

      /**
       * Builds a data source specification from the settings in this builder. Must use as...()
       * to specify a data source type before building.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#build()
       */
      build(): DataSourceSpec;

      /**
       * Creates a DataSourceSpecBuilder based on this data source's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#copy()
       */
      copy(): DataSourceSpecBuilder;

      /**
       * Gets the parameters of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#getParameters()
       */
      getParameters(): DataSourceParameter[];

      /**
       * Gets the type of the data source.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#getType()
       */
      getType(): DataSourceType;

      /**
       * Removes all the parameters.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#removeAllParameters()
       */
      removeAllParameters(): DataSourceSpecBuilder;

      /**
       * Removes the specified parameter.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#removeParameter(String)
       * @param parameterName The name of the parameter to remove.
       */
      removeParameter(parameterName: string): DataSourceSpecBuilder;

      /**
       * Adds a parameter, or if the parameter with the name exists, updates its source cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder#setParameterFromCell(String,String)
       * @param parameterName The parameter name.
       * @param sourceCell The source cell, as specified in A1 notation.
       */
      setParameterFromCell(parameterName: string, sourceCell: string): DataSourceSpecBuilder;
    }
    /**
     * Access and modify existing data source table. To create a new data source table on a new sheet,
     * use Spreadsheet.insertSheetWithDataSourceTable(spec).
     *
     * This example shows how to create a new data source table.
     *
     *     SpreadsheetApp.enableBigQueryExecution();
     *     var spreadsheet = SpreadsheetApp.getActive();
     *     var spec = SpreadsheetApp.newDataSourceSpec()
     *                .asBigQuery()
     *                .setProjectId('big_query_project')
     *                .setRawQuery('select @FIELD from table limit @LIMIT')
     *                .setParameterFromCell('FIELD', 'Sheet1!A1')
     *                .setParameterFromCell('LIMIT', 'namedRangeCell')
     *                .build();
     *     // Starts data execution asynchronously.
     *     var dataSheet = spreadsheet.insertSheetWithDataSourceTable(spec);
     *     var dataSourceTable = dataSheet.getDataSourceTables()[0];
     *     // waitForCompletion() blocks script execution until data execution completes.
     *     dataSourceTable.waitForCompletion(60);
     *     // Check status after execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     *
     * This example shows how to edit a data source.
     *
     *     SpreadsheetApp.enableBigQueryExecution();
     *     var dataSheet = SpreadsheetApp.getActive().getSheetByName("Data Sheet 1");
     *     var dataSourceTable = dataSheet.getDataSourceTables()[0];
     *     var dataSource = dataSourceTable.getDataSource();
     *     var newSpec = dataSource.getSpec()
     *                   .copy()
     *                   .asBigQuery()
     *                   .setRawQuery('select name from table limit 2')
     *                   .removeAllParameters()
     *                   .build();
     *     // Updates data source specification and starts data execution asynchronously.
     *     dataSource.updateSpec(newSpec);
     *     // Check status during execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     *     // waitForCompletion() blocks script execution until data execution completes.
     *     dataSourceTable.waitForCompletion(60);
     *     // Check status after execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     */
    interface DataSourceTable {

      /**
       * Refreshes the data of this object regardless of the current state. See refreshData() for
       * more details.
       *
       *
       * Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
       * type.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#forceRefreshData()
       */
      forceRefreshData(): DataSourceTable;

      /**
       * Gets the data source the object is linked to.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#getDataSource()
       */
      getDataSource(): DataSource;

      /**
       * Gets the Range this data source table spans.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#getRange()
       */
      getRange(): Range;

      /**
       * Gets the data execution status of the object.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#getStatus()
       */
      getStatus(): DataExecutionStatus;

      /**
       * Refreshes the data of the object.
       *
       *
       * Throws an exception if currently in error state. Use DataSource#updateSpec() to update specificiation. The method is
       * preferred over forceRefreshData() to prevent unexpected edits on data source.
       *
       *
       * Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
       * type.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#refreshData()
       */
      refreshData(): DataSourceTable;

      /**
       * Waits until the current execution completes, timing out after the provided number of seconds.
       * Throws an exception if the execution is not completed when timing out, but does not cancel the
       * data execution.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-source-table#waitForCompletion(Integer)
       * @param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300 seconds.
       */
      waitForCompletion(timeoutInSeconds: Integer): DataExecutionStatus;
    }
    /**
     * An enumeration of data source types.
     */
    enum DataSourceType { DATA_SOURCE_TYPE_UNSUPPORTED, BIGQUERY }
    /**
     * Access data validation rules. To create a new rule, use SpreadsheetApp.newDataValidation() and DataValidationBuilder. You can use
     * Range.setDataValidation(rule) to set the validation rule for a range.
     *
     *     // Log information about the data validation rule for cell A1.
     *     var cell = SpreadsheetApp.getActive().getRange('A1');
     *     var rule = cell.getDataValidation();
     *     if (rule != null) {
     *       var criteria = rule.getCriteriaType();
     *       var args = rule.getCriteriaValues();
     *       Logger.log('The data validation rule is %s %s', criteria, args);
     *     } else {
     *       Logger.log('The cell does not have a data validation rule.')
     *     }
     */
    interface DataValidation {

      /**
       * Creates a builder for a data validation rule based on this rule's settings.
       *
       *
       *     // Change existing data validation rules that require a date in 2013 to require a date in 2014.
       *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
       *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
       *     var rules = range.getDataValidations();
       *
       *     for (var i = 0; i < rules.length; i++) {
       *       for (var j = 0; j < rules[i].length; j++) {
       *         var rule = rules[i][j];
       *
       *         if (rule != null) {
       *           var criteria = rule.getCriteriaType();
       *           var args = rule.getCriteriaValues();
       *
       *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
       *               && args[0].getTime() == oldDates[0].getTime()
       *               && args[1].getTime() == oldDates[1].getTime()) {
       *             // Create a builder from the existing rule, then change the dates.
       *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       *           }
       *         }
       *       }
       *     }
       *     range.setDataValidations(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation#copy()
       */
      copy(): DataValidationBuilder;

      /**
       * Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely. The default for new data validation rules is true.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation#getAllowInvalid()
       */
      getAllowInvalid(): boolean;

      /**
       * Gets the rule's criteria type as defined in the DataValidationCriteria enum. To get the
       * arguments for the criteria, use getCriteriaValues(). To use these values to create or
       * modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args).
       *
       *
       *     // Log information about the data validation rule for cell A1.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = cell.getDataValidation();
       *     if (rule != null) {
       *       var criteria = rule.getCriteriaType();
       *       var args = rule.getCriteriaValues();
       *       Logger.log('The data validation rule is %s %s', criteria, args);
       *     } else {
       *       Logger.log('The cell does not have a data validation rule.')
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation#getCriteriaType()
       */
      getCriteriaType(): DataValidationCriteria;

      /**
       * Gets an array of arguments for the rule's criteria. To get the criteria type, use getCriteriaType(). To use these values to create or modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args).
       *
       *
       *     // Log information about the data validation rule for cell A1.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = cell.getDataValidation();
       *     if (rule != null) {
       *       var criteria = rule.getCriteriaType();
       *       var args = rule.getCriteriaValues();
       *       Logger.log('The data validation rule is %s %s', criteria, args);
       *     } else {
       *       Logger.log('The cell does not have a data validation rule.')
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation#getCriteriaValues()
       */
      getCriteriaValues(): object[];

      /**
       * Gets the rule's help text, or null if no help text is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation#getHelpText()
       */
      getHelpText(): string;
    }
    /**
     * Builder for data validation rules.
     *
     *     // Set the data validation for cell A1 to require a value from B1:B10.
     *     var cell = SpreadsheetApp.getActive().getRange('A1');
     *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
     *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
     *     cell.setDataValidation(rule);
     */
    interface DataValidationBuilder {

      /**
       * Constructs a data validation rule from the settings applied to the builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#build()
       */
      build(): DataValidation;

      /**
       * Creates a builder for a data validation rule based on this rule's settings.
       *
       *
       *     // Change existing data validation rules that require a date in 2013 to require a date in 2014.
       *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
       *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
       *     var rules = range.getDataValidations();
       *
       *     for (var i = 0; i < rules.length; i++) {
       *       for (var j = 0; j < rules[i].length; j++) {
       *         var rule = rules[i][j];
       *
       *         if (rule != null) {
       *           var criteria = rule.getCriteriaType();
       *           var args = rule.getCriteriaValues();
       *
       *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
       *               && args[0].getTime() == oldDates[0].getTime()
       *               && args[1].getTime() == oldDates[1].getTime()) {
       *             // Create a builder from the existing rule, then change the dates.
       *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       *           }
       *         }
       *       }
       *     }
       *     range.setDataValidations(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#copy()
       */
      copy(): DataValidationBuilder;

      /**
       * Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely. The default for new data validation rules is true.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#getAllowInvalid()
       */
      getAllowInvalid(): boolean;

      /**
       * Gets the rule's criteria type as defined in the DataValidationCriteria enum. To get the
       * arguments for the criteria, use getCriteriaValues(). To use these values to create or
       * modify a data validation rule, see withCriteria(criteria, args).
       *
       *
       *     // Log information about the data validation rule for cell A1.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = cell.getDataValidation();
       *     if (rule != null) {
       *       var criteria = rule.getCriteriaType();
       *       var args = rule.getCriteriaValues();
       *       Logger.log('The data validation rule is %s %s', criteria, args);
       *     } else {
       *       Logger.log('The cell does not have a data validation rule.')
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#getCriteriaType()
       */
      getCriteriaType(): DataValidationCriteria;

      /**
       * Gets an array of arguments for the rule's criteria. To get the criteria type, use getCriteriaType(). To use these values to create or modify a data validation rule, see withCriteria(criteria, args).
       *
       *
       *     // Log information about the data validation rule for cell A1.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = cell.getDataValidation();
       *     if (rule != null) {
       *       var criteria = rule.getCriteriaType();
       *       var args = rule.getCriteriaValues();
       *       Logger.log('The data validation rule is %s %s', criteria, args);
       *     } else {
       *       Logger.log('The cell does not have a data validation rule.')
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#getCriteriaValues()
       */
      getCriteriaValues(): object[];

      /**
       * Gets the rule's help text, or null if no help text is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#getHelpText()
       */
      getHelpText(): string;

      /**
       * Sets the data validation rule to require that the input is a boolean value; this value is
       * rendered as a checkbox.
       *
       *
       *     // Set the data validation for cell A1 to require a boolean value; the value is rendered as a
       *     // checkbox.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireCheckbox()
       */
      requireCheckbox(): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is the specified value or blank. When
       * the input matches the specified value the cell is rendered as a checked checkbox. When the
       * input is blank the cell is rendered as an unchecked checkbox.
       *
       *
       *     // Set the data validation for cell A1 to require a custom checked value that is rendered as a
       *     // checkbox.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireCheckbox(Object)
       * @param checkedValue The value assigned to a checked box.
       */
      requireCheckbox(checkedValue: object): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is one of the specified values. When
       * the input is checkedValue the cell is rendered as a checked checkbox. When the
       * input is uncheckedValue the cell is rendered as an unchecked checkbox.
       *
       *
       *     // Set the data validation for cell A1 to require custom checked values that are rendered as a
       *     // checkbox.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED', 'PENDING').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireCheckbox(Object,Object)
       * @param checkedValue The value assigned to a checked box.
       * @param uncheckedValue The value assigned to an unchecked box.
       */
      requireCheckbox(checkedValue: object, uncheckedValue: object): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date.
       *
       *
       *     // Set the data validation for cell A1 to require a date.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireDate().build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDate()
       */
      requireDate(): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date after the given value. The time fields of the
       * Date object are ignored; only the day, month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date after January 1, 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireDateAfter(new Date('1/1/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateAfter(Date)
       * @param date The latest unacceptable date.
       */
      requireDateAfter(date: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date before the given value. The time fields of the
       * Date object are ignored; only the day, month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date before January 1, 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireDateBefore(new Date('1/1/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateBefore(Date)
       * @param date The earliest unacceptable date.
       */
      requireDateBefore(date: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date that falls between, or is either of, two
       * specified dates. The time fields of the Date objects are ignored; only the day, month,
       * and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date in 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation()
       *         .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateBetween(Date,Date)
       * @param start The earliest acceptable date.
       * @param end The latest acceptable date.
       */
      requireDateBetween(start: Date, end: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date equal to the given value. The time fields of
       * the Date object are ignored; only the day, month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date equal to January 1, 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireDateEqualTo(new Date('1/1/2013'))
       *         .build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateEqualTo(Date)
       * @param date The sole acceptable date.
       */
      requireDateEqualTo(date: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date that does not fall between, and is neither of,
       * two specified dates. The time fields of the Date objects are ignored; only the day,
       * month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date not in 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation()
       *         .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateNotBetween(Date,Date)
       * @param start The earliest unacceptable date.
       * @param end The latest unacceptable date.
       */
      requireDateNotBetween(start: Date, end: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date on or after the given value. The time fields of
       * the Date object are ignored; only the day, month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date on or after January 1, 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation()
       *         .requireDateOnOrAfter(new Date('1/1/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateOnOrAfter(Date)
       * @param date The earliest acceptable date.
       */
      requireDateOnOrAfter(date: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a date on or before the given value. The time fields
       * of the Date object are ignored; only the day, month, and year fields are used.
       *
       *
       *     // Set the data validation for cell A1 to require a date on or before January 1, 2013.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation()
       *         .requireDateOnOrBefore(new Date('1/1/2013')).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireDateOnOrBefore(Date)
       * @param date The latest acceptable date.
       */
      requireDateOnOrBefore(date: Date): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the given formula evaluates to true.
       *
       *
       *     // Set the data validation for cell A1 to equal B1 with a custom formula.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied('=EQ(A1,B1)').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireFormulaSatisfied(String)
       * @param formula A custom formula that evaluates to true if the input is valid.
       */
      requireFormulaSatisfied(formula: string): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number that falls between, or is either of, two
       * specified numbers.
       *
       *
       *     // Set the data validation for cell A1 to require a number between 1 and 10.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberBetween(Number,Number)
       * @param start The lowest acceptable value.
       * @param end The highest acceptable value.
       */
      requireNumberBetween(start: number, end: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number equal to the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number equal to 3.1415926536.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberEqualTo(3.1415926536).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberEqualTo(Number)
       * @param number The sole acceptable value.
       */
      requireNumberEqualTo(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number greater than the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number greater than 0.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberGreaterThan(Number)
       * @param number The highest unacceptable value.
       */
      requireNumberGreaterThan(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number greater than or equal to the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number greater than or equal to 0.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberGreaterThanOrEqualTo(Number)
       * @param number The lowest acceptable value.
       */
      requireNumberGreaterThanOrEqualTo(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number less than the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number less than 0.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberLessThan(Number)
       * @param number The lowest unacceptable value.
       */
      requireNumberLessThan(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number less than or equal to the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number less than or equal to 0.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberLessThanOrEqualTo(0).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberLessThanOrEqualTo(Number)
       * @param number The highest acceptable value.
       */
      requireNumberLessThanOrEqualTo(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number that does not fall between, and is neither
       * of, two specified numbers.
       *
       *
       *     // Set the data validation for cell A1 to require a number not between 1 and 10.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberNotBetween(Number,Number)
       * @param start The lowest unacceptable value.
       * @param end The highest unacceptable value.
       */
      requireNumberNotBetween(start: number, end: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require a number not equal to the given value.
       *
       *
       *     // Set the data validation for cell A1 to require a number not equal to 0.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireNumberNotEqualTo(Number)
       * @param number The sole unacceptable value.
       */
      requireNumberNotEqualTo(number: number): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input contains the given value.
       *
       *
       *     // Set the data validation for cell A1 to require any value that includes "Google".
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireTextContains(String)
       * @param text The value that the input must contain.
       */
      requireTextContains(text: string): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input does not contain the given value.
       *
       *
       *     // Set the data validation for cell A1 to require any value that does not include "@".
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireTextDoesNotContain(String)
       * @param text The value that the input must not contain.
       */
      requireTextDoesNotContain(text: string): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is equal to the given value.
       *
       *
       *     // Set the data validation for cell A1 to require "Yes".
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireTextEqualTo(String)
       * @param text The sole acceptable value.
       */
      requireTextEqualTo(text: string): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is in the form of an email address.
       *
       *
       *     // Set the data validation for cell A1 to require text in the form of an email address.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireTextIsEmail()
       */
      requireTextIsEmail(): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is in the form of a URL.
       *
       *
       *     // Set the data validation for cell A1 to require text in the form of a URL.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireTextIsUrl()
       */
      requireTextIsUrl(): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is equal to one of the given values.
       *
       *
       *     // Set the data validation for cell A1 to require "Yes" or "No", with a dropdown menu.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No']).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireValueInList(String)
       * @param values An array of acceptable values.
       */
      requireValueInList(values: string[]): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is equal to one of the given values,
       * with an option to hide the dropdown menu.
       *
       *
       *     // Set the data validation for cell A1 to require "Yes" or "No", with no dropdown menu.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], false).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireValueInList(String,Boolean)
       * @param values An array of acceptable values.
       * @param showDropdown true if the spreadsheet should show a dropdown menu for the values; false if not.
       */
      requireValueInList(values: string[], showDropdown: boolean): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is equal to a value in the given range.
       *
       *
       *     // Set the data validation for cell A1 to require a value from B1:B10, with a dropdown menu.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireValueInRange(Range)
       * @param range A range that contains the acceptable values.
       */
      requireValueInRange(range: Range): DataValidationBuilder;

      /**
       * Sets the data validation rule to require that the input is equal to a value in the given range,
       * with an option to hide the dropdown menu.
       *
       *
       *     // Set the data validation for cell A1 to require value from B1:B10, with no dropdown menu.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range, false).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#requireValueInRange(Range,Boolean)
       * @param range A range that contains the acceptable values.
       * @param showDropdown true if the spreadsheet should show a dropdown menu for the values; false if not.
       */
      requireValueInRange(range: Range, showDropdown: boolean): DataValidationBuilder;

      /**
       * Sets whether to show a warning when input fails data validation or whether to reject the input
       * entirely. The default for new data validation rules is true.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#setAllowInvalid(Boolean)
       * @param allowInvalidData true if the rule should allow input that fails data validation; false if not.
       */
      setAllowInvalid(allowInvalidData: boolean): DataValidationBuilder;

      /**
       * Sets the help text that appears when the user hovers over the cell on which data validation is
       * set.
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#setHelpText(String)
       * @param helpText The help text to set.
       */
      setHelpText(helpText: string): DataValidationBuilder;

      /**
       * Sets the data validation rule to criteria defined by DataValidationCriteria values,
       * typically taken from the criteria and arguments of an existing rule.
       *
       *
       *     // Change existing data validation rules that require a date in 2013 to require a date in 2014.
       *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
       *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
       *     var rules = range.getDataValidations();
       *
       *     for (var i = 0; i < rules.length; i++) {
       *       for (var j = 0; j < rules[i].length; j++) {
       *         var rule = rules[i][j];
       *
       *         if (rule != null) {
       *           var criteria = rule.getCriteriaType();
       *           var args = rule.getCriteriaValues();
       *
       *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
       *               && args[0].getTime() == oldDates[0].getTime()
       *               && args[1].getTime() == oldDates[1].getTime()) {
       *             // Create a builder from the existing rule, then change the dates.
       *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       *           }
       *         }
       *       }
       *     }
       *     range.setDataValidations(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder#withCriteria(DataValidationCriteria,Object)
       * @param criteria The type of data validation criteria.
       * @param args An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding require...() method above.
       */
      withCriteria(criteria: DataValidationCriteria, args: object[]): DataValidationBuilder;
    }
    /**
     * An enumeration representing the data validation criteria that can be set on a range.
     *
     *     // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
     *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
     *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
     *     var rules = range.getDataValidations();
     *
     *     for (var i = 0; i < rules.length; i++) {
     *       for (var j = 0; j < rules[i].length; j++) {
     *         var rule = rules[i][j];
     *
     *         if (rule != null) {
     *           var criteria = rule.getCriteriaType();
     *           var args = rule.getCriteriaValues();
     *
     *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
     *               && args[0].getTime() == oldDates[0].getTime()
     *               && args[1].getTime() == oldDates[1].getTime()) {
     *             // Create a builder from the existing rule, then change the dates.
     *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
     *           }
     *         }
     *       }
     *     }
     *     range.setDataValidations(rules);
     */
    enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA, CHECKBOX }
    /**
     * Access and modify developer metadata. To create new developer metadata use Range.addDeveloperMetadata(key), Sheet.addDeveloperMetadata(key), or Spreadsheet.addDeveloperMetadata(key).
     */
    interface DeveloperMetadata {

      /**
       * Returns the unique ID associated with this developer metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#getId()
       */
      getId(): Integer;

      /**
       * Returns the key associated with this developer metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#getKey()
       */
      getKey(): string;

      /**
       * Returns the location of this developer metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#getLocation()
       */
      getLocation(): DeveloperMetadataLocation;

      /**
       * Returns the value associated with this developer metadata, or null if this metadata has
       * no value.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#getValue()
       */
      getValue(): string;

      /**
       * Returns the visibility of this developer metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#getVisibility()
       */
      getVisibility(): DeveloperMetadataVisibility;

      /**
       * Moves this developer metadata to the specified column. If the specified range does not
       * represent a single column this throws an exception.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#moveToColumn(Range)
       * @param column The range representing the column that is the new location for this developer metadata.
       */
      moveToColumn(column: Range): DeveloperMetadata;

      /**
       * Moves this developer metadata to the specified row. If the specified range does not represent a
       * single row this throws an exception.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#moveToRow(Range)
       * @param row The range representing the row that is the new location for this developer metadata.
       */
      moveToRow(row: Range): DeveloperMetadata;

      /**
       * Moves this developer metadata to the specified sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#moveToSheet(Sheet)
       * @param sheet The sheet that is the new location for this developer metata.
       */
      moveToSheet(sheet: Sheet): DeveloperMetadata;

      /**
       * Moves this developer metadata to the top-level spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#moveToSpreadsheet()
       */
      moveToSpreadsheet(): DeveloperMetadata;

      /**
       * Deletes this metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#remove()
       */
      remove(): void;

      /**
       * Sets the key of this developer metadata to the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#setKey(String)
       * @param key The new key to set for this metadata.
       */
      setKey(key: string): DeveloperMetadata;

      /**
       * Sets the value associated with this developer metadata to the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#setValue(String)
       * @param value The new value to set for this metadata.
       */
      setValue(value: string): DeveloperMetadata;

      /**
       * Sets the visibility of this developer metadata to the specified visibility.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata#setVisibility(DeveloperMetadataVisibility)
       * @param visibility The new visibility to set for this metadata.
       */
      setVisibility(visibility: DeveloperMetadataVisibility): DeveloperMetadata;
    }
    /**
     * Search for developer metadata in a spreadsheet. To create new developer metadata finder use
     * Range.createDeveloperMetadataFinder(), Sheet.createDeveloperMetadataFinder(),
     * or Spreadsheet.createDeveloperMetadataFinder().
     */
    interface DeveloperMetadataFinder {

      /**
       * Executes this search and returns the matching metadata.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#find()
       */
      find(): DeveloperMetadata[];

      /**
       * Configures the search to consider intersecting locations that have metadata. This option is
       * only valid for range-scoped searches.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#onIntersectingLocations()
       */
      onIntersectingLocations(): DeveloperMetadataFinder;

      /**
       * Limits this search to consider only metadata that match the specified ID.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#withId(Integer)
       * @param id The ID to match when searching for metadata.
       */
      withId(id: Integer): DeveloperMetadataFinder;

      /**
       * Limits this search to consider only metadata that match the specified key.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#withKey(String)
       * @param key The key to match when searching for metadata.
       */
      withKey(key: string): DeveloperMetadataFinder;

      /**
       * Limits this search to consider only metadata that match the specified location type.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#withLocationType(DeveloperMetadataLocationType)
       * @param locationType The location type to match when searching for metadata.
       */
      withLocationType(locationType: DeveloperMetadataLocationType): DeveloperMetadataFinder;

      /**
       * Limits this search to consider only metadata that match the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#withValue(String)
       * @param value The value to match when searching for metadata.
       */
      withValue(value: string): DeveloperMetadataFinder;

      /**
       * Limits this search to consider only metadata that match the specified visibility.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder#withVisibility(DeveloperMetadataVisibility)
       * @param visibility The visibility to match when searching for metadata.
       */
      withVisibility(visibility: DeveloperMetadataVisibility): DeveloperMetadataFinder;
    }
    /**
     * Access developer metadata location information.
     */
    interface DeveloperMetadataLocation {

      /**
       * Returns the Range for the column location of this metadata, or null if the
       * location type is not DeveloperMetadataLocationType.COLUMN.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location#getColumn()
       */
      getColumn(): Range;

      /**
       * Gets the type of location.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location#getLocationType()
       */
      getLocationType(): DeveloperMetadataLocationType;

      /**
       * Returns the Range for the row location of this metadata, or null if the
       * location type is not DeveloperMetadataLocationType.ROW.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location#getRow()
       */
      getRow(): Range;

      /**
       * Returns the Sheet location of this metadata, or null if the location type is
       * not DeveloperMetadataLocationType.SHEET.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location#getSheet()
       */
      getSheet(): Sheet;

      /**
       * Returns the Spreadsheet location of this metadata, or null if the location
       * type is not DeveloperMetadataLocationType.SPREADSHEET.
       * https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location#getSpreadsheet()
       */
      getSpreadsheet(): Spreadsheet;
    }
    /**
     * An enumeration of the types of developer metadata location types.
     */
    enum DeveloperMetadataLocationType { SPREADSHEET, SHEET, ROW, COLUMN }
    /**
     * An enumeration of the types of developer metadata visibility.
     */
    enum DeveloperMetadataVisibility { DOCUMENT, PROJECT }
    /**
     * An enumeration of possible directions along which data can be stored in a spreadsheet.
     */
    enum Dimension { COLUMNS, ROWS }
    /**
     * An enumeration representing the possible directions that one can move within a spreadsheet using
     * the arrow keys.
     */
    enum Direction { UP, DOWN, PREVIOUS, NEXT }
    /**
     * Builder for area charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedAreaChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedAreaChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedAreaChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedAreaChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedAreaChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedAreaChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setStacked()
       */
      setStacked(): EmbeddedAreaChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedAreaChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedAreaChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedAreaChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedAreaChartBuilder;
    }
    /**
     * Builder for bar charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedBarChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedBarChartBuilder;

      /**
       * Reverses the direction in which the bars grow along the horizontal axis. By default, values
       * grow from left to right. Calling this method causes them to grow from right to left.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#reverseDirection()
       */
      reverseDirection(): EmbeddedBarChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedBarChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedBarChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedBarChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedBarChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setStacked()
       */
      setStacked(): EmbeddedBarChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedBarChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedBarChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedBarChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedBarChartBuilder;
    }
    /**
     * Represents a chart that has been embedded into a spreadsheet.
     *
     * This example shows how to modify an existing chart:
     *
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A2:B8")
     *     var chart = sheet.getCharts()[0];
     *     chart = chart.modify()
     *         .addRange(range)
     *         .setOption('title', 'Updated!')
     *         .setOption('animation.duration', 500)
     *         .setPosition(2,2,0,0)
     *         .build();
     *     sheet.updateChart(chart);
     *
     * This example shows how to create a new chart:
     *
     *     function newChart(range, sheet) {
     *       var sheet = SpreadsheetApp.getActiveSheet();
     *       var chartBuilder = sheet.newChart();
     *       chartBuilder.addRange(range)
     *           .setChartType(Charts.ChartType.LINE)
     *           .setOption('title', 'My Line Chart!');
     *       sheet.insertChart(chartBuilder.build());
     *     }
     */
    interface EmbeddedChart {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Returns a stable identifier for the chart that is unique across the spreadsheet containing the
       * chart or null if the chart is not in a spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getChartId()
       */
      getChartId(): Integer;

      /**
       * Returns information about where the chart is positioned within a sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     var containerInfo = chart.getContainerInfo();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getContainerInfo()
       */
      getContainerInfo(): ContainerInfo;

      /**
       * Returns the strategy to use for handling hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build()
       *
       *     // Logs the strategy to use for hidden rows and columns which is
       *     // Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS in this case.
       *     Logger.log(chart.getHiddenDimensionStrategy());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getHiddenDimensionStrategy()
       */
      getHiddenDimensionStrategy(): Charts.ChartHiddenDimensionStrategy;

      /**
       * Returns the merge strategy used when more than one range exists. If MERGE_ROWS, row are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C1:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build()
       *
       *     // Logs whether rows of multiple ranges are merged, which is MERGE_ROWS in this case.
       *     Logger.log(chart.getMergeStrategy());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getMergeStrategy()
       */
      getMergeStrategy(): Charts.ChartMergeStrategy;

      /**
       * Returns the number of rows or columns the range that are treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build()
       *
       *     // Logs the number of rows or columns to use as headers, which is 1 in this case.
       *     Logger.log(chart.getHeaders());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getNumHeaders()
       */
      getNumHeaders(): Integer;

      /**
       * Returns the options for this chart, such as height, colors, and axes.
       *
       *
       * The returned options are immutable.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getOptions()
       */
      getOptions(): Charts.ChartOptions;

      /**
       * Returns the ranges that this chart uses as a data source.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     var ranges = chart.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getRanges()
       */
      getRanges(): Range[];

      /**
       * If true, the rows and columns used to populate the chart are switched. Defaults to
       * false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .addRange(range)
       *         .setChartType(Charts.ChartType.BAR)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build()
       *
       *     // Logs whether rows and columns should be transposed, which is true in this case.
       *     Logger.log(chart.getTransposeRowsAndColumns());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#getTransposeRowsAndColumns()
       */
      getTransposeRowsAndColumns(): boolean;

      /**
       * Returns an EmbeddedChartBuilder that can be used to modify this chart. Invoke sheet.updateChart(chart) to save any changes.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var chart = sheet.getCharts()[0];
       *     chart = chart.modify()
       *         .setOption('width', 800)
       *         .setOption('height', 640)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *     sheet.updateChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart#modify()
       */
      modify(): EmbeddedChartBuilder;
    }
    /**
     * Builder used to edit an EmbeddedChart. Changes made to the chart are not saved until
     * Sheet.updateChart(chart) is called on the rebuilt chart.
     *
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A1:B8");
     *     var chart = sheet.getCharts()[0];
     *     chart = chart.modify()
     *         .addRange(range)
     *         .setOption('title', 'Updated!')
     *         .setOption('animation.duration', 500)
     *         .setPosition(2,2,0,0)
     *         .build();
     *     sheet.updateChart(chart);
     */
    interface EmbeddedChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }
    /**
     * Builder for column charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedColumnChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedColumnChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedColumnChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedColumnChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedColumnChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedColumnChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setStacked()
       */
      setStacked(): EmbeddedColumnChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedColumnChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedColumnChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedColumnChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedColumnChartBuilder;
    }
    /**
     * Builder for combo charts. For more details, see the Gviz documentation.
     */
    interface EmbeddedComboChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedComboChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedComboChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedComboChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedComboChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedComboChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setStacked()
       */
      setStacked(): EmbeddedComboChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedComboChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedComboChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedComboChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedComboChartBuilder;
    }
    /**
     * Builder for histogram charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedHistogramChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedHistogramChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedHistogramChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedHistogramChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedHistogramChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setStacked()
       */
      setStacked(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedHistogramChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedHistogramChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedHistogramChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedHistogramChartBuilder;
    }
    /**
     * Builder for line charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedLineChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedLineChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedLineChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedLineChartBuilder;

      /**
       * Sets the style to use for curves in the chart. See CurveStyle for allowed curve
       * styles.
       *
       *
       *     // Creates a line chart builder and curves the lines in the chart.
       *     var builder = Charts.newLineChart();
       *     builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setCurveStyle(CurveStyle)
       * @param style The style for curves in the chart.
       */
      setCurveStyle(style: Charts.CurveStyle): EmbeddedLineChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedLineChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): EmbeddedLineChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedLineChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedLineChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedLineChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder#useLogScale()
       */
      useLogScale(): EmbeddedLineChartBuilder;
    }
    /**
     * Builder for pie charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedPieChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
       * area or column charts), this means the horizontal axis is drawn from right to left. For
       * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
       * bottom. For pie charts, this means the slices are drawn counterclockwise.
       *
       *
       *     // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
       *     var builder = Charts.newPieChart();
       *     builder.reverseCategories();
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#reverseCategories()
       */
      reverseCategories(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart to be three-dimensional.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#set3D()
       */
      set3D(): EmbeddedPieChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedPieChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedPieChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedPieChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedPieChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }
    /**
     * Builder for scatter charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedScatterChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): EmbeddedScatterChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): EmbeddedScatterChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Charts.Position): EmbeddedScatterChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): EmbeddedScatterChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setXAxisLogScale()
       */
      setXAxisLogScale(): EmbeddedScatterChartBuilder;

      /**
       * Sets the range for the horizontal axis of the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       *
       *
       *     // Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
       *     var builder = Charts.newTableChart();
       *     builder.setXAxisRange(0, 100);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setXAxisRange(Number,Number)
       * @param start The value for the lowest grid line of the horizontal axis.
       * @param end The value for the highest grid line of the horizontal axis.
       */
      setXAxisRange(start: number, end: number): EmbeddedScatterChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): EmbeddedScatterChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;

      /**
       * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setYAxisLogScale()
       */
      setYAxisLogScale(): EmbeddedScatterChartBuilder;

      /**
       * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
       * the range is expanded to include those data points.
       *
       *
       *     // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
       *     var builder = Charts.newTableChart();
       *     builder.setYAxisRange(0, 100);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setYAxisRange(Number,Number)
       * @param start The value for the lowest grid line of the vertical axis.
       * @param end The value for the highest grid line of the vertical axis.
       */
      setYAxisRange(start: number, end: number): EmbeddedScatterChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): EmbeddedScatterChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    }
    /**
     * Builder for table charts. For more details, see the Gviz documentation.
     */
    interface EmbeddedTableChartBuilder {

      /**
       * Adds a range to the chart this builder modifies. Does not add the range if it has already been
       * added to the chart.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#addRange(Range)
       * @param range The range to add.
       */
      addRange(range: Range): EmbeddedChartBuilder;

      /**
       * Sets the chart type to AreaChart and returns an EmbeddedAreaChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asAreaChart()
       */
      asAreaChart(): EmbeddedAreaChartBuilder;

      /**
       * Sets the chart type to BarChart and returns an EmbeddedBarChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asBarChart()
       */
      asBarChart(): EmbeddedBarChartBuilder;

      /**
       * Sets the chart type to ColumnChart and returns an EmbeddedColumnChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asColumnChart()
       */
      asColumnChart(): EmbeddedColumnChartBuilder;

      /**
       * Sets the chart type to ComboChart and returns an EmbeddedComboChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asComboChart()
       */
      asComboChart(): EmbeddedComboChartBuilder;

      /**
       * Sets the chart type to HistogramChart and returns an EmbeddedHistogramChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asHistogramChart()
       */
      asHistogramChart(): EmbeddedHistogramChartBuilder;

      /**
       * Sets the chart type to LineChart and returns an EmbeddedLineChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asLineChart()
       */
      asLineChart(): EmbeddedLineChartBuilder;

      /**
       * Sets the chart type to PieChart and returns an EmbeddedPieChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asPieChart()
       */
      asPieChart(): EmbeddedPieChartBuilder;

      /**
       * Sets the chart type to ScatterChart and returns an EmbeddedScatterChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asScatterChart()
       */
      asScatterChart(): EmbeddedScatterChartBuilder;

      /**
       * Sets the chart type to TableChart and returns an EmbeddedTableChartBuilder.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#asTableChart()
       */
      asTableChart(): EmbeddedTableChartBuilder;

      /**
       * Builds the chart to reflect all changes made to it.
       *
       *
       * This method does not automatically draw the chart on top of the spreadsheet. A new chart
       * must be inserted via sheet.insertChart(chart), and an existing chart should be updated
       * via sheet.updateChart(chart).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#build()
       */
      build(): EmbeddedChart;

      /**
       * Removes all ranges from the chart this builder modifies.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code updates the chart to use only the new ranges while preserving the existing
       *     // formatting of the chart.
       *     var chart = sheet.getCharts()[0];
       *     var newChart = chart
       *         .modify()
       *         .clearRanges()
       *         .addRange(sheet.getRange("A1:A5"))
       *         .addRange(sheet.getRange("B1:B5"))
       *         .build();
       *     sheet.updateChart(newChart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#clearRanges()
       */
      clearRanges(): EmbeddedChartBuilder;

      /**
       * Sets whether to enable paging through the data.
       *
       *
       * The default behavior is paging disabled. If paging is enabled the default page size is 10.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#enablePaging(Boolean)
       * @param enablePaging true if paging should be enabled, false otherwise.
       */
      enablePaging(enablePaging: boolean): EmbeddedTableChartBuilder;

      /**
       * Enables paging and sets the number of rows in each page.
       *
       *
       * The default page size is 10.
       *
       *
       *     // Creates a table chart builder and enables paging with page size of 5.
       *     var builder = Charts.newTableChart();
       *     builder.enablePaging(5);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#enablePaging(Integer)
       * @param pageSize The number of rows in each page of the table.
       */
      enablePaging(pageSize: Integer): EmbeddedTableChartBuilder;

      /**
       * Enables paging, sets the number of rows in each page and the first table page to display (page
       * numbers are zero based).
       *
       *
       * The default page size is 10, and the default start page is 0.
       *
       *
       *     // Creates a table chart builder and enables paging with page size of 5 and displays page 2
       *     // first.
       *     var builder = Charts.newTableChart();
       *     builder.enablePaging(5, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#enablePaging(Integer,Integer)
       * @param pageSize The number of rows in each page of the table.
       * @param startPage The first table page to display (page numbers are zero-based).
       */
      enablePaging(pageSize: Integer, startPage: Integer): EmbeddedTableChartBuilder;

      /**
       * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
       * column order of the table, so that column zero is the right-most column, and the last column is
       * the left-most column.
       *
       *
       * This does not affect the column index in the underlying data, only the order of display.
       * Full bi-directional (BiDi) language display is not supported by the table visualization even
       * with this option. This option is ignored if you enable paging (using the page option), or if
       * the table has scroll bars because you have specified height and width options smaller than the
       * required table size. The default behavior is RTL support disabled.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#enableRtlTable(Boolean)
       * @param rtlEnabled true if right-to-left support should be enabled, false otherwise.
       */
      enableRtlTable(rtlEnabled: boolean): EmbeddedTableChartBuilder;

      /**
       * Sets whether to sort columns when the user clicks a column heading.
       *
       *
       * If sorting is enabled, when users click on the column header the rows are automatically
       * sorted. The default behavior is sorting enabled.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#enableSorting(Boolean)
       * @param enableSorting true to enable sorting by clicking on column headers, false otherwise.
       */
      enableSorting(enableSorting: boolean): EmbeddedTableChartBuilder;

      /**
       * Returns the current chart type.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#getChartType()
       */
      getChartType(): Charts.ChartType;

      /**
       * Return the chart ContainerInfo, which encapsulates where the chart appears on the
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     // This method returns the exact same data as Chart#getContainerInfo()
       *     var containerInfo = chartBuilder.getContainer();
       *
       *     // Logs the values we used in setPosition()
       *     Logger.log("Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s",
       *               containerInfo.getAnchorColumn(),
       *               containerInfo.getAnchorRow(),
       *               containerInfo.getOffsetX(),
       *               containerInfo.getOffsetY());
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#getContainer()
       */
      getContainer(): ContainerInfo;

      /**
       * Returns a copy of the list of ranges currently providing data for this chart. Use addRange(range) and removeRange(range) to modify this list.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B8"))
       *         .setPosition(5, 5, 0, 0);
       *
       *     var ranges = chartBuilder.getRanges();
       *
       *     // There's only one range as a data source for this chart,
       *     // so this logs "A1:B8"
       *     for (var i in ranges) {
       *       var range = ranges[i];
       *       Logger.log(range.getA1Notation());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#getRanges()
       */
      getRanges(): Range[];

      /**
       * Removes the specified range from the chart this builder modifies. Does not throw an error if
       * the range is not in this chart.
       *
       *
       * The range removed must match up with a range added via addRange(range);
       * otherwise no change is made to the chart. This method cannot be used to partially remove values
       * from a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var firstRange = sheet.getRange("A1:B5");
       *     var secondRange = sheet.getRange("A6:B8");
       *
       *     var chartBuilder = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(firstRange)
       *         // This range will render in a different color
       *         .addRange(secondRange)
       *         .setPosition(5, 5, 0, 0);
       *
       *     // Note that you can use either of these two formats, but the range
       *     // MUST match up with a range that was added via addRange(), or it
       *     // will not be removed, and will not throw an exception
       *     chartBuilder.removeRange(firstRange);
       *     chartBuilder.removeRange(sheet.getRange("A6:B8"));
       *
       *     var chart = chartBuilder.build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#removeRange(Range)
       * @param range The range to remove.
       */
      removeRange(range: Range): EmbeddedChartBuilder;

      /**
       * Changes the type of chart. Not all embedded chart types are currently supported. See ChartType.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setChartType(ChartType)
       * @param type The type to change this chart into.
       */
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;

      /**
       * Sets the row number for the first row in the data table.
       *
       *
       * The default row number of the first row is 1.
       *
       *
       *     // Creates a table chart builder and sets the first row to be 2.
       *     var builder = Charts.newTableChart();
       *     builder.setFirstRowNumber(2);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setFirstRowNumber(Integer)
       * @param number The row number for the first row in the data table.
       */
      setFirstRowNumber(number: Integer): EmbeddedTableChartBuilder;

      /**
       * Sets the strategy to use for hidden rows and columns. Defaults to IGNORE_ROWS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setHiddenDimensionStrategy(ChartHiddenDimensionStrategy)
       * @param strategy The strategy to use for hidden rows and columns.
       */
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;

      /**
       * Sets the index of the column according to which the table should be initially sorted
       * (ascending).
       *
       *
       * The column os sorted in ascending order and is marked with a small arrow indicating that.
       *
       *
       *     // Creates a table chart builder and sorts it by the second column (ascending).
       *     var builder = Charts.newTableChart();
       *     builder.setInitialSortingAscending(2);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setInitialSortingAscending(Integer)
       * @param column The number of the column according to which the table should be initially sorted.
       */
      setInitialSortingAscending(column: Integer): EmbeddedTableChartBuilder;

      /**
       * Sets the index of the column according to which the table should be initially sorted
       * (descending).
       *
       *
       * The column os sorted in descending order and is marked with a a small arrow indicating that.
       *
       *
       *     // Creates a table chart builder and sorts it by the second column (descending).
       *     var builder = Charts.newTableChart();
       *     builder.setInitialSortingDescending(2);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setInitialSortingDescending(Integer)
       * @param column The number of the column according to which the table should be initially sorted.
       */
      setInitialSortingDescending(column: Integer): EmbeddedTableChartBuilder;

      /**
       * Sets the merge strategy to use when more than one range exists. If MERGE_ROWS, rows are merged; if MERGE_COLUMNS, columns are merged. Defaults to MERGE_COLUMNS.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B10");
       *     var range2 = sheet.getRange("C:C10");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .addRange(range2)
       *         .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setMergeStrategy(ChartMergeStrategy)
       * @param mergeStrategy The merge strategy to use.
       */
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;

      /**
       * Sets the number of rows or columns of the range that should be treated as headers.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setNumHeaders(1)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setNumHeaders(Integer)
       * @param headers The number of rows or columns to treat as headers. Negative values cause headers to be auto-detected.
       */
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;

      /**
       * Sets advanced options for this chart. Lookup the chart type in the Charts API Chart
       * Gallery for a listing of the available options. For example, the options for an area chart
       * are listed
       * here.
       *
       *
       * This method does not validate the option you specify is valid for this chart type nor if the
       * value is of the correct format/structure.
       *
       *
       * This example shows how to change the animation duration to 1 second and set a legend.
       *
       *
       *     builder.setOption('title', 'Earnings projections');
       *     builder.setOption('animation.duration', 1000);
       *     builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setOption(String,Object)
       * @param option The name of the option.
       * @param value The value of the option.
       */
      setOption(option: string, value: object): EmbeddedChartBuilder;

      /**
       * Sets the position, changing where the chart appears on the sheet. anchorRowPos and
       * anchorColPos are 1-indexed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The chart's top side is anchored in this row.
       * @param anchorColPos The chart's left side is anchored in this column.
       * @param offsetX The chart's upper right-hand corner is offset by this many pixels.
       * @param offsetY The chart's lower left-hand corner is offset by this many pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;

      /**
       * Sets whether the chart's rows and columns are transposed. If set to true, the rows and
       * columns are switched. Defaults to false.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B5");
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(range)
       *         .setTransposeRowsAndColumns(true)
       *         .setPosition(5, 5, 0, 0)
       *         .build();
       *
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#setTransposeRowsAndColumns(Boolean)
       * @param transpose If true, the rows and columns used to construct the chart are transposed.
       */
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;

      /**
       * Sets whether to show the row number as the first column of the table.
       *
       *
       * The default behavior is not showing row numbers.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#showRowNumberColumn(Boolean)
       * @param showRowNumber true if the first column of the table should show the row number, false otherwise.
       */
      showRowNumberColumn(showRowNumber: boolean): EmbeddedTableChartBuilder;

      /**
       * Sets whether alternating color style is assigned to odd and even rows of a table chart.
       *
       *
       * The default behavior is the rows having alternating color style.
       * https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder#useAlternatingRowStyle(Boolean)
       * @param alternate true if color styles should be alternating, false otherwise.
       */
      useAlternatingRowStyle(alternate: boolean): EmbeddedTableChartBuilder;
    }
    /**
     * Access and modify existing filters. To create a new filter, use Range.createFilter().
     */
    interface Filter {

      /**
       * Gets the filter criteria on the specified column, or null if no filter criteria is set.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#getColumnFilterCriteria(Integer)
       * @param columnPosition The 1-indexed position of the column.
       */
      getColumnFilterCriteria(columnPosition: Integer): FilterCriteria;

      /**
       * Gets the range this filter is applied to.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#getRange()
       */
      getRange(): Range;

      /**
       * Removes this filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#remove()
       */
      remove(): void;

      /**
       * Removes the filter criteria from the specified column.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#removeColumnFilterCriteria(Integer)
       * @param columnPosition The 1-indexed position of the column.
       */
      removeColumnFilterCriteria(columnPosition: Integer): Filter;

      /**
       * Sets the filter criteria on the specified column.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#setColumnFilterCriteria(Integer,FilterCriteria)
       * @param columnPosition The 1-indexed position of the column.
       * @param filterCriteria The filter criteria to set. If null, remove filter criteria from the specified column; alternatively, use removeColumnFilterCriteria(columnPosition).
       */
      setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria): Filter;

      /**
       * Sorts the filtered range by the specified column, excluding the first row (the header row) in
       * the range this filter is applied to.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter#sort(Integer,Boolean)
       * @param columnPosition The 1-indexed position of the column.
       * @param ascending If true, sort the filtered range in ascending order; if false, sort the filtered range in descending order.
       */
      sort(columnPosition: Integer, ascending: boolean): Filter;
    }
    /**
     * Access filter criteria. To create a new criteria, use SpreadsheetApp.newFilterCriteria() and FilterCriteriaBuilder.
     */
    interface FilterCriteria {

      /**
       * Creates a builder for a filter criteria based on this filter criteria's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria#copy()
       */
      copy(): FilterCriteriaBuilder;

      /**
       * Returns the boolean criteria type as defined in the BooleanCriteria enum. To get the
       * arguments for the criteria, use getCriteriaValues(). To use these values to create or
       * modify a filter criteria, see FilterCriteriaBuilder.withCriteria(criteria, args).
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria#getCriteriaType()
       */
      getCriteriaType(): BooleanCriteria;

      /**
       * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
       * getCriteriaType(). To use these values to create or modify a filter criteria, see FilterCriteriaBuilder.withCriteria(criteria, args).
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria#getCriteriaValues()
       */
      getCriteriaValues(): object[];

      /**
       * Returns the values to hide.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria#getHiddenValues()
       */
      getHiddenValues(): string[];

      /**
       * Returns the values to show.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria#getVisibleValues()
       */
      getVisibleValues(): string[];
    }
    /**
     * Builder for FilterCriteria.
     */
    interface FilterCriteriaBuilder {

      /**
       * Constructs a filter criteria from the settings supplied to the builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#build()
       */
      build(): FilterCriteria;

      /**
       * Creates a builder for a filter criteria based on this filter criteria's settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#copy()
       */
      copy(): FilterCriteriaBuilder;

      /**
       * Returns the boolean criteria type as defined in the BooleanCriteria enum. To get the
       * arguments for the criteria, use getCriteriaValues(). To use these values to create or
       * modify a filter criteria, see withCriteria(criteria, args).
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#getCriteriaType()
       */
      getCriteriaType(): BooleanCriteria;

      /**
       * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
       * getCriteriaType(). To use these values to create or modify a filter criteria, see withCriteria(criteria, args).
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#getCriteriaValues()
       */
      getCriteriaValues(): object[];

      /**
       * Returns the values to hide.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#getHiddenValues()
       */
      getHiddenValues(): string[];

      /**
       * Returns the values to show.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#getVisibleValues()
       */
      getVisibleValues(): string[];

      /**
       * Sets the values to hide. Clears any existing visible or hidden values.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#setHiddenValues(String)
       * @param values The list of values to hide.
       */
      setHiddenValues(values: string[]): FilterCriteriaBuilder;

      /**
       * Sets the values to show. It clears any existing visible or hidden values.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#setVisibleValues(String)
       * @param values The list of values to show.
       */
      setVisibleValues(values: string[]): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell is empty.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenCellEmpty()
       */
      whenCellEmpty(): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell is not empty.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenCellNotEmpty()
       */
      whenCellNotEmpty(): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell date is after the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateAfter(Date)
       * @param date The latest date.
       */
      whenDateAfter(date: Date): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell date is after the specified relative
       * date.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateAfter(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateAfter(date: RelativeDate): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell date is before the specified date.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateBefore(Date)
       * @param date The earliest unacceptable date.
       */
      whenDateBefore(date: Date): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where a cell date is before the specified relative date.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateBefore(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateBefore(date: RelativeDate): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where a cell date is equal to the specified date.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateEqualTo(Date)
       * @param date The sole acceptable date.
       */
      whenDateEqualTo(date: Date): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where a cell date is equal to the specified relative
       * date.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenDateEqualTo(RelativeDate)
       * @param date The latest date relative to the date type selected.
       */
      whenDateEqualTo(date: RelativeDate): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the specified formula (such as =B:B<C:C)
       * evaluates to true.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenFormulaSatisfied(String)
       * @param formula A custom formula that evaluates to true if the input is valid.
       */
      whenFormulaSatisfied(formula: string): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is falls between, or is either of,
       * two specified numbers.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberBetween(Number,Number)
       * @param start The lowest acceptable value.
       * @param end The highest acceptable value.
       */
      whenNumberBetween(start: number, end: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is equal to the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberEqualTo(Number)
       * @param number The sole acceptable value.
       */
      whenNumberEqualTo(number: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is greater than the specified
       * value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberGreaterThan(Number)
       * @param number The highest unacceptable value.
       */
      whenNumberGreaterThan(number: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is greater than or equal to the
       * specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberGreaterThanOrEqualTo(Number)
       * @param number The lowest acceptable value.
       */
      whenNumberGreaterThanOrEqualTo(number: number): FilterCriteriaBuilder;

      /**
       * Sets the conditional conditional format rule to show cells where the cell number is less than
       * the specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberLessThan(Number)
       * @param number The lowest unacceptable value.
       */
      whenNumberLessThan(number: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is less than or equal to the
       * specified value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberLessThanOrEqualTo(Number)
       * @param number The highest acceptable value.
       */
      whenNumberLessThanOrEqualTo(number: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number does not fall between, and is
       * neither of, two specified numbers.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberNotBetween(Number,Number)
       * @param start The lowest unacceptable value.
       * @param end The highest unacceptable value.
       */
      whenNumberNotBetween(start: number, end: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell number is not equal to the specified
       * value.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenNumberNotEqualTo(Number)
       * @param number The sole unacceptable value.
       */
      whenNumberNotEqualTo(number: number): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell text contains the specified text.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenTextContains(String)
       * @param text The value that the input must contain.
       */
      whenTextContains(text: string): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell text does not contain the specified text.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenTextDoesNotContain(String)
       * @param text The value that the input must not contain.
       */
      whenTextDoesNotContain(text: string): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell text ends with the specified text.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenTextEndsWith(String)
       * @param text Text to compare against the end of the string.
       */
      whenTextEndsWith(text: string): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell text is equal to the specified text.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenTextEqualTo(String)
       * @param text The sole acceptable value.
       */
      whenTextEqualTo(text: string): FilterCriteriaBuilder;

      /**
       * Sets the filter criteria to show cells where the cell text starts with the specified text.
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#whenTextStartsWith(String)
       * @param text Text to compare against the beginning of the string.
       */
      whenTextStartsWith(text: string): FilterCriteriaBuilder;

      /**
       * Sets the boolean criteria to criteria defined by BooleanCriteria values, typically
       * taken from the criteria and arguments of an existing criteria.
       *
       *
       *     // Builds a filter criteria that is based on an existing criteria.
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var criteria = sheet.getFilter().getColumnFilterCriteria(1);
       *     var newCriteria = SpreadsheetApp.newFilterCriteria()
       *         .withCriteria(criteria.getCriteriaType(), criteria.getCriteriaValues())
       *         .setHiddenValues(['c'])
       *         .build();
       * https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder#withCriteria(BooleanCriteria,Object)
       * @param criteria The type of boolean criteria.
       * @param args An array of arguments appropriate to the criteria type; the number of arguments and their type match the corresponding when...() method above.
       */
      withCriteria(criteria: BooleanCriteria, args: object[]): FilterCriteriaBuilder;
    }
    /**
     * Access gradient (color) conditions in ConditionalFormatRuleApis.
     * Each conditional format rule may contain a single gradient condition. A gradient condition is
     * defined by three points along a number scale (min, mid, and max), each of which has a color, a
     * value, and a InterpolationType. The content of a cell is
     * compared to the values in the number scale and the color applied to the cell is interpolated
     * based on the cell content's proximity to the gradient condition min, mid, and max points.
     *
     *     // Logs all the information inside gradient conditional format rules on a sheet.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var rules = sheet.getConditionalFormatRules();
     *     for (int i = 0; i < rules.length; i++) {
     *       var gradient = rules[i].getGradientCondition();
     *       Logger.log("The conditional format gradient information for rule %d:\n
     *         MinColor %s, MinType %s, MinValue %s, \n
     *         MidColor %s, MidType %s, MidValue %s, \n
     *         MaxColor %s, MaxType %s, MaxValue %s \n", i,
     *         gradient.getMinColor(), gradient.getMinType(), gradient.getMinValue(),
     *         gradient.getMidColor(), gradient.getMidType(), gradient.getMidValue(),
     *         gradient.getMaxColor(), gradient.getMaxType(), gradient.getMaxValue());
     *     }
     */
    interface GradientCondition {

      /**
       * Gets the color set for the maximum value of this gradient condition. Returns an empty string if
       * the color hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMaxColor()
       */
      getMaxColor(): string;

      /**
       * Gets the interpolation type for the maximum value of this gradient condition. Returns null if the gradient max type hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMaxType()
       */
      getMaxType(): InterpolationType;

      /**
       * Gets the max value of this gradient condition. Returns an empty string if the InterpolationType is MAX or if the max value hasn't been
       * set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMaxValue()
       */
      getMaxValue(): string;

      /**
       * Gets the color set for the mid-point value of this gradient condition. Returns an empty string
       * if the color hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMidColor()
       */
      getMidColor(): string;

      /**
       * Gets the interpolation type for the mid-point value of this gradient condition. Returns null if the gradient mid type hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMidType()
       */
      getMidType(): InterpolationType;

      /**
       * Gets the mid-point value of this gradient condition. Returns an empty string if the gradient
       * mid value hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMidValue()
       */
      getMidValue(): string;

      /**
       * Gets the color set for the minimum value of this gradient condition. Returns an empty string if
       * the color hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMinColor()
       */
      getMinColor(): string;

      /**
       * Gets the interpolation type for the minimum value of this gradient condition. Returns null if the gradient min type hasn't been set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMinType()
       */
      getMinType(): InterpolationType;

      /**
       * Gets the minimum value of this gradient condition. Returns an empty string if the InterpolationType is MIN or if the min value hasn't been
       * set.
       * https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition#getMinValue()
       */
      getMinValue(): string;
    }
    /**
     * Access and modify spreadsheet groups. Groups are an association between an interval of contiguous
     * rows or columns that can be expanded or collapsed as a unit to hide/show the rows or columns.
     * Each group has a control toggle on the row or column directly before or after the group
     * (depending on settings) that can expand or collapse the group as a whole.
     *
     * The depth of a group refers to the nested position of the group and how many larger
     * groups contain the group. The collapsed state of a group refers to whether the group
     * should remain collapsed or expanded after a parent group has been expanded. Additionally, at the
     * time that a group is collapsed or expanded, the rows or columns within the group are hidden or
     * set visible, though individual rows or columns can be hidden or set visible irrespective of the
     * collapsed state.
     */
    interface Group {

      /**
       * Collapses this group.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Collapses this group.
       *     group.collapse();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#collapse()
       */
      collapse(): Group;

      /**
       * Expands this group.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Expands this group.
       *     group.expand();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#expand()
       */
      expand(): Group;

      /**
       * Returns the control toggle index of this group. This is the index just before the range when
       * the control toggle is shown before the group, or the index just after the range otherwise.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     sheet.setRowGroupControlAfter(true);
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Returns 4
       *     var controlIndex = group.getControlIndex();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#getControlIndex()
       */
      getControlIndex(): Integer;

      /**
       * Returns the depth of this group.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Returns 1 if the group is at depth 1.
       *     var depth = group.getDepth();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#getDepth()
       */
      getDepth(): Integer;

      /**
       * Returns the range over which this group exists.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(1, 1);
       *
       *     // Returns the range 2:3 if the group is over rows 2:3
       *     range = group.getRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#getRange()
       */
      getRange(): Range;

      /**
       * Returns true if this group is collapsed.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Returns true if the group is collapsed.
       *     var isCollapsed = group.isCollapsed();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#isCollapsed()
       */
      isCollapsed(): boolean;

      /**
       * Removes this group from the sheet, reducing the group depth of the range by
       * one. This may modify other groups. After calling this, the group object becomes invalid to use.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange(2:3);
       *     range.shiftRowGroupDepth(1);
       *     var group = sheet.getRowGroupAt(2, 1);
       *
       *     // Removes this group
       *     var range = group.remove();
       * https://developers.google.com/apps-script/reference/spreadsheet/group#remove()
       */
      remove(): void;
    }
    /**
     * An enumeration representing the possible positions that a group control toggle can have.
     */
    enum GroupControlTogglePosition { BEFORE, AFTER }
    /**
     * An enumeration representing the interpolation options for calculating a value to be used in a
     * GradientCondition in a ConditionalFormatRule.
     */
    enum InterpolationType { NUMBER, PERCENT, PERCENTILE, MIN, MAX }
    /**
     * Create, access and modify named ranges in a spreadsheet. Named ranges are ranges that have
     * associated string aliases. They can be viewed and edited via the Sheets UI under the Data >
     * Named ranges... menu.
     */
    interface NamedRange {

      /**
       * Gets the name of this named range.
       * https://developers.google.com/apps-script/reference/spreadsheet/named-range#getName()
       */
      getName(): string;

      /**
       * Gets the range referenced by this named range.
       * https://developers.google.com/apps-script/reference/spreadsheet/named-range#getRange()
       */
      getRange(): Range;

      /**
       * Deletes this named range.
       *
       *
       *     // The code below deletes all the named ranges in the spreadsheet.
       *     var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
       *     for (var i = 0; i < namedRanges.length; i++) {
       *       namedRanges[i].remove();
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/named-range#remove()
       */
      remove(): void;

      /**
       * Sets/updates the name of the named range.
       *
       *
       *     // The code below updates the name for the first named range.
       *     var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
       *     if (namedRanges.length > 1) {
       *       namedRanges[0].setName("UpdatedNamedRange");
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/named-range#setName(String)
       * @param name The new name of the named range.
       */
      setName(name: string): NamedRange;

      /**
       * Sets/updates the range for this named range.
       * https://developers.google.com/apps-script/reference/spreadsheet/named-range#setRange(Range)
       * @param range The spreadsheet range to associate with this named range.
       */
      setRange(range: Range): NamedRange;
    }
    /**
     * Represents an image over the grid in a spreadsheet.
     */
    interface OverGridImage {

      /**
       * Assigns the function with the specified function name to this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#assignScript(String)
       * @param functionName The name of the function being specified. This must be a public top level function, not one ending in underscore such as privateFunction_.
       */
      assignScript(functionName: string): OverGridImage;

      /**
       * Returns the alt text description for this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getAltTextDescription()
       */
      getAltTextDescription(): string;

      /**
       * Returns the alt text title for this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getAltTextTitle()
       */
      getAltTextTitle(): string;

      /**
       * Returns the cell where an image is anchored.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getAnchorCell()
       */
      getAnchorCell(): Range;

      /**
       * Returns the horizontal pixel offset from the anchor cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getAnchorCellXOffset()
       */
      getAnchorCellXOffset(): Integer;

      /**
       * Returns the vertical pixel offset from the anchor cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getAnchorCellYOffset()
       */
      getAnchorCellYOffset(): Integer;

      /**
       * Returns the actual height of this image in pixels.
       *
       *
       *     // Logs the height of all images in a spreadsheet
       *     var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
       *     for (var i = 0; i < images.length; i++) {
       *       Logger.log(images[i].getHeight());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getHeight()
       */
      getHeight(): Integer;

      /**
       * Returns the inherent height of this image in pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getInherentHeight()
       */
      getInherentHeight(): Integer;

      /**
       * Returns the inherent height of this image in pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getInherentWidth()
       */
      getInherentWidth(): Integer;

      /**
       * Returns the name of the function assigned to this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getScript()
       */
      getScript(): string;

      /**
       * Returns the sheet this image appears on.
       *
       *
       *     // Logs the parent sheet of all images in a spreadsheet
       *     var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
       *     for (var i = 0; i < images.length; i++) {
       *       Logger.log(images[i].getSheet());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getSheet()
       */
      getSheet(): Sheet;

      /**
       * Gets the image's source URL; returns null if the URL is unavailable. If the image was
       * inserted by URL using an API, this method returns the URL provided during image insertion.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getUrl()
       */
      getUrl(): string;

      /**
       * Returns the actual width of this image in pixels.
       *
       *
       *     // Logs the width of all images in a spreadsheet
       *     var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
       *     for (var i = 0; i < images.length; i++) {
       *       Logger.log(images[i].getWidth());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#getWidth()
       */
      getWidth(): Integer;

      /**
       * Deletes this image from the spreadsheet. Any further operation on the image results in a script
       * error.
       *
       *
       *     // Deletes all images in a spreadsheet
       *     var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
       *     for (var i = 0; i < images.length; i++) {
       *       images[i].remove();
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#remove()
       */
      remove(): void;

      /**
       * Replaces this image with the one specified by the provided BlobSource.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#replace(BlobSource)
       * @param blob The new image as a Blob.
       */
      replace(blob: Base.BlobSource): OverGridImage;

      /**
       * Replaces this image with the one from the specified URL.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#replace(String)
       * @param url The URL of the new image.
       */
      replace(url: string): OverGridImage;

      /**
       * Resets this image to its inherent dimensions.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#resetSize()
       */
      resetSize(): OverGridImage;

      /**
       * Sets the alt-text description for this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setAltTextDescription(String)
       * @param description The new alt text description for the image.
       */
      setAltTextDescription(description: string): OverGridImage;

      /**
       * Sets the alt text title for this image.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setAltTextTitle(String)
       * @param title The new alt text title for the image.
       */
      setAltTextTitle(title: string): OverGridImage;

      /**
       * Sets the cell where an image is anchored.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setAnchorCell(Range)
       * @param cell The new anchor cell.
       */
      setAnchorCell(cell: Range): OverGridImage;

      /**
       * Sets the horizontal pixel offset from the anchor cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setAnchorCellXOffset(Integer)
       * @param offset The new horizonal pixel offset.
       */
      setAnchorCellXOffset(offset: Integer): OverGridImage;

      /**
       * Sets the vertical pixel offset from the anchor cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setAnchorCellYOffset(Integer)
       * @param offset The new vertical pixel offset.
       */
      setAnchorCellYOffset(offset: Integer): OverGridImage;

      /**
       * Sets the actual height of this image in pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setHeight(Integer)
       * @param height The desired height in pixels.
       */
      setHeight(height: Integer): OverGridImage;

      /**
       * Sets the actual width of this image in pixels.
       * https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image#setWidth(Integer)
       * @param width The desired width in pixels.
       */
      setWidth(width: Integer): OverGridImage;
    }
    /**
     *
     * Deprecated. For spreadsheets created in the newer version of Google Sheets, use the more powerful
     *     Protection class instead. Although this class is deprecated, it remains available
     *     for compatibility with the older version of Sheets.
     * Access and modify protected sheets in the older version of Google Sheets.
     */
    interface PageProtection {
      /** @deprecated DO NOT USE */ addUser(email: string): void;
      /** @deprecated DO NOT USE */ getUsers(): string[];
      /** @deprecated DO NOT USE */ isProtected(): boolean;
      /** @deprecated DO NOT USE */ removeUser(user: string): void;
      /** @deprecated DO NOT USE */ setProtected(protection: boolean): void;
    }
    /**
     * Access and modify pivot table filters.
     */
    interface PivotFilter {

      /**
       * Returns the filter criteria for this pivot filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter#getFilterCriteria()
       */
      getFilterCriteria(): FilterCriteria;

      /**
       * Returns the PivotTable that this filter belongs to.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter#getPivotTable()
       */
      getPivotTable(): PivotTable;

      /**
       * Returns the number of the source data column this filter operates on. These indices are
       * 1-based, for example if this filter applies to data in column A of the spreadsheet this method
       * returns "1."
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter#getSourceDataColumn()
       */
      getSourceDataColumn(): Integer;

      /**
       * Removes this pivot filter from the pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter#remove()
       */
      remove(): void;

      /**
       * Sets the filter criteria for this pivot filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter#setFilterCriteria(FilterCriteria)
       * @param filterCriteria The filter criteria to set.
       */
      setFilterCriteria(filterCriteria: FilterCriteria): PivotFilter;
    }
    /**
     * Access and modify pivot table breakout groups.
     */
    interface PivotGroup {

      /**
       * Adds a manual grouping rule for this pivot group.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#addManualGroupingRule(String,Object)
       * @param groupName The name of this grouping rule.
       * @param groupMembers The values that are included in this grouping rule.
       */
      addManualGroupingRule(groupName: string, groupMembers: object[]): PivotGroup;

      /**
       * Returns whether labels are displayed as repeated.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#areLabelsRepeated()
       */
      areLabelsRepeated(): boolean;

      /**
       * Removes any grouping rules from this pivot group.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#clearGroupingRule()
       */
      clearGroupingRule(): PivotGroup;

      /**
       * Removes any sorting applied to this group.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#clearSort()
       */
      clearSort(): PivotGroup;

      /**
       * Returns whether this is a row or column group.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#getDimension()
       */
      getDimension(): Dimension;

      /**
       * Returns the index of this pivot group in the current group order.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the PivotTable which this grouping belongs to.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#getPivotTable()
       */
      getPivotTable(): PivotTable;

      /**
       * Returns the number of the source data column this group summarizes. This index is 1-based, if
       * this group summarizes source data in column "A" of the spreadsheet this method returns 1.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#getSourceDataColumn()
       */
      getSourceDataColumn(): Integer;

      /**
       * Hides repeated labels for this grouping. If labels are already hidden this results in a no-op.
       * If this method is called before there are multiple row or column groupings, when an additional
       * grouping is added repeated labels are hidden.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#hideRepeatedLabels()
       */
      hideRepeatedLabels(): PivotGroup;

      /**
       * Returns true if the sort is ascending, returns false if the sort order is
       * descending.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#isSortAscending()
       */
      isSortAscending(): boolean;

      /**
       * Moves this group to the specified position in the current list of row or column groups. These
       * indices are 0-based. For example, if this group should be moved to the first position this
       * method should be called with 0.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#moveToIndex(Integer)
       * @param index The index to move this grouping to.
       */
      moveToIndex(index: Integer): PivotGroup;

      /**
       * Removes this pivot group from the table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#remove()
       */
      remove(): void;

      /**
       * Removes the manual grouping rule with the specified groupName.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#removeManualGroupingRule(String)
       * @param groupName The name of the grouping rule to remove.
       */
      removeManualGroupingRule(groupName: string): PivotGroup;

      /**
       * Resets the display name of this group in the pivot table to its default value.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#resetDisplayName()
       */
      resetDisplayName(): PivotGroup;

      /**
       * Sets the display name of this group in the pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#setDisplayName(String)
       * @param name The display name to set.
       */
      setDisplayName(name: string): PivotGroup;

      /**
       * Sets a histogram grouping rule for this pivot group. A histogram rule organizes values in a
       * source data column into buckets of a constant size. All values from minValue to maxValue are placed into groups of size interval. All values below minValue
       * are placed into one bucket, as are all values greater than maxValue.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#setHistogramGroupingRule(Integer,Integer,Integer)
       * @param minValue The minimum value for items to be placed into buckets. Values less than this are combined into a single bucket.
       * @param maxValue The maximum value for items to be placed into buckets. Values greater than this are combined into a single bucket.
       * @param intervalSize
       */
      setHistogramGroupingRule(minValue: Integer, maxValue: Integer, intervalSize: Integer): PivotGroup;

      /**
       * When there is more than one row or column grouping, this method displays this grouping's label
       * for each entry of the subsequent grouping. If labels are already repeated this results in a
       * no-op. If this method is called before there are multiple row or column groupings, when an
       * additional grouping is added repeated labels are shown.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#showRepeatedLabels()
       */
      showRepeatedLabels(): PivotGroup;

      /**
       * Sets whether to show total values for this pivot group in the table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#showTotals(Boolean)
       * @param showTotals Whether to show totals or not.
       */
      showTotals(showTotals: boolean): PivotGroup;

      /**
       * Sets the sort order to be ascending.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#sortAscending()
       */
      sortAscending(): PivotGroup;

      /**
       * Sorts this group by the specified PivotValue for the values from the oppositeGroupValues.
       *
       *
       *     // Sorts the item group by the "SUM of Quantity" pivot value for the specified salespersons.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var pivotTable = sheet.getPivotTables()[0];
       *     var itemGroup = pivotTable.getRowGroups()[0];
       *     var sumQuantityValue = pivotTable.getPivotValues()[0];
       *     itemGroup.sortBy(sumQuantityValue, ['Beth', 'Amir', 'Devyn']);
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#sortBy(PivotValue,Object)
       * @param value The pivot value to sort by.
       * @param oppositeGroupValues The values of an opposite pivot group (a column group if sorting a row group, or a row group if sorting a column group) that are used to sort. The order of these values determines precedence for tie breaking.
       */
      sortBy(value: PivotValue, oppositeGroupValues: object[]): PivotGroup;

      /**
       * Sets the sort order to be descending.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#sortDescending()
       */
      sortDescending(): PivotGroup;

      /**
       * Returns whether total values are currently shown for this pivot group.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-group#totalsAreShown()
       */
      totalsAreShown(): boolean;
    }
    /**
     * Access and modify pivot tables.
     */
    interface PivotTable {

      /**
       * Creates a new pivot value in the pivot table calculated from the specified formula with
       * the specified name.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#addCalculatedPivotValue(String,String)
       * @param name The name for this calculated pivot value.
       * @param formula The formula used to calculate this value.
       */
      addCalculatedPivotValue(name: string, formula: string): PivotValue;

      /**
       * Defines a new pivot column grouping in the pivot table. The specified sourceDataColumn
       * indicates the column in the source data this grouping is based on.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#addColumnGroup(Integer)
       * @param sourceDataColumn The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; 1 representing column "A," 2 representing column B, etc.
       */
      addColumnGroup(sourceDataColumn: Integer): PivotGroup;

      /**
       * Creates a new pivot filter for the pivot table. The specified sourceDataColumn
       * indicates the column in the source data this filter operates on.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#addFilter(Integer,FilterCriteria)
       * @param sourceDataColumn The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; 1 representing column "A," 2 representing column B, etc.
       * @param filterCriteria The filter criteria used to perform the filtering.
       */
      addFilter(sourceDataColumn: Integer, filterCriteria: FilterCriteria): PivotFilter;

      /**
       * Defines a new pivot value in the pivot table with the specified summarizeFunction. The
       * specified sourceDataColumn indicates the column in the source data this value is based
       * on.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#addPivotValue(Integer,PivotTableSummarizeFunction)
       * @param sourceDataColumn The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; 1 representing column "A," 2 representing column B, etc.
       * @param summarizeFunction
       */
      addPivotValue(sourceDataColumn: Integer, summarizeFunction: PivotTableSummarizeFunction): PivotValue;

      /**
       * Defines a new pivot row grouping in the pivot table. The specified sourceDataColumn
       * indicates the column in the source data this grouping is based on.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#addRowGroup(Integer)
       * @param sourceDataColumn The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; 1 representing column "A," 2 representing column B, etc.
       */
      addRowGroup(sourceDataColumn: Integer): PivotGroup;

      /**
       * Returns the Range representing the cell where this pivot table is anchored.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getAnchorCell()
       */
      getAnchorCell(): Range;

      /**
       * Returns an ordered list of the column groups in this pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getColumnGroups()
       */
      getColumnGroups(): PivotGroup[];

      /**
       * Returns an ordered list of the filters in this pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getFilters()
       */
      getFilters(): PivotFilter[];

      /**
       * Returns an ordered list of the pivot values in this pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getPivotValues()
       */
      getPivotValues(): PivotValue[];

      /**
       * Returns an ordered list of the row groups in this pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getRowGroups()
       */
      getRowGroups(): PivotGroup[];

      /**
       * Returns whether values are displayed as rows or columns.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#getValuesDisplayOrientation()
       */
      getValuesDisplayOrientation(): Dimension;

      /**
       * Deletes this pivot table. Further operations on this pivot table results in an error.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#remove()
       */
      remove(): void;

      /**
       * Sets the layout of this pivot table to display values as columns or rows.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-table#setValuesDisplayOrientation(Dimension)
       * @param dimension The dimension indicating how to display pivot values.
       */
      setValuesDisplayOrientation(dimension: Dimension): PivotTable;
    }
    /**
     * An enumeration of functions that summarize pivot table data.
     */
    enum PivotTableSummarizeFunction { CUSTOM, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP }
    /**
     * Access and modify value groups in pivot tables.
     */
    interface PivotValue {

      /**
       * Returns the display type describing how this pivot value is currently displayed in the table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#getDisplayType()
       */
      getDisplayType(): PivotValueDisplayType;

      /**
       * Returns the formula used to calculate this value. If this value is not a calculated field this
       * method returns null.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#getFormula()
       */
      getFormula(): string;

      /**
       * Returns the PivotTable which this value belongs to.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#getPivotTable()
       */
      getPivotTable(): PivotTable;

      /**
       * Returns this group’s summarization function.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#getSummarizedBy()
       */
      getSummarizedBy(): PivotTableSummarizeFunction;

      /**
       * Sets the display name for this value in the pivot table.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#setDisplayName(String)
       * @param name The display name to set.
       */
      setDisplayName(name: string): PivotValue;

      /**
       * Sets the formula used to calculate this value. If this value is not a calculated field this
       * method results in an error.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#setFormula(String)
       * @param formula The formula to use to calculate this value.
       */
      setFormula(formula: string): PivotValue;

      /**
       * Displays this value in the pivot table as a function of another value.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#showAs(PivotValueDisplayType)
       * @param displayType The way to display the values.
       */
      showAs(displayType: PivotValueDisplayType): PivotValue;

      /**
       * Sets the summarization function.
       * https://developers.google.com/apps-script/reference/spreadsheet/pivot-value#summarizeBy(PivotTableSummarizeFunction)
       * @param summarizeFunction The function to use to summarize data in this value's source data column.
       */
      summarizeBy(summarizeFunction: PivotTableSummarizeFunction): PivotValue;
    }
    /**
     * An enumeration of ways to display a pivot value as a function of another value.
     */
    enum PivotValueDisplayType { DEFAULT, PERCENT_OF_ROW_TOTAL, PERCENT_OF_COLUMN_TOTAL, PERCENT_OF_GRAND_TOTAL }
    /**
     * Access and modify protected ranges and sheets. A protected range can protect either a static
     * range of cells or a named range. A protected sheet may include unprotected regions. For
     * spreadsheets created with the older version of Google Sheets, use the PageProtection
     * class instead.
     *
     *     // Protect range A1:B10, then remove all other users from the list of editors.
     *     var ss = SpreadsheetApp.getActive();
     *     var range = ss.getRange('A1:B10');
     *     var protection = range.protect().setDescription('Sample protected range');
     *
     *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *     // permission comes from a group, the script throws an exception upon removing the group.
     *     var me = Session.getEffectiveUser();
     *     protection.addEditor(me);
     *     protection.removeEditors(protection.getEditors());
     *     if (protection.canDomainEdit()) {
     *       protection.setDomainEdit(false);
     *     }
     *
     *     // Remove all range protections in the spreadsheet that the user has permission to edit.
     *     var ss = SpreadsheetApp.getActive();
     *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *     for (var i = 0; i < protections.length; i++) {
     *       var protection = protections[i];
     *       if (protection.canEdit()) {
     *         protection.remove();
     *       }
     *     }
     *
     *     // Protect the active sheet, then remove all other users from the list of editors.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var protection = sheet.protect().setDescription('Sample protected sheet');
     *
     *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *     // permission comes from a group, the script throws an exception upon removing the group.
     *     var me = Session.getEffectiveUser();
     *     protection.addEditor(me);
     *     protection.removeEditors(protection.getEditors());
     *     if (protection.canDomainEdit()) {
     *       protection.setDomainEdit(false);
     *     }
     */
    interface Protection {

      /**
       * Adds the given user to the list of editors for the protected sheet or range. This method does
       * not automatically give the user permission to edit the spreadsheet itself; to do that in
       * addition, call Spreadsheet.addEditor(emailAddress).
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Protection;

      /**
       * Adds the given user to the list of editors for the protected sheet or range. This method does
       * not automatically give the user permission to edit the spreadsheet itself; to do that in
       * addition, call Spreadsheet.addEditor(user).
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Protection;

      /**
       * Adds the given array of users to the list of editors for the protected sheet or range. This
       * method does not automatically give the users permission to edit the spreadsheet itself; to do
       * that in addition, call Spreadsheet.addEditors(emailAddresses).
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Protection;

      /**
       * Determines whether all users in the domain that owns the spreadsheet have permission to edit
       * the protected range or sheet. Throws an exception if the user does not have permission to edit
       * the protected range or sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#canDomainEdit()
       */
      canDomainEdit(): boolean;

      /**
       * Determines whether the user has permission to edit the protected range or sheet. The
       * spreadsheet owner is always able to edit protected ranges and sheets.
       *
       *
       *     // Remove all range protections in the spreadsheet that the user has permission to edit.
       *     var ss = SpreadsheetApp.getActive();
       *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
       *     for (var i = 0; i < protections.length; i++) {
       *       var protection = protections[i];
       *       if (protection.canEdit()) {
       *         protection.remove();
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#canEdit()
       */
      canEdit(): boolean;

      /**
       * Gets the description of the protected range or sheet. If no description is set, this method
       * returns an empty string.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the list of editors for the protected range or sheet. Throws an exception if the user does
       * not have permission to edit the protected range or sheet.
       *
       *
       *     // Protect the active sheet, then remove all other users from the list of editors.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.protect().setDescription('Sample protected sheet');
       *
       *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
       *     // permission comes from a group, the script throws an exception upon removing the group.
       *     var me = Session.getEffectiveUser();
       *     protection.addEditor(me);
       *     protection.removeEditors(protection.getEditors());
       *     if (protection.canDomainEdit()) {
       *       protection.setDomainEdit(false);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Gets the type of the protected area, either RANGE or SHEET.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getProtectionType()
       */
      getProtectionType(): ProtectionType;

      /**
       * Gets the range that is being protected. If the protection applies to the sheet instead of a
       * range, this method returns a range that spans the entire sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getRange()
       */
      getRange(): Range;

      /**
       * Gets the name of the protected range if it is associated with a named range. Returns null if the protection is not associated with a named range. Note that scripts must explicitly
       * call setRangeName(rangeName) to associate a protected range with a named range; calling
       * Range.protect() to create a protection from a Range that happens to be a
       * named range, without calling setRangeName(rangeName), is not sufficient to associate
       * them. However, creating a protected range from a named range in the Google Sheets UI associates
       * them automatically.
       *
       *
       *     // Protect a named range in a spreadsheet and log the name of the protected range.
       *     var ss = SpreadsheetApp.getActive();
       *     var range = ss.getRange('A1:B10');
       *     var protection = range.protect();
       *     ss.setNamedRange('Test', range);       // Create a named range.
       *     protection.setRangeName('Test');       // Associate the protection with the named range.
       *     Logger.log(protection.getRangeName()); // Verify the name of the protected range.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getRangeName()
       */
      getRangeName(): string;

      /**
       * Gets an array of unprotected ranges within a protected sheet. If the Protection object
       * corresponds to a protected range instead of a protected sheet, this method returns an empty
       * array. To change the unprotected ranges, use setUnprotectedRanges(ranges) to set a
       * new array of ranges; to re-protect the entire sheet, set an empty array.
       *
       *
       *     // Unprotect cells E2:F5 in addition to any other unprotected ranges in the protected sheet.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.protect();
       *     var unprotected = protection.getUnprotectedRanges();
       *     unprotected.push(sheet.getRange('E2:F5'));
       *     protection.setUnprotectedRanges(unprotected);
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#getUnprotectedRanges()
       */
      getUnprotectedRanges(): Range[];

      /**
       * Determines if the protected area is using "warning based" protection. Warning-based protection
       * means that every user can edit data in the area, except editing prompts a warning asking the
       * user to confirm the edit. By default, protected ranges or sheets are not warning-based. To
       * change to the warning state, use setWarningOnly(warningOnly).
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#isWarningOnly()
       */
      isWarningOnly(): boolean;

      /**
       * Unprotects the range or sheet.
       *
       *
       *     // Remove all range protections in the spreadsheet that the user has permission to edit.
       *     var ss = SpreadsheetApp.getActive();
       *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
       *     for (var i = 0; i < protections.length; i++) {
       *       var protection = protections[i];
       *       if (protection.canEdit()) {
       *         protection.remove();
       *       }
       *     }
       *     // Remove sheet protection from the active sheet, if the user has permission to edit it.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
       *     if (protection && protection.canEdit()) {
       *       protection.remove();
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#remove()
       */
      remove(): void;

      /**
       * Removes the given user from the list of editors for the protected sheet or range. Note that if
       * the user is a member of a Google Group that has edit permission, or if all users in the domain
       * have edit permission, the user are still be able to edit the protected area. Neither the owner
       * of the spreadsheet nor the current user can be removed.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Protection;

      /**
       * Removes the given user from the list of editors for the protected sheet or range. Note that if
       * the user is a member of a Google Group that has edit permission, or if all users in the domain
       * have edit permission, the user is still be able to edit the protected area as well. Neither the
       * owner of the spreadsheet nor the current user can be removed.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Protection;

      /**
       * Removes the given array of users from the list of editors for the protected sheet or range.
       * Note that if any of the users are members of a Google Group that has edit permission, or if all
       * users in the domain have edit permission, those users are still be able to edit the protected
       * area. Neither the owner of the spreadsheet nor the current user can be removed.
       *
       *
       *     // Protect the active sheet, then remove all other users from the list of editors.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.protect().setDescription('Sample protected sheet');
       *
       *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
       *     // permission comes from a group, the script throws an exception upon removing the group.
       *     var me = Session.getEffectiveUser();
       *     protection.addEditor(me);
       *     protection.removeEditors(protection.getEditors());
       *     if (protection.canDomainEdit()) {
       *       protection.setDomainEdit(false);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#removeEditors(String)
       * @param emailAddresses An array of email addresses of the users to remove.
       */
      removeEditors(emailAddresses: string[]): Protection;

      /**
       * Sets the description of the protected range or sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setDescription(String)
       * @param description The description of the protected range or sheet.
       */
      setDescription(description: string): Protection;

      /**
       * Sets whether all users in the domain that owns the spreadsheet have permission to edit the
       * protected range or sheet. Note that any users who have explicit edit permission are able to
       * edit the protected area regardless of this setting. Throws an exception if the spreadsheet does
       * not belong to a G Suite domain (that is, if it is owned by a gmail.com account).
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setDomainEdit(Boolean)
       * @param editable true if all users in the domain that owns the spreadsheet should have permission to edit the protected range or sheet; false if not.
       */
      setDomainEdit(editable: boolean): Protection;

      /**
       * Associates the protected range with an existing named range. If the named range covers a
       * different area from the current protected range, this method moves the protection to cover the
       * the named range instead. The named range must be on the same sheet as the current protected
       * range. Note that scripts must explicitly call this method to associate a protected range with a
       * named range; calling Range.protect() to create a protection from a Range
       * that happens to be a named range, without calling setRangeName(rangeName), is not
       * sufficient to associate them. However, creating a protected range from a named range in the
       * Google Sheets UI associates them automatically.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setNamedRange(NamedRange)
       * @param namedRange The existing named range to associate with the protected range.
       */
      setNamedRange(namedRange: NamedRange): Protection;

      /**
       * Adjusts the range that is being protected. If the given range covers a different area from the
       * current protected range, this method moves the protection to cover the new range instead.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setRange(Range)
       * @param range The new range to protect from edits.
       */
      setRange(range: Range): Protection;

      /**
       * Associates the protected range with an existing named range. If the named range covers a
       * different area from the current protected range, this method moves the protection to cover the
       * the named range instead. The named range must be on the same sheet as the current protected
       * range. Note that scripts must explicitly call this method to associate a protected range with a
       * named range; calling Range.protect() to create a protection from a Range
       * that happens to be a named range, without calling setRangeName(rangeName), is not
       * sufficient to associate them. However, creating a protected range from a named range in the
       * Google Sheets UI associates them automatically.
       *
       *
       *     // Protect a named range in a spreadsheet and log the name of the protected range.
       *     var ss = SpreadsheetApp.getActive();
       *     var range = ss.getRange('A1:B10');
       *     var protection = range.protect();
       *     ss.setNamedRange('Test', range);       // Create a named range.
       *     protection.setRangeName('Test');       // Associate the protection with the named range.
       *     Logger.log(protection.getRangeName()); // Verify the name of the protected range.
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setRangeName(String)
       * @param rangeName The name of the named range to be protected.
       */
      setRangeName(rangeName: string): Protection;

      /**
       * Unprotects the given array of ranges within a protected sheet. Throws an exception if the
       * Protection object corresponds to a protected range instead of a protected sheet or if
       * any of the ranges are not on the protected sheet. To change the unprotected ranges, set a new
       * array of ranges; to re-protect the entire sheet, set an empty array.
       *
       *
       *     // Protect the active sheet except B2:C5, then remove all other users from the list of editors.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.protect().setDescription('Sample protected sheet');
       *     var unprotected = sheet.getRange('B2:C5');
       *     protection.setUnprotectedRanges([unprotected]);
       *
       *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
       *     // permission comes from a group, the script throws an exception upon removing the group.
       *     var me = Session.getEffectiveUser();
       *     protection.addEditor(me);
       *     protection.removeEditors(protection.getEditors());
       *     if (protection.canDomainEdit()) {
       *       protection.setDomainEdit(false);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setUnprotectedRanges(Range)
       * @param ranges The array of ranges to leave unprotected within a protected sheet.
       */
      setUnprotectedRanges(ranges: Range[]): Protection;

      /**
       * Sets whether or not this protected range is using "warning based" protection. Warning-based
       * protection means that every user can edit data in the area, except editing prompts a warning
       * asking the user to confirm the edit. By default, protected ranges or sheets are not
       * warning-based. To check warning state, use isWarningOnly().
       * https://developers.google.com/apps-script/reference/spreadsheet/protection#setWarningOnly(Boolean)
       * @param warningOnly
       */
      setWarningOnly(warningOnly: boolean): Protection;
    }
    /**
     * An enumeration representing the parts of a spreadsheet that can be protected from edits.
     *
     *     // Remove all range protections in the spreadsheet that the user has permission to edit.
     *     var ss = SpreadsheetApp.getActive();
     *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *     for (var i = 0; i < protections.length; i++) {
     *       var protection = protections[i];
     *       if (protection.canEdit()) {
     *         protection.remove();
     *       }
     *     }
     *
     *     // Removes sheet protection from the active sheet, if the user has permission to edit it.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
     *     if (protection && protection.canEdit()) {
     *       protection.remove();
     *     }
     */
    enum ProtectionType { RANGE, SHEET }
    /**
     * Access and modify spreadsheet ranges. A range can be a single cell in a sheet or a group of
     * adjacent cells in a sheet.
     */
    interface Range {

      /**
       * Sets the specified range as the active range, with the top
       * left cell in the range as the current cell.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange('A1:D10');
       *     range.activate();
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: A1
       *     var currentCell = selection.getCurrentCell();
       *     // Active Range: A1:D10
       *     var activeRange = selection.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#activate()
       */
      activate(): Range;

      /**
       * Sets the specified cell as the current cell.
       *
       *
       * If the specified cell is present in an existing range, then that range becomes the active
       * range with the cell as the current cell.
       *
       *
       * If the specified cell is not present in any existing range, then the existing selection is
       * removed and the cell becomes the current cell and the active range.
       *
       *
       *
       * Note: The specified Range must consist of one cell, otherwise it throws an
       * exception.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getRange('B5');
       *     range.activate();
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B5
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#activateAsCurrentCell()
       */
      activateAsCurrentCell(): Range;

      /**
       * Adds developer metadata with the specified key to the range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#addDeveloperMetadata(String)
       * @param key The key for the new developer metadata.
       */
      addDeveloperMetadata(key: string): Range;

      /**
       * Adds developer metadata with the specified key and visibility to the range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#addDeveloperMetadata(String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Range;

      /**
       * Adds developer metadata with the specified key and value to the range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#addDeveloperMetadata(String,String)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string): Range;

      /**
       * Adds developer metadata with the specified key, value, and visibility to the range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#addDeveloperMetadata(String,String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Range;

      /**
       * Applies a default column banding theme to the range. By default, the banding has header and no
       * footer color.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyColumnBanding()
       */
      applyColumnBanding(): Banding;

      /**
       * Applies a specified column banding theme to the range. By default, the banding has header and
       * no footer color.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyColumnBanding(BandingTheme)
       * @param bandingTheme A color theme to apply to the columns in the range.
       */
      applyColumnBanding(bandingTheme: BandingTheme): Banding;

      /**
       * Applies a specified column banding theme to the range with specified header and footer
       * settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyColumnBanding(BandingTheme,Boolean,Boolean)
       * @param bandingTheme A color theme to apply to the columns in the range.
       * @param showHeader If true, the banding theme header color is applied to the first column.
       * @param showFooter If true, the banding theme footer color is applied to the last column.
       */
      applyColumnBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;

      /**
       * Applies a default row banding theme to the range. By default, the banding has header and no
       * footer color.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyRowBanding()
       */
      applyRowBanding(): Banding;

      /**
       * Applies a specified row banding theme to the range. By default, the banding has header and no
       * footer color.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyRowBanding(BandingTheme)
       * @param bandingTheme A color theme to apply to the rows in the range.
       */
      applyRowBanding(bandingTheme: BandingTheme): Banding;

      /**
       * Applies a specified row banding theme to the range with specified header and footer settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#applyRowBanding(BandingTheme,Boolean,Boolean)
       * @param bandingTheme A color theme to apply to the rows in the range.
       * @param showHeader If true, the banding theme header color is applied to the first row.
       * @param showFooter If true, the banding theme footer color is applied to the last row.
       */
      applyRowBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;

      /**
       * Fills the destinationRange with data based on the data in this range. The new values
       * are also determined by the specified series type. The destination range must contain
       * this range and extend it in only one direction. For example, the following fills A1:A20
       * with a series of increasing numbers based on the current values in A1:A4:
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     // Has values [1, 2, 3, 4].
       *     var sourceRange = sheet.getRange("A1:A4");
       *     // The range to fill with values.
       *     var destination = sheet.getRange("A1:A20");
       *
       *     // Inserts new values in A5:A20, continuing the pattern expressed in A1:A4
       *     sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#autoFill(Range,AutoFillSeries)
       * @param destination The range to be auto-filled with values. The destination range should contain this range and extend it in only one direction (upwards, downwards, left, or right).
       * @param series The type of autoFill series that should be used to calculate new values. The effect of this series differs based on the type and amount of source data.
       */
      autoFill(destination: Range, series: AutoFillSeries): void;

      /**
       * Calculates a range to fill with new data based on neighboring cells and automatically fills
       * that range with new values based on the data contained in this range. These new values are also
       * determined by the specified series type.
       *
       *
       * The calculated destination range considers the surrounding data to determine where the new
       * values should be inserted: if there is data to the immediate left or right of a column that is
       * being auto-filled, new values only extend as far as this adjacent data.
       *
       *
       * For example, if A1:A20 is filled with a series of increasing numbers and this method
       * is called on the range B1:B4 which contains a series of dates, new values are only
       * inserted into B5:B20. In this way, these new values "stick" to the cells that contain
       * values in column A.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     // A1:A20 has values [1, 2, 3, ... 20].
       *     // B1:B4 has values [1/1/2017, 1/2/2017, ...]
       *     var sourceRange = sheet.getRange("B1:B4");
       *
       *     // Results in B5:B20 having values [1/5/2017, ... 1/20/2017]
       *     sourceRange.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#autoFillToNeighbor(AutoFillSeries)
       * @param series The type of autoFill series that should be used to calculate new values. The effect of this series differs based on the type and amount of source data.
       */
      autoFillToNeighbor(series: AutoFillSeries): void;

      /**
       * Break any multi-column cells in the range into individual cells again.
       *
       *
       * Calling this function on a range is equivalent to selecting a range and clicking Format ->
       * Merge -> Unmerge.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#breakApart()
       */
      breakApart(): Range;

      /**
       * Determines whether the user has permission to edit every cell in the range. The spreadsheet
       * owner is always able to edit protected ranges and sheets.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#canEdit()
       */
      canEdit(): boolean;

      /**
       * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
       * which currently do not contain either the checked or unchecked value configured.
       *
       *
       *     // Changes the state of cells which currently contain either the checked or unchecked value
       *     // configured in the range A1:B10 to 'checked'.
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *     range.check();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#check()
       */
      check(): Range;

      /**
       * Clears the range of contents, formats, and data validation rules.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.clear();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clear()
       */
      clear(): Range;

      /**
       * Clears the range of contents, format, data validation rules, and/or comments, as specified with
       * the given advanced options. By default all data is cleared.
       *
       *
       *     // The code below clears range C2:G8 in the active sheet, but preserves the format,
       *     // data validation rules, and comments.
       *     SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).clear({contentsOnly: true});
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clear(Object)
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      clear(options: object): Range;

      /**
       * Clears the content of the range, leaving the formatting intact.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.clearContent();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clearContent()
       */
      clearContent(): Range;

      /**
       * Clears the data validation rules for the range.
       *
       *
       *     // Clear the data validation rules for cells A1:B5.
       *     var range = SpreadsheetApp.getActive().getRange('A1:B5');
       *     range.clearDataValidations();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clearDataValidations()
       */
      clearDataValidations(): Range;

      /**
       * Clears formatting for this range.
       *
       *
       * This clears text formatting for the cell or cells in the range, but does not reset any
       * number formatting rules.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.clearFormat();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clearFormat()
       */
      clearFormat(): Range;

      /**
       * Clears the note in the given cell or cells.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.clearNote();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#clearNote()
       */
      clearNote(): Range;

      /**
       * Collapses all groups that are wholly contained within the range. If no group is fully within
       * the range, the deepest expanded group that is partially within the range is collapsed.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getActiveRange();
       *
       *     // All row and column groups within the range are collapsed.
       *     range.expandGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#collapseGroups()
       */
      collapseGroups(): Range;

      /**
       * Copy the formatting of the range to the given location. If the destination is larger or smaller
       * than the source range then the source is repeated or truncated accordingly. Note that this
       * method copies the formatting only.
       *
       *
       * For a detailed description of the gridId parameter, see getGridId().
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var source = ss.getSheets()[0];
       *
       *     var range = source.getRange("B2:D4");
       *
       *     // This copies the formatting in B2:D4 in the source sheet to
       *     // D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
       *     // of a sheet by calling sheet.getSheetId() or range.getGridId().
       *     range.copyFormatToRange(1555299895, 4, 6, 4, 6);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)
       * @param gridId The unique ID of the sheet within the spreadsheet, irrespective of position.
       * @param column The first column of the target range.
       * @param columnEnd The end column of the target range.
       * @param row The start row of the target range.
       * @param rowEnd The end row of the target range.
       */
      copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;

      /**
       * Copy the formatting of the range to the given location. If the destination is larger or smaller
       * than the source range then the source is repeated or truncated accordingly. Note that this
       * method copies the formatting only.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var source = ss.getSheets()[0];
       *     var destination = ss.getSheets()[1];
       *
       *     var range = source.getRange("B2:D4");
       *
       *     // This copies the formatting in B2:D4 in the source sheet to
       *     // D4:F6 in the second sheet
       *     range.copyFormatToRange(destination, 4, 6, 4, 6);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyFormatToRange(Sheet,Integer,Integer,Integer,Integer)
       * @param sheet The target sheet.
       * @param column The first column of the target range.
       * @param columnEnd The end column of the target range.
       * @param row The start row of the target range.
       * @param rowEnd The end row of the target range.
       */
      copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;

      /**
       * Copies the data from a range of cells to another range of cells. Both the values and formatting
       * are copied.
       *
       *
       *     // The code below copies the first 5 columns over to the 6th column.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
       *     rangeToCopy.copyTo(sheet.getRange(1, 6));
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyTo(Range)
       * @param destination A destination range to copy to; only the top-left cell position is relevant.
       */
      copyTo(destination: Range): void;

      /**
       * Copies the data from a range of cells to another range of cells.
       *
       *
       *     // The code below copies only the values of the first 5 columns over to the 6th column.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     sheet.getRange("A:E").copyTo(sheet.getRange("F1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyTo(Range,CopyPasteType,Boolean)
       * @param destination A destination range to copy to; only the top-left cell position is relevant.
       * @param copyPasteType A type that specifies how the range contents are pasted to the destination.
       * @param transposed Whether the range should be pasted in its transposed orientation.
       */
      copyTo(destination: Range, copyPasteType: CopyPasteType, transposed: boolean): void;

      /**
       * Copies the data from a range of cells to another range of cells. By default both the values and
       * formatting are copied, but this can be overridden using advanced arguments.
       *
       *
       *     // The code below copies only the values of the first 5 columns over to the 6th column.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     sheet.getRange("A:E").copyTo(sheet.getRange("F1"), {contentsOnly:true});
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyTo(Range,Object)
       * @param destination A destination range to copy to; only the top-left cell position is relevant.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      copyTo(destination: Range, options: object): void;

      /**
       * Copy the content of the range to the given location. If the destination is larger or smaller
       * than the source range then the source is repeated or truncated accordingly.
       *
       *
       * For a detailed description of the gridId parameter, see getGridId().
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var source = ss.getSheets()[0];
       *
       *     var range = source.getRange("B2:D4");
       *
       *     // This copies the data in B2:D4 in the source sheet to
       *     // D4:F6 in the sheet with gridId 0
       *     range.copyValuesToRange(0, 4, 6, 4, 6);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyValuesToRange(Integer,Integer,Integer,Integer,Integer)
       * @param gridId The unique ID of the sheet within the spreadsheet, irrespective of position.
       * @param column The first column of the target range.
       * @param columnEnd The end column of the target range.
       * @param row The start row of the target range.
       * @param rowEnd The end row of the target range.
       */
      copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;

      /**
       * Copy the content of the range to the given location. If the destination is larger or smaller
       * than the source range then the source is repeated or truncated accordingly.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var source = ss.getSheets()[0];
       *     var destination = ss.getSheets()[1];
       *
       *     var range = source.getRange("B2:D4");
       *
       *     // This copies the data in B2:D4 in the source sheet to
       *     // D4:F6 in the second sheet
       *     range.copyValuesToRange(destination, 4, 6, 4, 6);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#copyValuesToRange(Sheet,Integer,Integer,Integer,Integer)
       * @param sheet The target sheet.
       * @param column The first column of the target range.
       * @param columnEnd The end column of the target range.
       * @param row The start row of the target range.
       * @param rowEnd The end row of the target range.
       */
      copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;

      /**
       * Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this
       * range. Metadata is within the scope of the range only if it is wholly contained within that
       * range. For example, metadata associated with the row ‘3:3’ is not in the scope of a range
       * ‘A1:D5’ but is within the scope of a range ‘1:5’.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#createDeveloperMetadataFinder()
       */
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;

      /**
       * Creates a filter applied to the range. There can be at most one filter in a sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#createFilter()
       */
      createFilter(): Filter;

      /**
       * Creates an empty pivot table from the specified sourceData anchored at the first cell
       * in this range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#createPivotTable(Range)
       * @param sourceData The data to create the pivot table from.
       */
      createPivotTable(sourceData: Range): PivotTable;

      /**
       * Creates a text finder for the range, which can find and replace text in this range.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getActiveRange();
       *
       *     // Creates  a text finder for the range.
       *     var textFinder = range.createTextFinder('dog');
       *
       *     // Returns the first occurrence of 'dog'.
       *     var firstOccurrence = textFinder.findNext();
       *
       *     // Replaces the last found occurrence of 'dog' with 'cat' and returns the number
       *     // of occurrences replaced.
       *     var numOccurrencesReplaced = findOccurrence.replaceWith('cat');
       * https://developers.google.com/apps-script/reference/spreadsheet/range#createTextFinder(String)
       * @param findText The text to search for.
       */
      createTextFinder(findText: string): TextFinder;

      /**
       * Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted
       * towards the deleted range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#deleteCells(Dimension)
       * @param shiftDimension The dimension along which to shift existing data.
       */
      deleteCells(shiftDimension: Dimension): void;

      /**
       * Expands the collapsed groups whose range or control toggle intersects with this range. The
       * control toggle location is the index at which the control toggle is shown, directly before or
       * after the group depending on settings. If there is more than one group at the same location,
       * the shallowest group is expanded.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getActiveRange();
       *
       *     // All row and column groups within the range are expanded.
       *     range.expandGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#expandGroups()
       */
      expandGroups(): Range;

      /**
       * Returns a string description of the range, in A1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange(1, 1, 2, 5);
       *
       *     // Logs "A1:E2"
       *     Logger.log(range.getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getA1Notation()
       */
      getA1Notation(): string;

      /**
       * Returns the background color of the top-left cell in the range (for example, '#ffffff').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B5");
       *     Logger.log(cell.getBackground());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getBackground()
       */
      getBackground(): string;

      /**
       * Returns the background colors of the cells in the range (for example, '#ffffff').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B5:C6");
       *     var bgColors = range.getBackgrounds();
       *     for (var i in bgColors) {
       *       for (var j in bgColors[i]) {
       *         Logger.log(bgColors[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getBackgrounds()
       */
      getBackgrounds(): string[][];

      /**
       * Returns all the bandings that are applied to any cells in this range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getBandings()
       */
      getBandings(): Banding[];

      /**
       * Returns a given cell within a range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D4");
       *
       *     // The row and column here are relative to the range
       *     // getCell(1,1) in this code returns the cell at B2, B2
       *     var cell = range.getCell(1, 1);
       *     Logger.log(cell.getValue());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getCell(Integer,Integer)
       * @param row The row of the cell relative to the range.
       * @param column The column of the cell relative to the range.
       */
      getCell(row: Integer, column: Integer): Range;

      /**
       * Returns the starting column position for this range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D4");
       *     // Logs "2.0"
       *     Logger.log(range.getColumn());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getColumn()
       */
      getColumn(): Integer;

      /**
       * Returns a copy of the range expanded in the four cardinal Directions to cover all
       * adjacent cells with data in them. If the range is surrounded by empty cells not including those
       * along the diagonals, the range itself is returned. This is similar to selecting the range and
       * typing Ctrl+A in the editor.
       *
       *
       *     // Assume the active spreadsheet is blank.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     sheet.getRange("C2").setValue(100);
       *     sheet.getRange("B3").setValue(100);
       *     sheet.getRange("D3").setValue(100);
       *     sheet.getRange("C4").setValue(100);
       *     // Logs "B2:D4"
       *     Logger.log(sheet.getRange("C3").getDataRegion().getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataRegion()
       */
      getDataRegion(): Range;

      /**
       * Returns a copy of the range expanded Direction.UP and Direction.DOWN if the
       * specified dimension is Dimension.ROWS, or Direction.NEXT and Direction.PREVIOUS if the dimension is Dimension.COLUMNS. The expansion of the range
       * is based on detecting data next to the range that is organized like a table. The expanded range
       * covers all adjacent cells with data in them along the specified dimension including the table
       * boundaries. If the original range is surrounded by empty cells along the specified dimension,
       * the range itself is returned. This method is similar to selecting the range and typing
       * Ctrl+Space for columns or Shift+Space for rows in the editor.
       *
       *
       *     // Assume the active spreadsheet is blank.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     sheet.getRange("C2").setValue(100);
       *     sheet.getRange("B3").setValue(100);
       *     sheet.getRange("D3").setValue(100);
       *     sheet.getRange("C4").setValue(100);
       *     // Logs "C2:C4"
       *     Logger.log(sheet.getRange("C3").getDataRegion(SpreadsheetApp.Dimension.ROWS).getA1Notation());
       *     // Logs "B3:D3"
       *     Logger.log(
       *         sheet.getRange("C3").getDataRegion(SpreadsheetApp.Dimension.COLUMNS).getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataRegion(Dimension)
       * @param dimension The dimension along which to expand the range.
       */
      getDataRegion(dimension: Dimension): Range;

      /**
       * Gets all the data source tables intersecting with the range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataSourceTables()
       */
      getDataSourceTables(): DataSourceTable[];

      /**
       * Returns a URL for the data in this range, which can be used to create charts and queries.
       *
       *
       *
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataSourceUrl()
       */
      getDataSourceUrl(): string;

      /**
       * Return the data inside this object as a DataTable.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataTable()
       */
      getDataTable(): Charts.DataTable;

      /**
       * Return the data inside this range as a DataTable.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("A1:B7");
       *
       *     // Calling this method with "true" sets the first line to be the title of the axes
       *     var datatable = range.getDataTable(true);
       *
       *     // Note that this doesn't build an EmbeddedChart, so you can't just use
       *     // Sheet#insertChart(). To do that, use sheet.newChart().addRange() instead.
       *     var chart = Charts.newBarChart()
       *         .setDataTable(datatable)
       *         .setOption("title", "Your Title Here")
       *         .build();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataTable(Boolean)
       * @param firstRowIsHeader Whether to treat the first row as a header.
       */
      getDataTable(firstRowIsHeader: boolean): Charts.DataTable;

      /**
       * Returns the data validation rule for the top-left cell in the range. If data validation has not
       * been set on the cell, this method returns null.
       *
       *
       *     // Log information about the data validation rule for cell A1.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = cell.getDataValidation();
       *     if (rule != null) {
       *       var criteria = rule.getCriteriaType();
       *       var args = rule.getCriteriaValues();
       *       Logger.log('The data validation rule is %s %s', criteria, args);
       *     } else {
       *       Logger.log('The cell does not have a data validation rule.')
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataValidation()
       */
      getDataValidation(): DataValidation;

      /**
       * Returns the data validation rules for all cells in the range. If data validation has not been
       * set on a given cell, this method returns null for that cell's position in the array.
       *
       *
       *     // Change existing data validation rules that require a date in 2013 to require a date in 2014.
       *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
       *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
       *     var rules = range.getDataValidations();
       *
       *     for (var i = 0; i < rules.length; i++) {
       *       for (var j = 0; j < rules[i].length; j++) {
       *         var rule = rules[i][j];
       *
       *         if (rule != null) {
       *           var criteria = rule.getCriteriaType();
       *           var args = rule.getCriteriaValues();
       *
       *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
       *               && args[0].getTime() == oldDates[0].getTime()
       *               && args[1].getTime() == oldDates[1].getTime()) {
       *             // Create a builder from the existing rule, then change the dates.
       *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       *           }
       *         }
       *       }
       *     }
       *     range.setDataValidations(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDataValidations()
       */
      getDataValidations(): DataValidation[][];

      /**
       * Get the developer metadata associated with this range.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDeveloperMetadata()
       */
      getDeveloperMetadata(): DeveloperMetadata[];

      /**
       * Returns the displayed value of the top-left cell in the range. The value is a String.
       * The displayed value takes into account date, time and currency formatting formatting, including
       * formats applied automatically by the spreadsheet's locale setting. Empty cells return an empty
       * string.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDisplayValue()
       */
      getDisplayValue(): string;

      /**
       * Returns the rectangular grid of values for this range.
       *
       *
       * Returns a two-dimensional array of displayed values, indexed by row, then by column. The
       * values are String objects. The displayed value takes into account date, time and
       * currency formatting, including formats applied automatically by the spreadsheet's locale
       * setting. Empty cells are represented by an empty string in the array. Remember that while a
       * range index starts at 1, 1, the JavaScript array is indexed from [0][0].
       *
       *
       *     // The code below gets the displayed values for the range C2:G8
       *     // in the active spreadsheet.  Note that this is a JavaScript array.
       *     var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
       *     Logger.log(values[0][0]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getDisplayValues()
       */
      getDisplayValues(): string[][];

      /**
       * Returns the filter in the sheet this range belongs to, or null if there is no filter on
       * the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFilter()
       */
      getFilter(): Filter;

      /**
       * Returns the font color of the cell in the top-left corner of the range, in CSS notation (such
       * as '#ffffff' or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontColor());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontColor()
       */
      getFontColor(): string;

      /**
       * Returns the font colors of the cells in the range in CSS notation (such as '#ffffff' or
       * 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontColors();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontColors()
       */
      getFontColors(): string[][];

      /**
       * Returns the font families of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontFamilies();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontFamilies()
       */
      getFontFamilies(): string[][];

      /**
       * Returns the font family of the cell in the top-left corner of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontFamily());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Gets the line style of the cell in the top-left corner of the range ('underline',
       * 'line-through', or 'none').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontLine());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontLine()
       */
      getFontLine(): string;

      /**
       * Gets the line style of the cells in the range ('underline', 'line-through', or
       * 'none').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontLines();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontLines()
       */
      getFontLines(): string[][];

      /**
       * Returns the font size in point size of the cell in the top-left corner of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontSize());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontSize()
       */
      getFontSize(): Integer;

      /**
       * Returns the font sizes of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontSizes();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontSizes()
       */
      getFontSizes(): Integer[][];

      /**
       * Returns the font style ('italic' or 'normal') of the cell in the top-left
       * corner of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontStyle());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontStyle()
       */
      getFontStyle(): string;

      /**
       * Returns the font styles of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontStyles();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontStyles()
       */
      getFontStyles(): string[][];

      /**
       * Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getFontWeight());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontWeight()
       */
      getFontWeight(): string;

      /**
       * Returns the font weights of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getFontWeights();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFontWeights()
       */
      getFontWeights(): string[][];

      /**
       * Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the
       * cell is empty or doesn't contain a formula.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This assumes you have a function in B5 that sums up
       *     // B2:B4
       *     var range = sheet.getRange("B5");
       *
       *     // Logs the calculated value and the formula
       *     Logger.log("Calculated value: %s Formula: %s",
       *                range.getValue(),
       *                range.getFormula());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFormula()
       */
      getFormula(): string;

      /**
       * Returns the formula (R1C1 notation) for a given cell, or null if none.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B5");
       *     var formula = range.getFormulaR1C1();
       *     Logger.log(formula);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFormulaR1C1()
       */
      getFormulaR1C1(): string;

      /**
       * Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are
       * empty strings for cells with no formula.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B5:C6");
       *     var formulas = range.getFormulas();
       *     for (var i in formulas) {
       *       for (var j in formulas[i]) {
       *         Logger.log(formulas[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFormulas()
       */
      getFormulas(): string[][];

      /**
       * Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array are
       * null for cells with no formula.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B5:C6");
       *     var formulas = range.getFormulasR1C1();
       *     for (var i in formulas) {
       *       for (var j in formulas[i]) {
       *         Logger.log(formulas[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getFormulasR1C1()
       */
      getFormulasR1C1(): string[][];

      /**
       * Returns the grid ID of the range's parent sheet. IDs are random non-negative int values.
       *
       *
       *     // Log the grid ID of the first sheet (by tab position) in the spreadsheet.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getGridId());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getGridId()
       */
      getGridId(): Integer;

      /**
       * Returns the height of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D4");
       *     // logs 3.0
       *     Logger.log(range.getHeight());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getHeight()
       */
      getHeight(): Integer;

      /**
       * Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left
       * corner of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getHorizontalAlignment());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getHorizontalAlignment()
       */
      getHorizontalAlignment(): string;

      /**
       * Returns the horizontal alignments of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getHorizontalAlignments();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getHorizontalAlignments()
       */
      getHorizontalAlignments(): string[][];

      /**
       * Returns the end column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D4");
       *     // Logs "4.0"
       *     Logger.log(range.getLastColumn());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getLastColumn()
       */
      getLastColumn(): Integer;

      /**
       * Returns the end row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D4");
       *     // Logs "4.0"
       *     Logger.log(range.getLastRow());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getLastRow()
       */
      getLastRow(): Integer;

      /**
       * Returns an array of Range objects representing merged cells that either are fully
       * within the current range, or contain at least one cell in the current range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B3");
       *
       *     var mergedRanges = range.getMergedRanges();
       *     for (var i = 0; i < mergedRanges.length; i++) {
       *       Logger.log(mergedRanges[i].getA1Notation());
       *       Logger.log(mergedRanges[i].getDisplayValue());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getMergedRanges()
       */
      getMergedRanges(): Range[];

      /**
       * Starting at the cell in the first column and row of the range, returns the next cell in the
       * given direction that is the edge of a contiguous range of cells with data in them or the cell
       * at the edge of the spreadsheet in that direction. This is equivalent to typing
       * Ctrl+[arrow key] in the editor.
       *
       *
       *     // Assume the active spreadsheet is blank.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("C3:E5");
       *     // Logs "C1"
       *     Logger.log(range.getNextDataCell(Direction.UP).getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNextDataCell(Direction)
       * @param direction The direction in which to find the next data region edge cell.
       */
      getNextDataCell(direction: Direction): Range;

      /**
       * Returns the note associated with the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getNote());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNote()
       */
      getNote(): string;

      /**
       * Returns the notes associated with the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getNotes();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNotes()
       */
      getNotes(): string[][];

      /**
       * Returns the number of columns in this range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D5");
       *     Logger.log(range.getNumColumns());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNumColumns()
       */
      getNumColumns(): Integer;

      /**
       * Returns the number of rows in this range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D5");
       *     Logger.log(range.getNumRows());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNumRows()
       */
      getNumRows(): Integer;

      /**
       * Get the number or date formatting of the top-left cell of the given range. The returned format
       * patterns are described in the Sheets API
       * documentation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("C4");
       *     Logger.log(cell.getNumberFormat());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNumberFormat()
       */
      getNumberFormat(): string;

      /**
       * Returns the number or date formats for the cells in the range. The returned format patterns are
       * described in the Sheets API documentation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B5:C6");
       *     var formats = range.getNumberFormats();
       *     for (var i in formats) {
       *       for (var j in formats[i]) {
       *         Logger.log(formats[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getNumberFormats()
       */
      getNumberFormats(): string[][];

      /**
       * Returns the Rich Text value for the top left cell of the range, or null if the cell
       * value is not text.
       *
       *
       *     // Get the Rich Text value of cell D4.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("D4:F6");
       *     var richText = range.getRichTextValue();
       *     Logger.log(richText);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getRichTextValue()
       */
      getRichTextValue(): RichTextValue;

      /**
       * Returns the Rich Text values for the cells in the range.
       *
       *
       *     // Get the Rich Text values for all cells in range B5:C6
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B5:C6");
       *     var values = range.getRichTextValues();
       *
       *     for (var i = 0; i < values.length; i++) {
       *       for (var j = 0; j < values[i].length; j++) {
       *         Logger.log(values[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getRichTextValues()
       */
      getRichTextValues(): RichTextValue[][];

      /**
       * Returns the row position for this range. Identical to getRowIndex().
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2");
       *     Logger.log(range.getRow());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getRow()
       */
      getRow(): Integer;

      /**
       * Returns the row position for this range. Identical to getRow().
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2");
       *     Logger.log(range.getRowIndex());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getRowIndex()
       */
      getRowIndex(): Integer;

      /**
       * Returns the sheet this range belongs to.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getSheet()
       */
      getSheet(): Sheet;

      /**
       * Returns the text direction for the top left cell of the range. Returns null if the cell
       * text direction is determined with automatic detection.
       *
       *
       *     // Get the text direction of cell B1.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B1:D4");
       *     Logger.log(range.getTextDirection());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextDirection()
       */
      getTextDirection(): TextDirection;

      /**
       * Returns the text directions for the cells in the range. Entries in the 2D array are null for cells using automatic detection.
       *
       *
       *     // Get the text directions for all cells in range B5:C6
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B5:C6");
       *     var directions = range.getTextDirections();
       *
       *     for (var i = 0; i < directions.length; i++) {
       *       for (var j = 0; j < directions[i].length; j++) {
       *         Logger.log(directions[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextDirections()
       */
      getTextDirections(): TextDirection[][];

      /**
       * Returns the text rotation settings for the top left cell of the range.
       *
       *
       *     // Log the text rotation settings for a cell.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     var cell = sheet.getRange("A1");
       *     Logger.log(cell.getTextRotation());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextRotation()
       */
      getTextRotation(): TextRotation;

      /**
       * Returns the text rotation settings for the cells in the range.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getTextRotations();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         var rotation = results[i][j];
       *         Logger.log("Cell [%s, %s] has text rotation: %v", i, j, rotation);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextRotations()
       */
      getTextRotations(): TextRotation[][];

      /**
       * Returns the text style for the top left cell of the range.
       *
       *
       *     // Get the text style of cell D4.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("D4:F6");
       *     var style = range.getTextStyle();
       *     Logger.log(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextStyle()
       */
      getTextStyle(): TextStyle;

      /**
       * Returns the text styles for the cells in the range.
       *
       *
       *     // Get the text styles for all cells in range B5:C6
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B5:C6");
       *     var styles = range.getTextStyles();
       *
       *     for (var i = 0; i < styles.length; i++) {
       *       for (var j = 0; j < styles[i].length; j++) {
       *         Logger.log(styles[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getTextStyles()
       */
      getTextStyles(): TextStyle[][];

      /**
       * Returns the value of the top-left cell in the range. The value may be of type Number,
       * Boolean, Date, or String depending on the value of the cell. Empty
       * cells return an empty string.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getValue()
       */
      getValue(): object;

      /**
       * Returns the rectangular grid of values for this range.
       *
       *
       * Returns a two-dimensional array of values, indexed by row, then by column. The values may be
       * of type Number, Boolean, Date, or String, depending on the
       * value of the cell. Empty cells are represented by an empty string in the array. Remember that
       * while a range index starts at 1, 1, the JavaScript array is indexed from [0][0].
       *
       *
       *     // The code below gets the values for the range C2:G8
       *     // in the active spreadsheet.  Note that this is a JavaScript array.
       *     var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
       *     Logger.log(values[0][0]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getValues()
       */
      getValues(): object[][];

      /**
       * Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the
       * range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getVerticalAlignment());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getVerticalAlignment()
       */
      getVerticalAlignment(): string;

      /**
       * Returns the vertical alignments of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getVerticalAlignments();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         Logger.log(results[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getVerticalAlignments()
       */
      getVerticalAlignments(): string[][];

      /**
       * Returns the width of the range in columns.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getWidth()
       */
      getWidth(): Integer;

      /**
       * Returns the wrapping policy of the cell in the top-left corner of the range. true if
       * the text wraps, false if the text does not.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.getWrap());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getWrap()
       */
      getWrap(): boolean;

      /**
       * Returns the text wrapping strategies for the cells in the range.
       *
       *
       *     // Get the text wrapping strategies for all cells in range B5:C6
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B5:C6");
       *     var strategies = range.getWrapStrategies();
       *
       *     for (var i = 0; i < strategies.length; i++) {
       *       for (var j = 0; j < strategies[i].length; j++) {
       *         Logger.log(strategies[i][j]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getWrapStrategies()
       */
      getWrapStrategies(): WrapStrategy[][];

      /**
       * Returns the text wrapping strategy for the top left cell of the range.
       *
       *
       *     // Get the text wrapping strategy of cell B1.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B1:D4");
       *     Logger.log(range.getWrapStrategy());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getWrapStrategy()
       */
      getWrapStrategy(): WrapStrategy;

      /**
       * Returns the wrapping policy of the cells in the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     var results = range.getVerticalAlignments();
       *
       *     for (var i in results) {
       *       for (var j in results[i]) {
       *         var isWrapped = results[i][j];
       *         if (isWrapped) {
       *            Logger.log("Cell [%s, %s] has wrapped text", i, j);
       *         }
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#getWraps()
       */
      getWraps(): boolean[][];

      /**
       * Inserts empty cells into this range. The new cells retain any formatting present in the cells
       * previously occupying this range. Existing data in the sheet along the provided dimension is
       * shifted away from the inserted range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D10");
       *     range.insertCells(SpreadsheetApp.Dimension.COLUMNS);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#insertCells(Dimension)
       * @param shiftDimension The dimension along which to shift existing data.
       */
      insertCells(shiftDimension: Dimension): Range;

      /**
       * Inserts checkboxes into each cell in the range, configured with true for checked and
       * false for unchecked. Sets the value of all cells in the range to false.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *
       *     // Inserts checkboxes into each cell in the range A1:B10 configured with 'true' for checked
       *     // and 'false' for unchecked. Also, sets the value of each cell in the range A1:B10 to 'false'.
       *     range.insertCheckboxes();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#insertCheckboxes()
       */
      insertCheckboxes(): Range;

      /**
       * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
       * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *
       *     // Inserts checkboxes into each cell in the range A1:B10 configured with 'yes' for checked
       *     // and the empty string for unchecked. Also, sets the value of each cell in the range A1:B10 to
       *     //  the empty string.
       *     range.insertCheckboxes('yes');
       * https://developers.google.com/apps-script/reference/spreadsheet/range#insertCheckboxes(Object)
       * @param checkedValue The checked value for the checkbox data validation.
       */
      insertCheckboxes(checkedValue: object): Range;

      /**
       * Inserts checkboxes into each cell in the range, configured with custom values for the checked
       * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *
       *     // Inserts checkboxes into each cell in the range A1:B10 configured with 'yes' for checked
       *     // and 'no' for unchecked. Also, sets the value of each cell in the range A1:B10 to 'no'.
       *     range.insertCheckboxes('yes', 'no');
       * https://developers.google.com/apps-script/reference/spreadsheet/range#insertCheckboxes(Object,Object)
       * @param checkedValue The checked value for the checkbox data validation.
       * @param uncheckedValue The unchecked value for the checkbox data validation.
       */
      insertCheckboxes(checkedValue: object, uncheckedValue: object): Range;

      /**
       * Returns true if the range is totally blank.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B2:D4");
       *
       *     Logger.log(range.isBlank());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isBlank()
       */
      isBlank(): boolean;

      /**
       * Returns whether all cells in the range have their checkbox state as 'checked'. Returns null if some cells are checked and the rest unchecked, or if some cells do not have checkbox
       * data validation.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:A3');
       *
       *     // Inserts checkboxes and sets each cell value to 'no' in the range A1:A3.
       *     range.insertCheckboxes('yes', 'no');
       *
       *     var range1 = SpreadsheetApp.getActive().getRange('A1');
       *     range1.setValue('yes');
       *     // Sets the value of isRange1Checked as true as it contains the checked value.
       *     var isRange1Checked = range1.isChecked();
       *
       *     var range2 = SpreadsheetApp.getActive().getRange('A2');
       *     range2.setValue('no');
       *     // Sets the value of isRange2Checked as false as it contains the unchecked value.
       *     var isRange2Checked = range2.isChecked();
       *
       *     var range3 = SpreadsheetApp.getActive().getRange('A3');
       *     range3.setValue('random');
       *     // Sets the value of isRange3Checked as null, as it contains an invalid checkbox value.
       *     var isRange3Checked = range3.isChecked();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isChecked()
       */
      isChecked(): boolean;

      /**
       * Determines whether the end of the range is bound to a particular column. For example, for the
       * ranges A1:B10 or B:B, which are bound to columns at the end of the range, this
       * method returns true; for the ranges 3:7 or A1:5, which are bound only
       * to particular rows at the end of the range, this method returns false.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isEndColumnBounded()
       */
      isEndColumnBounded(): boolean;

      /**
       * Determines whether the end of the range is bound to a particular row. For example, for the
       * ranges A1:B10 or 3:7, which are bound to rows at the end of the range, this
       * method returns true; for the ranges B:B or A1:C, which are bound only
       * to particular columns at the end of the range, this method returns false.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isEndRowBounded()
       */
      isEndRowBounded(): boolean;

      /**
       * Returns true if the cells in the current range overlap any merged cells.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:B3");
       *
       *     // True if any of the cells in A1:B3 is included in a merge.
       *     var isPartOfMerge = range.isPartOfMerge();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isPartOfMerge()
       */
      isPartOfMerge(): boolean;

      /**
       * Determines whether the start of the range is bound to a particular column. For example, for the
       * ranges A1:B10 or B:B, which are bound to columns at the start of the range,
       * this method returns true; for the range 3:7, which is bound only to a row at
       * the start of the range, this method returns false.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isStartColumnBounded()
       */
      isStartColumnBounded(): boolean;

      /**
       * Determines whether the start of the range is bound to a particular row. For example, for the
       * ranges A1:B10 or 3:7, which are bound to rows at the start of the range, this
       * method returns true; for the range B:B, which is bound only to a particular
       * column at the start of the range, this method returns false.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#isStartRowBounded()
       */
      isStartRowBounded(): boolean;

      /**
       * Merges the cells in the range together into a single block.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     // The code below 2-dimensionally merges the cells in A1 to B3
       *     sheet.getRange('A1:B3').merge();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#merge()
       */
      merge(): Range;

      /**
       * Merge the cells in the range across the columns of the range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The code below merges cells C5:E5 into one cell
       *     var range1 = sheet.getRange("C5:E5");
       *     range1.mergeAcross();
       *
       *     // The code below creates 2 horizontal cells, F5:H5 and F6:H6
       *     var range2 = sheet.getRange("F5:H6");
       *     range2.mergeAcross();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#mergeAcross()
       */
      mergeAcross(): Range;

      /**
       * Merges the cells in the range together.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     // The code below vertically merges the cells in A1 to A10
       *     sheet.getRange('A1:A10').mergeVertically();
       *
       *     // The code below creates 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
       *     sheet.getRange('B1:D10').mergeVertically();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#mergeVertically()
       */
      mergeVertically(): Range;

      /**
       * Cut and paste (both format and values) from this range to the target range.
       *
       *
       *     // The code below moves the first 5 columns over to the 6th column
       *     var sheet = SpreadsheetApp.getActiveSheet()
       *     sheet.getRange("A1:E").moveTo(sheet.getRange("F1"));
       * https://developers.google.com/apps-script/reference/spreadsheet/range#moveTo(Range)
       * @param target A target range to copy this range to; only the top-left cell position is relevant.
       */
      moveTo(target: Range): void;

      /**
       * Returns a new range that is offset from this range by the given number of rows and columns
       * (which can be negative). The new range is the same size as the original range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("A1");
       *
       *     // newCell references B2
       *     var newCell = cell.offset(1, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#offset(Integer,Integer)
       * @param rowOffset The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell.
       * @param columnOffset The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell.
       */
      offset(rowOffset: Integer, columnOffset: Integer): Range;

      /**
       * Returns a new range that is relative to the current range, whose upper left point is offset
       * from the current range by the given rows and columns, and with the given height in cells.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("A1");
       *
       *     // newCell references B2:B3
       *     var newRange = cell.offset(1, 1, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#offset(Integer,Integer,Integer)
       * @param rowOffset The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell.
       * @param columnOffset The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell.
       * @param numRows The height in rows of the new range.
       */
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer): Range;

      /**
       * Returns a new range that is relative to the current range, whose upper left point is offset
       * from the current range by the given rows and columns, and with the given height and width in
       * cells.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("A1");
       *
       *     // newCell references B2:C3
       *     var newRange = cell.offset(1, 1, 2, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#offset(Integer,Integer,Integer,Integer)
       * @param rowOffset The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell.
       * @param columnOffset The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell.
       * @param numRows The height in rows of the new range.
       * @param numColumns The width in columns of the new range.
       */
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer, numColumns: Integer): Range;

      /**
       * Creates an object that can protect the range from being edited except by users who have
       * permission. Until the script actually changes the list of editors for the range (by calling
       * Protection.removeEditor(emailAddress), Protection.removeEditor(user), Protection.removeEditors(emailAddresses), Protection.addEditor(emailAddress), Protection.addEditor(user), Protection.addEditors(emailAddresses), or setting a new
       * value for Protection.setDomainEdit(editable)), the permissions mirror those of the
       * spreadsheet itself, which effectively means that the range remains unprotected. If the range is
       * already protected, this method creates a new protected range that overlaps the existing one. If
       * a cell is protected by multiple protected ranges and any of them prevent a particular user from
       * editing the cell, then that user is not permitted to edit the cell.
       *
       *
       *     // Protect range A1:B10, then remove all other users from the list of editors.
       *     var ss = SpreadsheetApp.getActive();
       *     var range = ss.getRange('A1:B10');
       *     var protection = range.protect().setDescription('Sample protected range');
       *
       *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
       *     // permission comes from a group, the script throws an exception upon removing the group.
       *     var me = Session.getEffectiveUser();
       *     protection.addEditor(me);
       *     protection.removeEditors(protection.getEditors());
       *     if (protection.canDomainEdit()) {
       *       protection.setDomainEdit(false);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/range#protect()
       */
      protect(): Protection;

      /**
       * Randomizes the order of the rows in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("A1:C7");
       *
       *     // Randomizes the range
       *     range.randomize();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#randomize()
       */
      randomize(): Range;

      /**
       * Removes all checkboxes from the range. Clears the data validation of each cell, and
       * additionally clears its value if the cell contains either the checked or unchecked value.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *
       *     // Inserts checkboxes and sets each cell value to 'no' in the range A1:B10.
       *     range.insertCheckboxes('yes', 'no');
       *
       *     var range1 = SpreadsheetApp.getActive().getRange('A1');
       *     range1.setValue('yes');
       *     // Removes the checkbox data validation in cell A1 and clears its value.
       *     range1.removeCheckboxes();
       *
       *     var range2 = SpreadsheetApp.getActive().getRange('A2');
       *     range2.setValue('random');
       *     // Removes the checkbox data validation in cell A2 but does not clear its value.
       *     range2.removeCheckboxes();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#removeCheckboxes()
       */
      removeCheckboxes(): Range;

      /**
       * Removes rows within this range that contain values that are duplicates of values in any
       * previous row. Rows with identical values but different letter cases, formatting, or formulas
       * are considered to be duplicates. This method also removes duplicates rows hidden from view (for
       * example, due to a filter). Content outside of this range isn't removed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B1:D7");
       *
       *     // Remove duplicate rows in the range.
       *     range.removeDuplicates();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#removeDuplicates()
       */
      removeDuplicates(): Range;

      /**
       * Removes rows within this range that contain values in the specified columns that are duplicates
       * of values any previous row. Rows with identical values but different letter cases, formatting,
       * or formulas are considered to be duplicates. This method also removes duplicates rows hidden
       * from view (for example, due to a filter). Content outside of this range isn't removed.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("B1:D7");
       *
       *     // Remove rows which have duplicate values in column B.
       *     range.removeDuplicates([2]);
       *
       *     // Remove rows which have duplicate values in both columns B and D.
       *     range.removeDuplicates([2,4]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#removeDuplicates(Integer)
       * @param columnsToCompare The columns to analyze for duplicate values. If no columns are provided then all columns are analyzed for duplicates.
       */
      removeDuplicates(columnsToCompare: Integer[]): Range;

      /**
       * Sets the background color of all cells in the range in CSS notation (such as '#ffffff'
       * or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("B2:D5");
       *     range.setBackground("red");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setBackground(String)
       * @param color A color code in CSS notation (such as '#ffffff' or 'white'); a null value resets the color.
       */
      setBackground(color: string): Range;

      /**
       * Sets the background to the given color using RGB values (integers between 0 and 255 inclusive).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *
       *     // Sets the background to white
       *     cell.setBackgroundRGB(255, 255, 255);
       *
       *     // Sets the background to red
       *     cell.setBackgroundRGB(255, 0, 0);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setBackgroundRGB(Integer,Integer,Integer)
       * @param red The red value in RGB notation.
       * @param green The green value in RGB notation.
       * @param blue The blue value in RGB notation.
       */
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;

      /**
       * Sets a rectangular grid of background colors (must match dimensions of this range). The colors
       * are in CSS notation (such as '#ffffff' or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var colors = [
       *       ["red", "white", "blue"],
       *       ["#FF0000", "#FFFFFF", "#0000FF"] // These are the hex equivalents
       *     ];
       *
       *     var cell = sheet.getRange("B5:D6");
       *     cell.setBackgrounds(colors);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setBackgrounds(String)
       * @param color A two-dimensional array of colors in CSS notation (such as '#ffffff' or 'white'); null values reset the color.
       */
      setBackgrounds(color: string[][]): Range;

      /**
       * Sets the border property. Valid values are true (on), false (off) and null (no change).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     // Sets borders on the top and bottom, but leaves the left and right unchanged
       *     cell.setBorder(true, null, true, null, false, false);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setBorder(Boolean,Boolean,Boolean,Boolean,Boolean,Boolean)
       * @param top true for border, false for none, null for no change.
       * @param left true for border, false for none, null for no change.
       * @param bottom true for border, false for none, null for no change.
       * @param right true for border, false for none, null for no change.
       * @param vertical true for internal vertical borders, false for none, null for no change.
       * @param horizontal true for internal horizontal borders, false for none, null for no change.
       */
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): Range;

      /**
       * Sets the border property with color and/or style. Valid values are true (on), false (off) and null (no change). For color, use Color in CSS notation (such as '#ffffff' or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     // Sets borders on the top and bottom, but leaves the left and right unchanged
       *     // Also sets the color to "red", and the border to "DASHED".
       *     cell.setBorder(true, null, true, null, false, false, "red", SpreadsheetApp.BorderStyle.DASHED);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setBorder(Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,String,BorderStyle)
       * @param top true for border, false for none, null for no change.
       * @param left true for border, false for none, null for no change.
       * @param bottom true for border, false for none, null for no change.
       * @param right true for border, false for none, null for no change.
       * @param vertical true for internal vertical borders, false for none, null for no change.
       * @param horizontal true for internal horizontal borders, false for none, null for no change.
       * @param color A color in CSS notation (such as '#ffffff' or 'white'), null for default color (black).
       * @param style A style for the borders, null for default style (solid).
       */
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): Range;

      /**
       * Sets one data validation rule for all cells in the range.
       *
       *
       *     // Set the data validation rule for cell A1 to require a value from B1:B10.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setDataValidation(DataValidation)
       * @param rule The data validation rule to set, or null to remove data validation.
       */
      setDataValidation(rule: DataValidation): Range;

      /**
       * Sets the data validation rules for all cells in the range. This method takes a two-dimensional
       * array of data validations, indexed by row then by column. The array dimensions must correspond
       * to the range dimensions.
       *
       *
       *     // Set the data validation rules for Sheet1!A1:B5 to require a value from Sheet2!A1:A10.
       *     var destinationRange = SpreadsheetApp.getActive().getSheetByName('Sheet1').getRange('A1:B5');
       *     var sourceRange = SpreadsheetApp.getActive().getSheetByName('Sheet2').getRange('A1:A10');
       *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
       *     var rules = destinationRange.getDataValidations();
       *     for (var i = 0; i < rules.length; i++) {
       *       for (var j = 0; j < rules[i].length; j++) {
       *         rules[i][j] = rule;
       *       }
       *     }
       *     destinationRange.setDataValidations(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setDataValidations(DataValidation)
       * @param rules A two-dimensional array of data validation rules to set; null values remove data validation.
       */
      setDataValidations(rules: DataValidation[][]): Range;

      /**
       * Sets the font color in CSS notation (such as '#ffffff' or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontColor("red");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontColor(String)
       * @param color The font color in CSS notation (such as '#ffffff' or 'white'); a null value resets the color.
       */
      setFontColor(color: string): Range;

      /**
       * Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in
       * CSS notation (such as '#ffffff' or 'white').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var colors = [
       *       ["red", "white", "blue"],
       *       ["#FF0000", "#FFFFFF", "#0000FF"] // These are the hex equivalents
       *     ];
       *
       *     var cell = sheet.getRange("B5:D6");
       *     cell.setFontColors(colors);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontColors(Object)
       * @param colors A two-dimensional array of colors in CSS notation (such as '#ffffff' or 'white'); null values reset the color.
       */
      setFontColors(colors: object[][]): Range;

      /**
       * Sets a rectangular grid of font families (must match dimensions of this range). Examples of
       * font families are "Arial" or "Helvetica".
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var fonts = [
       *       ["Arial", "Helvetica", "Verdana"],
       *       ["Courier New", "Arial", "Helvetica]
       *     ];
       *
       *     var cell = sheet.getRange("B2:D3");
       *     cell.setFontFamilies(fonts);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontFamilies(Object)
       * @param fontFamilies A two-dimensional array of font families; null values reset the font family.
       */
      setFontFamilies(fontFamilies: object[][]): Range;

      /**
       * Sets the font family, such as "Arial" or "Helvetica".
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontFamily("Helvetica");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontFamily(String)
       * @param fontFamily The font family to set; a null value resets the font family.
       */
      setFontFamily(fontFamily: string): Range;

      /**
       * Sets the font line style of the given range ('underline', 'line-through', or
       * 'none').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontLine("line-through");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontLine(String)
       * @param fontLine The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style.
       */
      setFontLine(fontLine: string): Range;

      /**
       * Sets a rectangular grid of line styles (must match dimensions of this range).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var fontLines = [
       *       ["underline", "line-through", "none"]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setFontLines(fontLines);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontLines(Object)
       * @param fontLines A two-dimensional array of font line styles ('underline', 'line-through', or 'none'); null values reset the font line style.
       */
      setFontLines(fontLines: object[][]): Range;

      /**
       * Sets the font size, with the size being the point size to use.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontSize(20);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontSize(Integer)
       * @param size A font size in point size.
       */
      setFontSize(size: Integer): Range;

      /**
       * Sets a rectangular grid of font sizes (must match dimensions of this range). The sizes are in
       * points.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var fontSizes = [
       *       [16, 20, 24]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setFontSizes(fontSizes);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontSizes(Object)
       * @param sizes A two-dimensional array of sizes.
       */
      setFontSizes(sizes: object[][]): Range;

      /**
       * Set the font style for the given range ('italic' or 'normal').
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontStyle("italic");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontStyle(String)
       * @param fontStyle The font style, either 'italic' or 'normal'; a null value resets the font style.
       */
      setFontStyle(fontStyle: string): Range;

      /**
       * Sets a rectangular grid of font styles (must match dimensions of this range).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var fontStyles = [
       *       ["italic", "normal"]
       *     ];
       *
       *     var range = sheet.getRange("B2:C2");
       *     range.setFontStyles(fontStyles);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontStyles(Object)
       * @param fontStyles A two-dimensional array of font styles, either 'italic' or 'normal'; null values reset the font style.
       */
      setFontStyles(fontStyles: object[][]): Range;

      /**
       * Set the font weight for the given range (normal/bold).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setFontWeight("bold");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontWeight(String)
       * @param fontWeight The font weight, either 'bold' or 'normal'; a null value resets the font weight.
       */
      setFontWeight(fontWeight: string): Range;

      /**
       * Sets a rectangular grid of font weights (must match dimensions of this range). An example of a
       * font weight is "bold".
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var fontStyles = [
       *       [ "bold", "bold", "normal" ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setFontWeights(fontStyles);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFontWeights(Object)
       * @param fontWeights A two-dimensional array of font weights, either 'bold' or 'normal'; null values reset the font weight.
       */
      setFontWeights(fontWeights: object[][]): Range;

      /**
       * Updates the formula for this range. The given formula must be in A1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B5");
       *     cell.setFormula("=SUM(B3:B4)");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFormula(String)
       * @param formula A string representing the formula to set for the cell.
       */
      setFormula(formula: string): Range;

      /**
       * Updates the formula for this range. The given formula must be in R1C1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B5");
       *     // This sets the formula to be the sum of the 3 rows above B5
       *     cell.setFormulaR1C1("=SUM(R[-3]C[0]:R[-1]C[0])");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFormulaR1C1(String)
       * @param formula A string formula.
       */
      setFormulaR1C1(formula: string): Range;

      /**
       * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
       * must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row,
       * then by column. The array dimensions must correspond to the range dimensions.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This sets the formulas to be a row of sums, followed by a row of averages right below.
       *     // The size of the two-dimensional array must match the size of the range.
       *     var formulas = [
       *       ["=SUM(B2:B4)", "=SUM(C2:C4)", "=SUM(D2:D4)"],
       *       ["=AVERAGE(B2:B4)", "=AVERAGE(C2:C4)", "=AVERAGE(D2:D4)"]
       *     ];
       *
       *     var cell = sheet.getRange("B5:D6");
       *     cell.setFormulas(formulas);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFormulas(String)
       * @param formulas A two-dimensional string array of formulas.
       */
      setFormulas(formulas: string[][]): Range;

      /**
       * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
       * must be in R1C1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This creates formulas for a row of sums, followed by a row of averages.
       *     var sumOfRowsAbove = "=SUM(R[-3]C[0]:R[-1]C[0])";
       *     var averageOfRowsAbove = "=AVERAGE(R[-4]C[0]:R[-2]C[0])";
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var formulas = [
       *       [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
       *       [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove]
       *     ];
       *
       *     var cell = sheet.getRange("B5:D6");
       *     // This sets the formula to be the sum of the 3 rows above B5.
       *     cell.setFormulasR1C1(formulas);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setFormulasR1C1(String)
       * @param formulas A two-dimensional array of formulas in R1C1 format.
       */
      setFormulasR1C1(formulas: string[][]): Range;

      /**
       * Set the horizontal (left to right) alignment for the given range (left/center/right).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setHorizontalAlignment("center");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setHorizontalAlignment(String)
       * @param alignment The alignment, either 'left', 'center' or 'normal'; a null value resets the alignment.
       */
      setHorizontalAlignment(alignment: string): Range;

      /**
       * Sets a rectangular grid of horizontal alignments. see setHorizontalAlignment(alignment)
       *
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var horizontalAlignments = [
       *       [ "left", "right", "center" ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setHorizontalAlignments(horizontalAlignments);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setHorizontalAlignments(Object)
       * @param alignments A two-dimensional array of alignments, either 'left', 'center' or 'normal'; a null value resets the alignment.
       */
      setHorizontalAlignments(alignments: object[][]): Range;

      /**
       * Sets the note to the given value.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setNote("This is a note");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setNote(String)
       * @param note The note value to set for the range; a null value removes the note.
       */
      setNote(note: string): Range;

      /**
       * Sets a rectangular grid of notes (must match dimensions of this range).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var notes = [
       *       ["it goes", "like this", "the fourth, the fifth"],
       *       ["the minor fall", "and the", "major lift"]
       *     ];
       *
       *     var cell = sheet.getRange("B2:D3");
       *     cell.setNotes(notes)
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setNotes(Object)
       * @param notes A two-dimensional array of notes; null values remove the note.
       */
      setNotes(notes: object[][]): Range;

      /**
       * Sets the number or date format to the given formatting string. The accepted format patterns are
       * described in the Sheets API documentation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     // Always show 3 decimal points
       *     cell.setNumberFormat("0.000");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setNumberFormat(String)
       * @param numberFormat A number format string.
       */
      setNumberFormat(numberFormat: string): Range;

      /**
       * Sets a rectangular grid of number or date formats (must match dimensions of this range). The
       * values are format pattern strings as described in the
       * Sheets API documentation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var formats = [
       *       [ "0.000", "0,000,000", "$0.00" ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setNumberFormats(formats);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setNumberFormats(Object)
       * @param numberFormats A two-dimensional array of number formats.
       */
      setNumberFormats(numberFormats: object[][]): Range;

      /**
       * Sets the Rich Text value for the cells in the range.
       *
       *
       *     // Sets all cells in range B2:D4 to have the text "Hello world", with "Hello" bolded.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B2:D4");
       *     var bold = SpreadsheetApp.newTextStyle()
       *         .setBold(true)
       *         .build();
       *     var richText = SpreadsheetApp.newRichTextValue()
       *         .setText("Hello world")
       *         .setTextStyle(0, 5, bold)
       *         .build();
       *     range.setRichTextValue(richText);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setRichTextValue(RichTextValue)
       * @param value The desired Rich Text value.
       */
      setRichTextValue(value: RichTextValue): Range;

      /**
       * Sets a rectangular grid of Rich Text values.
       *
       *
       *     // Sets the cells in range A1:A2 to have Rich Text values.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:A2");
       *     var bold = SpreadsheetApp.newTextStyle()
       *         .setBold(true)
       *         .build();
       *     var italic = SpreadsheetApp.newTextStyle()
       *         .setItalic(true)
       *         .build();
       *     var richTextA1 = SpreadsheetApp.newRichTextValue()
       *         .setText("This cell is bold")
       *         .setTextStyle(bold)
       *         .build();
       *     var richTextA2 = SpreadsheetApp.newRichTextValue()
       *         .setText("bold words, italic words")
       *         .setTextStyle(0, 11, bold)
       *         .setTextStyle(12, 24, italic)
       *         .build();
       *     range.setRichTextValues([[richTextA1], [richTextA2]]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setRichTextValues(RichTextValue)
       * @param values The desired Rich Text values.
       */
      setRichTextValues(values: RichTextValue[][]): Range;

      /**
       * Sets whether or not the range should show hyperlinks.
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setShowHyperlink(Boolean)
       * @param showHyperlink Whether or not to show the hyperlink.
       */
      setShowHyperlink(showHyperlink: boolean): Range;

      /**
       * Sets the text direction for the cells in the range. If a specified direction is null,
       * the direction is inferred and then set.
       *
       *
       *     // Sets right-to-left text direction for the range.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B5:C6");
       *     range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextDirection(TextDirection)
       * @param direction The desired text direction; if null the direction is inferred before setting.
       */
      setTextDirection(direction: TextDirection): Range;

      /**
       * Sets a rectangular grid of text directions. If a specified direction is null, the
       * direction is inferred and then set.
       *
       *
       *     // Copies all of the text directions from range A1:B2 over to range C5:D6.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range1 = sheet.getRange("A1:B2");
       *     var range2 = sheet.getRange("C5:D6");
       *
       *     range2.setTextRotations(range1.getTextDirections());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextDirections(TextDirection)
       * @param directions The desired text directions; if a specified direction is null it is inferred before setting.
       */
      setTextDirections(directions: TextDirection[][]): Range;

      /**
       * Sets the text rotation settings for the cells in the range. The input corresponds to the angle
       * between the standard text orientation and the desired orientation. An input of zero indicates
       * that the text is set to the standard orientation.
       *
       *
       * For left to right text direction, positive angles are in the counterclockwise direction,
       * whereas for right to left they are in the clockwise direction.
       *
       *
       *     // Sets all cell's in range B2:D4 to have text rotated up 45 degrees.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B2:D4");
       *
       *     range.setTextRotation(45);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextRotation(Integer)
       * @param degrees The desired angle between the standard orientation and the desired orientation. For left to right text, positive angles are in the counterclockwise direction.
       */
      setTextRotation(degrees: Integer): Range;

      /**
       * Sets the text rotation settings for the cells in the range.
       *
       *
       *     // Sets all cell's in range B2:D4 to have the same text rotation settings as cell A1.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *
       *     var rotation = sheet.getRange("A1").getTextRotation();
       *
       *     sheet.getRange("B2:D4").setTextRotation(rotation);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextRotation(TextRotation)
       * @param rotation The desired text rotation settings.
       */
      setTextRotation(rotation: TextRotation): Range;

      /**
       * Sets a rectangular grid of text rotations.
       *
       *
       *     // Copies all of the text rotations from range A1:B2 over to range C5:D6.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range1 = sheet.getRange("A1:B2");
       *     var range2 = sheet.getRange("C5:D6");
       *
       *     range2.setTextRotations(range1.getTextRotations());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextRotations(TextRotation)
       * @param rotations The desired text rotation settings.
       */
      setTextRotations(rotations: TextRotation[][]): Range;

      /**
       * Sets the text style for the cells in the range.
       *
       *
       *     // Sets the cells in range C5:D6 to have underlined size 15 font.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("C5:D6");
       *     var style = SpreadsheetApp.newTextStyle()
       *         .setFontSize(15)
       *         .setUnderline(true)
       *         .build();
       *     range.setTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextStyle(TextStyle)
       * @param style The desired text style.
       */
      setTextStyle(style: TextStyle): Range;

      /**
       * Sets a rectangular grid of text styles.
       *
       *
       *     // Sets text styles for cells in range A1:B2
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B2");
       *     var bold = SpreadsheetApp.newTextStyle()
       *         .setBold(true)
       *         .build();
       *     var otherStyle = SpreadsheetApp.newTextStyle()
       *         .setBold(true)
       *         .setUnderline(true)
       *         .setItalic(true)
       *         .setForegroundColor("#335522")
       *         .setFontSize(44)
       *         .build();
       *     range.setTextStyles([[bold, otherStyle], [otherStyle, bold]]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setTextStyles(TextStyle)
       * @param styles The desired text styles.
       */
      setTextStyles(styles: TextStyle[][]): Range;

      /**
       * Sets the value of the range. The value can be numeric, string, boolean or date. If it begins
       * with '=' it is interpreted as a formula.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setValue(100);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setValue(Object)
       * @param value The value for the range.
       */
      setValue(value: object): Range;

      /**
       * Sets a rectangular grid of values (must match dimensions of this range).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var values = [
       *       [ "2.000", "1,000,000", "$2.99" ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setValues(values);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setValues(Object)
       * @param values A two-dimensional array of values.
       */
      setValues(values: object[][]): Range;

      /**
       * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setVerticalAlignment("middle");
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setVerticalAlignment(String)
       * @param alignment The alignment, either 'top', 'middle' or 'bottom'; a null value resets the alignment.
       */
      setVerticalAlignment(alignment: string): Range;

      /**
       * Sets a rectangular grid of vertical alignments (must match dimensions of this range).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var alignments = [
       *       [ "top", "middle", "bottom" ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setVerticalAlignments(alignments);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setVerticalAlignments(Object)
       * @param alignments A two-dimensional array of alignments, either 'top', 'middle' or 'bottom'; a null value resets the alignment.
       */
      setVerticalAlignments(alignments: object[][]): Range;

      /**
       * Sets whether or not to stack the text for the cells in the range. If the text is stacked
       * vertically, the degree text rotation setting is ignored.
       *
       *
       *     // Sets all cell's in range B2:D4 to have vertically stacked text.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B2:D4");
       *
       *     range.setVerticalText(true);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setVerticalText(Boolean)
       * @param isVertical Whether or not to stack the text.
       */
      setVerticalText(isVertical: boolean): Range;

      /**
       * Set the cell wrap of the given range.
       *
       *
       * Cells with wrap enabled (the default) resize to display their full content. Cells with wrap
       * disabled display as much as possible in the cell without resizing or running to multiple lines.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var cell = sheet.getRange("B2");
       *     cell.setWrap(true);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setWrap(Boolean)
       * @param isWrapEnabled Whether to wrap text or not.
       */
      setWrap(isWrapEnabled: boolean): Range;

      /**
       * Sets a rectangular grid of wrap strategies.
       *
       *
       *     // Copies all of the wrap strategies from range A1:B2 over to range C5:D6.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range1 = sheet.getRange("A1:B2");
       *     var range2 = sheet.getRange("C5:D6");
       *
       *     range2.setWrapStrategies(range1.getWrapStrategies());
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setWrapStrategies(WrapStrategy)
       * @param strategies The desired wrapping strategies.
       */
      setWrapStrategies(strategies: WrapStrategy[][]): Range;

      /**
       * Sets the text wrapping strategy for the cells in the range.
       *
       *
       *     // Sets all cells in range B2:D4 to use the clip wrap strategy.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("B2:D4");
       *
       *     range.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setWrapStrategy(WrapStrategy)
       * @param strategy The desired wrapping strategy.
       */
      setWrapStrategy(strategy: WrapStrategy): Range;

      /**
       * Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with
       * wrap enabled (the default) resize to display their full content. Cells with wrap disabled
       * display as much as possible in the cell without resizing or running to multiple lines.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The size of the two-dimensional array must match the size of the range.
       *     var wraps = [
       *       [ true, true, false ]
       *     ];
       *
       *     var range = sheet.getRange("B2:D2");
       *     range.setWraps(wraps);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#setWraps(Object)
       * @param isWrapEnabled A two-dimensional array of wrap variables that determine whether to wrap text in a cell or not.
       */
      setWraps(isWrapEnabled: object[][]): Range;

      /**
       * Changes the column grouping depth of the range by the specified amount.
       *
       *
       * This has the effect of creating, modifying, or deleting groups that intersect with the
       * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
       * destroyed and/or modified.
       *
       *
       * This has no effect when decreasing the group depth below zero or above eight.
       *
       *
       * If the column group control position is
       * BEFORE, this throws an error when attempting to shift
       * the depth of the first row.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getActiveRange();
       *
       *     // The column grouping depth is increased by 1.
       *     range.shiftColumnGroupDepth(1);
       *
       *     // The column grouping depth is decreased by 1.
       *     range.shiftColumnGroupDepth(-1);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#shiftColumnGroupDepth(Integer)
       * @param delta The amount by which to change the column group depth of this range.
       */
      shiftColumnGroupDepth(delta: Integer): Range;

      /**
       * Changes the row grouping depth of the range by the specified amount.
       *
       *
       * This has the effect of creating, modifying, or deleting groups that intersect with the
       * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
       * destroyed and/or modified.
       *
       *
       * This has no effect when decreasing the group depth below zero or above eight.
       *
       *
       * If the row group control position is BEFORE, this throws an error when attempting to shift the
       * depth of the first row.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     var range = sheet.getActiveRange();
       *
       *     // The row grouping depth is increased by 1.
       *     range.shiftRowGroupDepth(1);
       *
       *     // The row grouping depth is decreased by 1.
       *     range.shiftRowGroupDepth(-1);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#shiftRowGroupDepth(Integer)
       * @param delta The amount by which to change the row group depth of this range.
       */
      shiftRowGroupDepth(delta: Integer): Range;

      /**
       * Sorts the cells in the given range, by column and order specified.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange("A1:C7");
       *
       *     // Sorts by the values in the first column (A)
       *     range.sort(1);
       *
       *     // Sorts by the values in the second column (B)
       *     range.sort(2);
       *
       *     // Sorts descending by column B
       *     range.sort({column: 2, ascending: false});
       *
       *     // Sorts descending by column B, then ascending by column A
       *     // Note the use of an array
       *     range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);
       *
       *     // For rows that are sorted in ascending order, the "ascending" parameter is
       *     // optional, and just an integer with the column can be used instead. Note that
       *     // in general, keeping the sort specification consistent results in more readable
       *     // code. You can express the earlier sort as:
       *     range.sort([{column: 2, ascending: false}, 1]);
       *
       *     // Alternatively, if you want all columns to be in ascending order, you can use
       *     // the following (this makes column 2 ascending)
       *     range.sort([2, 1]);
       *     // ... which is equivalent to
       *     range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
       * https://developers.google.com/apps-script/reference/spreadsheet/range#sort(Object)
       * @param sortSpecObj The columns to sort by.
       */
      sort(sortSpecObj: object): Range;

      /**
       * Splits a column of text into multiple columns based on an auto-detected delimiter.
       *
       *
       *     // A1:A3 has the following values:
       *     //           A                  B                 C
       *     // 1 |one,one,one      |                 |                 |
       *     // 2 |two,two,two      |                 |                 |
       *     // 3 |three,three,three|                 |                 |
       *
       *     var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
       *     range.splitTextToColumns();
       *
       *     // Result after spliting the text to columns:
       *     //           A                  B                 C
       *     // 1 |one              |one              |one              |
       *     // 2 |two              |two              |two              |
       *     // 3 |three            |three            |three            |
       * https://developers.google.com/apps-script/reference/spreadsheet/range#splitTextToColumns()
       */
      splitTextToColumns(): void;

      /**
       * Splits a column of text into multiple columns using the specified string as a custom delimiter.
       *
       *
       *     // A1:A3 has the following values:
       *     //           A                  B                 C
       *     // 1 |one#one#one      |                 |                 |
       *     // 2 |two#two#two      |                 |                 |
       *     // 3 |three#three#three|                 |                 |
       *
       *     var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
       *     range.splitTextToColumns('#');
       *
       *     // Result after spliting the text to columns:
       *     //           A                  B                 C
       *     // 1 |one              |one              |one              |
       *     // 2 |two              |two              |two              |
       *     // 3 |three            |three            |three            |
       * https://developers.google.com/apps-script/reference/spreadsheet/range#splitTextToColumns(String)
       * @param delimiter The custom delimiter to split on.
       */
      splitTextToColumns(delimiter: string): void;

      /**
       * Splits a column of text into multiple columns based on the specified delimiter.
       *
       *
       *     // A1:A3 has the following values:
       *     //           A                  B                 C
       *     // 1 |one;one;one      |                 |                 |
       *     // 2 |two;two;two      |                 |                 |
       *     // 3 |three;three;three|                 |                 |
       *
       *     var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
       *     range.splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON);
       *
       *     // Result after spliting the text to columns:
       *     //           A                  B                 C
       *     // 1 |one              |one              |one              |
       *     // 2 |two              |two              |two              |
       *     // 3 |three            |three            |three            |
       * https://developers.google.com/apps-script/reference/spreadsheet/range#splitTextToColumns(TextToColumnsDelimiter)
       * @param delimiter The preset delimiter to split on.
       */
      splitTextToColumns(delimiter: TextToColumnsDelimiter): void;

      /**
       * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range. Removes
       * all whitespace from the start and end of each cell's text, and reduces any subsequence of
       * remaining whitespace characters to a single space.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/spreadsheet/range#trimWhitespace()
       */
      trimWhitespace(): Range;

      /**
       * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
       * which currently do not contain either the checked or unchecked value configured.
       *
       *
       *     // Changes the state of cells which currently contain either the checked or unchecked value
       *     // configured in the range A1:B10 to 'unchecked'.
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *     range.uncheck();
       * https://developers.google.com/apps-script/reference/spreadsheet/range#uncheck()
       */
      uncheck(): Range;
    }
    /**
     * A collection of one or more Range instances in the same sheet. You can use this class
     * to apply operations on collections of non-adjacent ranges or cells.
     */
    interface RangeList {

      /**
       * Selects the list of Range instances. The last range in the list is set as the active range.
       *
       *
       *
       * Note: This provides a way to multi-select a number of ranges.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     rangeList.activate();
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B2
       *     var currentCell = selection.getCurrentCell();
       *     // Active range: B2:C4
       *     var activeRange = selection.getActiveRange();
       *     // Active range list: [D4, B2:C4]
       *     var activeRangeList = selection.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#activate()
       */
      activate(): RangeList;

      /**
       * Break all horizontally- or vertically-merged cells contained within the range list into
       * individual cells again.
       *
       *
       * Calling this function on a range list is equivalent to selecting a set of ranges and
       * selecting the Format > Merge > Unmerge Sheets menu item.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.breakApart();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#breakApart()
       */
      breakApart(): RangeList;

      /**
       * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
       * which currently do not contain either the checked or unchecked value configured.
       *
       *
       *     // Changes the state of cells which currently contain either the checked or unchecked value
       *     // configured in the ranges D4 and E6 to 'checked'.
       *     var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
       *     rangeList.check();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#check()
       */
      check(): RangeList;

      /**
       * Clears the range of contents, formats, and data validation rules for each Range in
       * the range list.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clear();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clear()
       */
      clear(): RangeList;

      /**
       * Clears the range of contents, format, data validation rules, and comments, as specified with
       * the given options. By default all data is cleared.
       *
       *
       *     // The code below clears the contents of the following ranges A:A and C:C in the active sheet,
       *     // but preserves the format, data validation rules, and comments.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clear({contentsOnly: true});
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clear(Object)
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      clear(options: object): RangeList;

      /**
       * Clears the content of each Range in the range list, leaving the formatting intact.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clearContent();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clearContent()
       */
      clearContent(): RangeList;

      /**
       * Clears the data validation rules for each Range in the range list.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clearDataValidations();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clearDataValidations()
       */
      clearDataValidations(): RangeList;

      /**
       * Clears text formatting for each Range in the range list.
       *
       *
       * This clears text formatting for each range, but does not reset any number formatting rules.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clearFormat();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clearFormat()
       */
      clearFormat(): RangeList;

      /**
       * Clears the note for each Range in the range list.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.clearNote();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#clearNote()
       */
      clearNote(): RangeList;

      /**
       * Returns a list of one or more Range instances in the same sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#getRanges()
       */
      getRanges(): Range[];

      /**
       * Inserts checkboxes into each cell in the range, configured with true for checked and
       * false for unchecked. Sets the value of all cells in the range to false.
       *
       *
       *     var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
       *
       *     // Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'true' for checked
       *     // and 'false' for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to
       *     // 'false'.
       *     rangeList.insertCheckboxes();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#insertCheckboxes()
       */
      insertCheckboxes(): RangeList;

      /**
       * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
       * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
       *
       *
       *     var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
       *
       *     // Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'yes' for checked
       *     // and the empty string for unchecked. Also, sets the value of each cell in the ranges D4 and
       *     // E6 to the empty string.
       *     rangeList.insertCheckboxes('yes');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#insertCheckboxes(Object)
       * @param checkedValue The checked value for the checkbox data validation.
       */
      insertCheckboxes(checkedValue: object): RangeList;

      /**
       * Inserts checkboxes into each cell in the range, configured with custom values for the checked
       * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
       *
       *
       *     var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
       *
       *     // Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'yes' for checked
       *     // and 'no' for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to 'no'.
       *     rangeList.insertCheckboxes('yes', 'no');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#insertCheckboxes(Object,Object)
       * @param checkedValue The checked value for the checkbox data validation.
       * @param uncheckedValue The unchecked value for the checkbox data validation.
       */
      insertCheckboxes(checkedValue: object, uncheckedValue: object): RangeList;

      /**
       * Removes all checkboxes from the range. Clears the data validation of each cell, and
       * additionally clears its value if the cell contains either the checked or unchecked value.
       *
       *
       *     var range = SpreadsheetApp.getActive().getRange('A1:B10');
       *
       *     // Inserts checkboxes and sets each cell value to 'no' in the range A1:B10.
       *     range.insertCheckboxes('yes', 'no');
       *
       *     var rangeList1 = SpreadsheetApp.getActive().getRangeList(['A1', 'A3']);
       *     rangeList1.setValue('yes');
       *     // Removes the checkbox data validation in cells A1 and A3 and clears their value.
       *     rangeList1.removeCheckboxes();
       *
       *     var rangeList2 = SpreadsheetApp.getActive().getRangeList(['A5', 'A7']);
       *     rangeList2.setValue('random');
       *     // Removes the checkbox data validation in cells A5 and A7 but does not clear their value.
       *     rangeList2.removeCheckboxes();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#removeCheckboxes()
       */
      removeCheckboxes(): RangeList;

      /**
       * Sets the background color for each Range in the range list. Color is represented in
       * in CSS notation; for example, '#ffffff' or 'white'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setBackground('red');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setBackground(String)
       * @param color The background color code in CSS notation such as '#ffffff' or 'white'; a null value resets the color.
       */
      setBackground(color: string): RangeList;

      /**
       * Sets the background to the given RGB color. This is a convenience wrapper around a setBackground(color) call.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     // Sets the background to red for each range in the range list.
       *     rangeList.setBackgroundRGB(255, 0, 0);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setBackgroundRGB(Integer,Integer,Integer)
       * @param red The red value in RGB notation.
       * @param green The green value in RGB notation.
       * @param blue The blue value in RGB notation.
       */
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): RangeList;

      /**
       * Sets the border property for each Range in the range list. The valid values are
       * true (on), false (off) and null (no change).
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
       *     // Sets borders on the top and bottom of the ranges A2:B4 and C1:D4, but leaves the left and
       *     // right unchanged.
       *     rangeList.setBorder(true, null, true, null, false, false);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setBorder(Boolean,Boolean,Boolean,Boolean,Boolean,Boolean)
       * @param top true for border, false for none, null for no change.
       * @param left true for border, false for none, null for no change.
       * @param bottom true for border, false for none, null for no change.
       * @param right true for border, false for none, null for no change.
       * @param vertical true for internal vertical borders, false for none, null for no change.
       * @param horizontal true for internal horizontal borders, false for none, null for no change.
       */
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): RangeList;

      /**
       * Sets the border property with color and/or style for each Range in the range list.
       * Valid values are true (on), false (off) and null (no change). Color is
       * represented in in CSS notation; for example, '#ffffff' or 'white'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
       *     // Sets borders on the top and bottom, but leaves the left and right unchanged of the ranges
       *     // A2:B4 and C1:D4. Also sets the color to 'red', and the border to 'DASHED'.
       *     rangeList.setBorder(
       *         true, null, true, null, false, false, 'red', SpreadsheetApp.BorderStyle.DASHED);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setBorder(Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,String,BorderStyle)
       * @param top true for border, false for none, null for no change.
       * @param left true for border, false for none, null for no change.
       * @param bottom true for border, false for none, null for no change.
       * @param right true for border, false for none, null for no change.
       * @param vertical true for internal vertical borders, false for none, null for no change.
       * @param horizontal true for internal horizontal borders, false for none, null for no change.
       * @param color The border color in CSS notation like '#ffffff' or 'white', null for default color (black).
       * @param style The style for the borders, null for default style (solid).
       */
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): RangeList;

      /**
       * Sets the font color for each Range in the range list. Color is represented in in CSS
       * notation; for example, '#ffffff' or 'white'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontColor('red');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontColor(String)
       * @param color The font color in CSS notation such as '#ffffff' or 'white'; a null value resets the color.
       */
      setFontColor(color: string): RangeList;

      /**
       * Sets the font family for each Range in the range list. The font family is described
       * by a string identifier such as Arial or Roboto.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontFamily('Roboto');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontFamily(String)
       * @param fontFamily The font family to set; a null value resets the font family.
       */
      setFontFamily(fontFamily: string): RangeList;

      /**
       * Sets the font line style for each Range in the range list. The line styles options
       * are 'underline', 'line-through', or 'none'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontLine('line-through');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontLine(String)
       * @param fontLine The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style.
       */
      setFontLine(fontLine: string): RangeList;

      /**
       * Sets the font size (in points) for each Range in the range list.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontSize(20);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontSize(Integer)
       * @param size A font point size.
       */
      setFontSize(size: Integer): RangeList;

      /**
       * Set the font style for each Range in the range list. The font style options are
       * 'italic' or 'normal'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontStyle("italic");
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontStyle(String)
       * @param fontStyle The font style, either 'italic' or 'normal'; a null value resets the font style.
       */
      setFontStyle(fontStyle: string): RangeList;

      /**
       * Set the font weight for each Range in the range list. The font weight options are
       * 'normal' or 'bold'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setFontWeight('bold');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFontWeight(String)
       * @param fontWeight The font weight, either 'bold' or 'normal'; a null value resets the font weight.
       */
      setFontWeight(fontWeight: string): RangeList;

      /**
       * Updates the formula for each Range in the range list. The given formula must be in
       * A1 notation.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A11', 'C11']);
       *     rangeList.setFormula('=SUM(B1:B10)');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFormula(String)
       * @param formula A string representing the formula to set.
       */
      setFormula(formula: string): RangeList;

      /**
       * Updates the formula for each Range in the range list. The given formula must be in
       * R1C1 notation.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A11', 'C11']);
       *     // This sets the formula to be the sum of the 3 rows above B5
       *     rangeList.setFormulaR1C1('=SUM(R[-3]C[0]:R[-1]C[0])');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setFormulaR1C1(String)
       * @param formula A string formula.
       */
      setFormulaR1C1(formula: string): RangeList;

      /**
       * Set the horizontal alignment for each Range in the range list. The alignment options
       * are 'left', 'center', or 'right'.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setHorizontalAlignment("center");
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setHorizontalAlignment(String)
       * @param alignment The alignment, either 'left', 'center' or 'normal'; a null value resets the alignment.
       */
      setHorizontalAlignment(alignment: string): RangeList;

      /**
       * Sets the note text for each Range in the range list.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setNote('This is a note');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setNote(String)
       * @param note The note text to set; a null value removes the note.
       */
      setNote(note: string): RangeList;

      /**
       * Sets the number or date format for each Range in the range list.
       *
       *
       * The accepted formatting patterns are described in the Sheets API date and number formatting guide.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
       *     // Always show 3 decimal points for the specified ranges.
       *     rangeList.setNumberFormat('0.000');
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setNumberFormat(String)
       * @param numberFormat A number format string.
       */
      setNumberFormat(numberFormat: string): RangeList;

      /**
       * Sets whether or not each Range in the range list should show hyperlinks.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
       *     // Show hyperlinks for all the ranges.
       *     rangeList.setShowHyperlink(true);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setShowHyperlink(Boolean)
       * @param showHyperlink Whether or not to show the hyperlink.
       */
      setShowHyperlink(showHyperlink: boolean): RangeList;

      /**
       * Sets the text direction for the cells in each Range in the range list. If a
       * specified direction is null, the direction is inferred and then set.
       *
       *
       *     // Sets right-to-left text direction each range in the range list.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
       *     rangeList.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setTextDirection(TextDirection)
       * @param direction The desired text direction; if null the direction is inferred before setting.
       */
      setTextDirection(direction: TextDirection): RangeList;

      /**
       * Sets the text rotation settings for the cells in each Range in the range list. The
       * input corresponds to the angle between the standard text orientation and the desired
       * orientation. An input of zero indicates that the text is set to the standard orientation.
       *
       *
       * For left to right text direction, positive angles are in the counterclockwise direction,
       * whereas for right to left they are in the clockwise direction.
       *
       *
       *     // Sets the cells in the ranges A1:A10 and C1:C10 to have text rotated up 45 degrees.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
       *     rangeList.setTextRotation(45);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setTextRotation(Integer)
       * @param degrees The desired angle between the standard orientation and the desired orientation. For left to right text, positive angles are in the counterclockwise direction.
       */
      setTextRotation(degrees: Integer): RangeList;

      /**
       * Sets the value for each Range in the range list. The value can be numeric, string,
       * boolean or date. If it begins with '=' it is interpreted as a formula.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Set value of 100 to each range in the range list.
       *     var rangeList = sheet.getRangeList(['A:A', 'C:C']);
       *     rangeList.setValue(100);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setValue(Object)
       * @param value The value for the range.
       */
      setValue(value: object): RangeList;

      /**
       * Set the vertical alignment for each Range in the range list. The alignment options
       * are 'top', 'middle' or 'bottom'.
       *
       *
       *     // Sets the vertical alignment to middle for the list of ranges.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     rangeList.setVerticalAlignment("middle");
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setVerticalAlignment(String)
       * @param alignment The alignment, either 'top', 'middle' or 'bottom'; a null value resets the alignment.
       */
      setVerticalAlignment(alignment: string): RangeList;

      /**
       * Sets whether or not to stack the text for the cells for each Range in the range
       * list. If the text is stacked vertically, the degree text rotation setting is ignored.
       *
       *
       *     // Sets all cell's in ranges D4 and B2:D4 to have vertically stacked text.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     rangeList.setVerticalText(true);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setVerticalText(Boolean)
       * @param isVertical Whether or not to stack the text.
       */
      setVerticalText(isVertical: boolean): RangeList;

      /**
       * Set text wrapping for each Range in the range list. Cells with wrap enabled resize
       * to display their full content. Cells with wrap disabled display as much as possible in the cell
       * without resizing or running to multiple lines.
       *
       *
       *     // Enable text wrap for the list of ranges.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     rangeList.setWrap(true);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setWrap(Boolean)
       * @param isWrapEnabled Whether to wrap text or not.
       */
      setWrap(isWrapEnabled: boolean): RangeList;

      /**
       * Sets the text wrapping strategy for each Range in the range list.
       *
       *
       *     // Sets the list of ranges to use the clip wrap strategy.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     rangeList.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#setWrapStrategy(WrapStrategy)
       * @param strategy The desired wrapping strategy.
       */
      setWrapStrategy(strategy: WrapStrategy): RangeList;

      /**
       * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range list.
       * Removes all whitespace from the start and end of each cell's text, and reduces any subsequence
       * of remaining whitespace characters to a single space.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#trimWhitespace()
       */
      trimWhitespace(): RangeList;

      /**
       * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
       * which currently do not contain either the checked or unchecked value configured.
       *
       *
       *     // Changes the state of cells which currently contain either the checked or unchecked value
       *     // configured in the ranges D4 and E6 to 'unchecked'.
       *     var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
       *     rangeList.uncheck();
       * https://developers.google.com/apps-script/reference/spreadsheet/range-list#uncheck()
       */
      uncheck(): RangeList;
    }
    /**
     * An enumeration representing the possible intervals used in spreadsheet recalculation.
     */
    enum RecalculationInterval { ON_CHANGE, MINUTE, HOUR }
    /**
     * An enumeration representing the relative date options for calculating a value to be used in
     * date-based BooleanCriteria.
     */
    enum RelativeDate { TODAY, TOMORROW, YESTERDAY, PAST_WEEK, PAST_MONTH, PAST_YEAR }
    /**
     * A stylized text string used to represent cell text. Substrings of the text can have different
     * text styles.
     *
     * A run is the longest unbroken substring having the same text style. For example, the
     * sentence "This kid has two apples." has four runs: ["This ", "kid ", "has two ",
     * "apples."].
     */
    interface RichTextValue {

      /**
       * Returns a builder for a Rich Text value initialized with the values of this Rich Text value.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#copy()
       */
      copy(): RichTextValueBuilder;

      /**
       * Gets the end index of this value in the cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getEndIndex()
       */
      getEndIndex(): Integer;

      /**
       * Returns the Rich Text string split into an array of runs, wherein each run is the longest
       * possible substring having a consistent text style.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getRuns()
       */
      getRuns(): RichTextValue[];

      /**
       * Gets the start index of this value in the cell.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getStartIndex()
       */
      getStartIndex(): Integer;

      /**
       * Returns the text of this value.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getText()
       */
      getText(): string;

      /**
       * Returns the text style of this value.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getTextStyle()
       */
      getTextStyle(): TextStyle;

      /**
       * Returns the text style of the text from startOffset to endOffset. Offsets are 0
       * based and relative to the cell's text, with the start offset being inclusive and the end offset
       * being exclusive.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value#getTextStyle(Integer,Integer)
       * @param startOffset The start offset.
       * @param endOffset The end offset.
       */
      getTextStyle(startOffset: Integer, endOffset: Integer): TextStyle;
    }
    /**
     * A builder for Rich Text values.
     */
    interface RichTextValueBuilder {

      /**
       * Creates a Rich Text value from this builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder#build()
       */
      build(): RichTextValue;

      /**
       * Sets the text for this value and clears any existing text style. When creating a new Rich Text
       * value, this should be called before setTextStyle(startOffset, endOffset, textStyle).
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder#setText(String)
       * @param text The text for this value.
       */
      setText(text: string): RichTextValueBuilder;

      /**
       * Applies a text style to the given substring of this value. Offsets are 0 based and are relative
       * to the cell's text value. Does nothing if textStyle is null.
       *
       *
       *     // Creates a Rich Text value for the text "HelloWorld", with "Hello" bolded, and "World"
       *     // italicized.
       *     var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
       *     var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
       *     var value = SpreadsheetApp.newRichTextValue()
       *         .setText("HelloWorld")
       *         .setTextStyle(0, 5, bold)
       *         .setTextStyle(5, 10, italic)
       *         .build();
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder#setTextStyle(Integer,Integer,TextStyle)
       * @param startOffset The start offset for the substring, inclusive.
       * @param endOffset The end offset for the substring, exclusive.
       * @param textStyle The text style being set.
       */
      setTextStyle(startOffset: Integer, endOffset: Integer, textStyle: TextStyle): RichTextValueBuilder;

      /**
       * Applies a text style to the entire value. Previously set text styles are only affected if they
       * are directly overwritten by values within textStyle. Does nothing if textStyle
       * is null.
       *
       *
       *     // Creates a Rich Text value for the text "HelloWorld" with "Hello" bolded and italicized,
       *     // and "World" only italicized.
       *     var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
       *     var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
       *     var value = SpreadsheetApp.newRichTextValue()
       *         .setText("HelloWorld")
       *         .setTextStyle(0, 5, bold)
       *         .setTextStyle(italic)
       *         .build();
       * https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder#setTextStyle(TextStyle)
       * @param textStyle The text style being set.
       */
      setTextStyle(textStyle: TextStyle): RichTextValueBuilder;
    }
    /**
     * Access the current active selection in the active sheet. A selection is the set of cells the user
     * has highlighted in the sheet, which can be non-adjacent ranges. One cell in the selection is the
     * current cell, where the user's current focus is. The current cell is highlighted with a
     * darker border in the Google Sheets UI.
     *
     *     var activeSheet = SpreadsheetApp.getActiveSheet();
     *     var rangeList = activeSheet.getRangeList(['A1:B4', 'D1:E4']);
     *     rangeList.activate();
     *
     *     var selection = activeSheet.getSelection();
     *     // Current Cell: D1
     *     Logger.log('Current Cell: ' + selection.getCurrentCell().getA1Notation());
     *     // Active Range: D1:E4
     *     Logger.log('Active Range: ' + selection.getActiveRange().getA1Notation());
     *     // Active Ranges: A1:B4, D1:E4
     *     var ranges =  selection.getActiveRangeList().getRanges();
     *     for (var i = 0; i < ranges.length; i++) {
     *       Logger.log('Active Ranges: ' + ranges[i].getA1Notation());
     *     }
     *     Logger.log('Active Sheet: ' + selection.getActiveSheet().getName());
     */
    interface Selection {

      /**
       * Returns the selected range in the active sheet, or null if there is no active range. If
       * multiple ranges are selected this method returns only the last selected range.
       *
       *
       *     var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
       *     var activeRange = selection.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/selection#getActiveRange()
       */
      getActiveRange(): Range;

      /**
       * Returns the list of active ranges in the active sheet or null if there are no active
       * ranges.
       *
       *
       * If there is a single range selected, this behaves as a getActiveRange() call.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Returns the list of active ranges.
       *     var activeRangeList = sheet.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/selection#getActiveRangeList()
       */
      getActiveRangeList(): RangeList;

      /**
       * Returns the active sheet in the spreadsheet.
       *
       *
       *     var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
       *     var activeSheet = selection.getActiveSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/selection#getActiveSheet()
       */
      getActiveSheet(): Sheet;

      /**
       * Returns the current (highlighted) cell that is selected in one of the active ranges or null if there is no current cell.
       *
       *
       *     var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
       *     // Returns the current highlighted cell in the one of the active ranges.
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/selection#getCurrentCell()
       */
      getCurrentCell(): Range;

      /**
       * Starting from the current cell and active range
       * and moving in the given direction, returns an adjusted range where the appropriate edge of the
       * range has been shifted to cover the next data cell while still
       * covering the current cell. If the active range is unbounded along the dimension of the direction, the original active range is returned. If there is no current cell
       * or active range, null is returned. This is equivalent to selecting a range in the
       * editor and hitting Ctrl+Shift+[arrow key].
       *
       *
       *     // Assume the active spreadsheet is blank.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Makes C3 the current cell and C3:E5 the active range.
       *     sheet.getRange("C3:E5").activate();
       *     // Logs "C1:E3"
       *     Logger.log(SpreadsheetApp.getSelection().getNextDataRange(Direction.UP).getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/selection#getNextDataRange(Direction)
       * @param direction The direction in which to find the next data region edge cell.
       */
      getNextDataRange(direction: Direction): Range;
    }
    /**
     * Access and modify spreadsheet sheets. Common operations are renaming a sheet and accessing range
     * objects from the sheet.
     */
    interface Sheet {

      /**
       * Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active
       * sheet.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.activate();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#activate()
       */
      activate(): Sheet;

      /**
       * Adds developer metadata with the specified key to the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#addDeveloperMetadata(String)
       * @param key The key for the new developer metadata.
       */
      addDeveloperMetadata(key: string): Sheet;

      /**
       * Adds developer metadata with the specified key and visibility to the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#addDeveloperMetadata(String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Sheet;

      /**
       * Adds developer metadata with the specified key and value to the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#addDeveloperMetadata(String,String)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string): Sheet;

      /**
       * Adds developer metadata with the specified key, value, and visibility to the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#addDeveloperMetadata(String,String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Sheet;

      /**
       * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
       * asks for the last row, and then writes to that row, and an intervening mutation occurs between
       * getting the last row and writing to it.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Appends a new row with 3 columns to the bottom of the
       *     // spreadsheet containing the values in the array
       *     sheet.appendRow(["a man", "a plan", "panama"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object)
       * @param rowContents An array of values to insert after the last row in the sheet.
       */
      appendRow(rowContents: object[]): Sheet;

      /**
       * Sets the width of the given column to fit its contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');
       *
       *     // Sets the first column to a width which fits the text
       *     sheet.autoResizeColumn(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoResizeColumn(Integer)
       * @param columnPosition The position of the given column to resize.
       */
      autoResizeColumn(columnPosition: Integer): Sheet;

      /**
       * Sets the width of all columns starting at the given column position to fit their contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first 15 columns to a width that fits their text.
       *     sheet.autoResizeColumns(1, 15);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoResizeColumns(Integer,Integer)
       * @param startColumn The starting column to auto-resize.
       * @param numColumns The number of columns to auto-resize.
       */
      autoResizeColumns(startColumn: Integer, numColumns: Integer): Sheet;

      /**
       * Sets the height of all rows starting at the given row position to fit their contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first 15 rows to a height that fits their text.
       *     sheet.autoResizeRows(1, 15);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoResizeRows(Integer,Integer)
       * @param startRow The starting row to auto-resize.
       * @param numRows The number of rows to auto-resize.
       */
      autoResizeRows(startRow: Integer, numRows: Integer): Sheet;

      /**
       * Clears the sheet of content and formatting information.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.clear();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clear()
       */
      clear(): Sheet;

      /**
       * Clears the sheet of contents and/or format, as specified with the given advanced options.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     sheet.clear({ formatOnly: true, contentsOnly: true });
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clear(Object)
       * @param options A JavaScript map containing advanced options, listed below.
       */
      clear(options: object): Sheet;

      /**
       * Removes all conditional format rules from the sheet. Equivalent to calling setConditionalFormatRules(rules) with an empty array as input.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     sheet.clearConditionalFormatRules();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clearConditionalFormatRules()
       */
      clearConditionalFormatRules(): void;

      /**
       * Clears the sheet of contents, while preserving formatting information.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.clearContents();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clearContents()
       */
      clearContents(): Sheet;

      /**
       * Clears the sheet of formatting, while preserving contents.
       *
       *
       * Formatting refers to how data is formatted as allowed by choices under the "Format" menu
       * (ex: bold, italics, conditional formatting) and not width or height of cells.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.clearFormats();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clearFormats()
       */
      clearFormats(): Sheet;

      /**
       * Clears the sheet of all notes.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.clearNotes();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#clearNotes()
       */
      clearNotes(): Sheet;

      /**
       * Collapses all column groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All column groups on the sheet are collapsed.
       *     sheet.collapseAllColumnGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#collapseAllColumnGroups()
       */
      collapseAllColumnGroups(): Sheet;

      /**
       * Collapses all row groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All row groups on the sheet are collapsed.
       *     sheet.collapseAllRowGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#collapseAllRowGroups()
       */
      collapseAllRowGroups(): Sheet;

      /**
       * Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The
       * copied sheet is named "Copy of [original name]".
       *
       *
       *     var source = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = source.getSheets()[0];
       *
       *     var destination = SpreadsheetApp.openById('ID_GOES HERE');
       *     sheet.copyTo(destination);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#copyTo(Spreadsheet)
       * @param spreadsheet The spreadsheet to copy this sheet to, which can be the same spreadsheet as the source.
       */
      copyTo(spreadsheet: Spreadsheet): Sheet;

      /**
       * Returns a DeveloperMetadataFinder for finding developer metadata within the scope of
       * this sheet. Metadata is in the scope of a particular sheet if it is either associated with the
       * sheet itself, or associated with a row, column, or range on that sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#createDeveloperMetadataFinder()
       */
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;

      /**
       * Creates a text finder for the sheet, which can find and replace text within the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // Creates  a text finder.
       *     var textFinder = sheet.createTextFinder('dog');
       *
       *     // Returns the first occurrence of 'dog' in the sheet.
       *     var firstOccurrence = textFinder.findNext();
       *
       *     // Replaces the last found occurrence of 'dog' with 'cat' and returns the number
       *     // of occurrences replaced.
       *     var numOccurrencesReplaced = findOccurrence.replaceWith('cat');
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#createTextFinder(String)
       * @param findText The text to search for.
       */
      createTextFinder(findText: string): TextFinder;

      /**
       * Deletes the column at the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Columns start at "1" - this deletes the first column
       *     sheet.deleteColumn(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteColumn(Integer)
       * @param columnPosition The position of the column, starting at 1 for the first column.
       */
      deleteColumn(columnPosition: Integer): Sheet;

      /**
       * Deletes a number of columns starting at the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Columns start at "1" - this deletes the first two columns
       *     sheet.deleteColumns(1, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteColumns(Integer,Integer)
       * @param columnPosition The position of the first column to delete.
       * @param howMany The number of columns to delete.
       */
      deleteColumns(columnPosition: Integer, howMany: Integer): void;

      /**
       * Deletes the row at the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Rows start at "1" - this deletes the first row
       *     sheet.deleteRow(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteRow(Integer)
       * @param rowPosition The position of the row, starting at 1 for the first row.
       */
      deleteRow(rowPosition: Integer): Sheet;

      /**
       * Deletes a number of rows starting at the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Rows start at "1" - this deletes the first two rows
       *     sheet.deleteRows(1, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteRows(Integer,Integer)
       * @param rowPosition The position of the first row to delete.
       * @param howMany The number of rows to delete.
       */
      deleteRows(rowPosition: Integer, howMany: Integer): void;

      /**
       * Expands all column groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All column groups on the sheet are expanded.
       *     sheet.expandAllColumnGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#expandAllColumnGroups()
       */
      expandAllColumnGroups(): Sheet;

      /**
       * Expands all row groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All row groups on the sheet are expanded.
       *     sheet.expandAllRowGroups();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#expandAllRowGroups()
       */
      expandAllRowGroups(): Sheet;

      /**
       * Expands all column groups up to the given depth, and collapses all others.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All column groups of depth 2 and lower are expanded, and groups with depth
       *     // 3 and higher are collapsed.
       *     sheet.expandColumnGroupsUpToDepth(2);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#expandColumnGroupsUpToDepth(Integer)
       * @param groupDepth The group depth up to which to expand the column groups.
       */
      expandColumnGroupsUpToDepth(groupDepth: Integer): Sheet;

      /**
       * Expands all row groups up to the given depth, and collapses all others.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // All row groups of depth 2 and lower are expanded, and groups with depth
       *     // 3 and higher are collapsed.
       *     sheet.expandRowGroupsUpToDepth(2);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#expandRowGroupsUpToDepth(Integer)
       * @param groupDepth The group depth up to which to expand the row groups.
       */
      expandRowGroupsUpToDepth(groupDepth: Integer): Sheet;

      /**
       * Returns the active cell in this sheet.
       *
       *
       *
       * Note: It's preferrable to use getCurrentCell(), which the returns the current
       * highlighted cell.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Returns the active cell
       *     var cell = sheet.getActiveCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveCell()
       */
      getActiveCell(): Range;

      /**
       * Returns the selected range in the active sheet, or null if there is no active range. If
       * multiple ranges are selected this method returns only the last selected range.
       *
       *
       * The term "active range" refers to the range that a user has selected in the active sheet,
       * but in a custom function it refers to the cell being actively recalculated.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var activeRange = sheet.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveRange()
       */
      getActiveRange(): Range;

      /**
       * Returns the list of active ranges in the active sheet or null if there are no active
       * ranges.
       *
       *
       * If there is a single range selected, this behaves as a getActiveRange() call.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Returns the list of active ranges.
       *     var activeRangeList = sheet.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveRangeList()
       */
      getActiveRangeList(): RangeList;

      /**
       * Returns all the bandings in this sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getBandings()
       */
      getBandings(): Banding[];

      /**
       * Returns an array of charts on this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var charts = sheet.getCharts();
       *
       *     for (var i in charts) {
       *       var chart = charts[i];
       *       // Do something with the chart
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getCharts()
       */
      getCharts(): EmbeddedChart[];

      /**
       * Returns the column group at the given index and group depth.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // Returns the group whose control index is at column 2 and has a depth of 1, or
       *     // null if the group doesn’t exist.
       *     var columnGroup = sheet.getColumnGroup(2, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getColumnGroup(Integer,Integer)
       * @param columnIndex The column index of the group control toggle or an index within the group.
       * @param groupDepth The depth of the group.
       */
      getColumnGroup(columnIndex: Integer, groupDepth: Integer): Group;

      /**
       * Returns the GroupControlTogglePosition for all column groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // GroupControlTogglePosition.AFTER if the column grouping control toggle is shown after the
       *     // group.
       *     var columnGroupControlPosition = sheet.getColumnGroupControlPosition();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getColumnGroupControlPosition()
       */
      getColumnGroupControlPosition(): GroupControlTogglePosition;

      /**
       * Returns the group depth of the column at the given index.
       *
       *
       * The group depth indicates how many groups overlap with the column. This can range between
       * zero and eight.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // 1 if there is a group over columns 1 through 3
       *     var groupDepth = sheet.getColumnGroupDepth(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getColumnGroupDepth(Integer)
       * @param columnIndex The index of the column.
       */
      getColumnGroupDepth(columnIndex: Integer): Integer;

      /**
       * Gets the width in pixels of the given column.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.getColumnWidth(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getColumnWidth(Integer)
       * @param columnPosition The position of the column to examine.
       */
      getColumnWidth(columnPosition: Integer): Integer;

      /**
       * Get all conditional format rules in this sheet.
       *
       *
       *     // Logs the conditional format rules in a sheet.
       *     var rules = SpreadsheetApp.getActiveSheet().getConditionalFormatRules();
       *     for (var i = 0; i < rules.length; i++) {
       *       var rule = rules[i];
       *       Logger.log(rule);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getConditionalFormatRules()
       */
      getConditionalFormatRules(): ConditionalFormatRule[];

      /**
       * Returns the current cell in the active sheet or null if there is no current cell. The
       * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
       * border. There is never more than one current cell. When a user selects one or more cell ranges,
       * one of the cells in the selection is the current cell.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     // Returns the current highlighted cell in the one of the active ranges.
       *     var currentCell = sheet.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getCurrentCell()
       */
      getCurrentCell(): Range;

      /**
       * Returns a Range corresponding to the dimensions in which data is present.
       *
       *
       * This is functionally equivalent to creating a Range bounded by A1 and
       * (Range.getLastColumn(), Range.getLastRow()).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This represents ALL the data
       *     var range = sheet.getDataRange();
       *     var values = range.getValues();
       *
       *     // This logs the spreadsheet in CSV format with a trailing comma
       *     for (var i = 0; i < values.length; i++) {
       *       var row = "";
       *       for (var j = 0; j < values[i].length; j++) {
       *         if (values[i][j]) {
       *           row = row + values[i][j];
       *         }
       *         row = row + ",";
       *       }
       *       Logger.log(row);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataRange()
       */
      getDataRange(): Range;

      /**
       * Gets all the data source tables.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataSourceTables()
       */
      getDataSourceTables(): DataSourceTable[];

      /**
       * Get all developer metadata associated with this sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDeveloperMetadata()
       */
      getDeveloperMetadata(): DeveloperMetadata[];

      /**
       * Returns the filter in this sheet, or null if there is no filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getFilter()
       */
      getFilter(): Filter;

      /**
       * Returns the URL for the form that sends its responses to this sheet, or null if this
       * sheet has no associated form.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var url = sheet.getFormUrl();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getFormUrl()
       */
      getFormUrl(): string;

      /**
       * Returns the number of frozen columns.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getFrozenColumns()
       */
      getFrozenColumns(): Integer;

      /**
       * Returns the number of frozen rows.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getFrozenRows()
       */
      getFrozenRows(): Integer;

      /**
       * Returns all over-the-grid images on the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getImages()
       */
      getImages(): OverGridImage[];

      /**
       * Gets the position of the sheet in its parent spreadsheet. Starts at 1.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     // Note that the JavaScript index is 0, but this logs 1
       *     var sheet = ss.getSheets()[0];
       *     // ... because spreadsheets are 1-indexed
       *     Logger.log(sheet.getIndex());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the position of the last column that has content.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This logs the value in the very last cell of this sheet
       *     var lastRow = sheet.getLastRow();
       *     var lastColumn = sheet.getLastColumn();
       *     var lastCell = sheet.getRange(lastRow, lastColumn);
       *     Logger.log(lastCell.getValue());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getLastColumn()
       */
      getLastColumn(): Integer;

      /**
       * Returns the position of the last row that has content.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This logs the value in the very last cell of this sheet
       *     var lastRow = sheet.getLastRow();
       *     var lastColumn = sheet.getLastColumn();
       *     var lastCell = sheet.getRange(lastRow, lastColumn);
       *     Logger.log(lastCell.getValue());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getLastRow()
       */
      getLastRow(): Integer;

      /**
       * Returns the current number of columns in the sheet, regardless of content.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     Logger.log(first.getMaxColumns());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getMaxColumns()
       */
      getMaxColumns(): Integer;

      /**
       * Returns the current number of rows in the sheet, regardless of content.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     Logger.log(first.getMaxRows());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * Returns the name of the sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     Logger.log(sheet.getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getName()
       */
      getName(): string;

      /**
       * Gets all the named ranges in this sheet.
       *
       *
       *     // The code below logs the name of the first named range.
       *     var namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
       *     if (namedRanges.length > 1) {
       *       Logger.log(namedRanges[0].getName());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getNamedRanges()
       */
      getNamedRanges(): NamedRange[];

      /**
       * Returns the Spreadsheet that contains this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // parent is identical to ss
       *     var parent = sheet.getParent();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getParent()
       */
      getParent(): Spreadsheet;

      /**
       * Returns all the pivot tables on this sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getPivotTables()
       */
      getPivotTables(): PivotTable[];

      /**
       * Gets an array of objects representing all protected ranges in the sheet, or a single-element
       * array representing the protection on the sheet itself.
       *
       *
       *     // Remove all range protections in the spreadsheet that the user has permission to edit.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
       *     for (var i = 0; i < protections.length; i++) {
       *       var protection = protections[i];
       *       if (protection.canEdit()) {
       *         protection.remove();
       *       }
       *     }
       *     // Remove sheet protection from the active sheet, if the user has permission to edit it.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
       *     if (protection && protection.canEdit()) {
       *       protection.remove();
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getProtections(ProtectionType)
       * @param type The type of protected area, either SpreadsheetApp.ProtectionType.RANGE or SpreadsheetApp.ProtectionType.SHEET.
       */
      getProtections(type: ProtectionType): Protection[];

      /**
       * Returns the range with the top left cell at the given coordinates.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Passing only two arguments returns a "range" with a single cell.
       *     var range = sheet.getRange(1, 1);
       *     var values = range.getValues();
       *     Logger.log(values[0][0]);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer)
       * @param row The row index of the cell to return; row indexing starts with 1.
       * @param column The column index of the cell to return; column indexing starts with 1.
       */
      getRange(row: Integer, column: Integer): Range;

      /**
       * Returns the range with the top left cell at the given coordinates, and with the given number of
       * rows.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // When the "numRows" argument is used, only a single column of data is returned.
       *     var range = sheet.getRange(1, 1, 3);
       *     var values = range.getValues();
       *
       *     // Prints 3 values from the first column, starting from row 1.
       *     for (var row in values) {
       *       for (var col in values[row]) {
       *         Logger.log(values[row][col]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer,Integer)
       * @param row The starting row index of the range; row indexing starts with 1.
       * @param column The column index of the range; column indexing starts with 1.
       * @param numRows The number of rows to return.
       */
      getRange(row: Integer, column: Integer, numRows: Integer): Range;

      /**
       * Returns the range with the top left cell at the given coordinates with the given number of rows
       * and columns.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     var range = sheet.getRange(1, 1, 3, 3);
       *     var values = range.getValues();
       *
       *     // Print values from a 3x3 box.
       *     for (var row in values) {
       *       for (var col in values[row]) {
       *         Logger.log(values[row][col]);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer,Integer,Integer)
       * @param row The starting row index of the range; row indexing starts with 1.
       * @param column The starting column index of the range; column indexing starts with 1.
       * @param numRows The number of rows to return.
       * @param numColumns The number of columns to return.
       */
      getRange(row: Integer, column: Integer, numRows: Integer, numColumns: Integer): Range;

      /**
       * Returns the range as specified in A1 notation or R1C1 notation.
       *
       *
       *     // Get a range A1:D4 on sheet titled "Invoices"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var range = ss.getRange("Invoices!A1:D4");
       *
       *     // Get cell A1 on the first sheet
       *     var sheet = ss.getSheets()[0];
       *     var cell = sheet.getRange("A1");
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(String)
       * @param a1Notation The range to return, as specified in A1 notation or R1C1 notation.
       */
      getRange(a1Notation: string): Range;

      /**
       * Returns the RangeList collection representing the ranges in the same sheet specified
       * by a non-empty list of A1 notations or R1C1 notations.
       *
       *
       *     // Get a list of ranges A1:D4, F1:H4.
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRangeList(String)
       * @param a1Notations The list of ranges to return, as specified in A1 notation or R1C1 notation.
       */
      getRangeList(a1Notations: string[]): RangeList;

      /**
       * Returns the row group at the given index and group depth.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // Returns the group whose control index is at row 2 and has a depth of 1, or
       *     // null if the group doesn’t exist.
       *     var rowGroup = sheet.getRowGroup(2, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRowGroup(Integer,Integer)
       * @param rowIndex The row index of the group control toggle or an index within the group.
       * @param groupDepth The depth of the group.
       */
      getRowGroup(rowIndex: Integer, groupDepth: Integer): Group;

      /**
       * Returns the GroupControlTogglePosition for all row groups on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // GroupControlTogglePosition.AFTER if the row grouping control toggle is shown after the
       *     // group.
       *     var rowGroupControlPosition = sheet.getRowGroupControlPosition();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRowGroupControlPosition()
       */
      getRowGroupControlPosition(): GroupControlTogglePosition;

      /**
       * Returns the group depth of the row at the given index.
       *
       *
       * The group depth indicates how many groups overlap with the row. This can range between zero
       * and eight.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *
       *     // 1 if there is a group over rows 1 through 3
       *     var groupDepth = sheet.getRowGroupDepth(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRowGroupDepth(Integer)
       * @param rowIndex The index of the row.
       */
      getRowGroupDepth(rowIndex: Integer): Integer;

      /**
       * Gets the height in pixels of the given row.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Rows start at 1
       *     Logger.log(sheet.getRowHeight(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRowHeight(Integer)
       * @param rowPosition The position of the row to examine.
       */
      getRowHeight(rowPosition: Integer): Integer;

      /**
       * Returns the current Selection in the spreadsheet.
       *
       *
       *     var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSelection()
       */
      getSelection(): Selection;

      /**
       * Returns the ID of the sheet represented by this object.
       *
       *
       * This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
       * increasing integer assigned at sheet creation time that is independent of sheet position. This
       * is useful in conjunction with methods such as Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd) that take a gridId parameter rather than a Sheet instance.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log(sheet.getSheetId());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetId()
       */
      getSheetId(): Integer;

      /**
       * Returns the sheet name.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log(sheet.getSheetName());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetName()
       */
      getSheetName(): string;

      /**
       * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
       * value given as the row or column position is equivalent to getting the very last row or column
       * that has data in the sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The two samples below produce the same output
       *     var values = sheet.getSheetValues(1, 1, 3, 3);
       *     Logger.log(values);
       *
       *     var range = sheet.getRange(1, 1, 3, 3);
       *     values = range.getValues();
       *     Logger.log(values);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetValues(Integer,Integer,Integer,Integer)
       * @param startRow The position of the starting row.
       * @param startColumn The position of the starting column.
       * @param numRows The number of rows to return values for.
       * @param numColumns The number of columns to return values for.
       */
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): object[][];

      /**
       * Returns an array of slicers on the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSlicers()
       */
      getSlicers(): Slicer[];

      /**
       * Gets the sheet tab color, or null if the sheet tab has no color.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     var color = first.getTabColor();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getTabColor()
       */
      getTabColor(): string;

      /**
       * Returns the type of the sheet.
       *
       *
       * The default type of sheet is SheetType.GRID. A sheet that contains a single embedded
       * object such as an EmbeddedChart is an SheetType.OBJECT sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     Logger.log(sheet.getType());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#getType()
       */
      getType(): SheetType;

      /**
       * Returns true if the sheet's gridlines are hidden; otherwise returns false.
       * Gridlines are visible by default.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hasHiddenGridlines()
       */
      hasHiddenGridlines(): boolean;

      /**
       * Hides the columns in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This hides the first column
       *     var range = sheet.getRange("A1");
       *     sheet.hideColumn(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideColumn(Range)
       * @param column The column range to hide.
       */
      hideColumn(column: Range): void;

      /**
       * Hides the column at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Hides the first column
       *     sheet.hideColumns(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideColumns(Integer)
       * @param columnIndex the index of the column to hide
       */
      hideColumns(columnIndex: Integer): void;

      /**
       * Hides one or more consecutive columns starting at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Hides the first three columns
       *     sheet.hideColumns(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideColumns(Integer,Integer)
       * @param columnIndex The starting index of the columns to hide.
       * @param numColumns The number of columns to hide.
       */
      hideColumns(columnIndex: Integer, numColumns: Integer): void;

      /**
       * Hides the rows in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This hides the first row
       *     var range = sheet.getRange("A1");
       *     sheet.hideRow(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideRow(Range)
       * @param row The row range to hide.
       */
      hideRow(row: Range): void;

      /**
       * Hides the row at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Hides the first row
       *     sheet.hideRows(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideRows(Integer)
       * @param rowIndex The index of the row to hide.
       */
      hideRows(rowIndex: Integer): void;

      /**
       * Hides one or more consecutive rows starting at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Hides the first three rows
       *     sheet.hideRows(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideRows(Integer,Integer)
       * @param rowIndex The starting index of the rows to hide.
       * @param numRows The number of rows to hide.
       */
      hideRows(rowIndex: Integer, numRows: Integer): void;

      /**
       * Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the
       * only visible sheet, it throws an exception.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     sheet.hideSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#hideSheet()
       */
      hideSheet(): Sheet;

      /**
       * Adds a new chart to this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This creates a simple bar chart from the first three rows
       *     // of the first two columns of the spreadsheet
       *     var chart = sheet.newChart()
       *         .setChartType(Charts.ChartType.BAR)
       *         .addRange(sheet.getRange("A1:B4"))
       *         .setPosition(5, 5, 0, 0)
       *         .setOption("title", "Dynamic Chart")
       *         .build();
       *     sheet.insertChart(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertChart(EmbeddedChart)
       * @param chart the chart to insert
       */
      insertChart(chart: EmbeddedChart): void;

      /**
       * Inserts a column after the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column after the first column position
       *     sheet.insertColumnAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnAfter(Integer)
       * @param afterPosition The column after which the new column should be added.
       */
      insertColumnAfter(afterPosition: Integer): Sheet;

      /**
       * Inserts a column before the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column in the first column position
       *     sheet.insertColumnBefore(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnBefore(Integer)
       * @param beforePosition The column before which the new column should be added.
       */
      insertColumnBefore(beforePosition: Integer): Sheet;

      /**
       * Inserts a blank column in a sheet at the specified location.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Shifts all columns by one
       *     sheet.insertColumns(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumns(Integer)
       * @param columnIndex The index indicating where to insert a column.
       */
      insertColumns(columnIndex: Integer): void;

      /**
       * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Shifts all columns by three
       *     sheet.insertColumns(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumns(Integer,Integer)
       * @param columnIndex The index indicating where to insert a column.
       * @param numColumns The number of columns to insert.
       */
      insertColumns(columnIndex: Integer, numColumns: Integer): void;

      /**
       * Inserts a number of columns after the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column in the second column position
       *     sheet.insertColumnsAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnsAfter(Integer,Integer)
       * @param afterPosition The column after which the new column should be added.
       * @param howMany The number of columns to insert.
       */
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a number of columns before the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five columns before the first column
       *     sheet.insertColumnsBefore(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnsBefore(Integer,Integer)
       * @param beforePosition The column before which the new column should be added.
       * @param howMany The number of columns to insert.
       */
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a BlobSource as an image in the document at a given row and column. The image
       * size is retrieved from the blob contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
       *     sheet.insertImage(blob, 1, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertImage(BlobSource,Integer,Integer)
       * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
       * @param column The column position.
       * @param row The row position.
       */
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): OverGridImage;

      /**
       * Inserts a BlobSource as an image in the document at a given row and column, with a
       * pixel offset. The image size is retrieved from the blob contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
       *     sheet.insertImage(blob, 1, 1, 10, 10);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertImage(BlobSource,Integer,Integer,Integer,Integer)
       * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
       * @param column The column position.
       * @param row The row position.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;

      /**
       * Inserts an image in the document at a given row and column.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertImage(String,Integer,Integer)
       * @param url The URL of the image.
       * @param column The grid column position.
       * @param row The grid row position.
       */
      insertImage(url: string, column: Integer, row: Integer): OverGridImage;

      /**
       * Inserts an image in the document at a given row and column, with a pixel offset.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertImage(String,Integer,Integer,Integer,Integer)
       * @param url The URL for the image.
       * @param column The column position.
       * @param row The row position.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;

      /**
       * Inserts a row after the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a row after the first row position
       *     sheet.insertRowAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowAfter(Integer)
       * @param afterPosition The row after which the new row should be added.
       */
      insertRowAfter(afterPosition: Integer): Sheet;

      /**
       * Inserts a row before the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a row before the first row position
       *     sheet.insertRowBefore(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowBefore(Integer)
       * @param beforePosition The row before which the new row should be added.
       */
      insertRowBefore(beforePosition: Integer): Sheet;

      /**
       * Inserts a blank row in a sheet at the specified location.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Shifts all rows down by one
       *     sheet.insertRows(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRows(Integer)
       * @param rowIndex The index indicating where to insert a row.
       */
      insertRows(rowIndex: Integer): void;

      /**
       * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Shifts all rows down by three
       *     sheet.insertRows(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRows(Integer,Integer)
       * @param rowIndex The index indicating where to insert a row.
       * @param numRows The number of rows to insert.
       */
      insertRows(rowIndex: Integer, numRows: Integer): void;

      /**
       * Inserts a number of rows after the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five rows after the first row
       *     sheet.insertRowsAfter(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowsAfter(Integer,Integer)
       * @param afterPosition The row after which the new rows should be added.
       * @param howMany The number of rows to insert.
       */
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a number of rows before the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five rows before the first row
       *     sheet.insertRowsBefore(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowsBefore(Integer,Integer)
       * @param beforePosition The row before which the new rows should be added.
       * @param howMany The number of rows to insert.
       */
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;

      /**
       * Adds a new slicer to this sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertSlicer(Range,Integer,Integer)
       * @param range The range over which slicer slicer is created.
       * @param anchorRowPos The slicer's top side is anchored in this row.
       * @param anchorColPos The slicer's top side is anchored in this col.
       */
      insertSlicer(range: Range, anchorRowPos: Integer, anchorColPos: Integer): Slicer;

      /**
       * Adds a new slicer to this sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertSlicer(Range,Integer,Integer,Integer,Integer)
       * @param range The range over which slicer slicer is created.
       * @param anchorRowPos The slicer's top side is anchored in this row.
       * @param anchorColPos The slicer's top side is anchored in this col.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      insertSlicer(range: Range, anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): Slicer;

      /**
       * Returns whether the given column is hidden by the user.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.isColumnHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#isColumnHiddenByUser(Integer)
       * @param columnPosition The position of the column to examine.
       */
      isColumnHiddenByUser(columnPosition: Integer): boolean;

      /**
       * Returns true if this sheet layout is right-to-left. Returns false if the sheet
       * uses the default left-to-right layout.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#isRightToLeft()
       */
      isRightToLeft(): boolean;

      /**
       * Returns whether the given row is hidden by a filter (not a filter view).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.isColumnHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#isRowHiddenByFilter(Integer)
       * @param rowPosition The position of the row to examine.
       */
      isRowHiddenByFilter(rowPosition: Integer): boolean;

      /**
       * Returns whether the given row is hidden by the user.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Rows start at 1
       *     Logger.log(sheet.isRowHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#isRowHiddenByUser(Integer)
       * @param rowPosition The position of the row to examine.
       */
      isRowHiddenByUser(rowPosition: Integer): boolean;

      /**
       * Returns true if the sheet is currently hidden.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     if (sheet.isSheetHidden()) {
       *       // do something...
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#isSheetHidden()
       */
      isSheetHidden(): boolean;

      /**
       * Moves the columns selected by the given range to the position indicated by the destinationIndex. The columnSpec itself does not have to exactly represent an entire
       * column or group of columns to move—it selects all columns that the range spans.
       *
       *
       *     // The code below moves rows A-B to destination index 5.
       *     // This results in those columns becoming columns C-D.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Selects column A and column B to be moved.
       *     var columnSpec = sheet.getRange("A1:B1");
       *     sheet.moveColumns(columnSpec, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#moveColumns(Range,Integer)
       * @param columnSpec A range spanning the columns that should be moved.
       * @param destinationIndex The index that the columns should be moved to. Note that this index is based on the coordinates before the columns are moved. Existing data is shifted right to make room for the moved columns while the source columns are removed from the grid. Therefore, the data may end up at a different index than originally specified.
       */
      moveColumns(columnSpec: Range, destinationIndex: Integer): void;

      /**
       * Moves the rows selected by the given range to the position indicated by the destinationIndex. The rowSpec itself does not have to exactly represent an entire row
       * or group of rows to move—it selects all rows that the range spans.
       *
       *
       *     // The code below moves rows 1-2 to destination index 5.
       *     // This results in those rows becoming rows 3-4.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Selects row 1 and row 2 to be moved.
       *     var rowSpec = sheet.getRange("A1:A2");
       *     sheet.moveRows(rowSpec, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#moveRows(Range,Integer)
       * @param rowSpec A range spanning the rows that should be moved.
       * @param destinationIndex The index that the rows should be moved to. Note that this index is based on the coordinates before the rows are moved. Existing data is shifted down to make room for the moved rows while the source rows are removed from the grid. Therefore, the data may end up at a different index than originally specified.
       */
      moveRows(rowSpec: Range, destinationIndex: Integer): void;

      /**
       * Returns a builder to create a new chart for this sheet.
       *
       *
       * This example shows how to create a new chart:
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var range = sheet.getRange("A1:B8");
       *     var chartBuilder = sheet.newChart();
       *     chartBuilder.addRange(range)
       *         .setChartType(Charts.ChartType.LINE)
       *         .setPosition(2, 2, 0, 0)
       *         .setOption('title', 'My Line Chart!');
       *     sheet.insertChart(chartBuilder.build());
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#newChart()
       */
      newChart(): EmbeddedChartBuilder;

      /**
       * Creates an object that can protect the sheet from being edited except by users who have
       * permission. Until the script actually changes the list of editors for the sheet (by calling
       * Protection.removeEditor(emailAddress), Protection.removeEditor(user), Protection.removeEditors(emailAddresses), Protection.addEditor(emailAddress), Protection.addEditor(user), Protection.addEditors(emailAddresses), or setting a new
       * value for Protection.setDomainEdit(editable)), the permissions mirror those of the
       * spreadsheet itself, which effectively means that the sheet remains unprotected. If the sheet is
       * already protected, this method returns an object representing its existing protection settings.
       * A protected sheet may include unprotected regions.
       *
       *
       *     // Protect the active sheet, then remove all other users from the list of editors.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var protection = sheet.protect().setDescription('Sample protected sheet');
       *
       *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
       *     // permission comes from a group, the script throws an exception upon removing the group.
       *     var me = Session.getEffectiveUser();
       *     protection.addEditor(me);
       *     protection.removeEditors(protection.getEditors());
       *     if (protection.canDomainEdit()) {
       *       protection.setDomainEdit(false);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#protect()
       */
      protect(): Protection;

      /**
       * Removes a chart from the parent sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This removes all the embedded charts from the spreadsheet
       *     var charts = sheet.getCharts();
       *     for (var i in charts) {
       *       sheet.removeChart(charts[i]);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#removeChart(EmbeddedChart)
       * @param chart the chart to remove
       */
      removeChart(chart: EmbeddedChart): void;

      /**
       * Sets the specified range as the active range in the active sheet, with
       * the top left cell in the range as the current cell.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var range = sheet.getRange('A1:D4');
       *     sheet.setActiveRange(range);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: A1
       *     var currentCell = selection.getCurrentCell();
       *     // Active Range: A1:D4
       *     var activeRange = selection.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveRange(Range)
       * @param range The range to set as the active range.
       */
      setActiveRange(range: Range): Range;

      /**
       * Sets the specified list of ranges as the active ranges in the
       * active sheet. The last range in the list is set as the active range.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     sheet.setActiveRangeList(rangeList);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B2
       *     var currentCell = selection.getCurrentCell();
       *     // Active range: B2:C4
       *     var activeRange = selection.getActiveRange();
       *     // Active range list: [D4, B2:C4]
       *     var activeRangeList = selection.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveRangeList(RangeList)
       * @param rangeList The list of ranges to select.
       */
      setActiveRangeList(rangeList: RangeList): RangeList;

      /**
       * Sets the active selection region for this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D4");
       *     sheet.setActiveSelection(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveSelection(Range)
       * @param range The range to set as the active selection.
       */
      setActiveSelection(range: Range): Range;

      /**
       * Sets the active selection, as specified in A1 notation or R1C1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.setActiveSelection("A1:D4");
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveSelection(String)
       * @param a1Notation The range to set as active, as specified in A1 notation or R1C1 notation.
       */
      setActiveSelection(a1Notation: string): Range;

      /**
       * Sets the position of the column group control toggle on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     sheet.setColumnGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setColumnGroupControlPosition(GroupControlTogglePosition)
       * @param position The position of the column group control toggle.
       */
      setColumnGroupControlPosition(position: GroupControlTogglePosition): Sheet;

      /**
       * Sets the width of the given column in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first column to a width of 200 pixels
       *     sheet.setColumnWidth(1, 200);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setColumnWidth(Integer,Integer)
       * @param columnPosition The position of the given column to set.
       * @param width The width in pixels to set it to.
       */
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;

      /**
       * Sets the width of the given columns in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first three columns to a width of 200 pixels
       *     sheet.setColumnWidths(1, 3, 200);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setColumnWidths(Integer,Integer,Integer)
       * @param startColumn The starting column position to change.
       * @param numColumns The number of columns to change.
       * @param width The width in pixels to set it to.
       */
      setColumnWidths(startColumn: Integer, numColumns: Integer, width: Integer): Sheet;

      /**
       * Replaces all currently existing conditional format rules in the sheet with the input rules.
       * Rules are evaluated in their input order.
       *
       *
       *     // Remove one of the existing conditional format rules.
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.splice(1, 1); // Deletes the 2nd format rule.
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setConditionalFormatRules(ConditionalFormatRule)
       * @param rules The new conditional format rules.
       */
      setConditionalFormatRules(rules: ConditionalFormatRule[]): void;

      /**
       * Sets the specified cell as the current cell.
       *
       *
       * If the specified cell is present in an already selected range, then that range becomes the
       * active range with the cell as the current cell.
       *
       *
       * If the specified cell is not present in any selected range, then any existing selection is
       * removed and the cell becomes the current cell and the active range.
       *
       *
       *
       * Note:The specified Range must consist of one cell, otherwise it throws an
       * exception.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var cell = sheet.getRange('B5');
       *     sheet.setCurrentCell(cell);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B5
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setCurrentCell(Range)
       * @param cell The cell to set as the current cell.
       */
      setCurrentCell(cell: Range): Range;

      /**
       * Freezes the given number of columns. If zero, no columns are frozen.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Freezes the first column
       *     sheet.setFrozenColumns(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setFrozenColumns(Integer)
       * @param columns The number of columns to freeze.
       */
      setFrozenColumns(columns: Integer): void;

      /**
       * Freezes the given number of rows. If zero, no rows are frozen.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Freezes the first row
       *     sheet.setFrozenRows(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setFrozenRows(Integer)
       * @param rows The number of rows to freeze.
       */
      setFrozenRows(rows: Integer): void;

      /**
       * Hides or reveals the sheet gridlines.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setHiddenGridlines(Boolean)
       * @param hideGridlines If true, hide gridlines in this sheet; otherwise show the gridlines.
       */
      setHiddenGridlines(hideGridlines: boolean): Sheet;

      /**
       * Sets the sheet name.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.setName("not first anymore");
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setName(String)
       * @param name The new name for the sheet.
       */
      setName(name: string): Sheet;

      /**
       * Sets or unsets the sheet layout to right-to-left.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setRightToLeft(Boolean)
       * @param rightToLeft If true, the sheet layout is set to right-to-left, with cell A1 at the top right corner. If false, the sheet layout is set to the default left-to-right, with cell A1 at the top left.
       */
      setRightToLeft(rightToLeft: boolean): Sheet;

      /**
       * Sets the position of the row group control toggle on the sheet.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
       *     sheet.setRowGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setRowGroupControlPosition(GroupControlTogglePosition)
       * @param position The position of the row group control toggle.
       */
      setRowGroupControlPosition(position: GroupControlTogglePosition): Sheet;

      /**
       * Sets the row height of the given row in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first row to a height of 200 pixels
       *     sheet.setRowHeight(1, 200);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setRowHeight(Integer,Integer)
       * @param rowPosition The row position to change.
       * @param height The height in pixels to set it to.
       */
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;

      /**
       * Sets the height of the given rows in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first three rows to a height of 20 pixels
       *     sheet.setRowHeights(1, 3, 20);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setRowHeights(Integer,Integer,Integer)
       * @param startRow The starting row position to change.
       * @param numRows The number of rows to change.
       * @param height The height in pixels to set it to.
       */
      setRowHeights(startRow: Integer, numRows: Integer, height: Integer): Sheet;

      /**
       * Sets the sheet tab color.
       *
       *
       *     // This example assumes there is a sheet named "first"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var first = ss.getSheetByName("first");
       *     first.setTabColor("ff0000"); // Set the color to red.
       *     first.setTabColor(null); // Unset the color.
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#setTabColor(String)
       * @param color A color code in CSS notation (like '#ffffff' or 'white'), or null to reset the tab color.
       */
      setTabColor(color: string): Sheet;

      /**
       * Unhides the column at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Unhides the first column
       *     sheet.showColumns(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#showColumns(Integer)
       * @param columnIndex The index of the column to unhide.
       */
      showColumns(columnIndex: Integer): void;

      /**
       * Unhides one or more consecutive columns starting at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Unhides the first three columns
       *     sheet.showColumns(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#showColumns(Integer,Integer)
       * @param columnIndex The starting index of the columns to unhide.
       * @param numColumns The number of columns to unhide.
       */
      showColumns(columnIndex: Integer, numColumns: Integer): void;

      /**
       * Unhides the row at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Unhides the first row
       *     sheet.showRows(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#showRows(Integer)
       * @param rowIndex The index of the row to unhide.
       */
      showRows(rowIndex: Integer): void;

      /**
       * Unhides one or more consecutive rows starting at the given index.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Unhides the first three rows
       *     sheet.showRows(1, 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#showRows(Integer,Integer)
       * @param rowIndex The starting index of the rows to unhide.
       * @param numRows The number of rows to unhide.
       */
      showRows(rowIndex: Integer, numRows: Integer): void;

      /**
       * Makes the sheet visible. Has no effect if the sheet is already visible.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     sheet.showSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#showSheet()
       */
      showSheet(): Sheet;

      /**
       * Sorts a sheet by column, ascending.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sorts the sheet by the first column, ascending
       *     sheet.sort(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#sort(Integer)
       * @param columnPosition The column to sort by.
       */
      sort(columnPosition: Integer): Sheet;

      /**
       * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sorts the sheet by the first column, descending
       *     sheet.sort(1, false);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#sort(Integer,Boolean)
       * @param columnPosition The column to sort by.
       * @param ascending true for ascending sorts, false for descending.
       */
      sort(columnPosition: Integer, ascending: boolean): Sheet;

      /**
       * Unhides the column in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This unhides the first column if it was previously hidden
       *     var range = sheet.getRange("A1");
       *     sheet.unhideColumn(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#unhideColumn(Range)
       * @param column The range to unhide, if hidden.
       */
      unhideColumn(column: Range): void;

      /**
       * Unhides the row in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This unhides the first row if it was previously hidden
       *     var range = sheet.getRange("A1");
       *     sheet.unhideRow(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#unhideRow(Range)
       * @param row The range to unhide, if hidden.
       */
      unhideRow(row: Range): void;

      /**
       * Updates the chart on this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This code is going to loop through all the charts and change them to
       *     // column charts
       *     var charts = sheet.getCharts();
       *     for (var i in charts) {
       *       var chart = charts[i];
       *       var newChart = chart
       *           .modify()
       *           .setChartType(Charts.ChartType.COLUMN)
       *           .build();
       *       sheet.updateChart(newChart);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/sheet#updateChart(EmbeddedChart)
       * @param chart the chart to update
       */
      updateChart(chart: EmbeddedChart): void;
      /** @deprecated DO NOT USE */ getSheetProtection(): PageProtection;
      /** @deprecated DO NOT USE */ setSheetProtection(permissions: PageProtection): void;
    }
    /**
     * The different types of sheets that can exist in a spreadsheet.
     */
    enum SheetType { GRID, OBJECT }
    /**
     * Represents a slicer, which is used
     * to filter ranges, charts and pivot tables in a non-collaborative manner. This class contains
     * methods to access and modify existing slicers. To create a new slicer, use Sheet.insertSlicer(range, anchorRowPos, anchorColPos).
     */
    interface Slicer {

      /**
       * Returns the background color of the slicer in CSS notation (such as '#ffffff').
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getBackgroundColor()
       */
      getBackgroundColor(): string;

      /**
       * Returns the column position (relative to the data range of the slicer) on which the filter is
       * applied in the slicer, or null if the column position is not set. This should be
       * 1-indexed position of the column similar to filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getColumnPosition()
       */
      getColumnPosition(): Integer;

      /**
       * Gets information about where the slicer is positioned in the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getContainerInfo()
       */
      getContainerInfo(): ContainerInfo;

      /**
       * Returns the filter criteria of the slicer, or null if the filter criteria is not set.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getFilterCriteria()
       */
      getFilterCriteria(): FilterCriteria;

      /**
       * Gets the data range on which the slicer is applied to.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getRange()
       */
      getRange(): Range;

      /**
       * Returns the title of the slicer.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the horizontal alignment of the title.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getTitleHorizontalAlignment()
       */
      getTitleHorizontalAlignment(): string;

      /**
       * Returns the text style of the slicer's title.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#getTitleTextStyle()
       */
      getTitleTextStyle(): TextStyle;

      /**
       * Returns whether the given slicer is applied to pivot tables.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#isAppliedToPivotTables()
       */
      isAppliedToPivotTables(): boolean;

      /**
       * Deletes the slicer.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#remove()
       */
      remove(): void;

      /**
       * Sets if the given slicer should be applied to pivot tables in the worksheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setApplyToPivotTables(Boolean)
       * @param applyToPivotTables Specifies whether this slicer should apply to pivot tables.
       */
      setApplyToPivotTables(applyToPivotTables: boolean): Slicer;

      /**
       * Sets the background color of the slicer. A null value resets the background color.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setBackgroundColor(String)
       * @param color The new background color of this slicer in CSS notation (such as '#ffffff').
       */
      setBackgroundColor(color: string): Slicer;

      /**
       * Sets the column index and filtering criteria of the slicer. A null value resets the
       * slicer filter.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setColumnFilterCriteria(Integer,FilterCriteria)
       * @param columnPosition The new column position of this slicer.
       * @param filterCriteria The new filter criteria of this slicer.
       */
      setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria): Slicer;

      /**
       * Sets the position where the slicer appears on the sheet. The anchor row and column position
       * indices are 1-indexed.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setPosition(Integer,Integer,Integer,Integer)
       * @param anchorRowPos The slicer's top side is anchored in this row.
       * @param anchorColPos The slicer's top side is anchored in this col.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): Slicer;

      /**
       * Sets the data range on which the slicer is applied.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setRange(Range)
       * @param rangeApi The new range for this slicer.
       */
      setRange(rangeApi: Range): Slicer;

      /**
       * Sets the title of the slicer. An empty title resets the title to default value.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setTitle(String)
       * @param title The new title of this slicer.
       */
      setTitle(title: string): Slicer;

      /**
       * Sets the horizontal alignment of the title in the slicer. A null value resets the
       * alignment.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setTitleHorizontalAlignment(String)
       * @param horizontalAlignment The new horizontal alignment of this slicer's title.
       */
      setTitleHorizontalAlignment(horizontalAlignment: string): Slicer;

      /**
       * Sets the text style of the slicer.
       * https://developers.google.com/apps-script/reference/spreadsheet/slicer#setTitleTextStyle(TextStyle)
       * @param textStyle The new text style of the slicer's title.
       */
      setTitleTextStyle(textStyle: TextStyle): Slicer;
    }
    /**
     * Access and modify Google Sheets files. Common operations are adding new sheets and adding
     * collaborators.
     */
    interface Spreadsheet {

      /**
       * Adds developer metadata with the specified key to the top-level spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addDeveloperMetadata(String)
       * @param key The key for the new developer metadata.
       */
      addDeveloperMetadata(key: string): Spreadsheet;

      /**
       * Adds developer metadata with the specified key and visibility to the spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addDeveloperMetadata(String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Spreadsheet;

      /**
       * Adds developer metadata with the specified key and value to the spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addDeveloperMetadata(String,String)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string): Spreadsheet;

      /**
       * Adds developer metadata with the specified key, value, and visibility to the spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addDeveloperMetadata(String,String,DeveloperMetadataVisibility)
       * @param key The key for the new developer metadata.
       * @param value The value for the new developer metadata.
       * @param visibility The visibility of the new developer metadata.
       */
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Spreadsheet;

      /**
       * Adds the given user to the list of editors for the Spreadsheet. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Spreadsheet;

      /**
       * Adds the given user to the list of editors for the Spreadsheet. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Spreadsheet;

      /**
       * Adds the given array of users to the list of editors for the Spreadsheet. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Spreadsheet;

      /**
       * Creates a new menu in the Spreadsheet UI.
       *
       *
       * Each menu entry runs a user-defined function. Usually, you want to call it from the onOpen() function so that the menu is automatically created when the spreadsheet is loaded.
       *
       *
       *     // The onOpen function is executed automatically every time a Spreadsheet is loaded
       *     function onOpen() {
       *       var ss = SpreadsheetApp.getActiveSpreadsheet();
       *       var menuEntries = [];
       *       // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is
       *       // executed.
       *       menuEntries.push({name: "Menu Entry 1", functionName: "function1"});
       *       menuEntries.push(null); // line separator
       *       menuEntries.push({name: "Menu Entry 2", functionName: "function2"});
       *
       *       ss.addMenu("addMenuExample", menuEntries);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addMenu(String,Object)
       * @param name The name of the menu to be created.
       * @param subMenus An array of JavaScript maps with name and functionName parameters. You can use functions from included libraries, such as  Library.libFunction1.
       */
      addMenu(name: string, subMenus: object[]): void;

      /**
       * Adds the given user to the list of viewers for the Spreadsheet. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Spreadsheet;

      /**
       * Adds the given user to the list of viewers for the Spreadsheet. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Spreadsheet;

      /**
       * Adds the given array of users to the list of viewers for the Spreadsheet. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Spreadsheet;

      /**
       * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
       * asks for the last row, and then writes to that row, and an intervening mutation occurs between
       * getting the last row and writing to it.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Appends a new row with 3 columns to the bottom of the
       *     // spreadsheet containing the values in the array
       *     sheet.appendRow(["a man", "a plan", "panama"]);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#appendRow(Object)
       * @param rowContents An array of values to insert after the last row in the sheet.
       */
      appendRow(rowContents: object[]): Sheet;

      /**
       * Sets the width of the given column to fit its contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');
       *
       *     // Sets the first column to a width which fits the text
       *     sheet.autoResizeColumn(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#autoResizeColumn(Integer)
       * @param columnPosition The position of the given column to resize.
       */
      autoResizeColumn(columnPosition: Integer): Sheet;

      /**
       * Copies the spreadsheet and returns the new one.
       *
       *
       *     // This code makes a copy of the current spreadsheet and names it appropriately
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.copy("Copy of " + ss.getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#copy(String)
       * @param name
       */
      copy(name: string): Spreadsheet;

      /**
       * Returns a DeveloperMetadataFinder for finding developer metadata within the scope of
       * this spreadsheet. By default this considers all metadata associated with the spreadsheet,
       * sheets, rows, and columns.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#createDeveloperMetadataFinder()
       */
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;

      /**
       * Creates a text finder for the spreadsheet, which can be used to find and replace text within
       * the spreadsheet. The search starts from the first sheet of the spreadsheet.
       *
       *
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *
       *     // Creates  a text finder.
       *     var textFinder = spreadsheet.createTextFinder('dog');
       *
       *     // Returns the first occurrence of 'dog' in the spreadsheet.
       *     var firstOccurrence = textFinder.findNext();
       *
       *     // Replaces the last found occurrence of 'dog' with 'cat' and returns the number
       *     // of occurrences replaced.
       *     var numOccurrencesReplaced = findOccurrence.replaceWith('cat');
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#createTextFinder(String)
       * @param findText The text to search for.
       */
      createTextFinder(findText: string): TextFinder;

      /**
       * Deletes the currently active sheet.
       *
       *
       *     // The code below deletes the currently active sheet and stores the new active sheet in a
       *     // variable
       *     var newSheet = SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteActiveSheet()
       */
      deleteActiveSheet(): Sheet;

      /**
       * Deletes the column at the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Columns start at "1" - this deletes the first column
       *     sheet.deleteColumn(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteColumn(Integer)
       * @param columnPosition The position of the column, starting at 1 for the first column.
       */
      deleteColumn(columnPosition: Integer): Sheet;

      /**
       * Deletes a number of columns starting at the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Columns start at "1" - this deletes the first two columns
       *     sheet.deleteColumns(1, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteColumns(Integer,Integer)
       * @param columnPosition The position of the first column to delete.
       * @param howMany The number of columns to delete.
       */
      deleteColumns(columnPosition: Integer, howMany: Integer): void;

      /**
       * Deletes the row at the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Rows start at "1" - this deletes the first row
       *     sheet.deleteRow(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteRow(Integer)
       * @param rowPosition The position of the row, starting at 1 for the first row.
       */
      deleteRow(rowPosition: Integer): Sheet;

      /**
       * Deletes a number of rows starting at the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Rows start at "1" - this deletes the first two rows
       *     sheet.deleteRows(1, 2);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteRows(Integer,Integer)
       * @param rowPosition The position of the first row to delete.
       * @param howMany The number of rows to delete.
       */
      deleteRows(rowPosition: Integer, howMany: Integer): void;

      /**
       * Deletes the specified sheet.
       *
       *
       *     // The code below deletes the specified sheet.
       *     var ss = SpreadsheetApp.getActive();
       *     var sheet = ss.getSheetByName('My Sheet');
       *     ss.deleteSheet(sheet);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteSheet(Sheet)
       * @param sheet The sheet to delete.
       */
      deleteSheet(sheet: Sheet): void;

      /**
       * Duplicates the active sheet and makes it the active sheet.
       *
       *
       *     // The code below makes a duplicate of the active sheet
       *     SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#duplicateActiveSheet()
       */
      duplicateActiveSheet(): Sheet;

      /**
       * Returns the active cell in this sheet.
       *
       *
       *
       * Note: It's preferrable to use getCurrentCell(), which the returns the current
       * highlighted cell.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *     // Returns the active cell
       *     var cell = sheet.getActiveCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveCell()
       */
      getActiveCell(): Range;

      /**
       * Returns the selected range in the active sheet, or null if there is no active range. If
       * multiple ranges are selected this method returns only the last selected range.
       *
       *
       * The term "active range" refers to the range that a user has selected in the active sheet,
       * but in a custom function it refers to the cell being actively recalculated.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var activeRange = sheet.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRange()
       */
      getActiveRange(): Range;

      /**
       * Returns the list of active ranges in the active sheet or null if there are no active
       * ranges.
       *
       *
       * If there is a single range selected, this behaves as a getActiveRange() call.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     // Returns the list of active ranges.
       *     var activeRangeList = sheet.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRangeList()
       */
      getActiveRangeList(): RangeList;

      /**
       * Gets the active sheet in a spreadsheet.
       *
       *
       * The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
       * UI.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveSheet()
       */
      getActiveSheet(): Sheet;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Returns all the bandings in this spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getBandings()
       */
      getBandings(): Banding[];

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the width in pixels of the given column.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.getColumnWidth(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getColumnWidth(Integer)
       * @param columnPosition The position of the column to examine.
       */
      getColumnWidth(columnPosition: Integer): Integer;

      /**
       * Returns the current cell in the active sheet or null if there is no current cell. The
       * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
       * border. There is never more than one current cell. When a user selects one or more cell ranges,
       * one of the cells in the selection is the current cell.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     // Returns the current highlighted cell in the one of the active ranges.
       *     var currentCell = sheet.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getCurrentCell()
       */
      getCurrentCell(): Range;

      /**
       * Returns a Range corresponding to the dimensions in which data is present.
       *
       *
       * This is functionally equivalent to creating a Range bounded by A1 and
       * (Range.getLastColumn(), Range.getLastRow()).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This represents ALL the data
       *     var range = sheet.getDataRange();
       *     var values = range.getValues();
       *
       *     // This logs the spreadsheet in CSV format with a trailing comma
       *     for (var i = 0; i < values.length; i++) {
       *       var row = "";
       *       for (var j = 0; j < values[i].length; j++) {
       *         if (values[i][j]) {
       *           row = row + values[i][j];
       *         }
       *         row = row + ",";
       *       }
       *       Logger.log(row);
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getDataRange()
       */
      getDataRange(): Range;

      /**
       * Gets all the data source tables.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getDataSourceTables()
       */
      getDataSourceTables(): DataSourceTable[];

      /**
       * Get the developer metadata associated with the top-level spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getDeveloperMetadata()
       */
      getDeveloperMetadata(): DeveloperMetadata[];

      /**
       * Gets the list of editors for this Spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Returns the URL for the form that sends its responses to this spreadsheet, or null if
       * this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet,
       * the form URL returned is indeterminate. As an alternative, per sheet form URL associations can
       * be retrieved through the Sheet.getFormUrl() method.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getFormUrl()
       */
      getFormUrl(): string;

      /**
       * Returns the number of frozen columns.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getFrozenColumns()
       */
      getFrozenColumns(): Integer;

      /**
       * Returns the number of frozen rows.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getFrozenRows()
       */
      getFrozenRows(): Integer;

      /**
       * Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL.
       * For example, the spreadsheet ID in the URL
       * https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".
       *
       *
       *     // The code below logs the ID for the active spreadsheet.
       *     Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getId()
       */
      getId(): string;

      /**
       * Returns all over-the-grid images on the sheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getImages()
       */
      getImages(): OverGridImage[];

      /**
       * Returns the threshold value used during iterative calculation. When the results of successive
       * calculation differ by less than this value, the iterative calculation stops.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getIterativeCalculationConvergenceThreshold()
       */
      getIterativeCalculationConvergenceThreshold(): number;

      /**
       * Returns the position of the last column that has content.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This logs the value in the very last cell of this sheet
       *     var lastRow = sheet.getLastRow();
       *     var lastColumn = sheet.getLastColumn();
       *     var lastCell = sheet.getRange(lastRow, lastColumn);
       *     Logger.log(lastCell.getValue());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getLastColumn()
       */
      getLastColumn(): Integer;

      /**
       * Returns the position of the last row that has content.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This logs the value in the very last cell of this sheet
       *     var lastRow = sheet.getLastRow();
       *     var lastColumn = sheet.getLastColumn();
       *     var lastCell = sheet.getRange(lastRow, lastColumn);
       *     Logger.log(lastCell.getValue());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getLastRow()
       */
      getLastRow(): Integer;

      /**
       * Returns the maximum number of iterations to use during iterative calculation.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getMaxIterativeCalculationCycles()
       */
      getMaxIterativeCalculationCycles(): Integer;

      /**
       * Gets the name of the document.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     Logger.log(ss.getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getName()
       */
      getName(): string;

      /**
       * Gets all the named ranges in this spreadsheet.
       *
       *
       *     // The code below logs the name of the first named range.
       *     var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
       *     if (namedRanges.length > 1) {
       *       Logger.log(namedRanges[0].getName());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getNamedRanges()
       */
      getNamedRanges(): NamedRange[];

      /**
       * Returns the number of sheets in this spreadsheet.
       *
       *
       *     // The code below logs the number of sheets in the active spreadsheet.
       *     Logger.log(SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getNumSheets()
       */
      getNumSheets(): Integer;

      /**
       * Returns the owner of the document, or null for a document in a shared drive.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var owner = ss.getOwner();
       *     Logger.log(owner.getEmail());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getOwner()
       */
      getOwner(): Base.User;

      /**
       * Returns the list of predefined themes.
       *
       *
       *     // The code below returns the list of predefined themes.
       *     var predefinedThemesList = SpreadsheetApp.getPredefinedSpreadsheetThemes();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getPredefinedSpreadsheetThemes()
       */
      getPredefinedSpreadsheetThemes(): SpreadsheetTheme[];

      /**
       * Gets an array of objects representing all protected ranges or sheets in the spreadsheet.
       *
       *
       *     // Remove all range protections in the spreadsheet that the user has permission to edit.
       *     var ss = SpreadsheetApp.getActive();
       *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
       *     for (var i = 0; i < protections.length; i++) {
       *       var protection = protections[i];
       *       if (protection.canEdit()) {
       *         protection.remove();
       *       }
       *     }
       *     // Remove all sheet protections in the spreadsheet that the user has permission to edit.
       *     var ss = SpreadsheetApp.getActive();
       *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
       *     for (var i = 0; i < protections.length; i++) {
       *       var protection = protections[i];
       *       if (protection.canEdit()) {
       *         protection.remove();
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getProtections(ProtectionType)
       * @param type The type of protected area, either SpreadsheetApp.ProtectionType.RANGE or SpreadsheetApp.ProtectionType.SHEET.
       */
      getProtections(type: ProtectionType): Protection[];

      /**
       * Returns the range as specified in A1 notation or R1C1 notation.
       *
       *
       *     // Get a range A1:D4 on sheet titled "Invoices"
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var range = ss.getRange("Invoices!A1:D4");
       *
       *     // Get cell A1 on the first sheet
       *     var sheet = ss.getSheets()[0];
       *     var cell = sheet.getRange("A1");
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRange(String)
       * @param a1Notation The range to return, as specified in A1 notation or R1C1 notation.
       */
      getRange(a1Notation: string): Range;

      /**
       * Returns a named range, or null if no range with the given name is found. If multiple
       * sheets of the spreadsheet use the same range name, specify the sheet name without additional
       * quotation marks — for example, getRangeByName('TaxRates') or getRangeByName('Sheet Name!TaxRates'), but not getRangeByName('"Sheet
       * Name"!TaxRates').
       *
       *
       *     // Log the number of columns for the range named 'TaxRates' in the active spreadsheet.
       *     var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('TaxRates');
       *     if (range != null) {
       *       Logger.log(range.getNumColumns());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRangeByName(String)
       * @param name The name of the range to get.
       */
      getRangeByName(name: string): Range;

      /**
       * Returns the RangeList collection representing the ranges in the same sheet specified
       * by a non-empty list of A1 notations or R1C1 notations.
       *
       *
       *     // Get a list of ranges A1:D4, F1:H4.
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRangeList(String)
       * @param a1Notations The list of ranges to return, as specified in A1 notation or R1C1 notation.
       */
      getRangeList(a1Notations: string[]): RangeList;

      /**
       * Returns the calculation interval for this spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRecalculationInterval()
       */
      getRecalculationInterval(): RecalculationInterval;

      /**
       * Gets the height in pixels of the given row.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Rows start at 1
       *     Logger.log(sheet.getRowHeight(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRowHeight(Integer)
       * @param rowPosition The position of the row to examine.
       */
      getRowHeight(rowPosition: Integer): Integer;

      /**
       * Returns the current Selection in the spreadsheet.
       *
       *
       *     var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSelection()
       */
      getSelection(): Selection;

      /**
       * Returns a sheet with the given name.
       *
       *
       * If multiple sheets have the same name, the leftmost one is returned. Returns null if
       * there is no sheet with the given name.
       *
       *
       *     // The code below logs the index of a sheet named "Expenses"
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");
       *     if (sheet != null) {
       *       Logger.log(sheet.getIndex());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetByName(String)
       * @param name The name of the sheet to get.
       */
      getSheetByName(name: string): Sheet;

      /**
       * Returns the ID of the sheet represented by this object.
       *
       *
       * This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
       * increasing integer assigned at sheet creation time that is independent of sheet position. This
       * is useful in conjunction with methods such as Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd) that take a gridId parameter rather than a Sheet instance.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log(sheet.getSheetId());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetId()
       */
      getSheetId(): Integer;

      /**
       * Returns the sheet name.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     Logger.log(sheet.getSheetName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetName()
       */
      getSheetName(): string;

      /**
       * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
       * value given as the row or column position is equivalent to getting the very last row or column
       * that has data in the sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // The two samples below produce the same output
       *     var values = sheet.getSheetValues(1, 1, 3, 3);
       *     Logger.log(values);
       *
       *     var range = sheet.getRange(1, 1, 3, 3);
       *     values = range.getValues();
       *     Logger.log(values);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetValues(Integer,Integer,Integer,Integer)
       * @param startRow The position of the starting row.
       * @param startColumn The position of the starting column.
       * @param numRows The number of rows to return values for.
       * @param numColumns The number of columns to return values for.
       */
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): object[][];

      /**
       * Gets all the sheets in this spreadsheet.
       *
       *
       *     // The code below logs the name of the second sheet
       *     var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
       *     if (sheets.length > 1) {
       *       Logger.log(sheets[1].getName());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheets()
       */
      getSheets(): Sheet[];

      /**
       * Gets the spreadsheet locale.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSpreadsheetLocale()
       */
      getSpreadsheetLocale(): string;

      /**
       * Returns the current theme of the spreadsheet, or null if no theme is applied.
       *
       *
       *     // The code below returns the current theme of the spreadsheet.
       *     var currentTheme = SpreadsheetApp.getSpreadsheetTheme();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSpreadsheetTheme()
       */
      getSpreadsheetTheme(): SpreadsheetTheme;

      /**
       * Gets the time zone for the spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSpreadsheetTimeZone()
       */
      getSpreadsheetTimeZone(): string;

      /**
       * Returns the URL for the given spreadsheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     Logger.log(ss.getUrl());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getViewers()
       */
      getViewers(): Base.User[];

      /**
       * Hides the columns in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This hides the first column
       *     var range = sheet.getRange("A1");
       *     sheet.hideColumn(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#hideColumn(Range)
       * @param column The column range to hide.
       */
      hideColumn(column: Range): void;

      /**
       * Hides the rows in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This hides the first row
       *     var range = sheet.getRange("A1");
       *     sheet.hideRow(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#hideRow(Range)
       * @param row The row range to hide.
       */
      hideRow(row: Range): void;

      /**
       * Inserts a column after the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column after the first column position
       *     sheet.insertColumnAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertColumnAfter(Integer)
       * @param afterPosition The column after which the new column should be added.
       */
      insertColumnAfter(afterPosition: Integer): Sheet;

      /**
       * Inserts a column before the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column in the first column position
       *     sheet.insertColumnBefore(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertColumnBefore(Integer)
       * @param beforePosition The column before which the new column should be added.
       */
      insertColumnBefore(beforePosition: Integer): Sheet;

      /**
       * Inserts a number of columns after the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a column in the second column position
       *     sheet.insertColumnsAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertColumnsAfter(Integer,Integer)
       * @param afterPosition The column after which the new column should be added.
       * @param howMany The number of columns to insert.
       */
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a number of columns before the given column position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five columns before the first column
       *     sheet.insertColumnsBefore(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertColumnsBefore(Integer,Integer)
       * @param beforePosition The column before which the new column should be added.
       * @param howMany The number of columns to insert.
       */
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a Spreadsheet as an image in the document at a given row and column. The image
       * size is retrieved from the blob contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
       *     sheet.insertImage(blob, 1, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertImage(BlobSource,Integer,Integer)
       * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
       * @param column The column position.
       * @param row The row position.
       */
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): OverGridImage;

      /**
       * Inserts a Spreadsheet as an image in the document at a given row and column, with a
       * pixel offset. The image size is retrieved from the blob contents.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
       *     sheet.insertImage(blob, 1, 1, 10, 10);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertImage(BlobSource,Integer,Integer,Integer,Integer)
       * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
       * @param column The column position.
       * @param row The row position.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;

      /**
       * Inserts an image in the document at a given row and column.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertImage(String,Integer,Integer)
       * @param url The URL of the image.
       * @param column The grid column position.
       * @param row The grid row position.
       */
      insertImage(url: string, column: Integer, row: Integer): OverGridImage;

      /**
       * Inserts an image in the document at a given row and column, with a pixel offset.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertImage(String,Integer,Integer,Integer,Integer)
       * @param url The URL for the image.
       * @param column The column position.
       * @param row The row position.
       * @param offsetX The horizontal offset from cell corner in pixels.
       * @param offsetY The vertical offset from cell corner in pixels.
       */
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;

      /**
       * Inserts a row after the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a row after the first row position
       *     sheet.insertRowAfter(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertRowAfter(Integer)
       * @param afterPosition The row after which the new row should be added.
       */
      insertRowAfter(afterPosition: Integer): Sheet;

      /**
       * Inserts a row before the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts a row before the first row position
       *     sheet.insertRowBefore(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertRowBefore(Integer)
       * @param beforePosition The row before which the new row should be added.
       */
      insertRowBefore(beforePosition: Integer): Sheet;

      /**
       * Inserts a number of rows after the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five rows after the first row
       *     sheet.insertRowsAfter(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertRowsAfter(Integer,Integer)
       * @param afterPosition The row after which the new rows should be added.
       * @param howMany The number of rows to insert.
       */
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a number of rows before the given row position.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This inserts five rows before the first row
       *     sheet.insertRowsBefore(1, 5);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertRowsBefore(Integer,Integer)
       * @param beforePosition The row before which the new rows should be added.
       * @param howMany The number of rows to insert.
       */
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the
       * active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.insertSheet();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet()
       */
      insertSheet(): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.insertSheet(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(Integer)
       * @param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in the spreadsheet, set it to 0.
       */
      insertSheet(sheetIndex: Integer): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet at the given index and uses optional advanced
       * arguments. The new sheet becomes the active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var templateSheet = ss.getSheetByName('Sales');
       *     ss.insertSheet(1, {template: templateSheet});
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(Integer,Object)
       * @param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in the spreadsheet, set it to 0.
       * @param options Optional JavaScript advanced arguments.
       */
      insertSheet(sheetIndex: Integer, options: object): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced
       * arguments. The new sheet becomes the active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var templateSheet = ss.getSheetByName('Sales');
       *     ss.insertSheet({template: templateSheet});
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(Object)
       * @param options Optional JavaScript advanced arguments, listed below.
       */
      insertSheet(options: object): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active
       * sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.insertSheet('My New Sheet');
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String)
       * @param sheetName The name of the new sheet.
       */
      insertSheet(sheetName: string): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet
       * becomes the active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.insertSheet('My New Sheet', 1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String,Integer)
       * @param sheetName The name of the new sheet.
       * @param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in the spreadsheet, set it to 0.
       */
      insertSheet(sheetName: string, sheetIndex: Integer): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet with the given name at the given index and uses
       * optional advanced arguments. The new sheet becomes the active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var templateSheet = ss.getSheetByName('Sales');
       *     ss.insertSheet('My New Sheet', 1, {template: templateSheet});
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String,Integer,Object)
       * @param sheetName The name of the new sheet.
       * @param sheetIndex The index of the newly inserted sheet. To insert a sheet as the first one in a spreadsheet, set it to 0.
       * @param options Optional JavaScript advanced arguments.
       */
      insertSheet(sheetName: string, sheetIndex: Integer, options: object): Sheet;

      /**
       * Inserts a new sheet into the spreadsheet with the given name and uses optional advanced
       * arguments. The new sheet becomes the active sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var templateSheet = ss.getSheetByName('Sales');
       *     ss.insertSheet('My New Sheet', {template: templateSheet});
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String,Object)
       * @param sheetName The name of the new sheet.
       * @param options Optional JavaScript advanced arguments.
       */
      insertSheet(sheetName: string, options: object): Sheet;

      /**
       * Inserts a new sheet in the spreadsheet, creates a DataSourceTable spanning the
       * entire sheet with the given data source specification, and starts data execution. As a side
       * effect, makes the new sheet the active sheet.
       *
       *
       * Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
       * type.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheetWithDataSourceTable(DataSourceSpec)
       * @param spec The data source specification to insert with.
       */
      insertSheetWithDataSourceTable(spec: DataSourceSpec): Sheet;

      /**
       * Returns whether the given column is hidden by the user.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.isColumnHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#isColumnHiddenByUser(Integer)
       * @param columnPosition The position of the column to examine.
       */
      isColumnHiddenByUser(columnPosition: Integer): boolean;

      /**
       * Returns whether iterative calculation is enabled in this spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#isIterativeCalculationEnabled()
       */
      isIterativeCalculationEnabled(): boolean;

      /**
       * Returns whether the given row is hidden by a filter (not a filter view).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Columns start at 1
       *     Logger.log(sheet.isColumnHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#isRowHiddenByFilter(Integer)
       * @param rowPosition The position of the row to examine.
       */
      isRowHiddenByFilter(rowPosition: Integer): boolean;

      /**
       * Returns whether the given row is hidden by the user.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Rows start at 1
       *     Logger.log(sheet.isRowHiddenByUser(1));
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#isRowHiddenByUser(Integer)
       * @param rowPosition The position of the row to examine.
       */
      isRowHiddenByUser(rowPosition: Integer): boolean;

      /**
       * Moves the active sheet to the given position in the list of sheets. Throws an exception if the
       * position is negative or greater than the number of sheets.
       *
       *
       *     // This example assumes there are two sheets in the current
       *     // active spreadsheet: one named "first", and another named "second",
       *     // and that the current active sheet (first) is in position 1
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = spreadsheet.getSheetByName("first");
       *
       *     // This should output 'Current index of sheet: 1'
       *     Logger.log("Current index of sheet: %s", sheet.getIndex());
       *
       *     spreadsheet.moveActiveSheet(2);
       *
       *     // This should output 'New index of sheet: 2'
       *     Logger.log("New index of sheet: %s", sheet.getIndex());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#moveActiveSheet(Integer)
       * @param pos A position to move the active sheet to in the list of sheets.
       */
      moveActiveSheet(pos: Integer): void;

      /**
       * Creates a new SheetType.OBJECT sheet and moves the provided chart to it. If the chart
       * is already on its own sheet, that sheet is returned without creating a new one.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();
       *     sheet.insertChart(chart);
       *     var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#moveChartToObjectSheet(EmbeddedChart)
       * @param chart The chart to move.
       */
      moveChartToObjectSheet(chart: EmbeddedChart): Sheet;

      /**
       * Removes the given user from the list of editors for the Spreadsheet. This method doesn't
       * block users from accessing the Spreadsheet if they belong to a class of users who have
       * general access—for example, if the Spreadsheet is shared with the user's entire
       * domain, or if the Spreadsheet is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Spreadsheet;

      /**
       * Removes the given user from the list of editors for the Spreadsheet. This method doesn't
       * block users from accessing the Spreadsheet if they belong to a class of users who have
       * general access—for example, if the Spreadsheet is shared with the user's entire
       * domain, or if the Spreadsheet is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Spreadsheet;

      /**
       * Removes a menu that was added by addMenu(name, subMenus). The name argument
       * should have the same value as the corresponding call to addMenu(name, subMenus).
       *
       *
       *     // The onOpen function is executed automatically every time a Spreadsheet is loaded
       *     function onOpen() {
       *       var ss = SpreadsheetApp.getActiveSpreadsheet();
       *       ss.addMenu("badMenu", [{name: "remove bad menu", functionName: "removeBadMenu"},
       *                                            {name: "foo", functionName: "foo"}]);
       *     }
       *     function removeBadMenu() {
       *       var ss = SpreadsheetApp.getActiveSpreadsheet();
       *       ss.removeMenu("badMenu");  // name must match the name used when added the menu
       *     }
       *     function foo(){
       *     //do nothing
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeMenu(String)
       * @param name The name of the menu to remove.
       */
      removeMenu(name: string): void;

      /**
       * Deletes a named range with the given name. Throws an exception if no range with the given name
       * is found in the spreadsheet.
       *
       *
       *     // The code below creates a new named range "foo", and then remove it.
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.setNamedRange("foo", ss.getActiveRange());
       *     ss.removeNamedRange("foo");
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeNamedRange(String)
       * @param name The range name.
       */
      removeNamedRange(name: string): void;

      /**
       * Removes the given user from the list of viewers and commenters for the Spreadsheet. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the Spreadsheet if they belong to a class of users who
       * have general access—for example, if the Spreadsheet is shared with the user's
       * entire domain, or if the Spreadsheet is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Spreadsheet;

      /**
       * Removes the given user from the list of viewers and commenters for the Spreadsheet. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the Spreadsheet if they belong to a class of users who have general
       * access—for example, if the Spreadsheet is shared with the user's entire domain, or
       * if the Spreadsheet is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Spreadsheet;

      /**
       * Renames the document.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.rename("This is the new name");
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#rename(String)
       * @param newName The new name for the document.
       */
      rename(newName: string): void;

      /**
       * Renames the current active sheet to the given new name.
       *
       *
       *     // The code below renames the active sheet to "Hello world"
       *     SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet("Hello world");
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#renameActiveSheet(String)
       * @param newName The new name for the current active sheet.
       */
      renameActiveSheet(newName: string): void;

      /**
       * Removes the applied theme and sets the default theme on the spreadsheet.
       *
       *
       *     // The code below applies default theme on the spreadsheet.
       *     SpreadsheetApp.resetSpreadsheetTheme();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#resetSpreadsheetTheme()
       */
      resetSpreadsheetTheme(): SpreadsheetTheme;

      /**
       * Sets the specified range as the active range in the active sheet, with
       * the top left cell in the range as the current cell.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var range = sheet.getRange('A1:D4');
       *     sheet.setActiveRange(range);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: A1
       *     var currentCell = selection.getCurrentCell();
       *     // Active Range: A1:D4
       *     var activeRange = selection.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveRange(Range)
       * @param range The range to set as the active range.
       */
      setActiveRange(range: Range): Range;

      /**
       * Sets the specified list of ranges as the active ranges in the
       * active sheet. The last range in the list is set as the active range.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSheet();
       *     var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
       *     sheet.setActiveRangeList(rangeList);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B2
       *     var currentCell = selection.getCurrentCell();
       *     // Active range: B2:C4
       *     var activeRange = selection.getActiveRange();
       *     // Active range list: [D4, B2:C4]
       *     var activeRangeList = selection.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveRangeList(RangeList)
       * @param rangeList The list of ranges to select.
       */
      setActiveRangeList(rangeList: RangeList): RangeList;

      /**
       * Sets the active selection region for this sheet.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     var range = sheet.getRange("A1:D4");
       *     sheet.setActiveSelection(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveSelection(Range)
       * @param range The range to set as the active selection.
       */
      setActiveSelection(range: Range): Range;

      /**
       * Sets the active selection, as specified in A1 notation or R1C1 notation.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     sheet.setActiveSelection("A1:D4");
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveSelection(String)
       * @param a1Notation The range to set as active, as specified in A1 notation or R1C1 notation.
       */
      setActiveSelection(a1Notation: string): Range;

      /**
       * Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays
       * the chosen sheet unless the sheet belongs to a different spreadsheet.
       *
       *
       *     // The code below makes the first sheet active in the active spreadsheet.
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *     spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveSheet(Sheet)
       * @param sheet The sheet to set as the active sheet.
       */
      setActiveSheet(sheet: Sheet): Sheet;

      /**
       * Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the
       * most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless
       * the sheet belongs to a different spreadsheet.
       *
       *
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *     var firstSheet = spreadsheet.getSheets()[0];
       *     var secondSheet = spreadsheet.getSheets()[1];
       *     // Set the first sheet as the active sheet and select the range D4:F4.
       *     spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();
       *
       *     // Switch to the second sheet to do some work.
       *     spreadsheet.setActiveSheet(secondSheet);
       *     // Switch back to first sheet, and restore its selection.
       *     spreadsheet.setActiveSheet(firstSheet, true);
       *
       *     // The selection of first sheet is restored, and it logs D4:F4
       *     var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
       *     Logger.log(range.getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveSheet(Sheet,Boolean)
       * @param sheet The new active sheet.
       * @param restoreSelection Tf true, the most recent selection of the new active sheet becomes selected again as the new sheet becomes active; if false, the new sheet becomes active without changing the current selection.
       */
      setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;

      /**
       * Sets the width of the given column in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first column to a width of 200 pixels
       *     sheet.setColumnWidth(1, 200);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setColumnWidth(Integer,Integer)
       * @param columnPosition The position of the given column to set.
       * @param width The width in pixels to set it to.
       */
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;

      /**
       * Sets the specified cell as the current cell.
       *
       *
       * If the specified cell is present in an already selected range, then that range becomes the
       * active range with the cell as the current cell.
       *
       *
       * If the specified cell is not present in any selected range, then any existing selection is
       * removed and the cell becomes the current cell and the active range.
       *
       *
       *
       * Note:The specified Range must consist of one cell, otherwise it throws an
       * exception.
       *
       *
       *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *     var cell = sheet.getRange('B5');
       *     sheet.setCurrentCell(cell);
       *
       *     var selection = sheet.getSelection();
       *     // Current cell: B5
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setCurrentCell(Range)
       * @param cell The cell to set as the current cell.
       */
      setCurrentCell(cell: Range): Range;

      /**
       * Freezes the given number of columns. If zero, no columns are frozen.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Freezes the first column
       *     sheet.setFrozenColumns(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setFrozenColumns(Integer)
       * @param columns The number of columns to freeze.
       */
      setFrozenColumns(columns: Integer): void;

      /**
       * Freezes the given number of rows. If zero, no rows are frozen.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Freezes the first row
       *     sheet.setFrozenRows(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setFrozenRows(Integer)
       * @param rows The number of rows to freeze.
       */
      setFrozenRows(rows: Integer): void;

      /**
       * Sets the minimum threshold value for iterative calculation. When the results of successive
       * calculation differ by less than this value, the iterative calculation stops. This value must be
       * non-negative, and defaults to 0.05.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setIterativeCalculationConvergenceThreshold(Number)
       * @param minThreshold The minimum convergence threshold (must be non-negative).
       */
      setIterativeCalculationConvergenceThreshold(minThreshold: number): Spreadsheet;

      /**
       * Sets whether iterative calculation is enabled in this spreadsheet. If the maximum number of
       * calculation cycles and convergence threshold have not previously been set when the calculation
       * is enabled, they default to 50 and 0.05 respectively. If either has been set previously, they
       * retain their previous values.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setIterativeCalculationEnabled(Boolean)
       * @param isEnabled true if iterative calculation should be enabled; false otherwise.
       */
      setIterativeCalculationEnabled(isEnabled: boolean): Spreadsheet;

      /**
       * Sets the maximum number of calculation iterations that should be performed during iterative
       * calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setMaxIterativeCalculationCycles(Integer)
       * @param maxIterations The maximum number of calculation iterations (between 1 and 10,000).
       */
      setMaxIterativeCalculationCycles(maxIterations: Integer): Spreadsheet;

      /**
       * Names a range.
       *
       *
       *     // The code below creates a new named range "TaxRates" in the active spreadsheet
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     ss.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setNamedRange(String,Range)
       * @param name The name to give the range.
       * @param range The range specification.
       */
      setNamedRange(name: string, range: Range): void;

      /**
       * Sets how often this spreadsheet should recalculate.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setRecalculationInterval(RecalculationInterval)
       * @param recalculationInterval The new recalculation interval.
       */
      setRecalculationInterval(recalculationInterval: RecalculationInterval): Spreadsheet;

      /**
       * Sets the row height of the given row in pixels.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sets the first row to a height of 200 pixels
       *     sheet.setRowHeight(1, 200);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setRowHeight(Integer,Integer)
       * @param rowPosition The row position to change.
       * @param height The height in pixels to set it to.
       */
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;

      /**
       * Sets the spreadsheet locale.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setSpreadsheetLocale(String)
       * @param locale The locale code to use (for example, 'en', 'fr', or 'en_US').
       */
      setSpreadsheetLocale(locale: string): void;

      /**
       * Sets a theme on the spreadsheet.
       *
       *
       *     // The code below sets the second predefined theme as the current theme of the spreadsheet.
       *     var predefinedThemesList = SpreadsheetApp.getPredefinedSpreadsheetThemes();
       *     SpreadsheetApp.setSpreadsheetTheme(predefinedThemesList[1]);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setSpreadsheetTheme(SpreadsheetTheme)
       * @param theme The theme to apply.
       */
      setSpreadsheetTheme(theme: SpreadsheetTheme): SpreadsheetTheme;

      /**
       * Sets the time zone for the spreadsheet.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setSpreadsheetTimeZone(String)
       * @param timezone The time zone, specified in "long" format (for example, "America/New_York", as listed by Joda.org).
       */
      setSpreadsheetTimeZone(timezone: string): void;

      /**
       * Displays a custom user interface component in a dialog centered in the user's browser's
       * viewport. The server-side script's execution is not suspended. To communicate with the
       * server side, the user interface component must make asynchronous callbacks to the server-side
       * script.
       *
       *
       * If the server-side script previously displayed a dialog that has not yet been dismissed,
       * then the existing dialog is replaced with the newly requested dialog's user interface.
       *
       *
       * The following code snippet displays a simple HtmlService application in a dialog with the
       * specified title, height, and width:
       *
       *
       *     var htmlApp = HtmlService
       *         .createHtmlOutput('<p>A change of speed, a change of style...</p>')
       *         .setTitle('My HtmlService Application')
       *         .setWidth(250)
       *         .setHeight(300);
       *
       *     SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);
       *
       *     // The script resumes execution immediately after showing the dialog.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#show(Object)
       * @param userInterface An HtmlOutput.
       */
      show(userInterface: object): void;

      /**
       * Sorts a sheet by column, ascending.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sorts the sheet by the first column, ascending
       *     sheet.sort(1);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#sort(Integer)
       * @param columnPosition The column to sort by.
       */
      sort(columnPosition: Integer): Sheet;

      /**
       * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // Sorts the sheet by the first column, descending
       *     sheet.sort(1, false);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#sort(Integer,Boolean)
       * @param columnPosition The column to sort by.
       * @param ascending true for ascending sorts, false for descending.
       */
      sort(columnPosition: Integer, ascending: boolean): Sheet;

      /**
       * Shows a popup window in the lower right corner of the spreadsheet with the given message.
       *
       *
       *     // Show a popup with the message "Task started".
       *     SpreadsheetApp.getActiveSpreadsheet().toast('Task started');
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String)
       * @param msg The message to be shown in the toast.
       */
      toast(msg: string): void;

      /**
       * Shows a popup window in the lower right corner of the spreadsheet with the given message and
       * title.
       *
       *
       *     // Show a popup with the title "Status" and the message "Task started".
       *     SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status');
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String,String)
       * @param msg The message to be shown in the toast.
       * @param title The optional title of the toast.
       */
      toast(msg: string, title: string): void;

      /**
       * Shows a popup window in the lower right corner of the spreadsheet with the given title and
       * message, that stays visible for a certain length of time.
       *
       *
       *     // Show a 3-second popup with the title "Status" and the message "Task started".
       *     SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status', 3);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String,String,Number)
       * @param msg The message to be shown in the toast.
       * @param title The optional title of the toast.
       * @param timeoutSeconds The timeout in seconds; if null, the toast defaults to 5 seconds; if negative, the toast remains until dismissed.
       */
      toast(msg: string, title: string, timeoutSeconds: number): void;

      /**
       * Unhides the column in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This unhides the first column if it was previously hidden
       *     var range = sheet.getRange("A1");
       *     sheet.unhideColumn(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#unhideColumn(Range)
       * @param column The range to unhide, if hidden.
       */
      unhideColumn(column: Range): void;

      /**
       * Unhides the row in the given range.
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var sheet = ss.getSheets()[0];
       *
       *     // This unhides the first row if it was previously hidden
       *     var range = sheet.getRange("A1");
       *     sheet.unhideRow(range);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#unhideRow(Range)
       * @param row The range to unhide, if hidden.
       */
      unhideRow(row: Range): void;

      /**
       * Updates a menu that was added by addMenu(name, subMenus). Works exactly like addMenu(name, subMenus).
       *
       *
       *     var ss = SpreadsheetApp.getActiveSpreadsheet();
       *     var menuEntries = [];
       *     menuEntries.push({name: "Lone Menu Entry", functionName: "function1"});
       *     ss.updateMenu("addMenuExample", menuEntries);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#updateMenu(String,Object)
       * @param name The name of the menu to update.
       * @param subMenus An array of JavaScript maps with name and functionName parameters. You can use functions from included libraries, such as  Library.libFunction1.
       */
      updateMenu(name: string, subMenus: object[]): void;
      /** @deprecated DO NOT USE */ getSheetProtection(): PageProtection;
      /** @deprecated DO NOT USE */ isAnonymousView(): boolean;
      /** @deprecated DO NOT USE */ isAnonymousWrite(): boolean;
      /** @deprecated DO NOT USE */ setAnonymousAccess(anonymousReadAllowed: boolean, anonymousWriteAllowed: boolean): void;
      /** @deprecated DO NOT USE */ setSheetProtection(permissions: PageProtection): void;
    }
    /**
     * Access and create Google Sheets files. This class is the parent class for the Spreadsheet service.
     */
    interface SpreadsheetApp {
      AutoFillSeries: typeof AutoFillSeries;
      BandingTheme: typeof BandingTheme;
      BooleanCriteria: typeof BooleanCriteria;
      BorderStyle: typeof BorderStyle;
      ColorType: typeof Base.ColorType;
      CopyPasteType: typeof CopyPasteType;
      DataExecutionErrorCode: typeof DataExecutionErrorCode;
      DataExecutionState: typeof DataExecutionState;
      DataSourceParameterType: typeof DataSourceParameterType;
      DataSourceType: typeof DataSourceType;
      DataValidationCriteria: typeof DataValidationCriteria;
      DeveloperMetadataLocationType: typeof DeveloperMetadataLocationType;
      DeveloperMetadataVisibility: typeof DeveloperMetadataVisibility;
      Dimension: typeof Dimension;
      Direction: typeof Direction;
      GroupControlTogglePosition: typeof GroupControlTogglePosition;
      InterpolationType: typeof InterpolationType;
      PivotTableSummarizeFunction: typeof PivotTableSummarizeFunction;
      PivotValueDisplayType: typeof PivotValueDisplayType;
      ProtectionType: typeof ProtectionType;
      RecalculationInterval: typeof RecalculationInterval;
      RelativeDate: typeof RelativeDate;
      SheetType: typeof SheetType;
      TextDirection: typeof TextDirection;
      TextToColumnsDelimiter: typeof TextToColumnsDelimiter;
      ThemeColorType: typeof ThemeColorType;
      WrapStrategy: typeof WrapStrategy;

      /**
       * Creates a new spreadsheet with the given name.
       *
       *
       *     // The code below creates a new spreadsheet "Finances" and logs the URL for it
       *     var ssNew = SpreadsheetApp.create("Finances");
       *     Logger.log(ssNew.getUrl());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#create(String)
       * @param name The name for the spreadsheet.
       */
      create(name: string): Spreadsheet;

      /**
       * Creates a new spreadsheet with the given name and the specified number of rows and columns.
       *
       *
       *     // The code below creates a new spreadsheet "Finances" with 50 rows and 5 columns and logs the
       *     // URL for it
       *     var ssNew = SpreadsheetApp.create("Finances", 50, 5);
       *     Logger.log(ssNew.getUrl());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#create(String,Integer,Integer)
       * @param name The name for the spreadsheet.
       * @param rows The number of rows for the spreadsheet.
       * @param columns The number of columns for the spreadsheet.
       */
      create(name: string, rows: Integer, columns: Integer): Spreadsheet;

      /**
       * Enables data execution for all types of data sources.
       *
       *
       * Data execution throws an exception if the data source type is not enabled. Use this method
       * to enable data execution for all data source types.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#enableAllDataSourcesExecution()
       */
      enableAllDataSourcesExecution(): void;

      /**
       * Enables data execution for BigQuery data source.
       *
       *
       * Data execution for BigQuery data source throws an expection if not enabled.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#enableBigQueryExecution()
       */
      enableBigQueryExecution(): void;

      /**
       * Applies all pending Spreadsheet changes.
       *
       *
       * Spreadsheet operations are sometimes bundled together to improve performance, such as when
       * doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all
       * pending changes are made right away, for instance to show users data as a script is executing.
       *
       *
       *     // The code below changes the background color of cells A1 and B1 twenty times. You should be
       *     // able to see the updates live in the spreadsheet. If flush() is not called, the updates may
       *     // be applied live or may all be applied at once when the script completes.
       *     function colors() {
       *       var sheet = SpreadsheetApp.getActiveSheet();
       *       for (var i = 0; i < 20; i++) {
       *         if ((i % 2) == 0) {
       *           sheet.getRange('A1').setBackground('green');
       *           sheet.getRange('B1').setBackground('red');
       *         } else {
       *           sheet.getRange('A1').setBackground('red');
       *           sheet.getRange('B1').setBackground('green');
       *         }
       *         SpreadsheetApp.flush();
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#flush()
       */
      flush(): void;

      /**
       * Returns the currently active spreadsheet, or null if there is none.
       *
       *
       * Functions that are run in the context of a spreadsheet can get a reference to the
       * corresponding Spreadsheet object by calling this function.
       *
       *
       *     // The code below logs the URL for the active spreadsheet.
       *     Logger.log(SpreadsheetApp.getActive().getUrl());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActive()
       */
      getActive(): Spreadsheet;

      /**
       * Returns the selected range in the active sheet, or null if there is no active range. If
       * multiple ranges are selected this method returns only the last selected range.
       *
       *
       * This generally means the range that a user has selected in the active sheet, but in a custom
       * function it refers to the cell being actively recalculated.
       *
       *
       *     // The code below logs the background color for the active range.
       *     var color = SpreadsheetApp.getActiveRange().getBackgroundColor();
       *     Logger.log(color);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveRange()
       */
      getActiveRange(): Range;

      /**
       * Returns the list of active ranges in the active sheet or null if there are no ranges
       * selected. The active range containing the current highlighted cell is placed last in the list.
       *
       *
       * If there is a single range selected, this behaves as a getActiveRange() call.
       *
       *
       *     // Returns the list of active ranges.
       *     var rangeList = SpreadsheetApp.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveRangeList()
       */
      getActiveRangeList(): RangeList;

      /**
       * Gets the active sheet in a spreadsheet.
       *
       *
       * The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
       * UI.
       *
       *
       *     // The code below logs the name of the active sheet.
       *     Logger.log(SpreadsheetApp.getActiveSheet().getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSheet()
       */
      getActiveSheet(): Sheet;

      /**
       * Returns the currently active spreadsheet, or null if there is none.
       *
       *
       * Functions that are run in the context of a spreadsheet can get a reference to the
       * corresponding Spreadsheet object by calling this function.
       *
       *
       *     // The code below logs the URL for the active spreadsheet.
       *     Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSpreadsheet()
       */
      getActiveSpreadsheet(): Spreadsheet;

      /**
       * Returns the current (highlighted) cell that is selected in one of the active ranges in the
       * active sheet or null if there is no current cell.
       *
       *
       *     // Returns the current highlighted cell in the one of the active ranges.
       *     var currentCell = SpreadsheetApp.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getCurrentCell()
       */
      getCurrentCell(): Range;

      /**
       * Returns the current Selection in the spreadsheet.
       *
       *
       *     var selection = SpreadsheetApp.getSelection();
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getSelection()
       */
      getSelection(): Selection;

      /**
       * Returns an instance of the spreadsheet's user-interface environment that allows the script to
       * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
       * current instance of an open spreadsheet, and only if the script is bound to the spreadsheet. For more information, see
       * the guides to menus and dialogs and sidebars.
       *
       *
       *     // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
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
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Creates a builder for a Color.
       *
       *
       *     var rgbColor = SpreadsheetApp.newColor().setRgbColor("#FF0000").build();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newColor()
       */
      newColor(): ColorBuilder;

      /**
       * Creates a builder for a conditional formatting rule.
       *
       *
       *     // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
       *     // if they contain a number between 1 and 10.
       *     var sheet = SpreadsheetApp.getActive().getActiveSheet();
       *     var range = sheet.getRange('A1:B3');
       *     var rule = SpreadsheetApp.newConditionalFormatRule()
       *         .whenNumberBetween(1, 10)
       *         .setBackgroundColor("#FF0000")
       *         .setRanges([range])
       *         .build()
       *     var rules = sheet.getConditionalFormatRules();
       *     rules.push(rule);
       *     sheet.setConditionalFormatRules(rules);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newConditionalFormatRule()
       */
      newConditionalFormatRule(): ConditionalFormatRuleBuilder;

      /**
       * Creates a builder for a DataSourceSpec.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newDataSourceSpec()
       */
      newDataSourceSpec(): DataSourceSpecBuilder;

      /**
       * Creates a builder for a data validation rule.
       *
       *
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var rule = SpreadsheetApp.newDataValidation()
       *         .requireNumberBetween(1, 100)
       *         .setAllowInvalid(false)
       *         .setHelpText('Number must be between 1 and 100.')
       *         .build();
       *     cell.setDataValidation(rule);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newDataValidation()
       */
      newDataValidation(): DataValidationBuilder;

      /**
       * Creates a builder for a FilterCriteria.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newFilterCriteria()
       */
      newFilterCriteria(): FilterCriteriaBuilder;

      /**
       * Creates a builder for a Rich Text value.
       *
       *
       *     // Sets cell A1 to have the text "Hello world", with "Hello" bolded.
       *     var cell = SpreadsheetApp.getActive().getRange('A1');
       *     var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
       *     var value = SpreadsheetApp.newRichTextValue()
       *         .setText("Hello world")
       *         .setTextStyle(0, 5, bold)
       *         .build();
       *     cell.setRichTextValue(value);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newRichTextValue()
       */
      newRichTextValue(): RichTextValueBuilder;

      /**
       * Creates a builder for a text style.
       *
       *
       *     // Sets range A1:B3 to have red, size 22, bolded, underlined text.
       *     var range = SpreadsheetApp.getActive().getRange('A1:B3');
       *     var style = SpreadsheetApp.newTextStyle()
       *         .setForegroundColor("red")
       *         .setFontSize(22)
       *         .setBold(true)
       *         .setUnderline(true)
       *         .build();
       *     range.setTextStyle(style);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newTextStyle()
       */
      newTextStyle(): TextStyleBuilder;

      /**
       * Opens the spreadsheet that corresponds to the given File object.
       *
       *
       *     // Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name
       *     // of the first sheet within each spreadsheet.
       *     var files = DriveApp.searchFiles(
       *         'starred = true and mimeType = "' + MimeType.GOOGLE_SHEETS + '"');
       *     while (files.hasNext()) {
       *       var spreadsheet = SpreadsheetApp.open(files.next());
       *       var sheet = spreadsheet.getSheets()[0];
       *       Logger.log(sheet.getName());
       *     }
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#open(File)
       * @param file The file to open.
       */
      open(file: Drive.File): Spreadsheet;

      /**
       * Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For
       * example, the spreadsheet ID in the URL https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".
       *
       *
       *     // The code below opens a spreadsheet using its ID and logs the name for it.
       *     // Note that the spreadsheet is NOT physically opened on the client side.
       *     // It is opened on the server only (for modification by the script).
       *     var ss = SpreadsheetApp.openById("abc1234567");
       *     Logger.log(ss.getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openById(String)
       * @param id The unique identifier for the spreadsheet.
       */
      openById(id: string): Spreadsheet;

      /**
       * Opens the spreadsheet with the given URL.
       *
       *
       *     // The code below opens a spreadsheet using its id and logs the name for it.
       *     // Note that the spreadsheet is NOT physically opened on the client side.
       *     // It is opened on the server only (for modification by the script).
       *     var ss = SpreadsheetApp.openByUrl(
       *         'https://docs.google.com/spreadsheets/d/abc1234567/edit');
       *     Logger.log(ss.getName());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openByUrl(String)
       * @param url The URL for the spreadsheet.
       */
      openByUrl(url: string): Spreadsheet;

      /**
       * Sets the specified range as the active range, with the top
       * left cell in the range as the current cell.
       *
       *
       * The spreadsheet UI displays the sheet that contains the chosen range and selects the cells
       * defined in the chosen range.
       *
       *
       *     // The code below sets range C1:D4 in the first sheet as the active range.
       *     var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('C1:D4');
       *     SpreadsheetApp.setActiveRange(range);
       *
       *     var selection = SpreadsheetApp.getSelection();
       *     // Current cell: C1
       *     var currentCell = selection.getCurrentCell();
       *     // Active Range: C1:D4
       *     var activeRange = selection.getActiveRange();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveRange(Range)
       * @param range The range to be made the active range.
       */
      setActiveRange(range: Range): Range;

      /**
       * Sets the specified list of ranges as the active ranges. The last
       * range in the list is set as the active range.
       *
       *
       *     // The code below sets ranges [D4, B2:C4] in the active sheet as the active ranges.
       *     var rangeList = SpreadsheetApp.getActiveSheet().getRanges(['D4', 'B2:C4']);
       *     SpreadsheetApp.setActiveRangeList(rangeList);
       *
       *     var selection = SpreadsheetApp.getSelection();
       *     // Current cell: B2
       *     var currentCell = selection.getCurrentCell();
       *     // Active range: B2:C4
       *     var activeRange = selection.getActiveRange();
       *     // Active range list: [D4, B2:C4]
       *     var activeRangeList = selection.getActiveRangeList();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveRangeList(RangeList)
       * @param rangeList The list of ranges to select.
       */
      setActiveRangeList(rangeList: RangeList): RangeList;

      /**
       * Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless
       * the sheet belongs to a different spreadsheet.
       *
       *
       *     // The code below makes the 2nd sheet active in the active spreadsheet.
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *     SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSheet(Sheet)
       * @param sheet The new active sheet.
       */
      setActiveSheet(sheet: Sheet): Sheet;

      /**
       * Sets the active sheet in a spreadsheet, with the option to restore the most recent selection
       * within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a
       * different spreadsheet.
       *
       *
       *     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *     var firstSheet = spreadsheet.getSheets()[0];
       *     var secondSheet = spreadsheet.getSheets()[1];
       *     // Set the first sheet as the active sheet and select the range D4:F4.
       *     spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();
       *
       *     // Switch to the second sheet to do some work.
       *     spreadsheet.setActiveSheet(secondSheet);
       *     // Switch back to first sheet, and restore its selection.
       *     spreadsheet.setActiveSheet(firstSheet, true);
       *
       *     // The selection of first sheet is restored, and it logs D4:F4
       *     var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
       *     Logger.log(range.getA1Notation());
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSheet(Sheet,Boolean)
       * @param sheet The new active sheet.
       * @param restoreSelection If true, the most recent selection of the new active sheet becomes selected again as the new sheet becomes active; if false, the new sheet becomes active without changing the current selection.
       */
      setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;

      /**
       * Sets the active spreadsheet.
       *
       *
       *     // The code below makes the spreadsheet with key "1234567890" the active spreadsheet
       *     var ss = SpreadsheetApp.openById("1234567890");
       *     SpreadsheetApp.setActiveSpreadsheet(ss);
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSpreadsheet(Spreadsheet)
       * @param newActiveSpreadsheet The Spreadsheet to be made the active spreadsheet.
       */
      setActiveSpreadsheet(newActiveSpreadsheet: Spreadsheet): void;

      /**
       * Sets the specified cell as the current cell.
       *
       *
       * If the specified cell is present in an already selected range, then that range becomes the
       * active range with the cell as the current cell.
       *
       *
       * If the specified cell is not present in any selected range, then the existing selection is
       * removed and the cell becomes the current cell and the active range.
       *
       *
       *
       * Note:The specified Range must consist of one cell, otherwise this method
       * throws an exception.
       *
       *
       *     // The code below sets the cell B5 in the first sheet as the current cell.
       *     var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('B5');
       *     SpreadsheetApp.setCurrentCell(cell);
       *
       *     var selection = SpreadsheetApp.getSelection();
       *     // Current cell: B5
       *     var currentCell = selection.getCurrentCell();
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setCurrentCell(Range)
       * @param cell The cell to set as the current cell.
       */
      setCurrentCell(cell: Range): Range;
    }
    /**
     * Access and modify existing themes. To set a theme on a spreadsheet, use Spreadsheet.setSpreadsheetTheme(theme).
     */
    interface SpreadsheetTheme {

      /**
       * Returns the concrete Color for a valid theme color type. Throws exception if the theme
       * color type is not set in the current theme.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#getConcreteColor(ThemeColorType)
       * @param themeColorType Theme color type.
       */
      getConcreteColor(themeColorType: ThemeColorType): Color;

      /**
       * Returns the font family of the theme, or null if it's a null theme.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Returns a list of all possible theme color types for the current theme.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#getThemeColors()
       */
      getThemeColors(): ThemeColorType[];

      /**
       * Sets the concrete color associated with the ThemeColorType in this color scheme to the
       * given color.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#setConcreteColor(ThemeColorType,Color)
       * @param themeColorType The theme color type.
       * @param color The color.
       */
      setConcreteColor(themeColorType: ThemeColorType, color: Color): SpreadsheetTheme;

      /**
       * Sets the concrete color associated with the ThemeColorType in this color scheme to the
       * given color in RGB format.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#setConcreteColor(ThemeColorType,Integer,Integer,Integer)
       * @param themeColorType The theme color type.
       * @param red The value of red channel.
       * @param green The value of green channel.
       * @param blue The value of blue channel.
       */
      setConcreteColor(themeColorType: ThemeColorType, red: Integer, green: Integer, blue: Integer): SpreadsheetTheme;

      /**
       * Sets the font family for the theme.
       * https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme#setFontFamily(String)
       * @param fontFamily The new theme font family.
       */
      setFontFamily(fontFamily: string): SpreadsheetTheme;
    }
    /**
     * An enumerations of text directions.
     */
    enum TextDirection { LEFT_TO_RIGHT, RIGHT_TO_LEFT }
    /**
     * Find or replace text within a range, sheet or spreadsheet. Can also specify search options.
     */
    interface TextFinder {

      /**
       * Returns all cells matching the search criteria.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#findAll()
       */
      findAll(): Range[];

      /**
       * Returns the next cell matching the search criteria.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#findNext()
       */
      findNext(): Range;

      /**
       * Returns the previous cell matching the search criteria.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#findPrevious()
       */
      findPrevious(): Range;

      /**
       * Returns the current cell matching the search criteria.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#getCurrentMatch()
       */
      getCurrentMatch(): Range;

      /**
       * If true, configures the search to ignore diacritics while matching; otherwise the
       * search matches diacritics. A diacritic is a sign, such as an accent or cedilla, which when
       * written above or below a letter indicates a difference in pronunciation from the same letter
       * when unmarked or differently marked.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#ignoreDiacritics(Boolean)
       * @param ignoreDiacritics Whether the search considers diacritics.
       */
      ignoreDiacritics(ignoreDiacritics: boolean): TextFinder;

      /**
       * If true, configures the search to match the search text's case exactly, otherwise the
       * search defaults to case-insensitive matching.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#matchCase(Boolean)
       * @param matchCase Whether the matching is case-sensitive.
       */
      matchCase(matchCase: boolean): TextFinder;

      /**
       * If true, configures the search to match the entire contents of a cell; otherwise, the
       * search defaults to partial matching.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#matchEntireCell(Boolean)
       * @param matchEntireCell Whether the entire cell is matched.
       */
      matchEntireCell(matchEntireCell: boolean): TextFinder;

      /**
       * If true, configures the search to return matches that appear within formula text;
       * otherwise cells with formulas are considered based on their displayed value.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#matchFormulaText(Boolean)
       * @param matchFormulaText Whether the search examines formula text.
       */
      matchFormulaText(matchFormulaText: boolean): TextFinder;

      /**
       * Replaces all matches with the specified text. Returns the number of occurrences replaced, which
       * may be different from the number of matched cells.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#replaceAllWith(String)
       * @param replaceText The text that replaces the text in the matched cells.
       */
      replaceAllWith(replaceText: string): Integer;

      /**
       * Replaces the search text in the currently matched cell with the specified text and returns the
       * number of occurrences replaced.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#replaceWith(String)
       * @param replaceText The text that replaces the content in the currently matched cell.
       */
      replaceWith(replaceText: string): Integer;

      /**
       * Configures the search to start searching immediately after the specified cell range.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#startFrom(Range)
       * @param startRange The cell range after which the search should start.
       */
      startFrom(startRange: Range): TextFinder;

      /**
       * If true, configures the search to interpret the search string as a regular expression;
       * otherwise the search interprets the search string as normal text. For more details on how to
       * use regular expressions, refer to the
       * Find and replace support page.
       *
       * https://developers.google.com/apps-script/reference/spreadsheet/text-finder#useRegularExpression(Boolean)
       * @param useRegEx Whether to interpret the search string as a regular expression.
       */
      useRegularExpression(useRegEx: boolean): TextFinder;
    }
    /**
     * Access the text rotation settings for a cell.
     */
    interface TextRotation {

      /**
       * Gets the angle between standard text orientation and the current text orientation. For
       * left-to-right text, positive angles are in the counterclockwise direction. If the text is set
       * to stack vertically, this method returns 0.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-rotation#getDegrees()
       */
      getDegrees(): Integer;

      /**
       * Returns true if the text is stacked vertically; returns false otherwise.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-rotation#isVertical()
       */
      isVertical(): boolean;
    }
    /**
     * The rendered style of text in a cell.
     *
     * Text styles can have a corresponding RichTextValue. If the RichTextValue spans multiple text runs that have different values for a given text style read
     * method, the method returns null. To avoid this, query for text styles using the Rich Text
     * values returned by the RichTextValue.getRuns() method.
     */
    interface TextStyle {

      /**
       * Creates a text style builder initialized with the values of this text style.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#copy()
       */
      copy(): TextStyleBuilder;

      /**
       * Gets the font family of the text. Returns null if the font family isn't set or the
       * corresponding RichTextValue has multiple runs with different font
       * families.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Gets the font size of the text in points. Returns null if the font size isn't set or
       * the corresponding RichTextValue has multiple runs with different font
       * sizes.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#getFontSize()
       */
      getFontSize(): Integer;

      /**
       * Gets the font color of the text. Returns null if the font color isn't set or the
       * corresponding RichTextValue has multiple runs with different font
       * colors.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#getForegroundColor()
       */
      getForegroundColor(): string;

      /**
       * Gets whether or not the text is bold. Returns null if bold isn't set or the
       * corresponding RichTextValue has multiple runs with different bold
       * settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#isBold()
       */
      isBold(): boolean;

      /**
       * Gets whether or not the cell is italic. Returns null if italic isn't set or the
       * corresponding RichTextValue has multiple runs with different italic
       * settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#isItalic()
       */
      isItalic(): boolean;

      /**
       * Gets whether or not the cell has strikethrough. Returns null if strikethrough isn't set
       * or the corresponding RichTextValue has multiple runs with different
       * strikethrough settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#isStrikethrough()
       */
      isStrikethrough(): boolean;

      /**
       * Gets whether or not the cell is underlined. Returns null if underline isn't set or the
       * corresponding RichTextValue has multiple runs with different underline
       * settings.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style#isUnderline()
       */
      isUnderline(): boolean;
    }
    /**
     * A builder for text styles.
     */
    interface TextStyleBuilder {

      /**
       * Creates a text style from this builder.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#build()
       */
      build(): TextStyle;

      /**
       * Sets whether or not the text is bold.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setBold(Boolean)
       * @param bold Whether or not the text is bold.
       */
      setBold(bold: boolean): TextStyleBuilder;

      /**
       * Sets the text font family, such as "Arial".
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setFontFamily(String)
       * @param fontFamily The desired font family.
       */
      setFontFamily(fontFamily: string): TextStyleBuilder;

      /**
       * Sets the text font size in points.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setFontSize(Integer)
       * @param fontSize The desired font size.
       */
      setFontSize(fontSize: Integer): TextStyleBuilder;

      /**
       * Sets the text font color.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setForegroundColor(String)
       * @param cssString The desired font color in CSS notation (such as '#ffffff' or 'white').
       */
      setForegroundColor(cssString: string): TextStyleBuilder;

      /**
       * Sets whether or not the text is italic.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setItalic(Boolean)
       * @param italic Whether or not the text is italic.
       */
      setItalic(italic: boolean): TextStyleBuilder;

      /**
       * Sets whether or not the text has strikethrough.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setStrikethrough(Boolean)
       * @param strikethrough Whether or not the text has strikethrough.
       */
      setStrikethrough(strikethrough: boolean): TextStyleBuilder;

      /**
       * Sets whether or not the text is underlined.
       * https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder#setUnderline(Boolean)
       * @param underline Whether or not the text is underlined.
       */
      setUnderline(underline: boolean): TextStyleBuilder;
    }
    /**
     * An enumeration of the types of preset delimiters that can split a column of text into multiple
     * columns.
     */
    enum TextToColumnsDelimiter { COMMA, SEMICOLON, PERIOD, SPACE }
    /**
     * A representation for a theme color.
     */
    interface ThemeColor {

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/spreadsheet/theme-color#getColorType()
       */
      getColorType(): Base.ColorType;

      /**
       * Gets the theme color type of this color.
       * https://developers.google.com/apps-script/reference/spreadsheet/theme-color#getThemeColorType()
       */
      getThemeColorType(): ThemeColorType;
    }
    /**
     * An enum which describes various color entries supported in themes.
     */
    enum ThemeColorType { UNSUPPORTED, TEXT, BACKGROUND, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK }
    /**
     * An enumeration of the strategies used to handle cell text wrapping.
     */
    enum WrapStrategy { WRAP, OVERFLOW, CLIP }
  }
}

declare var SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
