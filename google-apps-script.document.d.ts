// Type definitions for Google Apps Script 2025-11-10
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
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.Attribute.BACKGROUND_COLOR.
     *
     * Use attributes to compose custom styles. For example:
     *
     *     // Define a style with yellow background.
     *     const highlightStyle = {};
     *     highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFF00';
     *     highlightStyle[DocumentApp.Attribute.BOLD] = true;
     *
     *     // Insert "Hello", highlighted.
     *     DocumentApp.getActiveDocument()
     *         .getActiveTab()
     *         .asDocumentTab()
     *         .editAsText()
     *         .insertText(0, 'Hello\n')
     *         .setAttributes(0, 4, highlightStyle);
     */
    enum Attribute { BACKGROUND_COLOR, BOLD, BORDER_COLOR, BORDER_WIDTH, CODE, FONT_FAMILY, FONT_SIZE, FOREGROUND_COLOR, HEADING, HEIGHT, HORIZONTAL_ALIGNMENT, INDENT_END, INDENT_FIRST_LINE, INDENT_START, ITALIC, GLYPH_TYPE, LEFT_TO_RIGHT, LINE_SPACING, LINK_URL, LIST_ID, MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, MARGIN_TOP, NESTING_LEVEL, MINIMUM_HEIGHT, PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PAGE_HEIGHT, PAGE_WIDTH, SPACING_AFTER, SPACING_BEFORE, STRIKETHROUGH, UNDERLINE, VERTICAL_ALIGNMENT, WIDTH }
    /**
     * The content of a tab in a Google Docs document. The Body may contain ListItem,
     * Paragraph, Table, and TableOfContents elements. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     *
     * The Body typically contains the full tab's contents except for the HeaderSection, FooterSection, and any FootnoteSection elements.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append a paragraph and a page break to the tab's body section directly.
     *     body.appendParagraph('A paragraph.');
     *     body.appendPageBreak();
     */
    interface Body extends Element {

      /**
       * Creates and appends a new HorizontalRule.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendImage(BlobSource)
       * @param image The image data.
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * The InlineImage will be contained in a new Paragraph.
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendImage(InlineImage)
       * @param image The image data.
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       *
       * Return:
       * - ListItem — The appended list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendListItem(ListItem)
       * @param listItem The list item to append.
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       * Consecutive list items are added as part of the same list.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendListItem(String)
       * @param text The list item's text contents.
       */
      appendListItem(text: string): ListItem;

      /**
       * Creates and appends a new PageBreak.
       * The PageBreak will be contained in a new Paragraph.
       *
       * Return:
       * - PageBreak — The new page break.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       * The PageBreak will be contained in a new Paragraph.
       * Use this version of appendPageBreak when appending a copy of an existing PageBreak.
       *
       * Return:
       * - PageBreak — The appended page break.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendPageBreak(PageBreak)
       * @param pageBreak The page break to append.
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Appends the given Paragraph.
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       *
       * Return:
       * - Paragraph — The appended paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendParagraph(Paragraph)
       * @param paragraph The paragraph to append.
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendParagraph(String)
       * @param text The paragraph's text contents.
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendTable(String)
       * @param cells The text contents of the table cells to add to the new table.
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       * Use this version of appendTable when appending a copy of an existing Table. This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#appendTable(Table)
       * @param table The table to append.
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - Body — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/body#clear()
       */
      clear(): Body;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Body — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#copy()
       */
      copy(): Body;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/body#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the set of attributes for the provided ParagraphHeading.
       *
       * Return:
       * - Object — A map of the attributes and their current values.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getHeadingAttributes(ParagraphHeading)
       * @param paragraphHeading The heading whose attributes should be retrieved.
       */
      getHeadingAttributes(paragraphHeading: ParagraphHeading): any;

      /**
       * Retrieves all the InlineImages contained in the section.
       *
       * Return:
       * - InlineImage[] — The section images.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       *
       * Return:
       * - ListItem[] — The section list items.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the bottom margin, in points.
       *
       * Return:
       * - Number — The bottom margin, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getMarginBottom()
       */
      getMarginBottom(): number;

      /**
       * Retrieves the left margin, in points.
       *
       * Return:
       * - Number — The left margin, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getMarginLeft()
       */
      getMarginLeft(): number;

      /**
       * Retrieves the right margin.
       *
       * Return:
       * - Number — The right margin, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getMarginRight()
       */
      getMarginRight(): number;

      /**
       * Retrieves the top margin.
       *
       * Return:
       * - Number — The top margin, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getMarginTop()
       */
      getMarginTop(): number;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the page height, in points.
       *
       * Return:
       * - Number — The page height, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getPageHeight()
       */
      getPageHeight(): number;

      /**
       * Retrieves the page width, in points.
       *
       * Return:
       * - Number — The page width, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getPageWidth()
       */
      getPageWidth(): number;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       *
       * Return:
       * - Paragraph[] — The section paragraphs.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       *
       * Return:
       * - Table[] — The section tables.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertHorizontalRule(Integer)
       * @param childIndex The index at which to insert the element.
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified index.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertImage(Integer,BlobSource)
       * @param childIndex The index at which to insert the element.
       * @param image The image data.
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertImage(Integer,InlineImage)
       * @param childIndex The index at which to insert the element.
       * @param image The image to insert.
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       *
       * Return:
       * - ListItem — The inserted list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertListItem(Integer,ListItem)
       * @param childIndex The index at which to insert.
       * @param listItem The list item to insert.
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified text contents.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertListItem(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The list item's text contents.
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       * The PageBreak will be contained in a new Paragraph.
       *
       * Return:
       * - PageBreak — The new page break.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertPageBreak(Integer)
       * @param childIndex The index at which to insert the element.
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       * The PageBreak will be contained in a new Paragraph.
       *
       * Return:
       * - PageBreak — The inserted page break.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertPageBreak(Integer,PageBreak)
       * @param childIndex The index at which to insert the element.
       * @param pageBreak The page break to insert.
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Inserts the given Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — The inserted paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertParagraph(Integer,Paragraph)
       * @param childIndex The index at which to insert.
       * @param paragraph The paragraph to insert.
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertParagraph(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The paragraph's text contents.
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer)
       * @param childIndex The index at which to insert.
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer,String)
       * @param childIndex The index at which to insert.
       * @param cells The text contents of the table cells to add to the new table.
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       *
       * Return:
       * - Table — The inserted table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#insertTable(Integer,Table)
       * @param childIndex The index at which to insert.
       * @param table The table to insert.
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#removeChild(Element)
       * @param child The child element to remove.
       */
      removeChild(child: Element): Body;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Body;

      /**
       * Sets the attributes for the provided ParagraphHeading.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setHeadingAttributes(ParagraphHeading,Object)
       * @param paragraphHeading The heading whose attributes should be set.
       * @param attributes A map of attributes and the values to set them to.
       */
      setHeadingAttributes(paragraphHeading: ParagraphHeading, attributes: any): Body;

      /**
       * Sets the bottom margin, in points.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setMarginBottom(Number)
       * @param marginBottom The bottom margin, in points.
       */
      setMarginBottom(marginBottom: number): Body;

      /**
       * Sets the left margin, in points.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setMarginLeft(Number)
       * @param marginLeft The left margin, in points.
       */
      setMarginLeft(marginLeft: number): Body;

      /**
       * Sets the right margin, in points.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setMarginRight(Number)
       * @param marginRight The right margin.
       */
      setMarginRight(marginRight: number): Body;

      /**
       * Sets the top margin.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setMarginTop(Number)
       * @param marginTop The top margin, in points.
       */
      setMarginTop(marginTop: number): Body;

      /**
       * Sets the page height, in points.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setPageHeight(Number)
       * @param pageHeight The page height, in points.
       */
      setPageHeight(pageHeight: number): Body;

      /**
       * Sets the page width, in points.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setPageWidth(Number)
       * @param pageWidth The page width, in points.
       */
      setPageWidth(pageWidth: number): Body;

      /**
       * Sets the contents as plain text.
       * Note: existing contents are cleared.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/body#setText(String)
       * @param text The new text contents.
       */
      setText(text: string): Body;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Body — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     *     const doc = DocumentApp.getActiveDocument();
     *     const documentTab = doc.getActiveTab().asDocumentTab();
     *
     *     // Insert a bookmark at the cursor position (in the active tab) and log its ID.
     *     const cursor = doc.getCursor();
     *     const bookmark = documentTab.addBookmark(cursor);
     *     Logger.log(bookmark.getId());
     */
    interface Bookmark {

      /**
       * Gets the ID of the Bookmark. The ID is unique within the DocumentTab.
       *
       * Return:
       * - String — The Bookmark's ID, which is unique within the DocumentTab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/bookmark#getId()
       */
      getId(): string;

      /**
       * Gets the Position of the Bookmark within the DocumentTab. The Position remains accurate so long as the Bookmark is not deleted, even if the script changes the document structure.
       *
       * Return:
       * - Position — The position of the Bookmark.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/bookmark#getPosition()
       */
      getPosition(): Position;

      /**
       * Deletes the Bookmark. Calling this method on a Bookmark that has already been deleted has no effect.
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/bookmark#remove()
       */
      remove(): void;
    }
    /**
     * A generic element that may contain other elements. All elements that may contain child elements,
     * such as Paragraph, inherit from ContainerElement.
     */
    interface ContainerElement extends Element {

      /**
       * Returns the current element as a Body.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asBody()
       */
      asBody(): Body;

      /**
       * Returns the current element as an Equation.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Equation — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asEquation()
       */
      asEquation(): Equation;

      /**
       * Returns the current element as a FooterSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - FooterSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asFooterSection()
       */
      asFooterSection(): FooterSection;

      /**
       * Returns the current element as a FootnoteSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asFootnoteSection()
       */
      asFootnoteSection(): FootnoteSection;

      /**
       * Returns the current element as a HeaderSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asHeaderSection()
       */
      asHeaderSection(): HeaderSection;

      /**
       * Returns the current element as a ListItem.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - ListItem — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the current element as a Paragraph.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Paragraph — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asParagraph()
       */
      asParagraph(): Paragraph;

      /**
       * Returns the current element as a Table.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Table — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asTable()
       */
      asTable(): Table;

      /**
       * Returns the current element as a TableCell.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableCell — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asTableCell()
       */
      asTableCell(): TableCell;

      /**
       * Returns the current element as a TableOfContents.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableOfContents — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asTableOfContents()
       */
      asTableOfContents(): TableOfContents;

      /**
       * Returns the current element as a TableRow.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableRow — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#asTableRow()
       */
      asTableRow(): TableRow;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - ContainerElement — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/container-element#clear()
       */
      clear(): ContainerElement;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - ContainerElement — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#copy()
       */
      copy(): ContainerElement;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/container-element#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - ContainerElement — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#merge()
       */
      merge(): ContainerElement;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - ContainerElement — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#removeFromParent()
       */
      removeFromParent(): ContainerElement;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - ContainerElement — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): ContainerElement;

      /**
       * Sets the link url.
       *
       * Return:
       * - ContainerElement — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): ContainerElement;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - ContainerElement — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/container-element#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): ContainerElement;
    }
    /**
     * An element representing a formatted date
     */
    interface Date {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Date — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#copy()
       */
      copy(): Date;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getAttributes()
       */
      getAttributes(): any;

      /**
       * Returns the display value that's rendered in the document. The display value uses the UTC timezone and the date's locale. For example, Jul 16, 2021.
       *
       * Return:
       * - String — The display value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getDisplayText()
       */
      getDisplayText(): string;

      /**
       * Returns the date's locale used for the display value. For example, en.
       *
       * Return:
       * - String — The locale of the date.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getLocale()
       */
      getLocale(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Returns the timestamp associated with the date.
       *
       * Return:
       * - Date — The timestamp.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getTimestamp()
       */
      getTimestamp(): Date;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Date — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#merge()
       */
      merge(): Date;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Date — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#removeFromParent()
       */
      removeFromParent(): Date;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Date — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/date#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Date;
    }
    /**
     * A document, containing one or more Tab objects, each of which contains rich text and
     * elements such as tables and lists.
     *
     * Documents may be opened or created using DocumentApp.
     *
     *     // Open a document by ID.
     *     let doc = DocumentApp.openById('<my-id>');
     *
     *     // Create and open a document.
     *     doc = DocumentApp.create('Document Title');
     *
     * Methods on the Document class that directly access and modify text contents operate on
     * either the active tab (in scripts bound to a
     * particular document) or the first tab (if an active one isn't available). Scripts relying on
     * these methods (for example, getBody()) can be migrated to support tabs using
     * getTabs() and then Tab.asDocumentTab().
     */
    interface Document {

      /**
       * Adds a Bookmark at the given Position to the first tab or, for scripts that are bound to a document, the active tab. To add a bookmark to any tab, use the DocumentTab.addBookmark(position) method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the active or first tab's body and adds a paragraph.
       *     const paragraph = doc.getBody().appendParagraph('My new paragraph.');
       *
       *     // Creates a position at the first character of the paragraph text.
       *     const position = doc.newPosition(paragraph.getChild(0), 0);
       *
       *     // Adds a bookmark at the first character of the paragraph text.
       *     const bookmark = doc.addBookmark(position);
       *
       *     // Logs the bookmark ID to the console.
       *     console.log(bookmark.getId());
       *
       * Return:
       * - Bookmark — The new bookmark.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addBookmark(Position)
       * @param position The position of the new bookmark.
       */
      addBookmark(position: Position): Bookmark;

      /**
       * Adds the given user to the list of editors for the Document. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Document;

      /**
       * Adds the given user to the list of editors for the Document. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Document;

      /**
       * Adds the given array of users to the list of editors for the Document. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Document;

      /**
       * Adds a footer section, if none exists, to the first tab or, for scripts that are bound to a document, the active tab. To add a footer section to any tab, use the DocumentTab.addFooter() method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Adds a footer to the document's active or first tab.
       *     const footer = doc.addFooter();
       *
       *     // Sets the footer text to 'This is a footer.'
       *     footer.setText('This is a footer');
       *
       * Return:
       * - FooterSection — The tab footer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addFooter()
       */
      addFooter(): FooterSection;

      /**
       * Adds a header section, if none exists, to the first tab or, for scripts that are bound to a document, the active tab. To add a header section to any tab, use the DocumentTab.addHeader() method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Adds a header to the document's active or first tab.
       *     const header = doc.addHeader();
       *
       *     // Sets the header text to 'This is a header.'
       *     header.setText('This is a header');
       *
       * Return:
       * - HeaderSection — The tab header.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addHeader()
       */
      addHeader(): HeaderSection;

      /**
       * Adds a NamedRange, which is a Range that has a name and ID to use for later retrieval, in the first tab or, for scripts that are bound to a document, the active tab. To add a NamedRange in any tab, use the DocumentTab.addNamedRange(name, range) method. Names aren't necessarily unique; several different ranges in the same document can share the same name, much like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. After you add a NamedRange to a document, you can't modify it, you can only remove it.
       * Any script that accesses the document can access a NamedRange. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       *     // Creates a named range that includes every table in the active tab.
       *     const doc = DocumentApp.getActiveDocument();
       *     const rangeBuilder = doc.newRange();
       *     const tables = doc.getBody().getTables();
       *     for (let i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     // Adds the named range to the document's active tab.
       *     doc.addNamedRange('Document tables', rangeBuilder.build());
       *
       * Return:
       * - NamedRange — The NamedRange.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addNamedRange(String,Range)
       * @param name The name for the range, which doesn't need to be unique; range names must be between 1-256 characters.
       * @param range The range of elements to associate with the name; the range can be the active selection, a search result, or manually constructed with newRange().
       */
      addNamedRange(name: string, range: Range): NamedRange;

      /**
       * Adds the given user to the list of viewers for the Document. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Document;

      /**
       * Adds the given user to the list of viewers for the Document. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Document;

      /**
       * Adds the given array of users to the list of viewers for the Document. If any of the users were already on the list of editors, this method has no effect for them.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Document;

      /**
       * Gets the user's currently active Tab in the document. A script can only access the active tab of the user who is running the script, and only if the script is bound to the document.
       *
       *     // Display a dialog box that shows the title of the tab that the
       *     // user is currently viewing.
       *     const tab = DocumentApp.getActiveDocument().getActiveTab();
       *     DocumentApp.getUi().alert(`ID of selected tab: ${tab.getTitle()}`);
       *
       * Return:
       * - Tab — The user's currently active Tab, or null if the script is not bound to the document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getActiveTab()
       */
      getActiveTab(): Tab;

      /**
       * Retrieves the current Document contents as a blob of the specified type.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the document as a PDF.
       *     const pdf = doc.getAs('application/pdf');
       *
       *     // Logs the name of the PDF to the console.
       *     console.log(pdf.getName());
       *
       * Return:
       * - Blob — The current document as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/document#getAs(String)
       * @param contentType The MIME type to convert to; 'application/pdf' and 'text/markdown' are supported.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Retrieves the current Document contents as a blob.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Retrieves the current document's contents as a blob and logs it to the
       *     // console.
       *     console.log(doc.getBlob().getContentType());
       *
       * Return:
       * - Blob — The current document as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/document#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the first tab's Body or, for scripts that are bound to a document, the active tab's DocumentBodySection. To get the DocumentBodySection of any tab, use the DocumentTab.getBody() method.
       * Tabs may contain different types of sections (for example, HeaderSection, FooterSection). The active section for a tab is the Body.
       * Element methods in Document delegate to the active Body.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the active or first tab's body.
       *     const body = doc.getBody();
       *
       *     // Gets the body text and logs it to the console.
       *     console.log(body.getText());
       *
       * Return:
       * - Body — The tab body section.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getBody()
       */
      getBody(): Body;

      /**
       * Gets the Bookmark with the given ID in the first tab or, for scripts that are bound to a document, the active tab. To get a bookmark in any tab, use the DocumentTab.getBookmark(id) method. This method returns null if no such Bookmark exists within the tab.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the bookmark by its ID in the document's active or first tab.
       *     const bookmark = doc.getBookmark('id.xyz654321');
       *
       *     // If the bookmark exists, logs the character offset of its position to the
       *     // console. otherwise, logs 'No bookmark exists with the given ID.' to the
       *     // console.
       *     if (bookmark) {
       *       console.log(bookmark.getPosition().getOffset());
       *     } else {
       *       console.log('No bookmark exists with the given ID.');
       *     }
       *
       * Return:
       * - Bookmark — The Bookmark with the given ID, or null if no such Bookmark exists within the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getBookmark(String)
       * @param id The ID for the Bookmark.
       */
      getBookmark(id: string): Bookmark;

      /**
       * Gets all Bookmark objects in the first tab or, for scripts that are bound to a document, the active tab. To get all bookmarks in any tab, use the DocumentTab.getBookmarks() method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets all of the bookmarks in the document's active or first tab.
       *     const bookmarks = doc.getBookmarks();
       *
       *     // Logs the number of bookmarks in the tab to the console.
       *     console.log(bookmarks.length);
       *
       * Return:
       * - Bookmark[] — An array of the Bookmark objects in the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getBookmarks()
       */
      getBookmarks(): Bookmark[];

      /**
       * Gets the user's cursor in the active tab. A script can only access the cursor of the user who is running the script, and only if the script is bound to the document.
       *
       *     // Insert some text at the cursor position and make it bold.
       *     const cursor = DocumentApp.getActiveDocument().getCursor();
       *     if (cursor) {
       *       // Attempt to insert text at the cursor position. If the insertion returns
       *       // null, the cursor's containing element doesn't allow insertions, so show the
       *       // user an error message.
       *       const element = cursor.insertText('ಠ‿ಠ');
       *       if (element) {
       *         element.setBold(true);
       *       } else {
       *         DocumentApp.getUi().alert('Cannot insert text here.');
       *       }
       *     } else {
       *       DocumentApp.getUi().alert('Cannot find a cursor.');
       *     }
       *
       * Return:
       * - Position — A representation of the user's cursor, or null if the user does not have a cursor placed in the tab or if the script is not bound to the document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getCursor()
       */
      getCursor(): Position;

      /**
       * Gets the list of editors for this Document.
       *
       * Return:
       * - User[] — An array of users with edit permission.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Retrieves the first tab's footer section or, for scripts that are bound to a document, the active tab's footer section. To get the footer section of any tab, use the DocumentTab.getFooter() method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the text of the active or first tab's footer and logs it to the console.
       *     console.log(doc.getFooter().getText());
       *
       * Return:
       * - FooterSection — The tab's footer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getFooter()
       */
      getFooter(): FooterSection;

      /**
       * Retrieves all the Footnote elements in the first tab's body or, for scripts that are bound to a document, the active tab's body. To get all the footnotes in any tab, use the DocumentTab.getFootnotes() method.
       * Calls to getFootnotes cause an iteration over the tab's elements. For large tabs, avoid unnecessary calls to this method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the first footnote in the active or first tab's body.
       *     const footnote = doc.getFootnotes()[0];
       *
       *     // Logs footnote contents to the console.
       *     console.log(footnote.getFootnoteContents().getText());
       *
       * Return:
       * - Footnote[] — The tab's footnotes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getFootnotes()
       */
      getFootnotes(): Footnote[];

      /**
       * Retrieves the first tab's header section or, for scripts that are bound to a document, the active tab's header section. To get the header section of any tab, use the DocumentTab.getHeader() method.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the text of the active or first tab's header and logs it to the console.
       *     console.log(doc.getHeader().getText());
       *
       * Return:
       * - HeaderSection — The tab's header.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getHeader()
       */
      getHeader(): HeaderSection;

      /**
       * Retrieves the document's unique identifier. The document ID is used with DocumentApp.openById() to open a specific document instance.
       *
       * Return:
       * - String — The document's ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getId()
       */
      getId(): string;

      /**
       * Gets the document's language code. This is the language shown in the document editor's File > Language, which may not be the actual language that the document contains.
       *
       * Return:
       * - String — The document language, or null if not defined.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getLanguage()
       */
      getLanguage(): string;

      /**
       * Retrieves the title of the document.
       *
       * Return:
       * - String — The document title.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getName()
       */
      getName(): string;

      /**
       * Gets the NamedRange with the given ID in the first tab or, for scripts that are bound to a document, the active tab. To get the NamedRange with the given ID in any tab, use the DocumentTab.getNamedRangeById(id) method. This method returns null if no such NamedRange exists in the tab. Names are not necessarily unique, even across tabs; several different ranges in the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.
       *
       * Return:
       * - NamedRange — The NamedRange with the given ID, or null if no such range exists in the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getNamedRangeById(String)
       * @param id The range's ID, which is unique within the tab.
       */
      getNamedRangeById(id: string): NamedRange;

      /**
       * Gets all NamedRange objects in the first tab or, for scripts that are bound to a document, the active tab. To get all NamedRange objects in any tab, use the DocumentTab.getNamedRanges() method.
       * A NamedRange can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       * Return:
       * - NamedRange[] — An array of the NamedRange objects in the tab, possibly including multiple ranges with the same name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getNamedRanges()
       */
      getNamedRanges(): NamedRange[];

      /**
       * Gets all NamedRange objects with the given name in the first tab or, for scripts that are bound to a document, the active tab. To get all NamedRange objects in any tab, use the DocumentTab.getNamedRanges(name) method. Names are not necessarily unique, even across tabs; several different ranges in the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.
       * A NamedRange can be accessed by any script that accesses the document. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       * Return:
       * - NamedRange[] — An array of the NamedRange objects in the tab with the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getNamedRanges(String)
       * @param name The range's name, which is not necessarily unique.
       */
      getNamedRanges(name: string): NamedRange[];

      /**
       * Gets the user's selection in the active tab. A script can only access the selection of the user who is running the script, and only if the script is bound to the document.
       *
       *     // Display a dialog box that tells the user how many elements are included in
       *     // the selection.
       *     const selection = DocumentApp.getActiveDocument().getSelection();
       *     if (selection) {
       *       const elements = selection.getRangeElements();
       *       DocumentApp.getUi().alert(`Number of selected elements: ${elements.length}`);
       *     } else {
       *       DocumentApp.getUi().alert('Nothing is selected.');
       *     }
       *
       * Return:
       * - Range — A representation of the user's selection, or null if the user does not have anything selected in the tab, if only the end of a paragraph is selected, if only the end of a paragraph and a new line are selected, or if the script is not bound to the document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getSelection()
       */
      getSelection(): Range;

      /**
       * Gets all language codes that are supported in Google Docs files.
       *
       * Return:
       * - String[] — An array of language codes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getSupportedLanguageCodes()
       */
      getSupportedLanguageCodes(): string[];

      /**
       * Gets the Tab with the specified ID. This method returns null if no such Tab exists. Can access tabs at any nesting level.
       *
       * Return:
       * - Tab — The Tab with the specified ID, or null if no such Tab exists.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getTab(String)
       * @param tabId The ID of the tab to get.
       */
      getTab(tabId: string): Tab;

      /**
       * Gets all unnested Tabs that are part of the document.
       * Tabs can contain child tabs, a tab nested within another tab. Child tabs are accessible using Tab.getChildTabs().
       *
       * Return:
       * - Tab[] — The list of all Tabs that are part of the document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getTabs()
       */
      getTabs(): Tab[];

      /**
       * Retrieves the URL to access the current document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *
       *     // Send out the link to open the document.
       *     MailApp.sendEmail('<email-address>', doc.getName(), doc.getUrl());
       *
       * Return:
       * - String — The URL to access the current document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Document.
       *
       * Return:
       * - User[] — An array of users with view or comment permission.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#getViewers()
       */
      getViewers(): Base.User[];

      /**
       * Creates a new Position, which is a reference to a location in the tab, relative to a specific element in the first tab or, for scripts that are bound to a document, the active tab. To create a Position relative to a location in any tab, use the DocumentTab.newPosition(element, offset) method. The user's cursor is represented as a Position, among other uses.
       *
       *     // Append a paragraph to the active tab, then place the user's cursor after the
       *     // first word of the new paragraph.
       *     const doc = DocumentApp.getActiveDocument();
       *     const paragraph = doc.getBody().appendParagraph('My new paragraph.');
       *     const position = doc.newPosition(paragraph.getChild(0), 2);
       *     doc.setCursor(position);
       *
       * Return:
       * - Position — The new Position.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#newPosition(Element,Integer)
       * @param element The element that should contain the new Position; this must be either a Text element or a container element like Paragraph.
       * @param offset For Text elements, the number of characters before the Position; for other elements, the number of child elements before the Position within the same container element.
       */
      newPosition(element: Element, offset: Integer): Position;

      /**
       * Creates a builder used to construct Range objects from tab elements in the first tab or, for scripts that are bound to a document, the active tab. To create a builder used to construct DocumentRange objects from tab elements in any tab, use the DocumentTab.newRange() method.
       *
       *     // Change the user's selection to a range that includes every table in the
       *     // active tab.
       *     const doc = DocumentApp.getActiveDocument();
       *     const rangeBuilder = doc.newRange();
       *     const tables = doc.getBody().getTables();
       *     for (let i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       *
       * Return:
       * - RangeBuilder — The new builder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#newRange()
       */
      newRange(): RangeBuilder;

      /**
       * Removes the given user from the list of editors for the Document. This method doesn't block users from accessing the Document if they belong to a class of users who have general access—for example, if the Document is shared with the user's entire domain, or if the Document is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Document;

      /**
       * Removes the given user from the list of editors for the Document. This method doesn't block users from accessing the Document if they belong to a class of users who have general access—for example, if the Document is shared with the user's entire domain, or if the Document is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Document;

      /**
       * Removes the given user from the list of viewers and commenters for the Document. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the Document if they belong to a class of users who have general access—for example, if the Document is shared with the user's entire domain, or if the Document is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - Document — This Document for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Document;

      /**
       * Removes the given user from the list of viewers and commenters for the Document. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the Document if they belong to a class of users who have general access—for example, if the Document is shared with the user's entire domain, or if the Document is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - Document — This Document for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Document;

      /**
       * Saves the current Document. Causes pending updates to be flushed and applied.
       * The saveAndClose() method is automatically invoked at the end of script execution for each open editable Document.
       * A closed Document can't be edited. Use DocumentApp.openById() to reopen a given document for editing.
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#saveAndClose()
       */
      saveAndClose(): void;

      /**
       * Sets the user's selected Tab in the current document to the tab with the specified ID.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *
       *     // Sets the user's selected tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const tab = doc.setActiveTab('123abc');
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#setActiveTab(String)
       * @param tabId The ID of the tab to set as active.
       */
      setActiveTab(tabId: string): void;

      /**
       * Sets the user's cursor, given a Position. A script can only access the cursor of the user who is running the script, and only if the script is bound to the document.
       * Providing a Position from an inactive Tab switches the user's active tab.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *
       *     // Append a paragraph, then place the user's cursor after the first word of the
       *     // new paragraph.
       *     const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
       *     const position = documentTab.newPosition(paragraph.getChild(0), 2);
       *     doc.setCursor(position);
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#setCursor(Position)
       * @param position The new cursor location.
       */
      setCursor(position: Position): Document;

      /**
       * Sets the document's language code. This is the language shown in the document editor's File > Language, which may not be the actual language that the document contains. Use getSupportedLanguageCodes() to get all the valid language codes.
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#setLanguage(String)
       * @param languageCode The language code.
       */
      setLanguage(languageCode: string): Document;

      /**
       * Sets the document title.
       *
       * Return:
       * - Document — The current document.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#setName(String)
       * @param name The new document title.
       */
      setName(name: string): Document;

      /**
       * Sets the user's selection in the active tab, given a Range. A script can only access the selection of the user who is running the script, and only if the script is bound to the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *
       *     // Change the user's selection to a range that includes every table in the
       *     // document.
       *     const rangeBuilder = documentTab.newRange();
       *     const tables = documentTab.getBody().getTables();
       *     for (let i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       *
       * Return:
       * - Document — This Document, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document#setSelection(Range)
       * @param range The new range of elements to select.
       */
      setSelection(range: Range): Document;
    }
    /**
     * The document service creates and opens Documents that can be edited.
     *
     *     // Open a document by ID.
     *     // TODO(developer): Replace the ID with your own.
     *     let doc = DocumentApp.openById('DOCUMENT_ID');
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
       *     // Create and open a new document.
       *     const doc = DocumentApp.create('Document Name');
       *
       * Return:
       * - Document — The new document instance.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-app#create(String)
       * @param name The new document's name.
       */
      create(name: string): Document;

      /**
       * Returns the document to which the script is container-bound. To interact with document to which the script is not container-bound, use openById(id) or openByUrl(url) instead.
       *
       *     // Get the document to which this script is bound.
       *     const doc = DocumentApp.getActiveDocument();
       *
       * Return:
       * - Document — the document instance
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-app#getActiveDocument()
       */
      getActiveDocument(): Document;

      /**
       * Returns an instance of the document's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open document, and only if the script is bound to the document. For more information, see the guides to menus and dialogs and sidebars.
       *
       *     // Add a custom menu to the active document, including a separator and a
       *     // sub-menu.
       *     function onOpen(e) {
       *       DocumentApp.getUi()
       *           .createMenu('My Menu')
       *           .addItem('My menu item', 'myFunction')
       *           .addSeparator()
       *           .addSubMenu(
       *               DocumentApp.getUi()
       *                   .createMenu('My sub-menu')
       *                   .addItem('One sub-menu item', 'mySecondFunction')
       *                   .addItem('Another sub-menu item', 'myThirdFunction'),
       *               )
       *           .addToUi();
       *     }
       *
       * Return:
       * - Ui — an instance of this document's user-interface environment
       *
       * https://developers.google.com/apps-script/reference/document/document-app#getUi()
       */
      getUi(): Base.Ui;

      /**
       * Returns the document with the specified ID. If the script is container-bound to the document, use getActiveDocument() instead.
       *
       *     // Open a document by ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('DOCUMENT_ID');
       *
       * Return:
       * - Document — The document instance.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-app#openById(String)
       * @param id The ID of the document to open.
       */
      openById(id: string): Document;

      /**
       * Opens and returns the document with the specified URL. If the script is container-bound to the document, use getActiveDocument() instead.
       *
       *     // Open a document by URL.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit',
       *     );
       *
       * Return:
       * - Document — the document instance
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-app#openByUrl(String)
       * @param url the URL of the document to open
       */
      openByUrl(url: string): Document;
    }
    /**
     * A document tab, containing rich text and elements such as tables and lists.
     *
     * Retrieve a document tab using Document.getTabs()[tabIndex].asDocumentTab().
     *
     *     // Get a specific document tab based on the tab ID.
     *     // TODO(developer): Replace the IDs with your own.
     *     const documentTab =
     *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
     */
    interface DocumentTab {

      /**
       * Adds a Bookmark at the given Position.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the tab body and adds a paragraph.
       *     const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
       *
       *     // Creates a position at the first character of the paragraph text.
       *     const position = documentTab.newPosition(paragraph.getChild(0), 0);
       *
       *     // Adds a bookmark at the first character of the paragraph text.
       *     const bookmark = documentTab.addBookmark(position);
       *
       *     // Logs the bookmark ID to the console.
       *     console.log(bookmark.getId());
       *
       * Return:
       * - Bookmark — The new bookmark.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#addBookmark(Position)
       * @param position The position of the new bookmark.
       */
      addBookmark(position: Position): Bookmark;

      /**
       * Adds a tab footer section, if none exists.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Adds a footer to the tab.
       *     const footer = documentTab.addFooter();
       *
       *     // Sets the footer text to 'This is a footer.'
       *     footer.setText('This is a footer');
       *
       * Return:
       * - FooterSection — The tab footer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#addFooter()
       */
      addFooter(): FooterSection;

      /**
       * Adds a tab header section, if none exists.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Adds a header to the tab.
       *     const header = documentTab.addHeader();
       *
       *     // Sets the header text to 'This is a header.'
       *     header.setText('This is a header');
       *
       * Return:
       * - HeaderSection — The tab header.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#addHeader()
       */
      addHeader(): HeaderSection;

      /**
       * Adds a NamedRange, which is a Range that has a name and ID to use for later retrieval. Names aren't necessarily unique, even across tabs; several different ranges in the same document can share the same name, much like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. After you add a NamedRange you can't modify it, you can only remove it.
       * Any script that accesses the tab can access a NamedRange. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       *     // Creates a named range that includes every table in a tab by its ID.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *     const rangeBuilder = documentTab.newRange();
       *     const tables = documentTab.getBody().getTables();
       *     for (let i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     documentTab.addNamedRange('Tab t.0 tables', rangeBuilder.build());
       *
       * Return:
       * - NamedRange — The NamedRange.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#addNamedRange(String,Range)
       * @param name The name for the range, which doesn't need to be unique; range names must be between 1-256 characters.
       * @param range The range of elements to associate with the name; the range can be a search result or manually constructed with newRange().
       */
      addNamedRange(name: string, range: Range): NamedRange;

      /**
       * Retrieves the tab's Body.
       * Tabs may contain different types of sections (for example, HeaderSection, FooterSection). The active section for a tab is the Body.
       * Element methods in DocumentTab delegate to the Body.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the tab body.
       *     const body = documentTab.getBody();
       *
       *     // Gets the body text and logs it to the console.
       *     console.log(body.getText());
       *
       * Return:
       * - Body — The tab's body section.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getBody()
       */
      getBody(): Body;

      /**
       * Gets the Bookmark with the given ID. This method returns null if no such Bookmark exists within this tab.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the bookmark by its ID.
       *     const bookmark = documentTab.getBookmark('id.xyz654321');
       *
       *     // If the bookmark exists within the tab, logs the character offset of its
       *     // position to the console. Otherwise, logs 'No bookmark exists with the given
       *     // ID.' to the console.
       *     if (bookmark) {
       *       console.log(bookmark.getPosition().getOffset());
       *     } else {
       *       console.log('No bookmark exists with the given ID.');
       *     }
       *
       * Return:
       * - Bookmark — The Bookmark with the given ID, or null if no such Bookmark exists within the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getBookmark(String)
       * @param id The ID for the Bookmark.
       */
      getBookmark(id: string): Bookmark;

      /**
       * Gets all Bookmark objects in the tab.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets all of the bookmarks in the tab.
       *     const bookmarks = documentTab.getBookmarks();
       *
       *     // Logs the number of bookmarks in the tab to the console.
       *     console.log(bookmarks.length);
       *
       * Return:
       * - Bookmark[] — An array of the Bookmark objects in the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getBookmarks()
       */
      getBookmarks(): Bookmark[];

      /**
       * Retrieves the tab's footer section, if one exists.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the text of the tab's footer and logs it to the console.
       *     console.log(documentTab.getFooter().getText());
       *
       * Return:
       * - FooterSection — The tab's footer.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getFooter()
       */
      getFooter(): FooterSection;

      /**
       * Retrieves all the Footnote elements in the tab's body.
       * Calls to getFootnotes cause an iteration over the tab's elements. For large tabs, avoid unnecessary calls to this method.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the first footnote.
       *     const footnote = documentTab.getFootnotes()[0];
       *
       *     // Logs footnote contents to the console.
       *     console.log(footnote.getFootnoteContents().getText());
       *
       * Return:
       * - Footnote[] — The tab's footnotes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getFootnotes()
       */
      getFootnotes(): Footnote[];

      /**
       * Retrieves the tab's header section, if one exists.
       *
       *     // Opens the Docs file and retrieves the tab by its IDs. If you created your
       *     // script from within a Google Docs file, you can use
       *     // DocumentApp.getActiveDocument().getActiveTab() instead.
       *     // TODO(developer): Replace the IDs with your own.
       *     const documentTab =
       *         DocumentApp.openById('123abc').getTab('123abc').asDocumentTab();
       *
       *     // Gets the text of the tab's header and logs it to the console.
       *     console.log(documentTab.getHeader().getText());
       *
       * Return:
       * - HeaderSection — The tab's header.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getHeader()
       */
      getHeader(): HeaderSection;

      /**
       * Gets the NamedRange with the given ID. This method returns null if no such NamedRange exists in the tab. Names are not necessarily unique, even across tabs; several different ranges in the same document may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.
       *
       * Return:
       * - NamedRange — The NamedRange with the given ID, or null if no such range exists in the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getNamedRangeById(String)
       * @param id The range's ID, which is unique within the tab.
       */
      getNamedRangeById(id: string): NamedRange;

      /**
       * Gets all NamedRange objects in the tab.
       * A NamedRange can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       * Return:
       * - NamedRange[] — An array of the NamedRange objects in the tab, possibly including multiple ranges with the same name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getNamedRanges()
       */
      getNamedRanges(): NamedRange[];

      /**
       * Gets all NamedRange objects in the tab with the given name. Names are not necessarily unique, even across tabs; several different ranges in the same document may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML.
       * A NamedRange can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.
       *
       * Return:
       * - NamedRange[] — An array of the NamedRange objects in the tab with the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#getNamedRanges(String)
       * @param name The range's name, which is not necessarily unique.
       */
      getNamedRanges(name: string): NamedRange[];

      /**
       * Creates a new Position, which is a reference to a location in the tab, relative to a specific element. The user's cursor is represented as a Position, among other uses.
       *
       *     // Append a paragraph, then place the user's cursor after the first word of the
       *     // new paragraph.
       *     // TODO(developer): Replace the IDs with your own.
       *     const doc = DocumentApp.openById('123abc');
       *     const documentTab = doc.getTab('123abc').asDocumentTab();
       *     const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
       *     const position = documentTab.newPosition(paragraph.getChild(0), 2);
       *     doc.setCursor(position);
       *
       * Return:
       * - Position — The new Position.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#newPosition(Element,Integer)
       * @param element The element that contains the newly created Position to; this must be either a Text element or a container element like Paragraph.
       * @param offset For Text elements, the number of characters before the Position; for other elements, the number of child elements before the Position within the same container element.
       */
      newPosition(element: Element, offset: Integer): Position;

      /**
       * Creates a builder used to construct Range objects from tab elements.
       *
       *     // Change the user's selection to a range that includes every table in the tab.
       *     // TODO(developer): Replace the IDs with your own.
       *     const doc = DocumentApp.openById('123abc');
       *     const documentTab = doc.getTab('123abc').asDocumentTab();
       *     const rangeBuilder = documentTab.newRange();
       *     const tables = documentTab.getBody().getTables();
       *     for (let i = 0; i < tables.length; i++) {
       *       rangeBuilder.addElement(tables[i]);
       *     }
       *     doc.setSelection(rangeBuilder.build());
       *
       * Return:
       * - RangeBuilder — The new builder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/document-tab#newRange()
       */
      newRange(): RangeBuilder;
    }
    /**
     * A generic element. Document contents are
     * represented as elements. For example, ListItem, Paragraph, and Table are
     * elements and inherit all of the methods defined by Element, such as getType().
     * Implementing classes
     *
     * NameBrief description
     *
     * BodyThe content of a tab in a Google Docs document.
     *
     * ContainerElementA generic element that may contain other elements.
     *
     * DateAn element representing a formatted date
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
     * PersonAn element representing a link to a person.
     *
     * RichLinkAn element representing a link to a Google resource, such as a Drive file or a YouTube video.
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
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Body — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asBody()
       */
      asBody(): Body;

      /**
       * Returns the current element as a Date.
       * When you know an element is a Date, use this method to set its type as a Date. Doing so lets autocomplete in the Apps Script editor show you the methods you can use with a Date.
       *
       * Return:
       * - Date — The current element with its type set as Date.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asDate()
       */
      asDate(): Date;

      /**
       * Returns the current element as an Equation.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Equation — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asEquation()
       */
      asEquation(): Equation;

      /**
       * Returns the current element as a EquationFunction.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - EquationFunction — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asEquationFunction()
       */
      asEquationFunction(): EquationFunction;

      /**
       * Returns the current element as a EquationFunctionArgumentSeparator.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - EquationFunctionArgumentSeparator — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asEquationFunctionArgumentSeparator()
       */
      asEquationFunctionArgumentSeparator(): EquationFunctionArgumentSeparator;

      /**
       * Returns the current element as a EquationSymbol.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - EquationSymbol — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asEquationSymbol()
       */
      asEquationSymbol(): EquationSymbol;

      /**
       * Returns the current element as a FooterSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - FooterSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asFooterSection()
       */
      asFooterSection(): FooterSection;

      /**
       * Returns the current element as a Footnote.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Footnote — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asFootnote()
       */
      asFootnote(): Footnote;

      /**
       * Returns the current element as a FootnoteSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asFootnoteSection()
       */
      asFootnoteSection(): FootnoteSection;

      /**
       * Returns the current element as a HeaderSection.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asHeaderSection()
       */
      asHeaderSection(): HeaderSection;

      /**
       * Returns the current element as a HorizontalRule.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - HorizontalRule — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asHorizontalRule()
       */
      asHorizontalRule(): HorizontalRule;

      /**
       * Returns the current element as a InlineDrawing.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - InlineDrawing — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asInlineDrawing()
       */
      asInlineDrawing(): InlineDrawing;

      /**
       * Returns the current element as a InlineImage.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - InlineImage — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asInlineImage()
       */
      asInlineImage(): InlineImage;

      /**
       * Returns the current element as a ListItem.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - ListItem — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asListItem()
       */
      asListItem(): ListItem;

      /**
       * Returns the current element as a PageBreak.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - PageBreak — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asPageBreak()
       */
      asPageBreak(): PageBreak;

      /**
       * Returns the current element as a Paragraph.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Paragraph — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asParagraph()
       */
      asParagraph(): Paragraph;

      /**
       * Returns the current element as a Person.
       * When you know an element is a Person, use this method to set its type as a person. Doing so lets autocomplete in the Apps Script editor show you the methods you can use with a person element.
       *
       * Return:
       * - Person — The current element with its type set as Person.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asPerson()
       */
      asPerson(): Person;

      /**
       * Returns the current element as a RichLink, for example, a link to a Google Sheets file.
       * When you know an element is a RichLink, use this method to set its type as a RichLink. Doing so lets autocomplete in the Apps Script editor show you the methods you can use with a RichLink.
       *
       * Return:
       * - RichLink — The current element with its type set as RichLink.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asRichLink()
       */
      asRichLink(): RichLink;

      /**
       * Returns the current element as a Table.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Table — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asTable()
       */
      asTable(): Table;

      /**
       * Returns the current element as a TableCell.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableCell — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asTableCell()
       */
      asTableCell(): TableCell;

      /**
       * Returns the current element as a TableOfContents.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableOfContents — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asTableOfContents()
       */
      asTableOfContents(): TableOfContents;

      /**
       * Returns the current element as a TableRow.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - TableRow — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asTableRow()
       */
      asTableRow(): TableRow;

      /**
       * Returns the current element as a Text.
       * Use this method to aid auto-complete whenever a given element is known to be of a specific type.
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#asText()
       */
      asText(): Text;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Element — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#copy()
       */
      copy(): Element;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Element — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#merge()
       */
      merge(): Element;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Element — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#removeFromParent()
       */
      removeFromParent(): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Element — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/element#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Element;
    }
    /**
     * An enumeration of all the element types.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.ElementType.BODY_SECTION.
     *
     * Use the ElementType enumeration to check the type of a given element, for instance:
     *
     *     const documentTab =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
     *     const firstChild = documentTab.getBody().getChild(0);
     *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
     *       // It's a paragraph, apply a paragraph heading.
     *       firstChild.asParagraph().setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *     }
     */
    enum ElementType { BODY_SECTION, COMMENT_SECTION, DATE, EQUATION, EQUATION_FUNCTION, EQUATION_FUNCTION_ARGUMENT_SEPARATOR, EQUATION_SYMBOL, RICH_LINK, FOOTER_SECTION, FOOTNOTE, FOOTNOTE_SECTION, HEADER_SECTION, HORIZONTAL_RULE, INLINE_DRAWING, INLINE_IMAGE, LIST_ITEM, PAGE_BREAK, PARAGRAPH, PERSON, TABLE, TABLE_CELL, TABLE_OF_CONTENTS, TABLE_ROW, TEXT, UNSUPPORTED }
    /**
     * An element representing a mathematical expression. An Equation may contain EquationFunction, EquationSymbol, and Text elements. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface Equation extends Element {

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - Equation — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/equation#clear()
       */
      clear(): Equation;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Equation — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#copy()
       */
      copy(): Equation;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/equation#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Equation — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#merge()
       */
      merge(): Equation;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Equation — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#removeFromParent()
       */
      removeFromParent(): Equation;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Equation — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Equation;

      /**
       * Sets the link url.
       *
       * Return:
       * - Equation — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Equation;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Equation — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Equation;
    }
    /**
     * An element representing a function in a mathematical Equation. An EquationFunction may contain EquationFunction, EquationFunctionArgumentSeparator, EquationSymbol, and Text elements. For more
     * information on document structure, see the guide to extending Google Docs.
     */
    interface EquationFunction extends Element {

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - EquationFunction — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#clear()
       */
      clear(): EquationFunction;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - EquationFunction — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#copy()
       */
      copy(): EquationFunction;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the code corresponding to the equation function.
       *
       * Return:
       * - String — the function code
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getCode()
       */
      getCode(): string;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - EquationFunction — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#merge()
       */
      merge(): EquationFunction;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - EquationFunction — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#removeFromParent()
       */
      removeFromParent(): EquationFunction;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - EquationFunction — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): EquationFunction;

      /**
       * Sets the link url.
       *
       * Return:
       * - EquationFunction — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): EquationFunction;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - EquationFunction — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
    interface EquationFunctionArgumentSeparator extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - EquationFunctionArgumentSeparator — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#copy()
       */
      copy(): EquationFunctionArgumentSeparator;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - EquationFunctionArgumentSeparator — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#merge()
       */
      merge(): EquationFunctionArgumentSeparator;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - EquationFunctionArgumentSeparator — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#removeFromParent()
       */
      removeFromParent(): EquationFunctionArgumentSeparator;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - EquationFunctionArgumentSeparator — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-function-argument-separator#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): EquationFunctionArgumentSeparator;
    }
    /**
     * An element representing a symbol in a mathematical Equation. An EquationSymbol
     * cannot contain any other element. For more information on document structure, see the guide to extending Google Docs.
     */
    interface EquationSymbol extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - EquationSymbol — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#copy()
       */
      copy(): EquationSymbol;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the code corresponding to the equation symbol.
       *
       * Return:
       * - String — the symbol code
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getCode()
       */
      getCode(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - EquationSymbol — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#merge()
       */
      merge(): EquationSymbol;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - EquationSymbol — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#removeFromParent()
       */
      removeFromParent(): EquationSymbol;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - EquationSymbol — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/equation-symbol#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): EquationSymbol;
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
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Insert a paragraph at the start of the document.
     *     body.insertParagraph(0, 'Hello, Apps Script!');
     *
     *     // Set the tab font to Calibri.
     *     body.editAsText().setFontFamily(DocumentApp.FontFamily.CALIBRI);
     *
     *     // Set the first paragraph font to Arial.
     *     body.getParagraphs()[0].setFontFamily(DocumentApp.FontFamily.ARIAL);
     *
     *     // Set "Apps Script" to Comic Sans MS.
     *     const text = 'Apps Script';
     *     const a = body.getText().indexOf(text);
     *     const b = a + text.length - 1;
     *     body.editAsText().setFontFamily(a, b, DocumentApp.FontFamily.COMIC_SANS_MS);
     */
    enum FontFamily { AMARANTH, ARIAL, ARIAL_BLACK, ARIAL_NARROW, ARVO, CALIBRI, CAMBRIA, COMIC_SANS_MS, CONSOLAS, CORSIVA, COURIER_NEW, DANCING_SCRIPT, DROID_SANS, DROID_SERIF, GARAMOND, GEORGIA, GLORIA_HALLELUJAH, GREAT_VIBES, LOBSTER, MERRIWEATHER, PACIFICO, PHILOSOPHER, POIRET_ONE, QUATTROCENTO, ROBOTO, SHADOWS_INTO_LIGHT, SYNCOPATE, TAHOMA, TIMES_NEW_ROMAN, TREBUCHET_MS, UBUNTU, VERDANA }
    /**
     * An element representing a footer section. A Document typically contains at most one FooterSection. The FooterSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FooterSection extends Element {

      /**
       * Creates and appends a new HorizontalRule.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendImage(BlobSource)
       * @param image The image data.
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * The InlineImage will be contained in a new Paragraph.
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendImage(InlineImage)
       * @param image The image data.
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       *
       * Return:
       * - ListItem — The appended list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendListItem(ListItem)
       * @param listItem The list item to append.
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       * Consecutive list items are added as part of the same list.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendListItem(String)
       * @param text The list item's text contents.
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       *
       * Return:
       * - Paragraph — The appended paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendParagraph(Paragraph)
       * @param paragraph The paragraph to append.
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendParagraph(String)
       * @param text The paragraph's text contents.
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable(String)
       * @param cells The text contents of the table cells to add to the new table.
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       * Use this version of appendTable when appending a copy of an existing Table. This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#appendTable(Table)
       * @param table The table to append.
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - FooterSection — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#clear()
       */
      clear(): FooterSection;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - FooterSection — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#copy()
       */
      copy(): FooterSection;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves all the InlineImages contained in the section.
       *
       * Return:
       * - InlineImage[] — The section images.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       *
       * Return:
       * - ListItem[] — The section list items.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       *
       * Return:
       * - Paragraph[] — The section paragraphs.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       *
       * Return:
       * - Table[] — The section tables.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertHorizontalRule(Integer)
       * @param childIndex The index at which to insert the element.
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified index.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertImage(Integer,BlobSource)
       * @param childIndex The index at which to insert the element.
       * @param image The image data.
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertImage(Integer,InlineImage)
       * @param childIndex The index at which to insert the element.
       * @param image The image to insert.
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       *
       * Return:
       * - ListItem — The inserted list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertListItem(Integer,ListItem)
       * @param childIndex The index at which to insert.
       * @param listItem The list item to insert.
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified text contents.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertListItem(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The list item's text contents.
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — The inserted paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertParagraph(Integer,Paragraph)
       * @param childIndex The index at which to insert.
       * @param paragraph The paragraph to insert.
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertParagraph(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The paragraph's text contents.
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer)
       * @param childIndex The index at which to insert.
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer,String)
       * @param childIndex The index at which to insert.
       * @param cells The text contents of the table cells to add to the new table.
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       *
       * Return:
       * - Table — The inserted table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#insertTable(Integer,Table)
       * @param childIndex The index at which to insert.
       * @param table The table to insert.
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - FooterSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#removeChild(Element)
       * @param child The child element to remove.
       */
      removeChild(child: Element): FooterSection;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - FooterSection — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#removeFromParent()
       */
      removeFromParent(): FooterSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - FooterSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): FooterSection;

      /**
       * Sets the contents as plain text.
       * Note: existing contents are cleared.
       *
       * Return:
       * - FooterSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footer-section#setText(String)
       * @param text The new text contents.
       */
      setText(text: string): FooterSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - FooterSection — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
    interface Footnote extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Footnote — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#copy()
       */
      copy(): Footnote;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the contents of the footnote element.
       *
       * Return:
       * - FootnoteSection — the footnote section
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getFootnoteContents()
       */
      getFootnoteContents(): FootnoteSection;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Footnote — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#removeFromParent()
       */
      removeFromParent(): Footnote;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Footnote — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Footnote;
    }
    /**
     * An element representing a footnote section. A FootnoteSection contains the text that
     * corresponds to a Footnote. The FootnoteSection may contain ListItem or
     * Paragraph elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FootnoteSection extends Element {

      /**
       * Appends the given Paragraph.
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       *
       * Return:
       * - Paragraph — The appended paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#appendParagraph(Paragraph)
       * @param paragraph The paragraph to append.
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#appendParagraph(String)
       * @param text The paragraph's text contents.
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#clear()
       */
      clear(): FootnoteSection;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - FootnoteSection — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#copy()
       */
      copy(): FootnoteSection;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       *
       * Return:
       * - Paragraph[] — The section paragraphs.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#getType()
       */
      getType(): ElementType;

      /**
       * Inserts the given Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — The inserted paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#insertParagraph(Integer,Paragraph)
       * @param childIndex The index at which to insert.
       * @param paragraph The paragraph to insert.
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#insertParagraph(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The paragraph's text contents.
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#removeChild(Element)
       * @param child The child element to remove.
       */
      removeChild(child: Element): FootnoteSection;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - FootnoteSection — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#removeFromParent()
       */
      removeFromParent(): FootnoteSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): FootnoteSection;

      /**
       * Sets the contents as plain text.
       * Note: existing contents are cleared.
       *
       * Return:
       * - FootnoteSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/footnote-section#setText(String)
       * @param text The new text contents.
       */
      setText(text: string): FootnoteSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - FootnoteSection — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.GlyphType.BULLET.
     *
     * Use the GlyphType enumeration to set the bullet type for list items.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Insert at list item, with the default nesting level of zero.
     *     body.appendListItem('Item 1');
     *
     *     // Append a second list item, with a nesting level of one, indented one inch.
     *     // The two items have different bullet glyphs.
     *     body.appendListItem('Item 2')
     *         .setNestingLevel(1)
     *         .setIndentStart(72)
     *         .setGlyphType(DocumentApp.GlyphType.SQUARE_BULLET);
     */
    enum GlyphType { BULLET, HOLLOW_BULLET, SQUARE_BULLET, NUMBER, LATIN_UPPER, LATIN_LOWER, ROMAN_UPPER, ROMAN_LOWER }
    /**
     * An element representing a header section. A Document typically contains at most one HeaderSection. The HeaderSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface HeaderSection extends Element {

      /**
       * Creates and appends a new HorizontalRule.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendImage(BlobSource)
       * @param image The image data.
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * The InlineImage will be contained in a new Paragraph.
       * Use this version of appendImage when appending a copy of an existing InlineImage.
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendImage(InlineImage)
       * @param image The image data.
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       * Use this version of appendListItem when appending a copy of an existing ListItem.
       *
       * Return:
       * - ListItem — The appended list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendListItem(ListItem)
       * @param listItem The list item to append.
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem containing the specified text contents.
       * Consecutive list items are added as part of the same list.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendListItem(String)
       * @param text The list item's text contents.
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       * Use this version of appendParagraph when appending a copy of an existing Paragraph.
       *
       * Return:
       * - Paragraph — The appended paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendParagraph(Paragraph)
       * @param paragraph The paragraph to append.
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendParagraph(String)
       * @param text The paragraph's text contents.
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing a TableCell for each specified string value.
       * This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable(String)
       * @param cells The text contents of the table cells to add to the new table.
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       * Use this version of appendTable when appending a copy of an existing Table. This method will also append an empty paragraph after the table, since Google Docs documents cannot end with a table.
       *
       * Return:
       * - Table — The appended table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#appendTable(Table)
       * @param table The table to append.
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/header-section#clear()
       */
      clear(): HeaderSection;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - HeaderSection — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#copy()
       */
      copy(): HeaderSection;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/header-section#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves all the InlineImages contained in the section.
       *
       * Return:
       * - InlineImage[] — The section images.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getImages()
       */
      getImages(): InlineImage[];

      /**
       * Retrieves all the ListItems contained in the section.
       *
       * Return:
       * - ListItem[] — The section list items.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves all the Paragraphs contained in the section (including ListItems).
       *
       * Return:
       * - Paragraph[] — The section paragraphs.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getParagraphs()
       */
      getParagraphs(): Paragraph[];

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves all the Tables contained in the section.
       *
       * Return:
       * - Table[] — The section tables.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getTables()
       */
      getTables(): Table[];

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertHorizontalRule(Integer)
       * @param childIndex The index at which to insert the element.
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified index.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertImage(Integer,BlobSource)
       * @param childIndex The index at which to insert the element.
       * @param image The image data.
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — The inserted inline image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertImage(Integer,InlineImage)
       * @param childIndex The index at which to insert the element.
       * @param image The image to insert.
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       *
       * Return:
       * - ListItem — The inserted list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertListItem(Integer,ListItem)
       * @param childIndex The index at which to insert.
       * @param listItem The list item to insert.
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index, containing the specified text contents.
       *
       * Return:
       * - ListItem — The new list item.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertListItem(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The list item's text contents.
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — The inserted paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertParagraph(Integer,Paragraph)
       * @param childIndex The index at which to insert.
       * @param paragraph The paragraph to insert.
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index, containing the specified text contents.
       *
       * Return:
       * - Paragraph — The new paragraph.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertParagraph(Integer,String)
       * @param childIndex The index at which to insert.
       * @param text The paragraph's text contents.
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer)
       * @param childIndex The index at which to insert.
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       *
       * Return:
       * - Table — The new table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer,String)
       * @param childIndex The index at which to insert.
       * @param cells The text contents of the table cells to add to the new table.
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       *
       * Return:
       * - Table — The inserted table.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#insertTable(Integer,Table)
       * @param childIndex The index at which to insert.
       * @param table The table to insert.
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#removeChild(Element)
       * @param child The child element to remove.
       */
      removeChild(child: Element): HeaderSection;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - HeaderSection — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#removeFromParent()
       */
      removeFromParent(): HeaderSection;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): HeaderSection;

      /**
       * Sets the contents as plain text.
       * Note: existing contents are cleared.
       *
       * Return:
       * - HeaderSection — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/header-section#setText(String)
       * @param text The new text contents.
       */
      setText(text: string): HeaderSection;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - HeaderSection — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.HorizontalAlignment.LEFT.
     *
     * Use the HorizontalAlignment enumeration to manipulate the alignment of Paragraph contents.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Insert a paragraph and a table at the start of the tab.
     *     const par1 = body.insertParagraph(0, 'Center');
     *     const table = body.insertTable(1, [['Left', 'Right']]);
     *     const par2 = table.getCell(0, 0).getChild(0).asParagraph();
     *     const par3 = table.getCell(0, 0).getChild(0).asParagraph();
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
    interface HorizontalRule extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - HorizontalRule — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#copy()
       */
      copy(): HorizontalRule;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - HorizontalRule — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#removeFromParent()
       */
      removeFromParent(): HorizontalRule;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - HorizontalRule — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/horizontal-rule#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): HorizontalRule;
    }
    /**
     * An element representing an embedded drawing. An InlineDrawing can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineDrawing cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineDrawing extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - InlineDrawing — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#copy()
       */
      copy(): InlineDrawing;

      /**
       * Returns the drawing's alternate description.
       *
       * Return:
       * - String — The alternate description, or null if the element does not have an alternate description.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAltDescription()
       */
      getAltDescription(): string;

      /**
       * Returns the drawing's alternate title.
       *
       * Return:
       * - String — The alternate title, or null if the element does not have an alternate title.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAltTitle()
       */
      getAltTitle(): string;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - InlineDrawing — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#merge()
       */
      merge(): InlineDrawing;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - InlineDrawing — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#removeFromParent()
       */
      removeFromParent(): InlineDrawing;

      /**
       * Sets the drawing's alternate description. If the given description is null, sets the description to the empty string.
       *
       * Return:
       * - InlineDrawing — The current object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAltDescription(String)
       * @param description The alternate description.
       */
      setAltDescription(description: string): InlineDrawing;

      /**
       * Sets the drawing's alternate title. If the given title is null, sets the title to the empty string.
       *
       * Return:
       * - InlineDrawing — The current object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAltTitle(String)
       * @param title The alternate title.
       */
      setAltTitle(title: string): InlineDrawing;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - InlineDrawing — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-drawing#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): InlineDrawing;
    }
    /**
     * An element representing an embedded image. An InlineImage can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineImage cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineImage extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - InlineImage — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#copy()
       */
      copy(): InlineImage;

      /**
       * Returns the image's alternate description.
       *
       * Return:
       * - String — The alternate description, or null if the element does not have an alternate description.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getAltDescription()
       */
      getAltDescription(): string;

      /**
       * Returns the image's alternate title.
       *
       * Return:
       * - String — The alternate title, or null if the element does not have an alternate title.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getAltTitle()
       */
      getAltTitle(): string;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getAttributes()
       */
      getAttributes(): any;

      /**
       * Return the data inside this object as a blob.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the image's height, in pixels.
       *
       * Return:
       * - Integer — the image's height, in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getHeight()
       */
      getHeight(): Integer;

      /**
       * Retrieves the link URL.
       *
       * Return:
       * - String — The link URL, or null if the element contains multiple values for this attribute.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getType()
       */
      getType(): ElementType;

      /**
       * Retrieves the image's width, in pixels.
       *
       * Return:
       * - Integer — the image's width, in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#getWidth()
       */
      getWidth(): Integer;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - InlineImage — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#merge()
       */
      merge(): InlineImage;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - InlineImage — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#removeFromParent()
       */
      removeFromParent(): InlineImage;

      /**
       * Sets the image's alternate description. If the given title is null, sets the description to the empty string.
       *
       * Return:
       * - InlineImage — The current object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#setAltDescription(String)
       * @param description The alternate description.
       */
      setAltDescription(description: string): InlineImage;

      /**
       * Sets the image's alternate title. If the given title is null, sets the title to the empty string.
       *
       * Return:
       * - InlineImage — The current object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#setAltTitle(String)
       * @param title The alternate title.
       */
      setAltTitle(title: string): InlineImage;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - InlineImage — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): InlineImage;

      /**
       * Sets the image's height, in pixels.
       *
       * Return:
       * - InlineImage — the current object
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#setHeight(Integer)
       * @param height the image's height, in pixels
       */
      setHeight(height: Integer): InlineImage;

      /**
       * Sets the link URL. When the given URL is null or an empty string, this method creates a link with an empty URL that may display as "Invalid link" in Google Docs.
       *
       * Return:
       * - InlineImage — The current object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/inline-image#setLinkUrl(String)
       * @param url The link URL.
       */
      setLinkUrl(url: string): InlineImage;

      /**
       * Sets the image's width, in pixels.
       *
       * Return:
       * - InlineImage — the current object
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     * The ListItems for a given list are not required to be adjacent in the tab or even have
     * the same parent element. Two items belonging to the same list may exist anywhere in the tab while
     * maintaining consecutive numbering, as the following example illustrates:
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append a new list item to the body.
     *     const item1 = body.appendListItem('Item 1');
     *
     *     // Log the new list item's list ID.
     *     Logger.log(item1.getListId());
     *
     *     // Append a table after the list item.
     *     body.appendTable([['Cell 1', 'Cell 2']]);
     *
     *     // Append a second list item with the same list ID. The two items are treated as
     *     // the same list, despite not being consecutive.
     *     const item2 = body.appendListItem('Item 2');
     *     item2.setListId(item1);
     */
    interface ListItem extends Element {

      /**
       * Creates and inserts a new PositionedImage from the specified image blob.
       *
       * Return:
       * - PositionedImage — the new positioned image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#addPositionedImage(BlobSource)
       * @param image the image data
       */
      addPositionedImage(image: Base.BlobSource): PositionedImage;

      /**
       * Creates and appends a new HorizontalRule.
       *
       * Return:
       * - HorizontalRule — the new horizontal rule
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       * Return:
       * - InlineImage — the appended image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendInlineImage(BlobSource)
       * @param image the image data
       */
      appendInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       * Return:
       * - InlineImage — the appended image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendInlineImage(InlineImage)
       * @param image the image data
       */
      appendInlineImage(image: InlineImage): InlineImage;

      /**
       * Creates and appends a new PageBreak.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the new page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the appended page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendPageBreak(PageBreak)
       * @param pageBreak the page break to append
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Creates and appends a new Text element with the specified contents.
       *
       * Return:
       * - Text — the new text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendText(String)
       * @param text the text contents
       */
      appendText(text: string): Text;

      /**
       * Appends the given Text element.
       *
       * Return:
       * - Text — the appended text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#appendText(Text)
       * @param text the text element to append
       */
      appendText(text: Text): Text;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - ListItem — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/list-item#clear()
       */
      clear(): ListItem;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - ListItem — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#copy()
       */
      copy(): ListItem;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/list-item#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the HorizontalAlignment.
       *
       * Return:
       * - HorizontalAlignment — the alignment
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getAlignment()
       */
      getAlignment(): HorizontalAlignment;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the list item's GlyphType.
       *
       * Return:
       * - GlyphType — the glyph type
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getGlyphType()
       */
      getGlyphType(): GlyphType;

      /**
       * Retrieves the ParagraphHeading.
       *
       * Return:
       * - ParagraphHeading — the heading
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getHeading()
       */
      getHeading(): ParagraphHeading;

      /**
       * Retrieves the end indentation, in points.
       *
       * Return:
       * - Number — the end indentation, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentEnd()
       */
      getIndentEnd(): number;

      /**
       * Retrieves the first line indentation, in points.
       *
       * Return:
       * - Number — the first line indentation, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentFirstLine()
       */
      getIndentFirstLine(): number;

      /**
       * Retrieves the start indentation.
       *
       * Return:
       * - Number — the start indentation
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getIndentStart()
       */
      getIndentStart(): number;

      /**
       * Retrieves the line spacing, in points.
       *
       * Return:
       * - Number — the line spacing, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getLineSpacing()
       */
      getLineSpacing(): number;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the list ID.
       *
       * Return:
       * - String — the list ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getListId()
       */
      getListId(): string;

      /**
       * Retrieves the list item's nesting level.
       * By default, list items have a nesting level of zero. The nesting level determines the glyph that is used by the list item.
       *
       * Return:
       * - Integer — the nesting level
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getNestingLevel()
       */
      getNestingLevel(): Integer;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Gets a PositionedImage by the image's ID.
       *
       * Return:
       * - PositionedImage — the positioned image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getPositionedImage(String)
       * @param id the image id
       */
      getPositionedImage(id: string): PositionedImage;

      /**
       * Gets all PositionedImage objects anchored to the paragraph.
       *
       * Return:
       * - PositionedImage[] — a list of positioned images
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getPositionedImages()
       */
      getPositionedImages(): PositionedImage[];

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the spacing after the element, in points.
       *
       * Return:
       * - Number — the spacing after the element, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getSpacingAfter()
       */
      getSpacingAfter(): number;

      /**
       * Retrieves the spacing before the element, in points.
       *
       * Return:
       * - Number — the spacing before the element, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getSpacingBefore()
       */
      getSpacingBefore(): number;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a HorizontalRule at the specified index.
       *
       * Return:
       * - HorizontalRule — the new horizontal rule element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts a new InlineImage from the specified image blob, at the specified index.
       *
       * Return:
       * - InlineImage — the inserted inline image element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertInlineImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       * Return:
       * - InlineImage — the inserted inline image element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertInlineImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the new page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertPageBreak(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the inserted page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertPageBreak(Integer,PageBreak)
       * @param childIndex the index at which to insert the element
       * @param pageBreak the p[age break to insert
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Creates and inserts a new text element at the specified index.
       *
       * Return:
       * - Text — the new text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertText(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertText(childIndex: Integer, text: string): Text;

      /**
       * Inserts the given Text element at the specified index, with the specified text contents.
       *
       * Return:
       * - Text — the inserted text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#insertText(Integer,Text)
       * @param childIndex the index at which to insert the element
       * @param text the text element to insert
       */
      insertText(childIndex: Integer, text: Text): Text;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the left-to-right setting.
       *
       * Return:
       * - Boolean — the left-to-right setting
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#isLeftToRight()
       */
      isLeftToRight(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - ListItem — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#merge()
       */
      merge(): ListItem;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): ListItem;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - ListItem — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#removeFromParent()
       */
      removeFromParent(): ListItem;

      /**
       * Removes a PositionedImage by the image's ID.
       *
       * Return:
       * - Boolean — whether or not the specified image was removed
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#removePositionedImage(String)
       * @param id
       */
      removePositionedImage(id: string): boolean;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the HorizontalAlignment.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setAlignment(HorizontalAlignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: HorizontalAlignment): ListItem;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - ListItem — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): ListItem;

      /**
       * Sets the list item's GlyphType.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setGlyphType(GlyphType)
       * @param glyphType the glyph type
       */
      setGlyphType(glyphType: GlyphType): ListItem;

      /**
       * Sets the ParagraphHeading.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setHeading(ParagraphHeading)
       * @param heading the heading
       */
      setHeading(heading: ParagraphHeading): ListItem;

      /**
       * Sets the end indentation, in points.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentEnd(Number)
       * @param indentEnd the end indentation, in points
       */
      setIndentEnd(indentEnd: number): ListItem;

      /**
       * Sets the first line indentation, in points.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentFirstLine(Number)
       * @param indentFirstLine the first line indentation, in points
       */
      setIndentFirstLine(indentFirstLine: number): ListItem;

      /**
       * Sets the start indentation, in points.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setIndentStart(Number)
       * @param indentStart the start indentation, in points
       */
      setIndentStart(indentStart: number): ListItem;

      /**
       * Sets the left-to-right setting.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setLeftToRight(Boolean)
       * @param leftToRight the left-to-right setting
       */
      setLeftToRight(leftToRight: boolean): ListItem;

      /**
       * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setLineSpacing(Number)
       * @param multiplier the number of lines
       */
      setLineSpacing(multiplier: number): ListItem;

      /**
       * Sets the link url.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): ListItem;

      /**
       * Sets the list ID.
       * The list ID is set to the same value for the specified ListItem. The two ListItems will be treated as members of the same list.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setListId(ListItem)
       * @param listItem the list item whose list ID to use
       */
      setListId(listItem: ListItem): ListItem;

      /**
       * Sets the list item's nesting level.
       * By default, list items have a nesting level of zero. The nesting level determines the glyph that is used by the list item.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setNestingLevel(Integer)
       * @param nestingLevel the nesting level
       */
      setNestingLevel(nestingLevel: Integer): ListItem;

      /**
       * Sets the spacing after the element, in points.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setSpacingAfter(Number)
       * @param spacingAfter the spacing after the element, in points
       */
      setSpacingAfter(spacingAfter: number): ListItem;

      /**
       * Sets the spacing before the element, in points.
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setSpacingBefore(Number)
       * @param spacingBefore the spacing before the element, in points
       */
      setSpacingBefore(spacingBefore: number): ListItem;

      /**
       * Sets the contents of the list item as text.
       * Note: existing contents are cleared.
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setText(String)
       * @param text the new text contents
       */
      setText(text: string): void;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - ListItem — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/list-item#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): ListItem;
    }
    /**
     * A Range that has a name and ID to allow later retrieval. Names are not
     * necessarily unique; several different ranges in the same tab may share the same name, much like a
     * class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML. Once a NamedRange has been added to a tab, it cannot be modified, only removed.
     *
     * A NamedRange can be accessed by any script that accesses the tab. To avoid unintended
     * conflicts between scripts, consider prefixing range names with a unique string.
     *
     *     // Create a named range that includes every table in the active tab.
     *     const documentTab =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
     *     const rangeBuilder = documentTab.newRange();
     *     const tables = documentTab.getBody().getTables();
     *     for (let i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     documentTab.addNamedRange('myUniquePrefix-tables', rangeBuilder.build());
     */
    interface NamedRange {

      /**
       * Gets the ID of this NamedRange. The ID is unique within the tab.
       *
       * Return:
       * - String — The range's ID, which is unique within the tab.
       *
       * https://developers.google.com/apps-script/reference/document/named-range#getId()
       */
      getId(): string;

      /**
       * Gets the name of this NamedRange. The name is not necessarily unique.
       *
       * Return:
       * - String — The range's name, which is not necessarily unique.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/named-range#getName()
       */
      getName(): string;

      /**
       * Gets the range of elements associated with this NamedRange.
       *
       * Return:
       * - Range — The range of elements associated with the name and ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/named-range#getRange()
       */
      getRange(): Range;

      /**
       * Removes this NamedRange from the tab. This method doesn't delete the contents of the range; it merely the removes the reference. Calling this method on a NamedRange that has already been removed has no effect.
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
    interface PageBreak extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - PageBreak — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#copy()
       */
      copy(): PageBreak;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - PageBreak — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#removeFromParent()
       */
      removeFromParent(): PageBreak;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - PageBreak — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/page-break#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): PageBreak;
    }
    /**
     * An element representing a paragraph. A Paragraph may contain Equation, Footnote, HorizontalRule, InlineDrawing, InlineImage, PageBreak,
     * and Text elements. For more information on document structure, see the guide to extending Google Docs.
     *
     * Paragraphs may not contain new-line characters. New-line characters ("\n") are
     * converted to line-break characters ("\r").
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append a tab header paragraph.
     *     const header = body.appendParagraph('A Document');
     *     header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a section header paragraph.
     *     const section = body.appendParagraph('Section 1');
     *     section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a regular paragraph.
     *     body.appendParagraph('This is a typical paragraph.');
     */
    interface Paragraph extends Element {

      /**
       * Creates and inserts a new PositionedImage from the specified image blob.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Fetches the specified image URL.
       *     const image = UrlFetchApp.fetch(
       *         'https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-24dp/logo_apps_script_color_1x_web_24dp.png',
       *     );
       *
       *     // Adds the image to the tab, anchored to the first paragraph.
       *     paragraph.addPositionedImage(image);
       *
       * Return:
       * - PositionedImage — The new positioned image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#addPositionedImage(BlobSource)
       * @param image The image data.
       */
      addPositionedImage(image: Base.BlobSource): PositionedImage;

      /**
       * Creates and appends a new HorizontalRule.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Adds a horizontal line under the first paragraph.
       *     paragraph.appendHorizontalRule();
       *
       * Return:
       * - HorizontalRule — The new horizontal rule.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Fetches the image from the specified image URL.
       *     const image = UrlFetchApp.fetch(
       *         'https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-96dp/logo_apps_script_color_1x_web_96dp.png',
       *     );
       *
       *     // Adds the image to the first paragraph.
       *     paragraph.appendInlineImage(image);
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendInlineImage(BlobSource)
       * @param image The image data.
       */
      appendInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Makes a copy of the first image in the body.
       *     const image = body.getImages()[0].copy();
       *
       *     // Adds the image to the first paragraph.
       *     paragraph.appendInlineImage(image);
       *
       * Return:
       * - InlineImage — The appended image.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendInlineImage(InlineImage)
       * @param image The image data.
       */
      appendInlineImage(image: InlineImage): InlineImage;

      /**
       * Creates and appends a new PageBreak.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Adds a page break after the first paragraph.
       *     paragraph.appendPageBreak();
       *
       * Return:
       * - PageBreak — The new page break element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendPageBreak()
       */
      appendPageBreak(): PageBreak;

      /**
       * Appends the given PageBreak.
       * Note: PageBreaks can't be contained within TableCells. If the current element exists in a table cell, the script throws an exception.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Adds a page break after the first paragraph.
       *     const pageBreak = paragraph.appendPageBreak();
       *
       *     // Makes a copy of the page break.
       *     const newPageBreak = pageBreak.copy();
       *
       *     // Adds the copied page break to the paragraph.
       *     paragraph.appendPageBreak(newPageBreak);
       *
       * Return:
       * - PageBreak — The appended page break element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendPageBreak(PageBreak)
       * @param pageBreak The page break to append.
       */
      appendPageBreak(pageBreak: PageBreak): PageBreak;

      /**
       * Creates and appends a new Text element with the specified contents.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Adds a string to the paragraph.
       *     paragraph.appendText('This is a new sentence.');
       *
       * Return:
       * - Text — The new text element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendText(String)
       * @param text The text contents.
       */
      appendText(text: string): Text;

      /**
       * Appends the given Text element.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the text from the first paragraph in the body.
       *     const paragraph1 = body.getParagraphs()[0];
       *     const text = paragraph1.getText();
       *
       *     // Gets the third paragraph in the body.
       *     const paragraph3 = body.getParagraphs()[2];
       *
       *     // Adds the text from the first paragraph to the third paragraph.
       *     paragraph3.appendText(text);
       *
       * Return:
       * - Text — The appended text element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#appendText(Text)
       * @param text The text element to append.
       */
      appendText(text: Text): Text;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - Paragraph — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#clear()
       */
      clear(): Paragraph;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Paragraph — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#copy()
       */
      copy(): Paragraph;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the HorizontalAlignment.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first paragraph from the body.
       *     const paragraph = body.getParagraphs()[0];
       *
       *     // Sets the horizontal alignment to left for the first paragraph.
       *     paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
       *
       *     // Gets the horizontal alignment of the first paragraph and logs it to the
       *     // console.
       *     console.log(paragraph.getAlignment().toString());
       *
       * Return:
       * - HorizontalAlignment — The alignment.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getAlignment()
       */
      getAlignment(): HorizontalAlignment;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the ParagraphHeading.
       *
       *     // Opens the Docs file by its ID. If you created your script from within
       *     // a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Adds a paragraph to the body.
       *     const paragraph = body.appendParagraph('Title heading');
       *
       *     // Sets the paragraph heading style to 'Title.'
       *     paragraph.setHeading(DocumentApp.ParagraphHeading.TITLE);
       *
       *     // Gets the heading style and logs it to the console.
       *     console.log(paragraph.getHeading().toString());
       *
       * Return:
       * - ParagraphHeading — The heading.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getHeading()
       */
      getHeading(): ParagraphHeading;

      /**
       * Retrieves the end indentation, in points.
       *
       * Return:
       * - Number — the end indentation, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentEnd()
       */
      getIndentEnd(): number;

      /**
       * Retrieves the first line indentation, in points.
       *
       * Return:
       * - Number — the first line indentation, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentFirstLine()
       */
      getIndentFirstLine(): number;

      /**
       * Retrieves the start indentation.
       *
       * Return:
       * - Number — the start indentation
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getIndentStart()
       */
      getIndentStart(): number;

      /**
       * Retrieves the line spacing, in points.
       *
       * Return:
       * - Number — the line spacing, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getLineSpacing()
       */
      getLineSpacing(): number;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Gets a PositionedImage by the image's ID.
       *
       * Return:
       * - PositionedImage — the positioned image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getPositionedImage(String)
       * @param id the image id
       */
      getPositionedImage(id: string): PositionedImage;

      /**
       * Gets all PositionedImage objects anchored to the paragraph.
       *
       * Return:
       * - PositionedImage[] — a list of positioned images
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getPositionedImages()
       */
      getPositionedImages(): PositionedImage[];

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the spacing after the element, in points.
       *
       * Return:
       * - Number — the spacing after the element, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getSpacingAfter()
       */
      getSpacingAfter(): number;

      /**
       * Retrieves the spacing before the element, in points.
       *
       * Return:
       * - Number — the spacing before the element, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getSpacingBefore()
       */
      getSpacingBefore(): number;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a HorizontalRule at the specified index.
       *
       * Return:
       * - HorizontalRule — the new horizontal rule element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts a new InlineImage from the specified image blob, at the specified index.
       *
       * Return:
       * - InlineImage — the inserted inline image element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertInlineImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       *
       * Return:
       * - InlineImage — the inserted inline image element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertInlineImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Creates and inserts a new PageBreak at the specified index.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the new page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertPageBreak(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertPageBreak(childIndex: Integer): PageBreak;

      /**
       * Inserts the given PageBreak at the specified index.
       * Note: PageBreaks may not be contained within TableCells. If the current element is contained in a table cell, an exception will be thrown.
       *
       * Return:
       * - PageBreak — the inserted page break element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertPageBreak(Integer,PageBreak)
       * @param childIndex the index at which to insert the element
       * @param pageBreak the p[age break to insert
       */
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;

      /**
       * Creates and inserts a new text element at the specified index.
       *
       * Return:
       * - Text — the new text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertText(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertText(childIndex: Integer, text: string): Text;

      /**
       * Inserts the given Text element at the specified index, with the specified text contents.
       *
       * Return:
       * - Text — the inserted text element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#insertText(Integer,Text)
       * @param childIndex the index at which to insert the element
       * @param text the text element to insert
       */
      insertText(childIndex: Integer, text: Text): Text;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the left-to-right setting.
       *
       * Return:
       * - Boolean — the left-to-right setting
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#isLeftToRight()
       */
      isLeftToRight(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Paragraph — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#merge()
       */
      merge(): Paragraph;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): Paragraph;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Paragraph — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#removeFromParent()
       */
      removeFromParent(): Paragraph;

      /**
       * Removes a PositionedImage by the image's ID.
       *
       * Return:
       * - Boolean — whether or not the specified image was removed
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#removePositionedImage(String)
       * @param id the image id
       */
      removePositionedImage(id: string): boolean;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the HorizontalAlignment.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setAlignment(HorizontalAlignment)
       * @param alignment the horizontal alignment
       */
      setAlignment(alignment: HorizontalAlignment): Paragraph;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Paragraph — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Paragraph;

      /**
       * Sets the ParagraphHeading.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setHeading(ParagraphHeading)
       * @param heading the heading
       */
      setHeading(heading: ParagraphHeading): Paragraph;

      /**
       * Sets the end indentation, in points.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentEnd(Number)
       * @param indentEnd the end indentation, in points
       */
      setIndentEnd(indentEnd: number): Paragraph;

      /**
       * Sets the first line indentation, in points.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentFirstLine(Number)
       * @param indentFirstLine the first line indentation, in points
       */
      setIndentFirstLine(indentFirstLine: number): Paragraph;

      /**
       * Sets the start indentation, in points.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setIndentStart(Number)
       * @param indentStart the start indentation, in points
       */
      setIndentStart(indentStart: number): Paragraph;

      /**
       * Sets the left-to-right setting.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setLeftToRight(Boolean)
       * @param leftToRight the left-to-right setting
       */
      setLeftToRight(leftToRight: boolean): Paragraph;

      /**
       * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setLineSpacing(Number)
       * @param multiplier the number of lines
       */
      setLineSpacing(multiplier: number): Paragraph;

      /**
       * Sets the link url.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Paragraph;

      /**
       * Sets the spacing after the element, in points.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setSpacingAfter(Number)
       * @param spacingAfter the spacing after the element, in points
       */
      setSpacingAfter(spacingAfter: number): Paragraph;

      /**
       * Sets the spacing before the element, in points.
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setSpacingBefore(Number)
       * @param spacingBefore the spacing before the element, in points
       */
      setSpacingBefore(spacingBefore: number): Paragraph;

      /**
       * Sets the contents of the paragraph as text.
       * Note: existing contents are cleared.
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setText(String)
       * @param text the new text contents
       */
      setText(text: string): void;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Paragraph — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/paragraph#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Paragraph;
    }
    /**
     * An enumeration of the standard paragraph headings.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.ParagraphHeading.NORMAL.
     *
     * Use the ParagraphHeading enumeration to configure the heading style for ParagraphElement.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append a paragraph, with heading 1.
     *     const par1 = body.appendParagraph('Title');
     *     par1.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a paragraph, with heading 2.
     *     const par2 = body.appendParagraph('SubTitle');
     *     par2.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a paragraph, with normal heading.
     *     const par3 = body.appendParagraph('Text');
     *     par3.setHeading(DocumentApp.ParagraphHeading.NORMAL);
     */
    enum ParagraphHeading { NORMAL, HEADING1, HEADING2, HEADING3, HEADING4, HEADING5, HEADING6, TITLE, SUBTITLE }
    /**
     * An element representing a link to a person. A person link refers to an email address and might
     * optionally have a name associated with the address. If the name is set, the name is what is
     * displayed in the document body.
     */
    interface Person {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Person — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#copy()
       */
      copy(): Person;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getAttributes()
       */
      getAttributes(): any;

      /**
       * Returns the person's email address.
       *
       * Return:
       * - String — The email address of the person.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getEmail()
       */
      getEmail(): string;

      /**
       * Returns the person's display name, if set.
       *
       * Return:
       * - String — The display name of the person link, or null if the element displays the email address instead.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getName()
       */
      getName(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Person — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#merge()
       */
      merge(): Person;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Person — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#removeFromParent()
       */
      removeFromParent(): Person;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Person — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/person#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Person;
    }
    /**
     * A reference to a location in the document tab, relative to a specific element. The user's cursor
     * is represented as a Position, among other uses. Scripts can only access the cursor of the
     * user who is running the script, and only if the script is bound to the document.
     *
     *     // Insert some text at the cursor position and make it bold.
     *     const cursor = DocumentApp.getActiveDocument().getCursor();
     *     if (cursor) {
     *       // Attempt to insert text at the cursor position. If the insertion returns
     *       // null, the cursor's containing element doesn't allow insertions, so show the
     *       // user an error message.
     *       const element = cursor.insertText('ಠ‿ಠ');
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
       * Gets the element that contains this Position. This will be either a Text element or a container element like Paragraph. In either case, the relative position within the element can be determined with getOffset().
       *
       * Return:
       * - Element — the container or Text element in which this Position object is located
       *
       * https://developers.google.com/apps-script/reference/document/position#getElement()
       */
      getElement(): Element;

      /**
       * Gets this Position's relative location within the element that contains it. If the element is a Text element, the offset is the number of characters before the Position (that is, the index of the character after this Position); for any other element, the offset is the number of child elements before this Position within the same container element (that is, the index of the child element after the Position).
       *
       * Return:
       * - Integer — for Text elements, the number of characters before this Position; for other elements, the number of child elements before this Position within the same container element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/position#getOffset()
       */
      getOffset(): Integer;

      /**
       * Creates an artificial Text element that represents the text and formatting of the Paragraph or ListItem that contains the Position, either directly or through a chain of child elements. To determine the Position's offset in the returned Text element, use getSurroundingTextOffset().
       *
       * Return:
       * - Text — an element equivalent to the result of calling editAsText() on the Paragraph or ListItem that contains the Position, either directly or through a chain of child elements
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/position#getSurroundingText()
       */
      getSurroundingText(): Text;

      /**
       * Gets the offset of this Position within the Text element returned by getSurroundingText(). The offset is the number of characters before the Position (that is, the index of the character after this Position).
       *
       * Return:
       * - Integer — the number of characters before this Position in the Paragraph or ListItem that contains the Position, either directly or through a chain of child elements
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/position#getSurroundingTextOffset()
       */
      getSurroundingTextOffset(): Integer;

      /**
       * Creates and inserts a new Bookmark at this Position.
       *
       * Return:
       * - Bookmark — the new bookmark
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/position#insertBookmark()
       */
      insertBookmark(): Bookmark;

      /**
       * Creates and inserts a new InlineImage at this Position from the specified image blob.
       *
       * Return:
       * - InlineImage — the new image element, or null if the element in which this Position is located does not allow images to be inserted
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/position#insertInlineImage(BlobSource)
       * @param image the image data to insert at this Position
       */
      insertInlineImage(image: Base.BlobSource): InlineImage;

      /**
       * Inserts the specified text at this Position. This method creates a new Text element, even if the string is inserted within an existing Text element, so that it is easy to style the new element.
       *
       * Return:
       * - Text — the new text element, or null if the element in which this Position is located does not allow text to be inserted
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append a new paragraph.
     *     const paragraph = body.appendParagraph('New paragraph to anchor the image to.');
     *
     *     // Get an image in Drive from its ID.
     *     const image = DriveApp.getFileById('ENTER_IMAGE_FILE_ID_HERE').getBlob();
     *
     *     // Add the PositionedImage with offsets (in points).
     *     const posImage =
     *         paragraph.addPositionedImage(image).setTopOffset(60).setLeftOffset(40);
     */
    interface PositionedImage {

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Retrieves the image's height, in pixels.
       *
       * Return:
       * - Integer — the image's height, in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getHeight()
       */
      getHeight(): Integer;

      /**
       * Gets the image's ID.
       *
       * Return:
       * - String — the image ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getId()
       */
      getId(): string;

      /**
       * Gets an enum value that represents how the image is laid out.
       *
       * Return:
       * - PositionedLayout — the image layout
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getLayout()
       */
      getLayout(): PositionedLayout;

      /**
       * Gets the image's offset, in points, from the paragraph's left.
       *
       * Return:
       * - Number — the image offset from the left paragraph's left
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getLeftOffset()
       */
      getLeftOffset(): number;

      /**
       * Gets the Paragraph the image is anchored to.
       *
       * Return:
       * - Paragraph — the parent paragraph
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getParagraph()
       */
      getParagraph(): Paragraph;

      /**
       * Gets the image's offset, in points, from the paragraph's top.
       *
       * Return:
       * - Number — the image offset from the left paragraph's top
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getTopOffset()
       */
      getTopOffset(): number;

      /**
       * Retrieves the image's width, in pixels.
       *
       * Return:
       * - Integer — the image's width, in pixels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#getWidth()
       */
      getWidth(): Integer;

      /**
       * Sets the image's height, in pixels.
       *
       * Return:
       * - PositionedImage — the current object
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#setHeight(Integer)
       * @param height the image's height, in pixels
       */
      setHeight(height: Integer): PositionedImage;

      /**
       * Sets the definition of how the image is laid out.
       *
       * Return:
       * - PositionedImage — this object for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#setLayout(PositionedLayout)
       * @param layout an enum representing the layout mode
       */
      setLayout(layout: PositionedLayout): PositionedImage;

      /**
       * Sets the image's offset, in points, from the paragraph's left.
       *
       * Return:
       * - PositionedImage — this object for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#setLeftOffset(Number)
       * @param offset offset from the paragraph's left
       */
      setLeftOffset(offset: number): PositionedImage;

      /**
       * Sets the image's offset, in points, from the paragraph's top.
       *
       * Return:
       * - PositionedImage — this object for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#setTopOffset(Number)
       * @param offset offset from the paragraph's top
       */
      setTopOffset(offset: number): PositionedImage;

      /**
       * Sets the image's width, in pixels.
       *
       * Return:
       * - PositionedImage — the current object
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/positioned-image#setWidth(Integer)
       * @param width the image's width, in pixels
       */
      setWidth(width: Integer): PositionedImage;
    }
    /**
     * An enumeration that specifies how to lay out a PositionedImage in relation to surrounding
     * text.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.PositionedLayout.ABOVE_TEXT.
     */
    enum PositionedLayout { ABOVE_TEXT, BREAK_BOTH, BREAK_LEFT, BREAK_RIGHT, WRAP_TEXT }
    /**
     * A range of elements in a document. The user's selection is represented as a Range, among
     * other uses. Scripts can only access the selection of the user who is running the script, and only
     * if the script is bound to the document.
     *
     *     // Bold all selected text.
     *     const selection = DocumentApp.getActiveDocument().getSelection();
     *     if (selection) {
     *       const elements = selection.getRangeElements();
     *       for (let i = 0; i < elements.length; i++) {
     *         const element = elements[i];
     *
     *         // Only modify elements that can be edited as text; skip images and other
     *         // non-text elements.
     *         if (element.getElement().editAsText) {
     *           const text = element.getElement().editAsText();
     *
     *           // Bold the selected part of the element, or the full element if it's
     *           // completely selected.
     *           if (element.isPartial()) {
     *             text.setBold(
     *                 element.getStartOffset(),
     *                 element.getEndOffsetInclusive(),
     *                 true,
     *             );
     *           } else {
     *             text.setBold(true);
     *           }
     *         }
     *       }
     *     }
     */
    interface Range {

      /**
       * Gets all elements in this Range, including any partial Text elements (for example, in the case of a selection that includes only part of a Text element). To determine whether a Text element is only partially included in the range, see RangeElement.isPartial().
       *
       * Return:
       * - RangeElement[] — an array of elements, in the order they appear in the document
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range#getRangeElements()
       */
      getRangeElements(): RangeElement[];
      /** @deprecated DO NOT USE */ getSelectedElements(): RangeElement[];
    }
    /**
     * A builder used to construct Range objects from document elements.
     *
     *     // Change the user's selection to a range that includes every table in the
     *     // active tab.
     *     const doc = DocumentApp.getActiveDocument();
     *     const documentTab = doc.getActiveTab().asDocumentTab();
     *     const rangeBuilder = documentTab.newRange();
     *     const tables = documentTab.getBody().getTables();
     *     for (let i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     doc.setSelection(rangeBuilder.build());
     */
    interface RangeBuilder {

      /**
       * Adds an entire Element to this RangeBuilder.
       *
       * Return:
       * - RangeBuilder — this builder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#addElement(Element)
       * @param element the element to be added
       */
      addElement(element: Element): RangeBuilder;

      /**
       * Adds a partial Text element to this RangeBuilder.
       *
       * Return:
       * - RangeBuilder — this builder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#addElement(Text,Integer,Integer)
       * @param textElement the text element to be partially added
       * @param startOffset the number of characters before the first character to be included (that is, the index of the first character in the range)
       * @param endOffsetInclusive the number of characters before the last character to be included (that is, the index of the last character in the range)
       */
      addElement(textElement: Text, startOffset: Integer, endOffsetInclusive: Integer): RangeBuilder;

      /**
       * Adds two entire elements, and all elements between them, to this RangeBuilder.
       *
       * Return:
       * - RangeBuilder — this builder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#addElementsBetween(Element,Element)
       * @param startElement the first element to be added
       * @param endElementInclusive the last element to be added
       */
      addElementsBetween(startElement: Element, endElementInclusive: Element): RangeBuilder;

      /**
       * Adds two partial Text elements, and all elements between them, to the RangeBuilder.
       *
       * Return:
       * - RangeBuilder — this builder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#addElementsBetween(Text,Integer,Text,Integer)
       * @param startTextElement the first text element to be partially added
       * @param startOffset the number of characters before the first character of startTextElement to be included (that is, the index of the first character in the range)
       * @param endTextElementInclusive the last text element to be partially added
       * @param endOffsetInclusive the number of characters before the last character of endTextElementInclusive to be included (that is, the index of the last character in the range)
       */
      addElementsBetween(startTextElement: Text, startOffset: Integer, endTextElementInclusive: Text, endOffsetInclusive: Integer): RangeBuilder;

      /**
       * Adds the contents of another Range to this RangeBuilder.
       *
       * Return:
       * - RangeBuilder — this builder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#addRange(Range)
       * @param range the range whose elements should be added
       */
      addRange(range: Range): RangeBuilder;

      /**
       * Constructs a Range from the settings applied to the builder.
       *
       * Return:
       * - Range — the newly constructed range
       *
       * https://developers.google.com/apps-script/reference/document/range-builder#build()
       */
      build(): Range;

      /**
       * Gets all elements in this Range, including any partial Text elements (for example, in the case of a selection that includes only part of a Text element). To determine whether a Text element is only partially included in the range, see RangeElement.isPartial().
       *
       * Return:
       * - RangeElement[] — an array of elements, in the order they appear in the document
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
       *     const rangeElement = DocumentApp.getActiveDocument().getSelection().getRangeElements()[0];
       *
       *     // Log debug information about a range element.
       *     Logger.log(`Element type: ${rangeElement.getElement().getType()}`);
       *     if (rangeElement.isPartial()) {
       *       Logger.log(`The character range begins at ${rangeElement.getStartOffset()}`);
       *       Logger.log(
       *           `The character range ends at ${rangeElement.getEndOffsetInclusive()}`,
       *       );
       *     } else {
       *       Logger.log('The entire range element is included.');
       *     }
       *
       * Return:
       * - Element — the element that corresponds to this RangeElement
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-element#getElement()
       */
      getElement(): Element;

      /**
       * Gets the position of the end of a partial range within the range element. If the element is a Text element and isPartial() returns true, the offset is the number of characters before the last character in the range (that is, the index of the last character in the range); in any other case, this method returns -1.
       *
       * Return:
       * - Integer — for Text elements, the number of character before the last character in the range; for other elements, -1
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-element#getEndOffsetInclusive()
       */
      getEndOffsetInclusive(): Integer;

      /**
       * Gets the position of the start of a partial range within the range element. If the element is a Text element and isPartial() returns true, the offset is the number of characters before the start of the range (that is, the index of the first character in the range); in any other case, this method returns -1.
       *
       * Return:
       * - Integer — for Text elements, the number of characters before the start of the range; for other elements, -1
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-element#getStartOffset()
       */
      getStartOffset(): Integer;

      /**
       * Determines whether this range element covers the entire element or a partial selection of the element's characters. The beginning and end of a partial range element's range can be determined using getStartOffset() and getEndOffsetInclusive(), respectively.
       *
       * Return:
       * - Boolean — true if the element is partially included; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/range-element#isPartial()
       */
      isPartial(): boolean;
    }
    /**
     * An element representing a link to a Google resource, such as a Drive file or a YouTube video.
     */
    interface RichLink {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - RichLink — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#copy()
       */
      copy(): RichLink;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getAttributes()
       */
      getAttributes(): any;

      /**
       * Returns the MIME type of the link, which is available when the item is a link to a Drive file and null otherwise.
       * For example, if the link points to a Google Docs file, this returns the string application/vnd.google-apps.document.
       *
       * Return:
       * - String — The MIME type of the link, if available.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getMimeType()
       */
      getMimeType(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Returns the link's displayed title. This title matches the title of the linked resource at the time of the insertion or last update of the link. For example, if this link points to a Google Docs document titled "Analysis," this returns Analysis.
       *
       * Return:
       * - String — The display title of the link.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getTitle()
       */
      getTitle(): string;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getType()
       */
      getType(): ElementType;

      /**
       * Returns the URL of the resource.
       *
       * Return:
       * - String — The URL of the resource.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#getUrl()
       */
      getUrl(): string;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - RichLink — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#merge()
       */
      merge(): RichLink;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - RichLink — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#removeFromParent()
       */
      removeFromParent(): RichLink;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - RichLink — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/rich-link#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): RichLink;
    }
    /**
     * A tab within a Google Docs document.
     *
     *     // Get all of the first-level tabs (tabs that are not nested within a parent
     *     // tab) in the document.
     *     // TODO(developer): Replace the ID with your own.
     *     const tabs = DocumentApp.openById('123abc').getTabs();
     *
     *     // Get a specific tab based on the tab ID.
     *     // TODO(developer): Replace the IDs with your own.
     *     const tab = DocumentApp.openById('123abc').getTab('123abc');
     */
    interface Tab {

      /**
       * Retrieves the tab contents as a DocumentTab.
       *
       * Return:
       * - DocumentTab — The tab as a DocumentTab.
       *
       * https://developers.google.com/apps-script/reference/document/tab#asDocumentTab()
       */
      asDocumentTab(): DocumentTab;

      /**
       * Retrieves the child tabs nested within this tab.
       *
       * Return:
       * - Tab[] — The child tabs nested within this tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/tab#getChildTabs()
       */
      getChildTabs(): Tab[];

      /**
       * Retrieves the ID of the tab.
       *
       * Return:
       * - String — The ID of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/tab#getId()
       */
      getId(): string;

      /**
       * Retrieves the 0-based index of the tab within the parent.
       *
       * Return:
       * - Integer — The index of the tab within the parent.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/tab#getIndex()
       */
      getIndex(): Integer;

      /**
       * Retrieves the title of the tab.
       *
       * Return:
       * - String — The title of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/tab#getTitle()
       */
      getTitle(): string;

      /**
       * Retrieves the type of tab.
       * Use this method to determine the content type of this Tab before casting to the more specific type using asDocumentTab().
       *
       *     const tab = DocumentApp.getActiveDocument().getActiveTab();
       *     // Use getType() to determine the tab's type before casting.
       *     if (tab.getType() === DocumentApp.TabType.DOCUMENT_TAB) {
       *       // It's a document tab, write some text to it.
       *       tab.asDocumentTab().setText('Hello World!');
       *     } else {
       *       // There are currently no types other than DOCUMENT_TAB.
       *     }
       *
       * Return:
       * - TabType — The tab's type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/tab#getType()
       */
      getType(): TabType;
    }
    /**
     * An enumeration of all the tab types.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.TabType.TAB.
     *
     * Use the TabType enumeration to check the type of a given element, for instance:
     *
     *     const tab = DocumentApp.getActiveDocument().getActiveTab();
     *     // Use getType() to determine the tab's type before casting.
     *     if (tab.getType() === DocumentApp.TabType.DOCUMENT_TAB) {
     *       // It's a document tab, write some text to it.
     *       tab.asDocumentTab().setText('Hello World!');
     *     } else {
     *       // There are currently no types other than DOCUMENT_TAB.
     *     }
     */
    enum TabType { DOCUMENT_TAB }
    /**
     * An element representing a table. A Table may only contain TableRow elements. For
     * more information on document structure, see the guide to extending Google Docs.
     *
     * When creating a Table that contains a large number of rows or cells, consider building
     * it from a string array, as shown in the following example.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Create a two-dimensional array containing the cell contents.
     *     const cells = [
     *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
     *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
     *     ];
     *
     *     // Build a table from the array.
     *     body.appendTable(cells);
     */
    interface Table extends Element {

      /**
       * Creates and appends a new TableRow.
       *
       * Return:
       * - TableRow — the new table row element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#appendTableRow()
       */
      appendTableRow(): TableRow;

      /**
       * Appends the given TableRow.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table in the tab and copies the second row.
       *     const table = body.getTables()[0];
       *     const row = table.getChild(1).copy();
       *
       *     // Adds the copied row to the bottom of the table.
       *     const tableRow = table.appendTableRow(row);
       *
       * Return:
       * - TableRow — The appended table row element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#appendTableRow(TableRow)
       * @param tableRow The table row to append.
       */
      appendTableRow(tableRow: TableRow): TableRow;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - Table — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/table#clear()
       */
      clear(): Table;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Table — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#copy()
       */
      copy(): Table;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/table#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the border color.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Sets the border color of the first table.
       *     table.setBorderColor('#00FF00');
       *
       *     // Logs the border color of the first table to the console.
       *     console.log(table.getBorderColor());
       *
       * Return:
       * - String — The border color, formatted in CSS notation (like '#ffffff').
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getBorderColor()
       */
      getBorderColor(): string;

      /**
       * Retrieves the border width, in points.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Sets the border width of the first table.
       *     table.setBorderWidth(20);
       *
       *     // Logs the border width of the first table.
       *     console.log(table.getBorderWidth());
       *
       * Return:
       * - Number — The border width, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getBorderWidth()
       */
      getBorderWidth(): number;

      /**
       * Retrieves the TableCell at the specified row and cell indices.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Gets the cell of the table's third row and second column.
       *     const cell = table.getCell(2, 1);
       *
       *     // Logs the cell text to the console.
       *     console.log(cell.getText());
       *
       * Return:
       * - TableCell — The table cell.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getCell(Integer,Integer)
       * @param rowIndex The index of the row containing the cell to retrieve.
       * @param cellIndex The index of the cell to retrieve.
       */
      getCell(rowIndex: Integer, cellIndex: Integer): TableCell;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the width of the specified table column, in points.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Sets the width of the second column to 100 points.
       *     const columnWidth = table.setColumnWidth(1, 100);
       *
       *     // Gets the width of the second column and logs it to the console.
       *     console.log(columnWidth.getColumnWidth(1));
       *
       * Return:
       * - Number — The column width, in points.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getColumnWidth(Integer)
       * @param columnIndex The column index.
       */
      getColumnWidth(columnIndex: Integer): number;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the number of TableRows.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Logs the number of rows of the first table to the console.
       *     console.log(table.getNumRows());
       *
       * Return:
       * - Integer — The number of table rows.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getNumRows()
       */
      getNumRows(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the TableRow at the specified row index.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table and logs the text of first row to the console.
       *     const table = body.getTables()[0];
       *     console.log(table.getRow(0).getText());
       *
       * Return:
       * - TableRow — The table row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getRow(Integer)
       * @param rowIndex The index of the row to retrieve.
       */
      getRow(rowIndex: Integer): TableRow;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new TableRow at the specified index.
       *
       * Return:
       * - TableRow — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#insertTableRow(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTableRow(childIndex: Integer): TableRow;

      /**
       * Inserts the given TableRow at the specified index.
       *
       * Return:
       * - TableRow — the inserted table row element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#insertTableRow(Integer,TableRow)
       * @param childIndex the index at which to insert the element
       * @param tableRow the table row to insert
       */
      insertTableRow(childIndex: Integer, tableRow: TableRow): TableRow;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the specified child element.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Finds the first table row and removes it.
       *     const element = table.findElement(DocumentApp.ElementType.TABLE_ROW);
       *     table.removeChild(element.getElement());
       *
       * Return:
       * - Table — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#removeChild(Element)
       * @param child The child element to remove.
       */
      removeChild(child: Element): Table;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Table — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#removeFromParent()
       */
      removeFromParent(): Table;

      /**
       * Removes the TableRow at the specified row index.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table and removes its second row.
       *     const table = body.getTables()[0];
       *     table.removeRow(1);
       *
       * Return:
       * - TableRow — The removed row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#removeRow(Integer)
       * @param rowIndex The index of the row to remove.
       */
      removeRow(rowIndex: Integer): TableRow;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Table — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Table;

      /**
       * Sets the border color.
       *
       *     // Opens the Docs file by its ID. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const doc = DocumentApp.openById('123abc');
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the first table.
       *     const table = body.getTables()[0];
       *
       *     // Sets the border color of the table to green.
       *     table.setBorderColor('#00FF00');
       *
       * Return:
       * - Table — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setBorderColor(String)
       * @param color The border color, formatted in CSS notation (like '#ffffff').
       */
      setBorderColor(color: string): Table;

      /**
       * Sets the border width, in points.
       *
       * Return:
       * - Table — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setBorderWidth(Number)
       * @param width the border width, in points
       */
      setBorderWidth(width: number): Table;

      /**
       * Sets the width of the specified column, in points.
       *
       * Return:
       * - Table — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setColumnWidth(Integer,Number)
       * @param columnIndex the column index
       * @param width the border width, in points
       */
      setColumnWidth(columnIndex: Integer, width: number): Table;

      /**
       * Sets the link url.
       *
       * Return:
       * - Table — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Table;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Table — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Table;
    }
    /**
     * An element representing a table cell. A TableCell is always contained within a TableRow and may contain ListItem, Paragraph, or Table elements. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface TableCell extends Element {

      /**
       * Creates and appends a new HorizontalRule.
       * The HorizontalRule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — the new horizontal rule
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendHorizontalRule()
       */
      appendHorizontalRule(): HorizontalRule;

      /**
       * Creates and appends a new InlineImage from the specified image blob.
       * The InlineImage will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — the new image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendImage(BlobSource)
       * @param image the image data
       */
      appendImage(image: Base.BlobSource): InlineImage;

      /**
       * Appends the given InlineImage.
       * The InlineImage will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — the appended image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendImage(InlineImage)
       * @param image the image data
       */
      appendImage(image: InlineImage): InlineImage;

      /**
       * Appends the given ListItem.
       *
       * Return:
       * - ListItem — the appended list item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendListItem(ListItem)
       * @param listItem the list item to append
       */
      appendListItem(listItem: ListItem): ListItem;

      /**
       * Creates and appends a new ListItem.
       *
       * Return:
       * - ListItem — the new list item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendListItem(String)
       * @param text the text contents
       */
      appendListItem(text: string): ListItem;

      /**
       * Appends the given Paragraph.
       *
       * Return:
       * - Paragraph — the appended paragraph
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendParagraph(Paragraph)
       * @param paragraph the paragraph to append
       */
      appendParagraph(paragraph: Paragraph): Paragraph;

      /**
       * Creates and appends a new Paragraph.
       *
       * Return:
       * - Paragraph — the new paragraph
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendParagraph(String)
       * @param text the text contents
       */
      appendParagraph(text: string): Paragraph;

      /**
       * Creates and appends a new Table.
       *
       * Return:
       * - Table — the new table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable()
       */
      appendTable(): Table;

      /**
       * Appends a new Table containing the specified cells.
       *
       * Return:
       * - Table — the appended table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable(String)
       * @param cells the text contents of the table cells to add to the new table
       */
      appendTable(cells: string[][]): Table;

      /**
       * Appends the given Table.
       *
       * Return:
       * - Table — the appended table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#appendTable(Table)
       * @param table the table to append
       */
      appendTable(table: Table): Table;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - TableCell — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#clear()
       */
      clear(): TableCell;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - TableCell — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#copy()
       */
      copy(): TableCell;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the background color.
       *
       * Return:
       * - String — the background color, formatted in CSS notation (like '#ffffff')
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getBackgroundColor()
       */
      getBackgroundColor(): string;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the column span, which is the number of columns of table cells this cell spans. Non-merged cells have a col span of 1.
       *
       * Return:
       * - Integer — the column span or 0 for a cell which is merged over by another cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getColSpan()
       */
      getColSpan(): Integer;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the bottom padding, in points.
       *
       * Return:
       * - Number — the bottom padding, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingBottom()
       */
      getPaddingBottom(): number;

      /**
       * Retrieves the left padding, in points.
       *
       * Return:
       * - Number — the left padding, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingLeft()
       */
      getPaddingLeft(): number;

      /**
       * Retrieves the right padding, in points.
       *
       * Return:
       * - Number — the right padding, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingRight()
       */
      getPaddingRight(): number;

      /**
       * Retrieves the top padding, in points.
       *
       * Return:
       * - Number — the top padding, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getPaddingTop()
       */
      getPaddingTop(): number;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the TableRow containing the current TableCell.
       *
       * Return:
       * - TableRow — the table row containing the current cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getParentRow()
       */
      getParentRow(): TableRow;

      /**
       * Retrieves the Table containing the current TableCell.
       *
       * Return:
       * - Table — the table containing the current cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged cells have a row span of 1.
       *
       * Return:
       * - Integer — the row span or 0 for a cell which is merged over by another cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getRowSpan()
       */
      getRowSpan(): Integer;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getType()
       */
      getType(): ElementType;

      /**
       * Retrieves the VerticalAlignment.
       *
       * Return:
       * - VerticalAlignment — the vertical alignment
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getVerticalAlignment()
       */
      getVerticalAlignment(): VerticalAlignment;

      /**
       * Retrieves the width of the column containing the cell, in points.
       *
       * Return:
       * - Number — the column width, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#getWidth()
       */
      getWidth(): number;

      /**
       * Creates and inserts a new HorizontalRule at the specified index.
       * The horizontal rule will be contained in a new Paragraph.
       *
       * Return:
       * - HorizontalRule — the new horizontal rule
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertHorizontalRule(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertHorizontalRule(childIndex: Integer): HorizontalRule;

      /**
       * Creates and inserts an InlineImage from the specified image blob, at the specified index.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — the inserted inline image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertImage(Integer,BlobSource)
       * @param childIndex the index at which to insert the element
       * @param image the image data
       */
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;

      /**
       * Inserts the given InlineImage at the specified index.
       * The image will be contained in a new Paragraph.
       *
       * Return:
       * - InlineImage — the inserted inline image
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertImage(Integer,InlineImage)
       * @param childIndex the index at which to insert the element
       * @param image the image to insert
       */
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;

      /**
       * Inserts the given ListItem at the specified index.
       *
       * Return:
       * - ListItem — inserted new list item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertListItem(Integer,ListItem)
       * @param childIndex the index at which to insert the element
       * @param listItem the list item to insert
       */
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;

      /**
       * Creates and inserts a new ListItem at the specified index.
       *
       * Return:
       * - ListItem — the new list item
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertListItem(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertListItem(childIndex: Integer, text: string): ListItem;

      /**
       * Inserts the given Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — the inserted paragraph
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertParagraph(Integer,Paragraph)
       * @param childIndex the index at which to insert the element
       * @param paragraph the paragraph to insert
       */
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;

      /**
       * Creates and inserts a new Paragraph at the specified index.
       *
       * Return:
       * - Paragraph — the new paragraph
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertParagraph(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param text the text contents
       */
      insertParagraph(childIndex: Integer, text: string): Paragraph;

      /**
       * Creates and inserts a new Table at the specified index.
       *
       * Return:
       * - Table — the new table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTable(childIndex: Integer): Table;

      /**
       * Creates and inserts a new Table containing the specified cells, at the specified index.
       *
       * Return:
       * - Table — the new table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer,String)
       * @param childIndex the index at which to insert
       * @param cells the text contents of the table cells to add to the new table
       */
      insertTable(childIndex: Integer, cells: string[][]): Table;

      /**
       * Inserts the given Table at the specified index.
       *
       * Return:
       * - Table — the inserted table
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#insertTable(Integer,Table)
       * @param childIndex the index at which to insert the element
       * @param table the table to insert
       */
      insertTable(childIndex: Integer, table: Table): Table;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - TableCell — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#merge()
       */
      merge(): TableCell;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): TableCell;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - TableCell — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#removeFromParent()
       */
      removeFromParent(): TableCell;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - TableCell — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): TableCell;

      /**
       * Sets the background color.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setBackgroundColor(String)
       * @param color the background color, formatted in CSS notation (like '#ffffff')
       */
      setBackgroundColor(color: string): TableCell;

      /**
       * Sets the link url.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableCell;

      /**
       * Sets the bottom padding, in points.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingBottom(Number)
       * @param paddingBottom the bottom padding, in points
       */
      setPaddingBottom(paddingBottom: number): TableCell;

      /**
       * Sets the left padding, in points.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingLeft(Number)
       * @param paddingLeft the left padding, in points
       */
      setPaddingLeft(paddingLeft: number): TableCell;

      /**
       * Sets the right padding, in points.
       *
       * Return:
       * - TableCell — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingRight(Number)
       * @param paddingRight The right padding, in points.
       */
      setPaddingRight(paddingRight: number): TableCell;

      /**
       * Sets the top padding, in points.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setPaddingTop(Number)
       * @param paddingTop the top padding, in points
       */
      setPaddingTop(paddingTop: number): TableCell;

      /**
       * Sets the contents as plain text.
       * Note: existing contents are cleared.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setText(String)
       * @param text the new text contents
       */
      setText(text: string): TableCell;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): TableCell;

      /**
       * Sets the vertical alignment.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-cell#setVerticalAlignment(VerticalAlignment)
       * @param alignment the vertical alignment
       */
      setVerticalAlignment(alignment: VerticalAlignment): TableCell;

      /**
       * Sets the width of the column containing the current cell, in points.
       *
       * Return:
       * - TableCell — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
    interface TableOfContents extends Element {

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - TableOfContents — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#clear()
       */
      clear(): TableOfContents;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - TableOfContents — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#copy()
       */
      copy(): TableOfContents;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - TableOfContents — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#removeFromParent()
       */
      removeFromParent(): TableOfContents;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - TableOfContents — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): TableOfContents;

      /**
       * Sets the link url.
       *
       * Return:
       * - TableOfContents — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-of-contents#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableOfContents;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - TableOfContents — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
    interface TableRow extends Element {

      /**
       * Creates and appends a new TableCell.
       *
       * Return:
       * - TableCell — the new table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell()
       */
      appendTableCell(): TableCell;

      /**
       * Appends the given TableCell containing the specified text.
       *
       * Return:
       * - TableCell — the appended table cell element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell(String)
       * @param textContents the cell's text contents
       */
      appendTableCell(textContents: string): TableCell;

      /**
       * Appends the given TableCell.
       *
       * Return:
       * - TableCell — the appended table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#appendTableCell(TableCell)
       * @param tableCell the table cell to append
       */
      appendTableCell(tableCell: TableCell): TableCell;

      /**
       * Clears the contents of the element.
       *
       * Return:
       * - TableRow — The current element.
       *
       * https://developers.google.com/apps-script/reference/document/table-row#clear()
       */
      clear(): TableRow;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - TableRow — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#copy()
       */
      copy(): TableRow;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/table-row#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for a descendant of the specified type.
       *
       * Return:
       * - RangeElement — A search result indicating the position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#findElement(ElementType)
       * @param elementType The type of element to search for.
       */
      findElement(elementType: ElementType): RangeElement;

      /**
       * Searches the contents of the element for a descendant of the specified type, starting from the specified RangeElement.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Define the search parameters.
       *
       *     let searchResult = null;
       *
       *     // Search until the paragraph is found.
       *     while (
       *         (searchResult = body.findElement(
       *              DocumentApp.ElementType.PARAGRAPH,
       *              searchResult,
       *              ))) {
       *       const par = searchResult.getElement().asParagraph();
       *       if (par.getHeading() === DocumentApp.ParagraphHeading.HEADING1) {
       *         // Found one, update and stop.
       *         par.setText('This is the first header.');
       *         break;
       *       }
       *     }
       *
       * Return:
       * - RangeElement — A search result indicating the next position of the search element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#findElement(ElementType,RangeElement)
       * @param elementType The type of element to search for.
       * @param from The search result to search from.
       */
      findElement(elementType: ElementType, from: RangeElement): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the TableCell at the specified cell index.
       *
       * Return:
       * - TableCell — the table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getCell(Integer)
       * @param cellIndex the index of the cell to retrieve
       */
      getCell(cellIndex: Integer): TableCell;

      /**
       * Retrieves the child element at the specified child index.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Obtain the first element in the tab.
       *     const firstChild = body.getChild(0);
       *
       *     // If it's a paragraph, set its contents.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       firstChild.asParagraph().setText('This is the first paragraph.');
       *     }
       *
       * Return:
       * - Element — The child element at the specified index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getChild(Integer)
       * @param childIndex The index of the child element to retrieve.
       */
      getChild(childIndex: Integer): Element;

      /**
       * Retrieves the child index for the specified child element.
       *
       * Return:
       * - Integer — The child index.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getChildIndex(Element)
       * @param child The child element for which to retrieve the index.
       */
      getChildIndex(child: Element): Integer;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the minimum height, in points.
       *
       * Return:
       * - Number — the minimum height, in points
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getMinimumHeight()
       */
      getMinimumHeight(): number;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the number of cells in the row.
       *
       * Return:
       * - Integer — the number of cells
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getNumCells()
       */
      getNumCells(): Integer;

      /**
       * Retrieves the number of children.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Log the number of elements in the tab.
       *     Logger.log(`There are ${body.getNumChildren()} elements in the tab's body.`);
       *
       * Return:
       * - Integer — The number of children.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getNumChildren()
       */
      getNumChildren(): Integer;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the Table containing the current row.
       *
       * Return:
       * - Table — the table containing the current row
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getParentTable()
       */
      getParentTable(): Table;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#getType()
       */
      getType(): ElementType;

      /**
       * Creates and inserts a new TableCell at the specified index.
       *
       * Return:
       * - TableCell — the new table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer)
       * @param childIndex the index at which to insert the element
       */
      insertTableCell(childIndex: Integer): TableCell;

      /**
       * Inserts the given TableCell at the specified index, containing the given text.
       *
       * Return:
       * - TableCell — the inserted table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer,String)
       * @param childIndex the index at which to insert the element
       * @param textContents the cell's text contents
       */
      insertTableCell(childIndex: Integer, textContents: string): TableCell;

      /**
       * Inserts the given TableCell at the specified index.
       *
       * Return:
       * - TableCell — the inserted table cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#insertTableCell(Integer,TableCell)
       * @param childIndex the index at which to insert the element
       * @param tableCell the table cell to insert
       */
      insertTableCell(childIndex: Integer, tableCell: TableCell): TableCell;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - TableRow — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#merge()
       */
      merge(): TableRow;

      /**
       * Removes the TableCell at the specified cell index.
       *
       * Return:
       * - TableCell — the removed cell
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#removeCell(Integer)
       * @param cellIndex the index of the cell to remove
       */
      removeCell(cellIndex: Integer): TableCell;

      /**
       * Removes the specified child element.
       *
       * Return:
       * - TableRow — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#removeChild(Element)
       * @param child the child element to remove
       */
      removeChild(child: Element): TableRow;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - TableRow — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#removeFromParent()
       */
      removeFromParent(): TableRow;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - TableRow — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): TableRow;

      /**
       * Sets the link url.
       *
       * Return:
       * - TableRow — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): TableRow;

      /**
       * Sets the minimum height, in points.
       *
       * Return:
       * - TableRow — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/table-row#setMinimumHeight(Number)
       * @param minHeight the minimum height, in points
       */
      setMinimumHeight(minHeight: number): TableRow;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - TableRow — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
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
     *     // Gets the body contents of the active tab.
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Use editAsText to obtain a single text element containing
     *     // all the characters in the tab.
     *     const text = body.editAsText();
     *
     *     // Insert text at the beginning of the tab.
     *     text.insertText(0, 'Inserted text.\n');
     *
     *     // Insert text at the end of the tab.
     *     text.appendText('\nAppended text.');
     *
     *     // Make the first half of the tab blue.
     *     text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');
     */
    interface Text extends Element {

      /**
       * Adds the specified text to the end of this text region.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Adds the text, 'Sample body text,' to the end of the tab body.
       *     const text = body.editAsText().appendText('Sample body text');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#appendText(String)
       * @param text The text to append.
       */
      appendText(text: string): Text;

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - Text — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#copy()
       */
      copy(): Text;

      /**
       * Deletes a range of text.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Deletes the first 10 characters in the body.
       *     const text = body.editAsText().deleteText(0, 9);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#deleteText(Integer,Integer)
       * @param startOffset The character offset of the first character to delete.
       * @param endOffsetInclusive The character offset of the last character to delete.
       */
      deleteText(startOffset: Integer, endOffsetInclusive: Integer): Text;

      /**
       * Obtains a Text version of the current element, for editing.
       * Use editAsText for manipulating the elements contents as rich text. The editAsText mode ignores non-text elements (such as InlineImage and HorizontalRule).
       * Child elements fully contained within a deleted text range are removed from the element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Insert two paragraphs separated by a paragraph containing an
       *     // horizontal rule.
       *     body.insertParagraph(0, 'An editAsText sample.');
       *     body.insertHorizontalRule(0);
       *     body.insertParagraph(0, 'An example.');
       *
       *     // Delete " sample.\n\n An" removing the horizontal rule in the process.
       *     body.editAsText().deleteText(14, 25);
       *
       * Return:
       * - Text — a text version of the current element
       *
       * https://developers.google.com/apps-script/reference/document/text#editAsText()
       */
      editAsText(): Text;

      /**
       * Searches the contents of the element for the specified text pattern using regular expressions.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#findText(String)
       * @param searchPattern the pattern to search for
       */
      findText(searchPattern: string): RangeElement;

      /**
       * Searches the contents of the element for the specified text pattern, starting from a given search result.
       * A subset of the JavaScript regular expression features are not fully supported, such as capture groups and mode modifiers.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       * Return:
       * - RangeElement — a search result indicating the next position of the search text, or null if there is no match
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#findText(String,RangeElement)
       * @param searchPattern the pattern to search for
       * @param from the search result to search from
       */
      findText(searchPattern: string, from: RangeElement): RangeElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the attributes at the specified character offset.
       * The result is an object containing a property for each valid text attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Declares style attributes.
       *     const style = {};
       *     style[DocumentApp.Attribute.BOLD] = true;
       *     style[DocumentApp.Attribute.ITALIC] = true;
       *     style[DocumentApp.Attribute.FONT_SIZE] = 29;
       *
       *     // Sets the style attributes to the tab's body.
       *     const text = body.editAsText();
       *     text.setAttributes(style);
       *
       *     // Gets the style attributes applied to the eleventh character in the
       *     // body and logs them to the console.
       *     const attributes = text.getAttributes(10);
       *     console.log(attributes);
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getAttributes(Integer)
       * @param offset The character offset.
       */
      getAttributes(offset: Integer): any;

      /**
       * Retrieves the background color setting.
       *
       * Return:
       * - String — the background color, formatted in CSS notation (like '#ffffff'), or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getBackgroundColor()
       */
      getBackgroundColor(): string;

      /**
       * Retrieves the background color at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the background color of the first 3 characters in the body.
       *     const text = body.editAsText().setBackgroundColor(0, 2, '#FFC0CB');
       *
       *     // Gets the background color of the first character in the body.
       *     const backgroundColor = text.getBackgroundColor(0);
       *
       *     // Logs the background color to the console.
       *     console.log(backgroundColor);
       *
       * Return:
       * - String — The background color, formatted in CSS notation (like '#ffffff').
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getBackgroundColor(Integer)
       * @param offset The character offset.
       */
      getBackgroundColor(offset: Integer): string;

      /**
       * Retrieves the font family setting. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. The methods getFontFamily() and setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is deprecated, it will remain available for compatibility with older scripts.
       *
       * Return:
       * - String — the font family, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getFontFamily()
       */
      getFontFamily(): string;

      /**
       * Retrieves the font family at the specified character offset. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. The methods getFontFamily() and setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is deprecated, it will remain available for compatibility with older scripts.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the font of the first 16 characters to Impact.
       *     const text = body.editAsText().setFontFamily(0, 15, 'Impact');
       *
       *     // Gets the font family of the 16th character in the tab body.
       *     const fontFamily = text.getFontFamily(15);
       *
       *     // Logs the font family to the console.
       *     console.log(fontFamily);
       *
       * Return:
       * - String — The font family.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getFontFamily(Integer)
       * @param offset The character offset.
       */
      getFontFamily(offset: Integer): string;

      /**
       * Retrieves the font size setting.
       *
       * Return:
       * - Number — the font size, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getFontSize()
       */
      getFontSize(): number;

      /**
       * Retrieves the font size at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the font size of the first 13 characters to 15.
       *     const text = body.editAsText().setFontSize(0, 12, 15);
       *
       *     // Gets the font size of the first character.
       *     const fontSize = text.getFontSize(0);
       *
       *     // Logs the font size to the console.
       *     console.log(fontSize);
       *
       * Return:
       * - Number — The font size.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getFontSize(Integer)
       * @param offset The character offset.
       */
      getFontSize(offset: Integer): number;

      /**
       * Retrieves the foreground color setting.
       *
       * Return:
       * - String — the foreground color, formatted in CSS notation (like '#ffffff'), or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getForegroundColor()
       */
      getForegroundColor(): string;

      /**
       * Retrieves the foreground color at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the foreground color of the first 3 characters in the tab body.
       *     const text = body.editAsText().setForegroundColor(0, 2, '#0000FF');
       *
       *     // Gets the foreground color of the first character in the tab body.
       *     const foregroundColor = text.getForegroundColor(0);
       *
       *     // Logs the foreground color to the console.
       *     console.log(foregroundColor);
       *
       * Return:
       * - String — The foreground color, formatted in CSS notation (like '#ffffff').
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getForegroundColor(Integer)
       * @param offset The character offset.
       */
      getForegroundColor(offset: Integer): string;

      /**
       * Retrieves the link url.
       *
       * Return:
       * - String — the link url, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getLinkUrl()
       */
      getLinkUrl(): string;

      /**
       * Retrieves the link URL at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Applies a link to the first 10 characters in the body.
       *     const text = body.editAsText().setLinkUrl(0, 9, 'https://www.example.com/');
       *
       *     // Gets the URL of the link from the first character.
       *     const link = text.getLinkUrl(0);
       *
       *     // Logs the link URL to the console.
       *     console.log(link);
       *
       * Return:
       * - String — The link URL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getLinkUrl(Integer)
       * @param offset The character offset.
       */
      getLinkUrl(offset: Integer): string;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the contents of the element as a text string.
       *
       * Return:
       * - String — the contents of the element as text string
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getText()
       */
      getText(): string;

      /**
       * Gets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       * Return:
       * - TextAlignment — the type of text alignment, or null if the text contains multiple types of text alignments or if the text alignment has never been set
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getTextAlignment()
       */
      getTextAlignment(): TextAlignment;

      /**
       * Gets the text alignment for a single character. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the text alignment of the tab's body to NORMAL.
       *     const text =
       *         body.editAsText().setTextAlignment(DocumentApp.TextAlignment.NORMAL);
       *
       *     // Gets the text alignment of the ninth character.
       *     const alignment = text.getTextAlignment(8);
       *
       *     // Logs the text alignment to the console.
       *     console.log(alignment.toString());
       *
       * Return:
       * - TextAlignment — The type of text alignment, or null if the text alignment has never been set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getTextAlignment(Integer)
       * @param offset The offset of the character.
       */
      getTextAlignment(offset: Integer): TextAlignment;

      /**
       * Retrieves the set of text indices that correspond to the start of distinct text formatting runs.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Gets the text indices at which text formatting changes.
       *     const indices = body.editAsText().getTextAttributeIndices();
       *
       *     // Logs the indices to the console.
       *     console.log(indices.toString());
       *
       * Return:
       * - Integer[] — The set of text indices at which text formatting changes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getTextAttributeIndices()
       */
      getTextAttributeIndices(): Integer[];

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#getType()
       */
      getType(): ElementType;

      /**
       * Inserts the specified text at the given character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Inserts the text, 'Sample inserted text', at the start of the body content.
       *     const text = body.editAsText().insertText(0, 'Sample inserted text');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#insertText(Integer,String)
       * @param offset The character offset at which to insert the text.
       * @param text The text to insert.
       */
      insertText(offset: Integer, text: string): Text;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Retrieves the bold setting.
       *
       * Return:
       * - Boolean — whether the text is bold, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isBold()
       */
      isBold(): boolean;

      /**
       * Retrieves the bold setting at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Bolds the first 4 characters in the tab body.
       *     const text = body.editAsText().setBold(0, 3, true);
       *
       *     // Gets whether or not the text is bold.
       *     const bold = text.editAsText().isBold(0);
       *
       *     // Logs the text's bold setting to the console
       *     console.log(bold);
       *
       * Return:
       * - Boolean — The bold setting.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isBold(Integer)
       * @param offset The character offset.
       */
      isBold(offset: Integer): boolean;

      /**
       * Retrieves the italic setting.
       *
       * Return:
       * - Boolean — whether the text is italic, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isItalic()
       */
      isItalic(): boolean;

      /**
       * Retrieves the italic setting at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 13 characters of the tab body to italic.
       *     const text = body.editAsText().setItalic(0, 12, true);
       *
       *     // Gets whether the fifth character in the tab body is set to
       *     // italic and logs it to the console.
       *     const italic = text.isItalic(4);
       *     console.log(italic);
       *
       * Return:
       * - Boolean — The italic setting.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isItalic(Integer)
       * @param offset The character offset.
       */
      isItalic(offset: Integer): boolean;

      /**
       * Retrieves the strikethrough setting.
       *
       * Return:
       * - Boolean — whether the text is strikethrough, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isStrikethrough()
       */
      isStrikethrough(): boolean;

      /**
       * Retrieves the strikethrough setting at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 17 characters of the tab body to strikethrough.
       *     const text = body.editAsText().setStrikethrough(0, 16, true);
       *
       *     // Gets whether the first character in the tab body is set to
       *     // strikethrough and logs it to the console.
       *     const strikethrough = text.isStrikethrough(0);
       *     console.log(strikethrough);
       *
       * Return:
       * - Boolean — The strikethrough setting.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isStrikethrough(Integer)
       * @param offset The character offset.
       */
      isStrikethrough(offset: Integer): boolean;

      /**
       * Retrieves the underline setting.
       *
       * Return:
       * - Boolean — whether the text is underlined, or null if the element contains multiple values for this attribute
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isUnderline()
       */
      isUnderline(): boolean;

      /**
       * Retrieves the underline setting at the specified character offset.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 13 characters of the tab body to underline.
       *     const text = body.editAsText().setUnderline(0, 12, false);
       *
       *     // Gets whether the first character in the tab body is set to
       *     // underline and logs it to the console
       *     const underline = text.editAsText().isUnderline(0);
       *     console.log(underline);
       *
       * Return:
       * - Boolean — The underline setting.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#isUnderline(Integer)
       * @param offset The character offset.
       */
      isUnderline(offset: Integer): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - Text — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#merge()
       */
      merge(): Text;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - Text — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#removeFromParent()
       */
      removeFromParent(): Text;

      /**
       * Replaces all occurrences of a given text pattern with a given replacement string, using regular expressions.
       * The search pattern is passed as a string, not a JavaScript regular expression object. Because of this you'll need to escape any backslashes in the pattern.
       * This methods uses Google's RE2 regular expression library, which limits the supported syntax.
       * The provided regular expression pattern is independently matched against each text block contained in the current element.
       *
       *     const body =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
       *
       *     // Clear the text surrounding "Apps Script", with or without text.
       *     body.replaceText('^.*Apps ?Script.*$', 'Apps Script');
       *
       * Return:
       * - Element — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#replaceText(String,String)
       * @param searchPattern the regex pattern to search for
       * @param replacement the text to use as replacement
       */
      replaceText(searchPattern: string, replacement: string): Element;

      /**
       * Applies the specified attributes to the given character range.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Declares style attributes for font size and font family.
       *     const style = {};
       *     style[DocumentApp.Attribute.FONT_SIZE] = 20;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Impact';
       *
       *     // Sets the style attributes to the first 9 characters in the tab's body.
       *     const text = body.setAttributes(0, 8, style);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setAttributes(Integer,Integer,Object)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param attributes The element's attributes.
       */
      setAttributes(startOffset: Integer, endOffsetInclusive: Integer, attributes: any): Text;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): Text;

      /**
       * Sets the background color for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the background color of the first 3 characters in the
       *     // tab body to hex color #0000FF.
       *     const text = body.editAsText().setBackgroundColor(0, 2, '#0000FF');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setBackgroundColor(Integer,Integer,String)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param color The background color, formatted in CSS notation (like '#ffffff').
       */
      setBackgroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;

      /**
       * Sets the background color.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setBackgroundColor(String)
       * @param color the background color, formatted in CSS notation (like '#ffffff')
       */
      setBackgroundColor(color: string): Text;

      /**
       * Sets the bold setting.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setBold(Boolean)
       * @param bold the bold setting
       */
      setBold(bold: boolean): Text;

      /**
       * Sets the bold setting for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 11 characters in the tab's body to bold.
       *     const text = body.editAsText().setBold(0, 10, true);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setBold(Integer,Integer,Boolean)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param bold The bold setting.
       */
      setBold(startOffset: Integer, endOffsetInclusive: Integer, bold: boolean): Text;

      /**
       * Sets the font family for the specified character range. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. Unrecognized font names will render as Arial. The methods getFontFamily(offset) and setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is deprecated, it will remain available for compatibility with older scripts.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the font of the first 4 characters in the tab's body to Roboto.
       *     const text = body.editAsText().setFontFamily(0, 3, 'Roboto');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setFontFamily(Integer,Integer,String)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param fontFamilyName The name of the font family, from the Font menu in Docs or Google Fonts.
       */
      setFontFamily(startOffset: Integer, endOffsetInclusive: Integer, fontFamilyName: string): Text;

      /**
       * Sets the font family. The name can be any font from the Font menu in Docs or Google Fonts, and is case-sensitive. Unrecognized font names will render as Arial. The methods getFontFamily() and setFontFamily(fontFamilyName) now use string names for fonts instead of the FontFamily enum. Although this enum is deprecated, it will remain available for compatibility with older scripts.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setFontFamily(String)
       * @param fontFamilyName the name of the font family, from the Font menu in Docs or Google Fonts
       */
      setFontFamily(fontFamilyName: string): Text;

      /**
       * Sets the font size for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the size of the first 11 characters in the tab's body to 12.
       *     const text = body.editAsText().setFontSize(0, 10, 12);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setFontSize(Integer,Integer,Number)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param size The font size.
       */
      setFontSize(startOffset: Integer, endOffsetInclusive: Integer, size: number): Text;

      /**
       * Sets the font size.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setFontSize(Number)
       * @param size the font size
       */
      setFontSize(size: number): Text;

      /**
       * Sets the foreground color for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the foreground color of the first 2 characters in the
       *     // tab's body to hex color #FF0000.
       *     const text = body.editAsText().setForegroundColor(0, 1, '#FF0000');
       *
       *     // Gets the foreground color for the second character in the tab's body.
       *     const foregroundColor = text.getForegroundColor(1);
       *
       *     //  Logs the foreground color to the console.
       *     console.log(foregroundColor);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setForegroundColor(Integer,Integer,String)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param color The foreground color, formatted in CSS notation (like '#ffffff').
       */
      setForegroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;

      /**
       * Sets the foreground color.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setForegroundColor(String)
       * @param color the foreground color, formatted in CSS notation (like '#ffffff')
       */
      setForegroundColor(color: string): Text;

      /**
       * Sets the italic setting.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setItalic(Boolean)
       * @param italic the italic setting
       */
      setItalic(italic: boolean): Text;

      /**
       * Sets the italic setting for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 11 characters in the tab's body to italic.
       *     const text = body.editAsText().setItalic(0, 10, true);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setItalic(Integer,Integer,Boolean)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param italic The italic setting.
       */
      setItalic(startOffset: Integer, endOffsetInclusive: Integer, italic: boolean): Text;

      /**
       * Sets the link URL for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Applies a link to the first 11 characters in the body.
       *     const text = body.editAsText().setLinkUrl(0, 10, 'https://example.com');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setLinkUrl(Integer,Integer,String)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param url The link URL.
       */
      setLinkUrl(startOffset: Integer, endOffsetInclusive: Integer, url: string): Text;

      /**
       * Sets the link url.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setLinkUrl(String)
       * @param url the link url
       */
      setLinkUrl(url: string): Text;

      /**
       * Sets the strikethrough setting.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setStrikethrough(Boolean)
       * @param strikethrough the strikethrough setting
       */
      setStrikethrough(strikethrough: boolean): Text;

      /**
       * Sets the strikethrough setting for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 11 characters in the tab's body to strikethrough.
       *     const text = body.editAsText().setStrikethrough(0, 10, true);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setStrikethrough(Integer,Integer,Boolean)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param strikethrough The strikethrough setting.
       */
      setStrikethrough(startOffset: Integer, endOffsetInclusive: Integer, strikethrough: boolean): Text;

      /**
       * Sets the text contents.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Replaces the contents of the body with the text, 'New body text.'
       *     const text = body.editAsText().setText('New body text.');
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setText(String)
       * @param text The new text contents.
       */
      setText(text: string): Text;

      /**
       * Sets the text alignment for a given character range. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the first character in the first paragraph of the active tab be
       *     // superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setTextAlignment(Integer,Integer,TextAlignment)
       * @param startOffset The start offset of the character range.
       * @param endOffsetInclusive The end offset of the character range (inclusive).
       * @param textAlignment The type of text alignment to apply.
       */
      setTextAlignment(startOffset: Integer, endOffsetInclusive: Integer, textAlignment: TextAlignment): Text;

      /**
       * Sets the text alignment. The available types of alignment are DocumentApp.TextAlignment.NORMAL, DocumentApp.TextAlignment.SUBSCRIPT, and DocumentApp.TextAlignment.SUPERSCRIPT.
       *
       *     // Make the entire first paragraph in the active tab be superscript.
       *     const documentTab =
       *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
       *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
       *     text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setTextAlignment(TextAlignment)
       * @param textAlignment the type of text alignment to apply
       */
      setTextAlignment(textAlignment: TextAlignment): Text;

      /**
       * Sets the underline setting.
       *
       * Return:
       * - Text — the current element
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setUnderline(Boolean)
       * @param underline the underline setting
       */
      setUnderline(underline: boolean): Text;

      /**
       * Sets the underline setting for the specified character range.
       *
       *     // Opens the Docs file by its URL. If you created your script from within a
       *     // Google Docs file, you can use DocumentApp.getActiveDocument() instead.
       *     // TODO(developer): Replace the URL with your own.
       *     const doc = DocumentApp.openByUrl(
       *         'https://docs.google.com/document/d/DOCUMENT_ID/edit',
       *     );
       *
       *     // Gets the body contents of the tab by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const body = doc.getTab('123abc').asDocumentTab().getBody();
       *
       *     // Sets the first 11 characters in the tab's body to underline.
       *     const text = body.editAsText().setUnderline(0, 10, true);
       *
       * Return:
       * - Text — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/text#setUnderline(Integer,Integer,Boolean)
       * @param startOffset The text range's start offset.
       * @param endOffsetInclusive The text range's end offset.
       * @param underline The underline setting.
       */
      setUnderline(startOffset: Integer, endOffsetInclusive: Integer, underline: boolean): Text;
    }
    /**
     * An enumeration of the type of text alignments.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.TextAlignment.NORMAL.
     *
     *     // Make the first character in the first paragraph of the active tab be
     *     // superscript.
     *     const documentTab =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
     *     const text = documentTab.getBody().getParagraphs()[0].editAsText();
     *     text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
     */
    enum TextAlignment { NORMAL, SUPERSCRIPT, SUBSCRIPT }
    /**
     * An element representing a region that is unknown or cannot be affected by a script, such as a
     * page number.
     */
    interface UnsupportedElement extends Element {

      /**
       * Returns a detached, deep copy of the current element.
       * Any child elements present in the element are also copied. The new element doesn't have a parent.
       *
       * Return:
       * - UnsupportedElement — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#copy()
       */
      copy(): UnsupportedElement;

      /**
       * Retrieves the element's attributes.
       * The result is an object containing a property for each valid element attribute where each property name corresponds to an item in the DocumentApp.Attribute enumeration.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Append a styled paragraph.
       *     const par = body.appendParagraph('A bold, italicized paragraph.');
       *     par.setBold(true);
       *     par.setItalic(true);
       *
       *     // Retrieve the paragraph's attributes.
       *     const atts = par.getAttributes();
       *
       *     // Log the paragraph attributes.
       *     for (const att in atts) {
       *       Logger.log(`${att}:${atts[att]}`);
       *     }
       *
       * Return:
       * - Object — The element's attributes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getAttributes()
       */
      getAttributes(): any;

      /**
       * Retrieves the element's next sibling element.
       * The next sibling has the same parent and follows the current element.
       *
       * Return:
       * - Element — The next sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getNextSibling()
       */
      getNextSibling(): Element;

      /**
       * Retrieves the element's parent element.
       * The parent element contains the current element.
       *
       * Return:
       * - ContainerElement — The parent element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getParent()
       */
      getParent(): ContainerElement;

      /**
       * Retrieves the element's previous sibling element.
       * The previous sibling has the same parent and precedes the current element.
       *
       * Return:
       * - Element — The previous sibling element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getPreviousSibling()
       */
      getPreviousSibling(): Element;

      /**
       * Retrieves the element's ElementType.
       * Use getType() to determine the exact type of a given element.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Obtain the first element in the active tab's body.
       *
       *     const firstChild = body.getChild(0);
       *
       *     // Use getType() to determine the element's type.
       *     if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH) {
       *       Logger.log('The first element is a paragraph.');
       *     } else {
       *       Logger.log('The first element is not a paragraph.');
       *     }
       *
       * Return:
       * - ElementType — The element type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#getType()
       */
      getType(): ElementType;

      /**
       * Determines whether the element is at the end of the Document.
       *
       * Return:
       * - Boolean — Whether the element is at the end of the tab.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#isAtDocumentEnd()
       */
      isAtDocumentEnd(): boolean;

      /**
       * Merges the element with the preceding sibling of the same type.
       * Only elements of the same ElementType can be merged. Any child elements contained in the current element are moved to the preceding sibling element.
       * The current element is removed from the document.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Example 1: Merge paragraphs
       *     // Append two paragraphs to the document's active tab.
       *     const par1 = body.appendParagraph('Paragraph 1.');
       *     const par2 = body.appendParagraph('Paragraph 2.');
       *     // Merge the newly added paragraphs into a single paragraph.
       *     par2.merge();
       *
       *     // Example 2: Merge table cells
       *     // Create a two-dimensional array containing the table's cell contents.
       *     const cells = [
       *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
       *       ['Row 2, Cell 1', 'Row 2, Cell 2'],
       *     ];
       *     // Build a table from the array.
       *     const table = body.appendTable(cells);
       *     // Get the first row in the table.
       *     const row = table.getRow(0);
       *     // Get the two cells in this row.
       *     const cell1 = row.getCell(0);
       *     const cell2 = row.getCell(1);
       *     // Merge the current cell into its preceding sibling element.
       *     const merged = cell2.merge();
       *
       * Return:
       * - UnsupportedElement — The merged element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#merge()
       */
      merge(): UnsupportedElement;

      /**
       * Removes the element from its parent.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Remove all images in the active tab's body.
       *     const imgs = body.getImages();
       *     for (let i = 0; i < imgs.length; i++) {
       *       imgs[i].removeFromParent();
       *     }
       *
       * Return:
       * - UnsupportedElement — The removed element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#removeFromParent()
       */
      removeFromParent(): UnsupportedElement;

      /**
       * Sets the element's attributes.
       * The specified attributes parameter must be an object where each property name is an item in the DocumentApp.Attribute enumeration and each property value is the new value to be applied.
       *
       *     const doc = DocumentApp.getActiveDocument();
       *     const documentTab = doc.getActiveTab().asDocumentTab();
       *     const body = documentTab.getBody();
       *
       *     // Define a custom paragraph style.
       *     const style = {};
       *     style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
       *         DocumentApp.HorizontalAlignment.RIGHT;
       *     style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
       *     style[DocumentApp.Attribute.FONT_SIZE] = 18;
       *     style[DocumentApp.Attribute.BOLD] = true;
       *
       *     // Append a plain paragraph.
       *     const par = body.appendParagraph('A paragraph with custom style.');
       *
       *     // Apply the custom style.
       *     par.setAttributes(style);
       *
       * Return:
       * - UnsupportedElement — The current element.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/documents.currentonly
       * - https://www.googleapis.com/auth/documents
       *
       * https://developers.google.com/apps-script/reference/document/unsupported-element#setAttributes(Object)
       * @param attributes The element's attributes.
       */
      setAttributes(attributes: any): UnsupportedElement;
    }
    /**
     * An enumeration of the supported vertical alignment types.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DocumentApp.VerticalAlignment.BOTTOM.
     *
     * Use the VerticalAlignment enumeration to set the vertical alignment of table cells.
     *
     *     const body =
     *         DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
     *
     *     // Append table containing two cells.
     *     const table = body.appendTable([['Top', 'Center', 'Bottom']]);
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
