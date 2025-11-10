// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Mail {
    /**
     * Sends email.
     *
     * This service allows users to send emails with complete control over the content of the email.
     * Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot access a user's Gmail
     * inbox.
     *
     * Changes to scripts written using GmailApp are more likely to trigger a re-authorization
     * request from a user than MailApp scripts.
     */
    interface MailApp {

      /**
       * Returns the number of recipients you can send emails to for the rest of the day. The returned value is valid for the current execution and might vary between executions.
       * Quotas are based on the number of email recipients. For specific quota information, see Quotas for Google Services.
       *
       *     const emailQuotaRemaining = MailApp.getRemainingDailyQuota();
       *     Logger.log(`Remaining email quota: ${emailQuotaRemaining}`);
       *
       * Return:
       * - Integer — The number of emails remaining that the script can send.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.send_mail
       *
       * https://developers.google.com/apps-script/reference/mail/mail-app#getRemainingDailyQuota()
       */
      getRemainingDailyQuota(): Integer;

      /**
       * Sends an email message. This variation of the method is much more flexible, allowing for many more options.
       *
       *     // This code fetches the Google and YouTube logos, inlines them in an email
       *     // and sends the email
       *     function inlineImage() {
       *       const googleLogoUrl =
       *           'https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png';
       *       const youtubeLogoUrl =
       *           'https://developers.google.com/youtube/images/YouTube_logo_standard_white.png';
       *       const googleLogoBlob =
       *           UrlFetchApp.fetch(googleLogoUrl).getBlob().setName('googleLogoBlob');
       *       const youtubeLogoBlob =
       *           UrlFetchApp.fetch(youtubeLogoUrl).getBlob().setName('youtubeLogoBlob');
       *       MailApp.sendEmail({
       *         to: 'recipient@example.com',
       *         subject: 'Logos',
       *         htmlBody: 'inline Google Logo<img src=\'cid:googleLogo\'> images! <br>' +
       *             'inline YouTube Logo <img src=\'cid:youtubeLogo\'>',
       *         inlineImages: {
       *           googleLogo: googleLogoBlob,
       *           youtubeLogo: youtubeLogoBlob,
       *         },
       *       });
       *     }
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.send_mail
       *
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(Object)
       * @param message a JavaScript object representing an email message
       */
      sendEmail(message: any): void;

      /**
       * Sends an email message.
       *
       *     MailApp.sendEmail(
       *         'recipient@example.com',
       *         'TPS reports',
       *         'Where are the TPS reports?',
       *     );
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.send_mail
       *
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String)
       * @param recipient the addresses of the recipients, separated by commas
       * @param subject the subject line
       * @param body the body of the email
       */
      sendEmail(recipient: string, subject: string, body: string): void;

      /**
       * Sends an email message with optional arguments.
       *
       *     // Send an email with two attachments: a file from Google Drive (as a PDF) and
       *     // an HTML file.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const blob = Utilities.newBlob(
       *         'Insert any HTML content here',
       *         'text/html',
       *         'my_document.html',
       *     );
       *     MailApp.sendEmail(
       *         'mike@example.com',
       *         'Attachment example',
       *         'Two files are attached.',
       *         {
       *           name: 'Automatic Emailer Script',
       *           attachments: [file.getAs(MimeType.PDF), blob],
       *         },
       *     );
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.send_mail
       *
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,Object)
       * @param recipient the addresses of the recipients, separated by commas
       * @param subject the subject line
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       *
       * Advanced parameters:
       * - attachments (BlobSource[]) — an array of files to send with the email (see example)
       * - bcc (String) — a comma-separated list of email addresses to BCC
       * - cc (String) — a comma-separated list of email addresses to CC
       * - htmlBody (String) — if set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional inlineImages field in HTML body if you have inlined images for your email
       * - inlineImages (Object) — a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
       * - name (String) — the name of the sender of the email (default: the user's name)
       * - noReply (Boolean) — true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for Google Workspace accounts, not Gmail users
       * - replyTo (String) — an email address to use as the default reply-to address (default: the user's email address)
       */
      sendEmail(recipient: string, subject: string, body: string, options: any): void;

      /**
       * Sends an email message. This method allows a user to easily specify a Reply-To address for the sent message that can differ from the sender.
       *
       *     MailApp.sendEmail(
       *         'recipient@example.com',
       *         'replies@example.com',
       *         'TPS report status',
       *         'What is the status of those TPS reports?',
       *     );
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.send_mail
       *
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,String)
       * @param to the addresses of the recipients, separated by commas
       * @param replyTo the reply-to address
       * @param subject the subject line
       * @param body the body of the email in plain text
       */
      sendEmail(to: string, replyTo: string, subject: string, body: string): void;
    }
  }
}

declare var MailApp: GoogleAppsScript.Mail.MailApp;
