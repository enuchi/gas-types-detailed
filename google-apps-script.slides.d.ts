// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />

declare namespace GoogleAppsScript {
  namespace Slides {
    /**
     * A 3x3 matrix used to transform source coordinates (x1, y1) into destination coordinates (x2, y2)
     * according to matrix multiplication:
     *
     *     [ x2 ]   [ scaleX shearX translateX ] [ x1 ]
     *     [ y2 ] = [ shearY scaleY translateY ] [ y1 ]
     *     [ 1  ]   [   0      0        1      ] [ 1  ]
     *
     * After transformation,
     *
     *     x2 = scaleX * x1 + shearX * y1 + translateX
     *     y2 = scaleY * y1 + shearY * x1 + translateY
     */
    interface AffineTransform {

      /**
       * Gets the X coordinate scaling element.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getScaleX()
       */
      getScaleX(): number;

      /**
       * Gets the Y coordinate scaling element.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getScaleY()
       */
      getScaleY(): number;

      /**
       * Gets the X coordinate shearing element.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getShearX()
       */
      getShearX(): number;

      /**
       * Gets the Y coordinate shearing element.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getShearY()
       */
      getShearY(): number;

      /**
       * Gets the X coordinate translation element in points.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getTranslateX()
       */
      getTranslateX(): number;

      /**
       * Gets the Y coordinate translation element in points.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#getTranslateY()
       */
      getTranslateY(): number;

      /**
       * Returns a new AffineTransformBuilder based on this transform.
       * https://developers.google.com/apps-script/reference/slides/affine-transform#toBuilder()
       */
      toBuilder(): AffineTransformBuilder;
    }
    /**
     * A builder for AffineTransform objects. Defaults to the identity transform.
     *
     * Call AffineTransformBuilder#build() to get the AffineTransform object.
     *
     *     var transform =
     *         SlidesApp.newAffineTransformBuilder().setScaleX(2.0).setShearY(1.1).build();
     *
     *     The resulting transform matrix is
     *       [ 2.0   0.0   0.0 ]
     *       [ 1.1   1.0   0.0 ]
     *       [  0     0     1  ]
     */
    interface AffineTransformBuilder {

      /**
       * Creates an AffineTransform object initialized with the elements set in the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#build()
       */
      build(): AffineTransform;

      /**
       * Sets the X coordinate scaling element and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setScaleX(Number)
       * @param scaleX
       */
      setScaleX(scaleX: number): AffineTransformBuilder;

      /**
       * Sets the Y coordinate scaling element and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setScaleY(Number)
       * @param scaleY
       */
      setScaleY(scaleY: number): AffineTransformBuilder;

      /**
       * Sets the X coordinate shearing element and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setShearX(Number)
       * @param shearX
       */
      setShearX(shearX: number): AffineTransformBuilder;

      /**
       * Sets the Y coordinate shearing element and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setShearY(Number)
       * @param shearY
       */
      setShearY(shearY: number): AffineTransformBuilder;

      /**
       * Sets the X coordinate translation element in points, and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setTranslateX(Number)
       * @param translateX
       */
      setTranslateX(translateX: number): AffineTransformBuilder;

      /**
       * Sets the Y coordinate translation element in points, and returns the builder.
       * https://developers.google.com/apps-script/reference/slides/affine-transform-builder#setTranslateY(Number)
       * @param translateY
       */
      setTranslateY(translateY: number): AffineTransformBuilder;
    }
    /**
     * The alignment position to apply.
     */
    enum AlignmentPosition { CENTER, HORIZONTAL_CENTER, VERTICAL_CENTER }
    /**
     * The kinds of start and end forms with which linear geometry can be rendered.
     *
     * Some values are based on the "ST_LineEndType" simple type described in section 20.1.10.33 of
     * of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
     * edition.
     */
    enum ArrowStyle { UNSUPPORTED, NONE, STEALTH_ARROW, FILL_ARROW, FILL_CIRCLE, FILL_SQUARE, FILL_DIAMOND, OPEN_ARROW, OPEN_CIRCLE, OPEN_SQUARE, OPEN_DIAMOND }
    /**
     * An element of text that is dynamically replaced with content that can change over time, such as a
     * slide number.
     */
    interface AutoText {

      /**
       * Returns the type of auto text. Returns null if the auto text has been deleted.
       * https://developers.google.com/apps-script/reference/slides/auto-text#getAutoTextType()
       */
      getAutoTextType(): AutoTextType;

      /**
       * Returns the index of the auto text. Returns null if the auto text has been deleted.
       * https://developers.google.com/apps-script/reference/slides/auto-text#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns a TextRange spanning the auto text. Returns null if the auto text has
       * been deleted.
       * https://developers.google.com/apps-script/reference/slides/auto-text#getRange()
       */
      getRange(): TextRange;
    }
    /**
     * The types of auto text.
     */
    enum AutoTextType { UNSUPPORTED, SLIDE_NUMBER }
    /**
     * Describes the border around an element.
     */
    interface Border {

      /**
       * Gets the DashStyle of the border.
       * https://developers.google.com/apps-script/reference/slides/border#getDashStyle()
       */
      getDashStyle(): DashStyle;

      /**
       * Gets the LineFill of the border.
       * https://developers.google.com/apps-script/reference/slides/border#getLineFill()
       */
      getLineFill(): LineFill;

      /**
       * Gets the thickness of the border in points. Returns null if the element does not have a
       * border.
       * https://developers.google.com/apps-script/reference/slides/border#getWeight()
       */
      getWeight(): number;

      /**
       * Gets whether the border is visible or not.
       * https://developers.google.com/apps-script/reference/slides/border#isVisible()
       */
      isVisible(): boolean;

      /**
       * Sets the DashStyle of the border.
       *
       *
       * Setting a DashStyle on a transparent border makes it visible.
       * https://developers.google.com/apps-script/reference/slides/border#setDashStyle(DashStyle)
       * @param style
       */
      setDashStyle(style: DashStyle): Border;

      /**
       * Sets the border to be transparent.
       * https://developers.google.com/apps-script/reference/slides/border#setTransparent()
       */
      setTransparent(): Border;

      /**
       * Sets the thickness of the border in points.
       *
       *
       * Setting a weight on a transparent border makes it visible.
       * https://developers.google.com/apps-script/reference/slides/border#setWeight(Number)
       * @param points
       */
      setWeight(points: number): Border;
    }
    /**
     * The table cell merge states.
     */
    enum CellMergeState { NORMAL, HEAD, MERGED }
    /**
     * An opaque color
     */
    interface Color {

      /**
       * Converts this color to an RgbColor.
       * https://developers.google.com/apps-script/reference/slides/color#asRgbColor()
       */
      asRgbColor(): Base.RgbColor;

      /**
       * Converts this color to a ThemeColor.
       * https://developers.google.com/apps-script/reference/slides/color#asThemeColor()
       */
      asThemeColor(): ThemeColor;

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/slides/color#getColorType()
       */
      getColorType(): Base.ColorType;
    }
    /**
     * A color scheme defines a mapping from members of ThemeColorType to the actual colors used
     * to render them.
     */
    interface ColorScheme {

      /**
       * Returns the concrete Color associated with the ThemeColorType in this color
       * scheme.
       *
       *
       * The returned color is guaranteed to not be an instance of ThemeColor.
       * https://developers.google.com/apps-script/reference/slides/color-scheme#getConcreteColor(ThemeColorType)
       * @param theme The theme color to derive the concrete color from.
       */
      getConcreteColor(theme: ThemeColorType): Color;

      /**
       * Returns a list of all possible theme color types in a color scheme.
       * https://developers.google.com/apps-script/reference/slides/color-scheme#getThemeColors()
       */
      getThemeColors(): ThemeColorType[];

      /**
       * Sets the concrete color associated with the ThemeColorType in this color scheme to the
       * given color.
       * https://developers.google.com/apps-script/reference/slides/color-scheme#setConcreteColor(ThemeColorType,Color)
       * @param type The theme color type.
       * @param color The color to set the theme color type to.
       */
      setConcreteColor(type: ThemeColorType, color: Color): ColorScheme;

      /**
       * Sets the concrete color associated with the ThemeColorType in this color scheme to the
       * given color in RGB format.
       * https://developers.google.com/apps-script/reference/slides/color-scheme#setConcreteColor(ThemeColorType,Integer,Integer,Integer)
       * @param type The theme color type.
       * @param red The red value of the color to set the theme color type to (between 0 and 255).
       * @param green The green value of the color to set the theme color type to (between 0 and 255).
       * @param blue The blue value of the color to set the theme color type to (between 0 and 255).
       */
      setConcreteColor(type: ThemeColorType, red: Integer, green: Integer, blue: Integer): ColorScheme;

      /**
       * Sets the concrete color associated with the ThemeColorType in this color scheme to the
       * given color in HEX format.
       *
       *
       * The hex string must be in the format '#RRGGBB'.
       * https://developers.google.com/apps-script/reference/slides/color-scheme#setConcreteColor(ThemeColorType,String)
       * @param type The theme color type.
       * @param hexColor The hex color to set the theme color type to, such as '#F304a7'.
       */
      setConcreteColor(type: ThemeColorType, hexColor: string): ColorScheme;
    }
    /**
     * The connection site on a PageElement that can connect to a connector.
     */
    interface ConnectionSite {

      /**
       * Returns the index of the connection site. The index is unique among all the connection sites on
       * the same page element.
       *
       *
       * In most cases, it corresponds to the predefined connection site index from the ECMA-376
       * standard. More information on those connection sites can be found in the description of the
       * "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text
       * Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part
       * 1 of ECMA-376
       * 5th edition.
       * https://developers.google.com/apps-script/reference/slides/connection-site#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the PageElement that the connection site is on.
       * https://developers.google.com/apps-script/reference/slides/connection-site#getPageElement()
       */
      getPageElement(): PageElement;
    }
    /**
     * The content alignments for a Shape or TableCell. The supported alignments
     * correspond to predefined text anchoring types from the ECMA-376 standard.
     *
     * More information on those alignments can be found in the description of
     * the ST_TextAnchoringType simple type in section 20.1.10.59 of "Office Open XML File
     * Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
     * edition.
     */
    enum ContentAlignment { UNSUPPORTED, TOP, MIDDLE, BOTTOM }
    /**
     * The kinds of dashes with which linear geometry can be rendered. These values are based on the
     * "ST_PresetLineDashVal" simple type described in section 20.1.10.48 of "Office Open XML File
     * Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
     * edition.
     */
    enum DashStyle { UNSUPPORTED, SOLID, DOT, DASH, DASH_DOT, LONG_DASH, LONG_DASH_DOT }
    /**
     * Describes the page element's background
     */
    interface Fill {

      /**
       * Get the solid fill of this background, or null if the fill type is not FillType.SOLID.
       * https://developers.google.com/apps-script/reference/slides/fill#getSolidFill()
       */
      getSolidFill(): SolidFill;

      /**
       * Get the type of this fill.
       * https://developers.google.com/apps-script/reference/slides/fill#getType()
       */
      getType(): FillType;

      /**
       * Whether the background is visible.
       * https://developers.google.com/apps-script/reference/slides/fill#isVisible()
       */
      isVisible(): boolean;

      /**
       * Sets the solid fill to the given Color.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(Color)
       * @param color
       */
      setSolidFill(color: Color): void;

      /**
       * Sets the solid fill to the given alpha and Color.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(Color,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: Color, alpha: number): void;

      /**
       * Sets the solid fill to the given RGB values.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(Integer,Integer,Integer)
       * @param red
       * @param green
       * @param blue
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer): void;

      /**
       * Sets the solid fill to the given alpha and RGB values.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(Integer,Integer,Integer,Number)
       * @param red
       * @param green
       * @param blue
       * @param alpha
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;

      /**
       * Sets the solid fill to the given hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(String)
       * @param hexString
       */
      setSolidFill(hexString: string): void;

      /**
       * Sets the solid fill to the given alpha and hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(String,Number)
       * @param hexString
       * @param alpha
       */
      setSolidFill(hexString: string, alpha: number): void;

      /**
       * Sets the solid fill to the given ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(ThemeColorType)
       * @param color
       */
      setSolidFill(color: ThemeColorType): void;

      /**
       * Sets the solid fill to the given alpha and ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/fill#setSolidFill(ThemeColorType,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: ThemeColorType, alpha: number): void;

      /**
       * Sets the background to transparent.
       * https://developers.google.com/apps-script/reference/slides/fill#setTransparent()
       */
      setTransparent(): void;
    }
    /**
     * The kinds of fill.
     */
    enum FillType { UNSUPPORTED, NONE, SOLID }
    /**
     * A collection of PageElements joined as a single unit.
     */
    interface Group {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/group#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Group;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/group#bringForward()
       */
      bringForward(): Group;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/group#bringToFront()
       */
      bringToFront(): Group;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/group#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Gets the collection of page elements in the group. The minimum size of a group is 2.
       * https://developers.google.com/apps-script/reference/slides/group#getChildren()
       */
      getChildren(): PageElement[];

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/group#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/group#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/group#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/group#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/group#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/group#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/group#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/group#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/group#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#getTop()
       */
      getTop(): number;

      /**
       * Gets the page element's transform.
       *
       *
       * The initial transform for a newly created Group is always the identity transform:
       * 1.0 scale parameters, and 0.0 shear and translate parameters.
       * https://developers.google.com/apps-script/reference/slides/group#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/group#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Group;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/group#remove()
       */
      remove(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Group;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Group;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/group#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/group#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/group#sendBackward()
       */
      sendBackward(): Group;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/group#sendToBack()
       */
      sendToBack(): Group;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/group#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Group;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Group;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Group;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/group#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Group;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/group#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Group;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Group;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/group#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Group;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/group#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Group;

      /**
       * Ungroups the elements of the group.
       *
       *
       * The group itself is removed.
       *
       *
       * Groups inside other groups cannot be ungrouped.
       * https://developers.google.com/apps-script/reference/slides/group#ungroup()
       */
      ungroup(): void;
    }
    /**
     * A PageElement representing an image.
     */
    interface Image {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/image#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Image;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/image#bringForward()
       */
      bringForward(): Image;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/image#bringToFront()
       */
      bringToFront(): Image;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/image#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/slides/image#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this image as a blob.
       * https://developers.google.com/apps-script/reference/slides/image#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Returns the Border of the image.
       * https://developers.google.com/apps-script/reference/slides/image#getBorder()
       */
      getBorder(): Border;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/image#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Gets a URL to the image.
       *
       *
       * This URL is tagged with the account of the requester, so anyone with the URL effectively
       * accesses the image as the original requester. Access to the image may be lost if the
       * presentation's sharing settings change. The returned URL expires after a short period of time.
       * https://developers.google.com/apps-script/reference/slides/image#getContentUrl()
       */
      getContentUrl(): string;

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/image#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/image#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/image#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the Link or null if there is no link.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/image#getLink()
       */
      getLink(): Link;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/image#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/image#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/image#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/image#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#getRotation()
       */
      getRotation(): number;

      /**
       * Gets the image's source URL, if available.
       *
       *
       * When an image is inserted by URL, returns the URL provided during image insertion.
       * https://developers.google.com/apps-script/reference/slides/image#getSourceUrl()
       */
      getSourceUrl(): string;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/image#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/image#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/image#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Image;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/image#remove()
       */
      remove(): void;

      /**
       * Removes a Link.
       *
       *
       *     shape.removeLink();
       * https://developers.google.com/apps-script/reference/slides/image#removeLink()
       */
      removeLink(): void;

      /**
       * Replaces this image with an image described by a BlobSource object.
       *
       *
       * Inserting the image fetches it from the
       * BlobSource once and a copy is stored for display inside the presentation.
       * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
       * PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the size of the existing image.
       *
       *
       *     var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
       *     // Get the Drive image file with the given ID.
       *     var driveImage = DriveApp.getFileById(fileId);
       *     image.replace(driveImage);
       * https://developers.google.com/apps-script/reference/slides/image#replace(BlobSource)
       * @param blobSource The image data.
       */
      replace(blobSource: Base.BlobSource): Image;

      /**
       * Replaces this image with an image described by a Image object, optionally cropping
       * the image to fit.
       *
       *
       * Inserting the image fetches it from the
       * BlobSource once and a copy is stored for display inside the presentation.
       * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
       * PNG, JPEG, or GIF format.
       *
       *
       *     var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
       *     // Get the Drive image file with the given ID.
       *     var driveImage = DriveApp.getFileById(fileId);
       *     // Replace and crop the drive image.
       *     image.replace(driveImage, true);
       * https://developers.google.com/apps-script/reference/slides/image#replace(BlobSource,Boolean)
       * @param blobSource The image data.
       * @param crop If true, crops the image to fit the existing image's size. Otherwise, the image is scaled and centered.
       */
      replace(blobSource: Base.BlobSource, crop: boolean): Image;

      /**
       * Replaces this image with another image downloaded from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the size of the existing image.
       * https://developers.google.com/apps-script/reference/slides/image#replace(String)
       * @param imageUrl The URL to download the image from.
       */
      replace(imageUrl: string): Image;

      /**
       * Replaces this image with another image downloaded from the provided URL, optionally cropping
       * the image to fit.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB.
       * https://developers.google.com/apps-script/reference/slides/image#replace(String,Boolean)
       * @param imageUrl The URL to download the image from.
       * @param crop If true, crops the image to fit the existing image's size. Otherwise, the image is scaled and centered.
       */
      replace(imageUrl: string, crop: boolean): Image;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Image;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Image;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/image#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/image#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/image#sendBackward()
       */
      sendBackward(): Image;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/image#sendToBack()
       */
      sendToBack(): Image;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/image#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Image;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Image;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Image;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/image#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): Link;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     shape.setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/image#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): Link;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/image#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): Link;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       *     // Set a link to the URL.
       *     shape.setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/image#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): Link;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/image#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Image;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/image#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Image;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Image;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/image#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Image;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/image#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Image;
    }
    /**
     * A layout in a presentation.
     *
     * Each layout serves as a template for slides that inherit from it, determining how content on
     * those slides is arranged and styled.
     */
    interface Layout {

      /**
       * Gets the page's background.
       * https://developers.google.com/apps-script/reference/slides/layout#getBackground()
       */
      getBackground(): PageBackground;

      /**
       * Gets the ColorScheme associated with the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getColorScheme()
       */
      getColorScheme(): ColorScheme;

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getImages()
       */
      getImages(): Image[];

      /**
       * Gets the name of the layout.
       * https://developers.google.com/apps-script/reference/slides/layout#getLayoutName()
       */
      getLayoutName(): string;

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getLines()
       */
      getLines(): Line[];

      /**
       * Gets the master that the layout is based on.
       * https://developers.google.com/apps-script/reference/slides/layout#getMaster()
       */
      getMaster(): Master;

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/layout#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/layout#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Gets the type of the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getPageType()
       */
      getPageType(): PageType;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/layout#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/layout#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/layout#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#getWordArts()
       */
      getWordArts(): WordArt[];

      /**
       * Groups all the specified page elements.
       *
       *
       * There should be at least two page elements on the same page that are not already in another
       * group. Some page elements, such as Videos, Tables and placeholder Shapes cannot be grouped.
       * https://developers.google.com/apps-script/reference/slides/layout#group(PageElement)
       * @param pageElements The elements to group together.
       */
      group(pageElements: PageElement[]): Group;

      /**
       * Inserts a copy of the provided Group on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a group between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var group = otherPresentationSlide.getGroups()[0];
       *     currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertGroup(Group)
       * @param group The group to be copied and inserted.
       */
      insertGroup(group: Group): Group;

      /**
       * Inserts an image at the top left corner of the page with a default size from the specified
       * image blob.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     slide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/layout#insertImage(BlobSource)
       * @param blobSource The image data.
       */
      insertImage(blobSource: Base.BlobSource): Image;

      /**
       * Inserts an image on the page with the provided position and size from the specified image blob.
       *
       *
       * The image is fetched from the provided BlobSource once at insertion time and a copy
       * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
       * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     var position = {left: 0, top: 0};
       *     var size = {width: 300, height: 100};
       *     slide.insertImage(image, position.left, position.top, size.width, size.height);
       * https://developers.google.com/apps-script/reference/slides/layout#insertImage(BlobSource,Number,Number,Number,Number)
       * @param blobSource The image data.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Image on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy an image between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var image = otherPresentationSlide.getImages[0];
       *     currentPresentationSlide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/layout#insertImage(Image)
       * @param image The image to be copied and inserted.
       */
      insertImage(image: Image): Image;

      /**
       * Inserts an image at the top left corner of the page with a default size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/layout#insertImage(String)
       * @param imageUrl The image URL.
       */
      insertImage(imageUrl: string): Image;

      /**
       * Inserts an image on the page with the provided position and size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       * https://developers.google.com/apps-script/reference/slides/layout#insertImage(String,Number,Number,Number,Number)
       * @param imageUrl The image URL.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Line on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a line between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var line = otherPresentationSlide.getLines[0];
       *     currentPresentationSlide.insertLine(line);
       * https://developers.google.com/apps-script/reference/slides/layout#insertLine(Line)
       * @param line The line to be copied and inserted.
       */
      insertLine(line: Line): Line;

      /**
       * Inserts a line on the page connecting two connection sites. The two
       * connection sites must be on this page.
       *
       *
       *     // Insert a line in the first slide of the presentation connecting two shapes.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       *     var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
       *     slide.insertLine(
       *         SlidesApp.LineCategory.BENT,
       *         shape1.getConnectionSites()[0],
       *         shape2.getConnectionSites()[1]);
       * https://developers.google.com/apps-script/reference/slides/layout#insertLine(LineCategory,ConnectionSite,ConnectionSite)
       * @param lineCategory The category of the line to insert.
       * @param startConnectionSite The connection site where the start of the line is to be connected.
       * @param endConnectionSite The connection site where the end of the line is to be connected.
       */
      insertLine(lineCategory: LineCategory, startConnectionSite: ConnectionSite, endConnectionSite: ConnectionSite): Line;

