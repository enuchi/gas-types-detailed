// Type definitions for Google Apps Script 2023-10-28
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Sites {
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A Sites Attachment such as a file attached to a page.
     *
     * Note that an Attachment is a Blob and can be used anywhere Blob input is expected.
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
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       *
       *
       * To view the daily quotas for conversions, see Quotas for Google
       * Services. Newly created Google Workspace domains might be temporarily subject to stricter
       * quotas.
       * https://developers.google.com/apps-script/reference/sites/attachment#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/sites/attachment#getBlob()
       */
      getBlob(): Base.Blob;
      /** @deprecated DO NOT USE */ deleteAttachment(): void;
      /** @deprecated DO NOT USE */ getAttachmentType(): AttachmentType;
      /** @deprecated DO NOT USE */ getContentType(): string;
      /** @deprecated DO NOT USE */ getDatePublished(): Date;
      /** @deprecated DO NOT USE */ getDescription(): string;
      /** @deprecated DO NOT USE */ getLastUpdated(): Date;
      /** @deprecated DO NOT USE */ getParent(): Page;
      /** @deprecated DO NOT USE */ getTitle(): string;
      /** @deprecated DO NOT USE */ getUrl(): string;
      /** @deprecated DO NOT USE */ setContentType(contentType: string): Attachment;
      /** @deprecated DO NOT USE */ setDescription(description: string): Attachment;
      /** @deprecated DO NOT USE */ setFrom(blob: Base.BlobSource): Attachment;
      /** @deprecated DO NOT USE */ setParent(parent: Page): Attachment;
      /** @deprecated DO NOT USE */ setTitle(title: string): Attachment;
      /** @deprecated DO NOT USE */ setUrl(url: string): Attachment;
    }
    /**
     *
     * Deprecated. This enum is deprecated and should not be used in new scripts.
     * A typesafe enum for sites attachment type.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * SitesApp.AttachmentType.WEB.
     */
    enum AttachmentType { WEB, HOSTED }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A Sites Column - a column from a Sites List page.
     */
    interface Column {
      /** @deprecated DO NOT USE */ deleteColumn(): void;
      /** @deprecated DO NOT USE */ getName(): string;
      /** @deprecated DO NOT USE */ getParent(): Page;
      /** @deprecated DO NOT USE */ setName(name: string): Column;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A Comment attached to any Sites page.
     */
    interface Comment {
      /** @deprecated DO NOT USE */ deleteComment(): void;
      /** @deprecated DO NOT USE */ getAuthorEmail(): string;
      /** @deprecated DO NOT USE */ getAuthorName(): string;
      /** @deprecated DO NOT USE */ getContent(): string;
      /** @deprecated DO NOT USE */ getDatePublished(): Date;
      /** @deprecated DO NOT USE */ getLastUpdated(): Date;
      /** @deprecated DO NOT USE */ getParent(): Page;
      /** @deprecated DO NOT USE */ setContent(content: string): Comment;
      /** @deprecated DO NOT USE */ setParent(parent: Page): Comment;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A Sites ListItem - a list element from a Sites List page.
     */
    interface ListItem {
      /** @deprecated DO NOT USE */ deleteListItem(): void;
      /** @deprecated DO NOT USE */ getDatePublished(): Date;
      /** @deprecated DO NOT USE */ getLastUpdated(): Date;
      /** @deprecated DO NOT USE */ getParent(): Page;
      /** @deprecated DO NOT USE */ getValueByIndex(index: Integer): string;
      /** @deprecated DO NOT USE */ getValueByName(name: string): string;
      /** @deprecated DO NOT USE */ setParent(parent: Page): ListItem;
      /** @deprecated DO NOT USE */ setValueByIndex(index: Integer, value: string): ListItem;
      /** @deprecated DO NOT USE */ setValueByName(name: string, value: string): ListItem;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A Page on a Google Site.
     */
    interface Page {
      /** @deprecated DO NOT USE */ addColumn(name: string): Column;
      /** @deprecated DO NOT USE */ addComment(content: string): Comment;
      /** @deprecated DO NOT USE */ addHostedAttachment(blob: Base.BlobSource): Attachment;
      /** @deprecated DO NOT USE */ addHostedAttachment(blob: Base.BlobSource, description: string): Attachment;
      /** @deprecated DO NOT USE */ addListItem(values: string[]): ListItem;
      /** @deprecated DO NOT USE */ addWebAttachment(title: string, description: string, url: string): Attachment;
      /** @deprecated DO NOT USE */ createAnnouncement(title: string, html: string): Page;
      /** @deprecated DO NOT USE */ createAnnouncement(title: string, html: string, asDraft: boolean): Page;
      /** @deprecated DO NOT USE */ createAnnouncementsPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ createFileCabinetPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ createListPage(title: string, name: string, html: string, columnNames: string[]): Page;
      /** @deprecated DO NOT USE */ createPageFromTemplate(title: string, name: string, template: Page): Page;
      /** @deprecated DO NOT USE */ createWebPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ deletePage(): void;
      /** @deprecated DO NOT USE */ getAllDescendants(): Page[];
      /** @deprecated DO NOT USE */ getAllDescendants(options: any): Page[];
      /** @deprecated DO NOT USE */ getAnnouncements(): Page[];
      /** @deprecated DO NOT USE */ getAnnouncements(optOptions: any): Page[];
      /** @deprecated DO NOT USE */ getAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getAttachments(optOptions: any): Attachment[];
      /** @deprecated DO NOT USE */ getAuthors(): string[];
      /** @deprecated DO NOT USE */ getChildByName(name: string): Page;
      /** @deprecated DO NOT USE */ getChildren(): Page[];
      /** @deprecated DO NOT USE */ getChildren(options: any): Page[];
      /** @deprecated DO NOT USE */ getColumns(): Column[];
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getComments(optOptions: any): Comment[];
      /** @deprecated DO NOT USE */ getDatePublished(): Date;
      /** @deprecated DO NOT USE */ getHtmlContent(): string;
      /** @deprecated DO NOT USE */ getIsDraft(): boolean;
      /** @deprecated DO NOT USE */ getLastEdited(): Date;
      /** @deprecated DO NOT USE */ getLastUpdated(): Date;
      /** @deprecated DO NOT USE */ getListItems(): ListItem[];
      /** @deprecated DO NOT USE */ getListItems(optOptions: any): ListItem[];
      /** @deprecated DO NOT USE */ getName(): string;
      /** @deprecated DO NOT USE */ getPageName(): string;
      /** @deprecated DO NOT USE */ getPageType(): PageType;
      /** @deprecated DO NOT USE */ getParent(): Page;
      /** @deprecated DO NOT USE */ getSelfLink(): string;
      /** @deprecated DO NOT USE */ getTextContent(): string;
      /** @deprecated DO NOT USE */ getTitle(): string;
      /** @deprecated DO NOT USE */ getUrl(): string;
      /** @deprecated DO NOT USE */ isDeleted(): boolean;
      /** @deprecated DO NOT USE */ isTemplate(): boolean;
      /** @deprecated DO NOT USE */ publishAsTemplate(name: string): Page;
      /** @deprecated DO NOT USE */ search(query: string): Page[];
      /** @deprecated DO NOT USE */ search(query: string, options: any): Page[];
      /** @deprecated DO NOT USE */ setHtmlContent(html: string): Page;
      /** @deprecated DO NOT USE */ setIsDraft(draft: boolean): Page;
      /** @deprecated DO NOT USE */ setName(name: string): Page;
      /** @deprecated DO NOT USE */ setParent(parent: Page): Page;
      /** @deprecated DO NOT USE */ setTitle(title: string): Page;
    }
    /**
     *
     * Deprecated. This enum is deprecated and should not be used in new scripts.
     * A typesafe enum for sites page type.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * SitesApp.PageType.WEB_PAGE.
     */
    enum PageType { WEB_PAGE, LIST_PAGE, ANNOUNCEMENT, ANNOUNCEMENTS_PAGE, FILE_CABINET_PAGE }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * An object representing a Google Site.
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
       * Gets the list of editors for this Site.
       * https://developers.google.com/apps-script/reference/sites/site#getEditors()
       */
      getEditors(): Base.User[];

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
      /** @deprecated DO NOT USE */ addCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ addCollaborator(user: Base.User): Site;
      /** @deprecated DO NOT USE */ addOwner(email: string): Site;
      /** @deprecated DO NOT USE */ addOwner(user: Base.User): Site;
      /** @deprecated DO NOT USE */ createAnnouncement(title: string, html: string, parent: Page): Page;
      /** @deprecated DO NOT USE */ createAnnouncementsPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ createComment(inReplyTo: string, html: string, parent: Page): Comment;
      /** @deprecated DO NOT USE */ createFileCabinetPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ createListItem(html: string, columnNames: string[], values: string[], parent: Page): ListItem;
      /** @deprecated DO NOT USE */ createListPage(title: string, name: string, html: string, columnNames: string[]): Page;
      /** @deprecated DO NOT USE */ createPageFromTemplate(title: string, name: string, template: Page): Page;
      /** @deprecated DO NOT USE */ createWebAttachment(title: string, url: string, parent: Page): Attachment;
      /** @deprecated DO NOT USE */ createWebPage(title: string, name: string, html: string): Page;
      /** @deprecated DO NOT USE */ deleteSite(): void;
      /** @deprecated DO NOT USE */ getAllDescendants(): Page[];
      /** @deprecated DO NOT USE */ getAllDescendants(options: any): Page[];
      /** @deprecated DO NOT USE */ getAnnouncements(): Page[];
      /** @deprecated DO NOT USE */ getAnnouncementsPages(): Page[];
      /** @deprecated DO NOT USE */ getAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getChildByName(name: string): Page;
      /** @deprecated DO NOT USE */ getChildren(): Page[];
      /** @deprecated DO NOT USE */ getChildren(options: any): Page[];
      /** @deprecated DO NOT USE */ getCollaborators(): Base.User[];
      /** @deprecated DO NOT USE */ getComments(): Comment[];
      /** @deprecated DO NOT USE */ getFileCabinetPages(): Page[];
      /** @deprecated DO NOT USE */ getListItems(): ListItem[];
      /** @deprecated DO NOT USE */ getListPages(): Page[];
      /** @deprecated DO NOT USE */ getName(): string;
      /** @deprecated DO NOT USE */ getOwners(): Base.User[];
      /** @deprecated DO NOT USE */ getSelfLink(): string;
      /** @deprecated DO NOT USE */ getSiteName(): string;
      /** @deprecated DO NOT USE */ getSummary(): string;
      /** @deprecated DO NOT USE */ getTemplates(): Page[];
      /** @deprecated DO NOT USE */ getTheme(): string;
      /** @deprecated DO NOT USE */ getTitle(): string;
      /** @deprecated DO NOT USE */ getUrl(): string;
      /** @deprecated DO NOT USE */ getWebAttachments(): Attachment[];
      /** @deprecated DO NOT USE */ getWebPages(): Page[];
      /** @deprecated DO NOT USE */ removeCollaborator(email: string): Site;
      /** @deprecated DO NOT USE */ removeCollaborator(user: Base.User): Site;
      /** @deprecated DO NOT USE */ removeOwner(email: string): Site;
      /** @deprecated DO NOT USE */ removeOwner(user: Base.User): Site;
      /** @deprecated DO NOT USE */ search(query: string): Page[];
      /** @deprecated DO NOT USE */ search(query: string, options: any): Page[];
      /** @deprecated DO NOT USE */ setSummary(summary: string): Site;
      /** @deprecated DO NOT USE */ setTheme(theme: string): Site;
      /** @deprecated DO NOT USE */ setTitle(title: string): Site;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * Create and access Google Sites.
     */
    interface SitesApp {
      AttachmentType: typeof AttachmentType;
      PageType: typeof PageType;
      /** @deprecated DO NOT USE */ copySite(domain: string, name: string, title: string, summary: string, site: Site): Site;
      /** @deprecated DO NOT USE */ createSite(domain: string, name: string, title: string, summary: string): Site;
      /** @deprecated DO NOT USE */ getActivePage(): Page;
      /** @deprecated DO NOT USE */ getActiveSite(): Site;
      /** @deprecated DO NOT USE */ getAllSites(domain: string): Site[];
      /** @deprecated DO NOT USE */ getAllSites(domain: string, start: Integer, max: Integer): Site[];
      /** @deprecated DO NOT USE */ getPageByUrl(url: string): Page;
      /** @deprecated DO NOT USE */ getSite(name: string): Site;
      /** @deprecated DO NOT USE */ getSite(domain: string, name: string): Site;
      /** @deprecated DO NOT USE */ getSiteByUrl(url: string): Site;
      /** @deprecated DO NOT USE */ getSites(): Site[];
      /** @deprecated DO NOT USE */ getSites(start: Integer, max: Integer): Site[];
      /** @deprecated DO NOT USE */ getSites(domain: string): Site[];
      /** @deprecated DO NOT USE */ getSites(domain: string, start: Integer, max: Integer): Site[];
    }
  }
}

declare var SitesApp: GoogleAppsScript.Sites.SitesApp;
