// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Document {
    /**
     * An enumeration of the element attributes.
     *
     * Use attributes to compose custom styles. For example:
     *
     *     // Define a style with yellow background.
     *     var highlightStyle = {};
     *     highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFF00';
     *     highlightStyle[DocumentApp.Attribute.BOLD] = true;
     *
     *     // Insert "Hello", highlighted.
     *     DocumentApp.getActiveDocument().editAsText()
     *       .insertText(0, 'Hello\n')
     *       .setAttributes(0, 4, highlightStyle);
     */
    enum Attribute { BACKGROUND_COLOR, BOLD, BORDER_COLOR, BORDER_WIDTH, CODE, FONT_FAMILY, FONT_SIZE, FOREGROUND_COLOR, HEADING, HEIGHT, HORIZONTAL_ALIGNMENT, INDENT_END, INDENT_FIRST_LINE, INDENT_START, ITALIC, GLYPH_TYPE, LEFT_TO_RIGHT, LINE_SPACING, LINK_URL, LIST_ID, MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, MARGIN_TOP, NESTING_LEVEL, MINIMUM_HEIGHT, PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PAGE_HEIGHT, PAGE_WIDTH, SPACING_AFTER, SPACING_BEFORE, STRIKETHROUGH, UNDERLINE, VERTICAL_ALIGNMENT, WIDTH }
    /**
     * An element representing a document body. The Body may contain ListItem, Paragraph, Table, and TableOfContents elements. For more information on document
     * structure, see the guide to extending
     * Google Docs.
     *
     * The Body typically contains the full document contents except for the HeaderSection, FooterSection, and any FootnoteSection elements.
     *
     *     var doc = DocumentApp.getActiveDocument();
     *     var body = doc.getBody();
     *
     *     // Append a paragraph and a page break to the document body section directly.
     *     body.appendParagraph("A paragraph.");
     *     body.appendPageBreak();
     */
    interface Body {

      /**
       * Creates and appends a new HorizontalRule.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#appendImage(BlobSource)
       * @param image the image data
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       *
       * The InlineImage will be contained in a new Paragraph.
       *
       *
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       * https://developers.google.com/apps-script/reference/document/body#appendImage(InlineImage)
       * @param image the image data
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       *
       *
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       * https://developers.google.com/apps-script/reference/document/body#appendListItem(ListItem)
       * @param listItem the list item to append
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       *
       *
       * Consecutive list items are added as part of the same list.
       * https://developers.google.com/apps-script/reference/document/body#appendListItem(String)
       * @param text the list item's text contents
       */
      appendListItem(text: string): ListItem;

      /**
       * Creates and appends a new PageBreak.
       *
       *
       * The PageBreak will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       *
       *
       * The PageBreak will be contained in a new Paragraph.
       *
       *
       * Use this version of appendPageBreak when appending a copy of an existing PageBreak.
       * https://developers.google.com/apps-script/reference/document/body#appendPageBreak(PageBreak)
       * @param pageBreak the page break to append
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Appends the given Paragraph.
       *
       *
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       * https://developers.google.com/apps-script/reference/document/body#appendParagraph(String)
       * @param text the paragraph's text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/body#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/body#appendTable(String)
       * @param cells the text contents of the table cells to add to the new table
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       *
       *
       * Use this version of appendTable when appending a copy of an existing Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/body#appendTable(Table)
       * @param table the table to append
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/body#clear()
       */
      clear(): Body;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/body#copy()
       */
      copy(): Body;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/body#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/body#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/body#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/body#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/body#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/body#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/body#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/body#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the set of attributes for the provided ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/body#getHeadingAttributes(ParagraphHeading)
       * @param paragraphHeading the heading whose attributes will be retrieved
       */
      getHeadingAttributes(paragraphHeading: ParagraphHeading): object;

      /**
       * Retrieves all the InlineImages contained in the section.
       * https://developers.google.com/apps-script/reference/document/body#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       * https://developers.google.com/apps-script/reference/document/body#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the bottom margin, in points.
       * https://developers.google.com/apps-script/reference/document/body#getMarginBottom()
       */
      getMarginBottom(): number;

      /**
       * Retrieves the left margin, in points.
       * https://developers.google.com/apps-script/reference/document/body#getMarginLeft()
       */
      getMarginLeft(): number;

      /**
       * Retrieves the right margin.
       * https://developers.google.com/apps-script/reference/document/body#getMarginRight()
       */
      getMarginRight(): number;

      /**
       * Retrieves the top margin.
       * https://developers.google.com/apps-script/reference/document/body#getMarginTop()
       */
      getMarginTop(): number;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/body#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the page height, in points.
       * https://developers.google.com/apps-script/reference/document/body#getPageHeight()
       */
      getPageHeight(): number;

      /**
       * Retrieves the page width, in points.
       * https://developers.google.com/apps-script/reference/document/body#getPageWidth()
       */
      getPageWidth(): number;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       * https://developers.google.com/apps-script/reference/document/body#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/body#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       * https://developers.google.com/apps-script/reference/document/body#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/body#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/body#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/body#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified
       * index.
       * https://developers.google.com/apps-script/reference/document/body#insertImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#insertImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image to insert
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       * https://developers.google.com/apps-script/reference/document/body#insertListItem(Integer,ListItem)
       * @param childIndex the index at which to insert
       * @param listItem the list item to insert
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/body#insertListItem(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the list item's text contents
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       *
       *
       * The PageBreak will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#insertPageBreak(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       *
       *
       * The PageBreak will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/body#insertPageBreak(Integer,PageBreak)
       * @param childIndex the index at which to insert the element
       * @param pageBreak the p[age break to insert
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Inserts the given Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/body#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/body#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the paragraph's text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer)
       * @param childIndex the index at which to insert
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer,String)
       * @param childIndex the index at which to insert
       * @param cells the text contents of the table cells to add to the new table
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer,Table)
       * @param childIndex the index at which to insert
       * @param table the table to insert
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/body#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): Body;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/body#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/body#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Body;

      /**
       * Sets the attributes for the provided ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/body#setHeadingAttributes(ParagraphHeading,Object)
       * @param paragraphHeading the heading whose attributes will be set
       * @param attributes a map of attributes and the values to set them to
       */
      setHeadingAttributes(paragraphHeading: ParagraphHeading, attributes: object): Body;

      /**
       * Sets the bottom margin, in points.
       * https://developers.google.com/apps-script/reference/document/body#setMarginBottom(Number)
       * @param marginBottom the bottom margin, in points
       */
      setMarginBottom(marginBottom: number): Body;

      /**
       * Sets the left margin, in points.
       * https://developers.google.com/apps-script/reference/document/body#setMarginLeft(Number)
       * @param marginLeft the left margin, in points
       */
      setMarginLeft(marginLeft: number): Body;

      /**
       * Sets the right margin, in points.
       * https://developers.google.com/apps-script/reference/document/body#setMarginRight(Number)
       * @param marginRight the right margin
       */
      setMarginRight(marginRight: number): Body;

      /**
       * Sets the top margin.
       * https://developers.google.com/apps-script/reference/document/body#setMarginTop(Number)
       * @param marginTop the top margin, in points
       */
      setMarginTop(marginTop: number): Body;

      /**
       * Sets the page height, in points.
       * https://developers.google.com/apps-script/reference/document/body#setPageHeight(Number)
       * @param pageHeight the page height, in points
       */
      setPageHeight(pageHeight: number): Body;

      /**
       * Sets the page width, in points.
       * https://developers.google.com/apps-script/reference/document/body#setPageWidth(Number)
       * @param pageWidth the page width, in points
       */
      setPageWidth(pageWidth: number): Body;

      /**
       * Sets the contents as plain text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/body#setText(String)
       * @param text the new text contents
       */
      setText(text: string): Body;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/body#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Body;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): Body;
    }
    /**
     * An object representing a bookmark.
     *
     *     // Insert a bookmark at the cursor position and log its ID.
     *     var doc = DocumentApp.getActiveDocument();
     *     var cursor = doc.getCursor();
     *     var bookmark = doc.addBookmark(cursor);
     *     Logger.log(bookmark.getId());
     */
    interface Bookmark {

      /**
       * Gets the ID of the Bookmark. The ID is unique within the document.
       * https://developers.google.com/apps-script/reference/document/bookmark#getId()
       */
      getId(): string;

      /**
       * Gets the Position of the Bookmark within the Document. The Position remains accurate so long as the Bookmark is not deleted, even if the script
       * changes the document structure.
       * https://developers.google.com/apps-script/reference/document/bookmark#getPosition()
       */
      getPosition(): Position;

      /**
       * Deletes the Bookmark. Calling this method on a Bookmark that has already been
       * deleted has no effect.
       * https://developers.google.com/apps-script/reference/document/bookmark#remove()
       */
      remove(): void;
    }
    /**
     * A generic element that may contain other elements. All elements that may contain child elements,
     * such as Paragraph, inherit from ContainerElement.
     */
    interface ContainerElement {

      /**
       * Returns the current element as a Body.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asBody()
       */
      asBody(): Body;

      /**
       * Returns the current element as a Equation.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asEquation()
       */
      asEquation(): Equation;

      /**
       * Returns the current element as a FooterSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asFooterSection()
       */
      asFooterSection(): FooterSection;

      /**
       * Returns the current element as a FootnoteSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asFootnoteSection()
       */
      asFootnoteSection(): FootnoteSection;

      /**
       * Returns the current element as a HeaderSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asHeaderSection()
       */
      asHeaderSection(): HeaderSection;

      /**
       * Returns the current element as a ListItem.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the current element as a Paragraph.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asParagraph()
       */
      asParagraph(): Paragraph;

      /**
       * Returns the current element as a Table.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asTable()
       */
      asTable(): Table;

      /**
       * Returns the current element as a TableCell.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asTableCell()
       */
      asTableCell(): TableCell;

      /**
       * Returns the current element as a TableOfContents.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asTableOfContents()
       */
      asTableOfContents(): TableOfContents;

      /**
       * Returns the current element as a TableRow.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/container-element#asTableRow()
       */
      asTableRow(): TableRow;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/container-element#clear()
       */
      clear(): ContainerElement;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/container-element#copy()
       */
      copy(): ContainerElement;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/container-element#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/container-element#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/container-element#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/container-element#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/container-element#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/container-element#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/container-element#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/container-element#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/container-element#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/container-element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/container-element#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/container-element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/container-element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/container-element#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/container-element#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/container-element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/container-element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/container-element#merge()
       */
      merge(): ContainerElement;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/container-element#removeFromParent()
       */
      removeFromParent(): ContainerElement;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/container-element#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/container-element#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): ContainerElement;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/container-element#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): ContainerElement;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/container-element#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): ContainerElement;
    }
    /**
     * A document, containing rich text and elements such as tables and lists.
     *
     * Documents may be opened or created using DocumentApp.
     *
     *     // Open a document by ID.
     *     var doc = DocumentApp.openById("<my-id>");
     *
     *     // Create and open a document.
     *     doc = DocumentApp.create("Document Title");
     */
    interface Document {

      /**
       * Adds a Bookmark at the given Position.
       * https://developers.google.com/apps-script/reference/document/document#addBookmark(Position)
       * @param position the position of the new bookmark
       */
      addBookmark(position: Position): Bookmark;

      /**
       * Adds the given user to the list of editors for the Document. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/document/document#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Document;

      /**
       * Adds the given user to the list of editors for the Document. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/document/document#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Document;

      /**
       * Adds the given array of users to the list of editors for the Document. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/document/document#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Document;

      /**
       * Adds a document footer section, if none exists.
       * https://developers.google.com/apps-script/reference/document/document#addFooter()
       */
      addFooter(): FooterSection;

      /**
       * Adds a document header section, if none exists.
       * https://developers.google.com/apps-script/reference/document/document#addHeader()
       */
      addHeader(): HeaderSection;

      /**
       * Adds a new NamedRange, which is a Range that has a name and ID to allow
       * later retrieval. Names are not necessarily unique; several different ranges in the same
       * document may share the same name, much like a class in HTML. By contrast, IDs are unique within
       * the document, like an ID in HTML. Once a NamedRange has been added to a document, it
       * cannot be modified, only removed.
       *
       *
       * A NamedRange can be accessed by any script that accesses the document. To avoid
       * unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       *
       *     // Change the user's selection to a range that includes every table in the document.
       *     var doc = DocumentApp.getActiveDocument();
       *     var rangeBuilder = doc.newRange();
       *     var tables = doc.getBody().getTables();
       *     for (var i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       * https://developers.google.com/apps-script/reference/document/document#addNamedRange(String,Range)
       * @param name the name for the range, which does not need to be unique; range names must be at least 1 character, and no more than 256 characters
       * @param range the range of elements to associate with the name; the range can be the active selection, a search result, or manually constructed with newRange()
       */
      addNamedRange(name: string, range: Range): NamedRange;

      /**
       * Adds the given user to the list of viewers for the Document. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/document/document#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Document;

      /**
       * Adds the given user to the list of viewers for the Document. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/document/document#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Document;

      /**
       * Adds the given array of users to the list of viewers for the Document. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/document/document#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Document;

      /**
       * Retrieves the current Document contents as a blob of the specified type.
       * https://developers.google.com/apps-script/reference/document/document#getAs(String)
       * @param contentType the MIME type to convert to; currently only 'application/pdf' is supported
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Retrieves the current Document contents as a blob.
       * https://developers.google.com/apps-script/reference/document/document#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the active document's Body.
       *
       *
       * Documents may contain different types of sections (e.g. HeaderSection, FooterSection). The active section for a document is the Body.
       *
       *
       * Element methods in Document delegate to the active Body.
       * https://developers.google.com/apps-script/reference/document/document#getBody()
       */
      getBody(): Body;

      /**
       * Gets the Bookmark with the given ID. This method returns null if no such Bookmark exists.
       * https://developers.google.com/apps-script/reference/document/document#getBookmark(String)
       * @param id the ID for the Bookmark
       */
      getBookmark(id: string): Bookmark;

      /**
       * Gets all Bookmark objects in the document.
       * https://developers.google.com/apps-script/reference/document/document#getBookmarks()
       */
      getBookmarks(): Bookmark[];

      /**
       * Gets the user's cursor in the active document. A script can only access the cursor of the user
       * who is running the script, and only if the script is bound to the document.
       *
       *
       *     // Insert some text at the cursor position and make it bold.
       *     var cursor = DocumentApp.getActiveDocument().getCursor();
       *     if (cursor) {
       *       // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
       *       // containing element doesn't allow insertions, so show the user an error message.
       *       var element = cursor.insertText('ಠ‿ಠ');
       *       if (element) {
       *         element.setBold(true);
       *       } else {
       *         DocumentApp.getUi().alert('Cannot insert text here.');
       *       }
       *     } else {
       *       DocumentApp.getUi().alert('Cannot find a cursor.');
       *     }
       * https://developers.google.com/apps-script/reference/document/document#getCursor()
       */
      getCursor(): Position;

      /**
       * Gets the list of editors for this Document.
       * https://developers.google.com/apps-script/reference/document/document#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Retrieves the document's footer section, if one exists.
       * https://developers.google.com/apps-script/reference/document/document#getFooter()
       */
      getFooter(): FooterSection;

      /**
       * Retrieves all the Footnote elements in the document body.
       *
       *
       * Calls to getFootnotes cause an iteration over the document's elements. For large
       * documents, avoid unnecessary calls to this method.
       * https://developers.google.com/apps-script/reference/document/document#getFootnotes()
       */
      getFootnotes(): Footnote[];

      /**
       * Retrieves the document's header section, if one exists.
       * https://developers.google.com/apps-script/reference/document/document#getHeader()
       */
      getHeader(): HeaderSection;

      /**
       * Retrieves the document's unique identifier. The document ID is used with DocumentApp.openById() to open a specific document instance.
       * https://developers.google.com/apps-script/reference/document/document#getId()
       */
      getId(): string;

      /**
       * Gets the document's language code. This is the language shown in the document editor's File
       * > Language, which may not be the actual language that the document contains.
       * https://developers.google.com/apps-script/reference/document/document#getLanguage()
       */
      getLanguage(): string;

      /**
       * Retrieves the title of the document.
       * https://developers.google.com/apps-script/reference/document/document#getName()
       */
      getName(): string;

      /**
       * Gets the NamedRange with the given ID. This method returns null if no such
       * NamedRange exists. Names are not necessarily unique; several different ranges in the
       * same document may share the same name, much like a class in HTML. By contrast, IDs are unique
       * within the document, like an ID in HTML.
       * https://developers.google.com/apps-script/reference/document/document#getNamedRangeById(String)
       * @param id the range's ID, which is unique within the document
       */
      getNamedRangeById(id: string): NamedRange;

      /**
       * Gets all NamedRange objects in the document.
       *
       *
       * A NamedRange can be accessed by any script that accesses the document. To avoid
       * unintended conflicts between scripts, consider prefixing range names with a unique string.
       * https://developers.google.com/apps-script/reference/document/document#getNamedRanges()
       */
      getNamedRanges(): NamedRange[];

      /**
       * Gets all NamedRange objects in the document with the given name. Names are not
       * necessarily unique; several different ranges in the same document may share the same name, much
       * like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML.
       *
       *
       * A NamedRange can be accessed by any script that accesses the document. To avoid
       * unintended conflicts between scripts, consider prefixing range names with a unique string.
       * https://developers.google.com/apps-script/reference/document/document#getNamedRanges(String)
       * @param name the range's name, which is not necessarily unique
       */
      getNamedRanges(name: string): NamedRange[];

      /**
       * Gets the user's selection in the active document. A script can only access the selection of the
       * user who is running the script, and only if the script is bound to the document.
       *
       *
       *     // Display a dialog box that tells the user how many elements are included in the selection.
       *     var selection = DocumentApp.getActiveDocument().getSelection();
       *     if (selection) {
       *       var elements = selection.getRangeElements();
       *       DocumentApp.getUi().alert('Number of selected elements: ' + elements.length);
       *     } else {
       *       DocumentApp.getUi().alert('Nothing is selected.');
       *     }
       * https://developers.google.com/apps-script/reference/document/document#getSelection()
       */
      getSelection(): Range;

      /**
       * Gets all language codes that are supported in Google Docs files.
       * https://developers.google.com/apps-script/reference/document/document#getSupportedLanguageCodes()
       */
      getSupportedLanguageCodes(): string[];

      /**
       * Retrieves the URL to access the current document.
       *
       *
       *     var doc = DocumentApp.getActiveDocument();
       *
       *     // Send out the link to open the document.
       *     MailApp.sendEmail("<email-address>", doc.getName(), doc.getUrl());
       * https://developers.google.com/apps-script/reference/document/document#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Document.
       * https://developers.google.com/apps-script/reference/document/document#getViewers()
       */
      getViewers(): Base.User[];

      /**
       * Creates a new Position, which is a reference to a location in the document, relative to
       * a specific element. The user's cursor is represented as a Position, among other uses.
       *
       *
       *     // Append a paragraph, then place the user's cursor after the first word of the new paragraph.
       *     var doc = DocumentApp.getActiveDocument();
       *     var paragraph = doc.getBody().appendParagraph('My new paragraph.');
       *     var position = doc.newPosition(paragraph.getChild(0), 2);
       *     doc.setCursor(position);
       * https://developers.google.com/apps-script/reference/document/document#newPosition(Element,Integer)
       * @param element the element that will contain the new Position; this must be either a Text element or a container element like Paragraph
       * @param offset for Text elements, the number of characters before the Position; for other elements, the number of child elements before the Position within the same container element
       */
      newPosition(element: Element, offset: Integer): Position;

      /**
       * Creates a builder used to construct Range objects from document elements.
       *
       *
       *     // Change the user's selection to a range that includes every table in the document.
       *     var doc = DocumentApp.getActiveDocument();
       *     var rangeBuilder = doc.newRange();
       *     var tables = doc.getBody().getTables();
       *     for (var i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       * https://developers.google.com/apps-script/reference/document/document#newRange()
       */
      newRange(): RangeBuilder;

      /**
       * Removes the given user from the list of editors for the Document. This method doesn't
       * block users from accessing the Document if they belong to a class of users who have
       * general access—for example, if the Document is shared with the user's entire
       * domain, or if the Document is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/document/document#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Document;

      /**
       * Removes the given user from the list of editors for the Document. This method doesn't
       * block users from accessing the Document if they belong to a class of users who have
       * general access—for example, if the Document is shared with the user's entire
       * domain, or if the Document is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/document/document#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Document;

      /**
       * Removes the given user from the list of viewers and commenters for the Document. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the Document if they belong to a class of users who
       * have general access—for example, if the Document is shared with the user's
       * entire domain, or if the Document is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/document/document#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Document;

      /**
       * Removes the given user from the list of viewers and commenters for the Document. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the Document if they belong to a class of users who have general
       * access—for example, if the Document is shared with the user's entire domain, or
       * if the Document is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/document/document#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Document;

      /**
       * Saves the current Document. Causes pending updates to be flushed and applied.
       *
       *
       * The saveAndClose() method is automatically invoked at the end of script execution
       * for each open editable Document.
       *
       *
       * A closed Document can't be edited. Use DocumentApp.openById() to reopen a
       * given document for editing.
       * https://developers.google.com/apps-script/reference/document/document#saveAndClose()
       */
      saveAndClose(): void;

      /**
       * Sets the user's cursor in the active document, given a Position. A script can only
       * access the cursor of the user who is running the script, and only if the script is bound to the document.
       *
       *
       *     // Append a paragraph, then place the user's cursor after the first word of the new paragraph.
       *     var doc = DocumentApp.getActiveDocument();
       *     var paragraph = doc.getBody().appendParagraph('My new paragraph.');
       *     var position = doc.newPosition(paragraph.getChild(0), 2);
       *     doc.setCursor(position);
       * https://developers.google.com/apps-script/reference/document/document#setCursor(Position)
       * @param position the new cursor location
       */
      setCursor(position: Position): Document;

      /**
       * Sets the document's language code. This is the language shown in the document editor's File
       * > Language, which may not be the actual language that the document contains. Use getSupportedLanguageCodes() to get all the valid language codes.
       * https://developers.google.com/apps-script/reference/document/document#setLanguage(String)
       * @param languageCode The language code.
       */
      setLanguage(languageCode: string): Document;

      /**
       * Sets the document title.
       * https://developers.google.com/apps-script/reference/document/document#setName(String)
       * @param name the new document title
       */
      setName(name: string): Document;

      /**
       * Sets the user's selection in the active document, given a Range. A script can
       * only access the selection of the user who is running the script, and only if the script is bound to the document.
       *
       *
       *     // Change the user's selection to a range that includes every table in the document.
       *     var doc = DocumentApp.getActiveDocument();
       *     var rangeBuilder = doc.newRange();
       *     var tables = doc.getBody().getTables();
       *     for (var i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       * https://developers.google.com/apps-script/reference/document/document#setSelection(Range)
       * @param range the new range of elements to select
       */
      setSelection(range: Range): Document;
    }
    /**
     * The document service creates and opens Documents that can be edited.
     *
     *     // Open a document by ID.
     *     var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
     *
     *     // Create and open a document.
     *     doc = DocumentApp.create('Document Name');
     */
    interface DocumentApp {
      Attribute: typeof Attribute;
      ElementType: typeof ElementType;
      FontFamily: typeof FontFamily;
      GlyphType: typeof GlyphType;
      HorizontalAlignment: typeof HorizontalAlignment;
      ParagraphHeading: typeof ParagraphHeading;
      PositionedLayout: typeof PositionedLayout;
      TextAlignment: typeof TextAlignment;
      VerticalAlignment: typeof VerticalAlignment;

      /**
       * Creates and returns a new document.
       *
       *
       *     // Create and open a new document.
       *     var doc = DocumentApp.create('Document Name');
       * https://developers.google.com/apps-script/reference/document/document-app#create(String)
       * @param name the new document's name
       */
      create(name: string): Document;

      /**
       * Returns the document to which the script is container-bound. To interact with document to which
       * the script is not container-bound, use openById(id) or openByUrl(url)
       * instead.
       *
       *
       *     // Get the document to which this script is bound.
       *     var doc = DocumentApp.getActiveDocument();
       * https://developers.google.com/apps-script/reference/document/document-app#getActiveDocument()
       */
      getActiveDocument(): Document;

      /**
       * Returns an instance of the document's user-interface environment that allows the script to add
       * features like menus, dialogs, and sidebars. A script can only interact with the UI for the
       * current instance of an open document, and only if the script is bound to the document. For more information, see the
       * guides to menus and dialogs and sidebars.
       *
       *
       *     // Add a custom menu to the active document, including a separator and a sub-menu.
       *     function onOpen(e) {
       *       DocumentApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
       *               .addItem('One sub-menu item', 'mySecondFunction')
       *               .addItem('Another sub-menu item', 'myThirdFunction'))
       *           .addToUi();
       *     }
       * https://developers.google.com/apps-script/reference/document/document-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Returns the document with the specified ID. If the script is container-bound to the document,
       * use getActiveDocument() instead.
       *
       *
       *     // Open a document by ID.
       *     var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
       * https://developers.google.com/apps-script/reference/document/document-app#openById(String)
       * @param id the ID of the document to open
       */
      openById(id: string): Document;

      /**
       * Opens and returns the document with the specified URL. If the script is container-bound to the
       * document, use getActiveDocument() instead.
       *
       *
       *     // Open a document by URL.
       *     var doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit');
       * https://developers.google.com/apps-script/reference/document/document-app#openByUrl(String)
       * @param url the URL of the document to open
       */
      openByUrl(url: string): Document;
    }
    /**
     * A generic element. Document contents are
     * represented as elements. For example, ListItem, Paragraph, and Table are
     * elements and inherit all of the methods defined by Element, such as getType().
     * Implementing classes
     *
     * NameBrief description
     *
     * BodyAn element representing a document body.
     *
     * ContainerElementA generic element that may contain other elements.
     *
     * EquationAn element representing a mathematical expression.
     *
     * EquationFunctionAn element representing a function in a mathematical Equation.
     *
     * EquationFunctionArgumentSeparatorAn element representing a function separator in a mathematical Equation.
     *
     * EquationSymbolAn element representing a symbol in a mathematical Equation.
     *
     * FooterSectionAn element representing a footer section.
     *
     * FootnoteAn element representing a footnote.
     *
     * FootnoteSectionAn element representing a footnote section.
     *
     * HeaderSectionAn element representing a header section.
     *
     * HorizontalRuleAn element representing an horizontal rule.
     *
     * InlineDrawingAn element representing an embedded drawing.
     *
     * InlineImageAn element representing an embedded image.
     *
     * ListItemAn element representing a list item.
     *
     * PageBreakAn element representing a page break.
     *
     * ParagraphAn element representing a paragraph.
     *
     * TableAn element representing a table.
     *
     * TableCellAn element representing a table cell.
     *
     * TableOfContentsAn element containing a table of contents.
     *
     * TableRowAn element representing a table row.
     *
     * TextAn element representing a rich text region.
     *
     * UnsupportedElementAn element representing a region that is unknown or cannot be affected by a script, such as a
     * page number.
     */
    interface Element {

      /**
       * Returns the current element as a Body.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asBody()
       */
      asBody(): Body;

      /**
       * Returns the current element as a Equation.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asEquation()
       */
      asEquation(): Equation;

      /**
       * Returns the current element as a EquationFunction.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asEquationFunction()
       */
      asEquationFunction(): EquationFunction;

      /**
       * Returns the current element as a EquationFunctionArgumentSeparator.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asEquationFunctionArgumentSeparator()
       */
      asEquationFunctionArgumentSeparator(): EquationFunctionArgumentSeparator;

      /**
       * Returns the current element as a EquationSymbol.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asEquationSymbol()
       */
      asEquationSymbol(): EquationSymbol;

      /**
       * Returns the current element as a FooterSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asFooterSection()
       */
      asFooterSection(): FooterSection;

      /**
       * Returns the current element as a Footnote.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asFootnote()
       */
      asFootnote(): Footnote;

      /**
       * Returns the current element as a FootnoteSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asFootnoteSection()
       */
      asFootnoteSection(): FootnoteSection;

      /**
       * Returns the current element as a HeaderSection.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asHeaderSection()
       */
      asHeaderSection(): HeaderSection;

      /**
       * Returns the current element as a HorizontalRule.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asHorizontalRule()
       */
      asHorizontalRule(): HorizontalRule;

      /**
       * Returns the current element as a InlineDrawing.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asInlineDrawing()
       */
      asInlineDrawing(): InlineDrawing;

      /**
       * Returns the current element as a InlineImage.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asInlineImage()
       */
      asInlineImage(): InlineImage;

      /**
       * Returns the current element as a ListItem.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the current element as a PageBreak.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asPageBreak()
       */
      asPageBreak(): PageBreak;

      /**
       * Returns the current element as a Paragraph.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asParagraph()
       */
      asParagraph(): Paragraph;

      /**
       * Returns the current element as a Table.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asTable()
       */
      asTable(): Table;

      /**
       * Returns the current element as a TableCell.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asTableCell()
       */
      asTableCell(): TableCell;

      /**
       * Returns the current element as a TableOfContents.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asTableOfContents()
       */
      asTableOfContents(): TableOfContents;

      /**
       * Returns the current element as a TableRow.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asTableRow()
       */
      asTableRow(): TableRow;

      /**
       * Returns the current element as a Text.
       *
       *
       * Use this method to aid auto-complete whenever a given element is known to be of a specific
       * type.
       * https://developers.google.com/apps-script/reference/document/element#asText()
       */
      asText(): Text;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/element#copy()
       */
      copy(): Element;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/element#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/element#merge()
       */
      merge(): Element;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/element#removeFromParent()
       */
      removeFromParent(): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/element#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Element;
    }
    /**
     * An enumeration of all the element types.
     *
     * Use the ElementType enumeration to check the type of a given element, for instance:
     *
     *     var firstChild = DocumentApp.getActiveDocument().getBody().getChild(0);
     *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
     *       // It's a paragraph, apply a paragraph heading.
     *       firstChild.asParagraph().setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *     }
     */
    enum ElementType { BODY_SECTION, COMMENT_SECTION, DOCUMENT, EQUATION, EQUATION_FUNCTION, EQUATION_FUNCTION_ARGUMENT_SEPARATOR, EQUATION_SYMBOL, FOOTER_SECTION, FOOTNOTE, FOOTNOTE_SECTION, HEADER_SECTION, HORIZONTAL_RULE, INLINE_DRAWING, INLINE_IMAGE, LIST_ITEM, PAGE_BREAK, PARAGRAPH, TABLE, TABLE_CELL, TABLE_OF_CONTENTS, TABLE_ROW, TEXT, UNSUPPORTED }
    /**
     * An element representing a mathematical expression. An Equation may contain EquationFunction, EquationSymbol, and Text elements. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface Equation {

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/equation#clear()
       */
      clear(): Equation;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/equation#copy()
       */
      copy(): Equation;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/equation#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/equation#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/equation#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/equation#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/equation#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/equation#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/equation#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/equation#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/equation#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/equation#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/equation#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/equation#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/equation#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/equation#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/equation#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/equation#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/equation#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/equation#merge()
       */
      merge(): Equation;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/equation#removeFromParent()
       */
      removeFromParent(): Equation;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/equation#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/equation#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Equation;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/equation#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Equation;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/equation#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Equation;
    }
    /**
     * An element representing a function in a mathematical Equation. An EquationFunction may contain EquationFunction, EquationFunctionArgumentSeparator, EquationSymbol, and Text elements. For more
     * information on document structure, see the guide to extending Google Docs.
     */
    interface EquationFunction {

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/equation-function#clear()
       */
      clear(): EquationFunction;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/equation-function#copy()
       */
      copy(): EquationFunction;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/equation-function#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/equation-function#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/equation-function#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the code corresponding to the equation function.
       * https://developers.google.com/apps-script/reference/document/equation-function#getCode()
       */
      getCode(): string;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/equation-function#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/equation-function#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/equation-function#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/equation-function#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/equation-function#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/equation-function#merge()
       */
      merge(): EquationFunction;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function#removeFromParent()
       */
      removeFromParent(): EquationFunction;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/equation-function#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/equation-function#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): EquationFunction;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/equation-function#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): EquationFunction;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/equation-function#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): EquationFunction;
    }
    /**
     * An element representing a function separator in a mathematical Equation. An EquationFunctionArgumentSeparator cannot contain any other element. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface EquationFunctionArgumentSeparator {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#copy()
       */
      copy(): EquationFunctionArgumentSeparator;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#merge()
       */
      merge(): EquationFunctionArgumentSeparator;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#removeFromParent()
       */
      removeFromParent(): EquationFunctionArgumentSeparator;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): EquationFunctionArgumentSeparator;
    }
    /**
     * An element representing a symbol in a mathematical Equation. An EquationSymbol
     * cannot contain any other element. For more information on document structure, see the guide to extending Google Docs.
     */
    interface EquationSymbol {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#copy()
       */
      copy(): EquationSymbol;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the code corresponding to the equation symbol.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getCode()
       */
      getCode(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/equation-symbol#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/equation-symbol#merge()
       */
      merge(): EquationSymbol;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/equation-symbol#removeFromParent()
       */
      removeFromParent(): EquationSymbol;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/equation-symbol#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): EquationSymbol;
    }
    /**
     *
     * Deprecated. The methods getFontFamily() and setFontFamily(String) now use string
     *     names for fonts instead of this enum. Although this enum is deprecated, it will remain
     *     available for compatibility with older scripts.
     * An enumeration of the supported fonts.
     *
     * Use the FontFamily enumeration to set the font for a range of text, element or
     * document.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert a paragraph at the start of the document.
     *     body.insertParagraph(0, "Hello, Apps Script!");
     *
     *     // Set the document font to Calibri.
     *     body.editAsText().setFontFamily(DocumentApp.FontFamily.CALIBRI);
     *
     *     // Set the first paragraph font to Arial.
     *     body.getParagraphs()[0].setFontFamily(DocumentApp.FontFamily.ARIAL);
     *
     *     // Set "Apps Script" to Comic Sans MS.
     *     var text = 'Apps Script';
     *     var a = body.getText().indexOf(text);
     *     var b = a + text.length - 1;
     *     body.editAsText().setFontFamily(a, b, DocumentApp.FontFamily.COMIC_SANS_MS);
     */
    enum FontFamily { AMARANTH, ARIAL, ARIAL_BLACK, ARIAL_NARROW, ARVO, CALIBRI, CAMBRIA, COMIC_SANS_MS, CONSOLAS, CORSIVA, COURIER_NEW, DANCING_SCRIPT, DROID_SANS, DROID_SERIF, GARAMOND, GEORGIA, GLORIA_HALLELUJAH, GREAT_VIBES, LOBSTER, MERRIWEATHER, PACIFICO, PHILOSOPHER, POIRET_ONE, QUATTROCENTO, ROBOTO, SHADOWS_INTO_LIGHT, SYNCOPATE, TAHOMA, TIMES_NEW_ROMAN, TREBUCHET_MS, UBUNTU, VERDANA }
    /**
     * An element representing a footer section. A Document typically contains at most one FooterSection. The FooterSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FooterSection {

      /**
       * Creates and appends a new HorizontalRule.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendImage(BlobSource)
       * @param image the image data
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       *
       * The InlineImage will be contained in a new Paragraph.
       *
       *
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendImage(InlineImage)
       * @param image the image data
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       *
       *
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendListItem(ListItem)
       * @param listItem the list item to append
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       *
       *
       * Consecutive list items are added as part of the same list.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendListItem(String)
       * @param text the list item's text contents
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       *
       *
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendParagraph(String)
       * @param text the paragraph's text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable(String)
       * @param cells the text contents of the table cells to add to the new table
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       *
       *
       * Use this version of appendTable when appending a copy of an existing Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable(Table)
       * @param table the table to append
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/footer-section#clear()
       */
      clear(): FooterSection;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/footer-section#copy()
       */
      copy(): FooterSection;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/footer-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/footer-section#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/footer-section#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/footer-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/footer-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/footer-section#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/footer-section#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/footer-section#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves all the InlineImages contained in the section.
       * https://developers.google.com/apps-script/reference/document/footer-section#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       * https://developers.google.com/apps-script/reference/document/footer-section#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/footer-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       * https://developers.google.com/apps-script/reference/document/footer-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/footer-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       * https://developers.google.com/apps-script/reference/document/footer-section#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/footer-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/footer-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/footer-section#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified
       * index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image to insert
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertListItem(Integer,ListItem)
       * @param childIndex the index at which to insert
       * @param listItem the list item to insert
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertListItem(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the list item's text contents
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the paragraph's text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer)
       * @param childIndex the index at which to insert
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer,String)
       * @param childIndex the index at which to insert
       * @param cells the text contents of the table cells to add to the new table
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer,Table)
       * @param childIndex the index at which to insert
       * @param table the table to insert
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/footer-section#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): FooterSection;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/footer-section#removeFromParent()
       */
      removeFromParent(): FooterSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/footer-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/footer-section#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): FooterSection;

      /**
       * Sets the contents as plain text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/footer-section#setText(String)
       * @param text the new text contents
       */
      setText(text: string): FooterSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/footer-section#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): FooterSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): FooterSection;
    }
    /**
     * An element representing a footnote. Each Footnote is contained within a ListItem
     * or Paragraph and has a corresponding FootnoteSection element for the footnote's
     * contents. The Footnote itself cannot contain any other element. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface Footnote {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/footnote#copy()
       */
      copy(): Footnote;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the contents of the footnote element.
       * https://developers.google.com/apps-script/reference/document/footnote#getFootnoteContents()
       */
      getFootnoteContents(): FootnoteSection;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/footnote#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/footnote#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/footnote#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/footnote#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote#removeFromParent()
       */
      removeFromParent(): Footnote;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/footnote#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Footnote;
    }
    /**
     * An element representing a footnote section. A FootnoteSection contains the text that
     * corresponds to a Footnote. The FootnoteSection may contain ListItem or
     * Paragraph elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FootnoteSection {

      /**
       * Appends the given Paragraph.
       *
       *
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       * https://developers.google.com/apps-script/reference/document/footnote-section#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       * https://developers.google.com/apps-script/reference/document/footnote-section#appendParagraph(String)
       * @param text the paragraph's text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#clear()
       */
      clear(): FootnoteSection;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/footnote-section#copy()
       */
      copy(): FootnoteSection;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/footnote-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/footnote-section#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote-section#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote-section#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote-section#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/footnote-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       * https://developers.google.com/apps-script/reference/document/footnote-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/footnote-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote-section#getType()
       */
      getType(): ElementType;

      /**
       * Inserts the given Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/footnote-section#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/footnote-section#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the paragraph's text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/footnote-section#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): FootnoteSection;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/footnote-section#removeFromParent()
       */
      removeFromParent(): FootnoteSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/footnote-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/footnote-section#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): FootnoteSection;

      /**
       * Sets the contents as plain text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/footnote-section#setText(String)
       * @param text the new text contents
       */
      setText(text: string): FootnoteSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/footnote-section#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): FootnoteSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): FootnoteSection;
    }
    /**
     * An enumeration of the supported glyph types.
     *
     * Use the GlyphType enumeration to set the bullet type for list items.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert at list item, with the default nesting level of zero.
     *      body.appendListItem("Item 1");
     *
     *      // Append a second list item, with a nesting level of one, indented one inch.
     *      // The two items will have different bullet glyphs.
     *      body.appendListItem("Item 2").setNestingLevel(1).setIndentStart(72)
     *          .setGlyphType(DocumentApp.GlyphType.SQUARE_BULLET);
     */
    enum GlyphType { BULLET, HOLLOW_BULLET, SQUARE_BULLET, NUMBER, LATIN_UPPER, LATIN_LOWER, ROMAN_UPPER, ROMAN_LOWER }
    /**
     * An element representing a header section. A Document typically contains at most one HeaderSection. The HeaderSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface HeaderSection {

      /**
       * Creates and appends a new HorizontalRule.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/header-section#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/header-section#appendImage(BlobSource)
       * @param image the image data
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       *
       * The InlineImage will be contained in a new Paragraph.
       *
       *
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       * https://developers.google.com/apps-script/reference/document/header-section#appendImage(InlineImage)
       * @param image the image data
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       *
       *
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       * https://developers.google.com/apps-script/reference/document/header-section#appendListItem(ListItem)
       * @param listItem the list item to append
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       *
       *
       * Consecutive list items are added as part of the same list.
       * https://developers.google.com/apps-script/reference/document/header-section#appendListItem(String)
       * @param text the list item's text contents
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       *
       *
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       * https://developers.google.com/apps-script/reference/document/header-section#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       * https://developers.google.com/apps-script/reference/document/header-section#appendParagraph(String)
       * @param text the paragraph's text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       *
       *
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable(String)
       * @param cells the text contents of the table cells to add to the new table
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       *
       *
       * Use this version of appendTable when appending a copy of an existing Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents
       * cannot end with a table.
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable(Table)
       * @param table the table to append
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/header-section#clear()
       */
      clear(): HeaderSection;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/header-section#copy()
       */
      copy(): HeaderSection;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/header-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/header-section#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/header-section#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/header-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/header-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/header-section#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/header-section#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/header-section#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves all the InlineImages contained in the section.
       * https://developers.google.com/apps-script/reference/document/header-section#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       * https://developers.google.com/apps-script/reference/document/header-section#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/header-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       * https://developers.google.com/apps-script/reference/document/header-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/header-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       * https://developers.google.com/apps-script/reference/document/header-section#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/header-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/header-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/header-section#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/header-section#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified
       * index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/header-section#insertImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image to insert
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertListItem(Integer,ListItem)
       * @param childIndex the index at which to insert
       * @param listItem the list item to insert
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/header-section#insertListItem(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the list item's text contents
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified
       * text contents.
       * https://developers.google.com/apps-script/reference/document/header-section#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert
       * @param text the paragraph's text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer)
       * @param childIndex the index at which to insert
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer,String)
       * @param childIndex the index at which to insert
       * @param cells the text contents of the table cells to add to the new table
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer,Table)
       * @param childIndex the index at which to insert
       * @param table the table to insert
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/header-section#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): HeaderSection;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/header-section#removeFromParent()
       */
      removeFromParent(): HeaderSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/header-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/header-section#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): HeaderSection;

      /**
       * Sets the contents as plain text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/header-section#setText(String)
       * @param text the new text contents
       */
      setText(text: string): HeaderSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/header-section#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): HeaderSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): HeaderSection;
    }
    /**
     * An enumeration of the supported horizontal alignment types.
     *
     * Use the HorizontalAlignment enumeration to manipulate the alignment of Paragraph contents.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert a paragraph and a table at the start of document.
     *     var par1 = body.insertParagraph(0, "Center");
     *     var table = body.insertTable(1, [['Left', 'Right']]);
     *     var par2 = table.getCell(0, 0).getChild(0).asParagraph();
     *     var par3 = table.getCell(0, 0).getChild(0).asParagraph();
     *
     *     // Center align the first paragraph.
     *     par1.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
     *
     *     // Left align the first cell.
     *     par2.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
     *
     *     // Right align the second cell.
     *     par3.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
     */
    enum HorizontalAlignment { LEFT, CENTER, RIGHT, JUSTIFY }
    /**
     * An element representing an horizontal rule. A HorizontalRule can be contained within a
     * ListItem or Paragraph, but cannot itself contain any other element. For more
     * information on document structure, see the guide to extending Google Docs.
     */
    interface HorizontalRule {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#copy()
       */
      copy(): HorizontalRule;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#removeFromParent()
       */
      removeFromParent(): HorizontalRule;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): HorizontalRule;
    }
    /**
     * An element representing an embedded drawing. An InlineDrawing can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineDrawing cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineDrawing {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#copy()
       */
      copy(): InlineDrawing;

      /**
       * Returns the drawing's alternate description.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAltDescription()
       */
      getAltDescription(): string;

      /**
       * Returns the drawing's alternate title.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAltTitle()
       */
      getAltTitle(): string;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/inline-drawing#merge()
       */
      merge(): InlineDrawing;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-drawing#removeFromParent()
       */
      removeFromParent(): InlineDrawing;

      /**
       * Sets the drawing's alternate description. If the given title is null, sets the
       * description to the empty string.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAltDescription(String)
       * @param description the alternate title
       */
      setAltDescription(description: string): InlineDrawing;

      /**
       * Sets the drawing's alternate title. If the given title is null, sets the title to the
       * empty string.
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAltTitle(String)
       * @param title the alternate title
       */
      setAltTitle(title: string): InlineDrawing;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): InlineDrawing;
    }
    /**
     * An element representing an embedded image. An InlineImage can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineImage cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineImage {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/inline-image#copy()
       */
      copy(): InlineImage;

      /**
       * Returns the image's alternate description.
       * https://developers.google.com/apps-script/reference/document/inline-image#getAltDescription()
       */
      getAltDescription(): string;

      /**
       * Returns the image's alternate title.
       * https://developers.google.com/apps-script/reference/document/inline-image#getAltTitle()
       */
      getAltTitle(): string;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/document/inline-image#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-image#getAttributes()
       */
      getAttributes(): object;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/document/inline-image#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the image's height, in pixels.
       * https://developers.google.com/apps-script/reference/document/inline-image#getHeight()
       */
      getHeight(): Integer;

      /**
       * Retrieves the link URL.
       * https://developers.google.com/apps-script/reference/document/inline-image#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/inline-image#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/inline-image#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/inline-image#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-image#getType()
       */
      getType(): ElementType;

      /**
       * Retrieves the image's width, in pixels.
       * https://developers.google.com/apps-script/reference/document/inline-image#getWidth()
       */
      getWidth(): Integer;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/inline-image#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/inline-image#merge()
       */
      merge(): InlineImage;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/inline-image#removeFromParent()
       */
      removeFromParent(): InlineImage;

      /**
       * Sets the image's alternate description. If the given title is null, sets the
       * description to the empty string.
       * https://developers.google.com/apps-script/reference/document/inline-image#setAltDescription(String)
       * @param description the alternate title
       */
      setAltDescription(description: string): InlineImage;

      /**
       * Sets the image's alternate title. If the given title is null, sets the title to the
       * empty string.
       * https://developers.google.com/apps-script/reference/document/inline-image#setAltTitle(String)
       * @param title the alternate title
       */
      setAltTitle(title: string): InlineImage;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/inline-image#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): InlineImage;

      /**
       * Sets the image's height, in pixels.
       * https://developers.google.com/apps-script/reference/document/inline-image#setHeight(Integer)
       * @param height the image's height, in pixels
       */
      setHeight(height: Integer): InlineImage;

      /**
       * Sets the link URL. If the given URL is null or an empty string, this method will create
       * a link with an empty URL that may display as "Invalid link" in Google Docs.
       * https://developers.google.com/apps-script/reference/document/inline-image#setLinkUrl(String)
       * @param url the link URL
       */
      setLinkUrl(url: string): InlineImage;

      /**
       * Sets the image's width, in pixels.
       * https://developers.google.com/apps-script/reference/document/inline-image#setWidth(Integer)
       * @param width the image's width, in pixels
       */
      setWidth(width: Integer): InlineImage;
    }
    /**
     * An element representing a list item. A ListItem is a Paragraph that is associated
     * with a list ID. A ListItem may contain Equation, Footnote, HorizontalRule, InlineDrawing, InlineImage, PageBreak, and Text
     * elements. For more information on document structure, see the guide to extending Google Docs.
     *
     * ListItems may not contain new-line characters. New-line characters ("\n") are
     * converted to line-break characters ("\r").
     *
     * ListItems with the same list ID belong to the same list and are numbered accordingly.
     * The ListItems for a given list are not required to be adjacent in the document or even
     * have the same parent element. Two items belonging to the same list may exist anywhere in the
     * document while maintaining consecutive numbering, as the following example illustrates:
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a new list item to the body.
     *     var item1 = body.appendListItem('Item 1');
     *
     *     // Log the new list item's list ID.
     *     Logger.log(item1.getListId());
     *
     *     // Append a table after the list item.
     *     body.appendTable([
     *       ['Cell 1', 'Cell 2']
     *     ]);
     *
     *     // Append a second list item with the same list ID. The two items are treated as the same list,
     *     // despite not being consecutive.
     *     var item2 = body.appendListItem('Item 2');
     *     item2.setListId(item1);
     */
    interface ListItem {

      /**
       * Creates and inserts a new PositionedImage from the specified image blob.
       * https://developers.google.com/apps-script/reference/document/list-item#addPositionedImage(BlobSource)
       * @param image the image data
       */
      addPositionedImage(image: Base.BlobSource): PositionedImage;

      /**
       * Creates and appends a new HorizontalRule.
       * https://developers.google.com/apps-script/reference/document/list-item#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * https://developers.google.com/apps-script/reference/document/list-item#appendInlineImage(BlobSource)
       * @param image the image data
       */
      appendInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * https://developers.google.com/apps-script/reference/document/list-item#appendInlineImage(InlineImage)
       * @param image the image data
       */
      appendInlineImage(image: InlineImage): InlineImage;

      /**
       * Creates and appends a new PageBreak.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/list-item#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/list-item#appendPageBreak(PageBreak)
       * @param pageBreak the page break to append
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Creates and appends a new Text element with the specified contents.
       * https://developers.google.com/apps-script/reference/document/list-item#appendText(String)
       * @param text the text contents
       */
      appendText(text: string): Text;

      /**
       * Appends the given Text element.
       * https://developers.google.com/apps-script/reference/document/list-item#appendText(Text)
       * @param text the text element to append
       */
      appendText(text: Text): Text;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/list-item#clear()
       */
      clear(): ListItem;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/list-item#copy()
       */
      copy(): ListItem;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/list-item#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/list-item#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/list-item#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/list-item#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/list-item#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the HorizontalAlignment.
       * https://developers.google.com/apps-script/reference/document/list-item#getAlignment()
       */
      getAlignment(): HorizontalAlignment;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/list-item#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/list-item#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/list-item#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the list item's GlyphType.
       * https://developers.google.com/apps-script/reference/document/list-item#getGlyphType()
       */
      getGlyphType(): GlyphType;

      /**
       * Retrieves the ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/list-item#getHeading()
       */
      getHeading(): ParagraphHeading;

      /**
       * Retrieves the end indentation, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentEnd()
       */
      getIndentEnd(): number;

      /**
       * Retrieves the first line indentation, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentFirstLine()
       */
      getIndentFirstLine(): number;

      /**
       * Retrieves the start indentation.
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentStart()
       */
      getIndentStart(): number;

      /**
       * Retrieves the line spacing, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#getLineSpacing()
       */
      getLineSpacing(): number;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/list-item#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the list ID.
       * https://developers.google.com/apps-script/reference/document/list-item#getListId()
       */
      getListId(): string;

      /**
       * Retrieves the list item's nesting level.
       *
       *
       * By default, list items have a nesting level of zero. The nesting level determines the glyph
       * that is used by the list item.
       * https://developers.google.com/apps-script/reference/document/list-item#getNestingLevel()
       */
      getNestingLevel(): Integer;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/list-item#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/list-item#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/list-item#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Gets a PositionedImage by the image's ID.
       * https://developers.google.com/apps-script/reference/document/list-item#getPositionedImage(String)
       * @param id the image id
       */
      getPositionedImage(id: string): PositionedImage;

      /**
       * Gets all PositionedImage objects anchored to the paragraph.
       * https://developers.google.com/apps-script/reference/document/list-item#getPositionedImages()
       */
      getPositionedImages(): PositionedImage[];

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/list-item#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the spacing after the element, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#getSpacingAfter()
       */
      getSpacingAfter(): number;

      /**
       * Retrieves the spacing before the element, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#getSpacingBefore()
       */
      getSpacingBefore(): number;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/list-item#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/list-item#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/list-item#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a HorizontalRule at the specified index.
       * https://developers.google.com/apps-script/reference/document/list-item#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts a new InlineImage from the specified image blob, at the specified
       * index.
       * https://developers.google.com/apps-script/reference/document/list-item#insertInlineImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * https://developers.google.com/apps-script/reference/document/list-item#insertInlineImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/list-item#insertPageBreak(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/list-item#insertPageBreak(Integer,PageBreak)
       * @param childIndex the index at which to insert the element
       * @param pageBreak the p[age break to insert
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Creates and inserts a new text element at the specified index.
       * https://developers.google.com/apps-script/reference/document/list-item#insertText(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertText(childIndex: Integer, text: string): Text;

      /**
       * Inserts the given Text element at the specified index, with the specified text
       * contents.
       * https://developers.google.com/apps-script/reference/document/list-item#insertText(Integer,Text)
       * @param childIndex the index at which to insert the element
       * @param text the text element to insert
       */
      insertText(childIndex: Integer, text: Text): Text;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/list-item#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the left-to-right setting.
       * https://developers.google.com/apps-script/reference/document/list-item#isLeftToRight()
       */
      isLeftToRight(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/list-item#merge()
       */
      merge(): ListItem;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/list-item#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): ListItem;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/list-item#removeFromParent()
       */
      removeFromParent(): ListItem;

      /**
       * Removes a PositionedImage by the image's ID.
       * https://developers.google.com/apps-script/reference/document/list-item#removePositionedImage(String)
       * @param id
       */
      removePositionedImage(id: string): boolean;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/list-item#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the HorizontalAlignment.
       * https://developers.google.com/apps-script/reference/document/list-item#setAlignment(HorizontalAlignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: HorizontalAlignment): ListItem;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/list-item#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): ListItem;

      /**
       * Sets the list item's GlyphType.
       * https://developers.google.com/apps-script/reference/document/list-item#setGlyphType(GlyphType)
       * @param glyphType the glyph type
       */
      setGlyphType(glyphType: GlyphType): ListItem;

      /**
       * Sets the ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/list-item#setHeading(ParagraphHeading)
       * @param heading the heading
       */
      setHeading(heading: ParagraphHeading): ListItem;

      /**
       * Sets the end indentation, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentEnd(Number)
       * @param indentEnd the end indentation, in points
       */
      setIndentEnd(indentEnd: number): ListItem;

      /**
       * Sets the first line indentation, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentFirstLine(Number)
       * @param indentFirstLine the first line indentation, in points
       */
      setIndentFirstLine(indentFirstLine: number): ListItem;

      /**
       * Sets the start indentation, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentStart(Number)
       * @param indentStart the start indentation, in points
       */
      setIndentStart(indentStart: number): ListItem;

      /**
       * Sets the left-to-right setting.
       * https://developers.google.com/apps-script/reference/document/list-item#setLeftToRight(Boolean)
       * @param leftToRight the left-to-right setting
       */
      setLeftToRight(leftToRight: boolean): ListItem;

      /**
       * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
       * https://developers.google.com/apps-script/reference/document/list-item#setLineSpacing(Number)
       * @param multiplier the number of lines
       */
      setLineSpacing(multiplier: number): ListItem;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/list-item#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): ListItem;

      /**
       * Sets the list ID.
       *
       *
       * The list ID is set to the same value for the specified ListItem. The two ListItems will be treated as members of the same list.
       * https://developers.google.com/apps-script/reference/document/list-item#setListId(ListItem)
       * @param listItem the list item whose list ID to use
       */
      setListId(listItem: ListItem): ListItem;

      /**
       * Sets the list item's nesting level.
       *
       *
       * By default, list items have a nesting level of zero. The nesting level determines the glyph
       * that is used by the list item.
       * https://developers.google.com/apps-script/reference/document/list-item#setNestingLevel(Integer)
       * @param nestingLevel the nesting level
       */
      setNestingLevel(nestingLevel: Integer): ListItem;

      /**
       * Sets the spacing after the element, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#setSpacingAfter(Number)
       * @param spacingAfter the spacing after the element, in points
       */
      setSpacingAfter(spacingAfter: number): ListItem;

      /**
       * Sets the spacing before the element, in points.
       * https://developers.google.com/apps-script/reference/document/list-item#setSpacingBefore(Number)
       * @param spacingBefore the spacing before the element, in points
       */
      setSpacingBefore(spacingBefore: number): ListItem;

      /**
       * Sets the contents of the list item as text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/list-item#setText(String)
       * @param text the new text contents
       */
      setText(text: string): void;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/list-item#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): ListItem;
    }
    /**
     * A Range that has a name and ID to allow later retrieval. Names are not
     * necessarily unique; several different ranges in the same document may share the same name, much
     * like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. Once a
     * NamedRange has been added to a document, it cannot be modified, only removed.
     *
     * A NamedRange can be accessed by any script that accesses the document. To avoid
     * unintended conflicts between scripts, consider prefixing range names with a unique string.
     *
     *     // Create a named range that includes every table in the document.
     *     var doc = DocumentApp.getActiveDocument();
     *     var rangeBuilder = doc.newRange();
     *     var tables = doc.getBody().getTables();
     *     for (var i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     doc.addNamedRange('myUniquePrefix-tables', rangeBuilder.build());
     */
    interface NamedRange {

      /**
       * Gets the ID of this NamedRange. The ID is unique within the document.
       * https://developers.google.com/apps-script/reference/document/named-range#getId()
       */
      getId(): string;

      /**
       * Gets the name of this NamedRange. The name is not necessarily unique.
       * https://developers.google.com/apps-script/reference/document/named-range#getName()
       */
      getName(): string;

      /**
       * Gets the range of elements associated with this NamedRange.
       * https://developers.google.com/apps-script/reference/document/named-range#getRange()
       */
      getRange(): Range;

      /**
       * Removes this NamedRange from the document. This method does not delete the contents of
       * the range; it merely the removes the reference. Calling this method on a NamedRange
       * that has already been removed has no effect.
       * https://developers.google.com/apps-script/reference/document/named-range#remove()
       */
      remove(): void;
    }
    /**
     * An element representing a page break. A PageBreak can be contained within a ListItem or Paragraph, unless the ListItem or Paragraph is within a
     * Table, HeaderSection, FooterSection, or FootnoteSection. A PageBreak cannot itself contain any other element. For more information on document structure,
     * see the guide to extending Google
     * Docs.
     */
    interface PageBreak {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/page-break#copy()
       */
      copy(): PageBreak;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/page-break#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/page-break#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/page-break#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/page-break#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/page-break#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/page-break#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/page-break#removeFromParent()
       */
      removeFromParent(): PageBreak;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/page-break#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): PageBreak;
    }
    /**
     * An element representing a paragraph. A Paragraph may contain Equation, Footnote, HorizontalRule, InlineDrawing, InlineImage, PageBreak,
     * and Text elements. For more information on document structure, see the guide to extending Google Docs.
     *
     * Paragraphs may not contain new-line characters. New-line characters ("\n") are
     * converted to line-break characters ("\r").
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a document header paragraph.
     *     var header = body.appendParagraph("A Document");
     *     header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a section header paragraph.
     *     var section = body.appendParagraph("Section 1");
     *     section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a regular paragraph.
     *     body.appendParagraph("This is a typical paragraph.");
     */
    interface Paragraph {

      /**
       * Creates and inserts a new PositionedImage from the specified image blob.
       * https://developers.google.com/apps-script/reference/document/paragraph#addPositionedImage(BlobSource)
       * @param image the image data
       */
      addPositionedImage(image: Base.BlobSource): PositionedImage;

      /**
       * Creates and appends a new HorizontalRule.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendInlineImage(BlobSource)
       * @param image the image data
       */
      appendInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendInlineImage(InlineImage)
       * @param image the image data
       */
      appendInlineImage(image: InlineImage): InlineImage;

      /**
       * Creates and appends a new PageBreak.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendPageBreak(PageBreak)
       * @param pageBreak the page break to append
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Creates and appends a new Text element with the specified contents.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendText(String)
       * @param text the text contents
       */
      appendText(text: string): Text;

      /**
       * Appends the given Text element.
       * https://developers.google.com/apps-script/reference/document/paragraph#appendText(Text)
       * @param text the text element to append
       */
      appendText(text: Text): Text;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/paragraph#clear()
       */
      clear(): Paragraph;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/paragraph#copy()
       */
      copy(): Paragraph;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/paragraph#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/paragraph#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/paragraph#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/paragraph#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/paragraph#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the HorizontalAlignment.
       * https://developers.google.com/apps-script/reference/document/paragraph#getAlignment()
       */
      getAlignment(): HorizontalAlignment;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/paragraph#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/paragraph#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/paragraph#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/paragraph#getHeading()
       */
      getHeading(): ParagraphHeading;

      /**
       * Retrieves the end indentation, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentEnd()
       */
      getIndentEnd(): number;

      /**
       * Retrieves the first line indentation, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentFirstLine()
       */
      getIndentFirstLine(): number;

      /**
       * Retrieves the start indentation.
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentStart()
       */
      getIndentStart(): number;

      /**
       * Retrieves the line spacing, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#getLineSpacing()
       */
      getLineSpacing(): number;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/paragraph#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/paragraph#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/paragraph#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/paragraph#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Gets a PositionedImage by the image's ID.
       * https://developers.google.com/apps-script/reference/document/paragraph#getPositionedImage(String)
       * @param id the image id
       */
      getPositionedImage(id: string): PositionedImage;

      /**
       * Gets all PositionedImage objects anchored to the paragraph.
       * https://developers.google.com/apps-script/reference/document/paragraph#getPositionedImages()
       */
      getPositionedImages(): PositionedImage[];

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/paragraph#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the spacing after the element, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#getSpacingAfter()
       */
      getSpacingAfter(): number;

      /**
       * Retrieves the spacing before the element, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#getSpacingBefore()
       */
      getSpacingBefore(): number;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/paragraph#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/paragraph#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/paragraph#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a HorizontalRule at the specified index.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts a new InlineImage from the specified image blob, at the specified
       * index.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertInlineImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertInlineImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertPageBreak(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       *
       *
       * Note: PageBreaks may not be contained within TableCells.
       * If the current element is contained in a table cell, an exception will be thrown.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertPageBreak(Integer,PageBreak)
       * @param childIndex the index at which to insert the element
       * @param pageBreak the p[age break to insert
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Creates and inserts a new text element at the specified index.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertText(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertText(childIndex: Integer, text: string): Text;

      /**
       * Inserts the given Text element at the specified index, with the specified text
       * contents.
       * https://developers.google.com/apps-script/reference/document/paragraph#insertText(Integer,Text)
       * @param childIndex the index at which to insert the element
       * @param text the text element to insert
       */
      insertText(childIndex: Integer, text: Text): Text;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/paragraph#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the left-to-right setting.
       * https://developers.google.com/apps-script/reference/document/paragraph#isLeftToRight()
       */
      isLeftToRight(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/paragraph#merge()
       */
      merge(): Paragraph;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/paragraph#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): Paragraph;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/paragraph#removeFromParent()
       */
      removeFromParent(): Paragraph;

      /**
       * Removes a PositionedImage by the image's ID.
       * https://developers.google.com/apps-script/reference/document/paragraph#removePositionedImage(String)
       * @param id the image id
       */
      removePositionedImage(id: string): boolean;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/paragraph#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the HorizontalAlignment.
       * https://developers.google.com/apps-script/reference/document/paragraph#setAlignment(HorizontalAlignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: HorizontalAlignment): Paragraph;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/paragraph#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Paragraph;

      /**
       * Sets the ParagraphHeading.
       * https://developers.google.com/apps-script/reference/document/paragraph#setHeading(ParagraphHeading)
       * @param heading the heading
       */
      setHeading(heading: ParagraphHeading): Paragraph;

      /**
       * Sets the end indentation, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentEnd(Number)
       * @param indentEnd the end indentation, in points
       */
      setIndentEnd(indentEnd: number): Paragraph;

      /**
       * Sets the first line indentation, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentFirstLine(Number)
       * @param indentFirstLine the first line indentation, in points
       */
      setIndentFirstLine(indentFirstLine: number): Paragraph;

      /**
       * Sets the start indentation, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentStart(Number)
       * @param indentStart the start indentation, in points
       */
      setIndentStart(indentStart: number): Paragraph;

      /**
       * Sets the left-to-right setting.
       * https://developers.google.com/apps-script/reference/document/paragraph#setLeftToRight(Boolean)
       * @param leftToRight the left-to-right setting
       */
      setLeftToRight(leftToRight: boolean): Paragraph;

      /**
       * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
       * https://developers.google.com/apps-script/reference/document/paragraph#setLineSpacing(Number)
       * @param multiplier the number of lines
       */
      setLineSpacing(multiplier: number): Paragraph;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/paragraph#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Paragraph;

      /**
       * Sets the spacing after the element, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#setSpacingAfter(Number)
       * @param spacingAfter the spacing after the element, in points
       */
      setSpacingAfter(spacingAfter: number): Paragraph;

      /**
       * Sets the spacing before the element, in points.
       * https://developers.google.com/apps-script/reference/document/paragraph#setSpacingBefore(Number)
       * @param spacingBefore the spacing before the element, in points
       */
      setSpacingBefore(spacingBefore: number): Paragraph;

      /**
       * Sets the contents of the paragraph as text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/paragraph#setText(String)
       * @param text the new text contents
       */
      setText(text: string): void;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/paragraph#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Paragraph;
    }
    /**
     * An enumeration of the standard paragraph headings.
     *
     * Use the ParagraphHeading enumeration to configure the heading style for ParagraphElement.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a paragraph, with heading 1.
     *     var par1 = body.appendParagraph("Title");
     *     par1.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a paragraph, with heading 2.
     *     var par2 = body.appendParagraph("SubTitle");
     *     par2.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a paragraph, with normal heading.
     *     var par3 = body.appendParagraph("Text");
     *     par3.setHeading(DocumentApp.ParagraphHeading.NORMAL);
     */
    enum ParagraphHeading { NORMAL, HEADING1, HEADING2, HEADING3, HEADING4, HEADING5, HEADING6, TITLE, SUBTITLE }
    /**
     * A reference to a location in the document, relative to a specific element. The user's cursor is
     * represented as a Position, among other uses. Scripts can only access the cursor of the
     * user who is running the script, and only if the script is bound to the document.
     *
     *     // Insert some text at the cursor position and make it bold.
     *     var cursor = DocumentApp.getActiveDocument().getCursor();
     *     if (cursor) {
     *       // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
     *       // containing element doesn't allow insertions, so show the user an error message.
     *       var element = cursor.insertText('ಠ‿ಠ');
     *       if (element) {
     *         element.setBold(true);
     *       } else {
     *         DocumentApp.getUi().alert('Cannot insert text here.');
     *       }
     *     } else {
     *       DocumentApp.getUi().alert('Cannot find a cursor.');
     *     }
     */
    interface Position {

      /**
       * Gets the element that contains this Position. This will be either a Text
       * element or a container element like Paragraph. In either case, the relative
       * position within the element can be determined with getOffset().
       * https://developers.google.com/apps-script/reference/document/position#getElement()
       */
      getElement(): Element;

      /**
       * Gets this Position's relative location within the element that contains it. If the
       * element is a Text element, the offset is the number of characters before the Position (that is, the index of the character after this Position); for any other
       * element, the offset is the number of child elements before this Position within the
       * same container element (that is, the index of the child element after the Position).
       * https://developers.google.com/apps-script/reference/document/position#getOffset()
       */
      getOffset(): Integer;

      /**
       * Creates an artificial Text element that represents the text and formatting of the
       * Paragraph or ListItem that contains the Position, either directly or through a chain of child elements. To determine the Position's offset in the returned Text element, use getSurroundingTextOffset().
       * https://developers.google.com/apps-script/reference/document/position#getSurroundingText()
       */
      getSurroundingText(): Text;

      /**
       * Gets the offset of this Position within the Text element returned by getSurroundingText(). The offset is the number of characters before the Position
       * (that is, the index of the character after this Position).
       * https://developers.google.com/apps-script/reference/document/position#getSurroundingTextOffset()
       */
      getSurroundingTextOffset(): Integer;

      /**
       * Creates and inserts a new Bookmark at this Position.
       * https://developers.google.com/apps-script/reference/document/position#insertBookmark()
       */
      insertBookmark(): Bookmark;

      /**
       * Creates and inserts a new InlineImage at this Position from the specified image
       * blob.
       * https://developers.google.com/apps-script/reference/document/position#insertInlineImage(BlobSource)
       * @param image the image data to insert at this Position
       */
      insertInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Inserts the specified text at this Position. This method creates a new Text
       * element, even if the string is inserted within an existing Text element, so that it is
       * easy to style the new element.
       * https://developers.google.com/apps-script/reference/document/position#insertText(String)
       * @param text the string to insert at this Position
       */
      insertText(text: string): Text;
    }
    /**
     * Fixed position image anchored to a Paragraph. Unlike an InlineImage, a PositionedImage is
     * not an Element. It does not have a
     * parent or sibling Element. Instead,
     * it is anchored to a Paragraph or ListItem, and is placed via offsets from
     * that anchor. A PositionedImage has an ID that can be used to reference it.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a new paragraph.
     *     var paragraph = body.appendParagraph("New paragraph to anchor the image to.");
     *     *
     *     // Get an image in Drive from its ID.
     *     var image = DriveApp.getFileById('ENTER_IMAGE_FILE_ID_HERE').getBlob();
     *
     *     // Add the PositionedImage with offsets (in points).
     *     var posImage = paragraph.addPositionedImage(image)
     *         .setTopOffset(60)
     *         .setLeftOffset(40);
     */
    interface PositionedImage {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/document/positioned-image#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the image's height, in pixels.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getHeight()
       */
      getHeight(): Integer;

      /**
       * Gets the image's ID.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getId()
       */
      getId(): string;

      /**
       * Gets an enum value that represents how the image is laid out.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getLayout()
       */
      getLayout(): PositionedLayout;

      /**
       * Gets the image's offset, in points, from the paragraph's left.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getLeftOffset()
       */
      getLeftOffset(): number;

      /**
       * Gets the Paragraph the image is anchored to.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getParagraph()
       */
      getParagraph(): Paragraph;

      /**
       * Gets the image's offset, in points, from the paragraph's top.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getTopOffset()
       */
      getTopOffset(): number;

      /**
       * Retrieves the image's width, in pixels.
       * https://developers.google.com/apps-script/reference/document/positioned-image#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the image's height, in pixels.
       * https://developers.google.com/apps-script/reference/document/positioned-image#setHeight(Integer)
       * @param height the image's height, in pixels
       */
      setHeight(height: Integer): PositionedImage;

      /**
       * Sets the definition of how the image is laid out.
       * https://developers.google.com/apps-script/reference/document/positioned-image#setLayout(PositionedLayout)
       * @param layout an enum representing the layout mode
       */
      setLayout(layout: PositionedLayout): PositionedImage;

      /**
       * Sets the image's offset, in points, from the paragraph's left.
       * https://developers.google.com/apps-script/reference/document/positioned-image#setLeftOffset(Number)
       * @param offset offset from the paragraph's left
       */
      setLeftOffset(offset: number): PositionedImage;

      /**
       * Sets the image's offset, in points, from the paragraph's top.
       * https://developers.google.com/apps-script/reference/document/positioned-image#setTopOffset(Number)
       * @param offset offset from the paragraph's top
       */
      setTopOffset(offset: number): PositionedImage;

      /**
       * Sets the image's width, in pixels.
       * https://developers.google.com/apps-script/reference/document/positioned-image#setWidth(Integer)
       * @param width the image's width, in pixels
       */
      setWidth(width: Integer): PositionedImage;
    }
    /**
     * An enumeration that specifies how to lay out a PositionedImage in relation to surrounding
     * text.
     */
    enum PositionedLayout { ABOVE_TEXT, BREAK_BOTH, BREAK_LEFT, BREAK_RIGHT, WRAP_TEXT }
    /**
     * A range of elements in a document. The user's selection is represented as a Range, among
     * other uses. Scripts can only access the selection of the user who is running the script, and only
     * if the script is bound to the document.
     *
     *     // Bold all selected text.
     *     var selection = DocumentApp.getActiveDocument().getSelection();
     *     if (selection) {
     *       var elements = selection.getRangeElements();
     *       for (var i = 0; i < elements.length; i++) {
     *         var element = elements[i];
     *
     *         // Only modify elements that can be edited as text; skip images and other non-text elements.
     *         if (element.getElement().editAsText) {
     *           var text = element.getElement().editAsText();
     *
     *           // Bold the selected part of the element, or the full element if it's completely selected.
     *           if (element.isPartial()) {
     *             text.setBold(element.getStartOffset(), element.getEndOffsetInclusive(), true);
     *           } else {
     *             text.setBold(true);
     *           }
     *         }
     *       }
     *     }
     */
    interface Range {

      /**
       * Gets all elements in this Range, including any partial Text elements (for example, in the case
       * of a selection that includes only part of a Text element). To determine whether a
       * Text element is only partially included in the range, see RangeElement.isPartial().
       * https://developers.google.com/apps-script/reference/document/range#getRangeElements()
       */
      getRangeElements(): RangeElement[];
      /** @deprecated DO NOT USE */ getSelectedElements(): RangeElement[];
    }
    /**
     * A builder used to construct Range objects from document elements.
     *
     *     // Change the user's selection to a range that includes every table in the document.
     *     var doc = DocumentApp.getActiveDocument();
     *     var rangeBuilder = doc.newRange();
     *     var tables = doc.getBody().getTables();
     *     for (var i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     doc.setSelection(rangeBuilder.build());
     */
    interface RangeBuilder {

      /**
       * Adds an entire Element to this RangeBuilder.
       * https://developers.google.com/apps-script/reference/document/range-builder#addElement(Element)
       * @param element the element to be added
       */
      addElement(element: Element): RangeBuilder;

      /**
       * Adds a partial Text element to this RangeBuilder.
       * https://developers.google.com/apps-script/reference/document/range-builder#addElement(Text,Integer,Integer)
       * @param textElement the text element to be partially added
       * @param startOffset the number of characters before the first character to be included (that is, the index of the first character in the range)
       * @param endOffsetInclusive the number of characters before the last character to be included (that is, the index of the last character in the range)
       */
      addElement(textElement: Text, startOffset: Integer, endOffsetInclusive: Integer): RangeBuilder;

      /**
       * Adds two entire elements, and all elements between them, to this RangeBuilder.
       * https://developers.google.com/apps-script/reference/document/range-builder#addElementsBetween(Element,Element)
       * @param startElement the first element to be added
       * @param endElementInclusive the last element to be added
       */
      addElementsBetween(startElement: Element, endElementInclusive: Element): RangeBuilder;

      /**
       * Adds two partial Text elements, and all elements between them, to the RangeBuilder.
       * https://developers.google.com/apps-script/reference/document/range-builder#addElementsBetween(Text,Integer,Text,Integer)
       * @param startTextElement the first text element to be partially added
       * @param startOffset the number of characters before the first character of startTextElement to be included (that is, the index of the first character in the range)
       * @param endTextElementInclusive the last text element to be partially added
       * @param endOffsetInclusive the number of characters before the last character of endTextElementInclusive to be included (that is, the index of the last character in the range)
       */
      addElementsBetween(startTextElement: Text, startOffset: Integer, endTextElementInclusive: Text, endOffsetInclusive: Integer): RangeBuilder;

      /**
       * Adds the contents of another Range to this RangeBuilder.
       * https://developers.google.com/apps-script/reference/document/range-builder#addRange(Range)
       * @param range the range whose elements should be added
       */
      addRange(range: Range): RangeBuilder;

      /**
       * Constructs a Range from the settings applied to the builder.
       * https://developers.google.com/apps-script/reference/document/range-builder#build()
       */
      build(): Range;

      /**
       * Gets all elements in this Range, including any partial Text elements (for example, in the case
       * of a selection that includes only part of a Text element). To determine whether a
       * Text element is only partially included in the range, see RangeElement.isPartial().
       * https://developers.google.com/apps-script/reference/document/range-builder#getRangeElements()
       */
      getRangeElements(): RangeElement[];
      /** @deprecated DO NOT USE */ getSelectedElements(): RangeElement[];
    }
    /**
     * A wrapper around an Element with a possible start and end offset. These offsets allow a
     * range of characters within a Text
     * element to be represented in search results, document selections, and named ranges.
     */
    interface RangeElement {

      /**
       * Gets the Element that corresponds to this RangeElement.
       *
       *
       *     // Log debug information about a range element.
       *     Logger.log('Element type: ' + rangeElement.getElement().getType());
       *     if (rangeElement.isPartial()) {
       *       Logger.log('The character range begins at ' + rangeElement.getStartOffset());
       *       Logger.log('The character range ends at ' + rangeElement.getEndOffsetInclusive());
       *     } else {
       *       Logger.log('The entire range element is included.');
       *     }
       * https://developers.google.com/apps-script/reference/document/range-element#getElement()
       */
      getElement(): Element;

      /**
       * Gets the position of the end of a partial range within the range element. If the element is a
       * Text element and isPartial() returns true, the offset is the number of characters before the last
       * character in the range (that is, the index of the last character in the range); in any other
       * case, this method returns -1.
       * https://developers.google.com/apps-script/reference/document/range-element#getEndOffsetInclusive()
       */
      getEndOffsetInclusive(): Integer;

      /**
       * Gets the position of the start of a partial range within the range element. If the element is a
       * Text element and isPartial() returns true, the offset is the number of characters before the start of
       * the range (that is, the index of the first character in the range); in any other case, this
       * method returns -1.
       * https://developers.google.com/apps-script/reference/document/range-element#getStartOffset()
       */
      getStartOffset(): Integer;

      /**
       * Determines whether this range element covers the entire element or a partial selection of the
       * element's characters. The beginning and end of a partial range element's range can be
       * determined using getStartOffset() and getEndOffsetInclusive(), respectively.
       * https://developers.google.com/apps-script/reference/document/range-element#isPartial()
       */
      isPartial(): boolean;
    }
    /**
     * An element representing a table. A Table may only contain TableRow elements. For
     * more information on document structure, see the guide to extending Google Docs.
     *
     * When creating a Table that contains a large number of rows or cells, consider building
     * it from a string array, as shown in the following example.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Create a two-dimensional array containing the cell contents.
     *     var cells = [
     *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
     *       ['Row 2, Cell 1', 'Row 2, Cell 2']
     *     ];
     *
     *     // Build a table from the array.
     *     body.appendTable(cells);
     */
    interface Table {

      /**
       * Creates and appends a new TableRow.
       * https://developers.google.com/apps-script/reference/document/table#appendTableRow()
       */
      appendTableRow(): TableRow;

      /**
       * Appends the given TableRow.
       * https://developers.google.com/apps-script/reference/document/table#appendTableRow(TableRow)
       * @param tableRow the table row to append
       */
      appendTableRow(tableRow: TableRow): TableRow;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/table#clear()
       */
      clear(): Table;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/table#copy()
       */
      copy(): Table;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/table#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/table#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/table#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/table#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the border color.
       * https://developers.google.com/apps-script/reference/document/table#getBorderColor()
       */
      getBorderColor(): string;

      /**
       * Retrieves the border width, in points.
       * https://developers.google.com/apps-script/reference/document/table#getBorderWidth()
       */
      getBorderWidth(): number;

      /**
       * Retrieves the TableCell at the specified row and cell indices.
       * https://developers.google.com/apps-script/reference/document/table#getCell(Integer,Integer)
       * @param rowIndex the index of the row containing the cell to retrieve
       * @param cellIndex the index of the cell to retrieve
       */
      getCell(rowIndex: Integer, cellIndex: Integer): TableCell;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/table#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/table#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the width of the specified table column, in points.
       * https://developers.google.com/apps-script/reference/document/table#getColumnWidth(Integer)
       * @param columnIndex the column index
       */
      getColumnWidth(columnIndex: Integer): number;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/table#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/table#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/table#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the number of TableRows.
       * https://developers.google.com/apps-script/reference/document/table#getNumRows()
       */
      getNumRows(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/table#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/table#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the TableRow at the specified row index.
       * https://developers.google.com/apps-script/reference/document/table#getRow(Integer)
       * @param rowIndex the index of the row to retrieve
       */
      getRow(rowIndex: Integer): TableRow;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/table#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/table#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/table#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new TableRow at the specified index.
       * https://developers.google.com/apps-script/reference/document/table#insertTableRow(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTableRow(childIndex: Integer): TableRow;

      /**
       * Inserts the given TableRow at the specified index.
       * https://developers.google.com/apps-script/reference/document/table#insertTableRow(Integer,TableRow)
       * @param childIndex the index at which to insert the element
       * @param tableRow the table row to insert
       */
      insertTableRow(childIndex: Integer, tableRow: TableRow): TableRow;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/table#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/table#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): Table;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/table#removeFromParent()
       */
      removeFromParent(): Table;

      /**
       * Removes the TableRow at the specified row index.
       * https://developers.google.com/apps-script/reference/document/table#removeRow(Integer)
       * @param rowIndex the index of the row to remove
       */
      removeRow(rowIndex: Integer): TableRow;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/table#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/table#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Table;

      /**
       * Sets the border color.
       * https://developers.google.com/apps-script/reference/document/table#setBorderColor(String)
       * @param color the border color, formatted in CSS notation (like '#ffffff')
       */
      setBorderColor(color: string): Table;

      /**
       * Sets the border width, in points.
       * https://developers.google.com/apps-script/reference/document/table#setBorderWidth(Number)
       * @param width the border width, in points
       */
      setBorderWidth(width: number): Table;

      /**
       * Sets the width of the specified column, in points.
       * https://developers.google.com/apps-script/reference/document/table#setColumnWidth(Integer,Number)
       * @param columnIndex the column index
       * @param width the border width, in points
       */
      setColumnWidth(columnIndex: Integer, width: number): Table;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/table#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Table;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/table#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Table;
    }
    /**
     * An element representing a table cell. A TableCell is always contained within a TableRow and may contain ListItem, Paragraph, or Table elements. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface TableCell {

      /**
       * Creates and appends a new HorizontalRule.
       *
       *
       * The HorizontalRule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       *
       * The InlineImage will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendImage(BlobSource)
       * @param image the image data
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       *
       * The InlineImage will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendImage(InlineImage)
       * @param image the image data
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendListItem(ListItem)
       * @param listItem the list item to append
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendListItem(String)
       * @param text the text contents
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendParagraph(String)
       * @param text the text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing the specified cells.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable(String)
       * @param cells the text contents of the table cells to add to the new table
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable(Table)
       * @param table the table to append
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/table-cell#clear()
       */
      clear(): TableCell;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/table-cell#copy()
       */
      copy(): TableCell;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/table-cell#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/table-cell#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/table-cell#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-cell#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-cell#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/table-cell#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the background color.
       * https://developers.google.com/apps-script/reference/document/table-cell#getBackgroundColor()
       */
      getBackgroundColor(): string;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/table-cell#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/table-cell#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the column span, which is the number of columns of table cells this cell spans.
       * Non-merged cells have a col span of 1.
       * https://developers.google.com/apps-script/reference/document/table-cell#getColSpan()
       */
      getColSpan(): Integer;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/table-cell#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/table-cell#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/table-cell#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the bottom padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingBottom()
       */
      getPaddingBottom(): number;

      /**
       * Retrieves the left padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingLeft()
       */
      getPaddingLeft(): number;

      /**
       * Retrieves the right padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingRight()
       */
      getPaddingRight(): number;

      /**
       * Retrieves the top padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingTop()
       */
      getPaddingTop(): number;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/table-cell#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the TableRow containing the current TableCell.
       * https://developers.google.com/apps-script/reference/document/table-cell#getParentRow()
       */
      getParentRow(): TableRow;

      /**
       * Retrieves the Table containing the current TableCell.
       * https://developers.google.com/apps-script/reference/document/table-cell#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/table-cell#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged
       * cells have a row span of 1.
       * https://developers.google.com/apps-script/reference/document/table-cell#getRowSpan()
       */
      getRowSpan(): Integer;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/table-cell#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/table-cell#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/table-cell#getType()
       */
      getType(): ElementType;

      /**
       * Retrieves the VerticalAlignment.
       * https://developers.google.com/apps-script/reference/document/table-cell#getVerticalAlignment()
       */
      getVerticalAlignment(): VerticalAlignment;

      /**
       * Retrieves the width of the column containing the cell, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#getWidth()
       */
      getWidth(): number;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       *
       *
       * The horizontal rule will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified
       * index.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       *
       * The image will be contained in a new Paragraph.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image to insert
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertListItem(Integer,ListItem)
       * @param childIndex the index at which to insert the element
       * @param listItem the list item to insert
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertListItem(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert the element
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer,String)
       * @param childIndex the index at which to insert
       * @param cells the text contents of the table cells to add to the new table
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer,Table)
       * @param childIndex the index at which to insert the element
       * @param table the table to insert
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/table-cell#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/table-cell#merge()
       */
      merge(): TableCell;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/table-cell#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): TableCell;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/table-cell#removeFromParent()
       */
      removeFromParent(): TableCell;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/table-cell#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/table-cell#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): TableCell;

      /**
       * Sets the background color.
       * https://developers.google.com/apps-script/reference/document/table-cell#setBackgroundColor(String)
       * @param color the background color, formatted in CSS notation (like '#ffffff')
       */
      setBackgroundColor(color: string): TableCell;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/table-cell#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableCell;

      /**
       * Sets the bottom padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingBottom(Number)
       * @param paddingBottom the bottom padding, in points
       */
      setPaddingBottom(paddingBottom: number): TableCell;

      /**
       * Sets the left padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingLeft(Number)
       * @param paddingLeft the left padding, in points
       */
      setPaddingLeft(paddingLeft: number): TableCell;

      /**
       * Sets the right padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingRight(Number)
       * @param paddingTop the right padding, in points
       */
      setPaddingRight(paddingTop: number): TableCell;

      /**
       * Sets the top padding, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingTop(Number)
       * @param paddingTop the top padding, in points
       */
      setPaddingTop(paddingTop: number): TableCell;

      /**
       * Sets the contents as plain text.
       *
       *
       * Note: existing contents are cleared.
       * https://developers.google.com/apps-script/reference/document/table-cell#setText(String)
       * @param text the new text contents
       */
      setText(text: string): TableCell;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/table-cell#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): TableCell;

      /**
       * Sets the vertical alignment.
       * https://developers.google.com/apps-script/reference/document/table-cell#setVerticalAlignment(VerticalAlignment)
       * @param alignment the vertical alignment
       */
      setVerticalAlignment(alignment: VerticalAlignment): TableCell;

      /**
       * Sets the width of the column containing the current cell, in points.
       * https://developers.google.com/apps-script/reference/document/table-cell#setWidth(Number)
       * @param width the column width, in points
       */
      setWidth(width: number): TableCell;
    }
    /**
     * An element containing a table of contents. A TableOfContents may contain ListItem, Paragraph, and Table elements, although the contents of a TableOfContents are usually generated automatically by Google Docs. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface TableOfContents {

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#clear()
       */
      clear(): TableOfContents;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#copy()
       */
      copy(): TableOfContents;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/table-of-contents#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/table-of-contents#removeFromParent()
       */
      removeFromParent(): TableOfContents;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/table-of-contents#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/table-of-contents#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): TableOfContents;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/table-of-contents#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableOfContents;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/table-of-contents#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): TableOfContents;
    }
    /**
     * An element representing a table row. A TableRow is always contained within a Table and may only contain TableCell elements. For more information on document
     * structure, see the guide to extending
     * Google Docs.
     */
    interface TableRow {

      /**
       * Creates and appends a new TableCell.
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell()
       */
      appendTableCell(): TableCell;

      /**
       * Appends the given TableCell containing the specified text.
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell(String)
       * @param textContents the cell's text contents
       */
      appendTableCell(textContents: string): TableCell;

      /**
       * Appends the given TableCell.
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell(TableCell)
       * @param tableCell the table cell to append
       */
      appendTableCell(tableCell: TableCell): TableCell;

      /**
       * Clears the contents of the element.
       * https://developers.google.com/apps-script/reference/document/table-row#clear()
       */
      clear(): TableRow;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/table-row#copy()
       */
      copy(): TableRow;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/table-row#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       * https://developers.google.com/apps-script/reference/document/table-row#findElement(ElementType)
       * @param elementType the type of element to search for
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the
       * specified RangeElement.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define the search parameters.
       *     var searchType = DocumentApp.ElementType.PARAGRAPH;
       *     var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
       *     var searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (searchResult = body.findElement(searchType, searchResult)) {
       *       var par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() == searchHeading) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         return;
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/document/table-row#findElement(ElementType,RangeElement)
       * @param elementType the type of element to search for
       * @param from the search result to search from
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-row#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/table-row#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/table-row#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the TableCell at the specified cell index.
       * https://developers.google.com/apps-script/reference/document/table-row#getCell(Integer)
       * @param cellIndex the index of the cell to retrieve
       */
      getCell(cellIndex: Integer): TableCell;

      /**
       * Retrieves the child element at the specified child index.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document.
       *     var firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText("This is the first paragraph.");
       *     }
       * https://developers.google.com/apps-script/reference/document/table-row#getChild(Integer)
       * @param childIndex the index of the child element to retrieve
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       * https://developers.google.com/apps-script/reference/document/table-row#getChildIndex(Element)
       * @param child the child element for which to retrieve the index
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/table-row#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the minimum height, in points.
       * https://developers.google.com/apps-script/reference/document/table-row#getMinimumHeight()
       */
      getMinimumHeight(): number;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/table-row#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of cells in the row.
       * https://developers.google.com/apps-script/reference/document/table-row#getNumCells()
       */
      getNumCells(): Integer;

      /**
       * Retrieves the number of children.
       *
       *
       *     // Get the body section of the active document.
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Log the number of elements in the document.
       *     Logger.log("There are " + body.getNumChildren() +
       *         " elements in the document body.");
       * https://developers.google.com/apps-script/reference/document/table-row#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/table-row#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the Table containing the current row.
       * https://developers.google.com/apps-script/reference/document/table-row#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/table-row#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/table-row#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/table-row#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/table-row#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new TableCell at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTableCell(childIndex: Integer): TableCell;

      /**
       * Inserts the given TableCell at the specified index, containing the given text.
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param textContents the cell's text contents
       */
      insertTableCell(childIndex: Integer, textContents: string): TableCell;

      /**
       * Inserts the given TableCell at the specified index.
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer,TableCell)
       * @param childIndex the index at which to insert the element
       * @param tableCell the table cell to insert
       */
      insertTableCell(childIndex: Integer, tableCell: TableCell): TableCell;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/table-row#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/table-row#merge()
       */
      merge(): TableRow;

      /**
       * Removes the TableCell at the specified cell index.
       * https://developers.google.com/apps-script/reference/document/table-row#removeCell(Integer)
       * @param cellIndex the index of the cell to remove
       */
      removeCell(cellIndex: Integer): TableCell;

      /**
       * Removes the specified child element.
       * https://developers.google.com/apps-script/reference/document/table-row#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): TableRow;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/table-row#removeFromParent()
       */
      removeFromParent(): TableRow;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/table-row#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/table-row#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): TableRow;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/table-row#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableRow;

      /**
       * Sets the minimum height, in points.
       * https://developers.google.com/apps-script/reference/document/table-row#setMinimumHeight(Number)
       * @param minHeight the minimum height, in points
       */
      setMinimumHeight(minHeight: number): TableRow;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/table-row#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): TableRow;
    }
    /**
     * An element representing a rich text region. All text in a Document is contained within Text elements.
     * A Text element can be contained within an Equation, EquationFunction,
     * ListItem, or Paragraph, but cannot itself contain any other element. For more
     * information on document structure, see the guide to extending Google Docs.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Use editAsText to obtain a single text element containing
     *     // all the characters in the document.
     *     var text = body.editAsText();
     *
     *     // Insert text at the beginning of the document.
     *     text.insertText(0, 'Inserted text.\n');
     *
     *     // Insert text at the end of the document.
     *     text.appendText('\nAppended text.');
     *
     *     // Make the first half of the document blue.
     *     text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');
     */
    interface Text {

      /**
       * Appends the specified text at the given character offset.
       * https://developers.google.com/apps-script/reference/document/text#appendText(String)
       * @param text the text to append
       */
      appendText(text: string): Text;

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/text#copy()
       */
      copy(): Text;

      /**
       * Deletes a range of text.
       * https://developers.google.com/apps-script/reference/document/text#deleteText(Integer,Integer)
       * @param startOffset the character offset of the first character to delete
       * @param endOffsetInclusive the character offset of the last character to delete
       */
      deleteText(startOffset: Integer, endOffsetInclusive: Integer): Text;

      /**
       * Obtains a Text version of the current element, for editing.
       *
       *
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       *
       *
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, "An editAsText sample.");
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, "An example.");
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       * https://developers.google.com/apps-script/reference/document/text#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/text#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given
       * search result.
       *
       *
       * A subset of the JavaScript regular expression features are not fully supported, such as
       * capture groups and mode modifiers.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       * https://developers.google.com/apps-script/reference/document/text#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/text#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the attributes at the specified character offset.
       *
       *
       * The result is an object containing a property for each valid text attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       * https://developers.google.com/apps-script/reference/document/text#getAttributes(Integer)
       * @param offset the character offset
       */
      getAttributes(offset: Integer): object;

      /**
       * Retrieves the background color setting.
       * https://developers.google.com/apps-script/reference/document/text#getBackgroundColor()
       */
      getBackgroundColor(): string;

      /**
       * Retrieves the background color at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#getBackgroundColor(Integer)
       * @param offset the character offset
       */
      getBackgroundColor(offset: Integer): string;

      /**
       * Retrieves the font family setting. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. The methods getFontFamily() and setFontFamily(fontFamilyName) now use string names for fonts instead of
       * the FontFamily enum. Although this enum is
       * deprecated, it will remain available for compatibility with older scripts.
       * https://developers.google.com/apps-script/reference/document/text#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Retrieves the font family at the specified character offset. The name can be any font from the
       * Font menu in Docs or Google Fonts, and is
       * case-sensitive. The methods getFontFamily() and setFontFamily(fontFamilyName)
       * now use string names for fonts instead of the FontFamily enum. Although this enum is
       * deprecated, it will remain available for compatibility with older scripts.
       * https://developers.google.com/apps-script/reference/document/text#getFontFamily(Integer)
       * @param offset the character offset
       */
      getFontFamily(offset: Integer): string;

      /**
       * Retrieves the font size setting.
       * https://developers.google.com/apps-script/reference/document/text#getFontSize()
       */
      getFontSize(): Integer;

      /**
       * Retrieves the font size at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#getFontSize(Integer)
       * @param offset the character offset
       */
      getFontSize(offset: Integer): Integer;

      /**
       * Retrieves the foreground color setting.
       * https://developers.google.com/apps-script/reference/document/text#getForegroundColor()
       */
      getForegroundColor(): string;

      /**
       * Retrieves the foreground color at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#getForegroundColor(Integer)
       * @param offset the character offset
       */
      getForegroundColor(offset: Integer): string;

      /**
       * Retrieves the link url.
       * https://developers.google.com/apps-script/reference/document/text#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the link url at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#getLinkUrl(Integer)
       * @param offset the character offset
       */
      getLinkUrl(offset: Integer): string;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/text#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/text#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/text#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       * https://developers.google.com/apps-script/reference/document/text#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/text#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Gets the text alignment for a single character. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       * https://developers.google.com/apps-script/reference/document/text#getTextAlignment(Integer)
       * @param offset the offset of the character
       */
      getTextAlignment(offset: Integer): TextAlignment;

      /**
       * Retrieves the set of text indices that correspond to the start of distinct text formatting
       * runs.
       * https://developers.google.com/apps-script/reference/document/text#getTextAttributeIndices()
       */
      getTextAttributeIndices(): Integer[];

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/text#getType()
       */
      getType(): ElementType;

      /**
       * Inserts the specified text at the given character offset.
       * https://developers.google.com/apps-script/reference/document/text#insertText(Integer,String)
       * @param offset the character offset at which to insert
       * @param text the text to insert
       */
      insertText(offset: Integer, text: string): Text;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/text#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the bold setting.
       * https://developers.google.com/apps-script/reference/document/text#isBold()
       */
      isBold(): boolean;

      /**
       * Retrieves the bold setting at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#isBold(Integer)
       * @param offset the character offset
       */
      isBold(offset: Integer): boolean;

      /**
       * Retrieves the italic setting.
       * https://developers.google.com/apps-script/reference/document/text#isItalic()
       */
      isItalic(): boolean;

      /**
       * Retrieves the italic setting at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#isItalic(Integer)
       * @param offset the character offset
       */
      isItalic(offset: Integer): boolean;

      /**
       * Retrieves the strikethrough setting.
       * https://developers.google.com/apps-script/reference/document/text#isStrikethrough()
       */
      isStrikethrough(): boolean;

      /**
       * Retrieves the strikethrough setting at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#isStrikethrough(Integer)
       * @param offset the character offset
       */
      isStrikethrough(offset: Integer): boolean;

      /**
       * Retrieves the underline setting.
       * https://developers.google.com/apps-script/reference/document/text#isUnderline()
       */
      isUnderline(): boolean;

      /**
       * Retrieves the underline setting at the specified character offset.
       * https://developers.google.com/apps-script/reference/document/text#isUnderline(Integer)
       * @param offset the character offset
       */
      isUnderline(offset: Integer): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/text#merge()
       */
      merge(): Text;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/text#removeFromParent()
       */
      removeFromParent(): Text;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular
       * expressions.
       *
       *
       * The search pattern is passed as a string, not a JavaScript regular expression object.
       * Because of this you'll need to escape any backslashes in the pattern.
       *
       *
       * This methods uses Google's RE2 regular
       * expression library, which limits the supported syntax.
       *
       *
       * The provided regular expression pattern is independently matched against each text block
       * contained in the current element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText("^.*Apps ?Script.*$", "Apps Script");
       * https://developers.google.com/apps-script/reference/document/text#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Applies the specified attributes to the given character range.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       * https://developers.google.com/apps-script/reference/document/text#setAttributes(Integer,Integer,Object)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param attributes the element's attributes
       */
      setAttributes(startOffset: Integer, endOffsetInclusive: Integer, attributes: object): Text;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/text#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): Text;

      /**
       * Sets the background color for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setBackgroundColor(Integer,Integer,String)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param color the background color, formatted in CSS notation (like '#ffffff')
       */
      setBackgroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;

      /**
       * Sets the background color.
       * https://developers.google.com/apps-script/reference/document/text#setBackgroundColor(String)
       * @param color the background color, formatted in CSS notation (like '#ffffff')
       */
      setBackgroundColor(color: string): Text;

      /**
       * Sets the bold setting.
       * https://developers.google.com/apps-script/reference/document/text#setBold(Boolean)
       * @param bold the bold setting
       */
      setBold(bold: boolean): Text;

      /**
       * Sets the bold setting for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setBold(Integer,Integer,Boolean)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param bold the bold setting
       */
      setBold(startOffset: Integer, endOffsetInclusive: Integer, bold: boolean): Text;

      /**
       * Sets the font family for the specified character range. The name can be any font from the Font
       * menu in Docs or Google Fonts, and is case-sensitive.
       * Unrecognized font names will render as Arial. The methods getFontFamily(offset) and
       * setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is
       * deprecated, it will remain available for compatibility with older scripts.
       * https://developers.google.com/apps-script/reference/document/text#setFontFamily(Integer,Integer,String)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param fontFamilyName the name of the font family, from the Font menu in Docs or Google Fonts
       */
      setFontFamily(startOffset: Integer, endOffsetInclusive: Integer, fontFamilyName: string): Text;

      /**
       * Sets the font family. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. Unrecognized font
       * names will render as Arial. The methods getFontFamily() and setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is
       * deprecated, it will remain available for compatibility with older scripts.
       * https://developers.google.com/apps-script/reference/document/text#setFontFamily(String)
       * @param fontFamilyName the name of the font family, from the Font menu in Docs or Google Fonts
       */
      setFontFamily(fontFamilyName: string): Text;

      /**
       * Sets the font size.
       * https://developers.google.com/apps-script/reference/document/text#setFontSize(Integer)
       * @param size the font size
       */
      setFontSize(size: Integer): Text;

      /**
       * Sets the font size for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setFontSize(Integer,Integer,Integer)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param size the font size
       */
      setFontSize(startOffset: Integer, endOffsetInclusive: Integer, size: Integer): Text;

      /**
       * Sets the foreground color for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setForegroundColor(Integer,Integer,String)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param color the foreground color, formatted in CSS notation (like '#ffffff')
       */
      setForegroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;

      /**
       * Sets the foreground color.
       * https://developers.google.com/apps-script/reference/document/text#setForegroundColor(String)
       * @param color the foreground color, formatted in CSS notation (like '#ffffff')
       */
      setForegroundColor(color: string): Text;

      /**
       * Sets the italic setting.
       * https://developers.google.com/apps-script/reference/document/text#setItalic(Boolean)
       * @param italic the italic setting
       */
      setItalic(italic: boolean): Text;

      /**
       * Sets the italic setting for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setItalic(Integer,Integer,Boolean)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param italic the italic setting
       */
      setItalic(startOffset: Integer, endOffsetInclusive: Integer, italic: boolean): Text;

      /**
       * Sets the link url for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setLinkUrl(Integer,Integer,String)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param url the link url
       */
      setLinkUrl(startOffset: Integer, endOffsetInclusive: Integer, url: string): Text;

      /**
       * Sets the link url.
       * https://developers.google.com/apps-script/reference/document/text#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Text;

      /**
       * Sets the strikethrough setting.
       * https://developers.google.com/apps-script/reference/document/text#setStrikethrough(Boolean)
       * @param strikethrough the strikethrough setting
       */
      setStrikethrough(strikethrough: boolean): Text;

      /**
       * Sets the strikethrough setting for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setStrikethrough(Integer,Integer,Boolean)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param strikethrough the strikethrough setting
       */
      setStrikethrough(startOffset: Integer, endOffsetInclusive: Integer, strikethrough: boolean): Text;

      /**
       * Sets the text contents.
       * https://developers.google.com/apps-script/reference/document/text#setText(String)
       * @param text the new text contents
       */
      setText(text: string): Text;

      /**
       * Sets the text alignment for a given character range. The available types of alignment are
       * DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and
       * DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the first character in the first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/text#setTextAlignment(Integer,Integer,TextAlignment)
       * @param startOffset the start offset of the character range
       * @param endOffsetInclusive the end offset of the character range (inclusive)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(startOffset: Integer, endOffsetInclusive: Integer, textAlignment: TextAlignment): Text;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *
       *     // Make the entire first paragraph be superscript.
       *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       * https://developers.google.com/apps-script/reference/document/text#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Text;

      /**
       * Sets the underline setting.
       * https://developers.google.com/apps-script/reference/document/text#setUnderline(Boolean)
       * @param underline the underline setting
       */
      setUnderline(underline: boolean): Text;

      /**
       * Sets the underline setting for the specified character range.
       * https://developers.google.com/apps-script/reference/document/text#setUnderline(Integer,Integer,Boolean)
       * @param startOffset the text range's start offset
       * @param endOffsetInclusive the text range's end offset
       * @param underline the underline setting
       */
      setUnderline(startOffset: Integer, endOffsetInclusive: Integer, underline: boolean): Text;
    }
    /**
     * An enumeration of the type of text alignments.
     *
     *     // Make the first character in the first paragraph be superscript.
     *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
     *     text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
     */
    enum TextAlignment { NORMAL, SUPERSCRIPT, SUBSCRIPT }
    /**
     * An element representing a region that is unknown or cannot be affected by a script, such as a
     * page number.
     */
    interface UnsupportedElement {

      /**
       * Returns a detached, deep copy of the current element.
       *
       *
       * Any child elements present in the element are also copied. The new element will not have a
       * parent.
       * https://developers.google.com/apps-script/reference/document/unsupported-element#copy()
       */
      copy(): UnsupportedElement;

      /**
       * Retrieves the element's attributes.
       *
       *
       * The result is an object containing a property for each valid element attribute where each
       * property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append a styled paragraph.
       *     var par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     var atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (var att in atts) {
       *       Logger.log(att + ":" + atts[att]);
       *     }
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getAttributes()
       */
      getAttributes(): object;

      /**
       * Retrieves the element's next sibling element.
       *
       *
       * The next sibling has the same parent and follows the current element.
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       *
       *
       * The parent element contains the current element.
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       *
       *
       * The previous sibling has the same parent and precedes the current element.
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       *
       *
       * Use getType() to determine the exact type of a given element.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Obtain the first element in the document body.
       *
       *     var firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       * https://developers.google.com/apps-script/reference/document/unsupported-element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       *
       *
       * Only elements of the same ElementType may be merged. Any child elements contained in
       * the current element are moved to the preceding sibling element.
       *
       *
       * The current element is removed from the document.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Append two paragraphs to the document.
       *     var par1 = body.appendParagraph('Paragraph 1.');
       *     var par2 = body.appendParagraph('Paragraph 2.');
       *
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       * https://developers.google.com/apps-script/reference/document/unsupported-element#merge()
       */
      merge(): UnsupportedElement;

      /**
       * Removes the element from its parent.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Remove all images in the document body.
       *     var imgs = body.getImages();
       *     for (var i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       * https://developers.google.com/apps-script/reference/document/unsupported-element#removeFromParent()
       */
      removeFromParent(): UnsupportedElement;

      /**
       * Sets the element's attributes.
       *
       *
       * The specified attributes parameter must be an object where each property name is an item in
       * the DocumentApp.Attribute enumeration and each property value is the new value to be
       * applied.
       *
       *
       *     var body = DocumentApp.getActiveDocument().getBody();
       *
       *     // Define a custom paragraph style.
       *     var style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     var par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       * https://developers.google.com/apps-script/reference/document/unsupported-element#setAttributes(Object)
       * @param attributes the element's attributes
       */
      setAttributes(attributes: object): UnsupportedElement;
    }
    /**
     * An enumeration of the supported vertical alignment types.
     *
     * Use the VerticalAlignment enumeration to set the vertical alignment of table cells.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append table containing two cells.
     *     var table = body.appendTable([['Top', 'Center', 'Bottom']]);
     *
     *     // Align the first cell's contents to the top.
     *     table.getCell(0, 0).setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);
     *
     *     // Align the second cell's contents to the center.
     *     table.getCell(0, 1).setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
     *
     *     // Align the third cell's contents to the bottom.
     *     table.getCell(0, 2).setVerticalAlignment(DocumentApp.VerticalAlignment.BOTTOM);
     */
    enum VerticalAlignment { BOTTOM, CENTER, TOP }
  }
}

declare var DocumentApp: GoogleAppsScript.Document.DocumentApp;
