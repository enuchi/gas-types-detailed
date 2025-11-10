// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Drive {
    /**
     * An enum representing classes of users who can access a file or folder, besides any individual
     * users who have been explicitly given access. These properties can be accessed from DriveApp.Access.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DriveApp.Access.ANYONE.
     *
     *     // Creates a folder that anyone on the Internet can read from and write to.
     *     // (Domain administrators can prohibit this setting for users of a Google
     *     // Workspace domain.)
     *     const folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    enum Access { ANYONE, ANYONE_WITH_LINK, DOMAIN, DOMAIN_WITH_LINK, PRIVATE }
    /**
     * Allows scripts to create, find, and modify files and folders in Google Drive. Although the
     * built-in Drive service is easier to use, it has some limitations. For the most up-to-date
     * features and support, and to access files or folders in shared drives, use the advanced Drive service.
     *
     *     // Logs the name of every file in the user's Drive.
     *     const files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       const file = files.next();
     *       console.log(file.getName());
     *     }
     */
    interface DriveApp {
      Access: typeof Access;
      Permission: typeof Permission;

      /**
       * Resumes a file iteration using a continuation token from a previous iterator. This method is useful if processing an iterator in one execution exceeds the maximum execution time. Continuation tokens are generally valid for one week.
       *
       *     // Continues getting a list of all 'Untitled document' files in the user's
       *     // Drive. Creates a file iterator named 'previousIterator'.
       *     const previousIterator = DriveApp.getFilesByName('Untitled document');
       *
       *     // Gets continuation token from the previous file iterator.
       *     const continuationToken = previousIterator.getContinuationToken();
       *
       *     // Creates a new iterator using the continuation token from the previous file
       *     // iterator.
       *     const newIterator = DriveApp.continueFileIterator(continuationToken);
       *
       *     // Resumes the file iteration using a continuation token from 'firstIterator'
       *     // and logs the file name.
       *     if (newIterator.hasNext()) {
       *       const file = newIterator.next();
       *       console.log(file.getName());
       *     }
       *
       * Return:
       * - FileIterator — A collection of files that remained in a previous iterator when the continuation token was generated.
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#continueFileIterator(String)
       * @param continuationToken A continuation token from a previous file iterator.
       */
      continueFileIterator(continuationToken: string): FileIterator;

      /**
       * Resumes a folder iteration using a continuation token from a previous iterator. This method is useful if processing an iterator in one execution exceeds the maximum execution time. Continuation tokens are generally valid for one week.
       *
       *     // Continues getting a list of all folders in user's Drive.
       *     // Creates a folder iterator named 'previousIterator'.
       *     const previousIterator = DriveApp.getFolders();
       *
       *     // Gets continuation token from the previous folder iterator.
       *     const continuationToken = previousIterator.getContinuationToken();
       *
       *     // Creates a new iterator using the continuation token from the previous folder
       *     // iterator.
       *     const newIterator = DriveApp.continueFolderIterator(continuationToken);
       *
       *     // Resumes the folder iteration using a continuation token from the previous
       *     // iterator and logs the folder name.
       *     if (newIterator.hasNext()) {
       *       const folder = newIterator.next();
       *       console.log(folder.getName());
       *     }
       *
       * Return:
       * - FolderIterator — A collection of folders that remained in a previous iterator when the continuation token was generated.
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#continueFolderIterator(String)
       * @param continuationToken A continuation token from a previous folder iterator.
       */
      continueFolderIterator(continuationToken: string): FolderIterator;

      /**
       * Creates a file in the root of the user's Drive from a given Blob of arbitrary data.
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(BlobSource)
       * @param blob The data for the new file.
       */
      createFile(blob: Base.BlobSource): File;

      /**
       * Creates a text file in the root of the user's Drive with the given name and contents. Throws an exception if content is larger than 50 MB.
       *
       *     // Create a text file with the content "Hello, world!"
       *     DriveApp.createFile('New Text File', 'Hello, world!');
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(String,String)
       * @param name The name of the new file.
       * @param content The content for the new file.
       */
      createFile(name: string, content: string): File;

      /**
       * Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws an exception if content is larger than 10MB.
       *
       *     // Create an HTML file with the content "Hello, world!"
       *     DriveApp.createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(String,String,String)
       * @param name The name of the new file.
       * @param content The content for the new file.
       * @param mimeType The MIME type of the new file.
       */
      createFile(name: string, content: string, mimeType: string): File;

      /**
       * Creates a folder in the root of the user's Drive with the given name.
       *
       * Return:
       * - Folder — The new folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFolder(String)
       * @param name The name of the new folder.
       */
      createFolder(name: string): Folder;

      /**
       * Creates a shortcut to the provided Drive item ID, and returns it.
       *
       * Return:
       * - File — The new shortcut.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createShortcut(String)
       * @param targetId The file ID of the target file or folder.
       */
      createShortcut(targetId: string): File;

      /**
       * Creates a shortcut to the provided Drive item ID and resource key, and returns it. A resource key is an additional parameter that needs to be passed to access the target file or folder that has been shared using a link.
       *
       *     // Creates shortcuts for all folders in the user's drive that have a specific
       *     // name.
       *     // TODO(developer): Replace 'Test-Folder' with a valid folder name in your
       *     // drive.
       *     const folders = DriveApp.getFoldersByName('Test-Folder');
       *
       *     // Iterates through all folders named 'Test-Folder'.
       *     while (folders.hasNext()) {
       *       const folder = folders.next();
       *
       *       // Creates a shortcut to the provided Drive item ID and resource key, and
       *       // returns it.
       *       DriveApp.createShortcutForTargetIdAndResourceKey(
       *           folder.getId(),
       *           folder.getResourceKey(),
       *       );
       *     }
       *
       * Return:
       * - File — The new shortcut.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#createShortcutForTargetIdAndResourceKey(String,String)
       * @param targetId The ID of the target file or folder.
       * @param targetResourceKey The resource key of the target file or folder.
       */
      createShortcutForTargetIdAndResourceKey(targetId: string, targetResourceKey: string): File;

      /**
       * Enables or disables enforceSingleParent behavior for all calls affecting item parents.
       * See the Simplifying Google Drive’s folder structure and sharing models blog for more details.
       *
       *     // Enables enforceSingleParent behavior for all calls affecting item parents.
       *     DriveApp.enforceSingleParent(true);
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#enforceSingleParent(Boolean)
       * @param value The new state of the enforceSingleParent flag.
       */
      enforceSingleParent(value: boolean): any;

      /**
       * Gets the file with the given ID. Throws a scripting exception if the file does not exist or the user does not have permission to access it.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace 'Test' with your file name.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     if (files.hasNext()) {
       *       // Gets the ID of each file in the list.
       *       const fileId = files.next().getId();
       *
       *       // Gets the file name using its ID and logs it to the console.
       *       console.log(DriveApp.getFileById(fileId).getName());
       *     }
       *
       * Return:
       * - File — The file with the given ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFileById(String)
       * @param id The ID of the file.
       */
      getFileById(id: string): File;

      /**
       * Gets the file with the given ID and resource key. Resource keys are an additional parameter which need to be passed to access files that have been shared using a link.
       * Throws a scripting exception if the file doesn't exist or the user doesn't have permission to access it.
       *
       *     // Gets a list of all files in Drive with the given name.
       *     // TODO(developer): Replace 'Test' with your file name.
       *     const files = DriveApp.getFilesByName('Test');
       *     if (files.hasNext()) {
       *       // Gets the first file in the list.
       *       const file = files.next();
       *
       *       // Gets the ID and resource key.
       *       const key = file.getResourceKey();
       *       const id = file.getId();
       *
       *       // Logs the file name to the console using its ID and resource key.
       *       console.log(DriveApp.getFileByIdAndResourceKey(id, key).getName());
       *     }
       *
       * Return:
       * - File — The file with the given ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFileByIdAndResourceKey(String,String)
       * @param id The ID of the file.
       * @param resourceKey The resource key of the folder.
       */
      getFileByIdAndResourceKey(id: string, resourceKey: string): File;

      /**
       * Gets a collection of all files in the user's Drive.
       *
       * Return:
       * - FileIterator — A collection of all files in the user's Drive.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFiles()
       */
      getFiles(): FileIterator;

      /**
       * Gets a collection of all files in the user's Drive that have the given name.
       *
       * Return:
       * - FileIterator — A collection of all files in the user's Drive that have the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFilesByName(String)
       * @param name The name of the files to find.
       */
      getFilesByName(name: string): FileIterator;

      /**
       * Gets a collection of all files in the user's Drive that have the given MIME type.
       *
       * Return:
       * - FileIterator — A collection of all files in the user's Drive that have the given MIME type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFilesByType(String)
       * @param mimeType The MIME type of the files to find.
       */
      getFilesByType(mimeType: string): FileIterator;

      /**
       * Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or the user does not have permission to access it.
       *
       * Return:
       * - Folder — The folder with the given ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFolderById(String)
       * @param id The ID of the folder.
       */
      getFolderById(id: string): Folder;

      /**
       * Gets the folder with the given ID and resource key. Resource keys are an additional parameter which need to be passed to access folders that have been shared using a link.
       * Throws a scripting exception if the folder doesn't exist or the user doesn't have permission to access it.
       *
       * Return:
       * - Folder — The folder with the given ID.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFolderByIdAndResourceKey(String,String)
       * @param id The ID of the folder.
       * @param resourceKey The resource key of the folder.
       */
      getFolderByIdAndResourceKey(id: string, resourceKey: string): Folder;

      /**
       * Gets a collection of all folders in the user's Drive.
       *
       * Return:
       * - FolderIterator — A collection of all folders in the user's Drive.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFolders()
       */
      getFolders(): FolderIterator;

      /**
       * Gets a collection of all folders in the user's Drive that have the given name.
       *
       * Return:
       * - FolderIterator — A collection of all folders in the user's Drive that have the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFoldersByName(String)
       * @param name The name of the folders to find.
       */
      getFoldersByName(name: string): FolderIterator;

      /**
       * Gets the folder at the root of the user's Drive.
       *
       *     // Gets the user's My Drive folder and logs its name to the console.
       *     console.log(DriveApp.getRootFolder().getName());
       *
       *     // Logs the Drive owner's name to the console.
       *     console.log(DriveApp.getRootFolder().getOwner().getName());
       *
       * Return:
       * - Folder — The root folder of the user's Drive.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getRootFolder()
       */
      getRootFolder(): Folder;

      /**
       * Gets the number of bytes the user is allowed to store in Drive.
       *
       *     // Gets the number of bytes the user can store in Drive and logs it to the
       *     // console.
       *     console.log(DriveApp.getStorageLimit());
       *
       * Return:
       * - Integer — The number of bytes the user is allowed to store in Drive.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getStorageLimit()
       */
      getStorageLimit(): Integer;

      /**
       * Gets the number of bytes the user is currently storing in Drive.
       *
       *     // Gets the number of bytes the user is currently storing in Drive and logs it
       *     // to the console.
       *     console.log(DriveApp.getStorageUsed());
       *
       * Return:
       * - Integer — The number of bytes the user is currently storing in Drive.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getStorageUsed()
       */
      getStorageUsed(): Integer;

      /**
       * Gets a collection of all the files in the trash of the user's Drive.
       *
       *     // Gets a list of all the files in the trash of the user's Drive.
       *     const trashFiles = DriveApp.getTrashedFiles();
       *
       *     // Logs the trash file names to the console.
       *     while (trashFiles.hasNext()) {
       *       const file = trashFiles.next();
       *       console.log(file.getName());
       *     }
       *
       * Return:
       * - FileIterator — A collection of files in the trash.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getTrashedFiles()
       */
      getTrashedFiles(): FileIterator;

      /**
       * Gets a collection of all the folders in the trash of the user's Drive.
       *
       *     // Gets a collection of all the folders in the trash of the user's Drive.
       *     const trashFolders = DriveApp.getTrashedFolders();
       *
       *     // Logs the trash folder names to the console.
       *     while (trashFolders.hasNext()) {
       *       const folder = trashFolders.next();
       *       console.log(folder.getName());
       *     }
       *
       * Return:
       * - FolderIterator — A collection of folders in the trash.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#getTrashedFolders()
       */
      getTrashedFolders(): FolderIterator;

      /**
       * Gets a collection of all files in the user's Drive that match the given search criteria. The search criteria are detailed in the Google Drive SDK documentation. Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the field differences between v2 and v3.
       * The params argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *     // Logs the name of every file in the user's Drive that modified after February 28,
       *     // 2022 whose name contains "untitled.""
       *     const files = DriveApp.searchFiles(
       *         'modifiedDate > "2022-02-28" and title contains "untitled"');
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       console.log(file.getName());
       *     }
       *
       * Return:
       * - FileIterator — A collection of all files in the user's Drive that match the search criteria.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#searchFiles(String)
       * @param params The search criteria, as detailed in the Google Drive SDK documentation.
       */
      searchFiles(params: string): FileIterator;

      /**
       * Gets a collection of all folders in the user's Drive that match the given search criteria. The search criteria are detailed in the Google Drive SDK documentation. Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the field differences between v2 and v3.
       * The params argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *     // Logs the name of every folder in the user's Drive that you own and is starred.
       *     const folders = DriveApp.searchFolders('starred = true and "me" in owners');
       *     while (folders.hasNext()) {
       *       const folder = folders.next();
       *       console.log(folder.getName());
       *     }
       *
       * Return:
       * - FolderIterator — A collection of all folders in the user's Drive that match the search criteria.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/drive-app#searchFolders(String)
       * @param params The search criteria, as detailed in the Google Drive SDK documentation.
       */
      searchFolders(params: string): FolderIterator;
      /** @deprecated DO NOT USE */ addFile(child: File): Folder;
      /** @deprecated DO NOT USE */ addFolder(child: Folder): Folder;
      /** @deprecated DO NOT USE */ removeFile(child: File): Folder;
      /** @deprecated DO NOT USE */ removeFolder(child: Folder): Folder;
    }
    /**
     * A file in Google Drive. Files can be accessed or created from DriveApp.
     *
     *     // Trash every untitled spreadsheet that hasn't been updated in a week.
     *     const files = DriveApp.getFilesByName('Untitled spreadsheet');
     *     while (files.hasNext()) {
     *       const file = files.next();
     *       if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
     *         file.setTrashed(true);
     *       }
     *     }
     */
    interface File {

      /**
       * Add the given user to the list of commenters for the File. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       file.addCommenter('hello@example.com');
       *     }
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addCommenter(String)
       * @param emailAddress The email address of the user to add.
       */
      addCommenter(emailAddress: string): File;

      /**
       * Add the given user to the list of commenters for the File. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Adds the active user as a commenter.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       file.addCommenter(Session.getActiveUser());
       *     }
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addCommenter(User)
       * @param user A representation of the user to add.
       */
      addCommenter(user: Base.User): File;

      /**
       * Add the given array of users to the list of commenters for the File. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       // TODO(developer): Replace 'cloudysanfrancisco@gmail.com' and
       *       // 'baklavainthebalkans@gmail.com' with the email addresses to add as
       *       // commenters.
       *       const emails = [
       *         'cloudysanfrancisco@gmail.com',
       *         'baklavainthebalkans@gmail.com',
       *       ];
       *       console.log(file.addCommenters(emails));
       *     }
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addCommenters(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addCommenters(emailAddresses: string[]): File;

      /**
       * Adds the given user to the list of editors for the File. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): File;

      /**
       * Adds the given user to the list of editors for the File. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): File;

      /**
       * Adds the given array of users to the list of editors for the File. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): File;

      /**
       * Adds the given user to the list of viewers for the File. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): File;

      /**
       * Adds the given user to the list of viewers for the File. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): File;

      /**
       * Adds the given array of users to the list of viewers for the File. If any of the users were already on the list of editors, this method has no effect for them.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): File;

      /**
       * Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.
       *
       * Return:
       * - Permission — The permissions granted to the user.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getAccess(String)
       * @param email The email address of the user whose permissions should be checked. Google Groups aren't supported.
       */
      getAccess(email: string): Permission;

      /**
       * Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.
       *
       * Return:
       * - Permission — The permissions granted to the user.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getAccess(User)
       * @param user A representation of the user whose permissions should be checked.
       */
      getAccess(user: Base.User): Permission;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/drive/file#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/drive/file#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the date the File was created.
       *
       * Return:
       * - Date — the date the File was created
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description for the File.
       *
       * Return:
       * - String — the description for the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the URL that can be used to download the file. Only users with permission to open the file in Google Drive can access the URL. You can use this URL in a browser to download the file, but you can't use to fetch the file with UrlFetchApp. If you want the contents of the file in the script, use getBlob().
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files and logs the download URLs to the console.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       console.log(file.getDownloadUrl());
       *     }
       *
       * Return:
       * - String — The URL that can be used to download the file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getDownloadUrl()
       */
      getDownloadUrl(): string;

      /**
       * Gets the list of editors for this File. If the user who executes the script does not have edit access to the File, this method returns an empty array.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Adds the email addresses in the array as editors of each file.
       *       // TODO(developer): Replace 'cloudysanfrancisco@gmail.com'
       *       // and 'baklavainthebalkans@gmail.com' with valid email addresses.
       *       file.addEditors([
       *         'cloudysanfrancisco@gmail.com',
       *         'baklavainthebalkans@gmail.com',
       *       ]);
       *
       *       // Gets a list of the file editors.
       *       const editors = file.getEditors();
       *
       *       // For each file, logs the editors' email addresses to the console.
       *       for (const editor of editors) {
       *         console.log(editor.getEmail());
       *       }
       *     }
       *
       * Return:
       * - User[] — If the user has edit access for this File, returns the list of editors. If the user doesn't have edit access, returns an empty array.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getEditors()
       */
      getEditors(): User[];

      /**
       * Gets the ID of the File.
       *
       * Return:
       * - String — the ID of the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getId()
       */
      getId(): string;

      /**
       * Gets the date the File was last updated.
       *
       * Return:
       * - Date — the date the File was last updated
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the MIME type of the file.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files and logs the MIME type to the console.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       console.log(file.getMimeType());
       *     }
       *
       * Return:
       * - String — The MIME type of the file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getMimeType()
       */
      getMimeType(): string;

      /**
       * Gets the name of the File.
       *
       * Return:
       * - String — the name of the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getName()
       */
      getName(): string;

      /**
       * Gets the file owner.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files and logs the names of the file owners to the console.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       console.log(file.getOwner().getName());
       *     }
       *
       * Return:
       * - User — The file owner.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getOwner()
       */
      getOwner(): User;

      /**
       * Gets a collection of folders that are immediate parents of the File.
       *
       * Return:
       * - FolderIterator — a collection of folders that are immediate parents of the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getParents()
       */
      getParents(): FolderIterator;

      /**
       * Gets the resource key of the File that is required to access items that have been shared using a link.
       *
       * Return:
       * - String — The resource key of the File.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getResourceKey()
       */
      getResourceKey(): string;

      /**
       * Gets whether this File is eligible to apply the security update that requires a resource key for access when it's shared using a link.
       * Drive requires a resource key to access some files or folders that have been shared using a link. This change is part of a security update. The update is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use setSecurityUpdateEnabled.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - Boolean — Whether the resource key requirement can be applied for the File.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getSecurityUpdateEligible()
       */
      getSecurityUpdateEligible(): boolean;

      /**
       * Gets whether this File requires a resource key for access when it's shared using a link. This requirement is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use setSecurityUpdateEnabled.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - Boolean — Whether the resource key requirement is enabled for this File.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getSecurityUpdateEnabled()
       */
      getSecurityUpdateEnabled(): boolean;

      /**
       * Gets which class of users can access the File, besides any individual users who have been explicitly given access.
       *
       * Return:
       * - Access — which class of users can access the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getSharingAccess()
       */
      getSharingAccess(): Access;

      /**
       * Gets the permission granted to those users who can access the File, besides any individual users who have been explicitly given access.
       *
       * Return:
       * - Permission — the permissions granted to users who can access the File
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getSharingPermission()
       */
      getSharingPermission(): Permission;

      /**
       * Gets the number of bytes used to store the File in Drive. Note that Google Workspace application files do not count toward Drive storage limits and thus return 0 bytes.
       *
       * Return:
       * - Integer — the number of bytes used to store the File in Drive
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getSize()
       */
      getSize(): Integer;

      /**
       * If this is a Shortcut, returns the ID of the item it points to.
       * Otherwise it returns null.
       *
       *     // The ID of the file for which to make a shortcut and the ID of
       *     // the folder to which you want to add the shortcut.
       *     // TODO(developer): Replace the file and folder IDs with your IDs.
       *     const fileId = 'abc123456';
       *     const folderId = 'xyz987654';
       *
       *     // Gets the folder to add the shortcut to.
       *     const folder = DriveApp.getFolderById(folderId);
       *
       *     // Creates a shortcut of the file and moves it to the specified folder.
       *     const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);
       *
       *     // Logs the target ID of the shortcut.
       *     console.log(`${shortcut.getName()}=${shortcut.getTargetId()}`);
       *
       * Return:
       * - String — The target item ID.
       *
       * https://developers.google.com/apps-script/reference/drive/file#getTargetId()
       */
      getTargetId(): string;

      /**
       * If this is a Shortcut, returns the mime type of the item it points to.
       * Otherwise it returns null.
       *
       *     // The ID of the file for which to make a shortcut and the ID of
       *     // the folder to which you want to add the shortcut.
       *     // TODO(developer): Replace the file and folder IDs with your IDs.
       *     const fileId = 'abc123456';
       *     const folderId = 'xyz987654';
       *
       *     // Gets the folder to add the shortcut to.
       *     const folder = DriveApp.getFolderById(folderId);
       *
       *     // Creates a shortcut of the file and moves it to the specified folder.
       *     const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);
       *
       *     // Logs the MIME type of the file that the shortcut points to.
       *     console.log(`MIME type of the shortcut: ${shortcut.getTargetMimeType()}`);
       *
       * Return:
       * - String — The target item mime type.
       *
       * https://developers.google.com/apps-script/reference/drive/file#getTargetMimeType()
       */
      getTargetMimeType(): string;

      /**
       * If the file is a shortcut, returns the resource key of the item it points to. A resource key is an additional parameter that you need to pass to access files that have been shared using a link.
       * If the file isn't a shortcut, it returns null.
       *
       *     //  Gets a file by its ID.
       *     //  TODO(developer): Replace 'abc123456' with your file ID.
       *     const file = DriveApp.getFileById('abc123456');
       *
       *     // If the file is a shortcut, returns the resource key of the file that it
       *     // points to.
       *     console.log(file.getTargetResourceKey());
       *
       * Return:
       * - String — The target item's resource key or null if the file is not a shortcut.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getTargetResourceKey()
       */
      getTargetResourceKey(): string;

      /**
       * Gets a thumbnail image for the file, or null if no thumbnail exists.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Logs the thumbnail image for each file to the console as a blob,
       *       // or null if no thumbnail exists.
       *       console.log(file.getThumbnail());
       *     }
       *
       * Return:
       * - Blob — The thumbnail image for the file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getThumbnail()
       */
      getThumbnail(): Base.Blob;

      /**
       * Gets the URL that can be used to open the File in a Google App like Drive or Docs.
       *
       * Return:
       * - String — the URL that can be used to view this File in a Google App like Drive or Docs
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this File. If the user who executes the script does not have edit access to the File, this method returns an empty array.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // For each file, logs the viewers' email addresses to the console.
       *       const viewers = file.getViewers();
       *       for (const viewer of viewers) {
       *         console.log(viewer.getEmail());
       *       }
       *     }
       *
       * Return:
       * - User[] — If the user has edit access for this File, returns the list of viewers and commenters. If the user doesn't have edit access, returns an empty array.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#getViewers()
       */
      getViewers(): User[];

      /**
       * Determines whether users with edit permissions to the File are allowed to share with other users or change the permissions.
       *
       * Return:
       * - Boolean — true if users with edit permissions are allowed to share with other users or change the permissions; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#isShareableByEditors()
       */
      isShareableByEditors(): boolean;

      /**
       * Determines whether the File has been starred in the user's Drive.
       *
       * Return:
       * - Boolean — true if the File is starred in the user's Drive; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#isStarred()
       */
      isStarred(): boolean;

      /**
       * Determines whether the File is in the trash of the user's Drive.
       *
       * Return:
       * - Boolean — true if the File is in the trash of the user's Drive; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#isTrashed()
       */
      isTrashed(): boolean;

      /**
       * Creates a copy of the file.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Creates a copy of each file and logs the file name to the console.
       *       console.log(file.makeCopy().getName());
       *     }
       *
       * Return:
       * - File — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy()
       */
      makeCopy(): File;

      /**
       * Creates a copy of the file in the destination directory.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Creates a copy of each file and adds it to the specified folder.
       *       // TODO(developer): Replace the folder ID with your own.
       *       const destination = DriveApp.getFolderById('123456abcxyz');
       *       const copiedFile = file.makeCopy(destination);
       *
       *       // Logs the file names to the console.
       *       console.log(copiedFile.getName());
       *     }
       *
       * Return:
       * - File — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(Folder)
       * @param destination The directory to copy the file into.
       */
      makeCopy(destination: Folder): File;

      /**
       * Creates a copy of the file and names it with the name provided.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Creates a copy of each file and sets the name to 'Test-Copy.'
       *       const filename = file.makeCopy('Test-Copy');
       *
       *       // Logs the copied file's name to the console.
       *       console.log(filename.getName());
       *     }
       *
       * Return:
       * - File — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(String)
       * @param name The filename that should be applied to the new copy.
       */
      makeCopy(name: string): File;

      /**
       * Creates a copy of the file in the destination directory and names it with the name provided.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Creates a copy of each file, sets the file name, and adds the copied file
       *       // to the specified folder.
       *       // TODO(developer): Replace the folder ID with your own.
       *       const destination = DriveApp.getFolderById('123456abcxyz');
       *       const copiedFile = file.makeCopy('Test-Copy', destination);
       *
       *       // Logs the file names to the console.
       *       console.log(copiedFile.getName());
       *     }
       *
       * Return:
       * - File — The new copy.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(String,Folder)
       * @param name The filename that should be applied to the new copy.
       * @param destination The directory to copy the file into.
       */
      makeCopy(name: string, destination: Folder): File;

      /**
       * Moves this item to the provided destination folder.
       * The current user must be the owner of the file or have at least edit access to the item's current parent folder in order to move the item to the destination folder.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#moveTo(Folder)
       * @param destination The folder that becomes the new parent.
       */
      moveTo(destination: Folder): File;

      /**
       * Removes the given user from the list of commenters for the File. This method does not block users from access the File if they belong to a class of users who have general access — for example, if the File is shared with the user's entire domain.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Removes the given user from the list of commenters for each file.
       *       // TODO(developer): Replace the email with the email of the user you want to
       *       // remove.
       *       file.removeCommenter('cloudysanfrancisco@gmail.com');
       *     }
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeCommenter(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeCommenter(emailAddress: string): File;

      /**
       * Removes the given user from the list of commenters for the File. This method does not block users from access the File if they belong to a class of users who have general access — for example, if the File is shared with the user's entire domain.
       *
       *     // Gets a list of all files in Google Drive with the given name.
       *     // TODO(developer): Replace the file name with your own.
       *     const files = DriveApp.getFilesByName('Test');
       *
       *     // Loops through the files.
       *     while (files.hasNext()) {
       *       const file = files.next();
       *
       *       // Removes the given user from the list of commenters for each file.
       *       console.log(file.removeCommenter(Session.getActiveUser()));
       *     }
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeCommenter(User)
       * @param user A representation of the user to remove.
       */
      removeCommenter(user: Base.User): File;

      /**
       * Removes the given user from the list of editors for the File. This method doesn't block users from accessing the File if they belong to a class of users who have general access—for example, if the File is shared with the user's entire domain, or if the File is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): File;

      /**
       * Removes the given user from the list of editors for the File. This method doesn't block users from accessing the File if they belong to a class of users who have general access—for example, if the File is shared with the user's entire domain, or if the File is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): File;

      /**
       * Removes the given user from the list of viewers and commenters for the File. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the File if they belong to a class of users who have general access—for example, if the File is shared with the user's entire domain, or if the File is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - File — This File for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): File;

      /**
       * Removes the given user from the list of viewers and commenters for the File. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the File if they belong to a class of users who have general access—for example, if the File is shared with the user's entire domain, or if the File is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - File — This File for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): File;

      /**
       * Revokes the access to the File granted to the given user. This method doesn't block users from accessing the File if they belong to a class of users who have general access — for example, if the File is shared with the user's entire domain.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#revokePermissions(String)
       * @param emailAddress The email address of the user whose access should be revoked.
       */
      revokePermissions(emailAddress: string): File;

      /**
       * Revokes the access to the File granted to the given user. This method doesn't block users from accessing the File if they belong to a class of users who have general access — for example, if the File is shared with the user's entire domain.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#revokePermissions(User)
       * @param user A representation of the user whose access should be revoked.
       */
      revokePermissions(user: Base.User): File;

      /**
       * Overwrites the content of the file with a given replacement. Throws an exception if content is larger than 10MB.
       *
       *     // Creates a text file with the content 'Hello, world!'
       *     const file = DriveApp.createFile('New Text File', 'Hello, world!');
       *
       *     // Logs the content of the text file to the console.
       *     console.log(file.getBlob().getDataAsString());
       *
       *     // Updates the content of the text file to 'Updated text!'
       *     file.setContent('Updated text!');
       *
       *     // Logs content of the text file to the console.
       *     console.log(file.getBlob().getDataAsString());
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setContent(String)
       * @param content The new content for the file.
       */
      setContent(content: string): File;

      /**
       * Sets the description for the File.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setDescription(String)
       * @param description the new description for the File
       */
      setDescription(description: string): File;

      /**
       * Sets the name of the File.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setName(String)
       * @param name the new name of the File
       */
      setName(name: string): File;

      /**
       * Changes the owner of the File. This method also gives the previous owner explicit edit access to the File.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setOwner(String)
       * @param emailAddress the email address of the user who should become the new owner
       */
      setOwner(emailAddress: string): File;

      /**
       * Changes the owner of the File. This method also gives the previous owner explicit edit access to the File.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setOwner(User)
       * @param user a representation of the user who should become the new owner
       */
      setOwner(user: Base.User): File;

      /**
       * Sets whether the File requires a resource key for access when it's shared using a link. Eligible files and folders are enabled by default.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - File — This File, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setSecurityUpdateEnabled(Boolean)
       * @param enabled Whether to enable the resource key requirement for the File.
       */
      setSecurityUpdateEnabled(enabled: boolean): File;

      /**
       * Sets whether users with edit permissions to the File are allowed to share with other users or change the permissions. The default for a new File is true.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setShareableByEditors(Boolean)
       * @param shareable true if users with edit permissions should be allowed to share with other users or change the permissions; false if not
       */
      setShareableByEditors(shareable: boolean): File;

      /**
       * Sets which class of users can access the File and what permissions those users are granted, besides any individual users who have been explicitly given access.
       *
       *     // Creates a folder that anyone on the Internet can read from and write to.
       *     // (Domain administrators can prohibit this setting for users of a Google
       *     // Workspace domain.)
       *     const folder = DriveApp.createFolder('Shared Folder');
       *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setSharing(Access,Permission)
       * @param accessType which class of users should be able to access the File
       * @param permissionType the permissions that should be granted to users who can access the File
       */
      setSharing(accessType: Access, permissionType: Permission): File;

      /**
       * Sets whether the File is starred in the user's Drive. The default for new Files is false.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setStarred(Boolean)
       * @param starred true if the File should be starred in the user's Drive; false if not
       */
      setStarred(starred: boolean): File;

      /**
       * Sets whether the File is in the trash of the user's Drive. Only the owner may trash the File. The default for new Files is false.
       *
       * Return:
       * - File — this File, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/file#setTrashed(Boolean)
       * @param trashed true if the File should be moved to the trash of the user's Drive; false if not
       */
      setTrashed(trashed: boolean): File;
    }
    /**
     * An iterator that allows scripts to iterate over a potentially large collection of files. File
     * iterators can be accessed from DriveApp or a Folder.
     *
     *     // Log the name of every file in the user's Drive.
     *     const files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       const file = files.next();
     *       Logger.log(file.getName());
     *     }
     */
    interface FileIterator {

      /**
       * Gets a token that can be used to resume this iteration at a later time. This method is useful if processing an iterator in one execution would exceed the maximum execution time. Continuation tokens are generally valid for one week.
       *
       * Return:
       * - String — a continuation token that can be used to resume this iteration with the items that remained in the iterator when the token was generated
       *
       * https://developers.google.com/apps-script/reference/drive/file-iterator#getContinuationToken()
       */
      getContinuationToken(): string;

      /**
       * Determines whether calling next() will return an item.
       *
       * Return:
       * - Boolean — true if next() will return an item; false if not
       *
       * https://developers.google.com/apps-script/reference/drive/file-iterator#hasNext()
       */
      hasNext(): boolean;

      /**
       * Gets the next item in the collection of files or folders. Throws an exception if no items remain.
       *
       * Return:
       * - File — the next item in the collection
       *
       * https://developers.google.com/apps-script/reference/drive/file-iterator#next()
       */
      next(): File;
    }
    /**
     * A folder in Google Drive. Folders can be accessed or created from DriveApp.
     *
     *     // Log the name of every folder in the user's Drive.
     *     const folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       const folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    interface Folder {

      /**
       * Adds the given user to the list of editors for the Folder. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Folder;

      /**
       * Adds the given user to the list of editors for the Folder. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Folder;

      /**
       * Adds the given array of users to the list of editors for the Folder. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Folder;

      /**
       * Adds the given user to the list of viewers for the Folder. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Folder;

      /**
       * Adds the given user to the list of viewers for the Folder. If the user was already on the list of editors, this method has no effect.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Folder;

      /**
       * Adds the given array of users to the list of viewers for the Folder. If any of the users were already on the list of editors, this method has no effect for them.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Folder;

      /**
       * Creates a file in the current folder from a given Blob of arbitrary data.
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(BlobSource)
       * @param blob The data for the new file.
       */
      createFile(blob: Base.BlobSource): File;

      /**
       * Creates a text file in the current folder with the given name and contents. Throws an exception if content is larger than 50 MB.
       *
       *     // Create a text file with the content "Hello, world!"
       *     DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(String,String)
       * @param name The name of the new file.
       * @param content The content for the new file.
       */
      createFile(name: string, content: string): File;

      /**
       * Creates a file in the current folder with the given name, contents, and MIME type. Throws an exception if content is larger than 10MB.
       *
       *     // Create an HTML file with the content "Hello, world!"
       *     DriveApp.getRootFolder().createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
       *
       * Return:
       * - File — The new file.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(String,String,String)
       * @param name The name of the new file.
       * @param content The content for the new file.
       * @param mimeType The MIME type of the new file.
       */
      createFile(name: string, content: string, mimeType: string): File;

      /**
       * Creates a folder in the current folder with the given name.
       *
       * Return:
       * - Folder — The new folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createFolder(String)
       * @param name The name of the new folder.
       */
      createFolder(name: string): Folder;

      /**
       * Creates a shortcut to the provided Drive item ID, and returns it.
       *
       * Return:
       * - File — The new shortcut.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createShortcut(String)
       * @param targetId The file ID of the target file or folder.
       */
      createShortcut(targetId: string): File;

      /**
       * Creates a shortcut to the provided Drive item ID and resource key, and returns it. A resource key is an additional parameter that needs to be passed to access the target file or folder that has been shared using a link.
       *
       *     // Creates shortcuts for all folders in the user's drive that have a specific
       *     // name.
       *     // TODO(developer): Replace 'Test-Folder' with a valid folder name in your
       *     // drive.
       *     const folders = DriveApp.getFoldersByName('Test-Folder');
       *
       *     // Iterates through all folders named 'Test-Folder'.
       *     while (folders.hasNext()) {
       *       const folder = folders.next();
       *
       *       // Creates a shortcut to the provided Drive item ID and resource key, and
       *       // returns it.
       *       DriveApp.createShortcutForTargetIdAndResourceKey(
       *           folder.getId(),
       *           folder.getResourceKey(),
       *       );
       *     }
       *
       * Return:
       * - File — The new shortcut.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#createShortcutForTargetIdAndResourceKey(String,String)
       * @param targetId The ID of the target file or folder.
       * @param targetResourceKey The resource key of the target file or folder.
       */
      createShortcutForTargetIdAndResourceKey(targetId: string, targetResourceKey: string): File;

      /**
       * Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.
       *
       * Return:
       * - Permission — The permissions granted to the user.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getAccess(String)
       * @param email The email address of the user whose permissions should be checked. Google Groups aren't supported.
       */
      getAccess(email: string): Permission;

      /**
       * Gets the permission granted to a specific user. The method doesn't support returning permissions for a Google Group or permissions inherited through Google Groups.
       *
       * Return:
       * - Permission — The permissions granted to the user.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getAccess(User)
       * @param user A representation of the user whose permissions should be checked.
       */
      getAccess(user: Base.User): Permission;

      /**
       * Gets the date the Folder was created.
       *
       * Return:
       * - Date — the date the Folder was created
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description for the Folder.
       *
       * Return:
       * - String — the description for the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the list of editors for this Folder. If the user who executes the script does not have edit access to the Folder, this method returns an empty array.
       *
       *     //  Gets a folder by its ID.
       *     //  TODO(developer): Replace the folder ID with your own.
       *     const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Gets the list of editors and logs their names to the console.
       *     const editors = folder.getEditors();
       *     for (const editor of editors) {
       *       console.log(editor.getName());
       *     }
       *
       * Return:
       * - User[] — The list of editors for this Folder if the user has edit access or an empty array otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getEditors()
       */
      getEditors(): User[];

      /**
       * Gets a collection of all files that are children of the current folder.
       *
       * Return:
       * - FileIterator — A collection of all files that are children of the current folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getFiles()
       */
      getFiles(): FileIterator;

      /**
       * Gets a collection of all files that are children of the current folder and have the given name.
       *
       * Return:
       * - FileIterator — A collection of all files that are children of the current folder and have the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getFilesByName(String)
       * @param name The name of the files to find.
       */
      getFilesByName(name: string): FileIterator;

      /**
       * Gets a collection of all files that are children of the current folder and have the given MIME type.
       *
       * Return:
       * - FileIterator — A collection of all files that are children of the current folder and have the given MIME type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getFilesByType(String)
       * @param mimeType The MIME type of the files to find.
       */
      getFilesByType(mimeType: string): FileIterator;

      /**
       * Gets a collection of all folders that are children of the current folder.
       *
       * Return:
       * - FolderIterator — A collection of all folders that are children of the current folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getFolders()
       */
      getFolders(): FolderIterator;

      /**
       * Gets a collection of all folders that are children of the current folder and have the given name.
       *
       * Return:
       * - FolderIterator — A collection of all folders that are children of the current folder and have the given name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getFoldersByName(String)
       * @param name The name of the folders to find.
       */
      getFoldersByName(name: string): FolderIterator;

      /**
       * Gets the ID of the Folder.
       *
       * Return:
       * - String — the ID of the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getId()
       */
      getId(): string;

      /**
       * Gets the date the Folder was last updated.
       *
       * Return:
       * - Date — the date the Folder was last updated
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the name of the Folder.
       *
       * Return:
       * - String — the name of the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getName()
       */
      getName(): string;

      /**
       * Gets the owner of this Folder.
       *
       *     //  Gets a folder by its ID.
       *     //  TODO(developer): Replace the folder ID with your own.
       *     const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Gets the owner of the folder and logs the name to the console.
       *     const folderOwner = folder.getOwner();
       *     console.log(folderOwner.getName());
       *
       * Return:
       * - User — The owner of this Folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getOwner()
       */
      getOwner(): User;

      /**
       * Gets a collection of folders that are immediate parents of the Folder.
       *
       * Return:
       * - FolderIterator — a collection of folders that are immediate parents of the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getParents()
       */
      getParents(): FolderIterator;

      /**
       * Gets the resource key of the Folder that is required to access items that have been shared using a link.
       *
       * Return:
       * - String — The resource key of the Folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getResourceKey()
       */
      getResourceKey(): string;

      /**
       * Gets whether this Folder is eligible to apply the security update that requires a resource key for access when it's shared using a link.
       * Drive requires a resource key to access some files or folders that have been shared using a link. This change is part of a security update. The update is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use setSecurityUpdateEnabled.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - Boolean — Whether the resource key requirement can be applied for the Folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getSecurityUpdateEligible()
       */
      getSecurityUpdateEligible(): boolean;

      /**
       * Gets whether this Folder requires a resource key for access when it's shared using a link. This requirement is turned on by default for eligible files and folders. To turn the resource key requirement on or off for eligible files, use setSecurityUpdateEnabled.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - Boolean — Whether the resource key requirement is enabled for this Folder.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getSecurityUpdateEnabled()
       */
      getSecurityUpdateEnabled(): boolean;

      /**
       * Gets which class of users can access the Folder, besides any individual users who have been explicitly given access.
       *
       * Return:
       * - Access — which class of users can access the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getSharingAccess()
       */
      getSharingAccess(): Access;

      /**
       * Gets the permission granted to those users who can access the Folder, besides any individual users who have been explicitly given access.
       *
       * Return:
       * - Permission — the permissions granted to users who can access the Folder
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getSharingPermission()
       */
      getSharingPermission(): Permission;

      /**
       * Gets the number of bytes used to store the Folder in Drive. Note that Google Workspace application files do not count toward Drive storage limits and thus return 0 bytes.
       *
       * Return:
       * - Integer — the number of bytes used to store the Folder in Drive
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getSize()
       */
      getSize(): Integer;

      /**
       * Gets the URL that can be used to open the Folder in a Google App like Drive or Docs.
       *
       * Return:
       * - String — the URL that can be used to view this Folder in a Google App like Drive or Docs
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Folder. If the user who executes the script does not have edit access to the Folder, this method returns an empty array.
       *
       *     //  Gets a folder by its ID.
       *     //  TODO(developer): Replace the folder ID with your own.
       *     const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');
       *
       *     // Gets the list of viewers and logs their names to the console.
       *     const viewers = folder.getViewers();
       *     for (const viewer of viewers) {
       *       console.log(viewer.getName());
       *     }
       *
       * Return:
       * - User[] — The list of viewers and commenters for this Folder if the user has edit access or an empty array otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#getViewers()
       */
      getViewers(): User[];

      /**
       * Determines whether users with edit permissions to the Folder are allowed to share with other users or change the permissions.
       *
       * Return:
       * - Boolean — true if users with edit permissions are allowed to share with other users or change the permissions; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#isShareableByEditors()
       */
      isShareableByEditors(): boolean;

      /**
       * Determines whether the Folder has been starred in the user's Drive.
       *
       * Return:
       * - Boolean — true if the Folder is starred in the user's Drive; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#isStarred()
       */
      isStarred(): boolean;

      /**
       * Determines whether the Folder is in the trash of the user's Drive.
       *
       * Return:
       * - Boolean — true if the Folder is in the trash of the user's Drive; false if not
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#isTrashed()
       */
      isTrashed(): boolean;

      /**
       * Moves this item to the provided destination folder.
       * The current user must be the owner of the file or have at least edit access to the item's current parent folder in order to move the item to the destination folder.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#moveTo(Folder)
       * @param destination The folder that becomes the new parent.
       */
      moveTo(destination: Folder): Folder;

      /**
       * Removes the given user from the list of editors for the Folder. This method doesn't block users from accessing the Folder if they belong to a class of users who have general access—for example, if the Folder is shared with the user's entire domain, or if the Folder is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Folder;

      /**
       * Removes the given user from the list of editors for the Folder. This method doesn't block users from accessing the Folder if they belong to a class of users who have general access—for example, if the Folder is shared with the user's entire domain, or if the Folder is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of viewers.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Folder;

      /**
       * Removes the given user from the list of viewers and commenters for the Folder. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the Folder if they belong to a class of users who have general access—for example, if the Folder is shared with the user's entire domain, or if the Folder is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - Folder — This Folder for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Folder;

      /**
       * Removes the given user from the list of viewers and commenters for the Folder. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the Folder if they belong to a class of users who have general access—for example, if the Folder is shared with the user's entire domain, or if the Folder is in a shared drive that the user can access.
       * For Drive files, this also removes the user from the list of editors.
       *
       * Return:
       * - Folder — This Folder for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Folder;

      /**
       * Revokes the access to the Folder granted to the given user. This method doesn't block users from accessing the Folder if they belong to a class of users who have general access — for example, if the Folder is shared with the user's entire domain.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#revokePermissions(String)
       * @param emailAddress The email address of the user whose access should be revoked.
       */
      revokePermissions(emailAddress: string): Folder;

      /**
       * Revokes the access to the Folder granted to the given user. This method doesn't block users from accessing the Folder if they belong to a class of users who have general access — for example, if the Folder is shared with the user's entire domain.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#revokePermissions(User)
       * @param user A representation of the user whose access should be revoked.
       */
      revokePermissions(user: Base.User): Folder;

      /**
       * Gets a collection of all files that are children of the current folder and match the given search criteria. The search criteria are detailed in the Google Drive SDK documentation. Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the field differences between v2 and v3.
       * The params argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *     // Logs the name of every file that are children of the current folder and modified after February 28,
       *     // 2022 whose name contains "untitled.""
       *     const files = DriveApp.getRootFolder().searchFiles(
       *         'modifiedDate > "2022-02-28" and title contains "untitled"');
       *     while (files.hasNext()) {
       *       const file = files.next();
       *       console.log(file.getName());
       *     }
       *
       * Return:
       * - FileIterator — A collection of all files that are children of the current folder and match the search criteria.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#searchFiles(String)
       * @param params The search criteria, as detailed in the Google Drive SDK documentation.
       */
      searchFiles(params: string): FileIterator;

      /**
       * Gets a collection of all folders that are children of the current folder and match the given search criteria. The search criteria are detailed in the Google Drive SDK documentation. Note that the Drive service uses v2 of the Drive API and some query fields differ from v3. Review the field differences between v2 and v3.
       * The params argument is a query string that can contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *     // Logs the name of every folder that are children of the current folder and you own and is starred.
       *     const folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
       *     while (folders.hasNext()) {
       *       const folder = folders.next();
       *       console.log(folder.getName());
       *     }
       *
       * Return:
       * - FolderIterator — A collection of all folders that are children of the current folder and match the search criteria.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive.readonly
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#searchFolders(String)
       * @param params The search criteria, as detailed in the Google Drive SDK documentation.
       */
      searchFolders(params: string): FolderIterator;

      /**
       * Sets the description for the Folder.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setDescription(String)
       * @param description the new description for the Folder
       */
      setDescription(description: string): Folder;

      /**
       * Sets the name of the Folder.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setName(String)
       * @param name the new name of the Folder
       */
      setName(name: string): Folder;

      /**
       * Changes the owner of the Folder. This method also gives the previous owner explicit edit access to the Folder.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setOwner(String)
       * @param emailAddress the email address of the user who should become the new owner
       */
      setOwner(emailAddress: string): Folder;

      /**
       * Changes the owner of the Folder. This method also gives the previous owner explicit edit access to the Folder.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setOwner(User)
       * @param user a representation of the user who should become the new owner
       */
      setOwner(user: Base.User): Folder;

      /**
       * Sets whether the Folder requires a resource key for access when it's shared using a link. Eligible files and folders are enabled by default.
       * Learn more about the Security update for Google Drive.
       *
       * Return:
       * - Folder — This Folder, for chaining.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setSecurityUpdateEnabled(Boolean)
       * @param enabled Whether to enable the resource key requirement for the Folder.
       */
      setSecurityUpdateEnabled(enabled: boolean): Folder;

      /**
       * Sets whether users with edit permissions to the Folder are allowed to share with other users or change the permissions. The default for a new Folder is true.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setShareableByEditors(Boolean)
       * @param shareable true if users with edit permissions should be allowed to share with other users or change the permissions; false if not
       */
      setShareableByEditors(shareable: boolean): Folder;

      /**
       * Sets which class of users can access the Folder and what permissions those users are granted, besides any individual users who have been explicitly given access.
       *
       *     // Creates a folder that anyone on the Internet can read from and write to.
       *     // (Domain administrators can prohibit this setting for users of a Google
       *     // Workspace domain.)
       *     const folder = DriveApp.createFolder('Shared Folder');
       *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setSharing(Access,Permission)
       * @param accessType which class of users should be able to access the Folder
       * @param permissionType the permissions that should be granted to users who can access the Folder
       */
      setSharing(accessType: Access, permissionType: Permission): Folder;

      /**
       * Sets whether the Folder is starred in the user's Drive. The default for new Folders is false.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setStarred(Boolean)
       * @param starred true if the Folder should be starred in the user's Drive; false if not
       */
      setStarred(starred: boolean): Folder;

      /**
       * Sets whether the Folder is in the trash of the user's Drive. Only the owner may trash the Folder. The default for new Folders is false.
       *
       * Return:
       * - Folder — this Folder, for chaining
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/drive
       *
       * https://developers.google.com/apps-script/reference/drive/folder#setTrashed(Boolean)
       * @param trashed true if the Folder should be moved to the trash of the user's Drive; false if not
       */
      setTrashed(trashed: boolean): Folder;
      /** @deprecated DO NOT USE */ addFile(child: File): Folder;
      /** @deprecated DO NOT USE */ addFolder(child: Folder): Folder;
      /** @deprecated DO NOT USE */ removeFile(child: File): Folder;
      /** @deprecated DO NOT USE */ removeFolder(child: Folder): Folder;
    }
    /**
     * An object that allows scripts to iterate over a potentially large collection of folders. Folder
     * iterators can be accessed from DriveApp, a File, or a Folder.
     *
     *     // Log the name of every folder in the user's Drive.
     *     const folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       const folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    interface FolderIterator {

      /**
       * Gets a token that can be used to resume this iteration at a later time. This method is useful if processing an iterator in one execution would exceed the maximum execution time. Continuation tokens are generally valid for one week.
       *
       * Return:
       * - String — a continuation token that can be used to resume this iteration with the items that remained in the iterator when the token was generated
       *
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#getContinuationToken()
       */
      getContinuationToken(): string;

      /**
       * Determines whether calling next() will return an item.
       *
       * Return:
       * - Boolean — true if next() will return an item; false if not
       *
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#hasNext()
       */
      hasNext(): boolean;

      /**
       * Gets the next item in the collection of files or folders. Throws an exception if no items remain.
       *
       * Return:
       * - Folder — the next item in the collection
       *
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#next()
       */
      next(): Folder;
    }
    /**
     * An enum representing the permissions granted to users who can access a file or folder, besides
     * any individual users who have been explicitly given access. These properties can be accessed from
     * DriveApp.Permission.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * DriveApp.Permission.VIEW.
     *
     *     // Creates a folder that anyone on the Internet can read from and write to.
     *     // (Domain administrators can prohibit this setting for Google Workspace users.)
     *     const folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    enum Permission { VIEW, EDIT, COMMENT, OWNER, ORGANIZER, FILE_ORGANIZER, NONE }
    /**
     * A user associated with a file in Google Drive. Users can be accessed from File.getEditors(), Folder.getViewers(), and other methods.
     *
     *     // Log the email address of all users who have edit access to a file.
     *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     const editors = file.getEditors();
     *     for (let i = 0; i < editors.length; i++) {
     *       Logger.log(editors[i].getEmail());
     *     }
     */
    interface User {

      /**
       * Gets the domain name associated with the user's account.
       *
       *     // Log the domain names associated with all users who have edit access to a
       *     // file.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const editors = file.getEditors();
       *     for (let i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getDomain());
       *     }
       *
       * Return:
       * - String — the domain name associated with the user's account
       *
       * https://developers.google.com/apps-script/reference/drive/user#getDomain()
       */
      getDomain(): string;

      /**
       * Gets the user's email address. The user's email address is only available if the user has chosen to share the address from the Google+ account settings page, or if the user belongs to the same domain as the user running the script and the domain administrator has allowed all users within the domain to see other users' email addresses.
       *
       *     // Log the email address of all users who have edit access to a file.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const editors = file.getEditors();
       *     for (let i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getEmail());
       *     }
       *
       * Return:
       * - String — the user's email's address, or a blank string if the email address is not available
       *
       * https://developers.google.com/apps-script/reference/drive/user#getEmail()
       */
      getEmail(): string;

      /**
       * Gets the user's name. This method returns null if the user's name is not available.
       *
       *     // Log the names of all users who have edit access to a file.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const editors = file.getEditors();
       *     for (let i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getName());
       *     }
       *
       * Return:
       * - String — the user's name, or null if the name is not available
       *
       * https://developers.google.com/apps-script/reference/drive/user#getName()
       */
      getName(): string;

      /**
       * Gets the URL for the user's photo. This method returns null if the user's photo is not available.
       *
       *     // Log the URLs for the photos of all users who have edit access to a file.
       *     const file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     const editors = file.getEditors();
       *     for (let i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getPhotoUrl());
       *     }
       *
       * Return:
       * - String — the URL for the user's photo, or null if the photo is not available
       *
       * https://developers.google.com/apps-script/reference/drive/user#getPhotoUrl()
       */
      getPhotoUrl(): string;
      /** @deprecated DO NOT USE */ getUserLoginId(): string;
    }
  }
}

declare var DriveApp: GoogleAppsScript.Drive.DriveApp;
