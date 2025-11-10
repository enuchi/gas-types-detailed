// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Data_Studio {
    /**
     * An enum that defines the aggregation types that can be set for a Field.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DataStudioApp.AggregationType.AVG.
     */
    enum AggregationType { AVG, COUNT, COUNT_DISTINCT, MAX, MIN, SUM, AUTO, NO_AGGREGATION }
    /**
     * An enum that defines the authentication types that can be set for a connector.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DataStudioApp.AuthType.OAUTH2.
     */
    enum AuthType { NONE, OAUTH2, USER_PASS, PATH_USER_PASS, PATH_KEY, KEY, USER_TOKEN }
    /**
     * A configuration object for a native BigQuery connector. Return this object from getData()
     * for Data Studio to query BigQuery for the connector.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *
     *     const bqConfig =
     *         cc.newBigQueryConfig()
     *             .setBillingProjectId('billingProjectId')
     *             .setQuery('queryString')
     *             .setUseStandardSql(true)
     *             .setAccessToken('accessToken')
     *             .addQueryParameter('dob', cc.BigQueryParameterType.STRING, '01011990')
     *             .build();
     */
    interface BigQueryConfig {

      /**
       * Adds a query parameter to this BigQueryConfig.
       *
       * Return:
       * - BigQueryConfig — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#addQueryParameter(String,BigQueryParameterType,String)
       * @param name The parameter name.
       * @param type The parameter type.
       * @param value The parameter value.
       */
      addQueryParameter(name: string, type: BigQueryParameterType, value: string): BigQueryConfig;

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated Config object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#build()
       */
      build(): any;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#printJson()
       */
      printJson(): string;

      /**
       * Sets the access token of this BigQueryConfig.
       *
       * Return:
       * - BigQueryConfig — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#setAccessToken(String)
       * @param accessToken The access token to set.
       */
      setAccessToken(accessToken: string): BigQueryConfig;

      /**
       * Sets the billing project ID of this BigQueryConfig.
       *
       * Return:
       * - BigQueryConfig — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#setBillingProjectId(String)
       * @param billingProjectId The billing project ID to set.
       */
      setBillingProjectId(billingProjectId: string): BigQueryConfig;

      /**
       * Sets the SQL query of this BigQueryConfig.
       *
       * Return:
       * - BigQueryConfig — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#setQuery(String)
       * @param query The query to set.
       */
      setQuery(query: string): BigQueryConfig;

      /**
       * Determines if the query is interpreted as standard or legacy SQL.
       *
       * Return:
       * - BigQueryConfig — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/big-query-config#setUseStandardSql(Boolean)
       * @param useStandardSql If true, the query is interpreted as standard SQL. If false, the query is interpreted as legacy SQL.
       */
      setUseStandardSql(useStandardSql: boolean): BigQueryConfig;
    }
    /**
     * An enum that defines the BigQuery parameter types that you can set.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DataStudioApp.BigQueryParameterType.STRING.
     */
    enum BigQueryParameterType { STRING, INT64, BOOL, FLOAT64 }
    /**
     * Contains checkbox information for the config. Its properties determine how the checkbox is
     * displayed in Data Studio.
     *
     *     const config = DataStudioApp.createCommunityConnector().getConfig();
     *     const checkbox = config.newCheckbox()
     *                          .setId('use_https')
     *                          .setName('Use Https?')
     *                          .setHelpText('Whether or not https should be used.')
     *                          .setAllowOverride(true);
     */
    interface Checkbox {

      /**
       * Enables overriding for this config entry. If set to true, data source creators have the option to enable this for report editors.
       *
       * Return:
       * - Checkbox — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/checkbox#setAllowOverride(Boolean)
       * @param allowOverride Whether or not this config entry can be overridden in reports.
       */
      setAllowOverride(allowOverride: boolean): Checkbox;

      /**
       * Sets the help text for this configuration entry.
       *
       * Return:
       * - Checkbox — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/checkbox#setHelpText(String)
       * @param helpText The helpText to set.
       */
      setHelpText(helpText: string): Checkbox;

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - Checkbox — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/checkbox#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): Checkbox;

      /**
       * Sets the dynamic status for this configuration entry.
       * If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
       *
       * Return:
       * - Checkbox — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/checkbox#setIsDynamic(Boolean)
       * @param isDynamic The dynamic status to set.
       */
      setIsDynamic(isDynamic: boolean): Checkbox;

      /**
       * Sets the display name for this configuration entry.
       *
       * Return:
       * - Checkbox — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/checkbox#setName(String)
       * @param name The name to set.
       */
      setName(name: string): Checkbox;
    }
    /**
     * CommunityConnector enables scripts to access builders and utilities to help with development of
     * Community Connectors for Data Studio. Use this class to get a reference to the Fields
     * object and the FieldType and AggregationType enums so they can be used in the
     * construction of Fields.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *
     *     const fields = cc.getFields();
     *
     *     fields.newMetric()
     *         .setAggregation(cc.AggregationType.AVG)
     *         .setType(cc.FieldType.CURRENCY_USD);
     */
    interface CommunityConnector {
      AggregationType: typeof AggregationType;
      AuthType: typeof AuthType;
      BigQueryParameterType: typeof BigQueryParameterType;
      FieldType: typeof FieldType;

      /**
       * Returns a Config object. Use this object to add configuration entries.
       *
       * Return:
       * - Config — A Config object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#getConfig()
       */
      getConfig(): Config;

      /**
       * Returns a Fields object. Use this object to add metric and dimension Fields.
       *
       * Return:
       * - Fields — A Fields object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#getFields()
       */
      getFields(): Fields;

      /**
       * Returns a new GetAuthTypeResponse object. Use this object to create a response for the getAuthType() function you implement in your script project.
       *
       * Return:
       * - GetAuthTypeResponse — A new GetAuthTypeResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newAuthTypeResponse()
       */
      newAuthTypeResponse(): GetAuthTypeResponse;

      /**
       * Returns a new BigQueryConfig object. Use this object to create a response for the getData() function you implement in your script project.
       *
       * Return:
       * - BigQueryConfig — A new BigQueryConfig object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newBigQueryConfig()
       */
      newBigQueryConfig(): BigQueryConfig;

      /**
       * Returns a new DebugError object. Use this object to create debug errors.
       *
       * Return:
       * - DebugError — A new DebugError object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newDebugError()
       */
      newDebugError(): DebugError;

      /**
       * Returns a new GetDataResponse object. Use this object to create a response for the getData() function you implement in your script project.
       *
       * Return:
       * - GetDataResponse — A new GetDataResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newGetDataResponse()
       */
      newGetDataResponse(): GetDataResponse;

      /**
       * Returns a new GetSchemaResponse object. Use this object to create a response for the getSchema() function you implement in your script project.
       *
       * Return:
       * - GetSchemaResponse — A new GetSchemaResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newGetSchemaResponse()
       */
      newGetSchemaResponse(): GetSchemaResponse;

      /**
       * Returns a new SetCredentialsResponse object. Use this object to create a response for the setCredentials() function you implement in your script project.
       *
       * Return:
       * - SetCredentialsResponse — A new SetCredentialsResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newSetCredentialsResponse()
       */
      newSetCredentialsResponse(): SetCredentialsResponse;

      /**
       * Returns a new UserError object. Use this object to create user errors.
       *
       * Return:
       * - UserError — A new UserError object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/community-connector#newUserError()
       */
      newUserError(): UserError;
    }
    /**
     * Contains the configuration entries for a connector. These configuration entries define what
     * questions are asked when adding a new connector.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *
     *     const info_entry = config.newInfo().setId('info_id').setHelpText(
     *         'This connector can connect to multiple data endpoints.');
     */
    interface Config {

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated Config object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#build()
       */
      build(): any;

      /**
       * Returns a new checkbox configuration entry.
       *
       * Return:
       * - Checkbox — A new checkbox configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newCheckbox()
       */
      newCheckbox(): Checkbox;

      /**
       * Returns a new info configuration entry.
       *
       * Return:
       * - Info — A new info configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newInfo()
       */
      newInfo(): Info;

      /**
       * Returns a new options builder.
       *
       * Return:
       * - OptionBuilder — A new options builder.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newOptionBuilder()
       */
      newOptionBuilder(): OptionBuilder;

      /**
       * Returns a new select multiple configuration entry.
       *
       * Return:
       * - SelectMultiple — A new select multiple configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newSelectMultiple()
       */
      newSelectMultiple(): SelectMultiple;

      /**
       * Returns a new select single configuration entry.
       *
       * Return:
       * - SelectSingle — A new select single configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newSelectSingle()
       */
      newSelectSingle(): SelectSingle;

      /**
       * Returns a new text area configuration entry.
       *
       * Return:
       * - TextArea — A new text area configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newTextArea()
       */
      newTextArea(): TextArea;

      /**
       * Returns a new text input configuration entry.
       *
       * Return:
       * - TextInput — A new text input configuration entry.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#newTextInput()
       */
      newTextInput(): TextInput;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#printJson()
       */
      printJson(): string;

      /**
       * If true, a date range is provided for getData() requests.
       *
       * Return:
       * - Config — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#setDateRangeRequired(Boolean)
       * @param dateRangeRequired Whether or not a date range should be provided to getData() requests.
       */
      setDateRangeRequired(dateRangeRequired: boolean): Config;

      /**
       * If true, getConfig() is called again with the current user configuration.
       *
       * Return:
       * - Config — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/config#setIsSteppedConfig(Boolean)
       * @param isSteppedConfig The stepped config status to set.
       */
      setIsSteppedConfig(isSteppedConfig: boolean): Config;
    }
    /**
     * DataStudioApp allows scripts to interact with developer-oriented features for Data Studio.
     */
    interface DataStudioApp {

      /**
       * Creates a new Community Connector.
       *
       * Return:
       * - CommunityConnector — A new CommunityConnector object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/data-studio-app#createCommunityConnector()
       */
      createCommunityConnector(): CommunityConnector;
    }
    /**
     * An error that is only visible to admins of the connector.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *
     *     cc.newDebugError().setText('This is the debug error text.').throwException();
     */
    interface DebugError {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/debug-error#printJson()
       */
      printJson(): string;

      /**
       * Sets the text of the debug error, which is only shown to admins.
       *
       * Return:
       * - DebugError — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/debug-error#setText(String)
       * @param text The error text.
       */
      setText(text: string): DebugError;

      /**
       * Triggers this exception to be thrown.
       *
       * https://developers.google.com/apps-script/reference/data-studio/debug-error#throwException()
       */
      throwException(): void;
    }
    /**
     * Contains field-related data. Its properties determine how the field is used in Data Studio.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const fields = cc.getFields();
     *
     *     const field1 = fields.newDimension()
     *                        .setId('field1_id')
     *                        .setName('Field 1 ID')
     *                        .setDescription('The first field.')
     *                        .setType(cc.FieldType.YEAR_MONTH)
     *                        .setGroup('DATETIME');
     */
    interface Field {

      /**
       * Returns the AggregationType of this Field. AggregationType determines how Data Studio combines similar data into dimensions.
       *
       * Return:
       * - AggregationType — The aggregationType for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getAggregation()
       */
      getAggregation(): AggregationType;

      /**
       * Returns the description of this Field. Descriptions are short explanations of a field's purpose.
       *
       * Return:
       * - String — The description for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getDescription()
       */
      getDescription(): string;

      /**
       * Returns the formula of this Field. Formulas define a data transformation that Data Studio runs at query-time.
       *
       * Return:
       * - String — The formula for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getFormula()
       */
      getFormula(): string;

      /**
       * Returns the group of this Field. Fields collected into a group are presented together in the Data Studio UI.
       *
       * Return:
       * - String — The group for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getGroup()
       */
      getGroup(): string;

      /**
       * Returns the ID of this Field. IDs are unique per set of fields and are used in formulas to refer to fields.
       *
       * Return:
       * - String — The ID for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getId()
       */
      getId(): string;

      /**
       * Returns true if this field can be reaggregated, false otherwise.
       *
       * Return:
       * - Boolean — true if this field can be reaggregated, false otherwise.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getIsReaggregatable()
       */
      getIsReaggregatable(): boolean;

      /**
       * Returns the name of this Field. Names are shown to the user to distinguish fields.
       *
       * Return:
       * - String — The name for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getName()
       */
      getName(): string;

      /**
       * Returns the FieldType of this Field.
       *
       * Return:
       * - FieldType — The type for this field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#getType()
       */
      getType(): FieldType;

      /**
       * Returns true if this Field is the default metric or dimension.
       *
       * Return:
       * - Boolean — true if this Field is the default metric or dimension; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#isDefault()
       */
      isDefault(): boolean;

      /**
       * Returns true if this field is a dimension.
       *
       * Return:
       * - Boolean — true if this field is a dimension; returns false otherwise.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#isDimension()
       */
      isDimension(): boolean;

      /**
       * Returns true if this Field is hidden. You can use hidden fields in formulas, but not in charts. You cannot hide fields containing formulas.
       *
       * Return:
       * - Boolean — true if this Field is hidden; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#isHidden()
       */
      isHidden(): boolean;

      /**
       * Returns true if this field is a metric.
       *
       * Return:
       * - Boolean — true if this field is a metric; returns false otherwise.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#isMetric()
       */
      isMetric(): boolean;

      /**
       * Sets the aggregation type of this Field. AggregationType determines how Data Studio combines similar data into dimensions. This throws an error if called on a metric.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setAggregation(AggregationType)
       * @param aggregation The aggregation type to set.
       */
      setAggregation(aggregation: AggregationType): Field;

      /**
       * Sets the description of this Field. Descriptions are short explanations of a field's purpose.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setDescription(String)
       * @param description The description to set.
       */
      setDescription(description: string): Field;

      /**
       * Sets the formula of this Field. Formulas define a data transformation that Data Studio runs at query-time.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setFormula(String)
       * @param formula The formula to set.
       */
      setFormula(formula: string): Field;

      /**
       * Sets the group of this Field. Fields collected into a group are presented together in the Data Studio UI.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setGroup(String)
       * @param group The group to set.
       */
      setGroup(group: string): Field;

      /**
       * Sets the ID of this Field. IDs are unique per set of fields and are used in formulas to refer to fields.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): Field;

      /**
       * Sets the hidden status of this Field. You can use hidden fields in formulas, but not in charts. You cannot hide fields containing formulas.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setIsHidden(Boolean)
       * @param isHidden The hidden status to set.
       */
      setIsHidden(isHidden: boolean): Field;

      /**
       * Sets the reaggregation-permitted status for a Field. Attempting to set an aggregation type on a field that can't be reaggregated results in an error.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setIsReaggregatable(Boolean)
       * @param isReaggregatable The reaggregation-permitted status to set.
       */
      setIsReaggregatable(isReaggregatable: boolean): Field;

      /**
       * Sets the name of this Field. Names are shown to the user to distinguish fields.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setName(String)
       * @param name The name to set.
       */
      setName(name: string): Field;

      /**
       * Sets the FieldType of this Field.
       *
       * Return:
       * - Field — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/field#setType(FieldType)
       * @param type The type to set.
       */
      setType(type: FieldType): Field;
    }
    /**
     * An enum that defines the types that can be set for a Field.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DataStudioApp.FieldType.YEAR.
     */
    enum FieldType { YEAR, YEAR_QUARTER, YEAR_MONTH, YEAR_WEEK, YEAR_MONTH_DAY, YEAR_MONTH_DAY_HOUR, YEAR_MONTH_DAY_MINUTE, YEAR_MONTH_DAY_SECOND, QUARTER, MONTH, WEEK, MONTH_DAY, DAY_OF_WEEK, DAY, HOUR, MINUTE, DURATION, COUNTRY, COUNTRY_CODE, CONTINENT, CONTINENT_CODE, SUB_CONTINENT, SUB_CONTINENT_CODE, REGION, REGION_CODE, CITY, CITY_CODE, METRO, METRO_CODE, LATITUDE_LONGITUDE, NUMBER, PERCENT, TEXT, BOOLEAN, URL, HYPERLINK, IMAGE, IMAGE_LINK, CURRENCY_AED, CURRENCY_ALL, CURRENCY_ARS, CURRENCY_AUD, CURRENCY_BDT, CURRENCY_BGN, CURRENCY_BOB, CURRENCY_BRL, CURRENCY_CAD, CURRENCY_CDF, CURRENCY_CHF, CURRENCY_CLP, CURRENCY_CNY, CURRENCY_COP, CURRENCY_CRC, CURRENCY_CZK, CURRENCY_DKK, CURRENCY_DOP, CURRENCY_EGP, CURRENCY_ETB, CURRENCY_EUR, CURRENCY_GBP, CURRENCY_HKD, CURRENCY_HRK, CURRENCY_HUF, CURRENCY_IDR, CURRENCY_ILS, CURRENCY_INR, CURRENCY_IRR, CURRENCY_ISK, CURRENCY_JMD, CURRENCY_JPY, CURRENCY_KRW, CURRENCY_LKR, CURRENCY_LTL, CURRENCY_MNT, CURRENCY_MVR, CURRENCY_MXN, CURRENCY_MYR, CURRENCY_NGN, CURRENCY_NOK, CURRENCY_NZD, CURRENCY_PAB, CURRENCY_PEN, CURRENCY_PHP, CURRENCY_PKR, CURRENCY_PLN, CURRENCY_RON, CURRENCY_RSD, CURRENCY_RUB, CURRENCY_SAR, CURRENCY_SEK, CURRENCY_SGD, CURRENCY_THB, CURRENCY_TRY, CURRENCY_TWD, CURRENCY_TZS, CURRENCY_UAH, CURRENCY_USD, CURRENCY_UYU, CURRENCY_VEF, CURRENCY_VND, CURRENCY_YER, CURRENCY_ZAR }
    /**
     * Contains a set of Fields for a community connector. This set of fields define which
     * dimensions and metrics can be used in Data Studio.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const fields = cc.getFields();
     *
     *     const field1 = fields
     *                        .newDimension()
     *                        // Set other properties as needed.
     *                        .setId('field1_id');
     */
    interface Fields {

      /**
       * Returns a view of this object as an array.
       *
       *     const fields = DataStudioApp.createCommunityConnector().getFields();
       *     fields.newDimension().setId('field1_id');
       *     fields.newDimension().setId('field2_id');
       *     fields.newDimension().setId('field3_id');
       *
       *     // Logging the ID of each field:
       *     fields.asArray().map((field) => {
       *       Logger.log(field.getId());
       *     });
       *
       * Return:
       * - Field[] — An array of Field objects.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#asArray()
       */
      asArray(): Field[];

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object[] — The validated field data, represented as a list of objects.
       *
       * Throws:
       * - Error — if a valid object cannot be constructed.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#build()
       */
      build(): any[];

      /**
       * Returns a new Fields object filtered to Fields with an ID in ids.
       *
       *     const fields = DataStudioApp.createCommunityConnector().getFields();
       *     fields.newDimension().setId('field1_id');
       *     fields.newDimension().setId('field2_id');
       *     fields.newDimension().setId('field3_id');
       *
       *     // subsetFields is a Fields object that only contains field1 and field2.
       *     const subsetFields = fields.forIds(['field1_id', 'field3_id']);
       *
       * Return:
       * - Fields — A new Fields object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#forIds(String)
       * @param ids The IDs of fields that should be kept.
       */
      forIds(ids: string[]): Fields;

      /**
       * Returns the default dimension to be used for the set of fields. The default dimension is selected automatically when a new visualization is made.
       *
       * Return:
       * - Field — The dimension that is set as the default dimension, or null if no default dimension was set.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#getDefaultDimension()
       */
      getDefaultDimension(): Field;

      /**
       * Returns the default metric to be used for the set of fields. The default metric is selected automatically when a new visualization is made.
       *
       * Return:
       * - Field — The metric that is set as the default metric, or null if no default metric was set.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#getDefaultMetric()
       */
      getDefaultMetric(): Field;

      /**
       * Returns a field with a given ID, or null if no field with that ID is in this Fields object.
       *
       *     const fields = DataStudioApp.createCommunityConnector().getFields();
       *     const field1 = fields.newDimension().setId('field1_id');
       *
       *     // byId is the same as field1.
       *     const byId = fields.getFieldById('field1_id');
       *
       *     // byId2 is null.
       *     const byId2 = fields.getFieldById('not present id');
       *
       * Return:
       * - Field — The Field with the given ID, or null if no such field is contained within this Fields object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#getFieldById(String)
       * @param fieldId The ID of the field to get.
       */
      getFieldById(fieldId: string): Field;

      /**
       * Returns a new dimension Field.
       *
       * Return:
       * - Field — A new dimension Field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#newDimension()
       */
      newDimension(): Field;

      /**
       * Returns a new metric Field.
       *
       * Return:
       * - Field — A new metric Field.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#newMetric()
       */
      newMetric(): Field;

      /**
       * Sets the default dimension to be used for the set of fields. The default dimension is selected automatically when a new visualization is made.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#setDefaultDimension(String)
       * @param fieldId The ID of the field to use as the default dimension. This ID must be present in the set of fields.
       */
      setDefaultDimension(fieldId: string): void;

      /**
       * Sets the default metric to be used for the set of fields. The default metric is selected automatically when a new visualization is made.
       *
       * https://developers.google.com/apps-script/reference/data-studio/fields#setDefaultMetric(String)
       * @param fieldId The ID of the field to use as the default metric. This ID must be present in the set of fields.
       */
      setDefaultMetric(fieldId: string): void;
    }
    /**
     * Builder to create a getAuthType() response for your script project.
     *
     *     function getAuthType() {
     *       const cc = DataStudioApp.createCommunityConnector();
     *
     *       return cc.newAuthTypeResponse()
     *           .setAuthType(cc.AuthType.USER_PASS)
     *           .setHelpUrl('https://www.example.org/connector-auth-help')
     *           .build();
     *     }
     */
    interface GetAuthTypeResponse {

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated GetAuthTypeResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response#build()
       */
      build(): any;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response#printJson()
       */
      printJson(): string;

      /**
       * Sets the AuthType of the builder.
       *
       * Return:
       * - GetAuthTypeResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response#setAuthType(AuthType)
       * @param authType The authentication type to set.
       */
      setAuthType(authType: AuthType): GetAuthTypeResponse;

      /**
       * Sets the help URL of the builder.
       * The help URL is an optional URL the user can visit to get help on setting up auth. This is only supported for USER_PASS, KEY, and USER_TOKEN authTypes.
       *
       * Return:
       * - GetAuthTypeResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response#setHelpUrl(String)
       * @param helpUrl The help URL to set.
       */
      setHelpUrl(helpUrl: string): GetAuthTypeResponse;
    }
    /**
     * Builder to create a getData() response for your script project.
     *
     *     function getFields() {
     *       //...
     *     }
     *
     *     function getData() {
     *       const cc = DataStudioApp.createCommunityConnector();
     *
     *       return cc.newGetDataResponse()
     *           .setFields(getFields())
     *           .addRow(['3', 'Foobar.com'])
     *           .addRow(['4', 'Foobaz.com'])
     *           .addRows([
     *             ['5', 'Fizzbuz.com'],
     *             ['6', 'Fizzbaz.com'],
     *           ])
     *           .build();
     *     }
     */
    interface GetDataResponse {

      /**
       * Adds multiple rows of data to this GetDataResponse.
       *
       * Return:
       * - GetDataResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-data-response#addAllRows(String)
       * @param rows The rows of data to set.
       */
      addAllRows(rows: string[][]): GetDataResponse;

      /**
       * Adds a row of data to this GetDataResponse.
       *
       * Return:
       * - GetDataResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-data-response#addRow(String)
       * @param row The row of data to set.
       */
      addRow(row: string[]): GetDataResponse;

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated GetDataResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-data-response#build()
       */
      build(): any;

      /**
       * Sets the Fields of the builder.
       *
       * Return:
       * - GetDataResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-data-response#setFields(Fields)
       * @param fields The fields to set.
       */
      setFields(fields: Fields): GetDataResponse;

      /**
       * Sets the filters applied status for this builder. Set to true if all filters were successfully applied, false otherwise.
       *
       * Return:
       * - GetDataResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-data-response#setFiltersApplied(Boolean)
       * @param filtersApplied - The filters applied status to set.
       */
      setFiltersApplied(filtersApplied: boolean): GetDataResponse;
    }
    /**
     * Builder to create a getSchema() response for your script project.
     *
     *     function getSchema() {
     *       const cc = DataStudioApp.createCommunityConnector();
     *       const fields = cc.getFields();
     *
     *       fields.newDimension()
     *           .setId('Created')
     *           .setName('Date Created')
     *           .setDescription('The date that this was created')
     *           .setType(cc.FieldType.YEAR_MONTH_DAY);
     *
     *       fields.newMetric()
     *           .setId('Amount')
     *           .setName('Amount (USD)')
     *           .setDescription('The cost in US dollars')
     *           .setType(cc.FieldType.CURRENCY_USD);
     *
     *       return cc.newGetSchemaResponse().setFields(fields).build();
     *     }
     */
    interface GetSchemaResponse {

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated GetSchemaResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-schema-response#build()
       */
      build(): any;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-schema-response#printJson()
       */
      printJson(): string;

      /**
       * Sets the Fields of the builder.
       *
       * Return:
       * - GetSchemaResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/get-schema-response#setFields(Fields)
       * @param fields The fields to set.
       */
      setFields(fields: Fields): GetSchemaResponse;
    }
    /**
     * Contains info data for the config. Its properties determine how the info is displayed in Data
     * Studio.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *
     *     const info1 = config.newInfo().setId('info1').setText(
     *         'This text gives some context on the configuration.');
     */
    interface Info {

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - Info — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/info#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): Info;

      /**
       * Sets the text for this configuration entry.
       *
       * Return:
       * - Info — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/info#setText(String)
       * @param text The text to set.
       */
      setText(text: string): Info;
    }
    /**
     * A builder for creating options for SelectSingles and SelectMultiples.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *
     *     const option1 =
     *         config.newOptionBuilder().setLabel('option label').setValue('option_value');
     *
     *     const option2 = config.newOptionBuilder()
     *                         .setLabel('second option label')
     *                         .setValue('option_value_2');
     *
     *     const info1 = config.newSelectSingle()
     *                       .setId('api_endpoint')
     *                       .setName('Data Type')
     *                       .setHelpText('Select the data type you\'re interested in.')
     *                       .addOption(option1)
     *                       .addOption(option2);
     */
    interface OptionBuilder {

      /**
       * Sets the label of this option builder. Labels are the text that the user sees when selecting one or more options from the dropdown.
       *
       * Return:
       * - OptionBuilder — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/option-builder#setLabel(String)
       * @param label The label to set.
       */
      setLabel(label: string): OptionBuilder;

      /**
       * Sets the value of this option builder. Values are what is passed to the code when a user selects one or more options from the dropdown.
       *
       * Return:
       * - OptionBuilder — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/option-builder#setValue(String)
       * @param value The value to set.
       */
      setValue(value: string): OptionBuilder;
    }
    /**
     * Contains select multiple information for the config. Its properties determine how the select
     * multiple is displayed in Data Studio.
     *
     * Usage:
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *     const option1 =
     *         config.newOptionBuilder().setLabel('option label').setValue('option_value');
     *
     *     const option2 = config.newOptionBuilder()
     *                         .setLabel('second option label')
     *                         .setValue('option_value_2');
     *
     *     const info1 = config.newSelectMultiple()
     *                       .setId('api_endpoint')
     *                       .setName('Data Type')
     *                       .setHelpText('Select the data type you\'re interested in.')
     *                       .setAllowOverride(true)
     *                       .addOption(option1)
     *                       .addOption(option2);
     */
    interface SelectMultiple {

      /**
       * Adds a new select option.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#addOption(OptionBuilder)
       * @param optionBuilder A builder for an option.
       */
      addOption(optionBuilder: OptionBuilder): SelectMultiple;

      /**
       * Enables overriding for this config entry. If set to true, data source creators have the option to enable this for report editors.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#setAllowOverride(Boolean)
       * @param allowOverride Whether or not this config entry can be overridden in reports.
       */
      setAllowOverride(allowOverride: boolean): SelectMultiple;

      /**
       * Sets the help text for this configuration entry.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#setHelpText(String)
       * @param helpText The help text to set.
       */
      setHelpText(helpText: string): SelectMultiple;

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): SelectMultiple;

      /**
       * Sets the dynamic status for this configuration entry.
       * If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#setIsDynamic(Boolean)
       * @param isDynamic The dynamic status to set.
       */
      setIsDynamic(isDynamic: boolean): SelectMultiple;

      /**
       * Sets the display name for this configuration entry.
       *
       * Return:
       * - SelectMultiple — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-multiple#setName(String)
       * @param name The name to set.
       */
      setName(name: string): SelectMultiple;
    }
    /**
     * Contains select single information for the config. Its properties determine how the select single
     * is displayed in Data Studio.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *     const option1 =
     *         config.newOptionBuilder().setLabel('option label').setValue('option_value');
     *
     *     const option2 = config.newOptionBuilder()
     *                         .setLabel('second option label')
     *                         .setValue('option_value_2');
     *
     *     const info1 = config.newSelectSingle()
     *                       .setId('api_endpoint')
     *                       .setName('Data Type')
     *                       .setHelpText('Select the data type you\'re interested in.')
     *                       .setAllowOverride(true)
     *                       .addOption(option1)
     *                       .addOption(option2);
     */
    interface SelectSingle {

      /**
       * Adds a new select option.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#addOption(OptionBuilder)
       * @param optionBuilder A builder for an option.
       */
      addOption(optionBuilder: OptionBuilder): SelectSingle;

      /**
       * Enables overriding for this config entry. If set to true, data source creators have the option to enable this for report editors.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#setAllowOverride(Boolean)
       * @param allowOverride Whether or not this config entry can be overridden in reports.
       */
      setAllowOverride(allowOverride: boolean): SelectSingle;

      /**
       * Sets the help text for this configuration entry.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#setHelpText(String)
       * @param helpText The helpText to set.
       */
      setHelpText(helpText: string): SelectSingle;

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): SelectSingle;

      /**
       * Sets the dynamic status for this configuration entry.
       * If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#setIsDynamic(Boolean)
       * @param isDynamic The dynamic status to set.
       */
      setIsDynamic(isDynamic: boolean): SelectSingle;

      /**
       * Sets the display name for this configuration entry.
       *
       * Return:
       * - SelectSingle — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/select-single#setName(String)
       * @param name The name to set.
       */
      setName(name: string): SelectSingle;
    }
    /**
     * Builder to create a setCredentials() response for your script project.
     *
     *     const communityConnector = DataStudioApp.createCommunityConnector();
     *
     *     function setCredentials(request) {
     *       const isValid = validateCredentials(request);
     *
     *       if (isValid) {
     *         // store the credentials somewhere.
     *       }
     *
     *       return communityConnector.newSetCredentialsResponse().setIsValid(isValid).build();
     *     }
     *
     *     function validateCredentials(request) {
     *       // ...
     *     }
     */
    interface SetCredentialsResponse {

      /**
       * Validates this object and returns it in the format needed by Data Studio.
       *
       * Return:
       * - Object — The validated SetCredentialsResponse object.
       *
       * https://developers.google.com/apps-script/reference/data-studio/set-credentials-response#build()
       */
      build(): any;

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/set-credentials-response#printJson()
       */
      printJson(): string;

      /**
       * Sets the valid status of this SetCredentialsResponse. Set to true if the credentials provided in the request were valid, false, otherwise.
       *
       * Return:
       * - SetCredentialsResponse — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/set-credentials-response#setIsValid(Boolean)
       * @param isValid The valid status to set.
       */
      setIsValid(isValid: boolean): SetCredentialsResponse;
    }
    /**
     * Contains text area information for the config. Its properties determine how the text input is
     * displayed in Data Studio.
     *
     * Usage:
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *
     *     const textArea1 = config.newTextArea()
     *                           .setId('textArea1')
     *                           .setName('Search')
     *                           .setHelpText('for example, Coldplay')
     *                           .setAllowOverride(true)
     *                           .setPlaceholder('Search for an artist for all songs.');
     */
    interface TextArea {

      /**
       * Enables overriding for this config entry. If set to true, data source creators have the option to enable this for report editors.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setAllowOverride(Boolean)
       * @param allowOverride Whether or not this config entry can be overridden in reports.
       */
      setAllowOverride(allowOverride: boolean): TextArea;

      /**
       * Sets the help text for this configuration entry.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setHelpText(String)
       * @param helpText The helpText to set.
       */
      setHelpText(helpText: string): TextArea;

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): TextArea;

      /**
       * Sets the dynamic status for this configuration entry.
       * If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setIsDynamic(Boolean)
       * @param isDynamic The dynamic status to set.
       */
      setIsDynamic(isDynamic: boolean): TextArea;

      /**
       * Sets the display name for this configuration entry.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setName(String)
       * @param name The name to set.
       */
      setName(name: string): TextArea;

      /**
       * Sets the placeholder text for this configuration entry.
       *
       * Return:
       * - TextArea — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-area#setPlaceholder(String)
       * @param placeholder The placeholder text to set.
       */
      setPlaceholder(placeholder: string): TextArea;
    }
    /**
     * Contains text input information for the config. Its properties determine how the text input is
     * displayed in Data Studio.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *     const config = cc.getConfig();
     *
     *     const info1 = config.newTextInput()
     *                       .setId('info1')
     *                       .setName('Search')
     *                       .setHelpText('for example, Coldplay')
     *                       .setAllowOverride(true)
     *                       .setPlaceholder('Search for an artist for all songs.');
     */
    interface TextInput {

      /**
       * Enables overriding for this config entry. If set to true, data source creators have the option to enable this for report editors
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setAllowOverride(Boolean)
       * @param allowOverride Whether or not this config entry can be overridden in reports.
       */
      setAllowOverride(allowOverride: boolean): TextInput;

      /**
       * Sets the help text for this configuration entry.
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setHelpText(String)
       * @param helpText The helpText to set.
       */
      setHelpText(helpText: string): TextInput;

      /**
       * Sets the unique ID for this configuration entry.
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setId(String)
       * @param id The ID to set.
       */
      setId(id: string): TextInput;

      /**
       * Sets the dynamic status for this configuration entry.
       * If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setIsDynamic(Boolean)
       * @param isDynamic The dynamic status to set.
       */
      setIsDynamic(isDynamic: boolean): TextInput;

      /**
       * Sets the display name for this configuration entry.
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setName(String)
       * @param name The name to set.
       */
      setName(name: string): TextInput;

      /**
       * Sets the placeholder text for this configuration entry.
       *
       * Return:
       * - TextInput — This builder, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/text-input#setPlaceholder(String)
       * @param placeholder The placeholder text to set.
       */
      setPlaceholder(placeholder: string): TextInput;
    }
    /**
     * An error that is shown to users of the connector.
     *
     *     const cc = DataStudioApp.createCommunityConnector();
     *
     *     cc.newUserError()
     *         .setText('This is the debug error text.')
     *         .setDebugText('This text is only shown to admins.')
     *         .throwException();
     */
    interface UserError {

      /**
       * Prints the JSON representation of this object. This is for debugging only.
       *
       * Return:
       * - String
       *
       * https://developers.google.com/apps-script/reference/data-studio/user-error#printJson()
       */
      printJson(): string;

      /**
       * Sets the text of the debug error, which is only shown to admins.
       *
       * Return:
       * - UserError — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/user-error#setDebugText(String)
       * @param text The error text.
       */
      setDebugText(text: string): UserError;

      /**
       * Sets the text of the user error.
       *
       * Return:
       * - UserError — This object, for chaining.
       *
       * https://developers.google.com/apps-script/reference/data-studio/user-error#setText(String)
       * @param text The error text.
       */
      setText(text: string): UserError;

      /**
       * Triggers this exception to be thrown.
       *
       * https://developers.google.com/apps-script/reference/data-studio/user-error#throwException()
       */
      throwException(): void;
    }
  }
}

declare var DataStudioApp: GoogleAppsScript.Data_Studio.DataStudioApp;
