// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Gmail {
    /**
     * Provides access to Gmail threads, messages, and labels.
     */
    interface GmailApp {

      /**
       * Creates a draft email message. The size of the email (including headers) is quota limited.
       *
       *     // The code below creates a draft email with the current date and time.
       *     const now = new Date();
       *     GmailApp.createDraft(
       *         'mike@example.com',
       *         'current time',
       *         `The time is: ${now.toString()}`,
       *     );
       *
       * Return:
       * - GmailDraft — the newly created GmailDraft
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email
       * @param body body of the email
       */
      createDraft(recipient: string, subject: string, body: string): GmailDraft;

      /**
       * Creates a draft email message with optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers, but excluding attachments) is quota limited.
       *
       *     // Create a draft email with a file from Google Drive attached as a PDF.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     GmailApp.createDraft(
       *         'mike@example.com',
       *         'Attachment example',
       *         'Please see attached file.',
       *         {
       *           attachments: [file.getAs(MimeType.PDF)],
       *           name: 'Automatic Emailer Script',
       *         },
       *     );
       *
       * Return:
       * - GmailDraft — the newly created GmailDraft
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft(String,String,String,Object)
       * @param recipient the addresses of the recipient
       * @param subject the subject line
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by getAliases()
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       */
      createDraft(recipient: string, subject: string, body: string, options: any): GmailDraft;

      /**
       * Create a new user label of the given name.
       *
       *     // Creates the label @FOO and logs label: FOO
       *     Logger.log(`label: ${GmailApp.createLabel('FOO')}`);
       *
       * Return:
       * - GmailLabel — the newly created label
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createLabel(String)
       * @param name the name of the new label
       */
      createLabel(name: string): GmailLabel;

      /**
       * Deletes the specified label.
       *
       *     // Have to get the label by name first
       *     const label = GmailApp.getUserLabelByName('FOO');
       *     GmailApp.deleteLabel(label);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#deleteLabel(GmailLabel)
       * @param label the label to delete
       */
      deleteLabel(label: GmailLabel): GmailApp;

      /**
       * Gets a list of the emails that are set up as aliases for this account in Gmail.
       * You can send a message from any of these aliases by using the "from" optional argument.
       *
       *     // Log the aliases for this Gmail account and send an email as the first one.
       *     const me = Session.getActiveUser().getEmail();
       *     const aliases = GmailApp.getAliases();
       *     Logger.log(aliases);
       *     if (aliases.length > 0) {
       *       GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {
       *         from: aliases[0],
       *       });
       *     } else {
       *       GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
       *     }
       *
       * Return:
       * - String[] — an array of aliases for this account
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getAliases()
       */
      getAliases(): string[];

      /**
       * Retrieve an email message draft by ID.
       * Use this in conjunction with getId() on Gmail drafts.
       *
       *     // Get the first draft message in your drafts folder
       *     const draft = GmailApp.getDrafts()[0];
       *     // Get its ID
       *     const draftId = draft.getId();
       *     // Now fetch the same draft using that ID.
       *     const draftById = GmailApp.getDraft(draftId);
       *     // Should always log true as they should be the same message
       *     Logger.log(
       *         draft.getMessage().getSubject() === draftById.getMessage().getSubject(),
       *     );
       *
       * Return:
       * - GmailDraft — the draft with the given ID
       *
       * Throws:
       * - Error — if no draft with the given ID can be found
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDraft(String)
       * @param draftId the ID of the draft to retrieve
       */
      getDraft(draftId: string): GmailDraft;

      /**
       * Retrieves all draft messages.
       *
       *     // Logs the number of draft messages
       *     const drafts = GmailApp.getDraftMessages();
       *     Logger.log(drafts.length);
       *
       * Return:
       * - GmailMessage[] — an array of draft Gmail messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDraftMessages()
       */
      getDraftMessages(): GmailMessage[];

      /**
       * Gets all Gmail draft messages.
       *
       *     const drafts = GmailApp.getDrafts();
       *     for (let i = 0; i < drafts.length; i++) {
       *       Logger.log(drafts[i].getId());
       *     }
       *
       * Return:
       * - GmailDraft[] — an array of Gmail draft messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDrafts()
       */
      getDrafts(): GmailDraft[];

      /**
       * Retrieves all Inbox threads irrespective of labels.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     // Log the subject lines of your Inbox
       *     const threads = GmailApp.getInboxThreads();
       *     for (let i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the Inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxThreads()
       */
      getInboxThreads(): GmailThread[];

      /**
       * Retrieves a range of Inbox threads irrespective of labels.
       *
       *     // Log the subject lines of up to the first 50 emails in your Inbox
       *     const threads = GmailApp.getInboxThreads(0, 50);
       *     for (let i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the Inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getInboxThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads in the inbox.
       *
       *     Logger.log(`Messages unread in inbox: ${GmailApp.getInboxUnreadCount()}`);
       *
       * Return:
       * - Integer — the number of threads in the inbox that have unread messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxUnreadCount()
       */
      getInboxUnreadCount(): Integer;

      /**
       * Gets a message by ID.
       * Use this in conjunction with getId() on Gmail messages.
       *
       *     // Get the first message in the first thread of your inbox
       *     const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     // Get its ID
       *     const messageId = message.getId();
       *     // Now fetch the same message using that ID.
       *     const messageById = GmailApp.getMessageById(messageId);
       *     // Should always log true as they should be the same message
       *     Logger.log(message.getSubject() === messageById.getSubject());
       *
       * Return:
       * - GmailMessage — the message with the given ID
       *
       * Throws:
       * - Error — if no message with the given ID can be found
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessageById(String)
       * @param id the ID of the message to retrieve
       */
      getMessageById(id: string): GmailMessage;

      /**
       * Retrieve all messages in the specified thread.
       *
       *     // Log all the subject lines in the first thread of your inbox
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     const messages = GmailApp.getMessagesForThread(thread);
       *     for (let i = 0; i < messages.length; i++) {
       *       Logger.log(`subject: ${messages[i].getSubject()}`);
       *     }
       *
       * Return:
       * - GmailMessage[] — array of messages corresponding to this thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessagesForThread(GmailThread)
       * @param thread the thread of messages to retrieve
       */
      getMessagesForThread(thread: GmailThread): GmailMessage[];

      /**
       * Retrieve all messages in the specified threads.
       *
       *     // Log the subject lines of all messages in the first two threads of your inbox
       *     const thread = GmailApp.getInboxThreads(0, 2);
       *     const messages = GmailApp.getMessagesForThreads(thread);
       *     for (let i = 0; i < messages.length; i++) {
       *       for (let j = 0; j < messages[i].length; j++) {
       *         Logger.log(`subject: ${messages[i][j].getSubject()}`);
       *       }
       *     }
       *
       * Return:
       * - GmailMessage[][] — an array of arrays of messages, where each item in the outer array corresponds to a thread and the inner array contains the messages in that thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessagesForThreads(GmailThread)
       * @param threads the threads of messages to retrieve
       */
      getMessagesForThreads(threads: GmailThread[]): any[];

      /**
       * Retrieves all Priority Inbox threads irrespective of labels.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     Logger.log(
       *         `# of messages in your Priority Inbox: ${
       *             GmailApp.getPriorityInboxThreads().length}`,
       *     );
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the Priority Inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxThreads()
       */
      getPriorityInboxThreads(): GmailThread[];

      /**
       * Retrieves a range of Priority Inbox threads irrespective of labels.
       *
       *     // Will log some number 2 or less
       *     Logger.log(
       *         `# of messages in your Priority Inbox: ${
       *             GmailApp.getPriorityInboxThreads(0, 2).length}`,
       *     );
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the Priority Inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getPriorityInboxThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads in the Priority Inbox.
       *
       *     Logger.log(
       *         `Number of unread emails in your Priority Inbox : ${
       *             GmailApp.getPriorityInboxUnreadCount()}`,
       *     );
       *
       * Return:
       * - Integer — the number of threads in the Priority Inbox that have unread messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxUnreadCount()
       */
      getPriorityInboxUnreadCount(): Integer;

      /**
       * Retrieves all spam threads irrespective of labels.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     Logger.log(`# of total spam threads: ${GmailApp.getSpamThreads().length}`);
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the spam folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamThreads()
       */
      getSpamThreads(): GmailThread[];

      /**
       * Retrieves a range of spam threads irrespective of labels.
       *
       *     // Will log a number at most 5
       *     Logger.log(`# of total spam threads: ${GmailApp.getSpamThreads(0, 5).length}`);
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the spam folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getSpamThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads that are spam.
       *
       *     // Unless you actually read stuff in your spam folder, this should be the same
       *     // as the number of messages in your spam folder.
       *     Logger.log(`# unread threads that are spam: ${GmailApp.getSpamUnreadCount()}`);
       *
       * Return:
       * - Integer — the number spam threads that have unread messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamUnreadCount()
       */
      getSpamUnreadCount(): Integer;

      /**
       * Retrieves all starred threads irrespective of labels.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     // Logs the number of starred threads
       *     Logger.log(`# Starred threads: ${GmailApp.getStarredThreads().length}`);
       *
       * Return:
       * - GmailThread[] — an array of starred Gmail threads
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredThreads()
       */
      getStarredThreads(): GmailThread[];

      /**
       * Retrieves a range of starred threads irrespective of labels.
       *
       *     // Logs the number of starred threads to a maximum of 5
       *     Logger.log(`# Starred threads: ${GmailApp.getStarredThreads(0, 5).length}`);
       *
       * Return:
       * - GmailThread[] — an array of starred Gmail threads
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getStarredThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads that are starred.
       *
       *     Logger.log(`# unread and starred: ${GmailApp.getStarredUnreadCount()}`);
       *
       * Return:
       * - Integer — the number of starred threads that have unread messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredUnreadCount()
       */
      getStarredUnreadCount(): Integer;

      /**
       * Gets a thread by ID.
       * Use this in conjunction with getId() on Gmail threads.
       *
       *     // Gets the first inbox thread.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     // Gets the same thread by ID.
       *     const threadById = GmailApp.getThreadById(firstThread.getId());
       *     // Verifies that they are the same.
       *     console.log(
       *         firstThread.getFirstMessageSubject() ===
       *             threadById.getFirstMessageSubject(),
       *     );
       *
       * Return:
       * - GmailThread — The thread with the given ID or null if not found.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getThreadById(String)
       * @param id The ID of the thread to retrieve.
       */
      getThreadById(id: string): GmailThread;

      /**
       * Retrieves all trash threads irrespective of labels.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     Logger.log(`# of total trash threads: ${GmailApp.getTrashThreads().length}`);
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the trash
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getTrashThreads()
       */
      getTrashThreads(): GmailThread[];

      /**
       * Retrieves a range of trash threads irrespective of labels.
       *
       *     // Will log a number at most 5
       *     Logger.log(
       *         `# of total trash threads: ${GmailApp.getTrashThreads(0, 5).length}`,
       *     );
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads in the trash
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getTrashThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getTrashThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Retrieves a label given the label name.
       *
       *     const labelObject = GmailApp.getUserLabelByName('myLabel');
       *
       * Return:
       * - GmailLabel — the Gmail label with the given name
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getUserLabelByName(String)
       * @param name the name of the label to retrieve
       */
      getUserLabelByName(name: string): GmailLabel;

      /**
       * Retrieves a list of user-created labels.
       *
       *     // Logs all of the names of your labels
       *     const labels = GmailApp.getUserLabels();
       *     for (let i = 0; i < labels.length; i++) {
       *       Logger.log(`label: ${labels[i].getName()}`);
       *     }
       *
       * Return:
       * - GmailLabel[] — array of user created labels
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getUserLabels()
       */
      getUserLabels(): GmailLabel[];

      /**
       * Marks this message read and forces the message to refresh.
       *
       *     // Mark the first message in the first thread of your inbox as read
       *     const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     GmailApp.markMessageRead(message);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessageRead(GmailMessage)
       * @param message the message to mark as read
       */
      markMessageRead(message: GmailMessage): GmailApp;

      /**
       * Marks this message unread and forces the message to refresh.
       *
       *     // Mark the first message in the first thread of your inbox as unread
       *     const message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     GmailApp.markMessageUnread(message);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessageUnread(GmailMessage)
       * @param message the message to mark as unread
       */
      markMessageUnread(message: GmailMessage): GmailApp;

      /**
       * Marks these messages read and forces the messages to refresh.
       *
       *     // Mark first three messages in the first inbox thread as read.
       *     // Assumes that the first inbox thread has 3 messages in it.
       *     const threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
       *     const messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
       *     GmailApp.markMessagesRead(messages);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessagesRead(GmailMessage)
       * @param messages an array of messages to mark as read
       */
      markMessagesRead(messages: GmailMessage[]): GmailApp;

      /**
       * Marks these messages unread and forces the messages to refresh.
       *
       *     // Mark first three messages in the first inbox thread as unread.
       *     // Assumes that the first inbox thread has 3 messages in it
       *     const threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
       *     const messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
       *     GmailApp.markMessagesUnread(messages);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessagesUnread(GmailMessage)
       * @param messages an array of messages to mark as unread
       */
      markMessagesUnread(messages: GmailMessage[]): GmailApp;

      /**
       * Marks this thread as important and forces the thread to refresh.
       *
       *     // Marks first inbox thread as important
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadImportant(thread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadImportant(GmailThread)
       * @param thread the thread to mark as important
       */
      markThreadImportant(thread: GmailThread): GmailApp;

      /**
       * Marks this thread as read and forces the thread to refresh.
       *
       *     // Marks first inbox thread as read
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadRead(thread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadRead(GmailThread)
       * @param thread the thread to mark as read
       */
      markThreadRead(thread: GmailThread): GmailApp;

      /**
       * Marks this thread as unimportant and forces the thread to refresh.
       *
       *     // Marks first inbox thread as unimportant
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadUnimportant(thread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadUnimportant(GmailThread)
       * @param thread the thread to mark as unimportant
       */
      markThreadUnimportant(thread: GmailThread): GmailApp;

      /**
       * Marks this thread unread and forces the thread to refresh.
       *
       *     // Marks first inbox thread as unread
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadUnread(thread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadUnread(GmailThread)
       * @param thread the thread to mark as unread
       */
      markThreadUnread(thread: GmailThread): GmailApp;

      /**
       * Marks these threads as important and forces the threads to refresh.
       *
       *     // Marks first two threads in inbox as important
       *     const threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsImportant(threads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsImportant(GmailThread)
       * @param threads an array of threads to mark as important
       */
      markThreadsImportant(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as read and forces the threads to refresh.
       *
       *     // Marks first two threads in inbox as read
       *     const threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsRead(threads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsRead(GmailThread)
       * @param threads an array of threads to mark as read
       */
      markThreadsRead(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as unimportant and forces the threads to refresh.
       *
       *     // Marks first two threads in inbox as unimportant
       *     const threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsUnimportant(threads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsUnimportant(GmailThread)
       * @param threads an array of threads to mark as unimportant
       */
      markThreadsUnimportant(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as unread and forces the threads to refresh.
       *
       *     // Marks first two threads in inbox as unread
       *     const threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsUnread(threads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsUnread(GmailThread)
       * @param threads an array of threads to mark as unread
       */
      markThreadsUnread(threads: GmailThread[]): GmailApp;

      /**
       * Moves the message to the trash and forces the message to refresh.
       *
       *     // Move the first message in your inbox to trash
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const firstMessage = firstThread.getMessages()[0];
       *     GmailApp.moveMessageToTrash(firstMessage);
       *
       * Return:
       * - GmailApp — the Gmail service (useful for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveMessageToTrash(GmailMessage)
       * @param message the message to be trashed
       */
      moveMessageToTrash(message: GmailMessage): GmailApp;

      /**
       * Moves the specified messages to the trash and forces the messages to refresh.
       *
       *     // Move first two messages in your inbox to trash
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const messages = firstThread.getMessages();
       *     const toDelete = [messages[0], messages[1]];
       *     GmailApp.moveMessagesToTrash(toDelete);
       *
       * Return:
       * - GmailApp — the Gmail service (useful for chaining)
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveMessagesToTrash(GmailMessage)
       * @param messages the messages to be trashed
       */
      moveMessagesToTrash(messages: GmailMessage[]): GmailApp;

      /**
       * Moves this thread to the archive and forces the thread to refresh.
       *
       *     // Archive the first thread in your inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.moveThreadToArchive(firstThread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToArchive(GmailThread)
       * @param thread the thread to be archive
       */
      moveThreadToArchive(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to the inbox and forces the thread to refresh.
       *
       *     // Find a thread not already in your inbox
       *     const thread = GmailApp.search('-in:inbox')[0];  // Get the first one
       *     GmailApp.moveThreadToInbox(thread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToInbox(GmailThread)
       * @param thread the thread to be moved to the inbox
       */
      moveThreadToInbox(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to spam and forces the thread to refresh.
       *
       *     // Tag first thread in inbox as spam
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.moveThreadToSpam(firstThread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToSpam(GmailThread)
       * @param thread the thread to be moved to spam
       */
      moveThreadToSpam(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to the trash and forces the thread to refresh.
       *
       *     // Move first thread in inbox to trash
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.moveThreadToTrash(firstThread);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToTrash(GmailThread)
       * @param thread the thread to be trashed
       */
      moveThreadToTrash(thread: GmailThread): GmailApp;

      /**
       * Moves these threads to the archive and forces the threads to refresh.
       *
       *     // Move first two threads in your inbox to the archive
       *     const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.moveThreadsToArchive(firstTwoThreads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToArchive(GmailThread)
       * @param threads an array of threads to be archived
       */
      moveThreadsToArchive(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to the inbox and forces the threads to refresh.
       *
       *     // Find two threads not already in your inbox
       *     const firstTwoThreads = GmailApp.search('-in:inbox', 0, 2);
       *     GmailApp.moveThreadsToInbox(firstTwoThreads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToInbox(GmailThread)
       * @param threads an array of threads to be moved to the inbox
       */
      moveThreadsToInbox(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to spam and forces the threads to refresh.
       *
       *     // Move first two threads in your inbox to spam
       *     const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.moveThreadsToSpam(firstTwoThreads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToSpam(GmailThread)
       * @param threads an array of threads to be moved to spam
       */
      moveThreadsToSpam(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to the trash and forces the threads to refresh.
       *
       *     // Move first two threads in your inbox to trash
       *     const firstTwoThreads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.moveThreadsToTrash(firstTwoThreads);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToTrash(GmailThread)
       * @param threads an array of threads to be trashed
       */
      moveThreadsToTrash(threads: GmailThread[]): GmailApp;

      /**
       * Reloads the message and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const firstMessage = firstThread.getMessages()[0];
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshMessage(firstMessage);
       *     // ...Do more stuff with firstMessage...
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshMessage(GmailMessage)
       * @param message the message to be refreshed
       */
      refreshMessage(message: GmailMessage): GmailApp;

      /**
       * Reloads the messages and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const coupleOfMessages = firstThread.getMessages().slice(0, 2);
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshMessages(coupleOfMessages);
       *     // ...Do more stuff with coupleOfMessages...
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshMessages(GmailMessage)
       * @param messages the messages to be refreshed
       */
      refreshMessages(messages: GmailMessage[]): GmailApp;

      /**
       * Reloads the thread and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshThread(firstThread);
       *     // ... Do more stuff with the thread ...
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshThread(GmailThread)
       * @param thread the thread to be refreshed
       */
      refreshThread(thread: GmailThread): GmailApp;

      /**
       * Reloads the threads and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const threads = GmailApp.getInboxThreads(0, 3);
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshThreads(threads);
       *     // ... Do more stuff with threads ...
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshThreads(GmailThread)
       * @param threads the threads to be refreshed
       */
      refreshThreads(threads: GmailThread[]): GmailApp;

      /**
       * Search Gmail with the given query.
       * This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
       *
       *     // Find starred messages with subject IMPORTANT
       *     const threads = GmailApp.search('is:starred subject:"IMPORTANT"');
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads matching this query
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#search(String)
       * @param query the search query, as you would type it into Gmail
       */
      search(query: string): GmailThread[];

      /**
       * Search Gmail with the given query.
       *
       *     // Find starred messages with subject IMPORTANT and return second batch of 10.
       *     // Assumes there are at least 11 of them, otherwise this will return an empty
       *     // array.
       *     const threads = GmailApp.search('is:starred subject:"IMPORTANT"', 10, 10);
       *
       * Return:
       * - GmailThread[] — an array of Gmail threads matching this query
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#search(String,Integer,Integer)
       * @param query the search query, as you would type it into Gmail
       * @param start the index of the starting thread
       * @param max the maximum number of threads to return
       */
      search(query: string, start: Integer, max: Integer): GmailThread[];

      /**
       * Sends an email message. The size of the email (including headers) is quota limited.
       *
       *     // The code below will send an email with the current date and time.
       *     const now = new Date();
       *     GmailApp.sendEmail(
       *         'mike@example.com',
       *         'current time',
       *         `The time is: ${now.toString()}`,
       *     );
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       */
      sendEmail(recipient: string, subject: string, body: string): GmailApp;

      /**
       * Sends an email message with optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers, but excluding attachments) is quota limited.
       *
       *     // Send an email with a file from Google Drive attached as a PDF.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     GmailApp.sendEmail(
       *         'mike@example.com',
       *         'Attachment example',
       *         'Please see the attached file.',
       *         {
       *           attachments: [file.getAs(MimeType.PDF)],
       *           name: 'Automatic Emailer Script',
       *         },
       *     );
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
       * @param recipient the addresses of the recipient
       * @param subject the subject line (250 characters maximum)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by getAliases()
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       */
      sendEmail(recipient: string, subject: string, body: string, options: any): GmailApp;

      /**
       * Sets the current message access token that enables the script to access the current GmailMessage properties.
       * Only Google Workspace add-on projects using Gmail current message scopes require this method.
       *
       *     function handleAddonActionEvent(e) {
       *       GmailApp.setCurrentMessageAccessToken(e.messageMetadata.accessToken);
       *       const mailMessage = GmailApp.getMessageById(e.messageMetadata.messageId);
       *       // Do something with mailMessage
       *     }
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#setCurrentMessageAccessToken(String)
       * @param accessToken the temporary access token obtained from a Gmail add-on action event object.
       */
      setCurrentMessageAccessToken(accessToken: string): any;

      /**
       * Adds a star to this message and forces the message to refresh.
       *
       *     // Stars the first message in the first thread in your inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     GmailApp.starMessage(message);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#starMessage(GmailMessage)
       * @param message the message to star
       */
      starMessage(message: GmailMessage): GmailApp;

      /**
       * Adds stars to these messages and forces the messages to refresh.
       *
       *     // Stars the first three messages in the first thread in your inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const coupleOfMessages = firstThread.getMessages().slice(0, 3);
       *     GmailApp.starMessages(coupleOfMessages);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#starMessages(GmailMessage)
       * @param messages an array of messages to star
       */
      starMessages(messages: GmailMessage[]): GmailApp;

      /**
       * Removes a star from this message and forces the message to refresh.
       *
       *     // Unstars the first message in the first thread in your inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     GmailApp.unstarMessage(message);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#unstarMessage(GmailMessage)
       * @param message the message to unstar
       */
      unstarMessage(message: GmailMessage): GmailApp;

      /**
       * Removes stars from these messages and forces the messages to refresh.
       *
       *     // Unstars the first three messages in the first thread in your inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const coupleOfMessages = firstThread.getMessages().slice(0, 3);
       *     GmailApp.unstarMessages(coupleOfMessages);
       *
       * Return:
       * - GmailApp — the Gmail service, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#unstarMessages(GmailMessage)
       * @param messages an array of messages to unstar
       */
      unstarMessages(messages: GmailMessage[]): GmailApp;
      /** @deprecated DO NOT USE */ getChatThreads(): GmailThread[];
      /** @deprecated DO NOT USE */ getChatThreads(start: Integer, max: Integer): GmailThread[];
    }
    /**
     * An attachment from Gmail. This is a regular Blob except that it has an extra getSize() method that is faster than calling
     * getBytes().length and does not count against the Gmail read quota.
     *
     *     // Logs information about any attachments in the first 100 inbox threads.
     *     const threads = GmailApp.getInboxThreads(0, 100);
     *     const msgs = GmailApp.getMessagesForThreads(threads);
     *     for (let i = 0; i < msgs.length; i++) {
     *       for (let j = 0; j < msgs[i].length; j++) {
     *         const attachments = msgs[i][j].getAttachments();
     *         for (let k = 0; k < attachments.length; k++) {
     *           Logger.log(
     *               'Message "%s" contains the attachment "%s" (%s bytes)',
     *               msgs[i][j].getSubject(),
     *               attachments[k].getName(),
     *               attachments[k].getSize(),
     *           );
     *         }
     *       }
     *     }
     */
    interface GmailAttachment {

      /**
       * Returns a copy of this blob.
       *
       * Return:
       * - Blob — The new copy.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#copyBlob()
       */
      copyBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Gets the data stored in this blob.
       *
       * Return:
       * - Byte[] — The stored bytes.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getBytes()
       */
      getBytes(): Byte[];

      /**
       * Gets the content type of the bytes in this blob.
       *
       * Return:
       * - String — The content type of this data, if known, or null.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getContentType()
       */
      getContentType(): string;

      /**
       * Gets the data of this blob as a String with UTF-8 encoding.
       *
       * Return:
       * - String — The data as a string.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getDataAsString()
       */
      getDataAsString(): string;

      /**
       * Gets the data of this blob as a string with the specified encoding.
       *
       * Return:
       * - String — The data as a string.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getDataAsString(String)
       * @param charset The charset to use in encoding the data in this blob as a string.
       */
      getDataAsString(charset: string): string;

      /**
       * Gets the SHA1 content hash for this attachment. This method does not count against the Gmail read quota.
       *
       * Return:
       * - String — The SHA1 content hash, as a string.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getHash()
       */
      getHash(): string;

      /**
       * Gets the name of this blob.
       *
       * Return:
       * - String — The name of this data, if known, or null.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getName()
       */
      getName(): string;

      /**
       * Gets the size of this attachment. This method is faster than calling getBytes().length and does not count against the Gmail read quota.
       *
       * Return:
       * - Integer — The size of the attachment, in bytes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getSize()
       */
      getSize(): Integer;

      /**
       * Returns whether this blob is a Google Workspace file (Sheets, Docs, etc.).
       *
       * Return:
       * - Boolean — true if this blob is a Google Workspace file; false if not.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#isGoogleType()
       */
      isGoogleType(): boolean;

      /**
       * Sets the data stored in this blob.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setBytes(Byte)
       * @param data The new data.
       */
      setBytes(data: Byte[]): Base.Blob;

      /**
       * Sets the content type of the bytes in this blob.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setContentType(String)
       * @param contentType The new contentType.
       */
      setContentType(contentType: string): Base.Blob;

      /**
       * Sets the content type of the bytes in this blob based on the file extension. The contentType is null if it cannot be guessed from its extension.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setContentTypeFromExtension()
       */
      setContentTypeFromExtension(): Base.Blob;

      /**
       * Sets the data of this blob from a string with UTF-8 encoding.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setDataFromString(String)
       * @param string The string data.
       */
      setDataFromString(string: string): Base.Blob;

      /**
       * Sets the data of this blob from a string with the specified encoding.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setDataFromString(String,String)
       * @param string The string data.
       * @param charset The charset to use in interpreting the string as bytes.
       */
      setDataFromString(string: string, charset: string): Base.Blob;

      /**
       * Sets the name of this blob.
       *
       * Return:
       * - Blob — This blob, for chaining.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setName(String)
       * @param name The new name.
       */
      setName(name: string): Base.Blob;
      /** @deprecated DO NOT USE */ getAllBlobs(): Base.Blob[];
    }
    /**
     * A user-created draft message in a user's Gmail account.
     */
    interface GmailDraft {

      /**
       * Deletes this draft message.
       *
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     draft.deleteDraft();
       *     draft.getMessage();  // Throws exception.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#deleteDraft()
       */
      deleteDraft(): any;

      /**
       * Gets the ID of this draft message.
       *
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const draftId = draft.getId();
       *     const draftById = GmailApp.getDraft(draftId);
       *     Logger.log(
       *         draft.getMessage().getSubject() === draftById.getMessage().getSubject(),
       *     );
       *
       * Return:
       * - String — the draft ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getId()
       */
      getId(): string;

      /**
       * Returns a GmailMessage representing this draft.
       *
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const message = draft.getMessage();
       *     Logger.log(message.getSubject());
       *
       * Return:
       * - GmailMessage — the message that represents the contents of this draft
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getMessage()
       */
      getMessage(): GmailMessage;

      /**
       * Returns the ID of the GmailMessage representing this draft.
       *
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const messageId = draft.getMessageId();
       *     Logger.log(messageId === draft.getMessage().getId());
       *
       * Return:
       * - String — the message ID
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getMessageId()
       */
      getMessageId(): string;

      /**
       * Sends this draft email message. The size of the email (including headers) is quota limited.
       *
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const msg = draft.send();     // Send it
       *     Logger.log(msg.getDate());    // Should be approximately the current timestamp
       *
       * Return:
       * - GmailMessage — the newly sent message
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#send()
       */
      send(): GmailMessage;

      /**
       * Replaces the contents of this draft message. The size of the email (including headers) is quota limited.
       *
       *     // The code below will update a draft email with the current date and time.
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const now = new Date();
       *     draft.update(
       *         'mike@example.com',
       *         'current time',
       *         `The time is: ${now.toString()}`,
       *     );
       *
       * Return:
       * - GmailDraft — the newly updated draft
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#update(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       */
      update(recipient: string, subject: string, body: string): GmailDraft;

      /**
       * Replaces the contents of this draft message using optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Update a draft email with a file from Google Drive attached as a PDF.
       *     const draft =
       *         GmailApp.getDrafts()[0];  // The first draft message in the drafts folder
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     draft.update(
       *         'mike@example.com',
       *         'Attachment example',
       *         'Please see attached file.',
       *         {
       *           attachments: [file.getAs(MimeType.PDF)],
       *           name: 'Automatic Emailer Script',
       *         },
       *     );
       *
       * Return:
       * - GmailDraft — the newly updated draft
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#update(String,String,String,Object)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       */
      update(recipient: string, subject: string, body: string, options: any): GmailDraft;
    }
    /**
     * A user-created label in a user's Gmail account.
     */
    interface GmailLabel {

      /**
       * Adds this label to the given thread and forces the thread to refresh (GmailThread.refresh()).
       *
       *     // label the first thread in the inbox with the label MyLabel
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     label.addToThread(firstThread);
       *
       * Return:
       * - GmailLabel — This label, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#addToThread(GmailThread)
       * @param thread The thread to be labeled.
       */
      addToThread(thread: GmailThread): GmailLabel;

      /**
       * Adds this label to the given threads and forces the threads to refresh. You can add labels for up to 100 threads per batch.
       *
       *     // label the first three threads in the inbox with the label MyLabel
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const threads = GmailApp.getInboxThreads(0, 3);
       *     label.addToThreads(threads);
       *
       * Return:
       * - GmailLabel — This label, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#addToThreads(GmailThread)
       * @param threads An array of threads to be labeled.
       */
      addToThreads(threads: GmailThread[]): GmailLabel;

      /**
       * Deletes this label.
       *
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     label.deleteLabel();
       *
       * Throws:
       * - Error — if the label can't be deleted
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getName()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#deleteLabel()
       */
      deleteLabel(): any;

      /**
       * Gets the id of this label.
       *
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     console.log(label.getId());
       *
       * Return:
       * - String — The id of the label.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getId()
       */
      getId(): string;

      /**
       * Gets the name of this label.
       *
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     Logger.log(label.getName());  // logs MyLabel
       *
       * Return:
       * - String — The name of the label.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getName()
       */
      getName(): string;

      /**
       * Gets the threads that are marked with this label.
       * This calls fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use getThreads(start, max) and specify ranges of the threads to retrieve in each call.
       *
       *     // Log the subject lines of the threads labeled with MyLabel
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const threads = label.getThreads();
       *     for (let i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       *
       * Return:
       * - GmailThread[] — An array of threads marked with this label.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getThreads()
       */
      getThreads(): GmailThread[];

      /**
       * Gets a range of threads marked with this label.
       *
       *     // log the subject lines of up to the first 30 threads with the label MyLabel
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const threads = label.getThreads(0, 30);
       *     for (let i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       *
       * Return:
       * - GmailThread[] — An array of threads marked with this label.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getThreads(Integer,Integer)
       * @param start The index of the starting thread.
       * @param max The maximum number of threads to return.
       */
      getThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads tagged with this label.
       *
       *     // log the number of unread threads labeled with MyLabel
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     Logger.log(label.getUnreadCount());
       *
       * Return:
       * - Integer — The number of unread labeled threads.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getUnreadCount()
       */
      getUnreadCount(): Integer;

      /**
       * Removes this label from the given thread and forces the thread to refresh.
       *
       *     // remove the label MyLabel from the first thread in the inbox
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     label.removeFromThread(firstThread);
       *
       * Return:
       * - GmailLabel — This label, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#removeFromThread(GmailThread)
       * @param thread The thread be unlabeled.
       */
      removeFromThread(thread: GmailThread): GmailLabel;

      /**
       * Removes this label from the given threads and forces the threads to refresh. You can remove labels for up to 100 threads per batch.
       *
       *     // remove the label MyLabel from the first three threads in the inbox
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const threads = GmailApp.getInboxThreads(0, 3);
       *     label.removeFromThreads(threads);
       *
       * Return:
       * - GmailLabel — This label, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#removeFromThreads(GmailThread)
       * @param threads An array of threads to be unlabeled.
       */
      removeFromThreads(threads: GmailThread[]): GmailLabel;
    }
    /**
     * A message in a user's Gmail account.
     */
    interface GmailMessage {

      /**
       * Creates a draft message replying to the sender of this message using the reply-to address. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft reply to the original message with an acknowledgment.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.createDraftReply('Got your message');
       *
       * Return:
       * - GmailDraft — The newly created draft message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReply(String)
       * @param body The body of the email.
       */
      createDraftReply(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of this message using the reply-to address, with optional arguments.
       * The email can contain both plain text and an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft response with an HTML text body.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.createDraftReply('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       cc: 'another@example.com',
       *     });
       *
       * Return:
       * - GmailDraft — The newly created draft message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReply(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — A new subject line for the email, up to 250 characters.
       */
      createDraftReply(body: string, options: any): GmailDraft;

      /**
       * Creates a draft message replying to the sender using the reply-to address and all recipients of this message. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft response to all recipients (except those bcc'd) with an
       *     // acknowledgment.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.createDraftReplyAll('Got your message');
       *
       * Return:
       * - GmailDraft — The newly created draft message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReplyAll(String)
       * @param body The body of the email.
       */
      createDraftReplyAll(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of this message using the reply-to address and all recipients, with optional arguments.
       * The email can contain both plain text and an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft response to all recipients (except those bcc'd) using an HTML
       *     // text body.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.createDraftReplyAll('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       cc: 'another@example.com',
       *     });
       *
       * Return:
       * - GmailDraft — The newly created draft message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReplyAll(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — A new subject line for the email, up to 250 characters.
       */
      createDraftReplyAll(body: string, options: any): GmailDraft;

      /**
       * Forwards this message to new recipients. The size of the email (including headers) is quota limited.
       *
       *     // Forward first message of first inbox thread to recipient1 & recipient2,
       *     // both @example.com
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.forward('recipient1@example.com,recipient2@example.com');
       *
       * Return:
       * - GmailMessage — This message, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#forward(String)
       * @param recipient A comma-separated list of email addresses.
       */
      forward(recipient: string): GmailMessage;

      /**
       * Forwards this message to new recipients, with optional arguments.
       * The email can contain both plain text, and also an HTML body. The size of the email (including headers) is quota limited.
       *
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.forward('recipient1@example.com,recipient2@example.com', {
       *       cc: 'myboss@example.com',
       *       bcc: 'mybosses-boss@example.com,vp@example.com',
       *     });
       *
       * Return:
       * - GmailMessage — This message, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#forward(String,Object)
       * @param recipient A comma-separated list of email addresses.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — A new subject line for the email, up to 250 characters.
       */
      forward(recipient: string, options: any): GmailMessage;

      /**
       * Gets all the attachments for this message.
       *
       * Return:
       * - GmailAttachment[] — An array of Blob attachments for this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getAttachments()
       */
      getAttachments(): GmailAttachment[];

      /**
       * Gets all the attachments for this message.
       *
       * Return:
       * - GmailAttachment[] — An array of Blob attachments for this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getAttachments(Object)
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - includeInlineImages (Boolean) — true if the returned array of Blob attachments should include inline images (default is true).
       * - includeAttachments (Boolean) — true if the returned array of Blob attachments should include regular (non-inline) attachments (default is true).
       */
      getAttachments(options: any): GmailAttachment[];

      /**
       * Gets the comma-separated recipients bcc'd on this message.
       * This is empty for all received messages, by definition.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getBcc());                      // Log bcc'd addresses
       *
       * Return:
       * - String — The comma-separated recipients bcc'd on this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getTo()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getBcc()
       */
      getBcc(): string;

      /**
       * Gets the HTML content of the body of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getBody());                     // Log contents of the body
       *
       * Return:
       * - String — The body content of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getSubject()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getBody()
       */
      getBody(): string;

      /**
       * Gets the comma-separated recipients cc'd on this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getCc());                       // Log cc'd addresses
       *
       * Return:
       * - String — The comma-separated recipients cc'd on this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getTo()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getCc()
       */
      getCc(): string;

      /**
       * Gets the date and time of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getDate());  // Log date and time of the message
       *
       * Return:
       * - Date — The date and time of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getDate()
       */
      getDate(): Date;

      /**
       * Gets the sender of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getFrom());  // Log from address of the message
       *
       * Return:
       * - String — The email address of the message sender.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getReplyTo()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getFrom()
       */
      getFrom(): string;

      /**
       * Gets the value of an RFC 2822 header given the header name.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox.
       *     const message = thread.getMessages()[0];           // Get the first message.
       *     Logger.log(
       *         message.getHeader('Message-ID'));  // Logs the Message-ID RFC 2822 header.
       *
       * Return:
       * - String — The value of the header, or an empty string if the header doesn't exist in the message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getHeader(String)
       * @param name The name of the RFC header, without the colon separating it from the value.
       */
      getHeader(name: string): string;

      /**
       * Gets the ID of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     const id = message.getId();
       *     const messageById = GmailApp.getMessageById(id);
       *     Logger.log(
       *         message.getSubject() === messageById.getMessage());  // Always logs true
       *
       * Return:
       * - String — The message ID.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getId()
       */
      getId(): string;

      /**
       * Gets the content of the body of this message without HTML formatting. This is more complex than getBody() and takes longer.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getPlainBody());                // Log contents of the body
       *
       * Return:
       * - String — The plain body content of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getSubject()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getPlainBody()
       */
      getPlainBody(): string;

      /**
       * Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
       *
       * Return:
       * - String — The raw content of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getRawContent()
       */
      getRawContent(): string;

      /**
       * Gets the reply-to address of this message (usually the sender).
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getReplyTo());                  // Logs reply-to address
       *
       * Return:
       * - String — The email address for replies.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getCc()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getReplyTo()
       */
      getReplyTo(): string;

      /**
       * Gets the subject of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getSubject());                  // Log subject line
       *
       * Return:
       * - String — The subject of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getAttachments()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getSubject()
       */
      getSubject(): string;

      /**
       * Gets the thread that contains this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(
       *         message.getThread().getFirstMessageSubject() ===
       *             thread.getFirstMessageSubject(),
       *     );  // Always logs true
       *
       * Return:
       * - GmailThread — The GmailThread that contains this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getThread()
       */
      getThread(): GmailThread;

      /**
       * Gets the comma-separated recipients of this message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(message.getTo());  // Log the recipient of message
       *
       * Return:
       * - String — The comma-separated recipients of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getCc()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getTo()
       */
      getTo(): string;

      /**
       * Gets whether this message is a draft.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is draft? ${message.isDraft()}`);
       *
       * Return:
       * - Boolean — Whether this message is a draft.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isDraft()
       */
      isDraft(): boolean;

      /**
       * Gets whether this message is a chat.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is a chat? ${message.isInChats()}`);
       *
       * Return:
       * - Boolean — Whether this message is a chat.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInChats()
       */
      isInChats(): boolean;

      /**
       * Gets whether this message is in the inbox.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is in inbox? ${message.isInInbox()}`);
       *
       * Return:
       * - Boolean — Whether this message is in the inbox.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInInbox()
       */
      isInInbox(): boolean;

      /**
       * Returns true if this message is in the priority inbox; returns false otherwise.
       *
       *     const thread = GmailApp.getPriorityInboxThreads(
       *         0, 1)[0];  // Get first thread in priority inbox
       *     const messages = thread.getMessages();
       *     for (let i = 0; i < messages.length; i++) {
       *       // At least one of the messages is in priority inbox
       *       Logger.log(`is in priority inbox? ${messages[i].isInPriorityInbox()}`);
       *     }
       *
       * Return:
       * - Boolean — Whether this message is in the priority inbox.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInPriorityInbox()
       */
      isInPriorityInbox(): boolean;

      /**
       * Gets whether this message is in the trash.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is in the trash? ${message.isInTrash()}`);
       *
       * Return:
       * - Boolean — Whether this message is in the trash.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInTrash()
       */
      isInTrash(): boolean;

      /**
       * Gets whether this message is starred.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is starred? ${message.isStarred()}`);
       *
       * Return:
       * - Boolean — Whether this message is starred.
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isStarred()
       */
      isStarred(): boolean;

      /**
       * Gets whether this message is unread.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     Logger.log(`is unread? ${message.isUnread()}`);
       *
       * Return:
       * - Boolean — The unread status of this message.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isUnread()
       */
      isUnread(): boolean;

      /**
       * Marks the message as read.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     message.markRead();                                // Mark as read
       *
       * Return:
       * - GmailMessage — This GmailMessage, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - isUnread()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#markRead()
       */
      markRead(): GmailMessage;

      /**
       * Marks the message as unread.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     message.markUnread();                              // Mark as unread
       *
       * Return:
       * - GmailMessage — This GmailMessage, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - isUnread()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#markUnread()
       */
      markUnread(): GmailMessage;

      /**
       * Moves the message to the trash.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     message.moveToTrash();                             // Move message to trash
       *
       * Return:
       * - GmailMessage — This GmailMessage, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - isInTrash()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#moveToTrash()
       */
      moveToTrash(): GmailMessage;

      /**
       * Reloads this message and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     // .. Do bunch of stuff here
       *     message.refresh();  // Make sure it's up to date
       *     // Do more stuff to message
       *
       * Return:
       * - GmailMessage — This message for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#refresh()
       */
      refresh(): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address. The size of the email (including headers) is quota limited.
       *
       *     // Respond to author of message with acknowledgment
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.reply('Got your message');
       *
       * Return:
       * - GmailMessage — This message, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#reply(String)
       * @param body The body of the email.
       */
      reply(body: string): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address, with optional arguments.
       * The email can contain both plain text, and also an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Respond with HTML body text
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.reply('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       noReply: true,
       *     });
       *
       * Return:
       * - GmailMessage — This message, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#reply(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — A new subject line for the email, up to 250 characters.
       */
      reply(body: string, options: any): GmailMessage;

      /**
       * Replies to the sender using the reply-to address and all recipients of this message. The size of the email (including headers) is quota limited.
       *
       *     // Respond to all recipients (except bcc'd) of last email in thread with
       *     // acknowledgment
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.replyAll('Got your message');
       *
       * Return:
       * - GmailMessage — This message,useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#replyAll(String)
       * @param body The body of the email.
       */
      replyAll(body: string): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address and all recipients, with optional arguments.
       * The email can contain both plain text, and also an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Respond with HTML body text
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.replyAll('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       noReply: true,
       *     });
       *
       * Return:
       * - GmailMessage — This message, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#replyAll(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — when set, devices capable of rendering HTML use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — A new subject line for the email, up to 250 characters.
       */
      replyAll(body: string, options: any): GmailMessage;

      /**
       * Stars the message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     message.star();                                    // Star the message
       *
       * Return:
       * - GmailMessage — This GmailMessage, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - unstar()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#star()
       */
      star(): GmailMessage;

      /**
       * Unstars the message.
       *
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];  // Get first thread in inbox
       *     const message = thread.getMessages()[0];           // Get first message
       *     message.unstar();                                  // Unstar the message
       *
       * Return:
       * - GmailMessage — This GmailMessage, useful for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - star()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#unstar()
       */
      unstar(): GmailMessage;
    }
    /**
     * A thread in a user's Gmail account.
     */
    interface GmailThread {

      /**
       * Adds this label to the thread.
       *
       *     // Add label MyLabel to the first thread in the inbox
       *     const label = GmailApp.getUserLabelByName('MyLabel');
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.addLabel(label);
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#addLabel(GmailLabel)
       * @param label the label to apply to this thread
       */
      addLabel(label: GmailLabel): GmailThread;

      /**
       * Creates a draft message replying to the sender of the last message in this thread using the reply-to address. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft reply to the message author with an acknowledgement.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.createDraftReply('Got your message');
       *
       * Return:
       * - GmailDraft — the newly created draft message
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReply(String)
       * @param body the body of the email
       */
      createDraftReply(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread using the reply-to address, with optional arguments.
       * The email can contain both plain text and an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft response with an HTML text body.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.createDraftReply('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       cc: 'another@example.com',
       *     });
       *
       * Return:
       * - GmailDraft — the newly created draft message
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReply(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — a new subject line for the email (250 characters maximum)
       */
      createDraftReply(body: string, options: any): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread, using the reply-to address and all recipients of this message. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft reply to all recipients (except those bcc'd) of the last email
       *     // in this thread.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const message = firstThread.getMessages()[0];
       *     message.createDraftReplyAll('Got your message');
       *
       * Return:
       * - GmailDraft — the newly created draft message
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReplyAll(String)
       * @param body the body of the email
       */
      createDraftReplyAll(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread, using the reply-to address and all recipients, with optional arguments.
       * The email can contain both plain text and an HTML body. The size of the email (including headers) is quota limited.
       *
       *     // Create a draft reply, using an HTML text body, to all recipients (except
       *     // those bcc'd) of the last email of in this thread.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.createDraftReplyAll('incapable of HTML', {
       *       htmlBody: '<b>some HTML body text</b>',
       *       cc: 'another@example.com',
       *     });
       *
       * Return:
       * - GmailDraft — the newly created draft message
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReplyAll(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - subject (String) — a new subject line for the email. Max size is 250 chars.
       */
      createDraftReplyAll(body: string, options: any): GmailDraft;

      /**
       * Gets the subject of the first message in the thread.
       *
       *     // Log the subject of the first message in the first thread in the inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(firstThread.getFirstMessageSubject());
       *
       * Return:
       * - String — the subject of the first message in the thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getLastMessageDate()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getFirstMessageSubject()
       */
      getFirstMessageSubject(): string;

      /**
       * Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a consistent ID for a particular message in the thread, call getMessages()[0].getId() instead.
       *
       *     // Log the subject of the first message in the first thread in the inbox.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const id = firstThread.getId();
       *     // Get same thread by its ID.
       *     const thread = GmailApp.getThreadById(id);
       *     Logger.log(
       *         thread.getFirstMessageSubject() === firstThread.getFirstMessageSubject(),
       *     );  // True
       *
       * Return:
       * - String — the ID of this thread
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getId()
       */
      getId(): string;

      /**
       * Returns the user-created labels on this thread.
       *
       *     // Log the names of the labels attached to the first thread in the inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const labels = firstThread.getLabels();
       *     for (let i = 0; i < labels.length; i++) {
       *       Logger.log(labels[i].getName());
       *     }
       *
       * Return:
       * - GmailLabel[] — an array of labels for this thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getLabels()
       */
      getLabels(): GmailLabel[];

      /**
       * Gets the date of this thread's most recent message.
       *
       *     // Log the date of the most recent message on the first thread in the inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(firstThread.getLastMessageDate());
       *
       * Return:
       * - Date — the date of the most recent message in the thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getFirstMessageSubject()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getLastMessageDate()
       */
      getLastMessageDate(): Date;

      /**
       * Returns the number of messages in the thread.
       *
       *     // Log the number of messages in the thread
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(firstThread.getMessageCount());
       *
       * Return:
       * - Integer — the number of messages in the thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getMessages()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessageCount()
       */
      getMessageCount(): Integer;

      /**
       * Gets the messages in this thread.
       *
       *     // Log the subjects of the messages in the thread
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     const messages = firstThread.getMessages();
       *     for (let i = 0; i < messages.length; i++) {
       *       Logger.log(messages[i].getSubject());
       *     }
       *
       * Return:
       * - GmailMessage[] — an array of Gmail messages in this thread
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - getMessageCount()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessages()
       */
      getMessages(): GmailMessage[];

      /**
       * Gets a permalink for this thread.
       * Note that this only works with the classic Gmail interface, not Inbox.
       *
       *     // Logs the permalink for the first thread in the inbox
       *     const thread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(thread.getPermalink());
       *
       * Return:
       * - String — the permalink for this thread
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getPermalink()
       */
      getPermalink(): string;

      /**
       * Returns whether the thread has any starred messages.
       *
       *     // Log if this thread has starred messages
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`has starred : ${firstThread.hasStarredMessages()}`);
       *
       * Return:
       * - Boolean — true if the thread has any starred messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#hasStarredMessages()
       */
      hasStarredMessages(): boolean;

      /**
       * Returns whether the thread is marked as important.
       *
       *     // Log if this thread is marked as important
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`Important? : ${firstThread.isImportant()}`);
       *
       * Return:
       * - Boolean — Whether the thread is marked as important.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isImportant()
       */
      isImportant(): boolean;

      /**
       * Returns whether the thread is labeled a chat.
       *
       *     // Log if this thread is a chat
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`is in chats? : ${firstThread.isInChats()}`);
       *
       * Return:
       * - Boolean — true if the thread is labeled a chat
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInChats()
       */
      isInChats(): boolean;

      /**
       * Returns whether the thread is in the inbox.
       *
       *     // Log if this thread is in the inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`is in the inbox? : ${firstThread.isInInbox()}`);
       *
       * Return:
       * - Boolean — true if the thread is in the inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInInbox()
       */
      isInInbox(): boolean;

      /**
       * Returns true if this thread is in the priority inbox; returns false otherwise.
       *
       *     // Log if this thread is in the priority inbox
       *     const firstThread = GmailApp.getPriorityInboxThreads(0, 1)[0];
       *     Logger.log(`is in priority inbox? ${firstThread.isInPriorityInbox()}`);
       *
       * Return:
       * - Boolean — true if the thread is in the priority inbox
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInPriorityInbox()
       */
      isInPriorityInbox(): boolean;

      /**
       * Returns whether the thread is marked as spam.
       *
       *     // Log if this thread is in the spam folder
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`Spam? ${firstThread.isInSpam()}`);
       *
       * Return:
       * - Boolean — Whether this thread is marked as spam.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInSpam()
       */
      isInSpam(): boolean;

      /**
       * Returns whether the thread is in the trash.
       *
       *     // Log if this thread is in the trash
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`Trashed? ${firstThread.isInTrash()}`);
       *
       * Return:
       * - Boolean — true if the thread is in the trash
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInTrash()
       */
      isInTrash(): boolean;

      /**
       * Returns whether the thread has any unread messages.
       *
       *     // Log if this thread is unread
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     Logger.log(`Unread? ${firstThread.isUnread()}`);
       *
       * Return:
       * - Boolean — true if there are unread messages
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isUnread()
       */
      isUnread(): boolean;

      /**
       * Marks this thread as important.
       *
       *     // Mark first inbox thread as important
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.markImportant();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - markUnimportant()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markImportant()
       */
      markImportant(): GmailThread;

      /**
       * Marks this thread as read.
       *
       *     // Mark first inbox thread as read
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.markRead();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - markUnread()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markRead()
       */
      markRead(): GmailThread;

      /**
       * Marks this thread as unimportant.
       *
       *     // Mark first inbox thread as unimportant
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.markUnimportant();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - markImportant()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markUnimportant()
       */
      markUnimportant(): GmailThread;

      /**
       * Marks this thread as unread.
       *
       *     // Mark first inbox thread as unread
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.markUnread();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * - markRead()
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markUnread()
       */
      markUnread(): GmailThread;

      /**
       * Moves this thread to the archive.
       *
       *     // Archive first inbox thread
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.moveToArchive();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToArchive()
       */
      moveToArchive(): GmailThread;

      /**
       * Moves this thread to the inbox.
       *
       *     // Move first non-inbox thread to inbox
       *     const firstThread = GmailApp.search('-in:inbox')[0];
       *     firstThread.moveToInbox();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToInbox()
       */
      moveToInbox(): GmailThread;

      /**
       * Moves this thread to spam.
       *
       *     // Move first inbox thread to spam
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.moveToSpam();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToSpam()
       */
      moveToSpam(): GmailThread;

      /**
       * Moves this thread to the trash.
       *
       *     // Move first inbox thread to trash
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.moveToTrash();
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToTrash()
       */
      moveToTrash(): GmailThread;

      /**
       * Reloads this thread, and associated state from Gmail (useful in case the labels, read state, etc., have changed).
       *
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     // ...Do something that may take a while here....
       *     firstThread.refresh();  // Make sure it's up-to-date
       *     // ...Do more stuff with firstThread ...
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#refresh()
       */
      refresh(): GmailThread;

      /**
       * Removes this label from the thread.
       *
       *     const myLabel = GmailApp.getUserLabelByName('<your label>');
       *     const threads = myLabel.getThreads();
       *     for (const thread of threads) {
       *       thread.removeLabel(myLabel);
       *     }
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#removeLabel(GmailLabel)
       * @param label the label to remove from this thread
       */
      removeLabel(label: GmailLabel): GmailThread;

      /**
       * Reply to the sender of the last message on this thread using the replyTo address.
       * Note that the total size of the email (including all headers) may not exceed 20KB.
       *
       *     // Respond to author of last email in thread with acknowledgment
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.reply('Got your message');
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#reply(String)
       * @param body the body of the email
       */
      reply(body: string): GmailThread;

      /**
       * Reply to the sender of the last message on this thread using the replyTo address, with optional arguments. The email can contain both plain text, and also an HTML body. Note that the total size of the email (including all headers, but excluding attachments) may not exceed 20KB.
       *
       *     // Respond with HTML body text.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.reply('incapable of HTML', {
       *       htmlBody: 'some HTML body text',
       *       noReply: true,
       *     });
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#reply(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - cc (String) — a comma separated list of email addresses to CC
       * - bcc (String) — a comma separated list of email addresses to BCC
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       */
      reply(body: string, options: any): GmailThread;

      /**
       * Reply to the sender (using the replyTo address), and all recipients of the last message on this thread.
       * Note that the total size of the email (including all headers) may not exceed 20KB.
       *
       *     // Respond to all with acknowledgment to the first thread in the inbox
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.replyAll('Got your message');
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#replyAll(String)
       * @param body the body of the email
       */
      replyAll(body: string): GmailThread;

      /**
       * Reply to the sender (using the replyTo address), and all recipients of the last message on this thread, with optional arguments. The email can contain both plain text, and also an HTML body. Note that the total size of the email (including all headers, but excluding attachments) may not exceed 20KB.
       *
       *     // Respond with HTML body text.
       *     const firstThread = GmailApp.getInboxThreads(0, 1)[0];
       *     firstThread.replyAll('incapable of HTML', {
       *       htmlBody: 'some HTML body text',
       *       noReply: true,
       *     });
       *
       * Return:
       * - GmailThread — this thread, useful for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes or appropriate scopes from the related REST API:
       * - https://mail.google.com/
       *
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#replyAll(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - cc (String) — a comma separated list of email addresses to CC
       * - bcc (String) — a comma separated list of email addresses to BCC
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - from (String) — the address that the email should be sent from, which must be one of the values returned by GmailApp.getAliases()
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for G Suite accounts, not Gmail users
       * - attachments (BlobSource[]) — an array of files to send with the email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       */
      replyAll(body: string, options: any): GmailThread;
    }
  }
}

declare var GmailApp: GoogleAppsScript.Gmail.GmailApp;
