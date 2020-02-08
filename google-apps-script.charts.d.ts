// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Charts {
    /**
     * Builder for area charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build an area chart.
     *
     *       // Create a data table with some sample data.
     *       var sampleData = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Month")
     *           .addColumn(Charts.ColumnType.NUMBER, "Dining")
     *           .addColumn(Charts.ColumnType.NUMBER, "Total")
     *           .addRow(["Jan", 60, 520])
     *           .addRow(["Feb", 50, 430])
     *           .addRow(["Mar", 53, 440])
     *           .addRow(["Apr", 70, 410])
     *           .addRow(["May", 80, 390])
     *           .addRow(["Jun", 60, 500])
     *           .addRow(["Jul", 100, 450])
     *           .addRow(["Aug", 140, 431])
     *           .addRow(["Sep", 75, 488])
     *           .addRow(["Oct", 70, 521])
     *           .addRow(["Nov", 58, 388])
     *           .addRow(["Dec", 63, 400])
     *           .build();
     *
     *       var chart = Charts.newAreaChart()
     *           .setTitle('Yearly Spending')
     *           .setXAxisTitle('Month')
     *           .setYAxisTitle('Spending (USD)')
     *           .setDimensions(600, 500)
     *           .setStacked()
     *           .setColors(['red', 'green'])
     *           .setDataTable(sampleData)
     *           .build();
     */
    interface AreaChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#build()
       */
      build(): Chart;

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
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#reverseCategories()
       */
      reverseCategories(): AreaChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): AreaChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): AreaChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): AreaChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): AreaChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): AreaChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): AreaChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): AreaChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): AreaChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build an area chart with a 1-second animation duration.
       *     var builder = Charts.newAreaChart();
       *     builder.setOption('animation.duration', 1000);
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): AreaChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: PointStyle): AreaChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): AreaChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setStacked()
       */
      setStacked(): AreaChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): AreaChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): AreaChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): AreaChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/charts/area-chart-builder#useLogScale()
       */
      useLogScale(): AreaChartBuilder;
    }
    /**
     * Builder for bar charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a bar chart. The data is imported from a
     * Google spreadsheet.
     *
     *      // Get sample data from a spreadsheet.
     *      var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=B1%3AC11' +
     *          '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=0&headers=-1';
     *
     *      var chartBuilder = Charts.newBarChart()
     *          .setTitle('Top Grossing Films in US and Canada')
     *          .setXAxisTitle('USD')
     *          .setYAxisTitle('Film')
     *          .setDimensions(600, 500)
     *          .setLegendPosition(Charts.Position.BOTTOM)
     *          .setDataSourceUrl(dataSourceUrl);
     *
     *      var chart = chartBuilder.build();
     */
    interface BarChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#build()
       */
      build(): Chart;

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
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#reverseCategories()
       */
      reverseCategories(): BarChartBuilder;

      /**
       * Reverses the direction in which the bars grow along the horizontal axis. By default, values
       * grow from left to right. Calling this method causes them to grow from right to left.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#reverseDirection()
       */
      reverseDirection(): BarChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): BarChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): BarChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): BarChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): BarChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): BarChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): BarChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): BarChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): BarChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a bar chart with a 1-second animation duration.
       *     var builder = Charts.newBarChart();
       *     builder.setOption('animation.duration', 1000);
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): BarChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): BarChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setStacked()
       */
      setStacked(): BarChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): BarChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): BarChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): BarChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/charts/bar-chart-builder#useLogScale()
       */
      useLogScale(): BarChartBuilder;
    }
    /**
     * A Chart object, which can be converted to a static image. For charts embedded in spreadsheets,
     * see EmbeddedChart.
     */
    interface Chart {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/charts/chart#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/charts/chart#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Returns the options for this chart, such as height, colors, and axes.
       *
       *
       * The returned options are immutable.
       * https://developers.google.com/apps-script/reference/charts/chart#getOptions()
       */
      getOptions(): ChartOptions;
    }
    /**
     * An enumeration of how hidden dimensions in a source are expressed in a chart.
     */
    enum ChartHiddenDimensionStrategy { IGNORE_BOTH, IGNORE_ROWS, IGNORE_COLUMNS, SHOW_BOTH }
    /**
     * An enumeration of how multiple ranges in the source are expressed in a chart.
     */
    enum ChartMergeStrategy { MERGE_COLUMNS, MERGE_ROWS }
    /**
     * Exposes options currently configured for a Chart, such as height, color, etc.
     *
     * Please see the visualization
     * reference documentation for information on what options are available. Specific options for
     * each chart can be found by clicking on the specific chart in the chart gallery.
     *
     * These options are immutable.
     */
    interface ChartOptions {

      /**
       * Returns a configured option for this chart.
       * https://developers.google.com/apps-script/reference/charts/chart-options#get(String)
       * @param option The string representing the desired option.
       */
      get(option: string): object;
    }
    /**
     * Chart types supported by the Charts service.
     */
    enum ChartType { TIMELINE, AREA, BAR, BUBBLE, CANDLESTICK, COLUMN, COMBO, GAUGE, GEO, HISTOGRAM, RADAR, LINE, ORG, PIE, SCATTER, SPARKLINE, STEPPED_AREA, TABLE, TREEMAP, WATERFALL }
    /**
     * Entry point for creating Charts in scripts.
     *
     * This example creates a basic data table, populates an area chart with the data, and adds it
     * into a web page as an image:
     *
     *     function doGet() {
     *       var data = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Month")
     *           .addColumn(Charts.ColumnType.NUMBER, "In Store")
     *           .addColumn(Charts.ColumnType.NUMBER, "Online")
     *           .addRow(["January", 10, 1])
     *           .addRow(["February", 12, 1])
     *           .addRow(["March", 20, 2])
     *           .addRow(["April", 25, 3])
     *           .addRow(["May", 30, 4])
     *           .build();
     *
     *       var chart = Charts.newAreaChart()
     *           .setDataTable(data)
     *           .setStacked()
     *           .setRange(0, 40)
     *           .setTitle("Sales per Month")
     *           .build();
     *
     *        var htmlOutput = HtmlService.createHtmlOutput().setTitle('My Chart');
     *        var imageData = Utilities.base64Encode(chart.getAs('image/png').getBytes());
     *        var imageUrl = "data:image/png;base64," + encodeURI(imageData);
     *        htmlOutput.append("Render chart server side: <br/>");
     *        htmlOutput.append("<img border=\"1\" src=\"" + imageUrl + "\">");
     *        return htmlOutput;
     *     }
     */
    interface Charts {
      ChartHiddenDimensionStrategy: typeof ChartHiddenDimensionStrategy;
      ChartMergeStrategy: typeof ChartMergeStrategy;
      ChartType: typeof ChartType;
      ColumnType: typeof ColumnType;
      CurveStyle: typeof CurveStyle;
      PointStyle: typeof PointStyle;
      Position: typeof Position;

      /**
       * Starts building an area chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newAreaChart()
       */
      newAreaChart(): AreaChartBuilder;

      /**
       * Starts building a bar chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newBarChart()
       */
      newBarChart(): BarChartBuilder;

      /**
       * Starts building a column chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newColumnChart()
       */
      newColumnChart(): ColumnChartBuilder;

      /**
       * Creates an empty data table, which can have its values set manually.
       *
       *
       * Data tables hold the data for all chart types.
       * https://developers.google.com/apps-script/reference/charts/charts#newDataTable()
       */
      newDataTable(): DataTableBuilder;

      /**
       * Creates a new data view definition.
       *
       *
       * Use setters to define the different properties of the data view.
       * https://developers.google.com/apps-script/reference/charts/charts#newDataViewDefinition()
       */
      newDataViewDefinition(): DataViewDefinitionBuilder;

      /**
       * Starts building a line chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newLineChart()
       */
      newLineChart(): LineChartBuilder;

      /**
       * Starts building a pie chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newPieChart()
       */
      newPieChart(): PieChartBuilder;

      /**
       * Starts building a scatter chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newScatterChart()
       */
      newScatterChart(): ScatterChartBuilder;

      /**
       * Starts building a table chart, as described in the Google Chart
       * Tools documentation.
       * https://developers.google.com/apps-script/reference/charts/charts#newTableChart()
       */
      newTableChart(): TableChartBuilder;

      /**
       * Creates a new text style builder.
       *
       *
       * To change the default values, use the setter functions.
       * https://developers.google.com/apps-script/reference/charts/charts#newTextStyle()
       */
      newTextStyle(): TextStyleBuilder;
    }
    /**
     * Builder for column charts. For more details, see the Google Charts documentation.
     *
     * This example shows how to create a column chart with data from a data table.
     *
     *     var sampleData = Charts.newDataTable()
     *         .addColumn(Charts.ColumnType.STRING, "Year")
     *         .addColumn(Charts.ColumnType.NUMBER, "Sales")
     *         .addColumn(Charts.ColumnType.NUMBER, "Expenses")
     *         .addRow(["2004", 1000, 400])
     *         .addRow(["2005", 1170, 460])
     *         .addRow(["2006", 660, 1120])
     *         .addRow(["2007", 1030, 540])
     *         .addRow(["2008", 800, 600])
     *         .addRow(["2009", 943, 678])
     *         .addRow(["2010", 1020, 550])
     *         .addRow(["2011", 910, 700])
     *         .addRow(["2012", 1230, 840])
     *         .build();
     *
     *     var chart = Charts.newColumnChart()
     *         .setTitle('Sales & Expenses')
     *         .setXAxisTitle('Year')
     *         .setYAxisTitle('Amount (USD)')
     *         .setDimensions(600, 500)
     *         .setDataTable(sampleData)
     *         .build();
     */
    interface ColumnChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#build()
       */
      build(): Chart;

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
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#reverseCategories()
       */
      reverseCategories(): ColumnChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): ColumnChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): ColumnChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): ColumnChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): ColumnChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): ColumnChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): ColumnChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): ColumnChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): ColumnChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a column chart with a 1-second animation duration.
       *     var builder = Charts.newColumnChart();
       *     builder.setOption('animation.duration', 1000);
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): ColumnChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): ColumnChartBuilder;

      /**
       * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
       * there is no stacking.
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setStacked()
       */
      setStacked(): ColumnChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): ColumnChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): ColumnChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): ColumnChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/charts/column-chart-builder#useLogScale()
       */
      useLogScale(): ColumnChartBuilder;
    }
    /**
     * An enumeration of the valid data types for columns in a DataTable.
     */
    enum ColumnType { DATE, NUMBER, STRING }
    /**
     * An enumeration of the styles for curves in a chart.
     */
    enum CurveStyle { NORMAL, SMOOTH }
    /**
     * A Data Table to be used in charts. A DataTable can come from sources such as Google
     * Sheets or specified data-table URLs, or can be filled in by hand. This class intentionally has no
     * methods: a DataTable can be passed around, but not manipulated directly.
     */
    interface DataTable {
    }
    /**
     * Builder of DataTable objects. Building a data table consists of first specifying its columns, and
     * then adding its rows, one at a time. Example:
     *
     *     var data = Charts.newDataTable()
     *         .addColumn(Charts.ColumnType.STRING, "Month")
     *         .addColumn(Charts.ColumnType.NUMBER, "In Store")
     *         .addColumn(Charts.ColumnType.NUMBER, "Online")
     *         .addRow(["January", 10, 1])
     *         .addRow(["February", 12, 1])
     *         .addRow(["March", 20, 2])
     *         .addRow(["April", 25, 3])
     *         .addRow(["May", 30, 4])
     *         .build();
     */
    interface DataTableBuilder {

      /**
       * Adds a column to the data table. Columns will be added from 0 to n.
       *
       *
       * The first column is often used by charts for labels (for instance, X-axis labels on line
       * charts, or slice labels in pie charts). The other columns are often used for data and therefore
       * often require numeric values.
       * https://developers.google.com/apps-script/reference/charts/data-table-builder#addColumn(ColumnType,String)
       * @param type type of data in the column (number, string, or date)
       * @param label label of the column (it's used for chart legends).
       */
      addColumn(type: ColumnType, label: string): DataTableBuilder;

      /**
       * Adds a row to the data table.
       * https://developers.google.com/apps-script/reference/charts/data-table-builder#addRow(Object)
       * @param values values for the row, specified in the same order that the columns are entered.
       */
      addRow(values: object[]): DataTableBuilder;

      /**
       * Builds and returns a data table.
       * https://developers.google.com/apps-script/reference/charts/data-table-builder#build()
       */
      build(): DataTable;

      /**
       * Sets a specific value in the table.
       *
       *
       * You may set a value before adding the column to the data table. However, unless the column
       * is added at some point, the value will be ignored.
       *
       *
       * Not all column values need to be filled in. Those missing will be considered null.
       * https://developers.google.com/apps-script/reference/charts/data-table-builder#setValue(Integer,Integer,Object)
       * @param row the row index (the first row has index 0)
       * @param column the column index (the first column has index 0)
       * @param value the value of the table cell (should have the right type for the column).
       */
      setValue(row: Integer, column: Integer, value: object): DataTableBuilder;
    }
    /**
     * Interface for objects that can represent their data as a DataTable.
     * Implementing classes
     *
     * NameBrief description
     *
     * DataTableA Data Table to be used in charts.
     *
     * RangeAccess and modify spreadsheet ranges.
     */
    interface DataTableSource {

      /**
       * Return the data inside this object as a DataTable.
       * https://developers.google.com/apps-script/reference/charts/data-table-source#getDataTable()
       */
      getDataTable(): DataTable;
    }
    /**
     * A data view definition for visualizing chart data.
     *
     * Data view definition can be set for charts to visualize a view derived from the given data
     * table and not the data table itself. For example if the view definition of a chart states that
     * the view columns are [0, 3], only the first and the third columns of the data table is taken into
     * consideration when drawing the chart. See DataViewDefinitionBuilder for an example on how
     * to define and use a DataViewDefinition.
     */
    interface DataViewDefinition {
    }
    /**
     * Builder for DataViewDefinition objects.
     *
     * Here's an example of using the builder. The data is imported
     * from a Google spreadsheet.
     *
     *     function doGet() {
     *       // This example creates two table charts side by side. One uses a data view definition to
     *       // restrict the number of displayed columns.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *       // Create a chart to display all of the data.
     *       var originalChart = Charts.newTableChart()
     *           .setDimensions(600, 500)
     *           .setDataSourceUrl(dataSourceUrl)
     *           .build();
     *
     *       // Create another chart to display a subset of the data (only columns 1 and 4).
     *       var dataViewDefinition = Charts.newDataViewDefinition().setColumns([0, 3]);
     *       var limitedChart = Charts.newTableChart()
     *           .setDimensions(200, 500)
     *           .setDataSourceUrl(dataSourceUrl)
     *           .setDataViewDefinition(dataViewDefinition)
     *           .build();
     *
     *       var htmlOutput = HtmlService.createHtmlOutput();
     *       var originalChartData = Utilities.base64Encode(originalChart.getAs('image/png').getBytes());
     *       var originalChartUrl = "data:image/png;base64," + encodeURI(originalChartData);
     *       var limitedChartData = Utilities.base64Encode(limitedChart.getAs('image/png').getBytes());
     *       var limitedChartUrl = "data:image/png;base64," + encodeURI(limitedChartData);
     *       htmlOutput.append("<table><tr><td>");
     *       htmlOutput.append("<img border=\"1\" src=\"" + originalChartUrl + "\">");
     *       htmlOutput.append("</td><td>");
     *       htmlOutput.append("<img border=\"1\" src=\"" + limitedChartUrl + "\">");
     *       htmlOutput.append("</td></tr></table>");
     *       return htmlOutput;
     *     }
     */
    interface DataViewDefinitionBuilder {

      /**
       * Builds and returns the data view definition object that was built using this builder.
       * https://developers.google.com/apps-script/reference/charts/data-view-definition-builder#build()
       */
      build(): DataViewDefinition;

      /**
       * Sets the indexes of the columns to include in the data view as well as specifying role-column
       * information. This subset of column indexes refer to the columns of the data source that the
       * data view is derived from.
       *
       *
       * A column role describes the purpose of the data in that column: for example, a column might
       * hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
       * details, see DataTable Roles in the Google Charts
       * documentation.
       *
       *
       * Assuming a spreadsheet with the following data in A1:C3:
       *
       *
       *     "abc", 20, "blue"
       *     "def", 30, "red"
       *     "ghi", 40, "orange"
       *     var COLUMN_SPEC = [
       *       0, // categories
       *       1, // counts
       *       {sourceColumn: 2, role: 'style'}
       *     ];
       *
       *     function roleColumnChart() {
       *       var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
       *       var sheet = spreadsheet.getActiveSheet();
       *       var viewSpec = Charts.newDataViewDefinition()
       *           .setColumns(COLUMN_SPEC)
       *           .build();
       *       var chartBuilder = sheet.newChart()
       *           .setChartType(Charts.ChartType.BAR)
       *           .setDataViewDefinition(viewSpec)
       *           .setOption('useFirstColumnAsDomain', true)
       *           .setPosition(5, 1, 0, 0)
       *           .setOption('hAxis', { title: 'Counts' })
       *           .setOption('vAxis', { title: 'Categories' })
       *           .addRange(sheet.getRange('A1:C3'));
       *       sheet.insertChart(chartBuilder.build());
       *     };
       * https://developers.google.com/apps-script/reference/charts/data-view-definition-builder#setColumns(Object)
       * @param columns An array of column indexes, or column descriptions (an object), to include in the data view. The column descriptions define a column role. The data table and the enumeration for data view columns are zero-based.
       */
      setColumns(columns: object[]): DataViewDefinitionBuilder;
    }
    /**
     * Builder for line charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a line chart. The data is imported from a Google spreadsheet.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AG5' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=2&headers=-1';
     *
     *       var chartBuilder = Charts.newLineChart()
     *           .setTitle('Yearly Rainfall')
     *           .setXAxisTitle('Month')
     *           .setYAxisTitle('Rainfall (in)')
     *           .setDimensions(600, 500)
     *           .setCurveStyle(Charts.CurveStyle.SMOOTH)
     *           .setPointStyle(Charts.PointStyle.MEDIUM)
     *           .setDataSourceUrl(dataSourceUrl);
     *
     *       var chart = chartBuilder.build();
     */
    interface LineChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#build()
       */
      build(): Chart;

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
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#reverseCategories()
       */
      reverseCategories(): LineChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): LineChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): LineChartBuilder;

      /**
       * Sets the style to use for curves in the chart. See CurveStyle for allowed curve
       * styles.
       *
       *
       *     // Creates a line chart builder and curves the lines in the chart.
       *     var builder = Charts.newLineChart();
       *     builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setCurveStyle(CurveStyle)
       * @param style The style for curves in the chart.
       */
      setCurveStyle(style: CurveStyle): LineChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): LineChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): LineChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): LineChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): LineChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): LineChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): LineChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a line chart with a 1-second animation duration.
       *     var builder = Charts.newLineChart();
       *     builder.setOption('animation.duration', 1000);
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): LineChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: PointStyle): LineChartBuilder;

      /**
       * Sets the range for the chart.
       *
       *
       * If any data points fall outside the range, the range is expanded to include those data
       * points.
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setRange(Number,Number)
       * @param start The value for the lowest grid line of the range axis.
       * @param end The value for the highest grid line of the range axis.
       */
      setRange(start: number, end: number): LineChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): LineChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): LineChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): LineChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder;

      /**
       * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
       * axis are the vertical axis for vertical charts (such as line, area, or column) and the
       * horizontal axis for horizontal charts (such as bar).
       * https://developers.google.com/apps-script/reference/charts/line-chart-builder#useLogScale()
       */
      useLogScale(): LineChartBuilder;
    }
    /**
     * An enumeration of how a string value should be matched. Matching a string is a boolean operation.
     * Given a string, a match term (string), and a match type, the operation outputs true in
     * the following cases:
     *
     * If the match type equals EXACT and the match term equals the string.
     *
     * If the match type equals PREFIX and the match term is a prefix of the string.
     *
     * If the match type equals ANY and the match term is a substring of the string.
     *
     * This enumeration can be used in by a string filter control to decide which rows to filter out
     * of the data table. Given a column to filter on, leave only the rows that match the value entered
     * in the filter input box, using one of the above matching types.
     */
    enum MatchType { EXACT, PREFIX, ANY }
    /**
     * A builder for number range filter controls.
     *
     * A number range filter is a slider with two thumbs that lets the user select ranges of numeric
     * values. Given a column of type number and matching options, this control filters out the rows
     * that don't match the range that was selected.
     *
     * For more details, see the Gviz
     * documentation.
     */
    interface NumberRangeFilterBuilder {

      /**
       * Sets the maximum allowed value for the range lower extent. If undefined, the value is inferred
       * from the contents of the DataTable managed by the control.
       *
       *
       *     // Builds a number range filter and sets the maximum value to 100.
       *     var numberRangeFilter = Charts.newNumberRangeFilter()
       *       .setFilterColumnLabel("Col2")
       *       .setMaxValue(100)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/number-range-filter-builder#setMaxValue(Integer)
       * @param maxValue The maximum value of the slider.
       */
      setMaxValue(maxValue: Integer): NumberRangeFilterBuilder;

      /**
       * Sets the minimum allowed value for the range lower extent. If undefined, the value is inferred
       * from the contents of the DataTable managed by the control.
       *
       *
       *     // Builds a number range filter and sets the minimum value to 10.
       *     var numberRangeFilter = Charts.newNumberRangeFilter()
       *       .setFilterColumnLabel("Col2")
       *       .setMinValue(10)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/number-range-filter-builder#setMinValue(Integer)
       * @param minValue The minimum value of the slider.
       */
      setMinValue(minValue: Integer): NumberRangeFilterBuilder;

      /**
       * Sets the slider orientation.
       *
       *
       *     // Builds a number range filter and sets it to have a horizontal orientation.
       *     var numberRangeFilter = Charts.newNumberRangeFilter()
       *       .setFilterColumnLabel("Col2")
       *       .setOrientation(Charts.Orientation.HORIZONTAL)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/number-range-filter-builder#setOrientation(Orientation)
       * @param orientation The slider orientation to set.
       */
      setOrientation(orientation: Orientation): NumberRangeFilterBuilder;

      /**
       * Sets whether to have labels next to the slider displaying extents of the selected range.
       *
       *
       *     // Builds a number range filter and enables showing of the number range values.
       *     var numberRangeFilter = Charts.newNumberRangeFilter()
       *       .setFilterColumnLabel("Col2")
       *       .setShowRangeValues(true)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/number-range-filter-builder#setShowRangeValues(Boolean)
       * @param showRangeValues If true, enables showing of labels next to the slider.
       */
      setShowRangeValues(showRangeValues: boolean): NumberRangeFilterBuilder;

      /**
       * Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs
       * can fall in.
       *
       *
       *     // Builds a number range filter and sets the number of ticks for the range to 10.
       *     var numberRangeFilter = Charts.newNumberRangeFilter()
       *       .setFilterColumnLabel("Col2")
       *       .setTicks(10)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/number-range-filter-builder#setTicks(Integer)
       * @param ticks The number of ticks on the slider.
       */
      setTicks(ticks: Integer): NumberRangeFilterBuilder;
    }
    /**
     * An enumeration of the orientation of an object.
     */
    enum Orientation { HORIZONTAL, VERTICAL }
    /**
     * An enumeration of how to display selected values in picker widget.
     */
    enum PickerValuesLayout { ASIDE, BELOW, BELOW_WRAPPING, BELOW_STACKED }
    /**
     * A builder for pie charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a pie chart. The data is imported from a Google spreadsheet.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AB8' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=3&headers=-1';
     *
     *       var chartBuilder = Charts.newPieChart()
     *           .setTitle('World Population by Continent')
     *           .setDimensions(600, 500)
     *           .set3D()
     *           .setDataSourceUrl(dataSourceUrl);
     *
     *       var chart = chartBuilder.build();
     */
    interface PieChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#build()
       */
      build(): Chart;

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
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#reverseCategories()
       */
      reverseCategories(): PieChartBuilder;

      /**
       * Sets the chart to be three-dimensional.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#set3D()
       */
      set3D(): PieChartBuilder;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): PieChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): PieChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): PieChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): PieChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): PieChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): PieChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): PieChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): PieChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): PieChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a pie chart with a pretty legend.
       *     var builder = Charts.newPieChart();
       *     builder.setOption('legend', {textStyle: {color: 'blue', fontSize: 16}});
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): PieChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): PieChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/pie-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): PieChartBuilder;
    }
    /**
     * An enumeration of the styles of points in a line.
     */
    enum PointStyle { NONE, TINY, MEDIUM, LARGE, HUGE }
    /**
     * An enumeration of legend positions within a chart.
     */
    enum Position { TOP, RIGHT, BOTTOM, NONE }
    /**
     * Builder for scatter charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a scatter chart. The data is imported from a Google spreadsheet.
     *
     *     // Get sample data from a spreadsheet.
     *     var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=C1%3AD' +
     *         '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *     var chartBuilder = Charts.newScatterChart()
     *         .setTitle('Adjusted GDP & U.S. Population')
     *         .setXAxisTitle('U.S. Population (millions)')
     *         .setYAxisTitle('Adjusted GDP ($ billions)')
     *         .setDimensions(600, 500)
     *         .setLegendPosition(Charts.Position.NONE)
     *         .setDataSourceUrl(dataSourceUrl);
     *
     *     var chart = chartBuilder.build();
     */
    interface ScatterChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#build()
       */
      build(): Chart;

      /**
       * Sets the background color for the chart.
       *
       *
       *     // Creates a line chart builder and sets the background color to gray
       *     var builder = Charts.newLineChart();
       *     builder.setBackgroundColor("gray");
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setBackgroundColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setBackgroundColor(cssValue: string): ScatterChartBuilder;

      /**
       * Sets the colors for the lines in the chart.
       *
       *
       *     // Creates a line chart builder and sets the first two lines to be drawn in green and red,
       *     // respectively.
       *     var builder = Charts.newLineChart();
       *     builder.setColors(["green", "red"]);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setColors(String)
       * @param cssValues An array of color CSS values, such as ["red", "#acf"]. The nth element in the array represents the color of the nth line in the chart.
       */
      setColors(cssValues: string[]): ScatterChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): ScatterChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): ScatterChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): ScatterChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): ScatterChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): ScatterChartBuilder;

      /**
       * Sets the position of the legend with respect to the chart. By default, there is no legend.
       *
       *
       *     // Creates a line chart builder and sets the legend position to right.
       *     var builder = Charts.newLineChart();
       *     builder.setLegendPosition(Charts.Position.RIGHT);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setLegendPosition(Position)
       * @param position The position of the legend.
       */
      setLegendPosition(position: Position): ScatterChartBuilder;

      /**
       * Sets the text style of the chart legend.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point legend.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setLegendTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setLegendTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart legend.
       */
      setLegendTextStyle(textStyle: TextStyle): ScatterChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a scatter chart with a 1-second animation duration.
       *     var builder = Charts.newScatterChart();
       *     builder.setOption('animation.duration', 1000);
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): ScatterChartBuilder;

      /**
       * Sets the style for points in the line. By default, points have no particular styles, and only
       * the line is visible.
       *
       *
       *     // Creates a line chart builder and sets large point style.
       *     var builder = Charts.newLineChart();
       *     builder.setPointStyle(Charts.PointStyle.LARGE);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setPointStyle(PointStyle)
       * @param style The style to use for points in the line.
       */
      setPointStyle(style: PointStyle): ScatterChartBuilder;

      /**
       * Sets the title of the chart. The title is displayed centered above the chart.
       *
       *
       *     // Creates a line chart builder and title to 'My Line Chart'.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('My Line Chart')
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setTitle(String)
       * @param chartTitle the chart title.
       */
      setTitle(chartTitle: string): ScatterChartBuilder;

      /**
       * Sets the text style of the chart title.
       *
       *
       *     // Creates a line chart builder and sets it up for a  blue, 26-point title.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       *     var builder = Charts.newLineChart();
       *     builder.setTitleTextStyle(style);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the chart title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;

      /**
       * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setXAxisLogScale()
       */
      setXAxisLogScale(): ScatterChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setXAxisRange(Number,Number)
       * @param start The value for the lowest grid line of the horizontal axis.
       * @param end The value for the highest grid line of the horizontal axis.
       */
      setXAxisRange(start: number, end: number): ScatterChartBuilder;

      /**
       * Sets the horizontal axis text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setXAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder;

      /**
       * Adds a title to the horizontal axis. The title is centered and appears below the axis value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setTitle('X-axis Title')
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setXAxisTitle(String)
       * @param title The title for the X-axis.
       */
      setXAxisTitle(title: string): ScatterChartBuilder;

      /**
       * Sets the horizontal axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setXAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setXAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setXAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;

      /**
       * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setYAxisLogScale()
       */
      setYAxisLogScale(): ScatterChartBuilder;

      /**
       * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
       * the range is expanded to include those data points.
       *
       *
       *     // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
       *     var builder = Charts.newTableChart();
       *     builder.setYAxisRange(0, 100);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setYAxisRange(Number,Number)
       * @param start The value for the lowest grid line of the vertical axis.
       * @param end The value for the highest grid line of the vertical axis.
       */
      setYAxisRange(start: number, end: number): ScatterChartBuilder;

      /**
       * Sets the vertical axis text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setYAxisTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder;

      /**
       * Adds a title to the vertical axis. The title is centered and appears to the left of the value
       * labels.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title.
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitle('Y-axis Title')
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setYAxisTitle(String)
       * @param title The title for the Y-axis.
       */
      setYAxisTitle(title: string): ScatterChartBuilder;

      /**
       * Sets the vertical axis title text style.
       *
       *
       *     // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
       *     var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
       *     var builder = Charts.newLineChart();
       *     builder.setYAxisTitleTextStyle(textStyle);
       * https://developers.google.com/apps-script/reference/charts/scatter-chart-builder#setYAxisTitleTextStyle(TextStyle)
       * @param textStyle The text style to use for the horizontal axis title. You can create a TextStyleBuilder object by calling Charts.newTextStyle().
       */
      setYAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;
    }
    /**
     * A builder for string filter controls.
     *
     * A string filter is a simple text input field that lets the user filter data via string
     * matching. Given a column of type string and matching options, this control filters out the rows
     * that don't match the term that's in the input field.
     *
     * For more details, see the Gviz
     * documentation.
     */
    interface StringFilterBuilder {

      /**
       * Sets whether matching should be case sensitive or not.
       *
       *
       *     // Builds a case insensitive string filter to filter column "Col1".
       *     var stringFilter = Charts.newStringFilter()
       *       .setFilterColumnLabel("Col1")
       *       .setCaseSensitive(false)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/string-filter-builder#setCaseSensitive(Boolean)
       * @param caseSensitive If true, enables string matching case sensitivity.
       */
      setCaseSensitive(caseSensitive: boolean): StringFilterBuilder;

      /**
       * Sets whether the control should match exact values only (MatchType.EXACT), prefixes
       * starting from the beginning of the value (MatchType.PREFIX), or any substring
       * (MatchType.ANY).
       *
       *
       *     // Builds a string filter to filter column "Col1" matching the prefix.
       *     var stringFilter = Charts.newStringFilter()
       *       .setFilterColumnLabel("Col1")
       *       .setMatchType(Charts.MatchType.PREFIX)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/string-filter-builder#setMatchType(MatchType)
       * @param matchType The string matching type.
       */
      setMatchType(matchType: MatchType): StringFilterBuilder;

      /**
       * Sets whether the control should match any time a key is pressed or only when the input field
       * 'changes' (loss of focus or pressing the Enter key).
       *
       *
       *     // Builds a string filter to filter column "Col1" that checks the match any time a key is
       *     // pressed.
       *     var stringFilter = Charts.newStringFilter()
       *       .setFilterColumnLabel("Col1")
       *       .setRealtimeTrigger(true)
       *       .build();
       * https://developers.google.com/apps-script/reference/charts/string-filter-builder#setRealtimeTrigger(Boolean)
       * @param realtimeTrigger If true, sets events to be triggered at real time (when a key is pressed).
       */
      setRealtimeTrigger(realtimeTrigger: boolean): StringFilterBuilder;
    }
    /**
     * A builder for table charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a table chart. The data is imported from a Google spreadsheet.
     *
     *     // Get sample data from a spreadsheet.
     *     var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
     *         '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *     var chartBuilder = Charts.newTableChart()
     *         .setDimensions(600, 500)
     *         .enablePaging(20)
     *         .setDataSourceUrl(dataSourceUrl);
     *
     *     var chart = chartBuilder.build();
     */
    interface TableChartBuilder {

      /**
       * Builds the chart.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#build()
       */
      build(): Chart;

      /**
       * Sets whether to enable paging through the data.
       *
       *
       * The default behavior is paging disabled. If paging is enabled the default page size is 10.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#enablePaging(Boolean)
       * @param enablePaging true if paging should be enabled, false otherwise.
       */
      enablePaging(enablePaging: boolean): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#enablePaging(Integer)
       * @param pageSize The number of rows in each page of the table.
       */
      enablePaging(pageSize: Integer): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#enablePaging(Integer,Integer)
       * @param pageSize The number of rows in each page of the table.
       * @param startPage The first table page to display (page numbers are zero-based).
       */
      enablePaging(pageSize: Integer, startPage: Integer): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#enableRtlTable(Boolean)
       * @param rtlEnabled true if right-to-left support should be enabled, false otherwise.
       */
      enableRtlTable(rtlEnabled: boolean): TableChartBuilder;

      /**
       * Sets whether to sort columns when the user clicks a column heading.
       *
       *
       * If sorting is enabled, when users click on the column header the rows are automatically
       * sorted. The default behavior is sorting enabled.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#enableSorting(Boolean)
       * @param enableSorting true to enable sorting by clicking on column headers, false otherwise.
       */
      enableSorting(enableSorting: boolean): TableChartBuilder;

      /**
       * Sets the data source URL that is used to pull data in from an external source, such as Google
       * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
       *
       *
       * For more information about querying data sources, check out the Google Charts documentation.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setDataSourceUrl(String)
       * @param url The data source URL, including any query parameters.
       */
      setDataSourceUrl(url: string): TableChartBuilder;

      /**
       * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
       * for setting the data table without needing to call build().
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setDataTable(DataTableBuilder)
       * @param tableBuilder A data table builder. A new data table is created instantly as part of this call, so any further updates to the builder won't be reflected in the chart.
       */
      setDataTable(tableBuilder: DataTableBuilder): TableChartBuilder;

      /**
       * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
       * first column should be a string, and contain the horizontal axis labels. Any number of columns
       * can follow, all must be numeric. Each column is displayed as a separate line.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setDataTable(DataTableSource)
       * @param table The data table to use for the chart.
       */
      setDataTable(table: DataTableSource): TableChartBuilder;

      /**
       * Sets the data view definition to use for the chart.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setDataViewDefinition(DataViewDefinition)
       * @param dataViewDefinition A data view definition object that defines the view that should be derived from the given data source for the chart drawing.
       */
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): TableChartBuilder;

      /**
       * Sets the dimensions for the chart.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setDimensions(Integer,Integer)
       * @param width The width of the chart, in pixels.
       * @param height The height of the chart, in pixels.
       */
      setDimensions(width: Integer, height: Integer): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setFirstRowNumber(Integer)
       * @param number The row number for the first row in the data table.
       */
      setFirstRowNumber(number: Integer): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setInitialSortingAscending(Integer)
       * @param column The number of the column according to which the table should be initially sorted.
       */
      setInitialSortingAscending(column: Integer): TableChartBuilder;

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
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setInitialSortingDescending(Integer)
       * @param column The number of the column according to which the table should be initially sorted.
       */
      setInitialSortingDescending(column: Integer): TableChartBuilder;

      /**
       * Sets advanced options for this chart. See the available options for
       * this chart. This method has no effect if the given option is invalid.
       *
       *
       *     // Build a table chart which renders HTML.
       *     var builder = Charts.newTableChart();
       *     builder.setOption('allowHtml', {@code true});
       *     var chart = builder.build();
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#setOption(String,Object)
       * @param option The option to set.
       * @param value The value to set.
       */
      setOption(option: string, value: object): TableChartBuilder;

      /**
       * Sets whether to show the row number as the first column of the table.
       *
       *
       * The default behavior is not showing row numbers.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#showRowNumberColumn(Boolean)
       * @param showRowNumber true if the first column of the table should show the row number, false otherwise.
       */
      showRowNumberColumn(showRowNumber: boolean): TableChartBuilder;

      /**
       * Sets whether alternating color style is assigned to odd and even rows of a table chart.
       *
       *
       * The default behavior is the rows having alternating color style.
       * https://developers.google.com/apps-script/reference/charts/table-chart-builder#useAlternatingRowStyle(Boolean)
       * @param alternate true if color styles should be alternating, false otherwise.
       */
      useAlternatingRowStyle(alternate: boolean): TableChartBuilder;
    }
    /**
     * A text style configuration object. Used in charts options to configure text style for elements
     * that accepts it, such as title, horizontal axis, vertical axis, legend and tooltip.
     *
     *     // This example creates a chart specifying different text styles for the title and axes.
     *       var sampleData = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Seasons")
     *           .addColumn(Charts.ColumnType.NUMBER, "Rainy Days")
     *           .addRow(["Winter", 5])
     *           .addRow(["Spring", 12])
     *           .addRow(["Summer", 8])
     *           .addRow(["Fall", 8])
     *           .build();
     *
     *       var titleTextStyleBuilder = Charts.newTextStyle()
     *           .setColor('#0000FF').setFontSize(26).setFontName('Ariel');
     *       var axisTextStyleBuilder = Charts.newTextStyle()
     *           .setColor('#3A3A3A').setFontSize(20).setFontName('Ariel');
     *       var titleTextStyle = titleTextStyleBuilder.build();
     *       var axisTextStyle = axisTextStyleBuilder.build();
     *
     *       var chart = Charts.newLineChart()
     *           .setTitleTextStyle(titleTextStyle)
     *           .setXAxisTitleTextStyle(axisTextStyle)
     *           .setYAxisTitleTextStyle(axisTextStyle)
     *           .setTitle('Rainy Days Per Season')
     *           .setXAxisTitle('Season')
     *           .setYAxisTitle('Number of Rainy Days')
     *           .setDataTable(sampleData)
     *           .build();
     */
    interface TextStyle {

      /**
       * Gets the color of the text style.
       *
       *
       *     // Creates a new text style that uses blue text and logs the color.
       *     var textStyle = Charts.newTextStyle().setColor('blue').build();
       *     Logger.log(textStyle.getColor());
       * https://developers.google.com/apps-script/reference/charts/text-style#getColor()
       */
      getColor(): string;

      /**
       * Gets the font name of the text style.
       *
       *
       *     // Creates a new text style that uses Ariel font and logs the font name.
       *     var textStyle = Charts.newTextStyle().setFontName('Ariel').build();
       *     Logger.log(textStyle.getFontName());
       * https://developers.google.com/apps-script/reference/charts/text-style#getFontName()
       */
      getFontName(): string;

      /**
       * Gets the font size of the text style.
       *
       *
       *     // Creates a new text style that uses 18 pixel font size and logs the font size.
       *     var textStyle = Charts.newTextStyle().setFontSize(18).build();
       *     Logger.log(textStyle.getFontSize());
       * https://developers.google.com/apps-script/reference/charts/text-style#getFontSize()
       */
      getFontSize(): number;
    }
    /**
     * A builder used to create TextStyle objects. It allows configuration of the text's
     * properties such as name, color, and size.
     *
     * The following example shows how to create a text style using the builder. For a more complete
     * example, refer to the documentation for TextStyle.
     *
     *     // Creates a new text style that uses 26-point, blue, Ariel font.
     *     var textStyleBuilder = Charts.newTextStyle()
     *         .setColor('#0000FF').setFontName('Ariel').setFontSize(26);
     *     var style = textStyleBuilder.build();
     */
    interface TextStyleBuilder {

      /**
       * Builds and returns a text style configuration object that was built using this builder.
       *
       *
       *     // Creates a new text style that uses 26-point blue font.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
       *     var style = textStyleBuilder.build();
       * https://developers.google.com/apps-script/reference/charts/text-style-builder#build()
       */
      build(): TextStyle;

      /**
       * Sets the color of the text style.
       *
       *
       *     // Creates a new text style that uses blue font.
       *     var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF');
       *     var style = textStyleBuilder.build();
       * https://developers.google.com/apps-script/reference/charts/text-style-builder#setColor(String)
       * @param cssValue The CSS value for the color (such as "blue" or "#00f").
       */
      setColor(cssValue: string): TextStyleBuilder;

      /**
       * Sets the font name of the text style
       *
       *
       *     // Creates a new text style that uses Ariel font.
       *     var textStyleBuilder = Charts.newTextStyle().setFontName('Ariel');
       *     var style = textStyleBuilder.build();
       * https://developers.google.com/apps-script/reference/charts/text-style-builder#setFontName(String)
       * @param fontName The font name to use for the text style.
       */
      setFontName(fontName: string): TextStyleBuilder;

      /**
       * Sets the font size of the text style.
       *
       *
       *     // Creates a new text style that uses 26-point font.
       *     var textStyleBuilder = Charts.newTextStyle().setFontSize(26);
       *     var style = textStyleBuilder.build();
       * https://developers.google.com/apps-script/reference/charts/text-style-builder#setFontSize(Number)
       * @param fontSize The font size in pixels to use for the text style.
       */
      setFontSize(fontSize: number): TextStyleBuilder;
    }
  }
}

declare var Charts: GoogleAppsScript.Charts.Charts;
