// Type definitions for Google Apps Script 2020-01-26
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
       * Returns the number of remaining emails a user can send for the rest of the day.
       *
       *
       * Quotas are based on the number of email recipients. Specific quota information is available
       * on the quota tab of the Apps Script
       * dashboard.
       *
       *
       *     var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
       *     Logger.log("Remaining email quota: " + emailQuotaRemaining);
       * https://developers.google.com/apps-script/reference/mail/mail-app#getRemainingDailyQuota()
       */
      getRemainingDailyQuota(): Integer;

      /**
       * Sends an email message. This variation of the method is much more flexible, allowing for many
       * more options.
       *
       *
       *     // This code fetches the Google and YouTube logos, inlines them in an email
       *     // and sends the email
       *     function inlineImage() {
       *       var googleLogoUrl = "http://www.google.com/intl/en_com/images/srpr/logo3w.png";
       *       var youtubeLogoUrl =
       *             "https://developers.google.com/youtube/images/YouTube_logo_standard_white.png";
       *       var googleLogoBlob = UrlFetchApp
       *                              .fetch(googleLogoUrl)
       *                              .getBlob()
       *                              .setName("googleLogoBlob");
       *       var youtubeLogoBlob = UrlFetchApp
       *                               .fetch(youtubeLogoUrl)
       *                               .getBlob()
       *                               .setName("youtubeLogoBlob");
       *       MailApp.sendEmail({
       *         to: "recipient@example.com",
       *         subject: "Logos",
       *         htmlBody: "inline Google Logo<img src='cid:googleLogo'> images! <br>" +
       *                   "inline YouTube Logo <img src='cid:youtubeLogo'>",
       *         inlineImages:
       *           {
       *             googleLogo: googleLogoBlob,
       *             youtubeLogo: youtubeLogoBlob
       *           }
       *       });
       *     }
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(Object)
       * @param message a JavaScript object representing an email message
       */
      sendEmail(message: object): void;

      /**
       * Sends an email message.
       *
       *
       *     MailApp.sendEmail("recipient@example.com",
       *                       "TPS reports",
       *                       "Where are the TPS reports?");
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String)
       * @param recipient the addresses of the recipients, separated by commas
       * @param subject the subject line
       * @param body the body of the email
       */
      sendEmail(recipient: string, subject: string, body: string): void;

      /**
       * Sends an email message with optional arguments.
       *
       *
       *     // Send an email with two attachments: a file from Google Drive (as a PDF) and an HTML file.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var blob = Utilities.newBlob('Insert any HTML content here', 'text/html', 'my_document.html');
       *     MailApp.sendEmail('mike@example.com', 'Attachment example', 'Two files are attached.', {
       *         name: 'Automatic Emailer Script',
       *         attachments: [file.getAs(MimeType.PDF), blob]
       *     });
       * https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,Object)
       * @param recipient the addresses of the recipients, separated by commas
       * @param subject the subject line
       * @param body the body of the email
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      sendEmail(recipient: string, subject: string, body: string, options: object): void;

      /**
       * Sends an email message. This method allows a user to easily specify a Reply-To address for the
       * sent message that can differ from the sender.
       *
       *
       *     MailApp.sendEmail("recipient@example.com",
       *                       "replies@example.com",
       *                       "TPS report status",
       *                       "What is the status of those TPS reports?");
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
