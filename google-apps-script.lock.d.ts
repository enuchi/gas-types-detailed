// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Lock {
    /**
     * A representation of a mutual-exclusion lock.
     *
     * This class allows scripts to make sure that only one instance of the script is executing a
     * given section of code at a time. This is particularly useful for callbacks and triggers, where a
     * user action may cause changes to a shared resource and you want to ensure that aren't collisions.
     *
     * The following examples shows how to use a lock in a form submit handler.
     *
     *     // Generates a unique ticket number for every form submission.
     *     function onFormSubmit(e) {
     *       var targetCell = e.range.offset(0, e.range.getNumColumns(), 1, 1);
     *
     *       // Get a script lock, because we're about to modify a shared resource.
     *       var lock = LockService.getScriptLock();
     *       // Wait for up to 30 seconds for other processes to finish.
     *       lock.waitLock(30000);
     *
     *       var ticketNumber = Number(ScriptProperties.getProperty('lastTicketNumber')) + 1;
     *       ScriptProperties.setProperty('lastTicketNumber', ticketNumber);
     *
     *       // Release the lock so that other processes can continue.
     *       lock.releaseLock();
     *
     *       targetCell.setValue(ticketNumber);
     *     }
     *
     * lastTicketNumber
     * ScriptProperties
     */
    interface Lock {

      /**
       * Returns true if the lock was acquired. This method will return false if tryLock(timeoutInMillis) or
       * waitLock(timeoutInMillis) were never called, timed out before the lock could be retrieved, or if releaseLock() was called.
       *
       *
       *     var lock = LockService.getScriptLock();
       *     lock.tryLock(10000);
       *     if (!lock.hasLock()) {
       *       Logger.log('Could not obtain lock after 10 seconds.');
       *     }
       * https://developers.google.com/apps-script/reference/lock/lock#hasLock()
       */
      hasLock(): boolean;

      /**
       * Releases the lock, allowing other processes waiting on the lock to continue. The lock is
       * automatically released when the script terminates, but for efficiency it is best to release it
       * as soon as you no longer need exclusive access to a section of code. This method has no effect
       * if the lock has not been acquired.
       *
       *
       * Note that if you are working with a spreadsheet, you should call SpreadsheetApp.flush()
       * prior to releasing the lock, to commit all pending changes to the spreadsheet while you still
       * have exclusive access to it.
       *
       *
       *     var lock = LockService.getScriptLock();
       *     lock.waitLock(10000);
       *     // Do some work on a shared resource.
       *     lock.releaseLock();
       * https://developers.google.com/apps-script/reference/lock/lock#releaseLock()
       */
      releaseLock(): void;

      /**
       * Attempts to acquire the lock, timing out after the provided number of milliseconds. This method
       * has no effect if the lock has already been acquired.
       *
       *
       *     var lock = LockService.getScriptLock();
       *     var success = lock.tryLock(10000);
       *     if (!success) {
       *       Logger.log('Could not obtain lock after 10 seconds.');
       *     }
       * https://developers.google.com/apps-script/reference/lock/lock#tryLock(Integer)
       * @param timeoutInMillis how long to wait to acquire the lock, in milliseconds
       */
      tryLock(timeoutInMillis: Integer): boolean;

      /**
       * Attempts to acquire the lock, timing out with an exception after the provided number of
       * milliseconds. This method is the same as tryLock(timeoutInMillis) except that it throws an exception
       * when the lock could not be acquired instead of returning false.
       *
       *
       *     var lock = LockService.getScriptLock();
       *     try {
       *       lock.waitLock(10000);
       *     } catch (e) {
       *       Logger.log('Could not obtain lock after 10 seconds.');
       *     }
       * https://developers.google.com/apps-script/reference/lock/lock#waitLock(Integer)
       * @param timeoutInMillis how long to wait to acquire the lock, in milliseconds
       */
      waitLock(timeoutInMillis: Integer): void;
    }
    /**
     * Prevents concurrent access to sections of code. This can be useful when you have multiple users
     * or processes modifying a shared resource and want to prevent collisions.
     */
    interface LockService {

      /**
       * Gets a lock that prevents any user of the current document from concurrently running a section
       * of code. A code section guarded by a document lock can be executed simultaneously by script
       * instances running in the context of different documents, but by no more than one execution for
       * any given document. Note that the lock is not actually acquired until Lock.tryLock(timeoutInMillis)
       * or Lock.waitLock(timeoutInMillis) is called. If this method is called outside of the context of a
       * containing document (such as from a standalone script or webapp), null is returned.
       * https://developers.google.com/apps-script/reference/lock/lock-service#getDocumentLock()
       */
      getDocumentLock(): Lock;

      /**
       * Gets a lock that prevents any user from concurrently running a section of code. A code section
       * guarded by a script lock cannot be executed simultaneously regardless of the identity of the
       * user. Note that the lock is not actually acquired until Lock.tryLock(timeoutInMillis) or Lock.waitLock(timeoutInMillis) is called.
       * https://developers.google.com/apps-script/reference/lock/lock-service#getScriptLock()
       */
      getScriptLock(): Lock;

      /**
       * Gets a lock that prevents the current user from concurrently running a section of code. A code
       * section guarded by a user lock can be executed simultaneously by different users, but by no
       * more than one execution for any given user. The lock is "private" to the user. Note that the
       * lock is not actually acquired until Lock.tryLock(timeoutInMillis) or Lock.waitLock(timeoutInMillis) is
       * called.
       * https://developers.google.com/apps-script/reference/lock/lock-service#getUserLock()
       */
      getUserLock(): Lock;
    }
  }
}

declare var LockService: GoogleAppsScript.Lock.LockService;
