// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Sites {
    /**
     * A Sites Attachment such as a file attached to a page.
     *
     * Note that an Attachment is a Blob and can be used anywhere Blob input is expected.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     *
     *     var filesPage = SitesApp.getSite('example.com', 'mysite').getChildByName("files");
     *     var attachments = filesPage.getAttachments();
     *
     *     // DocsList.createFile accepts a blob input. Since an Attachment is just a blob, we can
     *     // just pass it directly to that method
     *     var file = DocsList.createFile(attachments[0]);
     */
    interface Attachment {

      /**
       * Deletes this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     attachments[0].deleteAttachment();
       * https://developers.google.com/apps-script/reference/sites/attachment#deleteAttachment()
       */
      deleteAttachment(): void;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/sites/attachment#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the type of this attachment (HOSTED or WEB).
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var attType = attachments[0].getAttachmentType();
       *
       *     // This will log "Hosted"
       *     Logger.log(attType);
       *
       *     // Since this returns an AttachmentType and not a String, for the
       *     // purposes of equivalence we want to either do this or cast the
       *     // type to a String
       *     if(attType ==  SitesService.AttachmentType.HOSTED) {
       *       Logger.log("This is a match");
       *     }
       *
       *     // The above is the same as
       *     if(String(attType) == "Hosted") {
       *        Logger.log("This is also a match");
       *     }
       * https://developers.google.com/apps-script/reference/sites/attachment#getAttachmentType()
       */
      getAttachmentType(): AttachmentType;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/sites/attachment#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Return the mime type of this attachment. Fails for web attachments.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var contentType = attachments[0].getContentType();
       * https://developers.google.com/apps-script/reference/sites/attachment#getContentType()
       */
      getContentType(): string;

      /**
       * Return the date this attachment was first published.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var date = attachments[0].getDatePublished();
       * https://developers.google.com/apps-script/reference/sites/attachment#getDatePublished()
       */
      getDatePublished(): Date;

      /**
       * Return the description of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var description = attachments[0].getDescription();
       * https://developers.google.com/apps-script/reference/sites/attachment#getDescription()
       */
      getDescription(): string;

      /**
       * Return the date this attachment was last updated.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var date = attachments[0].getLastUpdated();
       * https://developers.google.com/apps-script/reference/sites/attachment#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Get the parent page of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *
       *     // This is equal to pages[0]
       *     var parent = attachments[0].getParent();
       * https://developers.google.com/apps-script/reference/sites/attachment#getParent()
       */
      getParent(): Page;

      /**
       * Return the title of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var title = attachments[0].getTitle();
       * https://developers.google.com/apps-script/reference/sites/attachment#getTitle()
       */
      getTitle(): string;

      /**
       * Return the download url for this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     var url = attachments[0].getUrl();
       * https://developers.google.com/apps-script/reference/sites/attachment#getUrl()
       */
      getUrl(): string;

      /**
       * Set the mime type of this attachment. Fails for web attachments.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     attachments[0].setContentType("text/plain");
       * https://developers.google.com/apps-script/reference/sites/attachment#setContentType(String)
       * @param contentType the new mime type
       */
      setContentType(contentType: string): Attachment;

      /**
       * Set the descripton of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *
       *     // This is an example of chaining in action
       *     attachments[0].setTitle("New Title")
       *                   .setDescription("New Description");
       * https://developers.google.com/apps-script/reference/sites/attachment#setDescription(String)
       * @param description the new description
       */
      setDescription(description: string): Attachment;

      /**
       * Set the actual data of this attachment. Fails for web attachments.
       *
       *
       *     var pages = SitesApp.getSite('demositeappsscript').getChildren();
       *     var attachments = pages[0].getAttachments();
       *
       *     // This snippet demonstrates how to create a new text blob and attach it
       *     // to the page
       *     var blob = Utilities.newBlob("This data is now the attachment content");
       *
       *     // We must set a filename since we created the blob from String data
       *     // instead of something like a URL source
       *     blob.setName("attachment.txt");
       *     attachments[0].setTitle("New Title")
       *                   .setDescription("New Description")
       *                   .setContentType("text/plain")
       *                   .setFrom(blob);
       * https://developers.google.com/apps-script/reference/sites/attachment#setFrom(BlobSource)
       * @param blob the new data
       */
      setFrom(blob: Base.BlobSource): Attachment;

      /**
       * Set the parent page of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *     // Sets the parent page to be the next sibling
       *     attachments[0].setParent(pages[1]);
       * https://developers.google.com/apps-script/reference/sites/attachment#setParent(Page)
       * @param parent the new parent
       */
      setParent(parent: Page): Attachment;

      /**
       * Set the title of this attachment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var attachments = pages[0].getAttachments();
       *
       *     // This is an example of chaining in action
       *     attachments[0].setTitle("New Title")
       *                   .setDescription("New Description");
       * https://developers.google.com/apps-script/reference/sites/attachment#setTitle(String)
       * @param title the new title
       */
      setTitle(title: string): Attachment;

      /**
       * Sets the download url for this attachment. Only valid for web attachments.
       *
       *
       *     var pages = SitesApp.getSite('demositeappsscript').getChildren();
       *     var attachments = pages[0].getAttachments();
       *
       *     attachments[0].setTitle("New Web Attachment")
       *                   .setDescription("New Description")
       *                   .setUrl("http://example.com/files/your_file.txt");
       * https://developers.google.com/apps-script/reference/sites/attachment#setUrl(String)
       * @param url
       */
      setUrl(url: string): Attachment;
    }
    /**
     * A typesafe enum for sites attachment type.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    enum AttachmentType { WEB, HOSTED }
    /**
     * A Sites Column - a column from a Sites List page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Column {

      /**
       * Deletes this column.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var columns = page.getColumns();
       *     columns[0].deleteColumn();
       * https://developers.google.com/apps-script/reference/sites/column#deleteColumn()
       */
      deleteColumn(): void;

      /**
       * Gets the name of this column.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var columns = page.getColumns();
       *     var name = columns[0].getName();
       * https://developers.google.com/apps-script/reference/sites/column#getName()
       */
      getName(): string;

      /**
       * Returns the List Page this column belongs to.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var columns = page.getColumns();
       *
       *     // This returns a reference to page
       *     var parentPage = columns[0].getParent();
       * https://developers.google.com/apps-script/reference/sites/column#getParent()
       */
      getParent(): Page;

      /**
       * Sets the name of this column.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var columns = page.getColumns();
       *     columns[0].setName("New Name");
       * https://developers.google.com/apps-script/reference/sites/column#setName(String)
       * @param name the new name
       */
      setName(name: string): Column;
    }
    /**
     * A Comment attached to any Sites page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Comment {

      /**
       * Deletes this comment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *
       *     // Let's delete all of Eric's comments
       *     for(var i = 0; i < comments.length; i++) {
       *       if(comments[i].getAuthorEmail() == "eric@example.com") {
       *         comments[i].deleteComment();
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/sites/comment#deleteComment()
       */
      deleteComment(): void;

      /**
       * Gets the email address of the author of this comment.
       * https://developers.google.com/apps-script/reference/sites/comment#getAuthorEmail()
       */
      getAuthorEmail(): string;

      /**
       * Gets the name of the author of this comment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var comment = comments[0];
       *     var authorEmail = comment.getAuthorEmail();
       * https://developers.google.com/apps-script/reference/sites/comment#getAuthorName()
       */
      getAuthorName(): string;

      /**
       * Return the content of this comment as a String.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var content = comments[0].getContent()
       * https://developers.google.com/apps-script/reference/sites/comment#getContent()
       */
      getContent(): string;

      /**
       * Return the date this comment was originally published.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var date = comments[0].getDatePublished();
       * https://developers.google.com/apps-script/reference/sites/comment#getDatePublished()
       */
      getDatePublished(): Date;

      /**
       * Return the date this comment was last updated.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var date = comments[0].getLastUpdated();
       * https://developers.google.com/apps-script/reference/sites/comment#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Get the parent page of this comment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var comment = comments[0];
       *
       *     // parentPage should be the same page as pages[0]
       *     var parentPage = comment.getParent();
       * https://developers.google.com/apps-script/reference/sites/comment#getParent()
       */
      getParent(): Page;

      /**
       * Set the content of this comment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var comment = comments[0];
       *      comment.setContent("New Content");
       *
       *     // Note that this returns a Comment, so you can chain the method calls
       *     var updatedContent = comment.setContent("New Content")
       *                                 .getContent();
       * https://developers.google.com/apps-script/reference/sites/comment#setContent(String)
       * @param content the new content
       */
      setContent(content: string): Comment;

      /**
       * Set the parent page of this comment.
       *
       *
       *     var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
       *     var comments = pages[0].getComments();
       *     var comment = comments[0];
       *
       *     // Let's say we want to move the comment to its parent's next neighbor ..
       *     // This will only work if the example site has multiple children
       *     var newParentPage = comment.setParent(pages[1]).getParent();
       * https://developers.google.com/apps-script/reference/sites/comment#setParent(Page)
       * @param parent the new parent
       */
      setParent(parent: Page): Comment;
    }
    /**
     * A Sites ListItem - a list element from a Sites List page.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface ListItem {

      /**
       * Deletes this list item.
       *
       *
       *     // This code sample deletes all list items from a List page
       *     // Running this code sample against a Page that is a standard web page will
       *     // cause getListItems() to throw an exception
       *     var page = SitesApp.getSite('demositeappsscript').getChildByName('mylistpage');
       *     var items = page.getListItems();
       *     for(var i = 0; i < items.length; i++) {
       *       items[i].deleteListItem();
       *     }
       * https://developers.google.com/apps-script/reference/sites/list-item#deleteListItem()
       */
      deleteListItem(): void;

      /**
       * Return the date this list item was first published.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var items = page.getListItems();
       *     var date = items[0].getDatePublished();
       * https://developers.google.com/apps-script/reference/sites/list-item#getDatePublished()
       */
      getDatePublished(): Date;

      /**
       * Return the date this comment was last updated.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var items = page.getListItems();
       *     var date = items[0].getLastUpdated();
       * https://developers.google.com/apps-script/reference/sites/list-item#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Get the parent page of this list item.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var items = page.getListItems();
       *     // parentPage will equal page
       *     var parentPage = items[0].getParent();
       * https://developers.google.com/apps-script/reference/sites/list-item#getParent()
       */
      getParent(): Page;

      /**
       * Get the value of this ListItem for a numbered column.
       *
       *
       *     var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
       *     var listItem = page.getListItems()[0];
       *
       *     // Remember that rows are 0 indexed. This returns the item in the first column
       *     // of the list. If an index that is greater than the number of columns is used,
       *     // the script will throw an "InvalidArgument: index" exception.
       *     var value = listItem.getValueByIndex(5);
       * https://developers.google.com/apps-script/reference/sites/list-item#getValueByIndex(Integer)
       * @param index the column to get the value of
       */
      getValueByIndex(index: Integer): string;

      /**
       * Get the value of this ListItem for a named column.
       *
       *
       *     var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
       *     var listItem = page.getListItems()[0];
       *
       *     // Suppose we have a column named "Owner" - this will let us fetch the value
       *     // for the list item
       *     var value = listItem.getValueByName("Owner");
       *     Logger.log(value);
       * https://developers.google.com/apps-script/reference/sites/list-item#getValueByName(String)
       * @param name the column to get the value of
       */
      getValueByName(name: string): string;

      /**
       * Set the parent page of this list item.
       *
       *
       *     var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
       *     var secondListPage = SitesApp.getSite('example.com', 'mysite')
       *                                  .getChildByName('secondlistpage');
       *     var items = page.getListItems();
       *
       *     // Returns secondListPage
       *     var parentPage = items[0].setParent(secondListPage).getParent();
       * https://developers.google.com/apps-script/reference/sites/list-item#setParent(Page)
       * @param parent the new parent
       */
      setParent(parent: Page): ListItem;

      /**
       * Set the value of this ListItem for a numbered column. For URL columns the value must be an
       * XHTML anchor tag, with XML entities escaped.
       *
       *
       *     var page = SitesApp.getSite("example.com", "mysite").getChildByName("mylistpage");
       *     var listItem = page.getListItems()[0];
       *     listItem.setValueByIndex(1, 'This is the new value');
       *     listItem.setValueByIndex(2, '<a href="http://www.example.com?a=1&amp;b=2">Example</a>');
       * https://developers.google.com/apps-script/reference/sites/list-item#setValueByIndex(Integer,String)
       * @param index the column to set the value of
       * @param value the new value
       */
      setValueByIndex(index: Integer, value: string): ListItem;

      /**
       * Set the value of this ListItem for a numbered column. For URL columns the value must be an
       * XHTML anchor tag, with XML entities escaped.
       *
       *
       *     var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
       *     var listItem = page.getListItems()[0];
       *     listItem.setValueByName('Owner', 'Eric');
       *     listItem.setValueByName('Page', '<a href="http://www.example.com?a=1&amp;b=2">Example</a>');
       * https://developers.google.com/apps-script/reference/sites/list-item#setValueByName(String,String)
       * @param name the column to set the value of
       * @param value the new value
       */
      setValueByName(name: string, value: string): ListItem;
    }
    /**
     * A Page on a Google Site.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Page {

      /**
       * Add a new column to the list. Only valid for list pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     var page = site.getChildByName("listpage");
       *     // Only valid on List pages. Check for the type like so:
       *     //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
       *     var columns = page.addColumn("new-column");
       * https://developers.google.com/apps-script/reference/sites/page#addColumn(String)
       * @param name the new column's name
       */
      addColumn(name: string): Column;

      /**
       * Add an attachment to the page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     // Create a new blob and attach it. Many useful functions also return
       *     // blobs file uploads, URLFetch
       *     var blob = Utilities.newBlob("Here is some data", "text/plain", "data.txt");
       *
       *     // Note that the filename must be unique or this call will fail
       *     page.addHostedAttachment(blob);
       * https://developers.google.com/apps-script/reference/sites/page#addHostedAttachment(BlobSource)
       * @param blob the data for the attachment
       */
      addHostedAttachment(blob: Base.BlobSource): Attachment;

      /**
       * Add an attachment to the page. This version of the function allows for a description.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     // Create a new blob and attach it. Many useful: functions also return
       *     // blobs file uploads, URLFetch
       *     var blob = Utilities.newBlob("Here is some data", "text/plain", "data.txt");
       *
       *     // Note that the filename must be unique or this call will fail
       *     page.addHostedAttachment(blob, "Some newly created data");
       * https://developers.google.com/apps-script/reference/sites/page#addHostedAttachment(BlobSource,String)
       * @param blob the data for the attachment
       * @param description a description of the attachment
       */
      addHostedAttachment(blob: Base.BlobSource, description: string): Attachment;

      /**
       * Add a list item to the list. Only valid for list pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     var page = site.getChildByName("listpage");
       *     // Only valid on List pages. Check for the type like so:
       *     //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
       *     // Returns only one item
       *     page.addListItem([ "John", "Smith", "123 Main St"]);
       * https://developers.google.com/apps-script/reference/sites/page#addListItem(String)
       * @param values the values for each column
       */
      addListItem(values: string[]): ListItem;

      /**
       * Add a web attachment to the page. Only valid for file cabinet pages.
       *
       *
       * Web attachments are links - they are not actually hosted by Google Sites.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     // fetch the child - this must be a File Cabinet page
       *     // to programmatically check this, do a comparison:
       *     //    if(page.getPageType() == SitesApp.PageType.FILE_CABINET_PAGE)
       *     var page = site.getChildByName("files");
       *     page.addWebAttachment("Google Robots file",
       *                           "This is Google's robots.txt file",
       *                           "http://www.google.com/robots.txt");
       * https://developers.google.com/apps-script/reference/sites/page#addWebAttachment(String,String,String)
       * @param title the title of the attachment
       * @param description a description of the attachment
       * @param url the url of the file being attached
       */
      addWebAttachment(title: string, description: string, url: string): Attachment;

      /**
       * Create an announcements for this page. Only valid for announcement pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     // This snippet will only work with announcement pages - this is different
       *     // from a page that is an annoucement (individual announcements). To check
       *     // if this method can be called:
       *     //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
       *     var page = site.getChildByName("news");
       *     page.createAnnouncement("Breaking news!", "<h1>Apps Script rocks!</h1>");
       * https://developers.google.com/apps-script/reference/sites/page#createAnnouncement(String,String)
       * @param title the page title
       * @param html the page content
       */
      createAnnouncement(title: string, html: string): Page;

      /**
       * Create an announcements for this page. Only valid for announcement pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     // This snippet will only work with announcement pages - this is different
       *     // from a page that is an annoucement (individual announcements). To check
       *     // if this method can be called:
       *     //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
       *     var page = site.getChildByName("news");
       *     page.createAnnouncement("Breaking news!",
       *                             "<h1>Apps Script rocks!</h1>",
       *                             true);
       * https://developers.google.com/apps-script/reference/sites/page#createAnnouncement(String,String,Boolean)
       * @param title the page title
       * @param html the page content
       * @param asDraft whether to make the announcement a draft
       */
      createAnnouncement(title: string, html: string, asDraft: boolean): Page;

      /**
       * Create a new announcements page. Note that a parent site or page cannot have more than 500
       * child pages.
       *
       *
       *     // This method can be called from both a Site instance
       *     // as well as a Page instance
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement",
       *                                  "<h1>Your announcement goes here</h1>");
       *
       *     page.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement-child",
       *                                  "<h1>Your announcement goes here</h1>");
       * https://developers.google.com/apps-script/reference/sites/page#createAnnouncementsPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createAnnouncementsPage(title: string, name: string, html: string): Page;

      /**
       * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
       * pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createFileCabinetPage("New File Cabinet",
       *                                "new-file-cabinet",
       *                                "<h1>Your HTML here</h1>");
       *
       *     page.createFileCabinetPage("New File Cabinet",
       *                                  "new-file-cabinet-child",
       *                                  "<h1>Your HTML here</h1>");
       * https://developers.google.com/apps-script/reference/sites/page#createFileCabinetPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createFileCabinetPage(title: string, name: string, html: string): Page;

      /**
       * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createListPage("New List Page",
       *                         "new-list-page",
       *                         "<h1>Your List Page HTML here</h1>",
       *                         [ "col1", "col2" ]);
       *
       *     page.createListPage("New List Page",
       *                         "new-list-page-child",
       *                         "<h1>Your List Page HTML here</h1>",
       *                         [ "col1", "col2" ]);
       * https://developers.google.com/apps-script/reference/sites/page#createListPage(String,String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       * @param columnNames the column names used for the list
       */
      createListPage(title: string, name: string, html: string, columnNames: string[]): Page;

      /**
       * Create a new page from a template. Note that a parent site or page cannot have more than 500
       * child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var template = site.getTemplates()[0];
       *
       *     // If an invalid template is passed, this will throw an "Invalid Argument" error.
       *     site.createPageFromTemplate("ClonedPage", "cloned-page", template);
       * https://developers.google.com/apps-script/reference/sites/page#createPageFromTemplate(String,String,Page)
       * @param title the page title
       * @param name the page name
       * @param template the template page
       */
      createPageFromTemplate(title: string, name: string, template: Page): Page;

      /**
       * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement",
       *                                  "<h1>Your announcement goes here</h1>");
       *
       *     page.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement-child",
       *                                  "<h1>Your announcement goes here</h1>");
       * https://developers.google.com/apps-script/reference/sites/page#createWebPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createWebPage(title: string, name: string, html: string): Page;

      /**
       * Deletes this page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     // Delete ALL the pages!
       *     var pages = site.getAllDescendants();
       *     for(var i in pages) {
       *       pages[i].deletePage();
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#deletePage()
       */
      deletePage(): void;

      /**
       * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getAllDescendants();
       * https://developers.google.com/apps-script/reference/sites/page#getAllDescendants()
       */
      getAllDescendants(): Page[];

      /**
       * Gets an array of descendant pages, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var descendants = site.getAllDescendants({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in descendants) {
       *       Logger.log(descendants[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAllDescendants(Object)
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      getAllDescendants(options: object): Page[];

      /**
       * Get the announcements for this page. Only valid for announcement pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     // This snippet will only work with announcement pages - this is different
       *     // from a page that is an annoucement (individual announcements). To check
       *     // if this method can be called:
       *     //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
       *     var page = site.getChildByName("news");
       *     var announcements = page.getAnnouncements();
       *
       *     for(var i in announcements) {
       *       Logger.log(announcements[i].getHtmlContent());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAnnouncements()
       */
      getAnnouncements(): Page[];

      /**
       * Get the announcements for this page. Only valid for announcement pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     // This snippet will only work with announcement pages - this is different
       *     // from a page that is an annoucement (individual announcements). To check
       *     // if this method can be called:
       *     //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
       *     var page = site.getChildByName("news");
       *     var announcements = page.getAnnouncements({ start: 0,
       *                                                 max: 20,
       *                                                 includeDrafts: false,
       *                                                 includeDeleted: false,
       *                                                 search: "Breaking" });
       *
       *     for(var i in announcements) {
       *       Logger.log(announcements[i].getHtmlContent());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAnnouncements(Object)
       * @param optOptions A JavaScript object containing advanced parameters
       */
      getAnnouncements(optOptions: object): Page[];

      /**
       * Get the attachments for this page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     var attachments = page.getAttachments();
       *     for(var i in attachments) {
       *       Logger.log(attachments[i].getTitle());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAttachments()
       */
      getAttachments(): Attachment[];

      /**
       * Get the attachments for this page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     // This returns only one attachment
       *     var attachments = page.getAttachments({ start: 0, max: 1});
       *     for(var i in attachments) {
       *       Logger.log(attachments[i].getTitle());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAttachments(Object)
       * @param optOptions a JavaScript object containing optional parameters
       */
      getAttachments(optOptions: object): Attachment[];

      /**
       * Get the emails of the authors of the page
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     var authors = page.getAuthors();
       *
       *     for(var i in authors) {
       *       Logger.log(authors[i]);
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getAuthors()
       */
      getAuthors(): string[];

      /**
       * Gets a particular child page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getChildByName("childPage");
       * https://developers.google.com/apps-script/reference/sites/page#getChildByName(String)
       * @param name the child page name
       */
      getChildByName(name: string): Page;

      /**
       * Gets an array of child pages, up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getChildren();
       * https://developers.google.com/apps-script/reference/sites/page#getChildren()
       */
      getChildren(): Page[];

      /**
       * Gets an array of child pages, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var childPages = site.getChildren({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in childPages) {
       *       Logger.log(childPages[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getChildren(Object)
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      getChildren(options: object): Page[];

      /**
       * Get the columns for the list. Only valid for list pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     var page = site.getChildByName("listpage");
       *     // Only valid on List pages. Check for the type like so:
       *     //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
       *     var columns = page.getColumns();
       *
       *     for(var i in columns) {
       *       Logger.log(columns[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getColumns()
       */
      getColumns(): Column[];

      /**
       * Return the date this page was first published.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName() + " was published " + page.getDatePublished());
       * https://developers.google.com/apps-script/reference/sites/page#getDatePublished()
       */
      getDatePublished(): Date;

      /**
       * Get the HTML content of the page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getHtmlContent());
       * https://developers.google.com/apps-script/reference/sites/page#getHtmlContent()
       */
      getHtmlContent(): string;

      /**
       * Returns whether the page is in draft mode. Only valid for announcements.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     Logger.log("Is this Announcement Page a draft?", page.getIsDraft());
       * https://developers.google.com/apps-script/reference/sites/page#getIsDraft()
       */
      getIsDraft(): boolean;

      /**
       * Return the last edit date, which includes only content edits.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName() + " was last updated " + page.getLastEdited());
       * https://developers.google.com/apps-script/reference/sites/page#getLastEdited()
       */
      getLastEdited(): Date;

      /**
       * Return the last updated date, which includes non-content changes like moving.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName() + " was last updated " + page.getLastUpdated());
       * https://developers.google.com/apps-script/reference/sites/page#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Get the list items for the list. Only valid for list pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     var page = site.getChildByName("listpage");
       *     // Only valid on List pages. Check for the type like so:
       *     //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
       *     var items = page.getListItems();
       *
       *     for(var i in items) {
       *       Logger.log(items[i].getValueByName("Status"));
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getListItems()
       */
      getListItems(): ListItem[];

      /**
       * Get the list items for the list. Only valid for list pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *
       *     var page = site.getChildByName("listpage");
       *     // Only valid on List pages. Check for the type like so:
       *     //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
       *     // Returns only one item
       *     var items = page.getListItems({ start:0, max: 1 });
       *
       *     for(var i in items) {
       *       Logger.log(items[i].getValueByName("Status"));
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getListItems(Object)
       * @param optOptions A JavaScript object of optional parameters
       */
      getListItems(optOptions: object): ListItem[];

      /**
       * Return the page's name.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName());
       * https://developers.google.com/apps-script/reference/sites/page#getName()
       */
      getName(): string;

      /**
       * Return the type of this page as a SitesApp.PageType enum.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     var pageType = page.getPageType();
       *     if(pageType == SitesApp.PageType.WEB_PAGE) {
       *        Logger.log(page.getName() + " is a Web Page");
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#getPageType()
       */
      getPageType(): PageType;

      /**
       * Return the parent of this page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName() + " parent: " + page.getParent().getName());
       * https://developers.google.com/apps-script/reference/sites/page#getParent()
       */
      getParent(): Page;

      /**
       * Returns the plain-text page content.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getName() + " content: " + page.getTextContent());
       * https://developers.google.com/apps-script/reference/sites/page#getTextContent()
       */
      getTextContent(): string;

      /**
       * Return the page's title.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getTitle());
       * https://developers.google.com/apps-script/reference/sites/page#getTitle()
       */
      getTitle(): string;

      /**
       * Get the url of the page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     Logger.log(page.getUrl());
       * https://developers.google.com/apps-script/reference/sites/page#getUrl()
       */
      getUrl(): string;

      /**
       * Returns whether a page has been deleted.
       * https://developers.google.com/apps-script/reference/sites/page#isDeleted()
       */
      isDeleted(): boolean;

      /**
       * Returns whether this page is a copyable template.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var firstTemplate = site.getTemplates()[0];
       *     if(firstTemplate.isTemplate()) {
       *       Logger.log("This will always return true");
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#isTemplate()
       */
      isTemplate(): boolean;

      /**
       * Publish this page as a copyable template.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     // Turn this page into a publishable template
       *     page.publishedAsTemplate("template-name");
       * https://developers.google.com/apps-script/reference/sites/page#publishAsTemplate(String)
       * @param name The name of the new template
       */
      publishAsTemplate(name: string): Page;

      /**
       * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var matches = site.search("targetText");
       *
       *     for(var i in matches) {
       *       Logger.log(matches[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#search(String)
       * @param query the full text search query to match
       */
      search(query: string): Page[];

      /**
       * Gets an array of descendant pages that match a search query, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var childPages = site.getChildren({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in childPages) {
       *       Logger.log(childPages[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/page#search(String,Object)
       * @param query the full text search query to match
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      search(query: string, options: object): Page[];

      /**
       * Set the HTML content of the page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     page.setHtmlContent("<h1>New Page Content</h1>");
       * https://developers.google.com/apps-script/reference/sites/page#setHtmlContent(String)
       * @param html the new content
       */
      setHtmlContent(html: string): Page;

      /**
       * Sets whether the page is in draft mode. Only valid for announcements.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     // Take the page out of draft mode
       *     page.setIsDraft(false);
       * https://developers.google.com/apps-script/reference/sites/page#setIsDraft(Boolean)
       * @param draft the new status
       */
      setIsDraft(draft: boolean): Page;

      /**
       * Set this page's name.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     page.setName("new-name");
       * https://developers.google.com/apps-script/reference/sites/page#setName(String)
       * @param name the new name
       */
      setName(name: string): Page;

      /**
       * Set the parent of this page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var child = site.getChildByName("childToBeMoved");
       *     var parent = site.getChildByName("newParent");
       *     child.setParent(parent);
       * https://developers.google.com/apps-script/reference/sites/page#setParent(Page)
       * @param parent the new parent
       */
      setParent(parent: Page): Page;

      /**
       * Set the page's title.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *     page.setTitle("New Title");
       * https://developers.google.com/apps-script/reference/sites/page#setTitle(String)
       * @param title the new title
       */
      setTitle(title: string): Page;
      /** @deprecated DO NOT USE */ addComment(content: string): Comment;
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getComments(optOptions: object): Comment[];
      /** @deprecated DO NOT USE */ getPageName(): string;
      /** @deprecated DO NOT USE */ getSelfLink(): string;
    }
    /**
     * A typesafe enum for sites page type.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    enum PageType { WEB_PAGE, LIST_PAGE, ANNOUNCEMENT, ANNOUNCEMENTS_PAGE, FILE_CABINET_PAGE }
    /**
     * An object representing a Google Site.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface Site {

      /**
       * Adds the given user to the list of editors for the Site. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/sites/site#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Site;

      /**
       * Adds the given user to the list of editors for the Site. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/sites/site#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Site;

      /**
       * Adds the given array of users to the list of editors for the Site. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/sites/site#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Site;

      /**
       * Add a new owner to the website
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     site.addOwner("eric@example.com");
       * https://developers.google.com/apps-script/reference/sites/site#addOwner(String)
       * @param email The email of the user to add as an owner
       */
      addOwner(email: string): Site;

      /**
       * Add a new owner to the website
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var currentUser = Session.getActiveUser();
       *     site.addOwner(currentUser);
       * https://developers.google.com/apps-script/reference/sites/site#addOwner(User)
       * @param user The user to add as an owner
       */
      addOwner(user: Base.User): Site;

      /**
       * Adds the given user to the list of viewers for the Site. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/sites/site#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Site;

      /**
       * Adds the given user to the list of viewers for the Site. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/sites/site#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Site;

      /**
       * Adds the given array of users to the list of viewers for the Site. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/sites/site#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Site;

      /**
       * Create a new announcements page. Note that a parent site or page cannot have more than 500
       * child pages.
       *
       *
       *     // This method can be called from both a Site instance
       *     // as well as a Page instance
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement",
       *                                  "<h1>Your announcement goes here</h1>");
       *
       *     page.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement-child",
       *                                  "<h1>Your announcement goes here</h1>");
       * https://developers.google.com/apps-script/reference/sites/site#createAnnouncementsPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createAnnouncementsPage(title: string, name: string, html: string): Page;

      /**
       * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
       * pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createFileCabinetPage("New File Cabinet",
       *                                "new-file-cabinet",
       *                                "<h1>Your HTML here</h1>");
       *
       *     page.createFileCabinetPage("New File Cabinet",
       *                                  "new-file-cabinet-child",
       *                                  "<h1>Your HTML here</h1>");
       * https://developers.google.com/apps-script/reference/sites/site#createFileCabinetPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createFileCabinetPage(title: string, name: string, html: string): Page;

      /**
       * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createListPage("New List Page",
       *                         "new-list-page",
       *                         "<h1>Your List Page HTML here</h1>",
       *                         [ "col1", "col2" ]);
       *
       *     page.createListPage("New List Page",
       *                         "new-list-page-child",
       *                         "<h1>Your List Page HTML here</h1>",
       *                         [ "col1", "col2" ]);
       * https://developers.google.com/apps-script/reference/sites/site#createListPage(String,String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       * @param columnNames the column names used for the list
       */
      createListPage(title: string, name: string, html: string, columnNames: string[]): Page;

      /**
       * Create a new page from a template. Note that a parent site or page cannot have more than 500
       * child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var template = site.getTemplates()[0];
       *
       *     // If an invalid template is passed, this will throw an "Invalid Argument" error.
       *     site.createPageFromTemplate("ClonedPage", "cloned-page", template);
       * https://developers.google.com/apps-script/reference/sites/site#createPageFromTemplate(String,String,Page)
       * @param title the page title
       * @param name the page name
       * @param template the template page
       */
      createPageFromTemplate(title: string, name: string, template: Page): Page;

      /**
       * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.
       *
       *
       *     // This method can be called from either a site or a page.
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var page = site.getChildren()[0];
       *
       *     site.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement",
       *                                  "<h1>Your announcement goes here</h1>");
       *
       *     page.createAnnouncementsPage("New Announcement",
       *                                  "new-announcement-child",
       *                                  "<h1>Your announcement goes here</h1>");
       * https://developers.google.com/apps-script/reference/sites/site#createWebPage(String,String,String)
       * @param title the page title
       * @param name the page name
       * @param html the page content
       */
      createWebPage(title: string, name: string, html: string): Page;

      /**
       * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getAllDescendants();
       * https://developers.google.com/apps-script/reference/sites/site#getAllDescendants()
       */
      getAllDescendants(): Page[];

      /**
       * Gets an array of descendant pages, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var descendants = site.getAllDescendants({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in descendants) {
       *       Logger.log(descendants[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#getAllDescendants(Object)
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      getAllDescendants(options: object): Page[];

      /**
       * Gets a particular child page.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getChildByName("childPage");
       * https://developers.google.com/apps-script/reference/sites/site#getChildByName(String)
       * @param name the child page name
       */
      getChildByName(name: string): Page;

      /**
       * Gets an array of child pages, up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var pages = site.getChildren();
       * https://developers.google.com/apps-script/reference/sites/site#getChildren()
       */
      getChildren(): Page[];

      /**
       * Gets an array of child pages, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var childPages = site.getChildren({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in childPages) {
       *       Logger.log(childPages[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#getChildren(Object)
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      getChildren(options: object): Page[];

      /**
       * Gets the list of editors for this Site.
       * https://developers.google.com/apps-script/reference/sites/site#getEditors()
       */
      getEditors(): Base.User[];

      /**
       * Return the name of the site
       *
       *
       *     var name = SitesApp.getSite('example.com', 'mysite').getName();
       * https://developers.google.com/apps-script/reference/sites/site#getName()
       */
      getName(): string;

      /**
       * Retrieves list of owners for the site
       *
       *
       *     var owners = SitesApp.getSite('example.com', 'mysite').getOwners();
       *     for(var i in owners) {
       *       Logger.log(owners[i].getEmail())
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#getOwners()
       */
      getOwners(): Base.User[];

      /**
       * Return the summary of the web site
       *
       *
       *     var summary = SitesApp.getSite('example.com', 'mysite').getSummary();
       * https://developers.google.com/apps-script/reference/sites/site#getSummary()
       */
      getSummary(): string;

      /**
       * Returns all template pages.
       *
       *
       *     var templates = SitesApp.getSite('example.com', 'mysite').getTemplates();
       *     for(var i in templates) {
       *       Logger.log(templates[i].getName())
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#getTemplates()
       */
      getTemplates(): Page[];

      /**
       * Gets the theme of the site
       *
       *
       *     var theme = SitesApp.getSite('example.com', 'mysite').getTheme();
       * https://developers.google.com/apps-script/reference/sites/site#getTheme()
       */
      getTheme(): string;

      /**
       * Return the title of the site
       *
       *
       *     var title = SitesApp.getSite('example.com', 'mysite').getTitle();
       * https://developers.google.com/apps-script/reference/sites/site#getTitle()
       */
      getTitle(): string;

      /**
       * Retrieves the url of this Site.
       *
       *
       *     var url = SitesApp.getSite('example.com', 'mysite').getUrl();
       * https://developers.google.com/apps-script/reference/sites/site#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Site.
       * https://developers.google.com/apps-script/reference/sites/site#getViewers()
       */
      getViewers(): Base.User[];

      /**
       * Removes the given user from the list of editors for the Site. This method doesn't
       * block users from accessing the Site if they belong to a class of users who have
       * general access—for example, if the Site is shared with the user's entire
       * domain, or if the Site is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/sites/site#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Site;

      /**
       * Removes the given user from the list of editors for the Site. This method doesn't
       * block users from accessing the Site if they belong to a class of users who have
       * general access—for example, if the Site is shared with the user's entire
       * domain, or if the Site is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/sites/site#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Site;

      /**
       * Removes owner from the site by user email
       *
       *
       *     // This snippet removes the user with the given email from the owners list
       *     var site = SitesApp.getSite('example.com', 'mysite');
       *     site.removeOwner("eric@example.com");
       * https://developers.google.com/apps-script/reference/sites/site#removeOwner(String)
       * @param email The email of the user to remove from the owners
       */
      removeOwner(email: string): Site;

      /**
       * Removes owner from the site
       *
       *
       *     // This snippet removes the current user from the list of owners
       *     var site = SitesApp.getSite('example.com', 'mysite');
       *     site.removeOwner(Session.getActiveUser());
       * https://developers.google.com/apps-script/reference/sites/site#removeOwner(User)
       * @param user A user to remove from the list of owners
       */
      removeOwner(user: Base.User): Site;

      /**
       * Removes the given user from the list of viewers and commenters for the Site. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the Site if they belong to a class of users who
       * have general access—for example, if the Site is shared with the user's
       * entire domain, or if the Site is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/sites/site#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Site;

      /**
       * Removes the given user from the list of viewers and commenters for the Site. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the Site if they belong to a class of users who have general
       * access—for example, if the Site is shared with the user's entire domain, or
       * if the Site is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/sites/site#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Site;

      /**
       * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var matches = site.search("targetText");
       *
       *     for(var i in matches) {
       *       Logger.log(matches[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#search(String)
       * @param query the full text search query to match
       */
      search(query: string): Page[];

      /**
       * Gets an array of descendant pages that match a search query, with optional advanced arguments.
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     var childPages = site.getChildren({
       *       type: SitesApp.PageType.WEB_PAGE,
       *       start: 0,
       *       max: 25,
       *       includeDrafts: false,
       *       includeDeleted: true,
       *       search: "target"
       *     });
       *
       *     for(var i in childPages) {
       *       Logger.log(childPages[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/sites/site#search(String,Object)
       * @param query the full text search query to match
       * @param options JavaScript object fields defined in the Advanced Arguments section below
       */
      search(query: string, options: object): Page[];

      /**
       * Set the summary of the web site
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     // All of the setter methods return the site instance so setters
       *     // can be chained
       *     site.setTitle("My Site")
       *         .setSummary("This is my site")
       *         .setTheme("simple");
       * https://developers.google.com/apps-script/reference/sites/site#setSummary(String)
       * @param summary A string summary describing the site
       */
      setSummary(summary: string): Site;

      /**
       * Sets the theme of the site
       *
       *
       * Theme must be a valid theme string. For an exhaustive list, write a test method and pass an
       * invalid value to setTheme(). The script will throw a Service error and return an exhaustive
       * list of available themes. The list of available themes is also available under Manage
       * Site->Themes. Theme name strings are generally the same as the theme name on the Themes page in
       * lower cases with spaces and special characters removed. For example, the string for "Terra:
       * Water" would be "terrawater".
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     // All of the setter methods return the site instance so setters
       *     // can be chained
       *     site.setTitle("My Site")
       *         .setSummary("This is my site")
       *         .setTheme("simple");
       * https://developers.google.com/apps-script/reference/sites/site#setTheme(String)
       * @param theme a string name for the theme to set for this Site
       */
      setTheme(theme: string): Site;

      /**
       * Set the title of the site
       *
       *
       *     var site = SitesApp.getSite("example.com", "mysite");
       *     // All of the setter methods return the site instance so setters
       *     // can be chained
       *     site.setTitle("My Site")
       *         .setSummary("This is my site")
       *         .setTheme("simple");
       * https://developers.google.com/apps-script/reference/sites/site#setTitle(String)
       * @param title the new title of the site
       */
      setTitle(title: string): Site;
      /** @deprecated DO NOT USE */ addCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ addCollaborator(user: Base.User): Site;
      /** @deprecated DO NOT USE */ createAnnouncement(title: string, html: string, parent: Page): Page;
      /** @deprecated DO NOT USE */ createComment(inReplyTo: string, html: string, parent: Page): Comment;
      /** @deprecated DO NOT USE */ createListItem(html: string, columnNames: string[], values: string[], parent: Page): ListItem;
      /** @deprecated DO NOT USE */ createWebAttachment(title: string, url: string, parent: Page): Attachment;
      /** @deprecated DO NOT USE */ deleteSite(): void;
      /** @deprecated DO NOT USE */ getAnnouncements(): Page[];
      /** @deprecated DO NOT USE */ getAnnouncementsPages(): Page[];
      /** @deprecated DO NOT USE */ getAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getCollaborators(): Base.User[];
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getFileCabinetPages(): Page[];
      /** @deprecated DO NOT USE */ getListItems(): ListItem[];
      /** @deprecated DO NOT USE */ getListPages(): Page[];
      /** @deprecated DO NOT USE */ getSelfLink(): string;
      /** @deprecated DO NOT USE */ getSiteName(): string;
      /** @deprecated DO NOT USE */ getWebAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getWebPages(): Page[];
      /** @deprecated DO NOT USE */ removeCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ removeCollaborator(user: Base.User): Site;
    }
    /**
     * Create and access Google Sites.
     * A rebuilt
     * version of Sites was launched on November 22, 2016. Apps Script cannot currently access or
     * modify Sites made with this version, but script can still access
     * classic Sites.
     */
    interface SitesApp {
      AttachmentType: typeof AttachmentType;
      PageType: typeof PageType;

      /**
       * Creates a new Site by copying an existing Site.
       *
       *
       * Warning: Copying a site takes time, from seconds to possibly many minutes, depending on the
       * size of the site. Although the method returns right away, the copy is still going on in the
       * background, and not all pages in the copied site will be immediately available. This method can
       * also be used to instantiate a new site based on a given template.
       *
       *
       *     // This creates a site. Note that this only works for G Suite domains.
       *     // There is no version of this API for consumer accounts.
       *     var site = SitesApp.createSite("example.com",
       *                                    "homepage",
       *                                    "My Home Page",
       *                                    "This is a new site I created!");
       *
       *     var siteCopy = SitesApp.copySite("example.com",
       *                                      "homepage-clone",
       *                                      "Cloned Home Page",
       *                                      "Begun, these clone wars have.",
       *                                      site);
       * https://developers.google.com/apps-script/reference/sites/sites-app#copySite(String,String,String,String,Site)
       * @param domain The G Suite hosted domain (e.g. example.com)
       * @param name The webspace name found in the URL (e.g. mySite)
       * @param title The title of the site
       * @param summary The description of the site
       * @param site The Site to copy from. This can either be a site or a template. If the parameter is an existing site then the entire contents of the site will be copied. If the given Site is a template, then a new Site is created based on that template.
       */
      copySite(domain: string, name: string, title: string, summary: string, site: Site): Site;

      /**
       * Creates a new Site.
       *
       *
       *     // This creates a site. Note that this only works for G Suite domains.
       *     // There is no version of this API for consumer accounts.
       *     var site = SitesApp.createSite("example.com",
       *                                    "homepage",
       *                                    "My Home Page",
       *                                    "This is a new site I created!");
       * https://developers.google.com/apps-script/reference/sites/sites-app#createSite(String,String,String,String)
       * @param domain The G Suite hosted domain (e.g. example.com)
       * @param name the path name found in the URL (e.g. mySite)
       * @param title The title of the site
       * @param summary The description of the site
       */
      createSite(domain: string, name: string, title: string, summary: string): Site;

      /**
       * Returns the active page, if the script is hosted in a container, or null otherwise.
       *
       *
       *     var site = SitesApp.getActivePage();
       * https://developers.google.com/apps-script/reference/sites/sites-app#getActivePage()
       */
      getActivePage(): Page;

      /**
       * Returns the active container, if the script is hosted in a container, or null otherwise.
       *
       *
       *     var site = SitesApp.getActiveSite();
       * https://developers.google.com/apps-script/reference/sites/sites-app#getActiveSite()
       */
      getActiveSite(): Site;

      /**
       * Retrieves first 200 Sites belonging to this domain. To get all the sites, use the getAllSites(domain, start, max) method to page through the results.
       *
       *
       *     // This writes the first page of sites belonging to a G Suite
       *     // domain to the log.
       *     var sites = SitesApp.getAllSites("example.com");
       *     for(var i in sites) {
       *       Logger.log(sites[i].getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getAllSites(String)
       * @param domain The G Suite hosted domain (e.g. example.com)
       */
      getAllSites(domain: string): Site[];

      /**
       * Retrieves all Sites belonging to this domain.
       *
       *
       *     // This writes the a list of sites in domain example.com to the log.
       *     var pageStart = 0;
       *     var pageSize = 50;
       *     while (true) {
       *       Logger.log("Loading sites starting at %s", pageStart);
       *       var sites = SitesApp.getAllSites("example.com", pageStart, pageSize);
       *       if (sites.length == 0) {
       *         break;
       *       }
       *       Logger.log("Got %s sites back", sites.length);
       *       pageStart += sites.length;
       *       for(var i in sites) {
       *         Logger.log("Found site: %s", sites[i].getUrl());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getAllSites(String,Integer,Integer)
       * @param domain The G Suite hosted domain (e.g. example.com)
       * @param start the index of the first site to return
       * @param max the maximum number of results to return
       */
      getAllSites(domain: string, start: Integer, max: Integer): Site[];

      /**
       * Retrieves a Page by url.
       *
       *
       *     // This snippet retrieves the page at the given URL.
       *     // Returns null if the page does not exist or if the URL given is invalid.
       *     var page = SitesApp.getPageByUrl(
       *                         "https://sites.google.com/site/demositeappsscript/mylistpage");
       *     Logger.log(page.getName());
       * https://developers.google.com/apps-script/reference/sites/sites-app#getPageByUrl(String)
       * @param url the public url
       */
      getPageByUrl(url: string): Page;

      /**
       * Retrieves a Site for the given Google Site, if the user is a consumer who does not have a
       * hosted domain.
       *
       *
       *     // Returns a Site instance
       *     var site = SitesApp.getSite('mysite');
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSite(String)
       * @param name The webspace name found in the URL (e.g. mySite)
       */
      getSite(name: string): Site;

      /**
       * Retrieves a Site for the given Google Site.
       *
       *
       *     // Returns a Site instance
       *     var site = SitesApp.getSite('example.com', 'mysite');
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSite(String,String)
       * @param domain The G Suite hosted domain (e.g. example.com)
       * @param name The webspace name found in the URL (e.g. mySite)
       */
      getSite(domain: string, name: string): Site;

      /**
       * Retrieves a Site by url.
       *
       *
       *     // This snippet retrieves the site at the given URL
       *     // Throws an Invalid argument exception if the site does not exist or if
       *     // the URL given is invalid
       *     var site = SitesApp.getSiteByUrl("https://sites.google.com/site/demosite");
       *     Logger.log(site.getName());
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSiteByUrl(String)
       * @param url the public url
       */
      getSiteByUrl(url: string): Site;

      /**
       * Retrieves first page of Sites for a user, if the user is a consumer who does not have a hosted
       * domain.
       *
       *
       *     // This writes the first page of sites owned by the user running
       *     // the script to the log.
       *     var sites = SitesApp.getSites();
       *     for(var i in sites) {
       *       Logger.log(sites[i].getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSites()
       */
      getSites(): Site[];

      /**
       * Retrieves Sites for a user between the given bounds if the user is a consumer who does not have
       * a hosted domain.
       *
       *
       *     var sites = SitesApp.getSites(25, 50);
       *     for(var i in sites) {
       *       Logger.log(sites[i].getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSites(Integer,Integer)
       * @param start the index of the first site to return
       * @param max the maximum number of results to return
       */
      getSites(start: Integer, max: Integer): Site[];

      /**
       * Retrieves first page of Sites belonging to this user in this domain.
       *
       *
       *     // This writes the first page of sites owned by the user running
       *     // the script to the log.
       *     var sites = SitesApp.getSites("example.com");
       *     for(var i in sites) {
       *       Logger.log(sites[i].getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSites(String)
       * @param domain The G Suite hosted domain (e.g. example.com)
       */
      getSites(domain: string): Site[];

      /**
       * Retrieves all Sites belonging to this user in this domain for the given range given.
       *
       *
       *     // This writes the a list of sites owned by the user running
       *     // the script in positions bounded by the start and max values to the log.
       *     var sites = SitesApp.getSites("example.com", 25, 50);
       *     for(var i in sites) {
       *       Logger.log(sites[i].getUrl());
       *     }
       * https://developers.google.com/apps-script/reference/sites/sites-app#getSites(String,Integer,Integer)
       * @param domain The G Suite hosted domain (e.g. example.com)
       * @param start the index of the first site to return
       * @param max the maximum number of results to return
       */
      getSites(domain: string, start: Integer, max: Integer): Site[];
    }
  }
}

declare var SitesApp: GoogleAppsScript.Sites.SitesApp;