      /**
       * Inserts a line on the page.
       *
       *
       *     // Insert a line in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var startPoint = {left: 10, top: 10};
       *     var endPoint = {left: 40, top: 40};
       *     slide.insertLine(
       *         SlidesApp.LineCategory.STRAIGHT,
       *         startPoint.left,
       *         startPoint.top,
       *         endPoint.left,
       *         endPoint.top);
       * https://developers.google.com/apps-script/reference/slides/layout#insertLine(LineCategory,Number,Number,Number,Number)
       * @param lineCategory The category of the line to insert.
       * @param startLeft The horizontal position of the start point of the line, measured in points from the upper left corner of the page.
       * @param startTop The vertical position of the start point of the line, measured in points from the upper left corner of the page.
       * @param endLeft The horizontal position of the end point of the line, measured in points from the upper left corner of the page.
       * @param endTop The vertical position of the end point of the line, measured in points from the upper left corner of the page.
       */
      insertLine(lineCategory: LineCategory, startLeft: number, startTop: number, endLeft: number, endTop: number): Line;

      /**
       * Inserts a copy of the provided PageElement on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a page element between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = otherPresentationSlide.getPageElements[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertPageElement(pageElement);
       * https://developers.google.com/apps-script/reference/slides/layout#insertPageElement(PageElement)
       * @param pageElement The page element to be copied and inserted.
       */
      insertPageElement(pageElement: PageElement): PageElement;

      /**
       * Inserts a copy of the provided Shape on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a shape between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape = otherPresentationSlide.getShapes[0];
       *     currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertShape(Shape)
       * @param shape The shape to be copied and inserted.
       */
      insertShape(shape: Shape): Shape;

      /**
       * Inserts a shape on the page.
       *
       *
       * The shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert a shape in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       * https://developers.google.com/apps-script/reference/slides/layout#insertShape(ShapeType)
       * @param shapeType The type of shape to insert.
       */
      insertShape(shapeType: ShapeType): Shape;

