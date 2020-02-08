// Type definitions for Google Apps Script 2020-01-26
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
     *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *     // administrators can prohibit this setting for users of a G Suite domain.)
     *     var folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    enum Access { ANYONE, ANYONE_WITH_LINK, DOMAIN, DOMAIN_WITH_LINK, PRIVATE }
    /**
     * Allows scripts to create, find, and modify files and folders in Google Drive.
     *
     *     // Log the name of every file in the user's Drive.
     *     var files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       Logger.log(file.getName());
     *     }
     */
    interface DriveApp {
      Access: typeof Access;
      Permission: typeof Permission;

      /**
       * Adds the given file to the root of the user's Drive. This method does not move the file out of its
       * existing parent folder; a file can have more than one parent simultaneously.
       * https://developers.google.com/apps-script/reference/drive/drive-app#addFile(File)
       * @param child the child file to add
       */
      addFile(child: File): Folder;

      /**
       * Adds the given folder to the root of the user's Drive. This method does not move the folder out of
       * its existing parent folder; a folder can have more than one parent simultaneously.
       * https://developers.google.com/apps-script/reference/drive/drive-app#addFolder(Folder)
       * @param child the child folder to add
       */
      addFolder(child: Folder): Folder;

      /**
       * Resumes a file iteration using a continuation token from a previous iterator. This method is
       * useful if processing an iterator in one execution would exceed the maximum execution time.
       * Continuation tokens are generally valid for one week.
       * https://developers.google.com/apps-script/reference/drive/drive-app#continueFileIterator(String)
       * @param continuationToken a continuation token from a previous file iterator
       */
      continueFileIterator(continuationToken: string): FileIterator;

      /**
       * Resumes a folder iteration using a continuation token from a previous iterator. This method is
       * useful if processing an iterator in one execution would exceed the maximum execution time.
       * Continuation tokens are generally valid for one week.
       * https://developers.google.com/apps-script/reference/drive/drive-app#continueFolderIterator(String)
       * @param continuationToken a continuation token from a previous folder iterator
       */
      continueFolderIterator(continuationToken: string): FolderIterator;

      /**
       * Creates a file in the root of the user's Drive from a given Blob of arbitrary data.
       *
       *
       *     // Create an image file in Google Drive using the Maps service.
       *     var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
       *     DriveApp.createFile(blob);
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(BlobSource)
       * @param blob the data for the new file
       */
      createFile(blob: Base.BlobSource): File;

      /**
       * Creates a text file in the root of the user's Drive with the given name and contents. Throws an
       * exception if content is larger than 50 MB.
       *
       *
       *     // Create a text file with the content "Hello, world!"
       *     DriveApp.createFile('New Text File', 'Hello, world!');
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(String,String)
       * @param name the name of the new file
       * @param content the content for the new file
       */
      createFile(name: string, content: string): File;

      /**
       * Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws
       * an exception if content is larger than 10MB.
       *
       *
       *     // Create an HTML file with the content "Hello, world!"
       *     DriveApp.createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFile(String,String,String)
       * @param name the name of the new file
       * @param content the content for the new file
       * @param mimeType the MIME type of the new file
       */
      createFile(name: string, content: string, mimeType: string): File;

      /**
       * Creates a folder in the root of the user's Drive with the given name.
       * https://developers.google.com/apps-script/reference/drive/drive-app#createFolder(String)
       * @param name the name of the new folder
       */
      createFolder(name: string): Folder;

      /**
       * Gets the file with the given ID. Throws a scripting exception if the file does not exist or the
       * user does not have permission to access it.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFileById(String)
       * @param id the ID of the file
       */
      getFileById(id: string): File;

      /**
       * Gets a collection of all files in the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFiles()
       */
      getFiles(): FileIterator;

      /**
       * Gets a collection of all files in the user's Drive that have the given name.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFilesByName(String)
       * @param name the name of the files to find
       */
      getFilesByName(name: string): FileIterator;

      /**
       * Gets a collection of all files in the user's Drive that have the given MIME type.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFilesByType(String)
       * @param mimeType the MIME type of the files to find
       */
      getFilesByType(mimeType: string): FileIterator;

      /**
       * Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or
       * the user does not have permission to access it.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFolderById(String)
       * @param id the ID of the folder
       */
      getFolderById(id: string): Folder;

      /**
       * Gets a collection of all folders in the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFolders()
       */
      getFolders(): FolderIterator;

      /**
       * Gets a collection of all folders in the user's Drive that have the given name.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getFoldersByName(String)
       * @param name the name of the folders to find
       */
      getFoldersByName(name: string): FolderIterator;

      /**
       * Gets the folder at the root of the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getRootFolder()
       */
      getRootFolder(): Folder;

      /**
       * Gets the number of bytes the user is allowed to store in Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getStorageLimit()
       */
      getStorageLimit(): Integer;

      /**
       * Gets the number of bytes the user is currently storing in Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getStorageUsed()
       */
      getStorageUsed(): Integer;

      /**
       * Gets a collection of all the files in the trash of the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getTrashedFiles()
       */
      getTrashedFiles(): FileIterator;

      /**
       * Gets a collection of all the folders in the trash of the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/drive-app#getTrashedFolders()
       */
      getTrashedFolders(): FolderIterator;

      /**
       * Removes the given file from the root of the user's Drive. This method does not delete the file, but
       * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
       * for it or using the "All items" view.
       * https://developers.google.com/apps-script/reference/drive/drive-app#removeFile(File)
       * @param child the child file to remove
       */
      removeFile(child: File): Folder;

      /**
       * Removes the given folder from the root of the user's Drive. This method does not delete the folder
       * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
       * except by searching for it or using the "All items" view.
       * https://developers.google.com/apps-script/reference/drive/drive-app#removeFolder(Folder)
       * @param child the child folder to remove
       */
      removeFolder(child: Folder): Folder;

      /**
       * Gets a collection of all files in the user's Drive that match the given search
       * criteria. The search criteria are detailed the Google
       * Drive SDK documentation. Note that the params argument is a query string that may
       * contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *
       *     // Log the name of every file in the user's Drive that modified after February 28,
       *     // 2013 whose name contains "untitled".
       *     var files = DriveApp.searchFiles(
       *         'modifiedDate > "2013-02-28" and title contains "untitled"');
       *     while (files.hasNext()) {
       *       var file = files.next();
       *       Logger.log(file.getName());
       *     }
       * https://developers.google.com/apps-script/reference/drive/drive-app#searchFiles(String)
       * @param params the search criteria, as detailed in the Google Drive SDK documentation
       */
      searchFiles(params: string): FileIterator;

      /**
       * Gets a collection of all folders in the user's Drive that match the given search
       * criteria. The search criteria are detailed the Google
       * Drive SDK documentation. Note that the params argument is a query string that may
       * contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *
       *     // Log the name of every folder in the user's Drive that you own and is starred.
       *     var folders = DriveApp.searchFolders('starred = true and "me" in owners');
       *     while (folders.hasNext()) {
       *       var folder = folders.next();
       *       Logger.log(folder.getName());
       *     }
       * https://developers.google.com/apps-script/reference/drive/drive-app#searchFolders(String)
       * @param params the search criteria, as detailed in the Google Drive SDK documentation
       */
      searchFolders(params: string): FolderIterator;
    }
    /**
     * A file in Google Drive. Files can be accessed or created from DriveApp.
     *
     *     // Trash every untitled spreadsheet that hasn't been updated in a week.
     *     var files = DriveApp.getFilesByName('Untitled spreadsheet');
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
     *         file.setTrashed(true);
     *       }
     *     }
     */
    interface File {

      /**
       * Add the given user to the list of commenters for the File. If the user was
       * already on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addCommenter(String)
       * @param emailAddress the email address of the user to add
       */
      addCommenter(emailAddress: string): File;

      /**
       * Add the given user to the list of commenters for the File. If the user was
       * already on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addCommenter(User)
       * @param user a representation of the user to add
       */
      addCommenter(user: Base.User): File;

      /**
       * Add the given array of users to the list of commenters for the File. If any
       * of the users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addCommenters(String)
       * @param emailAddresses an array of email addresses of the users to add
       */
      addCommenters(emailAddresses: string[]): File;

      /**
       * Adds the given user to the list of editors for the File. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): File;

      /**
       * Adds the given user to the list of editors for the File. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): File;

      /**
       * Adds the given array of users to the list of editors for the File. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/drive/file#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): File;

      /**
       * Adds the given user to the list of viewers for the File. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/drive/file#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): File;

      /**
       * Adds the given user to the list of viewers for the File. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/drive/file#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): File;

      /**
       * Adds the given array of users to the list of viewers for the File. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/drive/file#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): File;

      /**
       * Gets the permission granted to the given user.
       * https://developers.google.com/apps-script/reference/drive/file#getAccess(String)
       * @param email the email address of the user whose permissions should be checked
       */
      getAccess(email: string): Permission;

      /**
       * Gets the permission granted to the given user.
       * https://developers.google.com/apps-script/reference/drive/file#getAccess(User)
       * @param user a representation of the user whose permissions should be checked
       */
      getAccess(user: Base.User): Permission;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/drive/file#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/drive/file#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the date the File was created.
       * https://developers.google.com/apps-script/reference/drive/file#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description for the File.
       * https://developers.google.com/apps-script/reference/drive/file#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the URL that can be used to download the file. Only users with permission to open the file
       * in Google Drive can access the URL.
       * https://developers.google.com/apps-script/reference/drive/file#getDownloadUrl()
       */
      getDownloadUrl(): string;

      /**
       * Gets the list of editors for this File. If the user who executes the script
       * does not have edit access to the File, this method returns an empty array.
       * https://developers.google.com/apps-script/reference/drive/file#getEditors()
       */
      getEditors(): User[];

      /**
       * Gets the ID of the File.
       * https://developers.google.com/apps-script/reference/drive/file#getId()
       */
      getId(): string;

      /**
       * Gets the date the File was last updated.
       * https://developers.google.com/apps-script/reference/drive/file#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the MIME type of the file.
       * https://developers.google.com/apps-script/reference/drive/file#getMimeType()
       */
      getMimeType(): string;

      /**
       * Gets the name of the File.
       * https://developers.google.com/apps-script/reference/drive/file#getName()
       */
      getName(): string;

      /**
       * Gets the owner of the File.
       * https://developers.google.com/apps-script/reference/drive/file#getOwner()
       */
      getOwner(): User;

      /**
       * Gets a collection of folders that are immediate parents of the File.
       * https://developers.google.com/apps-script/reference/drive/file#getParents()
       */
      getParents(): FolderIterator;

      /**
       * Gets which class of users can access the File, besides any individual
       * users who have been explicitly given access.
       * https://developers.google.com/apps-script/reference/drive/file#getSharingAccess()
       */
      getSharingAccess(): Access;

      /**
       * Gets the permission granted to those users who can access the File,
       * besides any individual users who have been explicitly given access.
       * https://developers.google.com/apps-script/reference/drive/file#getSharingPermission()
       */
      getSharingPermission(): Permission;

      /**
       * Gets the number of bytes used to store the File in Drive. Note that G
       * Suite application files do not count toward Drive storage limits and thus return 0
       * bytes.
       * https://developers.google.com/apps-script/reference/drive/file#getSize()
       */
      getSize(): Integer;

      /**
       * Gets a thumbnail image for the file, or null if no thumbnail exists.
       * https://developers.google.com/apps-script/reference/drive/file#getThumbnail()
       */
      getThumbnail(): Base.Blob;

      /**
       * Gets the URL that can be used to open the File in a Google App like
       * Drive or Docs.
       * https://developers.google.com/apps-script/reference/drive/file#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this File. If the user who
       * executes the script does not have edit access to the File, this method
       * returns an empty array.
       * https://developers.google.com/apps-script/reference/drive/file#getViewers()
       */
      getViewers(): User[];

      /**
       * Determines whether users with edit permissions to the File are allowed to
       * share with other users or change the permissions.
       * https://developers.google.com/apps-script/reference/drive/file#isShareableByEditors()
       */
      isShareableByEditors(): boolean;

      /**
       * Determines whether the File has been starred in the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/file#isStarred()
       */
      isStarred(): boolean;

      /**
       * Determines whether the File is in the trash of the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/file#isTrashed()
       */
      isTrashed(): boolean;

      /**
       * Creates a copy of the file.
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy()
       */
      makeCopy(): File;

      /**
       * Creates a copy of the file in the destination directory.
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(Folder)
       * @param destination the directory to copy the file into.
       */
      makeCopy(destination: Folder): File;

      /**
       * Creates a copy of the file and names it with the name provided.
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(String)
       * @param name the filename that should be applied to the new copy
       */
      makeCopy(name: string): File;

      /**
       * Creates a copy of the file in the destination directory and names it with the name provided.
       * https://developers.google.com/apps-script/reference/drive/file#makeCopy(String,Folder)
       * @param name the filename that should be applied to the new copy
       * @param destination the directory to copy the file into.
       */
      makeCopy(name: string, destination: Folder): File;

      /**
       * Removes the given user from the list of commenters for the File. This method
       * does not block users from access the File if they belong to a class of users
       * who have general access — for example, if the File is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/file#removeCommenter(String)
       * @param emailAddress the email address of the user to remove
       */
      removeCommenter(emailAddress: string): File;

      /**
       * Removes the given user from the list of commenters for the File. This method
       * does not block users from access the File if they belong to a class of users
       * who have general access — for example, if the File is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/file#removeCommenter(User)
       * @param user a representation of the user to remove
       */
      removeCommenter(user: Base.User): File;

      /**
       * Removes the given user from the list of editors for the File. This method doesn't
       * block users from accessing the File if they belong to a class of users who have
       * general access—for example, if the File is shared with the user's entire
       * domain, or if the File is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): File;

      /**
       * Removes the given user from the list of editors for the File. This method doesn't
       * block users from accessing the File if they belong to a class of users who have
       * general access—for example, if the File is shared with the user's entire
       * domain, or if the File is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/file#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): File;

      /**
       * Removes the given user from the list of viewers and commenters for the File. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the File if they belong to a class of users who
       * have general access—for example, if the File is shared with the user's
       * entire domain, or if the File is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/drive/file#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): File;

      /**
       * Removes the given user from the list of viewers and commenters for the File. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the File if they belong to a class of users who have general
       * access—for example, if the File is shared with the user's entire domain, or
       * if the File is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/drive/file#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): File;

      /**
       * Revokes the access to the File granted to the given user. This method does
       * not block users from accessing the File if they belong to a class of users
       * who have general access — for example, if the File is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/file#revokePermissions(String)
       * @param user the email address of the user whose access should be revoked
       */
      revokePermissions(user: string): File;

      /**
       * Revokes the access to the File granted to the given user. This method does
       * not block users from accessing the File if they belong to a class of users
       * who have general access — for example, if the File is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/file#revokePermissions(User)
       * @param user a representation of the user whose access should be revoked
       */
      revokePermissions(user: Base.User): File;

      /**
       * Overwrites the content of the file with a given replacement. Throws an exception if content is larger than 10MB.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/drive/file#setContent(String)
       * @param content the new content for the file
       */
      setContent(content: string): File;

      /**
       * Sets the description for the File.
       * https://developers.google.com/apps-script/reference/drive/file#setDescription(String)
       * @param description the new description for the File
       */
      setDescription(description: string): File;

      /**
       * Sets the name of the File.
       * https://developers.google.com/apps-script/reference/drive/file#setName(String)
       * @param name the new name of the File
       */
      setName(name: string): File;

      /**
       * Changes the owner of the File. This method also gives the previous owner
       * explicit edit access to the File.
       * https://developers.google.com/apps-script/reference/drive/file#setOwner(String)
       * @param emailAddress the email address of the user who should become the new owner
       */
      setOwner(emailAddress: string): File;

      /**
       * Changes the owner of the File. This method also gives the previous owner
       * explicit edit access to the File.
       * https://developers.google.com/apps-script/reference/drive/file#setOwner(User)
       * @param user a representation of the user who should become the new owner
       */
      setOwner(user: Base.User): File;

      /**
       * Sets whether users with edit permissions to the File are allowed to share
       * with other users or change the permissions. The default for a new File is
       * true.
       * https://developers.google.com/apps-script/reference/drive/file#setShareableByEditors(Boolean)
       * @param shareable true if users with edit permissions should be allowed to share with other users or change the permissions; false if not
       */
      setShareableByEditors(shareable: boolean): File;

      /**
       * Sets which class of users can access the File and what permissions
       * those users are granted, besides any individual users who have been explicitly given access.
       *
       *
       *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
       *     // administrators can prohibit this setting for users of a G Suite domain.)
       *     var folder = DriveApp.createFolder('Shared Folder');
       *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
       * https://developers.google.com/apps-script/reference/drive/file#setSharing(Access,Permission)
       * @param accessType which class of users should be able to access the File
       * @param permissionType the permissions that should be granted to users who can access the File
       */
      setSharing(accessType: Access, permissionType: Permission): File;

      /**
       * Sets whether the File is starred in the user's Drive. The default for
       * new Files is false.
       * https://developers.google.com/apps-script/reference/drive/file#setStarred(Boolean)
       * @param starred true if the File should be starred in the user's Drive; false if not
       */
      setStarred(starred: boolean): File;

      /**
       * Sets whether the File is in the trash of the user's Drive. Only the
       * owner may trash the File. The default for new Files is false.
       * https://developers.google.com/apps-script/reference/drive/file#setTrashed(Boolean)
       * @param trashed true if the File should be moved to the trash of the user's Drive; false if not
       */
      setTrashed(trashed: boolean): File;
    }
    /**
     * An iterator that allows scripts to iterate over a potentially large collection of files. File
     * iterators can be acccessed from DriveApp or a Folder.
     *
     *     // Log the name of every file in the user's Drive.
     *     var files = DriveApp.getFiles();
     *     while (files.hasNext()) {
     *       var file = files.next();
     *       Logger.log(file.getName());
     *     }
     */
    interface FileIterator {

      /**
       * Gets a token that can be used to resume this iteration at a later time. This method is useful
       * if processing an iterator in one execution would exceed the maximum execution time.
       * Continuation tokens are generally valid for one week.
       * https://developers.google.com/apps-script/reference/drive/file-iterator#getContinuationToken()
       */
      getContinuationToken(): string;

      /**
       * Determines whether calling next() will return an item.
       * https://developers.google.com/apps-script/reference/drive/file-iterator#hasNext()
       */
      hasNext(): boolean;

      /**
       * Gets the next item in the collection of files or folders. Throws an exception if no items
       * remain.
       * https://developers.google.com/apps-script/reference/drive/file-iterator#next()
       */
      next(): File;
    }
    /**
     * A folder in Google Drive. Folders can be accessed or created from DriveApp.
     *
     *     // Log the name of every folder in the user's Drive.
     *     var folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       var folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    interface Folder {

      /**
       * Adds the given user to the list of editors for the Folder. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/folder#addEditor(String)
       * @param emailAddress The email address of the user to add.
       */
      addEditor(emailAddress: string): Folder;

      /**
       * Adds the given user to the list of editors for the Folder. If the user was already
       * on the list of viewers, this method promotes the user out of the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/folder#addEditor(User)
       * @param user A representation of the user to add.
       */
      addEditor(user: Base.User): Folder;

      /**
       * Adds the given array of users to the list of editors for the Folder. If any of the
       * users were already on the list of viewers, this method promotes them out of the list of
       * viewers.
       * https://developers.google.com/apps-script/reference/drive/folder#addEditors(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addEditors(emailAddresses: string[]): Folder;

      /**
       * Adds the given file to the current folder. This method does not move the file out of its
       * existing parent folder; a file can have more than one parent simultaneously.
       * https://developers.google.com/apps-script/reference/drive/folder#addFile(File)
       * @param child the child file to add
       */
      addFile(child: File): Folder;

      /**
       * Adds the given folder to the current folder. This method does not move the folder out of
       * its existing parent folder; a folder can have more than one parent simultaneously.
       * https://developers.google.com/apps-script/reference/drive/folder#addFolder(Folder)
       * @param child the child folder to add
       */
      addFolder(child: Folder): Folder;

      /**
       * Adds the given user to the list of viewers for the Folder. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/drive/folder#addViewer(String)
       * @param emailAddress The email address of the user to add.
       */
      addViewer(emailAddress: string): Folder;

      /**
       * Adds the given user to the list of viewers for the Folder. If the user was already
       * on the list of editors, this method has no effect.
       * https://developers.google.com/apps-script/reference/drive/folder#addViewer(User)
       * @param user A representation of the user to add.
       */
      addViewer(user: Base.User): Folder;

      /**
       * Adds the given array of users to the list of viewers for the Folder. If any of the
       * users were already on the list of editors, this method has no effect for them.
       * https://developers.google.com/apps-script/reference/drive/folder#addViewers(String)
       * @param emailAddresses An array of email addresses of the users to add.
       */
      addViewers(emailAddresses: string[]): Folder;

      /**
       * Creates a file in the current folder from a given Blob of arbitrary data.
       *
       *
       *     // Create an image file in Google Drive using the Maps service.
       *     var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
       *     DriveApp.getRootFolder().createFile(blob);
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(BlobSource)
       * @param blob the data for the new file
       */
      createFile(blob: Base.BlobSource): File;

      /**
       * Creates a text file in the current folder with the given name and contents. Throws an
       * exception if content is larger than 50 MB.
       *
       *
       *     // Create a text file with the content "Hello, world!"
       *     DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(String,String)
       * @param name the name of the new file
       * @param content the content for the new file
       */
      createFile(name: string, content: string): File;

      /**
       * Creates a file in the current folder with the given name, contents, and MIME type. Throws
       * an exception if content is larger than 10MB.
       *
       *
       *     // Create an HTML file with the content "Hello, world!"
       *     DriveApp.getRootFolder().createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
       * https://developers.google.com/apps-script/reference/drive/folder#createFile(String,String,String)
       * @param name the name of the new file
       * @param content the content for the new file
       * @param mimeType the MIME type of the new file
       */
      createFile(name: string, content: string, mimeType: string): File;

      /**
       * Creates a folder in the current folder with the given name.
       * https://developers.google.com/apps-script/reference/drive/folder#createFolder(String)
       * @param name the name of the new folder
       */
      createFolder(name: string): Folder;

      /**
       * Gets the permission granted to the given user.
       * https://developers.google.com/apps-script/reference/drive/folder#getAccess(String)
       * @param email the email address of the user whose permissions should be checked
       */
      getAccess(email: string): Permission;

      /**
       * Gets the permission granted to the given user.
       * https://developers.google.com/apps-script/reference/drive/folder#getAccess(User)
       * @param user a representation of the user whose permissions should be checked
       */
      getAccess(user: Base.User): Permission;

      /**
       * Gets the date the Folder was created.
       * https://developers.google.com/apps-script/reference/drive/folder#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description for the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the list of editors for this Folder. If the user who executes the script
       * does not have edit access to the Folder, this method returns an empty array.
       * https://developers.google.com/apps-script/reference/drive/folder#getEditors()
       */
      getEditors(): User[];

      /**
       * Gets a collection of all files that are children of the current folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getFiles()
       */
      getFiles(): FileIterator;

      /**
       * Gets a collection of all files that are children of the current folder and have the given name.
       * https://developers.google.com/apps-script/reference/drive/folder#getFilesByName(String)
       * @param name the name of the files to find
       */
      getFilesByName(name: string): FileIterator;

      /**
       * Gets a collection of all files that are children of the current folder and have the given MIME type.
       * https://developers.google.com/apps-script/reference/drive/folder#getFilesByType(String)
       * @param mimeType the MIME type of the files to find
       */
      getFilesByType(mimeType: string): FileIterator;

      /**
       * Gets a collection of all folders that are children of the current folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getFolders()
       */
      getFolders(): FolderIterator;

      /**
       * Gets a collection of all folders that are children of the current folder and have the given name.
       * https://developers.google.com/apps-script/reference/drive/folder#getFoldersByName(String)
       * @param name the name of the folders to find
       */
      getFoldersByName(name: string): FolderIterator;

      /**
       * Gets the ID of the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getId()
       */
      getId(): string;

      /**
       * Gets the date the Folder was last updated.
       * https://developers.google.com/apps-script/reference/drive/folder#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the name of the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getName()
       */
      getName(): string;

      /**
       * Gets the owner of the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getOwner()
       */
      getOwner(): User;

      /**
       * Gets a collection of folders that are immediate parents of the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#getParents()
       */
      getParents(): FolderIterator;

      /**
       * Gets which class of users can access the Folder, besides any individual
       * users who have been explicitly given access.
       * https://developers.google.com/apps-script/reference/drive/folder#getSharingAccess()
       */
      getSharingAccess(): Access;

      /**
       * Gets the permission granted to those users who can access the Folder,
       * besides any individual users who have been explicitly given access.
       * https://developers.google.com/apps-script/reference/drive/folder#getSharingPermission()
       */
      getSharingPermission(): Permission;

      /**
       * Gets the number of bytes used to store the Folder in Drive. Note that G
       * Suite application files do not count toward Drive storage limits and thus return 0
       * bytes.
       * https://developers.google.com/apps-script/reference/drive/folder#getSize()
       */
      getSize(): Integer;

      /**
       * Gets the URL that can be used to open the Folder in a Google App like
       * Drive or Docs.
       * https://developers.google.com/apps-script/reference/drive/folder#getUrl()
       */
      getUrl(): string;

      /**
       * Gets the list of viewers and commenters for this Folder. If the user who
       * executes the script does not have edit access to the Folder, this method
       * returns an empty array.
       * https://developers.google.com/apps-script/reference/drive/folder#getViewers()
       */
      getViewers(): User[];

      /**
       * Determines whether users with edit permissions to the Folder are allowed to
       * share with other users or change the permissions.
       * https://developers.google.com/apps-script/reference/drive/folder#isShareableByEditors()
       */
      isShareableByEditors(): boolean;

      /**
       * Determines whether the Folder has been starred in the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/folder#isStarred()
       */
      isStarred(): boolean;

      /**
       * Determines whether the Folder is in the trash of the user's Drive.
       * https://developers.google.com/apps-script/reference/drive/folder#isTrashed()
       */
      isTrashed(): boolean;

      /**
       * Removes the given user from the list of editors for the Folder. This method doesn't
       * block users from accessing the Folder if they belong to a class of users who have
       * general access—for example, if the Folder is shared with the user's entire
       * domain, or if the Folder is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/folder#removeEditor(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeEditor(emailAddress: string): Folder;

      /**
       * Removes the given user from the list of editors for the Folder. This method doesn't
       * block users from accessing the Folder if they belong to a class of users who have
       * general access—for example, if the Folder is shared with the user's entire
       * domain, or if the Folder is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of viewers.
       * https://developers.google.com/apps-script/reference/drive/folder#removeEditor(User)
       * @param user A representation of the user to remove.
       */
      removeEditor(user: Base.User): Folder;

      /**
       * Removes the given file from the current folder. This method does not delete the file, but
       * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
       * for it or using the "All items" view.
       * https://developers.google.com/apps-script/reference/drive/folder#removeFile(File)
       * @param child the child file to remove
       */
      removeFile(child: File): Folder;

      /**
       * Removes the given folder from the current folder. This method does not delete the folder
       * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
       * except by searching for it or using the "All items" view.
       * https://developers.google.com/apps-script/reference/drive/folder#removeFolder(Folder)
       * @param child the child folder to remove
       */
      removeFolder(child: Folder): Folder;

      /**
       * Removes the given user from the list of viewers and commenters for the Folder. This
       * method has no effect if the user is an editor, not a viewer or commenter. This method also
       * doesn't block users from accessing the Folder if they belong to a class of users who
       * have general access—for example, if the Folder is shared with the user's
       * entire domain, or if the Folder is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/drive/folder#removeViewer(String)
       * @param emailAddress The email address of the user to remove.
       */
      removeViewer(emailAddress: string): Folder;

      /**
       * Removes the given user from the list of viewers and commenters for the Folder. This
       * method has no effect if the user is an editor, not a viewer. This method also doesn't block
       * users from accessing the Folder if they belong to a class of users who have general
       * access—for example, if the Folder is shared with the user's entire domain, or
       * if the Folder is in a shared drive that the user can access.
       *
       *
       * For Drive files, this also removes the user from the list of editors.
       * https://developers.google.com/apps-script/reference/drive/folder#removeViewer(User)
       * @param user A representation of the user to remove.
       */
      removeViewer(user: Base.User): Folder;

      /**
       * Revokes the access to the Folder granted to the given user. This method does
       * not block users from accessing the Folder if they belong to a class of users
       * who have general access — for example, if the Folder is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/folder#revokePermissions(String)
       * @param user the email address of the user whose access should be revoked
       */
      revokePermissions(user: string): Folder;

      /**
       * Revokes the access to the Folder granted to the given user. This method does
       * not block users from accessing the Folder if they belong to a class of users
       * who have general access — for example, if the Folder is shared with the user's
       * entire domain.
       * https://developers.google.com/apps-script/reference/drive/folder#revokePermissions(User)
       * @param user a representation of the user whose access should be revoked
       */
      revokePermissions(user: Base.User): Folder;

      /**
       * Gets a collection of all files that are children of the current folder and match the given search
       * criteria. The search criteria are detailed the Google
       * Drive SDK documentation. Note that the params argument is a query string that may
       * contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *
       *     // Log the name of every file that are children of the current folder and modified after February 28,
       *     // 2013 whose name contains "untitled".
       *     var files = DriveApp.getRootFolder().searchFiles(
       *         'modifiedDate > "2013-02-28" and title contains "untitled"');
       *     while (files.hasNext()) {
       *       var file = files.next();
       *       Logger.log(file.getName());
       *     }
       * https://developers.google.com/apps-script/reference/drive/folder#searchFiles(String)
       * @param params the search criteria, as detailed in the Google Drive SDK documentation
       */
      searchFiles(params: string): FileIterator;

      /**
       * Gets a collection of all folders that are children of the current folder and match the given search
       * criteria. The search criteria are detailed the Google
       * Drive SDK documentation. Note that the params argument is a query string that may
       * contain string values, so take care to escape quotation marks correctly (for example "title contains 'Gulliver\\'s Travels'" or 'title contains "Gulliver\'s Travels"').
       *
       *
       *     // Log the name of every folder that are children of the current folder and you own and is starred.
       *     var folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
       *     while (folders.hasNext()) {
       *       var folder = folders.next();
       *       Logger.log(folder.getName());
       *     }
       * https://developers.google.com/apps-script/reference/drive/folder#searchFolders(String)
       * @param params the search criteria, as detailed in the Google Drive SDK documentation
       */
      searchFolders(params: string): FolderIterator;

      /**
       * Sets the description for the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#setDescription(String)
       * @param description the new description for the Folder
       */
      setDescription(description: string): Folder;

      /**
       * Sets the name of the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#setName(String)
       * @param name the new name of the Folder
       */
      setName(name: string): Folder;

      /**
       * Changes the owner of the Folder. This method also gives the previous owner
       * explicit edit access to the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#setOwner(String)
       * @param emailAddress the email address of the user who should become the new owner
       */
      setOwner(emailAddress: string): Folder;

      /**
       * Changes the owner of the Folder. This method also gives the previous owner
       * explicit edit access to the Folder.
       * https://developers.google.com/apps-script/reference/drive/folder#setOwner(User)
       * @param user a representation of the user who should become the new owner
       */
      setOwner(user: Base.User): Folder;

      /**
       * Sets whether users with edit permissions to the Folder are allowed to share
       * with other users or change the permissions. The default for a new Folder is
       * true.
       * https://developers.google.com/apps-script/reference/drive/folder#setShareableByEditors(Boolean)
       * @param shareable true if users with edit permissions should be allowed to share with other users or change the permissions; false if not
       */
      setShareableByEditors(shareable: boolean): Folder;

      /**
       * Sets which class of users can access the Folder and what permissions
       * those users are granted, besides any individual users who have been explicitly given access.
       *
       *
       *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
       *     // administrators can prohibit this setting for users of a G Suite domain.)
       *     var folder = DriveApp.createFolder('Shared Folder');
       *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
       * https://developers.google.com/apps-script/reference/drive/folder#setSharing(Access,Permission)
       * @param accessType which class of users should be able to access the Folder
       * @param permissionType the permissions that should be granted to users who can access the Folder
       */
      setSharing(accessType: Access, permissionType: Permission): Folder;

      /**
       * Sets whether the Folder is starred in the user's Drive. The default for
       * new Folders is false.
       * https://developers.google.com/apps-script/reference/drive/folder#setStarred(Boolean)
       * @param starred true if the Folder should be starred in the user's Drive; false if not
       */
      setStarred(starred: boolean): Folder;

      /**
       * Sets whether the Folder is in the trash of the user's Drive. Only the
       * owner may trash the Folder. The default for new Folders is false.
       * https://developers.google.com/apps-script/reference/drive/folder#setTrashed(Boolean)
       * @param trashed true if the Folder should be moved to the trash of the user's Drive; false if not
       */
      setTrashed(trashed: boolean): Folder;
    }
    /**
     * An object that allows scripts to iterate over a potentially large collection of folders. Folder
     * iterators can be acccessed from DriveApp, a File, or a Folder.
     *
     *     // Log the name of every folder in the user's Drive.
     *     var folders = DriveApp.getFolders();
     *     while (folders.hasNext()) {
     *       var folder = folders.next();
     *       Logger.log(folder.getName());
     *     }
     */
    interface FolderIterator {

      /**
       * Gets a token that can be used to resume this iteration at a later time. This method is useful
       * if processing an iterator in one execution would exceed the maximum execution time.
       * Continuation tokens are generally valid for one week.
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#getContinuationToken()
       */
      getContinuationToken(): string;

      /**
       * Determines whether calling next() will return an item.
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#hasNext()
       */
      hasNext(): boolean;

      /**
       * Gets the next item in the collection of files or folders. Throws an exception if no items
       * remain.
       * https://developers.google.com/apps-script/reference/drive/folder-iterator#next()
       */
      next(): Folder;
    }
    /**
     * An enum representing the permissions granted to users who can access a file or folder, besides
     * any individual users who have been explicitly given access. These properties can be accessed from
     * DriveApp.Permission.
     *
     *     // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *     // administrators can prohibit this setting for G Suite users.)
     *     var folder = DriveApp.createFolder('Shared Folder');
     *     folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    enum Permission { VIEW, EDIT, COMMENT, OWNER, ORGANIZER, NONE }
    /**
     * A user associated with a file in Google Drive. Users can be accessed from File.getEditors(), Folder.getViewers(), and other methods.
     *
     *     // Log the email address of all users who have edit access to a file.
     *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var editors = file.getEditors();
     *     for (var i = 0; i < editors.length; i++) {
     *       Logger.log(editors[i].getEmail());
     *     }
     */
    interface User {

      /**
       * Gets the domain name associated with the user's account.
       *
       *
       *     // Log the domain names associated with all users who have edit access to a file.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var editors = file.getEditors();
       *     for (var i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getDomain());
       *     }
       * https://developers.google.com/apps-script/reference/drive/user#getDomain()
       */
      getDomain(): string;

      /**
       * Gets the user's email address. The user's email address is only available if the user has
       * chosen to share the address from the Google+ account settings page, or if the user belongs to
       * the same domain as the user running the script and the domain administrator has allowed all
       * users within the domain to see other users' email addresses.
       *
       *
       *     // Log the email address of all users who have edit access to a file.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var editors = file.getEditors();
       *     for (var i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/drive/user#getEmail()
       */
      getEmail(): string;

      /**
       * Gets the user's name. This method returns null if the user's name is not available.
       *
       *
       *     // Log the names of all users who have edit access to a file.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var editors = file.getEditors();
       *     for (var i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/drive/user#getName()
       */
      getName(): string;

      /**
       * Gets the URL for the user's photo. This method returns null if the user's photo is not
       * available.
       *
       *
       *     // Log the URLs for the photos of all users who have edit access to a file.
       *     var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
       *     var editors = file.getEditors();
       *     for (var i = 0; i < editors.length; i++) {
       *       Logger.log(editors[i].getPhotoUrl());
       *     }
       * https://developers.google.com/apps-script/reference/drive/user#getPhotoUrl()
       */
      getPhotoUrl(): string;
      /** @deprecated DO NOT USE */ getUserLoginId(): string;
    }
  }
}

declare var DriveApp: GoogleAppsScript.Drive.DriveApp;
