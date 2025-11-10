// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace JDBC {
    /**
     * The JDBC service allows scripts to connect to Google Cloud SQL, MySQL,
     * Microsoft SQL Server, and Oracle databases. For more information, see the guide to JDBC.
     */
    interface Jdbc {

      /**
       * Attempts to establish a connection to the given Google Cloud SQL URL.
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/sqlservice
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String)
       * @param url A database URL of the form jdbc:google:mysql://subname.
       */
      getCloudSqlConnection(url: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given Google Cloud SQL URL.
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/sqlservice
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String,Object)
       * @param url A database URL of the form jdbc:google:mysql://subname.
       * @param info Optional JavaScript object specifying advanced parameters as defined below.
       */
      getCloudSqlConnection(url: string, info: any): JdbcConnection;

      /**
       * Attempts to establish a connection to the given Google Cloud SQL URL.
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/sqlservice
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String,String,String)
       * @param url A database URL of the form jdbc:google:mysql://subname.
       * @param userName The username to pass to the database.
       * @param password The user's password.
       */
      getCloudSqlConnection(url: string, userName: string, password: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database URL.
       *
       *     const conn = Jdbc.getConnection(
       *         'jdbc:mysql://yoursqlserver.example.com:3306/database_name',
       *     );
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       */
      getConnection(url: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database URL.
       *
       *     const conn = Jdbc.getConnection(
       *         'jdbc:mysql://yoursqlserver.example.com:3306/database_name',
       *         {user: 'username', password: 'password'},
       *     );
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String,Object)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       * @param info Optional JavaScript object specifying advanced parameters as defined below.
       */
      getConnection(url: string, info: any): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database using a username and password.
       *
       *     const conn = Jdbc.getConnection(
       *         'jdbc:mysql://yoursqlserver.example.com:3306/database_name',
       *         'username',
       *         'password',
       *     );
       *
       * Return:
       * - JdbcConnection — A JdbcConnection object.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String,String,String)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       * @param userName The username to pass to the database.
       * @param password The user's password.
       */
      getConnection(url: string, userName: string, password: string): JdbcConnection;

      /**
       * Create a date from milliseconds since epoch.
       *
       * Return:
       * - JdbcDate — A JdbcDate object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newDate(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newDate(milliseconds: Integer): JdbcDate;

      /**
       * Create a time from milliseconds since epoch.
       *
       * Return:
       * - JdbcTime — A JdbcTime object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newTime(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newTime(milliseconds: Integer): JdbcTime;

      /**
       * Create a timestamp from milliseconds since epoch.
       *
       * Return:
       * - JdbcTimestamp — A JdbcTimestamp object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newTimestamp(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newTimestamp(milliseconds: Integer): JdbcTimestamp;

      /**
       * Create a date by parsing the SQL date string.
       *
       * Return:
       * - JdbcDate — A JdbcDate object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#parseDate(String)
       * @param date A string containing a SQL date string.
       */
      parseDate(date: string): JdbcDate;

      /**
       * Create a time by parsing the SQL time string.
       *
       * Return:
       * - JdbcTime — A JdbcTime object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#parseTime(String)
       * @param time A string containing a SQL time string.
       */
      parseTime(time: string): JdbcTime;

      /**
       * Create a timestamp by parsing the SQL timestamp string.
       *
       * Return:
       * - JdbcTimestamp — A JdbcTimestamp object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#parseTimestamp(String)
       * @param timestamp A string containing a SQL timestamp string.
       */
      parseTimestamp(timestamp: string): JdbcTimestamp;
    }
    /**
     * A JDBC Array. For documentation of this class, see java.sql.Array
     * .
     */
    interface JdbcArray {

      /**
       * For documentation of this method, see java.sql.Array#free().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#free()
       */
      free(): void;

      /**
       * For documentation of this method, see java.sql.Array#getArray()
       *
       * Return:
       * - Object — An object containing the ordered elements of the SQL array value.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getArray()
       */
      getArray(): any;

      /**
       * For documentation of this method, see java.sql.Array#getArray(long, int).
       *
       * Return:
       * - Object — An object containing up to the specified number of consecutive SQL array elements.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getArray(Integer,Integer)
       * @param index The array index of the first element to retrieve, where the first element has an index of 1.
       * @param count The number of successive SQL array elements to retrieve.
       */
      getArray(index: Integer, count: Integer): any;

      /**
       * For documentation of this method, see java.sql.Array#getBaseType().
       *
       * Return:
       * - Integer — The type code for the elements in this array.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getBaseType()
       */
      getBaseType(): Integer;

      /**
       * For documentation of this method, see java.sql.Array#getBaseTypeName().
       *
       * Return:
       * - String — The database-specific name for the built-in base type or else the fully-qualified SQL type name for a base type that is a UDT.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getBaseTypeName()
       */
      getBaseTypeName(): string;

      /**
       * For documentation of this method, see java.sql.Array#getResultSet().
       *
       * Return:
       * - JdbcResultSet — The JdbcResultSet containing one row for each of the elements in the array designated by this Array object, with the rows in ascending order based on the indices.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Array#getResultSet(long, int).
       *
       * Return:
       * - JdbcResultSet — A JdbcResultSet containing up to the specified number of consecutive SQL array elements.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getResultSet(Integer,Integer)
       * @param index The array index of the first element to retrieve, where the first element has an index of 1.
       * @param count The number of successive SQL array elements to retrieve.
       */
      getResultSet(index: Integer, count: Integer): JdbcResultSet;
    }
    /**
     * A JDBC Blob. For documentation of this class, see java.sql.Blob
     * .
     */
    interface JdbcBlob {

      /**
       * For documentation of this method, see java.sql.Blob#free().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#free()
       */
      free(): void;

      /**
       * Gets the content of this JdbcBlob as an Apps Script blob.
       *
       * Return:
       * - Blob — A Blob that can be used directly by other Apps Script APIs.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getAppsScriptBlob()
       */
      getAppsScriptBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * For documentation of this method, see java.sql.Blob#getBytes(long, int).
       *
       * Return:
       * - Byte[] — A byte array containing up to the specified number of consecutive bytes from the blob value.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getBytes(Integer,Integer)
       * @param position The ordinal position of the first byte in the blob value to be extracted; the first byte is at position 1.
       * @param length The number of consecutive bytes to copy; the value for length must be zero or greater.
       */
      getBytes(position: Integer, length: Integer): Byte[];

      /**
       * For documentation of this method, see java.sql.Blob#length().
       *
       * Return:
       * - Integer — The number of bytes in this blob.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#length()
       */
      length(): Integer;

      /**
       * For documentation of this method, see java.sql.Blob#position(byte[], long).
       *
       * Return:
       * - Integer — The position at which the specified pattern begins, or else -1 if the pattern is not found.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#position(Byte,Integer)
       * @param pattern The byte array to search for.
       * @param start The position in the blob value where to beging searching; the first position is 1.
       */
      position(pattern: Byte[], start: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Blob#position(blob, long).
       *
       * Return:
       * - Integer — The position at which the specified pattern begins, or else -1 if the pattern is not found.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#position(JdbcBlob,Integer)
       * @param pattern The JdbcBlob indicating the value to search for.
       * @param start The position in the blob value where to beging searching; the first position is 1.
       */
      position(pattern: JdbcBlob, start: Integer): Integer;

      /**
       * Convenience method for writing a JdbcBlob to this blob.
       *
       * Return:
       * - Integer — The number of bytes written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,BlobSource)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param blobSource The source of data to write to this blob.
       */
      setBytes(position: Integer, blobSource: Base.BlobSource): Integer;

      /**
       * Convenience method for writing a JdbcBlob to this blob.
       *
       * Return:
       * - Integer — The number of bytes written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,BlobSource,Integer,Integer)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param blobSource The source of data to write to this blob.
       * @param offset The offset into the provided byte array at which to start reading bytes to set.
       * @param length The number of bytes to write to the blob.
       */
      setBytes(position: Integer, blobSource: Base.BlobSource, offset: Integer, length: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Blob#setBytes(long, byte[]).
       *
       * Return:
       * - Integer — The number of bytes written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,Byte)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param bytes The array of bytes to write to this blob.
       */
      setBytes(position: Integer, bytes: Byte[]): Integer;

      /**
       * For documentation of this method, see java.sql.Blob#setBytes(long, byte[], int, int).
       *
       * Return:
       * - Integer — The number of bytes written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,Byte,Integer,Integer)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param bytes The array of bytes to write to this blob.
       * @param offset The offset into the provided byte array at which to start reading bytes to set.
       * @param length The number of bytes to write to the blob.
       */
      setBytes(position: Integer, bytes: Byte[], offset: Integer, length: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Blob#truncate(long).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#truncate(Integer)
       * @param length The size (in bytes) of this blob after truncation.
       */
      truncate(length: Integer): void;
    }
    /**
     * A JDBC CallableStatement. For documentation of this class, see
     * java.sql.CallableStatement.
     */
    interface JdbcCallableStatement {

      /**
       * For documentation of this method, see java.sql.PreparedStatement#addBatch().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#addBatch()
       */
      addBatch(): void;

      /**
       * For documentation of this method, see java.sql.Statement#addBatch(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see java.sql.Statement#cancel().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearBatch().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#clearParameters().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearParameters()
       */
      clearParameters(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearWarnings().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see java.sql.Statement#close().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#execute().
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if the first result is an update count or there is no result.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute()
       */
      execute(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, String[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#executeBatch().
       *
       * Return:
       * - Integer[] — The update counts for each command in the batch, using the same order in which commands were added to the batch.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see java.sql.PreparedStatement#executeQuery().
       *
       * Return:
       * - JdbcResultSet — A result set that contains the data produced by the query.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeQuery()
       */
      executeQuery(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#executeQuery(String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the results of the execution. This is never null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#executeUpdate().
       *
       * Return:
       * - Integer — The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate()
       */
      executeUpdate(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, String[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getArray(int).
       *
       * Return:
       * - JdbcArray — The value of a ARRAY parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getArray(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getArray(parameterIndex: Integer): JdbcArray;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getArray(String).
       *
       * Return:
       * - JdbcArray — The value of a ARRAY parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getArray(String)
       * @param parameterName The name of the parameter.
       */
      getArray(parameterName: string): JdbcArray;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBigDecimal(int).
       *
       * Return:
       * - BigNumber — The value of a NUMERIC parameter in full precision. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBigDecimal(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBigDecimal(parameterIndex: Integer): BigNumber;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBigDecimal(String).
       *
       * Return:
       * - BigNumber — The value of a NUMERIC parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBigDecimal(String)
       * @param parameterName The name of the parameter.
       */
      getBigDecimal(parameterName: string): BigNumber;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBlob(int).
       *
       * Return:
       * - JdbcBlob — The value of a BLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBlob(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBlob(parameterIndex: Integer): JdbcBlob;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBlob(String).
       *
       * Return:
       * - JdbcBlob — The value of a BLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBlob(String)
       * @param parameterName The name of the parameter.
       */
      getBlob(parameterName: string): JdbcBlob;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBoolean(int).
       *
       * Return:
       * - Boolean — The value of a BIT or BOOLEAN parameter. Returns false if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBoolean(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBoolean(parameterIndex: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBoolean(String).
       *
       * Return:
       * - Boolean — The value of a BIT or BOOLEAN parameter. Returns false if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBoolean(String)
       * @param parameterName The name of the parameter.
       */
      getBoolean(parameterName: string): boolean;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getByte(int).
       *
       * Return:
       * - Byte — The value of a TINYINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getByte(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getByte(parameterIndex: Integer): Byte;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getByte(String).
       *
       * Return:
       * - Byte — The value of a TINYINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getByte(String)
       * @param parameterName The name of the parameter.
       */
      getByte(parameterName: string): Byte;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBytes(int).
       *
       * Return:
       * - Byte[] — The value of a BINARY or VARBINARY parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBytes(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBytes(parameterIndex: Integer): Byte[];

      /**
       * For documentation of this method, see java.sql.CallableStatement#getBytes(String).
       *
       * Return:
       * - Byte[] — The value of a BINARY or VARBINARY parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBytes(String)
       * @param parameterName The name of the parameter.
       */
      getBytes(parameterName: string): Byte[];

      /**
       * For documentation of this method, see java.sql.CallableStatement#getClob(int).
       *
       * Return:
       * - JdbcClob — The value of a CLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getClob(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getClob(parameterIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getClob(String).
       *
       * Return:
       * - JdbcClob — The value of a CLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getClob(String)
       * @param parameterName The name of the parameter.
       */
      getClob(parameterName: string): JdbcClob;

      /**
       * For documentation of this method, see java.sql.Statement#getConnection().
       *
       * Return:
       * - JdbcConnection — The connection that produced this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDate(int).
       *
       * Return:
       * - JdbcDate — The value of a DATE parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getDate(parameterIndex: Integer): JdbcDate;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDate(int, Calendar).
       *
       * Return:
       * - JdbcDate — The value of a DATE parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(parameterIndex: Integer, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDate(String).
       *
       * Return:
       * - JdbcDate — The value of a DATE parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(String)
       * @param parameterName The name of the parameter.
       */
      getDate(parameterName: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDate(String, Calendar).
       *
       * Return:
       * - JdbcDate — The value of a DATE parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(parameterName: string, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDouble(int).
       *
       * Return:
       * - Number — The value of a DOUBLE parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDouble(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getDouble(parameterIndex: Integer): number;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getDouble(String).
       *
       * Return:
       * - Number — The value of a DOUBLE parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDouble(String)
       * @param parameterName The name of the parameter.
       */
      getDouble(parameterName: string): number;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchDirection().
       *
       * Return:
       * - Integer — The default direction for result sets generated by this statement, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchSize().
       *
       * Return:
       * - Integer — The default row fetch size for result sets generated from this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getFloat(int).
       *
       * Return:
       * - Number — The value of a FLOAT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFloat(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getFloat(parameterIndex: Integer): number;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getFloat(String).
       *
       * Return:
       * - Number — The value of a FLOAT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFloat(String)
       * @param parameterName The name of the parameter.
       */
      getFloat(parameterName: string): number;

      /**
       * For documentation of this method, see java.sql.Statement#getGeneratedKeys().
       *
       * Return:
       * - JdbcResultSet — A result set containing the auto-generated keys generated by the execution of this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getInt(int).
       *
       * Return:
       * - Integer — The value of a INTEGER parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getInt(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getInt(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getInt(String).
       *
       * Return:
       * - Integer — The value of a INTEGER parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getInt(String)
       * @param parameterName The name of the parameter.
       */
      getInt(parameterName: string): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getLong(int).
       *
       * Return:
       * - Integer — The value of a BIGINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getLong(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getLong(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getLong(String).
       *
       * Return:
       * - Integer — The value of a BIGINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getLong(String)
       * @param parameterName The name of the parameter.
       */
      getLong(parameterName: string): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxFieldSize().
       *
       * Return:
       * - Integer — The current column byte size limit for columns storing character and binary values; a value of zero indictates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxRows().
       *
       * Return:
       * - Integer — The current maximum number of rows for a result set produced by this statement; a value of 0 indicates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#getMetaData().
       *
       * Return:
       * - JdbcResultSetMetaData — The description of a result set's columns, or NULL if this metadata is unavailable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults().
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults(int).
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getNClob(int).
       *
       * Return:
       * - JdbcClob — The value of a NCLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNClob(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getNClob(parameterIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getNClob(String).
       *
       * Return:
       * - JdbcClob — The value of a NCLOB parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNClob(String)
       * @param parameterName The name of the parameter.
       */
      getNClob(parameterName: string): JdbcClob;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getNString(int).
       *
       * Return:
       * - String — A string that maps a NCHAR, NVARCHAR, or LONGNVARCHAR value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNString(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getNString(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getNString(String).
       *
       * Return:
       * - String — A string that maps a NCHAR, NVARCHAR, or LONGNVARCHAR value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNString(String)
       * @param parameterName The name of the parameter.
       */
      getNString(parameterName: string): string;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getObject(int).
       *
       * Return:
       * - Object — An object holding the parameter value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getObject(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getObject(parameterIndex: Integer): any;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getObject(String).
       *
       * Return:
       * - Object — An object holding the parameter value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getObject(String)
       * @param parameterName The name of the parameter.
       */
      getObject(parameterName: string): any;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#getParameterMetaData().
       *
       * Return:
       * - JdbcParameterMetaData — The parameter metadata, including the number, types, and properties for each parameter.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getParameterMetaData()
       */
      getParameterMetaData(): JdbcParameterMetaData;

      /**
       * For documentation of this method, see java.sql.Statement#getQueryTimeout().
       *
       * Return:
       * - Integer — The current query timeout in seconds; a value of zero indicates no timeout.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getRef(int).
       *
       * Return:
       * - JdbcRef — The value of a REF parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRef(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getRef(parameterIndex: Integer): JdbcRef;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getRef(String).
       *
       * Return:
       * - JdbcRef — The value of a REF parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRef(String)
       * @param parameterName The name of the parameter.
       */
      getRef(parameterName: string): JdbcRef;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSet().
       *
       * Return:
       * - JdbcResultSet — The current result set, or null if the result is an update count or there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetConcurrency().
       *
       * Return:
       * - Integer — The result set concurrency for result sets generated from this statement, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetHoldability().
       *
       * Return:
       * - Integer — The result set holdability, which is either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetType().
       *
       * Return:
       * - Integer — The result set type for result sets generated from this statement, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getRowId(int).
       *
       * Return:
       * - JdbcRowId — The ROWID value. Returns null if the parameter contains an SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRowId(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getRowId(parameterIndex: Integer): JdbcRowId;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getRowId(String).
       *
       * Return:
       * - JdbcRowId — The ROWID value. Returns null if the parameter contains an SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRowId(String)
       * @param parameterName The name of the parameter.
       */
      getRowId(parameterName: string): JdbcRowId;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getSQLXML(int).
       *
       * Return:
       * - JdbcSQLXML — A SQLXML object that maps to an SQL XML value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getSQLXML(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getSQLXML(parameterIndex: Integer): JdbcSQLXML;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getSQLXML(String).
       *
       * Return:
       * - JdbcSQLXML — A SQLXML object that maps to an SQL XML value.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getSQLXML(String)
       * @param parameterName The name of the parameter.
       */
      getSQLXML(parameterName: string): JdbcSQLXML;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getShort(int).
       *
       * Return:
       * - Integer — The value of a SMALLINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getShort(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getShort(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getShort(String).
       *
       * Return:
       * - Integer — The value of a SMALLINT parameter. Returns 0 if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getShort(String)
       * @param parameterName The name of the parameter.
       */
      getShort(parameterName: string): Integer;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getString(int).
       *
       * Return:
       * - String — The value of a CHAR, VARCHAR, or LONGVARCHAR parameter.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getString(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getString(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getString(String).
       *
       * Return:
       * - String — The value of a CHAR, VARCHAR, or LONGVARCHAR parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getString(String)
       * @param parameterName The name of the parameter.
       */
      getString(parameterName: string): string;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTime(int).
       *
       * Return:
       * - JdbcTime — The value of a TIME parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getTime(parameterIndex: Integer): JdbcTime;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTime(int, Calendar).
       *
       * Return:
       * - JdbcTime — The value of a TIME parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(parameterIndex: Integer, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTime(String).
       *
       * Return:
       * - JdbcTime — The value of a TIME parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(String)
       * @param parameterName The name of the parameter.
       */
      getTime(parameterName: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTime(String, Calendar).
       *
       * Return:
       * - JdbcTime — The value of a TIME parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(parameterName: string, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTimestamp(int).
       *
       * Return:
       * - JdbcTimestamp — The value of a TIMESTAMP parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getTimestamp(parameterIndex: Integer): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTimestamp(int, Calendar).
       *
       * Return:
       * - JdbcTimestamp — The value of a TIMESTAMP parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(parameterIndex: Integer, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTimestamp(String).
       *
       * Return:
       * - JdbcTimestamp — The value of a TIMESTAMP parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(String)
       * @param parameterName The name of the parameter.
       */
      getTimestamp(parameterName: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getTimestamp(String, Calendar).
       *
       * Return:
       * - JdbcTimestamp — The value of a TIMESTAMP parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(parameterName: string, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getURL(int).
       *
       * Return:
       * - String — The value of a DATALINK parameter as a string.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getURL(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getURL(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.CallableStatement#getURL(String).
       *
       * Return:
       * - String — The value of a DATALINK parameter. Returns null if the value is null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getURL(String)
       * @param parameterName The name of the parameter.
       */
      getURL(parameterName: string): string;

      /**
       * For documentation of this method, see java.sql.Statement#getUpdateCount().
       *
       * Return:
       * - Integer — The current result as an update count, or -1 if the current result is a result set or if there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getWarnings().
       *
       * Return:
       * - String[] — The current set of warnings, or null if there are no warnings.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see java.sql.Statement#isClosed().
       *
       * Return:
       * - Boolean — true if this statement is closed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#isPoolable().
       *
       * Return:
       * - Boolean — true if this statement is poolable; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The JDBC type code to register. If the parameter is of JDBC type NUMERIC or DECIMAL, use registerOutParameter(parameterIndex, sqlType, scale) instead.
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(int, int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer,Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The JDBC type code to register.
       * @param scale The desired number of digits to the right of the decimal point (must be zero or greater).
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(int, int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param sqlType A type code value.
       * @param typeName The fully-qualified name of an SQL structured type.
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(String, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       */
      registerOutParameter(parameterName: string, sqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(String, int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer,Integer)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       * @param scale The desired number of digits to the right of the decimal point, which must be zero or greater.
       */
      registerOutParameter(parameterName: string, sqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#registerOutParameter(String, int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer,String)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       * @param typeName The fully-qualified name of an SQL structured type.
       */
      registerOutParameter(parameterName: string, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setArray(int, Array).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setArray(Integer,JdbcArray)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setArray(parameterIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBigDecimal(int, BigDecimal).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBigDecimal(Integer,BigNumber)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setBigDecimal(String, BigDecimal).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBigDecimal(String,BigNumber)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterName: string, x: BigNumber): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBlob(int, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBlob(Integer,JdbcBlob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBlob(parameterIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setBlob(String, Blob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBlob(String,JdbcBlob)
       * @param parameterName The name of the parameter to set.
       * @param x A blob that maps to an SQL BLOB value.
       */
      setBlob(parameterName: string, x: JdbcBlob): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBoolean(int, boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBoolean(Integer,Boolean)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBoolean(parameterIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setBoolean(String, boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBoolean(String,Boolean)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBoolean(parameterName: string, x: boolean): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setByte(int, byte).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setByte(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setByte(parameterIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setByte(String, byte).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setByte(String,Byte)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setByte(parameterName: string, x: Byte): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBytes(int, byte[]).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBytes(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBytes(parameterIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setBytes(String, byte[]).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBytes(String,Byte)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBytes(parameterName: string, x: Byte[]): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setClob(int, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setBlob(String, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setClob(String,JdbcClob)
       * @param parameterName The name of the parameter to set.
       * @param x A clob that maps to an SQL CLOB value.
       */
      setClob(parameterName: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.Statement#setCursorName(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDate(int, Date).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(Integer,JdbcDate)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDate(parameterIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDate(int, Date, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(Integer,JdbcDate,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterIndex: Integer, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setDate(String, Date).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(String,JdbcDate)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setDate(parameterName: string, x: JdbcDate): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setDate(String, Date, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(String,JdbcDate,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterName: string, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDouble(int, double).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDouble(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDouble(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setDouble(String, double).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDouble(String,Number)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setDouble(parameterName: string, x: number): void;

      /**
       * For documentation of this method, see java.sql.Statement#setEscapeProcessing(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchDirection(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setFloat(int, float).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFloat(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setFloat(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setFloat(String, float).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFloat(String,Number)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setFloat(parameterName: string, x: number): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setInt(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setInt(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setInt(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setInt(String, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setInt(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setInt(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setLong(int, long).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setLong(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setLong(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setLong(String, long).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setLong(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setLong(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxFieldSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxRows(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNClob(int, NClob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setNClob(String, NClob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNClob(String,JdbcClob)
       * @param parameterName The name of the parameter to set.
       * @param value The parameter value to set.
       */
      setNClob(parameterName: string, value: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setNString(String, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNString(String,String)
       * @param parameterName The name of the parameter to set.
       * @param value The parameter value to set.
       */
      setNString(parameterName: string, value: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNull(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       */
      setNull(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNull(int, int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       * @param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter isn't a user-defined type or REF.
       */
      setNull(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setNull(String, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param sqlType The SQL  type code.
       */
      setNull(parameterName: string, sqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setNull(String, int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(String,Integer,String)
       * @param parameterName The name of the parameter to set.
       * @param sqlType The SQL type.
       * @param typeName The fully-qualified name of an SQL user-defined type; ignored if the parameter is not a user-defined type or SQL REF value.
       */
      setNull(parameterName: string, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object)
       * @param index The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       */
      setObject(index: Integer, x: any): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database.
       */
      setObject(parameterIndex: Integer, x: any, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object, int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object,Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database. The scale argument may further qualify this type.
       * @param scaleOrLength The number of digits after the decimal for DECIMAL or NUMERIC types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      setObject(parameterIndex: Integer, x: any, targetSqlType: Integer, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setObject(String, Object).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       */
      setObject(parameterName: string, x: any): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setObject(String, Object, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       * @param targetSqlType The SQL type sent to the database.
       */
      setObject(parameterName: string, x: any, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setObject(String, Object, int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object,Integer,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       * @param targetSqlType The SQL type sent to the database. The scale parameter may further qualify this type.
       * @param scale The number of digits after the decimal point for DECIMAL and NUMERIC types. Ignored for all other types.
       */
      setObject(parameterName: string, x: any, targetSqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setPoolable(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setQueryTimeout(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setQueryTimeout(Integer)
       * @param seconds The new query timeout in seconds; a value of 0 indicates no timeout.
       */
      setQueryTimeout(seconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setRef(int, Ref).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRef(Integer,JdbcRef)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The SQL REF value to set.
       */
      setRef(parameterIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setRowId(int, RowId).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRowId(Integer,JdbcRowId)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setRowId(parameterIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setRowId(String, RowId).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRowId(String,JdbcRowId)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setRowId(parameterName: string, x: JdbcRowId): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setSQLXML(int, SQLXML).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setSQLXML(Integer,JdbcSQLXML)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setSQLXML(parameterIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setSQLXML(String, SQLXML).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setSQLXML(String,JdbcSQLXML)
       * @param parameterName The name of the parameter to set.
       * @param xmlObject A SQLXML object that maps to an SQL XML value.
       */
      setSQLXML(parameterName: string, xmlObject: JdbcSQLXML): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setShort(int, short).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setShort(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setShort(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setShort(String, short).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setShort(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setShort(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setString(String, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setString(String,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setString(parameterName: string, x: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTime(int, Time).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(Integer,JdbcTime)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTime(parameterIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTime(int, Time, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(Integer,JdbcTime,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterIndex: Integer, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setTime(String, Time).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(String,JdbcTime)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setTime(parameterName: string, x: JdbcTime): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setTime(String, Time, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(String,JdbcTime,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterName: string, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTimestamp(int, Timestamp).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(Integer,JdbcTimestamp)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(Integer,JdbcTimestamp,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setTimestamp(String, Timestamp).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(String,JdbcTimestamp)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setTimestamp(parameterName: string, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setTimestamp(String, Timestamp, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(String,JdbcTimestamp,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterName: string, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setURL(int, URL).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setURL(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setURL(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#setURL(String, URL).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setURL(String,String)
       * @param parameterName The name of the parameter to set.
       * @param val The parameter value to set.
       */
      setURL(parameterName: string, val: string): void;

      /**
       * For documentation of this method, see java.sql.CallableStatement#wasNull().
       *
       * Return:
       * - Boolean — true if the last parameter read was null; returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#wasNull()
       */
      wasNull(): boolean;
    }
    /**
     * A JDBC Clob. For documentation of this class, see java.sql.Clob
     * .
     */
    interface JdbcClob {

      /**
       * For documentation of this method, see java.sql.Clob#truncate(long).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#free()
       */
      free(): void;

      /**
       * Gets the content of this JdbcClob as an Apps Script blob.
       *
       * Return:
       * - Blob — A Blob that can be used directly by other Apps Script APIs.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getAppsScriptBlob()
       */
      getAppsScriptBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * For documentation of this method, see java.sql.Clob#getSubString(long, int).
       *
       * Return:
       * - String — The retrieved substring.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getSubString(Integer,Integer)
       * @param position The index of the first character of the substring to extract. The first character is at index 1.
       * @param length The number of consecutive characters to copy (must be 0 or greater).
       */
      getSubString(position: Integer, length: Integer): string;

      /**
       * For documentation of this method, see java.sql.Clob#length().
       *
       * Return:
       * - Integer — The length (in characters) of this clob.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#length()
       */
      length(): Integer;

      /**
       * For documentation of this method, see java.sql.Clob#position(Clob, long).
       *
       * Return:
       * - Integer — The position at which the specifed clob appears, or -1 if it is not present.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#position(JdbcClob,Integer)
       * @param search The clob object to search for.
       * @param start The position at which to begin searching; the first position is 1.
       */
      position(search: JdbcClob, start: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Clob#position(String, long).
       *
       * Return:
       * - Integer — The position at which the specifed substring appears, or -1 if it is not present.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#position(String,Integer)
       * @param search The substring to search for.
       * @param start The position at which to begin searching; the first position is 1.
       */
      position(search: string, start: Integer): Integer;

      /**
       * Convenience method for writing a JdbcClob to a clob.
       *
       * Return:
       * - Integer — The number of characters written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,BlobSource)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param blobSource The blob source to write.
       */
      setString(position: Integer, blobSource: Base.BlobSource): Integer;

      /**
       * Convenience method for writing a JdbcClob to a clob.
       *
       * Return:
       * - Integer — The number of characters written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,BlobSource,Integer,Integer)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param blobSource The blob source to write.
       * @param offset The offset into the provided string where reading characters to write starts.
       * @param len The number of characters to write.
       */
      setString(position: Integer, blobSource: Base.BlobSource, offset: Integer, len: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Clob#setString(long, String).
       *
       * Return:
       * - Integer — The number of characters written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,String)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param value The string to write.
       */
      setString(position: Integer, value: string): Integer;

      /**
       * For documentation of this method, see java.sql.Clob#setString(long, String, int, int).
       *
       * Return:
       * - Integer — The number of characters written.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,String,Integer,Integer)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param value The string to write.
       * @param offset The offset into the provided string where reading characters to write starts.
       * @param len The number of characters to write.
       */
      setString(position: Integer, value: string, offset: Integer, len: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.Clob#truncate(long).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#truncate(Integer)
       * @param length The size (in bytes) of this clob after truncation.
       */
      truncate(length: Integer): void;
    }
    /**
     * A JDBC Connection. For documentation of this class, see
     * java.sql.Connection.
     */
    interface JdbcConnection {

      /**
       * For documentation of this method, see java.sql.Connection#clearWarnings().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * Release this connection's database and all associated resources.
       *
       *     const conn = Jdbc.getConnection(
       *         'jdbc:mysql://<host>:<port>/<instance>',
       *         'user',
       *         'password',
       *     );
       *     conn.close();
       *
       * - Connection.close()
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#close()
       */
      close(): void;

      /**
       * Makes all pending changes permanent, releases database locks held by this JdbcConnection.
       *
       *     const conn = Jdbc.getConnection(
       *         'jdbc:mysql://<host>:<port>/<instance>',
       *         'user',
       *         'password',
       *     );
       *     conn.setAutoCommit(false);
       *     const stmt = conn.prepareStatement(
       *         'insert into person (lname,fname) values (?,?)',
       *     );
       *     const start = new Date();
       *     for (let i = 0; i < 5000; i++) {
       *       // Objects are accessed using 1-based indexing
       *       stmt.setObject(1, `firstName${i}`);
       *       stmt.setObject(2, `lastName${i}`);
       *       stmt.addBatch();
       *     }
       *     const res = stmt.executeBatch();
       *     conn.commit();  // When this returns, this is when changes are actually
       *                     // committed
       *     conn.close();
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * - Connection.commit()
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#commit()
       */
      commit(): void;

      /**
       * For documentation of this method, see java.sql.Connection#createArrayOf(String, Object[]).
       *
       * Return:
       * - JdbcArray — An array whose elements map to the specified SQL type.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createArrayOf(String,Object)
       * @param typeName The database-specific SQL name of the array elemnents' type. Options include built-in types, user-defined types, or standard SQL types supported by the database.
       * @param elements The elements to populate in the returned object.
       */
      createArrayOf(typeName: string, elements: any[]): JdbcArray;

      /**
       * Constructs a JdbcBlob instance. See also java.sql.Connection#createBlob().
       * The object returned initially contains no data. You can use the setBytes methods of JdbcBlob to set the data it should contain. The blob used here is not the same as the blob created with Utilities.newBlob(data). To convert between the two formats, use the defined getBytes() and setBytes() methods. Alternatively, both JdbcBlob and JdbcClob provide a getAppsScriptBlob() convenience method for converting to a format that can be used by Apps Script.
       *
       * Return:
       * - JdbcBlob — An empty blob object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createBlob()
       */
      createBlob(): JdbcBlob;

      /**
       * For documentation of this method, see java.sql.Connection#createClob().
       *
       * Return:
       * - JdbcClob — An empty clob object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createClob()
       */
      createClob(): JdbcClob;

      /**
       * For documentation of this method, see java.sql.Connection#createNClob().
       *
       * Return:
       * - JdbcClob — An empty nclob object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createNClob()
       */
      createNClob(): JdbcClob;

      /**
       * For documentation of this method, see java.sql.Connection#createSQLXML().
       *
       * Return:
       * - JdbcSQLXML — An empty SQLXML object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createSQLXML()
       */
      createSQLXML(): JdbcSQLXML;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also java.sql.Connection#createStatement().
       *
       *     // This sample code assumes authentication is off
       *     const conn = Jdbc.getConnection('jdbc:mysql://<host>:3306/<instance>');
       *     const stmt = conn.createStatement();
       *
       *     stmt.setMaxRows(100);
       *     const rs = stmt.execute('select * from person');
       *
       *     while (rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       *
       * Return:
       * - JdbcStatement — A statement instance to execute queries with.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement()
       */
      createStatement(): JdbcStatement;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also java.sql.Connection#createStatement(int, int).
       * This version allows the result set type and concurrency to be overridden.
       *
       *     // This sample code assumes authentication is off
       *     // For more information about this method, see documentation here:
       *     //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,
       *     //  int)
       *     const conn = Jdbc.getConnection('jdbc:mysql://<host>:3306/<instance>');
       *     const stmt = conn.createStatement(
       *         Jdbc.ResultSet.TYPE_FORWARD_ONLY,
       *         Jdbc.ResultSet.CONCUR_READ_ONLY,
       *     );
       *
       *     stmt.setMaxRows(100);
       *     const rs = stmt.execute('select * from person');
       *
       *     while (rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       *
       * Return:
       * - JdbcStatement — A statement instance to execute queries with.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement(Integer,Integer)
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      createStatement(resultSetType: Integer, resultSetConcurrency: Integer): JdbcStatement;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also java.sql.Connection#createStatement(int, int, int).
       * This version allows the result set type, concurrency and holdability to be overridden.
       *
       *     // This sample code assumes authentication is off
       *     // For more information about this method, see documentation here:
       *     //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,
       *     //  int)
       *     const conn = Jdbc.getConnection('jdbc:mysql://<host>:3306/<instance>');
       *     const stmt = conn.createStatement(
       *         Jdbc.ResultSet.TYPE_FORWARD_ONLY,
       *         Jdbc.ResultSet.CONCUR_READ_ONLY,
       *         Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT,
       *     );
       *
       *     stmt.setMaxRows(100);
       *     const rs = stmt.execute('select * from person');
       *
       *     while (rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       *
       * Return:
       * - JdbcStatement — A statement instance to execute queries with.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement(Integer,Integer,Integer)
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      createStatement(resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcStatement;

      /**
       * For documentation of this method, see java.sql.Connection#createStruct(String, Object[]).
       *
       * Return:
       * - JdbcStruct — A structure object that maps to the given SQL type and is populated with the given attributes.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStruct(String,Object)
       * @param typeName The database-specific SQL name of the array elemnents' type. Options include built-in types, user-defined types, or standard SQL types supported by the database.
       * @param attributes The attributes that populate the returned object.
       */
      createStruct(typeName: string, attributes: any[]): JdbcStruct;

      /**
       * For documentation of this method, see java.sql.Connection#getAutoCommit().
       *
       * Return:
       * - Boolean — true if the connection's auto-commit mode is enabled; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getAutoCommit()
       */
      getAutoCommit(): boolean;

      /**
       * or documentation of this method, see java.sql.Connection#getCatalog().
       *
       * Return:
       * - String — The current catalog name or null if no name has been set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getCatalog()
       */
      getCatalog(): string;

      /**
       * For documentation of this method, see java.sql.Connection#getHoldability().
       *
       * Return:
       * - Integer — The holdability setting of the connection; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getHoldability()
       */
      getHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.Connection#getMetaData().
       *
       * Return:
       * - JdbcDatabaseMetaData — The metadata of the database this connection connects to.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getMetaData()
       */
      getMetaData(): JdbcDatabaseMetaData;

      /**
       * For documentation of this method, see java.sql.Connection#getTransactionIsolation().
       *
       * Return:
       * - Integer — The current transaction level, which is one of: Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED, Jdbc.Connection.TRANSACTION_READ_COMMITTED, Jdbc.Connection.TRANSACTION_REPEATABLE_READ, Jdbc.Connection.TRANSACTION_SERIALIZABLE, or Jdbc.Connection.TRANSACTION_NONE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getTransactionIsolation()
       */
      getTransactionIsolation(): Integer;

      /**
       * For documentation of this method, see java.sql.Connection#getWarnings().
       *
       * Return:
       * - String[] — An array of warning strings.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see java.sql.Connection#isClosed().
       *
       * Return:
       * - Boolean — true if the connection is closed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see java.sql.Connection#isReadOnly().
       *
       * Return:
       * - Boolean — true if the connection is read-only; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isReadOnly()
       */
      isReadOnly(): boolean;

      /**
       * For documentation of this method, see java.sql.Connection#isValid(int).
       *
       * Return:
       * - Boolean — true if the connection is valid; false otherwise. Also returns false if the timeout period expires before the operation completes.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isValid(Integer)
       * @param timeout The time in seconds to wait for the validation operation to complete. A value of 0 indicates no timeout is applied.
       */
      isValid(timeout: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.Connection#nativeSQL(String).
       *
       * Return:
       * - String — The native form of the provided statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#nativeSQL(String)
       * @param sql An SQL statement that may contain one more more '?' placeholders.
       */
      nativeSQL(sql: string): string;

      /**
       * For documentation of this method, see java.sql.Connection#prepareCall(String).
       *
       * Return:
       * - JdbcCallableStatement — A callable statement containing the pre-compiled SQL statement.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       */
      prepareCall(sql: string): JdbcCallableStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareCall(String, int, int).
       *
       * Return:
       * - JdbcCallableStatement — A callable statement containing the pre-compiled SQL statement that produces result sets with the provided type and concurrency.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      prepareCall(sql: string, resultSetType: Integer, resultSetConcurrency: Integer): JdbcCallableStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareCall(String, int, int, int).
       *
       * Return:
       * - JdbcCallableStatement — A callable statement containing the pre-compiled SQL statement that produces result sets with the provided type, concurrency.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String,Integer,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      prepareCall(sql: string, resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcCallableStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       */
      prepareStatement(sql: string): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String, int).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement, possibly capable of returning auto-generated keys.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are returned; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       */
      prepareStatement(sql: string, autoGeneratedKeys: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String, int, int).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement that produces result sets with the provided type and concurrency.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      prepareStatement(sql: string, resultSetType: Integer, resultSetConcurrency: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String, int, int, int).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement that produces result sets with the provided type, concurrency, and holdability.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      prepareStatement(sql: string, resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String, int[]).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement, capable of returning auto-generated keys specified by the provided column indices.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatementByIndex(String,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param indices The column indices of columns that are returned from the inserted row or rows.
       */
      prepareStatementByIndex(sql: string, indices: Integer[]): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#prepareStatement(String, String[]).
       *
       * Return:
       * - JdbcPreparedStatement — A prepared statement containing the pre-compiled SQL statement, capable of returning auto-generated keys specified by the provided column names.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatementByName(String,String)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param columnNames The column names that specify which columns the method should return from the inserted row or rows.
       */
      prepareStatementByName(sql: string, columnNames: string[]): JdbcPreparedStatement;

      /**
       * For documentation of this method, see java.sql.Connection#releaseSavepoint(Savepoint).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#releaseSavepoint(JdbcSavepoint)
       * @param savepoint The save point to remove.
       */
      releaseSavepoint(savepoint: JdbcSavepoint): void;

      /**
       * For documentation of this method, see java.sql.Connection#rollback().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#rollback()
       */
      rollback(): void;

      /**
       * For documentation of this method, see java.sql.Connection#rollback(Savepoint).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#rollback(JdbcSavepoint)
       * @param savepoint The save point to rollback to.
       */
      rollback(savepoint: JdbcSavepoint): void;

      /**
       * For documentation of this method, see java.sql.Connection#setAutoCommit(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setAutoCommit(Boolean)
       * @param autoCommit If true, auto-commit mode is enabled; false disables.
       */
      setAutoCommit(autoCommit: boolean): void;

      /**
       * For documentation of this method, see java.sql.Connection#setCatalog(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setCatalog(String)
       * @param catalog The name of a catalog (the subspace in the connection's database) in which to work.
       */
      setCatalog(catalog: string): void;

      /**
       * For documentation of this method, see java.sql.Connection#setHoldability(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setHoldability(Integer)
       * @param holdability The default holdability of JdbcResultSet objects created with this connection; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      setHoldability(holdability: Integer): void;

      /**
       * For documentation of this method, see java.sql.Connection#setReadOnly(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setReadOnly(Boolean)
       * @param readOnly If true, read-only mode is enabled; false disables.
       */
      setReadOnly(readOnly: boolean): void;

      /**
       * For documentation of this method, see java.sql.Connection#setSavepoint().
       *
       * Return:
       * - JdbcSavepoint — The new unnamed save point.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setSavepoint()
       */
      setSavepoint(): JdbcSavepoint;

      /**
       * For documentation of this method, see java.sql.Connection#setSavepoint(String).
       *
       * Return:
       * - JdbcSavepoint — The new named save point.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setSavepoint(String)
       * @param name The name of the created save point.
       */
      setSavepoint(name: string): JdbcSavepoint;

      /**
       * For documentation of this method, see java.sql.Connection#setTransactionIsolation(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setTransactionIsolation(Integer)
       * @param level The transaction level to set, which is one of: Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED, Jdbc.Connection.TRANSACTION_READ_COMMITTED, Jdbc.Connection.TRANSACTION_REPEATABLE_READ, Jdbc.Connection.TRANSACTION_SERIALIZABLE, or Jdbc.Connection.TRANSACTION_NONE.
       */
      setTransactionIsolation(level: Integer): void;
    }
    /**
     * A JDBC database metadata object. For documentation of this class, see
     * java.sql.DatabaseMetaData.
     */
    interface JdbcDatabaseMetaData {

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#allProceduresAreCallable().
       *
       * Return:
       * - Boolean — true if the user can call all of the procedures returned by getProcedures(catalog, schemaPattern, procedureNamePattern); false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#allProceduresAreCallable()
       */
      allProceduresAreCallable(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#allTablesAreSelectable().
       *
       * Return:
       * - Boolean — true if the user can call all of the tables returned by getTables(catalog, schemaPattern, tableNamePattern, types) in a SELECT statement; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#allTablesAreSelectable()
       */
      allTablesAreSelectable(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets().
       *
       * Return:
       * - Boolean — true if, when autoCommit is true, a SQL exception indicates that all open result sets are closed, even if holdable. Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#autoCommitFailureClosesAllResultSets()
       */
      autoCommitFailureClosesAllResultSets(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit().
       *
       * Return:
       * - Boolean — true if a data definition statement within a transaction forces the transaction to commit; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#dataDefinitionCausesTransactionCommit()
       */
      dataDefinitionCausesTransactionCommit(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions().
       *
       * Return:
       * - Boolean — true if the database ignores a data definition statement within a transaction; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#dataDefinitionIgnoredInTransactions()
       */
      dataDefinitionIgnoredInTransactions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#deletesAreDetected(int).
       *
       * Return:
       * - Boolean — true if for the specified result set type a visible row delete is detected by calls to JdbcResultSet.rowDeleted(). If false, the deleted rows are removed from the result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#deletesAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      deletesAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs().
       *
       * Return:
       * - Boolean — true if SQL data types LONGVARCHAR and LONGVARBINARY are included in the size returned by getMaxRowSize(); false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#doesMaxRowSizeIncludeBlobs()
       */
      doesMaxRowSizeIncludeBlobs(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getAttributes(String, String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing descriptions the attributes for a specified user-defined type available in the specified schema and catalog. Each row provides information about a specific attribute, ordered by TYPE_CAT, TYPE_SCHEM, TYPE_NAME, and ORDINAL_POSITION.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getAttributes(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param typeNamePattern The user-defined type name pattern; it must match the type name as it is stored in the database.
       * @param attributeNamePattern The attribute name pattern; it must match the attribute name as it is declared in the database.
       */
      getAttributes(catalog: string, schemaPattern: string, typeNamePattern: string, attributeNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean) .
       *
       * Return:
       * - JdbcResultSet — A result set containing the column descriptions that uniquely identify a row (one column description per row in the result set, ordered by SCOPE).
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getBestRowIdentifier(String,String,String,Integer,Boolean)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param scope The scope of interest, using the same values as present in the SCOPE column description column.
       * @param nullable If true, include columns that are nullable; otherwise do not.
       */
      getBestRowIdentifier(catalog: string, schema: string, table: string, scope: Integer, nullable: boolean): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getCatalogSeparator().
       *
       * Return:
       * - String — The separator between a catalog and table name used by this database.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogSeparator()
       */
      getCatalogSeparator(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getCatalogTerm().
       *
       * Return:
       * - String — The database vendor's preferred term for 'catalog'.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogTerm()
       */
      getCatalogTerm(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getCatalogs().
       *
       * Return:
       * - JdbcResultSet — A result set containing the catalog names, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogs()
       */
      getCatalogs(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getClientInfoProperties().
       *
       * Return:
       * - JdbcResultSet — A result set containing client info properties the driver supports, ordered by NAME, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getClientInfoProperties()
       */
      getClientInfoProperties(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String) .
       *
       * Return:
       * - JdbcResultSet — A result set containing the column privilege descriptions, one per row, ordered by COLUMN_NAME and PRIVILEGE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getColumnPrivileges(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The name of the schema to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getColumnPrivileges(catalog: string, schema: string, table: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getColumns(String, String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the column descriptions, one per row, ordered according to TABLE_CAT, TABLE_SCHEM, TABLE_NAME, and ORDINAL_POSITION.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getColumns(catalog: string, schemaPattern: string, tableNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getConnection().
       *
       * Return:
       * - JdbcConnection — The connection that produced this metadata.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getCrossReference(String, String, String, String, String, String).
       *
       * Return:
       * - JdbcResultSet — An result set containing the foreign key column descriptions from the specified foreign key table that reference the primary key or the columns representing a unique constraint of the parent table. One column description is provided in each row of the result set, and they are ordered by FKTABLE_CAT, FKTABLE_SCHEM, FKTABLE_NAME, and KEY_SEQ.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCrossReference(String,String,String,String,String,String)
       * @param parentCatalog A parent catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param parentSchema A parent schema name as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used in the selection criteria.
       * @param parentTable The name of the parent table that exports the key. It must match the table name as it is stored in the database.
       * @param foreignCatalog A foreign catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param foreignSchema A foreign schema name as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used in the selection criteria.
       * @param foreignTable The name of the foreign table that exports the key. It must match the table name as it is stored in the database.
       */
      getCrossReference(parentCatalog: string, parentSchema: string, parentTable: string, foreignCatalog: string, foreignSchema: string, foreignTable: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDatabaseMajorVersion().
       *
       * Return:
       * - Integer — The major version number of the underlying database.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseMajorVersion()
       */
      getDatabaseMajorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDatabaseMinorVersion().
       *
       * Return:
       * - Integer — The minor version number of the underlying database.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseMinorVersion()
       */
      getDatabaseMinorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDatabaseProductName().
       *
       * Return:
       * - String — The name of this database product.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseProductName()
       */
      getDatabaseProductName(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDatabaseProductVersion().
       *
       * Return:
       * - String — The version number of this database product.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseProductVersion()
       */
      getDatabaseProductVersion(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDefaultTransactionIsolation().
       *
       * Return:
       * - Integer — The database's default transaction isolation level, which is one of: Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED, Jdbc.Connection.TRANSACTION_READ_COMMITTED, Jdbc.Connection.TRANSACTION_REPEATABLE_READ, Jdbc.Connection.TRANSACTION_SERIALIZABLE, or Jdbc.Connection.TRANSACTION_NONE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDefaultTransactionIsolation()
       */
      getDefaultTransactionIsolation(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDriverMajorVersion().
       *
       * Return:
       * - Integer — The JDBC driver's major version number.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverMajorVersion()
       */
      getDriverMajorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDriverMinorVersion().
       *
       * Return:
       * - Integer — The JDBC driver's minor version number.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverMinorVersion()
       */
      getDriverMinorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDriverName().
       *
       * Return:
       * - String — The name of this JDBC driver.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverName()
       */
      getDriverName(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getDriverVersion().
       *
       * Return:
       * - String — The version number of this JDBC driver.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverVersion()
       */
      getDriverVersion(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getImportedKeys(String, String, String).
       *
       * Return:
       * - JdbcResultSet — An result set containing the foreign key column descriptions for the primary key columns exported by the table. One column description is provided in each row of the result set, and they are ordered by FKTABLE_CAT, FKTABLE_SCHEM, FKTABLE_NAME, and KEY_SEQ.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getExportedKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getExportedKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getExtraNameCharacters().
       *
       * Return:
       * - String — The extra characters that are avaiable for use in unquoted identifier names in addition to a-z, A-Z, 0-9, and _.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getExtraNameCharacters()
       */
      getExtraNameCharacters(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the descriptions of system and user function parameters available in the given catalog. Each row contains one function description, ordered according to FUNCTION_CAT, FUNCTION_SCHEM, FUNCTION_NAME, and SPECIFIC_ NAME.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getFunctionColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param functionNamePattern The function pattern, which match the function name as it is stored in the database.
       * @param columnNamePattern The parameter name pattern, which must match the parameter or column name as it is stored in the database.
       */
      getFunctionColumns(catalog: string, schemaPattern: string, functionNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getFunctions(String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing descriptions of the system and user functions available in the given catalog. Each row contains one function description, ordered according to FUNCTION_CAT, FUNCTION_SCHEM, FUNCTION_NAME, and SPECIFIC_ NAME.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getFunctions(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param functionNamePattern The function pattern, which must match the function name as it is stored in the database.
       */
      getFunctions(catalog: string, schemaPattern: string, functionNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getIdentifierQuoteString().
       *
       * Return:
       * - String — The string used to quote SQL identifiers. Defaults to a space (" ") if identifier quoting isn't supported.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getIdentifierQuoteString()
       */
      getIdentifierQuoteString(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getImportedKeys(String, String, String).
       *
       * Return:
       * - JdbcResultSet — An result set containing the column descriptions for the primary key columns referenced by the given table's foreign key columns (those imported by a table). One column description is provided in each row of the result set, and they are ordered by PKTABLE_CAT, PKTABLE_SCHEM, PKTABLE_NAME, and KEY_SEQ.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getImportedKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getImportedKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean) .
       *
       * Return:
       * - JdbcResultSet — An result set containing the index and statistic column descriptions for the specified table. One column description is provided in each row of the result set, and they are ordered by NON_UNIQUE, TYPE, INDEX_NAME, and ORDINAL_POSITION.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getIndexInfo(String,String,String,Boolean,Boolean)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param unique If true, the method only return indices for unique values; otherwise it returns indices whether the values are unique or not.
       * @param approximate If true, the result is allowed to reflect approximate or out-of-data values; otherwise result accuracy is requested.
       */
      getIndexInfo(catalog: string, schema: string, table: string, unique: boolean, approximate: boolean): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getJDBCMajorVersion().
       *
       * Return:
       * - Integer — The major JDBC version number for this driver.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getJDBCMajorVersion()
       */
      getJDBCMajorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getJDBCMinorVersion().
       *
       * Return:
       * - Integer — The minor JDBC version number for this driver.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getJDBCMinorVersion()
       */
      getJDBCMinorVersion(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxBinaryLiteralLength().
       *
       * Return:
       * - Integer — The maximum number of hex characters this database allows in an inline binary literal. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxBinaryLiteralLength()
       */
      getMaxBinaryLiteralLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxCatalogNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a catalog name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCatalogNameLength()
       */
      getMaxCatalogNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxCharLiteralLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a character literal. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCharLiteralLength()
       */
      getMaxCharLiteralLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a column name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnNameLength()
       */
      getMaxColumnNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnsInGroupBy().
       *
       * Return:
       * - Integer — The maximum number of columns this database allows in a GROUP BY clause. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInGroupBy()
       */
      getMaxColumnsInGroupBy(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnsInIndex().
       *
       * Return:
       * - Integer — The maximum number of columns this database allows in an index. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInIndex()
       */
      getMaxColumnsInIndex(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnsInOrderBy().
       *
       * Return:
       * - Integer — The maximum number of columns this database allows in an ORDER BY clause. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInOrderBy()
       */
      getMaxColumnsInOrderBy(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnsInSelect().
       *
       * Return:
       * - Integer — The maximum number of columns this database allows in an SELECT list. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInSelect()
       */
      getMaxColumnsInSelect(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxColumnsInTable().
       *
       * Return:
       * - Integer — The maximum number of columns this database allows in a table. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInTable()
       */
      getMaxColumnsInTable(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxConnections().
       *
       * Return:
       * - Integer — The maximum number of concurrent connections to this database. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxConnections()
       */
      getMaxConnections(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxCursorNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters that this database allows in a cursor name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCursorNameLength()
       */
      getMaxCursorNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxIndexLength().
       *
       * Return:
       * - Integer — The maximum number of bytes this database allows for an index, including all its parts. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxIndexLength()
       */
      getMaxIndexLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxProcedureNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a procedure name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxProcedureNameLength()
       */
      getMaxProcedureNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxRowSize().
       *
       * Return:
       * - Integer — The maximum number of bytes this database allows in a single row. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxRowSize()
       */
      getMaxRowSize(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxSchemaNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a schema name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxSchemaNameLength()
       */
      getMaxSchemaNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxStatementLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in an SQL statement. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxStatementLength()
       */
      getMaxStatementLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxStatements().
       *
       * Return:
       * - Integer — The maximum number of active statements to this database that can be open simultaneously. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxStatements()
       */
      getMaxStatements(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxTableNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a table name. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxTableNameLength()
       */
      getMaxTableNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxTablesInSelect().
       *
       * Return:
       * - Integer — The maximum number of tables this database allows in a SELECT statement. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxTablesInSelect()
       */
      getMaxTablesInSelect(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getMaxUserNameLength().
       *
       * Return:
       * - Integer — The maximum number of characters this database allows in a username. A response of 0 indicates there is no known limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxUserNameLength()
       */
      getMaxUserNameLength(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getNumericFunctions().
       *
       * Return:
       * - String — The comma-separated list of math functions available with this database. These are the Open/Open CLI math function names used in the JDBC function escape clause.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getNumericFunctions()
       */
      getNumericFunctions(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String).
       *
       * Return:
       * - JdbcResultSet — An result set containing the column descriptions for the primary key columns, one per row, ordered by COLUMN_NAME.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getPrimaryKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getPrimaryKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String) .
       *
       * Return:
       * - JdbcResultSet — A result set containing the procedure and column descriptions, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedureColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param procedureNamePattern The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getProcedureColumns(catalog: string, schemaPattern: string, procedureNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getProcedureTerm().
       *
       * Return:
       * - String — The database vendor's preferred term for 'procedure'.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedureTerm()
       */
      getProcedureTerm(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getProcedures(String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the procedure descriptions, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedures(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param procedureNamePattern The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database.
       */
      getProcedures(catalog: string, schemaPattern: string, procedureNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getResultSetHoldability().
       *
       * Return:
       * - Integer — The database default holdability; one of Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getRowIdLifetime().
       *
       * Return:
       * - Integer — The status indicatig the lifetime of a ROWID, which is one of Jdbc.RowIdLifetime.ROWID_UNSUPPORTED, Jdbc.RowIdLifetime.ROWID_VALID_OTHER, Jdbc.RowIdLifetime.ROWID_VALID_SESSION, Jdbc.RowIdLifetime.ROWID_VALID_TRANSACTION, or Jdbc.RowIdLifetime.ROWID_VALID_FOREVER.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getRowIdLifetime()
       */
      getRowIdLifetime(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSQLKeywords().
       *
       * Return:
       * - String — The comma-separated list of all this database's SQL keywords that aren't also SQL:2003 keywords.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSQLKeywords()
       */
      getSQLKeywords(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSQLStateType().
       *
       * Return:
       * - Integer — The type of SQLSTATE, which is either sqlStateXOpen or sqlStateSQL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSQLStateType()
       */
      getSQLStateType(): Integer;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSchemaTerm().
       *
       * Return:
       * - String — The database vendor's preferred term for 'schema'.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemaTerm()
       */
      getSchemaTerm(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSchemas().
       *
       * Return:
       * - JdbcResultSet — A result set containing the schema descriptions, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemas()
       */
      getSchemas(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSchemas().
       *
       * Return:
       * - JdbcResultSet — A result set containing scheme descriptions available in this database, ordered by TABLE_CATALOG and TABLE_SCHEM.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemas(String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       */
      getSchemas(catalog: string, schemaPattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSearchStringEscape().
       *
       * Return:
       * - String — The string that is used to escape wildcard characters such as '_' or '%'.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSearchStringEscape()
       */
      getSearchStringEscape(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getStringFunctions().
       *
       * Return:
       * - String — The comma-separated list of string functions available with this database. These are the Open Group CLI string function names used in the JDBC function escape clause.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getStringFunctions()
       */
      getStringFunctions(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSuperTables(String, String,String).
       *
       * Return:
       * - JdbcResultSet — A result set containing descriptions of the table hierarchies defined in a particular schema in this database. Each row provides information about a specific table type. Tables without supers aren't listed.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSuperTables(String,String,String)
       * @param catalog The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema.
       * @param tableNamePattern The table name pattern; may be a fully qualified name.
       */
      getSuperTables(catalog: string, schemaPattern: string, tableNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSuperTypes(String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing descriptions of the user-defined type hierarchies defined in a particular schema in this database. Each row provides information about a specific user-defined type. Types without supers aren't listed.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSuperTypes(String,String,String)
       * @param catalog The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema.
       * @param typeNamePattern The user-defined type name pattern; may be a fully qualified name.
       */
      getSuperTypes(catalog: string, schemaPattern: string, typeNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getSystemFunctions().
       *
       * Return:
       * - String — The comma-separated list of system functions available with this database. These are the Open Group CLI system function names used in the JDBC function escape clause.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSystemFunctions()
       */
      getSystemFunctions(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getTablePrivileges(String, String, String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the table privilege descriptions, one per row, ordered by TABLE_CAT, TABLE_SCHEM, TABLE_NAME, and PRIVILEGE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTablePrivileges(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       */
      getTablePrivileges(catalog: string, schemaPattern: string, tableNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getTableTypes().
       *
       * Return:
       * - JdbcResultSet — A result set containing the table types, one per row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTableTypes()
       */
      getTableTypes(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getTables(String, String, String, String[]).
       *
       * Return:
       * - JdbcResultSet — A result set containing the table descriptions, one per row, ordered according to TABLE_TYPE, TABLE_CAT, TABLE_SCHEM, and TABLE_NAME.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTables(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       * @param types A list of type types to return, each of which must be on the list that getTableTypes() returns. Passing null indictates that all table types are returned.
       */
      getTables(catalog: string, schemaPattern: string, tableNamePattern: string, types: string[]): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getTimeDateFunctions().
       *
       * Return:
       * - String — The comma-separated list of time and date functions available with this database.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTimeDateFunctions()
       */
      getTimeDateFunctions(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getTypeInfo().
       *
       * Return:
       * - JdbcResultSet — An result set containing the descriptions of data types supported by this database. One SQL type description is provided in each row of the result set, and they are ordered by DATA_TYPE and then by how closely the data type maps to the corresponding JDBC SQL type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTypeInfo()
       */
      getTypeInfo(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getUDTs(String, String, String, int[]).
       *
       * Return:
       * - JdbcResultSet — A result set containing the user-defined type (UDT) descriptions, one per row, ordered according to DATA_TYPE, TYPE_CAT, TYPE_SCHEM, and TYPE_NAME.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getUDTs(String,String,String,Integer)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param typeNamePattern The type name pattern to filter the search by; may be a fully qualified name.
       * @param types A list of user-defined types (JAVA_OBJECT, STRUCT, or DISTINCT) to include. Passing null indictates that all types are returned.
       */
      getUDTs(catalog: string, schemaPattern: string, typeNamePattern: string, types: Integer[]): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getURL().
       *
       * Return:
       * - String — The URL for this database management system, or null if isn't generated.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getURL()
       */
      getURL(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getUserName().
       *
       * Return:
       * - String — The username as known to this database.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getUserName()
       */
      getUserName(): string;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#getVersionColumns(String, String, String).
       *
       * Return:
       * - JdbcResultSet — An unordered result set containing the column descriptions that are updated when any value in a row is updated (one column description per row in the result set).
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getVersionColumns(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getVersionColumns(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#insertsAreDetected(int).
       *
       * Return:
       * - Boolean — true if for the specified result set type a visible row insert is detected by calls to JdbcResultSet.rowInserted(); false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#insertsAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      insertsAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#isCatalogAtStart().
       *
       * Return:
       * - Boolean — true if a catalog appears at the start of a fully-qualified table name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#isCatalogAtStart()
       */
      isCatalogAtStart(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#isReadOnly().
       *
       * Return:
       * - Boolean — true if the database is read-only; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#isReadOnly()
       */
      isReadOnly(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#locatorsUpdateCopy().
       *
       * Return:
       * - Boolean — true if updates made to a Large Object (LOB) are made to a copy of th LOB; false if updates are made directly to the LOB.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#locatorsUpdateCopy()
       */
      locatorsUpdateCopy(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#nullPlusNonNullIsNull().
       *
       * Return:
       * - Boolean — true if concatenations of NULL and non-NULL values result in a NULL; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullPlusNonNullIsNull()
       */
      nullPlusNonNullIsNull(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#nullsAreSortedAtEnd().
       *
       * Return:
       * - Boolean — true if NULL values are sorted to the end regardless of sort order (ascending or descending). Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedAtEnd()
       */
      nullsAreSortedAtEnd(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#nullsAreSortedAtStart().
       *
       * Return:
       * - Boolean — true if NULL values are sorted to the start regardless of sort order (ascending or descending). Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedAtStart()
       */
      nullsAreSortedAtStart(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#nullsAreSortedHigh().
       *
       * Return:
       * - Boolean — true if the NULL values are sorted high, meaning they are considered to have a value higher than others in the domain when sorting. Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedHigh()
       */
      nullsAreSortedHigh(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#nullsAreSortedLow().
       *
       * Return:
       * - Boolean — true if the NULL values are sorted low, meaning they are considered to have a value lower than others in the domain when sorting. Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedLow()
       */
      nullsAreSortedLow(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#othersDeletesAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the deletes made by others are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersDeletesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersDeletesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#othersInsertsAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the inserts made by others are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersInsertsAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersInsertsAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#othersUpdatesAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the updates made by others are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersUpdatesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersUpdatesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#ownDeletesAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the set's own deletes are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownDeletesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownDeletesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#ownInsertsAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the set's own inserts are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownInsertsAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownInsertsAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#ownUpdatesAreVisible(int).
       *
       * Return:
       * - Boolean — true if for the given result set type the set's own updates are visible; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownUpdatesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownUpdatesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesLowerCaseIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in lowercase; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesLowerCaseIdentifiers()
       */
      storesLowerCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in lowercase; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesLowerCaseQuotedIdentifiers()
       */
      storesLowerCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesMixedCaseIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in mixed case; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesMixedCaseIdentifiers()
       */
      storesMixedCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in mixed case; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesMixedCaseQuotedIdentifiers()
       */
      storesMixedCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesUpperCaseIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in uppercase; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesUpperCaseIdentifiers()
       */
      storesUpperCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in uppercase; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesUpperCaseQuotedIdentifiers()
       */
      storesUpperCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL().
       *
       * Return:
       * - Boolean — true if this database supports the ANSI92 entry level SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92EntryLevelSQL()
       */
      supportsANSI92EntryLevelSQL(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsANSI92FullSQL().
       *
       * Return:
       * - Boolean — true if this database supports the ANSI92 full level SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92FullSQL()
       */
      supportsANSI92FullSQL(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL().
       *
       * Return:
       * - Boolean — true if this database supports the ANSI92 intermediate level SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92IntermediateSQL()
       */
      supportsANSI92IntermediateSQL(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn().
       *
       * Return:
       * - Boolean — true if the database supports ALTER TABLE with add column; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsAlterTableWithAddColumn()
       */
      supportsAlterTableWithAddColumn(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn().
       *
       * Return:
       * - Boolean — true if the database supports ALTER TABLE with drop column; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsAlterTableWithDropColumn()
       */
      supportsAlterTableWithDropColumn(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsBatchUpdates().
       *
       * Return:
       * - Boolean — true if the database supports batch updates; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsBatchUpdates()
       */
      supportsBatchUpdates(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation().
       *
       * Return:
       * - Boolean — true if a data manipulation statement can include a catalog name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInDataManipulation()
       */
      supportsCatalogsInDataManipulation(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions().
       *
       * Return:
       * - Boolean — true if an index definition statement can include a catalog name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInIndexDefinitions()
       */
      supportsCatalogsInIndexDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions().
       *
       * Return:
       * - Boolean — true if a privilege definition statement can include a catalog name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInPrivilegeDefinitions()
       */
      supportsCatalogsInPrivilegeDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls().
       *
       * Return:
       * - Boolean — true if a procedure call statement can include a catalog name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInProcedureCalls()
       */
      supportsCatalogsInProcedureCalls(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions().
       *
       * Return:
       * - Boolean — true if a table definition statement can include a catalog name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInTableDefinitions()
       */
      supportsCatalogsInTableDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsColumnAliasing().
       *
       * Return:
       * - Boolean — true if the database supports column aliasing; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsColumnAliasing()
       */
      supportsColumnAliasing(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsConvert().
       *
       * Return:
       * - Boolean — true if this database supports the JDBC scalar function CONVERT for the conversion of one JDBC type to another; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsConvert()
       */
      supportsConvert(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsConvert(int, int).
       *
       * Return:
       * - Boolean — true if this database supports the JDBC scalar function CONVERT for the conversion of the specified JDBC types; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsConvert(Integer,Integer)
       * @param fromType The  type to convert from.
       * @param toType The  type to convert to.
       */
      supportsConvert(fromType: Integer, toType: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCoreSQLGrammar().
       *
       * Return:
       * - Boolean — true if this database supports the ODBC Core SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCoreSQLGrammar()
       */
      supportsCoreSQLGrammar(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsCorrelatedSubqueries().
       *
       * Return:
       * - Boolean — true if this database supports correlated subqueries; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCorrelatedSubqueries()
       */
      supportsCorrelatedSubqueries(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions() .
       *
       * Return:
       * - Boolean — true if this database supports both data definition and data manipulation statements within a transaction; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDataDefinitionAndDataManipulationTransactions()
       */
      supportsDataDefinitionAndDataManipulationTransactions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly().
       *
       * Return:
       * - Boolean — true if this database supports data manipulation statements within a transaction; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDataManipulationTransactionsOnly()
       */
      supportsDataManipulationTransactionsOnly(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames().
       *
       * Return:
       * - Boolean — true if table correlation names are supported and are restricted to be different frm the names of the tables in the database; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDifferentTableCorrelationNames()
       */
      supportsDifferentTableCorrelationNames(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsExpressionsInOrderBy().
       *
       * Return:
       * - Boolean — true if this database supports expressions in ORDER BY lists; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsExpressionsInOrderBy()
       */
      supportsExpressionsInOrderBy(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsExtendedSQLGrammar().
       *
       * Return:
       * - Boolean — true if this database supports the ODBC Extended SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsExtendedSQLGrammar()
       */
      supportsExtendedSQLGrammar(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsFullOuterJoins().
       *
       * Return:
       * - Boolean — true if this database supports full nested outer joins; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsFullOuterJoins()
       */
      supportsFullOuterJoins(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsGetGeneratedKeys().
       *
       * Return:
       * - Boolean — true if auto-generated keys can be retrieved after a statement is executed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGetGeneratedKeys()
       */
      supportsGetGeneratedKeys(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsGroupBy().
       *
       * Return:
       * - Boolean — true if this database supports some form of GROUP BY clause; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupBy()
       */
      supportsGroupBy(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsGroupByBeyondSelect().
       *
       * Return:
       * - Boolean — true if this database supports using columns that aren't in the SELECT statement in a GROUP BY clause, provided that all the columns in the SELECT statement are included in the GROUP BY clause. Returns false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupByBeyondSelect()
       */
      supportsGroupByBeyondSelect(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsGroupByUnrelated().
       *
       * Return:
       * - Boolean — true if this database supports using a column that isn't in the SELECT statement in a GROUP BY clause; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupByUnrelated()
       */
      supportsGroupByUnrelated(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility().
       *
       * Return:
       * - Boolean — true if this database supports the SQL Integrity Enhancement Facility; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsIntegrityEnhancementFacility()
       */
      supportsIntegrityEnhancementFacility(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsLikeEscapeClause().
       *
       * Return:
       * - Boolean — true if this database supports specifying a LIKE escape clause; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsLikeEscapeClause()
       */
      supportsLikeEscapeClause(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsLimitedOuterJoins().
       *
       * Return:
       * - Boolean — true if this database provides limited support for outer joins; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsLimitedOuterJoins()
       */
      supportsLimitedOuterJoins(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMinimumSQLGrammar().
       *
       * Return:
       * - Boolean — true if this database supports the ODBC Minimum SQL grammar; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMinimumSQLGrammar()
       */
      supportsMinimumSQLGrammar(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case unquoted SQL identifiers as case-sensitive and as a result stores them in mixed case; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMixedCaseIdentifiers()
       */
      supportsMixedCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers().
       *
       * Return:
       * - Boolean — true if the database treats mixed case quoted SQL identifiers as case-sensitive and as a result stores them in mixed case; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMixedCaseQuotedIdentifiers()
       */
      supportsMixedCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMultipleOpenResults().
       *
       * Return:
       * - Boolean — true if a callable statement can return multiple result sets simultenously; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleOpenResults()
       */
      supportsMultipleOpenResults(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMultipleResultSets().
       *
       * Return:
       * - Boolean — true if this database supports getting multiple result sets from a single execution call; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleResultSets()
       */
      supportsMultipleResultSets(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsMultipleTransactions().
       *
       * Return:
       * - Boolean — true if this database supports having multiple transactions on different connections open at once; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleTransactions()
       */
      supportsMultipleTransactions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsNamedParameters().
       *
       * Return:
       * - Boolean — true if the database supports named parameters to callable statements; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsNamedParameters()
       */
      supportsNamedParameters(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsNonNullableColumns().
       *
       * Return:
       * - Boolean — true if columns in this database may be defined as non-nullable; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsNonNullableColumns()
       */
      supportsNonNullableColumns(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit().
       *
       * Return:
       * - Boolean — true if this database supports keeping cursors always open across commits; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenCursorsAcrossCommit()
       */
      supportsOpenCursorsAcrossCommit(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback().
       *
       * Return:
       * - Boolean — true if this database supports keeping cursors always open across rollbacks; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenCursorsAcrossRollback()
       */
      supportsOpenCursorsAcrossRollback(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit().
       *
       * Return:
       * - Boolean — true if this database supports keeping statements always open across commits; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenStatementsAcrossCommit()
       */
      supportsOpenStatementsAcrossCommit(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback().
       *
       * Return:
       * - Boolean — true if this database supports keeping statements always open across rollbacks; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenStatementsAcrossRollback()
       */
      supportsOpenStatementsAcrossRollback(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOrderByUnrelated().
       *
       * Return:
       * - Boolean — true if this database supports using a column that isn't in the SELECT statement in an ORDER BY clause; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOrderByUnrelated()
       */
      supportsOrderByUnrelated(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsOuterJoins().
       *
       * Return:
       * - Boolean — true if this database supports some form of outer join; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOuterJoins()
       */
      supportsOuterJoins(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsPositionedDelete().
       *
       * Return:
       * - Boolean — true if this database supports positioned DELETE statements; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsPositionedDelete()
       */
      supportsPositionedDelete(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsPositionedUpdate().
       *
       * Return:
       * - Boolean — true if this database supports positioned UPDATE statements; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsPositionedUpdate()
       */
      supportsPositionedUpdate(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int).
       *
       * Return:
       * - Boolean — true if this database supports the specified result set and concurrency type combination; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetConcurrency(Integer,Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       * @param concurrency The concurrency type, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      supportsResultSetConcurrency(type: Integer, concurrency: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsResultSetHoldability(int).
       *
       * Return:
       * - Boolean — true if the database the specified holdability; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetHoldability(Integer)
       * @param holdability A holdability constant to check; one of Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      supportsResultSetHoldability(holdability: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsResultSetType(int).
       *
       * Return:
       * - Boolean — true if this database supports the specified result set type; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetType(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      supportsResultSetType(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSavepoints().
       *
       * Return:
       * - Boolean — true if the database supports savepoints; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSavepoints()
       */
      supportsSavepoints(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSchemasInDataManipulation().
       *
       * Return:
       * - Boolean — true if a data manipulation statement can include a schema name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInDataManipulation()
       */
      supportsSchemasInDataManipulation(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions().
       *
       * Return:
       * - Boolean — true if an index definition statement can include a schema name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInIndexDefinitions()
       */
      supportsSchemasInIndexDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions().
       *
       * Return:
       * - Boolean — true if an privilege definition statement can include a schema name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInPrivilegeDefinitions()
       */
      supportsSchemasInPrivilegeDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls().
       *
       * Return:
       * - Boolean — true if a procedure call statement can include a schema name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInProcedureCalls()
       */
      supportsSchemasInProcedureCalls(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions().
       *
       * Return:
       * - Boolean — true if a table definition statement can include a schema name; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInTableDefinitions()
       */
      supportsSchemasInTableDefinitions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSelectForUpdate().
       *
       * Return:
       * - Boolean — true if this database supports SELECT FOR UPDATE statements; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSelectForUpdate()
       */
      supportsSelectForUpdate(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsStatementPooling().
       *
       * Return:
       * - Boolean — true if the database supports statement pooling; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStatementPooling()
       */
      supportsStatementPooling(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax().
       *
       * Return:
       * - Boolean — true if the database supports invoking user-defined or vendor functions using the stored procedure escape syntax; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStoredFunctionsUsingCallSyntax()
       */
      supportsStoredFunctionsUsingCallSyntax(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsStoredProcedures().
       *
       * Return:
       * - Boolean — true if this database supports stored procedure calls that used the stored procedure escape syntax; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStoredProcedures()
       */
      supportsStoredProcedures(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSubqueriesInComparisons().
       *
       * Return:
       * - Boolean — true if this database supports subqueries in comparison expressions; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInComparisons()
       */
      supportsSubqueriesInComparisons(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSubqueriesInExists().
       *
       * Return:
       * - Boolean — true if this database supports subqueries in EXISTS expressions; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInExists()
       */
      supportsSubqueriesInExists(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSubqueriesInIns().
       *
       * Return:
       * - Boolean — true if this database supports subqueries in IN expressions; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInIns()
       */
      supportsSubqueriesInIns(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds().
       *
       * Return:
       * - Boolean — true if this database supports subqueries in quantified expressions; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInQuantifieds()
       */
      supportsSubqueriesInQuantifieds(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsTableCorrelationNames().
       *
       * Return:
       * - Boolean — true if this database supports table corelation names; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTableCorrelationNames()
       */
      supportsTableCorrelationNames(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int).
       *
       * Return:
       * - Boolean — true if this database supports the given transaction isolation level; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTransactionIsolationLevel(Integer)
       * @param level The transaction isolation level to determine the support of. This must be one of Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED, Jdbc.Connection.TRANSACTION_READ_COMMITTED, Jdbc.Connection.TRANSACTION_REPEATABLE_READ, Jdbc.Connection.TRANSACTION_SERIALIZABLE, or Jdbc.Connection.TRANSACTION_NONE.
       */
      supportsTransactionIsolationLevel(level: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsTransactions().
       *
       * Return:
       * - Boolean — true if this database supports transactions; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTransactions()
       */
      supportsTransactions(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsUnion().
       *
       * Return:
       * - Boolean — true if this database supports SQL UNION; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsUnion()
       */
      supportsUnion(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#supportsUnionAll().
       *
       * Return:
       * - Boolean — true if this database supports SQL UNION ALL; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsUnionAll()
       */
      supportsUnionAll(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#updatesAreDetected(int).
       *
       * Return:
       * - Boolean — true if for the specified result set type a visible row update is detected by calls to JdbcResultSet.rowUpdated(); false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#updatesAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      updatesAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#usesLocalFilePerTable().
       *
       * Return:
       * - Boolean — true if the database stores each table in a separate local file; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#usesLocalFilePerTable()
       */
      usesLocalFilePerTable(): boolean;

      /**
       * For documentation of this method, see java.sql.DatabaseMetaData#usesLocalFiles().
       *
       * Return:
       * - Boolean — true if the database stores tables in a local file; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#usesLocalFiles()
       */
      usesLocalFiles(): boolean;
    }
    /**
     * A JDBC Date. For documentation of this class, see java.sql.Date
     * .
     */
    interface JdbcDate {

      /**
       * For documentation of this method, see java.sql.Date#after(date).
       *
       * Return:
       * - Boolean — true if and only if this date is strictly later than the provided date; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#after(JdbcDate)
       * @param when A date to compare to.
       */
      after(when: JdbcDate): boolean;

      /**
       * For documentation of this method, see java.sql.Date#before(date).
       *
       * Return:
       * - Boolean — true if and only if this date is strictly earlier than the provided date; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#before(JdbcDate)
       * @param when A date to compare to.
       */
      before(when: JdbcDate): boolean;

      /**
       * For documentation of this method, see java.sql.Date#getDate().
       *
       * Return:
       * - Integer — The day of the month represented by this date. The value is between 1 and 31.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getDate()
       */
      getDate(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getMonth().
       *
       * Return:
       * - Integer — The number representing the month that contains or begins with the instant in time represented by this date. The value returned is between 0 and 11, with the value 0 representing January.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getMonth()
       */
      getMonth(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getTime().
       *
       * Return:
       * - Integer — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this date.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getYear().
       *
       * Return:
       * - Integer — The result of subtracting 1900 from the year that contains or begins with the instant in time represented by this date, as interpreted in the local time zone.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getYear()
       */
      getYear(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#setDate(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setDate(Integer)
       * @param date The day of the month to set. The value is between 1 and 31, modified as needed. For example, if the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days.
       */
      setDate(date: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setMonth(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setMonth(Integer)
       * @param month The month value to set. The value returned is between 0 and 11, with the value 0 representing January.
       */
      setMonth(month: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setTime(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setTime(Integer)
       * @param milliseconds The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to exceed the milliseconds representation for the year 8099. A negative number indicates the number of milliseconds before January 1, 1970, 00:00:00 GMT.
       */
      setTime(milliseconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setYear(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setYear(Integer)
       * @param year The value to set the year with. This value plus 1900 is the resulting year the date has after this method executes.
       */
      setYear(year: Integer): void;
    }
    /**
     * A JDBC ParameterMetaData. For documentation of this class, see
     * java.sql.ParameterMetaData.
     */
    interface JdbcParameterMetaData {

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getParameterClassName(int).
       *
       * Return:
       * - String — The fully-qualified Java class name that is used by the JdbcPreparedStatement.setObject(index, x) methods.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterClassName(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterClassName(param: Integer): string;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getParameterCount().
       *
       * Return:
       * - Integer — The number of parameters for which this metadata contains information.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterCount()
       */
      getParameterCount(): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getParameterMode(int).
       *
       * Return:
       * - Integer — The designated parameter's mode, which is one of Jdbc.ParameterMetaData.parameterModeIn, Jdbc.ParameterMetaData.parameterModeOut, Jdbc.ParameterMetaData.parameterModeInOut, or Jdbc.ParameterMetaData.parameterModeUnknown.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterMode(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterMode(param: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getParameterType(int).
       *
       * Return:
       * - Integer — The designated parameter's SQL type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterType(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterType(param: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getParameterTypeName(int).
       *
       * Return:
       * - String — The designated parameter's database-specific type name. This is a fully-qualified type name if the parameter is a user-defined type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterTypeName(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterTypeName(param: Integer): string;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getPrecision(int).
       *
       * Return:
       * - Integer — The maximum column size for the given parameter. For numeric data, this is the maximum precision. For character data, this is the length in characters. For datetime data, this is the length in characters of the string representation (assuming the maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes. For the ROWID datatype, this is the length in bytes. Returns 0 for types where the column size is not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getPrecision(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getPrecision(param: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#getScale(int).
       *
       * Return:
       * - Integer — The designated parameter's number of digits to right of the decimal point. Returns 0 for data types where the scale is not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getScale(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getScale(param: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#isNullable(int).
       *
       * Return:
       * - Integer — The nullability status of the given parameter; one of Jdbc.ParameterMetaData.parameterNoNulls, Jdbc.ParameterMetaData.parameterNullable, or Jdbc.ParameterMetaData.parameterNullableUnknown.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#isNullable(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      isNullable(param: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ParameterMetaData#isSigned(int).
       *
       * Return:
       * - Boolean — true if the specified parameter can accept signed number values; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#isSigned(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      isSigned(param: Integer): boolean;
    }
    /**
     * A JDBC PreparedStatement. For documentation of this class, see
     * java.sql.PreparedStatement.
     */
    interface JdbcPreparedStatement {

      /**
       * For documentation of this method, see java.sql.PreparedStatement#addBatch().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#addBatch()
       */
      addBatch(): void;

      /**
       * For documentation of this method, see java.sql.Statement#addBatch(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see java.sql.Statement#cancel().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearBatch().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#clearParameters().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearParameters()
       */
      clearParameters(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearWarnings().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see java.sql.Statement#close().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#execute().
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if the first result is an update count or there is no result.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute()
       */
      execute(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, String[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#executeBatch().
       *
       * Return:
       * - Integer[] — The update counts for each command in the batch, using the same order in which commands were added to the batch.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see java.sql.PreparedStatement#executeQuery().
       *
       * Return:
       * - JdbcResultSet — A result set that contains the data produced by the query.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeQuery()
       */
      executeQuery(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#executeQuery(String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the results of the execution. This is never null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#executeUpdate().
       *
       * Return:
       * - Integer — The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate()
       */
      executeUpdate(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, String[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getConnection().
       *
       * Return:
       * - JdbcConnection — The connection that produced this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchDirection().
       *
       * Return:
       * - Integer — The default direction for result sets generated by this statement, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchSize().
       *
       * Return:
       * - Integer — The default row fetch size for result sets generated from this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getGeneratedKeys().
       *
       * Return:
       * - JdbcResultSet — A result set containing the auto-generated keys generated by the execution of this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxFieldSize().
       *
       * Return:
       * - Integer — The current column byte size limit for columns storing character and binary values; a value of zero indictates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxRows().
       *
       * Return:
       * - Integer — The current maximum number of rows for a result set produced by this statement; a value of 0 indicates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#getMetaData().
       *
       * Return:
       * - JdbcResultSetMetaData — The description of a result set's columns, or NULL if this metadata is unavailable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults().
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults(int).
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#getParameterMetaData().
       *
       * Return:
       * - JdbcParameterMetaData — The parameter metadata, including the number, types, and properties for each parameter.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getParameterMetaData()
       */
      getParameterMetaData(): JdbcParameterMetaData;

      /**
       * For documentation of this method, see java.sql.Statement#getQueryTimeout().
       *
       * Return:
       * - Integer — The current query timeout in seconds; a value of zero indicates no timeout.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSet().
       *
       * Return:
       * - JdbcResultSet — The current result set, or null if the result is an update count or there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetConcurrency().
       *
       * Return:
       * - Integer — The result set concurrency for result sets generated from this statement, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetHoldability().
       *
       * Return:
       * - Integer — The result set holdability, which is either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetType().
       *
       * Return:
       * - Integer — The result set type for result sets generated from this statement, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getUpdateCount().
       *
       * Return:
       * - Integer — The current result as an update count, or -1 if the current result is a result set or if there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getWarnings().
       *
       * Return:
       * - String[] — The current set of warnings, or null if there are no warnings.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see java.sql.Statement#isClosed().
       *
       * Return:
       * - Boolean — true if this statement is closed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#isPoolable().
       *
       * Return:
       * - Boolean — true if this statement is poolable; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setArray(int, Array).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setArray(Integer,JdbcArray)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setArray(parameterIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBigDecimal(int, BigDecimal).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBigDecimal(Integer,BigNumber)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBlob(int, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBlob(Integer,JdbcBlob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBlob(parameterIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBoolean(int, boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBoolean(Integer,Boolean)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBoolean(parameterIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setByte(int, byte).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setByte(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setByte(parameterIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setBytes(int, byte[]).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBytes(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBytes(parameterIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setClob(int, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.Statement#setCursorName(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDate(int, Date).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDate(Integer,JdbcDate)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDate(parameterIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDate(int, Date, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDate(Integer,JdbcDate,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterIndex: Integer, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setDouble(int, double).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDouble(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDouble(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.Statement#setEscapeProcessing(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchDirection(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setFloat(int, float).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFloat(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setFloat(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setInt(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setInt(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setInt(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setLong(int, long).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setLong(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setLong(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxFieldSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxRows(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNClob(int, NClob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNull(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNull(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       */
      setNull(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setNull(int, int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNull(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       * @param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter isn't a user-defined type or REF.
       */
      setNull(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object)
       * @param index The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       */
      setObject(index: Integer, x: any): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database.
       */
      setObject(parameterIndex: Integer, x: any, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setObject(int, Object, int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object,Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database. The scale argument may further qualify this type.
       * @param scaleOrLength The number of digits after the decimal for DECIMAL or NUMERIC types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      setObject(parameterIndex: Integer, x: any, targetSqlType: Integer, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setPoolable(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setQueryTimeout(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setQueryTimeout(Integer)
       * @param seconds The new query timeout in seconds; a value of 0 indicates no timeout.
       */
      setQueryTimeout(seconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setRef(int, Ref).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setRef(Integer,JdbcRef)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The SQL REF value to set.
       */
      setRef(parameterIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setRowId(int, RowId).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setRowId(Integer,JdbcRowId)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setRowId(parameterIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setSQLXML(int, SQLXML).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setSQLXML(Integer,JdbcSQLXML)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setSQLXML(parameterIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setShort(int, short).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setShort(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setShort(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTime(int, Time).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTime(Integer,JdbcTime)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTime(parameterIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTime(int, Time, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTime(Integer,JdbcTime,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterIndex: Integer, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTimestamp(int, Timestamp).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTimestamp(Integer,JdbcTimestamp)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTimestamp(Integer,JdbcTimestamp,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see java.sql.PreparedStatement#setURL(int, URL).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setURL(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setURL(parameterIndex: Integer, x: string): void;
    }
    /**
     * A JDBC Ref. For documentation of this class, see java.sql.Ref.
     */
    interface JdbcRef {

      /**
       * For documentation of this method, see java.sql.Ref#getBaseTypeName().
       *
       * Return:
       * - String — The fully-qualified SQL name of the SQL structured type this JdbcRef references.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#getBaseTypeName()
       */
      getBaseTypeName(): string;

      /**
       * For documentation of this method, see java.sql.Ref#getObject().
       *
       * Return:
       * - Object — The object that this JdbcRef references.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#getObject()
       */
      getObject(): any;

      /**
       * For documentation of this method, see java.sql.Ref#setObject(Object).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#setObject(Object)
       * @param object The object to set as the refernence target.
       */
      setObject(object: any): void;
    }
    /**
     * A JDBC ResultSet. For documentation of this class, see java.sql.ResultSet
     * .
     */
    interface JdbcResultSet {

      /**
       * For documentation of this method, see java.sql.ResultSet#absolute(int).
       *
       * Return:
       * - Boolean — true if the cursor is moved to a position in this result set; false if the cursor is before the first row or after the last row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#absolute(Integer)
       * @param row The number of the row to which the cursor moves to. A positive number indicates the row number counting from the start of the result set, while a negative number indicates the counting from the end of the result set.
       */
      absolute(row: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#afterLast().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#afterLast()
       */
      afterLast(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#beforeFirst().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#beforeFirst()
       */
      beforeFirst(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#cancelRowUpdates().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#cancelRowUpdates()
       */
      cancelRowUpdates(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#clearWarnings().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#close().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#close()
       */
      close(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#deleteRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#deleteRow()
       */
      deleteRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#findColumn(String).
       *
       * Return:
       * - Integer — The column index of the specified column.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#findColumn(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      findColumn(columnLabel: string): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#first().
       *
       * Return:
       * - Boolean — true if the cursor is on a valid row; false if there are no rows in the result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#first()
       */
      first(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#getArray(int).
       *
       * Return:
       * - JdbcArray — The value of the designated column in the current row of this result set as an array.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getArray(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getArray(columnIndex: Integer): JdbcArray;

      /**
       * For documentation of this method, see java.sql.ResultSet#getArray(String).
       *
       * Return:
       * - JdbcArray — The value of the designated column in the current row of this result set as an array.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getArray(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getArray(columnLabel: string): JdbcArray;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBigDecimal(int).
       *
       * Return:
       * - BigNumber — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBigDecimal(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getBigDecimal(columnIndex: Integer): BigNumber;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBigDecimal(String).
       *
       * Return:
       * - BigNumber — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBigDecimal(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBigDecimal(columnLabel: string): BigNumber;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBlob(int).
       *
       * Return:
       * - JdbcBlob — The value of the designated column in the current row of this result set as a blob.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBlob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getBlob(columnIndex: Integer): JdbcBlob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBlob(String).
       *
       * Return:
       * - JdbcBlob — The value of the designated column in the current row of this result set as a blob.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBlob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBlob(columnLabel: string): JdbcBlob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBoolean(int).
       *
       * Return:
       * - Boolean — The column value; false if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBoolean(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getBoolean(columnIndex: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBoolean(String).
       *
       * Return:
       * - Boolean — The column value; false if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBoolean(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBoolean(columnLabel: string): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#getByte(int).
       *
       * Return:
       * - Byte — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getByte(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getByte(columnIndex: Integer): Byte;

      /**
       * For documentation of this method, see java.sql.ResultSet#getByte(String).
       *
       * Return:
       * - Byte — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getByte(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getByte(columnLabel: string): Byte;

      /**
       * For documentation of this method, see java.sql.ResultSet#getBytes(int).
       *
       * Return:
       * - Byte[] — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBytes(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getBytes(columnIndex: Integer): Byte[];

      /**
       * For documentation of this method, see java.sql.ResultSet#getBytes(String).
       *
       * Return:
       * - Byte[] — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBytes(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBytes(columnLabel: string): Byte[];

      /**
       * For documentation of this method, see java.sql.ResultSet#getClob(int).
       *
       * Return:
       * - JdbcClob — The value of the designated column in the current row of this result set as a clob.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getClob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getClob(columnIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getClob(String).
       *
       * Return:
       * - JdbcClob — The value of the designated column in the current row of this result set as a clob.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getClob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getClob(columnLabel: string): JdbcClob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getConcurrency().
       *
       * Return:
       * - Integer — The concurrency type, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getConcurrency()
       */
      getConcurrency(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getCursorName().
       *
       * Return:
       * - String — The SQL name for this result set's cursor.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getCursorName()
       */
      getCursorName(): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDate(int).
       *
       * Return:
       * - JdbcDate — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getDate(columnIndex: Integer): JdbcDate;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDate(int, Calendar).
       *
       * Return:
       * - JdbcDate — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(columnIndex: Integer, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDate(String).
       *
       * Return:
       * - JdbcDate — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getDate(columnLabel: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDate(String, Calendar).
       *
       * Return:
       * - JdbcDate — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(columnLabel: string, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDouble(int).
       *
       * Return:
       * - Number — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDouble(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getDouble(columnIndex: Integer): number;

      /**
       * For documentation of this method, see java.sql.ResultSet#getDouble(String).
       *
       * Return:
       * - Number — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDouble(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getDouble(columnLabel: string): number;

      /**
       * For documentation of this method, see java.sql.ResultSet#getFetchDirection().
       *
       * Return:
       * - Integer — The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getFetchSize().
       *
       * Return:
       * - Integer — The current fetch size for this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getFloat(int).
       *
       * Return:
       * - Number — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFloat(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getFloat(columnIndex: Integer): number;

      /**
       * For documentation of this method, see java.sql.ResultSet#getFloat(String).
       *
       * Return:
       * - Number — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFloat(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getFloat(columnLabel: string): number;

      /**
       * For documentation of this method, see java.sql.ResultSet#getHoldability().
       *
       * Return:
       * - Integer — The holdability of this result set, which is either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getHoldability()
       */
      getHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getInt(int).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getInt(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getInt(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getInt(String).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getInt(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getInt(columnLabel: string): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getLong(int).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getLong(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getLong(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getLong(String).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getLong(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getLong(columnLabel: string): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getMetaData().
       *
       * Return:
       * - JdbcResultSetMetaData — The number, types, and properties of this result set's columns.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see java.sql.ResultSet#getNClob(int).
       *
       * Return:
       * - JdbcClob — The column value of the current row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNClob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getNClob(columnIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getNClob(String).
       *
       * Return:
       * - JdbcClob — The column value of the current row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNClob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getNClob(columnLabel: string): JdbcClob;

      /**
       * For documentation of this method, see java.sql.ResultSet#getNString(int).
       *
       * Return:
       * - String — The column value of the current row; null if the value is SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNString(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getNString(columnIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getNString(String).
       *
       * Return:
       * - String — The column value of the current row; null if the value is SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNString(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getNString(columnLabel: string): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getObject(int).
       *
       * Return:
       * - Object — The value of the designated column in the current row of this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getObject(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getObject(columnIndex: Integer): any;

      /**
       * For documentation of this method, see java.sql.ResultSet#getObject(String).
       *
       * Return:
       * - Object — The value of the designated column in the current row of this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getObject(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getObject(columnLabel: string): any;

      /**
       * For documentation of this method, see java.sql.ResultSet#getRef(int).
       *
       * Return:
       * - JdbcRef — The value of the designated column in the current row of this result set as a reference.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRef(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getRef(columnIndex: Integer): JdbcRef;

      /**
       * For documentation of this method, see java.sql.ResultSet#getRef(String).
       *
       * Return:
       * - JdbcRef — The value of the designated column in the current row of this result set as a reference.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRef(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getRef(columnLabel: string): JdbcRef;

      /**
       * For documentation of this method, see java.sql.ResultSet#getRow().
       *
       * Return:
       * - Integer — The current row number, or 0 if there is no current row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRow()
       */
      getRow(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getRowId(int).
       *
       * Return:
       * - JdbcRowId — The column row ID value; null if the value is SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRowId(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getRowId(columnIndex: Integer): JdbcRowId;

      /**
       * For documentation of this method, see java.sql.ResultSet#getRowId(String).
       *
       * Return:
       * - JdbcRowId — The column row ID value; null if the value is SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRowId(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getRowId(columnLabel: string): JdbcRowId;

      /**
       * For documentation of this method, see java.sql.ResultSet#getSQLXML(int).
       *
       * Return:
       * - JdbcSQLXML — The column value of the current row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getSQLXML(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getSQLXML(columnIndex: Integer): JdbcSQLXML;

      /**
       * For documentation of this method, see java.sql.ResultSet#getSQLXML(String).
       *
       * Return:
       * - JdbcSQLXML — The column value of the current row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getSQLXML(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getSQLXML(columnLabel: string): JdbcSQLXML;

      /**
       * For documentation of this method, see java.sql.ResultSet#getShort(int).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getShort(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getShort(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getShort(String).
       *
       * Return:
       * - Integer — The column value; 0 if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getShort(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getShort(columnLabel: string): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getStatement().
       *
       * Return:
       * - JdbcStatement — The statement that produced this result set, or null if the result set was produced some other way.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getStatement()
       */
      getStatement(): JdbcStatement;

      /**
       * For documentation of this method, see java.sql.ResultSet#getString(int).
       *
       * Return:
       * - String — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getString(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getString(columnIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getString(String).
       *
       * Return:
       * - String — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getString(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getString(columnLabel: string): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTime(int).
       *
       * Return:
       * - JdbcTime — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getTime(columnIndex: Integer): JdbcTime;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTime(int, Calendar).
       *
       * Return:
       * - JdbcTime — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(columnIndex: Integer, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTime(String).
       *
       * Return:
       * - JdbcTime — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getTime(columnLabel: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTime(String, Calendar).
       *
       * Return:
       * - JdbcTime — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(columnLabel: string, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTimestamp(int).
       *
       * Return:
       * - JdbcTimestamp — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getTimestamp(columnIndex: Integer): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTimestamp(int, Calendar).
       *
       * Return:
       * - JdbcTimestamp — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(columnIndex: Integer, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTimestamp(String).
       *
       * Return:
       * - JdbcTimestamp — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getTimestamp(columnLabel: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.ResultSet#getTimestamp(String, Calendar).
       *
       * Return:
       * - JdbcTimestamp — The column value; null if the value was SQL NULL.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(columnLabel: string, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see java.sql.ResultSet#getType().
       *
       * Return:
       * - Integer — The type of this result set, which is one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getType()
       */
      getType(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSet#getURL(int).
       *
       * Return:
       * - String — The URL value of the designated column in the current row of this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getURL(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getURL(columnIndex: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSet#getURL(String).
       *
       * Return:
       * - String — The URL value of the designated column in the current row of this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getURL(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getURL(columnLabel: string): string;

      /**
       * Returns the current set of warnings reported by the driver.
       *
       * Return:
       * - String[] — The current set of warnings.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see java.sql.ResultSet#insertRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#insertRow()
       */
      insertRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#isAfterLast().
       *
       * Return:
       * - Boolean — true if the cursor is after the last row; false if it is in any other position or if the result set contains no rows.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isAfterLast()
       */
      isAfterLast(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#isBeforeFirst().
       *
       * Return:
       * - Boolean — true if the cursor is before the first row; false if it is in any other position or if the result set contains no rows.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isBeforeFirst()
       */
      isBeforeFirst(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#isClosed().
       *
       * Return:
       * - Boolean — true if this result set is closed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#isFirst().
       *
       * Return:
       * - Boolean — true if the cursor is on the first row; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isFirst()
       */
      isFirst(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#isLast().
       *
       * Return:
       * - Boolean — true if the cursor is on the last row; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isLast()
       */
      isLast(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#first().
       *
       * Return:
       * - Boolean — true if the cursor is on a valid row; false if there are no rows in the result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#last()
       */
      last(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#moveToCurrentRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#moveToCurrentRow()
       */
      moveToCurrentRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#moveToInsertRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#moveToInsertRow()
       */
      moveToInsertRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#next().
       *
       * Return:
       * - Boolean — true if the new current row is valid; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#next()
       */
      next(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#previous().
       *
       * Return:
       * - Boolean — true if the cursor is on a valid row; false if the cursor is positioned before the first row.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#previous()
       */
      previous(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#refreshRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#refreshRow()
       */
      refreshRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#relative(int).
       *
       * Return:
       * - Boolean — true if the cursor is on a row; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#relative(Integer)
       * @param rows The number row steps to move the cursor. A positive number moves the cursor forward, while a negative number moves the cursor backward.
       */
      relative(rows: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#rowDeleted().
       *
       * Return:
       * - Boolean — true if the current row was visibly deleted; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowDeleted()
       */
      rowDeleted(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#rowInserted().
       *
       * Return:
       * - Boolean — true if the current row was visibly inserted; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowInserted()
       */
      rowInserted(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#rowUpdated().
       *
       * Return:
       * - Boolean — true if the current row was visibly updated; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowUpdated()
       */
      rowUpdated(): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSet#setFetchDirection(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#setFetchSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateArray(int, Array).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateArray(Integer,JdbcArray)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateArray(columnIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateArray(String, Array).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateArray(String,JdbcArray)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateArray(columnLabel: string, x: JdbcArray): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBigDecimal(int, BigDecimal).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBigDecimal(Integer,BigNumber)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBigDecimal(columnIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBigDecimal(String, BigDecimal).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBigDecimal(String,BigNumber)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBigDecimal(columnLabel: string, x: BigNumber): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBlob(int, Blob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBlob(Integer,JdbcBlob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBlob(columnIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRef(String, Blob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBlob(String,JdbcBlob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBlob(columnLabel: string, x: JdbcBlob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBoolean(int, boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBoolean(Integer,Boolean)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBoolean(columnIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBoolean(String, boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBoolean(String,Boolean)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBoolean(columnLabel: string, x: boolean): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateByte(int, byte).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateByte(Integer,Byte)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateByte(columnIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateByte(String, byte).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateByte(String,Byte)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateByte(columnLabel: string, x: Byte): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBytes(int, byte[]).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBytes(Integer,Byte)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBytes(columnIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateBytes(String, byte[]).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBytes(String,Byte)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBytes(columnLabel: string, x: Byte[]): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateClob(int, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateClob(Integer,JdbcClob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateClob(columnIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateClob(String, Clob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateClob(String,JdbcClob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateClob(columnLabel: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateDate(int, Date).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDate(Integer,JdbcDate)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateDate(columnIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateDate(String, Date).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDate(String,JdbcDate)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateDate(columnLabel: string, x: JdbcDate): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateDouble(int, double).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDouble(Integer,Number)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateDouble(columnIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateDouble(String, double).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDouble(String,Number)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateDouble(columnLabel: string, x: number): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateFloat(int, float).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateFloat(Integer,Number)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateFloat(columnIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateFloat(String, float).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateFloat(String,Number)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateFloat(columnLabel: string, x: number): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateInt(int, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateInt(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateInt(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateInt(String, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateInt(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateInt(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateLong(int, long).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateLong(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateLong(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateLong(String, long).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateLong(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateLong(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNClob(int, NClob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNClob(Integer,JdbcClob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateNClob(columnIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNClob(String, NClob).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNClob(String,JdbcClob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateNClob(columnLabel: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNString(Integer,String)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateNString(columnIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNString(String, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNString(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateNString(columnLabel: string, x: string): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNull(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNull(Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       */
      updateNull(columnIndex: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateNull(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNull(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      updateNull(columnLabel: string): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateObject(int, Object).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(Integer,Object)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateObject(columnIndex: Integer, x: any): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateObject(int, Object, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(Integer,Object,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       * @param scaleOrLength The number of digits after the decimal for BigDecimal types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      updateObject(columnIndex: Integer, x: any, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateObject(String, Object).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(String,Object)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateObject(columnLabel: string, x: any): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateObject(String, Object, int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(String,Object,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       * @param scaleOrLength The number of digits after the decimal for BigDecimal types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      updateObject(columnLabel: string, x: any, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRef(int, Ref).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRef(Integer,JdbcRef)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateRef(columnIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRef(String, Ref).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRef(String,JdbcRef)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateRef(columnLabel: string, x: JdbcRef): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRow().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRow()
       */
      updateRow(): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRowId(int, RowId).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRowId(Integer,JdbcRowId)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateRowId(columnIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateRowId(String, RowId).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRowId(String,JdbcRowId)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateRowId(columnLabel: string, x: JdbcRowId): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateSQLXML(int, SQLXML).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateSQLXML(Integer,JdbcSQLXML)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateSQLXML(columnIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateSQLXML(String, SQLXML).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateSQLXML(String,JdbcSQLXML)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateSQLXML(columnLabel: string, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateShort(int, short).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateShort(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateShort(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateShort(String, short).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateShort(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateShort(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateString(int, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateString(Integer,String)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateString(columnIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateString(String, String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateString(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateString(columnLabel: string, x: string): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateTime(int, Time).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTime(Integer,JdbcTime)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateTime(columnIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateTime(String, Time).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTime(String,JdbcTime)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateTime(columnLabel: string, x: JdbcTime): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateTimestamp(int, Timestamp).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTimestamp(Integer,JdbcTimestamp)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateTimestamp(columnIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#updateTimestamp(String, Timestamp).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTimestamp(String,JdbcTimestamp)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateTimestamp(columnLabel: string, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see java.sql.ResultSet#wasNull().
       *
       * Return:
       * - Boolean — true if the last column read was SQL NULL; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#wasNull()
       */
      wasNull(): boolean;
    }
    /**
     * A JDBC ResultSetMetaData. For documentation of this class, see
     * java.sql.ResultSetMetaData.
     */
    interface JdbcResultSetMetaData {

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getCatalogName(int).
       *
       * Return:
       * - String — The catalog name for the table in the designated column, or an empty string if not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getCatalogName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getCatalogName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnClassName(int).
       *
       * Return:
       * - String — The fully-qualified name of the class of the designated column's values.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnClassName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnClassName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnCount().
       *
       * Return:
       * - Integer — The number of columns in this result set.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnCount()
       */
      getColumnCount(): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnDisplaySize(int).
       *
       * Return:
       * - Integer — The maximum number of characters allowed as the width of the designated columns.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnDisplaySize(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnDisplaySize(column: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnLabel(int).
       *
       * Return:
       * - String — The designated column's suggested title, usually specifed by a SQL AS clause. Returns the same as getColumnName(column) if an AS is not specified.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnLabel(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnLabel(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnName(int).
       *
       * Return:
       * - String — The designated column's name.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnType(int).
       *
       * Return:
       * - Integer — The SQL type of the designated column.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnType(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnType(column: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getColumnTypeName(int).
       *
       * Return:
       * - String — The designated column's database-specific type name. Returns the fully-qualifed type name if this is a user-defined type.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnTypeName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnTypeName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getPrecision(int).
       *
       * Return:
       * - Integer — The maximum column size for the given column. For numeric data, this is the maximum precision. For character data, this is the length in characters. For datetime data, this is the length in characters of the string representation (assuming the maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes. For the ROWID datatype, this is the length in bytes. Returns 0 for types where the column size is not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getPrecision(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getPrecision(column: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getScale(int).
       *
       * Return:
       * - Integer — The designated columns's number of digits to right of the decimal point. Returns 0 for data types where the scale is not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getScale(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getScale(column: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getSchemaName(int).
       *
       * Return:
       * - String — The table schema of the designated column.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getSchemaName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getSchemaName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#getTableName(int).
       *
       * Return:
       * - String — The table name of the designated column, or an empty string if not applicable.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getTableName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getTableName(column: Integer): string;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isAutoIncrement(int).
       *
       * Return:
       * - Boolean — true if the specified column is automatically numbered; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isAutoIncrement(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isAutoIncrement(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isCaseSensitive(int).
       *
       * Return:
       * - Boolean — true if the specified column is case-sensitive; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isCaseSensitive(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isCaseSensitive(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isCurrency(int).
       *
       * Return:
       * - Boolean — true if the specified column is a cash value; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isCurrency(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isCurrency(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isDefinitelyWritable(int).
       *
       * Return:
       * - Boolean — true if writes to the designated column definitely succeed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isDefinitelyWritable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isDefinitelyWritable(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isNullable(int).
       *
       * Return:
       * - Integer — The nullability status of the specified column, which is Jdbc.ResultSetMetaData.columnNoNulls, Jdbc.ResultSetMetaData.columnNullable, or Jdbc.ResultSetMetaData.columnNullableUnknown.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isNullable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isNullable(column: Integer): Integer;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isReadOnly(int).
       *
       * Return:
       * - Boolean — true if the designated column is definitely non-writable; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isReadOnly(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isReadOnly(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isSearchable(int).
       *
       * Return:
       * - Boolean — true if a where clause can use the specified column; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isSearchable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isSearchable(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isSigned(int).
       *
       * Return:
       * - Boolean — true if the values in the specified column are signed numbers; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isSigned(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isSigned(column: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.ResultSetMetaData#isWritable(int).
       *
       * Return:
       * - Boolean — true if it is possible to write to the designated column; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isWritable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isWritable(column: Integer): boolean;
    }
    /**
     * A JDBC RowId. For documentation of this class, see java.sql.RowId
     * .
     */
    interface JdbcRowId {

      /**
       * For documentation of this method, see java.sql.RowId#getBytes().
       *
       * Return:
       * - Byte[] — The bytes representing the ROWID represented by this JdbcRowId.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-row-id#getBytes()
       */
      getBytes(): Byte[];
    }
    /**
     * A JDBC SQLXML. For documentation of this class, see java.sql.SQLXML
     * .
     */
    interface JdbcSQLXML {

      /**
       * For documentation of this method, see java.sql.SQLXML#free().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml#free()
       */
      free(): void;

      /**
       * For documentation of this method, see java.sql.SQLXML#getString().
       *
       * Return:
       * - String — The string representation of the XML value designated by this SQLXML instance.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml#getString()
       */
      getString(): string;

      /**
       * For documentation of this method, see java.sql.SQLXML#setString(String).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml#setString(String)
       * @param value The string representation of the XML value to set.
       */
      setString(value: string): void;
    }
    /**
     * A JDBC Savepoint. For documentation of this class, see java.sql.Savepoint
     * .
     */
    interface JdbcSavepoint {

      /**
       * For documentation of this method, see java.sql.Savepoint#getSavepointId().
       *
       * Return:
       * - Integer — The numeric ID of this savepoint.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-savepoint#getSavepointId()
       */
      getSavepointId(): Integer;

      /**
       * For documentation of this method, see java.sql.Savepoint#getSavepointName().
       *
       * Return:
       * - String — The name of this savepoint.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-savepoint#getSavepointName()
       */
      getSavepointName(): string;
    }
    /**
     * A JDBC Statement. For documentation of this class, see java.sql.Statement
     * .
     */
    interface JdbcStatement {

      /**
       * For documentation of this method, see java.sql.Statement#addBatch(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see java.sql.Statement#cancel().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearBatch().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see java.sql.Statement#clearWarnings().
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see java.sql.Statement#close().
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, int).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#execute(String, int[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#execute(String, String[]).
       *
       * Return:
       * - Boolean — true if the first result is a result set; false if it is an update count or if there are no results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#executeBatch().
       *
       * Return:
       * - Integer[] — The update counts for each command in the batch, using the same order in which commands were added to the batch.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see java.sql.Statement#executeQuery(String).
       *
       * Return:
       * - JdbcResultSet — A result set containing the results of the execution. This is never null.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, int[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#executeUpdate(String, String[]).
       *
       * Return:
       * - Integer — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getConnection().
       *
       * Return:
       * - JdbcConnection — The connection that produced this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchDirection().
       *
       * Return:
       * - Integer — The default direction for result sets generated by this statement, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getFetchSize().
       *
       * Return:
       * - Integer — The default row fetch size for result sets generated from this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getGeneratedKeys().
       *
       * Return:
       * - JdbcResultSet — A result set containing the auto-generated keys generated by the execution of this statement.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxFieldSize().
       *
       * Return:
       * - Integer — The current column byte size limit for columns storing character and binary values; a value of zero indictates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getMaxRows().
       *
       * Return:
       * - Integer — The current maximum number of rows for a result set produced by this statement; a value of 0 indicates no limit.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults().
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#getMoreResults(int).
       *
       * Return:
       * - Boolean — true if the next result is a result set; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#getQueryTimeout().
       *
       * Return:
       * - Integer — The current query timeout in seconds; a value of zero indicates no timeout.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSet().
       *
       * Return:
       * - JdbcResultSet — The current result set, or null if the result is an update count or there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetConcurrency().
       *
       * Return:
       * - Integer — The result set concurrency for result sets generated from this statement, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetHoldability().
       *
       * Return:
       * - Integer — The result set holdability, which is either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getResultSetType().
       *
       * Return:
       * - Integer — The result set type for result sets generated from this statement, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getUpdateCount().
       *
       * Return:
       * - Integer — The current result as an update count, or -1 if the current result is a result set or if there are no more results.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see java.sql.Statement#getWarnings().
       *
       * Return:
       * - String[] — The current set of warnings, or null if there are no warnings.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see java.sql.Statement#isClosed().
       *
       * Return:
       * - Boolean — true if this statement is closed; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#isPoolable().
       *
       * Return:
       * - Boolean — true if this statement is poolable; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see java.sql.Statement#setCursorName(String).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see java.sql.Statement#setEscapeProcessing(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchDirection(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setFetchSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxFieldSize(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setMaxRows(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see java.sql.Statement#setPoolable(boolean).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see java.sql.Statement#setQueryTimeout(int).
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/script.external_request
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setQueryTimeout(Integer)
       * @param seconds The new query timeout in seconds; a value of 0 indicates no timeout.
       */
      setQueryTimeout(seconds: Integer): void;
    }
    /**
     * A JDBC Struct. For documentation of this class, see java.sql.Struct
     * .
     */
    interface JdbcStruct {

      /**
       * For documentation of this method, see java.sql.Struct#getAttributes().
       *
       * Return:
       * - Object[] — The ordered attribute values of this structure.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-struct#getAttributes()
       */
      getAttributes(): any[];

      /**
       * For documentation of this method, see java.sql.Struct#getSQLTypeName().
       *
       * Return:
       * - String — The fully-qualified type name of the SQL structured type that this structure represents.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-struct#getSQLTypeName()
       */
      getSQLTypeName(): string;
    }
    /**
     * A JDBC Time. For documentation of this class, see java.sql.Time
     * .
     */
    interface JdbcTime {

      /**
       * For documentation of this method, see java.sql.Date#after(Date).
       *
       * Return:
       * - Boolean — true if and only if this time is strictly later than the time specified as a parameter; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#after(JdbcTime)
       * @param when A time to compare to.
       */
      after(when: JdbcTime): boolean;

      /**
       * For documentation of this method, see java.sql.Date#before(Date).
       *
       * Return:
       * - Boolean — true if and only if this time is strictly earlier than the time specified as a parameter; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#before(JdbcTime)
       * @param when A time to compare to.
       */
      before(when: JdbcTime): boolean;

      /**
       * For documentation of this method, see java.sql.Date#getHours().
       *
       * Return:
       * - Integer — The hour represented by this object; the value is a number (0 through 23) representing the hour within the day that contains or begins with the instant in time represented by this object, as interpreted in the local time zone.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getHours()
       */
      getHours(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getMinutes().
       *
       * Return:
       * - Integer — The minutes past the hour represented by this object, as interpreted in the local time zone. The value is a number between 0 through 59 inclusive.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getMinutes()
       */
      getMinutes(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getSeconds().
       *
       * Return:
       * - Integer — The seconds past the minute represented by this object, as interpreted in the local time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only possible for machines that take leap seconds into account.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getSeconds()
       */
      getSeconds(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getTime().
       *
       * Return:
       * - Integer — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#setHours(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setHours(Integer)
       * @param hours The hour to set; this object is updated to represent a point in time within the specified hour of the day, with the year, month, date, minute, and second the same as before, as interpreted in the local time zone.
       */
      setHours(hours: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setMinutes(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setMinutes(Integer)
       * @param minutes The minutes to set; this object is updated to represent a point in time within the specified minute of the hour, with the year, month, date, hour, and second the same as before, as interpreted in the local time zone.
       */
      setMinutes(minutes: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setSeconds(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setSeconds(Integer)
       * @param seconds The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone.
       */
      setSeconds(seconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.Time#setTime(long).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setTime(Integer)
       * @param milliseconds The time value to set. The value is milliseconds since January 1, 1970, 00:00:00 GMT, while a negative number is milliseconds before that time.
       */
      setTime(milliseconds: Integer): void;
    }
    /**
     * A JDBC Timestamp. For documentation of this class, see java.sql.Timestamp
     * .
     */
    interface JdbcTimestamp {

      /**
       * For documentation of this method, see java.sql.Timestamp#after(Timestamp).
       *
       * Return:
       * - Boolean — true if and only if this timestampe is strictly later than the timestamp specified as a parameter; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#after(JdbcTimestamp)
       * @param when A timestamp to compare to.
       */
      after(when: JdbcTimestamp): boolean;

      /**
       * For documentation of this method, see java.sql.Timestamp#before(Timestamp).
       *
       * Return:
       * - Boolean — true if and only if this timestamp is strictly earlier than the timestamp specified as a parameter; false otherwise.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#before(JdbcTimestamp)
       * @param when A timestamp to compare to.
       */
      before(when: JdbcTimestamp): boolean;

      /**
       * For documentation of this method, see java.sql.Date#getDate().
       *
       * Return:
       * - Integer — The day of the month represented by this timestamp. The value returned is between 1 and 31 representing the day of the month that contains or begins with the instant in time represented by this timestamp, as interpreted in the local time zone.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getDate()
       */
      getDate(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getHours().
       *
       * Return:
       * - Integer — The hour represented by this object; the value is a number (0 through 23) representing the hour within the day that contains or begins with the instant in time represented by this object, as interpreted in the local time zone.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getHours()
       */
      getHours(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getMinutes().
       *
       * Return:
       * - Integer — The minutes past the hour represented by this object, as interpreted in the local time zone. The value is a number between 0 through 59 inclusive.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getMinutes()
       */
      getMinutes(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getMonth().
       *
       * Return:
       * - Integer — The month that contains or begins with the instant in time represented by this timestamp. The value returned is between 0 and 11, with the value 0 representing January.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getMonth()
       */
      getMonth(): Integer;

      /**
       * For documentation of this method, see java.sql.Timestamp#getNanos().
       *
       * Return:
       * - Integer — This timestamp's fractional seconds value (nanoseconds).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getNanos()
       */
      getNanos(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getSeconds().
       *
       * Return:
       * - Integer — The seconds past the minute represented by this object, as interpreted in the local time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only possible for machines that take leap seconds into account.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getSeconds()
       */
      getSeconds(): Integer;

      /**
       * For documentation of this method, see java.sql.Timestamp#getTime().
       *
       * Return:
       * - Integer — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time object.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#getYear().
       *
       * Return:
       * - Integer — A value that is the result of subtracting 1900 from the year that contains or begins with the instant in time represented by this timestampe, as interpreted in the local time zone.
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getYear()
       */
      getYear(): Integer;

      /**
       * For documentation of this method, see java.sql.Date#setDate(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setDate(Integer)
       * @param date The day of month to set. This timestamp is updated to represent a point in time within the specified day of month, with the year, month, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days.
       */
      setDate(date: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setHours(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setHours(Integer)
       * @param hours The hour to set; this object is updated to represent a point in time within the specified hour of the day, with the year, month, date, minute, and second the same as before, as interpreted in the local time zone.
       */
      setHours(hours: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setMinutes(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setMinutes(Integer)
       * @param minutes The minutes to set; this object is updated to represent a point in time within the specified minute of the hour, with the year, month, date, hour, and second the same as before, as interpreted in the local time zone.
       */
      setMinutes(minutes: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setMonth(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setMonth(Integer)
       * @param month The month to set. This timestamp is updated to represent a point in time within the specified month, with the year, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was October 31, for example, and the month is set to June, then the new date is treated as if it were on July 1, because June has only 30 days.
       */
      setMonth(month: Integer): void;

      /**
       * For documentation of this method, see java.sql.Timestamp#setNanos(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setNanos(Integer)
       * @param nanoseconds The new fractional seconds value.
       */
      setNanos(nanoseconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setSeconds(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setSeconds(Integer)
       * @param seconds The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone.
       */
      setSeconds(seconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.Timestamp#setTime(long).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setTime(Integer)
       * @param milliseconds The time value to set. The value is milliseconds since January 1, 1970, 00:00:00 GMT.
       */
      setTime(milliseconds: Integer): void;

      /**
       * For documentation of this method, see java.sql.Date#setYear(int).
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setYear(Integer)
       * @param year The year value to set; the timestamp's year is set to this value plus 1900. This timestamp is updated to represent a point in time within the specified year, with the month, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was February 29, for example, and the year is set to a non-leap year, then the new date is treated as if it were on March 1.
       */
      setYear(year: Integer): void;
    }
  }
}

declare var Jdbc: GoogleAppsScript.JDBC.Jdbc;