      /**
       * Inserts a shape on the page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertShape(ShapeType,Number,Number,Number,Number)
       * @param shapeType The type of shape to insert.
       * @param left The horizontal position of the shape, measured from the upper left corner of the page.
       * @param top The vertical position of the shape, measured from the upper left corner of the page.
       * @param width The width of the shape.
       * @param height The height of the shape.
       */
      insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a Google Sheets chart on the page.
       *
       *
       * The chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChart(chart);
       * https://developers.google.com/apps-script/reference/slides/layout#insertSheetsChart(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart on the page with the provided position and size.
       *
       *
       * In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
       * to the provided size.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChart(
       *         chart,
       *         position.left,
       *         position.top,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/layout#insertSheetsChart(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): SheetsChart;

      /**
       * Inserts a copy of the provided SheetsChart on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a sheets chart between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertSheetsChart(sheetsChart);
       * https://developers.google.com/apps-script/reference/slides/layout#insertSheetsChart(SheetsChart)
       * @param sheetsChart The sheets chart to be copied and inserted.
       */
      insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart as an Image on the page.
       *
       *
       * The image of the chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted image of chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertSheetsChartAsImage(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;

      /**
       * Inserts a Google Sheets chart as an Image on the page with the provided position and
       * size.
       *
       *
       * In order to maintain the chart image's aspect ratio, the image is scaled and centered with
       * respect to the provided size.
       *
       *
       * The inserted image of the chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChartAsImage(
       *         chart,
       *         position.left,
       *         position.right,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/layout#insertSheetsChartAsImage(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a table on the page.
       *
       *
       * The table is centered on the page with default size and evenly distributed rows and columns.
       * https://developers.google.com/apps-script/reference/slides/layout#insertTable(Integer,Integer)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       */
      insertTable(numRows: Integer, numColumns: Integer): Table;

      /**
       * Inserts a table on the page with the provided position and size.
       *
       *
       * Rows and columns are evenly distributed in the created table.
       * https://developers.google.com/apps-script/reference/slides/layout#insertTable(Integer,Integer,Number,Number,Number,Number)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       * @param left The horizontal position of the table, measured from the upper left corner of the page.
       * @param top The vertical position of the table, measured from the upper left corner of the page.
       * @param width The width of the table.
       * @param height The minimum height of the table. The actual height of the rendered table depends on factors such as text font size.
       */
      insertTable(numRows: Integer, numColumns: Integer, left: number, top: number, width: number, height: number): Table;

      /**
       * Inserts a copy of the provided Table on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a table between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var table = otherPresentationSlide.getTables[0];
       *     currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertTable(Table)
       * @param table The table to be copied and inserted.
       */
      insertTable(table: Table): Table;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       * The text box shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertTextBox(String)
       * @param text The string the text box shape should contain.
       */
      insertTextBox(text: string): Shape;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation. This text box is a square
       *     // with a length of 10 points on each side.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertTextBox(String,Number,Number,Number,Number)
       * @param text The string the text box shape should contain.
       * @param left The horizontal position of the text box shape, measured from the upper left corner of the page.
       * @param top The vertical position of the text box shape, measured from the upper left corner of the page.
       * @param width The width of the text box shape.
       * @param height The height of the text box shape.
       */
      insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a video at the top left corner of the page with a default size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/layout#insertVideo(String)
       * @param videoUrl The URL of the video to insert.
       */
      insertVideo(videoUrl: string): Video;

      /**
       * Inserts a video on the page with the provided position and size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/layout#insertVideo(String,Number,Number,Number,Number)
       * @param videoUrl The URL of the video to insert.
       * @param left The horizontal position of the video in points, measured from the upper left corner of the page.
       * @param top The vertical position of the video in points, measured from the upper left corner of the page.
       * @param width The width of the video in points.
       * @param height The height of the video in points.
       */
      insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;

      /**
       * Inserts a copy of the provided Video on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a video between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var video = otherPresentationSlide.getVideos[0];
       *     currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#insertVideo(Video)
       * @param video The video to be copied and inserted.
       */
      insertVideo(video: Video): Video;

      /**
       * Inserts a copy of the provided WordArt on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a word art between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var wordArt = otherPresentationSlide.getWordArts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertWordArt(wordArt);
       * https://developers.google.com/apps-script/reference/slides/layout#insertWordArt(WordArt)
       * @param wordArt The group to be copied and inserted.
       */
      insertWordArt(wordArt: WordArt): WordArt;

      /**
       * Removes the page.
       * https://developers.google.com/apps-script/reference/slides/layout#remove()
       */
      remove(): void;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/layout#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/layout#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Selects the Page in the active presentation as the current page selection and removes any previous selection.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       *     // Select the first slide as the current page selection and replace any previous selection.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/layout#selectAsCurrentPage()
       */
      selectAsCurrentPage(): void;
    }
    /**
     * A PageElement representing a line.
     */
    interface Line {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/line#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Line;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/line#bringForward()
       */
      bringForward(): Line;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/line#bringToFront()
       */
      bringToFront(): Line;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/line#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/line#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Gets the DashStyle of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getDashStyle()
       */
      getDashStyle(): DashStyle;

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/line#getDescription()
       */
      getDescription(): string;

      /**
       * Returns the end point of the line, measured from the upper-left corner of the page.
       * https://developers.google.com/apps-script/reference/slides/line#getEnd()
       */
      getEnd(): Point;

      /**
       * Gets the ArrowStyle of the arrow at the end of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getEndArrow()
       */
      getEndArrow(): ArrowStyle;

      /**
       * Returns the connection at the end of the line, or null if there is no connection.
       * https://developers.google.com/apps-script/reference/slides/line#getEndConnection()
       */
      getEndConnection(): ConnectionSite;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/line#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/line#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#getLeft()
       */
      getLeft(): number;

      /**
       * Gets the LineCategory of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getLineCategory()
       */
      getLineCategory(): LineCategory;

      /**
       * Gets the LineFill of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getLineFill()
       */
      getLineFill(): LineFill;

      /**
       * Gets the LineType of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getLineType()
       */
      getLineType(): LineType;

      /**
       * Returns the Link or null if there is no link.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/line#getLink()
       */
      getLink(): Link;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/line#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/line#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/line#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/line#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the start point of the line, measured from the upper-left corner of the page.
       * https://developers.google.com/apps-script/reference/slides/line#getStart()
       */
      getStart(): Point;

      /**
       * Gets the ArrowStyle of the arrow at the beginning of the line.
       * https://developers.google.com/apps-script/reference/slides/line#getStartArrow()
       */
      getStartArrow(): ArrowStyle;

      /**
       * Returns the connection at the beginning of the line, or null if there is no connection.
       * https://developers.google.com/apps-script/reference/slides/line#getStartConnection()
       */
      getStartConnection(): ConnectionSite;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/line#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/line#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the thickness of the line in points.
       * https://developers.google.com/apps-script/reference/slides/line#getWeight()
       */
      getWeight(): number;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#getWidth()
       */
      getWidth(): number;

      /**
       * Returns true if the line is a connector, or false if not.
       *
       *
       * Connector is a type of line that is used to connect connections sites on applicable page
       * elements. Each end of the connector can be connected to at most one connection site.
       * https://developers.google.com/apps-script/reference/slides/line#isConnector()
       */
      isConnector(): boolean;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/line#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Line;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/line#remove()
       */
      remove(): void;

      /**
       * Removes a Link.
       *
       *
       *     shape.removeLink();
       * https://developers.google.com/apps-script/reference/slides/line#removeLink()
       */
      removeLink(): void;

      /**
       * Reroutes the start and end of the line to the closest two connection sites on the connected
       * page elements. The start and end of the line must be connected to different page elements.
       * https://developers.google.com/apps-script/reference/slides/line#reroute()
       */
      reroute(): Line;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Line;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Line;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/line#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/line#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/line#sendBackward()
       */
      sendBackward(): Line;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/line#sendToBack()
       */
      sendToBack(): Line;

      /**
       * Sets the DashStyle of the line.
       * https://developers.google.com/apps-script/reference/slides/line#setDashStyle(DashStyle)
       * @param style The style of the dashing to set for this line.
       */
      setDashStyle(style: DashStyle): Line;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/line#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Line;

      /**
       * Sets the position of the end point of the line.
       *
       *
       * The line path may be adjusted after the position changes.
       * https://developers.google.com/apps-script/reference/slides/line#setEnd(Number,Number)
       * @param left The horizontal position of the end point of the line, measured in points from the upper left corner of the page.
       * @param top The vertical position of the end point of the line, measured in points from the upper left corner of the page.
       */
      setEnd(left: number, top: number): Line;

      /**
       * Sets the position of the end point of the line.
       *
       *
       * The line path may be adjusted after the position changes.
       * https://developers.google.com/apps-script/reference/slides/line#setEnd(Point)
       * @param point The end point of the line, whose position is measured from the upper left corner of the page.
       */
      setEnd(point: Point): Line;

      /**
       * Sets the ArrowStyle of the arrow at the end of the line.
       * https://developers.google.com/apps-script/reference/slides/line#setEndArrow(ArrowStyle)
       * @param style The style to set.
       */
      setEndArrow(style: ArrowStyle): Line;

      /**
       * Sets the connection at the end of the line. It moves the end of the line to the specified
       * connection site while keeping the other end intact.
       * https://developers.google.com/apps-script/reference/slides/line#setEndConnection(ConnectionSite)
       * @param connectionSite The connection site the end connection is updated to, or null if removing the end connection.
       */
      setEndConnection(connectionSite: ConnectionSite): Line;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Line;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Line;

      /**
       * Sets the LineCategory of the line.
       *
       *
       * You can only set the category on connectors. The connector may be
       * rerouted after changing its category.
       * https://developers.google.com/apps-script/reference/slides/line#setLineCategory(LineCategory)
       * @param lineCategory The line category to set.
       */
      setLineCategory(lineCategory: LineCategory): Line;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/line#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): Link;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     shape.setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/line#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): Link;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/line#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): Link;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       *     // Set a link to the URL.
       *     shape.setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/line#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): Link;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/line#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Line;

      /**
       * Sets the position of the start point of the line.
       *
       *
       * The line path may be adjusted after the position changes.
       * https://developers.google.com/apps-script/reference/slides/line#setStart(Number,Number)
       * @param left The horizontal position of the start point of the line, measured in points from the upper left corner of the page.
       * @param top The vertical position of the start point of the line, measured in points from the upper left corner of the page.
       */
      setStart(left: number, top: number): Line;

      /**
       * Sets the position of the start point of the line.
       *
       *
       * The line path may be adjusted after the position changes.
       * https://developers.google.com/apps-script/reference/slides/line#setStart(Point)
       * @param point The start point of the line, whose position is measured from the upper left corner of the page.
       */
      setStart(point: Point): Line;

      /**
       * Sets the ArrowStyle of the arrow at the beginning of the line.
       * https://developers.google.com/apps-script/reference/slides/line#setStartArrow(ArrowStyle)
       * @param style The new arrow style to set.
       */
      setStartArrow(style: ArrowStyle): Line;

      /**
       * Sets the connection at the beginning of the line. It moves the start of the line to the
       * specified connection site while keeping the other end intact.
       * https://developers.google.com/apps-script/reference/slides/line#setStartConnection(ConnectionSite)
       * @param connectionSite The connection site the start connection is updated to, or null if removing the start connection.
       */
      setStartConnection(connectionSite: ConnectionSite): Line;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/line#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Line;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Line;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/line#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Line;

      /**
       * Sets the thickness of the line in points.
       * https://developers.google.com/apps-script/reference/slides/line#setWeight(Number)
       * @param points The new thickness of the line in points.
       */
      setWeight(points: number): Line;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/line#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Line;
    }
    /**
     * The line category.
     *
     * The exact LineType created is determined based on the category and how it's routed to
     * connect to other page elements.
     */
    enum LineCategory { UNSUPPORTED, STRAIGHT, BENT, CURVED }
    /**
     * Describes the fill of a line or outline
     */
    interface LineFill {

      /**
       * Gets the type of the line fill.
       * https://developers.google.com/apps-script/reference/slides/line-fill#getFillType()
       */
      getFillType(): LineFillType;

      /**
       * Gets the solid fill of the line, or null if the fill type is not LineFillType.SOLID.
       * https://developers.google.com/apps-script/reference/slides/line-fill#getSolidFill()
       */
      getSolidFill(): SolidFill;

      /**
       * Sets the solid fill to the given Color.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(Color)
       * @param color
       */
      setSolidFill(color: Color): void;

      /**
       * Sets the solid fill to the given alpha and Color.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(Color,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: Color, alpha: number): void;

      /**
       * Sets the solid fill to the given RGB values.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(Integer,Integer,Integer)
       * @param red
       * @param green
       * @param blue
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer): void;

      /**
       * Sets the solid fill to the given alpha and RGB values.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(Integer,Integer,Integer,Number)
       * @param red
       * @param green
       * @param blue
       * @param alpha
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;

      /**
       * Sets the solid fill to the given hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(String)
       * @param hexString
       */
      setSolidFill(hexString: string): void;

      /**
       * Sets the solid fill to the given alpha and hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(String,Number)
       * @param hexString
       * @param alpha
       */
      setSolidFill(hexString: string, alpha: number): void;

      /**
       * Sets the solid fill to the given ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(ThemeColorType)
       * @param color
       */
      setSolidFill(color: ThemeColorType): void;

      /**
       * Sets the solid fill to the given alpha and ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/line-fill#setSolidFill(ThemeColorType,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: ThemeColorType, alpha: number): void;
    }
    /**
     * The kinds of line fill.
     */
    enum LineFillType { UNSUPPORTED, NONE, SOLID }
    /**
     * The line types.
     *
     * Derived from a subset of the values of the "ST_ShapeType" simple type in section 20.1.10.55 of
     * "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
     * edition.
     */
    enum LineType { UNSUPPORTED, STRAIGHT_CONNECTOR_1, BENT_CONNECTOR_2, BENT_CONNECTOR_3, BENT_CONNECTOR_4, BENT_CONNECTOR_5, CURVED_CONNECTOR_2, CURVED_CONNECTOR_3, CURVED_CONNECTOR_4, CURVED_CONNECTOR_5, STRAIGHT_LINE }
    /**
     * A hypertext link.
     */
    interface Link {

      /**
       * Returns the LinkType.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getLinkType()
       */
      getLinkType(): LinkType;

      /**
       * Returns the linked Slide for non-URL links types, if it exists. Returns null if
       * the slide doesn't exist in the presentation, or if the LinkType is LinkType.URL.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null && link.getLinkType() != SlidesApp.LinkType.URL) {
       *       Logger.log('Shape has link to slide: ' + link.getLinkedSlide());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getLinkedSlide()
       */
      getLinkedSlide(): Slide;

      /**
       * Returns the ID of the linked Slide or null if the LinkType is not
       * LinkType.SLIDE_ID.
       *
       *
       * Note that the slide with the returned ID might not exist.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_ID) {
       *       Logger.log('Shape has link to slide with ID: ' + link.getSlideId());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getSlideId()
       */
      getSlideId(): string;

      /**
       * Returns the zero-based index of the linked Slide or null if the LinkType is not LinkType.SLIDE_INDEX.
       *
       *
       * Note that the slide at the returned index might not exist.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_INDEX) {
       *       Logger.log('Shape has link to slide with index: ' + link.getSlideIndex());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getSlideIndex()
       */
      getSlideIndex(): Integer;

      /**
       * Returns the SlidePosition of the linked Slide or null if the LinkType is not LinkType.SLIDE_POSITION.
       *
       *
       * Note that the slide with the returned relative position might not exist.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_POSITION) {
       *       Logger.log('Shape has link to slide with relative position: ' + link.getSlidePosition());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getSlidePosition()
       */
      getSlidePosition(): SlidePosition;

      /**
       * Returns the URL to the external web page or null if the LinkType is not LinkType.URL.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null && link.getLinkType() == SlidesApp.LinkType.URL) {
       *       Logger.log('Shape has link to URL: ' + link.getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/slides/link#getUrl()
       */
      getUrl(): string;
    }
    /**
     * The types of a Link.
     */
    enum LinkType { UNSUPPORTED, URL, SLIDE_POSITION, SLIDE_ID, SLIDE_INDEX }
    /**
     * A list in the text.
     */
    interface List {

      /**
       * Returns the ID of the list.
       * https://developers.google.com/apps-script/reference/slides/list#getListId()
       */
      getListId(): string;

      /**
       * Returns all the Paragraphs in the list.
       * https://developers.google.com/apps-script/reference/slides/list#getListParagraphs()
       */
      getListParagraphs(): Paragraph[];
    }
    /**
     * Preset patterns of glyphs for lists in text.
     *
     * These presets use these glyphs:
     *
     * ARROW: An arrow, ➔, corresponding to a Unicode U+2794 code point
     *
     * ARROW3D: An arrow with 3D shading, ➢, corresponding to a Unicode U+27a2 code point
     *
     * CHECKBOX: A hollow square, ❏, corresponding to a Unicode U+274f code point
     *
     * CIRCLE: A hollow circle, ○, corresponding to a Unicode U+25cb code point
     *
     * DIAMOND: A solid diamond, ◆, corresponding to a Unicode U+25c6 code point
     *
     * `DIAMONDX: A diamond with an 'x', ❖, corresponding to a Unicode U+2756 code point
     *
     * HOLLOWDIAMOND: A hollow diamond, ◇, corresponding to a Unicode U+25c7 code point
     *
     * DISC: A solid circle, ●, corresponding to a Unicode U+25cf code point
     *
     * SQUARE: A solid square, ■, corresponding to a Unicode U+25a0 code point
     *
     * STAR: A star, ★, corresponding to a Unicode U+2605 code point
     *
     * ALPHA: A lowercase letter, like 'a', 'b', or 'c'.
     *
     * UPPERALPHA: An uppercase letter, like 'A', 'B', or 'C'.
     *
     * DIGIT: A number, like '1', '2', or '3'.
     *
     * ZERODIGIT: A number where single digit numbers are prefixed with a zero, like '01', '02',
     *       or '03'. Numbers with more than one digit are not prefixed a zero.
     *
     * ROMAN: A lowercase roman numeral, like 'i', 'ii', or 'iii'.
     *
     * UPPERROMAN: A uppercase roman numeral, like 'I', 'II', or 'III'.
     *
     * LEFTTRIANGLE: A triangle pointing left, ◄, corresponding to a Unicode U+25c4 code
     *       point
     */
    enum ListPreset { DISC_CIRCLE_SQUARE, DIAMONDX_ARROW3D_SQUARE, CHECKBOX, ARROW_DIAMOND_DISC, STAR_CIRCLE_SQUARE, ARROW3D_CIRCLE_SQUARE, LEFTTRIANGLE_DIAMOND_DISC, DIAMONDX_HOLLOWDIAMOND_SQUARE, DIAMOND_CIRCLE_SQUARE, DIGIT_ALPHA_ROMAN, DIGIT_ALPHA_ROMAN_PARENS, DIGIT_NESTED, UPPERALPHA_ALPHA_ROMAN, UPPERROMAN_UPPERALPHA_DIGIT, ZERODIGIT_ALPHA_ROMAN }
    /**
     * The list styling for a range of text.
     */
    interface ListStyle {

      /**
       * Applies the specified ListPreset to all of the paragraphs that overlap with the text.
       *
       *
       * The nesting level of each paragraph is determined by counting leading tabs in front of each
       * paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these
       * leading tabs are removed by this method.
       *
       *
       * If the paragraph immediately before paragraphs being updated is in a List with a
       * matching list preset and the paragraphs being updated are not already in a different list, the
       * paragraphs being updated are added to that preceding list.
       * https://developers.google.com/apps-script/reference/slides/list-style#applyListPreset(ListPreset)
       * @param listPreset
       */
      applyListPreset(listPreset: ListPreset): ListStyle;

      /**
       * Returns the rendered glyph for the text. Returns null if the text spans more than one
       * paragraph or the text is not in a list.
       * https://developers.google.com/apps-script/reference/slides/list-style#getGlyph()
       */
      getGlyph(): string;

      /**
       * Returns the List the text is in, or null if none of the text is in a list, or
       * part of the text is in a list, or the text is in multiple lists. Call isInList() to
       * determine whether the text is in a list.
       * https://developers.google.com/apps-script/reference/slides/list-style#getList()
       */
      getList(): List;

      /**
       * Returns the 0-based nesting level of the text. Returns null if the text is not in a
       * list or there are mixed values.
       * https://developers.google.com/apps-script/reference/slides/list-style#getNestingLevel()
       */
      getNestingLevel(): Integer;

      /**
       * Returns true if the text is in exactly one list, false if none of the text is
       * in a list, and null if only some of the text is in a list or if the text is in multiple
       * lists.
       * https://developers.google.com/apps-script/reference/slides/list-style#isInList()
       */
      isInList(): boolean;

      /**
       * Removes the paragraphs that overlap with the text from any lists.
       *
       *
       * The nesting level of each paragraph is visually preserved by adding indent to the start of
       * the corresponding paragraph.
       * https://developers.google.com/apps-script/reference/slides/list-style#removeFromList()
       */
      removeFromList(): ListStyle;
    }
    /**
     * A master in a presentation.
     *
     * Masters contains all common page elements and the common properties for a set of layouts. They
     * serve three purposes:
     *
     * Placeholder shapes on a master contain the default text styles and shape properties of all
     *       placeholder shapes on pages that use that master.
     *
     * The properties of a master page define the common page properties inherited by its layouts.
     *
     * Any other shapes on the master slide appear on all slides using that master, regardless of
     *       their layout.
     */
    interface Master {

      /**
       * Gets the page's background.
       * https://developers.google.com/apps-script/reference/slides/master#getBackground()
       */
      getBackground(): PageBackground;

      /**
       * Gets the ColorScheme associated with the page.
       * https://developers.google.com/apps-script/reference/slides/master#getColorScheme()
       */
      getColorScheme(): ColorScheme;

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getImages()
       */
      getImages(): Image[];

      /**
       * Gets this master's layouts.
       * https://developers.google.com/apps-script/reference/slides/master#getLayouts()
       */
      getLayouts(): Layout[];

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getLines()
       */
      getLines(): Line[];

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/master#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/master#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Gets the type of the page.
       * https://developers.google.com/apps-script/reference/slides/master#getPageType()
       */
      getPageType(): PageType;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/master#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/master#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/master#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/master#getWordArts()
       */
      getWordArts(): WordArt[];

      /**
       * Groups all the specified page elements.
       *
       *
       * There should be at least two page elements on the same page that are not already in another
       * group. Some page elements, such as Videos, Tables and placeholder Shapes cannot be grouped.
       * https://developers.google.com/apps-script/reference/slides/master#group(PageElement)
       * @param pageElements The elements to group together.
       */
      group(pageElements: PageElement[]): Group;

      /**
       * Inserts a copy of the provided Group on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a group between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var group = otherPresentationSlide.getGroups()[0];
       *     currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertGroup(Group)
       * @param group The group to be copied and inserted.
       */
      insertGroup(group: Group): Group;

      /**
       * Inserts an image at the top left corner of the page with a default size from the specified
       * image blob.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     slide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/master#insertImage(BlobSource)
       * @param blobSource The image data.
       */
      insertImage(blobSource: Base.BlobSource): Image;

      /**
       * Inserts an image on the page with the provided position and size from the specified image blob.
       *
       *
       * The image is fetched from the provided BlobSource once at insertion time and a copy
       * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
       * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     var position = {left: 0, top: 0};
       *     var size = {width: 300, height: 100};
       *     slide.insertImage(image, position.left, position.top, size.width, size.height);
       * https://developers.google.com/apps-script/reference/slides/master#insertImage(BlobSource,Number,Number,Number,Number)
       * @param blobSource The image data.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Image on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy an image between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var image = otherPresentationSlide.getImages[0];
       *     currentPresentationSlide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/master#insertImage(Image)
       * @param image The image to be copied and inserted.
       */
      insertImage(image: Image): Image;

      /**
       * Inserts an image at the top left corner of the page with a default size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/master#insertImage(String)
       * @param imageUrl The image URL.
       */
      insertImage(imageUrl: string): Image;

      /**
       * Inserts an image on the page with the provided position and size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       * https://developers.google.com/apps-script/reference/slides/master#insertImage(String,Number,Number,Number,Number)
       * @param imageUrl The image URL.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Line on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a line between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var line = otherPresentationSlide.getLines[0];
       *     currentPresentationSlide.insertLine(line);
       * https://developers.google.com/apps-script/reference/slides/master#insertLine(Line)
       * @param line The line to be copied and inserted.
       */
      insertLine(line: Line): Line;

      /**
       * Inserts a line on the page connecting two connection sites. The two
       * connection sites must be on this page.
       *
       *
       *     // Insert a line in the first slide of the presentation connecting two shapes.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       *     var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
       *     slide.insertLine(
       *         SlidesApp.LineCategory.BENT,
       *         shape1.getConnectionSites()[0],
       *         shape2.getConnectionSites()[1]);
       * https://developers.google.com/apps-script/reference/slides/master#insertLine(LineCategory,ConnectionSite,ConnectionSite)
       * @param lineCategory The category of the line to insert.
       * @param startConnectionSite The connection site where the start of the line is to be connected.
       * @param endConnectionSite The connection site where the end of the line is to be connected.
       */
      insertLine(lineCategory: LineCategory, startConnectionSite: ConnectionSite, endConnectionSite: ConnectionSite): Line;

      /**
       * Inserts a line on the page.
       *
       *
       *     // Insert a line in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var startPoint = {left: 10, top: 10};
       *     var endPoint = {left: 40, top: 40};
       *     slide.insertLine(
       *         SlidesApp.LineCategory.STRAIGHT,
       *         startPoint.left,
       *         startPoint.top,
       *         endPoint.left,
       *         endPoint.top);
       * https://developers.google.com/apps-script/reference/slides/master#insertLine(LineCategory,Number,Number,Number,Number)
       * @param lineCategory The category of the line to insert.
       * @param startLeft The horizontal position of the start point of the line, measured in points from the upper left corner of the page.
       * @param startTop The vertical position of the start point of the line, measured in points from the upper left corner of the page.
       * @param endLeft The horizontal position of the end point of the line, measured in points from the upper left corner of the page.
       * @param endTop The vertical position of the end point of the line, measured in points from the upper left corner of the page.
       */
      insertLine(lineCategory: LineCategory, startLeft: number, startTop: number, endLeft: number, endTop: number): Line;

      /**
       * Inserts a copy of the provided PageElement on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a page element between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = otherPresentationSlide.getPageElements[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertPageElement(pageElement);
       * https://developers.google.com/apps-script/reference/slides/master#insertPageElement(PageElement)
       * @param pageElement The page element to be copied and inserted.
       */
      insertPageElement(pageElement: PageElement): PageElement;

      /**
       * Inserts a copy of the provided Shape on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a shape between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape = otherPresentationSlide.getShapes[0];
       *     currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertShape(Shape)
       * @param shape The shape to be copied and inserted.
       */
      insertShape(shape: Shape): Shape;

      /**
       * Inserts a shape on the page.
       *
       *
       * The shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert a shape in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       * https://developers.google.com/apps-script/reference/slides/master#insertShape(ShapeType)
       * @param shapeType The type of shape to insert.
       */
      insertShape(shapeType: ShapeType): Shape;

      /**
       * Inserts a shape on the page.
       * https://developers.google.com/apps-script/reference/slides/master#insertShape(ShapeType,Number,Number,Number,Number)
       * @param shapeType The type of shape to insert.
       * @param left The horizontal position of the shape, measured from the upper left corner of the page.
       * @param top The vertical position of the shape, measured from the upper left corner of the page.
       * @param width The width of the shape.
       * @param height The height of the shape.
       */
      insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a Google Sheets chart on the page.
       *
       *
       * The chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChart(chart);
       * https://developers.google.com/apps-script/reference/slides/master#insertSheetsChart(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart on the page with the provided position and size.
       *
       *
       * In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
       * to the provided size.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChart(
       *         chart,
       *         position.left,
       *         position.top,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/master#insertSheetsChart(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): SheetsChart;

      /**
       * Inserts a copy of the provided SheetsChart on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a sheets chart between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertSheetsChart(sheetsChart);
       * https://developers.google.com/apps-script/reference/slides/master#insertSheetsChart(SheetsChart)
       * @param sheetsChart The sheets chart to be copied and inserted.
       */
      insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart as an Image on the page.
       *
       *
       * The image of the chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted image of chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertSheetsChartAsImage(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;

      /**
       * Inserts a Google Sheets chart as an Image on the page with the provided position and
       * size.
       *
       *
       * In order to maintain the chart image's aspect ratio, the image is scaled and centered with
       * respect to the provided size.
       *
       *
       * The inserted image of the chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChartAsImage(
       *         chart,
       *         position.left,
       *         position.right,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/master#insertSheetsChartAsImage(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a table on the page.
       *
       *
       * The table is centered on the page with default size and evenly distributed rows and columns.
       * https://developers.google.com/apps-script/reference/slides/master#insertTable(Integer,Integer)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       */
      insertTable(numRows: Integer, numColumns: Integer): Table;

      /**
       * Inserts a table on the page with the provided position and size.
       *
       *
       * Rows and columns are evenly distributed in the created table.
       * https://developers.google.com/apps-script/reference/slides/master#insertTable(Integer,Integer,Number,Number,Number,Number)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       * @param left The horizontal position of the table, measured from the upper left corner of the page.
       * @param top The vertical position of the table, measured from the upper left corner of the page.
       * @param width The width of the table.
       * @param height The minimum height of the table. The actual height of the rendered table depends on factors such as text font size.
       */
      insertTable(numRows: Integer, numColumns: Integer, left: number, top: number, width: number, height: number): Table;

      /**
       * Inserts a copy of the provided Table on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a table between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var table = otherPresentationSlide.getTables[0];
       *     currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertTable(Table)
       * @param table The table to be copied and inserted.
       */
      insertTable(table: Table): Table;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       * The text box shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertTextBox(String)
       * @param text The string the text box shape should contain.
       */
      insertTextBox(text: string): Shape;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation. This text box is a square
       *     // with a length of 10 points on each side.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertTextBox(String,Number,Number,Number,Number)
       * @param text The string the text box shape should contain.
       * @param left The horizontal position of the text box shape, measured from the upper left corner of the page.
       * @param top The vertical position of the text box shape, measured from the upper left corner of the page.
       * @param width The width of the text box shape.
       * @param height The height of the text box shape.
       */
      insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a video at the top left corner of the page with a default size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/master#insertVideo(String)
       * @param videoUrl The URL of the video to insert.
       */
      insertVideo(videoUrl: string): Video;

      /**
       * Inserts a video on the page with the provided position and size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/master#insertVideo(String,Number,Number,Number,Number)
       * @param videoUrl The URL of the video to insert.
       * @param left The horizontal position of the video in points, measured from the upper left corner of the page.
       * @param top The vertical position of the video in points, measured from the upper left corner of the page.
       * @param width The width of the video in points.
       * @param height The height of the video in points.
       */
      insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;

      /**
       * Inserts a copy of the provided Video on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a video between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var video = otherPresentationSlide.getVideos[0];
       *     currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#insertVideo(Video)
       * @param video The video to be copied and inserted.
       */
      insertVideo(video: Video): Video;

      /**
       * Inserts a copy of the provided WordArt on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a word art between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var wordArt = otherPresentationSlide.getWordArts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertWordArt(wordArt);
       * https://developers.google.com/apps-script/reference/slides/master#insertWordArt(WordArt)
       * @param wordArt The group to be copied and inserted.
       */
      insertWordArt(wordArt: WordArt): WordArt;

      /**
       * Removes the page.
       * https://developers.google.com/apps-script/reference/slides/master#remove()
       */
      remove(): void;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/master#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/master#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Selects the Page in the active presentation as the current page selection and removes any previous selection.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       *     // Select the first slide as the current page selection and replace any previous selection.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/master#selectAsCurrentPage()
       */
      selectAsCurrentPage(): void;
    }
    /**
     * A notes master in a presentation.
     *
     * Notes masters define the default text styles and page elements for all notes pages. Notes
     * masters are read-only.
     */
    interface NotesMaster {

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getImages()
       */
      getImages(): Image[];

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getLines()
       */
      getLines(): Line[];

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/notes-master#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/notes-master#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/notes-master#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-master#getWordArts()
       */
      getWordArts(): WordArt[];
    }
    /**
     * A notes page in a presentation.
     *
     * These pages contain the content for presentation handouts, including a a shape that contains
     * the slide's speaker notes. Each slide has one corresponding notes page. Only the text in the
     * speaker notes shape can be modified.
     */
    interface NotesPage {

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getImages()
       */
      getImages(): Image[];

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getLines()
       */
      getLines(): Line[];

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/notes-page#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/notes-page#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/notes-page#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Gets the shape containing the speaker notes on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getSpeakerNotesShape()
       */
      getSpeakerNotesShape(): Shape;

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/notes-page#getWordArts()
       */
      getWordArts(): WordArt[];

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/notes-page#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/notes-page#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
    }
    /**
     * A page in a presentation.
     */
    interface Page {

      /**
       * Returns the page as a layout.
       * https://developers.google.com/apps-script/reference/slides/page#asLayout()
       */
      asLayout(): Layout;

      /**
       * Returns the page as a master.
       * https://developers.google.com/apps-script/reference/slides/page#asMaster()
       */
      asMaster(): Master;

      /**
       * Returns the page as a slide.
       * https://developers.google.com/apps-script/reference/slides/page#asSlide()
       */
      asSlide(): Slide;

      /**
       * Gets the page's background.
       * https://developers.google.com/apps-script/reference/slides/page#getBackground()
       */
      getBackground(): PageBackground;

      /**
       * Gets the ColorScheme associated with the page.
       * https://developers.google.com/apps-script/reference/slides/page#getColorScheme()
       */
      getColorScheme(): ColorScheme;

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getImages()
       */
      getImages(): Image[];

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getLines()
       */
      getLines(): Line[];

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/page#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/page#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Gets the type of the page.
       * https://developers.google.com/apps-script/reference/slides/page#getPageType()
       */
      getPageType(): PageType;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/page#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/page#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/page#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/page#getWordArts()
       */
      getWordArts(): WordArt[];

      /**
       * Groups all the specified page elements.
       *
       *
       * There should be at least two page elements on the same page that are not already in another
       * group. Some page elements, such as Videos, Tables and placeholder Shapes cannot be grouped.
       * https://developers.google.com/apps-script/reference/slides/page#group(PageElement)
       * @param pageElements The elements to group together.
       */
      group(pageElements: PageElement[]): Group;

      /**
       * Inserts a copy of the provided Group on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a group between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var group = otherPresentationSlide.getGroups()[0];
       *     currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertGroup(Group)
       * @param group The group to be copied and inserted.
       */
      insertGroup(group: Group): Group;

      /**
       * Inserts an image at the top left corner of the page with a default size from the specified
       * image blob.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     slide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/page#insertImage(BlobSource)
       * @param blobSource The image data.
       */
      insertImage(blobSource: Base.BlobSource): Image;

      /**
       * Inserts an image on the page with the provided position and size from the specified image blob.
       *
       *
       * The image is fetched from the provided BlobSource once at insertion time and a copy
       * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
       * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     var position = {left: 0, top: 0};
       *     var size = {width: 300, height: 100};
       *     slide.insertImage(image, position.left, position.top, size.width, size.height);
       * https://developers.google.com/apps-script/reference/slides/page#insertImage(BlobSource,Number,Number,Number,Number)
       * @param blobSource The image data.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Image on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy an image between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var image = otherPresentationSlide.getImages[0];
       *     currentPresentationSlide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/page#insertImage(Image)
       * @param image The image to be copied and inserted.
       */
      insertImage(image: Image): Image;

      /**
       * Inserts an image at the top left corner of the page with a default size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/page#insertImage(String)
       * @param imageUrl The image URL.
       */
      insertImage(imageUrl: string): Image;

      /**
       * Inserts an image on the page with the provided position and size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       * https://developers.google.com/apps-script/reference/slides/page#insertImage(String,Number,Number,Number,Number)
       * @param imageUrl The image URL.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Line on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a line between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var line = otherPresentationSlide.getLines[0];
       *     currentPresentationSlide.insertLine(line);
       * https://developers.google.com/apps-script/reference/slides/page#insertLine(Line)
       * @param line The line to be copied and inserted.
       */
      insertLine(line: Line): Line;

      /**
       * Inserts a line on the page connecting two connection sites. The two
       * connection sites must be on this page.
       *
       *
       *     // Insert a line in the first slide of the presentation connecting two shapes.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       *     var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
       *     slide.insertLine(
       *         SlidesApp.LineCategory.BENT,
       *         shape1.getConnectionSites()[0],
       *         shape2.getConnectionSites()[1]);
       * https://developers.google.com/apps-script/reference/slides/page#insertLine(LineCategory,ConnectionSite,ConnectionSite)
       * @param lineCategory The category of the line to insert.
       * @param startConnectionSite The connection site where the start of the line is to be connected.
       * @param endConnectionSite The connection site where the end of the line is to be connected.
       */
      insertLine(lineCategory: LineCategory, startConnectionSite: ConnectionSite, endConnectionSite: ConnectionSite): Line;

      /**
       * Inserts a line on the page.
       *
       *
       *     // Insert a line in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var startPoint = {left: 10, top: 10};
       *     var endPoint = {left: 40, top: 40};
       *     slide.insertLine(
       *         SlidesApp.LineCategory.STRAIGHT,
       *         startPoint.left,
       *         startPoint.top,
       *         endPoint.left,
       *         endPoint.top);
       * https://developers.google.com/apps-script/reference/slides/page#insertLine(LineCategory,Number,Number,Number,Number)
       * @param lineCategory The category of the line to insert.
       * @param startLeft The horizontal position of the start point of the line, measured in points from the upper left corner of the page.
       * @param startTop The vertical position of the start point of the line, measured in points from the upper left corner of the page.
       * @param endLeft The horizontal position of the end point of the line, measured in points from the upper left corner of the page.
       * @param endTop The vertical position of the end point of the line, measured in points from the upper left corner of the page.
       */
      insertLine(lineCategory: LineCategory, startLeft: number, startTop: number, endLeft: number, endTop: number): Line;

      /**
       * Inserts a copy of the provided PageElement on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a page element between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = otherPresentationSlide.getPageElements[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertPageElement(pageElement);
       * https://developers.google.com/apps-script/reference/slides/page#insertPageElement(PageElement)
       * @param pageElement The page element to be copied and inserted.
       */
      insertPageElement(pageElement: PageElement): PageElement;

      /**
       * Inserts a copy of the provided Shape on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a shape between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape = otherPresentationSlide.getShapes[0];
       *     currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertShape(Shape)
       * @param shape The shape to be copied and inserted.
       */
      insertShape(shape: Shape): Shape;

      /**
       * Inserts a shape on the page.
       *
       *
       * The shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert a shape in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       * https://developers.google.com/apps-script/reference/slides/page#insertShape(ShapeType)
       * @param shapeType The type of shape to insert.
       */
      insertShape(shapeType: ShapeType): Shape;

      /**
       * Inserts a shape on the page.
       * https://developers.google.com/apps-script/reference/slides/page#insertShape(ShapeType,Number,Number,Number,Number)
       * @param shapeType The type of shape to insert.
       * @param left The horizontal position of the shape, measured from the upper left corner of the page.
       * @param top The vertical position of the shape, measured from the upper left corner of the page.
       * @param width The width of the shape.
       * @param height The height of the shape.
       */
      insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a Google Sheets chart on the page.
       *
       *
       * The chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChart(chart);
       * https://developers.google.com/apps-script/reference/slides/page#insertSheetsChart(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart on the page with the provided position and size.
       *
       *
       * In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
       * to the provided size.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChart(
       *         chart,
       *         position.left,
       *         position.top,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/page#insertSheetsChart(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): SheetsChart;

      /**
       * Inserts a copy of the provided SheetsChart on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a sheets chart between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertSheetsChart(sheetsChart);
       * https://developers.google.com/apps-script/reference/slides/page#insertSheetsChart(SheetsChart)
       * @param sheetsChart The sheets chart to be copied and inserted.
       */
      insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart as an Image on the page.
       *
       *
       * The image of the chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted image of chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertSheetsChartAsImage(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;

      /**
       * Inserts a Google Sheets chart as an Image on the page with the provided position and
       * size.
       *
       *
       * In order to maintain the chart image's aspect ratio, the image is scaled and centered with
       * respect to the provided size.
       *
       *
       * The inserted image of the chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChartAsImage(
       *         chart,
       *         position.left,
       *         position.right,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/page#insertSheetsChartAsImage(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a table on the page.
       *
       *
       * The table is centered on the page with default size and evenly distributed rows and columns.
       * https://developers.google.com/apps-script/reference/slides/page#insertTable(Integer,Integer)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       */
      insertTable(numRows: Integer, numColumns: Integer): Table;

      /**
       * Inserts a table on the page with the provided position and size.
       *
       *
       * Rows and columns are evenly distributed in the created table.
       * https://developers.google.com/apps-script/reference/slides/page#insertTable(Integer,Integer,Number,Number,Number,Number)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       * @param left The horizontal position of the table, measured from the upper left corner of the page.
       * @param top The vertical position of the table, measured from the upper left corner of the page.
       * @param width The width of the table.
       * @param height The minimum height of the table. The actual height of the rendered table depends on factors such as text font size.
       */
      insertTable(numRows: Integer, numColumns: Integer, left: number, top: number, width: number, height: number): Table;

      /**
       * Inserts a copy of the provided Table on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a table between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var table = otherPresentationSlide.getTables[0];
       *     currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertTable(Table)
       * @param table The table to be copied and inserted.
       */
      insertTable(table: Table): Table;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       * The text box shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertTextBox(String)
       * @param text The string the text box shape should contain.
       */
      insertTextBox(text: string): Shape;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation. This text box is a square
       *     // with a length of 10 points on each side.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertTextBox(String,Number,Number,Number,Number)
       * @param text The string the text box shape should contain.
       * @param left The horizontal position of the text box shape, measured from the upper left corner of the page.
       * @param top The vertical position of the text box shape, measured from the upper left corner of the page.
       * @param width The width of the text box shape.
       * @param height The height of the text box shape.
       */
      insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a video at the top left corner of the page with a default size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/page#insertVideo(String)
       * @param videoUrl The URL of the video to insert.
       */
      insertVideo(videoUrl: string): Video;

      /**
       * Inserts a video on the page with the provided position and size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/page#insertVideo(String,Number,Number,Number,Number)
       * @param videoUrl The URL of the video to insert.
       * @param left The horizontal position of the video in points, measured from the upper left corner of the page.
       * @param top The vertical position of the video in points, measured from the upper left corner of the page.
       * @param width The width of the video in points.
       * @param height The height of the video in points.
       */
      insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;

      /**
       * Inserts a copy of the provided Video on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a video between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var video = otherPresentationSlide.getVideos[0];
       *     currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#insertVideo(Video)
       * @param video The video to be copied and inserted.
       */
      insertVideo(video: Video): Video;

      /**
       * Inserts a copy of the provided WordArt on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a word art between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var wordArt = otherPresentationSlide.getWordArts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertWordArt(wordArt);
       * https://developers.google.com/apps-script/reference/slides/page#insertWordArt(WordArt)
       * @param wordArt The group to be copied and inserted.
       */
      insertWordArt(wordArt: WordArt): WordArt;

      /**
       * Removes the page.
       * https://developers.google.com/apps-script/reference/slides/page#remove()
       */
      remove(): void;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/page#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/page#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Selects the Page in the active presentation as the current page selection and removes any previous selection.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       *     // Select the first slide as the current page selection and replace any previous selection.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/page#selectAsCurrentPage()
       */
      selectAsCurrentPage(): void;
    }
    /**
     * Describes the page's background
     */
    interface PageBackground {

      /**
       * Get the stretched picture fill of this background, or null if the background fill type
       * is not PageBackgroundType.PICTURE.
       * https://developers.google.com/apps-script/reference/slides/page-background#getPictureFill()
       */
      getPictureFill(): PictureFill;

      /**
       * Get the solid fill of this background, or null if the background fill type is not
       * PageBackgroundType.SOLID.
       * https://developers.google.com/apps-script/reference/slides/page-background#getSolidFill()
       */
      getSolidFill(): SolidFill;

      /**
       * Get the type of this page background.
       * https://developers.google.com/apps-script/reference/slides/page-background#getType()
       */
      getType(): PageBackgroundType;

      /**
       * Whether the background is visible.
       * https://developers.google.com/apps-script/reference/slides/page-background#isVisible()
       */
      isVisible(): boolean;

      /**
       * Sets an image from the specified image blob as the page background. The image is stretched to
       * match the dimensions of the page.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       * https://developers.google.com/apps-script/reference/slides/page-background#setPictureFill(BlobSource)
       * @param blobSource The image data.
       */
      setPictureFill(blobSource: Base.BlobSource): void;

      /**
       * Sets the image at the provided URL as the page background. The image is stretched to match the
       * dimensions of the page.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via PictureFill.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/page-background#setPictureFill(String)
       * @param imageUrl The URL to download the image from.
       */
      setPictureFill(imageUrl: string): void;

      /**
       * Sets the solid fill to the given Color.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(Color)
       * @param color
       */
      setSolidFill(color: Color): void;

      /**
       * Sets the solid fill to the given alpha and Color.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(Color,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: Color, alpha: number): void;

      /**
       * Sets the solid fill to the given RGB values.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(Integer,Integer,Integer)
       * @param red
       * @param green
       * @param blue
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer): void;

      /**
       * Sets the solid fill to the given alpha and RGB values.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(Integer,Integer,Integer,Number)
       * @param red
       * @param green
       * @param blue
       * @param alpha
       */
      setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;

      /**
       * Sets the solid fill to the given hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(String)
       * @param hexString
       */
      setSolidFill(hexString: string): void;

      /**
       * Sets the solid fill to the given alpha and hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(String,Number)
       * @param hexString
       * @param alpha
       */
      setSolidFill(hexString: string, alpha: number): void;

      /**
       * Sets the solid fill to the given ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(ThemeColorType)
       * @param color
       */
      setSolidFill(color: ThemeColorType): void;

      /**
       * Sets the solid fill to the given alpha and ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/page-background#setSolidFill(ThemeColorType,Number)
       * @param color
       * @param alpha
       */
      setSolidFill(color: ThemeColorType, alpha: number): void;

      /**
       * Sets the background to transparent.
       * https://developers.google.com/apps-script/reference/slides/page-background#setTransparent()
       */
      setTransparent(): void;
    }
    /**
     * The kinds of page backgrounds.
     */
    enum PageBackgroundType { UNSUPPORTED, NONE, SOLID, PICTURE }
    /**
     * A visual element rendered on a page.
     */
    interface PageElement {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/page-element#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): PageElement;

      /**
       * Returns the page element as a group.
       * https://developers.google.com/apps-script/reference/slides/page-element#asGroup()
       */
      asGroup(): Group;

      /**
       * Returns the page element as an image.
       * https://developers.google.com/apps-script/reference/slides/page-element#asImage()
       */
      asImage(): Image;

      /**
       * Returns the page element as a line.
       * https://developers.google.com/apps-script/reference/slides/page-element#asLine()
       */
      asLine(): Line;

      /**
       * Returns the page element as a shape.
       * https://developers.google.com/apps-script/reference/slides/page-element#asShape()
       */
      asShape(): Shape;

      /**
       * Returns the page element as a linked chart embedded from Google Sheets.
       * https://developers.google.com/apps-script/reference/slides/page-element#asSheetsChart()
       */
      asSheetsChart(): SheetsChart;

      /**
       * Returns the page element as a table.
       * https://developers.google.com/apps-script/reference/slides/page-element#asTable()
       */
      asTable(): Table;

      /**
       * Returns the page element as a video.
       * https://developers.google.com/apps-script/reference/slides/page-element#asVideo()
       */
      asVideo(): Video;

      /**
       * Returns the page element as word art.
       * https://developers.google.com/apps-script/reference/slides/page-element#asWordArt()
       */
      asWordArt(): WordArt;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/page-element#bringForward()
       */
      bringForward(): PageElement;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/page-element#bringToFront()
       */
      bringToFront(): PageElement;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/page-element#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/page-element#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/page-element#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/page-element#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/page-element#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/page-element#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/page-element#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/page-element#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/page-element#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/page-element#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/page-element#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/page-element#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): PageElement;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/page-element#remove()
       */
      remove(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): PageElement;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): PageElement;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/page-element#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/page-element#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/page-element#sendBackward()
       */
      sendBackward(): PageElement;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/page-element#sendToBack()
       */
      sendToBack(): PageElement;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/page-element#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): PageElement;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): PageElement;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): PageElement;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/page-element#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): PageElement;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/page-element#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): PageElement;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): PageElement;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/page-element#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): PageElement;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/page-element#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): PageElement;
    }
    /**
     * A collection of one or more PageElement instances.
     */
    interface PageElementRange {

      /**
       * Returns the list of PageElement instances.
       * https://developers.google.com/apps-script/reference/slides/page-element-range#getPageElements()
       */
      getPageElements(): PageElement[];
    }
    /**
     * The page element type.
     */
    enum PageElementType { UNSUPPORTED, SHAPE, IMAGE, VIDEO, TABLE, GROUP, LINE, WORD_ART, SHEETS_CHART }
    /**
     * A collection of one or more Page instances.
     */
    interface PageRange {

      /**
       * Returns the list of Page instances.
       * https://developers.google.com/apps-script/reference/slides/page-range#getPages()
       */
      getPages(): Page[];
    }
    /**
     * The page types.
     */
    enum PageType { UNSUPPORTED, SLIDE, LAYOUT, MASTER }
    /**
     * A segment of text terminated by a newline character.
     */
    interface Paragraph {

      /**
       * Returns the index of the paragraph's newline. Returns null if the newline has been
       * deleted.
       * https://developers.google.com/apps-script/reference/slides/paragraph#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns a TextRange spanning the text in the paragraph ended by this object's newline
       * character. Returns null if the paragraph's newline has been deleted.
       * https://developers.google.com/apps-script/reference/slides/paragraph#getRange()
       */
      getRange(): TextRange;
    }
    /**
     * The types of text alignment for a paragraph.
     */
    enum ParagraphAlignment { UNSUPPORTED, START, CENTER, END, JUSTIFIED }
    /**
     * The styles of text that apply to entire paragraphs.
     *
     * Read methods in this class return null if the corresponding TextRange spans
     * multiple paragraphs, and those paragraphs have different values for the read method being called.
     * To avoid this, query for paragraph styles using the TextRange returned by the Paragraph.getRange() method.
     */
    interface ParagraphStyle {

      /**
       * Returns the text end indentation for paragraphs in the TextRange in points, or null if there are multiple paragraph styles on the given text.
       *
       *
       * The side that corresponds to the end of the text is based on the current text direction.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getIndentEnd()
       */
      getIndentEnd(): number;

      /**
       * Returns the indentation for the first line of paragraphs in the TextRange in points, or
       * null if there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getIndentFirstLine()
       */
      getIndentFirstLine(): number;

      /**
       * Returns the text start indentation for paragraphs in the TextRange in points, or null if there are multiple paragraph styles on the given text.
       *
       *
       * The side that corresponds to the start of the text is based on the current text direction.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getIndentStart()
       */
      getIndentStart(): number;

      /**
       * Returns the line spacing, or null if there are multiple paragraph styles on the given
       * text.
       *
       *
       * This is a value that corresponds to the space between lines, as a percentage of normal.
       * Normal is represented as 100.0.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getLineSpacing()
       */
      getLineSpacing(): number;

      /**
       * Returns the ParagraphAlignment of paragraphs in the TextRange, or null
       * if there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getParagraphAlignment()
       */
      getParagraphAlignment(): ParagraphAlignment;

      /**
       * Returns the extra space above paragraphs in the TextRange in points, or null if
       * there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getSpaceAbove()
       */
      getSpaceAbove(): number;

      /**
       * Returns the extra space below paragraphs in the TextRange in points, or null if
       * there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getSpaceBelow()
       */
      getSpaceBelow(): number;

      /**
       * Returns the SpacingMode for paragraphs in the TextRange, or null if
       * there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getSpacingMode()
       */
      getSpacingMode(): SpacingMode;

      /**
       * Returns the TextDirection for paragraphs in the TextRange, or null if
       * there are multiple paragraph styles on the given text.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#getTextDirection()
       */
      getTextDirection(): TextDirection;

      /**
       * Sets the text end indentation for paragraphs in the TextRange in points.
       *
       *
       * The side that corresponds to the end of the text is based on the current text direction.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setIndentEnd(Number)
       * @param indent
       */
      setIndentEnd(indent: number): ParagraphStyle;

      /**
       * Sets the indentation for the first line of paragraphs in the TextRange in points.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setIndentFirstLine(Number)
       * @param indent
       */
      setIndentFirstLine(indent: number): ParagraphStyle;

      /**
       * Sets the text start indentation for paragraphs in the TextRange in points.
       *
       *
       * The side that corresponds to the start of the text is based on the current text direction.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setIndentStart(Number)
       * @param indent
       */
      setIndentStart(indent: number): ParagraphStyle;

      /**
       * Sets the line spacing.
       *
       *
       * This is a value that corresponds to the space between lines, as a percentage of normal.
       * Normal is represented as 100.0.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setLineSpacing(Number)
       * @param spacing
       */
      setLineSpacing(spacing: number): ParagraphStyle;

      /**
       * Sets the ParagraphAlignment of paragraphs in the TextRange.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setParagraphAlignment(ParagraphAlignment)
       * @param alignment
       */
      setParagraphAlignment(alignment: ParagraphAlignment): ParagraphStyle;

      /**
       * Sets the extra space above paragraphs in the TextRange in points.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setSpaceAbove(Number)
       * @param space
       */
      setSpaceAbove(space: number): ParagraphStyle;

      /**
       * Sets the extra space below paragraphs in the TextRange in points.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setSpaceBelow(Number)
       * @param space
       */
      setSpaceBelow(space: number): ParagraphStyle;

      /**
       * Sets the SpacingMode for paragraphs in the TextRange.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setSpacingMode(SpacingMode)
       * @param mode
       */
      setSpacingMode(mode: SpacingMode): ParagraphStyle;

      /**
       * Sets the TextDirection for paragraphs in the TextRange.
       * https://developers.google.com/apps-script/reference/slides/paragraph-style#setTextDirection(TextDirection)
       * @param direction
       */
      setTextDirection(direction: TextDirection): ParagraphStyle;
    }
    /**
     * A fill that renders an image that's stretched to the dimensions of its container.
     */
    interface PictureFill {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/slides/picture-fill#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/slides/picture-fill#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets a URL to the image.
       *
       *
       * This URL is tagged with the account of the requester, so anyone with the URL effectively
       * accesses the image as the original requester. Access to the image may be lost if the
       * presentation's sharing settings change. The URL expires after a short period of time.
       * https://developers.google.com/apps-script/reference/slides/picture-fill#getContentUrl()
       */
      getContentUrl(): string;

      /**
       * Gets the image's source URL, if available.
       *
       *
       * When an image is inserted by URL, returns the URL provided during image insertion.
       * https://developers.google.com/apps-script/reference/slides/picture-fill#getSourceUrl()
       */
      getSourceUrl(): string;
    }
    /**
     * The placeholder types. Many of these placeholder types correspond to placeholder IDs from the
     * ECMA-376 standard. More information on those shapes can be found in the description of the
     * "ST_PlaceholderType" type in section 19.7.10 of "Office Open XML File Formats - Fundamentals and
     * Markup Language Reference", part 1 of ECMA-376 5th
     * edition.
     */
    enum PlaceholderType { UNSUPPORTED, NONE, BODY, CHART, CLIP_ART, CENTERED_TITLE, DIAGRAM, DATE_AND_TIME, FOOTER, HEADER, MEDIA, OBJECT, PICTURE, SLIDE_NUMBER, SUBTITLE, TABLE, TITLE, SLIDE_IMAGE }
    /**
     * A point representing a location.
     */
    interface Point {

      /**
       * Gets the horizontal coordinate, measured in points.
       * https://developers.google.com/apps-script/reference/slides/point#getX()
       */
      getX(): number;

      /**
       * Gets the vertical coordinate, measured in points.
       * https://developers.google.com/apps-script/reference/slides/point#getY()
       */
      getY(): number;
    }
    /**
     * Predefined layouts. These are commonly found layouts in presentations. However, there is no
     * guarantee that these layouts are present in the current master as they could have been deleted or
     * not part of the used theme. Additionally, the placeholders on each layout may have been changed.
     */
    enum PredefinedLayout { UNSUPPORTED, BLANK, CAPTION_ONLY, TITLE, TITLE_AND_BODY, TITLE_AND_TWO_COLUMNS, TITLE_ONLY, SECTION_HEADER, SECTION_TITLE_AND_DESCRIPTION, ONE_COLUMN_TEXT, MAIN_POINT, BIG_NUMBER }
    /**
     * A presentation.
     */
    interface Presentation {

      /**
       * Adds the given user to the list of editors for the Presentation. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/slides/presentation#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Presentation;

      /**
       * Adds the given user to the list of editors for the Presentation. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/slides/presentation#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Presentation;

      /**
       * Adds the given array of users to the list of editors for the Presentation. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/slides/presentation#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Presentation;

      /**
       * Adds the given user to the list of viewers for the Presentation. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/slides/presentation#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Presentation;

      /**
       * Adds the given user to the list of viewers for the Presentation. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/slides/presentation#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Presentation;

      /**
       * Adds the given array of users to the list of viewers for the Presentation. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/slides/presentation#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Presentation;

      /**
       * Appends a slide to the end of the presentation using the PredefinedLayout.BLANK
       * predefined layout based on the current master. The current master is one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#appendSlide()
       */
      appendSlide(): Slide;

      /**
       * Appends a slide to the end of the presentation using the specified layout based on the current
       * master. The current master is one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#appendSlide(Layout)
       * @param layout The layout to use for the new slide; it should be present in the current master.
       */
      appendSlide(layout: Layout): Slide;

      /**
       * Appends a slide to the end of the presentation using the specified predefined layout based on
       * the current master. The current master is one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#appendSlide(PredefinedLayout)
       * @param predefinedLayout The predefined layout to use for the new slide; it should be present in the current master.
       */
      appendSlide(predefinedLayout: PredefinedLayout): Slide;

      /**
       * Appends a copy of the provided Slide to the end of the presentation.
       *
       *
       * If the slide being copied is from a different presentation, the parent master and layout
       * pages are copied as well if they do not already exist in this presentation.
       *
       *
       *     // Copy a slide from another presentation and appends it.
       *     var otherPresentation = SlidesApp.openById('presentationId');
       *     var currentPresentation = SlidesApp.getActivePresentation();
       *     var slide = otherPresentation.getSlides[0];
       *     currentPresentation.appendSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/presentation#appendSlide(Slide)
       * @param slide The slide to be copied and appended.
       */
      appendSlide(slide: Slide): Slide;

      /**
       * Appends a copy of the provided Slide from the source presentation to the end of the
       * current presentation, and sets the slide link as specified by the SlideLinkingMode.
       *
       *
       * If the slide being copied is from a different presentation, the parent master and layout
       * pages are copied as well if they do not already exist in the current presentation.
       *
       *
       * If the link mode is SlideLinkingMode.LINKED, the appended slide can be updated to
       * match the provided source slide when Slide.refreshSlide() is called. Other collaborators
       * can see the link to the source slide. SlideLinkingMode.LINKED cannot be used with
       * source slides from the current presentation.
       *
       *
       *     // Copy a slide from another presentation, then append and link it.
       *     var sourcePresentation = SlidesApp.openById('presentationId');
       *     var currentPresentation = SlidesApp.getActivePresentation();
       *     var slide = sourcePresentation.getSlides()[0];
       *     var appendedSlide = currentPresentation.appendSlide(slide, SlideApp.SlideLinkingMode.LINKED);
       * https://developers.google.com/apps-script/reference/slides/presentation#appendSlide(Slide,SlideLinkingMode)
       * @param slide The slide to be copied, appended, and linked.
       * @param linkingMode The link mode to use.
       */
      appendSlide(slide: Slide, linkingMode: SlideLinkingMode): Slide;

      /**
       * Gets the list of editors for this Presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Gets the presentation's unique identifier. The presentation ID is used with SlidesApp.openById() to open a specific presentation instance.
       * https://developers.google.com/apps-script/reference/slides/presentation#getId()
       */
      getId(): string;

      /**
       * Gets the layouts in the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getLayouts()
       */
      getLayouts(): Layout[];

      /**
       * Gets the masters in the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getMasters()
       */
      getMasters(): Master[];

      /**
       * Gets the name or title of the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getName()
       */
      getName(): string;

      /**
       * Gets the notes master of the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getNotesMaster()
       */
      getNotesMaster(): NotesMaster;

      /**
       * Gets the page height of the notes master and notes pages in the presentation in points. They
       * all have the same page height.
       * https://developers.google.com/apps-script/reference/slides/presentation#getNotesPageHeight()
       */
      getNotesPageHeight(): number;

      /**
       * Gets the page width of the notes master and notes pages in the presentation in points. They all
       * have the same page width.
       * https://developers.google.com/apps-script/reference/slides/presentation#getNotesPageWidth()
       */
      getNotesPageWidth(): number;

      /**
       * Returns the PageElement with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/presentation#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Gets the page height of the slides, layouts, and masters in the presentation in points. They
       * all have the same page height.
       * https://developers.google.com/apps-script/reference/slides/presentation#getPageHeight()
       */
      getPageHeight(): number;

      /**
       * Gets the page width of the slides, layouts, and masters in the presentation in points. They all
       * have the same page width.
       * https://developers.google.com/apps-script/reference/slides/presentation#getPageWidth()
       */
      getPageWidth(): number;

      /**
       * Gets the user’s selection in the active presentation. A script can only access the selection of
       * the user who is running the script, and only if the script is bound to the presentation.
       *
       *
       * Note that the selection returned is the current effective selection. As the script performs
       * various changes to the presentation, the selection is transformed to take them into account.
       * For example if two shapes A and B are selected, and then the script removes shape B, the
       * returned selection object is implicitly updated such that only shape A is selected.
       *
       *
       *     // Gets the current active page that is selected in the active presentation.
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var currentPage = selection.getCurrentPage();
       * https://developers.google.com/apps-script/reference/slides/presentation#getSelection()
       */
      getSelection(): Selection;

      /**
       * Returns the Slide with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/presentation#getSlideById(String)
       * @param id The ID of the slide that is being retrieved.
       */
      getSlideById(id: string): Slide;

      /**
       * Gets the slides in the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getSlides()
       */
      getSlides(): Slide[];

      /**
       * Retrieves the URL to access this presentation.
       *
       *
       *     var presentation = SlidesApp.getActivePresentation();
       *
       *     // Send out the link to open the presentation.
       *     MailApp.sendEmail("<email-address>", presentation.getName(), presentation.getUrl());
       * https://developers.google.com/apps-script/reference/slides/presentation#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#getViewers()
       */
      getViewers(): Base.User[];

      /**
       * Inserts a slide at the specified index in the presentation using the PredefinedLayout.BLANK predefined layout based on the current master. The current master is
       * one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#insertSlide(Integer)
       * @param insertionIndex The zero-based index indicating where to insert the slide.
       */
      insertSlide(insertionIndex: Integer): Slide;

      /**
       * Inserts a slide at the specified index in the presentation using the specified layout based on
       * the current master. The current master is one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#insertSlide(Integer,Layout)
       * @param insertionIndex The zero-based index indicating where to insert the slide.
       * @param layout The layout to use for the new slide; it should be present in the current master.
       */
      insertSlide(insertionIndex: Integer, layout: Layout): Slide;

      /**
       * Inserts a slide at the specified index in the presentation using the specified predefined
       * layout based on the current master. The current master is one of the following:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/presentation#insertSlide(Integer,PredefinedLayout)
       * @param insertionIndex The zero-based index indicating where to insert the slide.
       * @param predefinedLayout The predefined layout to use for the new slide; it should be present in the current master.
       */
      insertSlide(insertionIndex: Integer, predefinedLayout: PredefinedLayout): Slide;

      /**
       * Inserts a copy of the provided Slide at the specified index in the presentation.
       *
       *
       * If the slide being copied is from a different presentation, the parent master and layout
       * pages are copied as well if they do not already exist in this presentation.
       *
       *
       *     // Copy a slide from another presentation and inserts it.
       *     var otherPresentation = SlidesApp.openById('presentationId');
       *     var currentPresentation = SlidesApp.getActivePresentation();
       *     var slide = otherPresentation.getSlides[0];
       *     var insertionIndex = 1;
       *     currentPresentation.insertSlide(insertionIndex, slide);
       * https://developers.google.com/apps-script/reference/slides/presentation#insertSlide(Integer,Slide)
       * @param insertionIndex The zero-based index indicating where to insert the slide.
       * @param slide The slide to be copied and inserted.
       */
      insertSlide(insertionIndex: Integer, slide: Slide): Slide;

      /**
       * Inserts a copy of the provided Slide from the source presentation into the specified
       * index in the current presentation, and sets the slide link as specified by the SlideLinkingMode.
       *
       *
       * If the slide being copied is from a different presentation, the parent master and layout
       * pages are copied as well if they do not already exist in the current presentation.
       *
       *
       * If the link mode is SlideLinkingMode.LINKED, the inserted slide can be updated to
       * match the provided source slide when Slide.refreshSlide() is called. Other collaborators
       * can see the link to the source slide. SlideLinkingMode.LINKED cannot be used with
       * source slides from the current presentation.
       *
       *
       *     // Copy a slide from another presentation, then insert and link it.
       *     var sourcePresentation = SlidesApp.openById('presentationId');
       *     var currentPresentation = SlidesApp.getActivePresentation();
       *     var slide = sourcePresentation.getSlides()[0];
       *     var insertionIndex = 1;
       *     var insertedSlide =
       *         currentPresentation.insertSlide(
       *         insertionIndex, slide, SlidesApp.SlideLinkingMode.LINKED);
       * https://developers.google.com/apps-script/reference/slides/presentation#insertSlide(Integer,Slide,SlideLinkingMode)
       * @param insertionIndex The zero-based index indicating where to insert the slide.
       * @param slide The slide to be copied and inserted.
       * @param linkingMode The link mode to use.
       */
      insertSlide(insertionIndex: Integer, slide: Slide, linkingMode: SlideLinkingMode): Slide;

      /**
       * Removes the given user from the list of editors for the Presentation. This method doesn't
       * block users from accessing the Presentation if they belong to a class of users who have
       * general access—for example, if the Presentation is shared with the user's entire
       * domain, or if the Presentation is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/slides/presentation#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Presentation;

      /**
       * Removes the given user from the list of editors for the Presentation. This method doesn't
       * block users from accessing the Presentation if they belong to a class of users who have
       * general access—for example, if the Presentation is shared with the user's entire
       * domain, or if the Presentation is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/slides/presentation#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Presentation;

      /**
       * Removes the given user from the list of viewers and commenters for the Presentation. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the Presentation if they belong to a class of users who
       * have general access—for example, if the Presentation is shared with the user's
       * entire domain, or if the Presentation is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/slides/presentation#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Presentation;

      /**
       * Removes the given user from the list of viewers and commenters for the Presentation. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the Presentation if they belong to a class of users who have general
       * access—for example, if the Presentation is shared with the user's entire domain, or
       * if the Presentation is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/slides/presentation#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Presentation;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/presentation#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/presentation#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Saves the current Presentation. Causes pending updates to be flushed and applied.
       *
       *
       * The saveAndClose() method is automatically invoked at the end of script execution
       * for each open Presentation, even if the script execution terminated with an error.
       *
       *
       * A closed Presentation cannot be edited. Use one of the open methods on SlidesApp to reopen a given presentation for editing.
       * https://developers.google.com/apps-script/reference/slides/presentation#saveAndClose()
       */
      saveAndClose(): void;

      /**
       * Sets the name or title of the presentation.
       * https://developers.google.com/apps-script/reference/slides/presentation#setName(String)
       * @param name The name to set for this presentation.
       */
      setName(name: string): void;
    }
    /**
     * The user's selection in the active presentation.
     *
     *     var selection = SlidesApp.getActivePresentation().getSelection();
     *     var currentPage = selection.getCurrentPage();
     *     var selectionType = selection.getSelectionType();
     *     }
     */
    interface Selection {

      /**
       * Returns the currently active Page or null if there is no active page.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var currentPage = selection.getCurrentPage();
       *     if (currentPage != null) {
       *       Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getCurrentPage()
       */
      getCurrentPage(): Page;

      /**
       * Returns the PageElementRange collection of PageElement instances that are
       * selected or null if there are no PageElement instances selected.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var selectionType = selection.getSelectionType();
       *     if (selectionType == SlidesApp.SelectionType.PAGE_ELEMENT) {
       *       var currentPage = selection.getCurrentPage();
       *       var pageElements = selection.getPageElementRange().getPageElements();
       *       Logger.log('Number of page elements selected: ' + pageElements.length);
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getPageElementRange()
       */
      getPageElementRange(): PageElementRange;

      /**
       * Returns the PageRange a collection of Page instances in the flimstrip that are
       * selected or null if the selection is not of type SelectionType.PAGE.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var selectionType = selection.getSelectionType();
       *     if (selectionType == SlidesApp.SelectionType.PAGE) {
       *       var pageRange = selection.getPageRange();
       *       Logger.log('Number of pages in the flimstrip selected: ' + pageRange.getPages().length);
       *     }
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getPageRange()
       */
      getPageRange(): PageRange;

      /**
       * Returns the SelectionType.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var selectionType = selection.getSelectionType();
       *     if (selectionType == SlidesApp.SelectionType.CURRENT_PAGE) {
       *       var currentPage = selection.getCurrentPage();
       *       Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getSelectionType()
       */
      getSelectionType(): SelectionType;

      /**
       * Returns the TableCellRange collection of TableCell instances that are selected
       * or null if there are no TableCell instances selected.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var selectionType = selection.getSelectionType();
       *     if (selectionType == SlidesApp.SelectionType.TABLE_CELL) {
       *       var currentPage = selection.getCurrentPage();
       *       var tableCells = selection.getTableCellRange().getTableCells();
       *       var table = tableCells[0].getParentTable();
       *       Logger.log('Number of table cells selected: ' + tableCells.length);
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getTableCellRange()
       */
      getTableCellRange(): TableCellRange;

      /**
       * Returns the TextRange that is selected or null if the selection is not of type
       * SelectionType.TEXT.
       *
       *
       * The TextRange represents two scenarios:
       *
       *
       * 1. Range of text selected. For example if a shape has text "Hello", and "He" is selected,
       * the returned range has TextRange.getStartIndex() = 0, and TextRange.getEndIndex() =
       * 2.
       *
       *
       * 2. Cursor position. For example if a shape has text "Hello", and cursor is after "H",
       * ("H|ello"), the returned range has TextRange.getStartIndex() = 1 and TextRange.getEndIndex() = 1.
       *
       *
       *     var selection = SlidesApp.getActivePresentation().getSelection();
       *     var selectionType = selection.getSelectionType();
       *     if (selectionType == SlidesApp.SelectionType.TEXT) {
       *       var currentPage = selection.getCurrentPage();
       *       var pageElement = selection.getPageElementRange().getPageElements()[0];
       *       var textRange = selection.getTextRange();
       *       Logger.log('Text selected: ' + textRange.asString());
       *     }
       * https://developers.google.com/apps-script/reference/slides/selection#getTextRange()
       */
      getTextRange(): TextRange;
    }
    /**
     * Type of Selection.
     *
     * The SelectionType represents the most specific type of one or more objects that are
     * selected. As an example if one or more TableCell instances are selected in a Table, the selection type is SelectionType.TABLE_CELL. The TableCellRange can be
     * retrieved by using the Selection.getTableCellRange. The Table can be retrieved by
     * using the Selection.getPageElementRange and the Page can be retrieved from the
     * Selection.getCurrentPage.
     */
    enum SelectionType { UNSUPPORTED, NONE, TEXT, TABLE_CELL, PAGE, PAGE_ELEMENT, CURRENT_PAGE }
    /**
     * A PageElement representing a generic shape that does not have a more specific
     * classification. Includes text boxes, rectangles, and other predefined shapes.
     */
    interface Shape {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/shape#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Shape;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/shape#bringForward()
       */
      bringForward(): Shape;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/shape#bringToFront()
       */
      bringToFront(): Shape;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/shape#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the Border of the shape.
       * https://developers.google.com/apps-script/reference/slides/shape#getBorder()
       */
      getBorder(): Border;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/shape#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the ContentAlignment of the text in the shape.
       * https://developers.google.com/apps-script/reference/slides/shape#getContentAlignment()
       */
      getContentAlignment(): ContentAlignment;

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/shape#getDescription()
       */
      getDescription(): string;

      /**
       * Returns the Fill of the shape.
       * https://developers.google.com/apps-script/reference/slides/shape#getFill()
       */
      getFill(): Fill;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/shape#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/shape#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the Link or null if there is no link.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/shape#getLink()
       */
      getLink(): Link;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/shape#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/shape#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/shape#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/shape#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the parent page element of the placeholder. Returns null if the shape is not a
       * placeholder or has no parent.
       * https://developers.google.com/apps-script/reference/slides/shape#getParentPlaceholder()
       */
      getParentPlaceholder(): PageElement;

      /**
       * Returns the placeholder index of the shape. If two or more instances of the same placeholder
       * types are present in the same page, they each have their own unique index value. Returns null if the shape is not a placeholder.
       * https://developers.google.com/apps-script/reference/slides/shape#getPlaceholderIndex()
       */
      getPlaceholderIndex(): Integer;

      /**
       * Returns the placeholder type of the shape, or PlaceholderType.NONE if the shape is not
       * a placeholder.
       * https://developers.google.com/apps-script/reference/slides/shape#getPlaceholderType()
       */
      getPlaceholderType(): PlaceholderType;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the type of the shape.
       * https://developers.google.com/apps-script/reference/slides/shape#getShapeType()
       */
      getShapeType(): ShapeType;

      /**
       * Returns the text content of the shape.
       *
       *
       * Text within a shape always terminates with a newline character.
       * https://developers.google.com/apps-script/reference/slides/shape#getText()
       */
      getText(): TextRange;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/shape#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/shape#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/shape#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Shape;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/shape#remove()
       */
      remove(): void;

      /**
       * Removes a Link.
       *
       *
       *     shape.removeLink();
       * https://developers.google.com/apps-script/reference/slides/shape#removeLink()
       */
      removeLink(): void;

      /**
       * Replaces this shape with an image provided by a BlobSource.
       *
       *
       * The image is fetched from the provided BlobSource once at insertion time and a copy
       * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
       * exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the size of the existing shape.
       *
       *
       *     var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
       *     // Get the Drive image file with the given ID.
       *     var driveImage = DriveApp.getFileById(fileId);
       *     shape.replaceWithImage(driveImage);
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithImage(BlobSource)
       * @param blobSource The image data.
       */
      replaceWithImage(blobSource: Base.BlobSource): Image;

      /**
       * Replaces this shape with an image provided by a BlobSource.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       *     var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
       *     // Get the Drive image file with the given ID.
       *     var driveImage = DriveApp.getFileById(fileId);
       *     // Replace and crop the replaced image.
       *     shape.replaceWithImage(driveImage, true);
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithImage(BlobSource,Boolean)
       * @param blobSource The image data.
       * @param crop If true, crops the image to fit the existing shape's size. Otherwise, the image is scaled and centered.
       */
      replaceWithImage(blobSource: Base.BlobSource, crop: boolean): Image;

      /**
       * Replaces this shape with an image.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the size of the existing shape.
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithImage(String)
       * @param imageUrl The image URL to download the image from.
       */
      replaceWithImage(imageUrl: string): Image;

      /**
       * Replaces this shape with an image.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithImage(String,Boolean)
       * @param imageUrl The image URL to download the image from.
       * @param crop If true, crops the image to fit the existing shape's size. Otherwise, the image is scaled and centered.
       */
      replaceWithImage(imageUrl: string, crop: boolean): Image;

      /**
       * Replaces this shape with an Google Sheets chart.
       *
       *
       * The chart is linked with the source Google Sheets chart which allows it to be updated. Other
       * collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Replace the shape with the Sheets chart.
       *     var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
       *     shape.replaceWithSheetsChart(chart);
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithSheetsChart(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet that replaces the shape.
       */
      replaceWithSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;

      /**
       * Replaces this shape with an image of a Google Sheets chart.
       *
       *
       * In order to maintain the Google Sheets chart's aspect ratio, the chart image is scaled and
       * centered with respect to the size of the existing shape.
       *
       *
       * The image of the chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Replace the shape with the Sheets chart as an image.
       *     var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
       *     shape.replaceWithSheetsChartAsImage(chart);
       * https://developers.google.com/apps-script/reference/slides/shape#replaceWithSheetsChartAsImage(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet that replaces the shape.
       */
      replaceWithSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Shape;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Shape;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/shape#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/shape#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/shape#sendBackward()
       */
      sendBackward(): Shape;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/shape#sendToBack()
       */
      sendToBack(): Shape;

      /**
       * Sets the ContentAlignment of the text in the shape.
       * https://developers.google.com/apps-script/reference/slides/shape#setContentAlignment(ContentAlignment)
       * @param contentAlignment The alignment to set.
       */
      setContentAlignment(contentAlignment: ContentAlignment): Shape;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/shape#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Shape;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Shape;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Shape;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/shape#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): Link;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     shape.setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/shape#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): Link;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/shape#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): Link;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       *     // Set a link to the URL.
       *     shape.setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/shape#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): Link;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/shape#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Shape;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/shape#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Shape;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Shape;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/shape#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Shape;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/shape#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Shape;
    }
    /**
     * The shape types. Many of these shapes correspond to predefined shapes from the ECMA-376 standard.
     * More information on those shapes can be found in the description of the "ST_ShapeType" simple
     * type in section 20.1.10.55 of "Office Open XML File Formats - Fundamentals and Markup Language
     * Reference", part 1 of ECMA-376 4th
     * edition.
     */
    enum ShapeType { UNSUPPORTED, TEXT_BOX, RECTANGLE, ROUND_RECTANGLE, ELLIPSE, ARC, BENT_ARROW, BENT_UP_ARROW, BEVEL, BLOCK_ARC, BRACE_PAIR, BRACKET_PAIR, CAN, CHEVRON, CHORD, CLOUD, CORNER, CUBE, CURVED_DOWN_ARROW, CURVED_LEFT_ARROW, CURVED_RIGHT_ARROW, CURVED_UP_ARROW, DECAGON, DIAGONAL_STRIPE, DIAMOND, DODECAGON, DONUT, DOUBLE_WAVE, DOWN_ARROW, DOWN_ARROW_CALLOUT, FOLDED_CORNER, FRAME, HALF_FRAME, HEART, HEPTAGON, HEXAGON, HOME_PLATE, HORIZONTAL_SCROLL, IRREGULAR_SEAL_1, IRREGULAR_SEAL_2, LEFT_ARROW, LEFT_ARROW_CALLOUT, LEFT_BRACE, LEFT_BRACKET, LEFT_RIGHT_ARROW, LEFT_RIGHT_ARROW_CALLOUT, LEFT_RIGHT_UP_ARROW, LEFT_UP_ARROW, LIGHTNING_BOLT, MATH_DIVIDE, MATH_EQUAL, MATH_MINUS, MATH_MULTIPLY, MATH_NOT_EQUAL, MATH_PLUS, MOON, NO_SMOKING, NOTCHED_RIGHT_ARROW, OCTAGON, PARALLELOGRAM, PENTAGON, PIE, PLAQUE, PLUS, QUAD_ARROW, QUAD_ARROW_CALLOUT, RIBBON, RIBBON_2, RIGHT_ARROW, RIGHT_ARROW_CALLOUT, RIGHT_BRACE, RIGHT_BRACKET, ROUND_1_RECTANGLE, ROUND_2_DIAGONAL_RECTANGLE, ROUND_2_SAME_RECTANGLE, RIGHT_TRIANGLE, SMILEY_FACE, SNIP_1_RECTANGLE, SNIP_2_DIAGONAL_RECTANGLE, SNIP_2_SAME_RECTANGLE, SNIP_ROUND_RECTANGLE, STAR_10, STAR_12, STAR_16, STAR_24, STAR_32, STAR_4, STAR_5, STAR_6, STAR_7, STAR_8, STRIPED_RIGHT_ARROW, SUN, TRAPEZOID, TRIANGLE, UP_ARROW, UP_ARROW_CALLOUT, UP_DOWN_ARROW, UTURN_ARROW, VERTICAL_SCROLL, WAVE, WEDGE_ELLIPSE_CALLOUT, WEDGE_RECTANGLE_CALLOUT, WEDGE_ROUND_RECTANGLE_CALLOUT, FLOW_CHART_ALTERNATE_PROCESS, FLOW_CHART_COLLATE, FLOW_CHART_CONNECTOR, FLOW_CHART_DECISION, FLOW_CHART_DELAY, FLOW_CHART_DISPLAY, FLOW_CHART_DOCUMENT, FLOW_CHART_EXTRACT, FLOW_CHART_INPUT_OUTPUT, FLOW_CHART_INTERNAL_STORAGE, FLOW_CHART_MAGNETIC_DISK, FLOW_CHART_MAGNETIC_DRUM, FLOW_CHART_MAGNETIC_TAPE, FLOW_CHART_MANUAL_INPUT, FLOW_CHART_MANUAL_OPERATION, FLOW_CHART_MERGE, FLOW_CHART_MULTIDOCUMENT, FLOW_CHART_OFFLINE_STORAGE, FLOW_CHART_OFFPAGE_CONNECTOR, FLOW_CHART_ONLINE_STORAGE, FLOW_CHART_OR, FLOW_CHART_PREDEFINED_PROCESS, FLOW_CHART_PREPARATION, FLOW_CHART_PROCESS, FLOW_CHART_PUNCHED_CARD, FLOW_CHART_PUNCHED_TAPE, FLOW_CHART_SORT, FLOW_CHART_SUMMING_JUNCTION, FLOW_CHART_TERMINATOR, ARROW_EAST, ARROW_NORTH_EAST, ARROW_NORTH, SPEECH, STARBURST, TEARDROP, ELLIPSE_RIBBON, ELLIPSE_RIBBON_2, CLOUD_CALLOUT, CUSTOM }
    /**
     * A PageElement representing a linked chart embedded from Google Sheets.
     */
    interface SheetsChart {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): SheetsChart;

      /**
       * Returns the chart as an image or null if the chart is not an embedded image.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#asImage()
       */
      asImage(): Image;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#bringForward()
       */
      bringForward(): SheetsChart;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#bringToFront()
       */
      bringToFront(): SheetsChart;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Gets the ID of the specific chart in the Google Sheets spreadsheet that is embedded.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getChartId()
       */
      getChartId(): Integer;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getDescription()
       */
      getDescription(): string;

      /**
       * Returns the embed type of the Sheets chart.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getEmbedType()
       */
      getEmbedType(): SheetsChartEmbedType;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the Link or null if there is no link.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getLink()
       */
      getLink(): Link;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getRotation()
       */
      getRotation(): number;

      /**
       * Gets the ID of the Google Sheets spreadsheet that contains the source chart.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getSpreadsheetId()
       */
      getSpreadsheetId(): string;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): SheetsChart;

      /**
       * Refreshes the chart by replacing it with the latest version of the chart from Google Sheets. If
       * the chart is already up to date, does not make any change to the chart in the presentation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#refresh()
       */
      refresh(): void;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#remove()
       */
      remove(): void;

      /**
       * Removes a Link.
       *
       *
       *     shape.removeLink();
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#removeLink()
       */
      removeLink(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): SheetsChart;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): SheetsChart;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#sendBackward()
       */
      sendBackward(): SheetsChart;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#sendToBack()
       */
      sendToBack(): SheetsChart;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): SheetsChart;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): SheetsChart;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): SheetsChart;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): Link;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     shape.setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): Link;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): Link;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       *     // Set a link to the URL.
       *     shape.setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): Link;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): SheetsChart;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): SheetsChart;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): SheetsChart;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): SheetsChart;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/sheets-chart#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): SheetsChart;
    }
    /**
     * The Sheets chart's embed type.
     */
    enum SheetsChartEmbedType { UNSUPPORTED, IMAGE }
    /**
     * A slide in a presentation.
     *
     * These pages contain the content you are presenting to your audience. Most slides are based on
     * a master and a layout. You can specify which layout to use for each slide when it is created.
     */
    interface Slide {

      /**
       * Duplicates the slide.
       *
       *
       * The duplicate slide is created immediately following the original.
       * https://developers.google.com/apps-script/reference/slides/slide#duplicate()
       */
      duplicate(): Slide;

      /**
       * Gets the page's background.
       * https://developers.google.com/apps-script/reference/slides/slide#getBackground()
       */
      getBackground(): PageBackground;

      /**
       * Gets the ColorScheme associated with the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getColorScheme()
       */
      getColorScheme(): ColorScheme;

      /**
       * Returns the list of Group objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getGroups()
       */
      getGroups(): Group[];

      /**
       * Returns the list of Image objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getImages()
       */
      getImages(): Image[];

      /**
       * Gets the layout that the slide is based on or null if the slide is not based on a
       * layout.
       * https://developers.google.com/apps-script/reference/slides/slide#getLayout()
       */
      getLayout(): Layout;

      /**
       * Returns the list of Line objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getLines()
       */
      getLines(): Line[];

      /**
       * Returns the notes page associated with the slide.
       * https://developers.google.com/apps-script/reference/slides/slide#getNotesPage()
       */
      getNotesPage(): NotesPage;

      /**
       * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
       * namespace.
       * https://developers.google.com/apps-script/reference/slides/slide#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the PageElement on the page with the given ID, or null if none exists.
       * https://developers.google.com/apps-script/reference/slides/slide#getPageElementById(String)
       * @param id The ID of the page element that is being retrieved.
       */
      getPageElementById(id: string): PageElement;

      /**
       * Returns the list of PageElement objects rendered on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getPageElements()
       */
      getPageElements(): PageElement[];

      /**
       * Gets the type of the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getPageType()
       */
      getPageType(): PageType;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType or
       * null if a matching placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type, it returns the one with minimal
       * placeholder index. If there are multiple matching placeholders with the same index, it returns
       * the first placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
       * https://developers.google.com/apps-script/reference/slides/slide#getPlaceholder(PlaceholderType)
       * @param placeholderType
       */
      getPlaceholder(placeholderType: PlaceholderType): PageElement;

      /**
       * Returns the placeholder PageElement object for a specified PlaceholderType and
       * a placeholder index, or null if the placeholder is not present.
       *
       *
       * If there are multiple placeholders with the same type and index, it returns the first
       * placeholder from the page's page elements collection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
       * https://developers.google.com/apps-script/reference/slides/slide#getPlaceholder(PlaceholderType,Integer)
       * @param placeholderType
       * @param placeholderIndex
       */
      getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;

      /**
       * Returns the list of placeholder PageElement objects in the page.
       *
       *
       *     var master = SlidesApp.getActivePresentation().getMasters()[0];
       *     Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
       * https://developers.google.com/apps-script/reference/slides/slide#getPlaceholders()
       */
      getPlaceholders(): PageElement[];

      /**
       * Returns the list of Shape objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getShapes()
       */
      getShapes(): Shape[];

      /**
       * Returns the list of SheetsChart objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getSheetsCharts()
       */
      getSheetsCharts(): SheetsChart[];

      /**
       * Returns a SlideLinkingMode indicating if the slide is linked to another slide.
       * https://developers.google.com/apps-script/reference/slides/slide#getSlideLinkingMode()
       */
      getSlideLinkingMode(): SlideLinkingMode;

      /**
       * Returns the source Presentation ID or null if the slide is not linked.
       *
       *
       * A slide only has a source Presentation ID when it is linked to a slide within
       * another presentation.
       * https://developers.google.com/apps-script/reference/slides/slide#getSourcePresentationId()
       */
      getSourcePresentationId(): string;

      /**
       * Returns the source slide ID or null if the slide is not linked.
       *
       *
       * A slide only has a source slide ID when it is linked to a slide within another presentation.
       * https://developers.google.com/apps-script/reference/slides/slide#getSourceSlideObjectId()
       */
      getSourceSlideObjectId(): string;

      /**
       * Returns the list of Table objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getTables()
       */
      getTables(): Table[];

      /**
       * Returns the list of Video objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getVideos()
       */
      getVideos(): Video[];

      /**
       * Returns the list of WordArt objects on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#getWordArts()
       */
      getWordArts(): WordArt[];

      /**
       * Groups all the specified page elements.
       *
       *
       * There should be at least two page elements on the same page that are not already in another
       * group. Some page elements, such as Videos, Tables and placeholder Shapes cannot be grouped.
       * https://developers.google.com/apps-script/reference/slides/slide#group(PageElement)
       * @param pageElements The elements to group together.
       */
      group(pageElements: PageElement[]): Group;

      /**
       * Inserts a copy of the provided Group on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a group between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var group = otherPresentationSlide.getGroups()[0];
       *     currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertGroup(Group)
       * @param group The group to be copied and inserted.
       */
      insertGroup(group: Group): Group;

      /**
       * Inserts an image at the top left corner of the page with a default size from the specified
       * image blob.
       *
       *
       * Inserting the image fetches it from the BlobSource once and a copy is stored for
       * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
       * megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     slide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/slide#insertImage(BlobSource)
       * @param blobSource The image data.
       */
      insertImage(blobSource: Base.BlobSource): Image;

      /**
       * Inserts an image on the page with the provided position and size from the specified image blob.
       *
       *
       * The image is fetched from the provided BlobSource once at insertion time and a copy
       * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
       * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     // Get the Drive image file with the given ID.
       *     var image = DriveApp.getFileById(fileId);
       *     var position = {left: 0, top: 0};
       *     var size = {width: 300, height: 100};
       *     slide.insertImage(image, position.left, position.top, size.width, size.height);
       * https://developers.google.com/apps-script/reference/slides/slide#insertImage(BlobSource,Number,Number,Number,Number)
       * @param blobSource The image data.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Image on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy an image between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var image = otherPresentationSlide.getImages[0];
       *     currentPresentationSlide.insertImage(image);
       * https://developers.google.com/apps-script/reference/slides/slide#insertImage(Image)
       * @param image The image to be copied and inserted.
       */
      insertImage(image: Image): Image;

      /**
       * Inserts an image at the top left corner of the page with a default size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       * https://developers.google.com/apps-script/reference/slides/slide#insertImage(String)
       * @param imageUrl The image URL.
       */
      insertImage(imageUrl: string): Image;

      /**
       * Inserts an image on the page with the provided position and size from the provided URL.
       *
       *
       * Inserting the image fetches it from the URL once and a copy is stored for display inside the
       * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
       * in either in PNG, JPEG, or GIF format.
       *
       *
       * The provided URL must be no larger than 2kB. The URL itself is saved with the image and
       * exposed via Image.getSourceUrl().
       *
       *
       * In order to maintain the image's aspect ratio, the image is scaled and centered with respect
       * to the provided size.
       * https://developers.google.com/apps-script/reference/slides/slide#insertImage(String,Number,Number,Number,Number)
       * @param imageUrl The image URL.
       * @param left The horizontal position of the image in points, measured from the upper left corner of the page.
       * @param top The vertical position of the image in points, measured from the upper left corner of the page.
       * @param width The width of the image in points.
       * @param height The height of the image in points.
       */
      insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a copy of the provided Line on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a line between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var line = otherPresentationSlide.getLines[0];
       *     currentPresentationSlide.insertLine(line);
       * https://developers.google.com/apps-script/reference/slides/slide#insertLine(Line)
       * @param line The line to be copied and inserted.
       */
      insertLine(line: Line): Line;

      /**
       * Inserts a line on the page connecting two connection sites. The two
       * connection sites must be on this page.
       *
       *
       *     // Insert a line in the first slide of the presentation connecting two shapes.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       *     var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
       *     slide.insertLine(
       *         SlidesApp.LineCategory.BENT,
       *         shape1.getConnectionSites()[0],
       *         shape2.getConnectionSites()[1]);
       * https://developers.google.com/apps-script/reference/slides/slide#insertLine(LineCategory,ConnectionSite,ConnectionSite)
       * @param lineCategory The category of the line to insert.
       * @param startConnectionSite The connection site where the start of the line is to be connected.
       * @param endConnectionSite The connection site where the end of the line is to be connected.
       */
      insertLine(lineCategory: LineCategory, startConnectionSite: ConnectionSite, endConnectionSite: ConnectionSite): Line;

      /**
       * Inserts a line on the page.
       *
       *
       *     // Insert a line in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var startPoint = {left: 10, top: 10};
       *     var endPoint = {left: 40, top: 40};
       *     slide.insertLine(
       *         SlidesApp.LineCategory.STRAIGHT,
       *         startPoint.left,
       *         startPoint.top,
       *         endPoint.left,
       *         endPoint.top);
       * https://developers.google.com/apps-script/reference/slides/slide#insertLine(LineCategory,Number,Number,Number,Number)
       * @param lineCategory The category of the line to insert.
       * @param startLeft The horizontal position of the start point of the line, measured in points from the upper left corner of the page.
       * @param startTop The vertical position of the start point of the line, measured in points from the upper left corner of the page.
       * @param endLeft The horizontal position of the end point of the line, measured in points from the upper left corner of the page.
       * @param endTop The vertical position of the end point of the line, measured in points from the upper left corner of the page.
       */
      insertLine(lineCategory: LineCategory, startLeft: number, startTop: number, endLeft: number, endTop: number): Line;

      /**
       * Inserts a copy of the provided PageElement on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a page element between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = otherPresentationSlide.getPageElements[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertPageElement(pageElement);
       * https://developers.google.com/apps-script/reference/slides/slide#insertPageElement(PageElement)
       * @param pageElement The page element to be copied and inserted.
       */
      insertPageElement(pageElement: PageElement): PageElement;

      /**
       * Inserts a copy of the provided Shape on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a shape between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var shape = otherPresentationSlide.getShapes[0];
       *     currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertShape(Shape)
       * @param shape The shape to be copied and inserted.
       */
      insertShape(shape: Shape): Shape;

      /**
       * Inserts a shape on the page.
       *
       *
       * The shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert a shape in the first slide of the presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
       * https://developers.google.com/apps-script/reference/slides/slide#insertShape(ShapeType)
       * @param shapeType The type of shape to insert.
       */
      insertShape(shapeType: ShapeType): Shape;

      /**
       * Inserts a shape on the page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertShape(ShapeType,Number,Number,Number,Number)
       * @param shapeType The type of shape to insert.
       * @param left The horizontal position of the shape, measured from the upper left corner of the page.
       * @param top The vertical position of the shape, measured from the upper left corner of the page.
       * @param width The width of the shape.
       * @param height The height of the shape.
       */
      insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a Google Sheets chart on the page.
       *
       *
       * The chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChart(chart);
       * https://developers.google.com/apps-script/reference/slides/slide#insertSheetsChart(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart on the page with the provided position and size.
       *
       *
       * In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
       * to the provided size.
       *
       *
       * The inserted chart is linked with the source Google Sheets chart which allows it to be
       * updated. Other collaborators can see the link to the source spreadsheet.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChart(
       *         chart,
       *         position.left,
       *         position.top,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/slide#insertSheetsChart(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): SheetsChart;

      /**
       * Inserts a copy of the provided SheetsChart on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a sheets chart between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertSheetsChart(sheetsChart);
       * https://developers.google.com/apps-script/reference/slides/slide#insertSheetsChart(SheetsChart)
       * @param sheetsChart The sheets chart to be copied and inserted.
       */
      insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;

      /**
       * Inserts a Google Sheets chart as an Image on the page.
       *
       *
       * The image of the chart is inserted with a default size at the top left corner of the page.
       *
       *
       * The inserted image of chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertSheetsChartAsImage(EmbeddedChart)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;

      /**
       * Inserts a Google Sheets chart as an Image on the page with the provided position and
       * size.
       *
       *
       * In order to maintain the chart image's aspect ratio, the image is scaled and centered with
       * respect to the provided size.
       *
       *
       * The inserted image of the chart is not linked with the source Google Sheets chart.
       *
       *
       *     var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
       *     var chart = sheet.getCharts()[0];
       *     // Insert the spreadsheet chart in the first slide.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var position = {left: 0, top: 0};
       *     var size = {width: 200, height: 200};
       *
       *     // Also available for Layout, Master, and Page.
       *     slide.insertSheetsChartAsImage(
       *         chart,
       *         position.left,
       *         position.right,
       *         size.width,
       *         size.height);
       * https://developers.google.com/apps-script/reference/slides/slide#insertSheetsChartAsImage(EmbeddedChart,Number,Number,Number,Number)
       * @param sourceChart The chart in a spreadsheet to be inserted in the page.
       * @param left The horizontal position of the chart in points, measured from the upper left corner of the page.
       * @param top The vertical position of the chart in points, measured from the upper left corner of the page.
       * @param width The width of the chart in points.
       * @param height The height of the chart in points.
       */
      insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart, left: number, top: number, width: number, height: number): Image;

      /**
       * Inserts a table on the page.
       *
       *
       * The table is centered on the page with default size and evenly distributed rows and columns.
       * https://developers.google.com/apps-script/reference/slides/slide#insertTable(Integer,Integer)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       */
      insertTable(numRows: Integer, numColumns: Integer): Table;

      /**
       * Inserts a table on the page with the provided position and size.
       *
       *
       * Rows and columns are evenly distributed in the created table.
       * https://developers.google.com/apps-script/reference/slides/slide#insertTable(Integer,Integer,Number,Number,Number,Number)
       * @param numRows The number of rows in the table.
       * @param numColumns The number of columns in the table.
       * @param left The horizontal position of the table, measured from the upper left corner of the page.
       * @param top The vertical position of the table, measured from the upper left corner of the page.
       * @param width The width of the table.
       * @param height The minimum height of the table. The actual height of the rendered table depends on factors such as text font size.
       */
      insertTable(numRows: Integer, numColumns: Integer, left: number, top: number, width: number, height: number): Table;

      /**
       * Inserts a copy of the provided Table on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a table between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var table = otherPresentationSlide.getTables[0];
       *     currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertTable(Table)
       * @param table The table to be copied and inserted.
       */
      insertTable(table: Table): Table;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       * The text box shape is inserted with a default size at the top left corner of the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertTextBox(String)
       * @param text The string the text box shape should contain.
       */
      insertTextBox(text: string): Shape;

      /**
       * Inserts a text box Shape containing the provided string on the page.
       *
       *
       *     // Insert text box with "Hello" on the first slide of presentation. This text box is a square
       *     // with a length of 10 points on each side.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertTextBox(String,Number,Number,Number,Number)
       * @param text The string the text box shape should contain.
       * @param left The horizontal position of the text box shape, measured from the upper left corner of the page.
       * @param top The vertical position of the text box shape, measured from the upper left corner of the page.
       * @param width The width of the text box shape.
       * @param height The height of the text box shape.
       */
      insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;

      /**
       * Inserts a video at the top left corner of the page with a default size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/slide#insertVideo(String)
       * @param videoUrl The URL of the video to insert.
       */
      insertVideo(videoUrl: string): Video;

      /**
       * Inserts a video on the page with the provided position and size.
       *
       *
       * Only YouTube videos are currently supported.
       * https://developers.google.com/apps-script/reference/slides/slide#insertVideo(String,Number,Number,Number,Number)
       * @param videoUrl The URL of the video to insert.
       * @param left The horizontal position of the video in points, measured from the upper left corner of the page.
       * @param top The vertical position of the video in points, measured from the upper left corner of the page.
       * @param width The width of the video in points.
       * @param height The height of the video in points.
       */
      insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;

      /**
       * Inserts a copy of the provided Video on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a video between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var video = otherPresentationSlide.getVideos[0];
       *     currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#insertVideo(Video)
       * @param video The video to be copied and inserted.
       */
      insertVideo(video: Video): Video;

      /**
       * Inserts a copy of the provided WordArt on the page.
       *
       *
       * The inserted element's position on this page is determined from the source element's
       * position on its respective page.
       *
       *
       * If the provided element is a placeholder being copied from within the current presentation,
       * properties that inherit from master or layout pages also inherit on the inserted element.
       *
       *
       * If the provided element is a placeholder being copied from a different presentation,
       * properties that inherit from master or layout pages are copied onto the element from the source
       * presentation.
       *
       *
       *     // Copy a word art between presentations.
       *     var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
       *     var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var wordArt = otherPresentationSlide.getWordArts[0];
       *
       *     // Also available for Layout, Master, and Page.
       *     currentPresentationSlide.insertWordArt(wordArt);
       * https://developers.google.com/apps-script/reference/slides/slide#insertWordArt(WordArt)
       * @param wordArt The group to be copied and inserted.
       */
      insertWordArt(wordArt: WordArt): WordArt;

      /**
       * Move the slide to the specified index.
       * https://developers.google.com/apps-script/reference/slides/slide#move(Integer)
       * @param index The index where the slide should be moved to, based on the slide arrangement before the move. The index should be between zero and the number of slides in the presentation, inclusive.
       */
      move(index: Integer): void;

      /**
       * Refreshes the slide to reflect any changes made to the linked source slide. If this slide is
       * not linked, returns without making any changes.
       *
       *
       * The refreshSlide method copies the linked source slide's corresponding master and
       * layout pages into the slide's presentation if they do not already exist. If they do already
       * exist, they are likewise updated to reflect any changes made to the source.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/slides/slide#refreshSlide()
       */
      refreshSlide(): void;

      /**
       * Removes the page.
       * https://developers.google.com/apps-script/reference/slides/slide#remove()
       */
      remove(): void;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/slide#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/slide#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Selects the Page in the active presentation as the current page selection and removes any previous selection.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       *     // Select the first slide as the current page selection and replace any previous selection.
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
       * https://developers.google.com/apps-script/reference/slides/slide#selectAsCurrentPage()
       */
      selectAsCurrentPage(): void;

      /**
       * Unlinks the current Slide from its source slide. If this slide is not linked, returns
       * without making any changes.
       *
       *
       *     var currentPresentation = SlidesApp.getActivePresentation();
       *     var sourcePresentation = SlidesApp.openById('sourcePresentationId');
       *     var sourceSlide = sourcePresentation.getSlides()[0];
       *     var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);
       *
       *     linkedSlide.unlink();
       *
       *     linkedSlide.getSourcePresentationId(); // returns null
       *     linkedSlide.getSourceSlideObjectId();  // returns null
       *     linkedSlide.getSlideLinkingMode();     // returns SlidesApp.SlideLinkingMode.NOT_LINKED
       * https://developers.google.com/apps-script/reference/slides/slide#unlink()
       */
      unlink(): void;
    }
    /**
     * The mode of links between slides.
     */
    enum SlideLinkingMode { UNSUPPORTED, LINKED, NOT_LINKED }
    /**
     * The relative position of a Slide.
     */
    enum SlidePosition { NEXT_SLIDE, PREVIOUS_SLIDE, FIRST_SLIDE, LAST_SLIDE }
    /**
     * Creates and opens Presentations that can be edited.
     *
     *     // Open a presentation by ID.
     *     var preso = SlidesApp.openById('PRESENTATION_ID_GOES_HERE');
     *
     *     // Create and open a presentation.
     *     preso = SlidesApp.create('Presentation Name');
     */
    interface SlidesApp {
      AlignmentPosition: typeof AlignmentPosition;
      ArrowStyle: typeof ArrowStyle;
      AutoTextType: typeof AutoTextType;
      CellMergeState: typeof CellMergeState;
      ColorType: typeof Base.ColorType;
      ContentAlignment: typeof ContentAlignment;
      DashStyle: typeof DashStyle;
      FillType: typeof FillType;
      LineCategory: typeof LineCategory;
      LineFillType: typeof LineFillType;
      LineType: typeof LineType;
      LinkType: typeof LinkType;
      ListPreset: typeof ListPreset;
      PageBackgroundType: typeof PageBackgroundType;
      PageElementType: typeof PageElementType;
      PageType: typeof PageType;
      ParagraphAlignment: typeof ParagraphAlignment;
      PlaceholderType: typeof PlaceholderType;
      PredefinedLayout: typeof PredefinedLayout;
      SelectionType: typeof SelectionType;
      ShapeType: typeof ShapeType;
      SheetsChartEmbedType: typeof SheetsChartEmbedType;
      SlideLinkingMode: typeof SlideLinkingMode;
      SlidePosition: typeof SlidePosition;
      SpacingMode: typeof SpacingMode;
      TextBaselineOffset: typeof TextBaselineOffset;
      TextDirection: typeof TextDirection;
      ThemeColorType: typeof ThemeColorType;
      VideoSourceType: typeof VideoSourceType;

      /**
       * Creates and opens a new Presentation.
       * https://developers.google.com/apps-script/reference/slides/slides-app#create(String)
       * @param name The name to be given to the created presentation.
       */
      create(name: string): Presentation;

      /**
       * Returns the currently active presentation to which the script is container-bound, or null if there is no
       * active presentation. To interact with a presentation to which the script is not
       * container-bound, use openById(id) instead.
       *
       *
       *     // Get the current presentation to which this script is bound.
       *     var presentation = SlidesApp.getActivePresentation();
       * https://developers.google.com/apps-script/reference/slides/slides-app#getActivePresentation()
       */
      getActivePresentation(): Presentation;

      /**
       * Returns an instance of the presentation's user-interface environment that allows the script to
       * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
       * current instance of an open presentation, and only if the script is bound to the presentation. For more information, see
       * the guides to menus and dialogs and sidebars.
       *
       *
       *     // Add a custom menu to the active presentation, including a separator and a sub-menu.
       *     function onOpen(e) {
       *       SlidesApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(SlidesApp.getUi().createMenu('My sub-menu')
       *               .addItem('One sub-menu item', 'mySecondFunction')
       *               .addItem('Another sub-menu item', 'myThirdFunction'))
       *           .addToUi();
       *     }
       * https://developers.google.com/apps-script/reference/slides/slides-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Returns a new AffineTransformBuilder to build an AffineTransform. The builder
       * is preset with the identity affine transform.
       * https://developers.google.com/apps-script/reference/slides/slides-app#newAffineTransformBuilder()
       */
      newAffineTransformBuilder(): AffineTransformBuilder;

      /**
       * Opens the Presentation with the given ID.
       *
       *
       *     // Open a presentation by ID.
       *     var presentation = SlidesApp.openById('docId');
       * https://developers.google.com/apps-script/reference/slides/slides-app#openById(String)
       * @param id
       */
      openById(id: string): Presentation;

      /**
       * Opens the Presentation with the given URL.
       *
       *
       *     // Open a presentation by URL.
       *     var presentation = SlidesApp.openByUrl('https://docs.google.com/presentation/d/docId/edit');
       * https://developers.google.com/apps-script/reference/slides/slides-app#openByUrl(String)
       * @param url
       */
      openByUrl(url: string): Presentation;
    }
    /**
     * A solid color fill.
     *
     * SolidFill objects are detached and immutable, so do not reflect changes made after
     * they have been created.
     */
    interface SolidFill {

      /**
       * Get the opacity of the color, in the interval from [0, 1.0], where 1.0 means fully opaque.
       * https://developers.google.com/apps-script/reference/slides/solid-fill#getAlpha()
       */
      getAlpha(): number;

      /**
       * Get the color of the fill.
       * https://developers.google.com/apps-script/reference/slides/solid-fill#getColor()
       */
      getColor(): Color;
    }
    /**
     * The different modes for paragraph spacing.
     */
    enum SpacingMode { UNSUPPORTED, NEVER_COLLAPSE, COLLAPSE_LISTS }
    /**
     * A PageElement representing a table.
     */
    interface Table {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/table#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Table;

      /**
       * Appends a new column to the right of the last column of the table.
       * https://developers.google.com/apps-script/reference/slides/table#appendColumn()
       */
      appendColumn(): TableColumn;

      /**
       * Appends a new row below the last row of the table.
       * https://developers.google.com/apps-script/reference/slides/table#appendRow()
       */
      appendRow(): TableRow;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/table#bringForward()
       */
      bringForward(): Table;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/table#bringToFront()
       */
      bringToFront(): Table;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/table#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the specified cell in the table.
       * https://developers.google.com/apps-script/reference/slides/table#getCell(Integer,Integer)
       * @param rowIndex The row index of the cell to retrieve.
       * @param columnIndex The column index of the cell to retrieve.
       */
      getCell(rowIndex: Integer, columnIndex: Integer): TableCell;

      /**
       * Returns the specified column in the table.
       * https://developers.google.com/apps-script/reference/slides/table#getColumn(Integer)
       * @param columnIndex The 0-based column index.
       */
      getColumn(columnIndex: Integer): TableColumn;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/table#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/table#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/table#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/table#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the number of columns in the table.
       * https://developers.google.com/apps-script/reference/slides/table#getNumColumns()
       */
      getNumColumns(): Integer;

      /**
       * Returns the number of rows in the table.
       * https://developers.google.com/apps-script/reference/slides/table#getNumRows()
       */
      getNumRows(): Integer;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/table#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/table#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/table#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/table#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the specified row in the table.
       * https://developers.google.com/apps-script/reference/slides/table#getRow(Integer)
       * @param rowIndex The index of the row to retrieve.
       */
      getRow(rowIndex: Integer): TableRow;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/table#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/table#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#getWidth()
       */
      getWidth(): number;

      /**
       * Inserts a new column at the specified index of the table.
       *
       *
       * If all the cells in the column to the left of the specified index are merged with other
       * columns, the new column is inserted to the right of the common columns spanned by these cells.
       * https://developers.google.com/apps-script/reference/slides/table#insertColumn(Integer)
       * @param index The index at which to insert a new column.
       */
      insertColumn(index: Integer): TableColumn;

      /**
       * Inserts a new row at the specified index of the table.
       *
       *
       * If all the cells in the row above the specified index are merged with other rows, the new
       * row is inserted below the common rows spanned by these cells.
       * https://developers.google.com/apps-script/reference/slides/table#insertRow(Integer)
       * @param index The index at which to insert a new row.
       */
      insertRow(index: Integer): TableRow;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/table#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Table;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/table#remove()
       */
      remove(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Table;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Table;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/table#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/table#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/table#sendBackward()
       */
      sendBackward(): Table;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/table#sendToBack()
       */
      sendToBack(): Table;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/table#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Table;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Table;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Table;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/table#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Table;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/table#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Table;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Table;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/table#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Table;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/table#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Table;
    }
    /**
     * A cell in a table.
     */
    interface TableCell {

      /**
       * Returns the 0-based column index of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getColumnIndex()
       */
      getColumnIndex(): Integer;

      /**
       * Returns the column span of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getColumnSpan()
       */
      getColumnSpan(): Integer;

      /**
       * Returns the ContentAlignment of the text in the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getContentAlignment()
       */
      getContentAlignment(): ContentAlignment;

      /**
       * Returns the fill of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getFill()
       */
      getFill(): Fill;

      /**
       * Returns the head cell of this table cell. Returns null if this cell has not been merged
       * or if this cell is the head cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getHeadCell()
       */
      getHeadCell(): TableCell;

      /**
       * Returns the merge state of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getMergeState()
       */
      getMergeState(): CellMergeState;

      /**
       * Returns the table column containing the current cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getParentColumn()
       */
      getParentColumn(): TableColumn;

      /**
       * Returns the table row containing the current cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getParentRow()
       */
      getParentRow(): TableRow;

      /**
       * Returns the table containing the current cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Returns the 0-based row index of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getRowIndex()
       */
      getRowIndex(): Integer;

      /**
       * Returns the row span of the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getRowSpan()
       */
      getRowSpan(): Integer;

      /**
       * Returns the text content of the table cell. Returns null if the cell is merged but is
       * not a head cell.
       *
       *
       * Text within a table cell always terminates with a newline character.
       * https://developers.google.com/apps-script/reference/slides/table-cell#getText()
       */
      getText(): TextRange;

      /**
       * Sets the ContentAlignment of the text in the table cell.
       * https://developers.google.com/apps-script/reference/slides/table-cell#setContentAlignment(ContentAlignment)
       * @param contentAlignment
       */
      setContentAlignment(contentAlignment: ContentAlignment): TableCell;
    }
    /**
     * A collection of one or more TableCell instances.
     */
    interface TableCellRange {

      /**
       * Returns the list of TableCell instances.
       * https://developers.google.com/apps-script/reference/slides/table-cell-range#getTableCells()
       */
      getTableCells(): TableCell[];
    }
    /**
     * A column in a table. A column consists of a list of table cells. A column is identified by the
     * column index.
     */
    interface TableColumn {

      /**
       * Returns the cell at the specified index.
       * https://developers.google.com/apps-script/reference/slides/table-column#getCell(Integer)
       * @param cellIndex The 0-based index of the cell to retrieve.
       */
      getCell(cellIndex: Integer): TableCell;

      /**
       * Returns the 0-based index of the column.
       * https://developers.google.com/apps-script/reference/slides/table-column#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the number of cells in this column.
       * https://developers.google.com/apps-script/reference/slides/table-column#getNumCells()
       */
      getNumCells(): Integer;

      /**
       * Returns the table containing the current column.
       * https://developers.google.com/apps-script/reference/slides/table-column#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Returns the width of the column in points.
       * https://developers.google.com/apps-script/reference/slides/table-column#getWidth()
       */
      getWidth(): number;

      /**
       * Removes the table column.
       *
       *
       * If all the cells in the column are merged with other columns, the common columns spanned by
       * these cells are removed.
       *
       *
       * If no columns remain in the table after this removal, the whole table is removed.
       * https://developers.google.com/apps-script/reference/slides/table-column#remove()
       */
      remove(): void;
    }
    /**
     * A row in a table. A row consists of a list of table cells. A row is identified by the row index.
     */
    interface TableRow {

      /**
       * Returns the cell at the specified index.
       * https://developers.google.com/apps-script/reference/slides/table-row#getCell(Integer)
       * @param cellIndex The 0-based index of the cell to retrieve.
       */
      getCell(cellIndex: Integer): TableCell;

      /**
       * Returns the 0-based index of the row.
       * https://developers.google.com/apps-script/reference/slides/table-row#getIndex()
       */
      getIndex(): Integer;

      /**
       * Returns the minimum height of the row in points. The actual height depends on the length of the
       * content of the cell.
       * https://developers.google.com/apps-script/reference/slides/table-row#getMinimumHeight()
       */
      getMinimumHeight(): number;

      /**
       * Returns the number of cells in this row.
       * https://developers.google.com/apps-script/reference/slides/table-row#getNumCells()
       */
      getNumCells(): Integer;

      /**
       * Returns the table containing the current row.
       * https://developers.google.com/apps-script/reference/slides/table-row#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Removes the table row.
       *
       *
       * If all the cells in the row are merged with other rows, the common rows spanned by these
       * cells are removed.
       *
       *
       * If no rows remain in the table after this removal, the whole table is removed.
       * https://developers.google.com/apps-script/reference/slides/table-row#remove()
       */
      remove(): void;
    }
    /**
     * The text vertical offset from its normal position.
     */
    enum TextBaselineOffset { UNSUPPORTED, NONE, SUPERSCRIPT, SUBSCRIPT }
    /**
     * The directions text can flow in.
     */
    enum TextDirection { UNSUPPORTED, LEFT_TO_RIGHT, RIGHT_TO_LEFT }
    /**
     * A segment of the text contents of a Shape or a TableCell.
     */
    interface TextRange {

      /**
       * Appends a paragraph at the end of the text range. The paragraph maintains the styling of the
       * end of the current text range.
       *
       *
       * The provided text string is appended as a paragraph by adding at least one surrounding
       * newline character to the string.
       *
       *
       * When the provided text string contains newline characters (thus consisting of multiple
       * paragraphs), the final paragraph added is returned.
       * https://developers.google.com/apps-script/reference/slides/text-range#appendParagraph(String)
       * @param text The string to append as a paragraph.
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Appends a copy of the provided text range to the end of the current text range.
       *
       *
       * The formatting of the inserted text will match that of the source text.
       * https://developers.google.com/apps-script/reference/slides/text-range#appendRange(TextRange)
       * @param textRange The text range to append.
       */
      appendRange(textRange: TextRange): TextRange;

      /**
       * Appends a copy of the provided text range to the end of the current text range.
       *
       *
       * If set to match the formatting of the destination text, AutoText within the provided
       * text range are replaced with their rendered values. Furthermore, any non-text elements within
       * the provided text range are not appended.
       * https://developers.google.com/apps-script/reference/slides/text-range#appendRange(TextRange,Boolean)
       * @param textRange The text range to append.
       * @param matchSourceFormatting If true, match the formatting of the source text; if false, match the formatting of the destination text.
       */
      appendRange(textRange: TextRange, matchSourceFormatting: boolean): TextRange;

      /**
       * Appends text at the end of the text range. The text maintains the styling of the end of the
       * existing text.
       * https://developers.google.com/apps-script/reference/slides/text-range#appendText(String)
       * @param text The string to append.
       */
      appendText(text: string): TextRange;

      /**
       * Returns the rendered text bounded by this range of the associated shape or table cell in a
       * format appropriate to display to end users.
       *
       *
       * AutoText elements, such as generated slide numbers, are replaced with their rendered values.
       * Any non-text elements in the range are omitted.
       * https://developers.google.com/apps-script/reference/slides/text-range#asRenderedString()
       */
      asRenderedString(): string;

      /**
       * Returns the raw text bounded by this range of the associated shape or table cell.
       *
       *
       * AutoText elements such as generated slide numbers and any non-text elements in the range are
       * replaced with the Unicode character U+E907.
       * https://developers.google.com/apps-script/reference/slides/text-range#asString()
       */
      asString(): string;

      /**
       * Clears the text bounded by this range.
       *
       *
       * Since the entire text in a Shape or TableCell must end in a newline, the final newline in
       * the text is not removed.
       * https://developers.google.com/apps-script/reference/slides/text-range#clear()
       */
      clear(): void;

      /**
       * Clears the text bounded by the start and end offsets in the range.
       *
       *
       * Since the text must end in a newline, the final newline in text is not removed even if it's
       * covered by the given offsets.
       * https://developers.google.com/apps-script/reference/slides/text-range#clear(Integer,Integer)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the range to clear. The start offset must be equal to or greater than 0 and less than or equal to endOffset. startOffset must also be less than the length of the current range.
       * @param endOffset The number of characters past the start index of the current text range used to determine the exclusive end index of the range to clear. The endOffset must be equal to or greater than startOffset. endOffset must also be less than or equal to the length of the current range.
       */
      clear(startOffset: Integer, endOffset: Integer): void;

      /**
       * Returns all the ranges matching the search pattern in the current text range. The search is
       * case sensitive.
       * https://developers.google.com/apps-script/reference/slides/text-range#find(String)
       * @param pattern The regular expression pattern to search; any backslashes in the pattern should be escaped.
       */
      find(pattern: string): TextRange[];

      /**
       * Returns all the ranges matching the search pattern in the current text range starting from the
       * start offset. The search is case sensitive.
       * https://developers.google.com/apps-script/reference/slides/text-range#find(String,Integer)
       * @param pattern The regular expression pattern to search; any backslashes in the pattern should be escaped.
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the range to search. startOffset must also be less than the length of the current range.
       */
      find(pattern: string, startOffset: Integer): TextRange[];

      /**
       * Returns the auto texts within the current text range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getAutoTexts()
       */
      getAutoTexts(): AutoText[];

      /**
       * Returns the exclusive, 0-based index for the last character in this range. If the start and end
       * indices are equal, the range is considered to be empty.
       * https://developers.google.com/apps-script/reference/slides/text-range#getEndIndex()
       */
      getEndIndex(): Integer;

      /**
       * Returns the number of characters in this range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getLength()
       */
      getLength(): Integer;

      /**
       * Returns a collection of text ranges that correspond to all Links within the current
       * text range or overlapping the current text range.
       *
       *
       * Each returned range is guaranteed to span one link when it is created. Text modifications
       * can cause it to no longer represent exactly one link.
       *
       *
       * Each Link on the returned ranges can be accessed via TextStyle.getLink().
       *
       *
       *     // Accesses the first link on a TextRange object.
       *     var linkTextRange = textRange.getLinks()[0];
       *     var textStyle = linkTextRange.getTextStyle();
       *     Logger.log(textStyle.hasLink()); // logs 'true'
       *     var link = textStyle.getLink();  // Link object
       * https://developers.google.com/apps-script/reference/slides/text-range#getLinks()
       */
      getLinks(): TextRange[];

      /**
       * Returns the paragraphs in lists that overlap the current text range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getListParagraphs()
       */
      getListParagraphs(): Paragraph[];

      /**
       * Returns the ListStyle of the current text range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getListStyle()
       */
      getListStyle(): ListStyle;

      /**
       * Returns the ParagraphStyle of the current text range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getParagraphStyle()
       */
      getParagraphStyle(): ParagraphStyle;

      /**
       * Returns the paragraphs that overlap the current text range.
       * https://developers.google.com/apps-script/reference/slides/text-range#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Returns a new TextRange covering part of the range from which it is derived.
       * https://developers.google.com/apps-script/reference/slides/text-range#getRange(Integer,Integer)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the returned range. The start offset must be equal to or greater than 0 and less than or equal to endOffset. startOffset must also be less than the length of the current range.
       * @param endOffset The number of characters past the start index of the current text range used to determine the exclusive end index of the returned range. The endOffset must be equal to or greater than startOffset. endOffset must also be less than or equal to the length of the current range.
       */
      getRange(startOffset: Integer, endOffset: Integer): TextRange;

      /**
       * Returns the text runs that overlap the current text range. A text run is a segment of text
       * where all the characters have the same text style.
       *
       *
       * Each returned range is only guaranteed to span one run when it is created. Text or style
       * modifications can cause it to no longer represent exactly one run.
       * https://developers.google.com/apps-script/reference/slides/text-range#getRuns()
       */
      getRuns(): TextRange[];

      /**
       * Returns the inclusive, 0-based index for the first character in this range. If the start and
       * end indices are equal, the range is considered to be empty.
       * https://developers.google.com/apps-script/reference/slides/text-range#getStartIndex()
       */
      getStartIndex(): Integer;

      /**
       * Returns the text style of the range, or null if the range is empty.
       * https://developers.google.com/apps-script/reference/slides/text-range#getTextStyle()
       */
      getTextStyle(): TextStyle;

      /**
       * Inserts a paragraph at the start offset. The paragraph maintains the styling of the current
       * text range at the start offset.
       *
       *
       * The provided text string is inserted as a paragraph by adding at least one surrounding
       * newline character to the string.
       *
       *
       * When the provided text string contains newline characters (thus consisting of multiple
       * paragraphs), the final paragraph added is returned.
       * https://developers.google.com/apps-script/reference/slides/text-range#insertParagraph(Integer,String)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the text to insert.
       * @param text The string to insert.
       */
      insertParagraph(startOffset: Integer, text: string): Paragraph;

      /**
       * Inserts a copy of the provided text range at the start offset.
       *
       *
       * The formatting of the inserted text will match that of the source text.
       * https://developers.google.com/apps-script/reference/slides/text-range#insertRange(Integer,TextRange)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the text to insert.
       * @param textRange The text range to insert.
       */
      insertRange(startOffset: Integer, textRange: TextRange): TextRange;

      /**
       * Inserts a copy of the provided text range at the start offset.
       *
       *
       * If set to match the formatting of the destination text, AutoText within the provided
       * text range are replaced with their rendered values. Furthermore, any non-text elements within
       * the provided text range are not inserted.
       * https://developers.google.com/apps-script/reference/slides/text-range#insertRange(Integer,TextRange,Boolean)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the text to insert.
       * @param textRange The text range to insert.
       * @param matchSourceFormatting If true, match the formatting of the source text; if false, match the formatting of the destination text.
       */
      insertRange(startOffset: Integer, textRange: TextRange, matchSourceFormatting: boolean): TextRange;

      /**
       * Inserts text at the start offset. The text maintains the styling of the existing text at the
       * start offset.
       * https://developers.google.com/apps-script/reference/slides/text-range#insertText(Integer,String)
       * @param startOffset The number of characters past the start index of the current text range used to determine the inclusive start index of the text to insert.
       * @param text The string to insert.
       */
      insertText(startOffset: Integer, text: string): TextRange;

      /**
       * Returns true if there are no characters in this range, and returns false
       * otherwise.
       * https://developers.google.com/apps-script/reference/slides/text-range#isEmpty()
       */
      isEmpty(): boolean;

      /**
       * Replaces all instances of text matching find text with replace text. The search is case
       * insensitive.
       * https://developers.google.com/apps-script/reference/slides/text-range#replaceAllText(String,String)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       */
      replaceAllText(findText: string, replaceText: string): Integer;

      /**
       * Replaces all instances of text matching find text with replace text.
       * https://developers.google.com/apps-script/reference/slides/text-range#replaceAllText(String,String,Boolean)
       * @param findText The text to find.
       * @param replaceText The text to replace the matched text.
       * @param matchCase If true, the search is case sensitive; if false, the search is case insensitive.
       */
      replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;

      /**
       * Selects only the TextRange in the active presentation and removes any previous
       * selection.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * The parent Page of the corresponding Shape or the TableCell is set
       * as the current page selection. The Shape or the TableCell is set as the selected page element.
       *
       *
       * https://developers.google.com/apps-script/reference/slides/text-range#select()
       */
      select(): void;

      /**
       * Sets the text bounded by this range of the associated shape or table cell. The text maintains
       * the styling of the start of the existing text.
       * https://developers.google.com/apps-script/reference/slides/text-range#setText(String)
       * @param newText The string to set as the new text.
       */
      setText(newText: string): TextRange;
    }
    /**
     * The style of text.
     *
     * Read methods in this class return null if the corresponding TextRange spans
     * multiple text runs, and those runs have different values for the read method being called. To
     * avoid this, query for text styles using the TextRanges returned by the TextRange.getRuns() method.
     */
    interface TextStyle {

      /**
       * Returns the background color of the text, or null if there are multiple styles on the
       * text.
       * https://developers.google.com/apps-script/reference/slides/text-style#getBackgroundColor()
       */
      getBackgroundColor(): Color;

      /**
       * Returns the vertical offset of text from its normal position, or null if there are
       * multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#getBaselineOffset()
       */
      getBaselineOffset(): TextBaselineOffset;

      /**
       * Returns the font family of the text, or null if there are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Returns the font size of the text in points, or null if there are multiple styles on
       * the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#getFontSize()
       */
      getFontSize(): number;

      /**
       * Returns the font weight of the text, or null if there are multiple styles on the text.
       *
       *
       * The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
       * the numerical values described in the CSS 2.1 Specification, section 15.6, with
       * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
       * which case isBold() returns true. The default value is 400
       * ("normal").
       * https://developers.google.com/apps-script/reference/slides/text-style#getFontWeight()
       */
      getFontWeight(): Integer;

      /**
       * Returns the foreground color of the text, or null if there are multiple styles on the
       * text.
       * https://developers.google.com/apps-script/reference/slides/text-style#getForegroundColor()
       */
      getForegroundColor(): Color;

      /**
       * Returns the Link on the text, or null if there is no link or if the link is on
       * part of the text or if there are multiple links. Call hasLink() to determine whether
       * the text has no link.
       *
       *
       *     var textLink = shape.getText().getTextStyle().getLink();
       *     if (textLink != null) {
       *       Logger.log('Shape text has a link of type: ' + textLink.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/text-style#getLink()
       */
      getLink(): Link;

      /**
       * Returns true if there is link on the text, false if not, or null if the
       * link is on part of the text or there are multiple links.
       *
       *
       * Links cannot be set on newline characters. Therefore, if the TextRange contains a
       * newline character, this method always returns either null or false.
       * https://developers.google.com/apps-script/reference/slides/text-style#hasLink()
       */
      hasLink(): boolean;

      /**
       * Returns true if the background of the text is transparent, false if not, or
       * null if there are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isBackgroundTransparent()
       */
      isBackgroundTransparent(): boolean;

      /**
       * Returns true if the text is rendered as bold, false if not, or null if
       * there are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isBold()
       */
      isBold(): boolean;

      /**
       * Returns true if the text is italicized, false if not, or null if there
       * are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isItalic()
       */
      isItalic(): boolean;

      /**
       * Returns true if the text is in small capital letters, false if not, or null if there are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isSmallCaps()
       */
      isSmallCaps(): boolean;

      /**
       * Returns true if the text is struck through, false if not, or null if
       * there are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isStrikethrough()
       */
      isStrikethrough(): boolean;

      /**
       * Returns true if the text is underlined, false if not, or null if there
       * are multiple styles on the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#isUnderline()
       */
      isUnderline(): boolean;

      /**
       * Removes a Link.
       *
       *
       * Removing a link removes the hyperlink foreground color and underline style on the text. If
       * possible, these styles are applied to match the text preceding the link.
       *
       *
       *     text.getTextStyle().removeLink();
       * https://developers.google.com/apps-script/reference/slides/text-style#removeLink()
       */
      removeLink(): TextStyle;

      /**
       * Sets the background color of the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBackgroundColor(Color)
       * @param color
       */
      setBackgroundColor(color: Color): TextStyle;

      /**
       * Sets the background color of the text to the given RGB values from 0 to 255.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBackgroundColor(Integer,Integer,Integer)
       * @param red
       * @param green
       * @param blue
       */
      setBackgroundColor(red: Integer, green: Integer, blue: Integer): TextStyle;

      /**
       * Sets the background color of the text to the given hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBackgroundColor(String)
       * @param hexColor
       */
      setBackgroundColor(hexColor: string): TextStyle;

      /**
       * Sets the background color of the text to the given ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBackgroundColor(ThemeColorType)
       * @param color
       */
      setBackgroundColor(color: ThemeColorType): TextStyle;

      /**
       * Sets the background color of the text to transparent.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBackgroundColorTransparent()
       */
      setBackgroundColorTransparent(): TextStyle;

      /**
       * Sets the vertical offset of the text relative to its normal position.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBaselineOffset(TextBaselineOffset)
       * @param offset
       */
      setBaselineOffset(offset: TextBaselineOffset): TextStyle;

      /**
       * Sets whether the text should be rendered as bold.
       *
       *
       * Changing the text's boldness updates the font weight used to render the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#setBold(Boolean)
       * @param bold
       */
      setBold(bold: boolean): TextStyle;

      /**
       * Sets the font family of the text .
       * https://developers.google.com/apps-script/reference/slides/text-style#setFontFamily(String)
       * @param fontFamily
       */
      setFontFamily(fontFamily: string): TextStyle;

      /**
       * Sets the font family and weight of the text.
       *
       *
       * The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
       * the numerical values described in the CSS 2.1 Specification, section 15.6, with
       * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
       * which case isBold() returns true. The default value is 400
       * ("normal").
       * https://developers.google.com/apps-script/reference/slides/text-style#setFontFamilyAndWeight(String,Integer)
       * @param fontFamily
       * @param fontWeight
       */
      setFontFamilyAndWeight(fontFamily: string, fontWeight: Integer): TextStyle;

      /**
       * Sets the font size of the text, in points.
       * https://developers.google.com/apps-script/reference/slides/text-style#setFontSize(Number)
       * @param fontSize
       */
      setFontSize(fontSize: number): TextStyle;

      /**
       * Sets the foreground color of the text.
       * https://developers.google.com/apps-script/reference/slides/text-style#setForegroundColor(Color)
       * @param foregroundColor
       */
      setForegroundColor(foregroundColor: Color): TextStyle;

      /**
       * Sets the foreground color of the text to the given RGB values from 0 to 255.
       * https://developers.google.com/apps-script/reference/slides/text-style#setForegroundColor(Integer,Integer,Integer)
       * @param red
       * @param green
       * @param blue
       */
      setForegroundColor(red: Integer, green: Integer, blue: Integer): TextStyle;

      /**
       * Sets the foreground color of the text to the given hex color string.
       *
       *
       * The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
       * '#FFC0CB'.
       * https://developers.google.com/apps-script/reference/slides/text-style#setForegroundColor(String)
       * @param hexColor
       */
      setForegroundColor(hexColor: string): TextStyle;

      /**
       * Sets the foreground color of the text to the given ThemeColorType.
       * https://developers.google.com/apps-script/reference/slides/text-style#setForegroundColor(ThemeColorType)
       * @param color
       */
      setForegroundColor(color: ThemeColorType): TextStyle;

      /**
       * Sets the whether the text is italicized.
       * https://developers.google.com/apps-script/reference/slides/text-style#setItalic(Boolean)
       * @param italic
       */
      setItalic(italic: boolean): TextStyle;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       * Setting a link changes the style of the text to be underlined and to have a ThemeColorType.HYPERLINK foreground color. This can be changed via setForegroundColor(hexColor) and setUnderline(underline).
       *
       *
       * Since links cannot be set on newline characters, newline characters in the TextRange
       * are ignored.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     text.getTextStyle().setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/text-style#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): TextStyle;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       * Setting a link changes the style of the text to be underlined and to have a ThemeColorType.HYPERLINK foreground color. This can be changed via setForegroundColor(hexColor) and setUnderline(underline).
       *
       *
       * Since links cannot be set on newline characters, newline characters in the TextRange
       * are ignored.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     text.getTextStyle().setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/text-style#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): TextStyle;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       * Setting a link changes the style of the text to be underlined and to have a ThemeColorType.HYPERLINK foreground color. This can be changed via setForegroundColor(hexColor) and setUnderline(underline).
       *
       *
       * Since links cannot be set on newline characters, newline characters in the TextRange
       * are ignored.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     text.getTextStyle().setLinkSlide(SlidesApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/text-style#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): TextStyle;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       * Setting a link changes the style of the text to be underlined and to have a ThemeColorType.HYPERLINK foreground color. This can be changed via setForegroundColor(hexColor) and setUnderline(underline).
       *
       *
       * Since links cannot be set on newline characters, newline characters in the TextRange
       * are ignored.
       *
       *
       *     // Set a link to the URL.
       *     text.getTextStyle().setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/text-style#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): TextStyle;

      /**
       * Sets whether the text is rendered in small capital letters.
       * https://developers.google.com/apps-script/reference/slides/text-style#setSmallCaps(Boolean)
       * @param smallCaps
       */
      setSmallCaps(smallCaps: boolean): TextStyle;

      /**
       * Sets whether the text is struck through.
       * https://developers.google.com/apps-script/reference/slides/text-style#setStrikethrough(Boolean)
       * @param strikethrough
       */
      setStrikethrough(strikethrough: boolean): TextStyle;

      /**
       * Sets whether the text is underlined.
       * https://developers.google.com/apps-script/reference/slides/text-style#setUnderline(Boolean)
       * @param underline
       */
      setUnderline(underline: boolean): TextStyle;
    }
    /**
     * A color that refers to an entry in the page's ColorScheme.
     */
    interface ThemeColor {

      /**
       * Get the type of this color.
       * https://developers.google.com/apps-script/reference/slides/theme-color#getColorType()
       */
      getColorType(): Base.ColorType;

      /**
       * Get the theme color type of this color.
       * https://developers.google.com/apps-script/reference/slides/theme-color#getThemeColorType()
       */
      getThemeColorType(): ThemeColorType;
    }
    /**
     * The name of an entry in the page's color scheme.
     */
    enum ThemeColorType { UNSUPPORTED, DARK1, LIGHT1, DARK2, LIGHT2, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK, FOLLOWED_HYPERLINK }
    /**
     * A PageElement representing a video.
     */
    interface Video {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/video#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): Video;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/video#bringForward()
       */
      bringForward(): Video;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/video#bringToFront()
       */
      bringToFront(): Video;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/video#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the Border of the video.
       * https://developers.google.com/apps-script/reference/slides/video#getBorder()
       */
      getBorder(): Border;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/video#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/video#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/video#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/video#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/video#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/video#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/video#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/video#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#getRotation()
       */
      getRotation(): number;

      /**
       * Gets the video source.
       * https://developers.google.com/apps-script/reference/slides/video#getSource()
       */
      getSource(): VideoSourceType;

      /**
       * Gets an URL to the video thumbnail. This URL is tagged with the account of the requester.
       * Anyone with the URL effectively accesses the thumbnail as the original requester. Access to the
       * thumbnail may be lost if the presentation's sharing settings change. The URL expires after a
       * short period of time.
       * https://developers.google.com/apps-script/reference/slides/video#getThumbnailUrl()
       */
      getThumbnailUrl(): string;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/video#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/video#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Gets an URL to the video. The URL is valid as long as the source video exists and sharing
       * settings do not change. Returns null when the video source is not supported.
       * https://developers.google.com/apps-script/reference/slides/video#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the video source's unique identifier for this video.
       * https://developers.google.com/apps-script/reference/slides/video#getVideoId()
       */
      getVideoId(): string;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/video#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): Video;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/video#remove()
       */
      remove(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): Video;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): Video;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/video#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/video#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/video#sendBackward()
       */
      sendBackward(): Video;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/video#sendToBack()
       */
      sendToBack(): Video;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/video#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): Video;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): Video;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): Video;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/video#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): Video;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/video#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): Video;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): Video;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/video#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): Video;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/video#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): Video;
    }
    /**
     * The video source types.
     */
    enum VideoSourceType { UNSUPPORTED, YOUTUBE }
    /**
     * A PageElement representing word art.
     */
    interface WordArt {

      /**
       * Aligns the element to the specified alignment position on the page.
       * https://developers.google.com/apps-script/reference/slides/word-art#alignOnPage(AlignmentPosition)
       * @param alignmentPosition The position to align this page element to on the page.
       */
      alignOnPage(alignmentPosition: AlignmentPosition): WordArt;

      /**
       * Brings the page element forward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/word-art#bringForward()
       */
      bringForward(): WordArt;

      /**
       * Brings the page element to the front of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/word-art#bringToFront()
       */
      bringToFront(): WordArt;

      /**
       * Duplicates the page element.
       *
       *
       * The duplicate page element is placed on the same page at the same position as the original.
       * https://developers.google.com/apps-script/reference/slides/word-art#duplicate()
       */
      duplicate(): PageElement;

      /**
       * Returns the list of ConnectionSites on the page element, or an empty list if the page
       * element does not have any connection sites.
       * https://developers.google.com/apps-script/reference/slides/word-art#getConnectionSites()
       */
      getConnectionSites(): ConnectionSite[];

      /**
       * Returns the page element's description. The description is combined with the title to display
       * and read alt text.
       * https://developers.google.com/apps-script/reference/slides/word-art#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#getHeight()
       */
      getHeight(): number;

      /**
       * Returns the element's inherent height in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/word-art#getInherentHeight()
       */
      getInherentHeight(): number;

      /**
       * Returns the element's inherent width in points.
       *
       *
       * The page element's transform is relative to its inherent size. Use the inherent size in
       * conjunction with the element's transform to determine the element's final visual appearance.
       * https://developers.google.com/apps-script/reference/slides/word-art#getInherentWidth()
       */
      getInherentWidth(): number;

      /**
       * Returns the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#getLeft()
       */
      getLeft(): number;

      /**
       * Returns the Link or null if there is no link.
       *
       *
       *     var link = shape.getLink();
       *     if (link != null) {
       *       Logger.log('Shape has a link of type: ' + link.getLinkType());
       *     }
       * https://developers.google.com/apps-script/reference/slides/word-art#getLink()
       */
      getLink(): Link;

      /**
       * Returns the unique ID for this object. Object IDs used by pages and page elements share the
       * same namespace.
       * https://developers.google.com/apps-script/reference/slides/word-art#getObjectId()
       */
      getObjectId(): string;

      /**
       * Returns the page element's type, represented as a PageElementType enum.
       * https://developers.google.com/apps-script/reference/slides/word-art#getPageElementType()
       */
      getPageElementType(): PageElementType;

      /**
       * Returns the group this page element belongs to, or null if the element is not in a
       * group.
       * https://developers.google.com/apps-script/reference/slides/word-art#getParentGroup()
       */
      getParentGroup(): Group;

      /**
       * Returns the page this page element is on.
       * https://developers.google.com/apps-script/reference/slides/word-art#getParentPage()
       */
      getParentPage(): Page;

      /**
       * Gets the text that is rendered as word art.
       * https://developers.google.com/apps-script/reference/slides/word-art#getRenderedText()
       */
      getRenderedText(): string;

      /**
       * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
       * means no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#getRotation()
       */
      getRotation(): number;

      /**
       * Returns the page element's title. The title is combined with the description to display and
       * read alt text.
       * https://developers.google.com/apps-script/reference/slides/word-art#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#getTop()
       */
      getTop(): number;

      /**
       * Returns the page element's transform.
       *
       *
       * The visual appearance of the page element is determined by its absolute transform. To
       * compute the absolute transform, preconcatenate a page element's transform with the transforms
       * of all of its parent groups. If the page element is not in a group, its absolute transform is
       * the same as the value in this field.
       * https://developers.google.com/apps-script/reference/slides/word-art#getTransform()
       */
      getTransform(): AffineTransform;

      /**
       * Returns the element's width in points, which is the width of the element's bounding box when
       * the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#getWidth()
       */
      getWidth(): number;

      /**
       * Preconcatenates the provided transform to the existing transform of the page element.
       *
       *
       *     newTransform = argument * existingTransform
       * For example, to move a page elements 36 points to the left:
       *
       *
       *     element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
       *         .setTranslateX(-36.0)
       *         .build());
       * You can also replace the page element's transform with setTransform(transform).
       * https://developers.google.com/apps-script/reference/slides/word-art#preconcatenateTransform(AffineTransform)
       * @param transform The transform to preconcatenate onto this page element's transform.
       */
      preconcatenateTransform(transform: AffineTransform): WordArt;

      /**
       * Removes the page element.
       *
       *
       * If after a remove operation, a Group contains only one or no page elements, the
       * group itself is also removed.
       *
       *
       * If a placeholder Shape is removed on a master or layout, any empty inheriting shapes
       * are also removed.
       * https://developers.google.com/apps-script/reference/slides/word-art#remove()
       */
      remove(): void;

      /**
       * Removes a Link.
       *
       *
       *     shape.removeLink();
       * https://developers.google.com/apps-script/reference/slides/word-art#removeLink()
       */
      removeLink(): void;

      /**
       * Scales the element's height by the specified ratio. The element's height is the height of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#scaleHeight(Number)
       * @param ratio The ratio to scale this page element's height by.
       */
      scaleHeight(ratio: number): WordArt;

      /**
       * Scales the element's width by the specified ratio. The element's width is the width of its
       * bounding box when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#scaleWidth(Number)
       * @param ratio The ratio to scale this page element's width by.
       */
      scaleWidth(ratio: number): WordArt;

      /**
       * Selects only the PageElement in the active presentation and removes any previous
       * selection. This is same as calling select(replace) with true.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * This sets the parent Page of the PageElement as the current page selection.
       *
       *
       *     var slide = SlidesApp.getActivePresentation().getSlides()[0];
       *     var pageElement = slide.getPageElements()[0];
       *     // Only select this page element and replace any previous selection.
       *     pageElement.select();
       * https://developers.google.com/apps-script/reference/slides/word-art#select()
       */
      select(): void;

      /**
       * Selects the PageElement in the active presentation.
       *
       *
       * A script can only access the selection of the user who is running the script, and only if
       * the script is bound to the presentation.
       *
       *
       * Pass true to this method to select only the PageElement and remove any
       * previous selection. This also sets the parent Page of the PageElement as the
       * current page selection.
       *
       *
       * Pass false to select multiple PageElement objects. The PageElement
       * objects must be in the same Page.
       *
       *
       * The following conditions must be met while selecting a page element using a false
       * parameter:
       *
       *
       * https://developers.google.com/apps-script/reference/slides/word-art#select(Boolean)
       * @param replace If true, the selection replaces any previous selection; otherwise the selection is added to any previous selection.
       */
      select(replace: boolean): void;

      /**
       * Sends the page element backward on the page by one element.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/word-art#sendBackward()
       */
      sendBackward(): WordArt;

      /**
       * Sends the page element to the back of the page.
       *
       *
       * The page element must not be in a group.
       * https://developers.google.com/apps-script/reference/slides/word-art#sendToBack()
       */
      sendToBack(): WordArt;

      /**
       * Sets the page element's alt text description.
       *
       *
       *     // Set the first page element's alt text description to "new alt text description".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setDescription('new alt text description');
       *     Logger.log(pageElement.getDescription());
       * https://developers.google.com/apps-script/reference/slides/word-art#setDescription(String)
       * @param description The string to set the alt text description to.
       */
      setDescription(description: string): WordArt;

      /**
       * Sets the element's height in points, which is the height of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#setHeight(Number)
       * @param height The new height of this page element to set, in points.
       */
      setHeight(height: number): WordArt;

      /**
       * Sets the element's horizontal position in points, measured from the upper-left corner of the
       * page when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#setLeft(Number)
       * @param left The new horizontal position to set, in points.
       */
      setLeft(left: number): WordArt;

      /**
       * Sets a Link to the given Slide using the zero-based index of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(0);
       * https://developers.google.com/apps-script/reference/slides/word-art#setLinkSlide(Integer)
       * @param slideIndex The zero-based index to the slide.
       */
      setLinkSlide(slideIndex: Integer): Link;

      /**
       * Sets a Link to the given Slide, the link is set by the given slide ID.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     var slide = presentation.getSlides()[0];
       *     shape.setLinkSlide(slide);
       * https://developers.google.com/apps-script/reference/slides/word-art#setLinkSlide(Slide)
       * @param slide The Slide to be linked.
       */
      setLinkSlide(slide: Slide): Link;

      /**
       * Sets a Link to the given Slide using the relative position of the slide.
       *
       *
       *     // Set a link to the first slide of the presentation.
       *     shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
       * https://developers.google.com/apps-script/reference/slides/word-art#setLinkSlide(SlidePosition)
       * @param slidePosition The relative SlidePosition.
       */
      setLinkSlide(slidePosition: SlidePosition): Link;

      /**
       * Sets a Link to the given non-empty URL string.
       *
       *
       *     // Set a link to the URL.
       *     shape.setLinkUrl("https://slides.google.com");
       * https://developers.google.com/apps-script/reference/slides/word-art#setLinkUrl(String)
       * @param url The URL string.
       */
      setLinkUrl(url: string): Link;

      /**
       * Sets the element's clockwise rotation angle around its center in degrees.
       * https://developers.google.com/apps-script/reference/slides/word-art#setRotation(Number)
       * @param angle The new clockwise rotation angle to set, in degrees.
       */
      setRotation(angle: number): WordArt;

      /**
       * Sets the page element's alt text title.
       *
       *
       *     // Set the first page element's alt text title to "new alt text title".
       *     var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
       *     pageElement.setTitle('new alt text title');
       *     Logger.log(pageElement.getTitle());
       * https://developers.google.com/apps-script/reference/slides/word-art#setTitle(String)
       * @param title The string to set the alt text title to.
       */
      setTitle(title: string): WordArt;

      /**
       * Sets the element's vertical position in points, measured from the upper-left corner of the page
       * when the element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#setTop(Number)
       * @param top The new vertical position to set, in points.
       */
      setTop(top: number): WordArt;

      /**
       * Sets the transform of the page element with the provided transform.
       *
       *
       * Updating the transform of a group changes the absolute transform of the page elements in
       * that group, which can change their visual appearance.
       *
       *
       * Updating the transform of a page element that is in a group only changes the transform of
       * that page element; it doesn't affect the transforms of the group or other page elements in the
       * group.
       *
       *
       * For details on how transforms impact visual appearance of page elements, see getTransform().
       * https://developers.google.com/apps-script/reference/slides/word-art#setTransform(AffineTransform)
       * @param transform The transform that is set for this page element.
       */
      setTransform(transform: AffineTransform): WordArt;

      /**
       * Sets the element's width in points, which is the width of the element's bounding box when the
       * element has no rotation.
       * https://developers.google.com/apps-script/reference/slides/word-art#setWidth(Number)
       * @param width The new width of this page element to set, in points.
       */
      setWidth(width: number): WordArt;
    }
  }
}

declare var SlidesApp: GoogleAppsScript.Slides.SlidesApp;
