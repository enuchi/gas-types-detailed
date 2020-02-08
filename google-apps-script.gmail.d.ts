// Type definitions for Google Apps Script 2020-01-26
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
       *
       *     // The code below creates a draft email with the current date and time.
       *     var now = new Date();
       *     GmailApp.createDraft("mike@example.com", "current time", "The time is: " + now.toString());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email
       * @param body body of the email
       */
      createDraft(recipient: string, subject: string, body: string): GmailDraft;

      /**
       * Creates a draft email message with optional arguments. The email can contain plain text or an
       * HTML body. The size of the email (including headers, but excluding attachments) is quota limited.
       *
       *
       *     // Create a draft email with a file from Google Drive attached as a PDF.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     GmailApp.createDraft('mike@example.com', 'Attachment example', 'Please see attached file.', {
       *         attachments: [file.getAs(MimeType.PDF)],
       *         name: 'Automatic Emailer Script'
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft(String,String,String,Object)
       * @param recipient the addresses of the recipient
       * @param subject the subject line
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createDraft(recipient: string, subject: string, body: string, options: object): GmailDraft;

      /**
       * Create a new user label of the given name.
       *
       *
       *     // Creates the label @FOO and logs label: FOO
       *     Logger.log("label: " + GmailApp.createLabel("FOO"));
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#createLabel(String)
       * @param name the name of the new label
       */
      createLabel(name: string): GmailLabel;

      /**
       * Deletes the specified label.
       *
       *
       *     // Have to get the label by name first
       *     var label = GmailApp.getUserLabelByName("FOO");
       *     GmailApp.deleteLabel(label);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#deleteLabel(GmailLabel)
       * @param label the label to delete
       */
      deleteLabel(label: GmailLabel): GmailApp;

      /**
       * Gets a list of the emails that are set up as aliases for this account in Gmail.
       *
       *
       * You can send a message from any of these aliases by using the "from" optional argument.
       *
       *
       *     // Log the aliases for this Gmail account and send an email as the first one.
       *     var me = Session.getActiveUser().getEmail();
       *     var aliases = GmailApp.getAliases();
       *     Logger.log(aliases);
       *     if (aliases.length > 0) {
       *       GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
       *     } else {
       *       GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getAliases()
       */
      getAliases(): string[];

      /**
       * Retrieves all chat threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     var threads = GmailApp.getChatThreads();
       *     Logger.log("# of chat threads: " + threads.length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getChatThreads()
       */
      getChatThreads(): GmailThread[];

      /**
       * Retrieves a range of chat threads irrespective of labels.
       *
       *
       *     // Get first 50 chat threads
       *     var threads = GmailApp.getChatThreads(0,50);
       *     // Will log no more than 50.0
       *     Logger.log(threads.length);
       *     Logger.log(threads[0].getFirstMessageSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getChatThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getChatThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Retrieve an email message draft by ID.
       *
       *
       * Use this in conjunction with getId() on Gmail drafts.
       *
       *
       *     // Get the first draft message in your drafts folder
       *     var draft = GmailApp.getDrafts()[0];
       *     // Get its ID
       *     var draftId = draft.getId();
       *     // Now fetch the same draft using that ID.
       *     var draftById = GmailApp.getDraft(draftId);
       *     // Should always log true as they should be the same message
       *     Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDraft(String)
       * @param draftId the ID of the draft to retrieve
       */
      getDraft(draftId: string): GmailDraft;

      /**
       * Retrieves all draft messages.
       *
       *
       *     // Logs the number of draft messages
       *     var drafts = GmailApp.getDraftMessages();
       *     Logger.log(drafts.length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDraftMessages()
       */
      getDraftMessages(): GmailMessage[];

      /**
       * Gets all Gmail draft messages.
       *
       *
       *     var drafts = GmailApp.getDrafts();
       *     for (var i = 0; i < drafts.length; i++) {
       *       Logger.log(drafts[i].getId());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getDrafts()
       */
      getDrafts(): GmailDraft[];

      /**
       * Retrieves all Inbox threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     // Log the subject lines of your Inbox
       *     var threads = GmailApp.getInboxThreads();
       *     for (var i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxThreads()
       */
      getInboxThreads(): GmailThread[];

      /**
       * Retrieves a range of Inbox threads irrespective of labels.
       *
       *
       *     // Log the subject lines of up to the first 50 emails in your Inbox
       *     var threads = GmailApp.getInboxThreads(0, 50);
       *     for (var i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getInboxThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads in the inbox.
       *
       *
       *     Logger.log("Messages unread in inbox: " + GmailApp.getInboxUnreadCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxUnreadCount()
       */
      getInboxUnreadCount(): Integer;

      /**
       * Gets a message by ID.
       *
       *
       * Use this in conjunction with getId() on Gmail messages.
       *
       *
       *     // Get the first message in the first thread of your inbox
       *     var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     // Get its ID
       *     var messageId = message.getId();
       *     // Now fetch the same message using that ID.
       *     var messageById = GmailApp.getMessageById(messageId);
       *     // Should always log true as they should be the same message
       *     Logger.log(message.getSubject() == messageById.getSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessageById(String)
       * @param id the ID of the message to retrieve
       */
      getMessageById(id: string): GmailMessage;

      /**
       * Retrieve all messages in the specified thread.
       *
       *
       *     // Log all the subject lines in the first thread of your inbox
       *     var thread = GmailApp.getInboxThreads(0, 1)[0];
       *     var messages = GmailApp.getMessagesForThread(thread);
       *     for (var i = 0 ; i < messages.length; i++) {
       *       Logger.log("subject: " + messages[i].getSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessagesForThread(GmailThread)
       * @param thread the thread of messages to retrieve
       */
      getMessagesForThread(thread: GmailThread): GmailMessage[];

      /**
       * Retrieve all messages in the specified threads.
       *
       *
       *     // Log the subject lines of all messages in the first two threads of your inbox
       *     var thread = GmailApp.getInboxThreads(0, 2);
       *     var messages = GmailApp.getMessagesForThreads(thread);
       *     for (var i = 0 ; i < messages.length; i++) {
       *       for (var j = 0; j < messages[i].length; j++) {
       *         Logger.log("subject: " + messages[i][j].getSubject());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getMessagesForThreads(GmailThread)
       * @param threads the threads of messages to retrieve
       */
      getMessagesForThreads(threads: GmailThread[]): GmailMessage[][];

      /**
       * Retrieves all Priority Inbox threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     Logger.log("# of messages in your Priority Inbox: " +
       *                GmailApp.getPriorityInboxThreads().length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxThreads()
       */
      getPriorityInboxThreads(): GmailThread[];

      /**
       * Retrieves a range of Priority Inbox threads irrespective of labels.
       *
       *
       *     // Will log some number 2 or less
       *     Logger.log("# of messages in your Priority Inbox: " +
       *                GmailApp.getPriorityInboxThreads(0, 2).length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getPriorityInboxThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads in the Priority Inbox.
       *
       *
       *     Logger.log("Number of unread emails in your Priority Inbox : " +
       *                GmailApp.getPriorityInboxUnreadCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getPriorityInboxUnreadCount()
       */
      getPriorityInboxUnreadCount(): Integer;

      /**
       * Retrieves all spam threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     Logger.log("# of total spam threads: " + GmailApp.getSpamThreads().length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamThreads()
       */
      getSpamThreads(): GmailThread[];

      /**
       * Retrieves a range of spam threads irrespective of labels.
       *
       *
       *     // Will log a number at most 5
       *     Logger.log("# of total spam threads: " + GmailApp.getSpamThreads(0, 5).length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getSpamThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads that are spam.
       *
       *
       *     // Unless you actually read stuff in your spam folder, this should be the same as
       *     // the number of messages in your spam folder.
       *     Logger.log("# unread threads that are spam: " + GmailApp.getSpamUnreadCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getSpamUnreadCount()
       */
      getSpamUnreadCount(): Integer;

      /**
       * Retrieves all starred threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     // Logs the number of starred threads
       *     Logger.log("# Starred threads: " + GmailApp.getStarredThreads().length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredThreads()
       */
      getStarredThreads(): GmailThread[];

      /**
       * Retrieves a range of starred threads irrespective of labels.
       *
       *
       *     // Logs the number of starred threads to a maximum of 5
       *     Logger.log("# Starred threads: " + GmailApp.getStarredThreads(0, 5).length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getStarredThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads that are starred.
       *
       *
       *     Logger.log("# unread and starred: " + GmailApp.getStarredUnreadCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getStarredUnreadCount()
       */
      getStarredUnreadCount(): Integer;

      /**
       * Gets a thread by ID.
       *
       *
       * Use this in conjunction with getId() on Gmail threads.
       *
       *
       *     // Thread IDs can also be found in the location bar when you have a thread open in Gmail
       *     // get first inbox thread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     // Get the same thread by ID
       *     var threadById = GmailApp.getThreadById(firstThread.getId());
       *     // Verify they are the same
       *     Logger.log(firstThread.getFirstMessageSubject() == threadById.getFirstMessageSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getThreadById(String)
       * @param id the ID of the thread to retrieve
       */
      getThreadById(id: string): GmailThread;

      /**
       * Retrieves all trash threads irrespective of labels.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     Logger.log("# of total trash threads: " + GmailApp.getTrashThreads().length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getTrashThreads()
       */
      getTrashThreads(): GmailThread[];

      /**
       * Retrieves a range of trash threads irrespective of labels.
       *
       *
       *     // Will log a number at most 5
       *     Logger.log("# of total trash threads: " + GmailApp.getTrashThreads(0, 5).length);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getTrashThreads(Integer,Integer)
       * @param start the index of the first thread to retrieve
       * @param max the maximum number of threads to retrieve
       */
      getTrashThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Retrieves a label given the label name.
       *
       *
       *     var labelObject = GmailApp.getUserLabelByName("myLabel");
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getUserLabelByName(String)
       * @param name the name of the label to retrieve
       */
      getUserLabelByName(name: string): GmailLabel;

      /**
       * Retrieves a list of user-created labels.
       *
       *
       *     // Logs all of the names of your labels
       *     var labels = GmailApp.getUserLabels();
       *     for (var i = 0; i < labels.length; i++) {
       *       Logger.log("label: " + labels[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#getUserLabels()
       */
      getUserLabels(): GmailLabel[];

      /**
       * Marks this message read and forces the message to refresh.
       *
       *
       *     // Mark the first message in the first thread of your inbox as read
       *     var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     GmailApp.markMessageRead(message);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessageRead(GmailMessage)
       * @param message the message to mark as read
       */
      markMessageRead(message: GmailMessage): GmailApp;

      /**
       * Marks this message unread and forces the message to refresh.
       *
       *
       *     // Mark the first message in the first thread of your inbox as unread
       *     var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
       *     GmailApp.markMessageUnread(message);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessageUnread(GmailMessage)
       * @param message the message to mark as unread
       */
      markMessageUnread(message: GmailMessage): GmailApp;

      /**
       * Marks these messages read and forces the messages to refresh.
       *
       *
       *     // Mark first three messages in the first inbox thread as read.
       *     // Assumes that the first inbox thread has 3 messages in it.
       *     var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
       *     var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
       *     GmailApp.markMessagesRead(thread.getMessages());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessagesRead(GmailMessage)
       * @param messages an array of messages to mark as read
       */
      markMessagesRead(messages: GmailMessage[]): GmailApp;

      /**
       * Marks these messages unread and forces the messages to refresh.
       *
       *
       *     // Mark first three messages in the first inbox thread as unread.
       *     // Assumes that the first inbox thread has 3 messages in it
       *     var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
       *     var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
       *     GmailApp.markMessagesUnread(thread.getMessages());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markMessagesUnread(GmailMessage)
       * @param messages an array of messages to mark as unread
       */
      markMessagesUnread(messages: GmailMessage[]): GmailApp;

      /**
       * Marks this thread as important and forces the thread to refresh.
       *
       *
       *     // Marks first inbox thread as important
       *     var thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadImportant(thread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadImportant(GmailThread)
       * @param thread the thread to mark as important
       */
      markThreadImportant(thread: GmailThread): GmailApp;

      /**
       * Marks this thread as read and forces the thread to refresh.
       *
       *
       *     // Marks first inbox thread as read
       *     var thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadRead(thread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadRead(GmailThread)
       * @param thread the thread to mark as read
       */
      markThreadRead(thread: GmailThread): GmailApp;

      /**
       * Marks this thread as unimportant and forces the thread to refresh.
       *
       *
       *     // Marks first inbox thread as unimportant
       *     var thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadUnimportant(thread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadUnimportant(GmailThread)
       * @param thread the thread to mark as unimportant
       */
      markThreadUnimportant(thread: GmailThread): GmailApp;

      /**
       * Marks this thread unread and forces the thread to refresh.
       *
       *
       *     // Marks first inbox thread as unread
       *     var thread = GmailApp.getInboxThreads(0, 1)[0];
       *     GmailApp.markThreadUnread(thread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadUnread(GmailThread)
       * @param thread the thread to mark as unread
       */
      markThreadUnread(thread: GmailThread): GmailApp;

      /**
       * Marks these threads as important and forces the threads to refresh.
       *
       *
       *     // Marks first two threads in inbox as important
       *     var threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsImportant(threads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsImportant(GmailThread)
       * @param threads an array of threads to mark as important
       */
      markThreadsImportant(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as read and forces the threads to refresh.
       *
       *
       *     // Marks first two threads in inbox as read
       *     var threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsRead(threads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsRead(GmailThread)
       * @param threads an array of threads to mark as read
       */
      markThreadsRead(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as unimportant and forces the threads to refresh.
       *
       *
       *     // Marks first two threads in inbox as unimportant
       *     var threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsUnimportant(threads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsUnimportant(GmailThread)
       * @param threads an array of threads to mark as unimportant
       */
      markThreadsUnimportant(threads: GmailThread[]): GmailApp;

      /**
       * Marks these threads as unread and forces the threads to refresh.
       *
       *
       *     // Marks first two threads in inbox as unread
       *     var threads = GmailApp.getInboxThreads(0, 2);
       *     GmailApp.markThreadsUnread(threads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#markThreadsUnread(GmailThread)
       * @param threads an array of threads to mark as unread
       */
      markThreadsUnread(threads: GmailThread[]): GmailApp;

      /**
       * Moves the message to the trash and forces the message to refresh.
       *
       *
       *     // Move the first message in your inbox to trash
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var firstMessage = firstThread.getMessages()[0];
       *     GmailApp.moveMessageToTrash(firstMessage);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveMessageToTrash(GmailMessage)
       * @param message the message to be trashed
       */
      moveMessageToTrash(message: GmailMessage): GmailApp;

      /**
       * Moves the specified messages to the trash and forces the messages to refresh.
       *
       *
       *     // Move first two messages in your inbox to trash
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var messages = firstThread.getMessages();
       *     var toDelete = [messages[0], messages[1]];
       *     GmailApp.moveMessagesToTrash(toDelete);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveMessagesToTrash(GmailMessage)
       * @param messages the messages to be trashed
       */
      moveMessagesToTrash(messages: GmailMessage[]): GmailApp;

      /**
       * Moves this thread to the archive and forces the thread to refresh.
       *
       *
       *     // Archive the first thread in your inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     GmailApp.moveThreadToArchive(firstThread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToArchive(GmailThread)
       * @param thread the thread to be archive
       */
      moveThreadToArchive(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to the inbox and forces the thread to refresh.
       *
       *
       *     // Find a thread not already in your inbox
       *     var thread = GmailApp.search("-in:inbox")[0]; // Get the first one
       *     GmailApp.moveThreadToInbox(thread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToInbox(GmailThread)
       * @param thread the thread to be moved to the inbox
       */
      moveThreadToInbox(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to spam and forces the thread to refresh.
       *
       *
       *     // Tag first thread in inbox as spam
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     GmailApp.moveThreadToSpam(firstThread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToSpam(GmailThread)
       * @param thread the thread to be moved to spam
       */
      moveThreadToSpam(thread: GmailThread): GmailApp;

      /**
       * Moves this thread to the trash and forces the thread to refresh.
       *
       *
       *     // Move first thread in inbox to trash
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     GmailApp.moveThreadToTrash(firstThread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadToTrash(GmailThread)
       * @param thread the thread to be trashed
       */
      moveThreadToTrash(thread: GmailThread): GmailApp;

      /**
       * Moves these threads to the archive and forces the threads to refresh.
       *
       *
       *     // Move first two threads in your inbox to the archive
       *     var firstTwoThreads = GmailApp.getInboxThreads(0,2);
       *     GmailApp.moveThreadsToArchive(firstTwoThreads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToArchive(GmailThread)
       * @param threads an array of threads to be archived
       */
      moveThreadsToArchive(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to the inbox and forces the threads to refresh.
       *
       *
       *     // Find two threads not already in your inbox
       *     var firstTwoThreads = GmailApp.search("-in:inbox", 0, 2);
       *     GmailApp.moveThreadsToInbox(firstTwoThreads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToInbox(GmailThread)
       * @param threads an array of threads to be moved to the inbox
       */
      moveThreadsToInbox(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to spam and forces the threads to refresh.
       *
       *
       *     // Move first two threads in your inbox to spam
       *     var firstTwoThreads = GmailApp.getInboxThreads(0,2);
       *     GmailApp.moveThreadsToSpam(firstTwoThreads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToSpam(GmailThread)
       * @param threads an array of threads to be moved to spam
       */
      moveThreadsToSpam(threads: GmailThread[]): GmailApp;

      /**
       * Moves these threads to the trash and forces the threads to refresh.
       *
       *
       *     // Move first two threads in your inbox to trash
       *     var firstTwoThreads = GmailApp.getInboxThreads(0,2);
       *     GmailApp.moveThreadsToTrash(firstTwoThreads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#moveThreadsToTrash(GmailThread)
       * @param threads an array of threads to be trashed
       */
      moveThreadsToTrash(threads: GmailThread[]): GmailApp;

      /**
       * Reloads the message and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var firstMessage = firstThread.getMessages()[0];
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshMessage(firstMessage);
       *     // ...Do more stuff with firstMessage...
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshMessage(GmailMessage)
       * @param message the message to be refreshed
       */
      refreshMessage(message: GmailMessage): GmailApp;

      /**
       * Reloads the messages and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var coupleOfMessages = firstThread.getMessages().slice(0, 2);
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshMessages(coupleOfMessages);
       *     // ...Do more stuff with coupleOfMessages...
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshMessages(GmailMessage)
       * @param messages the messages to be refreshed
       */
      refreshMessages(messages: GmailMessage[]): GmailApp;

      /**
       * Reloads the thread and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshThread(firstThread);
       *     // ... Do more stuff with the thread ...
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshThread(GmailThread)
       * @param thread the thread to be refreshed
       */
      refreshThread(thread: GmailThread): GmailApp;

      /**
       * Reloads the threads and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var threads = GmailApp.getInboxThreads(0, 3);
       *     // ...Do something that may take a while here....
       *     GmailApp.refreshThreads(threads);
       *     // ... Do more stuff with threads ...
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#refreshThreads(GmailThread)
       * @param threads the threads to be refreshed
       */
      refreshThreads(threads: GmailThread[]): GmailApp;

      /**
       * Search Gmail with the given query.
       *
       *
       * This call will fail when the size of all threads is too large for the system to handle.
       * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
       * specify ranges of the threads to retrieve in each call.
       *
       *
       *     // Find starred messages with subject IMPORTANT
       *     var threads = GmailApp.search('is:starred subject:"IMPORTANT"');
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#search(String)
       * @param query the search query, as you would type it into Gmail
       */
      search(query: string): GmailThread[];

      /**
       * Search Gmail with the given query.
       *
       *
       *     // Find starred messages with subject IMPORTANT and return second batch of 10.
       *     // Assumes there are at least 11 of them, otherwise this will return an empty array.
       *     var threads = GmailApp.search('is:starred subject:"IMPORTANT"', 10, 10);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#search(String,Integer,Integer)
       * @param query the search query, as you would type it into Gmail
       * @param start the index of the starting thread
       * @param max the maximum number of threads to return
       */
      search(query: string, start: Integer, max: Integer): GmailThread[];

      /**
       * Sends an email message. The size of the email (including headers) is quota limited.
       *
       *
       *     // The code below will send an email with the current date and time.
       *     var now = new Date();
       *     GmailApp.sendEmail("mike@example.com", "current time", "The time is: " + now.toString());
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       */
      sendEmail(recipient: string, subject: string, body: string): GmailApp;

      /**
       * Sends an email message with optional arguments. The email can contain plain text or an HTML
       * body. The size of the email (including headers, but excluding attachments) is quota limited.
       *
       *
       *     // Send an email with a file from Google Drive attached as a PDF.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     GmailApp.sendEmail('mike@example.com', 'Attachment example', 'Please see the attached file.', {
       *         attachments: [file.getAs(MimeType.PDF)],
       *         name: 'Automatic Emailer Script'
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
       * @param recipient the addresses of the recipient
       * @param subject the subject line (250 characters maximum)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      sendEmail(recipient: string, subject: string, body: string, options: object): GmailApp;

      /**
       * Sets the current message access
       * token that enables the script to access the current GmailMessage properties.
       *
       *
       * Only Gmail add-on projects using Gmail current message scopes require
       * this method.
       *
       *
       *     function handleAddonActionEvent(e) {
       *       var accessToken = e.messageMetadata.accessToken;
       *       var messageId = e.messageMetadata.messageId;
       *       GmailApp.setCurrentMessageAccessToken(accessToken);
       *       var mailMessage = GmailApp.getMessageById(messageId);
       *       // Do something with mailMessage
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#setCurrentMessageAccessToken(String)
       * @param accessToken the temporary access token obtained from a Gmail add-on action event object.
       */
      setCurrentMessageAccessToken(accessToken: string): void;

      /**
       * Adds a star to this message and forces the message to refresh.
       *
       *
       *     // Stars the first message in the first thread in your inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     GmailApp.starMessage(message);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#starMessage(GmailMessage)
       * @param message the message to star
       */
      starMessage(message: GmailMessage): GmailApp;

      /**
       * Adds stars to these messages and forces the messages to refresh.
       *
       *
       *     // Stars the first three messages in the first thread in your inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var coupleOfMessages = firstThread.getMessages().slice(0, 3);
       *     GmailApp.starMessages(coupleOfMessages);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#starMessages(GmailMessage)
       * @param messages an array of messages to star
       */
      starMessages(messages: GmailMessage[]): GmailApp;

      /**
       * Removes a star from this message and forces the message to refresh.
       *
       *
       *     // Unstars the first message in the first thread in your inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     GmailApp.unstarMessage(message);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#unstarMessage(GmailMessage)
       * @param message the message to unstar
       */
      unstarMessage(message: GmailMessage): GmailApp;

      /**
       * Removes stars from these messages and forces the messages to refresh.
       *
       *
       *     // Unstars the first three messages in the first thread in your inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var coupleOfMessages = firstThread.getMessages().slice(0, 3);
       *     GmailApp.unstarMessages(coupleOfMessages);
       * https://developers.google.com/apps-script/reference/gmail/gmail-app#unstarMessages(GmailMessage)
       * @param messages an array of messages to unstar
       */
      unstarMessages(messages: GmailMessage[]): GmailApp;
    }
    /**
     * An attachment from Gmail. This is a regular Blob except that it has an extra getSize() method that is faster than calling
     * getBytes().length and does not count against the Gmail read quota.
     *
     *     // Logs information about any attachments in the first 100 inbox threads.
     *     var threads = GmailApp.getInboxThreads(0, 100);
     *     var msgs = GmailApp.getMessagesForThreads(threads);
     *     for (var i = 0 ; i < msgs.length; i++) {
     *       for (var j = 0; j < msgs[i].length; j++) {
     *         var attachments = msgs[i][j].getAttachments();
     *         for (var k = 0; k < attachments.length; k++) {
     *           Logger.log('Message "%s" contains the attachment "%s" (%s bytes)',
     *                      msgs[i][j].getSubject(), attachments[k].getName(), attachments[k].getSize());
     *         }
     *       }
     *     }
     */
    interface GmailAttachment {

      /**
       * Returns a copy of this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#copyBlob()
       */
      copyBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Gets the data stored in this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getBytes()
       */
      getBytes(): Byte[];

      /**
       * Gets the content type of the bytes in this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getContentType()
       */
      getContentType(): string;

      /**
       * Gets the data of this blob as a String with UTF-8 encoding.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getDataAsString()
       */
      getDataAsString(): string;

      /**
       * Gets the data of this blob as a string with the specified encoding.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getDataAsString(String)
       * @param charset The charset to use in encoding the data in this blob as a string.
       */
      getDataAsString(charset: string): string;

      /**
       * Gets the SHA1 content hash for this attachment. This method does not count against the Gmail
       * read quota.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getHash()
       */
      getHash(): string;

      /**
       * Gets the name of this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getName()
       */
      getName(): string;

      /**
       * Gets the size of this attachment. This method is faster than calling getBytes().length and does not count against the Gmail read quota.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#getSize()
       */
      getSize(): Integer;

      /**
       * Returns whether this blob is a G Suite file (Sheets, Docs, etc.).
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#isGoogleType()
       */
      isGoogleType(): boolean;

      /**
       * Sets the data stored in this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setBytes(Byte)
       * @param data The new data.
       */
      setBytes(data: Byte[]): Base.Blob;

      /**
       * Sets the content type of the bytes in this blob.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setContentType(String)
       * @param contentType The new contentType.
       */
      setContentType(contentType: string): Base.Blob;

      /**
       * Sets the content type of the bytes in this blob based on the file extension. The contentType is
       * null if it cannot be guessed from its extension.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setContentTypeFromExtension()
       */
      setContentTypeFromExtension(): Base.Blob;

      /**
       * Sets the data of this blob from a string with UTF-8 encoding.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setDataFromString(String)
       * @param string The string data.
       */
      setDataFromString(string: string): Base.Blob;

      /**
       * Sets the data of this blob from a string with the specified encoding.
       * https://developers.google.com/apps-script/reference/gmail/gmail-attachment#setDataFromString(String,String)
       * @param string The string data.
       * @param charset The charset to use in interpreting the string as bytes.
       */
      setDataFromString(string: string, charset: string): Base.Blob;

      /**
       * Sets the name of this blob.
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
       *
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     draft.deleteDraft();
       *     draft.getMessage(); // Throws exception!
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#deleteDraft()
       */
      deleteDraft(): void;

      /**
       * Gets the ID of this draft message.
       *
       *
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var draftId = draft.getId();
       *     var draftById = GmailApp.getDraft(draftId);
       *     Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getId()
       */
      getId(): string;

      /**
       * Returns a GmailMessage representing this draft.
       *
       *
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var message = draft.getMessage();
       *     Logger.log(message.getSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getMessage()
       */
      getMessage(): GmailMessage;

      /**
       * Returns the ID of the GmailMessage representing this draft.
       *
       *
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var messageId = draft.getMessageId();
       *     Logger.log(messageId == draft.getMessage().getId());
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#getMessageId()
       */
      getMessageId(): string;

      /**
       * Sends this draft email message. The size of the email (including headers) is quota limited.
       *
       *
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var msg = draft.send(); // Send it
       *     Logger.log(msg.getDate()); // Should be approximately the current timestamp
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#send()
       */
      send(): GmailMessage;

      /**
       * Replaces the contents of this draft message. The size of the email (including headers) is quota limited.
       *
       *
       *     // The code below will update a draft email with the current date and time.
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var now = new Date();
       *     draft.update("mike@example.com", "current time", "The time is: " + now.toString());
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#update(String,String,String)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       */
      update(recipient: string, subject: string, body: string): GmailDraft;

      /**
       * Replaces the contents of this draft message using optional arguments. The email can contain
       * plain text or an HTML body. The size of the email (including headers) is quota limited.
       *
       *
       *     // Update a draft email with a file from Google Drive attached as a PDF.
       *     var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     draft.update('mike@example.com', 'Attachment example', 'Please see attached file.', {
       *         attachments: [file.getAs(MimeType.PDF)],
       *         name: 'Automatic Emailer Script'
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-draft#update(String,String,String,Object)
       * @param recipient comma separated list of email addresses
       * @param subject subject of the email (250 characters maximum)
       * @param body body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      update(recipient: string, subject: string, body: string, options: object): GmailDraft;
    }
    /**
     * A user-created label in a user's Gmail account.
     */
    interface GmailLabel {

      /**
       * Adds this label to the given thread and forces the thread to refresh (GmailThread.refresh()).
       *
       *
       *     // label the first thread in the inbox with the label MyLabel
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     label.addToThread(firstThread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#addToThread(GmailThread)
       * @param thread The thread to be labeled.
       */
      addToThread(thread: GmailThread): GmailLabel;

      /**
       * Adds this label to the given threads and forces the threads to refresh.
       *
       *
       *     // label the first three threads in the inbox with the label MyLabel
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var threads = GmailApp.getInboxThreads(0,3);
       *     label.addToThreads(threads);
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#addToThreads(GmailThread)
       * @param threads An array of threads to be labeled.
       */
      addToThreads(threads: GmailThread[]): GmailLabel;

      /**
       * Deletes this label.
       *
       *
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     label.deleteLabel();
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#deleteLabel()
       */
      deleteLabel(): void;

      /**
       * Gets the name of this label.
       *
       *
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     Logger.log(label.getName()); //logs MyLabel
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getName()
       */
      getName(): string;

      /**
       * Gets the threads that are marked with this label.
       *
       *
       * This calls fail when the size of all threads is too large for the system to handle. Where
       * the thread size is unknown, and potentially very large, please use getThreads(start, max) and specify ranges of the threads to retrieve in each call.
       *
       *
       *     // Log the subject lines of the threads labeled with MyLabel
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var threads = label.getThreads();
       *     for (var i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getThreads()
       */
      getThreads(): GmailThread[];

      /**
       * Gets a range of threads marked with this label.
       *
       *
       *     // log the subject lines of up to the first 30 threads with the label MyLabel
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var threads = label.getThreads(0, 30);
       *     for (var i = 0; i < threads.length; i++) {
       *       Logger.log(threads[i].getFirstMessageSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getThreads(Integer,Integer)
       * @param start The index of the starting thread.
       * @param max The maximum number of threads to return.
       */
      getThreads(start: Integer, max: Integer): GmailThread[];

      /**
       * Gets the number of unread threads tagged with this label.
       *
       *
       *     // log the number of unread threads labeled with MyLabel
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     Logger.log(label.getUnreadCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#getUnreadCount()
       */
      getUnreadCount(): Integer;

      /**
       * Removes this label from the given thread and forces the thread to refresh.
       *
       *
       *     // remove the label MyLabel from the first thread in the inbox
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     label.removeFromThread(firstThread);
       * https://developers.google.com/apps-script/reference/gmail/gmail-label#removeFromThread(GmailThread)
       * @param thread The thread be unlabeled.
       */
      removeFromThread(thread: GmailThread): GmailLabel;

      /**
       * Removes this label from the given threads and forces the threads to refresh.
       *
       *
       *     // remove the label MyLabel from the first three threads in the inbox
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var threads = GmailApp.getInboxThreads(0,3);
       *     label.removeFromThreads(threads);
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
       * Creates a draft message replying to the sender of this message using the reply-to address. The
       * size of the email (including headers) is quota limited.
       *
       *
       *     // Create a draft reply to the original message with an acknowledgment.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.createDraftReply("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReply(String)
       * @param body The body of the email.
       */
      createDraftReply(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of this message using the reply-to address, with
       * optional arguments.
       *
       *
       * The email can contain both plain text and an HTML body. The size of the email (including
       * headers) is quota
       * limited.
       *
       *
       *     // Create a draft response with an HTML text body.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.createDraftReply("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       cc: "another@example.com"
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReply(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createDraftReply(body: string, options: object): GmailDraft;

      /**
       * Creates a draft message replying to the sender using the reply-to address and all recipients of
       * this message. The size of the email (including headers) is quota limited.
       *
       *
       *     // Create a draft response to all recipients (except those bcc'd) with an acknowledgment.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.createDraftReplyAll("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReplyAll(String)
       * @param body The body of the email.
       */
      createDraftReplyAll(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of this message using the reply-to address and
       * all recipients, with optional arguments.
       *
       *
       * The email can contain both plain text and an HTML body. The size of the email (including
       * headers) is quota
       * limited.
       *
       *
       *     // Create a draft response to all recipients (except those bcc'd) using an HTML text body.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages[0];
       *     message.createDraftReplyAll("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       cc: "another@example.com"
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#createDraftReplyAll(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createDraftReplyAll(body: string, options: object): GmailDraft;

      /**
       * Forwards this message to new recipients. The size of the email (including headers) is quota limited.
       *
       *
       *     // Forward first message of first inbox thread to recipient1 & recipient2, both @example.com
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.forward("recipient1@example.com,recipient2@example.com");
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#forward(String)
       * @param recipient A comma-separated list of email addresses.
       */
      forward(recipient: string): GmailMessage;

      /**
       * Forwards this message to new recipients, with optional arguments.
       *
       *
       * The email can contain both plain text, and also an HTML body. The size of the email
       * (including headers) is quota
       * limited.
       *
       *
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.forward("recipient1@example.com,recipient2@example.com", {
       *       cc: "myboss@example.com",
       *       bcc: "mybosses-boss@example.com,vp@example.com"
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#forward(String,Object)
       * @param recipient A comma-separated list of email addresses.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      forward(recipient: string, options: object): GmailMessage;

      /**
       * Gets all the attachments for this message.
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getAttachments()
       */
      getAttachments(): GmailAttachment[];

      /**
       * Gets all the attachments for this message.
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getAttachments(Object)
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      getAttachments(options: object): GmailAttachment[];

      /**
       * Gets the comma-separated recipients bcc'd on this message.
       *
       *
       * This is empty for all received messages, by definition.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getBcc()); // Log bcc'd addresses
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getBcc()
       */
      getBcc(): string;

      /**
       * Gets the HTML content of the body of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getBody()); // Log contents of the body
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getBody()
       */
      getBody(): string;

      /**
       * Gets the comma-separated recipients cc'd on this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getCc()); // Log cc'd addresses
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getCc()
       */
      getCc(): string;

      /**
       * Gets the date and time of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getDate()); // Log date and time of the message
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getDate()
       */
      getDate(): Date;

      /**
       * Gets the sender of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getFrom()); // Log from address of the message
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getFrom()
       */
      getFrom(): string;

      /**
       * Gets the value of an RFC 2822 header given the header name.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox.
       *     var message = thread.getMessages()[0];         // Get the first message.
       *     Logger.log(message.getHeader("Message-ID"));   // Logs the Message-ID RFC 2822 header.
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getHeader(String)
       * @param name The name of the RFC header, without the colon separating it from the value.
       */
      getHeader(name: string): string;

      /**
       * Gets the ID of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     var id = message.getId();
       *     var messageById = GmailApp.getMessageById(id);
       *     Logger.log(message.getSubject() == messageById.getMessage()); // Always logs true
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getId()
       */
      getId(): string;

      /**
       * Gets the content of the body of this message without HTML formatting. This is more complex than
       * getBody() and takes longer.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getPlainBody()); // Log contents of the body
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getPlainBody()
       */
      getPlainBody(): string;

      /**
       * Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getRawContent()
       */
      getRawContent(): string;

      /**
       * Gets the reply-to address of this message (usually the sender).
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getReplyTo()); // Logs reply-to address
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getReplyTo()
       */
      getReplyTo(): string;

      /**
       * Gets the subject of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getSubject()); // Log subject line
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getSubject()
       */
      getSubject(): string;

      /**
       * Gets the thread that contains this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getThread().getFirstMessageSubject() ==
       *                thread.getFirstMessageSubject()); // Always logs true
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getThread()
       */
      getThread(): GmailThread;

      /**
       * Gets the comma-separated recipients of this message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log(message.getTo()); // Log the recipient of message
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#getTo()
       */
      getTo(): string;

      /**
       * Gets whether this message is a draft.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is draft? " + message.isDraft());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isDraft()
       */
      isDraft(): boolean;

      /**
       * Gets whether this message is a chat.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is a chat? " + message.isInChats());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInChats()
       */
      isInChats(): boolean;

      /**
       * Gets whether this message is in the inbox.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is in inbox? " + message.isInInbox());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInInbox()
       */
      isInInbox(): boolean;

      /**
       * Returns true if this message is in the priority inbox; returns false otherwise.
       *
       *
       *     var thread = GmailApp.getPriorityInboxThreads(0,1)[0]; // Get first thread in priority inbox
       *     var messages = thread.getMessages();
       *     for (var i = 0; i < messages.length; i++) {
       *       // At least one of the messages is in priority inbox
       *       Logger.log("is in priority inbox? " + messages[i].isInPriorityInbox());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInPriorityInbox()
       */
      isInPriorityInbox(): boolean;

      /**
       * Gets whether this message is in the trash.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is in the trash? " + message.isInTrash());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isInTrash()
       */
      isInTrash(): boolean;

      /**
       * Gets whether this message is starred.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is starred? " + message.isStarred());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isStarred()
       */
      isStarred(): boolean;

      /**
       * Gets whether this message is unread.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     Logger.log("is unread? " + message.isUnread());
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#isUnread()
       */
      isUnread(): boolean;

      /**
       * Marks the message as read.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     message.markRead(); // Mark as read
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#markRead()
       */
      markRead(): GmailMessage;

      /**
       * Marks the message as unread.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     message.markUnread(); // Mark as unread
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#markUnread()
       */
      markUnread(): GmailMessage;

      /**
       * Moves the message to the trash.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     message.moveToTrash(); // Move message to trash
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#moveToTrash()
       */
      moveToTrash(): GmailMessage;

      /**
       * Reloads this message and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     // .. Do bunch of stuff here
       *     message.refresh(); // Make sure it's up to date
       *     // Do more stuff to message
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#refresh()
       */
      refresh(): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address. The size of the email
       * (including headers) is quota
       * limited.
       *
       *
       *     // Respond to author of message with acknowledgment
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.reply("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#reply(String)
       * @param body The body of the email.
       */
      reply(body: string): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address, with optional arguments.
       *
       *
       * The email can contain both plain text, and also an HTML body. The size of the email
       * (including headers) is quota
       * limited.
       *
       *
       *     // Respond with HTML body text
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.reply("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       noReply: true
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#reply(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      reply(body: string, options: object): GmailMessage;

      /**
       * Replies to the sender using the reply-to address and all recipients of this message. The size
       * of the email (including headers) is quota limited.
       *
       *
       *     // Respond to all recipients (except bcc'd) of last email in thread with acknowledgment
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.replyAll("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#replyAll(String)
       * @param body The body of the email.
       */
      replyAll(body: string): GmailMessage;

      /**
       * Replies to the sender of this message using the reply-to address and all recipients, with
       * optional arguments.
       *
       *
       * The email can contain both plain text, and also an HTML body. The size of the email
       * (including headers) is quota
       * limited.
       *
       *
       *     // Respond with HTML body text
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages[0];
       *     messageThread.replyAll("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       noReply: true
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#replyAll(String,Object)
       * @param body The body of the email.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      replyAll(body: string, options: object): GmailMessage;

      /**
       * Stars the message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     message.star(); // Star the message
       * https://developers.google.com/apps-script/reference/gmail/gmail-message#star()
       */
      star(): GmailMessage;

      /**
       * Unstars the message.
       *
       *
       *     var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
       *     var message = thread.getMessages()[0]; // Get first message
       *     message.unstar(); // Unstar the message
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
       *
       *     // Add label MyLabel to the first thread in the inbox
       *     var label = GmailApp.getUserLabelByName("MyLabel");
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.addLabel(label);
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#addLabel(GmailLabel)
       * @param label the label to apply to this thread
       */
      addLabel(label: GmailLabel): GmailThread;

      /**
       * Creates a draft message replying to the sender of the last message in this thread using the
       * reply-to address. The size of the email (including headers) is quota limited.
       *
       *
       *     // Create a draft reply to the message author with an acknowledgement.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.createDraftReply("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReply(String)
       * @param body the body of the email
       */
      createDraftReply(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread using the
       * reply-to address, with optional arguments.
       *
       *
       * The email can contain both plain text and an HTML body. The size of the email (including
       * headers) is quota
       * limited.
       *
       *
       *     // Create a draft response with an HTML text body.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.createDraftReply("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       cc: "another@example.com"
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReply(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createDraftReply(body: string, options: object): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread, using the
       * reply-to address and all recipients of this message. The size of the email (including headers)
       * is quota limited.
       *
       *
       *     // Create a draft reply to all recipients (except those bcc'd) of the last email in this
       *     // thread.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var message = firstThread.getMessages()[0];
       *     message.createDraftReplyAll("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReplyAll(String)
       * @param body the body of the email
       */
      createDraftReplyAll(body: string): GmailDraft;

      /**
       * Creates a draft message replying to the sender of the last message in this thread, using the
       * reply-to address and all recipients, with optional arguments.
       *
       *
       * The email can contain both plain text and an HTML body. The size of the email (including
       * headers) is quota
       * limited.
       *
       *
       *     // Create a draft reply, using an HTML text body, to all recipients (except those bcc'd) of
       *     // the last email of in this thread.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.createDraftReplyAll("incapable of HTML", {
       *       htmlBody: "<b>some HTML body text</b>",
       *       cc: "another@example.com"
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#createDraftReplyAll(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createDraftReplyAll(body: string, options: object): GmailDraft;

      /**
       * Gets the subject of the first message in the thread.
       *
       *
       *     // Log the subject of the first message in the first thread in the inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log(firstThread.getFirstMessageSubject());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getFirstMessageSubject()
       */
      getFirstMessageSubject(): string;

      /**
       * Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a
       * consistent ID for a particular message in the thread, call getMessages()[0].getId()
       * instead.
       *
       *
       *     // Log the subject of the first message in the first thread in the inbox.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var id = firstThread.getId();
       *     // Get same thread by its ID.
       *     var thread = GmailApp.getThreadById(id);
       *     Logger.log(thread.getFirstMessageSubject() == firstThread.getFirstMessageSubject()); // True
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getId()
       */
      getId(): string;

      /**
       * Returns the user-created labels on this thread.
       *
       *
       *     // Log the names of the labels attached to the first thread in the inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var labels = firstThread.getLabels();
       *     for (var i = 0; i < labels.length; i++) {
       *       Logger.log(labels[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getLabels()
       */
      getLabels(): GmailLabel[];

      /**
       * Gets the date of this thread's most recent message.
       *
       *
       *     // Log the date of the most recent message on the first thread in the inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log(firstThread.getLastMessageDate());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getLastMessageDate()
       */
      getLastMessageDate(): Date;

      /**
       * Returns the number of messages in the thread.
       *
       *
       *     // Log the number of messages in the thread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log(firstThread.getMessageCount());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessageCount()
       */
      getMessageCount(): Integer;

      /**
       * Gets the messages in this thread.
       *
       *
       *     // Log the subjects of the messages in the thread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     var messages = firstThread.getMessages();
       *     for (var i = 0; i < messages.length; i++) {
       *       Logger.log(messages[i].getSubject());
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessages()
       */
      getMessages(): GmailMessage[];

      /**
       * Gets a permalink for this thread.
       *
       *
       * Note that this only works with the classic Gmail interface, not Inbox.
       *
       *
       *     // Logs the permalink for the first thread in the inbox
       *     var thread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log(thread.getPermalink());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#getPermalink()
       */
      getPermalink(): string;

      /**
       * Returns whether the thread has any starred messages.
       *
       *
       *     // Log if this thread has starred messages
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('has starred : ' + firstThread.hasStarredMessages());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#hasStarredMessages()
       */
      hasStarredMessages(): boolean;

      /**
       * Returns whether the thread is marked important.
       *
       *
       *     // Log if this thread is marked important
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('Important? : ' + firstThread.isImportant());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isImportant()
       */
      isImportant(): boolean;

      /**
       * Returns whether the thread is labeled a chat.
       *
       *
       *     // Log if this thread is a chat
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('is in chats? : ' + firstThread.isInChats());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInChats()
       */
      isInChats(): boolean;

      /**
       * Returns whether the thread is in the inbox.
       *
       *
       *     // Log if this thread is in the inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('is in the inbox? : ' + firstThread.isInInbox());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInInbox()
       */
      isInInbox(): boolean;

      /**
       * Returns true if this thread is in the priority inbox; returns false otherwise.
       *
       *
       *     // Log if this thread is in the priority inbox
       *     var firstThread = GmailApp.getPriorityInboxThreads(0,1)[0];
       *     Logger.log("is in priority inbox? " + firstThread.isInPriorityInbox());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInPriorityInbox()
       */
      isInPriorityInbox(): boolean;

      /**
       * Returns whether the thread is marked as spam.
       *
       *
       *     // Log if this thread is in the spam folder
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('Spam? ' + firstThread.isInSpam());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInSpam()
       */
      isInSpam(): boolean;

      /**
       * Returns whether the thread is in the trash.
       *
       *
       *     // Log if this thread is in the trash
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('Trashed? ' + firstThread.isInTrash());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isInTrash()
       */
      isInTrash(): boolean;

      /**
       * Returns whether the thread has any unread messages.
       *
       *
       *     // Log if this thread is unread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     Logger.log('Unread? ' + firstThread.isUnread());
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#isUnread()
       */
      isUnread(): boolean;

      /**
       * Marks this thread as important.
       *
       *
       *     // Mark first inbox thread as important
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.markImportant();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markImportant()
       */
      markImportant(): GmailThread;

      /**
       * Marks this thread as read.
       *
       *
       *     // Mark first inbox thread as read
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.markRead();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markRead()
       */
      markRead(): GmailThread;

      /**
       * Marks this thread as unimportant.
       *
       *
       *     // Mark first inbox thread as unimportant
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.markUnimportant();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markUnimportant()
       */
      markUnimportant(): GmailThread;

      /**
       * Marks this thread as unread.
       *
       *
       *     // Mark first inbox thread as unread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.markUnread();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#markUnread()
       */
      markUnread(): GmailThread;

      /**
       * Moves this thread to the archive.
       *
       *
       *     // Archive first inbox thread
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.moveToArchive();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToArchive()
       */
      moveToArchive(): GmailThread;

      /**
       * Moves this thread to the inbox.
       *
       *
       *     // Move first non-inbox thread to inbox
       *     var firstThread = GmailApp.search("-in:inbox")[0];
       *     firstThread.moveToInbox();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToInbox()
       */
      moveToInbox(): GmailThread;

      /**
       * Moves this thread to spam.
       *
       *
       *     // Move first inbox thread to spam
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.moveToSpam();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToSpam()
       */
      moveToSpam(): GmailThread;

      /**
       * Moves this thread to the trash.
       *
       *
       *     // Move first inbox thread to trash
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.moveToTrash();
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToTrash()
       */
      moveToTrash(): GmailThread;

      /**
       * Reloads this thread, and associated state from Gmail (useful in case the labels, read state,
       * etc., have changed).
       *
       *
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     // ...Do something that may take a while here....
       *     firstThread.refresh(); // Make sure it's up-to-date
       *     // ...Do more stuff with firstThread ...
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#refresh()
       */
      refresh(): GmailThread;

      /**
       * Removes this label from the thread.
       *
       *
       *     var myLabel = GmailApp.getUserLabelByName('<your label>');
       *     var threads = myLabel.getThreads();
       *     for (var x in threads) {
       *       var thread = threads[x];
       *       thread.removeLabel(myLabel);
       *     }
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#removeLabel(GmailLabel)
       * @param label the label to remove from this thread
       */
      removeLabel(label: GmailLabel): GmailThread;

      /**
       * Reply to the sender of the last message on this thread using the replyTo address.
       *
       *
       * Note that the total size of the email (including all headers) may not exceed 20KB.
       *
       *
       *     // Respond to author of last email in thread with acknowledgment
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.reply("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#reply(String)
       * @param body the body of the email
       */
      reply(body: string): GmailThread;

      /**
       * Reply to the sender of the last message on this thread using the replyTo address, with optional
       * arguments. The email can contain both plain text, and also an HTML body. Note that the total
       * size of the email (including all headers, but excluding attachments) may not exceed 20KB.
       *
       *
       *     // Respond with HTML body text.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.reply("incapable of HTML", {
       *       htmlBody: "some HTML body text",
       *       noReply: true
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#reply(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      reply(body: string, options: object): GmailThread;

      /**
       * Reply to the sender (using the replyTo address), and all recipients of the last message on this
       * thread.
       *
       *
       * Note that the total size of the email (including all headers) may not exceed 20KB.
       *
       *
       *     // Respond to all with acknowledgment to the first thread in the inbox
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.replyAll("Got your message");
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#replyAll(String)
       * @param body the body of the email
       */
      replyAll(body: string): GmailThread;

      /**
       * Reply to the sender (using the replyTo address), and all recipients of the last message
       * on this thread, with optional arguments. The email can contain both plain text, and also an
       * HTML body. Note that the total size of the email (including all headers, but excluding
       * attachments) may not exceed 20KB.
       *
       *
       *     // Respond with HTML body text.
       *     var firstThread = GmailApp.getInboxThreads(0,1)[0];
       *     firstThread.replyAll("incapable of HTML", {
       *       htmlBody: "some HTML body text",
       *       noReply: true
       *     });
       * https://developers.google.com/apps-script/reference/gmail/gmail-thread#replyAll(String,Object)
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      replyAll(body: string, options: object): GmailThread;
    }
  }
}

declare var GmailApp: GoogleAppsScript.Gmail.GmailApp;
